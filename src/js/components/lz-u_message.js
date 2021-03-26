import { html } from 'uhtml'

const view = (userId, message) => html`
  <div
    class="message"
    data-self=${message.user.id === userId}
    data-user=${message.user.name}
  >
    ${message.msg}
  </div>
`

export default view
