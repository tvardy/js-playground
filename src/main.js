import { LEVELS, Log } from './tools/Logger.js'
import { fetch } from './_globals.js'

import loader from 'uce-loader'
import { parse } from 'uce-template'

import SvelteTest from './components/test.svelte'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('started!')

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

const st = new SvelteTest({
  target: document.querySelector('.svelte')
})

if (st) {
  Log.debug('Svelte works fine', st)
}
