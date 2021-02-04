import { LEVELS, Log } from './tools/Logger.js'
import { fetch } from './_globals.js'

import loader from 'uce-loader'
import { resolve, parse } from 'uce-template'
import * as StorePreach from './store-preach'

import SvelteAppPreach from './components/App-Preach.svelte'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('Preach script started!')

// uce-template
resolve('../store-preach.js', StorePreach)

loader({
  container: document.querySelector('#preach .uce'),
  on (component) {
    fetch(`components/${component}.uce`)
      .then((body) => body.text())
      .then((definition) => {
        const parsed = parse(definition)
        Log.debug('Preach Loader just loaded', `<${component}>`, parsed)
        document.body.appendChild(parsed)
      })
  }
})

// Svelte
const s = new SvelteAppPreach({
  target: document.querySelector('#preach .svelte')
})

if (s) {
  Log.debug('Preach & Svelte working fine')
}
