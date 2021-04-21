import { a as k, b as M, c as P, d as F, e as j } from './chunk-INS3FUNR.js'
import './chunk-YNYRRD5H.js'
import './chunk-D5WR2F3S.js'
import './chunk-A37PCSWK.js'
import { a as S, b as v, c as Y, d as Q } from './chunk-SLFZ277Q.js'
var b = v((z, d) => {
  function o() {
    ;(this._events = this._events || {}),
      (this._maxListeners = this._maxListeners || void 0)
  }
  d.exports = o
  o.EventEmitter = o
  o.prototype._events = void 0
  o.prototype._maxListeners = void 0
  o.defaultMaxListeners = 10
  o.prototype.setMaxListeners = function (e) {
    if (!A(e) || e < 0 || isNaN(e)) throw TypeError('n must be a positive number')
    return (this._maxListeners = e), this
  }
  o.prototype.emit = function (e) {
    var n, t, r, i, s, f
    if (
      (this._events || (this._events = {}),
      e === 'error' &&
        (!this._events.error || (l(this._events.error) && !this._events.error.length)))
    )
      throw (
        ((n = arguments[1]),
        n instanceof Error ? n : TypeError('Uncaught, unspecified "error" event.'))
      )
    if (((t = this._events[e]), L(t))) return !1
    if (a(t))
      switch (arguments.length) {
        case 1:
          t.call(this)
          break
        case 2:
          t.call(this, arguments[1])
          break
        case 3:
          t.call(this, arguments[1], arguments[2])
          break
        default:
          for (r = arguments.length, i = new Array(r - 1), s = 1; s < r; s++)
            i[s - 1] = arguments[s]
          t.apply(this, i)
      }
    else if (l(t)) {
      for (r = arguments.length, i = new Array(r - 1), s = 1; s < r; s++)
        i[s - 1] = arguments[s]
      for (f = t.slice(), r = f.length, s = 0; s < r; s++) f[s].apply(this, i)
    }
    return !0
  }
  o.prototype.addListener = function (e, n) {
    var t
    if (!a(n)) throw TypeError('listener must be a function')
    if (
      (this._events || (this._events = {}),
      this._events.newListener &&
        this.emit('newListener', e, a(n.listener) ? n.listener : n),
      this._events[e]
        ? l(this._events[e])
          ? this._events[e].push(n)
          : (this._events[e] = [this._events[e], n])
        : (this._events[e] = n),
      l(this._events[e]) && !this._events[e].warned)
    ) {
      var t
      L(this._maxListeners) ? (t = o.defaultMaxListeners) : (t = this._maxListeners),
        t &&
          t > 0 &&
          this._events[e].length > t &&
          ((this._events[e].warned = !0),
          console.error(
            '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
            this._events[e].length
          ),
          typeof console.trace == 'function' && console.trace())
    }
    return this
  }
  o.prototype.on = o.prototype.addListener
  o.prototype.once = function (e, n) {
    if (!a(n)) throw TypeError('listener must be a function')
    var t = !1
    function r() {
      this.removeListener(e, r), t || ((t = !0), n.apply(this, arguments))
    }
    return (r.listener = n), this.on(e, r), this
  }
  o.prototype.removeListener = function (e, n) {
    var t, r, i, s
    if (!a(n)) throw TypeError('listener must be a function')
    if (!this._events || !this._events[e]) return this
    if (
      ((t = this._events[e]),
      (i = t.length),
      (r = -1),
      t === n || (a(t.listener) && t.listener === n))
    )
      delete this._events[e],
        this._events.removeListener && this.emit('removeListener', e, n)
    else if (l(t)) {
      for (s = i; s-- > 0; )
        if (t[s] === n || (t[s].listener && t[s].listener === n)) {
          r = s
          break
        }
      if (r < 0) return this
      t.length === 1 ? ((t.length = 0), delete this._events[e]) : t.splice(r, 1),
        this._events.removeListener && this.emit('removeListener', e, n)
    }
    return this
  }
  o.prototype.removeAllListeners = function (e) {
    var n, t
    if (!this._events) return this
    if (!this._events.removeListener)
      return (
        arguments.length === 0
          ? (this._events = {})
          : this._events[e] && delete this._events[e],
        this
      )
    if (arguments.length === 0) {
      for (n in this._events) n !== 'removeListener' && this.removeAllListeners(n)
      return this.removeAllListeners('removeListener'), (this._events = {}), this
    }
    if (((t = this._events[e]), a(t))) this.removeListener(e, t)
    else for (; t.length; ) this.removeListener(e, t[t.length - 1])
    return delete this._events[e], this
  }
  o.prototype.listeners = function (e) {
    var n
    return (
      !this._events || !this._events[e]
        ? (n = [])
        : a(this._events[e])
        ? (n = [this._events[e]])
        : (n = this._events[e].slice()),
      n
    )
  }
  o.listenerCount = function (e, n) {
    var t
    return (
      !e._events || !e._events[n]
        ? (t = 0)
        : a(e._events[n])
        ? (t = 1)
        : (t = e._events[n].length),
      t
    )
  }
  function a(e) {
    return typeof e == 'function'
  }
  function A(e) {
    return typeof e == 'number'
  }
  function l(e) {
    return typeof e == 'object' && e !== null
  }
  function L(e) {
    return e === void 0
  }
})
var w = v((m) => {
  m.getFnIdx = function (e) {
    return e.toString().replace(/[\s\r\n\f\t\v]/g, '')
  }
  m.getChannels = function (e, n) {
    var t = []
    if (e instanceof RegExp)
      for (var r in n) n.hasOwnProperty(r) && e.test(r) && t.push(r)
    else t = e in n ? [e] : []
    return t
  }
})
var x = v((G, q) => {
  q.exports = {
    ECHNLNOTFOUND:
      'Preach: No channels match the given channel name or regular expression',
    ELSTNRNOTFOUND: "Preach: Could not unsubscribe. Maybe the subsciber doesn't exist",
  }
})
var C = v((J, E) => {
  var N = b().EventEmitter,
    u = w(),
    _ = x()
  function h(e) {
    if (!(this instanceof h)) return new h()
    ;(this._q = {}), (this._e = new N()), this._e.setMaxListeners(e || 0)
  }
  h.prototype.pub = function (e) {
    var n = u.getChannels(e, this._q),
      t = [].splice.call(arguments, 1)
    n.length || console.warn(_.ECHNLNOTFOUND)
    for (var r in n) this._e.emit.apply(this._e, [n[r]].concat(t))
    return !0
  }
  h.prototype.sub = function (e, n) {
    var t = e instanceof RegExp ? u.getChannels(e, this._q) : [e],
      r = u.getFnIdx(n),
      i
    t.length || console.warn(_.ECHNLNOTFOUND)
    for (var s in t)
      (i = t[s]),
        (this._q[i] = this._q[i] || {}),
        (this._q[i][r] = n),
        this._e.on(i, this._q[i][r])
    return !0
  }
  h.prototype.unsub = function (e, n) {
    var t = u.getChannels(e, this._q),
      r = u.getFnIdx(n),
      i
    t.length || console.warn(_.ECHNLNOTFOUND)
    for (var s in t)
      try {
        ;(i = t[s]), this._e.removeListener(i, this._q[i][r]), delete this._q[i][r]
      } catch (f) {
        console.warn(_.ELSTNRNOTFOUND, f)
      }
    return !0
  }
  h.prototype.purge = function () {
    var e = u.getChannels(/.*/, this._q),
      n
    for (var t in e) (n = e[t]), this._e.removeAllListeners(n), delete this._q[n]
    return !0
  }
  h.prototype.channels = function () {
    return u.getChannels(/.*/, this._q)
  }
  h.prototype.subscribers = function (e) {
    var n = u.getChannels(e || /.*/, this._q),
      t,
      r
    if (((r = {}), n.length === 1 && !(n[0] in this._q))) return r
    for (var i in n) {
      ;(t = n[i]), (r[t] = [])
      for (var s in this._q[t]) this._q[t].hasOwnProperty(s) && r[t].push(this._q[t][s])
    }
    return r
  }
  h.prototype.subscriberCount = function (e) {
    var n = u.getChannels(e || /.*/, this._q),
      t,
      r
    if (((r = {}), n.length === 1 && !(n[0] in this._q))) return r
    for (var i in n) (t = n[i]), (r[t] = N.listenerCount(this._e, t))
    return r
  }
  h.prototype.setMaxSubscribers = function (e) {
    this._e.setMaxListeners(e)
  }
  E.exports = h
})
var y = v((K, O) => {
  O.exports = C()
})
var p = {}
Y(p, { connect: () => R })
var T = Q(y())
var g = new T.default(),
  D = S({}, P),
  U = {
    toggle(e) {
      c.todos = c.todos.map((n) => (n.id === e && (n.done = !n.done), n))
    },
    add(e) {
      c.todos = [{ text: e, done: !1, id: M() }, ...c.todos]
    },
  },
  H = {
    set(e, n, t) {
      return (e[n] = t), g.pub('change', e), !0
    },
  },
  c = new Proxy(D, H),
  I = Object.keys(U).reduce((e, n) => ((e[n] = (...t) => U[n](...t)), e), {})
function R(e = F, n = F) {
  n(I), g.sub('change', (t) => e(t)), g.pub('change', c)
}
k('Preach', p, j)
//# sourceMappingURL=state-preach.js.map
