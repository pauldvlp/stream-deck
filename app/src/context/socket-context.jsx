import React, { useEffect } from 'react'
import { useSocket } from '../hooks/useSocket'

export const SocketContext = React.createContext()

export const SocketProvider = ({ children }) => {
  const { socket, connected } = useSocket()

  useEffect(() => {
    socket.on('connect', () => {
      console.log('socket connected')
    })

    socket.connect()
  }, [])

  const value = { socket, connected }
  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
}
