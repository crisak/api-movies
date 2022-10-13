import express, { type Response, type Express } from 'express'
import { MoviesController } from '@/controllers'
import MoviesRoutes from '@/movies.routes'

class Server {
  private readonly app: Express
  private readonly port: string
  private readonly managerStopperPath: string

  /** Controllers */
  private readonly moviesController: MoviesController
  /** Routers */
  private readonly moviesRoutes: MoviesRoutes

  constructor() {
    /** Controllers */
    this.moviesController = new MoviesController()

    /** Routers */
    this.moviesRoutes = new MoviesRoutes(this.moviesController)

    this.app = express()
    this.port = process?.env?.NODE_PORT || ''
    this.managerStopperPath = '/api/v1'
    this.middleware()
    this.handlerError()
    this.routes()
  }

  middleware(): void {
    this.app.use(express.json())
  }

  routes(): void {
    this.app.use(this.managerStopperPath, this.moviesRoutes.getRoutes)
  }

  handlerError(): void {
    this.app.use((err, req, res: any | Response) => {
      console.error(err)

      res.status(400).json({ message: 'Bad request' })
    })
  }

  listen(): void {
    this.app.listen(this.port)
  }
}

export default Server
