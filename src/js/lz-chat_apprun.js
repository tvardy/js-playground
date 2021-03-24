/* global app, io */
import { LEVELS, Log } from './tools/Logger.js'
import { render, html } from 'uhtml'

import state from './lz-chat_state.js'

import Login from './components/lz-u_login.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('LZ Chat AppRun started!')

app.render = render

const actions = {
  login(e) {
    e.preventDefault()
    Log.debug('apprun login')
  }
}

const view = (state) => html`
  ${!state.user.id && Login(state)}
  ${state.user.id && html`<pre>[chat view]</pre>`}
`

app.start(
  document.getElementById('apprun'),
  { ...state, ...actions },
  view
)
