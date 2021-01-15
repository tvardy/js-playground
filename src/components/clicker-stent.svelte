<script>
  import Store from '../store-stent.js'
  const { connect } = Store

  let count
  let handleClick

  function mapState(state) {
    count = state.count
  }

  function mapActions(actions) {
    handleClick = actions.increase
  }

  connect(mapState, mapActions)
</script>

<button on:click={handleClick}>
  Clicks: {count}
</button>

<style>
  :global(body) {
    font-family: sans-serif;
  }

  :global(section) {
    max-width: 600px;
    margin: 1em;
    display: flex;
    justify-content: space-between;
    outline: 1px solid #ccc;
    padding: 1em;
  }

  :global(.box) {
    outline: 1px solid #999;
    padding: 1em;
  }

  button {
    color: purple;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }
</style>
