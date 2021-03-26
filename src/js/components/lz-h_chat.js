import { comp, html } from 'hypersimple'

const view = comp(
  ({ messages, send }) => html`
    <section class="box wide chat-box">
      <pre>${JSON.stringify(messages, null, 2)}<pre>
    </section>
    <form class="box wide message" onSubmit=${send}>
      <input name="msg" placeholder="message box..." />
    </form>
  `
)

export default view
