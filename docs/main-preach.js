import { a as ze } from './chunk.JYENW4NQ.js'
import {
  A as ne,
  B as le,
  C as U,
  D,
  E as A,
  F as j,
  G as F,
  H as q,
  I as b,
  a as qe,
  b as Y,
  c,
  e as je,
  f as we,
  g as Ue,
  h as M,
  i as g,
  j as $e,
  k as We,
  l as P,
  m as E,
  n as De,
  o as Me,
  p as v,
  q as d,
  r as m,
  s as Te,
  t as w,
  u as x,
  v as _e,
  w as C,
  x as ye,
  y as _,
  z as S,
} from './chunk.F4HWMIJO.js'
var R = g((He, I) => {
  function l() {
    ;(this._events = this._events || {}),
      (this._maxListeners = this._maxListeners || void 0)
  }
  I.exports = l
  l.EventEmitter = l
  l.prototype._events = void 0
  l.prototype._maxListeners = void 0
  l.defaultMaxListeners = 10
  l.prototype.setMaxListeners = function (e) {
    if (!be(e) || e < 0 || isNaN(e)) throw TypeError('n must be a positive number')
    return (this._maxListeners = e), this
  }
  l.prototype.emit = function (e) {
    var t, n, r, s, i, o
    if (
      (this._events || (this._events = {}),
      e === 'error' &&
        (!this._events.error || (N(this._events.error) && !this._events.error.length)))
    )
      throw (
        ((t = arguments[1]),
        t instanceof Error ? t : TypeError('Uncaught, unspecified "error" event.'))
      )
    if (((n = this._events[e]), H(n))) return !1
    if (h(n))
      switch (arguments.length) {
        case 1:
          n.call(this)
          break
        case 2:
          n.call(this, arguments[1])
          break
        case 3:
          n.call(this, arguments[1], arguments[2])
          break
        default:
          for (r = arguments.length, s = new Array(r - 1), i = 1; i < r; i++)
            s[i - 1] = arguments[i]
          n.apply(this, s)
      }
    else if (N(n)) {
      for (r = arguments.length, s = new Array(r - 1), i = 1; i < r; i++)
        s[i - 1] = arguments[i]
      for (o = n.slice(), r = o.length, i = 0; i < r; i++) o[i].apply(this, s)
    }
    return !0
  }
  l.prototype.addListener = function (e, t) {
    var n
    if (!h(t)) throw TypeError('listener must be a function')
    if (
      (this._events || (this._events = {}),
      this._events.newListener &&
        this.emit('newListener', e, h(t.listener) ? t.listener : t),
      this._events[e]
        ? N(this._events[e])
          ? this._events[e].push(t)
          : (this._events[e] = [this._events[e], t])
        : (this._events[e] = t),
      N(this._events[e]) && !this._events[e].warned)
    ) {
      var n
      H(this._maxListeners) ? (n = l.defaultMaxListeners) : (n = this._maxListeners),
        n &&
          n > 0 &&
          this._events[e].length > n &&
          ((this._events[e].warned = !0),
          console.error(
            '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
            this._events[e].length
          ),
          typeof console.trace == 'function' && console.trace())
    }
    return this
  }
  l.prototype.on = l.prototype.addListener
  l.prototype.once = function (e, t) {
    if (!h(t)) throw TypeError('listener must be a function')
    var n = !1
    function r() {
      this.removeListener(e, r), n || ((n = !0), t.apply(this, arguments))
    }
    return (r.listener = t), this.on(e, r), this
  }
  l.prototype.removeListener = function (e, t) {
    var n, r, s, i
    if (!h(t)) throw TypeError('listener must be a function')
    if (!this._events || !this._events[e]) return this
    if (
      ((n = this._events[e]),
      (s = n.length),
      (r = -1),
      n === t || (h(n.listener) && n.listener === t))
    )
      delete this._events[e],
        this._events.removeListener && this.emit('removeListener', e, t)
    else if (N(n)) {
      for (i = s; i-- > 0; )
        if (n[i] === t || (n[i].listener && n[i].listener === t)) {
          r = i
          break
        }
      if (r < 0) return this
      n.length === 1 ? ((n.length = 0), delete this._events[e]) : n.splice(r, 1),
        this._events.removeListener && this.emit('removeListener', e, t)
    }
    return this
  }
  l.prototype.removeAllListeners = function (e) {
    var t, n
    if (!this._events) return this
    if (!this._events.removeListener)
      return (
        arguments.length === 0
          ? (this._events = {})
          : this._events[e] && delete this._events[e],
        this
      )
    if (arguments.length === 0) {
      for (t in this._events) t !== 'removeListener' && this.removeAllListeners(t)
      return this.removeAllListeners('removeListener'), (this._events = {}), this
    }
    if (((n = this._events[e]), h(n))) this.removeListener(e, n)
    else for (; n.length; ) this.removeListener(e, n[n.length - 1])
    return delete this._events[e], this
  }
  l.prototype.listeners = function (e) {
    var t
    return (
      !this._events || !this._events[e]
        ? (t = [])
        : h(this._events[e])
        ? (t = [this._events[e]])
        : (t = this._events[e].slice()),
      t
    )
  }
  l.listenerCount = function (e, t) {
    var n
    return (
      !e._events || !e._events[t]
        ? (n = 0)
        : h(e._events[t])
        ? (n = 1)
        : (n = e._events[t].length),
      n
    )
  }
  function h(e) {
    return typeof e == 'function'
  }
  function be(e) {
    return typeof e == 'number'
  }
  function N(e) {
    return typeof e == 'object' && e !== null
  }
  function H(e) {
    return e === void 0
  }
})
var V = g((T) => {
  T.getFnIdx = function (e) {
    return e.toString().replace(/[\s\r\n\f\t\v]/g, '')
  }
  T.getChannels = function (e, t) {
    var n = []
    if (e instanceof RegExp)
      for (var r in t) t.hasOwnProperty(r) && e.test(r) && n.push(r)
    else n = e in t ? [e] : []
    return n
  }
})
var G = g((Ve, B) => {
  B.exports = {
    ECHNLNOTFOUND:
      'Preach: No channels match the given channel name or regular expression',
    ELSTNRNOTFOUND: "Preach: Could not unsubscribe. Maybe the subsciber doesn't exist",
  }
})
var K = g((Be, z) => {
  var J = R().EventEmitter,
    p = V(),
    $ = G()
  function f(e) {
    if (!(this instanceof f)) return new f()
    ;(this._q = {}), (this._e = new J()), this._e.setMaxListeners(e || 0)
  }
  f.prototype.pub = function (e) {
    var t = p.getChannels(e, this._q),
      n = [].splice.call(arguments, 1)
    t.length || console.warn($.ECHNLNOTFOUND)
    for (var r in t) this._e.emit.apply(this._e, [t[r]].concat(n))
    return !0
  }
  f.prototype.sub = function (e, t) {
    var n = e instanceof RegExp ? p.getChannels(e, this._q) : [e],
      r = p.getFnIdx(t),
      s
    n.length || console.warn($.ECHNLNOTFOUND)
    for (var i in n)
      (s = n[i]),
        (this._q[s] = this._q[s] || {}),
        (this._q[s][r] = t),
        this._e.on(s, this._q[s][r])
    return !0
  }
  f.prototype.unsub = function (e, t) {
    var n = p.getChannels(e, this._q),
      r = p.getFnIdx(t),
      s
    n.length || console.warn($.ECHNLNOTFOUND)
    for (var i in n)
      try {
        ;(s = n[i]), this._e.removeListener(s, this._q[s][r]), delete this._q[s][r]
      } catch (o) {
        console.warn($.ELSTNRNOTFOUND, o)
      }
    return !0
  }
  f.prototype.purge = function () {
    var e = p.getChannels(/.*/, this._q),
      t
    for (var n in e) (t = e[n]), this._e.removeAllListeners(t), delete this._q[t]
    return !0
  }
  f.prototype.channels = function () {
    return p.getChannels(/.*/, this._q)
  }
  f.prototype.subscribers = function (e) {
    var t = p.getChannels(e || /.*/, this._q),
      n,
      r
    if (((r = {}), t.length === 1 && !(t[0] in this._q))) return r
    for (var s in t) {
      ;(n = t[s]), (r[n] = [])
      for (var i in this._q[n]) this._q[n].hasOwnProperty(i) && r[n].push(this._q[n][i])
    }
    return r
  }
  f.prototype.subscriberCount = function (e) {
    var t = p.getChannels(e || /.*/, this._q),
      n,
      r
    if (((r = {}), t.length === 1 && !(t[0] in this._q))) return r
    for (var s in t) (n = t[s]), (r[n] = J.listenerCount(this._e, n))
    return r
  }
  f.prototype.setMaxSubscribers = function (e) {
    this._e.setMaxListeners(e)
  }
  z.exports = f
})
var W = g((Ge, Q) => {
  Q.exports = K()
})
var te = g((Xe, ee) => {
  ee.exports = {}
})
var ae = g((tt, oe) => {
  oe.exports = {}
})
var me = g((it, pe) => {
  pe.exports = {}
})
var O = {}
We(O, { connect: () => L })
var X = ze(W())
var k = new X.default(),
  Ee = { ...qe },
  Z = {
    toggle(e) {
      y.todos = y.todos.map((t) => (t.id === e && (t.done = !t.done), t))
    },
    add(e) {
      y.todos = [{ text: e, done: !1, id: we() }, ...y.todos]
    },
  },
  xe = {
    set(e, t, n) {
      return (e[t] = n), k.pub('change', e), !0
    },
  },
  y = new Proxy(Ee, xe),
  Ne = Object.keys(Z).reduce((e, t) => ((e[t] = (...n) => Z[t](...n)), e), {})
