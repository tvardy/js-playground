import { Machine } from 'stent'
import { connect } from 'stent/lib/helpers'
import { nanoid as uuid } from 'nanoid'

import initialState from './store-initial-state'
import { _noop } from './utils/noop'

const defaultState = 'default'

const store = Machine.create(
  // initial state
  {
    name: defaultState,
    ...initialState
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
      },
      add ({ state }, text) {
        return {
          ...state,
          todos: [{ text, done: false, id: uuid() }, ...state.todos]
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
