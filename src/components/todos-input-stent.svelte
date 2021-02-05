<script>
  import { connect } from '../store-stent.js'

  const _ = undefined
  const _empty = ''

  let newTask = _empty
  let submit;

  function mapActions({ add }) {
    submit = () => {
      add(newTask)
      newTask = _empty
    }
  }

  connect(_, mapActions)
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
