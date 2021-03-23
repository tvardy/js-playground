/* global io */
import { LEVELS, Log } from './tools/Logger.js'
import { comp, html, render } from 'hypersimple'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

const state = { status: 'works' }

const view = comp(state => html`<pre>HyperSimple ${state.status}...</pre>`)

render(
  document.getElementById('hypersimple'),
  () => view(state)
)
