import { LEVELS, Log } from './tools/Logger.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('started!')
