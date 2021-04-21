import { a as sr, b as ur, c as ir, d as xe, e as lr } from './chunk-INS3FUNR.js'
import './chunk-YNYRRD5H.js'
import './chunk-D5WR2F3S.js'
import './chunk-A37PCSWK.js'
import { a as m, b as p, c as Hr, d as or } from './chunk-SLFZ277Q.js'
var A = p((E) => {
  'use strict'
  E.__esModule = !0
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
          },
    dr = (E.ERROR_MISSING_MACHINE = function (t) {
      return "There's no machine with name " + t
    }),
    Er = (E.ERROR_MISSING_STATE = 'Configuration error: missing initial "state"'),
    _r = (E.ERROR_MISSING_TRANSITIONS = 'Configuration error: missing "transitions"'),
    cr = (E.ERROR_WRONG_STATE_FORMAT = function (t) {
      var r =
        (typeof t == 'undefined' ? 'undefined' : Ye(t)) === 'object'
          ? JSON.stringify(t, null, 2)
          : t
      return (
        'The state should be an object and it should always have at least "name" property. You passed ' +
        r
      )
    }),
    Rr = (E.ERROR_UNCOVERED_STATE = function (t) {
      return (
        'You just transitioned the machine to a state (' +
        t +
        ') which is not defined or it has no actions. This means that the machine is stuck.'
      )
    }),
    pr = (E.ERROR_NOT_SUPPORTED_HANDLER_TYPE =
      'Wrong handler type passed. Please read the docs https://github.com/krasimir/stent'),
    Sr = (E.ERROR_RESERVED_WORD_USED_AS_ACTION = function (t) {
      return "Sorry, you can't use " + t + ' as a name for an action. It is reserved.'
    }),
    vr = (E.ERROR_GENERATOR_FUNC_CALL_FAILED = function (t) {
      return 'The argument passed to `call` is falsy (' + t + ')'
    }),
    Ar = (E.MIDDLEWARE_PROCESS_ACTION = 'onActionDispatched'),
    Dr = (E.MIDDLEWARE_ACTION_PROCESSED = 'onActionProcessed'),
    Mr = (E.MIDDLEWARE_STATE_WILL_CHANGE = 'onStateWillChange'),
    yr = (E.MIDDLEWARE_PROCESS_STATE_CHANGE = 'onStateChanged'),
    hr = (E.MIDDLEWARE_GENERATOR_STEP = 'onGeneratorStep'),
    Or = (E.MIDDLEWARE_GENERATOR_END = 'onGeneratorEnd'),
    Ir = (E.MIDDLEWARE_GENERATOR_RESUMED = 'onGeneratorResumed'),
    mr = (E.MIDDLEWARE_MACHINE_CREATED = 'onMachineCreated'),
    Tr = (E.MIDDLEWARE_MACHINE_CONNECTED = 'onMachineConnected'),
    Nr = (E.MIDDLEWARE_MACHINE_DISCONNECTED = 'onMachineDisconnected'),
    Cr = (E.MIDDLEWARE_REGISTERED = 'onMiddlewareRegister'),
    Lr = (E.DEVTOOLS_KEY = '__hello__stent__')
})
var le = p((T, se) => {
  'use strict'
  T.__esModule = !0
  var Ke =
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
  T.default = ze
  var Je = A()
  function ze(e) {
    if (
      e &&
      (typeof e == 'undefined' ? 'undefined' : Ke(e)) === 'object' &&
      typeof e.name != 'undefined'
    )
      return e
    throw new Error((0, Je.ERROR_WRONG_STATE_FORMAT)(e))
  }
  se.exports = T.default
})
var Ee = p((N, de) => {
  'use strict'
  N.__esModule = !0
  N.default = Xe
  function Xe(e) {
    var t
    for (t in e) if (e.hasOwnProperty(t)) return !1
    return !0
  }
  de.exports = N.default
})
var y = p((C, _e) => {
  'use strict'
  C.__esModule = !0
  C.default = Be
  var Qe = L()
  function Be(e, t) {
    for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
      n[o - 2] = arguments[o]
    var a = Qe.Machine.middlewares
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
  _e.exports = C.default
})
var X = p((g, ce) => {
  'use strict'
  g.__esModule = !0
  g.default = Ze
  var $e = le(),
    ke = z($e),
    je = Ee(),
    et = z(je),
    tt = y(),
    Re = z(tt),
    J = A()
  function z(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function Ze(e, t) {
    var r
    if (typeof t != 'undefined') {
      if (
        (typeof t == 'string' || typeof t == 'number'
          ? (r = { name: t.toString() })
          : (r = (0, ke.default)(t)),
        typeof e.transitions[r.name] == 'undefined' ||
          (0, et.default)(e.transitions[r.name]))
      )
        throw new Error((0, J.ERROR_UNCOVERED_STATE)(r.name))
      ;(0, Re.default)(J.MIDDLEWARE_STATE_WILL_CHANGE, e),
        (e.state = r),
        (0, Re.default)(J.MIDDLEWARE_PROCESS_STATE_CHANGE, e)
    }
  }
  ce.exports = g.default
})
var De = p((w, pe) => {
  'use strict'
  w.__esModule = !0
  var Se =
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
  w.default = ve
  var rt = y(),
    D = Ae(rt),
    v = A(),
    nt = X(),
    at = Ae(nt)
  function Ae(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function ve(e, t, r, n) {
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
            Se(i.value) === 'object' && i.value.__type === 'call')
          ) {
            var s = i.value,
              c = s.func,
              ie = s.args
            if (!c) {
              var fe = (0, v.ERROR_GENERATOR_FUNC_CALL_FAILED)(
                typeof c == 'undefined' ? 'undefined' : Se(c)
              )
              return (
                (0, D.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e, fe),
                u(a(t, new Error(fe)))
              )
            }
            try {
              var M = c.apply(void 0, ie)
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
                  f = ve(e, M, function (S) {
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
            (0, at.default)(e, i.value),
              (0, D.default)(v.MIDDLEWARE_GENERATOR_RESUMED, e),
              u(o(t))
      }
    return d(o(t, n)), _
  }
  pe.exports = w.default
})
var Z = p((W, Me) => {
  'use strict'
  W.__esModule = !0
  var ot =
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
    ut =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t]
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      }
  W.default = it
  var G = A(),
    ft = X(),
    q = B(ft),
    st = y(),
    Q = B(st),
    lt = De(),
    dt = B(lt)
  function B(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function it(e, t) {
    for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
      n[o - 2] = arguments[o]
    var a = e.state,
      _ = e.transitions
    if (!_[a.name]) return !1
    var l = _[a.name][t]
    if (typeof l == 'undefined') return !1
    if (
      (Q.default.apply(void 0, [G.MIDDLEWARE_PROCESS_ACTION, e, t].concat(n)),
      typeof l == 'string')
    )
      (0, q.default)(e, ut({}, a, { name: _[a.name][t] }))
    else if ((typeof l == 'undefined' ? 'undefined' : ot(l)) === 'object')
      (0, q.default)(e, l)
    else if (typeof l == 'function') {
      var f,
        d = (f = _[a.name])[t].apply(f, [e].concat(n))
      if (d && typeof d.next == 'function') {
        var u = d
        return (0, dt.default)(e, u, function (i) {
          ;(0, q.default)(e, i),
            Q.default.apply(void 0, [G.MIDDLEWARE_ACTION_PROCESSED, e, t].concat(n))
        })
      } else (0, q.default)(e, d)
    } else throw new Error(G.ERROR_NOT_SUPPORTED_HANDLER_TYPE)
    Q.default.apply(void 0, [G.MIDDLEWARE_ACTION_PROCESSED, e, t].concat(n))
  }
  Me.exports = W.default
})
var he = p((P, ye) => {
  'use strict'
  P.__esModule = !0
  P.default = Et
  var _t = Z(),
    Rt = ct(_t)
  function ct(e) {
    return e && e.__esModule ? e : { default: e }
  }
  var $ = {}
  function Et(e, t) {
    $[t] && $[t]()
    for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
      n[o - 2] = arguments[o]
    $[t] = Rt.default.apply(void 0, [e, t].concat(n))
  }
  ye.exports = P.default
})
var Ie = p((U, Oe) => {
  'use strict'
  U.__esModule = !0
  var k =
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
  U.default = pt
  var j = A()
  function pt(e) {
    if ((typeof e == 'undefined' ? 'undefined' : k(e)) !== 'object')
      throw new Error(j.ERROR_MISSING_STATE)
    var t = e.state,
      r = e.transitions
    if ((typeof t == 'undefined' ? 'undefined' : k(t)) !== 'object')
      throw new Error(j.ERROR_MISSING_STATE)
    if ((typeof r == 'undefined' ? 'undefined' : k(r)) !== 'object')
      throw new Error(j.ERROR_MISSING_TRANSITIONS)
    return !0
  }
  Oe.exports = U.default
})
var Te = p((H, me) => {
  'use strict'
  H.__esModule = !0
  var St = /^[\W_]+/,
    vt = /[\W_]+/g
  H.default = function (e) {
    return e
      .replace(St, '')
      .split(vt)
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
  me.exports = H.default
})
var Ce = p((b, Ne) => {
  'use strict'
  b.__esModule = !0
  b.default = At
  var Dt = Te(),
    ee = Mt(Dt),
    yt = A()
  function Mt(e) {
    return e && e.__esModule ? e : { default: e }
  }
  var ht = ['name', 'transitions', 'state', 'destroy']
  function At(e, t, r, n) {
    for (var o in t) {
      ;(function (f) {
        e[(0, ee.default)('is ' + f)] = function () {
          return e.state.name === f
        }
      })(o)
      for (var a in t[o]) {
        var _ = (0, ee.default)(a),
          l = (0, ee.default)('is ' + a + ' allowed')
        if (ht.indexOf(_) >= 0)
          throw new Error((0, yt.ERROR_RESERVED_WORD_USED_AS_ACTION)(_))
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
  Ne.exports = b.default
})
var we = p((x, Le) => {
  'use strict'
  x.__esModule = !0
  var Ot =
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
  x.default = It
  var mt = Z(),
    Tt = F(mt),
    Nt = he(),
    Ct = F(Nt),
    Lt = Ie(),
    gt = F(Lt),
    wt = Ce(),
    Wt = F(wt)
  function F(e) {
    return e && e.__esModule ? e : { default: e }
  }
  var Gt = 0,
    ge = function () {
      return '_@@@' + ++Gt
    }
  function It(e, t) {
    ;(typeof e == 'undefined' ? 'undefined' : Ot(e)) === 'object' &&
      (typeof t == 'undefined'
        ? ((t = e), (e = ge()))
        : ((t = { state: e, transitions: t }), (e = ge())))
    var r = { name: e }
    ;(0, gt.default)(t)
    var n = t,
      o = n.state,
      a = n.transitions,
      _ = function (d) {
        for (var u = arguments.length, i = Array(u > 1 ? u - 1 : 0), s = 1; s < u; s++)
          i[s - 1] = arguments[s]
        return Tt.default.apply(void 0, [r, d].concat(i))
      },
      l = function (d) {
        for (var u = arguments.length, i = Array(u > 1 ? u - 1 : 0), s = 1; s < u; s++)
          i[s - 1] = arguments[s]
        return Ct.default.apply(void 0, [r, d].concat(i))
      }
    return (r.state = o), (r.transitions = a), (0, Wt.default)(r, a, _, l), r
  }
  Le.exports = x.default
})
var ne = p((h) => {
  'use strict'
  h.__esModule = !0
  h.flush = qt
  h.getMapping = Pt
  h.destroy = Ut
  h.default = Ht
  var We = L(),
    bt = y(),
    te = xt(bt),
    re = A()
  function xt(e) {
    return e && e.__esModule ? e : { default: e }
  }
  var Ft = 0,
    R = null,
    Vt = function () {
      return 'm' + ++Ft
    },
    Yt = function () {
      R === null &&
        ((R = {}),
        We.Machine.addMiddleware({
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
  function qt() {
    R = null
  }
  function Pt() {
    return R
  }
  function Ut(e) {
    for (var t in R)
      (R[t].machines = R[t].machines.filter(function (r) {
        var n = r.name
        return n !== e
      })),
        (0, te.default)(re.MIDDLEWARE_MACHINE_DISCONNECTED, null, R[t].machines),
        R[t].machines.length === 0 && delete R[t]
  }
  function Ht() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.meta
    Yt()
    var r = function () {
      for (var o = arguments.length, a = Array(o), _ = 0; _ < o; _++)
        a[_] = arguments[_]
      var l = a.map(function (d) {
          return We.Machine.get(d)
        }),
        f = function (u, i, s) {
          var c = Vt()
          return (
            !i && (R[c] = { done: u, machines: l }),
            !s && u && u.apply(void 0, l),
            function () {
              ;(0, te.default)(re.MIDDLEWARE_MACHINE_DISCONNECTED, null, l, t),
                R && R[c] && delete R[c]
            }
          )
        }
      return (
        (0, te.default)(re.MIDDLEWARE_MACHINE_CONNECTED, null, l, t),
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
var ae = p((V, Ge) => {
  'use strict'
  V.__esModule = !0
  V.default = Kt
  function Kt(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      r[n - 1] = arguments[n]
    return { __type: 'call', func: e, args: r }
  }
  Ge.exports = V.default
})
var L = p((Y) => {
  'use strict'
  Y.__esModule = !0
  Y.Machine = void 0
  var zt =
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
    Jt = we(),
    Xt = K(Jt),
    O = A(),
    oe = ne(),
    Bt = K(oe),
    Qt = ae(),
    Zt = K(Qt),
    $t = y(),
    kt = K($t)
  function K(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function jt(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  var er = (function () {
      function e() {
        jt(this, e),
          (this.machines = {}),
          (this.middlewares = []),
          (this.connect = Bt.default),
          (this.call = Zt.default)
      }
      return (
        (e.prototype.create = function (r, n) {
          var o = this,
            a = (0, Xt.default)(r, n, this.middlewares)
          return (
            (this.machines[a.name] = a),
            (0, kt.default)(O.MIDDLEWARE_MACHINE_CREATED, a, a),
            (a.destroy = function () {
              return o.destroy(a)
            }),
            a
          )
        }),
        (e.prototype.get = function (r) {
          if (
            ((typeof r == 'undefined' ? 'undefined' : zt(r)) === 'object' &&
              (r = r.name),
            this.machines[r])
          )
            return this.machines[r]
          throw new Error((0, O.ERROR_MISSING_MACHINE)(r))
        }),
        (e.prototype.flush = function () {
          ;(this.machines = {}), (this.middlewares = []), (0, oe.flush)()
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
          delete this.machines[n.name], (0, oe.destroy)(n.name)
        }),
        e
      )
    })(),
    qe = new er()
  Y.Machine = qe
  typeof window != 'undefined' && (window[O.DEVTOOLS_KEY] = qe)
})
var Ue = p((I) => {
  'use strict'
  I.__esModule = !0
  I.connect = I.call = void 0
  var tr = ae(),
    rr = Pe(tr),
    nr = ne(),
    ar = Pe(nr)
  function Pe(e) {
    return e && e.__esModule ? e : { default: e }
  }
  I.call = rr.default
  I.connect = ar.default
})
var ue = {}
Hr(ue, { connect: () => fr })
var He = or(L()),
  be = or(Ue())
var Fe = 'default',
  Ve = He.Machine.create(m({ name: Fe }, ir), {
    [Fe]: {
      toggle({ state: e }, t) {
        return m(m({}, e), {
          todos: e.todos.map((r) => (r.id === t && (r.done = !r.done), r)),
        })
      },
      add({ state: e }, t) {
        return m(m({}, e), { todos: [{ text: t, done: !1, id: ur() }, ...e.todos] })
      },
    },
  }),
  fr = (e = xe, t = xe) => {
    ;(0, be.connect)()
      .with(Ve.name)
      .map((r) => e(r.state)),
      t(Ve)
  }
sr('Stent', ue, lr)
//# sourceMappingURL=state-stent.js.map
