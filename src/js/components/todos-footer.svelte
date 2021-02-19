<script>
  export let connect

  let todos = []
  let all = 0
  let done = 0

  $: all = todos.length
  $: done = todos.filter(el => el.done).length

  function mapState(state) {
    todos = state.todos
  }

  connect(mapState)
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

<footer>
  Done: {done} / {all}
</footer>
