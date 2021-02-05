import { Machine } from 'stent'
import { connect } from 'stent/lib/helpers'
import { v4 as uuid } from 'uuid'

import { _noop } from './utils/noop'

const defaultState = 'default'

const store = Machine.create(
  // initial state
  {
    name: defaultState,
    todos: [
      {
        id: 'a176887e-6ed9-4bfd-807f-838c182a7b4f',
        text: 'double click me!',
        done: false
      },
      {
        id: 'bb98313c-acb3-4219-a087-0e17e7f94de2',
        text: 'I am, by default, DONE',
        done: true
      }
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
