import { a as q, b as x, c as j, d as m, e as v } from './chunk-INS3FUNR.js'
import './chunk-YNYRRD5H.js'
import './chunk-D5WR2F3S.js'
import { a as p, d as h } from './chunk-A37PCSWK.js'
import { a as l, c as I } from './chunk-SLFZ277Q.js'
var a = {}
I(a, { connect: () => S, store: () => d })
var u = []
function b(n, i = p) {
  let o,
    t = []
  function r(s) {
    if (h(n, s) && ((n = s), o)) {
      let f = !u.length
      for (let e = 0; e < t.length; e += 1) {
        let c = t[e]
        c[1](), u.push(c, n)
      }
      if (f) {
        for (let e = 0; e < u.length; e += 2) u[e][0](u[e + 1])
        u.length = 0
      }
    }
  }
  function g(s) {
    r(s(n))
  }
  function _(s, f = p) {
    let e = [s, f]
    return (
      t.push(e),
      t.length === 1 && (o = i(r) || p),
      s(n),
      () => {
        let c = t.indexOf(e)
        c !== -1 && t.splice(c, 1), t.length === 0 && (o(), (o = null))
      }
    )
  }
  return { set: r, update: g, subscribe: _ }
}
var y = l({}, j)
function A() {
  let { subscribe: n, update: i } = b(y)
  return {
    subscribe: n,
    toggle(o) {
      i((t) =>
        l(l({}, t), {
          todos: t.todos.map((r) => (r.id === o && (r.done = !r.done), r)),
        })
      )
    },
    add(o) {
      i((t) => l(l({}, t), { todos: [{ text: o, done: !1, id: x() }, ...t.todos] }))
    },
  }
}
var d = A()
function S(n = m, i = m) {
  i(d), d.subscribe(n)
}
q('Svelte stores', a, v)
//# sourceMappingURL=state-stores.js.map
