export const formatTime = (date = Date.now()) => {
  const options = {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }
  return new Intl.DateTimeFormat('es-ES', options).format(date)
}
