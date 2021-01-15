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

const state = new Proxy(_state, StateHandler)
const actions = Object.keys(_actions).reduce((res, key) => {
  res[key] = (...args) => _actions[key](...args)
  return res
}, {})

export const connect = (mapState, mapActions) => {
  preach.sub('change', (s) => mapState(s))
  mapActions(actions)
  preach.pub('change', state)
}
