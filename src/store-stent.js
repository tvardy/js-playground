import { Machine } from 'stent'
import { connect } from 'stent/lib/helpers'

import { _noop } from './utils/noop'

const defaultState = 'default'

const store = Machine.create(
  // initial state
  {
    name: defaultState,
    todos: [
      { id: '001', text: 'double click me!', done: false },
      { id: '002', text: 'I am, by default, DONE', done: true }
    ]
  },

  // transitions
  {
    [defaultState]: {
      toggle ({ state }, id) {
        return {
          ...state,
          todos: state.todos.map((item) => {
            if (item.id === id) {
              item.done = !item.done
            }
            return item
          })
        }
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
