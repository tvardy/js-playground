/* global app, io */
import { LEVELS, Log } from './tools/Logger.js'
import { render, html } from 'uhtml'

import state from './lz-chat_state.js'
import { constants } from './lz-chat_common.js'

import Login from './components/lz-u_login.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('LZ Chat AppRun started!')

app.render = render

const actions = {
  login (_, e) {
    e.preventDefault()

    const name = e.target.elements.user.value

    try {
      App.ws = io(constants.URL)

      App.ws.on('connect', () => {
        App.run('connected', name)
      })
    } catch (e) {
      Log.error('WS error:', e)

      return {
        ...state,
        status: 'error'
      }
    }
  },
  connected (_, name) {
    App.ws.on('message', (msg) => {
      App.run('message', msg)
    })

    return {
      ...state,
      user: {
        id: App.ws.id,
        name
      }
    }
  }
}

const view = (state) => html` ${!state.user.id ? Login : '[chat view]'} `

const App = app.start(document.getElementById('apprun'), state, view, actions)
