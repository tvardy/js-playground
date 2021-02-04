import Preach from 'preach'

import { _noop } from './utils/noop'

const preach = new Preach()

// initial state
const _state = {
  todos: [
    { id: '100', text: 'double click me!', done: false },
    { id: '200', text: 'I am, by default, DONE', done: true }
  ]
}

// actions
const _actions = {
  toggle (id) {
    state.todos = state.todos.map((item) => {
      if (item.id === id) {
        item.done = !item.done
      }
      return item
    })
  }
}

const StateHandler = {
  set (obj, prop, value) {
    obj[prop] = value

    preach.pub('change', obj)

    return true
  }
}

const state = new Proxy(_state, StateHandler)
const actions = Object.keys(_actions).reduce((res, key) => {
  res[key] = (...args) => _actions[key](...args)
  return res
}, {})

export function connect (mapState = _noop, mapActions = _noop) {
  mapActions(actions)

  preach.sub('change', (s) => mapState(s))
  preach.pub('change', state)
}
