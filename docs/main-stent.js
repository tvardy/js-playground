import { a as Kn } from './chunk.JYENW4NQ.js'
import {
  A as ft,
  B as Rt,
  C as ye,
  D as Me,
  E as Ae,
  F as De,
  G as he,
  H as C,
  I as N,
  a as Bn,
  b as at,
  c as S,
  e as or,
  f as zn,
  g as ar,
  h as Oe,
  i as p,
  j as Xn,
  k as br,
  l as Se,
  m as L,
  n as ur,
  o as ir,
  p as M,
  q as y,
  r as D,
  s as kn,
  t as g,
  u as b,
  v as Ot,
  w as te,
  x as Jn,
  y as O,
  z as ne,
} from './chunk.F4HWMIJO.js'
var A = p((E) => {
  'use strict'
  E.__esModule = !0
  var Nt =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          },
    lr = (E.ERROR_MISSING_MACHINE = function (t) {
      return "There's no machine with name " + t
    }),
    fr = (E.ERROR_MISSING_STATE = 'Configuration error: missing initial "state"'),
    dr = (E.ERROR_MISSING_TRANSITIONS = 'Configuration error: missing "transitions"'),
    cr = (E.ERROR_WRONG_STATE_FORMAT = function (t) {
      var n =
        (typeof t == 'undefined' ? 'undefined' : Nt(t)) === 'object'
          ? JSON.stringify(t, null, 2)
          : t
      return (
        'The state should be an object and it should always have at least "name" property. You passed ' +
        n
      )
    }),
    Er = (E.ERROR_UNCOVERED_STATE = function (t) {
      return (
        'You just transitioned the machine to a state (' +
        t +
        ') which is not defined or it has no actions. This means that the machine is stuck.'
      )
    }),
    _r = (E.ERROR_NOT_SUPPORTED_HANDLER_TYPE =
      'Wrong handler type passed. Please read the docs https://github.com/krasimir/stent'),
    pr = (E.ERROR_RESERVED_WORD_USED_AS_ACTION = function (t) {
      return "Sorry, you can't use " + t + ' as a name for an action. It is reserved.'
    }),
    Rr = (E.ERROR_GENERATOR_FUNC_CALL_FAILED = function (t) {
      return 'The argument passed to `call` is falsy (' + t + ')'
    }),
    mr = (E.MIDDLEWARE_PROCESS_ACTION = 'onActionDispatched'),
    vr = (E.MIDDLEWARE_ACTION_PROCESSED = 'onActionProcessed'),
    Sr = (E.MIDDLEWARE_STATE_WILL_CHANGE = 'onStateWillChange'),
    Ar = (E.MIDDLEWARE_PROCESS_STATE_CHANGE = 'onStateChanged'),
    hr = (E.MIDDLEWARE_GENERATOR_STEP = 'onGeneratorStep'),
    Dr = (E.MIDDLEWARE_GENERATOR_END = 'onGeneratorEnd'),
    yr = (E.MIDDLEWARE_GENERATOR_RESUMED = 'onGeneratorResumed'),
    Mr = (E.MIDDLEWARE_MACHINE_CREATED = 'onMachineCreated'),
    Or = (E.MIDDLEWARE_MACHINE_CONNECTED = 'onMachineConnected'),
    Ir = (E.MIDDLEWARE_MACHINE_DISCONNECTED = 'onMachineDisconnected'),
    Tr = (E.MIDDLEWARE_REGISTERED = 'onMiddlewareRegister'),
    Nr = (E.DEVTOOLS_KEY = '__hello__stent__')
})
var ge = p((P, Ne) => {
  'use strict'
  P.__esModule = !0
  var gt =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            typeof Symbol == 'function' &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        }
  P.default = Ct
  var Lt = A()
  function Ct(e) {
    if (
      e &&
      (typeof e == 'undefined' ? 'undefined' : gt(e)) === 'object' &&
      typeof e.name != 'undefined'
    )
      return e
    throw new Error((0, Lt.ERROR_WRONG_STATE_FORMAT)(e))
  }
  Ne.exports = P.default
})
var Le = p((U, Ce) => {
  'use strict'
  U.__esModule = !0
  U.default = wt
  function wt(e) {
    var t
    for (t in e) if (e.hasOwnProperty(t)) return !1
    return !0
  }
  Ce.exports = U.default
})
var w = p((H, we) => {
  'use strict'
  H.__esModule = !0
  H.default = Wt
  var Gt = x()
  function Wt(e, t) {
    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      r[o - 2] = arguments[o]
    var a = Gt.Machine.middlewares
    if (a.length !== 0) {
      var i = function (s, c) {
        return s < a.length - 1 ? c(s + 1) : null
      }
      ;(function u(s) {
        var c = a[s]
        c && typeof c[e] != 'undefined' && c[e].apply(t, r), i(s, u)
      })(0)
    }
  }
  we.exports = H.default
})
var ae = p((F, We) => {
  'use strict'
  F.__esModule = !0
  F.default = qt
  var bt = ge(),
    Pt = re(bt),
    Ut = Le(),
    Ht = re(Ut),
    xt = w(),
    Ge = re(xt),
    oe = A()
  function re(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function qt(e, t) {
    var n
    if (typeof t != 'undefined') {
      if (
        (typeof t == 'string' || typeof t == 'number'
          ? (n = { name: t.toString() })
          : (n = (0, Pt.default)(t)),
        typeof e.transitions[n.name] == 'undefined' ||
          (0, Ht.default)(e.transitions[n.name]))
      )
        throw new Error((0, oe.ERROR_UNCOVERED_STATE)(n.name))
      ;(0, Ge.default)(oe.MIDDLEWARE_STATE_WILL_CHANGE, e),
        (e.state = n),
        (0, Ge.default)(oe.MIDDLEWARE_PROCESS_STATE_CHANGE, e)
    }
  }
  We.exports = F.default
})
var He = p(($, qe) => {
  'use strict'
  $.__esModule = !0
  var be =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            typeof Symbol == 'function' &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        }
  $.default = Pe
  var Ft = w(),
    h = Ue(Ft),
    v = A(),
    $t = ae(),
    Vt = Ue($t)
  function Ue(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function Pe(e, t, n, r) {
    var o = function (f, d) {
        return !u && f.next(d)
      },
      a = function (f, d) {
        return !u && f.throw(d)
      },
      i = function () {
        s && s(), (u = !0)
      },
      u = !1,
      s,
      c = function l(f) {
        if (!u)
          if (f.done) (0, h.default)(v.MIDDLEWARE_GENERATOR_END, e, f.value), n(f.value)
          else if (
            ((0, h.default)(v.MIDDLEWARE_GENERATOR_STEP, e, f.value),
            be(f.value) === 'object' && f.value.__type === 'call')
          ) {
            var d = f.value,
              _ = d.func,
              Ie = d.args
            if (!_) {
              var Te = (0, v.ERROR_GENERATOR_FUNC_CALL_FAILED)(
                typeof _ == 'undefined' ? 'undefined' : be(_)
              )
              return (
                (0, h.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e, Te),
                l(a(t, new Error(Te)))
              )
            }
            try {
              var I = _.apply(void 0, Ie)
              if (!I) {
                ;(0, h.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e), l(o(t))
                return
              }
              if (typeof I.then != 'undefined')
                I.then(
                  function (m) {
                    return (
                      (0, h.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e, m), l(o(t, m))
                    )
                  },
                  function (m) {
                    return (
                      (0, h.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e, m), l(a(t, m))
                    )
                  }
                )
              else if (typeof I.next == 'function')
                try {
                  s = Pe(e, I, function (m) {
                    ;(0, h.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e, m), l(o(t, m))
                  })
                } catch (m) {
                  return l(a(t, m))
                }
              else (0, h.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e, I), l(o(t, I))
            } catch (m) {
              return l(a(t, m))
            }
          } else
            (0, Vt.default)(e, f.value),
              (0, h.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e),
              l(o(t))
      }
    return c(o(t, r)), i
  }
  qe.exports = $.default
})
var se = p((V, xe) => {
  'use strict'
  V.__esModule = !0
  var Yt =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          },
    Kt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }
  V.default = zt
  var Y = A(),
    Bt = ae(),
    K = ue(Bt),
    Jt = w(),
    ie = ue(Jt),
    Xt = He(),
    Qt = ue(Xt)
  function ue(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function zt(e, t) {
    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      r[o - 2] = arguments[o]
    var a = e.state,
      i = e.transitions
    if (!i[a.name]) return !1
    var u = i[a.name][t]
    if (typeof u == 'undefined') return !1
    if (
      (ie.default.apply(void 0, [Y.MIDDLEWARE_PROCESS_ACTION, e, t].concat(r)),
      typeof u == 'string')
    )
      (0, K.default)(e, Kt({}, a, { name: i[a.name][t] }))
    else if ((typeof u == 'undefined' ? 'undefined' : Yt(u)) === 'object')
      (0, K.default)(e, u)
    else if (typeof u == 'function') {
      var s,
        c = (s = i[a.name])[t].apply(s, [e].concat(r))
      if (c && typeof c.next == 'function') {
        var l = c
        return (0, Qt.default)(e, l, function (f) {
          ;(0, K.default)(e, f),
            ie.default.apply(void 0, [Y.MIDDLEWARE_ACTION_PROCESSED, e, t].concat(r))
        })
      } else (0, K.default)(e, c)
    } else throw new Error(Y.ERROR_NOT_SUPPORTED_HANDLER_TYPE)
    ie.default.apply(void 0, [Y.MIDDLEWARE_ACTION_PROCESSED, e, t].concat(r))
  }
  xe.exports = V.default
})
var $e = p((z, Fe) => {
  'use strict'
  z.__esModule = !0
  z.default = Zt
  var kt = se(),
    en = jt(kt)
  function jt(e) {
    return e && e.__esModule ? e : { default: e }
  }
  var le = {}
  function Zt(e, t) {
    le[t] && le[t]()
    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      r[o - 2] = arguments[o]
    le[t] = en.default.apply(void 0, [e, t].concat(r))
  }
  Fe.exports = z.default
})
var Ye = p((B, Ve) => {
  'use strict'
  B.__esModule = !0
  var fe =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            typeof Symbol == 'function' &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        }
  B.default = tn
  var de = A()
  function tn(e) {
    if ((typeof e == 'undefined' ? 'undefined' : fe(e)) !== 'object')
      throw new Error(de.ERROR_MISSING_STATE)
    var t = e.state,
      n = e.transitions
    if ((typeof t == 'undefined' ? 'undefined' : fe(t)) !== 'object')
      throw new Error(de.ERROR_MISSING_STATE)
    if ((typeof n == 'undefined' ? 'undefined' : fe(n)) !== 'object')
      throw new Error(de.ERROR_MISSING_TRANSITIONS)
    return !0
  }
  Ve.exports = B.default
})
var ze = p((J, Ke) => {
  'use strict'
  J.__esModule = !0
  var nn = /^[\W_]+/,
    rn = /[\W_]+/g
  J.default = function (e) {
    return e
      .replace(nn, '')
      .split(rn)
      .reduce(function (t, n, r) {
        return (
          r === 0
            ? (n = n.charAt(0).toLowerCase() + n.substr(1))
            : (n = n.charAt(0).toUpperCase() + n.substr(1)),
          (t += n),
          t
        )
      }, '')
  }
  Ke.exports = J.default
})
var Je = p((X, Be) => {
  'use strict'
  X.__esModule = !0
  X.default = on
  var an = ze(),
    ce = un(an),
    sn = A()
  function un(e) {
    return e && e.__esModule ? e : { default: e }
  }
  var ln = ['name', 'transitions', 'state', 'destroy']
  function on(e, t, n, r) {
    for (var o in t) {
      ;(function (s) {
        e[(0, ce.default)('is ' + s)] = function () {
          return e.state.name === s
        }
      })(o)
      for (var a in t[o]) {
        var i = (0, ce.default)(a),
          u = (0, ce.default)('is ' + a + ' allowed')
        if (ln.indexOf(i) >= 0)
          throw new Error((0, sn.ERROR_RESERVED_WORD_USED_AS_ACTION)(i))
        ;(function (s, c, l) {
          ;(e[s] = function () {
            for (var f = arguments.length, d = Array(f), _ = 0; _ < f; _++)
              d[_] = arguments[_]
            return n.apply(void 0, [l].concat(d))
          }),
            (e[s].latest = function () {
              for (var f = arguments.length, d = Array(f), _ = 0; _ < f; _++)
                d[_] = arguments[_]
              return r.apply(void 0, [l].concat(d))
            }),
            (e[c] = function () {
              return !t[e.state.name] || typeof t[e.state.name][l] != 'undefined'
            })
        })(i, u, a)
      }
    }
  }
  Be.exports = X.default
})
var Ze = p((Q, Xe) => {
  'use strict'
  Q.__esModule = !0
  var fn =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            typeof Symbol == 'function' &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        }
  Q.default = dn
  var cn = se(),
    En = Z(cn),
    _n = $e(),
    pn = Z(_n),
    Rn = Ye(),
    mn = Z(Rn),
    vn = Je(),
    Sn = Z(vn)
  function Z(e) {
    return e && e.__esModule ? e : { default: e }
  }
  var An = 0,
    Qe = function () {
      return '_@@@' + ++An
    }
  function dn(e, t) {
    ;(typeof e == 'undefined' ? 'undefined' : fn(e)) === 'object' &&
      (typeof t == 'undefined'
        ? ((t = e), (e = Qe()))
        : ((t = { state: e, transitions: t }), (e = Qe())))
    var n = { name: e }
    ;(0, mn.default)(t)
    var r = t,
      o = r.state,
      a = r.transitions,
      i = function (c) {
        for (var l = arguments.length, f = Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
          f[d - 1] = arguments[d]
        return En.default.apply(void 0, [n, c].concat(f))
      },
      u = function (c) {
        for (var l = arguments.length, f = Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
          f[d - 1] = arguments[d]
        return pn.default.apply(void 0, [n, c].concat(f))
      }
    return (n.state = o), (n.transitions = a), (0, Sn.default)(n, a, i, u), n
  }
  Xe.exports = Q.default
})
var pe = p((W) => {
  'use strict'
  W.__esModule = !0
  W.flush = hn
  W.getMapping = Dn
  W.destroy = yn
  W.default = Mn
  var ke = x(),
    On = w(),
    Ee = In(On),
    _e = A()
  function In(e) {
    return e && e.__esModule ? e : { default: e }
  }
  var Tn = 0,
    R = null,
    Nn = function () {
      return 'm' + ++Tn
    },
    gn = function () {
      R === null &&
        ((R = {}),
        ke.Machine.addMiddleware({
          onStateChanged: function () {
            for (var n in R) {
              var r = R[n],
                o = r.done,
                a = r.machines
              a
                .map(function (i) {
                  return i.name
                })
                .indexOf(this.name) >= 0 &&
                o &&
                o.apply(void 0, a)
            }
          },
        }))
    }
  function hn() {
    R = null
  }
  function Dn() {
    return R
  }
  function yn(e) {
    for (var t in R)
      (R[t].machines = R[t].machines.filter(function (n) {
        var r = n.name
        return r !== e
      })),
        (0, Ee.default)(_e.MIDDLEWARE_MACHINE_DISCONNECTED, null, R[t].machines),
        R[t].machines.length === 0 && delete R[t]
  }
  function Mn() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.meta
    gn()
    var n = function () {
      for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
        a[i] = arguments[i]
      var u = a.map(function (c) {
          return ke.Machine.get(c)
        }),
        s = function (l, f, d) {
          var _ = Nn()
          return (
            !f && (R[_] = { done: l, machines: u }),
            !d && l && l.apply(void 0, u),
            function () {
              ;(0, Ee.default)(_e.MIDDLEWARE_MACHINE_DISCONNECTED, null, u, t),
                R && R[_] && delete R[_]
            }
          )
        }
      return (
        (0, Ee.default)(_e.MIDDLEWARE_MACHINE_CONNECTED, null, u, t),
        {
          map: s,
          mapOnce: function (l) {
            return s(l, !0)
          },
          mapSilent: function (l) {
            return s(l, !1, !0)
          },
        }
      )
    }
    return { with: n }
  }
})
var Re = p((k, je) => {
  'use strict'
  k.__esModule = !0
  k.default = Cn
  function Cn(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    return { __type: 'call', func: e, args: n }
  }
  je.exports = k.default
})
var x = p((j) => {
  'use strict'
  j.__esModule = !0
  j.Machine = void 0
  var Ln =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          },
    wn = Ze(),
    Wn = ee(wn),
    G = A(),
    me = pe(),
    Gn = ee(me),
    qn = Re(),
    bn = ee(qn),
    Pn = w(),
    Un = ee(Pn)
  function ee(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function Hn(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  var xn = (function () {
      function e() {
        Hn(this, e),
          (this.machines = {}),
          (this.middlewares = []),
          (this.connect = Gn.default),
          (this.call = bn.default)
      }
      return (
        (e.prototype.create = function (n, r) {
          var o = this,
            a = (0, Wn.default)(n, r, this.middlewares)
          return (
            (this.machines[a.name] = a),
            (0, Un.default)(G.MIDDLEWARE_MACHINE_CREATED, a, a),
            (a.destroy = function () {
              return o.destroy(a)
            }),
            a
          )
        }),
        (e.prototype.get = function (n) {
          if (
            ((typeof n == 'undefined' ? 'undefined' : Ln(n)) === 'object' &&
              (n = n.name),
            this.machines[n])
          )
            return this.machines[n]
          throw new Error((0, G.ERROR_MISSING_MACHINE)(n))
        }),
        (e.prototype.flush = function () {
          ;(this.machines = {}), (this.middlewares = []), (0, me.flush)()
        }),
        (e.prototype.addMiddleware = function (n) {
          Array.isArray(n)
            ? (this.middlewares = this.middlewares.concat(n))
            : this.middlewares.push(n),
            n.__initialize && n.__initialize(this),
            n[G.MIDDLEWARE_REGISTERED] && n[G.MIDDLEWARE_REGISTERED]()
        }),
        (e.prototype.destroy = function (n) {
          var r = n
          if (typeof n == 'string' && ((r = this.machines[n]), !r))
            throw new Error((0, G.ERROR_MISSING_MACHINE)(n))
          delete this.machines[r.name], (0, me.destroy)(r.name)
        }),
        e
      )
    })(),
    et = new xn()
  j.Machine = et
  typeof window != 'undefined' && (window[G.DEVTOOLS_KEY] = et)
})
var nt = p((q) => {
  'use strict'
  q.__esModule = !0
  q.connect = q.call = void 0
  var Fn = Re(),
    $n = tt(Fn),
    Vn = pe(),
    Yn = tt(Vn)
  function tt(e) {
    return e && e.__esModule ? e : { default: e }
  }
  q.call = $n.default
  q.connect = Yn.default
})
var lt = p((Pr, st) => {
  st.exports = {}
})
var pt = p((Fr, _t) => {
  _t.exports = {}
})
var Dt = p((Kr, ht) => {
  ht.exports = {}
})
var ve = {}
br(ve, { connect: () => T })
var rt = Kn(x()),
  ot = Kn(nt())
var ut = 'default',
  it = rt.Machine.create(
    { name: ut, ...Bn },
    {
      [ut]: {
        toggle({ state: e }, t) {
          return {
            ...e,
            todos: e.todos.map((n) => (n.id === t && (n.done = !n.done), n)),
          }
        },
        add({ state: e }, t) {
          return { ...e, todos: [{ text: t, done: !1, id: zn() }, ...e.todos] }
        },
      },
    }
  ),
  T = (e = at, t = at) => {
    ot
      .connect()
      .with(it.name)
      .map((n) => e(n.state)),
      t(it)
  }
function Qn(e) {
  let t, n, r, o
  return {
    c() {
      ;(t = g('form')),
        (n = g('input')),
        O(n, 'placeholder', 'Add new task...'),
        O(n, 'class', 'svelte-12biwcu')
    },
    m(a, i) {
      y(a, t, i),
        M(t, n),
        ft(n, e[0]),
        r ||
          ((o = [
            te(n, 'input', e[2]),
            te(
              t,
              'submit',
              Jn(function () {
                Se(e[1]) && e[1].apply(this, arguments)
              })
            ),
          ]),
          (r = !0))
    },
    p(a, [i]) {
      ;(e = a), i & 1 && n.value !== e[0] && ft(n, e[0])
    },
    i: S,
    o: S,
    d(a) {
      a && D(t), (r = !1), Xn(o)
    },
  }
}
var dt = ''
function Zn(e, t, n) {
  let r = void 0,
    o = dt,
    a
  function i({ add: s }) {
    n(
      1,
      (a = () => {
        s(o), n(0, (o = dt))
      })
    )
  }
  T(r, i)
  function u() {
    ;(o = this.value), n(0, o)
  }
  return [o, a, u]
}
var ct = class extends N {
    constructor(t) {
      super()
      C(this, t, Zn, Qn, L, {})
    }
  },
  Et = ct
lt()
function mt(e, t, n) {
  let r = e.slice()
  return (r[4] = t[n].id), (r[5] = t[n].text), (r[6] = t[n].done), r
}
function vt(e) {
  let t,
    n = e[5] + '',
    r,
    o,
    a,
    i
  return {
    c() {
      ;(t = g('li')),
        (r = b(n)),
        O(t, 'data-id', (o = e[4])),
        O(t, 'class', 'svelte-corox1'),
        Rt(t, 'done', e[6])
    },
    m(u, s) {
      y(u, t, s),
        M(t, r),
        a ||
          ((i = te(t, 'dblclick', function () {
            Se(e[1]) && e[1].apply(this, arguments)
          })),
          (a = !0))
    },
    p(u, s) {
      ;(e = u),
        s & 1 && n !== (n = e[5] + '') && ne(r, n),
        s & 1 && o !== (o = e[4]) && O(t, 'data-id', o),
        s & 1 && Rt(t, 'done', e[6])
    },
    d(u) {
      u && D(t), (a = !1), i()
    },
  }
}
function jn(e) {
  let t,
    n = e[0],
    r = []
  for (let o = 0; o < n.length; o += 1) r[o] = vt(mt(e, n, o))
  return {
    c() {
      t = g('ul')
      for (let o = 0; o < r.length; o += 1) r[o].c()
    },
    m(o, a) {
      y(o, t, a)
      for (let i = 0; i < r.length; i += 1) r[i].m(t, null)
    },
    p(o, [a]) {
      if (a & 3) {
        n = o[0]
        let i
        for (i = 0; i < n.length; i += 1) {
          let u = mt(o, n, i)
          r[i] ? r[i].p(u, a) : ((r[i] = vt(u)), r[i].c(), r[i].m(t, null))
        }
        for (; i < r.length; i += 1) r[i].d(1)
        r.length = n.length
      }
    },
    i: S,
    o: S,
    d(o) {
      o && D(t), kn(r, o)
    },
  }
}
function er(e, t, n) {
  let r = [],
    o = () => {}
  function a(u) {
    n(0, (r = u.todos))
  }
  function i({ toggle: u }) {
    n(1, (o = (s) => u(s.target.dataset.id)))
  }
  return T(a, i), [r, o]
}
var St = class extends N {
    constructor(t) {
      super()
      C(this, t, er, jn, L, {})
    }
  },
  At = St
pt()
function tr(e) {
  let t, n, r, o, a
  return {
    c() {
      ;(t = g('footer')),
        (n = b('Done: ')),
        (r = b(e[1])),
        (o = b(' / ')),
        (a = b(e[0])),
        O(t, 'class', 'svelte-1o8cxar')
    },
    m(i, u) {
      y(i, t, u), M(t, n), M(t, r), M(t, o), M(t, a)
    },
    p(i, [u]) {
      u & 2 && ne(r, i[1]), u & 1 && ne(a, i[0])
    },
    i: S,
    o: S,
    d(i) {
      i && D(t)
    },
  }
}
function nr(e, t, n) {
  let r = [],
    o = 0,
    a = 0
  function i(u) {
    n(2, (r = u.todos))
  }
  return (
    T(i),
    (e.$$.update = () => {
      if (e.$$.dirty & 4) {
        e: n(0, (o = r.length))
      }
      if (e.$$.dirty & 4) {
        e: n(1, (a = r.filter((u) => u.done).length))
      }
    }),
    [o, a, r]
  )
}
var yt = class extends N {
    constructor(t) {
      super()
      C(this, t, nr, tr, L, {})
    }
  },
  Mt = yt
Dt()
function rr(e) {
  let t, n, r, o, a, i
  return (
    (t = new Et({})),
    (r = new At({})),
    (a = new Mt({})),
    {
      c() {
        Ae(t.$$.fragment), (n = Ot()), Ae(r.$$.fragment), (o = Ot()), Ae(a.$$.fragment)
      },
      m(u, s) {
        De(t, u, s), y(u, n, s), De(r, u, s), y(u, o, s), De(a, u, s), (i = !0)
      },
      p: S,
      i(u) {
        i ||
          (ye(t.$$.fragment, u), ye(r.$$.fragment, u), ye(a.$$.fragment, u), (i = !0))
      },
      o(u) {
        Me(t.$$.fragment, u), Me(r.$$.fragment, u), Me(a.$$.fragment, u), (i = !1)
      },
      d(u) {
        he(t, u), u && D(n), he(r, u), u && D(o), he(a, u)
      },
    }
  )
}
var It = class extends N {
    constructor(t) {
      super()
      C(this, t, null, rr, L, {})
    }
  },
  Tt = It
Oe.debug('Stent script started!')
ur('../store-stent.js', ve)
ar({
  container: document.querySelector('#stent .uce'),
  on(e) {
    or(`components/${e}.uce`)
      .then((t) => t.text())
      .then((t) => {
        let n = ir(t)
        Oe.debug('Stent Loader just loaded', `<${e}>`, n), document.body.appendChild(n)
      })
  },
})
var sr = new Tt({ target: document.querySelector('#stent .svelte') })
sr && Oe.debug('Stent & Svelte working fine')
//# sourceMappingURL=main-stent.js.map
