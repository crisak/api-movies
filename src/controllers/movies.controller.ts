import { MovieDto, ErrorDto, ErrorResponseType } from '@/dtos'
import { MoviesService } from '@/services'
import { Request, Response } from 'express'

const isNumber = (numberStr: string | undefined): boolean => {
  if (!numberStr) {
    return false
  }
  if (+numberStr) {
    return true
  }

  return false
}

class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  async getAll(
    req: Request,
    response: Response<MovieDto[] | ErrorResponseType>
  ): Promise<void> {
    try {
      const { year } = req.query

      if (year && !isNumber(String(year))) {
        const message = 'Bad request'
        const error = 'Invalid query string'

        response.status(400).json(new ErrorDto({ message, error }))
        return
      }

      const result = await this.moviesService.getAll(String(year))
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
      const moviesApi: MovieDto[] = []
      const result = await this.moviesService.updateAll(moviesApi)

      response.status(200).json(result)
    } catch (error) {
      response.status(500).json(new ErrorDto({ error }))
    }
  }
}

export default MoviesController
