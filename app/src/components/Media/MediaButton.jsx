import { useContext } from 'react'
import { SocketContext } from '../../context/socket-context'
import { useModal } from '../../hooks/useModal'
import { Confirm } from '../Confirm/Confirm'
import { Modal } from '../Modal'
import './MediaButton.css'

export const MediaButton = ({ button }) => {
  const { socket } = useContext(SocketContext)
  const { visible, show, hide } = useModal()

  const { icon, requiresConfirmation, title, description, ...command } = button

  const handleClick = () => {
    if (requiresConfirmation) show()
    else socket.emit('command', command)
  }

  const handleConfirm = () => {
    socket.emit('command', command)
    hide()
  }

  return (
    <>
      <Modal visible={visible}>
        <Confirm
          title={title}
          description={description}
          onConfirm={handleConfirm}
          onCancel={hide}
        />
      </Modal>
      <button className="MediaButton shadow" onClick={handleClick}>
        <img src={`/icons/${icon || 'plus'}.png`} />
      </button>
    </>
  )
}
