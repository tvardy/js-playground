import { Machine } from 'stent'
import { connect } from 'stent/lib/helpers'

const defaultState = 'default'

const store = Machine.create(
  // initial state
  {
    name: defaultState,
    count: 3
  },

  // transitions
  {
    [defaultState]: {
      increase: ({ state }) => {
        return { name: defaultState, count: state.count + 1 }
      }
    }
  }
)

const connectWrapper = (mapState, mapActions) => {
  connect()
    .with(store.name)
    .map((_store) => mapState(_store.state))
  mapActions(store)
}

export default {
  connect: connectWrapper
}
