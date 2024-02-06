import { useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { deckService as service } from '../../services/deck-service'
import { DeckButton } from './DeckButton'
import './DeckButtons.css'

const buttonsMapFn = (button) => {
  return <DeckButton key={button.id} button={button} />
}

export const DeckButtons = () => {
  const [buttons, setButtons] = useLocalStorage({ key: 'deck-buttons', initialValue: [] })

  const loadButtons = async () => {
    const buttons = await service.get()
    setButtons(buttons)
  }

  useEffect(() => {
    loadButtons()
  }, [])

  return <article className="DeckButtons">
    {buttons.map(buttonsMapFn)}
  </article>
}
