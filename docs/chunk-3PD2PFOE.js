import { b as Z, d as I } from './chunk-SLFZ277Q.js'
var A = Z((x, L) => {
  'use strict'
  ;(function () {
    let k = this,
      o = (function (_, m, K) {
        let y = !1,
          w = {},
          h = function (n) {
            try {
              console.log(
                'lzwCompress: ' +
                  new Date().toISOString() +
                  ' : ' +
                  (typeof n == 'object' ? m.stringify(n) : n)
              )
            } catch (c) {}
          }
        return (
          (function (n, c, s) {
            let a = [],
              f = function (t) {
                return function (e) {
                  return e === t
                }
              },
              r = function (t, e) {
                for (let z = 0; z < t.length; z++) if (e(t[z])) return !0
                return !1
              },
              p = function (t, e, z) {
                r(t, z) || t.push(e)
              },
              u = function (t) {
                if (typeof t == 'object')
                  for (let e in t) c.isArray(t) || p(a, e, f(e)), u(t[e])
              },
              l = function (t) {
                if (typeof t != 'object') return t
                for (let e in t)
                  c.isArray(t)
                    ? (t[e] = l(t[e]))
                    : t.hasOwnProperty(e) && ((t[a.indexOf(e)] = l(t[e])), delete t[e])
                return t
              },
              i = function (t) {
                if (typeof t != 'object') return t
                for (let e in t)
                  c.isArray(t)
                    ? (t[e] = i(t[e]))
                    : t.hasOwnProperty(e) && a[e] && ((t[a[e]] = i(t[e])), delete t[e])
                return t
              },
              g = function (t) {
                a = []
                let e = s.parse(t)
                return (
                  u(e),
                  y && h('keys length : ' + a.length),
                  y && h('keys        : ' + a),
                  s.stringify({ __k: a, __v: l(e) })
                )
              },
              d = function (t) {
                let e = t
                return typeof e != 'object'
                  ? t
                  : e.hasOwnProperty('__k')
                  ? ((a = e.__k), i(e.__v))
                  : s.stringify(e)
              }
            n.KeyOptimize = { pack: g, unpack: d }
          })(w, _, m),
          (function (n, c) {
            let s = function (f) {
                if (typeof f != 'string') return f
                let r,
                  p = Object.create(null),
                  u,
                  l,
                  i = '',
                  g = [],
                  d = 256
                for (r = 0; r < 256; r += 1) p[String.fromCharCode(r)] = r
                for (r = 0; r < f.length; r += 1)
                  if (((u = f.charAt(r)), (l = i + u), p[l])) i = l
                  else {
                    if (p[i] === K) return f
                    g.push(p[i]), (p[l] = d++), (i = String(u))
                  }
                return i !== '' && g.push(p[i]), g
              },
              a = function (f) {
                if (!c.isArray(f)) return f
                let r,
                  p = [],
                  u,
                  l,
                  i,
                  g = '',
                  d = 256
                for (r = 0; r < 256; r += 1) p[r] = String.fromCharCode(r)
                for (
                  u = String.fromCharCode(f[0]), l = u, r = 1;
                  r < f.length;
                  r += 1
                ) {
                  if (((i = f[r]), p[i])) g = p[i]
                  else if (i === d) g = u + u.charAt(0)
                  else return null
                  ;(l += g), (p[d++] = u + g.charAt(0)), (u = g)
                }
                return l
              }
            n.LZWCompress = { pack: s, unpack: a }
          })(w, _),
          {
            pack: function (n) {
              if (
                (y && h('original (uncompressed) : ' + n),
                !n || n === !0 || n instanceof Date)
              )
                return n
              let c = n
              typeof n == 'object' &&
                ((c = w.KeyOptimize.pack(m.stringify(n))),
                y && h('key optimized: ' + c))
              let s = w.LZWCompress.pack(c)
              return y && h('packed   (compressed)   : ' + s), s
            },
            unpack: function (n) {
              if (
                (y && h('original (compressed)   : ' + n),
                !n || n === !0 || n instanceof Date)
              )
                return n
              let c,
                s = w.LZWCompress.unpack(n)
              try {
                c = m.parse(s)
              } catch (a) {
                return y && h('unpacked (uncompressed) : ' + s), s
              }
              return (
                typeof c == 'object' && (s = w.KeyOptimize.unpack(c)),
                y && h('unpacked (uncompressed) : ' + s),
                s
              )
            },
            enableLogging: function (n) {
              y = n
            },
          }
        )
      })(Array, JSON)
    typeof L != 'undefined' && L.exports ? (L.exports = o) : (k.lzwCompress = o)
  }.call(x))
})
var S = I(A()),
  C = {
    URL: 'wss://node-ws-message-broker.herokuapp.com/',
    compress: { bits: 32, sep: ':' },
  },
  R = (k) =>
    S.default
      .pack(JSON.stringify(k))
      .map((o) => o.toString(C.compress.bits))
      .join(C.compress.sep),
  U = (k) =>
    JSON.parse(
      S.default.unpack(k.split(C.compress.sep).map((o) => parseInt(o, C.compress.bits)))
    )
function E() {
  return new Promise((k, o) => {
    let _ = new O(C.URL)
    _.on('connect', () => k(_)), _.on('error', (m) => o(m))
  })
}
var O = class {
  constructor(o) {
    this._io = io(o)
  }
  get id() {
    return this._io.id
  }
  on(...o) {
    this._io.on(...o)
  }
  emit(...o) {
    this._io.emit(...o)
  }
}
export { A as a, C as b, R as c, U as d, E as e }
//# sourceMappingURL=chunk-3PD2PFOE.js.map
