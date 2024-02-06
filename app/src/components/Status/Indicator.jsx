import { useContext } from 'react'
import { SocketContext } from '../../context/socket-context'
import './Indicator.css'

export const Indicator = () => {
  const { connected } = useContext(SocketContext)

  return <div className={`Indicator ${connected && 'connected'}`}>
  </div>
}