function L(e = Y, t = Y) {
  t(Ne), k.sub('change', (n) => e(n)), k.pub('change', y)
}
function Ce(e) {
  let t, n, r, s
  return {
    c() {
      ;(t = w('form')),
        (n = w('input')),
        _(n, 'placeholder', 'Add new task...'),
        _(n, 'class', 'svelte-12biwcu')
    },
    m(i, o) {
      d(i, t, o),
        v(t, n),
        ne(n, e[0]),
        r ||
          ((s = [
            C(n, 'input', e[2]),
            C(
              t,
              'submit',
              ye(function () {
                P(e[1]) && e[1].apply(this, arguments)
              })
            ),
          ]),
          (r = !0))
    },
    p(i, [o]) {
      ;(e = i), o & 1 && n.value !== e[0] && ne(n, e[0])
    },
    i: c,
    o: c,
    d(i) {
      i && m(t), (r = !1), $e(s)
    },
  }
}
var re = ''
function Se(e, t, n) {
  let r = void 0,
    s = re,
    i
  function o({ add: u }) {
    n(
      1,
      (i = () => {
        u(s), n(0, (s = re))
      })
    )
  }
  L(r, o)
  function a() {
    ;(s = this.value), n(0, s)
  }
  return [s, i, a]
}
var se = class extends b {
    constructor(t) {
      super()
      q(this, t, Se, Ce, E, {})
    }
  },
  ie = se
