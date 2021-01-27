import { Log } from '../tools/Logger.js'
import { connect } from '../store-preach.js'
import { setDisplay } from './clicker-stent.js'

const parent = document.getElementById('preach')
const button = parent.querySelector('.main-click')
const display = parent.querySelector('.count')
let reaction

button.addEventListener('click', () => {
  Log.debug('Second button clicked!')
  reaction()
})

function mapState ({ count }) {
  setDisplay(display, count)
}

function mapActions (actions) {
  reaction = actions.increase
}

connect(mapState, mapActions)
