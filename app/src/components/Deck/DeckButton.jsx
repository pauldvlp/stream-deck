import { useContext } from 'react'
import { SocketContext } from '../../context/socket-context'
import './DeckButton.css'

export const DeckButton = ({ button }) => {
  const { socket } = useContext(SocketContext)
  const { icon, ...command } = button

  const handleClick = () => {
    socket.emit('command', command)
  }

  return <button className="DeckButton shadow" onClick={handleClick}>
    <img src={`/icons/${icon || 'plus'}.png`} />
  </button>
}
