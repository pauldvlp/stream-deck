import { nircmd } from '../helpers/nircmd.js'

const defaultVolume = 655.35

export const audio = {
  increment: (value) => {
    nircmd(`changesysvolume ${defaultVolume * value}`)
  },
  decrement: (value) => {
    nircmd(`changesysvolume -${defaultVolume * value}`)
  },
  mute: () => {
    nircmd('mutesysvolume 1')
  },
  unmute: () => {
    nircmd('mutesysvolume 0')
  },
  toggleMute: () => {
    nircmd('mutesysvolume 2')
  }
}
