<script>
  export let connect

  const _ = undefined
  const _empty = ''

  let newTask = _empty
  let submit

  function mapActions ({ add }) {
    submit = () => {
      add(newTask)
      newTask = _empty
    }
  }

  connect(_, mapActions)
</script>

<form on:submit|preventDefault={submit}>
  <input placeholder="Add new task..." bind:value={newTask} />
</form>

<style scoped>
  input {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #999;
    color: #ccc;
    background-color: transparent;
  }
</style>
