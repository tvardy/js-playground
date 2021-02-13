var br = Object.defineProperty
var Co = (t, e) => () => (e || ((e = { exports: {} }), t(e.exports, e)), e.exports),
  Oo = (t, e) => {
    for (var n in e) br(t, n, { get: e[n], enumerable: !0 })
  }
function he() {}
function Xe(t) {
  return t()
}
function Ke() {
  return Object.create(null)
}
function Rt(t) {
  t.forEach(Xe)
}
function _r(t) {
  return typeof t == 'function'
}
function Mo(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
function Ze(t) {
  return Object.keys(t).length === 0
}
var No = typeof window != 'undefined'
var Lo = new Set()
function jo(t, e) {
  t.appendChild(e)
}
function To(t, e, n) {
  t.insertBefore(e, n || null)
}
function xr(t) {
  t.parentNode.removeChild(t)
}
function Do(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}
function Ro(t) {
  return document.createElement(t)
}
function wr(t) {
  return document.createTextNode(t)
}
function qo() {
  return wr(' ')
}
function Po(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r)
}
function Io(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e)
  }
}
function Ho(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function $r(t) {
  return Array.from(t.childNodes)
}
function Wo(t, e) {
  ;(e = '' + e), t.wholeText !== e && (t.data = e)
}
function Bo(t, e) {
  t.value = e == null ? '' : e
}
function zo(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e)
}
var Uo = new Set()
var Ve
function qt(t) {
  Ve = t
}
var pt = []
var tn = [],
  Pt = [],
  en = [],
  Er = Promise.resolve(),
  ge = !1
function Fr() {
  ge || ((ge = !0), Er.then(nn))
}
function me(t) {
  Pt.push(t)
}
var ve = !1,
  ye = new Set()
