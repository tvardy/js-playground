import { LEVELS, Log } from './tools/Logger.js'
import App from './components/lz-test.svelte'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

const app = new App({
  target: document.getElementById('app'),
  props: {
    name: 'world'
  }
})

if (app) {
  Log.debug('Svelte working fine')
}

export default app
