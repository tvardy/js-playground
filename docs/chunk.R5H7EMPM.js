var l = () => {}
function g() {
  return { length: 0, clear: l, getItem: l, key: l, setItem: l, removeItem: l }
}
function i(o) {
  try {
    if (!o.localStorage || !o.sessionStorage) throw 'no storage!'
    return (
      o.localStorage.setItem('storage_test', '1'),
      o.localStorage.removeItem('storage_test'),
      [o.localStorage, o.sessionStorage]
    )
  } catch (r) {
    let n = new g(),
      c = new g()
    return [n, c]
  }
}
var e = (function () {
    if (typeof self != 'undefined') return self
    if (typeof global != 'undefined') return global
    if (typeof u != 'undefined') return u
    throw new f('unable to locate global object')
  })(),
  [d, L] = i(e),
  O = e.clearTimeout.bind(e),
  t = e.console,
  S = e.document,
  b = e.history,
  f = e.Error,
  w = e.fetch,
  R = e.navigator,
  m = d,
  y = e.location,
  E = e.JSON,
  I = e.Promise,
  N = e.setTimeout.bind(e)
var u = e.window
var s = { DEBUG: 1, INFO: 2, LOG: 3, WARN: 4, ERROR: 5, OFF: 10 },
  a = Object.keys(s).reduce((o, r) => ((o[r] = r), o), {}),
  p = class {
    constructor(r = 'debug') {
      this._key = r
      let n = 'false'
      try {
        n = m.getItem(this._key) || 'false'
      } catch (c) {}
      this.logLevel = n
    }
    get logLevel() {
      return this._logLevel
    }
    set logLevel(r) {
      let n = s[r] ? r : 'OFF',
        c = s[n]
      this._logLevel = { name: n, value: c }
    }
    debug() {
      this.logLevel.value <= s.DEBUG && t.debug(a.DEBUG, '::', ...arguments)
    }
    info() {
      this.logLevel.value <= s.INFO && t.info(a.INFO, '::', ...arguments)
    }
    log() {
      this.logLevel.value <= s.LOG && t.log(a.LOG, '::', ...arguments)
    }
    warn() {
      this.logLevel.value <= s.WARN && t.warn(a.WARN, '::', ...arguments)
    }
    error() {
      this.logLevel.value <= s.ERROR && t.error(a.ERROR, '::', ...arguments)
    }
  },
  _ = new p()
export { w as a, _ as b }
//# sourceMappingURL=chunk.BXAM2ZQJ.js.map
