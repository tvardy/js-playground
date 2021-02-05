import Preach from 'preach'
import { v4 as uuid } from 'uuid'

import { _noop } from './utils/noop'

const preach = new Preach()

// initial state
const _state = {
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
  },
  add (text) {
    state.todos = [{ text, done: false, id: uuid() }, ...state.todos]
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
