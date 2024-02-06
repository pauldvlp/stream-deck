import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

const initialOptions = {
  autoConnect: false,
  transports: ['websocket']
}

const intialState = {
  connected: false
}

export const useSocket = ({ url = null, options = initialOptions } = {}) => {
  const socket = useRef(url ? io(url, options) : io(options))
  const [state, setState] = useState(intialState)

  const handleConnect = () => {
    setState({ connected: socket.current.connected })
  }

  const handleDisconnect = () => {
    setState({ connected: socket.current.connected })
  }

  useEffect(() => {
    socket.current.on('connect', handleConnect)
    socket.current.on('disconnect', handleDisconnect)
  }, [])

  return { socket: socket.current, ...state }
}
