import { exec } from 'node:child_process'

export const nircmd = (command) => {
  exec(`cd bin && nircmd.exe ${command}`)
}
