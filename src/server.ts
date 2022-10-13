import express, { type Response, type Express } from 'express'

class Server {
  private readonly app: Express
  private readonly port: string
  private readonly managerStopperPath: string

  constructor() {
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
    this.app.use(this.managerStopperPath)
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
