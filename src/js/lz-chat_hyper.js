/* global io */
import { LEVELS, Log } from './tools/Logger.js'
import { comp, html, render } from 'hypersimple'

import state from './lz-chat_state.js'
import { constants } from './lz-chat_common.js'

import Login from './components/lz-h_login.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('LZ Chat HypeSimple started!')

let ws

const actions = {
  login (e) {
    e.preventDefault()

    const name = e.target.elements.user.value

    try {
      ws = io(constants.URL)

      ws.on('connect', () => {
        this.connected(name)
      })
    } catch (e) {
      Log.error('WS error:', e)

      model.status = 'error'
    }
  },
  connected (name) {
    ws.on('message', (msg) => {
      this.message(msg)
    })

    model.user = {
      id: ws.id,
      name
    }
  }
}

const model = { ...state, ...actions }

const view = comp(
  (props) => html` <div>${!props.user.id ? Login(props) : '[chat view]'}</div> `
)

render(document.getElementById('hypersimple'), () => view(model))
