import { LEVELS, Log } from './tools/Logger'
import { comp, html, render } from 'hypersimple'

import state from './lz-chat_state'
import { wsConnect } from './lz-chat_common'
import { pack, unpack } from './utils/lzip.js'

import Login from './components/lz-h_login'
import Chat from './components/lz-h_chat'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('LZ Chat HyperSimple started!')

const rootElem = document.getElementById('hypersimple')

const actions = {
  login (e) {
    e.preventDefault()

    const name = e.target.elements.user.value

    try {
      wsConnect().then((sock) => {
        this.sock = sock

        this.sock.on('message', (msg) => {
          this.message(unpack(msg))
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

    this.sock.emit('message', pack(data))
    this.message(data)
  },
  message (data) {
    Log.debug('HyperSimple message:', data.user, data.msg)

    model.messages = model.messages.concat(data)

    this.align()
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

const model = { ...state, ...actions }

const view = comp((props) => html`${!props.user.id ? Login(props) : Chat(props)}`)

render(rootElem, () => view(model))
