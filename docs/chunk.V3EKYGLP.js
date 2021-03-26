import { a as it, b as A, c as b } from './chunk.LYWHNSVE.js'
var E = /([^\s\\>"'=]+)\s*=\s*(['"]?)$/,
  X = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,
  Y = /<[a-z][^>]+$/i,
  Z = />[^<>]*$/,
  V = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,
  tt = /\s+$/,
  T = (t, e) => 0 < e-- && (Y.test(t[e]) || (!Z.test(t[e]) && T(t, e))),
  et = (t, e, r) => (X.test(e) ? t : `<${e}${r.replace(tt, '')}></${e}>`),
  L = (t, e, r) => {
    let n = [],
      { length: i } = t
    for (let l = 1; l < i; l++) {
      let a = t[l - 1]
      n.push(
        E.test(a) && T(t, l)
          ? a.replace(E, (c, s, f) => `${e}${l - 1}=${f || '"'}${s}${f ? '' : '"'}`)
          : `${a}<!--${e}${l - 1}-->`
      )
    }
    n.push(t[i - 1])
    let o = n.join('').trim()
    return r ? o : o.replace(V, et)
  }
var { isArray: p } = Array
var rt = 1,
  S = 111,
  nt = ({ firstChild: t, lastChild: e }) => {
    let r = document.createRange()
    return r.setStartAfter(t), r.setEndAfter(e), r.deleteContents(), t
  },
  M = (t, e) =>
    t.nodeType === S
      ? 1 / e < 0
        ? e
          ? nt(t)
          : t.lastChild
        : e
        ? t.valueOf()
        : t.firstChild
      : t,
  k = (t) => {
    let { childNodes: e } = t,
      { length: r } = e
    if (r < 2) return r ? e[0] : t
    let n = A.call(e, 0),
      i = n[0],
      o = n[r - 1]
    return {
      ELEMENT_NODE: rt,
      nodeType: S,
      firstChild: i,
      lastChild: o,
      valueOf() {
        if (e.length !== r) {
          let l = 0
          for (; l < r; ) t.appendChild(n[l++])
        }
        return t
      },
    }
  }
var O = (t, e, r, n, i) => {
  let o = r.length,
    l = e.length,
    a = o,
    c = 0,
    s = 0,
    f = null
  for (; c < l || s < a; )
    if (l === c) {
      let u = a < o ? (s ? n(r[s - 1], -0).nextSibling : n(r[a - s], 0)) : i
      for (; s < a; ) t.insertBefore(n(r[s++], 1), u)
    } else if (a === s)
      for (; c < l; ) (!f || !f.has(e[c])) && t.removeChild(n(e[c], -1)), c++
    else if (e[c] === r[s]) c++, s++
    else if (e[l - 1] === r[a - 1]) l--, a--
    else if (e[c] === r[a - 1] && r[s] === e[l - 1]) {
      let u = n(e[--l], -1).nextSibling
      t.insertBefore(n(r[s++], 1), n(e[c++], -1).nextSibling),
        t.insertBefore(n(r[--a], 1), u),
        (e[l] = r[a])
    } else {
      if (!f) {
        f = new Map()
        let u = s
        for (; u < a; ) f.set(r[u], u++)
      }
      if (f.has(e[c])) {
        let u = f.get(e[c])
        if (s < u && u < a) {
          let h = c,
            C = 1
          for (; ++h < l && h < a && f.get(e[h]) === u + C; ) C++
          if (C > u - s) {
            let Q = n(e[c], 0)
            for (; s < u; ) t.insertBefore(n(r[s++], 1), Q)
          } else t.replaceChild(n(r[s++], 1), n(e[c++], -1))
        } else c++
      } else t.removeChild(n(e[c++], -1))
    }
  return r
}
var j = (t) => (e) => {
    for (let r in e) {
      let n = r === 'role' ? r : `aria-${r}`,
        i = e[r]
      i == null ? t.removeAttribute(n) : t.setAttribute(n, i)
    }
  },
  w = (t, e) => {
    let r,
      n = !0,
      i = document.createAttributeNS(null, e)
    return (o) => {
      r !== o &&
        ((r = o),
        r == null
          ? n || (t.removeAttributeNode(i), (n = !0))
          : ((i.value = o), n && (t.setAttributeNodeNS(i), (n = !1))))
    }
  },
  H = (t, e, r) => (n) => {
    r !== !!n && ((r = !!n) ? t.setAttribute(e, '') : t.removeAttribute(e))
  },
  ot = ({ dataset: t }) => (e) => {
    for (let r in e) {
      let n = e[r]
      n == null ? delete t[r] : (t[r] = n)
    }
  },
  W = (t, e) => {
    let r,
      n = e.slice(2)
    return (
      !(e in t) && e.toLowerCase() in t && (n = n.toLowerCase()),
      (i) => {
        let o = p(i) ? i : [i, !1]
        r !== o[0] &&
          (r && t.removeEventListener(n, r, o[1]),
          (r = o[0]) && t.addEventListener(n, r, o[1]))
      }
    )
  },
  P = (t) => {
    let e
    return (r) => {
      e !== r && ((e = r), typeof r == 'function' ? r(t) : (r.current = t))
    }
  },
  _ = (t, e) =>
    e === 'dataset'
      ? ot(t)
      : (r) => {
          t[e] = r
        },
  B = (t) => {
    let e
    return (r) => {
      e != r && ((e = r), (t.textContent = r == null ? '' : r))
    }
  }
