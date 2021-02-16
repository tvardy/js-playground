var lr = Object.defineProperty
var De = (t, e) => () => (e || ((e = { exports: {} }), t(e.exports, e)), e.exports),
  vs = (t, e) => {
    for (var n in e) lr(t, n, { get: e[n], enumerable: !0 })
  }
var se = De((Fs, jn) => {
  jn.exports = {}
})
var ie = De((Cs, Rn) => {
  Rn.exports = {}
})
var ce = De((Ls, Bn) => {
  Bn.exports = {}
})
function H() {}
function $n(t) {
  return t()
}
function En() {
  return Object.create(null)
}
function ht(t) {
  t.forEach($n)
}
function Ft(t) {
  return typeof t == 'function'
}
function nt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
function Fn(t) {
  return Object.keys(t).length === 0
}
var ys = typeof window != 'undefined'
var bs = new Set()
function X(t, e) {
  t.appendChild(e)
}
function J(t, e, n) {
  t.insertBefore(e, n || null)
}
function z(t) {
  t.parentNode.removeChild(t)
}
function kn(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}
function ot(t) {
  return document.createElement(t)
}
function rt(t) {
  return document.createTextNode(t)
}
function qe() {
  return rt(' ')
}
function kt(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o)
}
function Sn(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e)
  }
}
function K(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function ur(t) {
  return Array.from(t.childNodes)
}
function St(t, e) {
  ;(e = '' + e), t.wholeText !== e && (t.data = e)
}
function Re(t, e) {
  t.value = e == null ? '' : e
}
function Ie(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e)
}
var ws = new Set()
var Cn
function te(t) {
  Cn = t
}
var Ct = []
var On = [],
  ee = [],
  An = [],
  ar = Promise.resolve(),
  Pe = !1
function fr() {
  Pe || ((Pe = !0), ar.then(Ln))
}
function He(t) {
  ee.push(t)
}
var We = !1,
  Be = new Set()
