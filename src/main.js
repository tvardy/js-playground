import { LEVELS, Log } from './tools/Logger.js'
import SvelteTest from './components/test.svelte'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('started!')

const st = new SvelteTest({
  target: document.body
})

if (st) {
  Log.debug('Svelte works fine', st)
}
