/* global io */
import { pack, unpack } from 'lzwcompress'

export { pack, unpack }

export const constants = {
  URL: 'wss://node-ws-message-broker.herokuapp.com/'
}

export function wsConnect () {
  return new Promise((resolve, reject) => {
    const instance = new Socket(constants.URL)

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
