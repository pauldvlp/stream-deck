import { exec } from 'node:child_process'

export const internet = {
  website: (url) => {
    exec(`start ${url} >NUL 2>$1`)
  }
}
