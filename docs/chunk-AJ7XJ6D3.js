import { b as W, d as v } from './chunk-SLFZ277Q.js'
var A = W((x, z) => {
  'use strict'
  ;(function () {
    let m = this,
      k = (function (S, w, O) {
        let y = !1,
          _ = {},
          g = function (n) {
            try {
              console.log(
                'lzwCompress: ' +
                  new Date().toISOString() +
                  ' : ' +
                  (typeof n == 'object' ? w.stringify(n) : n)
              )
            } catch (s) {}
          }
        return (
          (function (n, s, c) {
            let p = [],
              o = function (t) {
                return function (e) {
                  return e === t
                }
              },
              r = function (t, e) {
                for (let d = 0; d < t.length; d++) if (e(t[d])) return !0
                return !1
              },
              f = function (t, e, d) {
                r(t, d) || t.push(e)
              },
              u = function (t) {
                if (typeof t == 'object')
                  for (let e in t) s.isArray(t) || f(p, e, o(e)), u(t[e])
              },
              l = function (t) {
                if (typeof t != 'object') return t
                for (let e in t)
                  s.isArray(t)
                    ? (t[e] = l(t[e]))
                    : t.hasOwnProperty(e) && ((t[p.indexOf(e)] = l(t[e])), delete t[e])
                return t
              },
              i = function (t) {
                if (typeof t != 'object') return t
                for (let e in t)
                  s.isArray(t)
                    ? (t[e] = i(t[e]))
                    : t.hasOwnProperty(e) && p[e] && ((t[p[e]] = i(t[e])), delete t[e])
                return t
              },
              a = function (t) {
                p = []
                let e = c.parse(t)
                return (
                  u(e),
                  y && g('keys length : ' + p.length),
                  y && g('keys        : ' + p),
                  c.stringify({ __k: p, __v: l(e) })
                )
              },
              h = function (t) {
                let e = t
                return typeof e != 'object'
                  ? t
                  : e.hasOwnProperty('__k')
                  ? ((p = e.__k), i(e.__v))
                  : c.stringify(e)
              }
            n.KeyOptimize = { pack: a, unpack: h }
          })(_, S, w),
          (function (n, s) {
            let c = function (o) {
                if (typeof o != 'string') return o
                let r,
                  f = Object.create(null),
                  u,
                  l,
                  i = '',
                  a = [],
                  h = 256
                for (r = 0; r < 256; r += 1) f[String.fromCharCode(r)] = r
                for (r = 0; r < o.length; r += 1)
                  if (((u = o.charAt(r)), (l = i + u), f[l])) i = l
                  else {
                    if (f[i] === O) return o
                    a.push(f[i]), (f[l] = h++), (i = String(u))
                  }
                return i !== '' && a.push(f[i]), a
              },
              p = function (o) {
                if (!s.isArray(o)) return o
                let r,
                  f = [],
                  u,
                  l,
                  i,
                  a = '',
                  h = 256
                for (r = 0; r < 256; r += 1) f[r] = String.fromCharCode(r)
                for (
                  u = String.fromCharCode(o[0]), l = u, r = 1;
                  r < o.length;
                  r += 1
                ) {
                  if (((i = o[r]), f[i])) a = f[i]
                  else if (i === h) a = u + u.charAt(0)
                  else return null
                  ;(l += a), (f[h++] = u + a.charAt(0)), (u = a)
                }
                return l
              }
            n.LZWCompress = { pack: c, unpack: p }
          })(_, S),
          {
            pack: function (n) {
              if (
                (y && g('original (uncompressed) : ' + n),
                !n || n === !0 || n instanceof Date)
              )
                return n
              let s = n
              typeof n == 'object' &&
                ((s = _.KeyOptimize.pack(w.stringify(n))),
                y && g('key optimized: ' + s))
              let c = _.LZWCompress.pack(s)
              return y && g('packed   (compressed)   : ' + c), c
            },
            unpack: function (n) {
              if (
                (y && g('original (compressed)   : ' + n),
                !n || n === !0 || n instanceof Date)
              )
                return n
              let s,
                c = _.LZWCompress.unpack(n)
              try {
                s = w.parse(c)
              } catch (p) {
                return y && g('unpacked (uncompressed) : ' + c), c
              }
              return (
                typeof s == 'object' && (c = _.KeyOptimize.unpack(s)),
                y && g('unpacked (uncompressed) : ' + c),
                c
              )
            },
            enableLogging: function (n) {
              y = n
            },
          }
        )
      })(Array, JSON)
    typeof z != 'undefined' && z.exports ? (z.exports = k) : (m.lzwCompress = k)
  }.call(x))
})
var L = v(A()),
  C = { bits: 32, sep: ':' },
  I = (m) =>
    L.default
      .pack(JSON.stringify(m))
      .map((k) => k.toString(C.bits))
      .join(C.sep),
  E = (m) =>
    JSON.parse(L.default.unpack(m.split(C.sep).map((k) => parseInt(k, C.bits))))
export { A as a, C as b, I as c, E as d }
//# sourceMappingURL=chunk-AJ7XJ6D3.js.map
