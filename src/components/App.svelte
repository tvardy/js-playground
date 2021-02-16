<script>
  import TodosInput from './todos-input.svelte'
  import TodosList from './todos-list.svelte'
  import TodosFooter from './todos-footer.svelte'

  export let connect;
</script>

<TodosInput {connect} />
<TodosList {connect} />
<TodosFooter {connect} />
