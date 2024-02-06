import { ahk } from '../helpers/ahk.js'

export const media = {
  next: () => {
    ahk('media-next')
  },
  prev: () => {
    ahk('media-prev')
  },
  playPause: () => {
    ahk('media-play-pause')
  }
}
