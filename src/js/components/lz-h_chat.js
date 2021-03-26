import { comp, html } from 'hypersimple'

import Message from './lz-h_message'

const view = comp(
  ({ user, messages, send }) => html`
    <section class="box wide chat-box">
      ${messages.map((message) => Message({ userId: user.id, message }))}
    </section>
    <form class="box wide message" onSubmit=${send}>
      <input name="msg" placeholder="message box..." />
    </form>
  `
)

export default view
