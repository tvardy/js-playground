import {
  A as z,
  B as W,
  C,
  D,
  E,
  F as O,
  G as j,
  H as b,
  I as g,
  a as st,
  b as T,
  c as l,
  e as yt,
  f as rt,
  g as bt,
  h as A,
  i as P,
  j as M,
  k as qt,
  m as d,
  n as Ft,
  o as $t,
  p as h,
  q as _,
  r as p,
  s as dt,
  t as y,
  u as $,
  v as et,
  w as k,
  x as lt,
  y as m,
  z as x,
} from './chunk.F4HWMIJO.js'
var R = P((Mt, N) => {
  N.exports = {}
})
var U = P((Rt, H) => {
  H.exports = {}
})
var X = P((It, Q) => {
  Q.exports = {}
})
var S = {}
qt(S, { connect: () => ut, store: () => f })
function q(o, ...t) {
  if (o == null) return l
  let n = o.subscribe(...t)
  return n.unsubscribe ? () => n.unsubscribe() : n
}
function w(o, t, n) {
  o.$$.on_destroy.push(q(t, n))
}
var F = []
function L(o, t = l) {
  let n,
    e = []
  function r(i) {
    if (d(o, i) && ((o = i), n)) {
      let u = !F.length
      for (let a = 0; a < e.length; a += 1) {
        let v = e[a]
        v[1](), F.push(v, o)
      }
      if (u) {
        for (let a = 0; a < F.length; a += 2) F[a][0](F[a + 1])
        F.length = 0
      }
    }
  }
  function c(i) {
    r(i(o))
  }
  function s(i, u = l) {
    let a = [i, u]
    return (
      e.push(a),
      e.length === 1 && (n = t(r) || l),
      i(o),
      () => {
        let v = e.indexOf(a)
        v !== -1 && e.splice(v, 1), e.length === 0 && (n(), (n = null))
      }
    )
  }
  return { set: r, update: c, subscribe: s }
}
var it = { ...st }
function ct() {
  let { subscribe: o, update: t } = L(it)
  return {
    subscribe: o,
    toggle(n) {
      t((e) => ({
        ...e,
        todos: e.todos.map((r) => (r.id === n && (r.done = !r.done), r)),
      }))
    },
    add(n) {
      t((e) => ({ ...e, todos: [{ text: n, done: !1, id: rt() }, ...e.todos] }))
    },
  }
}
var f = ct()
function ut(o = T, t = T) {
  t(f), f.subscribe(o)
}
function at(o) {
  let t, n, e, r
  return {
    c() {
      ;(t = y('form')),
        (n = y('input')),
        m(n, 'placeholder', 'Add new task...'),
        m(n, 'class', 'svelte-12biwcu')
    },
    m(c, s) {
      _(c, t, s),
        h(t, n),
        z(n, o[0]),
        e || ((r = [k(n, 'input', o[2]), k(t, 'submit', lt(o[1]))]), (e = !0))
    },
    p(c, [s]) {
      s & 1 && n.value !== c[0] && z(n, c[0])
    },
    i: l,
    o: l,
    d(c) {
      c && p(t), (e = !1), M(r)
    },
  }
}
var B = ''
function ft(o, t, n) {
  let e = B,
    r = () => {
      f.add(e), n(0, (e = B))
    }
  function c() {
    ;(e = this.value), n(0, e)
  }
  return [e, r, c]
}
var I = class extends g {
    constructor(t) {
      super()
      b(this, t, ft, at, d, {})
    }
  },
  V = I
