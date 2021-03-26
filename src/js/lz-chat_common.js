/* global io */
import lzw from 'lzwcompress'

export const constants = {
  URL: 'wss://node-ws-message-broker.herokuapp.com/',
  compress: {
    bits: 32,
    sep: ':'
  }
}

export const pack = (obj) => {
  return lzw
    .pack(JSON.stringify(obj))
    .map((n) => n.toString(constants.compress.bits))
    .join(constants.compress.sep)
}

export const unpack = (str) => {
  return JSON.parse(
    lzw.unpack(
      str.split(constants.compress.sep).map((s) => parseInt(s, constants.compress.bits))
    )
  )
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
