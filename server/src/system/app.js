import { exec } from 'node:child_process'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const apps = JSON.parse(readFileSync(path.join(process.cwd(), '/src/data/apps.json'), 'utf-8'))

export const app = {
  open: (name) => {
    const { path, file, lnk, command } = apps[name]

    if (command) {
      exec(command)
    } else if (lnk) {
      exec(`cd "${path || '.'}" && start "" "${file}"`)
    } else {
      exec(`cd "${path}" && ${file}`)
    }
  }
}
