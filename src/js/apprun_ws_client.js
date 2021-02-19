import { app } from 'apprun/dist/apprun-html.esm.js'

import { LEVELS, Log } from './tools/Logger.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('AppRun Client script started!')

const APP_ROOT = document.querySelector('[data-app]')

const view = (state) => '<div>Client Works!</div>'
const state = {}

app.start(APP_ROOT, state, view)
