import { nircmd } from '../helpers/nircmd.js'

export const computer = {
  shutdown: (timeout = 0) => {
    nircmd(`initshutdown "Tu PC se apagará dentro de ${timeout} segundos" ${timeout}`)
  },
  reboot: (timeout = 0) => {
    nircmd(`initshutdown "Tu PC se reiniciará dentro de ${timeout} segundos" ${timeout} reboot`)
  },
  standby: () => {
    nircmd('standby')
  },
  abortShutdownOrReboot: () => {
    nircmd('abortshutdown')
  },
  emptybin: () => {
    nircmd('emptybin')
  },
  logoff: () => {
    nircmd('exitwin logoff')
  },
  lock: () => {
    nircmd('lockws')
  }
}
