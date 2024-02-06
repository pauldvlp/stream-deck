import { useEffect, useState } from 'react'
import { MaximizeIcon, MinimizeIcon } from '../Icons/Icons'
import './FullScreen.css'

export const FullScreen = () => {
  const [fullScreen, setFullScreen] = useState(Boolean(document.fullscreenElement))

  const handleClick = () => {
    return fullScreen ? document.exitFullscreen() : document.body.requestFullscreen()
  }

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      setFullScreen(Boolean(document.fullscreenElement))
    })
  }, [])

  return <button className={`FullScreen shadow ${fullScreen && 'active'}`} onClick={handleClick}>
    {fullScreen ? <MinimizeIcon /> : <MaximizeIcon />}
  </button>
}
