import { LEVELS, Log } from './tools/Logger.js'
import { fetch } from './_globals.js'

import loader from 'uce-loader'
import { parse } from 'uce-template'

import ClickerStent from './components/clicker-stent.svelte'

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
const st = new ClickerStent({
  target: document.querySelector('#one .svelte')
})

if (st) {
  Log.debug('Svelte works fine', st)
}

// VanillaJS
const button1 = document.querySelector('#one .main-click')
const display1 = document.querySelector('#one .count')

setDisplay(display1, store.state.count)

button1.addEventListener('click', () => {
  Log.debug('Main button clicked!')
  store.increase()
})

onStateChange(({ count }) => setDisplay(display1, count))

function setDisplay (element, value) {
  element.innerHTML = value
}
