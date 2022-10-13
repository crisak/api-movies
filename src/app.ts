import { config } from 'dotenv'
import Server from '@/server'
config()
const app = new Server()

app.listen()
