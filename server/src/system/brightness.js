import { nircmd } from '../helpers/nircmd.js'

export const brightness = {
  increment: (value) => {
    nircmd(`changebrightness ${value}`)
  },
  decrement: (value) => {
    nircmd(`changebrightness -${value}`)
  }
}
