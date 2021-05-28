/* global app */
import { html } from 'uhtml'

import Message from './lz-u_message'

const view = (status, user, messages) => html`
  <section class="box wide chat-box" data-status=${status}>
    ${messages.map((message) => Message(user.id, message))}
  </section>
  <form class="box wide message" onSubmit=${(e) => app.run('send', e)}>
    <input name="msg" placeholder="message box..." />
  </form>
`

export default view
