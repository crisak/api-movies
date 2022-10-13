import express, { type Express } from 'express'
import { MoviesController } from '@/controllers'
import MoviesRoutes from '@/movies.routes'
import { MoviesService } from '@/services'
import { ConnectDB } from '@/config'

class Server {
  private readonly app: Express
  private readonly port: string
  private readonly managerStopperPath: string

  /** Controllers */
  private readonly moviesController: MoviesController
  /** Routers */
  private readonly moviesRoutes: MoviesRoutes
  /** Services */
  private readonly moviesService: MoviesService

  constructor() {
    /** Services */

    this.moviesService = new MoviesService(ConnectDB)

    /** Controllers */
    this.moviesController = new MoviesController(this.moviesService)

    /** Routers */
    this.moviesRoutes = new MoviesRoutes(this.moviesController)

    this.app = express()
    this.port = process?.env?.NODE_PORT || ''
    this.managerStopperPath = '/api/v1'
    this.middleware()
    this.routes()
    this.handlerError()
  }

  middleware(): void {
    this.app.use(express.json())
  }

  routes(): void {
    this.app.use(
      this.managerStopperPath,
      this.moviesRoutes.getRoutes().bind(this.moviesRoutes)
    )
  }

  handlerError(): void {
    this.app.use((req, res) => {
      console.error(req)
      res.status(400).json({ message: 'Bad request' })
    })
  }

  listen(): void {
    console.log(`Server run in port: ${this.port}`)
    this.app.listen(this.port)
  }

  getApp(): Express {
    return this.app
  }
}

export default Server
