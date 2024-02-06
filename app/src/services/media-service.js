export const mediaService = {
  get: () => {
    return fetch('/data/media.json').then(response => response.json())
  }
}
