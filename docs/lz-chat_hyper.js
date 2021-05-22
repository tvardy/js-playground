import { a as _r, b as Dr } from './chunk-UFWJWKTZ.js'
import { a as Ye, c as Oe } from './chunk-D5WR2F3S.js'
import { c as Nr, d as Ar } from './chunk-AJ7XJ6D3.js'
import { a as Me, g as $ } from './chunk-SLFZ277Q.js'
var et = {}
try {
  et.WeakMap = WeakMap
} catch (t) {
  et.WeakMap = (function (e, r) {
    'use strict'
    var i = r.defineProperty,
      l = r.hasOwnProperty,
      c = s.prototype
    return (
      (c.delete = function (n) {
        return this.has(n) && delete n[this._]
      }),
      (c.get = function (n) {
        return this.has(n) ? n[this._] : void 0
      }),
      (c.has = function (n) {
        return l.call(n, this._)
      }),
      (c.set = function (n, a) {
        return i(n, this._, { configurable: !0, value: a }), this
      }),
      s
    )
    function s(n) {
      i(this, '_', { value: '_@ungap/weakmap' + e++ }), n && n.forEach(o, this)
    }
    function o(n) {
      this.set(n[0], n[1])
    }
  })(Math.random(), Object)
}
var z = et.WeakMap
var rt = {}
try {
  rt.Map = Map
} catch (t) {
  rt.Map = function () {
    var r = 0,
      i = [],
      l = []
    return {
      delete: function (s) {
        var o = c(s)
        return o && (i.splice(r, 1), l.splice(r, 1)), o
      },
      forEach: function (o, n) {
        i.forEach(function (a, f) {
          o.call(n, l[f], a, this)
        }, this)
      },
      get: function (o) {
        return c(o) ? l[r] : void 0
      },
      has: function (o) {
        return c(o)
      },
      set: function (o, n) {
        return (l[c(o) ? r : i.push(o) - 1] = n), this
      },
    }
    function c(s) {
      return (r = i.indexOf(s)), -1 < r
    }
  }
}
var xt = rt.Map
var nt = {}
try {
  nt.WeakMap = WeakMap
} catch (t) {
  nt.WeakMap = (function (e, r) {
    'use strict'
    var i = r.defineProperty,
      l = r.hasOwnProperty,
      c = s.prototype
    return (
      (c.delete = function (n) {
        return this.has(n) && delete n[this._]
      }),
      (c.get = function (n) {
        return this.has(n) ? n[this._] : void 0
      }),
      (c.has = function (n) {
        return l.call(n, this._)
      }),
      (c.set = function (n, a) {
        return i(n, this._, { configurable: !0, value: a }), this
      }),
      s
    )
    function s(n) {
      i(this, '_', { value: '_@ungap/weakmap' + e++ }), n && n.forEach(o, this)
    }
    function o(n) {
      this.set(n[0], n[1])
    }
  })(Math.random(), Object)
}
var k = nt.WeakMap
var it = {}
try {
  it.WeakSet = WeakSet
} catch (t) {
  ;(function (e, r) {
    var i = l.prototype
    ;(i.add = function (c) {
      return this.has(c) || r(c, this._, { value: !0, configurable: !0 }), this
    }),
      (i.has = function (c) {
        return this.hasOwnProperty.call(c, this._)
      }),
      (i.delete = function (c) {
        return this.has(c) && delete c[this._]
      }),
      (it.WeakSet = l)
    function l() {
      'use strict'
      r(this, '_', { value: '_@ungap/weakmap' + e++ })
    }
  })(Math.random(), Object.defineProperty)
}
var H = it.WeakSet
var A = (t, e, r, i, l, c) => {
    let s = 'selectedIndex' in e,
      o = s
    for (; i < l; ) {
      let n = t(r[i], 1)
      if ((e.insertBefore(n, c), s && o && n.selected)) {
        o = !o
        let { selectedIndex: a } = e
        e.selectedIndex = a < 0 ? i : Oe.call(e.querySelectorAll('option'), n)
      }
      i++
    }
  },
  bt = (t, e) => t == e,
  kt = (t) => t,
  ot = (t, e, r, i, l, c, s) => {
    let o = c - l
    if (o < 1) return -1
    for (; r - e >= o; ) {
      let n = e,
        a = l
      for (; n < r && a < c && s(t[n], i[a]); ) n++, a++
      if (a === c) return e
      e = n + 1
    }
    return -1
  },
  Mt = (t, e, r, i, l, c) => {
    for (; i < l && c(r[i], t[e - 1]); ) i++, e--
    return e === 0
  },
  F = (t, e, r, i, l) => (r < i ? t(e[r], 0) : 0 < r ? t(e[r - 1], -0).nextSibling : l),
  P = (t, e, r, i) => {
    for (; r < i; ) Te(t(e[r++], -1))
  },
  j = -1,
  q = 1,
  G = 0,
  Ce = 50,
  De = (t, e, r, i, l, c, s, o) => {
    let n = 0,
      a = i < o ? i : o,
      f = Array(a++),
      p = Array(a)
    p[0] = -1
    for (let h = 1; h < a; h++) p[h] = s
    let u = l.slice(c, s)
    for (let h = e; h < r; h++) {
      let m = u.indexOf(t[h])
      if (-1 < m) {
        let d = m + c
        ;(n = _e(p, a, d)),
          -1 < n && ((p[n] = d), (f[n] = { newi: h, oldi: d, prev: f[n - 1] }))
      }
    }
    for (n = --a, --s; p[n] > s; ) --n
    a = o + i - n
    let v = Array(a),
      g = f[n]
    for (--r; g; ) {
      let { newi: h, oldi: m } = g
      for (; r > h; ) (v[--a] = q), --r
      for (; s > m; ) (v[--a] = j), --s
      ;(v[--a] = G), --r, --s, (g = g.prev)
    }
    for (; r >= e; ) (v[--a] = q), --r
    for (; s >= c; ) (v[--a] = j), --s
    return v
  },
  Ne = (t, e, r, i, l, c, s) => {
    let o = r + c,
      n = [],
      a,
      f,
      p,
      u,
      v,
      g,
      h
    t: for (a = 0; a <= o; a++) {
      if (a > Ce) return null
      for (
        h = a - 1, v = a ? n[a - 1] : [0, 0], g = n[a] = [], f = -a;
        f <= a;
        f += 2
      ) {
        for (
          f === -a || (f !== a && v[h + f - 1] < v[h + f + 1])
            ? (u = v[h + f + 1])
            : (u = v[h + f - 1] + 1),
            p = u - f;
          u < c && p < r && s(i[l + u], t[e + p]);

        )
          u++, p++
        if (u === c && p === r) break t
        g[a + f] = u
      }
    }
    let m = Array(a / 2 + o / 2),
      d = m.length - 1
    for (a = n.length - 1; a >= 0; a--) {
      for (; u > 0 && p > 0 && s(i[l + u - 1], t[e + p - 1]); ) (m[d--] = G), u--, p--
      if (!a) break
      ;(h = a - 1),
        (v = a ? n[a - 1] : [0, 0]),
        (f = u - p),
        f === -a || (f !== a && v[h + f - 1] < v[h + f + 1])
          ? (p--, (m[d--] = q))
          : (u--, (m[d--] = j))
    }
    return m
  },
  Ae = (t, e, r, i, l, c, s, o, n) => {
    let a = [],
      f = t.length,
      p = s,
      u = 0
    for (; u < f; )
      switch (t[u++]) {
        case G:
          l++, p++
          break
        case q:
          a.push(i[l]), A(e, r, i, l++, l, p < o ? e(c[p], 0) : n)
          break
        case j:
          p++
          break
      }
    for (u = 0; u < f; )
      switch (t[u++]) {
        case G:
          s++
          break
        case j:
          ;-1 < a.indexOf(c[s]) ? s++ : P(e, c, s++, s)
          break
      }
  },
  _e = (t, e, r) => {
    let i = 1,
      l = e
    for (; i < l; ) {
      let c = ((i + l) / 2) >>> 0
      r < t[c] ? (l = c) : (i = c + 1)
    }
    return i
  },
  Ot = (t, e, r, i, l, c, s, o, n, a, f, p, u) => {
    Ae(Ne(r, i, c, s, o, a, p) || De(r, i, l, c, s, o, n, a), t, e, r, i, s, o, f, u)
  },
  Te = (t) => (t.remove || Se).call(t)
