import { a as r } from './chunk.EA7EXPSG.js'
import { b as o } from './chunk.R5H7EMPM.js'
function s(t, n) {
  return Math.round(Math.random() * (n - t)) + t
}
o.debug('AppRun Client script started!')
var a = ({ status: t, sending: n }) =>
    app.h(
      app.Fragment,
      null,
      app.h('h1', null, 'Emitter Works!'),
      app.h('h2', null, 'Status: ', t),
      app.h('button', { onclick: "app.run('toggle')" }, n ? 'Pause' : 'Play'),
      app.h('p', null, 'See browser console if you want to trace the data being sent')
    ),
  i = {
    async init(t) {
      try {
        return (
          (e.ws = io(r.URL)),
          o.debug('WS connected'),
          e.run('wait'),
          { ...t, status: 'connected' }
        )
      } catch (n) {
        return o.error('WS error:', n), { ...t, status: 'error' }
      }
    },
    wait(t) {
      if (t.sending) {
        let n = s(r.NUMBERS.time.min, r.NUMBERS.time.max)
        setTimeout(() => e.run('sendValue'), n)
      }
      return t
    },
    sendValue(t) {
      let n = s(r.NUMBERS.values.min, r.NUMBERS.values.max)
      return o.info('new value:', n), e.ws.emit('data', n), e.run('wait'), t
    },
    toggle(t) {
      let n = { ...t, sending: !t.sending }
      return n.sending && setTimeout(() => e.run('wait'), 0), n
    },
  },
  e = app.start(r.APP_ROOT, { status: 'connecting', sending: !0 }, a, i)
e.run('init')
//# sourceMappingURL=apprun_ws_emitter.js.map
