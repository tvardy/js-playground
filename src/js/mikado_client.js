import Mikado from 'mikado/dist/module/mikado'

import { LEVELS, Log } from './tools/Logger.js'

import { randomRange } from './utils/random.js'
import { constants, createStore, connect } from './mikado_common.js'

import ClientView from './components/mikado.client'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('The Client script started!')

const _state = {
  seeding: true,
  values: []
}

const app = {
  start (initialState) {
    this.view = Mikado(constants.APP_ROOT, ClientView)
    this.state = createStore(initialState)

    const mapState = () => {
      this.render()
    }

    const mapActions = () => ({
      toggle: () => this.toggle()
    })

    connect(mapState, mapActions)(this.view)

    this.step()
  },
  step () {
    if (this.state.seeding) {
      const time = randomRange(constants.NUMBERS.time.min, constants.NUMBERS.time.max)

      setTimeout(() => {
        this.addRandomValue()
        this.step()
      }, time)
    }
  },
  addRandomValue () {
    const value = randomRange(
      constants.NUMBERS.values.min,
      constants.NUMBERS.values.max
    )

    this.update(value)
  },
  update (value) {
    const first = this.state.values[0] || { value: -1 }
    let values = [
      {
        value,
        dir: first.value === value ? 'eql' : first.value < value ? 'up' : 'down'
      },
      ...this.state.values
    ]

    if (values.length > 10) {
      values = values.slice(0, 10)
    }

    this.state.values = values
  },
  toggle () {
    this.state.seeding = !this.state.seeding

    if (this.state.seeding) {
      this.step()
    }
  },
  render () {
    this.view.render(this.state)
  }
}

app.start(_state)
