import { a as f, b as r } from './chunk.V3EKYGLP.js'
import { a as h, b, c as x, d as v } from './chunk.VWSI4C3Y.js'
import './chunk.3RRQVPV5.js'
import './chunk.LYWHNSVE.js'
import './chunk.UAU2O4PE.js'
import { b as m } from './chunk.R5H7EMPM.js'
var i = r`
  <form class="box wide login" onSubmit=${(e) => app.run('login', e)}>
    <input name="user" placeholder="Your nickname" />
  </form>
`,
  a = i
var g = (e, o) => r`
  <div
    class="message"
    data-self=${o.user.id === e}
    data-user=${o.user.name}
  >
    ${o.msg}
  </div>
`,
  l = g
var d = (e, o) => r`
  <section class="box wide chat-box">
    ${o.map((t) => l(e.id, t))}
  </section>
  <form class="box wide message" onSubmit=${(t) => app.run('send', t)}>
    <input name="msg" placeholder="message box..." />
  </form>
`,
  u = d
m.debug('LZ Chat AppRun started!')
app.render = f
var c = document.getElementById('apprun'),
  L = {
    login(e, o) {
      o.preventDefault()
      let t = o.target.elements.user.value
      try {
        v().then((s) => {
          ;(n.sock = s),
            n.sock.on('message', (p) => {
              n.run('message', x(p))
            }),
            n.run('connected', { id: s.id, name: t })
        })
      } catch (s) {
        return m.error('WS error:', s), { ...e, status: 'error' }
      }
    },
    connected(e, o) {
      return m.debug('AppRun connected:', o), { ...e, user: o }
    },
    send(e, o) {
      o.preventDefault()
      let t = o.target.elements.msg.value,
        s = { user: e.user, msg: t }
      ;(o.target.elements.msg.value = ''),
        m.debug('AppRun send:', t),
        n.sock.emit('message', b(s)),
        n.run('message', s)
    },
    message(e, o) {
      return (
        m.debug('AppRun message:', o.user, o.msg),
        n.run('align'),
        { ...e, messages: e.messages.concat(o) }
      )
    },
    align() {
      let e = c.querySelector('.chat-box')
      setTimeout(() => {
        e.scrollTop < e.scrollHeight && (e.scrollTop = e.scrollHeight)
      }, 0)
    },
  },
  E = (e) => r`${e.user.id ? u(e.user, e.messages) : a}`,
  n = app.start(c, h, E, L)
//# sourceMappingURL=lz-chat_apprun.js.map
