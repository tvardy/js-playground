import { init } from './state-common.js'
import * as store from './store.js'
import SvelteApp from './components/App.svelte'

init('Svelte stores', store, SvelteApp)
