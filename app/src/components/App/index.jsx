import { useEffect } from 'react'
import { CommandError } from '../Command/CommandError'
import { DeckButtons } from '../Deck/DeckButtons'
import { MediaButtons } from '../Media/MediaButtons'
import { Screen } from '../Screen'

const App = () => {
  useEffect(() => {
    if ('serviceWorker' in window.navigator) {
      window.navigator.serviceWorker.register('sw.js')
    }
  }, [])

  return (
    <>
      <CommandError />
      <Screen>
        <DeckButtons />
        <MediaButtons />
      </Screen>
    </>
  )
}

export default App
