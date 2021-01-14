import { LEVELS, Log } from './tools/Logger.js'
import { fetch } from './_globals.js'

import loader from 'uce-loader'
import { parse } from 'uce-template'

import SvelteTest from './components/test.svelte'

import Store from './store.js'

const { store, onStateChange } = Store

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
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
const st = new SvelteTest({
  target: document.querySelector('.svelte')
})

if (st) {
  Log.debug('Svelte works fine', st)
}

// VanillaJS
const button = document.getElementById('main-click')
const display = document.getElementById('count')

setDisplay(store.state.count)

button.addEventListener('click', () => {
  Log.debug('Main button clicked!')
  store.increase()
})

onStateChange(({ count }) => setDisplay(count))

function setDisplay (value) {
  display.innerHTML = value
}
