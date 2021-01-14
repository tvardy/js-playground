import { Machine } from 'stent'
import { connect } from 'stent/lib/helpers'
import { Log } from './tools/Logger'

const store = Machine.create(
  // initial state
  {
    name: 'idle',
    count: 0
  },

  // transitions
  {
    idle: {
      increase: ({ state }) => {
        return { name: 'idle', count: state.count + 1 }
      }
    }
  }
)

const onStateChange = (fn) => {
  connect()
    .with(store.name)
    .mapSilent(({ state }) => {
      Log.debug('the state has changed!', state)
      fn(state)
    })
}

export default {
  store,
  onStateChange
}
