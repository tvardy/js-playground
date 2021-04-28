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
  l as me,
  m as te,
  o as v,
  p as j,
  s as ce,
  y as _e,
  z as de,
} from './chunk-A37PCSWK.js'
import { a as Re, b as he, c as be } from './chunk-3PD2PFOE.js'
import { d as Ee, g as je } from './chunk-SLFZ277Q.js'
var fe = () => URL.createObjectURL(new Blob()).split('/').pop()
function pe({ debug: e, init: t } = {}, ...i) {
  let d = ue
      .toString()
      .replace(/^\(debug\) => {/, `const debug = ${e ? 1 : 0};`)
      .replace(/^e=>{/, `const e=${e ? 1 : 0};`)
      .replace(/}$/, ''),
    h = URL.createObjectURL(new Blob([d], { type: 'text/javascript' }))
  ;(this.worker = new Worker(h)),
    URL.revokeObjectURL(h),
    (this.func = null),
    (this._cb = new Map()),
    (this.run = {}),
    (this.callFunction = (c, ...a) => {
      this.worker.postMessage(c), this.worker.postMessage(a)
    }),
    (this.define = (c, a) => {
      this.callFunction('define', c, a.toString()),
        (this.run[c] = (...u) =>
          new Promise((f, o) => {
            let n = `${c}:${fe()}`
            this._cb.set(n, { resolve: f, reject: o }), this.callFunction(n, ...u)
          }))
    }),
    this.worker.addEventListener('message', (c) => {
      if (!this.func) this.func = c.data
      else {
        let [a, ...u] = c.data,
          f = this._cb.get(this.func)
        a ? f.reject(a) : f.resolve(...u),
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
    function c() {
      ;(this.func = !1),
        (this.define = (u, f) => {
          let o = new Function('return ' + f)()
          this[u] = (n, s) => {
            self.postMessage(h(u, n))
            try {
              let l = o.apply(this, s)
              self.postMessage([, l])
            } catch (l) {
              self.postMessage([l])
            }
            this.func = !1
          }
        })
    }
    let a = new c()
    self.addEventListener('message', (u) => {
      if (a.func) {
        let f = a.func,
          [o, n] = d(f)
        if (
          ((a.func = !1),
          e &&
            console.debug(
              o === 'define' ? `Defining "${u.data[0]}"` : `Calling "${o}" (id: ${n})`
            ),
          a[o])
        ) {
          let s = o === 'define' && !n ? u.data : [n, u.data]
          a[o].apply(a, s)
        } else console.error(t, a[o])
      } else {
        a.func = u.data
        let [f] = d(u.data)
        a[f] || console.error(t, f)
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
    c = e[1].json + '',
    a,
    u,
    f = e[1]['10'] + '',
    o,
    n,
    s = e[3]['10'] + '',
    l,
    b,
    m = e[1]['32'] + '',
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
        (a = _(c)),
        (u = _(`
Zipped decimals string length: `)),
        (o = _(f)),
        (n = _(' (')),
        (l = _(s)),
        (b = _(` %)
Zipped 32-bit string length: `)),
        (L = _(m)),
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
        r(t, a),
        r(t, u),
        r(t, o),
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
        g & 2 && c !== (c = p[1].json + '') && j(a, c),
        g & 2 && f !== (f = p[1]['10'] + '') && j(o, f),
        g & 8 && s !== (s = p[3]['10'] + '') && j(l, s),
        g & 2 && m !== (m = p[1]['32'] + '') && j(L, m),
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
    c,
    a,
    u,
    f,
    o,
    n = e[4] && se(e),
    s = e[5] && ie(e)
  return {
    c() {
      ;(t = y('div')),
        (i = _(`How many records to create:
  `)),
        (d = y('span')),
        (h = _(e[2])),
        (c = N()),
        n && n.c(),
        (a = N()),
        s && s.c(),
        (u = me()),
        v(d, 'contenteditable', ''),
        e[2] === void 0 && ce(() => e[8].call(d)),
        v(t, 'class', 'lz-input')
    },
    m(l, b) {
      w(l, t, b),
        r(t, i),
        r(t, d),
        r(d, h),
        e[2] !== void 0 && (d.innerHTML = e[2]),
        w(l, c, b),
        n && n.m(l, b),
        w(l, a, b),
        s && s.m(l, b),
        w(l, u, b),
        f || ((o = [te(d, 'keydown', e[6]), te(d, 'input', e[8])]), (f = !0))
    },
    p(l, [b]) {
      b & 4 && j(h, l[2]),
        b & 4 && l[2] !== d.innerHTML && (d.innerHTML = l[2]),
        l[4]
          ? n || ((n = se(l)), n.c(), n.m(a.parentNode, a))
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
        l && k(c),
        n && n.d(l),
        l && k(a),
        s && s.d(l),
        l && k(u),
        (f = !1),
        ge(o)
    },
  }
}
function we(e, t, i) {
  let d,
    h,
    c = new ee({
      debug: !0,
      init: () => {
        importScripts('https://unpkg.com/faker@5.5.3/dist/faker.min.js')
        let { fake: m, datatype: L } = faker
        function U() {
          return {
            id: L.uuid(),
            firstName: m('{{name.firstName}}'),
            lastName: m('{{name.lastName}}'),
            avatarUrl: m('{{image.avatar}}'),
            email: m('{{internet.email}}'),
            phone: m('{{phone.phoneNumberFormat}}'),
            isPremium: L.boolean(),
            list: Array.from({ length: L.number({ min: 10, max: 15 }) }, S),
          }
        }
        function S() {
          return {
            id: L.uuid(),
            title: m('{{commerce.productName}}'),
            amount: L.number({ min: 10, max: 20 }),
            created: new Date(m('{{date.past}}')).toISOString(),
          }
        }
        self.generate = (E) => Array.from({ length: E }, U)
      },
    })
  c.define('generate', (m) => self.generate(m))
  function a(m) {
    !m.altKey && !m.ctrlKey && !m.metaKey && !m.shiftKey && i(7, (o = null)),
      m.which === 13 && (m.preventDefault(), u())
  }
  async function u() {
    i(2, (f = parseInt(f))),
      f > 0 && (i(7, (o = [])), i(7, (o = await c.run.generate(f))))
  }
  let f = 0,
    o = null,
    n = { json: null, jsonPretty: null, 10: null, 32: null },
    s = { json: null, 10: null, 32: null },
    l = { 10: null, 32: null }
  function b() {
    ;(f = this.innerHTML), i(2, f)
  }
  return (
    (e.$$.update = () => {
      if (e.$$.dirty & 128) {
        e: i(4, (d = Array.isArray(o) && !o.length))
      }
      if (e.$$.dirty & 128) {
        e: i(5, (h = Array.isArray(o) && o.length))
      }
      if (e.$$.dirty & 128) {
        e: i(0, (n.json = JSON.stringify(o)), n)
      }
      if (e.$$.dirty & 128) {
        e: i(0, (n.jsonPretty = JSON.stringify(o, null, 2)), n)
      }
      if (e.$$.dirty & 1) {
        e: i(0, (n['10'] = le.default.pack(n.json).join(he.compress.sep)), n)
      }
      if (e.$$.dirty & 128) {
        e: i(0, (n['32'] = be(o)), n)
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
    [n, s, f, l, d, h, a, o, b]
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
