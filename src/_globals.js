// We needed a global Promise polyfill, because the `whatwg-fetch` expects it
import 'promise-polyfill/dist/polyfill.min.js'
import 'whatwg-fetch'

import { getStorage } from './utils/storage.js'

/**
 * Note: `window` should only be used directly in cases where it can't be avoided,
 * such as getting and setting window.onerror / window.onunload
 */

const globals = (function () {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') return self // eslint-disable-line no-undef

  if (typeof global !== 'undefined') return global // eslint-disable-line no-undef

  if (typeof window !== 'undefined') return window // eslint-disable-line no-undef

  throw new Error('unable to locate global object')
})()

// prevent silent errors for globally exposed PubSub
// delete globals.PubSub; // TODO: uncomment this line when all global PubSub calls are rewritten

const [ls, ss] = getStorage(globals)

export const clearTimeout = globals.clearTimeout.bind(globals)
export const console = globals.console
export const document = globals.document
export const history = globals.history
export const Error = globals.Error
export const fetch = globals.fetch
export const navigator = globals.navigator
export const localStorage = ls
export const location = globals.location
export const JSON = globals.JSON
export const Promise = globals.Promise
export const setTimeout = globals.setTimeout.bind(globals)
export const sessionStorage = ss
export const window = globals.window

export default globals
