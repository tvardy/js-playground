import { a as ar } from './chunk.4566A7FO.js'
import {
  a as ur,
  b as be,
  e as or,
  f as fr,
  g as p,
  h as Ur,
  j as sr,
} from './chunk.JMLVMVYF.js'
var A = p((E) => {
  'use strict'
  E.__esModule = !0
  var Ve =
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
    dr = (E.ERROR_MISSING_STATE = 'Configuration error: missing initial "state"'),
    Er = (E.ERROR_MISSING_TRANSITIONS = 'Configuration error: missing "transitions"'),
    _r = (E.ERROR_WRONG_STATE_FORMAT = function (t) {
      var r =
        (typeof t == 'undefined' ? 'undefined' : Ve(t)) === 'object'
          ? JSON.stringify(t, null, 2)
          : t
      return (
        'The state should be an object and it should always have at least "name" property. You passed ' +
        r
      )
    }),
    cr = (E.ERROR_UNCOVERED_STATE = function (t) {
      return (
        'You just transitioned the machine to a state (' +
        t +
        ') which is not defined or it has no actions. This means that the machine is stuck.'
      )
    }),
    Rr = (E.ERROR_NOT_SUPPORTED_HANDLER_TYPE =
      'Wrong handler type passed. Please read the docs https://github.com/krasimir/stent'),
    pr = (E.ERROR_RESERVED_WORD_USED_AS_ACTION = function (t) {
      return "Sorry, you can't use " + t + ' as a name for an action. It is reserved.'
    }),
    Sr = (E.ERROR_GENERATOR_FUNC_CALL_FAILED = function (t) {
      return 'The argument passed to `call` is falsy (' + t + ')'
    }),
    vr = (E.MIDDLEWARE_PROCESS_ACTION = 'onActionDispatched'),
    Ar = (E.MIDDLEWARE_ACTION_PROCESSED = 'onActionProcessed'),
    Dr = (E.MIDDLEWARE_STATE_WILL_CHANGE = 'onStateWillChange'),
    Mr = (E.MIDDLEWARE_PROCESS_STATE_CHANGE = 'onStateChanged'),
    yr = (E.MIDDLEWARE_GENERATOR_STEP = 'onGeneratorStep'),
    hr = (E.MIDDLEWARE_GENERATOR_END = 'onGeneratorEnd'),
    Or = (E.MIDDLEWARE_GENERATOR_RESUMED = 'onGeneratorResumed'),
    Ir = (E.MIDDLEWARE_MACHINE_CREATED = 'onMachineCreated'),
    mr = (E.MIDDLEWARE_MACHINE_CONNECTED = 'onMachineConnected'),
    Tr = (E.MIDDLEWARE_MACHINE_DISCONNECTED = 'onMachineDisconnected'),
    Nr = (E.MIDDLEWARE_REGISTERED = 'onMiddlewareRegister'),
    Cr = (E.DEVTOOLS_KEY = '__hello__stent__')
})
var se = p((m, fe) => {
  'use strict'
  m.__esModule = !0
  var Ye =
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
  m.default = Ke
  var ze = A()
  function Ke(e) {
    if (
      e &&
      (typeof e == 'undefined' ? 'undefined' : Ye(e)) === 'object' &&
      typeof e.name != 'undefined'
    )
      return e
    throw new Error((0, ze.ERROR_WRONG_STATE_FORMAT)(e))
  }
  fe.exports = m.default
})
var de = p((T, le) => {
  'use strict'
  T.__esModule = !0
  T.default = Je
  function Je(e) {
    var t
    for (t in e) if (e.hasOwnProperty(t)) return !1
    return !0
  }
  le.exports = T.default
})
var y = p((N, Ee) => {
  'use strict'
  N.__esModule = !0
  N.default = Xe
  var Be = C()
  function Xe(e, t) {
    for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
      n[o - 2] = arguments[o]
    var a = Be.Machine.middlewares
    if (a.length !== 0) {
      var _ = function (f, d) {
        return f < a.length - 1 ? d(f + 1) : null
      }
      ;(function l(f) {
        var d = a[f]
        d && typeof d[e] != 'undefined' && d[e].apply(t, n), _(f, l)
      })(0)
    }
  }
  Ee.exports = N.default
})
var J = p((L, _e) => {
  'use strict'
  L.__esModule = !0
  L.default = Qe
  var Ze = se(),
    $e = K(Ze),
    ke = de(),
    je = K(ke),
    et = y(),
    ce = K(et),
    z = A()
  function K(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function Qe(e, t) {
    var r
    if (typeof t != 'undefined') {
      if (
        (typeof t == 'string' || typeof t == 'number'
          ? (r = { name: t.toString() })
          : (r = (0, $e.default)(t)),
        typeof e.transitions[r.name] == 'undefined' ||
          (0, je.default)(e.transitions[r.name]))
      )
        throw new Error((0, z.ERROR_UNCOVERED_STATE)(r.name))
      ;(0, ce.default)(z.MIDDLEWARE_STATE_WILL_CHANGE, e),
        (e.state = r),
        (0, ce.default)(z.MIDDLEWARE_PROCESS_STATE_CHANGE, e)
    }
  }
  _e.exports = L.default
})
var Ae = p((g, Re) => {
  'use strict'
  g.__esModule = !0
  var pe =
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
  g.default = Se
  var tt = y(),
    D = ve(tt),
    v = A(),
    rt = J(),
    nt = ve(rt)
  function ve(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function Se(e, t, r, n) {
    var o = function (i, s) {
        return !l && i.next(s)
      },
      a = function (i, s) {
        return !l && i.throw(s)
      },
      _ = function () {
        f && f(), (l = !0)
      },
      l = !1,
      f,
      d = function u(i) {
        if (!l)
          if (i.done) (0, D.default)(v.MIDDLEWARE_GENERATOR_END, e, i.value), r(i.value)
          else if (
            ((0, D.default)(v.MIDDLEWARE_GENERATOR_STEP, e, i.value),
            pe(i.value) === 'object' && i.value.__type === 'call')
          ) {
            var s = i.value,
              c = s.func,
              ue = s.args
            if (!c) {
              var ie = (0, v.ERROR_GENERATOR_FUNC_CALL_FAILED)(
                typeof c == 'undefined' ? 'undefined' : pe(c)
              )
              return (
                (0, D.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e, ie),
                u(a(t, new Error(ie)))
              )
            }
            try {
              var M = c.apply(void 0, ue)
              if (!M) {
                ;(0, D.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e), u(o(t))
                return
              }
              if (typeof M.then != 'undefined')
                M.then(
                  function (S) {
                    return (
                      (0, D.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e, S), u(o(t, S))
                    )
                  },
                  function (S) {
                    return (
                      (0, D.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e, S), u(a(t, S))
                    )
                  }
                )
              else if (typeof M.next == 'function')
                try {
                  f = Se(e, M, function (S) {
                    ;(0, D.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e, S), u(o(t, S))
                  })
                } catch (S) {
                  return u(a(t, S))
                }
              else (0, D.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e, M), u(o(t, M))
            } catch (S) {
              return u(a(t, S))
            }
          } else
            (0, nt.default)(e, i.value),
              (0, D.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e),
              u(o(t))
      }
    return d(o(t, n)), _
  }
  Re.exports = g.default
})
var Q = p((w, De) => {
  'use strict'
  w.__esModule = !0
  var at =
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
    ot =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t]
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      }
  w.default = ut
  var W = A(),
    it = J(),
    G = X(it),
    ft = y(),
    B = X(ft),
    st = Ae(),
    lt = X(st)
  function X(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function ut(e, t) {
    for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
      n[o - 2] = arguments[o]
    var a = e.state,
      _ = e.transitions
    if (!_[a.name]) return !1
    var l = _[a.name][t]
    if (typeof l == 'undefined') return !1
    if (
      (B.default.apply(void 0, [W.MIDDLEWARE_PROCESS_ACTION, e, t].concat(n)),
      typeof l == 'string')
    )
      (0, G.default)(e, ot({}, a, { name: _[a.name][t] }))
    else if ((typeof l == 'undefined' ? 'undefined' : at(l)) === 'object')
      (0, G.default)(e, l)
    else if (typeof l == 'function') {
      var f,
        d = (f = _[a.name])[t].apply(f, [e].concat(n))
      if (d && typeof d.next == 'function') {
        var u = d
        return (0, lt.default)(e, u, function (i) {
          ;(0, G.default)(e, i),
            B.default.apply(void 0, [W.MIDDLEWARE_ACTION_PROCESSED, e, t].concat(n))
        })
      } else (0, G.default)(e, d)
    } else throw new Error(W.ERROR_NOT_SUPPORTED_HANDLER_TYPE)
    B.default.apply(void 0, [W.MIDDLEWARE_ACTION_PROCESSED, e, t].concat(n))
  }
  De.exports = w.default
})
var ye = p((q, Me) => {
  'use strict'
  q.__esModule = !0
  q.default = dt
  var Et = Q(),
    ct = _t(Et)
  function _t(e) {
    return e && e.__esModule ? e : { default: e }
  }
  var Z = {}
  function dt(e, t) {
    Z[t] && Z[t]()
    for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
      n[o - 2] = arguments[o]
    Z[t] = ct.default.apply(void 0, [e, t].concat(n))
  }
  Me.exports = q.default
})
var Oe = p((P, he) => {
  'use strict'
  P.__esModule = !0
  var $ =
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
  P.default = Rt
  var k = A()
  function Rt(e) {
    if ((typeof e == 'undefined' ? 'undefined' : $(e)) !== 'object')
      throw new Error(k.ERROR_MISSING_STATE)
    var t = e.state,
      r = e.transitions
    if ((typeof t == 'undefined' ? 'undefined' : $(t)) !== 'object')
      throw new Error(k.ERROR_MISSING_STATE)
    if ((typeof r == 'undefined' ? 'undefined' : $(r)) !== 'object')
      throw new Error(k.ERROR_MISSING_TRANSITIONS)
    return !0
  }
  he.exports = P.default
})
var me = p((U, Ie) => {
  'use strict'
  U.__esModule = !0
  var pt = /^[\W_]+/,
    St = /[\W_]+/g
  U.default = function (e) {
    return e
      .replace(pt, '')
      .split(St)
      .reduce(function (t, r, n) {
        return (
          n === 0
            ? (r = r.charAt(0).toLowerCase() + r.substr(1))
            : (r = r.charAt(0).toUpperCase() + r.substr(1)),
          (t += r),
          t
        )
      }, '')
  }
  Ie.exports = U.default
})
var Ne = p((H, Te) => {
  'use strict'
  H.__esModule = !0
  H.default = vt
  var At = me(),
    j = Dt(At),
    Mt = A()
  function Dt(e) {
    return e && e.__esModule ? e : { default: e }
  }
  var yt = ['name', 'transitions', 'state', 'destroy']
  function vt(e, t, r, n) {
    for (var o in t) {
      ;(function (f) {
        e[(0, j.default)('is ' + f)] = function () {
          return e.state.name === f
        }
      })(o)
      for (var a in t[o]) {
        var _ = (0, j.default)(a),
          l = (0, j.default)('is ' + a + ' allowed')
        if (yt.indexOf(_) >= 0)
          throw new Error((0, Mt.ERROR_RESERVED_WORD_USED_AS_ACTION)(_))
        ;(function (f, d, u) {
          ;(e[f] = function () {
            for (var i = arguments.length, s = Array(i), c = 0; c < i; c++)
              s[c] = arguments[c]
            return r.apply(void 0, [u].concat(s))
          }),
            (e[f].latest = function () {
              for (var i = arguments.length, s = Array(i), c = 0; c < i; c++)
                s[c] = arguments[c]
              return n.apply(void 0, [u].concat(s))
            }),
            (e[d] = function () {
              return !t[e.state.name] || typeof t[e.state.name][u] != 'undefined'
            })
        })(_, l, a)
      }
    }
  }
  Te.exports = H.default
})
var ge = p((b, Ce) => {
  'use strict'
  b.__esModule = !0
  var ht =
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
  b.default = Ot
  var It = Q(),
    mt = x(It),
    Tt = ye(),
    Nt = x(Tt),
    Ct = Oe(),
    Lt = x(Ct),
    gt = Ne(),
    wt = x(gt)
  function x(e) {
    return e && e.__esModule ? e : { default: e }
  }
  var Wt = 0,
    Le = function () {
      return '_@@@' + ++Wt
    }
  function Ot(e, t) {
    ;(typeof e == 'undefined' ? 'undefined' : ht(e)) === 'object' &&
      (typeof t == 'undefined'
        ? ((t = e), (e = Le()))
        : ((t = { state: e, transitions: t }), (e = Le())))
    var r = { name: e }
    ;(0, Lt.default)(t)
    var n = t,
      o = n.state,
      a = n.transitions,
      _ = function (d) {
        for (var u = arguments.length, i = Array(u > 1 ? u - 1 : 0), s = 1; s < u; s++)
          i[s - 1] = arguments[s]
        return mt.default.apply(void 0, [r, d].concat(i))
      },
      l = function (d) {
        for (var u = arguments.length, i = Array(u > 1 ? u - 1 : 0), s = 1; s < u; s++)
          i[s - 1] = arguments[s]
        return Nt.default.apply(void 0, [r, d].concat(i))
      }
    return (r.state = o), (r.transitions = a), (0, wt.default)(r, a, _, l), r
  }
  Ce.exports = b.default
})
var re = p((h) => {
  'use strict'
  h.__esModule = !0
  h.flush = Gt
  h.getMapping = qt
  h.destroy = Pt
  h.default = Ut
  var we = C(),
    Ht = y(),
    ee = bt(Ht),
    te = A()
  function bt(e) {
    return e && e.__esModule ? e : { default: e }
  }
  var xt = 0,
    R = null,
    Ft = function () {
      return 'm' + ++xt
    },
    Vt = function () {
      R === null &&
        ((R = {}),
        we.Machine.addMiddleware({
          onStateChanged: function () {
            for (var r in R) {
              var n = R[r],
                o = n.done,
                a = n.machines
              a
                .map(function (_) {
                  return _.name
                })
                .indexOf(this.name) >= 0 &&
                o &&
                o.apply(void 0, a)
            }
          },
        }))
    }
  function Gt() {
    R = null
  }
  function qt() {
    return R
  }
  function Pt(e) {
    for (var t in R)
      (R[t].machines = R[t].machines.filter(function (r) {
        var n = r.name
        return n !== e
      })),
        (0, ee.default)(te.MIDDLEWARE_MACHINE_DISCONNECTED, null, R[t].machines),
        R[t].machines.length === 0 && delete R[t]
  }
  function Ut() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.meta
    Vt()
    var r = function () {
      for (var o = arguments.length, a = Array(o), _ = 0; _ < o; _++)
        a[_] = arguments[_]
      var l = a.map(function (d) {
          return we.Machine.get(d)
        }),
        f = function (u, i, s) {
          var c = Ft()
          return (
            !i && (R[c] = { done: u, machines: l }),
            !s && u && u.apply(void 0, l),
            function () {
              ;(0, ee.default)(te.MIDDLEWARE_MACHINE_DISCONNECTED, null, l, t),
                R && R[c] && delete R[c]
            }
          )
        }
      return (
        (0, ee.default)(te.MIDDLEWARE_MACHINE_CONNECTED, null, l, t),
        {
          map: f,
          mapOnce: function (u) {
            return f(u, !0)
          },
          mapSilent: function (u) {
            return f(u, !1, !0)
          },
        }
      )
    }
    return { with: r }
  }
})
var ne = p((F, We) => {
  'use strict'
  F.__esModule = !0
  F.default = Yt
  function Yt(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      r[n - 1] = arguments[n]
    return { __type: 'call', func: e, args: r }
  }
  We.exports = F.default
})
var C = p((V) => {
  'use strict'
  V.__esModule = !0
  V.Machine = void 0
  var Kt =
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
    zt = ge(),
    Jt = Y(zt),
    O = A(),
    ae = re(),
    Xt = Y(ae),
    Bt = ne(),
    Qt = Y(Bt),
    Zt = y(),
    $t = Y(Zt)
  function Y(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function kt(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  var jt = (function () {
      function e() {
        kt(this, e),
          (this.machines = {}),
          (this.middlewares = []),
          (this.connect = Xt.default),
          (this.call = Qt.default)
      }
      return (
        (e.prototype.create = function (r, n) {
          var o = this,
            a = (0, Jt.default)(r, n, this.middlewares)
          return (
            (this.machines[a.name] = a),
            (0, $t.default)(O.MIDDLEWARE_MACHINE_CREATED, a, a),
            (a.destroy = function () {
              return o.destroy(a)
            }),
            a
          )
        }),
        (e.prototype.get = function (r) {
          if (
            ((typeof r == 'undefined' ? 'undefined' : Kt(r)) === 'object' &&
              (r = r.name),
            this.machines[r])
          )
            return this.machines[r]
          throw new Error((0, O.ERROR_MISSING_MACHINE)(r))
        }),
        (e.prototype.flush = function () {
          ;(this.machines = {}), (this.middlewares = []), (0, ae.flush)()
        }),
        (e.prototype.addMiddleware = function (r) {
          Array.isArray(r)
            ? (this.middlewares = this.middlewares.concat(r))
            : this.middlewares.push(r),
            r.__initialize && r.__initialize(this),
            r[O.MIDDLEWARE_REGISTERED] && r[O.MIDDLEWARE_REGISTERED]()
        }),
        (e.prototype.destroy = function (r) {
          var n = r
          if (typeof r == 'string' && ((n = this.machines[r]), !n))
            throw new Error((0, O.ERROR_MISSING_MACHINE)(r))
          delete this.machines[n.name], (0, ae.destroy)(n.name)
        }),
        e
      )
    })(),
    Ge = new jt()
  V.Machine = Ge
  typeof window != 'undefined' && (window[O.DEVTOOLS_KEY] = Ge)
})
var Pe = p((I) => {
  'use strict'
  I.__esModule = !0
  I.connect = I.call = void 0
  var er = ne(),
    tr = qe(er),
    rr = re(),
    nr = qe(rr)
  function qe(e) {
    return e && e.__esModule ? e : { default: e }
  }
  I.call = tr.default
  I.connect = nr.default
})
var oe = {}
Ur(oe, { connect: () => ir })
var Ue = ar(C()),
  He = ar(Pe())
var xe = 'default',
  Fe = Ue.Machine.create(
    { name: xe, ...ur },
    {
      [xe]: {
        toggle({ state: e }, t) {
          return {
            ...e,
            todos: e.todos.map((r) => (r.id === t && (r.done = !r.done), r)),
          }
        },
        add({ state: e }, t) {
          return { ...e, todos: [{ text: t, done: !1, id: or() }, ...e.todos] }
        },
      },
    }
  ),
  ir = (e = be, t = be) => {
    He.connect()
      .with(Fe.name)
      .map((r) => e(r.state)),
      t(Fe)
  }
fr('Stent', oe, sr)
//# sourceMappingURL=state-stent.js.map
