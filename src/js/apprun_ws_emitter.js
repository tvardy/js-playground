/* global app, io */
import { LEVELS, Log } from './tools/Logger.js'
import { randomRange } from './utils/random.js'

import { constants } from './apprun_ws_common.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('AppRun Client script started!')

const view = ({ status, sending }) => `
  <h1>Emitter Works!</h1>
  <h2>Status: ${status}</h2>
  <button onclick='app.run("toggle")'>${sending ? 'Pause' : 'Play'}</button>
  <p>See browser console if you want to trace the data being sent</p>
`

const update = {
  async init (state) {
    try {
      App.ws = io(constants.URL)

      Log.debug('WS connected')

      App.run('wait')

      return {
        ...state,
        status: 'connected'
      }
    } catch (e) {
      Log.error('WS error:', e)

      return {
        ...state,
        status: 'error'
      }
    }
  },
  wait (state) {
    if (state.sending) {
      const time = randomRange(constants.NUMBERS.time.min, constants.NUMBERS.time.max)

      setTimeout(() => App.run('sendValue'), time)
    }

    return state
  },
  sendValue (state) {
    const value = randomRange(
      constants.NUMBERS.values.min,
      constants.NUMBERS.values.max
    )

    Log.info('new value:', value)

    App.ws.emit('data', value)

    App.run('wait')

    return state
  },
  toggle (state) {
    const newState = {
      ...state,
      sending: !state.sending
    }

    if (newState.sending) {
      setTimeout(() => App.run('wait'), 0)
    }

    return newState
  }
}

const App = app.start(
  constants.APP_ROOT,
  { status: 'connecting', sending: true },
  view,
  update
)

App.run('init')