R()
function Y(o, t, n) {
  let e = o.slice()
  return (e[3] = t[n].id), (e[4] = t[n].text), (e[5] = t[n].done), e
}
function G(o) {
  let t,
    n = o[4] + '',
    e,
    r,
    c,
    s
  return {
    c() {
      ;(t = y('li')),
        (e = $(n)),
        m(t, 'data-id', (r = o[3])),
        m(t, 'class', 'svelte-corox1'),
        W(t, 'done', o[5])
    },
    m(i, u) {
      _(i, t, u), h(t, e), c || ((s = k(t, 'dblclick', o[1])), (c = !0))
    },
    p(i, u) {
      u & 1 && n !== (n = i[4] + '') && x(e, n),
        u & 1 && r !== (r = i[3]) && m(t, 'data-id', r),
        u & 1 && W(t, 'done', i[5])
    },
    d(i) {
      i && p(t), (c = !1), s()
    },
  }
}
function pt(o) {
  let t,
    n = o[0],
    e = []
  for (let r = 0; r < n.length; r += 1) e[r] = G(Y(o, n, r))
  return {
    c() {
      t = y('ul')
      for (let r = 0; r < e.length; r += 1) e[r].c()
    },
    m(r, c) {
      _(r, t, c)
      for (let s = 0; s < e.length; s += 1) e[s].m(t, null)
    },
    p(r, [c]) {
      if (c & 3) {
        n = r[0]
        let s
        for (s = 0; s < n.length; s += 1) {
          let i = Y(r, n, s)
          e[s] ? e[s].p(i, c) : ((e[s] = G(i)), e[s].c(), e[s].m(t, null))
        }
        for (; s < e.length; s += 1) e[s].d(1)
        e.length = n.length
      }
    },
    i: l,
    o: l,
    d(r) {
      r && p(t), dt(e, r)
    },
  }
}
function _t(o, t, n) {
  let e
  w(o, f, (s) => n(2, (e = s)))
  let r = [],
    c = (s) => f.toggle(s.target.dataset.id)
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 4) {
        t: n(0, (r = e.todos))
      }
    }),
    [r, c, e]
  )
}
var J = class extends g {
    constructor(t) {
      super()
      b(this, t, _t, pt, d, {})
    }
  },
  K = J
U()
function ht(o) {
  let t, n, e, r, c
  return {
    c() {
      ;(t = y('footer')),
        (n = $('Done: ')),
        (e = $(o[1])),
        (r = $(' / ')),
        (c = $(o[0])),
        m(t, 'class', 'svelte-1o8cxar')
    },
    m(s, i) {
      _(s, t, i), h(t, n), h(t, e), h(t, r), h(t, c)
    },
    p(s, [i]) {
      i & 2 && x(e, s[1]), i & 1 && x(c, s[0])
    },
    i: l,
    o: l,
    d(s) {
      s && p(t)
    },
  }
}
function mt(o, t, n) {
  let e
  w(o, f, (s) => n(2, (e = s)))
  let r = 0,
    c = 0
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 4) {
        t: n(0, (r = e.todos.length))
      }
      if (o.$$.dirty & 4) {
        t: n(1, (c = e.todos.filter((s) => s.done).length))
      }
    }),
    [r, c, e]
  )
}
var Z = class extends g {
    constructor(t) {
      super()
      b(this, t, mt, ht, d, {})
    }
  },
  tt = Z
X()
function gt(o) {
  let t, n, e, r, c, s
  return (
    (t = new V({})),
    (e = new K({})),
    (c = new tt({})),
    {
      c() {
        E(t.$$.fragment), (n = et()), E(e.$$.fragment), (r = et()), E(c.$$.fragment)
      },
      m(i, u) {
        O(t, i, u), _(i, n, u), O(e, i, u), _(i, r, u), O(c, i, u), (s = !0)
      },
      p: l,
      i(i) {
        s || (C(t.$$.fragment, i), C(e.$$.fragment, i), C(c.$$.fragment, i), (s = !0))
      },
      o(i) {
        D(t.$$.fragment, i), D(e.$$.fragment, i), D(c.$$.fragment, i), (s = !1)
      },
      d(i) {
        j(t, i), i && p(n), j(e, i), i && p(r), j(c, i)
      },
    }
  )
}
var nt = class extends g {
    constructor(t) {
      super()
      b(this, t, null, gt, d, {})
    }
  },
  ot = nt
A.debug('Stores script started!')
Ft('../store.js', S)
bt({
  container: document.querySelector('#stores .uce'),
  on(o) {
    yt(`components/${o}.uce`)
      .then((t) => t.text())
      .then((t) => {
        let n = $t(t)
        A.debug('Stent Loader just loaded', `<${o}>`, n), document.body.appendChild(n)
      })
  },
})
var vt = new ot({ target: document.querySelector('#stores .svelte') })
vt && A.debug('Svelte w/ Stores working fine')
//# sourceMappingURL=main-stores.js.map
