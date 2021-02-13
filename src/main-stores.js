import { LEVELS, Log } from './tools/Logger.js'
import { fetch } from './_globals.js'

import loader from 'uce-loader'
import { resolve, parse } from 'uce-template'
import * as store from './store'

import SvelteApp from './components/App.svelte'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('Stores script started!')

// uce-template
resolve('../store.js', store)

loader({
  container: document.querySelector('#stores .uce'),
  on (component) {
    fetch(`components/${component}.uce`)
      .then((body) => body.text())
      .then((definition) => {
        const parsed = parse(definition)
        Log.debug('Stent Loader just loaded', `<${component}>`, parsed)
        document.body.appendChild(parsed)
      })
  }
})

// Svelte
const s = new SvelteApp({
  target: document.querySelector('#stores .svelte')
})

if (s) {
  Log.debug('Svelte w/ Stores working fine')
}
