import { Log } from '../tools/Logger.js'
import { state, actions, onStateChange } from '../store-preach.js'
import { setDisplay } from './clicker-stent.js'

const parent = document.getElementById('two')
const button = parent.querySelector('.main-click')
const display = parent.querySelector('.count')

setDisplay(display, state.count)

button.addEventListener('click', () => {
  Log.debug('Second button clicked!')
  actions.increase()
})

onStateChange(({ count }) => setDisplay(display, count))
