/* global app */
import { LEVELS, Log } from './tools/Logger'
import { render, html } from 'uhtml'

import state from './lz-chat_state'
import { wsConnect } from './lz-chat_common'
import { pack, unpack } from './utils/lzip.js'

import Login from './components/lz-u_login'
import Chat from './components/lz-u_chat'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('LZ Chat AppRun started!')

app.render = render
const rootElem = document.getElementById('apprun')

const actions = {
  login (state, e) {
    e.preventDefault()

    const name = e.target.elements.user.value

    try {
      wsConnect().then((sock) => {
        App.sock = sock

        App.sock.on('message', (msg) => {
          App.run('message', unpack(msg))
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
    Log.debug('AppRun connected:', user)

    return {
      ...state,
      user
    }
  },
  send (state, e) {
    e.preventDefault()

    const msg = e.target.elements.msg.value
    const data = { user: state.user, msg }

    e.target.elements.msg.value = ''

    Log.debug('AppRun send:', msg)

    App.sock.emit('message', pack(data))
    App.run('message', data)
  },
  message (state, data) {
    Log.debug('AppRun message:', data.user, data.msg)

    App.run('align')

    return {
      ...state,
      messages: state.messages.concat(data)
    }
  },
  align () {
    const box = rootElem.querySelector('.chat-box')

    setTimeout(() => {
      if (box.scrollTop < box.scrollHeight) {
        box.scrollTop = box.scrollHeight
      }
    }, 0)
  }
}

const view = (state) =>
  html`${!state.user.id ? Login : Chat(state.user, state.messages)}`

const App = app.start(rootElem, state, view, actions)
