<script>
  export let connect

  let todos = []
  let handleToggle = () => {}

  function mapState(state) {
    todos = state.todos
  }

  function mapActions({ toggle }) {
    handleToggle = (e) => toggle(e.target.dataset.id)
  }

  connect(mapState, mapActions)
</script>

<style scoped>
li.done {
  color: #999;
  text-decoration: line-through;
}
</style>

<ul>
  {#each todos as { id, text, done }}
		<li data-id={id} on:dblclick={handleToggle} class:done="{done}">{text}</li>
	{/each}
</ul>
