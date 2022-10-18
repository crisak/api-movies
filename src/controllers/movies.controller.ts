import { MovieDto, ErrorDto, ErrorResponseType } from '@/dtos'
import { MoviesService, OMDbApiService } from '@/services'
import { Request, Response } from 'express'

const isNumber = (numberStr: string | undefined): boolean => {
  if (!numberStr) {
    return false
  }
  if (Number(numberStr)) {
    return true
  }

  return false
}

class MoviesController {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly OMDbApiService: OMDbApiService
  ) {}

  private validateYearParams(req: Request): null | string {
    const { year } = req.query

    if (year && !isNumber(String(year))) {
      return null
    }

    const filterYear = year ? String(year) : '2020'

    return filterYear.slice(0, 4)
  }

  async getAll(
    req: Request,
    response: Response<MovieDto[] | ErrorResponseType>
  ): Promise<void> {
    try {
      const year = this.validateYearParams(req)

      if (year === null) {
        const message = 'Bad request'
        const error = 'Invalid query string'

        response.status(400).json(new ErrorDto({ message, error }))
        return
      }

      const result = await this.moviesService.getAll(year)
      response.status(200).json(result)
    } catch (error) {
      response.status(500).json(new ErrorDto({ error }))
    }
  }

  async updateAll(
    req: Request,
    response: Response<MovieDto[] | ErrorDto>
  ): Promise<void> {
    try {
      const year = this.validateYearParams(req)

      if (year === null) {
        const message = 'Bad request'
        const error = 'Invalid query string'

        response.status(400).json(new ErrorDto({ message, error }))
        return
      }

      const totalMovies: number = await this.OMDbApiService.getTotalItemsByYear(
        year
      )

      const byPage = 10
      let totalPages = totalMovies / byPage
      totalPages = Math.ceil(totalPages)

      const responseRequests = await Promise.allSettled(
        [...Array(totalPages)].map(
          async (v, index) =>
            await this.OMDbApiService.getByYear({
              year,
              page: index + 1
            })
        )
      )

      const errors = responseRequests.filter(
        ({ status }) => status === 'rejected'
      )

      if (errors.length) {
        const message = 'Server internal error'
        response.status(500).json(new ErrorDto({ message, error: errors }))
        return
      }

      const moviesConcat = responseRequests.reduce<MovieDto[]>((prev, req) => {
        if (req.status === 'rejected') {
          return prev
        }

        const movies = req.value

        if (!movies) {
          return prev
        }

        return [...prev, ...movies]
      }, [])

      const data = await this.moviesService.updateAll(moviesConcat)

      response.status(200).json(data)
    } catch (error) {
      response.status(500).json(new ErrorDto({ error }))
    }
  }
}

export default MoviesController
