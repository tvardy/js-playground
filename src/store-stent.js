import { Machine } from 'stent'
import { connect } from 'stent/lib/helpers'
import { Log } from './tools/Logger'

const defaultState = 'default'

const store = Machine.create(
  // initial state
  {
    name: defaultState,
    count: 3
  },

  // transitions
  {
    [defaultState]: {
      increase: ({ state }) => {
        return { name: defaultState, count: state.count + 1 }
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
