import { Machine } from 'stent'
import { connect } from 'stent/lib/helpers'

import { _noop } from './utils/noop'

const defaultState = 'default'

const store = Machine.create(
  // initial state
  {
    name: defaultState,
    todos: [{ text: 'double click me!', done: false }]
  },

  // transitions
  {
    [defaultState]: {
      actionName () {
        // console.log('?', this)
        // return { name: defaultState, count: state.count + 1 }
      }
    }
  }
)

const connectWrapper = (mapState = _noop, mapActions = _noop) => {
  connect()
    .with(store.name)
    .map((_store) => mapState(_store.state))

  mapActions(store)
}

export { connectWrapper as connect }
