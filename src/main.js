import { LEVELS, Log } from './tools/Logger.js'
import { fetch } from './_globals.js'

import loader from 'uce-loader'
import { parse } from 'uce-template'

import ClickerStent from './components/clicker-stent.svelte'
import ClickerPreach from './components/clicker-preach.svelte'

// VanillaJS
import './components/clicker-stent.js'
import './components/clicker-preach.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.ERROR
}

Log.debug('started!')

// uce-template
loader({
  on (component) {
    if (component !== 'uce-template') {
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
const st = [
  new ClickerStent({
    target: document.querySelector('#one .svelte')
  }),
  new ClickerPreach({
    target: document.querySelector('#two .svelte')
  })
]

if (st) {
  Log.debug('Svelte works fine', st)
}
