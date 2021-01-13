import { LEVELS, Log } from './tools/Logger.js'

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-line no-process-env
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('started!')
