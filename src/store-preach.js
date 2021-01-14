import Preach from 'preach'

const preach = new Preach()

// initial state
const _state = {
  count: 42
}

// actions
const _actions = {
  increase () {
    state.count = state.count + 1
  }
}

const StateHandler = {
  set (obj, prop, value) {
    obj[prop] = value

    preach.pub('change', obj)

    return true
  }
}

export const state = new Proxy(_state, StateHandler)
export const actions = Object.keys(_actions).reduce((res, key) => {
  res[key] = (...args) => _actions[key](...args)
  return res
}, {})
export const onStateChange = (fn) => {
  preach.sub('change', (s) => fn(s))
}
