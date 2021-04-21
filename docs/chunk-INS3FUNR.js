import { a as En, b as Re, c as Ve, d as ft } from './chunk-YNYRRD5H.js'
import { a as nn } from './chunk-D5WR2F3S.js'
import {
  a as Y,
  b as An,
  c as kt,
  d as se,
  e as X,
  f as Q,
  g as G,
  h as Tn,
  i as ne,
  j as fe,
  k as $o,
  m as Je,
  n as qn,
  o as K,
  p as Be,
  q as go,
  r as Eo,
  t as Lt,
  u as jt,
  v as St,
  w as Mt,
  x as Ct,
  y as re,
  z as oe,
} from './chunk-A37PCSWK.js'
import { b as ho, f as jn, g as Et } from './chunk-SLFZ277Q.js'
var mo = ho((Ur, po) => {
  po.exports = {}
})
var xo = ho((Br, wo) => {
  wo.exports = {}
})
var jo = ho((Xr, Lo) => {
  Lo.exports = {}
})
var Yo = /^(?:annotation-xml|color-profile|font-face(?:|-format|-name|-src|-uri)|missing-glyph)$/i,
  Jt = new Set(),
  Bt = (e) => {
    let t = e.container || document,
      n = (r) => {
        for (let c = 0, { length: i } = r; c < i; c++)
          for (let { addedNodes: l } = r[c], d = 0, { length: h } = l; d < h; d++) {
            let g = l[d],
              { children: m, getAttribute: E, tagName: S } = g
            if (E) {
              let k = (E.call(g, 'is') || S).toLowerCase()
              0 < k.indexOf('-') &&
                !Jt.has(k) &&
                !Yo.test(k) &&
                (Jt.add(k), customElements.get(k) || e.on(k)),
                o(m)
            }
          }
      },
      o = (r) => {
        n([{ addedNodes: r }])
      }
    o([document == t ? t.documentElement : t])
    let s = new MutationObserver(n)
    return s.observe(t, { subtree: !0, childList: !0 }), s
  }