var st = (function (t) {
    'use strict'
    var e = 'fragment',
      r = 'template',
      n = 'content' in l(r),
      i = n
        ? function (c) {
            var s = l(r)
            return (s.innerHTML = c), s.content
          }
        : function (c) {
            var s = l(e),
              f = l(r),
              u = null
            if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(c)) {
              var h = RegExp.$1
              ;(f.innerHTML = '<table>' + c + '</table>'), (u = f.querySelectorAll(h))
            } else (f.innerHTML = c), (u = f.childNodes)
            return o(s, u), s
          }
    return function (s, f) {
      return (f === 'svg' ? a : i)(s)
    }
    function o(c, s) {
      for (var f = s.length; f--; ) c.appendChild(s[0])
    }
    function l(c) {
      return c === e
        ? t.createDocumentFragment()
        : t.createElementNS('http://www.w3.org/1999/xhtml', c)
    }
    function a(c) {
      var s = l(e),
        f = l('div')
      return (
        (f.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + c + '</svg>'),
        o(s, f.firstChild.childNodes),
        s
      )
    }
  })(document),
  N = st
var F = ({ childNodes: t }, e) => t[e],
  v = (t) => {
    let e = [],
      { parentNode: r } = t
    for (; r; ) e.push(it.call(r.childNodes, t)), (t = r), (r = t.parentNode)
    return e
  },
  { createTreeWalker: R, importNode: y } = document
var z = y.length != 1,
  D = z ? (t, e, r) => y.call(document, N(t, e, r), !0) : N,
  q = z
    ? (t) => R.call(document, t, 1 | 128, null, !1)
    : (t) => R.call(document, t, 1 | 128)
var m = (t, e, r) => O(t.parentNode, e, r, M, t),
  ct = (t) => {
    let e,
      r,
      n = [],
      i = (o) => {
        switch (typeof o) {
          case 'string':
          case 'number':
          case 'boolean':
            e !== o &&
              ((e = o),
              r || (r = document.createTextNode('')),
              (r.data = o),
              (n = m(t, n, [r])))
            break
          case 'object':
          case 'undefined':
            if (o == null) {
              e != o && ((e = o), (n = m(t, n, [])))
              break
            }
            if (p(o)) {
              ;(e = o),
                o.length === 0
                  ? (n = m(t, n, []))
                  : typeof o[0] == 'object'
                  ? (n = m(t, n, o))
                  : i(String(o))
              break
            }
            e !== o &&
              'ELEMENT_NODE' in o &&
              ((e = o), (n = m(t, n, o.nodeType === 11 ? A.call(o.childNodes) : [o])))
            break
          case 'function':
            i(o(t))
            break
        }
      }
    return i
  },
  lt = (t, e) => {
    switch (e[0]) {
      case '?':
        return H(t, e.slice(1), !1)
      case '.':
        return _(t, e.slice(1))
      case 'o':
        if (e[1] === 'n') return W(t, e)
    }
    switch (e) {
      case 'ref':
        return P(t)
      case 'aria':
        return j(t)
    }
    return w(t, e)
  }
