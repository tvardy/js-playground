import { writable } from 'svelte/store'
import { nanoid as uuid } from 'nanoid'

import initialState from './store-initial-state'
import { _noop } from './utils/noop'

const _state = {
  ...initialState
}

function createStore () {
  const { subscribe, update } = writable(_state)

  return {
    subscribe,

    // actions
    toggle (id) {
      update((state) => ({
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === id) {
            item.done = !item.done
          }
          return item
        })
      }))
    },
    add (text) {
      update((state) => ({
        ...state,
        todos: [{ text, done: false, id: uuid() }, ...state.todos]
      }))
    }
  }
}

export const store = createStore()

export function connect (mapState = _noop, mapActions = _noop) {
  mapActions(store)

  store.subscribe(mapState)
}
