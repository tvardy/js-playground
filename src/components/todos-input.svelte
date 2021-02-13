<script>
  import { store } from '../store.js'

  const _empty = ''

  let newTask = _empty
  let submit = () => {
    store.add(newTask)
    newTask = _empty
  }
</script>

<style scoped>
input {
  width: 100%;
  padding: 0.5em;
  border: 1px solid #999;
}
</style>

<form on:submit|preventDefault={submit}>
  <input placeholder="Add new task..." bind:value={newTask}>
</form>
