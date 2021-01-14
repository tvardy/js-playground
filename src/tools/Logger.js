import { console, localStorage } from '../_globals.js'

const CONFIG = {
  DEBUG: 1,
  INFO: 2,
  LOG: 3,
  WARN: 4,
  ERROR: 5,
  OFF: 10
}

export const LEVELS = Object.keys(CONFIG).reduce((o, key) => {
  o[key] = key
  return o
}, {})

export class Logger {
  constructor (key = 'debug') {
    this._key = key

    let debug = 'false'

    try {
      debug = localStorage.getItem(this._key) || 'false'
    } catch (e) {
      // it seems we should not care as fallback below if localStorage fail in some private mode or sth...
    }

    // we are forcing setter call
    this.logLevel = debug
  }

  get logLevel () {
    return this._logLevel
  }

  set logLevel (level) {
    const name = CONFIG[level] ? level : 'OFF'
    const value = CONFIG[name]

    this._logLevel = {
      name,
      value
    }
  }

  debug () {
    if (this.logLevel.value <= CONFIG.DEBUG) {
      console.debug(LEVELS.DEBUG, '::', ...arguments)
    }
  }

  info () {
    if (this.logLevel.value <= CONFIG.INFO) {
      console.info(LEVELS.INFO, '::', ...arguments)
    }
  }

  log () {
    if (this.logLevel.value <= CONFIG.LOG) {
      console.log(LEVELS.LOG, '::', ...arguments)
    }
  }

  warn () {
    if (this.logLevel.value <= CONFIG.WARN) {
      console.warn(LEVELS.WARN, '::', ...arguments)
    }
  }

  error () {
    if (this.logLevel.value <= CONFIG.ERROR) {
      console.error(LEVELS.ERROR, '::', ...arguments)
    }
  }
}

export const Log = new Logger()
