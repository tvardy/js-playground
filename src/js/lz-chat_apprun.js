/* global app */
import { LEVELS, Log } from './tools/Logger.js'
import { render, html } from 'uhtml'

import state from './lz-chat_state.js'
import { wsConnect } from './lz-chat_common.js'

import Login from './components/lz-u_login.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('LZ Chat AppRun started!')

app.render = render

const actions = {
  login (state, e) {
    e.preventDefault()

    const name = e.target.elements.user.value

    try {
      wsConnect().then((sock) => {
        sock.on('message', (msg) => {
          App.run('message', msg)
        })

        App.run('connected', { id: sock.id, name })
      })
    } catch (e) {
      Log.error('WS error:', e)

      return {
        ...state,
        status: 'error'
      }
    }
  },
  connected (state, user) {
    Log.debug('AppRun connected', user)

    return {
      ...state,
      user
    }
  }
}

const view = (state) => html` ${!state.user.id ? Login : '[chat view]'} `

const App = app.start(document.getElementById('apprun'), state, view, actions)