function Se() {
  let { parentNode: t } = this
  t && t.removeChild(this)
}
var We = (t, e, r, i) => {
    i || (i = {})
    let l = i.compare || bt,
      c = i.node || kt,
      s = i.before == null ? null : c(i.before, 0),
      o = e.length,
      n = o,
      a = 0,
      f = r.length,
      p = 0
    for (; a < n && p < f && l(e[a], r[p]); ) a++, p++
    for (; a < n && p < f && l(e[n - 1], r[f - 1]); ) n--, f--
    let u = a === n,
      v = p === f
    if (u && v) return r
    if (u && p < f) return A(c, t, r, p, f, F(c, e, a, o, s)), r
    if (v && a < n) return P(c, e, a, n), r
    let g = n - a,
      h = f - p,
      m = -1
    if (g < h) {
      if (((m = ot(r, p, f, e, a, n, l)), -1 < m))
        return A(c, t, r, p, m, c(e[a], 0)), A(c, t, r, m + g, f, F(c, e, n, o, s)), r
    } else if (h < g && ((m = ot(e, a, n, r, p, f, l)), -1 < m))
      return P(c, e, a, m), P(c, e, m + h, n), r
    return g < 2 || h < 2
      ? (A(c, t, r, p, f, c(e[a], 0)), P(c, e, a, n), r)
      : g === h && Mt(r, f, e, a, n, l)
      ? (A(c, t, r, p, f, F(c, e, n, o, s)), r)
      : (Ot(c, t, r, p, f, h, e, a, n, g, o, l, s), r)
  },
  M = We
var Tt = {}
Tt.CustomEvent =
  typeof CustomEvent == 'function'
    ? CustomEvent
    : (function (t) {
        return (e[t] = new e('').constructor[t]), e
        function e(r, i) {
          i || (i = {})
          var l = document.createEvent('CustomEvent')
          return l.initCustomEvent(r, !!i.bubbles, !!i.cancelable, i.detail), l
        }
      })('prototype')
