import { MovieDto } from '@/dtos'
import { Request, Response } from 'express'

class MoviesController {
  getAll(req: Request, response: Response<MovieDto[]>): void {
    console.log(this)
    response.status(200).json([])
  }

  updateAll(req: Request, response: Response<MovieDto[]>): void {
    response.status(200).json([])
  }
}

export default MoviesController
