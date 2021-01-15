<script>
  import { connect } from '../store-preach.js'

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
  button {
    color: magenta;
    font-family: "Comic Sans MS", cursive;
    font-size: 1.5em;
  }
</style>