var B = Tt.CustomEvent
var at = {}
try {
  at.Map = Map
} catch (t) {
  at.Map = function () {
    var r = 0,
      i = [],
      l = []
    return {
      delete: function (s) {
        var o = c(s)
        return o && (i.splice(r, 1), l.splice(r, 1)), o
      },
      forEach: function (o, n) {
        i.forEach(function (a, f) {
          o.call(n, l[f], a, this)
        }, this)
      },
      get: function (o) {
        return c(o) ? l[r] : void 0
      },
      has: function (o) {
        return c(o)
      },
      set: function (o, n) {
        return (l[c(o) ? r : i.push(o) - 1] = n), this
      },
    }
    function c(s) {
      return (r = i.indexOf(s)), -1 < r
    }
  }
}
var Ct = at.Map
function C() {
  return this
}
function _t(t) {
  let e = new k(),
    r = Object.create,
    i = (o, n, a) => (o.set(n, a), a),
    l = (o, n, a, f) => {
      let p = n.get(o) || c(o, n)
      switch (typeof f) {
        case 'object':
        case 'function':
          let u = p.w || (p.w = new k())
          return u.get(f) || i(u, f, new o(a))
        default:
          let v = p.p || (p.p = r(null))
          return v[f] || (v[f] = new o(a))
      }
    },
    c = (o, n) => {
      let a = { w: null, p: null }
      return n.set(o, a), a
    },
    s = (o) => {
      let n = new Ct()
      return e.set(o, n), n
    }
  Object.defineProperties(C, {
    for: {
      configurable: !0,
      value(o, n) {
        return l(this, e.get(o) || s(o), o, n == null ? 'default' : n)
      },
    },
  }),
    Object.defineProperties(C.prototype, {
      handleEvent: {
        value(o) {
          let n = o.currentTarget
          this[('getAttribute' in n && n.getAttribute('data-call')) || 'on' + o.type](o)
        },
      },
      html: st('html', t),
      svg: st('svg', t),
      state: st('state', function () {
        return this.defaultState
      }),
      defaultState: {
        get() {
          return {}
        },
      },
      dispatch: {
        value(o, n) {
          let { _wire$: a } = this
          if (a) {
            let f = new B(o, { bubbles: !0, cancelable: !0, detail: n })
            return (
              (f.component = this),
              (a.dispatchEvent ? a : a.firstChild).dispatchEvent(f)
            )
          }
          return !1
        },
      },
      setState: {
        value(o, n) {
          let a = this.state,
            f = typeof o == 'function' ? o.call(this, a) : o
          for (let p in f) a[p] = f[p]
          return n !== !1 && this.render(), this
        },
      },
    })
}
var st = (t, e) => {
    let r = '_' + t + '$'
    return {
      get() {
        return this[r] || Dt(this, r, e.call(this, t))
      },
      set(i) {
        Dt(this, r, i)
      },
    }
  },
  Dt = (t, e, r) =>
    Object.defineProperty(t, e, {
      configurable: !0,
      value:
        typeof r == 'function'
          ? function () {
              return (t._wire$ = r.apply(this, arguments))
            }
          : r,
    })[e]
Object.defineProperties(C.prototype, {
  ELEMENT_NODE: { value: 1 },
  nodeType: { value: -1 },
})
var Nt = {},
  Z = {},
  At = [],
  Le = Z.hasOwnProperty,
  St = 0,
  _ = {
    attributes: Nt,
    define: (t, e) => {
      t.indexOf('-') < 0 ? (t in Z || (St = At.push(t)), (Z[t] = e)) : (Nt[t] = e)
    },
    invoke: (t, e) => {
      for (let r = 0; r < St; r++) {
        let i = At[r]
        if (Le.call(t, i)) return Z[i](t[i], e)
      }
    },
  }
var Pe =
    Array.isArray ||
    (function (t) {
      var e = t.call([])
      return function (i) {
        return t.call(i) === e
      }
    })({}.toString),
  ct = Pe
var Ie = (function (t) {
    'use strict'
    var e = 'fragment',
      r = 'template',
      i = 'content' in s(r),
      l = i
        ? function (n) {
            var a = s(r)
            return (a.innerHTML = n), a.content
          }
        : function (n) {
            var a = s(e),
              f = s(r),
              p = null
            if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(n)) {
              var u = RegExp.$1
              ;(f.innerHTML = '<table>' + n + '</table>'), (p = f.querySelectorAll(u))
            } else (f.innerHTML = n), (p = f.childNodes)
            return c(a, p), a
          }
    return function (a, f) {
      return (f === 'svg' ? o : l)(a)
    }
    function c(n, a) {
      for (var f = a.length; f--; ) n.appendChild(a[0])
    }
    function s(n) {
      return n === e
        ? t.createDocumentFragment()
        : t.createElementNS('http://www.w3.org/1999/xhtml', n)
    }
    function o(n) {
      var a = s(e),
        f = s('div')
      return (
        (f.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + n + '</svg>'),
        c(a, f.firstChild.childNodes),
        a
      )
    }
  })(document),
  Wt = Ie