te()
function ue(e, t, n) {
  let r = e.slice()
  return (r[4] = t[n].id), (r[5] = t[n].text), (r[6] = t[n].done), r
}
function fe(e) {
  let t,
    n = e[5] + '',
    r,
    s,
    i,
    o
  return {
    c() {
      ;(t = w('li')),
        (r = x(n)),
        _(t, 'data-id', (s = e[4])),
        _(t, 'class', 'svelte-corox1'),
        le(t, 'done', e[6])
    },
    m(a, u) {
      d(a, t, u),
        v(t, r),
        i ||
          ((o = C(t, 'dblclick', function () {
            P(e[1]) && e[1].apply(this, arguments)
          })),
          (i = !0))
    },
    p(a, u) {
      ;(e = a),
        u & 1 && n !== (n = e[5] + '') && S(r, n),
        u & 1 && s !== (s = e[4]) && _(t, 'data-id', s),
        u & 1 && le(t, 'done', e[6])
    },
    d(a) {
      a && m(t), (i = !1), o()
    },
  }
}
function Oe(e) {
  let t,
    n = e[0],
    r = []
  for (let s = 0; s < n.length; s += 1) r[s] = fe(ue(e, n, s))
  return {
    c() {
      t = w('ul')
      for (let s = 0; s < r.length; s += 1) r[s].c()
    },
    m(s, i) {
      d(s, t, i)
      for (let o = 0; o < r.length; o += 1) r[o].m(t, null)
    },
    p(s, [i]) {
      if (i & 3) {
        n = s[0]
        let o
        for (o = 0; o < n.length; o += 1) {
          let a = ue(s, n, o)
          r[o] ? r[o].p(a, i) : ((r[o] = fe(a)), r[o].c(), r[o].m(t, null))
        }
        for (; o < r.length; o += 1) r[o].d(1)
        r.length = n.length
      }
    },
    i: c,
    o: c,
    d(s) {
      s && m(t), Te(r, s)
    },
  }
}
function ke(e, t, n) {
  let r = [],
    s = () => {}
  function i(a) {
    n(0, (r = a.todos))
  }
  function o({ toggle: a }) {
    n(1, (s = (u) => a(u.target.dataset.id)))
  }
  return L(i, o), [r, s]
}
var ce = class extends b {
    constructor(t) {
      super()
      q(this, t, ke, Oe, E, {})
    }
  },
  he = ce
