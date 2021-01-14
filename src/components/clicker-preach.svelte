<script>
  import { state, actions, onStateChange } from '../store-preach.js'

  let count = state.count

  function handleClick() {
    actions.increase()
  }

  onStateChange((state) => count = state.count)
</script>

<button on:click={handleClick}>
  Clicks: {count}
</button>

<style>
  button {
    color: magenta;
    font-family: "Comic Sans MS", cursive;
    font-size: 1.5em;
  }
</style>
