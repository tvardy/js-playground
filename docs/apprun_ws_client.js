import { a as p } from './chunk.EA7EXPSG.js'
import { a as m } from './chunk.UAU2O4PE.js'
import { b as l } from './chunk.R5H7EMPM.js'
var o = (t, e, n) => (
  typeof e != 'symbol' && (e += ''),
  e in t
    ? m(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n)
)
var u = class extends Component {
  constructor() {
    super(...arguments)
    o(this, 'state', { value: 0 })
    o(this, 'view', ({ value: e, dir: n }) =>
      app.h(
        'div',
        { class: 'box middle', style: 'text-align: center' },
        n === 'up' ? '\u2191' : '',
        n === 'down' ? '\u2193' : '',
        n === null ? '= ' : '',
        e
      )
    )
    o(this, 'mounted', (e, n, a) => {
      let s = null
      return (
        e.value > a.value && (s = 'up'),
        e.value < a.value && (s = 'down'),
        { dir: s, ...e }
      )
    })
  }
}
l.debug('AppRun Client script started!')
var i = ({ status: t, value: e }) =>
    app.h(
      app.Fragment,
      null,
      app.h('h1', null, 'Client Works!'),
      app.h('h2', null, 'Status: ', t),
      app.h(u, { value: e })
    ),
  c = {
    async init(t) {
      try {
        return (
          (r.ws = io(p.URL)),
          l.debug('WS connected'),
          r.ws.on('data', (e) => {
            r.run('update', e)
          }),
          { ...t, status: 'connected' }
        )
      } catch (e) {
        return l.error('WS error:', e), { ...t, status: 'error' }
      }
    },
    update(t, e) {
      return { ...t, value: e }
    },
  },
  r = app.start(p.APP_ROOT, { status: 'connecting', value: 0 }, i, c)
r.run('init')
//# sourceMappingURL=apprun_ws_client.js.map
