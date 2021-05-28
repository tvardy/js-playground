/* global io */
export function wsConnect (url) {
  return new Promise((resolve, reject) => {
    const instance = new Socket(url)

    instance.on('connect', () => resolve(instance))
    instance.on('error', (err) => reject(err))
  })
}

class Socket {
  constructor (url) {
    this._io = io(url)
  }

  get id () {
    return this._io.id
  }

  on (...args) {
    this._io.on(...args)
  }

  emit (...args) {
    this._io.emit(...args)
  }
}
