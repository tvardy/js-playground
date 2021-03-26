/* global app */
import { html } from 'uhtml'

const view = (messages) => html`
  <section class="box wide chat-box">
    <pre>${JSON.stringify(messages, null, 2)}</pre>
  </section>
  <form class="box wide message" onSubmit=${(e) => app.run('send', e)}>
    <input name="msg" placeholder="message box..." />
  </form>
`

export default view
