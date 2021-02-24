import { a as is } from './chunk.UAU2O4PE.js'
import { a as ns, b as tn } from './chunk.R5H7EMPM.js'
var Ae = (t, e) => () => (e || ((e = { exports: {} }), t(e.exports, e)), e.exports),
  cs = (t, e) => {
    for (var n in e) is(t, n, { get: e[n], enumerable: !0 })
  }
var Kt = Ae((ms, Mn) => {
  Mn.exports = {}
})
var Zt = Ae((_s, Nn) => {
  Nn.exports = {}
})
var Vt = Ae((ws, In) => {
  In.exports = {}
})
function H() {}
function yn(t) {
  return t()
}
function bn() {
  return Object.create(null)
}
function ft(t) {
  t.forEach(yn)
}
function wt(t) {
  return typeof t == 'function'
}
function V(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
function wn(t) {
  return Object.keys(t).length === 0
}
var us = typeof window != 'undefined'
var as = new Set()
function Q(t, e) {
  t.appendChild(e)
}
function G(t, e, n) {
  t.insertBefore(e, n || null)
}
function z(t) {
  t.parentNode.removeChild(t)
}
function xn(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}
function tt(t) {
  return document.createElement(t)
}
function et(t) {
  return document.createTextNode(t)
}
function Me() {
  return et(' ')
}
function xt(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o)
}
function $n(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e)
  }
}
function X(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function Zo(t) {
  return Array.from(t.childNodes)
}
function $t(t, e) {
  ;(e = '' + e), t.wholeText !== e && (t.data = e)
}
function Oe(t, e) {
  t.value = e == null ? '' : e
}
function je(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e)
}
var fs = new Set()
var En
function Gt(t) {
  En = t
}
var Et = []
var kn = [],
  Jt = [],
  Fn = [],
  Vo = Promise.resolve(),
  Le = !1
function tr() {
  Le || ((Le = !0), Vo.then(Sn))
}
function Ne(t) {
  Jt.push(t)
}
var Te = !1,
  qe = new Set()
function Sn() {
  if (!Te) {
    Te = !0
    do {
      for (let t = 0; t < Et.length; t += 1) {
        let e = Et[t]
        Gt(e), er(e.$$)
      }
      for (Gt(null), Et.length = 0; kn.length; ) kn.pop()()
      for (let t = 0; t < Jt.length; t += 1) {
        let e = Jt[t]
        qe.has(e) || (qe.add(e), e())
      }
      Jt.length = 0
    } while (Et.length)
    for (; Fn.length; ) Fn.pop()()
    ;(Le = !1), (Te = !1), qe.clear()
  }
}
function er(t) {
  if (t.fragment !== null) {
    t.update(), ft(t.before_update)
    let e = t.dirty
    ;(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ne)
  }
}
var Yt = new Set(),
  nr
function kt(t, e) {
  t && t.i && (Yt.delete(t), t.i(e))
}
function Qt(t, e, n, o) {
  if (t && t.o) {
    if (Yt.has(t)) return
    Yt.add(t),
      nr.c.push(() => {
        Yt.delete(t), o && (n && t.d(1), o())
      }),
      t.o(e)
  }
}
var ds =
  typeof window != 'undefined'
    ? window
    : typeof globalThis != 'undefined'
    ? globalThis
    : global
