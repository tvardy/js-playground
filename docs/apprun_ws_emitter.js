import { a as r } from './chunk-WSAHAVHV.js'
import { a as o, g as s } from './chunk-SLFZ277Q.js'
function a(t, n) {
  return Math.round(Math.random() * (n - t)) + t
}
s.debug('AppRun Client script started!')
var i = ({ status: t, sending: n }) =>
    app.h(
      app.Fragment,
      null,
      app.h('h1', null, 'Emitter Works!'),
      app.h('h2', null, 'Status: ', t),
      app.h('button', { onclick: "app.run('toggle')" }, n ? 'Pause' : 'Play'),
      app.h('p', null, 'See browser console if you want to trace the data being sent')
    ),
  u = {
    async init(t) {
      try {
        return (
          (e.ws = io(r.URL)),
          s.debug('WS connected'),
          e.run('wait'),
          o(o({}, t), { status: 'connected' })
        )
      } catch (n) {
        return s.error('WS error:', n), o(o({}, t), { status: 'error' })
      }
    },
    wait(t) {
      if (t.sending) {
        let n = a(r.NUMBERS.time.min, r.NUMBERS.time.max)
        setTimeout(() => e.run('sendValue'), n)
      }
      return t
    },
    sendValue(t) {
      let n = a(r.NUMBERS.values.min, r.NUMBERS.values.max)
      return s.info('new value:', n), e.ws.emit('data', n), e.run('wait'), t
    },
    toggle(t) {
      let n = o(o({}, t), { sending: !t.sending })
      return n.sending && setTimeout(() => e.run('wait'), 0), n
    },
  },
  e = app.start(r.APP_ROOT, { status: 'connecting', sending: !0 }, i, u)
e.run('init')
//# sourceMappingURL=apprun_ws_emitter.js.map
