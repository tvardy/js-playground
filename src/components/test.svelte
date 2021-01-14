<script>
  import Store from '../store.js'

  const { store, onStateChange } = Store

  let count = 0

  function handleClick() {
    store.increase()
  }

  onStateChange((state) => count = state.count)
</script>

<button on:click={handleClick}>
  Clicks: {count}
</button>

<style>
  button {
    color: purple;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }
</style>
