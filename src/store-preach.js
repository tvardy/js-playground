import Preach from 'preach'

import { _noop } from './utils/noop'

const preach = new Preach()

// initial state
const _state = {
  todos: [{ text: 'double click me!', done: false }]
}

// actions
const _actions = {
  actionName () {
    // console.log('?', this)
    // state.count = state.count + 1
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