function je(t) {
  'use strict'
  var e = t.Event,
    r = t.WeakSet,
    i = !0,
    l = null
  return function (o) {
    return i && ((i = !i), (l = new r()), c(o.ownerDocument)), l.add(o), o
  }
  function c(s) {
    var o = new r(),
      n = new r()
    try {
      new MutationObserver(u).observe(s, { subtree: !0, childList: !0 })
    } catch (h) {
      var a = 0,
        f = [],
        p = function (m) {
          f.push(m),
            clearTimeout(a),
            (a = setTimeout(function () {
              u(f.splice((a = 0), f.length))
            }, 0))
        }
      s.addEventListener(
        'DOMNodeRemoved',
        function (m) {
          p({ addedNodes: [], removedNodes: [m.target] })
        },
        !0
      ),
        s.addEventListener(
          'DOMNodeInserted',
          function (m) {
            p({ addedNodes: [m.target], removedNodes: [] })
          },
          !0
        )
    }
    function u(h) {
      for (var m, d = h.length, y = 0; y < d; y++)
        (m = h[y]),
          v(m.removedNodes, 'disconnected', n, o),
          v(m.addedNodes, 'connected', o, n)
    }
    function v(h, m, d, y) {
      for (
        var E, x = new e(m), L = h.length, T = 0;
        T < L;
        (E = h[T++]).nodeType === 1 && g(E, x, m, d, y)
      );
    }
    function g(h, m, d, y, E) {
      l.has(h) && !y.has(h) && (E.delete(h), y.add(h), h.dispatchEvent(m))
      for (var x = h.children || [], L = x.length, T = 0; T < L; g(x[T++], m, d, y, E));
    }
  }
}
var Lt = je
var lt = {}
try {
  lt.WeakMap = WeakMap
} catch (t) {
  lt.WeakMap = (function (e, r) {
    'use strict'
    var i = r.defineProperty,
      l = r.hasOwnProperty,
      c = s.prototype
    return (
      (c.delete = function (n) {
        return this.has(n) && delete n[this._]
      }),
      (c.get = function (n) {
        return this.has(n) ? n[this._] : void 0
      }),
      (c.has = function (n) {
        return l.call(n, this._)
      }),
      (c.set = function (n, a) {
        return i(n, this._, { configurable: !0, value: a }), this
      }),
      s
    )
    function s(n) {
      i(this, '_', { value: '_@ungap/weakmap' + e++ }), n && n.forEach(o, this)
    }
    function o(n) {
      this.set(n[0], n[1])
    }
  })(Math.random(), Object)
}
var Pt = lt.WeakMap
var Re = (function (t) {
    'use strict'
    var e = 'fragment',
      r = 'template',
      i = 'content' in s(r),
      l = i
        ? function (n) {
            var a = s(r)
            return (a.innerHTML = n), a.content
          }
        : function (n) {
            var a = s(e),
              f = s(r),
              p = null
            if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(n)) {
              var u = RegExp.$1
              ;(f.innerHTML = '<table>' + n + '</table>'), (p = f.querySelectorAll(u))
            } else (f.innerHTML = n), (p = f.childNodes)
            return c(a, p), a
          }
    return function (a, f) {
      return (f === 'svg' ? o : l)(a)
    }
    function c(n, a) {
      for (var f = a.length; f--; ) n.appendChild(a[0])
    }
    function s(n) {
      return n === e
        ? t.createDocumentFragment()
        : t.createElementNS('http://www.w3.org/1999/xhtml', n)
    }
    function o(n) {
      var a = s(e),
        f = s('div')
      return (
        (f.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + n + '</svg>'),
        c(a, f.firstChild.childNodes),
        a
      )
    }
  })(document),
  It = Re
var $e = (function (t, e, r, i, l) {
    var c = l in t,
      s = t.createDocumentFragment()
    s[e](t[i]('g')), s[e](t[i](''))
    var o = c ? t[l](s, !0) : s[r](!0)
    return o.childNodes.length < 2
      ? function n(a, f) {
          for (
            var p = a[r](), u = a.childNodes || [], v = u.length, g = 0;
            f && g < v;
            g++
          )
            p[e](n(u[g], f))
          return p
        }
      : c
      ? t[l]
      : function (n, a) {
          return n[r](!!a)
        }
  })(document, 'appendChild', 'cloneNode', 'createTextNode', 'importNode'),
  jt = $e
var Ue =
    ''.trim ||
    function () {
      return String(this).replace(/^\s+|\s+/g, '')
    },
  X = Ue
var b = '-' + Math.random().toFixed(6) + '%',
  K = !1
try {
  ;(function (t, e, r) {
    return (
      e in t &&
      ((t.innerHTML = '<p ' + r + '="' + b + '"></p>'),
      t[e].childNodes[0].getAttribute(r) == b)
    )
  })(document.createElement('template'), 'content', 'tabindex') ||
    ((b = '_dt: ' + b.slice(1, -1) + ';'), (K = !0))
} catch (t) {}
var I = '<!--' + b + '-->',
  Rt = 8
var $t = 1,
  Ut = 3,
  ft = /^(?:plaintext|script|style|textarea|title|xmp)$/i,
  zt = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i
function Ht(t) {
  return t.join(I).replace(He, qe).replace(ze, Fe)
}
var Y = ' \\f\\n\\r\\t',
  Ft = '[^' + Y + `\\/>"'=]+`,
  pt = '[' + Y + ']+' + Ft,
  qt = '<([A-Za-z]+[A-Za-z0-9:._-]*)((?:',
  Gt = `(?:\\s*=\\s*(?:'[^']*?'|"[^"]*?"|<[^>]*?>|` + Ft.replace('\\/', '') + '))?)',
  ze = new RegExp(qt + pt + Gt + '+)([' + Y + ']*/?>)', 'g'),
  He = new RegExp(qt + pt + Gt + '*)([' + Y + ']*/>)', 'g'),
  Ge = new RegExp('(' + pt + `\\s*=\\s*)(['"]?)` + I + '\\2', 'gi')
function Fe(t, e, r, i) {
  return '<' + e + r.replace(Ge, Be) + i
}
function Be(t, e, r) {
  return e + (r || '"') + b + (r || '"')
}
function qe(t, e, r) {
  return zt.test(e) ? t : '<' + e + r + '></' + e + '>'
}
var Ze = K
  ? function (t, e) {
      var r = e.join(' ')
      return e.slice.call(t, 0).sort(function (i, l) {
        return r.indexOf(i.name) <= r.indexOf(l.name) ? -1 : 1
      })
    }
  : function (t, e) {
      return e.slice.call(t, 0)
    }
