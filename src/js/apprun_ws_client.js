/* global io */
import { app } from 'apprun/dist/apprun-html.esm.js'

import { LEVELS, Log } from './tools/Logger.js'
import { constants } from './apprun_ws_common.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('AppRun Client script started!')

const view = ({ status, value }) => `
  <h1>Client Works!</h1>
  <h2>Status: ${status}</h2>
  <pre>${value}</pre>
`

const update = {
  async init (state) {
    try {
      App.ws = io(constants.URL)

      Log.debug('WS connected')

      App.ws.on('data', (data) => {
        App.run('update', data)
      })

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
  update (state, value) {
    return {
      ...state,
      value
    }
  }
}

const App = app.start(
  constants.APP_ROOT,
  { status: 'connecting', value: 0 },
  view,
  update
)

App.run('init')
