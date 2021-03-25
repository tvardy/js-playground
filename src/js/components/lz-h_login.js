import { comp, html } from 'hypersimple'

const view = comp(
  ({ login }) => html`
    <form class="box wide login" onSubmit=${login}>
      <input name="user" placeholder="Your nickname" />
    </form>
  `
)

export default view
