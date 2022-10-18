import express, { type Express } from 'express'
import { MoviesController } from '@/controllers'
import MoviesRoutes from '@/movies.routes'
import { MoviesService, OMDbApiService } from '@/services'
import { ConnectDB } from '@/config'
import cors from 'cors'

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
  private readonly OMDbApiService: OMDbApiService

  constructor() {
    /** Services */

    this.moviesService = new MoviesService(ConnectDB)
    this.OMDbApiService = new OMDbApiService()

    /** Controllers */
    this.moviesController = new MoviesController(
      this.moviesService,
      this.OMDbApiService
    )

    /** Routers */
    this.moviesRoutes = new MoviesRoutes(this.moviesController)

    this.app = express()
    /** production | dev | error */
    this.port = process.env.PORT || process?.env?.NODE_PORT || ''
    this.managerStopperPath = '/api/v1'
    this.middleware()
    this.routes()
    this.handlerError()
  }

  middleware(): void {
    this.app.use(express.json())
    this.app.use(cors())
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
    console.log(`Server run as ${process.env.NODE_ENV} in port: ${this.port}`)
    this.app.listen(this.port)
  }

  getApp(): Express {
    return this.app
  }
}

export default Server
