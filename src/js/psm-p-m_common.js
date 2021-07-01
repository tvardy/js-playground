import Preach from 'preach'

import { _noop } from './utils/noop'

export const constants = {
  URL: 'wss://node-ws-message-broker.herokuapp.com/',
  APP_ROOT: document.querySelector('[data-app]'),
  NUMBERS: {
    time: {
      min: 64,
      max: 256
    },
    values: {
      min: 0,
      max: 255
    }
  }
}

const preach = new Preach()

export function createStore (
  initialState,
  mapState = _noop,
  actions = {},
  mapActions = _noop
) {
  const store = new Proxy(initialState, stateProxy)

  mapActions(actions)
  preach.sub('change', (s) => mapState(s))
  preach.pub('change', store)

  return store
}

const stateProxy = {
  set (obj, prop, value) {
    obj[prop] = value

    preach.pub('change', obj)

    return true
  }
}