function Bt(t, e) {
  for (var r = e.length, i = 0; i < r; ) t = t.childNodes[e[i++]]
  return t
}
function ut(t, e, r, i) {
  for (var l = t.childNodes, c = l.length, s = 0; s < c; ) {
    var o = l[s]
    switch (o.nodeType) {
      case $t:
        var n = i.concat(s)
        Xe(o, e, r, n), ut(o, e, r, n)
        break
      case Rt:
        var a = o.textContent
        if (a === b)
          r.shift(), e.push(ft.test(t.nodeName) ? Zt(t, i) : Ke(o, i.concat(s)))
        else
          switch (a.slice(0, 2)) {
            case '/*':
              if (a.slice(-2) !== '*/') break
            case '\u{1F47B}':
              t.removeChild(o), s--, c--
          }
        break
      case Ut:
        ft.test(t.nodeName) &&
          X.call(o.textContent) === I &&
          (r.shift(), e.push(Zt(t, i)))
        break
    }
    s++
  }
}
function Xe(t, e, r, i) {
  for (
    var l = t.attributes, c = [], s = [], o = Ze(l, r), n = o.length, a = 0;
    a < n;

  ) {
    var f = o[a++],
      p = f.value === b,
      u
    if (p || 1 < (u = f.value.split(I)).length) {
      var v = f.name
      if (c.indexOf(v) < 0) {
        c.push(v)
        var g = r
            .shift()
            .replace(
              p
                ? /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/
                : new RegExp(
                    '^(?:|[\\S\\s]*?\\s)(' + v + `)\\s*=\\s*('|")[\\S\\s]*`,
                    'i'
                  ),
              '$1'
            ),
          h = l[g] || l[g.toLowerCase()]
        if (p) e.push(Xt(h, i, g, null))
        else {
          for (var m = u.length - 2; m--; ) r.shift()
          e.push(Xt(h, i, g, u))
        }
      }
      s.push(f)
    }
  }
  ;(n = s.length), (a = 0)
  for (var d = 0 < n && K && !('ownerSVGElement' in t); a < n; ) {
    var y = s[a++]
    d && (y.value = ''), t.removeAttribute(y.name)
  }
  var E = t.nodeName
  if (/^script$/i.test(E)) {
    var x = document.createElement(E)
    for (n = l.length, a = 0; a < n; ) x.setAttributeNode(l[a++].cloneNode(!0))
    ;(x.textContent = t.textContent), t.parentNode.replaceChild(x, t)
  }
}
function Ke(t, e) {
  return { type: 'any', node: t, path: e }
}
function Xt(t, e, r, i) {
  return { type: 'attr', node: t, path: e, name: r, sparse: i }
}
function Zt(t, e) {
  return { type: 'text', node: t, path: e }
}
var Kt = Je,
  Yt = Ye(new Pt())
function Qe(t, e) {
  var r = (t.convert || Ht)(e),
    i = t.transform
  i && (r = i(r))
  var l = It(r, t.type)
  Jt(l)
  var c = []
  return (
    ut(l, c, e.slice(0), []),
    {
      content: l,
      updates: function (s) {
        for (var o = [], n = c.length, a = 0, f = 0; a < n; ) {
          var p = c[a++],
            u = Bt(s, p.path)
          switch (p.type) {
            case 'any':
              o.push({ fn: t.any(u, []), sparse: !1 })
              break
            case 'attr':
              var v = p.sparse,
                g = t.attribute(u, p.name, p.node)
              v === null
                ? o.push({ fn: g, sparse: !1 })
                : ((f += v.length - 2), o.push({ fn: g, sparse: !0, values: v }))
              break
            case 'text':
              o.push({ fn: t.text(u), sparse: !1 }), (u.textContent = '')
              break
          }
        }
        return (
          (n += f),
          function () {
            var h = arguments.length
            if (n !== h - 1)
              throw new Error(
                h -
                  1 +
                  ' values instead of ' +
                  n +
                  `
` +
                  e.join('${value}')
              )
            for (var m = 1, d = 1; m < h; ) {
              var y = o[m - d]
              if (y.sparse) {
                var E = y.values,
                  x = E[0],
                  L = 1,
                  T = E.length
                for (d += T - 2; L < T; ) x += arguments[m++] + E[L++]
                y.fn(x)
              } else y.fn(arguments[m++])
            }
            return s
          }
        )
      },
    }
  )
}
function Ve(t, e) {
  var r = Yt.get(e) || Yt.set(e, Qe(t, e))
  return r.updates(jt.call(document, r.content, !0))
}
var tr = []
function Je(t) {
  var e = tr,
    r = Jt
  return function (i) {
    return e !== i && (r = Ve(t, (e = i))), r.apply(null, arguments)
  }
}
function Jt(t) {
  for (var e = t.childNodes, r = e.length; r--; ) {
    var i = e[r]
    i.nodeType !== 1 && X.call(i.textContent).length === 0 && t.removeChild(i)
  }
}
var er = (function () {
    'use strict'
    var t = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      e = /([^A-Z])([A-Z]+)/g
    return function (o, n) {
      return 'ownerSVGElement' in o ? i(o, n) : c(o.style, !1)
    }
    function r(s, o, n) {
      return o + '-' + n.toLowerCase()
    }
    function i(s, o) {
      var n
      return (
        o
          ? (n = o.cloneNode(!0))
          : (s.setAttribute('style', '--hyper:style;'),
            (n = s.getAttributeNode('style'))),
        (n.value = ''),
        s.setAttributeNode(n),
        c(n, !0)
      )
    }
    function l(s) {
      var o,
        n = []
      for (o in s) n.push(o.replace(e, r), ':', s[o], ';')
      return n.join('')
    }
    function c(s, o) {
      var n, a
      return function (f) {
        var p, u, v, g
        switch (typeof f) {
          case 'object':
            if (f) {
              if (n === 'object') {
                if (!o && a !== f) for (u in a) u in f || (s[u] = '')
              } else o ? (s.value = '') : (s.cssText = '')
              p = o ? {} : s
              for (u in f)
                (g = f[u]),
                  (v = typeof g == 'number' && !t.test(u) ? g + 'px' : g),
                  !o && /^--/.test(u) ? p.setProperty(u, v) : (p[u] = v)
              ;(n = 'object'), o ? (s.value = l((a = p))) : (a = f)
              break
            }
          default:
            a != f &&
              ((n = 'string'), (a = f), o ? (s.value = f || '') : (s.cssText = f || ''))
            break
        }
      }
    }
  })(),
  Qt = er
