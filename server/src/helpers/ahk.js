import { exec } from 'node:child_process'

export const ahk = (name) => {
  exec(`cd bin && ${name}.ahk`)
}
