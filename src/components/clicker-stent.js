import { Log } from '../tools/Logger.js'
import Store from '../store-stent.js'

const { store, onStateChange } = Store

const parent = document.getElementById('one')
const button = parent.querySelector('.main-click')
const display = parent.querySelector('.count')

setDisplay(display, store.state.count)

button.addEventListener('click', () => {
  Log.debug('First button clicked!')
  store.increase()
})

onStateChange(({ count }) => setDisplay(display, count))

export function setDisplay (element, value) {
  element.innerHTML = value
}
