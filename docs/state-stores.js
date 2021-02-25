import {
  a as x,
  b,
  c as f,
  d as h,
  e as S,
  g as H,
  h as _,
  i as q,
} from './chunk.5ZYV7BDG.js'
import './chunk.UAU2O4PE.js'
import './chunk.R5H7EMPM.js'
var p = {}
H(p, { connect: () => A, store: () => a })
var u = []
function d(n, i = f) {
  let o,
    t = []
  function r(s) {
    if (_(n, s) && ((n = s), o)) {
      let l = !u.length
      for (let e = 0; e < t.length; e += 1) {
        let c = t[e]
        c[1](), u.push(c, n)
      }
      if (l) {
        for (let e = 0; e < u.length; e += 2) u[e][0](u[e + 1])
        u.length = 0
      }
    }
  }
  function m(s) {
    r(s(n))
  }
  function g(s, l = f) {
    let e = [s, l]
    return (
      t.push(e),
      t.length === 1 && (o = i(r) || f),
      s(n),
      () => {
        let c = t.indexOf(e)
        c !== -1 && t.splice(c, 1), t.length === 0 && (o(), (o = null))
      }
    )
  }
  return { set: r, update: m, subscribe: g }
}
var j = { ...x }
function y() {
  let { subscribe: n, update: i } = d(j)
  return {
    subscribe: n,
    toggle(o) {
      i((t) => ({
        ...t,
        todos: t.todos.map((r) => (r.id === o && (r.done = !r.done), r)),
      }))
    },
    add(o) {
      i((t) => ({ ...t, todos: [{ text: o, done: !1, id: h() }, ...t.todos] }))
    },
  }
}
var a = y()
function A(n = b, i = b) {
  i(a), a.subscribe(n)
}
S('Svelte stores', p, q)
//# sourceMappingURL=state-stores.js.map
