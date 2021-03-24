/* global io */
import { LEVELS, Log } from './tools/Logger.js'
import { comp, html, render } from 'hypersimple'

import state from './lz-chat_state.js'

import Login from './components/lz-h_login.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('LZ Chat HypeSimple started!')

const actions = {
  login(e) {
    e.preventDefault()
    Log.debug('hypersimple login')
  }
}

const view = comp((state) => html`
  <div>
    ${!state.user.id && Login(state)}
    ${state.user.id && html`<pre>[chat view]</pre>`}
  </div>
`)

render(
  document.getElementById('hypersimple'),
  () => view({ ...state, ...actions })
)
