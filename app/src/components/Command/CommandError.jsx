import { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../../context/socket-context'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../Modal'
import { CommandCloseButton } from './CommandCloseButton'
import './CommandError.css'

export const CommandError = () => {
  const [error, setError] = useState(null)
  const { socket } = useContext(SocketContext)
  const { visible, show, hide } = useModal()

  const close = () => {
    hide()
    setError(null)
  }

  useEffect(() => {
    socket.on('command-error', (error) => {
      setError(error)
    })
  }, [])

  useEffect(() => {
    if (error) show()
  }, [error])

  return <Modal visible={visible}>
    <section className="CommandError shadow">
      <header>
        <h3>Error</h3>
        <CommandCloseButton close={close} />
      </header>
      <hr />
      <p>{error}</p>
    </section>
  </Modal>
}
