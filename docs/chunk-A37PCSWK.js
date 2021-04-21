function p() {}
function m(t) {
  return t()
}
function x() {
  return Object.create(null)
}
function u(t) {
  t.forEach(m)
}
function E(t) {
  return typeof t == 'function'
}
function Y(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
function S(t) {
  return Object.keys(t).length === 0
}
var J = typeof window != 'undefined'
var V = new Set()
function G(t, e) {
  t.appendChild(e)
}
function K(t, e, n) {
  t.insertBefore(e, n || null)
}
function R(t) {
  t.parentNode.removeChild(t)
}
function Q(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}
function X(t) {
  return document.createElement(t)
}
function O(t) {
  return document.createTextNode(t)
}
function Z() {
  return O(' ')
}
function tt() {
  return O('')
}
function et(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o)
}
function nt(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e)
  }
}
function it(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function q(t) {
  return Array.from(t.childNodes)
}
function ot(t, e) {
  ;(e = '' + e), t.wholeText !== e && (t.data = e)
}
function st(t, e) {
  t.value = e == null ? '' : e
}
function rt(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e)
}
var ct = new Set()
var C
function f(t) {
  C = t
}
var l = []
var D = [],
  d = [],
  A = [],
  N = Promise.resolve(),
  y = !1
function T() {
  y || ((y = !0), N.then(M))
}
function g(t) {
  d.push(t)
}
var F = !1,
  b = new Set()
function M() {
  if (!F) {
    F = !0
    do {
      for (let t = 0; t < l.length; t += 1) {
        let e = l[t]
        f(e), L(e.$$)
      }
      for (f(null), l.length = 0; D.length; ) D.pop()()
      for (let t = 0; t < d.length; t += 1) {
        let e = d[t]
        b.has(e) || (b.add(e), e())
      }
      d.length = 0
    } while (l.length)
    for (; A.length; ) A.pop()()
    ;(y = !1), (F = !1), b.clear()
  }
}
function L(t) {
  if (t.fragment !== null) {
    t.update(), u(t.before_update)
    let e = t.dirty
    ;(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(g)
  }
}
var _ = new Set(),
  P
function z(t, e) {
  t && t.i && (_.delete(t), t.i(e))
}
function ut(t, e, n, o) {
  if (t && t.o) {
    if (_.has(t)) return
    _.add(t),
      P.c.push(() => {
        _.delete(t), o && (n && t.d(1), o())
      }),
      t.o(e)
  }
}
var lt =
  typeof window != 'undefined'
    ? window
    : typeof globalThis != 'undefined'
    ? globalThis
    : global
var at = new Set([
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
function ft(t) {
  t && t.c()
}
function B(t, e, n, o) {
  let { fragment: s, on_mount: h, on_destroy: a, after_update: c } = t.$$
  s && s.m(e, n),
    o ||
      g(() => {
        let i = h.map(m).filter(E)
        a ? a.push(...i) : u(i), (t.$$.on_mount = [])
      }),
    c.forEach(g)
}
function j(t, e) {
  let n = t.$$
  n.fragment !== null &&
    (u(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []))
}
function I(t, e) {
  t.$$.dirty[0] === -1 && (l.push(t), T(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function dt(t, e, n, o, s, h, a = [-1]) {
  let c = C
  f(t)
  let i = (t.$$ = {
      fragment: null,
      ctx: null,
      props: h,
      update: p,
      not_equal: s,
      bound: x(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(c ? c.$$.context : []),
      callbacks: x(),
      dirty: a,
      skip_bound: !1,
    }),
    $ = !1
  if (
    ((i.ctx = n
      ? n(t, e.props || {}, (r, w, ...v) => {
          let k = v.length ? v[0] : w
          return (
            i.ctx &&
              s(i.ctx[r], (i.ctx[r] = k)) &&
              (!i.skip_bound && i.bound[r] && i.bound[r](k), $ && I(t, r)),
            w
          )
        })
      : []),
    i.update(),
    ($ = !0),
    u(i.before_update),
    (i.fragment = o ? o(i.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      let r = q(e.target)
      i.fragment && i.fragment.l(r), r.forEach(R)
    } else i.fragment && i.fragment.c()
    e.intro && z(t.$$.fragment), B(t, e.target, e.anchor, e.customElement), M()
  }
  f(c)
}
var H
typeof HTMLElement == 'function' &&
  (H = class extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
      let { on_mount: t } = this.$$
      this.$$.on_disconnect = t.map(m).filter(E)
      for (let e in this.$$.slotted) this.appendChild(this.$$.slotted[e])
    }
    attributeChangedCallback(t, e, n) {
      this[t] = n
    }
    disconnectedCallback() {
      u(this.$$.on_disconnect)
    }
    $destroy() {
      j(this, 1), (this.$destroy = p)
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
        !S(t) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1))
    }
  })
var W = class {
  $destroy() {
    j(this, 1), (this.$destroy = p)
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
      !S(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
  }
}
export {
  p as a,
  u as b,
  E as c,
  Y as d,
  G as e,
  K as f,
  R as g,
  Q as h,
  X as i,
  O as j,
  Z as k,
  tt as l,
  et as m,
  nt as n,
  it as o,
  ot as p,
  st as q,
  rt as r,
  g as s,
  z as t,
  ut as u,
  ft as v,
  B as w,
  j as x,
  dt as y,
  W as z,
}
//# sourceMappingURL=chunk-A37PCSWK.js.map
