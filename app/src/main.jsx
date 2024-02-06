import ReactDOM from 'react-dom/client'
import App from './components/App'
import { SocketProvider } from './context/socket-context'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SocketProvider>
    <App />
  </SocketProvider>
)
