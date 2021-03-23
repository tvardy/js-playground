/* global app, io */
import { LEVELS, Log } from './tools/Logger.js'
import { render, html } from 'uhtml'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('LZ Chat AppRun started!')

app.render = render

const state = { status: 'works' }

const view = state => html`<pre>AppRun ${state.status}!</pre>`

app.start(
  document.getElementById('apprun'),
  state,
  view
)
