export const deckService = {
  get: () => {
    return fetch('/data/deck.json').then(response => response.json())
  }
}
