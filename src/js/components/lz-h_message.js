import { comp, html } from 'hypersimple'

const view = comp(
  ({ userId, message }) => html`
    <div
      class="message"
      data-self=${message.user.id === userId}
      data-user=${message.user.name}
    >
      ${message.msg}
    </div>
  `
)

export default view
