import { LEVELS, Log } from './tools/Logger.js'
import { fetch } from './_globals.js'

import loader from 'uce-loader'
import { parse } from 'uce-template/esm'

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
          Log.debug('loaded', `<${component}>`)
          document.body.appendChild(parse(definition))
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
