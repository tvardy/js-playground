import { LEVELS, Log } from './tools/Logger.js'
import { fetch } from './_globals.js'

import loader from 'uce-loader'
import { resolve, parse } from 'uce-template'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

export function init (name, store, SvelteApp) {
  Log.debug(`${name} script started!`)

  // uce-template
  resolve('../store.js', store)

  loader({
    container: document.querySelector('section .uce'),
    on (component) {
      fetch(`../components/${component}.uce`)
        .then((body) => body.text())
        .then((definition) => {
          const parsed = parse(definition)
          Log.debug(`${name} Loader just loaded <${component}>`, parsed)
          document.body.appendChild(parsed)
        })
    }
  })

  // Svelte
  const s = new SvelteApp({
    target: document.querySelector('section .svelte'),
    props: {
      connect: store.connect
    }
  })

  if (s) {
    Log.debug(`${name} & Svelte working fine`)
  }
}
