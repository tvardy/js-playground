import { b as h, c as r } from './chunk-YNYRRD5H.js'
import { a as v } from './chunk-3XMFSHIP.js'
import './chunk-D5WR2F3S.js'
import { c as x, d as L, e as b } from './chunk-3PD2PFOE.js'
import { a as m, g as a } from './chunk-SLFZ277Q.js'
var g = r`
  <form class="box wide login" onSubmit=${(e) => app.run('login', e)}>
    <input name="user" placeholder="Your nickname" />
  </form>
`,
  l = g
var d = (e, o) => r`
  <div
    class="message"
    data-self=${o.user.id === e}
    data-user=${o.user.name}
  >
    ${o.msg}
  </div>
`,
  u = d
var f = (e, o) => r`
  <section class="box wide chat-box">
    ${o.map((t) => u(e.id, t))}
  </section>
  <form class="box wide message" onSubmit=${(t) => app.run('send', t)}>
    <input name="msg" placeholder="message box..." />
  </form>
`,
  c = f
a.debug('LZ Chat AppRun started!')
app.render = h
var p = document.getElementById('apprun'),
  E = {
    login(e, o) {
      o.preventDefault()
      let t = o.target.elements.user.value
      try {
        b().then((s) => {
          ;(n.sock = s),
            n.sock.on('message', (i) => {
              n.run('message', L(i))
            }),
            n.run('connected', { id: s.id, name: t })
        })
      } catch (s) {
        return a.error('WS error:', s), m(m({}, e), { status: 'error' })
      }
    },
    connected(e, o) {
      return a.debug('AppRun connected:', o), m(m({}, e), { user: o })
    },
    send(e, o) {
      o.preventDefault()
      let t = o.target.elements.msg.value,
        s = { user: e.user, msg: t }
      ;(o.target.elements.msg.value = ''),
        a.debug('AppRun send:', t),
        n.sock.emit('message', x(s)),
        n.run('message', s)
    },
    message(e, o) {
      return (
        a.debug('AppRun message:', o.user, o.msg),
        n.run('align'),
        m(m({}, e), { messages: e.messages.concat(o) })
      )
    },
    align() {
      let e = p.querySelector('.chat-box')
      setTimeout(() => {
        e.scrollTop < e.scrollHeight && (e.scrollTop = e.scrollHeight)
      }, 0)
    },
  },
  w = (e) => r`${e.user.id ? c(e.user, e.messages) : l}`,
  n = app.start(p, v, w, E)
//# sourceMappingURL=lz-chat_apprun.js.map
