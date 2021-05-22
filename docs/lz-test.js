import {
  a as ne,
  b as ge,
  d as ye,
  e as r,
  f as w,
  g as k,
  i as y,
  j as _,
  k as N,
  l as ce,
  m as te,
  o as v,
  p as j,
  s as me,
  y as _e,
  z as de,
} from './chunk-A37PCSWK.js'
import { a as Re, b as he, c as be } from './chunk-AJ7XJ6D3.js'
import { d as Ee, g as je } from './chunk-SLFZ277Q.js'
var fe = () => URL.createObjectURL(new Blob()).split('/').pop()
function pe({ debug: e, init: t } = {}, ...i) {
  let d = ue
      .toString()
      .replace(/^\(?([a-z]+)\)?\s*=>\s*{/, (m, o) => `const ${o}=${e ? 1 : 0};`)
      .replace(/}$/, ''),
    h = URL.createObjectURL(new Blob([d], { type: 'text/javascript' }))
  ;(this.worker = new Worker(h)),
    URL.revokeObjectURL(h),
    (this.func = null),
    (this._cb = new Map()),
    (this.run = {}),
    (this.callFunction = (m, ...o) => {
      this.worker.postMessage(m), this.worker.postMessage(o)
    }),
    (this.define = (m, o) => {
      this.callFunction('define', m, o.toString()),
        (this.run[m] = (...u) =>
          new Promise((f, a) => {
            let n = `${m}:${fe()}`
            this._cb.set(n, { resolve: f, reject: a }), this.callFunction(n, ...u)
          }))
    }),
    this.worker.addEventListener('message', (m) => {
      if (!this.func) this.func = m.data
      else {
        let [o, ...u] = m.data,
          f = this._cb.get(this.func)
        o ? f.reject(o) : f.resolve(...u),
          this._cb.delete(this.func),
          (this.func = null)
      }
    }),
    t && (this.define('init', t), this.run.init(i))
}
var ee = pe,
  ue = (e) => {
    e && console.debug('SideWorker initialised.')
    let t = 'ERROR! FUNCTION NOT DEFINED!',
      i = ':',
      d = (u) => u.split(i),
      h = (...u) => u.join(i)
    function m() {
      ;(this.func = !1),
        (this.define = (u, f) => {
          let a = new Function('return ' + f)()
          this[u] = (n, s) => {
            self.postMessage(h(u, n))
            try {
              let l = a.apply(this, s)
              self.postMessage([, l])
            } catch (l) {
              self.postMessage([l])
            }
            this.func = !1
          }
        })
    }
    let o = new m()
    self.addEventListener('message', (u) => {
      if (o.func) {
        let f = o.func,
          [a, n] = d(f)
        if (
          ((o.func = !1),
          e &&
            console.debug(
              a === 'define' ? `Defining "${u.data[0]}"` : `Calling "${a}" (id: ${n})`
            ),
          o[a])
        ) {
          let s = a === 'define' && !n ? u.data : [n, u.data]
          o[a].apply(o, s)
        } else console.error(t, o[a])
      } else {
        o.func = u.data
        let [f] = d(u.data)
        o[f] || console.error(t, f)
      }
    })
  }