function G(t) {
  let { type: e, path: r } = t,
    n = r.reduceRight(F, this)
  return e === 'node' ? ct(n) : e === 'attr' ? lt(n, t.name) : B(n)
}
var x = 'is\xB5',
  I = b(new WeakMap()),
  at = /^(?:plaintext|script|style|textarea|title|xmp)$/i,
  d = () => ({ stack: [], entry: null, wire: null }),
  ut = (t, e) => {
    let { content: r, updates: n } = ft(t, e)
    return { type: t, template: e, content: r, updates: n, wire: null }
  },
  pt = (t, e) => {
    let r = L(e, x, t === 'svg'),
      n = D(r, t),
      i = q(n),
      o = [],
      l = e.length - 1,
      a = 0,
      c = `${x}${a}`
    for (; a < l; ) {
      let s = i.nextNode()
      if (!s) throw `bad template: ${r}`
      if (s.nodeType === 8)
        s.data === c && (o.push({ type: 'node', path: v(s) }), (c = `${x}${++a}`))
      else {
        for (; s.hasAttribute(c); )
          o.push({ type: 'attr', path: v(s), name: s.getAttribute(c) }),
            s.removeAttribute(c),
            (c = `${x}${++a}`)
        at.test(s.tagName) &&
          s.textContent.trim() === `<!--${c}-->` &&
          ((s.textContent = ''),
          o.push({ type: 'text', path: v(s) }),
          (c = `${x}${++a}`))
      }
    }
    return { content: n, nodes: o }
  },
  ft = (t, e) => {
    let { content: r, nodes: n } = I.get(e) || I.set(e, pt(t, e)),
      i = y.call(document, r, !0),
      o = n.map(G, i)
    return { content: i, updates: o }
  },
  g = (t, { type: e, template: r, values: n }) => {
    let { length: i } = n
    U(t, n, i)
    let { entry: o } = t
    ;(!o || o.template !== r || o.type !== e) && (t.entry = o = ut(e, r))
    let { content: l, updates: a, wire: c } = o
    for (let s = 0; s < i; s++) a[s](n[s])
    return c || (o.wire = k(l))
  },
  U = ({ stack: t }, e, r) => {
    for (let n = 0; n < r; n++) {
      let i = e[n]
      i instanceof $
        ? (e[n] = g(t[n] || (t[n] = d()), i))
        : p(i)
        ? U(t[n] || (t[n] = d()), i, i.length)
        : (t[n] = null)
    }
    r < t.length && t.splice(r)
  }
function $(t, e, r) {
  ;(this.type = t), (this.template = e), (this.values = r)
}
var { create: dt, defineProperties: ht } = Object,
  J = (t) => {
    let e = b(new WeakMap()),
      r = (n) => (i, ...o) => g(n, { type: t, template: i, values: o })
    return ht((n, ...i) => new $(t, n, i), {
      for: {
        value(n, i) {
          let o = e.get(n) || e.set(n, dt(null))
          return o[i] || (o[i] = r(d()))
        },
      },
      node: {
        value: (n, ...i) => g(d(), { type: t, template: n, values: i }).valueOf(),
      },
    })
  },
  K = b(new WeakMap()),
  Dt = (t, e) => {
    let r = typeof e == 'function' ? e() : e,
      n = K.get(t) || K.set(t, d()),
      i = r instanceof $ ? g(n, r) : r
    return (
      i !== n.wire && ((n.wire = i), (t.textContent = ''), t.appendChild(i.valueOf())),
      t
    )
  },
  qt = J('html'),
  Gt = J('svg')
export { Dt as a, qt as b, Gt as c, N as d }
/*! (c) Andrea Giammarchi - ISC */
//# sourceMappingURL=chunk.DZKZF776.js.map