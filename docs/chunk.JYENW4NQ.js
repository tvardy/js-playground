import { d as e } from './chunk.F4HWMIJO.js'
var f = Object.create
var g = Object.getPrototypeOf,
  h = Object.prototype.hasOwnProperty,
  i = Object.getOwnPropertyNames,
  j = Object.getOwnPropertyDescriptor
var k = (a) => e(a, '__esModule', { value: !0 })
var l = (a, b, d) => {
    if ((b && typeof b == 'object') || typeof b == 'function')
      for (let c of i(b))
        !h.call(a, c) &&
          c !== 'default' &&
          e(a, c, { get: () => b[c], enumerable: !(d = j(b, c)) || d.enumerable })
    return a
  },
  n = (a) =>
    a && a.__esModule
      ? a
      : l(k(e(a != null ? f(g(a)) : {}, 'default', { value: a, enumerable: !0 })), a)
export { n as a }
//# sourceMappingURL=chunk.IXVMP6XR.js.map