function Ln() {
  if (!We) {
    We = !0
    do {
      for (let t = 0; t < Ct.length; t += 1) {
        let e = Ct[t]
        te(e), pr(e.$$)
      }
      for (te(null), Ct.length = 0; On.length; ) On.pop()()
      for (let t = 0; t < ee.length; t += 1) {
        let e = ee[t]
        Be.has(e) || (Be.add(e), e())
      }
      ee.length = 0
    } while (Ct.length)
    for (; An.length; ) An.pop()()
    ;(Pe = !1), (We = !1), Be.clear()
  }
}
function pr(t) {
  if (t.fragment !== null) {
    t.update(), ht(t.before_update)
    let e = t.dirty
    ;(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(He)
  }
}
var ne = new Set(),
  dr
function Ot(t, e) {
  t && t.i && (ne.delete(t), t.i(e))
}
function oe(t, e, n, o) {
  if (t && t.o) {
    if (ne.has(t)) return
    ne.add(t),
      dr.c.push(() => {
        ne.delete(t), o && (n && t.d(1), o())
      }),
      t.o(e)
  }
}
var xs =
  typeof window != 'undefined'
    ? window
    : typeof globalThis != 'undefined'
    ? globalThis
    : global
var $s = new Set([
  'allowfullscreen',
  'allowpaymentrequest',
  'async',
  'autofocus',
  'autoplay',
  'checked',
  'controls',
  'default',
  'defer',
  'disabled',
  'formnovalidate',
  'hidden',
  'ismap',
  'loop',
  'multiple',
  'muted',
  'nomodule',
  'novalidate',
  'open',
  'playsinline',
  'readonly',
  'required',
  'reversed',
  'selected',
])
function re(t) {
  t && t.c()
}
function At(t, e, n) {
  let { fragment: o, on_mount: s, on_destroy: r, after_update: c } = t.$$
  o && o.m(e, n),
    He(() => {
      let l = s.map($n).filter(Ft)
      r ? r.push(...l) : ht(l), (t.$$.on_mount = [])
    }),
    c.forEach(He)
}
function mt(t, e) {
  let n = t.$$
  n.fragment !== null &&
    (ht(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []))
}
function hr(t, e) {
  t.$$.dirty[0] === -1 && (Ct.push(t), fr(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function st(t, e, n, o, s, r, c = [-1]) {
  let l = Cn
  te(t)
  let i = (t.$$ = {
      fragment: null,
      ctx: null,
      props: r,
      update: H,
      not_equal: s,
      bound: En(),
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(l ? l.$$.context : []),
      callbacks: En(),
      dirty: c,
      skip_bound: !1,
    }),
    u = !1
  if (
    ((i.ctx = n
      ? n(t, e.props || {}, (f, p, ...d) => {
          let b = d.length ? d[0] : p
          return (
            i.ctx &&
              s(i.ctx[f], (i.ctx[f] = b)) &&
              (!i.skip_bound && i.bound[f] && i.bound[f](b), u && hr(t, f)),
            p
          )
        })
      : []),
    i.update(),
    (u = !0),
    ht(i.before_update),
    (i.fragment = o ? o(i.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      let f = ur(e.target)
      i.fragment && i.fragment.l(f), f.forEach(z)
    } else i.fragment && i.fragment.c()
    e.intro && Ot(t.$$.fragment), At(t, e.target, e.anchor), Ln()
  }
  te(l)
}
var mr
typeof HTMLElement == 'function' &&
  (mr = class extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
      for (let t in this.$$.slotted) this.appendChild(this.$$.slotted[t])
    }
    attributeChangedCallback(t, e, n) {
      this[t] = n
    }
    $destroy() {
      mt(this, 1), (this.$destroy = H)
    }
    $on(t, e) {
      let n = this.$$.callbacks[t] || (this.$$.callbacks[t] = [])
      return (
        n.push(e),
        () => {
          let o = n.indexOf(e)
          o !== -1 && n.splice(o, 1)
        }
      )
    }
    $set(t) {
      this.$$set &&
        !Fn(t) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1))
    }
  })
var Z = class {
  $destroy() {
    mt(this, 1), (this.$destroy = H)
  }
  $on(e, n) {
    let o = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
    return (
      o.push(n),
      () => {
        let s = o.indexOf(n)
        s !== -1 && o.splice(s, 1)
      }
    )
  }
  $set(e) {
    this.$$set &&
      !Fn(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
  }
}
var gr = /^(?:annotation-xml|color-profile|font-face(?:|-format|-name|-src|-uri)|missing-glyph)$/i,
  Mn = new Set(),
  Nn = (t) => {
    let e = t.container || document,
      n = (r) => {
        for (let c = 0, { length: l } = r; c < l; c++)
          for (let { addedNodes: i } = r[c], u = 0, { length: f } = i; u < f; u++) {
            let p = i[u],
              { children: d, getAttribute: b, tagName: x } = p
            if (b) {
              let E = (b.call(p, 'is') || x).toLowerCase()
              0 < E.indexOf('-') &&
                !Mn.has(E) &&
                !gr.test(E) &&
                (Mn.add(E), customElements.get(E) || t.on(E)),
                o(d)
            }
          }
      },
      o = (r) => {
        n([{ addedNodes: r }])
      }
    o([document == e ? e.documentElement : e])
    let s = new MutationObserver(n)
    return s.observe(e, { subtree: !0, childList: !0 }), s
  }
function vr(t) {
  let e, n, o, s
  return {
    c() {
      ;(e = ot('form')),
        (n = ot('input')),
        K(n, 'placeholder', 'Add new task...'),
        K(n, 'class', 'svelte-12biwcu')
    },
    m(r, c) {
      J(r, e, c),
        X(e, n),
        Re(n, t[0]),
        o ||
          ((s = [
            kt(n, 'input', t[3]),
            kt(
              e,
              'submit',
              Sn(function () {
                Ft(t[1]) && t[1].apply(this, arguments)
              })
            ),
          ]),
          (o = !0))
    },
    p(r, [c]) {
      ;(t = r), c & 1 && n.value !== t[0] && Re(n, t[0])
    },
    i: H,
    o: H,
    d(r) {
      r && z(e), (o = !1), ht(s)
    },
  }
}
var Tn = ''
function _r(t, e, n) {
  let { connect: o } = e,
    s = void 0,
    r = Tn,
    c
  function l({ add: u }) {
    n(
      1,
      (c = () => {
        u(r), n(0, (r = Tn))
      })
    )
  }
  o(s, l)
  function i() {
    ;(r = this.value), n(0, r)
  }
  return (
    (t.$$set = (u) => {
      'connect' in u && n(2, (o = u.connect))
    }),
    [r, c, o, i]
  )
}
var Dn = class extends Z {
    constructor(e) {
      super()
      st(this, e, _r, vr, nt, { connect: 2 })
    }
  },
  qn = Dn
se()
function In(t, e, n) {
  let o = t.slice()
  return (o[5] = e[n].id), (o[6] = e[n].text), (o[7] = e[n].done), o
}
function Pn(t) {
  let e,
    n = t[6] + '',
    o,
    s,
    r,
    c
  return {
    c() {
      ;(e = ot('li')),
        (o = rt(n)),
        K(e, 'data-id', (s = t[5])),
        K(e, 'class', 'svelte-corox1'),
        Ie(e, 'done', t[7])
    },
    m(l, i) {
      J(l, e, i),
        X(e, o),
        r ||
          ((c = kt(e, 'dblclick', function () {
            Ft(t[1]) && t[1].apply(this, arguments)
          })),
          (r = !0))
    },
    p(l, i) {
      ;(t = l),
        i & 1 && n !== (n = t[6] + '') && St(o, n),
        i & 1 && s !== (s = t[5]) && K(e, 'data-id', s),
        i & 1 && Ie(e, 'done', t[7])
    },
    d(l) {
      l && z(e), (r = !1), c()
    },
  }
}
function yr(t) {
  let e,
    n = t[0],
    o = []
  for (let s = 0; s < n.length; s += 1) o[s] = Pn(In(t, n, s))
  return {
    c() {
      e = ot('ul')
      for (let s = 0; s < o.length; s += 1) o[s].c()
    },
    m(s, r) {
      J(s, e, r)
      for (let c = 0; c < o.length; c += 1) o[c].m(e, null)
    },
    p(s, [r]) {
      if (r & 3) {
        n = s[0]
        let c
        for (c = 0; c < n.length; c += 1) {
          let l = In(s, n, c)
          o[c] ? o[c].p(l, r) : ((o[c] = Pn(l)), o[c].c(), o[c].m(e, null))
        }
        for (; c < o.length; c += 1) o[c].d(1)
        o.length = n.length
      }
    },
    i: H,
    o: H,
    d(s) {
      s && z(e), kn(o, s)
    },
  }
}
function br(t, e, n) {
  let { connect: o } = e,
    s = [],
    r = () => {}
  function c(i) {
    n(0, (s = i.todos))
  }
  function l({ toggle: i }) {
    n(1, (r = (u) => i(u.target.dataset.id)))
  }
  return (
    o(c, l),
    (t.$$set = (i) => {
      'connect' in i && n(2, (o = i.connect))
    }),
    [s, r, o]
  )
}
var Hn = class extends Z {
    constructor(e) {
      super()
      st(this, e, br, yr, nt, { connect: 2 })
    }
  },
  Wn = Hn
ie()
function wr(t) {
  let e, n, o, s, r
  return {
    c() {
      ;(e = ot('footer')),
        (n = rt('Done: ')),
        (o = rt(t[1])),
        (s = rt(' / ')),
        (r = rt(t[0])),
        K(e, 'class', 'svelte-1o8cxar')
    },
    m(c, l) {
      J(c, e, l), X(e, n), X(e, o), X(e, s), X(e, r)
    },
    p(c, [l]) {
      l & 2 && St(o, c[1]), l & 1 && St(r, c[0])
    },
    i: H,
    o: H,
    d(c) {
      c && z(e)
    },
  }
}
function xr(t, e, n) {
  let { connect: o } = e,
    s = [],
    r = 0,
    c = 0
  function l(i) {
    n(3, (s = i.todos))
  }
  return (
    o(l),
    (t.$$set = (i) => {
      'connect' in i && n(2, (o = i.connect))
    }),
    (t.$$.update = () => {
      if (t.$$.dirty & 8) {
        t: n(0, (r = s.length))
      }
      if (t.$$.dirty & 8) {
        t: n(1, (c = s.filter((i) => i.done).length))
      }
    }),
    [r, c, o, s]
  )
}
var zn = class extends Z {
    constructor(e) {
      super()
      st(this, e, xr, wr, nt, { connect: 2 })
    }
  },
  Un = zn
ce()
function $r(t) {
  let e, n, o, s, r, c
  return (
    (e = new qn({ props: { connect: t[0] } })),
    (o = new Wn({ props: { connect: t[0] } })),
    (r = new Un({ props: { connect: t[0] } })),
    {
      c() {
        re(e.$$.fragment), (n = qe()), re(o.$$.fragment), (s = qe()), re(r.$$.fragment)
      },
      m(l, i) {
        At(e, l, i), J(l, n, i), At(o, l, i), J(l, s, i), At(r, l, i), (c = !0)
      },
      p(l, [i]) {
        let u = {}
        i & 1 && (u.connect = l[0]), e.$set(u)
        let f = {}
        i & 1 && (f.connect = l[0]), o.$set(f)
        let p = {}
        i & 1 && (p.connect = l[0]), r.$set(p)
      },
      i(l) {
        c ||
          (Ot(e.$$.fragment, l), Ot(o.$$.fragment, l), Ot(r.$$.fragment, l), (c = !0))
      },
      o(l) {
        oe(e.$$.fragment, l), oe(o.$$.fragment, l), oe(r.$$.fragment, l), (c = !1)
      },
      d(l) {
        mt(e, l), l && z(n), mt(o, l), l && z(s), mt(r, l)
      },
    }
  )
}
function Er(t, e, n) {
  let { connect: o } = e
  return (
    (t.$$set = (s) => {
      'connect' in s && n(0, (o = s.connect))
    }),
    [o]
  )
}
var Gn = class extends Z {
    constructor(e) {
      super()
      st(this, e, Er, $r, nt, { connect: 0 })
    }
  },
  Is = Gn
var Lt = () => {}
function Jn() {
  return { length: 0, clear: Lt, getItem: Lt, key: Lt, setItem: Lt, removeItem: Lt }
}
function Yn(t) {
  try {
    if (!t.localStorage || !t.sessionStorage) throw 'no storage!'
    return (
      t.localStorage.setItem('storage_test', '1'),
      t.localStorage.removeItem('storage_test'),
      [t.localStorage, t.sessionStorage]
    )
  } catch (e) {
    let n = new Jn(),
      o = new Jn()
    return [n, o]
  }
}
var R = (function () {
    if (typeof self != 'undefined') return self
    if (typeof global != 'undefined') return global
    if (typeof Qn != 'undefined') return Qn
    throw new Fr('unable to locate global object')
  })(),
  [kr, Bs] = Yn(R),
  zs = R.clearTimeout.bind(R),
  gt = R.console,
  Us = R.document,
  Gs = R.history,
  Fr = R.Error,
  Xn = R.fetch,
  Js = R.navigator,
  Kn = kr,
  Ys = R.location,
  Qs = R.JSON,
  Xs = R.Promise,
  Ks = R.setTimeout.bind(R)
var Qn = R.window
var it = { DEBUG: 1, INFO: 2, LOG: 3, WARN: 4, ERROR: 5, OFF: 10 },
  Mt = Object.keys(it).reduce((t, e) => ((t[e] = e), t), {}),
  Zn = class {
    constructor(e = 'debug') {
      this._key = e
      let n = 'false'
      try {
        n = Kn.getItem(this._key) || 'false'
      } catch (o) {}
      this.logLevel = n
    }
    get logLevel() {
      return this._logLevel
    }
    set logLevel(e) {
      let n = it[e] ? e : 'OFF',
        o = it[n]
      this._logLevel = { name: n, value: o }
    }
    debug() {
      this.logLevel.value <= it.DEBUG && gt.debug(Mt.DEBUG, '::', ...arguments)
    }
    info() {
      this.logLevel.value <= it.INFO && gt.info(Mt.INFO, '::', ...arguments)
    }
    log() {
      this.logLevel.value <= it.LOG && gt.log(Mt.LOG, '::', ...arguments)
    }
    warn() {
      this.logLevel.value <= it.WARN && gt.warn(Mt.WARN, '::', ...arguments)
    }
    error() {
      this.logLevel.value <= it.ERROR && gt.error(Mt.ERROR, '::', ...arguments)
    }
  },
  le = new Zn()
;(function () {
  'use strict'
  var t =
      typeof Promise == 'function'
        ? Promise
        : function (w) {
            var a = [],
              h = 0,
              _
            return (
              w(function (y) {
                ;(_ = y), (h = 1), a.splice(0).forEach(m)
              }),
              { then: m }
            )
            function m(y) {
              return h ? setTimeout(y, 0, _) : a.push(y), this
            }
          },
    e = function (w, a) {
      var h = function (y) {
          for (var T = 0, A = y.length; T < A; T++) _(y[T])
        },
        _ = function (y) {
          var T = y.target,
            A = y.attributeName,
            et = y.oldValue
          T.attributeChangedCallback(A, et, T.getAttribute(A))
        }
      return function (m, y) {
        var T = m.constructor.observedAttributes
        return (
          T &&
            w(y).then(function () {
              new a(h).observe(m, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: T,
              })
              for (var A = 0, et = T.length; A < et; A++)
                m.hasAttribute(T[A]) &&
                  _({ target: m, attributeName: T[A], oldValue: null })
            }),
          m
        )
      }
    },
    n = self,
    o = n.document,
    s = n.MutationObserver,
    r = n.Set,
    c = n.WeakMap,
    l = function (a) {
      return 'querySelectorAll' in a
    },
    i = [].filter,
    u = function (w) {
      var a = new c(),
        h = function (q) {
          var I = w.query
          if (I.length)
            for (var G = 0, Et = q.length; G < Et; G++)
              y(i.call(q[G].addedNodes, l), !0, I),
                y(i.call(q[G].removedNodes, l), !1, I)
        },
        _ = function (q) {
          for (var I = 0, G = q.length; I < G; I++) a.delete(q[I])
        },
        m = function () {
          h(pt.takeRecords())
        },
        y = function lt(q, I, G) {
          for (
            var Et =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : new r(),
              nr = function (dt, P, rr, ms) {
                if (!Et.has((P = q[rr]))) {
                  if ((Et.add(P), I))
                    for (var Vt, sr = T(P), Te = 0, ir = G.length; Te < ir; Te++)
                      sr.call(P, (Vt = G[Te])) &&
                        (a.has(P) || a.set(P, new r()),
                        (dt = a.get(P)),
                        dt.has(Vt) || (dt.add(Vt), w.handle(P, I, Vt)))
                  else
                    a.has(P) &&
                      ((dt = a.get(P)),
                      a.delete(P),
                      dt.forEach(function (cr) {
                        w.handle(P, I, cr)
                      }))
                  lt(et(P), I, G, Et)
                }
                ;(wn = dt), (xn = P)
              },
              wn,
              xn,
              je = 0,
              or = q.length;
            je < or;
            je++
          )
            nr(wn, xn, je)
        },
        T = function (q) {
          return q.matches || q.webkitMatchesSelector || q.msMatchesSelector
        },
        A = function (q) {
          var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
          y(q, I, w.query)
        },
        et = function (q) {
          return $t.length ? q.querySelectorAll($t) : $t
        },
        pt = new s(h),
        xt = w.root || o,
        $t = w.query
      return (
        pt.observe(xt, { childList: !0, subtree: !0 }),
        A(et(xt)),
        { drop: _, flush: m, observer: pt, parse: A }
      )
    },
    f = self,
    p = f.document,
    d = f.Map,
    b = f.MutationObserver,
    x = f.Object,
    E = f.Set,
    D = f.WeakMap,
    $ = f.Element,
    F = f.HTMLElement,
    k = f.Node,
    O = f.Error,
    N = f.TypeError,
    j = f.Reflect,
    Q = self.Promise || t,
    v = x.defineProperty,
    L = x.keys,
    S = x.getOwnPropertyNames,
    g = x.setPrototypeOf,
    M = !self.customElements
  if (M) {
    var C = function () {
        var a = this.constructor
        if (!tt.has(a)) throw new N('Illegal constructor')
        var h = tt.get(a)
        if (Yt) return un(Yt, h)
        var _ = B.call(p, h)
        return un(g(_, a.prototype), h)
      },
      B = p.createElement,
      tt = new d(),
      ft = new d(),
      Jt = new d(),
      wt = new d(),
      ln = [],
      Bo = function (a, h, _) {
        var m = Jt.get(_)
        if (h && !m.isPrototypeOf(a)) {
          Yt = g(a, m)
          try {
            new m.constructor()
          } finally {
            Yt = null
          }
        }
        var y = ''.concat(h ? '' : 'dis', 'connectedCallback')
        y in m && a[y]()
      },
      zo = u({ query: ln, handle: Bo }),
      Uo = zo.parse,
      Yt = null,
      Oe = function (a) {
        if (!ft.has(a)) {
          var h,
            _ = new t(function (m) {
              h = m
            })
          ft.set(a, { $: _, _: h })
        }
        return ft.get(a).$
      },
      un = e(Oe, b)
    v(self, 'customElements', {
      configurable: !0,
      value: {
        define: function (a, h) {
          if (wt.has(a))
            throw new O(
              'the name "'.concat(a, '" has already been used with this registry')
            )
          tt.set(h, a),
            Jt.set(a, h.prototype),
            wt.set(a, h),
            ln.push(a),
            Oe(a).then(function () {
              Uo(p.querySelectorAll(a))
            }),
            ft.get(a)._(h)
        },
        get: function (a) {
          return wt.get(a)
        },
        whenDefined: Oe,
      },
    }),
      v((C.prototype = F.prototype), 'constructor', { value: C }),
      v(self, 'HTMLElement', { configurable: !0, value: C }),
      v(p, 'createElement', {
        configurable: !0,
        value: function (a, h) {
          var _ = h && h.is,
            m = _ ? wt.get(_) : wt.get(a)
          return m ? new m() : B.call(p, a)
        },
      }),
      'isConnected' in k.prototype ||
        v(k.prototype, 'isConnected', {
          configurable: !0,
          get: function () {
            return !(
              this.ownerDocument.compareDocumentPosition(this) &
              this.DOCUMENT_POSITION_DISCONNECTED
            )
          },
        })
  } else
    try {
      var an = function w() {
        return self.Reflect.construct(HTMLLIElement, [], w)
      }
      an.prototype = HTMLLIElement.prototype
      var fn = 'extends-li'
      self.customElements.define('extends-li', an, { extends: 'li' }),
        (M = p.createElement('li', { is: fn }).outerHTML.indexOf(fn) < 0)
      var pn = self.customElements,
        Go = pn.get,
        Jo = pn.whenDefined
      v(self.customElements, 'whenDefined', {
        configurable: !0,
        value: function (a) {
          var h = this
          return Jo.call(this, a).then(function (_) {
            return _ || Go.call(h, a)
          })
        },
      })
    } catch (w) {
      M = !M
    }
  if (M) {
    var dn = function (a) {
        var h = Ae.get(a),
          _ = h.parse,
          m = h.root
        _(m.querySelectorAll(this), a.isConnected)
      },
      ct = self.customElements,
      hn = $.prototype.attachShadow,
      mn = p.createElement,
      Yo = ct.define,
      Qo = ct.get,
      Xo = j || {
        construct: function (a) {
          return a.call(this)
        },
      },
      Ko = Xo.construct,
      Ae = new D(),
      Le = new E(),
      Qt = new d(),
      Xt = new d(),
      gn = new d(),
      Me = new d(),
      vn = [],
      Kt = [],
      _n = function (a) {
        return Me.get(a) || Qo.call(ct, a)
      },
      yn = function (a, h, _) {
        var m = gn.get(_)
        if (h && !m.isPrototypeOf(a)) {
          var y = L(a),
            T = y.map(function (xt) {
              var $t = a[xt]
              return delete a[xt], $t
            })
          Zt = g(a, m)
          try {
            new m.constructor()
          } finally {
            Zt = null
            for (var A = 0, et = y.length; A < et; A++) a[y[A]] = T[A]
          }
        }
        var pt = ''.concat(h ? '' : 'dis', 'connectedCallback')
        pt in m && a[pt]()
      },
      Zo = u({ query: Kt, handle: yn }),
      Vo = Zo.parse,
      tr = u({
        query: vn,
        handle: function (a, h) {
          Ae.has(a) && (h ? Le.add(a) : Le.delete(a), dn.call(Kt, a))
        },
      }),
      er = tr.parse,
      Ne = function (a) {
        if (!Xt.has(a)) {
          var h,
            _ = new Q(function (m) {
              h = m
            })
          Xt.set(a, { $: _, _: h })
        }
        return Xt.get(a).$
      },
      bn = e(Ne, b),
      Zt = null
    S(self)
      .filter(function (w) {
        return /^HTML/.test(w)
      })
      .forEach(function (w) {
        var a = self[w]
        function h() {
          var _ = this.constructor
          if (!Qt.has(_)) throw new N('Illegal constructor')
          var m = Qt.get(_),
            y = m.is,
            T = m.tag
          if (y) {
            if (Zt) return bn(Zt, y)
            var A = mn.call(p, T)
            return A.setAttribute('is', y), bn(g(A, _.prototype), y)
          } else return Ko.call(this, a, [], _)
        }
        v((h.prototype = a.prototype), 'constructor', { value: h }),
          v(self, w, { value: h })
      }),
      v(p, 'createElement', {
        configurable: !0,
        value: function (a, h) {
          var _ = h && h.is
          if (_) {
            var m = Me.get(_)
            if (m && Qt.get(m).tag === a) return new m()
          }
          var y = mn.call(p, a)
          return _ && y.setAttribute('is', _), y
        },
      }),
      hn &&
        v($.prototype, 'attachShadow', {
          configurable: !0,
          value: function () {
            var a = hn.apply(this, arguments),
              h = u({ query: Kt, root: a, handle: yn }),
              _ = h.parse
            return Ae.set(this, { root: a, parse: _ }), a
          },
        }),
      v(ct, 'get', { configurable: !0, value: _n }),
      v(ct, 'whenDefined', { configurable: !0, value: Ne }),
      v(ct, 'define', {
        configurable: !0,
        value: function (a, h, _) {
          if (_n(a))
            throw new O("'".concat(a, "' has already been defined as a custom element"))
          var m,
            y = _ && _.extends
          Qt.set(h, y ? { is: a, tag: y } : { is: '', tag: a }),
            y
              ? ((m = ''.concat(y, '[is="').concat(a, '"]')),
                gn.set(m, h.prototype),
                Me.set(a, h),
                Kt.push(m))
              : (Yo.apply(ct, arguments), vn.push((m = a))),
            Ne(a).then(function () {
              y
                ? (Vo(p.querySelectorAll(m)), Le.forEach(dn, [m]))
                : er(p.querySelectorAll(m))
            }),
            Xt.get(a)._(h)
        },
      })
  }
})()
var U =
  typeof Promise == 'function'
    ? Promise
    : function (t) {
        let e = [],
          n = 0,
          o
        return (
          t((r) => {
            ;(o = r), (n = 1), e.splice(0).forEach(s)
          }),
          { then: s }
        )
        function s(r) {
          return n ? setTimeout(r, 0, o) : e.push(r), this
        }
      }
var ue = null,
  ae = new Set(),
  Vn = (t) => {
    let { $: e, r: n, h: o } = t
    Nt(n) && (ut.get(o).delete(t), n()), Nt((t.r = e())) && ut.get(o).add(t)
  },
  Sr = () => {
    let t = ae
    ;(ae = new Set()),
      t.forEach(({ h: e, c: n, a: o, e: s }) => {
        s && e.apply(n, o)
      })
  },
  ut = new WeakMap(),
  jt = [],
  fe = []
function pe(t, e) {
  return t !== this[e]
}
var ze = (t) => {
    let e = ut.get(t)
    e &&
      de.then(() => {
        e.forEach((n) => {
          n.r(), (n.r = null)
        }),
          e.clear()
      })
  },
  Y = () => ue,
  Ue = (t) => ut.has(t),
  Nt = (t) => typeof t == 'function',
  Tt = (t) => {
    let e = { h: n, c: null, a: null, e: 0, i: 0, s: [] }
    return n
    function n() {
      let o = ue
      ;(ue = e), (e.e = e.i = 0)
      try {
        return t.apply((e.c = this), (e.a = arguments))
      } finally {
        ;(ue = o),
          jt.length && de.then(jt.forEach.bind(jt.splice(0), Vn)),
          fe.length && fe.splice(0).forEach(Vn)
      }
    }
  },
  to = (t) => {
    ae.has(t) || ((t.e = 1), ae.add(t), de.then(Sr))
  },
  de = new U((t) => t())
var Ge = (t) => ({ _: new Set(), provide: Cr, value: t }),
  Je = ({ _: t, value: e }) => (t.add(Y()), e)
function Cr(t) {
  let { _: e, value: n } = this
  n !== t &&
    ((this._ = new Set()),
    (this.value = t),
    e.forEach(({ h: o, c: s, a: r }) => {
      o.apply(s, r)
    }))
}
var Ye = (t, e) => he(() => t, e),
  he = (t, e) => {
    let n = Y(),
      { i: o, s } = n
    return (
      (o === s.length || !e || e.some(pe, s[o]._)) && (s[o] = { $: t(), _: e }),
      s[n.i++].$
    )
  }
var eo = (t) => (e, n) => {
    let o = Y(),
      { i: s, s: r, h: c } = o,
      l = s === r.length
    o.i++,
      l && (ut.has(c) || ut.set(c, new Set()), (r[s] = { $: e, _: n, r: null, h: c })),
      (l || !n || n.some(pe, r[s]._)) && t.push(r[s]),
      (r[s].$ = e),
      (r[s]._ = n)
  },
  Qe = eo(jt),
  Xe = eo(fe)
var no = (t, e) => (Nt(e) ? e(t) : e),
  me = (t, e, n) => {
    let o = Y(),
      { i: s, s: r } = o
    s === r.length &&
      r.push({
        $: Nt(n) ? n(e) : no(void 0, e),
        set: (i) => {
          ;(r[s].$ = t(r[s].$, i)), to(o)
        },
      })
    let { $: c, set: l } = r[o.i++]
    return [c, l]
  },
  Dt = (t) => me(no, t)
var Ke = (t) => {
  let e = Y(),
    { i: n, s: o } = e
  return n === o.length && o.push({ current: t }), o[e.i++]
}
var at = (t) => ({ get: (e) => t.get(e), set: (e, n) => (t.set(e, n), n) })
var oo = /([^\s\\>"'=]+)\s*=\s*(['"]?)$/,
  Or = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,
  Ar = /<[a-z][^>]+$/i,
  Lr = />[^<>]*$/,
  Mr = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,
  Nr = /\s+$/,
  ro = (t, e) => 0 < e-- && (Ar.test(t[e]) || (!Lr.test(t[e]) && ro(t, e))),
  jr = (t, e, n) => (Or.test(e) ? t : `<${e}${n.replace(Nr, '')}></${e}>`),
  so = (t, e, n) => {
    let o = [],
      { length: s } = t
    for (let c = 1; c < s; c++) {
      let l = t[c - 1]
      o.push(
        oo.test(l) && ro(t, c)
          ? l.replace(oo, (i, u, f) => `${e}${c - 1}=${f || '"'}${u}${f ? '' : '"'}`)
          : `${l}<!--${e}${c - 1}-->`
      )
    }
    o.push(t[s - 1])
    let r = o.join('').trim()
    return n ? r : r.replace(Mr, jr)
  }
var { isArray: vt } = Array,
  { indexOf: io, slice: ge } = []
var Tr = 1,
  co = 111,
  Dr = ({ firstChild: t, lastChild: e }) => {
    let n = document.createRange()
    return n.setStartAfter(t), n.setEndAfter(e), n.deleteContents(), t
  },
  lo = (t, e) =>
    t.nodeType === co
      ? 1 / e < 0
        ? e
          ? Dr(t)
          : t.lastChild
        : e
        ? t.valueOf()
        : t.firstChild
      : t,
  uo = (t) => {
    let { childNodes: e } = t,
      { length: n } = e
    if (n < 2) return n ? e[0] : t
    let o = ge.call(e, 0),
      s = o[0],
      r = o[n - 1]
    return {
      ELEMENT_NODE: Tr,
      nodeType: co,
      firstChild: s,
      lastChild: r,
      valueOf() {
        if (e.length !== n) {
          let c = 0
          for (; c < n; ) t.appendChild(o[c++])
        }
        return t
      },
    }
  }
var ao = (t, e, n, o, s) => {
  let r = n.length,
    c = e.length,
    l = r,
    i = 0,
    u = 0,
    f = null
  for (; i < c || u < l; )
    if (c === i) {
      let p = l < r ? (u ? o(n[u - 1], -0).nextSibling : o(n[l - u], 0)) : s
      for (; u < l; ) t.insertBefore(o(n[u++], 1), p)
    } else if (l === u)
      for (; i < c; ) (!f || !f.has(e[i])) && t.removeChild(o(e[i], -1)), i++
    else if (e[i] === n[u]) i++, u++
    else if (e[c - 1] === n[l - 1]) c--, l--
    else if (e[i] === n[l - 1] && n[u] === e[c - 1]) {
      let p = o(e[--c], -1).nextSibling
      t.insertBefore(o(n[u++], 1), o(e[i++], -1).nextSibling),
        t.insertBefore(o(n[--l], 1), p),
        (e[c] = n[l])
    } else {
      if (!f) {
        f = new Map()
        let p = u
        for (; p < l; ) f.set(n[p], p++)
      }
      if (f.has(e[i])) {
        let p = f.get(e[i])
        if (u < p && p < l) {
          let d = i,
            b = 1
          for (; ++d < c && d < l && f.get(e[d]) === p + b; ) b++
          if (b > p - u) {
            let x = o(e[i], 0)
            for (; u < p; ) t.insertBefore(o(n[u++], 1), x)
          } else t.replaceChild(o(n[u++], 1), o(e[i++], -1))
        } else i++
      } else t.removeChild(o(e[i++], -1))
    }
  return n
}
var fo = (t) => (e) => {
    for (let n in e) {
      let o = n === 'role' ? n : `aria-${n}`,
        s = e[n]
      s == null ? t.removeAttribute(o) : t.setAttribute(o, s)
    }
  },
  po = (t, e) => {
    let n,
      o = !0,
      s = document.createAttributeNS(null, e)
    return (r) => {
      n !== r &&
        ((n = r),
        n == null
          ? o || (t.removeAttributeNode(s), (o = !0))
          : ((s.value = r), o && (t.setAttributeNodeNS(s), (o = !1))))
    }
  },
  ho = ({ dataset: t }) => (e) => {
    for (let n in e) {
      let o = e[n]
      o == null ? delete t[n] : (t[n] = o)
    }
  },
  mo = (t, e) => {
    let n,
      o = e.slice(2)
    return (
      !(e in t) && e.toLowerCase() in t && (o = o.toLowerCase()),
      (s) => {
        let r = vt(s) ? s : [s, !1]
        n !== r[0] &&
          (n && t.removeEventListener(o, n, r[1]),
          (n = r[0]) && t.addEventListener(o, n, r[1]))
      }
    )
  },
  go = (t) => (e) => {
    typeof e == 'function' ? e(t) : (e.current = t)
  },
  vo = (t, e) => (n) => {
    t[e] = n
  },
  _o = (t) => {
    let e
    return (n) => {
      e != n && ((e = n), (t.textContent = n == null ? '' : n))
    }
  }
var qr = (function (t) {
    'use strict'
    var e = 'fragment',
      n = 'template',
      o = 'content' in c(n),
      s = o
        ? function (i) {
            var u = c(n)
            return (u.innerHTML = i), u.content
          }
        : function (i) {
            var u = c(e),
              f = c(n),
              p = null
            if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(i)) {
              var d = RegExp.$1
              ;(f.innerHTML = '<table>' + i + '</table>'), (p = f.querySelectorAll(d))
            } else (f.innerHTML = i), (p = f.childNodes)
            return r(u, p), u
          }
    return function (u, f) {
      return (f === 'svg' ? l : s)(u)
    }
    function r(i, u) {
      for (var f = u.length; f--; ) i.appendChild(u[0])
    }
    function c(i) {
      return i === e
        ? t.createDocumentFragment()
        : t.createElementNS('http://www.w3.org/1999/xhtml', i)
    }
    function l(i) {
      var u = c(e),
        f = c('div')
      return (
        (f.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + i + '</svg>'),
        r(u, f.firstChild.childNodes),
        u
      )
    }
  })(document),
  qt = qr
var yo = ({ childNodes: t }, e) => t[e],
  ve = (t) => {
    let e = [],
      { parentNode: n } = t
    for (; n; ) e.push(io.call(n.childNodes, t)), (t = n), (n = t.parentNode)
    return e
  },
  { createTreeWalker: bo, importNode: _e } = document
var wo = _e.length != 1,
  xo = wo ? (t, e, n) => _e.call(document, qt(t, e, n), !0) : qt,
  $o = wo
    ? (t) => bo.call(document, t, 1 | 128, null, !1)
    : (t) => bo.call(document, t, 1 | 128)
var Rt = (t, e, n) => ao(t.parentNode, e, n, lo, t),
  Rr = (t) => {
    let e,
      n,
      o = [],
      s = (r) => {
        switch (typeof r) {
          case 'string':
          case 'number':
          case 'boolean':
            e !== r &&
              ((e = r),
              n ? (n.textContent = r) : (n = document.createTextNode(r)),
              (o = Rt(t, o, [n])))
            break
          case 'object':
          case 'undefined':
            if (r == null) {
              e != r && ((e = r), (o = Rt(t, o, [])))
              break
            }
            if (vt(r)) {
              ;(e = r),
                r.length === 0
                  ? (o = Rt(t, o, []))
                  : typeof r[0] == 'object'
                  ? (o = Rt(t, o, r))
                  : s(String(r))
              break
            }
            'ELEMENT_NODE' in r &&
              e !== r &&
              ((e = r), (o = Rt(t, o, r.nodeType === 11 ? ge.call(r.childNodes) : [r])))
        }
      }
    return s
  },
  Ir = (t, e) =>
    e === 'ref'
      ? go(t)
      : e === 'aria'
      ? fo(t)
      : e === '.dataset'
      ? ho(t)
      : e.slice(0, 1) === '.'
      ? vo(t, e.slice(1))
      : e.slice(0, 2) === 'on'
      ? mo(t, e)
      : po(t, e)
function Eo(t) {
  let { type: e, path: n } = t,
    o = n.reduceRight(yo, this)
  return e === 'node' ? Rr(o) : e === 'attr' ? Ir(o, t.name) : _o(o)
}
var It = 'is\xB5',
  Fo = at(new WeakMap()),
  Pr = /^(?:plaintext|script|style|textarea|title|xmp)$/i,
  _t = () => ({ stack: [], entry: null, wire: null }),
  Wr = (t, e) => {
    let { content: n, updates: o } = Hr(t, e)
    return { type: t, template: e, content: n, updates: o, wire: null }
  },
  Br = (t, e) => {
    let n = so(e, It, t === 'svg'),
      o = xo(n, t),
      s = $o(o),
      r = [],
      c = e.length - 1,
      l = 0,
      i = `${It}${l}`
    for (; l < c; ) {
      let u = s.nextNode()
      if (!u) throw `bad template: ${n}`
      if (u.nodeType === 8)
        u.textContent === i &&
          (r.push({ type: 'node', path: ve(u) }), (i = `${It}${++l}`))
      else {
        for (; u.hasAttribute(i); )
          r.push({ type: 'attr', path: ve(u), name: u.getAttribute(i) }),
            u.removeAttribute(i),
            (i = `${It}${++l}`)
        Pr.test(u.tagName) &&
          u.textContent.trim() === `<!--${i}-->` &&
          ((u.textContent = ''),
          r.push({ type: 'text', path: ve(u) }),
          (i = `${It}${++l}`))
      }
    }
    return { content: o, nodes: r }
  },
  Hr = (t, e) => {
    let { content: n, nodes: o } = Fo.get(e) || Fo.set(e, Br(t, e)),
      s = _e.call(document, n, !0),
      r = o.map(Eo, s)
    return { content: s, updates: r }
  },
  Pt = (t, { type: e, template: n, values: o }) => {
    let { length: s } = o
    ko(t, o, s)
    let { entry: r } = t
    ;(!r || r.template !== n || r.type !== e) && (t.entry = r = Wr(e, n))
    let { content: c, updates: l, wire: i } = r
    for (let u = 0; u < s; u++) l[u](o[u])
    return i || (r.wire = uo(c))
  },
  ko = ({ stack: t }, e, n) => {
    for (let o = 0; o < n; o++) {
      let s = e[o]
      s instanceof ye
        ? (e[o] = Pt(t[o] || (t[o] = _t()), s))
        : vt(s)
        ? ko(t[o] || (t[o] = _t()), s, s.length)
        : (t[o] = null)
    }
    n < t.length && t.splice(n)
  }
function ye(t, e, n) {
  ;(this.type = t), (this.template = e), (this.values = n)
}
var { create: zr, defineProperties: Ur } = Object,
  So = (t) => {
    let e = at(new WeakMap()),
      n = (o) => (s, ...r) => Pt(o, { type: t, template: s, values: r })
    return Ur((o, ...s) => new ye(t, o, s), {
      for: {
        value(o, s) {
          let r = e.get(o) || e.set(o, zr(null))
          return r[s] || (r[s] = n(_t()))
        },
      },
      node: {
        value: (o, ...s) => Pt(_t(), { type: t, template: o, values: s }).valueOf(),
      },
    })
  },
  Co = at(new WeakMap()),
  Ht = (t, e) => {
    let n = typeof e == 'function' ? e() : e,
      o = Co.get(t) || Co.set(t, _t()),
      s = n instanceof ye ? Pt(o, n) : n
    return (
      s !== o.wire && ((o.wire = s), (t.textContent = ''), t.appendChild(s.valueOf())),
      t
    )
  },
  Wt = So('html'),
  be = So('svg')
function we(t) {
  for (var e = t[0], n = 1, o = arguments.length; n < o; n++) e += arguments[n] + t[n]
  return e
}
var { defineProperties: xe, keys: Gr } = Object,
  Jr = (t, e, n, o, s) => ({
    configurable: !0,
    get: () => o,
    set(r) {
      ;(t || r !== o || (e && typeof r == 'object' && r)) &&
        ((o = r), n ? s.call(this, o) : s.call(this))
    },
  }),
  $e = (t, e, n, o, s, r) => {
    let c = {},
      l = s !== Bt,
      i = [n, o, l]
    for (let u = Gr(t), f = 0; f < u.length; f++) {
      let p = e(t, u[f]),
        d = l ? s(p) : [p, s]
      r && (d[1] = r), (c[u[f]] = Jr.apply(null, i.concat(d)))
    }
    return c
  },
  Bt = () => {}
var Ee = ({
  all: t = !1,
  shallow: e = !0,
  useState: n = Bt,
  getAttribute: o = (s, r) => s.getAttribute(r),
} = {}) => (s, r, c) => {
  let i = $e(
    r,
    (u, f) => {
      let p = u[f],
        d = typeof p
      return (
        s.hasOwnProperty(f)
          ? ((p = s[f]), delete s[f])
          : s.hasAttribute(f) &&
            ((p = o(s, f)),
            d == 'number'
              ? (p = +p)
              : d == 'boolean' && (p = !/^(?:false|0|)$/.test(p))),
        p
      )
    },
    t,
    e,
    n,
    c
  )
  return xe(s, i)
}
var Yr = Ee({ dom: !0 }),
  Fe = customElements,
  { define: Qr } = Fe,
  { create: Xr, defineProperties: Ze, getOwnPropertyDescriptor: Kr, keys: Oo } = Object,
  yt = 'element',
  Ve = at(new Map([[yt, { c: HTMLElement, e: yt }]])),
  Ao = (t) => document.createElement(t),
  Lo = (t) => Ve.get(t) || Ve.set(t, { c: Ao(t).constructor, e: t }),
  zt = (t, e) => {
    let {
        attachShadow: n,
        attributeChanged: o,
        bound: s,
        connected: r,
        disconnected: c,
        handleEvent: l,
        init: i,
        observedAttributes: u,
        props: f,
        render: p,
        style: d,
      } = e,
      b = new WeakMap(),
      x = {},
      E = {},
      D = [],
      $ = Xr(null),
      F = (v, L, S) => {
        if (!b.has(v)) {
          b.set(v, 0),
            Ze(v, {
              html: { configurable: !0, value: Vr.bind(n ? v.attachShadow(n) : v) },
            })
          for (let g = 0; g < k; g++) {
            let { type: M, options: C } = D[g]
            v.addEventListener(M, v, C)
          }
          s && s.forEach(Zr, v),
            f && Yr(v, f, p),
            (i || p) && (i || p).call(v),
            L && (v[L] = S)
        }
      }
    for (let v = Oo(e), L = 0, { length: S } = v; L < S; L++) {
      let g = v[L]
      if (/^on./.test(g) && !/Options$/.test(g)) {
        let M = e[g + 'Options'] || !1,
          C = g.toLowerCase(),
          B = C.slice(2)
        D.push({ type: B, options: M }),
          ($[B] = g),
          C !== g &&
            ((B = C.slice(2, 3) + g.slice(3)),
            ($[B] = g),
            D.push({ type: B, options: M }))
      }
      switch (g) {
        case 'attachShadow':
        case 'observedAttributes':
        case 'style':
          break
        default:
          E[g] = Kr(e, g)
      }
    }
    let { length: k } = D
    if (
      (k &&
        !l &&
        (E.handleEvent = {
          value(v) {
            this[$[v.type]](v)
          },
        }),
      f !== null)
    )
      if (f)
        for (let v = Oo(f), L = 0; L < v.length; L++) {
          let S = v[L]
          E[S] = {
            get() {
              return F(this), f[S]
            },
            set(g) {
              F(this, S, g)
            },
          }
        }
      else
        E.props = {
          get() {
            let v = {}
            for (let { attributes: L } = this, { length: S } = L, g = 0; g < S; g++) {
              let { name: M, value: C } = L[g]
              v[M] = C
            }
            return v
          },
        }
    u && (x.observedAttributes = { value: u }),
      (E.attributeChangedCallback = {
        value() {
          F(this), o && o.apply(this, arguments)
        },
      }),
      (E.connectedCallback = {
        value() {
          F(this), r && r.call(this)
        },
      }),
      c && (E.disconnectedCallback = { value: c })
    let { c: O, e: N } = Lo(e.extends || yt)
    class j extends O {}
    Ze(j, x), Ze(j.prototype, E)
    let Q = [t, j]
    return (
      N !== yt && Q.push({ extends: N }),
      Qr.apply(Fe, Q),
      Ve.set(t, { c: j, e: N }),
      d &&
        (document.head.appendChild(Ao('style')).textContent = d(
          N === yt ? t : N + '[is="' + t + '"]'
        )),
      j
    )
  }
Fe.get('uce-lib') ||
  Fe.define(
    'uce-lib',
    class extends Lo(yt).c {
      static get define() {
        return zt
      }
      static get render() {
        return Ht
      }
      static get html() {
        return Wt
      }
      static get svg() {
        return be
      }
      static get css() {
        return we
      }
    }
  )
function Zr(t) {
  this[t] = this[t].bind(this)
}
function Vr() {
  return Ht(this, Wt.apply(null, arguments))
}
var ts = (t, e) => t[e],
  Mo = ({ all: t = !1, shallow: e = !0, useState: n = Bt } = {}) => (o, s) =>
    xe({}, $e(o, ts, t, e, n, s))
var ke = (t = {}) => (t.dom ? Ee : Mo)(t)
var { document: es, MutationObserver: ns, Set: No, WeakMap: os } = self,
  jo = (t) => 'querySelectorAll' in t,
  { filter: To } = [],
  tn = (t) => {
    let e = new os(),
      n = (d) => {
        let { query: b } = t
        if (b.length)
          for (let x = 0, { length: E } = d; x < E; x++)
            r(To.call(d[x].addedNodes, jo), !0, b),
              r(To.call(d[x].removedNodes, jo), !1, b)
      },
      o = (d) => {
        for (let b = 0, { length: x } = d; b < x; b++) e.delete(d[b])
      },
      s = () => {
        n(u.takeRecords())
      },
      r = (d, b, x, E = new No()) => {
        for (let D, $, F = 0, { length: k } = d; F < k; F++)
          if (!E.has(($ = d[F]))) {
            if ((E.add($), b))
              for (let O, N = c($), j = 0, { length: Q } = x; j < Q; j++)
                N.call($, (O = x[j])) &&
                  (e.has($) || e.set($, new No()),
                  (D = e.get($)),
                  D.has(O) || (D.add(O), t.handle($, b, O)))
            else
              e.has($) &&
                ((D = e.get($)),
                e.delete($),
                D.forEach((O) => {
                  t.handle($, b, O)
                }))
            r(i($), b, x, E)
          }
      },
      c = (d) => d.matches || d.webkitMatchesSelector || d.msMatchesSelector,
      l = (d, b = !0) => {
        r(d, b, t.query)
      },
      i = (d) => (p.length ? d.querySelectorAll(p) : p),
      u = new ns(n),
      f = t.root || es,
      { query: p } = t
    return (
      u.observe(f, { childList: !0, subtree: !0 }),
      l(i(f)),
      { drop: o, flush: s, observer: u, parse: l }
    )
  }
U.all ||
  (U.all = (t) =>
    new U((e) => {
      let { length: n } = t
      n || e()
      let o = 0
      for (; o < n; ) t[o++].then(s)
      o = 0
      function s() {
        ++o === n && e()
      }
    }))
var { create: rs, defineProperty: ss, keys: Do } = Object,
  qo = [],
  is = `"use strict;"
`,
  cs = (t) => V[t],
  V = rs(null),
  en = {},
  on = (t, e) => {
    let n = [],
      o = [],
      s = t
        .replace(
          /(^|[\r\n])\s*import\s*((['|"])[^\3]+?\3)/g,
          (r, c, l) => c + 'require(' + l + ')'
        )
        .replace(
          /(^|[\r\n])\s*import\s*([^\3]+?)(\s*from\s*)((['|"])[^\5]+?\5)/g,
          (r, c, l, i, u) =>
            c + 'const ' + l.replace(/\s+as\s+/g, ':') + ' = require(' + u + ')'
        )
        .replace(/^\s*export\s+default(\s*)/gm, 'exports.default =$1')
        .replace(
          /(^|[\r\n])\s*export\s*\{([^}]+?)\}[^\n]*/g,
          (r, c, l) => (
            l
              .trim()
              .split(/\s*,\s*/)
              .forEach((i) => {
                n.push(`exports.${i} = ${i};`)
              }),
            c
          )
        )
        .replace(
          /(^|[\r\n])\s*export\s+(const|let|var|function)(\s+)(\w+)/g,
          (r, c, l, i, u) => (n.push(`exports.${u} = ${u};`), c + l + i + u)
        )
        .concat(
          `
`,
          n.join(`
`)
        )
        .replace(/require\s*\(\s*(['"])([^\1]+?)\1\s*\)/g, (r, c, l) => (o.push(l), r))
    return e
      ? (o.forEach((r) => {
          r in V ||
            qo.push(
              new U((c) => {
                let l = en
                if (/^(?:[./]|https?:)/.test(r)) {
                  V[r] = l
                  let i = new XMLHttpRequest()
                  i.open('get', r, !0),
                    i.send(null),
                    (i.onload = () => {
                      c((V[r] = nn(i.responseText)))
                    })
                } else
                  ss(V, r, {
                    get: () => l,
                    set: (i) => {
                      c((l = i))
                    },
                  })
              })
            )
        }),
        new U((r) => {
          U.all(qo).then(() => r(s))
        }))
      : s
  },
  ls = (t) => {
    let e = Do(t || {}),
      n = e.map((o) => t[o]).concat(cs)
    return (
      e.push('require'),
      (o) => {
        let s = {},
          r = { exports: s },
          c = e.concat('module', 'exports', is + on(o))
        Function.apply(null, c).apply(null, n.concat(r, s))
        let i = r.exports,
          u = Do(i)
        return u.length === 1 && u[0] === 'default' ? i.default : i
      }
    )
  },
  nn = ls()
var Ro = (t) => {
  let e = [],
    n = [],
    { length: o } = t,
    s = 0,
    r = 0,
    c = 0
  for (; s < o && -1 < (s = t.indexOf('{{', c)) && -1 < (r = t.indexOf('}}', s + 2)); )
    e.push(t.slice(c, s)), n.push(t.slice(s + 2, r)), (c = r + 2)
  e.push(t.slice(c))
  let l = [e],
    i = Function('return function(){with(arguments[0])return[' + n + ']}')()
  return function (u) {
    return l.concat(i.call(this, u))
  }
}
var Io = ke({ dom: !0, useState: Dt }),
  Ut = [],
  { drop: us, parse: as } = tn({
    query: Ut,
    handle(t, e, n) {
      if ((us([t]), Se.has(n))) {
        let o = Se.get(n)
        Se.delete(n), Ut.splice(Ut.indexOf(n), 1), o()
      }
    },
  }),
  W = (t, e) => {
    t in V && V[t] !== en && console.warn('duplicated ' + t), (V[t] = e)
  },
  sn = (t) => {
    let e = new rn()
    return (e.innerHTML = t), e
  },
  Se = new Map(),
  fs = ['module.exports=function(module,exports){"use strict";', '}'],
  ps = () => {},
  cn = () => {
    throw new Error('bad template')
  },
  Gt = (t, e) => t.getAttribute(e),
  bt = (t, e) => t.hasAttribute(e),
  ds = (t, e, n, o) => {
    let s = { exports: o }
    t.call(e, s, o)
    let r = s.exports,
      c = r.default || r
    return n && Io(e, c.props), c
  },
  Po = (t, e) => (n) =>
    [].reduce.call(
      n.querySelectorAll('[' + t + ']'),
      (o, s) => {
        let { parentNode: r } = s
        do
          if (r === n) {
            let c = Gt(s, t)
            o[c] = e ? [].concat(o[c] || [], s) : s
            break
          } else if (/-/.test(r.tagName) || Gt(r, 'is')) break
        while ((r = r.parentNode))
        return o
      },
      {}
    ),
  Ce = {
    define: zt,
    render: Ht,
    html: Wt,
    svg: be,
    css: we,
    reactive: ke({ useState: Dt }),
    ref: Po('ref', !1),
    slot: Po('slot', !0),
  }
W('@uce/reactive', Ce.reactive)
W('@uce/slot', Ce.slot)
W('@uce', Ce)
W('uce', Ce)
var Ho = {
  augmentor: Tt,
  hooked: Tt,
  useState: Dt,
  useRef: Ke,
  useContext: Je,
  createContext: Ge,
  useCallback: Ye,
  useMemo: he,
  useReducer: me,
  useEffect: Qe,
  useLayoutEffect: Xe,
}
W('augmentor', Ho)
W('uhooks', Ho)
W('qsa-observer', tn)
W('reactive-props', ke)
W('@webreflection/lie', U)
var rn = zt('uce-template', { extends: 'template', props: null, init: Wo })
rn.resolve = W
rn.from = sn
function Wo(t) {
  let e = ($) => {
      let F = Ro(E.replace(/(<!--(\{\{)|(\}\})-->)/g, '$2$3')),
        k = (b && nn(i ? fs.join($) : $)) || {},
        { observedAttributes: O, props: N, setup: j } = k,
        Q = !!E.trim(),
        v = i || Q || !!j,
        L = new WeakMap(),
        S = {
          props: null,
          extends: f ? d : 'element',
          init() {
            let g = this,
              { html: M } = g,
              C = !0,
              B = ps,
              tt = Tt(() => {
                if (C && ((C = !C), v)) {
                  ;(g.render = tt), N && Io(g, N)
                  let ft = i ? ds(k, g, u, {}) : j && k.setup(g)
                  if (Q) {
                    let Jt = F.bind(g, ft || {})
                    B = () => {
                      M.apply(g, Jt())
                    }
                  }
                }
                B()
              })
            tt(), Ue(tt) && L.set(g, tt)
          },
        }
      if ((p && (S.style = () => p), x && (S.attachShadow = { mode: x }), O)) {
        S.observedAttributes = O
        let g = (S.attributeChanged = function () {
          let { attributeChanged: M } = this
          M !== g && M.apply(this, arguments)
        })
      }
      if (b) {
        let g = (S.connected = function () {
            let { connected: C } = this
            C !== g && C.call(this)
          }),
          M = (S.disconnected = function () {
            let { disconnected: C } = this
            L.has(this) && ze(L.get(this)), C !== M && C.call(this)
          })
      }
      for (let g in k) g in S || (S[g] = k[g])
      zt(f || d, S)
    },
    { content: n, ownerDocument: o, parentNode: s } = this,
    { childNodes: r } = n || qt(this.innerHTML),
    c = []
  s && this instanceof HTMLUnknownElement && s.removeChild(this)
  let l = e,
    i = !1,
    u = !1,
    f = '',
    p = '',
    d = '',
    b = '',
    x = '',
    E = ''
  for (let $ = 0; $ < r.length; $++) {
    let F = r[$]
    if (F.nodeType === 1) {
      let { tagName: k } = F,
        O = bt(F, 'is')
      ;/^style$/i.test(k)
        ? c.push(F)
        : O || /-/i.test(k)
        ? (d && cn(),
          (d = k.toLowerCase()),
          (E = F.innerHTML),
          O && (f = Gt(F, 'is').toLowerCase()),
          bt(F, 'shadow') && (x = Gt(F, 'shadow') || 'open'))
        : /^script$/i.test(k) &&
          (b && cn(),
          (i = bt(F, 'setup')),
          (u = i && Gt(F, 'setup') === 'props'),
          (b = F.textContent),
          (l = () => {
            on(b, !0).then(e)
          }))
    }
  }
  let D = f ? d + '[is="' + f + '"]' : d
  if (!D) return setTimeout(t ? cn : Wo.bind(this), 0, !0)
  for (let $ = c.length; $--; ) {
    let F = c[$],
      { textContent: k } = F
    if (bt(F, 'shadow')) E = '<style>' + k + '</style>' + E
    else if (bt(F, 'scoped')) {
      let O = []
      p += k
        .replace(/\{([^}]+?)\}/g, (N, j) => '' + O.push(j) + ',')
        .split(',')
        .map((N) => (N.trim() ? D + ' ' + N.trim() : ''))
        .join(
          `,
`
        )
        .replace(/\x01(\d+),/g, (N, j) => '{' + O[--j] + '}')
        .replace(
          /(,\n)+/g,
          `,
`
        )
    } else p += k
  }
  bt(this, 'lazy') ? (Se.set(D, l), Ut.push(D), as(o.querySelectorAll(Ut))) : l()
}
function Cc(t, e, n) {
  le.debug(`${t} script started!`),
    W('../store.js', e),
    Nn({
      container: document.querySelector('section .uce'),
      on(s) {
        Xn(`../components/${s}.uce`)
          .then((r) => r.text())
          .then((r) => {
            let c = sn(r)
            le.debug(`${t} Loader just loaded <${s}>`, c), document.body.appendChild(c)
          })
      },
    }),
    new n({
      target: document.querySelector('section .svelte'),
      props: { connect: e.connect },
    }) && le.debug(`${t} & Svelte working fine`)
}
var Ac = () => {}
var Tc = (t = 21) => {
  let e = '',
    n = crypto.getRandomValues(new Uint8Array(t))
  for (; t--; ) {
    let o = n[t] & 63
    o < 36
      ? (e += o.toString(36))
      : o < 62
      ? (e += (o - 26).toString(36).toUpperCase())
      : o < 63
      ? (e += '_')
      : (e += '-')
  }
  return e
}
var qc = {
  todos: [
    { id: 'R8d7ysIEl94ziepCxTZwX', text: 'double click me!', done: !1 },
    { id: 'jt9oofKsxbwknDGzIa6be', text: 'I am, by default, DONE', done: !0 },
  ],
}
export {
  qc as a,
  Ac as b,
  H as c,
  lr as d,
  Tc as e,
  Cc as f,
  De as g,
  vs as h,
  nt as i,
  Is as j,
}
/*! (c) Andrea Giammarchi - ISC */
/*! (c) Andrea Giammarchi @webreflection ISC */
//# sourceMappingURL=chunk.PLNXN7ZV.js.map
