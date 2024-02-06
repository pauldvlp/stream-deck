import { extname } from 'node:path'

export const isFile = (pathname) => {
  const ext = extname(pathname).slice(1)
  return 'js,json,css,png'.includes(ext)
}
