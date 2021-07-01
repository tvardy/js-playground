import Mikado from 'mikado/dist/module/mikado'
import compile from 'mikado/dist/module/compile'
import { LEVELS, Log } from './tools/Logger.js'

import { randomRange } from './utils/random.js'
import { wsConnect } from './utils/wsConnect.js'
import { constants, createStore, connect } from './psm-p-m_common.js'

if (process.env.NODE_ENV === 'development') {
  Log.logLevel = LEVELS.DEBUG
}

Log.debug('The Data Emmiter script started!')

const template = compile(`
<div>
  <h1>Emitter Works!</h1>
  <h2>Status: {{ data.status }}</h2>
  <button click="toggle">{{ data.sending ? 'Pause' : 'Play' }}</button>
  <p>Current value: {{ data.value }}</p>
</div>
`)

const _state = {
  status: 'connecting',
  sending: true,
  value: null
}

const app = {
  async start (initialState) {
    this.view = Mikado(constants.APP_ROOT, template)
    this.state = createStore(initialState)

    const mapState = () => {
      this.render()
    }

    const mapActions = () => ({
      toggle: () => this.toggle()
    })

    connect(mapState, mapActions)(this.view)

    try {
      this.ws = await wsConnect(constants.URL)

      Log.debug('WS connected')

      this.state.status = 'connected'

      this.step()
    } catch (e) {
      Log.error('WS error:', e)

      this.state.status = 'error'
    }
  },
  step () {
    if (this.state.sending) {
      const time = randomRange(constants.NUMBERS.time.min, constants.NUMBERS.time.max)

      setTimeout(() => this.sendRandomValue(), time)
    }
  },
  sendRandomValue () {
    const value = randomRange(
      constants.NUMBERS.values.min,
      constants.NUMBERS.values.max
    )

    Log.info('new value:', value)

    this.state.value = value
    this.ws.emit('data', value)
    this.step()
  },
  toggle () {
    this.state.sending = !this.state.sending

    if (this.state.sending) {
      this.step()
    } else {
      Log.info('[PAUSED]')
    }
  },
  render () {
    this.view.render(this.state)
  }
}

app.start(_state)
