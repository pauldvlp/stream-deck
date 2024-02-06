import { Indicator } from '../Status/Indicator'
import { FullScreen } from './FullScreen'
import './index.css'

export const Screen = ({ children }) => {
  return <main className="Screen">
    <Indicator />
    <FullScreen />
    {children}
  </main>
}
