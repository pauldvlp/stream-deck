import { extname } from 'node:path'

const contentTypesList = {
  json: 'application/json',
  js: 'text/javascript',
  css: 'text/css',
  png: 'image/png'
}

export const contentType = (pathname) => {
  const ext = extname(pathname).slice(1)
  return contentTypesList[ext]
}
