import { a as ne, b as oe, c as je, d as Ko } from './chunk.V3EKYGLP.js'
import { c as To, d as yn } from './chunk.LYWHNSVE.js'
import { a as lr } from './chunk.UAU2O4PE.js'
import { a as rr, b as Ve } from './chunk.R5H7EMPM.js'
var ur = (t, e) => {
  for (var n in e) lr(t, n, { get: e[n], enumerable: !0 })
}
var Vt = yn((_r, vn) => {
  vn.exports = {}
})
var Wt = yn((br, $n) => {
  $n.exports = {}
})
var zt = yn(($r, Cn) => {
  Cn.exports = {}
})
function H() {}
function cn(t) {
  return t()
}
function ln() {
  return Object.create(null)
}
function at(t) {
  t.forEach(cn)
}
function vt(t) {
  return typeof t == 'function'
}
function Z(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
function un(t) {
  return Object.keys(t).length === 0
}
var fr = typeof window != 'undefined'
var dr = new Set()
function G(t, e) {
  t.appendChild(e)
}
function U(t, e, n) {
  t.insertBefore(e, n || null)
}
function W(t) {
  t.parentNode.removeChild(t)
}
function an(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}
function tt(t) {
  return document.createElement(t)
}
function et(t) {
  return document.createTextNode(t)
}
function _e() {
  return et(' ')
}
function yt(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o)
}
function fn(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e)
  }
}
function Q(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function go(t) {
  return Array.from(t.childNodes)
}
function bt(t, e) {
  ;(e = '' + e), t.wholeText !== e && (t.data = e)
}
function ve(t, e) {
  t.value = e == null ? '' : e
}
function ye(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e)
}
var pr = new Set()
var dn
function Nt(t) {
  dn = t
}
var wt = []
var pn = [],
  Pt = [],
  hn = [],
  _o = Promise.resolve(),
  be = !1
function vo() {
  be || ((be = !0), _o.then(mn))
}
function we(t) {
  Pt.push(t)
}
var xe = !1,
  $e = new Set()
