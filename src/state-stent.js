import { init } from './state.js'
import * as store from './store-stent.js'
import SvelteApp from './components/App-Stent.svelte'

init('Stent', store, SvelteApp)
