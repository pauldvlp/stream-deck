import { useState } from 'react'

export const useModal = (defaultVisible = false) => {
  const [visible, setVisible] = useState(defaultVisible)

  const show = () => setVisible(true)
  const hide = () => setVisible(false)

  return { visible, show, hide }
}