var le = Ee(Re())
function se(e) {
  let t
  return {
    c() {
      ;(t = y('pre')), (t.textContent = 'creating data...'), v(t, 'class', 'lz-result')
    },
    m(i, d) {
      w(i, t, d)
    },
    d(i) {
      i && k(t)
    },
  }
}
function ie(e) {
  let t,
    i,
    d,
    h,
    m = e[1].json + '',
    o,
    u,
    f = e[1]['10'] + '',
    a,
    n,
    s = e[3]['10'] + '',
    l,
    b,
    c = e[1]['32'] + '',
    L,
    U,
    S = e[3]['32'] + '',
    E,
    X,
    P,
    R,
    O,
    I,
    Y,
    W,
    A = e[0].jsonPretty + '',
    H,
    K,
    z,
    D,
    B,
    x,
    J,
    C = e[0][10] + '',
    Z,
    V,
    F,
    M,
    q,
    $,
    G,
    T = e[0]['32'] + '',
    Q
  return {
    c() {
      ;(t = y('pre')),
        (i = _('Number of records: ')),
        (d = _(e[2])),
        (h = _(`
JSON string length: `)),
        (o = _(m)),
        (u = _(`
Zipped decimals string length: `)),
        (a = _(f)),
        (n = _(' (')),
        (l = _(s)),
        (b = _(` %)
Zipped 32-bit string length: `)),
        (L = _(c)),
        (U = _(' (')),
        (E = _(S)),
        (X = _(' %)')),
        (P = N()),
        (R = y('div')),
        (O = y('details')),
        (I = y('summary')),
        (I.textContent = 'toggle JSON data'),
        (Y = N()),
        (W = y('pre')),
        (H = _(A)),
        (K = N()),
        (z = y('div')),
        (D = y('details')),
        (B = y('summary')),
        (B.textContent = 'toggle LZipped decimal data'),
        (x = N()),
        (J = y('pre')),
        (Z = _(C)),
        (V = N()),
        (F = y('div')),
        (M = y('details')),
        (q = y('summary')),
        (q.textContent = 'toggle LZipped 32-bit data'),
        ($ = N()),
        (G = y('pre')),
        (Q = _(T)),
        v(t, 'class', 'lz-result'),
        v(R, 'class', 'lz-data'),
        v(z, 'class', 'lz-data wrap'),
        v(F, 'class', 'lz-data wrap')
    },
    m(p, g) {
      w(p, t, g),
        r(t, i),
        r(t, d),
        r(t, h),
        r(t, o),
        r(t, u),
        r(t, a),
        r(t, n),
        r(t, l),
        r(t, b),
        r(t, L),
        r(t, U),
        r(t, E),
        r(t, X),
        w(p, P, g),
        w(p, R, g),
        r(R, O),
        r(O, I),
        r(O, Y),
        r(O, W),
        r(W, H),
        w(p, K, g),
        w(p, z, g),
        r(z, D),
        r(D, B),
        r(D, x),
        r(D, J),
        r(J, Z),
        w(p, V, g),
        w(p, F, g),
        r(F, M),
        r(M, q),
        r(M, $),
        r(M, G),
        r(G, Q)
    },
    p(p, g) {
      g & 4 && j(d, p[2]),
        g & 2 && m !== (m = p[1].json + '') && j(o, m),
        g & 2 && f !== (f = p[1]['10'] + '') && j(a, f),
        g & 8 && s !== (s = p[3]['10'] + '') && j(l, s),
        g & 2 && c !== (c = p[1]['32'] + '') && j(L, c),
        g & 8 && S !== (S = p[3]['32'] + '') && j(E, S),
        g & 1 && A !== (A = p[0].jsonPretty + '') && j(H, A),
        g & 1 && C !== (C = p[0][10] + '') && j(Z, C),
        g & 1 && T !== (T = p[0]['32'] + '') && j(Q, T)
    },
    d(p) {
      p && k(t), p && k(P), p && k(R), p && k(K), p && k(z), p && k(V), p && k(F)
    },
  }
}
function ke(e) {
  let t,
    i,
    d,
    h,
    m,
    o,
    u,
    f,
    a,
    n = e[4] && se(e),
    s = e[5] && ie(e)
  return {
    c() {
      ;(t = y('div')),
        (i = _(`How many records to create:
  `)),
        (d = y('span')),
        (h = _(e[2])),
        (m = N()),
        n && n.c(),
        (o = N()),
        s && s.c(),
        (u = ce()),
        v(d, 'contenteditable', ''),
        e[2] === void 0 && me(() => e[8].call(d)),
        v(t, 'class', 'lz-input')
    },
    m(l, b) {
      w(l, t, b),
        r(t, i),
        r(t, d),
        r(d, h),
        e[2] !== void 0 && (d.innerHTML = e[2]),
        w(l, m, b),
        n && n.m(l, b),
        w(l, o, b),
        s && s.m(l, b),
        w(l, u, b),
        f || ((a = [te(d, 'keydown', e[6]), te(d, 'input', e[8])]), (f = !0))
    },
    p(l, [b]) {
      b & 4 && j(h, l[2]),
        b & 4 && l[2] !== d.innerHTML && (d.innerHTML = l[2]),
        l[4]
          ? n || ((n = se(l)), n.c(), n.m(o.parentNode, o))
          : n && (n.d(1), (n = null)),
        l[5]
          ? s
            ? s.p(l, b)
            : ((s = ie(l)), s.c(), s.m(u.parentNode, u))
          : s && (s.d(1), (s = null))
    },
    i: ne,
    o: ne,
    d(l) {
      l && k(t),
        l && k(m),
        n && n.d(l),
        l && k(o),
        s && s.d(l),
        l && k(u),
        (f = !1),
        ge(a)
    },
  }
}
function we(e, t, i) {
  let d,
    h,
    m = new ee({
      debug: !0,
      init: () => {
        importScripts('https://unpkg.com/faker@5.5.3/dist/faker.min.js')
        let { fake: c, datatype: L } = faker
        function U() {
          return {
            id: L.uuid(),
            firstName: c('{{name.firstName}}'),
            lastName: c('{{name.lastName}}'),
            avatarUrl: c('{{image.avatar}}'),
            email: c('{{internet.email}}'),
            phone: c('{{phone.phoneNumberFormat}}'),
            isPremium: L.boolean(),
            list: Array.from({ length: L.number({ min: 10, max: 15 }) }, S),
          }
        }
        function S() {
          return {
            id: L.uuid(),
            title: c('{{commerce.productName}}'),
            amount: L.number({ min: 10, max: 20 }),
            created: new Date(c('{{date.past}}')).toISOString(),
          }
        }
        self.generate = (E) => Array.from({ length: E }, U)
      },
    })
  m.define('generate', (c) => self.generate(c))
  function o(c) {
    !c.altKey && !c.ctrlKey && !c.metaKey && !c.shiftKey && i(7, (a = null)),
      c.which === 13 && (c.preventDefault(), u())
  }
  async function u() {
    i(2, (f = parseInt(f))),
      f > 0 && (i(7, (a = [])), i(7, (a = await m.run.generate(f))))
  }
  let f = 0,
    a = null,
    n = { json: null, jsonPretty: null, 10: null, 32: null },
    s = { json: null, 10: null, 32: null },
    l = { 10: null, 32: null }
  function b() {
    ;(f = this.innerHTML), i(2, f)
  }
  return (
    (e.$$.update = () => {
      if (e.$$.dirty & 128) {
        e: i(4, (d = Array.isArray(a) && !a.length))
      }
      if (e.$$.dirty & 128) {
        e: i(5, (h = Array.isArray(a) && a.length))
      }
      if (e.$$.dirty & 128) {
        e: i(0, (n.json = JSON.stringify(a)), n)
      }
      if (e.$$.dirty & 128) {
        e: i(0, (n.jsonPretty = JSON.stringify(a, null, 2)), n)
      }
      if (e.$$.dirty & 1) {
        e: i(0, (n['10'] = le.default.pack(n.json).join(he.sep)), n)
      }
      if (e.$$.dirty & 128) {
        e: i(0, (n['32'] = be(a)), n)
      }
      if (e.$$.dirty & 1) {
        e: i(1, (s.json = n.json.length), s)
      }
      if (e.$$.dirty & 1) {
        e: i(1, (s['10'] = n['10'].length), s)
      }
      if (e.$$.dirty & 1) {
        e: i(1, (s['32'] = n['32'].length), s)
      }
      if (e.$$.dirty & 2) {
        e: i(3, (l['10'] = ((s['10'] / s.json) * 100).toFixed(2)), l)
      }
      if (e.$$.dirty & 2) {
        e: i(3, (l['32'] = ((s['32'] / s.json) * 100).toFixed(2)), l)
      }
    }),
    [n, s, f, l, d, h, o, a, b]
  )
}
var re = class extends de {
    constructor(t) {
      super()
      _e(this, t, we, ke, ye, {})
    }
  },
  oe = re
var ae = new oe({ target: document.getElementById('app'), props: { name: 'world' } })
ae && je.debug('Svelte working fine')
var Ue = ae
export { Ue as default }
//# sourceMappingURL=lz-test.js.map
