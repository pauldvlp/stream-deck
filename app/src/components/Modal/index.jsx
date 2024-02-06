import { useEffect, useRef } from 'react'
import './index.css'

export const Modal = ({ visible, children }) => {
  const dialog = useRef(null)

  useEffect(() => {
    if (visible) {
      dialog.current?.showModal()
    } else {
      dialog.current?.close()
    }
  }, [visible])

  return <dialog className='modal' ref={dialog}>{children}</dialog>
}