ae()
function Pe(e) {
  let t, n, r, s, i
  return {
    c() {
      ;(t = w('footer')),
        (n = x('Done: ')),
        (r = x(e[1])),
        (s = x(' / ')),
        (i = x(e[0])),
        _(t, 'class', 'svelte-1o8cxar')
    },
    m(o, a) {
      d(o, t, a), v(t, n), v(t, r), v(t, s), v(t, i)
    },
    p(o, [a]) {
      a & 2 && S(r, o[1]), a & 1 && S(i, o[0])
    },
    i: c,
    o: c,
    d(o) {
      o && m(t)
    },
  }
}
function Ae(e, t, n) {
  let r = [],
    s = 0,
    i = 0
  function o(a) {
    n(2, (r = a.todos))
  }
  return (
    L(o),
    (e.$$.update = () => {
      if (e.$$.dirty & 4) {
        e: n(0, (s = r.length))
      }
      if (e.$$.dirty & 4) {
        e: n(1, (i = r.filter((a) => a.done).length))
      }
    }),
    [s, i, r]
  )
}
var de = class extends b {
    constructor(t) {
      super()
      q(this, t, Ae, Pe, E, {})
    }
  },
  ve = de
me()
function Fe(e) {
  let t, n, r, s, i, o
  return (
    (t = new ie({})),
    (r = new he({})),
    (i = new ve({})),
    {
      c() {
        A(t.$$.fragment), (n = _e()), A(r.$$.fragment), (s = _e()), A(i.$$.fragment)
      },
      m(a, u) {
        j(t, a, u), d(a, n, u), j(r, a, u), d(a, s, u), j(i, a, u), (o = !0)
      },
      p: c,
      i(a) {
        o || (U(t.$$.fragment, a), U(r.$$.fragment, a), U(i.$$.fragment, a), (o = !0))
      },
      o(a) {
        D(t.$$.fragment, a), D(r.$$.fragment, a), D(i.$$.fragment, a), (o = !1)
      },
      d(a) {
        F(t, a), a && m(n), F(r, a), a && m(s), F(i, a)
      },
    }
  )
}
var ge = class extends b {
    constructor(t) {
      super()
      q(this, t, null, Fe, E, {})
    }
  },
  Le = ge
M.debug('Preach script started!')
De('../store-preach.js', O)
Ue({
  container: document.querySelector('#preach .uce'),
  on(e) {
    je(`components/${e}.uce`)
      .then((t) => t.text())
      .then((t) => {
        let n = Me(t)
        M.debug('Preach Loader just loaded', `<${e}>`, n), document.body.appendChild(n)
      })
  },
})
var Ie = new Le({ target: document.querySelector('#preach .svelte') })
Ie && M.debug('Preach & Svelte working fine')
//# sourceMappingURL=main-preach.js.map
