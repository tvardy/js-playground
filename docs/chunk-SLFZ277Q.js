var x = Object.create,
  a = Object.defineProperty,
  L = Object.getPrototypeOf,
  u = Object.prototype.hasOwnProperty,
  O = Object.getOwnPropertyNames,
  S = Object.getOwnPropertyDescriptor,
  m = Object.getOwnPropertySymbols,
  b = Object.prototype.propertyIsEnumerable
var i = (e, t, o) =>
    t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o),
  N = (e, t) => {
    for (var o in t || (t = {})) u.call(t, o) && i(e, o, t[o])
    if (m) for (var o of m(t)) b.call(t, o) && i(e, o, t[o])
    return e
  },
  w = (e) => a(e, '__esModule', { value: !0 })
var F = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  G = (e, t) => {
    for (var o in t) a(e, o, { get: t[o], enumerable: !0 })
  },
  R = (e, t, o) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let n of O(t))
        !u.call(e, n) &&
          n !== 'default' &&
          a(e, n, { get: () => t[n], enumerable: !(o = S(t, n)) || o.enumerable })
    return e
  },
  _ = (e) =>
    R(
      w(
        a(
          e != null ? x(L(e)) : {},
          'default',
          e && e.__esModule && 'default' in e
            ? { get: () => e.default, enumerable: !0 }
            : { value: e, enumerable: !0 }
        )
      ),
      e
    )
var j = (e, t, o) => (i(e, typeof t != 'symbol' ? t + '' : t, o), o)
var c = () => {}
function p() {
  return { length: 0, clear: c, getItem: c, key: c, setItem: c, removeItem: c }
}
function f(e) {
  try {
    if (!e.localStorage || !e.sessionStorage) throw 'no storage!'
    return (
      e.localStorage.setItem('storage_test', '1'),
      e.localStorage.removeItem('storage_test'),
      [e.localStorage, e.sessionStorage]
    )
  } catch (t) {
    let o = new p(),
      n = new p()
    return [o, n]
  }
}
var r = (function () {
    if (typeof self != 'undefined') return self
    if (typeof global != 'undefined') return global
    if (typeof d != 'undefined') return d
    throw new y('unable to locate global object')
  })(),
  [E, B] = f(r),
  D = r.clearTimeout.bind(r),
  s = r.console,
  U = r.document,
  W = r.history,
  y = r.Error,
  J = r.fetch,
  P = r.navigator,
  h = E,
  C = r.location,
  M = r.JSON,
  V = r.Promise,
  q = r.setTimeout.bind(r)
var d = r.window
var l = { DEBUG: 1, INFO: 2, LOG: 3, WARN: 4, ERROR: 5, OFF: 10 },
  g = Object.keys(l).reduce((e, t) => ((e[t] = t), e), {}),
  v = class {
    constructor(t = 'debug') {
      this._key = t
      let o = 'false'
      try {
        o = h.getItem(this._key) || 'false'
      } catch (n) {}
      this.logLevel = o
    }
    get logLevel() {
      return this._logLevel
    }
    set logLevel(t) {
      let o = l[t] ? t : 'OFF',
        n = l[o]
      this._logLevel = { name: o, value: n }
    }
    debug() {
      this.logLevel.value <= l.DEBUG && s.debug(g.DEBUG, '::', ...arguments)
    }
    info() {
      this.logLevel.value <= l.INFO && s.info(g.INFO, '::', ...arguments)
    }
    log() {
      this.logLevel.value <= l.LOG && s.log(g.LOG, '::', ...arguments)
    }
    warn() {
      this.logLevel.value <= l.WARN && s.warn(g.WARN, '::', ...arguments)
    }
    error() {
      this.logLevel.value <= l.ERROR && s.error(g.ERROR, '::', ...arguments)
    }
  },
  K = new v()
export { N as a, F as b, G as c, _ as d, j as e, J as f, K as g }
//# sourceMappingURL=chunk-SLFZ277Q.js.map