var rr = (function (t, e) {
    return (
      (e = r.prototype),
      (e.ELEMENT_NODE = 1),
      (e.nodeType = 111),
      (e.remove = function (i) {
        var l = this.childNodes,
          c = this.firstChild,
          s = this.lastChild
        if (((this._ = null), i && l.length === 2)) s.parentNode.removeChild(s)
        else {
          var o = this.ownerDocument.createRange()
          o.setStartBefore(i ? l[1] : c), o.setEndAfter(s), o.deleteContents()
        }
        return c
      }),
      (e.valueOf = function (i) {
        var l = this._,
          c = l == null
        if ((c && (l = this._ = this.ownerDocument.createDocumentFragment()), c || i))
          for (var s = this.childNodes, o = 0, n = s.length; o < n; o++)
            l.appendChild(s[o])
        return l
      }),
      r
    )
    function r(i) {
      var l = (this.childNodes = t.call(i, 0))
      ;(this.firstChild = l[0]),
        (this.lastChild = l[l.length - 1]),
        (this.ownerDocument = l[0].ownerDocument),
        (this._ = null)
    }
  })([].slice),
  J = rr
var Vt = 11,
  R = 'ownerSVGElement',
  ht = 'connected',
  te = 'dis' + ht
var nr = C.prototype.nodeType,
  ir = J.prototype.nodeType,
  mt = Lt({ Event: B, WeakSet: H })
var or = (t) => ({ html: t }),
  ee = (t, e) => {
    switch (t.nodeType) {
      case ir:
        return 1 / e < 0
          ? e
            ? t.remove(!0)
            : t.lastChild
          : e
          ? t.valueOf(!0)
          : t.firstChild
      case nr:
        return ee(t.render(), e)
      default:
        return t
    }
  },
  ar = (t) => 'ELEMENT_NODE' in t,
  sr = (t, e, r) => (i) => {
    r !== !!i && ((r = !!i) ? t.setAttribute(e, '') : t.removeAttribute(e))
  },
  cr = (t, e, r) =>
    r
      ? (i) => {
          try {
            t[e] = i
          } catch (l) {
            t.setAttribute(e, i)
          }
        }
      : (i) => {
          t[e] = i
        },
  re = (t, e) => {
    e(t.placeholder),
      'text' in t
        ? Promise.resolve(t.text).then(String).then(e)
        : 'any' in t
        ? Promise.resolve(t.any).then(e)
        : 'html' in t
        ? Promise.resolve(t.html).then(or).then(e)
        : Promise.resolve(_.invoke(t, e)).then(e)
  },
  vt = (t) => t != null && 'then' in t,
  lr = /^(?:form|list)$/i,
  Q = [].slice,
  fr = (t, e) => t.ownerDocument.createTextNode(e)
