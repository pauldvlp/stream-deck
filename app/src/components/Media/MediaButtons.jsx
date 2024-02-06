import { useEffect, useState } from 'react'
import { mediaService as service } from '../../services/media-service'
import { MediaButton } from './MediaButton'
import './MediaButtons.css'

const mapButtonsFn = (button) => {
  return <MediaButton key={button.id} button={button} />
}

export const MediaButtons = () => {
  const [buttons, setButtons] = useState([])

  const loadButtons = async () => {
    const buttons = await service.get()
    setButtons(buttons)
  }

  useEffect(() => {
    loadButtons()
  }, [])

  return <section className="MediaButtons">
    {buttons.map(mapButtonsFn)}
  </section>
}