function mn() {
  if (!xe) {
    xe = !0
    do {
      for (let t = 0; t < wt.length; t += 1) {
        let e = wt[t]
        Nt(e), yo(e.$$)
      }
      for (Nt(null), wt.length = 0; pn.length; ) pn.pop()()
      for (let t = 0; t < Pt.length; t += 1) {
        let e = Pt[t]
        $e.has(e) || ($e.add(e), e())
      }
      Pt.length = 0
    } while (wt.length)
    for (; hn.length; ) hn.pop()()
    ;(be = !1), (xe = !1), $e.clear()
  }
}
function yo(t) {
  if (t.fragment !== null) {
    t.update(), at(t.before_update)
    let e = t.dirty
    ;(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(we)
  }
}
var It = new Set(),
  bo
function xt(t, e) {
  t && t.i && (It.delete(t), t.i(e))
}
function Rt(t, e, n, o) {
  if (t && t.o) {
    if (It.has(t)) return
    It.add(t),
      bo.c.push(() => {
        It.delete(t), o && (n && t.d(1), o())
      }),
      t.o(e)
  }
}
var hr =
  typeof window != 'undefined'
    ? window
    : typeof globalThis != 'undefined'
    ? globalThis
    : global
var mr = new Set([
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
function Ht(t) {
  t && t.c()
}
function $t(t, e, n) {
  let { fragment: o, on_mount: r, on_destroy: s, after_update: i } = t.$$
  o && o.m(e, n),
    we(() => {
      let l = r.map(cn).filter(vt)
      s ? s.push(...l) : at(l), (t.$$.on_mount = [])
    }),
    i.forEach(we)
}
function ft(t, e) {
  let n = t.$$
  n.fragment !== null &&
    (at(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []))
}
function wo(t, e) {
  t.$$.dirty[0] === -1 && (wt.push(t), vo(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function nt(t, e, n, o, r, s, i = [-1]) {
  let l = dn
  Nt(t)
  let u = (t.$$ = {
      fragment: null,
      ctx: null,
      props: s,
      update: H,
      not_equal: r,
      bound: ln(),
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(l ? l.$$.context : []),
      callbacks: ln(),
      dirty: i,
      skip_bound: !1,
    }),
    p = !1
  if (
    ((u.ctx = n
      ? n(t, e.props || {}, (f, m, ...h) => {
          let w = h.length ? h[0] : m
          return (
            u.ctx &&
              r(u.ctx[f], (u.ctx[f] = w)) &&
              (!u.skip_bound && u.bound[f] && u.bound[f](w), p && wo(t, f)),
            m
          )
        })
      : []),
    u.update(),
    (p = !0),
    at(u.before_update),
    (u.fragment = o ? o(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      let f = go(e.target)
      u.fragment && u.fragment.l(f), f.forEach(W)
    } else u.fragment && u.fragment.c()
    e.intro && xt(t.$$.fragment), $t(t, e.target, e.anchor), mn()
  }
  Nt(l)
}
var xo
typeof HTMLElement == 'function' &&
  (xo = class extends HTMLElement {
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
      ft(this, 1), (this.$destroy = H)
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
        !un(t) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1))
    }
  })
var X = class {
  $destroy() {
    ft(this, 1), (this.$destroy = H)
  }
  $on(e, n) {
    let o = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
    return (
      o.push(n),
      () => {
        let r = o.indexOf(n)
        r !== -1 && o.splice(r, 1)
      }
    )
  }
  $set(e) {
    this.$$set &&
      !un(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
  }
}
var $o = /^(?:annotation-xml|color-profile|font-face(?:|-format|-name|-src|-uri)|missing-glyph)$/i,
  gn = new Set(),
  _n = (t) => {
    let e = t.container || document,
      n = (s) => {
        for (let i = 0, { length: l } = s; i < l; i++)
          for (let { addedNodes: u } = s[i], p = 0, { length: f } = u; p < f; p++) {
            let m = u[p],
              { children: h, getAttribute: w, tagName: F } = m
            if (w) {
              let $ = (w.call(m, 'is') || F).toLowerCase()
              0 < $.indexOf('-') &&
                !gn.has($) &&
                !$o.test($) &&
                (gn.add($), customElements.get($) || t.on($)),
                o(h)
            }
          }
      },
      o = (s) => {
        n([{ addedNodes: s }])
      }
    o([document == e ? e.documentElement : e])
    let r = new MutationObserver(n)
    return r.observe(e, { subtree: !0, childList: !0 }), r
  }
function Fo(t) {
  let e, n, o, r
  return {
    c() {
      ;(e = tt('form')),
        (n = tt('input')),
        Q(n, 'placeholder', 'Add new task...'),
        Q(n, 'class', 'svelte-s6yrar')
    },
    m(s, i) {
      U(s, e, i),
        G(e, n),
        ve(n, t[0]),
        o ||
          ((r = [
            yt(n, 'input', t[3]),
            yt(
              e,
              'submit',
              fn(function () {
                vt(t[1]) && t[1].apply(this, arguments)
              })
            ),
          ]),
          (o = !0))
    },
    p(s, [i]) {
      ;(t = s), i & 1 && n.value !== t[0] && ve(n, t[0])
    },
    i: H,
    o: H,
    d(s) {
      s && W(e), (o = !1), at(r)
    },
  }
}
var bn = ''
function ko(t, e, n) {
  let { connect: o } = e,
    r = void 0,
    s = bn,
    i
  function l({ add: p }) {
    n(
      1,
      (i = () => {
        p(s), n(0, (s = bn))
      })
    )
  }
  o(r, l)
  function u() {
    ;(s = this.value), n(0, s)
  }
  return (
    (t.$$set = (p) => {
      'connect' in p && n(2, (o = p.connect))
    }),
    [s, i, o, u]
  )
}
var wn = class extends X {
    constructor(e) {
      super()
      nt(this, e, ko, Fo, Z, { connect: 2 })
    }
  },
  xn = wn
Vt()
function Fn(t, e, n) {
  let o = t.slice()
  return (o[5] = e[n].id), (o[6] = e[n].text), (o[7] = e[n].done), o
}
function kn(t) {
  let e,
    n = t[6] + '',
    o,
    r,
    s,
    i
  return {
    c() {
      ;(e = tt('li')),
        (o = et(n)),
        Q(e, 'data-id', (r = t[5])),
        Q(e, 'class', 'svelte-corox1'),
        ye(e, 'done', t[7])
    },
    m(l, u) {
      U(l, e, u),
        G(e, o),
        s ||
          ((i = yt(e, 'dblclick', function () {
            vt(t[1]) && t[1].apply(this, arguments)
          })),
          (s = !0))
    },
    p(l, u) {
      ;(t = l),
        u & 1 && n !== (n = t[6] + '') && bt(o, n),
        u & 1 && r !== (r = t[5]) && Q(e, 'data-id', r),
        u & 1 && ye(e, 'done', t[7])
    },
    d(l) {
      l && W(e), (s = !1), i()
    },
  }
}
function Eo(t) {
  let e,
    n = t[0],
    o = []
  for (let r = 0; r < n.length; r += 1) o[r] = kn(Fn(t, n, r))
  return {
    c() {
      e = tt('ul')
      for (let r = 0; r < o.length; r += 1) o[r].c()
    },
    m(r, s) {
      U(r, e, s)
      for (let i = 0; i < o.length; i += 1) o[i].m(e, null)
    },
    p(r, [s]) {
      if (s & 3) {
        n = r[0]
        let i
        for (i = 0; i < n.length; i += 1) {
          let l = Fn(r, n, i)
          o[i] ? o[i].p(l, s) : ((o[i] = kn(l)), o[i].c(), o[i].m(e, null))
        }
        for (; i < o.length; i += 1) o[i].d(1)
        o.length = n.length
      }
    },
    i: H,
    o: H,
    d(r) {
      r && W(e), an(o, r)
    },
  }
}
function So(t, e, n) {
  let { connect: o } = e,
    r = [],
    s = () => {}
  function i(u) {
    n(0, (r = u.todos))
  }
  function l({ toggle: u }) {
    n(1, (s = (p) => u(p.target.dataset.id)))
  }
  return (
    o(i, l),
    (t.$$set = (u) => {
      'connect' in u && n(2, (o = u.connect))
    }),
    [r, s, o]
  )
}
var En = class extends X {
    constructor(e) {
      super()
      nt(this, e, So, Eo, Z, { connect: 2 })
    }
  },
  Sn = En
Wt()
function Co(t) {
  let e, n, o, r, s
  return {
    c() {
      ;(e = tt('footer')),
        (n = et('Done: ')),
        (o = et(t[1])),
        (r = et(' / ')),
        (s = et(t[0])),
        Q(e, 'class', 'svelte-1o8cxar')
    },
    m(i, l) {
      U(i, e, l), G(e, n), G(e, o), G(e, r), G(e, s)
    },
    p(i, [l]) {
      l & 2 && bt(o, i[1]), l & 1 && bt(s, i[0])
    },
    i: H,
    o: H,
    d(i) {
      i && W(e)
    },
  }
}
function Mo(t, e, n) {
  let { connect: o } = e,
    r = [],
    s = 0,
    i = 0
  function l(u) {
    n(3, (r = u.todos))
  }
  return (
    o(l),
    (t.$$set = (u) => {
      'connect' in u && n(2, (o = u.connect))
    }),
    (t.$$.update = () => {
      if (t.$$.dirty & 8) {
        t: n(0, (s = r.length))
      }
      if (t.$$.dirty & 8) {
        t: n(1, (i = r.filter((u) => u.done).length))
      }
    }),
    [s, i, o, r]
  )
}
var Mn = class extends X {
    constructor(e) {
      super()
      nt(this, e, Mo, Co, Z, { connect: 2 })
    }
  },
  On = Mn
zt()
function Oo(t) {
  let e, n, o, r, s, i
  return (
    (e = new xn({ props: { connect: t[0] } })),
    (o = new Sn({ props: { connect: t[0] } })),
    (s = new On({ props: { connect: t[0] } })),
    {
      c() {
        Ht(e.$$.fragment), (n = _e()), Ht(o.$$.fragment), (r = _e()), Ht(s.$$.fragment)
      },
      m(l, u) {
        $t(e, l, u), U(l, n, u), $t(o, l, u), U(l, r, u), $t(s, l, u), (i = !0)
      },
      p(l, [u]) {
        let p = {}
        u & 1 && (p.connect = l[0]), e.$set(p)
        let f = {}
        u & 1 && (f.connect = l[0]), o.$set(f)
        let m = {}
        u & 1 && (m.connect = l[0]), s.$set(m)
      },
      i(l) {
        i ||
          (xt(e.$$.fragment, l), xt(o.$$.fragment, l), xt(s.$$.fragment, l), (i = !0))
      },
      o(l) {
        Rt(e.$$.fragment, l), Rt(o.$$.fragment, l), Rt(s.$$.fragment, l), (i = !1)
      },
      d(l) {
        ft(e, l), l && W(n), ft(o, l), l && W(r), ft(s, l)
      },
    }
  )
}
function Ao(t, e, n) {
  let { connect: o } = e
  return (
    (t.$$set = (r) => {
      'connect' in r && n(0, (o = r.connect))
    }),
    [o]
  )
}
var An = class extends X {
    constructor(e) {
      super()
      nt(this, e, Ao, Oo, Z, { connect: 0 })
    }
  },
  Ar = An
;(function () {
  'use strict'
  var t =
      typeof Promise == 'function'
        ? Promise
        : function (b) {
            var c = [],
              a = 0,
              _
            return (
              b(function (v) {
                ;(_ = v), (a = 1), c.splice(0).forEach(d)
              }),
              { then: d }
            )
            function d(v) {
              return a ? setTimeout(v, 0, _) : c.push(v), this
            }
          },
    e = function (b, c) {
      var a = function (v) {
          for (var E = 0, N = v.length; E < N; E++) _(v[E])
        },
        _ = function (v) {
          var E = v.target,
            N = v.attributeName,
            lt = v.oldValue
          E.attributeChangedCallback(N, lt, E.getAttribute(N))
        }
      return function (d, v) {
        var E = d.constructor.observedAttributes
        return (
          E &&
            b(v).then(function () {
              new c(a).observe(d, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: E,
              })
              for (var N = 0, lt = E.length; N < lt; N++)
                d.hasAttribute(E[N]) &&
                  _({ target: d, attributeName: E[N], oldValue: null })
            }),
          d
        )
      }
    },
    n = self,
    o = n.document,
    r = n.MutationObserver,
    s = n.Set,
    i = n.WeakMap,
    l = function (c) {
      return 'querySelectorAll' in c
    },
    u = [].filter,
    p = function (b) {
      var c = new i(),
        a = function (T) {
          var P = b.query
          if (P.length)
            for (var B = 0, _t = T.length; B < _t; B++)
              v(u.call(T[B].addedNodes, l), !0, P),
                v(u.call(T[B].removedNodes, l), !1, P)
        },
        _ = function (T) {
          for (var P = 0, B = T.length; P < B; P++) c.delete(T[P])
        },
        d = function () {
          a(pe.takeRecords())
        },
        v = function st(T, P, B) {
          for (
            var _t =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : new s(),
              uo = function (ut, I, fo, ir) {
                if (!_t.has((I = T[fo]))) {
                  if ((_t.add(I), P))
                    for (var Tt, po = E(I), ge = 0, ho = B.length; ge < ho; ge++)
                      po.call(I, (Tt = B[ge])) &&
                        (c.has(I) || c.set(I, new s()),
                        (ut = c.get(I)),
                        ut.has(Tt) || (ut.add(Tt), b.handle(I, P, Tt)))
                  else
                    c.has(I) &&
                      ((ut = c.get(I)),
                      c.delete(I),
                      ut.forEach(function (mo) {
                        b.handle(I, P, mo)
                      }))
                  st(lt(I), P, B, _t)
                }
                ;(rn = ut), (sn = I)
              },
              rn,
              sn,
              me = 0,
              ao = T.length;
            me < ao;
            me++
          )
            uo(rn, sn, me)
        },
        E = function (T) {
          return T.matches || T.webkitMatchesSelector || T.msMatchesSelector
        },
        N = function (T) {
          var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
          v(T, P, b.query)
        },
        lt = function (T) {
          return he.length ? T.querySelectorAll(he) : he
        },
        pe = new r(a),
        on = b.root || o,
        he = b.query
      return (
        pe.observe(on, { childList: !0, subtree: !0 }),
        N(lt(on)),
        { drop: _, flush: d, observer: pe, parse: N }
      )
    },
    f = self,
    m = f.document,
    h = f.Map,
    w = f.MutationObserver,
    F = f.Object,
    $ = f.Set,
    D = f.WeakMap,
    x = f.Element,
    k = f.HTMLElement,
    S = f.Node,
    M = f.Error,
    L = f.TypeError,
    q = f.Reflect,
    Y = self.Promise || t,
    y = F.defineProperty,
    A = F.keys,
    C = F.getOwnPropertyNames,
    g = F.setPrototypeOf,
    j = !self.customElements,
    O = function (c) {
      for (var a = A(c), _ = [], d = a.length, v = 0; v < d; v++)
        (_[v] = c[a[v]]), delete c[a[v]]
      return function () {
        for (var E = 0; E < d; E++) c[a[E]] = _[E]
      }
    }
  if (j) {
    var R = function () {
        var c = this.constructor
        if (!ht.has(c)) throw new L('Illegal constructor')
        var a = ht.get(c)
        if (jt) return Be(jt, a)
        var _ = ot.call(m, a)
        return Be(g(_, c.prototype), a)
      },
      ot = m.createElement,
      ht = new h(),
      ct = new h(),
      We = new h(),
      mt = new h(),
      ze = [],
      Qn = function (c, a, _) {
        var d = We.get(_)
        if (a && !d.isPrototypeOf(c)) {
          var v = O(c)
          jt = g(c, d)
          try {
            new d.constructor()
          } finally {
            ;(jt = null), v()
          }
        }
        var E = ''.concat(a ? '' : 'dis', 'connectedCallback')
        E in d && c[E]()
      },
      Xn = p({ query: ze, handle: Qn }),
      Kn = Xn.parse,
      jt = null,
      le = function (c) {
        if (!ct.has(c)) {
          var a,
            _ = new t(function (d) {
              a = d
            })
          ct.set(c, { $: _, _: a })
        }
        return ct.get(c).$
      },
      Be = e(le, w)
    y(self, 'customElements', {
      configurable: !0,
      value: {
        define: function (c, a) {
          if (mt.has(c))
            throw new M(
              'the name "'.concat(c, '" has already been used with this registry')
            )
          ht.set(a, c),
            We.set(c, a.prototype),
            mt.set(c, a),
            ze.push(c),
            le(c).then(function () {
              Kn(m.querySelectorAll(c))
            }),
            ct.get(c)._(a)
        },
        get: function (c) {
          return mt.get(c)
        },
        whenDefined: le,
      },
    }),
      y((R.prototype = k.prototype), 'constructor', { value: R }),
      y(self, 'HTMLElement', { configurable: !0, value: R }),
      y(m, 'createElement', {
        configurable: !0,
        value: function (c, a) {
          var _ = a && a.is,
            d = _ ? mt.get(_) : mt.get(c)
          return d ? new d() : ot.call(m, c)
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
      var Ue = function b() {
        return self.Reflect.construct(HTMLLIElement, [], b)
      }
      Ue.prototype = HTMLLIElement.prototype
      var Je = 'extends-li'
      self.customElements.define('extends-li', Ue, { extends: 'li' }),
        (j = m.createElement('li', { is: Je }).outerHTML.indexOf(Je) < 0)
      var Ye = self.customElements,
        Zn = Ye.get,
        to = Ye.whenDefined
      y(self.customElements, 'whenDefined', {
        configurable: !0,
        value: function (c) {
          var a = this
          return to.call(this, c).then(function (_) {
            return _ || Zn.call(a, c)
          })
        },
      })
    } catch (b) {
      j = !j
    }
  if (j) {
    var Ge = function (c) {
        var a = ue.get(c),
          _ = a.parse,
          d = a.root
        _(d.querySelectorAll(this), c.isConnected)
      },
      rt = self.customElements,
      Qe = x.prototype.attachShadow,
      Xe = m.createElement,
      eo = rt.define,
      no = rt.get,
      oo = q || {
        construct: function (c) {
          return c.call(this)
        },
      },
      ro = oo.construct,
      ue = new D(),
      ae = new $(),
      Lt = new h(),
      qt = new h(),
      Ke = new h(),
      fe = new h(),
      Ze = [],
      gt = [],
      tn = function (c) {
        return fe.get(c) || no.call(rt, c)
      },
      en = function (c, a, _) {
        var d = Ke.get(_)
        if (a && !d.isPrototypeOf(c)) {
          var v = O(c)
          Dt = g(c, d)
          try {
            new d.constructor()
          } finally {
            ;(Dt = null), v()
          }
        }
        var E = ''.concat(a ? '' : 'dis', 'connectedCallback')
        E in d && c[E]()
      },
      so = p({ query: gt, handle: en }),
      io = so.parse,
      co = p({
        query: Ze,
        handle: function (c, a) {
          ue.has(c) && (a ? ae.add(c) : ae.delete(c), gt.length && Ge.call(gt, c))
        },
      }),
      lo = co.parse,
      de = function (c) {
        if (!qt.has(c)) {
          var a,
            _ = new Y(function (d) {
              a = d
            })
          qt.set(c, { $: _, _: a })
        }
        return qt.get(c).$
      },
      nn = e(de, w),
      Dt = null
    C(self)
      .filter(function (b) {
        return /^HTML/.test(b)
      })
      .forEach(function (b) {
        var c = self[b]
        function a() {
          var _ = this.constructor
          if (!Lt.has(_)) throw new L('Illegal constructor')
          var d = Lt.get(_),
            v = d.is,
            E = d.tag
          if (v) {
            if (Dt) return nn(Dt, v)
            var N = Xe.call(m, E)
            return N.setAttribute('is', v), nn(g(N, _.prototype), v)
          } else return ro.call(this, c, [], _)
        }
        y((a.prototype = c.prototype), 'constructor', { value: a }),
          y(self, b, { value: a })
      }),
      y(m, 'createElement', {
        configurable: !0,
        value: function (c, a) {
          var _ = a && a.is
          if (_) {
            var d = fe.get(_)
            if (d && Lt.get(d).tag === c) return new d()
          }
          var v = Xe.call(m, c)
          return _ && v.setAttribute('is', _), v
        },
      }),
      Qe &&
        y(x.prototype, 'attachShadow', {
          configurable: !0,
          value: function () {
            var c = Qe.apply(this, arguments),
              a = p({ query: gt, root: c, handle: en }),
              _ = a.parse
            return ue.set(this, { root: c, parse: _ }), c
          },
        }),
      y(rt, 'get', { configurable: !0, value: tn }),
      y(rt, 'whenDefined', { configurable: !0, value: de }),
      y(rt, 'define', {
        configurable: !0,
        value: function (c, a, _) {
          if (tn(c))
            throw new M("'".concat(c, "' has already been defined as a custom element"))
          var d,
            v = _ && _.extends
          Lt.set(a, v ? { is: c, tag: v } : { is: '', tag: c }),
            v
              ? ((d = ''.concat(v, '[is="').concat(c, '"]')),
                Ke.set(d, a.prototype),
                fe.set(c, a),
                gt.push(d))
              : (eo.apply(rt, arguments), Ze.push((d = c))),
            de(c).then(function () {
              v
                ? (io(m.querySelectorAll(d)), ae.forEach(Ge, [d]))
                : lo(m.querySelectorAll(d))
            }),
            qt.get(c)._(a)
        },
      })
  }
})()
var z =
  typeof Promise == 'function'
    ? Promise
    : function (t) {
        let e = [],
          n = 0,
          o
        return (
          t((s) => {
            ;(o = s), (n = 1), e.splice(0).forEach(r)
          }),
          { then: r }
        )
        function r(s) {
          return n ? setTimeout(s, 0, o) : e.push(s), this
        }
      }
var Bt = null,
  Ut = new Set(),
  jn = (t) => {
    let { $: e, r: n, h: o } = t
    Ft(n) && (it.get(o).delete(t), n()), Ft((t.r = e())) && it.get(o).add(t)
  },
  jo = () => {
    let t = Ut
    ;(Ut = new Set()),
      t.forEach(({ h: e, c: n, a: o, e: r }) => {
        r && e.apply(n, o)
      })
  },
  it = new WeakMap(),
  kt = [],
  Jt = []
function Yt(t, e) {
  return t !== this[e]
}
var Fe = (t) => {
    let e = it.get(t)
    e &&
      Gt.then(() => {
        e.forEach((n) => {
          n.r(), (n.r = null)
        }),
          e.clear()
      })
  },
  J = () => Bt,
  ke = (t) => it.has(t),
  Ft = (t) => typeof t == 'function',
  Et = (t) => {
    let e = { h: n, c: null, a: null, e: 0, i: 0, s: [] }
    return n
    function n() {
      let o = Bt
      ;(Bt = e), (e.e = e.i = 0)
      try {
        return t.apply((e.c = this), (e.a = arguments))
      } finally {
        ;(Bt = o),
          kt.length && Gt.then(kt.forEach.bind(kt.splice(0), jn)),
          Jt.length && Jt.splice(0).forEach(jn)
      }
    }
  },
  Ln = (t) => {
    Ut.has(t) || ((t.e = 1), Ut.add(t), Gt.then(jo))
  },
  Gt = new z((t) => t())
var Ee = (t) => ({ _: new Set(), provide: Lo, value: t }),
  Se = ({ _: t, value: e }) => (t.add(J()), e)
function Lo(t) {
  let { _: e, value: n } = this
  n !== t &&
    ((this._ = new Set()),
    (this.value = t),
    e.forEach(({ h: o, c: r, a: s }) => {
      o.apply(r, s)
    }))
}
var Ce = (t, e) => Qt(() => t, e),
  Qt = (t, e) => {
    let n = J(),
      { i: o, s: r } = n
    return (
      (o === r.length || !e || e.some(Yt, r[o]._)) && (r[o] = { $: t(), _: e }),
      r[n.i++].$
    )
  }
var qn = (t) => (e, n) => {
    let o = J(),
      { i: r, s, h: i } = o,
      l = r === s.length
    o.i++,
      l && (it.has(i) || it.set(i, new Set()), (s[r] = { $: e, _: n, r: null, h: i })),
      (l || !n || n.some(Yt, s[r]._)) && t.push(s[r]),
      (s[r].$ = e),
      (s[r]._ = n)
  },
  Me = qn(kt),
  Oe = qn(Jt)
var Dn = (t, e) => (Ft(e) ? e(t) : e),
  Xt = (t, e, n) => {
    let o = J(),
      { i: r, s } = o
    r === s.length &&
      s.push({
        $: Ft(n) ? n(e) : Dn(void 0, e),
        set: (u) => {
          ;(s[r].$ = t(s[r].$, u)), Ln(o)
        },
      })
    let { $: i, set: l } = s[o.i++]
    return [i, l]
  },
  St = (t) => Xt(Dn, t)
var Ae = (t) => {
  let e = J(),
    { i: n, s: o } = e
  return n === o.length && o.push({ current: t }), o[e.i++]
}
function Kt(t) {
  for (var e = t[0], n = 1, o = arguments.length; n < o; n++) e += arguments[n] + t[n]
  return e
}
var { defineProperties: Zt, keys: qo } = Object,
  Do = (t, e, n, o, r) => ({
    configurable: !0,
    get: () => o,
    set(s) {
      ;(t || s !== o || (e && typeof s == 'object' && s)) &&
        ((o = s), n ? r.call(this, o) : r.call(this))
    },
  }),
  te = (t, e, n, o, r, s) => {
    let i = {},
      l = r !== Ct,
      u = [n, o, l]
    for (let p = qo(t), f = 0; f < p.length; f++) {
      let m = e(t, p[f]),
        h = l ? r(m) : [m, r]
      s && (h[1] = s), (i[p[f]] = Do.apply(null, u.concat(h)))
    }
    return i
  },
  Ct = () => {}
var ee = ({
  all: t = !1,
  shallow: e = !0,
  useState: n = Ct,
  getAttribute: o = (r, s) => r.getAttribute(s),
} = {}) => (r, s, i) => {
  let u = te(
    s,
    (p, f) => {
      let m = p[f],
        h = typeof m
      return (
        r.hasOwnProperty(f)
          ? ((m = r[f]), delete r[f])
          : r.hasAttribute(f) &&
            ((m = o(r, f)),
            h == 'number'
              ? (m = +m)
              : h == 'boolean' && (m = !/^(?:false|0|)$/.test(m))),
        m
      )
    },
    t,
    e,
    n,
    i
  )
  return Zt(r, u)
}
var No = ee({ dom: !0 }),
  re = customElements,
  { define: Po } = re,
  { create: Io, defineProperties: Le, getOwnPropertyDescriptor: Ro, keys: Tn } = Object,
  dt = 'element',
  qe = To(new Map([[dt, { c: HTMLElement, e: dt }]])),
  Nn = (t) => document.createElement(t),
  Pn = (t) => qe.get(t) || qe.set(t, { c: Nn(t).constructor, e: t }),
  Mt = (t, e) => {
    let {
        attachShadow: n,
        attributeChanged: o,
        bound: r,
        connected: s,
        disconnected: i,
        handleEvent: l,
        init: u,
        observedAttributes: p,
        props: f,
        render: m,
        style: h,
      } = e,
      w = new WeakMap(),
      F = {},
      $ = {},
      D = [],
      x = Io(null),
      k = (y, A, C) => {
        if (!w.has(y)) {
          w.set(y, 0),
            Le(y, {
              html: { configurable: !0, value: Vo.bind(n ? y.attachShadow(n) : y) },
            })
          for (let g = 0; g < S; g++) {
            let { type: j, options: O } = D[g]
            y.addEventListener(j, y, O)
          }
          r && r.forEach(Ho, y),
            f && No(y, f, m),
            (u || m) && (u || m).call(y),
            A && (y[A] = C)
        }
      }
    for (let y = Tn(e), A = 0, { length: C } = y; A < C; A++) {
      let g = y[A]
      if (/^on./.test(g) && !/Options$/.test(g)) {
        let j = e[g + 'Options'] || !1,
          O = g.toLowerCase(),
          R = O.slice(2)
        D.push({ type: R, options: j }),
          (x[R] = g),
          O !== g &&
            ((R = O.slice(2, 3) + g.slice(3)),
            (x[R] = g),
            D.push({ type: R, options: j }))
      }
      switch (g) {
        case 'attachShadow':
        case 'constructor':
        case 'observedAttributes':
        case 'style':
          break
        default:
          $[g] = Ro(e, g)
      }
    }
    let { length: S } = D
    if (
      (S &&
        !l &&
        ($.handleEvent = {
          value(y) {
            this[x[y.type]](y)
          },
        }),
      f !== null)
    )
      if (f)
        for (let y = Tn(f), A = 0; A < y.length; A++) {
          let C = y[A]
          $[C] = {
            get() {
              return k(this), f[C]
            },
            set(g) {
              k(this, C, g)
            },
          }
        }
      else
        $.props = {
          get() {
            let y = {}
            for (let { attributes: A } = this, { length: C } = A, g = 0; g < C; g++) {
              let { name: j, value: O } = A[g]
              y[j] = O
            }
            return y
          },
        }
    p && (F.observedAttributes = { value: p }),
      ($.attributeChangedCallback = {
        value() {
          k(this), o && o.apply(this, arguments)
        },
      }),
      ($.connectedCallback = {
        value() {
          k(this), s && s.call(this)
        },
      }),
      i && ($.disconnectedCallback = { value: i })
    let { c: M, e: L } = Pn(e.extends || dt)
    class q extends M {}
    Le(q, F), Le(q.prototype, $)
    let Y = [t, q]
    return (
      L !== dt && Y.push({ extends: L }),
      Po.apply(re, Y),
      qe.set(t, { c: q, e: L }),
      h &&
        (document.head.appendChild(Nn('style')).textContent = h(
          L === dt ? t : L + '[is="' + t + '"]'
        )),
      q
    )
  }
re.get('uce-lib') ||
  re.define(
    'uce-lib',
    class extends Pn(dt).c {
      static get define() {
        return Mt
      }
      static get render() {
        return ne
      }
      static get html() {
        return oe
      }
      static get svg() {
        return je
      }
      static get css() {
        return Kt
      }
    }
  )
function Ho(t) {
  this[t] = this[t].bind(this)
}
function Vo() {
  return ne(this, oe.apply(null, arguments))
}
var Wo = (t, e) => t[e],
  In = ({ all: t = !1, shallow: e = !0, useState: n = Ct } = {}) => (o, r) =>
    Zt({}, te(o, Wo, t, e, n, r))
var se = (t = {}) => (t.dom ? ee : In)(t)
var { document: zo, MutationObserver: Bo, Set: Rn, WeakMap: Uo } = self,
  Hn = (t) => 'querySelectorAll' in t,
  { filter: Vn } = [],
  De = (t) => {
    let e = new Uo(),
      n = (h) => {
        let { query: w } = t
        if (w.length)
          for (let F = 0, { length: $ } = h; F < $; F++)
            s(Vn.call(h[F].addedNodes, Hn), !0, w),
              s(Vn.call(h[F].removedNodes, Hn), !1, w)
      },
      o = (h) => {
        for (let w = 0, { length: F } = h; w < F; w++) e.delete(h[w])
      },
      r = () => {
        n(p.takeRecords())
      },
      s = (h, w, F, $ = new Rn()) => {
        for (let D, x, k = 0, { length: S } = h; k < S; k++)
          if (!$.has((x = h[k]))) {
            if (($.add(x), w))
              for (let M, L = i(x), q = 0, { length: Y } = F; q < Y; q++)
                L.call(x, (M = F[q])) &&
                  (e.has(x) || e.set(x, new Rn()),
                  (D = e.get(x)),
                  D.has(M) || (D.add(M), t.handle(x, w, M)))
            else
              e.has(x) &&
                ((D = e.get(x)),
                e.delete(x),
                D.forEach((M) => {
                  t.handle(x, w, M)
                }))
            s(u(x), w, F, $)
          }
      },
      i = (h) => h.matches || h.webkitMatchesSelector || h.msMatchesSelector,
      l = (h, w = !0) => {
        s(h, w, t.query)
      },
      u = (h) => (m.length ? h.querySelectorAll(m) : m),
      p = new Bo(n),
      f = t.root || zo,
      { query: m } = t
    return (
      p.observe(f, { childList: !0, subtree: !0 }),
      l(u(f)),
      { drop: o, flush: r, observer: p, parse: l }
    )
  }
z.all ||
  (z.all = (t) =>
    new z((e) => {
      let { length: n } = t
      n || e()
      let o = 0
      for (; o < n; ) t[o++].then(r)
      o = 0
      function r() {
        ++o === n && e()
      }
    }))
var { create: Jo, defineProperty: Yo, keys: Wn } = Object,
  zn = [],
  Go = `"use strict;"
`,
  Qo = (t) => K[t],
  K = Jo(null),
  Te = {},
  Pe = (t, e) => {
    let n = [],
      o = [],
      r = t
        .replace(
          /(^|[\r\n])\s*import\s*((['|"])[^\3]+?\3)/g,
          (s, i, l) => i + 'require(' + l + ')'
        )
        .replace(
          /(^|[\r\n])\s*import\s*([^\3]+?)(\s*from\s*)((['|"])[^\5]+?\5)/g,
          (s, i, l, u, p) =>
            i + 'const ' + l.replace(/\s+as\s+/g, ':') + ' = require(' + p + ')'
        )
        .replace(/^\s*export\s+default(\s*)/gm, 'exports.default =$1')
        .replace(
          /(^|[\r\n])\s*export\s*\{([^}]+?)\}[^\n]*/g,
          (s, i, l) => (
            l
              .trim()
              .split(/\s*,\s*/)
              .forEach((u) => {
                n.push(`exports.${u} = ${u};`)
              }),
            i
          )
        )
        .replace(
          /(^|[\r\n])\s*export\s+(const|let|var|function)(\s+)(\w+)/g,
          (s, i, l, u, p) => (n.push(`exports.${p} = ${p};`), i + l + u + p)
        )
        .concat(
          `
`,
          n.join(`
`)
        )
        .replace(/require\s*\(\s*(['"])([^\1]+?)\1\s*\)/g, (s, i, l) => (o.push(l), s))
    return e
      ? (o.forEach((s) => {
          s in K ||
            zn.push(
              new z((i) => {
                let l = Te
                if (/^(?:[./]|https?:)/.test(s)) {
                  K[s] = l
                  let u = new XMLHttpRequest()
                  u.open('get', s, !0),
                    u.send(null),
                    (u.onload = () => {
                      i((K[s] = Ne(u.responseText)))
                    })
                } else
                  Yo(K, s, {
                    get: () => l,
                    set: (u) => {
                      i((l = u))
                    },
                  })
              })
            )
        }),
        new z((s) => {
          z.all(zn).then(() => s(r))
        }))
      : r
  },
  Xo = (t) => {
    let e = Wn(t || {}),
      n = e.map((o) => t[o]).concat(Qo)
    return (
      e.push('require'),
      (o) => {
        let r = {},
          s = { exports: r },
          i = e.concat('module', 'exports', Go + Pe(o))
        Function.apply(null, i).apply(null, n.concat(s, r))
        let u = s.exports,
          p = Wn(u)
        return p.length === 1 && p[0] === 'default' ? u.default : u
      }
    )
  },
  Ne = Xo()
var Bn = (t) => {
  let e = [],
    n = [],
    { length: o } = t,
    r = 0,
    s = 0,
    i = 0
  for (; r < o && -1 < (r = t.indexOf('{{', i)) && -1 < (s = t.indexOf('}}', r + 2)); )
    e.push(t.slice(i, r)), n.push(t.slice(r + 2, s)), (i = s + 2)
  e.push(t.slice(i))
  let l = [e],
    u = Function('return function(){with(arguments[0])return[' + n + ']}')()
  return function (p) {
    return l.concat(u.call(this, p))
  }
}
var Un = se({ dom: !0, useState: St }),
  Ot = [],
  { drop: Zo, parse: tr } = De({
    query: Ot,
    handle(t, e, n) {
      if ((Zo([t]), ie.has(n))) {
        let o = ie.get(n)
        ie.delete(n), Ot.splice(Ot.indexOf(n), 1), o()
      }
    },
  }),
  V = (t, e) => {
    t in K && K[t] !== Te && console.warn('duplicated ' + t), (K[t] = e)
  },
  Re = (t) => {
    let e = new Ie()
    return (e.innerHTML = t), e
  },
  ie = new Map(),
  er = ['module.exports=function(module,exports){"use strict";', '}'],
  nr = () => {},
  He = () => {
    throw new Error('bad template')
  },
  At = (t, e) => t.getAttribute(e),
  pt = (t, e) => t.hasAttribute(e),
  or = (t, e, n, o) => {
    let r = { exports: o }
    t.call(e, r, o)
    let s = r.exports,
      i = s.default || s
    return n && Un(e, i.props), i
  },
  Jn = (t, e) => (n) =>
    [].reduce.call(
      n.querySelectorAll('[' + t + ']'),
      (o, r) => {
        let { parentNode: s } = r
        do
          if (s === n) {
            let i = At(r, t)
            o[i] = e ? [].concat(o[i] || [], r) : r
            break
          } else if (/-/.test(s.tagName) || At(s, 'is')) break
        while ((s = s.parentNode))
        return o
      },
      {}
    ),
  ce = {
    define: Mt,
    render: ne,
    html: oe,
    svg: je,
    css: Kt,
    reactive: se({ useState: St }),
    ref: Jn('ref', !1),
    slot: Jn('slot', !0),
  }
V('@uce/reactive', ce.reactive)
V('@uce/slot', ce.slot)
V('@uce', ce)
V('uce', ce)
var Yn = {
  augmentor: Et,
  hooked: Et,
  useState: St,
  useRef: Ae,
  useContext: Se,
  createContext: Ee,
  useCallback: Ce,
  useMemo: Qt,
  useReducer: Xt,
  useEffect: Me,
  useLayoutEffect: Oe,
}
V('augmentor', Yn)
V('uhooks', Yn)
V('qsa-observer', De)
V('reactive-props', se)
V('@webreflection/lie', z)
var Ie = Mt('uce-template', { extends: 'template', props: null, init: Gn })
Ie.resolve = V
Ie.from = Re
function Gn(t) {
  let e = (x) => {
      let k = Bn($.replace(/(<!--(\{\{)|(\}\})-->)/g, '$2$3')),
        S = (w && Ne(u ? er.join(x) : x)) || {},
        { observedAttributes: M, props: L, setup: q } = S,
        Y = !!$.trim(),
        y = u || Y || !!q,
        A = new WeakMap(),
        C = {
          props: null,
          extends: f ? h : 'element',
          init() {
            let g = this,
              { html: j } = g,
              O = !0,
              R = nr,
              ot = Et(() => {
                if (O && ((O = !O), y)) {
                  ;(g.render = ot), L && Un(g, L)
                  let ht = u ? or(S, g, p, {}) : q && S.setup(g)
                  if (Y) {
                    let ct = k.bind(g, ht || {})
                    R = () => {
                      j.apply(g, ct())
                    }
                  }
                }
                R()
              })
            ot(), ke(ot) && A.set(g, ot)
          },
        }
      if ((m && (C.style = () => m), F && (C.attachShadow = { mode: F }), M)) {
        C.observedAttributes = M
        let g = (C.attributeChanged = function () {
          let { attributeChanged: j } = this
          j !== g && j.apply(this, arguments)
        })
      }
      if (w) {
        let g = (C.connected = function () {
            let { connected: O } = this
            O !== g && O.call(this)
          }),
          j = (C.disconnected = function () {
            let { disconnected: O } = this
            A.has(this) && Fe(A.get(this)), O !== j && O.call(this)
          })
      }
      for (let g in S) g in C || (C[g] = S[g])
      Mt(f || h, C)
    },
    { content: n, ownerDocument: o, parentNode: r } = this,
    { childNodes: s } = n || Ko(this.innerHTML),
    i = []
  r && this instanceof HTMLUnknownElement && r.removeChild(this)
  let l = e,
    u = !1,
    p = !1,
    f = '',
    m = '',
    h = '',
    w = '',
    F = '',
    $ = ''
  for (let x = 0; x < s.length; x++) {
    let k = s[x]
    if (k.nodeType === 1) {
      let { tagName: S } = k,
        M = pt(k, 'is')
      ;/^style$/i.test(S)
        ? i.push(k)
        : M || /-/i.test(S)
        ? (h && He(),
          (h = S.toLowerCase()),
          ($ = k.innerHTML),
          M && (f = At(k, 'is').toLowerCase()),
          pt(k, 'shadow') && (F = At(k, 'shadow') || 'open'))
        : /^script$/i.test(S) &&
          (w && He(),
          (u = pt(k, 'setup')),
          (p = u && At(k, 'setup') === 'props'),
          (w = k.textContent),
          (l = () => {
            Pe(w, !0).then(e)
          }))
    }
  }
  let D = f ? h + '[is="' + f + '"]' : h
  if (!D) return setTimeout(t ? He : Gn.bind(this), 0, !0)
  for (let x = i.length; x--; ) {
    let k = i[x],
      { textContent: S } = k
    if (pt(k, 'shadow')) $ = '<style>' + S + '</style>' + $
    else if (pt(k, 'scoped')) {
      let M = []
      m += S.replace(/\{([^}]+?)\}/g, (L, q) => '' + M.push(q) + ',')
        .split(',')
        .map((L) => (L.trim() ? D + ' ' + L.trim() : ''))
        .join(
          `,
`
        )
        .replace(/\x01(\d+),/g, (L, q) => '{' + M[--q] + '}')
        .replace(
          /(,\n)+/g,
          `,
`
        )
    } else m += S
  }
  pt(this, 'lazy') ? (ie.set(D, l), Ot.push(D), tr(o.querySelectorAll(Ot))) : l()
}
function js(t, e, n) {
  Ve.debug(`${t} script started!`),
    V('../store.js', e),
    _n({
      container: document.querySelector('section .uce'),
      on(r) {
        rr(`../components/${r}.uce`)
          .then((s) => s.text())
          .then((s) => {
            let i = Re(s)
            Ve.debug(`${t} Loader just loaded <${r}>`, i), document.body.appendChild(i)
          })
      },
    }),
    new n({
      target: document.querySelector('section .svelte'),
      props: { connect: e.connect },
    }) && Ve.debug(`${t} & Svelte working fine`)
}
var qs = () => {}
var Is = (t = 21) => {
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
var Hs = {
  todos: [
    { id: 'R8d7ysIEl94ziepCxTZwX', text: 'double click me!', done: !1 },
    { id: 'jt9oofKsxbwknDGzIa6be', text: 'I am, by default, DONE', done: !0 },
  ],
}
export { Hs as a, qs as b, H as c, Is as d, js as e, ur as f, Z as g, Ar as h }
/*! (c) Andrea Giammarchi - ISC */
/*! (c) Andrea Giammarchi @webreflection ISC */
//# sourceMappingURL=chunk.IRDZMTDP.js.map