function S(t) {
  return (this.type = t), Kt(this)
}
S.prototype = {
  attribute(t, e, r) {
    let i = R in t,
      l
    if (e === 'style') return Qt(t, r, i)
    if (e.slice(0, 1) === '.') return cr(t, e.slice(1), i)
    if (e.slice(0, 1) === '?') return sr(t, e.slice(1))
    if (/^on/.test(e)) {
      let c = e.slice(2)
      return (
        c === ht || c === te ? mt(t) : e.toLowerCase() in t && (c = c.toLowerCase()),
        (s) => {
          l !== s &&
            (l && t.removeEventListener(c, l, !1),
            (l = s),
            s && t.addEventListener(c, s, !1))
        }
      )
    } else {
      if (e === 'data' || (!i && e in t && !lr.test(e)))
        return (c) => {
          l !== c &&
            ((l = c),
            t[e] !== c && c == null ? ((t[e] = ''), t.removeAttribute(e)) : (t[e] = c))
        }
      if (e in _.attributes)
        return (c) => {
          let s = _.attributes[e](t, c)
          l !== s && ((l = s), s == null ? t.removeAttribute(e) : t.setAttribute(e, s))
        }
      {
        let c = !1,
          s = r.cloneNode(!0)
        return (o) => {
          l !== o &&
            ((l = o),
            s.value !== o &&
              (o == null
                ? (c && ((c = !1), t.removeAttributeNode(s)), (s.value = o))
                : ((s.value = o), c || ((c = !0), t.setAttributeNode(s)))))
        }
      }
    }
  },
  any(t, e) {
    let r = { node: ee, before: t },
      i = R in t ? 'svg' : 'html',
      l = !1,
      c,
      s = (o) => {
        switch (typeof o) {
          case 'string':
          case 'number':
          case 'boolean':
            l
              ? c !== o && ((c = o), (e[0].textContent = o))
              : ((l = !0), (c = o), (e = M(t.parentNode, e, [fr(t, o)], r)))
            break
          case 'function':
            s(o(t))
            break
          case 'object':
          case 'undefined':
            if (o == null) {
              ;(l = !1), (e = M(t.parentNode, e, [], r))
              break
            }
          default:
            if (((l = !1), (c = o), ct(o)))
              if (o.length === 0) e.length && (e = M(t.parentNode, e, [], r))
              else
                switch (typeof o[0]) {
                  case 'string':
                  case 'number':
                  case 'boolean':
                    s({ html: o })
                    break
                  case 'object':
                    if ((ct(o[0]) && (o = o.concat.apply([], o)), vt(o[0]))) {
                      Promise.all(o).then(s)
                      break
                    }
                  default:
                    e = M(t.parentNode, e, o, r)
                    break
                }
            else
              ar(o)
                ? (e = M(
                    t.parentNode,
                    e,
                    o.nodeType === Vt ? Q.call(o.childNodes) : [o],
                    r
                  ))
                : vt(o)
                ? o.then(s)
                : 'placeholder' in o
                ? re(o, s)
                : 'text' in o
                ? s(String(o.text))
                : 'any' in o
                ? s(o.any)
                : 'html' in o
                ? (e = M(
                    t.parentNode,
                    e,
                    Q.call(Wt([].concat(o.html).join(''), i).childNodes),
                    r
                  ))
                : 'length' in o
                ? s(Q.call(o))
                : s(_.invoke(o, s))
            break
        }
      }
    return s
  },
  text(t) {
    let e,
      r = (i) => {
        if (e !== i) {
          e = i
          let l = typeof i
          l === 'object' && i
            ? vt(i)
              ? i.then(r)
              : 'placeholder' in i
              ? re(i, r)
              : 'text' in i
              ? r(String(i.text))
              : 'any' in i
              ? r(i.any)
              : 'html' in i
              ? r([].concat(i.html).join(''))
              : 'length' in i
              ? r(Q.call(i).join(''))
              : r(_.invoke(i, r))
            : l === 'function'
            ? r(i(t))
            : (t.textContent = i == null ? '' : i)
        }
      }
    return r
  },
}
var gt = {}
try {
  gt.WeakMap = WeakMap
} catch (t) {
  gt.WeakMap = (function (e, r) {
    'use strict'
    var i = r.defineProperty,
      l = r.hasOwnProperty,
      c = s.prototype
    return (
      (c.delete = function (n) {
        return this.has(n) && delete n[this._]
      }),
      (c.get = function (n) {
        return this.has(n) ? n[this._] : void 0
      }),
      (c.has = function (n) {
        return l.call(n, this._)
      }),
      (c.set = function (n, a) {
        return i(n, this._, { configurable: !0, value: a }), this
      }),
      s
    )
    function s(n) {
      i(this, '_', { value: '_@ungap/weakmap' + e++ }), n && n.forEach(o, this)
    }
    function o(n) {
      this.set(n[0], n[1])
    }
  })(Math.random(), Object)
}
var ne = gt.WeakMap
var ie = typeof document != 'object',
  dt = function (t) {
    var e = 'raw',
      r = function (a) {
        return (
          /(Firefox|Safari)\/(\d+)/.test(a) && !/(Chrom[eium]+|Android)\/(\d+)/.test(a)
        )
      },
      i = r((document.defaultView.navigator || {}).userAgent),
      l = !(e in t) || t.propertyIsEnumerable(e) || !Object.isFrozen(t[e])
    if (i || l) {
      var c = {},
        s = function (a) {
          for (var f = '.', p = 0; p < a.length; p++) f += a[p].length + '.' + a[p]
          return c[f] || (c[f] = a)
        }
      if (l) dt = s
      else {
        var o = new ne(),
          n = function (a, f) {
            return o.set(a, f), f
          }
        dt = function (a) {
          return o.get(a) || n(a, s(a))
        }
      }
    } else ie = !0
    return oe(t)
  },
  ae = oe
function oe(t) {
  return ie ? t : dt(t)
}
function V(t) {
  for (var e = arguments.length, r = [ae(t)], i = 1; i < e; ) r.push(arguments[i++])
  return r
}
var se = new k(),
  pr = (t, e) => (t == null ? W(e || 'html') : yt(t, e || 'html')),
  W = (t) => {
    let e, r, i
    return function () {
      let l = V.apply(null, arguments)
      return (
        i !== l[0]
          ? ((i = l[0]), (r = new S(t)), (e = ur(r.apply(r, l))))
          : r.apply(r, l),
        e
      )
    }
  },
  yt = (t, e) => {
    let r = e.indexOf(':'),
      i = se.get(t),
      l = e
    return (
      -1 < r && ((l = e.slice(r + 1)), (e = e.slice(0, r) || 'html')),
      i || se.set(t, (i = {})),
      i[l] || (i[l] = W(e))
    )
  },
  ur = (t) => {
    let e = t.childNodes,
      { length: r } = e
    return r === 1 ? e[0] : r ? new J(e) : t
  }
var tt = pr
var ce = new k()
function mr() {
  let t = ce.get(this),
    e = V.apply(null, arguments)
  return t && t.template === e[0] ? t.tagger.apply(null, e) : hr.apply(this, e), this
}
function hr(t) {
  let e = R in this ? 'svg' : 'html',
    r = new S(e)
  ce.set(this, { tagger: r, template: t }),
    (this.textContent = ''),
    this.appendChild(r.apply(null, arguments))
}
var le = mr
var vr = (t) => le.bind(t),
  wt = _.define,
  gr = S.prototype