;(function () {
  'use strict'
  var e =
      typeof Promise == 'function'
        ? Promise
        : function (w) {
            var a = [],
              u = 0,
              v
            return (
              w(function (y) {
                ;(v = y), (u = 1), a.splice(0).forEach(f)
              }),
              { then: f }
            )
            function f(y) {
              return u ? setTimeout(y, 0, v) : a.push(y), this
            }
          },
    t = function (w, a) {
      var u = function (y) {
          for (var M = 0, D = y.length; M < D; M++) v(y[M])
        },
        v = function (y) {
          var M = y.target,
            D = y.attributeName,
            ae = y.oldValue
          M.attributeChangedCallback(D, ae, M.getAttribute(D))
        }
      return function (f, y) {
        var M = f.constructor.observedAttributes
        return (
          M &&
            w(y).then(function () {
              new a(u).observe(f, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: M,
              })
              for (var D = 0, ae = M.length; D < ae; D++)
                f.hasAttribute(M[D]) &&
                  v({ target: f, attributeName: M[D], oldValue: null })
            }),
          f
        )
      }
    },
    n = self,
    o = n.document,
    s = n.MutationObserver,
    r = n.Set,
    c = n.WeakMap,
    i = function (a) {
      return 'querySelectorAll' in a
    },
    l = [].filter,
    d = function (w) {
      var a = new c(),
        u = function (P) {
          var H = w.query
          if (H.length)
            for (var U = 0, me = P.length; U < me; U++)
              y(l.call(P[U].addedNodes, i), !0, H),
                y(l.call(P[U].removedNodes, i), !1, H)
        },
        v = function (P) {
          for (var H = 0, U = P.length; H < U; H++) a.delete(P[H])
        },
        f = function () {
          u(Ze.takeRecords())
        },
        y = function ee(P, H, U) {
          for (
            var me =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : new r(),
              Jo = function (ie, R, Go, Vn) {
                if (!me.has((R = P[Go]))) {
                  if ((me.add(R), H))
                    for (var je, Qo = M(R), ot = 0, Xo = U.length; ot < Xo; ot++)
                      Qo.call(R, (je = U[ot])) &&
                        (a.has(R) || a.set(R, new r()),
                        (ie = a.get(R)),
                        ie.has(je) || (ie.add(je), w.handle(R, H, je)))
                  else
                    a.has(R) &&
                      ((ie = a.get(R)),
                      a.delete(R),
                      ie.forEach(function (Ko) {
                        w.handle(R, H, Ko)
                      }))
                  ee(ae(R), H, U, me)
                }
                ;(Ut = ie), (zt = R)
              },
              Ut,
              zt,
              tt = 0,
              Bo = P.length;
            tt < Bo;
            tt++
          )
            Jo(Ut, zt, tt)
        },
        M = function (P) {
          return P.matches || P.webkitMatchesSelector || P.msMatchesSelector
        },
        D = function (P) {
          var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
          y(P, H, w.query)
        },
        ae = function (P) {
          return et.length ? P.querySelectorAll(et) : et
        },
        Ze = new s(u),
        Ft = w.root || o,
        et = w.query
      return (
        Ze.observe(Ft, { childList: !0, subtree: !0 }),
        D(ae(Ft)),
        { drop: v, flush: f, observer: Ze, parse: D }
      )
    },
    h = self,
    g = h.document,
    m = h.Map,
    E = h.MutationObserver,
    S = h.Object,
    k = h.Set,
    N = h.WeakMap,
    x = h.Element,
    C = h.HTMLElement,
    j = h.Node,
    $ = h.Error,
    T = h.TypeError,
    _ = h.Reflect,
    J = self.Promise || e,
    b = S.defineProperty,
    O = S.keys,
    A = S.getOwnPropertyNames,
    p = S.setPrototypeOf,
    q = !self.customElements,
    L = function (a) {
      for (var u = O(a), v = [], f = u.length, y = 0; y < f; y++)
        (v[y] = a[u[y]]), delete a[u[y]]
      return function () {
        for (var M = 0; M < f; M++) a[u[M]] = v[M]
      }
    }
  if (q) {
    var I = function () {
        var a = this.constructor
        if (!pe.has(a)) throw new T('Illegal constructor')
        var u = pe.get(a)
        if (Se) return $t(Se, u)
        var v = W.call(g, u)
        return $t(p(v, a.prototype), u)
      },
      W = g.createElement,
      pe = new m(),
      ce = new m(),
      qt = new m(),
      de = new m(),
      At = [],
      To = function (a, u, v) {
        var f = qt.get(v)
        if (u && !f.isPrototypeOf(a)) {
          var y = L(a)
          Se = p(a, f)
          try {
            new f.constructor()
          } finally {
            ;(Se = null), y()
          }
        }
        var M = ''.concat(u ? '' : 'dis', 'connectedCallback')
        M in f && a[M]()
      },
      _o = d({ query: At, handle: To }),
      No = _o.parse,
      Se = null,
      Ge = function (a) {
        if (!ce.has(a)) {
          var u,
            v = new e(function (f) {
              u = f
            })
          ce.set(a, { $: v, _: u })
        }
        return ce.get(a).$
      },
      $t = t(Ge, E)
    b(self, 'customElements', {
      configurable: !0,
      value: {
        define: function (a, u) {
          if (de.has(a))
            throw new $(
              'the name "'.concat(a, '" has already been used with this registry')
            )
          pe.set(u, a),
            qt.set(a, u.prototype),
            de.set(a, u),
            At.push(a),
            Ge(a).then(function () {
              No(g.querySelectorAll(a))
            }),
            ce.get(a)._(u)
        },
        get: function (a) {
          return de.get(a)
        },
        whenDefined: Ge,
      },
    }),
      b((I.prototype = C.prototype), 'constructor', { value: I }),
      b(self, 'HTMLElement', { configurable: !0, value: I }),
      b(g, 'createElement', {
        configurable: !0,
        value: function (a, u) {
          var v = u && u.is,
            f = v ? de.get(v) : de.get(a)
          return f ? new f() : W.call(g, a)
        },
      }),
      'isConnected' in j.prototype ||
        b(j.prototype, 'isConnected', {
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
      var Ot = function w() {
        return self.Reflect.construct(HTMLLIElement, [], w)
      }
      Ot.prototype = HTMLLIElement.prototype
      var Tt = 'extends-li'
      self.customElements.define('extends-li', Ot, { extends: 'li' }),
        (q = g.createElement('li', { is: Tt }).outerHTML.indexOf(Tt) < 0)
      var _t = self.customElements,
        Po = _t.get,
        Io = _t.whenDefined
      b(self.customElements, 'whenDefined', {
        configurable: !0,
        value: function (a) {
          var u = this
          return Io.call(this, a).then(function (v) {
            return v || Po.call(u, a)
          })
        },
      })
    } catch (w) {
      q = !q
    }
  if (q) {
    var Nt = function (a) {
        var u = Qe.get(a),
          v = u.parse,
          f = u.root
        v(f.querySelectorAll(this), a.isConnected)
      },
      Z = self.customElements,
      Pt = x.prototype.attachShadow,
      It = g.createElement,
      Do = Z.define,
      Ho = Z.get,
      Ro = _ || {
        construct: function (a) {
          return a.call(this)
        },
      },
      Vo = Ro.construct,
      Qe = new N(),
      Xe = new k(),
      Ce = new m(),
      Me = new m(),
      Dt = new m(),
      Ke = new m(),
      Ht = [],
      he = [],
      Rt = function (a) {
        return Ke.get(a) || Ho.call(Z, a)
      },
      Vt = function (a, u, v) {
        var f = Dt.get(v)
        if (u && !f.isPrototypeOf(a)) {
          var y = L(a)
          Le = p(a, f)
          try {
            new f.constructor()
          } finally {
            ;(Le = null), y()
          }
        }
        var M = ''.concat(u ? '' : 'dis', 'connectedCallback')
        M in f && a[M]()
      },
      Wo = d({ query: he, handle: Vt }),
      Fo = Wo.parse,
      Uo = d({
        query: Ht,
        handle: function (a, u) {
          Qe.has(a) && (u ? Xe.add(a) : Xe.delete(a), he.length && Nt.call(he, a))
        },
      }),
      zo = Uo.parse,
      Ye = function (a) {
        if (!Me.has(a)) {
          var u,
            v = new J(function (f) {
              u = f
            })
          Me.set(a, { $: v, _: u })
        }
        return Me.get(a).$
      },
      Wt = t(Ye, E),
      Le = null
    A(self)
      .filter(function (w) {
        return /^HTML/.test(w)
      })
      .forEach(function (w) {
        var a = self[w]
        function u() {
          var v = this.constructor
          if (!Ce.has(v)) throw new T('Illegal constructor')
          var f = Ce.get(v),
            y = f.is,
            M = f.tag
          if (y) {
            if (Le) return Wt(Le, y)
            var D = It.call(g, M)
            return D.setAttribute('is', y), Wt(p(D, v.prototype), y)
          } else return Vo.call(this, a, [], v)
        }
        b((u.prototype = a.prototype), 'constructor', { value: u }),
          b(self, w, { value: u })
      }),
      b(g, 'createElement', {
        configurable: !0,
        value: function (a, u) {
          var v = u && u.is
          if (v) {
            var f = Ke.get(v)
            if (f && Ce.get(f).tag === a) return new f()
          }
          var y = It.call(g, a)
          return v && y.setAttribute('is', v), y
        },
      }),
      Pt &&
        b(x.prototype, 'attachShadow', {
          configurable: !0,
          value: function () {
            var a = Pt.apply(this, arguments),
              u = d({ query: he, root: a, handle: Vt }),
              v = u.parse
            return Qe.set(this, { root: a, parse: v }), a
          },
        }),
      b(Z, 'get', { configurable: !0, value: Rt }),
      b(Z, 'whenDefined', { configurable: !0, value: Ye }),
      b(Z, 'define', {
        configurable: !0,
        value: function (a, u, v) {
          if (Rt(a))
            throw new $("'".concat(a, "' has already been defined as a custom element"))
          var f,
            y = v && v.extends
          Ce.set(u, y ? { is: a, tag: y } : { is: '', tag: a }),
            y
              ? ((f = ''.concat(y, '[is="').concat(a, '"]')),
                Dt.set(f, u.prototype),
                Ke.set(a, u),
                he.push(f))
              : (Do.apply(Z, arguments), Ht.push((f = a))),
            Ye(a).then(function () {
              y
                ? (Fo(g.querySelectorAll(f)), Xe.forEach(Nt, [f]))
                : zo(g.querySelectorAll(f))
            }),
            Me.get(a)._(u)
        },
      })
  }
})()
var F =
  typeof Promise == 'function'
    ? Promise
    : function (e) {
        let t = [],
          n = 0,
          o
        return (
          e((r) => {
            ;(o = r), (n = 1), t.splice(0).forEach(s)
          }),
          { then: s }
        )
        function s(r) {
          return n ? setTimeout(r, 0, o) : t.push(r), this
        }
      }
var qe = null,
  Ae = new Set(),
  Gt = (e) => {
    let { $: t, r: n, h: o } = e
    ge(n) && (te.get(o).delete(e), n()), ge((e.r = t())) && te.get(o).add(e)
  },
  Zo = () => {
    let e = Ae
    ;(Ae = new Set()),
      e.forEach(({ h: t, c: n, a: o, e: s }) => {
        s && t.apply(n, o)
      })
  },
  te = new WeakMap(),
  ve = [],
  $e = []
function Oe(e, t) {
  return e !== this[t]
}
var nt = (e) => {
    let t = te.get(e)
    t &&
      Te.then(() => {
        t.forEach((n) => {
          n.r(), (n.r = null)
        }),
          t.clear()
      })
  },
  z = () => qe,
  rt = (e) => te.has(e),
  ge = (e) => typeof e == 'function',
  be = (e) => {
    let t = { h: n, c: null, a: null, e: 0, i: 0, s: [] }
    return n
    function n() {
      let o = qe
      ;(qe = t), (t.e = t.i = 0)
      try {
        return e.apply((t.c = this), (t.a = arguments))
      } finally {
        ;(qe = o),
          ve.length && Te.then(ve.forEach.bind(ve.splice(0), Gt)),
          $e.length && $e.splice(0).forEach(Gt)
      }
    }
  },
  Qt = (e) => {
    Ae.has(e) || ((e.e = 1), Ae.add(e), Te.then(Zo))
  },
  Te = new F((e) => e())
var st = (e) => ({ _: new Set(), provide: en, value: e }),
  ct = ({ _: e, value: t }) => (e.add(z()), t)
function en(e) {
  let { _: t, value: n } = this
  n !== e &&
    ((this._ = new Set()),
    (this.value = e),
    t.forEach(({ h: o, c: s, a: r }) => {
      o.apply(s, r)
    }))
}
var at = (e, t) => _e(() => e, t),
  _e = (e, t) => {
    let n = z(),
      { i: o, s } = n
    return (
      (o === s.length || !t || t.some(Oe, s[o]._)) && (s[o] = { $: e(), _: t }),
      s[n.i++].$
    )
  }
var Xt = (e) => (t, n) => {
    let o = z(),
      { i: s, s: r, h: c } = o,
      i = s === r.length
    o.i++,
      i && (te.has(c) || te.set(c, new Set()), (r[s] = { $: t, _: n, r: null, h: c })),
      (i || !n || n.some(Oe, r[s]._)) && e.push(r[s]),
      (r[s].$ = t),
      (r[s]._ = n)
  },
  it = Xt(ve),
  lt = Xt($e)
var Kt = (e, t) => (ge(t) ? t(e) : t),
  Ne = (e, t, n) => {
    let o = z(),
      { i: s, s: r } = o
    s === r.length &&
      r.push({
        $: ge(n) ? n(t) : Kt(void 0, t),
        set: (l) => {
          ;(r[s].$ = e(r[s].$, l)), Qt(o)
        },
      })
    let { $: c, set: i } = r[o.i++]
    return [c, i]
  },
  ye = (e) => Ne(Kt, e)
var ut = (e) => {
  let t = z(),
    { i: n, s: o } = t
  return n === o.length && o.push({ current: e }), o[t.i++]
}
function Pe(e) {
  for (var t = e[0], n = 1, o = arguments.length; n < o; n++) t += arguments[n] + e[n]
  return t
}
var { defineProperties: Ie, keys: tn } = Object,
  on = (e, t, n, o, s) => ({
    configurable: !0,
    get: () => o,
    set(r) {
      ;(e || r !== o || (t && typeof r == 'object' && r)) &&
        ((o = r), n ? s.call(this, o) : s.call(this))
    },
  }),
  De = (e, t, n, o, s, r) => {
    let c = {},
      i = s !== we,
      l = [n, o, i]
    for (let d = tn(e), h = 0; h < d.length; h++) {
      let g = t(e, d[h]),
        m = i ? s(g) : [g, s]
      r && (m[1] = r), (c[d[h]] = on.apply(null, l.concat(m)))
    }
    return c
  },
  we = () => {}
var He = ({
  all: e = !1,
  shallow: t = !0,
  useState: n = we,
  getAttribute: o = (s, r) => s.getAttribute(r),
} = {}) => (s, r, c) => {
  let l = De(
    r,
    (d, h) => {
      let g = d[h],
        m = typeof g
      return (
        s.hasOwnProperty(h)
          ? ((g = s[h]), delete s[h])
          : s.hasAttribute(h) &&
            ((g = o(s, h)),
            m == 'number'
              ? (g = +g)
              : m == 'boolean' && (g = !/^(?:false|0|)$/.test(g))),
        g
      )
    },
    e,
    t,
    n,
    c
  )
  return Ie(s, l)
}
var rn = He({ dom: !0 }),
  We = customElements,
  { define: sn } = We,
  { parse: cn, stringify: an } = JSON,
  { create: ln, defineProperties: pt, getOwnPropertyDescriptor: un, keys: dt } = Object,
  le = 'element',
  Yt = new WeakMap(),
  ht = nn(new Map([[le, { c: HTMLElement, e: le }]])),
  Zt = (e) => document.createElement(e),
  eo = (e) => ht.get(e) || ht.set(e, { c: Zt(e).constructor, e }),
  xe = (e, t) => {
    let {
        attachShadow: n,
        attributeChanged: o,
        bound: s,
        connected: r,
        disconnected: c,
        handleEvent: i,
        init: l,
        observedAttributes: d,
        props: h,
        render: g,
        style: m,
      } = t,
      E = new WeakMap(),
      S = {},
      k = {},
      N = [],
      x = ln(null),
      C = (b, O, A) => {
        if (!E.has(b)) {
          E.set(b, 0),
            pt(b, {
              html: { configurable: !0, value: pn.bind(n ? b.attachShadow(n) : b) },
            })
          for (let p = 0; p < j; p++) {
            let { type: q, options: L } = N[p]
            b.addEventListener(q, b, L)
          }
          if ((s && s.forEach(fn, b), h)) {
            let p = {}
            for (let q = dt(h), L = 0; L < q.length; L++) {
              let I = q[L],
                W = h[I]
              p[I] = typeof W == 'object' ? cn(an(W)) : W
            }
            Yt.set(b, p), rn(b, p, g)
          }
          ;(l || g) && (l || g).call(b), O && (b[O] = A)
        }
      }
    for (let b = dt(t), O = 0, { length: A } = b; O < A; O++) {
      let p = b[O]
      if (/^on./.test(p) && !/Options$/.test(p)) {
        let q = t[p + 'Options'] || !1,
          L = p.toLowerCase(),
          I = L.slice(2)
        N.push({ type: I, options: q }),
          (x[I] = p),
          L !== p &&
            ((I = L.slice(2, 3) + p.slice(3)),
            (x[I] = p),
            N.push({ type: I, options: q }))
      }
      switch (p) {
        case 'attachShadow':
        case 'constructor':
        case 'observedAttributes':
        case 'style':
          break
        default:
          k[p] = un(t, p)
      }
    }
    let { length: j } = N
    if (
      (j &&
        !i &&
        (k.handleEvent = {
          value(b) {
            this[x[b.type]](b)
          },
        }),
      h !== null)
    )
      if (h)
        for (let b = dt(h), O = 0; O < b.length; O++) {
          let A = b[O]
          k[A] = {
            get() {
              return C(this), Yt.get(this)[A]
            },
            set(p) {
              C(this, A, p)
            },
          }
        }
      else
        k.props = {
          get() {
            let b = {}
            for (let { attributes: O } = this, { length: A } = O, p = 0; p < A; p++) {
              let { name: q, value: L } = O[p]
              b[q] = L
            }
            return b
          },
        }
    d && (S.observedAttributes = { value: d }),
      (k.attributeChangedCallback = {
        value() {
          C(this), o && o.apply(this, arguments)
        },
      }),
      (k.connectedCallback = {
        value() {
          C(this), r && r.call(this)
        },
      }),
      c && (k.disconnectedCallback = { value: c })
    let { c: $, e: T } = eo(t.extends || le)
    class _ extends $ {}
    pt(_, S), pt(_.prototype, k)
    let J = [e, _]
    return (
      T !== le && J.push({ extends: T }),
      sn.apply(We, J),
      ht.set(e, { c: _, e: T }),
      m &&
        (document.head.appendChild(Zt('style')).textContent = m(
          T === le ? e : T + '[is="' + e + '"]'
        )),
      _
    )
  }
We.get('uce-lib') ||
  We.define(
    'uce-lib',
    class extends eo(le).c {
      static get define() {
        return xe
      }
      static get render() {
        return Re
      }
      static get html() {
        return Ve
      }
      static get svg() {
        return ft
      }
      static get css() {
        return Pe
      }
    }
  )
function fn(e) {
  this[e] = this[e].bind(this)
}
function pn() {
  return Re(this, Ve.apply(null, arguments))
}
var dn = (e, t) => e[t],
  to = ({ all: e = !1, shallow: t = !0, useState: n = we } = {}) => (o, s) =>
    Ie({}, De(o, dn, e, t, n, s))
var Fe = (e = {}) => (e.dom ? He : to)(e)
var { document: hn, MutationObserver: mn, Set: oo, WeakMap: gn } = self,
  no = (e) => 'querySelectorAll' in e,
  { filter: ro } = [],
  mt = (e) => {
    let t = new gn(),
      n = (m) => {
        let { query: E } = e
        if (E.length)
          for (let S = 0, { length: k } = m; S < k; S++)
            r(ro.call(m[S].addedNodes, no), !0, E),
              r(ro.call(m[S].removedNodes, no), !1, E)
      },
      o = (m) => {
        for (let E = 0, { length: S } = m; E < S; E++) t.delete(m[E])
      },
      s = () => {
        n(d.takeRecords())
      },
      r = (m, E, S, k = new oo()) => {
        for (let N, x, C = 0, { length: j } = m; C < j; C++)
          if (!k.has((x = m[C]))) {
            if ((k.add(x), E))
              for (let $, T = c(x), _ = 0, { length: J } = S; _ < J; _++)
                T.call(x, ($ = S[_])) &&
                  (t.has(x) || t.set(x, new oo()),
                  (N = t.get(x)),
                  N.has($) || (N.add($), e.handle(x, E, $)))
            else
              t.has(x) &&
                ((N = t.get(x)),
                t.delete(x),
                N.forEach(($) => {
                  e.handle(x, E, $)
                }))
            r(l(x), E, S, k)
          }
      },
      c = (m) => m.matches || m.webkitMatchesSelector || m.msMatchesSelector,
      i = (m, E = !0) => {
        r(m, E, e.query)
      },
      l = (m) => (g.length ? m.querySelectorAll(g) : g),
      d = new mn(n),
      h = e.root || hn,
      { query: g } = e
    return (
      d.observe(h, { childList: !0, subtree: !0 }),
      i(l(h)),
      { drop: o, flush: s, observer: d, parse: i }
    )
  }
F.all ||
  (F.all = (e) =>
    new F((t) => {
      let { length: n } = e
      n || t()
      let o = 0
      for (; o < n; ) e[o++].then(s)
      o = 0
      function s() {
        ++o === n && t()
      }
    }))
var { create: vn, defineProperty: bn, keys: so } = Object,
  co = [],
  yn = `"use strict;"
`,
  wn = (e) => B[e],
  B = vn(null),
  gt = {},
  bt = (e, t) => {
    let n = [],
      o = [],
      s = e
        .replace(
          /(^|[\r\n])\s*import\s*((['|"])[^\3]+?\3)/g,
          (r, c, i) => c + 'require(' + i + ')'
        )
        .replace(
          /(^|[\r\n])\s*import\s*([^\3]+?)(\s*from\s*)((['|"])[^\5]+?\5)/g,
          (r, c, i, l, d) =>
            c + 'const ' + i.replace(/\s+as\s+/g, ':') + ' = require(' + d + ')'
        )
        .replace(/^\s*export\s+default(\s*)/gm, 'exports.default =$1')
        .replace(
          /(^|[\r\n])\s*export\s*\{([^}]+?)\}[^\n]*/g,
          (r, c, i) => (
            i
              .trim()
              .split(/\s*,\s*/)
              .forEach((l) => {
                n.push(`exports.${l} = ${l};`)
              }),
            c
          )
        )
        .replace(
          /(^|[\r\n])\s*export\s+(const|let|var|function)(\s+)(\w+)/g,
          (r, c, i, l, d) => (n.push(`exports.${d} = ${d};`), c + i + l + d)
        )
        .concat(
          `
`,
          n.join(`
`)
        )
        .replace(/require\s*\(\s*(['"])([^\1]+?)\1\s*\)/g, (r, c, i) => (o.push(i), r))
    return t
      ? (o.forEach((r) => {
          r in B ||
            co.push(
              new F((c) => {
                let i = gt
                if (/^(?:[./]|https?:)/.test(r)) {
                  B[r] = i
                  let l = new XMLHttpRequest()
                  l.open('get', r, !0),
                    l.send(null),
                    (l.onload = () => {
                      c((B[r] = vt(l.responseText)))
                    })
                } else
                  bn(B, r, {
                    get: () => i,
                    set: (l) => {
                      c((i = l))
                    },
                  })
              })
            )
        }),
        new F((r) => {
          F.all(co).then(() => r(s))
        }))
      : s
  },
  xn = (e) => {
    let t = so(e || {}),
      n = t.map((o) => e[o]).concat(wn)
    return (
      t.push('require'),
      (o) => {
        let s = {},
          r = { exports: s },
          c = t.concat('module', 'exports', yn + bt(o))
        Function.apply(null, c).apply(null, n.concat(r, s))
        let l = r.exports,
          d = so(l)
        return d.length === 1 && d[0] === 'default' ? l.default : l
      }
    )
  },
  vt = xn()
var ao = (e) => {
  let t = [],
    n = [],
    { length: o } = e,
    s = 0,
    r = 0,
    c = 0
  for (; s < o && -1 < (s = e.indexOf('{{', c)) && -1 < (r = e.indexOf('}}', s + 2)); )
    t.push(e.slice(c, s)), n.push(e.slice(s + 2, r)), (c = r + 2)
  t.push(e.slice(c))
  let i = [t],
    l = Function('return function(){with(arguments[0])return[' + n + ']}')()
  return function (d) {
    return i.concat(l.call(this, d))
  }
}
var io = Fe({ dom: !0, useState: ye }),
  Ee = [],
  { drop: kn, parse: Sn } = mt({
    query: Ee,
    handle(e, t, n) {
      if ((kn([e]), Ue.has(n))) {
        let o = Ue.get(n)
        Ue.delete(n), Ee.splice(Ee.indexOf(n), 1), o()
      }
    },
  }),
  V = (e, t) => {
    e in B && B[e] !== gt && console.warn('duplicated ' + e), (B[e] = t)
  },
  wt = (e) => {
    let t = new yt()
    return (t.innerHTML = e), t
  },
  Ue = new Map(),
  Cn = ['module.exports=function(module,exports){"use strict";', '}'],
  Mn = () => {},
  xt = () => {
    throw new Error('bad template')
  },
  ke = (e, t) => e.getAttribute(t),
  ue = (e, t) => e.hasAttribute(t),
  Ln = (e, t, n, o) => {
    let s = { exports: o }
    e.call(t, s, o)
    let r = s.exports,
      c = r.default || r
    return n && io(t, c.props), c
  },
  lo = (e, t) => (n) =>
    [].reduce.call(
      n.querySelectorAll('[' + e + ']'),
      (o, s) => {
        let { parentNode: r } = s
        do
          if (r === n) {
            let c = ke(s, e)
            o[c] = t ? [].concat(o[c] || [], s) : s
            break
          } else if (/-/.test(r.tagName) || ke(r, 'is')) break
        while ((r = r.parentNode))
        return o
      },
      {}
    ),
  ze = {
    define: xe,
    render: Re,
    html: Ve,
    svg: ft,
    css: Pe,
    reactive: Fe({ useState: ye }),
    ref: lo('ref', !1),
    slot: lo('slot', !0),
  }
V('@uce/reactive', ze.reactive)
V('@uce/slot', ze.slot)
V('@uce', ze)
V('uce', ze)
var uo = {
  augmentor: be,
  hooked: be,
  useState: ye,
  useRef: ut,
  useContext: ct,
  createContext: st,
  useCallback: at,
  useMemo: _e,
  useReducer: Ne,
  useEffect: it,
  useLayoutEffect: lt,
}
V('augmentor', uo)
V('uhooks', uo)
V('qsa-observer', mt)
V('reactive-props', Fe)
V('@webreflection/lie', F)
var yt = xe('uce-template', { extends: 'template', props: null, init: fo })
yt.resolve = V
yt.from = wt
function fo(e) {
  let t = (x) => {
      let C = ao(k.replace(/(<!--(\{\{)|(\}\})-->)/g, '$2$3')),
        j = (E && vt(l ? Cn.join(x) : x)) || {},
        { observedAttributes: $, props: T, setup: _ } = j,
        J = !!k.trim(),
        b = l || J || !!_,
        O = new WeakMap(),
        A = {
          props: null,
          extends: h ? m : 'element',
          init() {
            let p = this,
              { html: q } = p,
              L = !0,
              I = Mn,
              W = be(() => {
                if (L && ((L = !L), b)) {
                  ;(p.render = W), T && io(p, T)
                  let pe = l ? Ln(j, p, d, {}) : _ && j.setup(p)
                  if (J) {
                    let ce = C.bind(p, pe || {})
                    I = () => {
                      q.apply(p, ce())
                    }
                  }
                }
                I()
              })
            W(), rt(W) && O.set(p, W)
          },
        }
      if ((g && (A.style = () => g), S && (A.attachShadow = { mode: S }), $)) {
        A.observedAttributes = $
        let p = (A.attributeChanged = function () {
          let { attributeChanged: q } = this
          q !== p && q.apply(this, arguments)
        })
      }
      if (E) {
        let p = (A.connected = function () {
            let { connected: L } = this
            L !== p && L.call(this)
          }),
          q = (A.disconnected = function () {
            let { disconnected: L } = this
            O.has(this) && nt(O.get(this)), L !== q && L.call(this)
          })
      }
      for (let p in j) p in A || (A[p] = j[p])
      xe(h || m, A)
    },
    { content: n, ownerDocument: o, parentNode: s } = this,
    { childNodes: r } = n || En(this.innerHTML),
    c = []
  s && this instanceof HTMLUnknownElement && s.removeChild(this)
  let i = t,
    l = !1,
    d = !1,
    h = '',
    g = '',
    m = '',
    E = '',
    S = '',
    k = ''
  for (let x = 0; x < r.length; x++) {
    let C = r[x]
    if (C.nodeType === 1) {
      let { tagName: j } = C,
        $ = ue(C, 'is')
      ;/^style$/i.test(j)
        ? c.push(C)
        : $ || /-/i.test(j)
        ? (m && xt(),
          (m = j.toLowerCase()),
          (k = C.innerHTML),
          $ && (h = ke(C, 'is').toLowerCase()),
          ue(C, 'shadow') && (S = ke(C, 'shadow') || 'open'))
        : /^script$/i.test(j) &&
          (E && xt(),
          (l = ue(C, 'setup')),
          (d = l && ke(C, 'setup') === 'props'),
          (E = C.textContent),
          (i = () => {
            bt(E, !0).then(t)
          }))
    }
  }
  let N = h ? m + '[is="' + h + '"]' : m
  if (!N) return setTimeout(e ? xt : fo.bind(this), 0, !0)
  for (let x = c.length; x--; ) {
    let C = c[x],
      { textContent: j } = C
    if (ue(C, 'shadow')) k = '<style>' + j + '</style>' + k
    else if (ue(C, 'scoped')) {
      let $ = []
      g += j
        .replace(/\{([^}]+?)\}/g, (T, _) => '' + $.push(_) + ',')
        .split(',')
        .map((T) => (T.trim() ? N + ' ' + T.trim() : ''))
        .join(
          `,
`
        )
        .replace(/\x01(\d+),/g, (T, _) => '{' + $[--_] + '}')
        .replace(
          /(,\n)+/g,
          `,
`
        )
    } else g += j
  }
  ue(this, 'lazy') ? (Ue.set(N, i), Ee.push(N), Sn(o.querySelectorAll(Ee))) : i()
}
function Fr(e, t, n) {
  Et.debug(`${e} script started!`),
    V('../store.js', t),
    Bt({
      container: document.querySelector('section .uce'),
      on(s) {
        jn(`../components/${s}.uce`)
          .then((r) => r.text())
          .then((r) => {
            let c = wt(r)
            Et.debug(`${e} Loader just loaded <${s}>`, c), document.body.appendChild(c)
          })
      },
    }),
    new n({
      target: document.querySelector('section .svelte'),
      props: { connect: t.connect },
    }) && Et.debug(`${e} & Svelte working fine`)
}
function $n(e) {
  let t, n, o, s
  return {
    c() {
      ;(t = ne('form')),
        (n = ne('input')),
        K(n, 'placeholder', 'Add new task...'),
        K(n, 'class', 'svelte-s6yrar')
    },
    m(r, c) {
      Q(r, t, c),
        X(t, n),
        go(n, e[0]),
        o ||
          ((s = [
            Je(n, 'input', e[3]),
            Je(
              t,
              'submit',
              qn(function () {
                kt(e[1]) && e[1].apply(this, arguments)
              })
            ),
          ]),
          (o = !0))
    },
    p(r, [c]) {
      ;(e = r), c & 1 && n.value !== e[0] && go(n, e[0])
    },
    i: Y,
    o: Y,
    d(r) {
      r && G(t), (o = !1), An(s)
    },
  }
}
var vo = ''
function On(e, t, n) {
  let { connect: o } = t,
    s = void 0,
    r = vo,
    c
  function i({ add: d }) {
    n(
      1,
      (c = () => {
        d(r), n(0, (r = vo))
      })
    )
  }
  o(s, i)
  function l() {
    ;(r = this.value), n(0, r)
  }
  return (
    (e.$$set = (d) => {
      'connect' in d && n(2, (o = d.connect))
    }),
    [r, c, o, l]
  )
}
var bo = class extends oe {
    constructor(t) {
      super()
      re(this, t, On, $n, se, { connect: 2 })
    }
  },
  yo = bo
mo()
function ko(e, t, n) {
  let o = e.slice()
  return (o[5] = t[n].id), (o[6] = t[n].text), (o[7] = t[n].done), o
}
function So(e) {
  let t,
    n = e[6] + '',
    o,
    s,
    r,
    c
  return {
    c() {
      ;(t = ne('li')),
        (o = fe(n)),
        K(t, 'data-id', (s = e[5])),
        K(t, 'class', 'svelte-corox1'),
        Eo(t, 'done', e[7])
    },
    m(i, l) {
      Q(i, t, l),
        X(t, o),
        r ||
          ((c = Je(t, 'dblclick', function () {
            kt(e[1]) && e[1].apply(this, arguments)
          })),
          (r = !0))
    },
    p(i, l) {
      ;(e = i),
        l & 1 && n !== (n = e[6] + '') && Be(o, n),
        l & 1 && s !== (s = e[5]) && K(t, 'data-id', s),
        l & 1 && Eo(t, 'done', e[7])
    },
    d(i) {
      i && G(t), (r = !1), c()
    },
  }
}
function _n(e) {
  let t,
    n = e[0],
    o = []
  for (let s = 0; s < n.length; s += 1) o[s] = So(ko(e, n, s))
  return {
    c() {
      t = ne('ul')
      for (let s = 0; s < o.length; s += 1) o[s].c()
    },
    m(s, r) {
      Q(s, t, r)
      for (let c = 0; c < o.length; c += 1) o[c].m(t, null)
    },
    p(s, [r]) {
      if (r & 3) {
        n = s[0]
        let c
        for (c = 0; c < n.length; c += 1) {
          let i = ko(s, n, c)
          o[c] ? o[c].p(i, r) : ((o[c] = So(i)), o[c].c(), o[c].m(t, null))
        }
        for (; c < o.length; c += 1) o[c].d(1)
        o.length = n.length
      }
    },
    i: Y,
    o: Y,
    d(s) {
      s && G(t), Tn(o, s)
    },
  }
}
function Nn(e, t, n) {
  let { connect: o } = t,
    s = [],
    r = () => {}
  function c(l) {
    n(0, (s = l.todos))
  }
  function i({ toggle: l }) {
    n(1, (r = (d) => l(d.target.dataset.id)))
  }
  return (
    o(c, i),
    (e.$$set = (l) => {
      'connect' in l && n(2, (o = l.connect))
    }),
    [s, r, o]
  )
}
var Co = class extends oe {
    constructor(t) {
      super()
      re(this, t, Nn, _n, se, { connect: 2 })
    }
  },
  Mo = Co
xo()
function Pn(e) {
  let t, n, o, s, r
  return {
    c() {
      ;(t = ne('footer')),
        (n = fe('Done: ')),
        (o = fe(e[1])),
        (s = fe(' / ')),
        (r = fe(e[0])),
        K(t, 'class', 'svelte-1o8cxar')
    },
    m(c, i) {
      Q(c, t, i), X(t, n), X(t, o), X(t, s), X(t, r)
    },
    p(c, [i]) {
      i & 2 && Be(o, c[1]), i & 1 && Be(r, c[0])
    },
    i: Y,
    o: Y,
    d(c) {
      c && G(t)
    },
  }
}
function In(e, t, n) {
  let { connect: o } = t,
    s = [],
    r = 0,
    c = 0
  function i(l) {
    n(3, (s = l.todos))
  }
  return (
    o(i),
    (e.$$set = (l) => {
      'connect' in l && n(2, (o = l.connect))
    }),
    (e.$$.update = () => {
      if (e.$$.dirty & 8) {
        e: n(0, (r = s.length))
      }
      if (e.$$.dirty & 8) {
        e: n(1, (c = s.filter((l) => l.done).length))
      }
    }),
    [r, c, o, s]
  )
}
var qo = class extends oe {
    constructor(t) {
      super()
      re(this, t, In, Pn, se, { connect: 2 })
    }
  },
  Ao = qo
jo()
function Dn(e) {
  let t, n, o, s, r, c
  return (
    (t = new yo({ props: { connect: e[0] } })),
    (o = new Mo({ props: { connect: e[0] } })),
    (r = new Ao({ props: { connect: e[0] } })),
    {
      c() {
        St(t.$$.fragment), (n = $o()), St(o.$$.fragment), (s = $o()), St(r.$$.fragment)
      },
      m(i, l) {
        Mt(t, i, l), Q(i, n, l), Mt(o, i, l), Q(i, s, l), Mt(r, i, l), (c = !0)
      },
      p(i, [l]) {
        let d = {}
        l & 1 && (d.connect = i[0]), t.$set(d)
        let h = {}
        l & 1 && (h.connect = i[0]), o.$set(h)
        let g = {}
        l & 1 && (g.connect = i[0]), r.$set(g)
      },
      i(i) {
        c ||
          (Lt(t.$$.fragment, i), Lt(o.$$.fragment, i), Lt(r.$$.fragment, i), (c = !0))
      },
      o(i) {
        jt(t.$$.fragment, i), jt(o.$$.fragment, i), jt(r.$$.fragment, i), (c = !1)
      },
      d(i) {
        Ct(t, i), i && G(n), Ct(o, i), i && G(s), Ct(r, i)
      },
    }
  )
}
function Hn(e, t, n) {
  let { connect: o } = t
  return (
    (e.$$set = (s) => {
      'connect' in s && n(0, (o = s.connect))
    }),
    [o]
  )
}
var Oo = class extends oe {
    constructor(t) {
      super()
      re(this, t, Hn, Dn, se, { connect: 0 })
    }
  },
  rs = Oo
var ls = (e = 21) => {
  let t = '',
    n = crypto.getRandomValues(new Uint8Array(e))
  for (; e--; ) {
    let o = n[e] & 63
    o < 36
      ? (t += o.toString(36))
      : o < 62
      ? (t += (o - 26).toString(36).toUpperCase())
      : o < 63
      ? (t += '_')
      : (t += '-')
  }
  return t
}
var fs = {
  todos: [
    { id: 'R8d7ysIEl94ziepCxTZwX', text: 'double click me!', done: !1 },
    { id: 'jt9oofKsxbwknDGzIa6be', text: 'I am, by default, DONE', done: !0 },
  ],
}
var ds = () => {}
export { Fr as a, ls as b, fs as c, ds as d, rs as e }
/*! (c) Andrea Giammarchi - ISC */
/*! (c) Andrea Giammarchi @webreflection ISC */
//# sourceMappingURL=chunk-INS3FUNR.js.map
