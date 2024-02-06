import { readFileSync } from 'node:fs'
import path from 'node:path'
import { contentType } from '../helpers/content-type.js'
import { isFile } from '../helpers/is-file.js'

export const app = ({ url, method }, response) => {
  if (method === 'GET') {
    if (url === '/') {
      const index = readFileSync(path.join(process.cwd(), '/dist/index.html'))
      return response.writeHead(200).end(index)
    }

    if (isFile(url)) {
      const file = readFileSync(path.join(process.cwd(), '/dist', url))
      const headers = { 'Content-Type': contentType(url) }
      return response.writeHead(200, headers).end(file)
    }
  }

  response.end()
}