w.Component = C
w.bind = vr
w.define = wt
w.diff = M
w.hyper = w
w.observe = mt
w.tagger = gr
w.wire = tt
w._ = { WeakMap: k, WeakSet: H }
_t(W)
function w(t) {
  return arguments.length < 2
    ? t == null
      ? W('html')
      : typeof t == 'string'
      ? w.wire(null, t)
      : 'raw' in t
      ? W('html')(t)
      : 'nodeType' in t
      ? w.bind(t)
      : yt(t, 'html')
    : ('raw' in t ? W('html') : w.wire).apply(null, arguments)
}
var fe = Object.defineProperty,
  dr = Object.getOwnPropertyDescriptor,
  yr = Object.keys,
  oi = {}.hasOwnProperty,
  pe = [].slice,
  D = { id: 0, model: null }
function O() {
  return tt(D.model, 'html:' + D.id).apply(null, arguments)
}
function he(t, e) {
  yr(t).forEach(function (r) {
    var i,
      l = dr(t, r)
    l.configurable &&
      ('value' in l
        ? ((i = ue(l.value, t)),
          fe(t, r, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return i
            },
            set: function (c) {
              ;(i = ue(c, t)), e(t)
            },
          }))
        : 'set' in l &&
          ((i = l.set),
          (l.set = function (c) {
            i.call(t, c), e(t)
          }),
          fe(t, r, l)))
  })
}
function me(t, e, r, i) {
  var l = D.id,
    c = D.model
  ;(D.id = r), (D.model = t)
  try {
    return e.apply(null, i)
  } finally {
    ;(D.id = l), (D.model = c)
  }
}
function ve(t, e) {
  return this[e] === t[e]
}
function ue(t, e) {
  return typeof t == 'function' ? t.bind(e) : t
}
var si = ''.replace
var ge = new z(),
  de = new z(),
  Et = new z(),
  wr = 0,
  Er = !0
function N(t) {
  var e = ++wr
  return ge.set(r, e), r
  function r(i) {
    var l = i || {},
      c = Et.get(l) || br(l)
    return ye.call(l, c.get(r) || xr(c, r, t, e, pe.call(arguments, 0)))
  }
}
function we(t, e) {
  var r = ge.has(e) ? e(de.get(t) || kr(t)) : e(),
    i = r.nodeType === 1
  return (
    (i && t.firstChild === r) ||
      (!i && r.childNodes.every(ve, t.childNodes)) ||
      ((t.textContent = ''), t.appendChild(r.valueOf(!0))),
    t
  )
}
function xr(t, e, r, i, l) {
  var c = { Component: r, id: i, args: l }
  return t.set(e, c), c
}
function br(t) {
  var e = new xt()
  return Et.set(t, e), he(t, Mr), e
}
function kr(t) {
  var e = {}
  return de.set(t, e), e
}
function Mr(t) {
  Er && Et.get(t).forEach(ye, t)
}
function ye(t) {
  return me(this, t.Component, t.id, t.args)
}
var Or = N(
    ({ login: t }) => O`
    <form class="box wide login" onSubmit=${t}>
      <input name="user" placeholder="Your nickname" />
    </form>
  `
  ),
  Ee = Or
var Tr = N(
    ({ userId: t, message: e }) => O`
    <div
      class="message"
      data-self=${e.user.id === t}
      data-user=${e.user.name}
    >
      ${e.msg}
    </div>
  `
  ),
  xe = Tr
var Cr = N(
    ({ user: t, messages: e, send: r }) => O`
    <section class="box wide chat-box">
      ${e.map((i) => xe({ userId: t.id, message: i }))}
    </section>
    <form class="box wide message" onSubmit=${r}>
      <input name="msg" placeholder="message box..." />
    </form>
  `
  ),
  be = Cr
$.debug('LZ Chat HyperSimple started!')
var ke = document.getElementById('hypersimple'),
  Sr = {
    login(t) {
      t.preventDefault()
      let e = t.target.elements.user.value
      try {
        Dr().then((r) => {
          ;(this.sock = r),
            this.sock.on('message', (i) => {
              this.message(Ar(i))
            }),
            this.connected({ id: r.id, name: e })
        })
      } catch (r) {
        $.error('WS error:', r), (U.status = 'error')
      }
    },
    connected(t) {
      $.debug('HyperSimple connected:', t), (U.user = t)
    },
    send(t) {
      t.preventDefault()
      let e = t.target.elements.msg.value,
        r = { user: this.user, msg: e }
      ;(t.target.elements.msg.value = ''),
        $.debug('HyperSimple send:', e),
        this.sock.emit('message', Nr(r)),
        this.message(r)
    },
    message(t) {
      $.debug('HyperSimple message:', t.user, t.msg),
        (U.messages = U.messages.concat(t)),
        this.align()
    },
    align() {
      let t = ke.querySelector('.chat-box')
      setTimeout(() => {
        t.scrollTop < t.scrollHeight && (t.scrollTop = t.scrollHeight)
      }, 0)
    },
  },
  U = Me(Me({}, _r), Sr),
  Wr = N((t) => O`${t.user.id ? be(t) : Ee(t)}`)
we(ke, () => Wr(U))
/*! (c) 2018 Andrea Giammarchi (ISC) */
/*! (c) Andrea Giammarchi (ISC) */
/*! (c) Andrea Giammarchi */
/*! (c) Andrea Giammarchi - ISC */
//# sourceMappingURL=lz-chat_hyper.js.map
