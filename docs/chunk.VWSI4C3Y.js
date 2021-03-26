import { a as P } from './chunk.3RRQVPV5.js'
import { d as I } from './chunk.LYWHNSVE.js'
var x = I((A, L) => {
  'use strict'
  ;(function () {
    let k = this,
      o = (function (m, _, K) {
        let y = !1,
          d = {},
          h = function (n) {
            try {
              console.log(
                'lzwCompress: ' +
                  new Date().toISOString() +
                  ' : ' +
                  (typeof n == 'object' ? _.stringify(n) : n)
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
              w = function (t) {
                let e = t
                return typeof e != 'object'
                  ? t
                  : e.hasOwnProperty('__k')
                  ? ((a = e.__k), i(e.__v))
                  : s.stringify(e)
              }
            n.KeyOptimize = { pack: g, unpack: w }
          })(d, m, _),
          (function (n, c) {
            let s = function (f) {
                if (typeof f != 'string') return f
                let r,
                  p = Object.create(null),
                  u,
                  l,
                  i = '',
                  g = [],
                  w = 256
                for (r = 0; r < 256; r += 1) p[String.fromCharCode(r)] = r
                for (r = 0; r < f.length; r += 1)
                  if (((u = f.charAt(r)), (l = i + u), p[l])) i = l
                  else {
                    if (p[i] === K) return f
                    g.push(p[i]), (p[l] = w++), (i = String(u))
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
                  w = 256
                for (r = 0; r < 256; r += 1) p[r] = String.fromCharCode(r)
                for (
                  u = String.fromCharCode(f[0]), l = u, r = 1;
                  r < f.length;
                  r += 1
                ) {
                  if (((i = f[r]), p[i])) g = p[i]
                  else if (i === w) g = u + u.charAt(0)
                  else return null
                  ;(l += g), (p[w++] = u + g.charAt(0)), (u = g)
                }
                return l
              }
            n.LZWCompress = { pack: s, unpack: a }
          })(d, m),
          {
            pack: function (n) {
              if (
                (y && h('original (uncompressed) : ' + n),
                !n || n === !0 || n instanceof Date)
              )
                return n
              let c = n
              typeof n == 'object' &&
                ((c = d.KeyOptimize.pack(_.stringify(n))),
                y && h('key optimized: ' + c))
              let s = d.LZWCompress.pack(c)
              return y && h('packed   (compressed)   : ' + s), s
            },
            unpack: function (n) {
              if (
                (y && h('original (compressed)   : ' + n),
                !n || n === !0 || n instanceof Date)
              )
                return n
              let c,
                s = d.LZWCompress.unpack(n)
              try {
                c = _.parse(s)
              } catch (a) {
                return y && h('unpacked (uncompressed) : ' + s), s
              }
              return (
                typeof c == 'object' && (s = d.KeyOptimize.unpack(c)),
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
  }.call(A))
})
var S = P(x()),
  C = {
    URL: 'wss://node-ws-message-broker.herokuapp.com/',
    compress: { bits: 32, sep: ':' },
  },
  U = (k) =>
    S.default
      .pack(JSON.stringify(k))
      .map((o) => o.toString(C.compress.bits))
      .join(C.compress.sep),
  E = (k) =>
    JSON.parse(
      S.default.unpack(k.split(C.compress.sep).map((o) => parseInt(o, C.compress.bits)))
    )
function q() {
  return new Promise((k, o) => {
    let m = new O(C.URL)
    m.on('connect', () => k(m)), m.on('error', (_) => o(_))
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
var D = { user: {}, messages: [] },
  F = D
export { F as a, U as b, E as c, q as d }
//# sourceMappingURL=chunk.76AE4XKE.js.map
