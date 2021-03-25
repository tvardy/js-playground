/* global app */
import { html } from 'uhtml'

const view = html`
  <form class="box wide login" onSubmit=${(e) => app.run('login', e)}>
    <input name="user" placeholder="Your nickname" />
  </form>
`

export default view
