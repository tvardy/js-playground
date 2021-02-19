export function socket (url) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(url)

    socket.addEventListener('open', () => resolve(socket))
    socket.addEventListener('error', (err) => reject(err))
  })
}
