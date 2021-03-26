import { LEVELS, Log } from './tools/Logger.js'
import { comp, html, render } from 'hypersimple'

import state from './lz-chat_state.js'
import { wsConnect } from './lz-chat_common.js'

import Login from './components/lz-h_login.js'
import Chat from './components/lz-h_chat.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('LZ Chat HyperSimple started!')

const actions = {
  login (e) {
    e.preventDefault()

    const name = e.target.elements.user.value

    try {
      wsConnect().then((sock) => {
        this.sock = sock

        this.sock.on('message', (msg) => {
          this.message(msg)
        })

        this.connected({ id: sock.id, name })
      })
    } catch (e) {
      Log.error('WS error:', e)

      model.status = 'error'
    }
  },
  connected (user) {
    Log.debug('HyperSimple connected:', user)

    model.user = user
  },
  send (e) {
    e.preventDefault()

    const msg = e.target.elements.msg.value
    const data = { user: this.user, msg }

    e.target.elements.msg.value = ''

    Log.debug('HyperSimple send:', msg)

    this.sock.emit('message', data)
    this.message(data)
  },
  message (data) {
    Log.debug('HyperSimple message:', data.user, data.msg)

    model.messages = model.messages.concat(data)
  }
}

const model = { ...state, ...actions }

const view = comp((props) => html`${!props.user.id ? Login(props) : Chat(props)}`)

render(document.getElementById('hypersimple'), () => view(model))
