/* global Component */
export class SimpleComponent extends Component {
  state = {
    value: 0
  }

  view = ({ value, dir }) => (
    <div class="box middle" style="text-align: center">
      {dir === 'up' ? '↑' : ''}
      {dir === 'down' ? '↓' : ''}
      {dir === null ? '= ' : ''}
      {value}
    </div>
  )

  mounted = (props, children, state) => {
    let dir = null

    if (props.value > state.value) {
      dir = 'up'
    }

    if (props.value < state.value) {
      dir = 'down'
    }

    return { dir, ...props }
  }
}
