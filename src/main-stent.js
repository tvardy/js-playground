import { LEVELS, Log } from './tools/Logger.js'
import { fetch } from './_globals.js'

import loader from 'uce-loader'
import { resolve, parse } from 'uce-template'
import * as StoreStent from './store-stent'

import SvelteAppStent from './components/App-Stent.svelte'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('Stent script started!')

// uce-template
resolve('../store-stent.js', StoreStent)

loader({
  container: document.querySelector('#stent .uce'),
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
const s = new SvelteAppStent({
  target: document.querySelector('#stent .svelte')
})

if (s) {
  Log.debug('Stent & Svelte working fine')
}
