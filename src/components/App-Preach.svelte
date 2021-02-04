<script>
  import { connect } from '../store-preach.js'

  let todos = []
  let all = 0
  let done = 0

  $: all = todos.length
  $: done = todos.filter(el => el.done).length

  function mapState(state) {
    todos = state.todos
  }

  function mapActions(actions) {
  }

  connect(mapState, mapActions)
</script>

<style scoped>
footer {
  margin-top: 1em;
  padding-top: 1em;
  border-top: 1px solid #999;
  color: #999;
  font-size: 0.7em;
}
</style>

<input name="todo">
<ul>
</ul>
<footer>
Done: {done} / {all}
</footer>
