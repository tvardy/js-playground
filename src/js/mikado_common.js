import Preach from 'preach'

import { _noop } from './utils/noop'

export const constants = {
  APP_ROOT: document.querySelector('[data-app]'),
  NUMBERS: {
    time: {
      min: 64,
      max: 128
    },
    values: {
      min: 0,
      max: 255
    }
  }
}

const preach = new Preach()
let state

export function createStore (initialState) {
  state = new Proxy(initialState, stateProxy)

  return state
}

export function connect (mapState = _noop, mapActions = _noop) {
  const actions = mapActions(state) || {}

  preach.sub('change', (s) => mapState(s))
  preach.pub('change', state)

  return (view) => {
    Object.keys(actions).forEach((name) => {
      view.route(name, actions[name])
    })
  }
}

const stateProxy = {
  set (obj, prop, value) {
    obj[prop] = value

    preach.pub('change', obj)

    return true
  }
}
