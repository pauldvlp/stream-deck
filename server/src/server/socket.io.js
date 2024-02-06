import { Server as IO } from 'socket.io'
import { system } from '../system/index.js'

let io

const handleCommand = ({ scope, action, value }) => {
  try {
    system[scope][action](value)
  } catch (error) {
    io.emit('command-error', error.message)
  }
}

const handleConnection = (socket) => {
  console.log(`[io]: socket connected; id: ${socket.id}`)
  socket.on('command', handleCommand)
}

export function initIO (server) {
  io = new IO(server)
  io.on('connection', handleConnection)
}
