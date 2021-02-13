<script>
  import { store } from '../store.js'

  let todos = []

  $: todos = $store.todos

  const handleToggle = (e) => store.toggle(e.target.dataset.id)
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