function nn() {
  if (!ve) {
    ve = !0
    do {
      for (let t = 0; t < pt.length; t += 1) {
        let e = pt[t]
        qt(e), kr(e.$$)
      }
      for (qt(null), pt.length = 0; tn.length; ) tn.pop()()
      for (let t = 0; t < Pt.length; t += 1) {
        let e = Pt[t]
        ye.has(e) || (ye.add(e), e())
      }
      Pt.length = 0
    } while (pt.length)
    for (; en.length; ) en.pop()()
    ;(ge = !1), (ve = !1), ye.clear()
  }
}
function kr(t) {
  if (t.fragment !== null) {
    t.update(), Rt(t.before_update)
    let e = t.dirty
    ;(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(me)
  }
}
var It = new Set(),
  Sr
function Cr(t, e) {
  t && t.i && (It.delete(t), t.i(e))
}
function Go(t, e, n, r) {
  if (t && t.o) {
    if (It.has(t)) return
    It.add(t),
      Sr.c.push(() => {
        It.delete(t), r && (n && t.d(1), r())
      }),
      t.o(e)
  }
}
var Jo =
  typeof window != 'undefined'
    ? window
    : typeof globalThis != 'undefined'
    ? globalThis
    : global
var Yo = new Set([
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
function Qo(t) {
  t && t.c()
}
function Or(t, e, n) {
  let { fragment: r, on_mount: s, on_destroy: o, after_update: a } = t.$$
  r && r.m(e, n),
    me(() => {
      let f = s.map(Xe).filter(_r)
      o ? o.push(...f) : Rt(f), (t.$$.on_mount = [])
    }),
    a.forEach(me)
}
function rn(t, e) {
  let n = t.$$
  n.fragment !== null &&
    (Rt(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []))
}
function Ar(t, e) {
  t.$$.dirty[0] === -1 && (pt.push(t), Fr(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function Xo(t, e, n, r, s, o, a = [-1]) {
  let f = Ve
  qt(t)
  let i = (t.$$ = {
      fragment: null,
      ctx: null,
      props: o,
      update: he,
      not_equal: s,
      bound: Ke(),
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(f ? f.$$.context : []),
      callbacks: Ke(),
      dirty: a,
      skip_bound: !1,
    }),
    c = !1
  if (
    ((i.ctx = n
      ? n(t, e.props || {}, (u, d, ...p) => {
          let _ = p.length ? p[0] : d
          return (
            i.ctx &&
              s(i.ctx[u], (i.ctx[u] = _)) &&
              (!i.skip_bound && i.bound[u] && i.bound[u](_), c && Ar(t, u)),
            d
          )
        })
      : []),
    i.update(),
    (c = !0),
    Rt(i.before_update),
    (i.fragment = r ? r(i.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      let u = $r(e.target)
      i.fragment && i.fragment.l(u), u.forEach(xr)
    } else i.fragment && i.fragment.c()
    e.intro && Cr(t.$$.fragment), Or(t, e.target, e.anchor), nn()
  }
  qt(f)
}
var Mr
typeof HTMLElement == 'function' &&
  (Mr = class extends HTMLElement {
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
      rn(this, 1), (this.$destroy = he)
    }
    $on(t, e) {
      let n = this.$$.callbacks[t] || (this.$$.callbacks[t] = [])
      return (
        n.push(e),
        () => {
          let r = n.indexOf(e)
          r !== -1 && n.splice(r, 1)
        }
      )
    }
    $set(t) {
      this.$$set &&
        !Ze(t) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1))
    }
  })
var Nr = class {
  $destroy() {
    rn(this, 1), (this.$destroy = he)
  }
  $on(e, n) {
    let r = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
    return (
      r.push(n),
      () => {
        let s = r.indexOf(n)
        s !== -1 && r.splice(s, 1)
      }
    )
  }
  $set(e) {
    this.$$set &&
      !Ze(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
  }
}
var Lr = /^(?:annotation-xml|color-profile|font-face(?:|-format|-name|-src|-uri)|missing-glyph)$/i,
  on = new Set(),
  Zo = (t) => {
    let e = t.container || document,
      n = (o) => {
        for (let a = 0, { length: f } = o; a < f; a++)
          for (let { addedNodes: i } = o[a], c = 0, { length: u } = i; c < u; c++) {
            let d = i[c],
              { children: p, getAttribute: _, tagName: w } = d
            if (_) {
              let E = (_.call(d, 'is') || w).toLowerCase()
              0 < E.indexOf('-') &&
                !on.has(E) &&
                !Lr.test(E) &&
                (on.add(E), customElements.get(E) || t.on(E)),
                r(p)
            }
          }
      },
      r = (o) => {
        n([{ addedNodes: o }])
      }
    r([document == e ? e.documentElement : e])
    let s = new MutationObserver(n)
    return s.observe(e, { subtree: !0, childList: !0 }), s
  }
;(function () {
  'use strict'
  var t =
      typeof Promise == 'function'
        ? Promise
        : function (x) {
            var l = [],
              h = 0,
              y
            return (
              x(function (b) {
                ;(y = b), (h = 1), l.splice(0).forEach(g)
              }),
              { then: g }
            )
            function g(b) {
              return h ? setTimeout(b, 0, y) : l.push(b), this
            }
          },
    e = function (x, l) {
      var h = function (b) {
          for (var T = 0, A = b.length; T < A; T++) y(b[T])
        },
        y = function (b) {
          var T = b.target,
            A = b.attributeName,
            Q = b.oldValue
          T.attributeChangedCallback(A, Q, T.getAttribute(A))
        }
      return function (g, b) {
        var T = g.constructor.observedAttributes
        return (
          T &&
            x(b).then(function () {
              new l(h).observe(g, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: T,
              })
              for (var A = 0, Q = T.length; A < Q; A++)
                g.hasAttribute(T[A]) &&
                  y({ target: g, attributeName: T[A], oldValue: null })
            }),
          g
        )
      }
    },
    n = self,
    r = n.document,
    s = n.MutationObserver,
    o = n.Set,
    a = n.WeakMap,
    f = function (l) {
      return 'querySelectorAll' in l
    },
    i = [].filter,
    c = function (x) {
      var l = new a(),
        h = function (R) {
          var P = x.query
          if (P.length)
            for (var B = 0, dt = R.length; B < dt; B++)
              b(i.call(R[B].addedNodes, f), !0, P),
                b(i.call(R[B].removedNodes, f), !1, P)
        },
        y = function (R) {
          for (var P = 0, B = R.length; P < B; P++) l.delete(R[P])
        },
        g = function () {
          h(nt.takeRecords())
        },
        b = function Z(R, P, B) {
          for (
            var dt =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : new o(),
              pr = function (rt, I, gr, ko) {
                if (!dt.has((I = R[gr]))) {
                  if ((dt.add(I), P))
                    for (var Dt, mr = T(I), pe = 0, vr = B.length; pe < vr; pe++)
                      mr.call(I, (Dt = B[pe])) &&
                        (l.has(I) || l.set(I, new o()),
                        (rt = l.get(I)),
                        rt.has(Dt) || (rt.add(Dt), x.handle(I, P, Dt)))
                  else
                    l.has(I) &&
                      ((rt = l.get(I)),
                      l.delete(I),
                      rt.forEach(function (yr) {
                        x.handle(I, P, yr)
                      }))
                  Z(Q(I), P, B, dt)
                }
                ;(Ye = rt), (Qe = I)
              },
              Ye,
              Qe,
              de = 0,
              hr = R.length;
            de < hr;
            de++
          )
            pr(Ye, Qe, de)
        },
        T = function (R) {
          return R.matches || R.webkitMatchesSelector || R.msMatchesSelector
        },
        A = function (R) {
          var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
          b(R, P, x.query)
        },
        Q = function (R) {
          return ft.length ? R.querySelectorAll(ft) : ft
        },
        nt = new s(h),
        ut = x.root || r,
        ft = x.query
      return (
        nt.observe(ut, { childList: !0, subtree: !0 }),
        A(Q(ut)),
        { drop: y, flush: g, observer: nt, parse: A }
      )
    },
    u = self,
    d = u.document,
    p = u.Map,
    _ = u.MutationObserver,
    w = u.Object,
    E = u.Set,
    D = u.WeakMap,
    $ = u.Element,
    F = u.HTMLElement,
    k = u.Node,
    O = u.Error,
    L = u.TypeError,
    j = u.Reflect,
    G = self.Promise || t,
    v = w.defineProperty,
    M = w.keys,
    S = w.getOwnPropertyNames,
    m = w.setPrototypeOf,
    N = !self.customElements
  if (N) {
    var C = function () {
        var l = this.constructor
        if (!Y.has(l)) throw new L('Illegal constructor')
        var h = Y.get(l)
        if (Mt) return De(Mt, h)
        var y = H.call(d, h)
        return De(m(y, l.prototype), h)
      },
      H = d.createElement,
      Y = new p(),
      et = new p(),
      At = new p(),
      at = new p(),
      Te = [],
      tr = function (l, h, y) {
        var g = At.get(y)
        if (h && !g.isPrototypeOf(l)) {
          Mt = m(l, g)
          try {
            new g.constructor()
          } finally {
            Mt = null
          }
        }
        var b = ''.concat(h ? '' : 'dis', 'connectedCallback')
        b in g && l[b]()
      },
      er = c({ query: Te, handle: tr }),
      nr = er.parse,
      Mt = null,
      ce = function (l) {
        if (!et.has(l)) {
          var h,
            y = new t(function (g) {
              h = g
            })
          et.set(l, { $: y, _: h })
        }
        return et.get(l).$
      },
      De = e(ce, _)
    v(self, 'customElements', {
      configurable: !0,
      value: {
        define: function (l, h) {
          if (at.has(l))
            throw new O(
              'the name "'.concat(l, '" has already been used with this registry')
            )
          Y.set(h, l),
            At.set(l, h.prototype),
            at.set(l, h),
            Te.push(l),
            ce(l).then(function () {
              nr(d.querySelectorAll(l))
            }),
            et.get(l)._(h)
        },
        get: function (l) {
          return at.get(l)
        },
        whenDefined: ce,
      },
    }),
      v((C.prototype = F.prototype), 'constructor', { value: C }),
      v(self, 'HTMLElement', { configurable: !0, value: C }),
      v(d, 'createElement', {
        configurable: !0,
        value: function (l, h) {
          var y = h && h.is,
            g = y ? at.get(y) : at.get(l)
          return g ? new g() : H.call(d, l)
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
      var Re = function x() {
        return self.Reflect.construct(HTMLLIElement, [], x)
      }
      Re.prototype = HTMLLIElement.prototype
      var qe = 'extends-li'
      self.customElements.define('extends-li', Re, { extends: 'li' }),
        (N = d.createElement('li', { is: qe }).outerHTML.indexOf(qe) < 0)
      var Pe = self.customElements,
        rr = Pe.get,
        or = Pe.whenDefined
      v(self.customElements, 'whenDefined', {
        configurable: !0,
        value: function (l) {
          var h = this
          return or.call(this, l).then(function (y) {
            return y || rr.call(h, l)
          })
        },
      })
    } catch (x) {
      N = !N
    }
  if (N) {
    var Ie = function (l) {
        var h = le.get(l),
          y = h.parse,
          g = h.root
        y(g.querySelectorAll(this), l.isConnected)
      },
      K = self.customElements,
      He = $.prototype.attachShadow,
      We = d.createElement,
      sr = K.define,
      ir = K.get,
      cr = j || {
        construct: function (l) {
          return l.call(this)
        },
      },
      lr = cr.construct,
      le = new D(),
      ae = new E(),
      Nt = new p(),
      Lt = new p(),
      Be = new p(),
      ue = new p(),
      ze = [],
      jt = [],
      Ue = function (l) {
        return ue.get(l) || ir.call(K, l)
      },
      Ge = function (l, h, y) {
        var g = Be.get(y)
        if (h && !g.isPrototypeOf(l)) {
          var b = M(l),
            T = b.map(function (ut) {
              var ft = l[ut]
              return delete l[ut], ft
            })
          Tt = m(l, g)
          try {
            new g.constructor()
          } finally {
            Tt = null
            for (var A = 0, Q = b.length; A < Q; A++) l[b[A]] = T[A]
          }
        }
        var nt = ''.concat(h ? '' : 'dis', 'connectedCallback')
        nt in g && l[nt]()
      },
      ar = c({ query: jt, handle: Ge }),
      ur = ar.parse,
      fr = c({
        query: ze,
        handle: function (l, h) {
          le.has(l) && (h ? ae.add(l) : ae.delete(l), Ie.call(jt, l))
        },
      }),
      dr = fr.parse,
      fe = function (l) {
        if (!Lt.has(l)) {
          var h,
            y = new G(function (g) {
              h = g
            })
          Lt.set(l, { $: y, _: h })
        }
        return Lt.get(l).$
      },
      Je = e(fe, _),
      Tt = null
    S(self)
      .filter(function (x) {
        return /^HTML/.test(x)
      })
      .forEach(function (x) {
        var l = self[x]
        function h() {
          var y = this.constructor
          if (!Nt.has(y)) throw new L('Illegal constructor')
          var g = Nt.get(y),
            b = g.is,
            T = g.tag
          if (b) {
            if (Tt) return Je(Tt, b)
            var A = We.call(d, T)
            return A.setAttribute('is', b), Je(m(A, y.prototype), b)
          } else return lr.call(this, l, [], y)
        }
        v((h.prototype = l.prototype), 'constructor', { value: h }),
          v(self, x, { value: h })
      }),
      v(d, 'createElement', {
        configurable: !0,
        value: function (l, h) {
          var y = h && h.is
          if (y) {
            var g = ue.get(y)
            if (g && Nt.get(g).tag === l) return new g()
          }
          var b = We.call(d, l)
          return y && b.setAttribute('is', y), b
        },
      }),
      He &&
        v($.prototype, 'attachShadow', {
          configurable: !0,
          value: function () {
            var l = He.apply(this, arguments),
              h = c({ query: jt, root: l, handle: Ge }),
              y = h.parse
            return le.set(this, { root: l, parse: y }), l
          },
        }),
      v(K, 'get', { configurable: !0, value: Ue }),
      v(K, 'whenDefined', { configurable: !0, value: fe }),
      v(K, 'define', {
        configurable: !0,
        value: function (l, h, y) {
          if (Ue(l))
            throw new O("'".concat(l, "' has already been defined as a custom element"))
          var g,
            b = y && y.extends
          Nt.set(h, b ? { is: l, tag: b } : { is: '', tag: l }),
            b
              ? ((g = ''.concat(b, '[is="').concat(l, '"]')),
                Be.set(g, h.prototype),
                ue.set(l, h),
                jt.push(g))
              : (sr.apply(K, arguments), ze.push((g = l))),
            fe(l).then(function () {
              b
                ? (ur(d.querySelectorAll(g)), ae.forEach(Ie, [g]))
                : dr(d.querySelectorAll(g))
            }),
            Lt.get(l)._(h)
        },
      })
  }
})()
var W =
  typeof Promise == 'function'
    ? Promise
    : function (t) {
        let e = [],
          n = 0,
          r
        return (
          t((o) => {
            ;(r = o), (n = 1), e.splice(0).forEach(s)
          }),
          { then: s }
        )
        function s(o) {
          return n ? setTimeout(o, 0, r) : e.push(o), this
        }
      }
var Ht = null,
  Wt = new Set(),
  sn = (t) => {
    let { $: e, r: n, h: r } = t
    ht(n) && (V.get(r).delete(t), n()), ht((t.r = e())) && V.get(r).add(t)
  },
  jr = () => {
    let t = Wt
    ;(Wt = new Set()),
      t.forEach(({ h: e, c: n, a: r, e: s }) => {
        s && e.apply(n, r)
      })
  },
  V = new WeakMap(),
  gt = [],
  Bt = []
function zt(t, e) {
  return t !== this[e]
}
var be = (t) => {
    let e = V.get(t)
    e &&
      Ut.then(() => {
        e.forEach((n) => {
          n.r(), (n.r = null)
        }),
          e.clear()
      })
  },
  z = () => Ht,
  _e = (t) => V.has(t),
  ht = (t) => typeof t == 'function',
  mt = (t) => {
    let e = { h: n, c: null, a: null, e: 0, i: 0, s: [] }
    return n
    function n() {
      let r = Ht
      ;(Ht = e), (e.e = e.i = 0)
      try {
        return t.apply((e.c = this), (e.a = arguments))
      } finally {
        ;(Ht = r),
          gt.length && Ut.then(gt.forEach.bind(gt.splice(0), sn)),
          Bt.length && Bt.splice(0).forEach(sn)
      }
    }
  },
  cn = (t) => {
    Wt.has(t) || ((t.e = 1), Wt.add(t), Ut.then(jr))
  },
  Ut = new W((t) => t())
var xe = (t) => ({ _: new Set(), provide: Tr, value: t }),
  we = ({ _: t, value: e }) => (t.add(z()), e)
function Tr(t) {
  let { _: e, value: n } = this
  n !== t &&
    ((this._ = new Set()),
    (this.value = t),
    e.forEach(({ h: r, c: s, a: o }) => {
      r.apply(s, o)
    }))
}
var $e = (t, e) => Gt(() => t, e),
  Gt = (t, e) => {
    let n = z(),
      { i: r, s } = n
    return (
      (r === s.length || !e || e.some(zt, s[r]._)) && (s[r] = { $: t(), _: e }),
      s[n.i++].$
    )
  }
var ln = (t) => (e, n) => {
    let r = z(),
      { i: s, s: o, h: a } = r,
      f = s === o.length
    r.i++,
      f && (V.has(a) || V.set(a, new Set()), (o[s] = { $: e, _: n, r: null, h: a })),
      (f || !n || n.some(zt, o[s]._)) && t.push(o[s]),
      (o[s].$ = e),
      (o[s]._ = n)
  },
  Ee = ln(gt),
  Fe = ln(Bt)
var an = (t, e) => (ht(e) ? e(t) : e),
  Jt = (t, e, n) => {
    let r = z(),
      { i: s, s: o } = r
    s === o.length &&
      o.push({
        $: ht(n) ? n(e) : an(void 0, e),
        set: (i) => {
          ;(o[s].$ = t(o[s].$, i)), cn(r)
        },
      })
    let { $: a, set: f } = o[r.i++]
    return [a, f]
  },
  vt = (t) => Jt(an, t)
var ke = (t) => {
  let e = z(),
    { i: n, s: r } = e
  return n === r.length && r.push({ current: t }), r[e.i++]
}
var tt = (t) => ({ get: (e) => t.get(e), set: (e, n) => (t.set(e, n), n) })
var un = /([^\s\\>"'=]+)\s*=\s*(['"]?)$/,
  Dr = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,
  Rr = /<[a-z][^>]+$/i,
  qr = />[^<>]*$/,
  Pr = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,
  Ir = /\s+$/,
  fn = (t, e) => 0 < e-- && (Rr.test(t[e]) || (!qr.test(t[e]) && fn(t, e))),
  Hr = (t, e, n) => (Dr.test(e) ? t : `<${e}${n.replace(Ir, '')}></${e}>`),
  dn = (t, e, n) => {
    let r = [],
      { length: s } = t
    for (let a = 1; a < s; a++) {
      let f = t[a - 1]
      r.push(
        un.test(f) && fn(t, a)
          ? f.replace(un, (i, c, u) => `${e}${a - 1}=${u || '"'}${c}${u ? '' : '"'}`)
          : `${f}<!--${e}${a - 1}-->`
      )
    }
    r.push(t[s - 1])
    let o = r.join('').trim()
    return n ? o : o.replace(Pr, Hr)
  }
var { isArray: ot } = Array,
  { indexOf: pn, slice: Yt } = []
var Wr = 1,
  hn = 111,
  Br = ({ firstChild: t, lastChild: e }) => {
    let n = document.createRange()
    return n.setStartAfter(t), n.setEndAfter(e), n.deleteContents(), t
  },
  gn = (t, e) =>
    t.nodeType === hn
      ? 1 / e < 0
        ? e
          ? Br(t)
          : t.lastChild
        : e
        ? t.valueOf()
        : t.firstChild
      : t,
  mn = (t) => {
    let { childNodes: e } = t,
      { length: n } = e
    if (n < 2) return n ? e[0] : t
    let r = Yt.call(e, 0),
      s = r[0],
      o = r[n - 1]
    return {
      ELEMENT_NODE: Wr,
      nodeType: hn,
      firstChild: s,
      lastChild: o,
      valueOf() {
        if (e.length !== n) {
          let a = 0
          for (; a < n; ) t.appendChild(r[a++])
        }
        return t
      },
    }
  }
var vn = (t, e, n, r, s) => {
  let o = n.length,
    a = e.length,
    f = o,
    i = 0,
    c = 0,
    u = null
  for (; i < a || c < f; )
    if (a === i) {
      let d = f < o ? (c ? r(n[c - 1], -0).nextSibling : r(n[f - c], 0)) : s
      for (; c < f; ) t.insertBefore(r(n[c++], 1), d)
    } else if (f === c)
      for (; i < a; ) (!u || !u.has(e[i])) && t.removeChild(r(e[i], -1)), i++
    else if (e[i] === n[c]) i++, c++
    else if (e[a - 1] === n[f - 1]) a--, f--
    else if (e[i] === n[f - 1] && n[c] === e[a - 1]) {
      let d = r(e[--a], -1).nextSibling
      t.insertBefore(r(n[c++], 1), r(e[i++], -1).nextSibling),
        t.insertBefore(r(n[--f], 1), d),
        (e[a] = n[f])
    } else {
      if (!u) {
        u = new Map()
        let d = c
        for (; d < f; ) u.set(n[d], d++)
      }
      if (u.has(e[i])) {
        let d = u.get(e[i])
        if (c < d && d < f) {
          let p = i,
            _ = 1
          for (; ++p < a && p < f && u.get(e[p]) === d + _; ) _++
          if (_ > d - c) {
            let w = r(e[i], 0)
            for (; c < d; ) t.insertBefore(r(n[c++], 1), w)
          } else t.replaceChild(r(n[c++], 1), r(e[i++], -1))
        } else i++
      } else t.removeChild(r(e[i++], -1))
    }
  return n
}
var yn = (t) => (e) => {
    for (let n in e) {
      let r = n === 'role' ? n : `aria-${n}`,
        s = e[n]
      s == null ? t.removeAttribute(r) : t.setAttribute(r, s)
    }
  },
  bn = (t, e) => {
    let n,
      r = !0,
      s = document.createAttributeNS(null, e)
    return (o) => {
      n !== o &&
        ((n = o),
        n == null
          ? r || (t.removeAttributeNode(s), (r = !0))
          : ((s.value = o), r && (t.setAttributeNodeNS(s), (r = !1))))
    }
  },
  _n = ({ dataset: t }) => (e) => {
    for (let n in e) {
      let r = e[n]
      r == null ? delete t[n] : (t[n] = r)
    }
  },
  xn = (t, e) => {
    let n,
      r = e.slice(2)
    return (
      !(e in t) && e.toLowerCase() in t && (r = r.toLowerCase()),
      (s) => {
        let o = ot(s) ? s : [s, !1]
        n !== o[0] &&
          (n && t.removeEventListener(r, n, o[1]),
          (n = o[0]) && t.addEventListener(r, n, o[1]))
      }
    )
  },
  wn = (t) => (e) => {
    typeof e == 'function' ? e(t) : (e.current = t)
  },
  $n = (t, e) => (n) => {
    t[e] = n
  },
  En = (t) => {
    let e
    return (n) => {
      e != n && ((e = n), (t.textContent = n == null ? '' : n))
    }
  }
var zr = (function (t) {
    'use strict'
    var e = 'fragment',
      n = 'template',
      r = 'content' in a(n),
      s = r
        ? function (i) {
            var c = a(n)
            return (c.innerHTML = i), c.content
          }
        : function (i) {
            var c = a(e),
              u = a(n),
              d = null
            if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(i)) {
              var p = RegExp.$1
              ;(u.innerHTML = '<table>' + i + '</table>'), (d = u.querySelectorAll(p))
            } else (u.innerHTML = i), (d = u.childNodes)
            return o(c, d), c
          }
    return function (c, u) {
      return (u === 'svg' ? f : s)(c)
    }
    function o(i, c) {
      for (var u = c.length; u--; ) i.appendChild(c[0])
    }
    function a(i) {
      return i === e
        ? t.createDocumentFragment()
        : t.createElementNS('http://www.w3.org/1999/xhtml', i)
    }
    function f(i) {
      var c = a(e),
        u = a('div')
      return (
        (u.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + i + '</svg>'),
        o(c, u.firstChild.childNodes),
        c
      )
    }
  })(document),
  yt = zr
var Fn = ({ childNodes: t }, e) => t[e],
  Qt = (t) => {
    let e = [],
      { parentNode: n } = t
    for (; n; ) e.push(pn.call(n.childNodes, t)), (t = n), (n = t.parentNode)
    return e
  },
  { createTreeWalker: kn, importNode: Xt } = document
var Sn = Xt.length != 1,
  Cn = Sn ? (t, e, n) => Xt.call(document, yt(t, e, n), !0) : yt,
  On = Sn
    ? (t) => kn.call(document, t, 1 | 128, null, !1)
    : (t) => kn.call(document, t, 1 | 128)
var bt = (t, e, n) => vn(t.parentNode, e, n, gn, t),
  Ur = (t) => {
    let e,
      n,
      r = [],
      s = (o) => {
        switch (typeof o) {
          case 'string':
          case 'number':
          case 'boolean':
            e !== o &&
              ((e = o),
              n ? (n.textContent = o) : (n = document.createTextNode(o)),
              (r = bt(t, r, [n])))
            break
          case 'object':
          case 'undefined':
            if (o == null) {
              e != o && ((e = o), (r = bt(t, r, [])))
              break
            }
            if (ot(o)) {
              ;(e = o),
                o.length === 0
                  ? (r = bt(t, r, []))
                  : typeof o[0] == 'object'
                  ? (r = bt(t, r, o))
                  : s(String(o))
              break
            }
            'ELEMENT_NODE' in o &&
              e !== o &&
              ((e = o), (r = bt(t, r, o.nodeType === 11 ? Yt.call(o.childNodes) : [o])))
        }
      }
    return s
  },
  Gr = (t, e) =>
    e === 'ref'
      ? wn(t)
      : e === 'aria'
      ? yn(t)
      : e === '.dataset'
      ? _n(t)
      : e.slice(0, 1) === '.'
      ? $n(t, e.slice(1))
      : e.slice(0, 2) === 'on'
      ? xn(t, e)
      : bn(t, e)
function An(t) {
  let { type: e, path: n } = t,
    r = n.reduceRight(Fn, this)
  return e === 'node' ? Ur(r) : e === 'attr' ? Gr(r, t.name) : En(r)
}
var _t = 'is\xB5',
  Mn = tt(new WeakMap()),
  Jr = /^(?:plaintext|script|style|textarea|title|xmp)$/i,
  st = () => ({ stack: [], entry: null, wire: null }),
  Qr = (t, e) => {
    let { content: n, updates: r } = Yr(t, e)
    return { type: t, template: e, content: n, updates: r, wire: null }
  },
  Xr = (t, e) => {
    let n = dn(e, _t, t === 'svg'),
      r = Cn(n, t),
      s = On(r),
      o = [],
      a = e.length - 1,
      f = 0,
      i = `${_t}${f}`
    for (; f < a; ) {
      let c = s.nextNode()
      if (!c) throw `bad template: ${n}`
      if (c.nodeType === 8)
        c.textContent === i &&
          (o.push({ type: 'node', path: Qt(c) }), (i = `${_t}${++f}`))
      else {
        for (; c.hasAttribute(i); )
          o.push({ type: 'attr', path: Qt(c), name: c.getAttribute(i) }),
            c.removeAttribute(i),
            (i = `${_t}${++f}`)
        Jr.test(c.tagName) &&
          c.textContent.trim() === `<!--${i}-->` &&
          ((c.textContent = ''),
          o.push({ type: 'text', path: Qt(c) }),
          (i = `${_t}${++f}`))
      }
    }
    return { content: r, nodes: o }
  },
  Yr = (t, e) => {
    let { content: n, nodes: r } = Mn.get(e) || Mn.set(e, Xr(t, e)),
      s = Xt.call(document, n, !0),
      o = r.map(An, s)
    return { content: s, updates: o }
  },
  xt = (t, { type: e, template: n, values: r }) => {
    let { length: s } = r
    Nn(t, r, s)
    let { entry: o } = t
    ;(!o || o.template !== n || o.type !== e) && (t.entry = o = Qr(e, n))
    let { content: a, updates: f, wire: i } = o
    for (let c = 0; c < s; c++) f[c](r[c])
    return i || (o.wire = mn(a))
  },
  Nn = ({ stack: t }, e, n) => {
    for (let r = 0; r < n; r++) {
      let s = e[r]
      s instanceof Kt
        ? (e[r] = xt(t[r] || (t[r] = st()), s))
        : ot(s)
        ? Nn(t[r] || (t[r] = st()), s, s.length)
        : (t[r] = null)
    }
    n < t.length && t.splice(n)
  }
function Kt(t, e, n) {
  ;(this.type = t), (this.template = e), (this.values = n)
}
var { create: Kr, defineProperties: Zr } = Object,
  Ln = (t) => {
    let e = tt(new WeakMap()),
      n = (r) => (s, ...o) => xt(r, { type: t, template: s, values: o })
    return Zr((r, ...s) => new Kt(t, r, s), {
      for: {
        value(r, s) {
          let o = e.get(r) || e.set(r, Kr(null))
          return o[s] || (o[s] = n(st()))
        },
      },
      node: {
        value: (r, ...s) => xt(st(), { type: t, template: r, values: s }).valueOf(),
      },
    })
  },
  jn = tt(new WeakMap()),
  wt = (t, e) => {
    let n = typeof e == 'function' ? e() : e,
      r = jn.get(t) || jn.set(t, st()),
      s = n instanceof Kt ? xt(r, n) : n
    return (
      s !== r.wire && ((r.wire = s), (t.textContent = ''), t.appendChild(s.valueOf())),
      t
    )
  },
  $t = Ln('html'),
  Zt = Ln('svg')
function Vt(t) {
  for (var e = t[0], n = 1, r = arguments.length; n < r; n++) e += arguments[n] + t[n]
  return e
}
var { defineProperties: te, keys: Vr } = Object,
  to = (t, e, n, r, s) => ({
    configurable: !0,
    get: () => r,
    set(o) {
      ;(t || o !== r || (e && typeof o == 'object' && o)) &&
        ((r = o), n ? s.call(this, r) : s.call(this))
    },
  }),
  ee = (t, e, n, r, s, o) => {
    let a = {},
      f = s !== Et,
      i = [n, r, f]
    for (let c = Vr(t), u = 0; u < c.length; u++) {
      let d = e(t, c[u]),
        p = f ? s(d) : [d, s]
      o && (p[1] = o), (a[c[u]] = to.apply(null, i.concat(p)))
    }
    return a
  },
  Et = () => {}
var ne = ({
  all: t = !1,
  shallow: e = !0,
  useState: n = Et,
  getAttribute: r = (s, o) => s.getAttribute(o),
} = {}) => (s, o, a) => {
  let i = ee(
    o,
    (c, u) => {
      let d = c[u],
        p = typeof d
      return (
        s.hasOwnProperty(u)
          ? ((d = s[u]), delete s[u])
          : s.hasAttribute(u) &&
            ((d = r(s, u)),
            p == 'number'
              ? (d = +d)
              : p == 'boolean' && (d = !/^(?:false|0|)$/.test(d))),
        d
      )
    },
    t,
    e,
    n,
    a
  )
  return te(s, i)
}
var eo = ne({ dom: !0 }),
  re = customElements,
  { define: no } = re,
  { create: ro, defineProperties: Se, getOwnPropertyDescriptor: oo, keys: Tn } = Object,
  it = 'element',
  Ce = tt(new Map([[it, { c: HTMLElement, e: it }]])),
  Dn = (t) => document.createElement(t),
  Rn = (t) => Ce.get(t) || Ce.set(t, { c: Dn(t).constructor, e: t }),
  Ft = (t, e) => {
    let {
        attachShadow: n,
        attributeChanged: r,
        bound: s,
        connected: o,
        disconnected: a,
        handleEvent: f,
        init: i,
        observedAttributes: c,
        props: u,
        render: d,
        style: p,
      } = e,
      _ = new WeakMap(),
      w = {},
      E = {},
      D = [],
      $ = ro(null),
      F = (v, M, S) => {
        if (!_.has(v)) {
          _.set(v, 0),
            Se(v, {
              html: { configurable: !0, value: io.bind(n ? v.attachShadow(n) : v) },
            })
          for (let m = 0; m < k; m++) {
            let { type: N, options: C } = D[m]
            v.addEventListener(N, v, C)
          }
          s && s.forEach(so, v),
            u && eo(v, u, d),
            (i || d) && (i || d).call(v),
            M && (v[M] = S)
        }
      }
    for (let v = Tn(e), M = 0, { length: S } = v; M < S; M++) {
      let m = v[M]
      if (/^on./.test(m) && !/Options$/.test(m)) {
        let N = e[m + 'Options'] || !1,
          C = m.toLowerCase(),
          H = C.slice(2)
        D.push({ type: H, options: N }),
          ($[H] = m),
          C !== m &&
            ((H = C.slice(2, 3) + m.slice(3)),
            ($[H] = m),
            D.push({ type: H, options: N }))
      }
      switch (m) {
        case 'attachShadow':
        case 'observedAttributes':
        case 'style':
          break
        default:
          E[m] = oo(e, m)
      }
    }
    let { length: k } = D
    if (
      (k &&
        !f &&
        (E.handleEvent = {
          value(v) {
            this[$[v.type]](v)
          },
        }),
      u !== null)
    )
      if (u)
        for (let v = Tn(u), M = 0; M < v.length; M++) {
          let S = v[M]
          E[S] = {
            get() {
              return F(this), u[S]
            },
            set(m) {
              F(this, S, m)
            },
          }
        }
      else
        E.props = {
          get() {
            let v = {}
            for (let { attributes: M } = this, { length: S } = M, m = 0; m < S; m++) {
              let { name: N, value: C } = M[m]
              v[N] = C
            }
            return v
          },
        }
    c && (w.observedAttributes = { value: c }),
      (E.attributeChangedCallback = {
        value() {
          F(this), r && r.apply(this, arguments)
        },
      }),
      (E.connectedCallback = {
        value() {
          F(this), o && o.call(this)
        },
      }),
      a && (E.disconnectedCallback = { value: a })
    let { c: O, e: L } = Rn(e.extends || it)
    class j extends O {}
    Se(j, w), Se(j.prototype, E)
    let G = [t, j]
    return (
      L !== it && G.push({ extends: L }),
      no.apply(re, G),
      Ce.set(t, { c: j, e: L }),
      p &&
        (document.head.appendChild(Dn('style')).textContent = p(
          L === it ? t : L + '[is="' + t + '"]'
        )),
      j
    )
  }
re.get('uce-lib') ||
  re.define(
    'uce-lib',
    class extends Rn(it).c {
      static get define() {
        return Ft
      }
      static get render() {
        return wt
      }
      static get html() {
        return $t
      }
      static get svg() {
        return Zt
      }
      static get css() {
        return Vt
      }
    }
  )
function so(t) {
  this[t] = this[t].bind(this)
}
function io() {
  return wt(this, $t.apply(null, arguments))
}
var co = (t, e) => t[e],
  qn = ({ all: t = !1, shallow: e = !0, useState: n = Et } = {}) => (r, s) =>
    te({}, ee(r, co, t, e, n, s))
var oe = (t = {}) => (t.dom ? ne : qn)(t)
var { document: lo, MutationObserver: ao, Set: Pn, WeakMap: uo } = self,
  In = (t) => 'querySelectorAll' in t,
  { filter: Hn } = [],
  Oe = (t) => {
    let e = new uo(),
      n = (p) => {
        let { query: _ } = t
        if (_.length)
          for (let w = 0, { length: E } = p; w < E; w++)
            o(Hn.call(p[w].addedNodes, In), !0, _),
              o(Hn.call(p[w].removedNodes, In), !1, _)
      },
      r = (p) => {
        for (let _ = 0, { length: w } = p; _ < w; _++) e.delete(p[_])
      },
      s = () => {
        n(c.takeRecords())
      },
      o = (p, _, w, E = new Pn()) => {
        for (let D, $, F = 0, { length: k } = p; F < k; F++)
          if (!E.has(($ = p[F]))) {
            if ((E.add($), _))
              for (let O, L = a($), j = 0, { length: G } = w; j < G; j++)
                L.call($, (O = w[j])) &&
                  (e.has($) || e.set($, new Pn()),
                  (D = e.get($)),
                  D.has(O) || (D.add(O), t.handle($, _, O)))
            else
              e.has($) &&
                ((D = e.get($)),
                e.delete($),
                D.forEach((O) => {
                  t.handle($, _, O)
                }))
            o(i($), _, w, E)
          }
      },
      a = (p) => p.matches || p.webkitMatchesSelector || p.msMatchesSelector,
      f = (p, _ = !0) => {
        o(p, _, t.query)
      },
      i = (p) => (d.length ? p.querySelectorAll(d) : d),
      c = new ao(n),
      u = t.root || lo,
      { query: d } = t
    return (
      c.observe(u, { childList: !0, subtree: !0 }),
      f(i(u)),
      { drop: r, flush: s, observer: c, parse: f }
    )
  }
W.all ||
  (W.all = (t) =>
    new W((e) => {
      let { length: n } = t
      n || e()
      let r = 0
      for (; r < n; ) t[r++].then(s)
      r = 0
      function s() {
        ++r === n && e()
      }
    }))
var { create: fo, defineProperty: po, keys: Wn } = Object,
  Bn = [],
  ho = `"use strict;"
`,
  go = (t) => J[t],
  J = fo(null),
  Ae = {},
  Ne = (t, e) => {
    let n = [],
      r = [],
      s = t
        .replace(
          /(^|[\r\n])\s*import\s*((['|"])[^\3]+?\3)/g,
          (o, a, f) => a + 'require(' + f + ')'
        )
        .replace(
          /(^|[\r\n])\s*import\s*([^\3]+?)(\s*from\s*)((['|"])[^\5]+?\5)/g,
          (o, a, f, i, c) =>
            a + 'const ' + f.replace(/\s+as\s+/g, ':') + ' = require(' + c + ')'
        )
        .replace(/^\s*export\s+default(\s*)/gm, 'exports.default =$1')
        .replace(
          /(^|[\r\n])\s*export\s*\{([^}]+?)\}[^\n]*/g,
          (o, a, f) => (
            f
              .trim()
              .split(/\s*,\s*/)
              .forEach((i) => {
                n.push(`exports.${i} = ${i};`)
              }),
            a
          )
        )
        .replace(
          /(^|[\r\n])\s*export\s+(const|let|var|function)(\s+)(\w+)/g,
          (o, a, f, i, c) => (n.push(`exports.${c} = ${c};`), a + f + i + c)
        )
        .concat(
          `
`,
          n.join(`
`)
        )
        .replace(/require\s*\(\s*(['"])([^\1]+?)\1\s*\)/g, (o, a, f) => (r.push(f), o))
    return e
      ? (r.forEach((o) => {
          o in J ||
            Bn.push(
              new W((a) => {
                let f = Ae
                if (/^(?:[./]|https?:)/.test(o)) {
                  J[o] = f
                  let i = new XMLHttpRequest()
                  i.open('get', o, !0),
                    i.send(null),
                    (i.onload = () => {
                      a((J[o] = Me(i.responseText)))
                    })
                } else
                  po(J, o, {
                    get: () => f,
                    set: (i) => {
                      a((f = i))
                    },
                  })
              })
            )
        }),
        new W((o) => {
          W.all(Bn).then(() => o(s))
        }))
      : s
  },
  mo = (t) => {
    let e = Wn(t || {}),
      n = e.map((r) => t[r]).concat(go)
    return (
      e.push('require'),
      (r) => {
        let s = {},
          o = { exports: s },
          a = e.concat('module', 'exports', ho + Ne(r))
        Function.apply(null, a).apply(null, n.concat(o, s))
        let i = o.exports,
          c = Wn(i)
        return c.length === 1 && c[0] === 'default' ? i.default : i
      }
    )
  },
  Me = mo()
var zn = (t) => {
  let e = [],
    n = [],
    { length: r } = t,
    s = 0,
    o = 0,
    a = 0
  for (; s < r && -1 < (s = t.indexOf('{{', a)) && -1 < (o = t.indexOf('}}', s + 2)); )
    e.push(t.slice(a, s)), n.push(t.slice(s + 2, o)), (a = o + 2)
  e.push(t.slice(a))
  let f = [e],
    i = Function('return function(){with(arguments[0])return[' + n + ']}')()
  return function (c) {
    return f.concat(i.call(this, c))
  }
}
var Un = oe({ dom: !0, useState: vt }),
  kt = [],
  { drop: vo, parse: yo } = Oe({
    query: kt,
    handle(t, e, n) {
      if ((vo([t]), se.has(n))) {
        let r = se.get(n)
        se.delete(n), kt.splice(kt.indexOf(n), 1), r()
      }
    },
  }),
  U = (t, e) => {
    t in J && J[t] !== Ae && console.warn('duplicated ' + t), (J[t] = e)
  },
  bo = (t) => {
    let e = new Le()
    return (e.innerHTML = t), e
  },
  se = new Map(),
  _o = ['module.exports=function(module,exports){"use strict";', '}'],
  xo = () => {},
  je = () => {
    throw new Error('bad template')
  },
  St = (t, e) => t.getAttribute(e),
  ct = (t, e) => t.hasAttribute(e),
  wo = (t, e, n, r) => {
    let s = { exports: r }
    t.call(e, s, r)
    let o = s.exports,
      a = o.default || o
    return n && Un(e, a.props), a
  },
  Gn = (t, e) => (n) =>
    [].reduce.call(
      n.querySelectorAll('[' + t + ']'),
      (r, s) => {
        let { parentNode: o } = s
        do
          if (o === n) {
            let a = St(s, t)
            r[a] = e ? [].concat(r[a] || [], s) : s
            break
          } else if (/-/.test(o.tagName) || St(o, 'is')) break
        while ((o = o.parentNode))
        return r
      },
      {}
    ),
  ie = {
    define: Ft,
    render: wt,
    html: $t,
    svg: Zt,
    css: Vt,
    reactive: oe({ useState: vt }),
    ref: Gn('ref', !1),
    slot: Gn('slot', !0),
  }
U('@uce/reactive', ie.reactive)
U('@uce/slot', ie.slot)
U('@uce', ie)
U('uce', ie)
var Jn = {
  augmentor: mt,
  hooked: mt,
  useState: vt,
  useRef: ke,
  useContext: we,
  createContext: xe,
  useCallback: $e,
  useMemo: Gt,
  useReducer: Jt,
  useEffect: Ee,
  useLayoutEffect: Fe,
}
U('augmentor', Jn)
U('uhooks', Jn)
U('qsa-observer', Oe)
U('reactive-props', oe)
U('@webreflection/lie', W)
var Le = Ft('uce-template', { extends: 'template', props: null, init: Yn })
Le.resolve = U
Le.from = bo
function Yn(t) {
  let e = ($) => {
      let F = zn(E.replace(/(<!--(\{\{)|(\}\})-->)/g, '$2$3')),
        k = (_ && Me(i ? _o.join($) : $)) || {},
        { observedAttributes: O, props: L, setup: j } = k,
        G = !!E.trim(),
        v = i || G || !!j,
        M = new WeakMap(),
        S = {
          props: null,
          extends: u ? p : 'element',
          init() {
            let m = this,
              { html: N } = m,
              C = !0,
              H = xo,
              Y = mt(() => {
                if (C && ((C = !C), v)) {
                  ;(m.render = Y), L && Un(m, L)
                  let et = i ? wo(k, m, c, {}) : j && k.setup(m)
                  if (G) {
                    let At = F.bind(m, et || {})
                    H = () => {
                      N.apply(m, At())
                    }
                  }
                }
                H()
              })
            Y(), _e(Y) && M.set(m, Y)
          },
        }
      if ((d && (S.style = () => d), w && (S.attachShadow = { mode: w }), O)) {
        S.observedAttributes = O
        let m = (S.attributeChanged = function () {
          let { attributeChanged: N } = this
          N !== m && N.apply(this, arguments)
        })
      }
      if (_) {
        let m = (S.connected = function () {
            let { connected: C } = this
            C !== m && C.call(this)
          }),
          N = (S.disconnected = function () {
            let { disconnected: C } = this
            M.has(this) && be(M.get(this)), C !== N && C.call(this)
          })
      }
      for (let m in k) m in S || (S[m] = k[m])
      Ft(u || p, S)
    },
    { content: n, ownerDocument: r, parentNode: s } = this,
    { childNodes: o } = n || yt(this.innerHTML),
    a = []
  s && this instanceof HTMLUnknownElement && s.removeChild(this)
  let f = e,
    i = !1,
    c = !1,
    u = '',
    d = '',
    p = '',
    _ = '',
    w = '',
    E = ''
  for (let $ = 0; $ < o.length; $++) {
    let F = o[$]
    if (F.nodeType === 1) {
      let { tagName: k } = F,
        O = ct(F, 'is')
      ;/^style$/i.test(k)
        ? a.push(F)
        : O || /-/i.test(k)
        ? (p && je(),
          (p = k.toLowerCase()),
          (E = F.innerHTML),
          O && (u = St(F, 'is').toLowerCase()),
          ct(F, 'shadow') && (w = St(F, 'shadow') || 'open'))
        : /^script$/i.test(k) &&
          (_ && je(),
          (i = ct(F, 'setup')),
          (c = i && St(F, 'setup') === 'props'),
          (_ = F.textContent),
          (f = () => {
            Ne(_, !0).then(e)
          }))
    }
  }
  let D = u ? p + '[is="' + u + '"]' : p
  if (!D) return setTimeout(t ? je : Yn.bind(this), 0, !0)
  for (let $ = a.length; $--; ) {
    let F = a[$],
      { textContent: k } = F
    if (ct(F, 'shadow')) E = '<style>' + k + '</style>' + E
    else if (ct(F, 'scoped')) {
      let O = []
      d += k
        .replace(/\{([^}]+?)\}/g, (L, j) => '' + O.push(j) + ',')
        .split(',')
        .map((L) => (L.trim() ? D + ' ' + L.trim() : ''))
        .join(
          `,
`
        )
        .replace(/\x01(\d+),/g, (L, j) => '{' + O[--j] + '}')
        .replace(
          /(,\n)+/g,
          `,
`
        )
    } else d += k
  }
  ct(this, 'lazy') ? (se.set(D, f), kt.push(D), yo(r.querySelectorAll(kt))) : f()
}
var Ct = () => {}
function Qn() {
  return { length: 0, clear: Ct, getItem: Ct, key: Ct, setItem: Ct, removeItem: Ct }
}
function Xn(t) {
  try {
    if (!t.localStorage || !t.sessionStorage) throw 'no storage!'
    return (
      t.localStorage.setItem('storage_test', '1'),
      t.localStorage.removeItem('storage_test'),
      [t.localStorage, t.sessionStorage]
    )
  } catch (e) {
    let n = new Qn(),
      r = new Qn()
    return [n, r]
  }
}
var q = (function () {
    if (typeof self != 'undefined') return self
    if (typeof global != 'undefined') return global
    if (typeof Kn != 'undefined') return Kn
    throw new $o('unable to locate global object')
  })(),
  [Eo, Ei] = Xn(q),
  Fi = q.clearTimeout.bind(q),
  lt = q.console,
  ki = q.document,
  Si = q.history,
  $o = q.Error,
  Ci = q.fetch,
  Oi = q.navigator,
  Zn = Eo,
  Ai = q.location,
  Mi = q.JSON,
  Ni = q.Promise,
  Li = q.setTimeout.bind(q)
var Kn = q.window
var X = { DEBUG: 1, INFO: 2, LOG: 3, WARN: 4, ERROR: 5, OFF: 10 },
  Ot = Object.keys(X).reduce((t, e) => ((t[e] = e), t), {}),
  Vn = class {
    constructor(e = 'debug') {
      this._key = e
      let n = 'false'
      try {
        n = Zn.getItem(this._key) || 'false'
      } catch (r) {}
      this.logLevel = n
    }
    get logLevel() {
      return this._logLevel
    }
    set logLevel(e) {
      let n = X[e] ? e : 'OFF',
        r = X[n]
      this._logLevel = { name: n, value: r }
    }
    debug() {
      this.logLevel.value <= X.DEBUG && lt.debug(Ot.DEBUG, '::', ...arguments)
    }
    info() {
      this.logLevel.value <= X.INFO && lt.info(Ot.INFO, '::', ...arguments)
    }
    log() {
      this.logLevel.value <= X.LOG && lt.log(Ot.LOG, '::', ...arguments)
    }
    warn() {
      this.logLevel.value <= X.WARN && lt.warn(Ot.WARN, '::', ...arguments)
    }
    error() {
      this.logLevel.value <= X.ERROR && lt.error(Ot.ERROR, '::', ...arguments)
    }
  },
  Di = new Vn()
var qi = () => {}
var Bi = (t = 21) => {
  let e = '',
    n = crypto.getRandomValues(new Uint8Array(t))
  for (; t--; ) {
    let r = n[t] & 63
    r < 36
      ? (e += r.toString(36))
      : r < 62
      ? (e += (r - 26).toString(36).toUpperCase())
      : r < 63
      ? (e += '_')
      : (e += '-')
  }
  return e
}
var Ui = {
  todos: [
    { id: 'R8d7ysIEl94ziepCxTZwX', text: 'double click me!', done: !1 },
    { id: 'jt9oofKsxbwknDGzIa6be', text: 'I am, by default, DONE', done: !0 },
  ],
}
export {
  Ui as a,
  qi as b,
  he as c,
  br as d,
  Ci as e,
  Bi as f,
  Zo as g,
  Di as h,
  Co as i,
  Rt as j,
  Oo as k,
  _r as l,
  Mo as m,
  U as n,
  bo as o,
  jo as p,
  To as q,
  xr as r,
  Do as s,
  Ro as t,
  wr as u,
  qo as v,
  Po as w,
  Io as x,
  Ho as y,
  Wo as z,
  Bo as A,
  zo as B,
  Cr as C,
  Go as D,
  Qo as E,
  Or as F,
  rn as G,
  Xo as H,
  Nr as I,
}
/*! (c) Andrea Giammarchi - ISC */
/*! (c) Andrea Giammarchi @webreflection ISC */
//# sourceMappingURL=chunk.SZ4CSUYR.js.map
