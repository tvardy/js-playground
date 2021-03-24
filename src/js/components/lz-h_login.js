import { comp, html } from 'hypersimple'

const view = comp(({ login }) => html`
  <form class="box wide" onSubmit=${login}>
    <input name="user" placeholder="Username">
  </form>
`)

export default view
