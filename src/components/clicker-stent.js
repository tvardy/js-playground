import { Log } from '../tools/Logger.js'
import Store from '../store-stent.js'

const { connect } = Store

const parent = document.getElementById('one')
const button = parent.querySelector('.main-click')
const display = parent.querySelector('.count')

let reaction

button.addEventListener('click', () => {
  Log.debug('First button clicked!')
  reaction()
})

function mapState ({ count }) {
  setDisplay(display, count)
}

function mapActions (actions) {
  reaction = actions.increase
}

connect(mapState, mapActions)

export function setDisplay (element, value) {
  element.innerHTML = value
}
