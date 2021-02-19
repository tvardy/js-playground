import { init } from './state.js'
import * as store from './store-preach.js'
import SvelteApp from './components/App.svelte'

init('Preach', store, SvelteApp)
