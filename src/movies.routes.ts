/* eslint-disable @typescript-eslint/no-misused-promises */

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
      .route(`/${this.resource}`)
      .put(this.moviesController.updateAll.bind(this.moviesController))
      .get(this.moviesController.getAll.bind(this.moviesController))

    return this.router
  }
}

export default MoviesRoutes
