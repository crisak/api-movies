import { MovieDto, ErrorDto } from '@/dtos'
import { MoviesService } from '@/services'
import { Request, Response } from 'express'

class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  async getAll(
    req: Request,
    response: Response<MovieDto[] | ErrorDto>
  ): Promise<void> {
    try {
      const { year } = req.query
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
      const result = await this.moviesService.getAll()

      response.status(200).json(result)
    } catch (error) {
      response.status(500).json(new ErrorDto({ error }))
    }
  }
}

export default MoviesController
