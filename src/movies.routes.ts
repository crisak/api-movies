import { Router } from 'express'
import { MoviesController } from '@/controllers'

class MoviesRoutes {
  private readonly router: Router
  private readonly resource: string
  constructor(private readonly moviesController: MoviesController) {
    this.router = Router()
    this.resource = 'movies'
  }

  getRoutes(): Router {
    this.router
      .route(this.resource)
      .put(this.moviesController.updateAll)
      .get(this.moviesController.getAll)

    return this.router
  }
}

export default MoviesRoutes
