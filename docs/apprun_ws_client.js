import { a as i } from './chunk-WSAHAVHV.js'
import { a as t, e as l, g as a } from './chunk-SLFZ277Q.js'
var u = class extends Component {
  constructor() {
    super(...arguments)
    l(this, 'state', { value: 0 })
    l(this, 'view', ({ value: e, dir: o }) =>
      app.h(
        'div',
        { class: 'box middle', style: 'text-align: center' },
        o === 'up' ? '\u2191' : '',
        o === 'down' ? '\u2193' : '',
        o === null ? '= ' : '',
        e
      )
    )
    l(this, 'mounted', (e, o, p) => {
      let s = null
      return (
        e.value > p.value && (s = 'up'),
        e.value < p.value && (s = 'down'),
        t({ dir: s }, e)
      )
    })
  }
}
a.debug('AppRun Client script started!')
var c = ({ status: n, value: e }) =>
    app.h(
      app.Fragment,
      null,
      app.h('h1', null, 'Client Works!'),
      app.h('h2', null, 'Status: ', n),
      app.h(u, { value: e })
    ),
  d = {
    async init(n) {
      try {
        return (
          (r.ws = io(i.URL)),
          a.debug('WS connected'),
          r.ws.on('data', (e) => {
            r.run('update', e)
          }),
          t(t({}, n), { status: 'connected' })
        )
      } catch (e) {
        return a.error('WS error:', e), t(t({}, n), { status: 'error' })
      }
    },
    update(n, e) {
      return t(t({}, n), { value: e })
    },
  },
  r = app.start(i.APP_ROOT, { status: 'connecting', value: 0 }, c, d)
r.run('init')
//# sourceMappingURL=apprun_ws_client.js.map
