import { LEVELS, Log } from './tools/Logger.js'
import { fetch } from './_globals.js'

import loader from 'uce-loader'
import { resolve, parse } from 'uce-template'
import * as StorePreach from './store-preach'

import ClickerPreach from './components/clicker-preach.svelte'

// VanillaJS
import './components/clicker-preach.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.ERROR
}

Log.debug('started!')

// uce-template
resolve('../store-preach.js', StorePreach)

loader({
  container: document.querySelector('#preach .uce'),
  known: new Set(['clicker-preach']),
  on (component) {
    if (this.known.has(component)) {
      fetch(`components/${component}.uce`)
        .then((body) => body.text())
        .then((definition) => {
          const parsed = parse(definition)
          Log.debug('just loaded', `<${component}>`, parsed)
          document.body.appendChild(parsed)
        })
    }
  }
})

// Svelte
const s = new ClickerPreach({
  target: document.querySelector('#preach .svelte')
})

if (s) {
  Log.debug('Svelte works fine', s)
}