var ps = new Set([
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
function Xt(t) {
  t && t.c()
}
function Ft(t, e, n) {
  let { fragment: o, on_mount: s, on_destroy: r, after_update: c } = t.$$
  o && o.m(e, n),
    Ne(() => {
      let l = s.map(yn).filter(wt)
      r ? r.push(...l) : ft(l), (t.$$.on_mount = [])
    }),
    c.forEach(Ne)
}
function dt(t, e) {
  let n = t.$$
  n.fragment !== null &&
    (ft(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []))
}
function or(t, e) {
  t.$$.dirty[0] === -1 && (Et.push(t), tr(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function nt(t, e, n, o, s, r, c = [-1]) {
  let l = En
  Gt(t)
  let i = (t.$$ = {
      fragment: null,
      ctx: null,
      props: r,
      update: H,
      not_equal: s,
      bound: bn(),
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(l ? l.$$.context : []),
      callbacks: bn(),
      dirty: c,
      skip_bound: !1,
    }),
    u = !1
  if (
    ((i.ctx = n
      ? n(t, e.props || {}, (f, d, ...h) => {
          let w = h.length ? h[0] : d
          return (
            i.ctx &&
              s(i.ctx[f], (i.ctx[f] = w)) &&
              (!i.skip_bound && i.bound[f] && i.bound[f](w), u && or(t, f)),
            d
          )
        })
      : []),
    i.update(),
    (u = !0),
    ft(i.before_update),
    (i.fragment = o ? o(i.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      let f = Zo(e.target)
      i.fragment && i.fragment.l(f), f.forEach(z)
    } else i.fragment && i.fragment.c()
    e.intro && kt(t.$$.fragment), Ft(t, e.target, e.anchor), Sn()
  }
  Gt(l)
}
var rr
typeof HTMLElement == 'function' &&
  (rr = class extends HTMLElement {
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
      dt(this, 1), (this.$destroy = H)
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
        !wn(t) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1))
    }
  })
var K = class {
  $destroy() {
    dt(this, 1), (this.$destroy = H)
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
      !wn(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
  }
}
var sr = /^(?:annotation-xml|color-profile|font-face(?:|-format|-name|-src|-uri)|missing-glyph)$/i,
  Cn = new Set(),
  An = (t) => {
    let e = t.container || document,
      n = (r) => {
        for (let c = 0, { length: l } = r; c < l; c++)
          for (let { addedNodes: i } = r[c], u = 0, { length: f } = i; u < f; u++) {
            let d = i[u],
              { children: h, getAttribute: w, tagName: x } = d
            if (w) {
              let E = (w.call(d, 'is') || x).toLowerCase()
              0 < E.indexOf('-') &&
                !Cn.has(E) &&
                !sr.test(E) &&
                (Cn.add(E), customElements.get(E) || t.on(E)),
                o(h)
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
function ir(t) {
  let e, n, o, s
  return {
    c() {
      ;(e = tt('form')),
        (n = tt('input')),
        X(n, 'placeholder', 'Add new task...'),
        X(n, 'class', 'svelte-12biwcu')
    },
    m(r, c) {
      G(r, e, c),
        Q(e, n),
        Oe(n, t[0]),
        o ||
          ((s = [
            xt(n, 'input', t[3]),
            xt(
              e,
              'submit',
              $n(function () {
                wt(t[1]) && t[1].apply(this, arguments)
              })
            ),
          ]),
          (o = !0))
    },
    p(r, [c]) {
      ;(t = r), c & 1 && n.value !== t[0] && Oe(n, t[0])
    },
    i: H,
    o: H,
    d(r) {
      r && z(e), (o = !1), ft(s)
    },
  }
}
var On = ''
function cr(t, e, n) {
  let { connect: o } = e,
    s = void 0,
    r = On,
    c
  function l({ add: u }) {
    n(
      1,
      (c = () => {
        u(r), n(0, (r = On))
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
var jn = class extends K {
    constructor(e) {
      super()
      nt(this, e, cr, ir, V, { connect: 2 })
    }
  },
  Ln = jn
Kt()
function Tn(t, e, n) {
  let o = t.slice()
  return (o[5] = e[n].id), (o[6] = e[n].text), (o[7] = e[n].done), o
}
function qn(t) {
  let e,
    n = t[6] + '',
    o,
    s,
    r,
    c
  return {
    c() {
      ;(e = tt('li')),
        (o = et(n)),
        X(e, 'data-id', (s = t[5])),
        X(e, 'class', 'svelte-corox1'),
        je(e, 'done', t[7])
    },
    m(l, i) {
      G(l, e, i),
        Q(e, o),
        r ||
          ((c = xt(e, 'dblclick', function () {
            wt(t[1]) && t[1].apply(this, arguments)
          })),
          (r = !0))
    },
    p(l, i) {
      ;(t = l),
        i & 1 && n !== (n = t[6] + '') && $t(o, n),
        i & 1 && s !== (s = t[5]) && X(e, 'data-id', s),
        i & 1 && je(e, 'done', t[7])
    },
    d(l) {
      l && z(e), (r = !1), c()
    },
  }
}
function lr(t) {
  let e,
    n = t[0],
    o = []
  for (let s = 0; s < n.length; s += 1) o[s] = qn(Tn(t, n, s))
  return {
    c() {
      e = tt('ul')
      for (let s = 0; s < o.length; s += 1) o[s].c()
    },
    m(s, r) {
      G(s, e, r)
      for (let c = 0; c < o.length; c += 1) o[c].m(e, null)
    },
    p(s, [r]) {
      if (r & 3) {
        n = s[0]
        let c
        for (c = 0; c < n.length; c += 1) {
          let l = Tn(s, n, c)
          o[c] ? o[c].p(l, r) : ((o[c] = qn(l)), o[c].c(), o[c].m(e, null))
        }
        for (; c < o.length; c += 1) o[c].d(1)
        o.length = n.length
      }
    },
    i: H,
    o: H,
    d(s) {
      s && z(e), xn(o, s)
    },
  }
}
function ur(t, e, n) {
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
var Dn = class extends K {
    constructor(e) {
      super()
      nt(this, e, ur, lr, V, { connect: 2 })
    }
  },
  Pn = Dn
Zt()
function ar(t) {
  let e, n, o, s, r
  return {
    c() {
      ;(e = tt('footer')),
        (n = et('Done: ')),
        (o = et(t[1])),
        (s = et(' / ')),
        (r = et(t[0])),
        X(e, 'class', 'svelte-1o8cxar')
    },
    m(c, l) {
      G(c, e, l), Q(e, n), Q(e, o), Q(e, s), Q(e, r)
    },
    p(c, [l]) {
      l & 2 && $t(o, c[1]), l & 1 && $t(r, c[0])
    },
    i: H,
    o: H,
    d(c) {
      c && z(e)
    },
  }
}
function fr(t, e, n) {
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
var Rn = class extends K {
    constructor(e) {
      super()
      nt(this, e, fr, ar, V, { connect: 2 })
    }
  },
  Hn = Rn
Vt()
function dr(t) {
  let e, n, o, s, r, c
  return (
    (e = new Ln({ props: { connect: t[0] } })),
    (o = new Pn({ props: { connect: t[0] } })),
    (r = new Hn({ props: { connect: t[0] } })),
    {
      c() {
        Xt(e.$$.fragment), (n = Me()), Xt(o.$$.fragment), (s = Me()), Xt(r.$$.fragment)
      },
      m(l, i) {
        Ft(e, l, i), G(l, n, i), Ft(o, l, i), G(l, s, i), Ft(r, l, i), (c = !0)
      },
      p(l, [i]) {
        let u = {}
        i & 1 && (u.connect = l[0]), e.$set(u)
        let f = {}
        i & 1 && (f.connect = l[0]), o.$set(f)
        let d = {}
        i & 1 && (d.connect = l[0]), r.$set(d)
      },
      i(l) {
        c ||
          (kt(e.$$.fragment, l), kt(o.$$.fragment, l), kt(r.$$.fragment, l), (c = !0))
      },
      o(l) {
        Qt(e.$$.fragment, l), Qt(o.$$.fragment, l), Qt(r.$$.fragment, l), (c = !1)
      },
      d(l) {
        dt(e, l), l && z(n), dt(o, l), l && z(s), dt(r, l)
      },
    }
  )
}
function pr(t, e, n) {
  let { connect: o } = e
  return (
    (t.$$set = (s) => {
      'connect' in s && n(0, (o = s.connect))
    }),
    [o]
  )
}
var Wn = class extends K {
    constructor(e) {
      super()
      nt(this, e, pr, dr, V, { connect: 0 })
    }
  },
  As = Wn
;(function () {
  'use strict'
  var t =
      typeof Promise == 'function'
        ? Promise
        : function (b) {
            var a = [],
              p = 0,
              v
            return (
              b(function (_) {
                ;(v = _), (p = 1), a.splice(0).forEach(m)
              }),
              { then: m }
            )
            function m(_) {
              return p ? setTimeout(_, 0, v) : a.push(_), this
            }
          },
    e = function (b, a) {
      var p = function (_) {
          for (var F = 0, D = _.length; F < D; F++) v(_[F])
        },
        v = function (_) {
          var F = _.target,
            D = _.attributeName,
            ut = _.oldValue
          F.attributeChangedCallback(D, ut, F.getAttribute(D))
        }
      return function (m, _) {
        var F = m.constructor.observedAttributes
        return (
          F &&
            b(_).then(function () {
              new a(p).observe(m, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: F,
              })
              for (var D = 0, ut = F.length; D < ut; D++)
                m.hasAttribute(F[D]) &&
                  v({ target: m, attributeName: F[D], oldValue: null })
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
    u = function (b) {
      var a = new c(),
        p = function (q) {
          var P = b.query
          if (P.length)
            for (var U = 0, bt = q.length; U < bt; U++)
              _(i.call(q[U].addedNodes, l), !0, P),
                _(i.call(q[U].removedNodes, l), !1, P)
        },
        v = function (q) {
          for (var P = 0, U = q.length; P < U; P++) a.delete(q[P])
        },
        m = function () {
          p(ke.takeRecords())
        },
        _ = function st(q, P, U) {
          for (
            var bt =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : new r(),
              Go = function (at, I, Yo, rs) {
                if (!bt.has((I = q[Yo]))) {
                  if ((bt.add(I), P))
                    for (var Ut, Qo = F(I), Ce = 0, Xo = U.length; Ce < Xo; Ce++)
                      Qo.call(I, (Ut = U[Ce])) &&
                        (a.has(I) || a.set(I, new r()),
                        (at = a.get(I)),
                        at.has(Ut) || (at.add(Ut), b.handle(I, P, Ut)))
                  else
                    a.has(I) &&
                      ((at = a.get(I)),
                      a.delete(I),
                      at.forEach(function (Ko) {
                        b.handle(I, P, Ko)
                      }))
                  st(ut(I), P, U, bt)
                }
                ;(vn = at), (_n = I)
              },
              vn,
              _n,
              Se = 0,
              Jo = q.length;
            Se < Jo;
            Se++
          )
            Go(vn, _n, Se)
        },
        F = function (q) {
          return q.matches || q.webkitMatchesSelector || q.msMatchesSelector
        },
        D = function (q) {
          var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
          _(q, P, b.query)
        },
        ut = function (q) {
          return Fe.length ? q.querySelectorAll(Fe) : Fe
        },
        ke = new s(p),
        gn = b.root || o,
        Fe = b.query
      return (
        ke.observe(gn, { childList: !0, subtree: !0 }),
        D(ut(gn)),
        { drop: v, flush: m, observer: ke, parse: D }
      )
    },
    f = self,
    d = f.document,
    h = f.Map,
    w = f.MutationObserver,
    x = f.Object,
    E = f.Set,
    T = f.WeakMap,
    $ = f.Element,
    k = f.HTMLElement,
    S = f.Node,
    A = f.Error,
    L = f.TypeError,
    N = f.Reflect,
    Y = self.Promise || t,
    y = x.defineProperty,
    O = x.keys,
    C = x.getOwnPropertyNames,
    g = x.setPrototypeOf,
    j = !self.customElements,
    M = function (a) {
      for (var p = O(a), v = [], m = p.length, _ = 0; _ < m; _++)
        (v[_] = a[p[_]]), delete a[p[_]]
      return function () {
        for (var F = 0; F < m; F++) a[p[F]] = v[F]
      }
    }
  if (j) {
    var R = function () {
        var a = this.constructor
        if (!vt.has(a)) throw new L('Illegal constructor')
        var p = vt.get(a)
        if (Ht) return on(Ht, p)
        var v = ot.call(d, p)
        return on(g(v, a.prototype), p)
      },
      ot = d.createElement,
      vt = new h(),
      lt = new h(),
      en = new h(),
      _t = new h(),
      nn = [],
      Lo = function (a, p, v) {
        var m = en.get(v)
        if (p && !m.isPrototypeOf(a)) {
          var _ = M(a)
          Ht = g(a, m)
          try {
            new m.constructor()
          } finally {
            ;(Ht = null), _()
          }
        }
        var F = ''.concat(p ? '' : 'dis', 'connectedCallback')
        F in m && a[F]()
      },
      No = u({ query: nn, handle: Lo }),
      To = No.parse,
      Ht = null,
      be = function (a) {
        if (!lt.has(a)) {
          var p,
            v = new t(function (m) {
              p = m
            })
          lt.set(a, { $: v, _: p })
        }
        return lt.get(a).$
      },
      on = e(be, w)
    y(self, 'customElements', {
      configurable: !0,
      value: {
        define: function (a, p) {
          if (_t.has(a))
            throw new A(
              'the name "'.concat(a, '" has already been used with this registry')
            )
          vt.set(p, a),
            en.set(a, p.prototype),
            _t.set(a, p),
            nn.push(a),
            be(a).then(function () {
              To(d.querySelectorAll(a))
            }),
            lt.get(a)._(p)
        },
        get: function (a) {
          return _t.get(a)
        },
        whenDefined: be,
      },
    }),
      y((R.prototype = k.prototype), 'constructor', { value: R }),
      y(self, 'HTMLElement', { configurable: !0, value: R }),
      y(d, 'createElement', {
        configurable: !0,
        value: function (a, p) {
          var v = p && p.is,
            m = v ? _t.get(v) : _t.get(a)
          return m ? new m() : ot.call(d, a)
        },
      }),
      'isConnected' in S.prototype ||
        y(S.prototype, 'isConnected', {
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
      var rn = function b() {
        return self.Reflect.construct(HTMLLIElement, [], b)
      }
      rn.prototype = HTMLLIElement.prototype
      var sn = 'extends-li'
      self.customElements.define('extends-li', rn, { extends: 'li' }),
        (j = d.createElement('li', { is: sn }).outerHTML.indexOf(sn) < 0)
      var cn = self.customElements,
        qo = cn.get,
        Do = cn.whenDefined
      y(self.customElements, 'whenDefined', {
        configurable: !0,
        value: function (a) {
          var p = this
          return Do.call(this, a).then(function (v) {
            return v || qo.call(p, a)
          })
        },
      })
    } catch (b) {
      j = !j
    }
  if (j) {
    var ln = function (a) {
        var p = we.get(a),
          v = p.parse,
          m = p.root
        v(m.querySelectorAll(this), a.isConnected)
      },
      rt = self.customElements,
      un = $.prototype.attachShadow,
      an = d.createElement,
      Po = rt.define,
      Io = rt.get,
      Ro = N || {
        construct: function (a) {
          return a.call(this)
        },
      },
      Ho = Ro.construct,
      we = new T(),
      xe = new E(),
      Wt = new h(),
      zt = new h(),
      fn = new h(),
      $e = new h(),
      dn = [],
      yt = [],
      pn = function (a) {
        return $e.get(a) || Io.call(rt, a)
      },
      hn = function (a, p, v) {
        var m = fn.get(v)
        if (p && !m.isPrototypeOf(a)) {
          var _ = M(a)
          Bt = g(a, m)
          try {
            new m.constructor()
          } finally {
            ;(Bt = null), _()
          }
        }
        var F = ''.concat(p ? '' : 'dis', 'connectedCallback')
        F in m && a[F]()
      },
      Wo = u({ query: yt, handle: hn }),
      zo = Wo.parse,
      Bo = u({
        query: dn,
        handle: function (a, p) {
          we.has(a) && (p ? xe.add(a) : xe.delete(a), yt.length && ln.call(yt, a))
        },
      }),
      Uo = Bo.parse,
      Ee = function (a) {
        if (!zt.has(a)) {
          var p,
            v = new Y(function (m) {
              p = m
            })
          zt.set(a, { $: v, _: p })
        }
        return zt.get(a).$
      },
      mn = e(Ee, w),
      Bt = null
    C(self)
      .filter(function (b) {
        return /^HTML/.test(b)
      })
      .forEach(function (b) {
        var a = self[b]
        function p() {
          var v = this.constructor
          if (!Wt.has(v)) throw new L('Illegal constructor')
          var m = Wt.get(v),
            _ = m.is,
            F = m.tag
          if (_) {
            if (Bt) return mn(Bt, _)
            var D = an.call(d, F)
            return D.setAttribute('is', _), mn(g(D, v.prototype), _)
          } else return Ho.call(this, a, [], v)
        }
        y((p.prototype = a.prototype), 'constructor', { value: p }),
          y(self, b, { value: p })
      }),
      y(d, 'createElement', {
        configurable: !0,
        value: function (a, p) {
          var v = p && p.is
          if (v) {
            var m = $e.get(v)
            if (m && Wt.get(m).tag === a) return new m()
          }
          var _ = an.call(d, a)
          return v && _.setAttribute('is', v), _
        },
      }),
      un &&
        y($.prototype, 'attachShadow', {
          configurable: !0,
          value: function () {
            var a = un.apply(this, arguments),
              p = u({ query: yt, root: a, handle: hn }),
              v = p.parse
            return we.set(this, { root: a, parse: v }), a
          },
        }),
      y(rt, 'get', { configurable: !0, value: pn }),
      y(rt, 'whenDefined', { configurable: !0, value: Ee }),
      y(rt, 'define', {
        configurable: !0,
        value: function (a, p, v) {
          if (pn(a))
            throw new A("'".concat(a, "' has already been defined as a custom element"))
          var m,
            _ = v && v.extends
          Wt.set(p, _ ? { is: a, tag: _ } : { is: '', tag: a }),
            _
              ? ((m = ''.concat(_, '[is="').concat(a, '"]')),
                fn.set(m, p.prototype),
                $e.set(a, p),
                yt.push(m))
              : (Po.apply(rt, arguments), dn.push((m = a))),
            Ee(a).then(function () {
              _
                ? (zo(d.querySelectorAll(m)), xe.forEach(ln, [m]))
                : Uo(d.querySelectorAll(m))
            }),
            zt.get(a)._(p)
        },
      })
  }
})()
var B =
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
var te = null,
  ee = new Set(),
  zn = (t) => {
    let { $: e, r: n, h: o } = t
    St(n) && (it.get(o).delete(t), n()), St((t.r = e())) && it.get(o).add(t)
  },
  hr = () => {
    let t = ee
    ;(ee = new Set()),
      t.forEach(({ h: e, c: n, a: o, e: s }) => {
        s && e.apply(n, o)
      })
  },
  it = new WeakMap(),
  Ct = [],
  ne = []
function oe(t, e) {
  return t !== this[e]
}
var De = (t) => {
    let e = it.get(t)
    e &&
      re.then(() => {
        e.forEach((n) => {
          n.r(), (n.r = null)
        }),
          e.clear()
      })
  },
  J = () => te,
  Pe = (t) => it.has(t),
  St = (t) => typeof t == 'function',
  At = (t) => {
    let e = { h: n, c: null, a: null, e: 0, i: 0, s: [] }
    return n
    function n() {
      let o = te
      ;(te = e), (e.e = e.i = 0)
      try {
        return t.apply((e.c = this), (e.a = arguments))
      } finally {
        ;(te = o),
          Ct.length && re.then(Ct.forEach.bind(Ct.splice(0), zn)),
          ne.length && ne.splice(0).forEach(zn)
      }
    }
  },
  Bn = (t) => {
    ee.has(t) || ((t.e = 1), ee.add(t), re.then(hr))
  },
  re = new B((t) => t())
var Ie = (t) => ({ _: new Set(), provide: mr, value: t }),
  Re = ({ _: t, value: e }) => (t.add(J()), e)
function mr(t) {
  let { _: e, value: n } = this
  n !== t &&
    ((this._ = new Set()),
    (this.value = t),
    e.forEach(({ h: o, c: s, a: r }) => {
      o.apply(s, r)
    }))
}
var He = (t, e) => se(() => t, e),
  se = (t, e) => {
    let n = J(),
      { i: o, s } = n
    return (
      (o === s.length || !e || e.some(oe, s[o]._)) && (s[o] = { $: t(), _: e }),
      s[n.i++].$
    )
  }
var Un = (t) => (e, n) => {
    let o = J(),
      { i: s, s: r, h: c } = o,
      l = s === r.length
    o.i++,
      l && (it.has(c) || it.set(c, new Set()), (r[s] = { $: e, _: n, r: null, h: c })),
      (l || !n || n.some(oe, r[s]._)) && t.push(r[s]),
      (r[s].$ = e),
      (r[s]._ = n)
  },
  We = Un(Ct),
  ze = Un(ne)
var Gn = (t, e) => (St(e) ? e(t) : e),
  ie = (t, e, n) => {
    let o = J(),
      { i: s, s: r } = o
    s === r.length &&
      r.push({
        $: St(n) ? n(e) : Gn(void 0, e),
        set: (i) => {
          ;(r[s].$ = t(r[s].$, i)), Bn(o)
        },
      })
    let { $: c, set: l } = r[o.i++]
    return [c, l]
  },
  Mt = (t) => ie(Gn, t)
var Be = (t) => {
  let e = J(),
    { i: n, s: o } = e
  return n === o.length && o.push({ current: t }), o[e.i++]
}
var ct = (t) => ({ get: (e) => t.get(e), set: (e, n) => (t.set(e, n), n) })
var Jn = /([^\s\\>"'=]+)\s*=\s*(['"]?)$/,
  gr = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,
  vr = /<[a-z][^>]+$/i,
  _r = />[^<>]*$/,
  yr = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,
  br = /\s+$/,
  Yn = (t, e) => 0 < e-- && (vr.test(t[e]) || (!_r.test(t[e]) && Yn(t, e))),
  wr = (t, e, n) => (gr.test(e) ? t : `<${e}${n.replace(br, '')}></${e}>`),
  Qn = (t, e, n) => {
    let o = [],
      { length: s } = t
    for (let c = 1; c < s; c++) {
      let l = t[c - 1]
      o.push(
        Jn.test(l) && Yn(t, c)
          ? l.replace(Jn, (i, u, f) => `${e}${c - 1}=${f || '"'}${u}${f ? '' : '"'}`)
          : `${l}<!--${e}${c - 1}-->`
      )
    }
    o.push(t[s - 1])
    let r = o.join('').trim()
    return n ? r : r.replace(yr, wr)
  }
var { isArray: pt } = Array,
  { indexOf: Xn, slice: ce } = []
var xr = 1,
  Kn = 111,
  $r = ({ firstChild: t, lastChild: e }) => {
    let n = document.createRange()
    return n.setStartAfter(t), n.setEndAfter(e), n.deleteContents(), t
  },
  Zn = (t, e) =>
    t.nodeType === Kn
      ? 1 / e < 0
        ? e
          ? $r(t)
          : t.lastChild
        : e
        ? t.valueOf()
        : t.firstChild
      : t,
  Vn = (t) => {
    let { childNodes: e } = t,
      { length: n } = e
    if (n < 2) return n ? e[0] : t
    let o = ce.call(e, 0),
      s = o[0],
      r = o[n - 1]
    return {
      ELEMENT_NODE: xr,
      nodeType: Kn,
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
var to = (t, e, n, o, s) => {
  let r = n.length,
    c = e.length,
    l = r,
    i = 0,
    u = 0,
    f = null
  for (; i < c || u < l; )
    if (c === i) {
      let d = l < r ? (u ? o(n[u - 1], -0).nextSibling : o(n[l - u], 0)) : s
      for (; u < l; ) t.insertBefore(o(n[u++], 1), d)
    } else if (l === u)
      for (; i < c; ) (!f || !f.has(e[i])) && t.removeChild(o(e[i], -1)), i++
    else if (e[i] === n[u]) i++, u++
    else if (e[c - 1] === n[l - 1]) c--, l--
    else if (e[i] === n[l - 1] && n[u] === e[c - 1]) {
      let d = o(e[--c], -1).nextSibling
      t.insertBefore(o(n[u++], 1), o(e[i++], -1).nextSibling),
        t.insertBefore(o(n[--l], 1), d),
        (e[c] = n[l])
    } else {
      if (!f) {
        f = new Map()
        let d = u
        for (; d < l; ) f.set(n[d], d++)
      }
      if (f.has(e[i])) {
        let d = f.get(e[i])
        if (u < d && d < l) {
          let h = i,
            w = 1
          for (; ++h < c && h < l && f.get(e[h]) === d + w; ) w++
          if (w > d - u) {
            let x = o(e[i], 0)
            for (; u < d; ) t.insertBefore(o(n[u++], 1), x)
          } else t.replaceChild(o(n[u++], 1), o(e[i++], -1))
        } else i++
      } else t.removeChild(o(e[i++], -1))
    }
  return n
}
var eo = (t) => (e) => {
    for (let n in e) {
      let o = n === 'role' ? n : `aria-${n}`,
        s = e[n]
      s == null ? t.removeAttribute(o) : t.setAttribute(o, s)
    }
  },
  no = (t, e) => {
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
  oo = (t, e, n) => (o) => {
    n !== !!o && ((n = !!o) ? t.setAttribute(e, '') : t.removeAttribute(e))
  },
  Er = ({ dataset: t }) => (e) => {
    for (let n in e) {
      let o = e[n]
      o == null ? delete t[n] : (t[n] = o)
    }
  },
  ro = (t, e) => {
    let n,
      o = e.slice(2)
    return (
      !(e in t) && e.toLowerCase() in t && (o = o.toLowerCase()),
      (s) => {
        let r = pt(s) ? s : [s, !1]
        n !== r[0] &&
          (n && t.removeEventListener(o, n, r[1]),
          (n = r[0]) && t.addEventListener(o, n, r[1]))
      }
    )
  },
  so = (t) => (e) => {
    typeof e == 'function' ? e(t) : (e.current = t)
  },
  io = (t, e) =>
    e === 'dataset'
      ? Er(t)
      : (n) => {
          t[e] = n
        },
  co = (t) => {
    let e
    return (n) => {
      e != n && ((e = n), (t.textContent = n == null ? '' : n))
    }
  }
var kr = (function (t) {
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
              d = null
            if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(i)) {
              var h = RegExp.$1
              ;(f.innerHTML = '<table>' + i + '</table>'), (d = f.querySelectorAll(h))
            } else (f.innerHTML = i), (d = f.childNodes)
            return r(u, d), u
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
  Ot = kr
var lo = ({ childNodes: t }, e) => t[e],
  le = (t) => {
    let e = [],
      { parentNode: n } = t
    for (; n; ) e.push(Xn.call(n.childNodes, t)), (t = n), (n = t.parentNode)
    return e
  },
  { createTreeWalker: uo, importNode: ue } = document
var ao = ue.length != 1,
  fo = ao ? (t, e, n) => ue.call(document, Ot(t, e, n), !0) : Ot,
  po = ao
    ? (t) => uo.call(document, t, 1 | 128, null, !1)
    : (t) => uo.call(document, t, 1 | 128)
var jt = (t, e, n) => to(t.parentNode, e, n, Zn, t),
  Fr = (t) => {
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
              n || (n = document.createTextNode('')),
              (n.data = r),
              (o = jt(t, o, [n])))
            break
          case 'object':
          case 'undefined':
            if (r == null) {
              e != r && ((e = r), (o = jt(t, o, [])))
              break
            }
            if (pt(r)) {
              ;(e = r),
                r.length === 0
                  ? (o = jt(t, o, []))
                  : typeof r[0] == 'object'
                  ? (o = jt(t, o, r))
                  : s(String(r))
              break
            }
            'ELEMENT_NODE' in r &&
              e !== r &&
              ((e = r), (o = jt(t, o, r.nodeType === 11 ? ce.call(r.childNodes) : [r])))
            break
          case 'function':
            s(r(t))
            break
        }
      }
    return s
  },
  Sr = (t, e) => {
    switch (e[0]) {
      case '?':
        return oo(t, e.slice(1), !1)
      case '.':
        return io(t, e.slice(1))
      case 'o':
        if (e[1] === 'n') return ro(t, e)
    }
    switch (e) {
      case 'ref':
        return so(t)
      case 'aria':
        return eo(t)
    }
    return no(t, e)
  }
function ho(t) {
  let { type: e, path: n } = t,
    o = n.reduceRight(lo, this)
  return e === 'node' ? Fr(o) : e === 'attr' ? Sr(o, t.name) : co(o)
}
var Lt = 'is\xB5',
  mo = ct(new WeakMap()),
  Cr = /^(?:plaintext|script|style|textarea|title|xmp)$/i,
  ht = () => ({ stack: [], entry: null, wire: null }),
  Mr = (t, e) => {
    let { content: n, updates: o } = Ar(t, e)
    return { type: t, template: e, content: n, updates: o, wire: null }
  },
  Or = (t, e) => {
    let n = Qn(e, Lt, t === 'svg'),
      o = fo(n, t),
      s = po(o),
      r = [],
      c = e.length - 1,
      l = 0,
      i = `${Lt}${l}`
    for (; l < c; ) {
      let u = s.nextNode()
      if (!u) throw `bad template: ${n}`
      if (u.nodeType === 8)
        u.data === i && (r.push({ type: 'node', path: le(u) }), (i = `${Lt}${++l}`))
      else {
        for (; u.hasAttribute(i); )
          r.push({ type: 'attr', path: le(u), name: u.getAttribute(i) }),
            u.removeAttribute(i),
            (i = `${Lt}${++l}`)
        Cr.test(u.tagName) &&
          u.textContent.trim() === `<!--${i}-->` &&
          ((u.textContent = ''),
          r.push({ type: 'text', path: le(u) }),
          (i = `${Lt}${++l}`))
      }
    }
    return { content: o, nodes: r }
  },
  Ar = (t, e) => {
    let { content: n, nodes: o } = mo.get(e) || mo.set(e, Or(t, e)),
      s = ue.call(document, n, !0),
      r = o.map(ho, s)
    return { content: s, updates: r }
  },
  Nt = (t, { type: e, template: n, values: o }) => {
    let { length: s } = o
    go(t, o, s)
    let { entry: r } = t
    ;(!r || r.template !== n || r.type !== e) && (t.entry = r = Mr(e, n))
    let { content: c, updates: l, wire: i } = r
    for (let u = 0; u < s; u++) l[u](o[u])
    return i || (r.wire = Vn(c))
  },
  go = ({ stack: t }, e, n) => {
    for (let o = 0; o < n; o++) {
      let s = e[o]
      s instanceof ae
        ? (e[o] = Nt(t[o] || (t[o] = ht()), s))
        : pt(s)
        ? go(t[o] || (t[o] = ht()), s, s.length)
        : (t[o] = null)
    }
    n < t.length && t.splice(n)
  }
function ae(t, e, n) {
  ;(this.type = t), (this.template = e), (this.values = n)
}
var { create: jr, defineProperties: Lr } = Object,
  vo = (t) => {
    let e = ct(new WeakMap()),
      n = (o) => (s, ...r) => Nt(o, { type: t, template: s, values: r })
    return Lr((o, ...s) => new ae(t, o, s), {
      for: {
        value(o, s) {
          let r = e.get(o) || e.set(o, jr(null))
          return r[s] || (r[s] = n(ht()))
        },
      },
      node: {
        value: (o, ...s) => Nt(ht(), { type: t, template: o, values: s }).valueOf(),
      },
    })
  },
  _o = ct(new WeakMap()),
  Tt = (t, e) => {
    let n = typeof e == 'function' ? e() : e,
      o = _o.get(t) || _o.set(t, ht()),
      s = n instanceof ae ? Nt(o, n) : n
    return (
      s !== o.wire && ((o.wire = s), (t.textContent = ''), t.appendChild(s.valueOf())),
      t
    )
  },
  qt = vo('html'),
  fe = vo('svg')
function de(t) {
  for (var e = t[0], n = 1, o = arguments.length; n < o; n++) e += arguments[n] + t[n]
  return e
}
var { defineProperties: pe, keys: Nr } = Object,
  Tr = (t, e, n, o, s) => ({
    configurable: !0,
    get: () => o,
    set(r) {
      ;(t || r !== o || (e && typeof r == 'object' && r)) &&
        ((o = r), n ? s.call(this, o) : s.call(this))
    },
  }),
  he = (t, e, n, o, s, r) => {
    let c = {},
      l = s !== Dt,
      i = [n, o, l]
    for (let u = Nr(t), f = 0; f < u.length; f++) {
      let d = e(t, u[f]),
        h = l ? s(d) : [d, s]
      r && (h[1] = r), (c[u[f]] = Tr.apply(null, i.concat(h)))
    }
    return c
  },
  Dt = () => {}
var me = ({
  all: t = !1,
  shallow: e = !0,
  useState: n = Dt,
  getAttribute: o = (s, r) => s.getAttribute(r),
} = {}) => (s, r, c) => {
  let i = he(
    r,
    (u, f) => {
      let d = u[f],
        h = typeof d
      return (
        s.hasOwnProperty(f)
          ? ((d = s[f]), delete s[f])
          : s.hasAttribute(f) &&
            ((d = o(s, f)),
            h == 'number'
              ? (d = +d)
              : h == 'boolean' && (d = !/^(?:false|0|)$/.test(d))),
        d
      )
    },
    t,
    e,
    n,
    c
  )
  return pe(s, i)
}
var qr = me({ dom: !0 }),
  ge = customElements,
  { define: Dr } = ge,
  { create: Pr, defineProperties: Ue, getOwnPropertyDescriptor: Ir, keys: yo } = Object,
  mt = 'element',
  Ge = ct(new Map([[mt, { c: HTMLElement, e: mt }]])),
  bo = (t) => document.createElement(t),
  wo = (t) => Ge.get(t) || Ge.set(t, { c: bo(t).constructor, e: t }),
  Pt = (t, e) => {
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
        render: d,
        style: h,
      } = e,
      w = new WeakMap(),
      x = {},
      E = {},
      T = [],
      $ = Pr(null),
      k = (y, O, C) => {
        if (!w.has(y)) {
          w.set(y, 0),
            Ue(y, {
              html: { configurable: !0, value: Hr.bind(n ? y.attachShadow(n) : y) },
            })
          for (let g = 0; g < S; g++) {
            let { type: j, options: M } = T[g]
            y.addEventListener(j, y, M)
          }
          s && s.forEach(Rr, y),
            f && qr(y, f, d),
            (i || d) && (i || d).call(y),
            O && (y[O] = C)
        }
      }
    for (let y = yo(e), O = 0, { length: C } = y; O < C; O++) {
      let g = y[O]
      if (/^on./.test(g) && !/Options$/.test(g)) {
        let j = e[g + 'Options'] || !1,
          M = g.toLowerCase(),
          R = M.slice(2)
        T.push({ type: R, options: j }),
          ($[R] = g),
          M !== g &&
            ((R = M.slice(2, 3) + g.slice(3)),
            ($[R] = g),
            T.push({ type: R, options: j }))
      }
      switch (g) {
        case 'attachShadow':
        case 'constructor':
        case 'observedAttributes':
        case 'style':
          break
        default:
          E[g] = Ir(e, g)
      }
    }
    let { length: S } = T
    if (
      (S &&
        !l &&
        (E.handleEvent = {
          value(y) {
            this[$[y.type]](y)
          },
        }),
      f !== null)
    )
      if (f)
        for (let y = yo(f), O = 0; O < y.length; O++) {
          let C = y[O]
          E[C] = {
            get() {
              return k(this), f[C]
            },
            set(g) {
              k(this, C, g)
            },
          }
        }
      else
        E.props = {
          get() {
            let y = {}
            for (let { attributes: O } = this, { length: C } = O, g = 0; g < C; g++) {
              let { name: j, value: M } = O[g]
              y[j] = M
            }
            return y
          },
        }
    u && (x.observedAttributes = { value: u }),
      (E.attributeChangedCallback = {
        value() {
          k(this), o && o.apply(this, arguments)
        },
      }),
      (E.connectedCallback = {
        value() {
          k(this), r && r.call(this)
        },
      }),
      c && (E.disconnectedCallback = { value: c })
    let { c: A, e: L } = wo(e.extends || mt)
    class N extends A {}
    Ue(N, x), Ue(N.prototype, E)
    let Y = [t, N]
    return (
      L !== mt && Y.push({ extends: L }),
      Dr.apply(ge, Y),
      Ge.set(t, { c: N, e: L }),
      h &&
        (document.head.appendChild(bo('style')).textContent = h(
          L === mt ? t : L + '[is="' + t + '"]'
        )),
      N
    )
  }
ge.get('uce-lib') ||
  ge.define(
    'uce-lib',
    class extends wo(mt).c {
      static get define() {
        return Pt
      }
      static get render() {
        return Tt
      }
      static get html() {
        return qt
      }
      static get svg() {
        return fe
      }
      static get css() {
        return de
      }
    }
  )
function Rr(t) {
  this[t] = this[t].bind(this)
}
function Hr() {
  return Tt(this, qt.apply(null, arguments))
}
var Wr = (t, e) => t[e],
  xo = ({ all: t = !1, shallow: e = !0, useState: n = Dt } = {}) => (o, s) =>
    pe({}, he(o, Wr, t, e, n, s))
var ve = (t = {}) => (t.dom ? me : xo)(t)
var { document: zr, MutationObserver: Br, Set: $o, WeakMap: Ur } = self,
  Eo = (t) => 'querySelectorAll' in t,
  { filter: ko } = [],
  Je = (t) => {
    let e = new Ur(),
      n = (h) => {
        let { query: w } = t
        if (w.length)
          for (let x = 0, { length: E } = h; x < E; x++)
            r(ko.call(h[x].addedNodes, Eo), !0, w),
              r(ko.call(h[x].removedNodes, Eo), !1, w)
      },
      o = (h) => {
        for (let w = 0, { length: x } = h; w < x; w++) e.delete(h[w])
      },
      s = () => {
        n(u.takeRecords())
      },
      r = (h, w, x, E = new $o()) => {
        for (let T, $, k = 0, { length: S } = h; k < S; k++)
          if (!E.has(($ = h[k]))) {
            if ((E.add($), w))
              for (let A, L = c($), N = 0, { length: Y } = x; N < Y; N++)
                L.call($, (A = x[N])) &&
                  (e.has($) || e.set($, new $o()),
                  (T = e.get($)),
                  T.has(A) || (T.add(A), t.handle($, w, A)))
            else
              e.has($) &&
                ((T = e.get($)),
                e.delete($),
                T.forEach((A) => {
                  t.handle($, w, A)
                }))
            r(i($), w, x, E)
          }
      },
      c = (h) => h.matches || h.webkitMatchesSelector || h.msMatchesSelector,
      l = (h, w = !0) => {
        r(h, w, t.query)
      },
      i = (h) => (d.length ? h.querySelectorAll(d) : d),
      u = new Br(n),
      f = t.root || zr,
      { query: d } = t
    return (
      u.observe(f, { childList: !0, subtree: !0 }),
      l(i(f)),
      { drop: o, flush: s, observer: u, parse: l }
    )
  }
B.all ||
  (B.all = (t) =>
    new B((e) => {
      let { length: n } = t
      n || e()
      let o = 0
      for (; o < n; ) t[o++].then(s)
      o = 0
      function s() {
        ++o === n && e()
      }
    }))
var { create: Gr, defineProperty: Jr, keys: Fo } = Object,
  So = [],
  Yr = `"use strict;"
`,
  Qr = (t) => Z[t],
  Z = Gr(null),
  Ye = {},
  Xe = (t, e) => {
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
          r in Z ||
            So.push(
              new B((c) => {
                let l = Ye
                if (/^(?:[./]|https?:)/.test(r)) {
                  Z[r] = l
                  let i = new XMLHttpRequest()
                  i.open('get', r, !0),
                    i.send(null),
                    (i.onload = () => {
                      c((Z[r] = Qe(i.responseText)))
                    })
                } else
                  Jr(Z, r, {
                    get: () => l,
                    set: (i) => {
                      c((l = i))
                    },
                  })
              })
            )
        }),
        new B((r) => {
          B.all(So).then(() => r(s))
        }))
      : s
  },
  Xr = (t) => {
    let e = Fo(t || {}),
      n = e.map((o) => t[o]).concat(Qr)
    return (
      e.push('require'),
      (o) => {
        let s = {},
          r = { exports: s },
          c = e.concat('module', 'exports', Yr + Xe(o))
        Function.apply(null, c).apply(null, n.concat(r, s))
        let i = r.exports,
          u = Fo(i)
        return u.length === 1 && u[0] === 'default' ? i.default : i
      }
    )
  },
  Qe = Xr()
var Co = (t) => {
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
var Ao = ve({ dom: !0, useState: Mt }),
  It = [],
  { drop: Kr, parse: Zr } = Je({
    query: It,
    handle(t, e, n) {
      if ((Kr([t]), _e.has(n))) {
        let o = _e.get(n)
        _e.delete(n), It.splice(It.indexOf(n), 1), o()
      }
    },
  }),
  W = (t, e) => {
    t in Z && Z[t] !== Ye && console.warn('duplicated ' + t), (Z[t] = e)
  },
  Ze = (t) => {
    let e = new Ke()
    return (e.innerHTML = t), e
  },
  _e = new Map(),
  Vr = ['module.exports=function(module,exports){"use strict";', '}'],
  ts = () => {},
  Ve = () => {
    throw new Error('bad template')
  },
  Rt = (t, e) => t.getAttribute(e),
  gt = (t, e) => t.hasAttribute(e),
  es = (t, e, n, o) => {
    let s = { exports: o }
    t.call(e, s, o)
    let r = s.exports,
      c = r.default || r
    return n && Ao(e, c.props), c
  },
  Mo = (t, e) => (n) =>
    [].reduce.call(
      n.querySelectorAll('[' + t + ']'),
      (o, s) => {
        let { parentNode: r } = s
        do
          if (r === n) {
            let c = Rt(s, t)
            o[c] = e ? [].concat(o[c] || [], s) : s
            break
          } else if (/-/.test(r.tagName) || Rt(r, 'is')) break
        while ((r = r.parentNode))
        return o
      },
      {}
    ),
  ye = {
    define: Pt,
    render: Tt,
    html: qt,
    svg: fe,
    css: de,
    reactive: ve({ useState: Mt }),
    ref: Mo('ref', !1),
    slot: Mo('slot', !0),
  }
W('@uce/reactive', ye.reactive)
W('@uce/slot', ye.slot)
W('@uce', ye)
W('uce', ye)
var Oo = {
  augmentor: At,
  hooked: At,
  useState: Mt,
  useRef: Be,
  useContext: Re,
  createContext: Ie,
  useCallback: He,
  useMemo: se,
  useReducer: ie,
  useEffect: We,
  useLayoutEffect: ze,
}
W('augmentor', Oo)
W('uhooks', Oo)
W('qsa-observer', Je)
W('reactive-props', ve)
W('@webreflection/lie', B)
var Ke = Pt('uce-template', { extends: 'template', props: null, init: jo })
Ke.resolve = W
Ke.from = Ze
function jo(t) {
  let e = ($) => {
      let k = Co(E.replace(/(<!--(\{\{)|(\}\})-->)/g, '$2$3')),
        S = (w && Qe(i ? Vr.join($) : $)) || {},
        { observedAttributes: A, props: L, setup: N } = S,
        Y = !!E.trim(),
        y = i || Y || !!N,
        O = new WeakMap(),
        C = {
          props: null,
          extends: f ? h : 'element',
          init() {
            let g = this,
              { html: j } = g,
              M = !0,
              R = ts,
              ot = At(() => {
                if (M && ((M = !M), y)) {
                  ;(g.render = ot), L && Ao(g, L)
                  let vt = i ? es(S, g, u, {}) : N && S.setup(g)
                  if (Y) {
                    let lt = k.bind(g, vt || {})
                    R = () => {
                      j.apply(g, lt())
                    }
                  }
                }
                R()
              })
            ot(), Pe(ot) && O.set(g, ot)
          },
        }
      if ((d && (C.style = () => d), x && (C.attachShadow = { mode: x }), A)) {
        C.observedAttributes = A
        let g = (C.attributeChanged = function () {
          let { attributeChanged: j } = this
          j !== g && j.apply(this, arguments)
        })
      }
      if (w) {
        let g = (C.connected = function () {
            let { connected: M } = this
            M !== g && M.call(this)
          }),
          j = (C.disconnected = function () {
            let { disconnected: M } = this
            O.has(this) && De(O.get(this)), M !== j && M.call(this)
          })
      }
      for (let g in S) g in C || (C[g] = S[g])
      Pt(f || h, C)
    },
    { content: n, ownerDocument: o, parentNode: s } = this,
    { childNodes: r } = n || Ot(this.innerHTML),
    c = []
  s && this instanceof HTMLUnknownElement && s.removeChild(this)
  let l = e,
    i = !1,
    u = !1,
    f = '',
    d = '',
    h = '',
    w = '',
    x = '',
    E = ''
  for (let $ = 0; $ < r.length; $++) {
    let k = r[$]
    if (k.nodeType === 1) {
      let { tagName: S } = k,
        A = gt(k, 'is')
      ;/^style$/i.test(S)
        ? c.push(k)
        : A || /-/i.test(S)
        ? (h && Ve(),
          (h = S.toLowerCase()),
          (E = k.innerHTML),
          A && (f = Rt(k, 'is').toLowerCase()),
          gt(k, 'shadow') && (x = Rt(k, 'shadow') || 'open'))
        : /^script$/i.test(S) &&
          (w && Ve(),
          (i = gt(k, 'setup')),
          (u = i && Rt(k, 'setup') === 'props'),
          (w = k.textContent),
          (l = () => {
            Xe(w, !0).then(e)
          }))
    }
  }
  let T = f ? h + '[is="' + f + '"]' : h
  if (!T) return setTimeout(t ? Ve : jo.bind(this), 0, !0)
  for (let $ = c.length; $--; ) {
    let k = c[$],
      { textContent: S } = k
    if (gt(k, 'shadow')) E = '<style>' + S + '</style>' + E
    else if (gt(k, 'scoped')) {
      let A = []
      d += S.replace(/\{([^}]+?)\}/g, (L, N) => '' + A.push(N) + ',')
        .split(',')
        .map((L) => (L.trim() ? T + ' ' + L.trim() : ''))
        .join(
          `,
`
        )
        .replace(/\x01(\d+),/g, (L, N) => '{' + A[--N] + '}')
        .replace(
          /(,\n)+/g,
          `,
`
        )
    } else d += S
  }
  gt(this, 'lazy') ? (_e.set(T, l), It.push(T), Zr(o.querySelectorAll(It))) : l()
}
function rc(t, e, n) {
  tn.debug(`${t} script started!`),
    W('../store.js', e),
    An({
      container: document.querySelector('section .uce'),
      on(s) {
        ns(`../components/${s}.uce`)
          .then((r) => r.text())
          .then((r) => {
            let c = Ze(r)
            tn.debug(`${t} Loader just loaded <${s}>`, c), document.body.appendChild(c)
          })
      },
    }),
    new n({
      target: document.querySelector('section .svelte'),
      props: { connect: e.connect },
    }) && tn.debug(`${t} & Svelte working fine`)
}
var ic = () => {}
var fc = (t = 21) => {
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
var pc = {
  todos: [
    { id: 'R8d7ysIEl94ziepCxTZwX', text: 'double click me!', done: !1 },
    { id: 'jt9oofKsxbwknDGzIa6be', text: 'I am, by default, DONE', done: !0 },
  ],
}
export { pc as a, ic as b, H as c, fc as d, rc as e, Ae as f, cs as g, V as h, As as i }
/*! (c) Andrea Giammarchi - ISC */
/*! (c) Andrea Giammarchi @webreflection ISC */
//# sourceMappingURL=chunk.FQRIFGNU.js.map
