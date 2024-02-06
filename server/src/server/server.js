import http from 'node:http'
import { app } from '../controllers/app.js'
import { initIO } from './socket.io.js'

const PORT = 2116

export const server = http.createServer(app)

const handleListen = () => {
  console.clear()
  console.log(`[server]: server running on http://localhost:${PORT}`)
  initIO(server)
}

export function initServer () {
  server.listen(PORT, handleListen)
}
