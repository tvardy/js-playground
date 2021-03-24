import { html } from 'uhtml'

const view = (state) => html`
  <form class="box wide" onSubmit=${state.login}">
    <input name="user" placeholder="Username">
  </form>
`

export default view
