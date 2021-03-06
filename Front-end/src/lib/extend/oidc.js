var Oidc = function (t) {
  var e = {};

  function r(n) {
    if (e[n]) return e[n].exports;
    var i = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
  }
  return r.m = t, r.c = e, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var i in t) r.d(n, i, function (e) {
        return t[e]
      }.bind(null, i));
    return n
  }, r.n = function (t) {
    var e = t && t.__esModule ? function e() {
      return t.default
    } : function e() {
      return t
    };
    return r.d(e, "a", e), e
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, r.p = "", r(r.s = 152)
}([function (t, e, r) {
  var n = r(2),
    i = r(19),
    o = r(12),
    s = r(13),
    a = r(20),
    u = function (t, e, r) {
      var c, f, h, l, p = t & u.F,
        d = t & u.G,
        g = t & u.S,
        v = t & u.P,
        y = t & u.B,
        m = d ? n : g ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
        _ = d ? i : i[e] || (i[e] = {}),
        S = _.prototype || (_.prototype = {});
      for (c in d && (r = e), r) h = ((f = !p && m && void 0 !== m[c]) ? m : r)[c], l = y && f ? a(h, n) : v && "function" == typeof h ? a(Function.call, h) : h, m && s(m, c, h, t & u.U), _[c] != h && o(_, c, l), v && S[c] != h && (S[c] = h)
    };
  n.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function (t, e, r) {
  var n = r(5);
  t.exports = function (t) {
    if (!n(t)) throw TypeError(t + " is not an object!");
    return t
  }
}, function (t, e) {
  var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = r)
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = function () {
    function t(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e
    }
  }();
  var i = {
      debug: function t() {},
      info: function t() {},
      warn: function t() {},
      error: function t() {}
    },
    o = void 0,
    s = void 0;
  (e.Log = function () {
    function t() {
      ! function e(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
      }(this, t)
    }
    return t.reset = function t() {
      s = 3, o = i
    }, t.debug = function t() {
      if (s >= 4) {
        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
        o.debug.apply(o, Array.from(r))
      }
    }, t.info = function t() {
      if (s >= 3) {
        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
        o.info.apply(o, Array.from(r))
      }
    }, t.warn = function t() {
      if (s >= 2) {
        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
        o.warn.apply(o, Array.from(r))
      }
    }, t.error = function t() {
      if (s >= 1) {
        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
        o.error.apply(o, Array.from(r))
      }
    }, n(t, null, [{
      key: "NONE",
      get: function t() {
        return 0
      }
    }, {
      key: "ERROR",
      get: function t() {
        return 1
      }
    }, {
      key: "WARN",
      get: function t() {
        return 2
      }
    }, {
      key: "INFO",
      get: function t() {
        return 3
      }
    }, {
      key: "DEBUG",
      get: function t() {
        return 4
      }
    }, {
      key: "level",
      get: function t() {
        return s
      },
      set: function t(e) {
        if (!(0 <= e && e <= 4)) throw new Error("Invalid log level");
        s = e
      }
    }, {
      key: "logger",
      get: function t() {
        return o
      },
      set: function t(e) {
        if (!e.debug && e.info && (e.debug = e.info), !(e.debug && e.info && e.warn && e.error)) throw new Error("Invalid logger");
        o = e
      }
    }]), t
  }()).reset()
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  }
}, function (t, e) {
  t.exports = function (t) {
    return "object" == typeof t ? null !== t : "function" == typeof t
  }
}, function (t, e, r) {
  var n = r(50)("wks"),
    i = r(34),
    o = r(2).Symbol,
    s = "function" == typeof o;
  (t.exports = function (t) {
    return n[t] || (n[t] = s && o[t] || (s ? o : i)("Symbol." + t))
  }).store = n
}, function (t, e, r) {
  var n = r(22),
    i = Math.min;
  t.exports = function (t) {
    return t > 0 ? i(n(t), 9007199254740991) : 0
  }
}, function (t, e, r) {
  t.exports = !r(4)(function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function () {
        return 7
      }
    }).a
  })
}, function (t, e, r) {
  var n = r(1),
    i = r(103),
    o = r(24),
    s = Object.defineProperty;
  e.f = r(8) ? Object.defineProperty : function t(e, r, a) {
    if (n(e), r = o(r, !0), n(a), i) try {
      return s(e, r, a)
    } catch (t) {}
    if ("get" in a || "set" in a) throw TypeError("Accessors not supported!");
    return "value" in a && (e[r] = a.value), e
  }
}, function (t, e, r) {
  var n = r(25);
  t.exports = function (t) {
    return Object(n(t))
  }
}, function (t, e) {
  t.exports = function (t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");
    return t
  }
}, function (t, e, r) {
  var n = r(9),
    i = r(33);
  t.exports = r(8) ? function (t, e, r) {
    return n.f(t, e, i(1, r))
  } : function (t, e, r) {
    return t[e] = r, t
  }
}, function (t, e, r) {
  var n = r(2),
    i = r(12),
    o = r(15),
    s = r(34)("src"),
    a = r(156),
    u = ("" + a).split("toString");
  r(19).inspectSource = function (t) {
    return a.call(t)
  }, (t.exports = function (t, e, r, a) {
    var c = "function" == typeof r;
    c && (o(r, "name") || i(r, "name", e)), t[e] !== r && (c && (o(r, s) || i(r, s, t[e] ? "" + t[e] : u.join(String(e)))), t === n ? t[e] = r : a ? t[e] ? t[e] = r : i(t, e, r) : (delete t[e], i(t, e, r)))
  })(Function.prototype, "toString", function t() {
    return "function" == typeof this && this[s] || a.call(this)
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(4),
    o = r(25),
    s = /"/g,
    a = function (t, e, r, n) {
      var i = String(o(t)),
        a = "<" + e;
      return "" !== r && (a += " " + r + '="' + String(n).replace(s, "&quot;") + '"'), a + ">" + i + "</" + e + ">"
    };
  t.exports = function (t, e) {
    var r = {};
    r[t] = e(a), n(n.P + n.F * i(function () {
      var e = "" [t]('"');
      return e !== e.toLowerCase() || e.split('"').length > 3
    }), "String", r)
  }
}, function (t, e) {
  var r = {}.hasOwnProperty;
  t.exports = function (t, e) {
    return r.call(t, e)
  }
}, function (t, e, r) {
  var n = r(51),
    i = r(25);
  t.exports = function (t) {
    return n(i(t))
  }
}, function (t, e, r) {
  var n = r(52),
    i = r(33),
    o = r(16),
    s = r(24),
    a = r(15),
    u = r(103),
    c = Object.getOwnPropertyDescriptor;
  e.f = r(8) ? c : function t(e, r) {
    if (e = o(e), r = s(r, !0), u) try {
      return c(e, r)
    } catch (t) {}
    if (a(e, r)) return i(!n.f.call(e, r), e[r])
  }
}, function (t, e, r) {
  var n = r(15),
    i = r(10),
    o = r(74)("IE_PROTO"),
    s = Object.prototype;
  t.exports = Object.getPrototypeOf || function (t) {
    return t = i(t), n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
  }
}, function (t, e) {
  var r = t.exports = {
    version: "2.6.4"
  };
  "number" == typeof __e && (__e = r)
}, function (t, e, r) {
  var n = r(11);
  t.exports = function (t, e, r) {
    if (n(t), void 0 === e) return t;
    switch (r) {
      case 1:
        return function (r) {
          return t.call(e, r)
        };
      case 2:
        return function (r, n) {
          return t.call(e, r, n)
        };
      case 3:
        return function (r, n, i) {
          return t.call(e, r, n, i)
        }
    }
    return function () {
      return t.apply(e, arguments)
    }
  }
}, function (t, e) {
  var r = {}.toString;
  t.exports = function (t) {
    return r.call(t).slice(8, -1)
  }
}, function (t, e) {
  var r = Math.ceil,
    n = Math.floor;
  t.exports = function (t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? n : r)(t)
  }
}, function (t, e, r) {
  "use strict";
  var n = r(4);
  t.exports = function (t, e) {
    return !!t && n(function () {
      e ? t.call(null, function () {}, 1) : t.call(null)
    })
  }
}, function (t, e, r) {
  var n = r(5);
  t.exports = function (t, e) {
    if (!n(t)) return t;
    var r, i;
    if (e && "function" == typeof (r = t.toString) && !n(i = r.call(t))) return i;
    if ("function" == typeof (r = t.valueOf) && !n(i = r.call(t))) return i;
    if (!e && "function" == typeof (r = t.toString) && !n(i = r.call(t))) return i;
    throw TypeError("Can't convert object to primitive value")
  }
}, function (t, e) {
  t.exports = function (t) {
    if (void 0 == t) throw TypeError("Can't call method on  " + t);
    return t
  }
}, function (t, e, r) {
  var n = r(0),
    i = r(19),
    o = r(4);
  t.exports = function (t, e) {
    var r = (i.Object || {})[t] || Object[t],
      s = {};
    s[t] = e(r), n(n.S + n.F * o(function () {
      r(1)
    }), "Object", s)
  }
}, function (t, e, r) {
  var n = r(20),
    i = r(51),
    o = r(10),
    s = r(7),
    a = r(90);
  t.exports = function (t, e) {
    var r = 1 == t,
      u = 2 == t,
      c = 3 == t,
      f = 4 == t,
      h = 6 == t,
      l = 5 == t || h,
      p = e || a;
    return function (e, a, d) {
      for (var g, v, y = o(e), m = i(y), _ = n(a, d, 3), S = s(m.length), b = 0, w = r ? p(e, S) : u ? p(e, 0) : void 0; S > b; b++)
        if ((l || b in m) && (v = _(g = m[b], b, y), t))
          if (r) w[b] = v;
          else if (v) switch (t) {
        case 3:
          return !0;
        case 5:
          return g;
        case 6:
          return b;
        case 2:
          w.push(g)
      } else if (f) return !1;
      return h ? -1 : c || f ? f : w
    }
  }
}, function (t, e, r) {
  "use strict";
  if (r(8)) {
    var n = r(30),
      i = r(2),
      o = r(4),
      s = r(0),
      a = r(66),
      u = r(98),
      c = r(20),
      f = r(40),
      h = r(33),
      l = r(12),
      p = r(42),
      d = r(22),
      g = r(7),
      v = r(131),
      y = r(36),
      m = r(24),
      _ = r(15),
      S = r(46),
      b = r(5),
      w = r(10),
      F = r(87),
      E = r(37),
      x = r(18),
      A = r(38).f,
      k = r(89),
      P = r(34),
      C = r(6),
      T = r(27),
      R = r(56),
      I = r(54),
      O = r(92),
      D = r(48),
      N = r(61),
      L = r(39),
      M = r(91),
      j = r(120),
      U = r(9),
      B = r(17),
      H = U.f,
      V = B.f,
      K = i.RangeError,
      q = i.TypeError,
      W = i.Uint8Array,
      J = Array.prototype,
      z = u.ArrayBuffer,
      Y = u.DataView,
      G = T(0),
      X = T(2),
      $ = T(3),
      Q = T(4),
      Z = T(5),
      tt = T(6),
      et = R(!0),
      rt = R(!1),
      nt = O.values,
      it = O.keys,
      ot = O.entries,
      st = J.lastIndexOf,
      at = J.reduce,
      ut = J.reduceRight,
      ct = J.join,
      ft = J.sort,
      ht = J.slice,
      lt = J.toString,
      pt = J.toLocaleString,
      dt = C("iterator"),
      gt = C("toStringTag"),
      vt = P("typed_constructor"),
      yt = P("def_constructor"),
      mt = a.CONSTR,
      _t = a.TYPED,
      St = a.VIEW,
      bt = T(1, function (t, e) {
        return At(I(t, t[yt]), e)
      }),
      wt = o(function () {
        return 1 === new W(new Uint16Array([1]).buffer)[0]
      }),
      Ft = !!W && !!W.prototype.set && o(function () {
        new W(1).set({})
      }),
      Et = function (t, e) {
        var r = d(t);
        if (r < 0 || r % e) throw K("Wrong offset!");
        return r
      },
      xt = function (t) {
        if (b(t) && _t in t) return t;
        throw q(t + " is not a typed array!")
      },
      At = function (t, e) {
        if (!(b(t) && vt in t)) throw q("It is not a typed array constructor!");
        return new t(e)
      },
      kt = function (t, e) {
        return Pt(I(t, t[yt]), e)
      },
      Pt = function (t, e) {
        for (var r = 0, n = e.length, i = At(t, n); n > r;) i[r] = e[r++];
        return i
      },
      Ct = function (t, e, r) {
        H(t, e, {
          get: function () {
            return this._d[r]
          }
        })
      },
      Tt = function t(e) {
        var r, n, i, o, s, a, u = w(e),
          f = arguments.length,
          h = f > 1 ? arguments[1] : void 0,
          l = void 0 !== h,
          p = k(u);
        if (void 0 != p && !F(p)) {
          for (a = p.call(u), i = [], r = 0; !(s = a.next()).done; r++) i.push(s.value);
          u = i
        }
        for (l && f > 2 && (h = c(h, arguments[2], 2)), r = 0, n = g(u.length), o = At(this, n); n > r; r++) o[r] = l ? h(u[r], r) : u[r];
        return o
      },
      Rt = function t() {
        for (var e = 0, r = arguments.length, n = At(this, r); r > e;) n[e] = arguments[e++];
        return n
      },
      It = !!W && o(function () {
        pt.call(new W(1))
      }),
      Ot = function t() {
        return pt.apply(It ? ht.call(xt(this)) : xt(this), arguments)
      },
      Dt = {
        copyWithin: function t(e, r) {
          return j.call(xt(this), e, r, arguments.length > 2 ? arguments[2] : void 0)
        },
        every: function t(e) {
          return Q(xt(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        fill: function t(e) {
          return M.apply(xt(this), arguments)
        },
        filter: function t(e) {
          return kt(this, X(xt(this), e, arguments.length > 1 ? arguments[1] : void 0))
        },
        find: function t(e) {
          return Z(xt(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        findIndex: function t(e) {
          return tt(xt(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        forEach: function t(e) {
          G(xt(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        indexOf: function t(e) {
          return rt(xt(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        includes: function t(e) {
          return et(xt(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        join: function t(e) {
          return ct.apply(xt(this), arguments)
        },
        lastIndexOf: function t(e) {
          return st.apply(xt(this), arguments)
        },
        map: function t(e) {
          return bt(xt(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        reduce: function t(e) {
          return at.apply(xt(this), arguments)
        },
        reduceRight: function t(e) {
          return ut.apply(xt(this), arguments)
        },
        reverse: function t() {
          for (var e, r = xt(this).length, n = Math.floor(r / 2), i = 0; i < n;) e = this[i], this[i++] = this[--r], this[r] = e;
          return this
        },
        some: function t(e) {
          return $(xt(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        sort: function t(e) {
          return ft.call(xt(this), e)
        },
        subarray: function t(e, r) {
          var n = xt(this),
            i = n.length,
            o = y(e, i);
          return new(I(n, n[yt]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, g((void 0 === r ? i : y(r, i)) - o))
        }
      },
      Nt = function t(e, r) {
        return kt(this, ht.call(xt(this), e, r))
      },
      Lt = function t(e) {
        xt(this);
        var r = Et(arguments[1], 1),
          n = this.length,
          i = w(e),
          o = g(i.length),
          s = 0;
        if (o + r > n) throw K("Wrong length!");
        for (; s < o;) this[r + s] = i[s++]
      },
      Mt = {
        entries: function t() {
          return ot.call(xt(this))
        },
        keys: function t() {
          return it.call(xt(this))
        },
        values: function t() {
          return nt.call(xt(this))
        }
      },
      jt = function (t, e) {
        return b(t) && t[_t] && "symbol" != typeof e && e in t && String(+e) == String(e)
      },
      Ut = function t(e, r) {
        return jt(e, r = m(r, !0)) ? h(2, e[r]) : V(e, r)
      },
      Bt = function t(e, r, n) {
        return !(jt(e, r = m(r, !0)) && b(n) && _(n, "value")) || _(n, "get") || _(n, "set") || n.configurable || _(n, "writable") && !n.writable || _(n, "enumerable") && !n.enumerable ? H(e, r, n) : (e[r] = n.value, e)
      };
    mt || (B.f = Ut, U.f = Bt), s(s.S + s.F * !mt, "Object", {
      getOwnPropertyDescriptor: Ut,
      defineProperty: Bt
    }), o(function () {
      lt.call({})
    }) && (lt = pt = function t() {
      return ct.call(this)
    });
    var Ht = p({}, Dt);
    p(Ht, Mt), l(Ht, dt, Mt.values), p(Ht, {
      slice: Nt,
      set: Lt,
      constructor: function () {},
      toString: lt,
      toLocaleString: Ot
    }), Ct(Ht, "buffer", "b"), Ct(Ht, "byteOffset", "o"), Ct(Ht, "byteLength", "l"), Ct(Ht, "length", "e"), H(Ht, gt, {
      get: function () {
        return this[_t]
      }
    }), t.exports = function (t, e, r, u) {
      var c = t + ((u = !!u) ? "Clamped" : "") + "Array",
        h = "get" + t,
        p = "set" + t,
        d = i[c],
        y = d || {},
        m = d && x(d),
        _ = !d || !a.ABV,
        w = {},
        F = d && d.prototype,
        k = function (t, r) {
          H(t, r, {
            get: function () {
              return function (t, r) {
                var n = t._d;
                return n.v[h](r * e + n.o, wt)
              }(this, r)
            },
            set: function (t) {
              return function (t, r, n) {
                var i = t._d;
                u && (n = (n = Math.round(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), i.v[p](r * e + i.o, n, wt)
              }(this, r, t)
            },
            enumerable: !0
          })
        };
      _ ? (d = r(function (t, r, n, i) {
        f(t, d, c, "_d");
        var o, s, a, u, h = 0,
          p = 0;
        if (b(r)) {
          if (!(r instanceof z || "ArrayBuffer" == (u = S(r)) || "SharedArrayBuffer" == u)) return _t in r ? Pt(d, r) : Tt.call(d, r);
          o = r, p = Et(n, e);
          var y = r.byteLength;
          if (void 0 === i) {
            if (y % e) throw K("Wrong length!");
            if ((s = y - p) < 0) throw K("Wrong length!")
          } else if ((s = g(i) * e) + p > y) throw K("Wrong length!");
          a = s / e
        } else a = v(r), o = new z(s = a * e);
        for (l(t, "_d", {
            b: o,
            o: p,
            l: s,
            e: a,
            v: new Y(o)
          }); h < a;) k(t, h++)
      }), F = d.prototype = E(Ht), l(F, "constructor", d)) : o(function () {
        d(1)
      }) && o(function () {
        new d(-1)
      }) && N(function (t) {
        new d, new d(null), new d(1.5), new d(t)
      }, !0) || (d = r(function (t, r, n, i) {
        var o;
        return f(t, d, c), b(r) ? r instanceof z || "ArrayBuffer" == (o = S(r)) || "SharedArrayBuffer" == o ? void 0 !== i ? new y(r, Et(n, e), i) : void 0 !== n ? new y(r, Et(n, e)) : new y(r) : _t in r ? Pt(d, r) : Tt.call(d, r) : new y(v(r))
      }), G(m !== Function.prototype ? A(y).concat(A(m)) : A(y), function (t) {
        t in d || l(d, t, y[t])
      }), d.prototype = F, n || (F.constructor = d));
      var P = F[dt],
        C = !!P && ("values" == P.name || void 0 == P.name),
        T = Mt.values;
      l(d, vt, !0), l(F, _t, c), l(F, St, !0), l(F, yt, d), (u ? new d(1)[gt] == c : gt in F) || H(F, gt, {
        get: function () {
          return c
        }
      }), w[c] = d, s(s.G + s.W + s.F * (d != y), w), s(s.S, c, {
        BYTES_PER_ELEMENT: e
      }), s(s.S + s.F * o(function () {
        y.of.call(d, 1)
      }), c, {
        from: Tt,
        of: Rt
      }), "BYTES_PER_ELEMENT" in F || l(F, "BYTES_PER_ELEMENT", e), s(s.P, c, Dt), L(c), s(s.P + s.F * Ft, c, {
        set: Lt
      }), s(s.P + s.F * !C, c, Mt), n || F.toString == lt || (F.toString = lt), s(s.P + s.F * o(function () {
        new d(1).slice()
      }), c, {
        slice: Nt
      }), s(s.P + s.F * (o(function () {
        return [1, 2].toLocaleString() != new d([1, 2]).toLocaleString()
      }) || !o(function () {
        F.toLocaleString.call([1, 2])
      })), c, {
        toLocaleString: Ot
      }), D[c] = C ? P : T, n || C || l(F, dt, T)
    }
  } else t.exports = function () {}
}, function (t, e, r) {
  var n = r(126),
    i = r(0),
    o = r(50)("metadata"),
    s = o.store || (o.store = new(r(129))),
    a = function (t, e, r) {
      var i = s.get(t);
      if (!i) {
        if (!r) return;
        s.set(t, i = new n)
      }
      var o = i.get(e);
      if (!o) {
        if (!r) return;
        i.set(e, o = new n)
      }
      return o
    };
  t.exports = {
    store: s,
    map: a,
    has: function (t, e, r) {
      var n = a(e, r, !1);
      return void 0 !== n && n.has(t)
    },
    get: function (t, e, r) {
      var n = a(e, r, !1);
      return void 0 === n ? void 0 : n.get(t)
    },
    set: function (t, e, r, n) {
      a(r, n, !0).set(t, e)
    },
    keys: function (t, e) {
      var r = a(t, e, !1),
        n = [];
      return r && r.forEach(function (t, e) {
        n.push(e)
      }), n
    },
    key: function (t) {
      return void 0 === t || "symbol" == typeof t ? t : String(t)
    },
    exp: function (t) {
      i(i.S, "Reflect", t)
    }
  }
}, function (t, e) {
  t.exports = !1
}, function (t, e, r) {
  var n = r(34)("meta"),
    i = r(5),
    o = r(15),
    s = r(9).f,
    a = 0,
    u = Object.isExtensible || function () {
      return !0
    },
    c = !r(4)(function () {
      return u(Object.preventExtensions({}))
    }),
    f = function (t) {
      s(t, n, {
        value: {
          i: "O" + ++a,
          w: {}
        }
      })
    },
    h = t.exports = {
      KEY: n,
      NEED: !1,
      fastKey: function (t, e) {
        if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!o(t, n)) {
          if (!u(t)) return "F";
          if (!e) return "E";
          f(t)
        }
        return t[n].i
      },
      getWeak: function (t, e) {
        if (!o(t, n)) {
          if (!u(t)) return !0;
          if (!e) return !1;
          f(t)
        }
        return t[n].w
      },
      onFreeze: function (t) {
        return c && h.NEED && u(t) && !o(t, n) && f(t), t
      }
    }
}, function (t, e, r) {
  var n = r(6)("unscopables"),
    i = Array.prototype;
  void 0 == i[n] && r(12)(i, n, {}), t.exports = function (t) {
    i[n][t] = !0
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    }
  }
}, function (t, e) {
  var r = 0,
    n = Math.random();
  t.exports = function (t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + n).toString(36))
  }
}, function (t, e, r) {
  var n = r(105),
    i = r(75);
  t.exports = Object.keys || function t(e) {
    return n(e, i)
  }
}, function (t, e, r) {
  var n = r(22),
    i = Math.max,
    o = Math.min;
  t.exports = function (t, e) {
    return (t = n(t)) < 0 ? i(t + e, 0) : o(t, e)
  }
}, function (t, e, r) {
  var n = r(1),
    i = r(106),
    o = r(75),
    s = r(74)("IE_PROTO"),
    a = function () {},
    u = function () {
      var t, e = r(72)("iframe"),
        n = o.length;
      for (e.style.display = "none", r(76).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; n--;) delete u.prototype[o[n]];
      return u()
    };
  t.exports = Object.create || function t(e, r) {
    var o;
    return null !== e ? (a.prototype = n(e), o = new a, a.prototype = null, o[s] = e) : o = u(), void 0 === r ? o : i(o, r)
  }
}, function (t, e, r) {
  var n = r(105),
    i = r(75).concat("length", "prototype");
  e.f = Object.getOwnPropertyNames || function t(e) {
    return n(e, i)
  }
}, function (t, e, r) {
  "use strict";
  var n = r(2),
    i = r(9),
    o = r(8),
    s = r(6)("species");
  t.exports = function (t) {
    var e = n[t];
    o && e && !e[s] && i.f(e, s, {
      configurable: !0,
      get: function () {
        return this
      }
    })
  }
}, function (t, e) {
  t.exports = function (t, e, r, n) {
    if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(r + ": incorrect invocation!");
    return t
  }
}, function (t, e, r) {
  var n = r(20),
    i = r(118),
    o = r(87),
    s = r(1),
    a = r(7),
    u = r(89),
    c = {},
    f = {};
  (e = t.exports = function (t, e, r, h, l) {
    var p, d, g, v, y = l ? function () {
        return t
      } : u(t),
      m = n(r, h, e ? 2 : 1),
      _ = 0;
    if ("function" != typeof y) throw TypeError(t + " is not iterable!");
    if (o(y)) {
      for (p = a(t.length); p > _; _++)
        if ((v = e ? m(s(d = t[_])[0], d[1]) : m(t[_])) === c || v === f) return v
    } else
      for (g = y.call(t); !(d = g.next()).done;)
        if ((v = i(g, m, d.value, e)) === c || v === f) return v
  }).BREAK = c, e.RETURN = f
}, function (t, e, r) {
  var n = r(13);
  t.exports = function (t, e, r) {
    for (var i in e) n(t, i, e[i], r);
    return t
  }
}, function (t, e, r) {
  var n = r(5);
  t.exports = function (t, e) {
    if (!n(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
    return t
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = function () {
    function t(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e
    }
  }();
  var i = {
      setInterval: function (t) {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        return e.toString = function () {
          return t.toString()
        }, e
      }(function (t, e) {
        return setInterval(t, e)
      }),
      clearInterval: function (t) {
        function e(e) {
          return t.apply(this, arguments)
        }
        return e.toString = function () {
          return t.toString()
        }, e
      }(function (t) {
        return clearInterval(t)
      })
    },
    o = !1,
    s = null;
  e.Global = function () {
    function t() {
      ! function e(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
      }(this, t)
    }
    return t._testing = function t() {
      o = !0
    }, t.setXMLHttpRequest = function t(e) {
      s = e
    }, n(t, null, [{
      key: "location",
      get: function t() {
        if (!o) return location
      }
    }, {
      key: "localStorage",
      get: function t() {
        if (!o && "undefined" != typeof window) return localStorage
      }
    }, {
      key: "sessionStorage",
      get: function t() {
        if (!o && "undefined" != typeof window) return sessionStorage
      }
    }, {
      key: "XMLHttpRequest",
      get: function t() {
        if (!o && "undefined" != typeof window) return s || XMLHttpRequest
      }
    }, {
      key: "timer",
      get: function t() {
        if (!o) return i
      }
    }]), t
  }()
}, function (t, e, r) {
  var n = r(9).f,
    i = r(15),
    o = r(6)("toStringTag");
  t.exports = function (t, e, r) {
    t && !i(t = r ? t : t.prototype, o) && n(t, o, {
      configurable: !0,
      value: e
    })
  }
}, function (t, e, r) {
  var n = r(21),
    i = r(6)("toStringTag"),
    o = "Arguments" == n(function () {
      return arguments
    }());
  t.exports = function (t) {
    var e, r, s;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
      try {
        return t[e]
      } catch (t) {}
    }(e = Object(t), i)) ? r : o ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s
  }
}, function (t, e, r) {
  var n = r(0),
    i = r(25),
    o = r(4),
    s = r(78),
    a = "[" + s + "]",
    u = RegExp("^" + a + a + "*"),
    c = RegExp(a + a + "*$"),
    f = function (t, e, r) {
      var i = {},
        a = o(function () {
          return !!s[t]() || "?????" != "?????" [t]()
        }),
        u = i[t] = a ? e(h) : s[t];
      r && (i[r] = u), n(n.P + n.F * a, "String", i)
    },
    h = f.trim = function (t, e) {
      return t = String(i(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(c, "")), t
    };
  t.exports = f
}, function (t, e) {
  t.exports = {}
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.MetadataService = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3),
    o = r(101);
  e.MetadataService = function () {
    function t(e) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.JsonService;
      if (function n(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), !e) throw i.Log.error("MetadataService: No settings passed to MetadataService"), new Error("settings");
      this._settings = e, this._jsonService = new r(["application/jwk-set+json"])
    }
    return t.prototype.getMetadata = function t() {
      var e = this;
      return this._settings.metadata ? (i.Log.debug("MetadataService.getMetadata: Returning metadata from settings"), Promise.resolve(this._settings.metadata)) : this.metadataUrl ? (i.Log.debug("MetadataService.getMetadata: getting metadata from", this.metadataUrl), this._jsonService.getJson(this.metadataUrl).then(function (t) {
        return i.Log.debug("MetadataService.getMetadata: json received"), e._settings.metadata = t, t
      })) : (i.Log.error("MetadataService.getMetadata: No authority or metadataUrl configured on settings"), Promise.reject(new Error("No authority or metadataUrl configured on settings")))
    }, t.prototype.getIssuer = function t() {
      return this._getMetadataProperty("issuer")
    }, t.prototype.getAuthorizationEndpoint = function t() {
      return this._getMetadataProperty("authorization_endpoint")
    }, t.prototype.getUserInfoEndpoint = function t() {
      return this._getMetadataProperty("userinfo_endpoint")
    }, t.prototype.getTokenEndpoint = function t() {
      var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this._getMetadataProperty("token_endpoint", e)
    }, t.prototype.getCheckSessionIframe = function t() {
      return this._getMetadataProperty("check_session_iframe", !0)
    }, t.prototype.getEndSessionEndpoint = function t() {
      return this._getMetadataProperty("end_session_endpoint", !0)
    }, t.prototype.getRevocationEndpoint = function t() {
      return this._getMetadataProperty("revocation_endpoint", !0)
    }, t.prototype.getKeysEndpoint = function t() {
      return this._getMetadataProperty("jwks_uri", !0)
    }, t.prototype._getMetadataProperty = function t(e) {
      var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return i.Log.debug("MetadataService.getMetadataProperty for: " + e), this.getMetadata().then(function (t) {
        if (i.Log.debug("MetadataService.getMetadataProperty: metadata recieved"), void 0 === t[e]) {
          if (!0 === r) return void i.Log.warn("MetadataService.getMetadataProperty: Metadata does not contain optional property " + e);
          throw i.Log.error("MetadataService.getMetadataProperty: Metadata does not contain property " + e), new Error("Metadata does not contain property " + e)
        }
        return t[e]
      })
    }, t.prototype.getSigningKeys = function t() {
      var e = this;
      return this._settings.signingKeys ? (i.Log.debug("MetadataService.getSigningKeys: Returning signingKeys from settings"), Promise.resolve(this._settings.signingKeys)) : this._getMetadataProperty("jwks_uri").then(function (t) {
        return i.Log.debug("MetadataService.getSigningKeys: jwks_uri received", t), e._jsonService.getJson(t).then(function (t) {
          if (i.Log.debug("MetadataService.getSigningKeys: key set received", t), !t.keys) throw i.Log.error("MetadataService.getSigningKeys: Missing keys on keyset"), new Error("Missing keys on keyset");
          return e._settings.signingKeys = t.keys, e._settings.signingKeys
        })
      })
    }, n(t, [{
      key: "metadataUrl",
      get: function t() {
        return this._metadataUrl || (this._settings.metadataUrl ? this._metadataUrl = this._settings.metadataUrl : (this._metadataUrl = this._settings.authority, this._metadataUrl && this._metadataUrl.indexOf(".well-known/openid-configuration") < 0 && ("/" !== this._metadataUrl[this._metadataUrl.length - 1] && (this._metadataUrl += "/"), this._metadataUrl += ".well-known/openid-configuration"))), this._metadataUrl
      }
    }]), t
  }()
}, function (t, e, r) {
  var n = r(19),
    i = r(2),
    o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
  (t.exports = function (t, e) {
    return o[t] || (o[t] = void 0 !== e ? e : {})
  })("versions", []).push({
    version: n.version,
    mode: r(30) ? "pure" : "global",
    copyright: "?? 2019 Denis Pushkarev (zloirock.ru)"
  })
}, function (t, e, r) {
  var n = r(21);
  t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
    return "String" == n(t) ? t.split("") : Object(t)
  }
}, function (t, e) {
  e.f = {}.propertyIsEnumerable
}, function (t, e, r) {
  "use strict";
  var n = r(1);
  t.exports = function () {
    var t = n(this),
      e = "";
    return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
  }
}, function (t, e, r) {
  var n = r(1),
    i = r(11),
    o = r(6)("species");
  t.exports = function (t, e) {
    var r, s = n(t).constructor;
    return void 0 === s || void 0 == (r = n(s)[o]) ? e : i(r)
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.UrlUtility = void 0;
  var n = r(3),
    i = r(44);
  e.UrlUtility = function () {
    function t() {
      ! function e(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
      }(this, t)
    }
    return t.addQueryParam = function t(e, r, n) {
      return e.indexOf("?") < 0 && (e += "?"), "?" !== e[e.length - 1] && (e += "&"), e += encodeURIComponent(r), e += "=", e += encodeURIComponent(n)
    }, t.parseUrlFragment = function t(e) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#",
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Global;
      "string" != typeof e && (e = o.location.href);
      var s = e.lastIndexOf(r);
      s >= 0 && (e = e.substr(s + 1)), "?" === r && (s = e.indexOf("#")) >= 0 && (e = e.substr(0, s));
      for (var a, u = {}, c = /([^&=]+)=([^&]*)/g, f = 0; a = c.exec(e);)
        if (u[decodeURIComponent(a[1])] = decodeURIComponent(a[2]), f++ > 50) return n.Log.error("UrlUtility.parseUrlFragment: response exceeded expected number of parameters", e), {
          error: "Response exceeded expected number of parameters"
        };
      for (var h in u) return u;
      return {}
    }, t
  }()
}, function (t, e, r) {
  var n = r(16),
    i = r(7),
    o = r(36);
  t.exports = function (t) {
    return function (e, r, s) {
      var a, u = n(e),
        c = i(u.length),
        f = o(s, c);
      if (t && r != r) {
        for (; c > f;)
          if ((a = u[f++]) != a) return !0
      } else
        for (; c > f; f++)
          if ((t || f in u) && u[f] === r) return t || f || 0;
      return !t && -1
    }
  }
}, function (t, e) {
  e.f = Object.getOwnPropertySymbols
}, function (t, e, r) {
  var n = r(21);
  t.exports = Array.isArray || function t(e) {
    return "Array" == n(e)
  }
}, function (t, e, r) {
  var n = r(22),
    i = r(25);
  t.exports = function (t) {
    return function (e, r) {
      var o, s, a = String(i(e)),
        u = n(r),
        c = a.length;
      return u < 0 || u >= c ? t ? "" : void 0 : (o = a.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? a.charAt(u) : o : t ? a.slice(u, u + 2) : s - 56320 + (o - 55296 << 10) + 65536
    }
  }
}, function (t, e, r) {
  var n = r(5),
    i = r(21),
    o = r(6)("match");
  t.exports = function (t) {
    var e;
    return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
  }
}, function (t, e, r) {
  var n = r(6)("iterator"),
    i = !1;
  try {
    var o = [7][n]();
    o.return = function () {
      i = !0
    }, Array.from(o, function () {
      throw 2
    })
  } catch (t) {}
  t.exports = function (t, e) {
    if (!e && !i) return !1;
    var r = !1;
    try {
      var o = [7],
        s = o[n]();
      s.next = function () {
        return {
          done: r = !0
        }
      }, o[n] = function () {
        return s
      }, t(o)
    } catch (t) {}
    return r
  }
}, function (t, e, r) {
  "use strict";
  var n = r(46),
    i = RegExp.prototype.exec;
  t.exports = function (t, e) {
    var r = t.exec;
    if ("function" == typeof r) {
      var o = r.call(t, e);
      if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
      return o
    }
    if ("RegExp" !== n(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
    return i.call(t, e)
  }
}, function (t, e, r) {
  "use strict";
  r(122);
  var n = r(13),
    i = r(12),
    o = r(4),
    s = r(25),
    a = r(6),
    u = r(93),
    c = a("species"),
    f = !o(function () {
      var t = /./;
      return t.exec = function () {
        var t = [];
        return t.groups = {
          a: "7"
        }, t
      }, "7" !== "".replace(t, "$<a>")
    }),
    h = function () {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function () {
        return e.apply(this, arguments)
      };
      var r = "ab".split(t);
      return 2 === r.length && "a" === r[0] && "b" === r[1]
    }();
  t.exports = function (t, e, r) {
    var l = a(t),
      p = !o(function () {
        var e = {};
        return e[l] = function () {
          return 7
        }, 7 != "" [t](e)
      }),
      d = p ? !o(function () {
        var e = !1,
          r = /a/;
        return r.exec = function () {
          return e = !0, null
        }, "split" === t && (r.constructor = {}, r.constructor[c] = function () {
          return r
        }), r[l](""), !e
      }) : void 0;
    if (!p || !d || "replace" === t && !f || "split" === t && !h) {
      var g = /./ [l],
        v = r(s, l, "" [t], function t(e, r, n, i, o) {
          return r.exec === u ? p && !o ? {
            done: !0,
            value: g.call(r, n, i)
          } : {
            done: !0,
            value: e.call(n, r, i)
          } : {
            done: !1
          }
        }),
        y = v[0],
        m = v[1];
      n(String.prototype, t, y), i(RegExp.prototype, l, 2 == e ? function (t, e) {
        return m.call(t, this, e)
      } : function (t) {
        return m.call(t, this)
      })
    }
  }
}, function (t, e, r) {
  var n = r(2).navigator;
  t.exports = n && n.userAgent || ""
}, function (t, e, r) {
  "use strict";
  var n = r(2),
    i = r(0),
    o = r(13),
    s = r(42),
    a = r(31),
    u = r(41),
    c = r(40),
    f = r(5),
    h = r(4),
    l = r(61),
    p = r(45),
    d = r(79);
  t.exports = function (t, e, r, g, v, y) {
    var m = n[t],
      _ = m,
      S = v ? "set" : "add",
      b = _ && _.prototype,
      w = {},
      F = function (t) {
        var e = b[t];
        o(b, t, "delete" == t ? function (t) {
          return !(y && !f(t)) && e.call(this, 0 === t ? 0 : t)
        } : "has" == t ? function t(r) {
          return !(y && !f(r)) && e.call(this, 0 === r ? 0 : r)
        } : "get" == t ? function t(r) {
          return y && !f(r) ? void 0 : e.call(this, 0 === r ? 0 : r)
        } : "add" == t ? function t(r) {
          return e.call(this, 0 === r ? 0 : r), this
        } : function t(r, n) {
          return e.call(this, 0 === r ? 0 : r, n), this
        })
      };
    if ("function" == typeof _ && (y || b.forEach && !h(function () {
        (new _).entries().next()
      }))) {
      var E = new _,
        x = E[S](y ? {} : -0, 1) != E,
        A = h(function () {
          E.has(1)
        }),
        k = l(function (t) {
          new _(t)
        }),
        P = !y && h(function () {
          for (var t = new _, e = 5; e--;) t[S](e, e);
          return !t.has(-0)
        });
      k || ((_ = e(function (e, r) {
        c(e, _, t);
        var n = d(new m, e, _);
        return void 0 != r && u(r, v, n[S], n), n
      })).prototype = b, b.constructor = _), (A || P) && (F("delete"), F("has"), v && F("get")), (P || x) && F(S), y && b.clear && delete b.clear
    } else _ = g.getConstructor(e, t, v, S), s(_.prototype, r), a.NEED = !0;
    return p(_, t), w[t] = _, i(i.G + i.W + i.F * (_ != m), w), y || g.setStrong(_, t, v), _
  }
}, function (t, e, r) {
  for (var n, i = r(2), o = r(12), s = r(34), a = s("typed_array"), u = s("view"), c = !(!i.ArrayBuffer || !i.DataView), f = c, h = 0, l = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); h < 9;)(n = i[l[h++]]) ? (o(n.prototype, a, !0), o(n.prototype, u, !0)) : f = !1;
  t.exports = {
    ABV: c,
    CONSTR: f,
    TYPED: a,
    VIEW: u
  }
}, function (t, e, r) {
  "use strict";
  t.exports = r(30) || !r(4)(function () {
    var t = Math.random();
    __defineSetter__.call(null, t, function () {}), delete r(2)[t]
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0);
  t.exports = function (t) {
    n(n.S, t, {
      of: function t() {
        for (var e = arguments.length, r = new Array(e); e--;) r[e] = arguments[e];
        return new this(r)
      }
    })
  }
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(11),
    o = r(20),
    s = r(41);
  t.exports = function (t) {
    n(n.S, t, {
      from: function t(e) {
        var r, n, a, u, c = arguments[1];
        return i(this), (r = void 0 !== c) && i(c), void 0 == e ? new this : (n = [], r ? (a = 0, u = o(c, arguments[2], 2), s(e, !1, function (t) {
          n.push(u(t, a++))
        })) : s(e, !1, n.push, n), new this(n))
      }
    })
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.JoseUtil = void 0;
  var n = r(358),
    i = function o(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(r(364));
  e.JoseUtil = (0, i.default)({
    jws: n.jws,
    KeyUtil: n.KeyUtil,
    X509: n.X509,
    crypto: n.crypto,
    hextob64u: n.hextob64u,
    b64tohex: n.b64tohex,
    AllowedSigningAlgs: n.AllowedSigningAlgs
  })
}, function (t, e) {
  var r;
  r = function () {
    return this
  }();
  try {
    r = r || new Function("return this")()
  } catch (t) {
    "object" == typeof window && (r = window)
  }
  t.exports = r
}, function (t, e, r) {
  var n = r(5),
    i = r(2).document,
    o = n(i) && n(i.createElement);
  t.exports = function (t) {
    return o ? i.createElement(t) : {}
  }
}, function (t, e, r) {
  var n = r(2),
    i = r(19),
    o = r(30),
    s = r(104),
    a = r(9).f;
  t.exports = function (t) {
    var e = i.Symbol || (i.Symbol = o ? {} : n.Symbol || {});
    "_" == t.charAt(0) || t in e || a(e, t, {
      value: s.f(t)
    })
  }
}, function (t, e, r) {
  var n = r(50)("keys"),
    i = r(34);
  t.exports = function (t) {
    return n[t] || (n[t] = i(t))
  }
}, function (t, e) {
  t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, r) {
  var n = r(2).document;
  t.exports = n && n.documentElement
}, function (t, e, r) {
  var n = r(5),
    i = r(1),
    o = function (t, e) {
      if (i(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    };
  t.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, n) {
      try {
        (n = r(20)(Function.call, r(17).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
      } catch (t) {
        e = !0
      }
      return function t(r, i) {
        return o(r, i), e ? r.__proto__ = i : n(r, i), r
      }
    }({}, !1) : void 0),
    check: o
  }
}, function (t, e) {
  t.exports = "\t\n\v\f\r ??????????????????????????????????????????????????\u2028\u2029\ufeff"
}, function (t, e, r) {
  var n = r(5),
    i = r(77).set;
  t.exports = function (t, e, r) {
    var o, s = e.constructor;
    return s !== r && "function" == typeof s && (o = s.prototype) !== r.prototype && n(o) && i && i(t, o), t
  }
}, function (t, e, r) {
  "use strict";
  var n = r(22),
    i = r(25);
  t.exports = function t(e) {
    var r = String(i(this)),
      o = "",
      s = n(e);
    if (s < 0 || s == 1 / 0) throw RangeError("Count can't be negative");
    for (; s > 0;
      (s >>>= 1) && (r += r)) 1 & s && (o += r);
    return o
  }
}, function (t, e) {
  t.exports = Math.sign || function t(e) {
    return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
  }
}, function (t, e) {
  var r = Math.expm1;
  t.exports = !r || r(10) > 22025.465794806718 || r(10) < 22025.465794806718 || -2e-17 != r(-2e-17) ? function t(e) {
    return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
  } : r
}, function (t, e, r) {
  "use strict";
  var n = r(30),
    i = r(0),
    o = r(13),
    s = r(12),
    a = r(48),
    u = r(84),
    c = r(45),
    f = r(18),
    h = r(6)("iterator"),
    l = !([].keys && "next" in [].keys()),
    p = function () {
      return this
    };
  t.exports = function (t, e, r, d, g, v, y) {
    u(r, e, d);
    var m, _, S, b = function (t) {
        if (!l && t in x) return x[t];
        switch (t) {
          case "keys":
            return function e() {
              return new r(this, t)
            };
          case "values":
            return function e() {
              return new r(this, t)
            }
        }
        return function e() {
          return new r(this, t)
        }
      },
      w = e + " Iterator",
      F = "values" == g,
      E = !1,
      x = t.prototype,
      A = x[h] || x["@@iterator"] || g && x[g],
      k = A || b(g),
      P = g ? F ? b("entries") : k : void 0,
      C = "Array" == e && x.entries || A;
    if (C && (S = f(C.call(new t))) !== Object.prototype && S.next && (c(S, w, !0), n || "function" == typeof S[h] || s(S, h, p)), F && A && "values" !== A.name && (E = !0, k = function t() {
        return A.call(this)
      }), n && !y || !l && !E && x[h] || s(x, h, k), a[e] = k, a[w] = p, g)
      if (m = {
          values: F ? k : b("values"),
          keys: v ? k : b("keys"),
          entries: P
        }, y)
        for (_ in m) _ in x || o(x, _, m[_]);
      else i(i.P + i.F * (l || E), e, m);
    return m
  }
}, function (t, e, r) {
  "use strict";
  var n = r(37),
    i = r(33),
    o = r(45),
    s = {};
  r(12)(s, r(6)("iterator"), function () {
    return this
  }), t.exports = function (t, e, r) {
    t.prototype = n(s, {
      next: i(1, r)
    }), o(t, e + " Iterator")
  }
}, function (t, e, r) {
  var n = r(60),
    i = r(25);
  t.exports = function (t, e, r) {
    if (n(e)) throw TypeError("String#" + r + " doesn't accept regex!");
    return String(i(t))
  }
}, function (t, e, r) {
  var n = r(6)("match");
  t.exports = function (t) {
    var e = /./;
    try {
      "/./" [t](e)
    } catch (r) {
      try {
        return e[n] = !1, !"/./" [t](e)
      } catch (t) {}
    }
    return !0
  }
}, function (t, e, r) {
  var n = r(48),
    i = r(6)("iterator"),
    o = Array.prototype;
  t.exports = function (t) {
    return void 0 !== t && (n.Array === t || o[i] === t)
  }
}, function (t, e, r) {
  "use strict";
  var n = r(9),
    i = r(33);
  t.exports = function (t, e, r) {
    e in t ? n.f(t, e, i(0, r)) : t[e] = r
  }
}, function (t, e, r) {
  var n = r(46),
    i = r(6)("iterator"),
    o = r(48);
  t.exports = r(19).getIteratorMethod = function (t) {
    if (void 0 != t) return t[i] || t["@@iterator"] || o[n(t)]
  }
}, function (t, e, r) {
  var n = r(245);
  t.exports = function (t, e) {
    return new(n(t))(e)
  }
}, function (t, e, r) {
  "use strict";
  var n = r(10),
    i = r(36),
    o = r(7);
  t.exports = function t(e) {
    for (var r = n(this), s = o(r.length), a = arguments.length, u = i(a > 1 ? arguments[1] : void 0, s), c = a > 2 ? arguments[2] : void 0, f = void 0 === c ? s : i(c, s); f > u;) r[u++] = e;
    return r
  }
}, function (t, e, r) {
  "use strict";
  var n = r(32),
    i = r(121),
    o = r(48),
    s = r(16);
  t.exports = r(83)(Array, "Array", function (t, e) {
    this._t = s(t), this._i = 0, this._k = e
  }, function () {
    var t = this._t,
      e = this._k,
      r = this._i++;
    return !t || r >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
  }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries")
}, function (t, e, r) {
  "use strict";
  var n, i, o = r(53),
    s = RegExp.prototype.exec,
    a = String.prototype.replace,
    u = s,
    c = (n = /a/, i = /b*/g, s.call(n, "a"), s.call(i, "a"), 0 !== n.lastIndex || 0 !== i.lastIndex),
    f = void 0 !== /()??/.exec("")[1];
  (c || f) && (u = function t(e) {
    var r, n, i, u, h = this;
    return f && (n = new RegExp("^" + h.source + "$(?!\\s)", o.call(h))), c && (r = h.lastIndex), i = s.call(h, e), c && i && (h.lastIndex = h.global ? i.index + i[0].length : r), f && i && i.length > 1 && a.call(i[0], n, function () {
      for (u = 1; u < arguments.length - 2; u++) void 0 === arguments[u] && (i[u] = void 0)
    }), i
  }), t.exports = u
}, function (t, e, r) {
  "use strict";
  var n = r(59)(!0);
  t.exports = function (t, e, r) {
    return e + (r ? n(t, e).length : 1)
  }
}, function (t, e, r) {
  var n, i, o, s = r(20),
    a = r(111),
    u = r(76),
    c = r(72),
    f = r(2),
    h = f.process,
    l = f.setImmediate,
    p = f.clearImmediate,
    d = f.MessageChannel,
    g = f.Dispatch,
    v = 0,
    y = {},
    m = function () {
      var t = +this;
      if (y.hasOwnProperty(t)) {
        var e = y[t];
        delete y[t], e()
      }
    },
    _ = function (t) {
      m.call(t.data)
    };
  l && p || (l = function t(e) {
    for (var r = [], i = 1; arguments.length > i;) r.push(arguments[i++]);
    return y[++v] = function () {
      a("function" == typeof e ? e : Function(e), r)
    }, n(v), v
  }, p = function t(e) {
    delete y[e]
  }, "process" == r(21)(h) ? n = function (t) {
    h.nextTick(s(m, t, 1))
  } : g && g.now ? n = function (t) {
    g.now(s(m, t, 1))
  } : d ? (o = (i = new d).port2, i.port1.onmessage = _, n = s(o.postMessage, o, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (n = function (t) {
    f.postMessage(t + "", "*")
  }, f.addEventListener("message", _, !1)) : n = "onreadystatechange" in c("script") ? function (t) {
    u.appendChild(c("script")).onreadystatechange = function () {
      u.removeChild(this), m.call(t)
    }
  } : function (t) {
    setTimeout(s(m, t, 1), 0)
  }), t.exports = {
    set: l,
    clear: p
  }
}, function (t, e, r) {
  var n = r(2),
    i = r(95).set,
    o = n.MutationObserver || n.WebKitMutationObserver,
    s = n.process,
    a = n.Promise,
    u = "process" == r(21)(s);
  t.exports = function () {
    var t, e, r, c = function () {
      var n, i;
      for (u && (n = s.domain) && n.exit(); t;) {
        i = t.fn, t = t.next;
        try {
          i()
        } catch (n) {
          throw t ? r() : e = void 0, n
        }
      }
      e = void 0, n && n.enter()
    };
    if (u) r = function () {
      s.nextTick(c)
    };
    else if (!o || n.navigator && n.navigator.standalone)
      if (a && a.resolve) {
        var f = a.resolve(void 0);
        r = function () {
          f.then(c)
        }
      } else r = function () {
        i.call(n, c)
      };
    else {
      var h = !0,
        l = document.createTextNode("");
      new o(c).observe(l, {
        characterData: !0
      }), r = function () {
        l.data = h = !h
      }
    }
    return function (n) {
      var i = {
        fn: n,
        next: void 0
      };
      e && (e.next = i), t || (t = i, r()), e = i
    }
  }
}, function (t, e, r) {
  "use strict";
  var n = r(11);
  t.exports.f = function (t) {
    return new function e(t) {
      var e, r;
      this.promise = new t(function (t, n) {
        if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
        e = t, r = n
      }), this.resolve = n(e), this.reject = n(r)
    }(t)
  }
}, function (t, e, r) {
  "use strict";
  var n = r(2),
    i = r(8),
    o = r(30),
    s = r(66),
    a = r(12),
    u = r(42),
    c = r(4),
    f = r(40),
    h = r(22),
    l = r(7),
    p = r(131),
    d = r(38).f,
    g = r(9).f,
    v = r(91),
    y = r(45),
    m = "prototype",
    _ = "Wrong index!",
    S = n.ArrayBuffer,
    b = n.DataView,
    w = n.Math,
    F = n.RangeError,
    E = n.Infinity,
    x = S,
    A = w.abs,
    k = w.pow,
    P = w.floor,
    C = w.log,
    T = w.LN2,
    R = i ? "_b" : "buffer",
    I = i ? "_l" : "byteLength",
    O = i ? "_o" : "byteOffset";

  function D(t, e, r) {
    var n, i, o, s = new Array(r),
      a = 8 * r - e - 1,
      u = (1 << a) - 1,
      c = u >> 1,
      f = 23 === e ? k(2, -24) - k(2, -77) : 0,
      h = 0,
      l = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
    for ((t = A(t)) != t || t === E ? (i = t != t ? 1 : 0, n = u) : (n = P(C(t) / T), t * (o = k(2, -n)) < 1 && (n--, o *= 2), (t += n + c >= 1 ? f / o : f * k(2, 1 - c)) * o >= 2 && (n++, o /= 2), n + c >= u ? (i = 0, n = u) : n + c >= 1 ? (i = (t * o - 1) * k(2, e), n += c) : (i = t * k(2, c - 1) * k(2, e), n = 0)); e >= 8; s[h++] = 255 & i, i /= 256, e -= 8);
    for (n = n << e | i, a += e; a > 0; s[h++] = 255 & n, n /= 256, a -= 8);
    return s[--h] |= 128 * l, s
  }

  function N(t, e, r) {
    var n, i = 8 * r - e - 1,
      o = (1 << i) - 1,
      s = o >> 1,
      a = i - 7,
      u = r - 1,
      c = t[u--],
      f = 127 & c;
    for (c >>= 7; a > 0; f = 256 * f + t[u], u--, a -= 8);
    for (n = f & (1 << -a) - 1, f >>= -a, a += e; a > 0; n = 256 * n + t[u], u--, a -= 8);
    if (0 === f) f = 1 - s;
    else {
      if (f === o) return n ? NaN : c ? -E : E;
      n += k(2, e), f -= s
    }
    return (c ? -1 : 1) * n * k(2, f - e)
  }

  function L(t) {
    return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
  }

  function M(t) {
    return [255 & t]
  }

  function j(t) {
    return [255 & t, t >> 8 & 255]
  }

  function U(t) {
    return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
  }

  function B(t) {
    return D(t, 52, 8)
  }

  function H(t) {
    return D(t, 23, 4)
  }

  function V(t, e, r) {
    g(t[m], e, {
      get: function () {
        return this[r]
      }
    })
  }

  function K(t, e, r, n) {
    var i = p(+r);
    if (i + e > t[I]) throw F(_);
    var o = t[R]._b,
      s = i + t[O],
      a = o.slice(s, s + e);
    return n ? a : a.reverse()
  }

  function q(t, e, r, n, i, o) {
    var s = p(+r);
    if (s + e > t[I]) throw F(_);
    for (var a = t[R]._b, u = s + t[O], c = n(+i), f = 0; f < e; f++) a[u + f] = c[o ? f : e - f - 1]
  }
  if (s.ABV) {
    if (!c(function () {
        S(1)
      }) || !c(function () {
        new S(-1)
      }) || c(function () {
        return new S, new S(1.5), new S(NaN), "ArrayBuffer" != S.name
      })) {
      for (var W, J = (S = function t(e) {
          return f(this, S), new x(p(e))
        })[m] = x[m], z = d(x), Y = 0; z.length > Y;)(W = z[Y++]) in S || a(S, W, x[W]);
      o || (J.constructor = S)
    }
    var G = new b(new S(2)),
      X = b[m].setInt8;
    G.setInt8(0, 2147483648), G.setInt8(1, 2147483649), !G.getInt8(0) && G.getInt8(1) || u(b[m], {
      setInt8: function t(e, r) {
        X.call(this, e, r << 24 >> 24)
      },
      setUint8: function t(e, r) {
        X.call(this, e, r << 24 >> 24)
      }
    }, !0)
  } else S = function t(e) {
    f(this, S, "ArrayBuffer");
    var r = p(e);
    this._b = v.call(new Array(r), 0), this[I] = r
  }, b = function t(e, r, n) {
    f(this, b, "DataView"), f(e, S, "DataView");
    var i = e[I],
      o = h(r);
    if (o < 0 || o > i) throw F("Wrong offset!");
    if (o + (n = void 0 === n ? i - o : l(n)) > i) throw F("Wrong length!");
    this[R] = e, this[O] = o, this[I] = n
  }, i && (V(S, "byteLength", "_l"), V(b, "buffer", "_b"), V(b, "byteLength", "_l"), V(b, "byteOffset", "_o")), u(b[m], {
    getInt8: function t(e) {
      return K(this, 1, e)[0] << 24 >> 24
    },
    getUint8: function t(e) {
      return K(this, 1, e)[0]
    },
    getInt16: function t(e) {
      var r = K(this, 2, e, arguments[1]);
      return (r[1] << 8 | r[0]) << 16 >> 16
    },
    getUint16: function t(e) {
      var r = K(this, 2, e, arguments[1]);
      return r[1] << 8 | r[0]
    },
    getInt32: function t(e) {
      return L(K(this, 4, e, arguments[1]))
    },
    getUint32: function t(e) {
      return L(K(this, 4, e, arguments[1])) >>> 0
    },
    getFloat32: function t(e) {
      return N(K(this, 4, e, arguments[1]), 23, 4)
    },
    getFloat64: function t(e) {
      return N(K(this, 8, e, arguments[1]), 52, 8)
    },
    setInt8: function t(e, r) {
      q(this, 1, e, M, r)
    },
    setUint8: function t(e, r) {
      q(this, 1, e, M, r)
    },
    setInt16: function t(e, r) {
      q(this, 2, e, j, r, arguments[2])
    },
    setUint16: function t(e, r) {
      q(this, 2, e, j, r, arguments[2])
    },
    setInt32: function t(e, r) {
      q(this, 4, e, U, r, arguments[2])
    },
    setUint32: function t(e, r) {
      q(this, 4, e, U, r, arguments[2])
    },
    setFloat32: function t(e, r) {
      q(this, 4, e, H, r, arguments[2])
    },
    setFloat64: function t(e, r) {
      q(this, 8, e, B, r, arguments[2])
    }
  });
  y(S, "ArrayBuffer"), y(b, "DataView"), a(b[m], s.VIEW, !0), e.ArrayBuffer = S, e.DataView = b
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.OidcClientSettings = void 0;
  var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    i = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    o = r(3),
    s = r(100),
    a = r(356),
    u = r(49);
  var c = "id_token",
    f = "openid",
    h = 900,
    l = 300;
  e.OidcClientSettings = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = e.authority,
        i = e.metadataUrl,
        o = e.metadata,
        p = e.signingKeys,
        d = e.client_id,
        g = e.client_secret,
        v = e.response_type,
        y = void 0 === v ? c : v,
        m = e.scope,
        _ = void 0 === m ? f : m,
        S = e.redirect_uri,
        b = e.post_logout_redirect_uri,
        w = e.prompt,
        F = e.display,
        E = e.max_age,
        x = e.ui_locales,
        A = e.acr_values,
        k = e.resource,
        P = e.response_mode,
        C = e.filterProtocolClaims,
        T = void 0 === C || C,
        R = e.loadUserInfo,
        I = void 0 === R || R,
        O = e.staleStateAge,
        D = void 0 === O ? h : O,
        N = e.clockSkew,
        L = void 0 === N ? l : N,
        M = e.userInfoJwtIssuer,
        j = void 0 === M ? "OP" : M,
        U = e.stateStore,
        B = void 0 === U ? new s.WebStorageStateStore : U,
        H = e.ResponseValidatorCtor,
        V = void 0 === H ? a.ResponseValidator : H,
        K = e.MetadataServiceCtor,
        q = void 0 === K ? u.MetadataService : K,
        W = e.extraQueryParams,
        J = void 0 === W ? {} : W;
      ! function z(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this._authority = r, this._metadataUrl = i, this._metadata = o, this._signingKeys = p, this._client_id = d, this._client_secret = g, this._response_type = y, this._scope = _, this._redirect_uri = S, this._post_logout_redirect_uri = b, this._prompt = w, this._display = F, this._max_age = E, this._ui_locales = x, this._acr_values = A, this._resource = k, this._response_mode = P, this._filterProtocolClaims = !!T, this._loadUserInfo = !!I, this._staleStateAge = D, this._clockSkew = L, this._userInfoJwtIssuer = j, this._stateStore = B, this._validator = new V(this), this._metadataService = new q(this), this._extraQueryParams = "object" === (void 0 === J ? "undefined" : n(J)) ? J : {}
    }
    return i(t, [{
      key: "client_id",
      get: function t() {
        return this._client_id
      },
      set: function t(e) {
        if (this._client_id) throw o.Log.error("OidcClientSettings.set_client_id: client_id has already been assigned."), new Error("client_id has already been assigned.");
        this._client_id = e
      }
    }, {
      key: "client_secret",
      get: function t() {
        return this._client_secret
      }
    }, {
      key: "response_type",
      get: function t() {
        return this._response_type
      }
    }, {
      key: "scope",
      get: function t() {
        return this._scope
      }
    }, {
      key: "redirect_uri",
      get: function t() {
        return this._redirect_uri
      }
    }, {
      key: "post_logout_redirect_uri",
      get: function t() {
        return this._post_logout_redirect_uri
      }
    }, {
      key: "prompt",
      get: function t() {
        return this._prompt
      }
    }, {
      key: "display",
      get: function t() {
        return this._display
      }
    }, {
      key: "max_age",
      get: function t() {
        return this._max_age
      }
    }, {
      key: "ui_locales",
      get: function t() {
        return this._ui_locales
      }
    }, {
      key: "acr_values",
      get: function t() {
        return this._acr_values
      }
    }, {
      key: "resource",
      get: function t() {
        return this._resource
      }
    }, {
      key: "response_mode",
      get: function t() {
        return this._response_mode
      }
    }, {
      key: "authority",
      get: function t() {
        return this._authority
      },
      set: function t(e) {
        if (this._authority) throw o.Log.error("OidcClientSettings.set_authority: authority has already been assigned."), new Error("authority has already been assigned.");
        this._authority = e
      }
    }, {
      key: "metadataUrl",
      get: function t() {
        return this._metadataUrl || (this._metadataUrl = this.authority, this._metadataUrl && this._metadataUrl.indexOf(".well-known/openid-configuration") < 0 && ("/" !== this._metadataUrl[this._metadataUrl.length - 1] && (this._metadataUrl += "/"), this._metadataUrl += ".well-known/openid-configuration")), this._metadataUrl
      }
    }, {
      key: "metadata",
      get: function t() {
        return this._metadata
      },
      set: function t(e) {
        this._metadata = e
      }
    }, {
      key: "signingKeys",
      get: function t() {
        return this._signingKeys
      },
      set: function t(e) {
        this._signingKeys = e
      }
    }, {
      key: "filterProtocolClaims",
      get: function t() {
        return this._filterProtocolClaims
      }
    }, {
      key: "loadUserInfo",
      get: function t() {
        return this._loadUserInfo
      }
    }, {
      key: "staleStateAge",
      get: function t() {
        return this._staleStateAge
      }
    }, {
      key: "clockSkew",
      get: function t() {
        return this._clockSkew
      }
    }, {
      key: "userInfoJwtIssuer",
      get: function t() {
        return this._userInfoJwtIssuer
      }
    }, {
      key: "stateStore",
      get: function t() {
        return this._stateStore
      }
    }, {
      key: "validator",
      get: function t() {
        return this._validator
      }
    }, {
      key: "metadataService",
      get: function t() {
        return this._metadataService
      }
    }, {
      key: "extraQueryParams",
      get: function t() {
        return this._extraQueryParams
      },
      set: function t(e) {
        "object" === (void 0 === e ? "undefined" : n(e)) ? this._extraQueryParams = e: this._extraQueryParams = {}
      }
    }]), t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.WebStorageStateStore = void 0;
  var n = r(3),
    i = r(44);
  e.WebStorageStateStore = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = e.prefix,
        n = void 0 === r ? "oidc." : r,
        o = e.store,
        s = void 0 === o ? i.Global.localStorage : o;
      ! function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this._store = s, this._prefix = n
    }
    return t.prototype.set = function t(e, r) {
      return n.Log.debug("WebStorageStateStore.set", e), e = this._prefix + e, this._store.setItem(e, r), Promise.resolve()
    }, t.prototype.get = function t(e) {
      n.Log.debug("WebStorageStateStore.get", e), e = this._prefix + e;
      var r = this._store.getItem(e);
      return Promise.resolve(r)
    }, t.prototype.remove = function t(e) {
      n.Log.debug("WebStorageStateStore.remove", e), e = this._prefix + e;
      var r = this._store.getItem(e);
      return this._store.removeItem(e), Promise.resolve(r)
    }, t.prototype.getAllKeys = function t() {
      n.Log.debug("WebStorageStateStore.getAllKeys");
      for (var e = [], r = 0; r < this._store.length; r++) {
        var i = this._store.key(r);
        0 === i.indexOf(this._prefix) && e.push(i.substr(this._prefix.length))
      }
      return Promise.resolve(e)
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.JsonService = void 0;
  var n = r(3),
    i = r(44);
  e.JsonService = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Global.XMLHttpRequest,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      ! function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), e && Array.isArray(e) ? this._contentTypes = e.slice() : this._contentTypes = [], this._contentTypes.push("application/json"), n && this._contentTypes.push("application/jwt"), this._XMLHttpRequest = r, this._jwtHandler = n
    }
    return t.prototype.getJson = function t(e, r) {
      var i = this;
      if (!e) throw n.Log.error("JsonService.getJson: No url passed"), new Error("url");
      return n.Log.debug("JsonService.getJson, url: ", e), new Promise(function (t, o) {
        var s = new i._XMLHttpRequest;
        s.open("GET", e);
        var a = i._contentTypes,
          u = i._jwtHandler;
        s.onload = function () {
          if (n.Log.debug("JsonService.getJson: HTTP response received, status", s.status), 200 === s.status) {
            var r = s.getResponseHeader("Content-Type");
            if (r) {
              var i = a.find(function (t) {
                if (r.startsWith(t)) return !0
              });
              if ("application/jwt" == i) return void u(s).then(t, o);
              if (i) try {
                return void t(JSON.parse(s.responseText))
              } catch (t) {
                return n.Log.error("JsonService.getJson: Error parsing JSON response", t.message), void o(t)
              }
            }
            o(Error("Invalid response Content-Type: " + r + ", from URL: " + e))
          } else o(Error(s.statusText + " (" + s.status + ")"))
        }, s.onerror = function () {
          n.Log.error("JsonService.getJson: network error"), o(Error("Network Error"))
        }, r && (n.Log.debug("JsonService.getJson: token passed, setting Authorization header"), s.setRequestHeader("Authorization", "Bearer " + r)), s.send()
      })
    }, t.prototype.postForm = function t(e, r) {
      var i = this;
      if (!e) throw n.Log.error("JsonService.postForm: No url passed"), new Error("url");
      return n.Log.debug("JsonService.postForm, url: ", e), new Promise(function (t, o) {
        var s = new i._XMLHttpRequest;
        s.open("POST", e);
        var a = i._contentTypes;
        s.onload = function () {
          if (n.Log.debug("JsonService.postForm: HTTP response received, status", s.status), 200 !== s.status) {
            if (400 === s.status)
              if (i = s.getResponseHeader("Content-Type"))
                if (a.find(function (t) {
                    if (i.startsWith(t)) return !0
                  })) try {
                  var r = JSON.parse(s.responseText);
                  if (r && r.error) return n.Log.error("JsonService.postForm: Error from server: ", r.error), void o(new Error(r.error))
                } catch (t) {
                  return n.Log.error("JsonService.postForm: Error parsing JSON response", t.message), void o(t)
                }
            o(Error(s.statusText + " (" + s.status + ")"))
          } else {
            var i;
            if ((i = s.getResponseHeader("Content-Type")) && a.find(function (t) {
                if (i.startsWith(t)) return !0
              })) try {
              return void t(JSON.parse(s.responseText))
            } catch (t) {
              return n.Log.error("JsonService.postForm: Error parsing JSON response", t.message), void o(t)
            }
            o(Error("Invalid response Content-Type: " + i + ", from URL: " + e))
          }
        }, s.onerror = function () {
          n.Log.error("JsonService.postForm: network error"), o(Error("Network Error"))
        };
        var u = "";
        for (var c in r) {
          var f = r[c];
          f && (u.length > 0 && (u += "&"), u += encodeURIComponent(c), u += "=", u += encodeURIComponent(f))
        }
        s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.send(u)
      })
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.State = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3),
    o = function s(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(r(144));
  e.State = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = e.id,
        n = e.data,
        i = e.created,
        s = e.request_type;
      ! function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this._id = r || (0, o.default)(), this._data = n, this._created = "number" == typeof i && i > 0 ? i : parseInt(Date.now() / 1e3), this._request_type = s
    }
    return t.prototype.toStorageString = function t() {
      return i.Log.debug("State.toStorageString"), JSON.stringify({
        id: this.id,
        data: this.data,
        created: this.created,
        request_type: this.request_type
      })
    }, t.fromStorageString = function e(r) {
      return i.Log.debug("State.fromStorageString"), new t(JSON.parse(r))
    }, t.clearStaleState = function e(r, n) {
      var o = Date.now() / 1e3 - n;
      return r.getAllKeys().then(function (e) {
        i.Log.debug("State.clearStaleState: got keys", e);
        for (var n = [], s = function s(a) {
            var c = e[a];
            u = r.get(c).then(function (e) {
              var n = !1;
              if (e) try {
                var s = t.fromStorageString(e);
                i.Log.debug("State.clearStaleState: got item from key: ", c, s.created), s.created <= o && (n = !0)
              } catch (t) {
                i.Log.error("State.clearStaleState: Error parsing state for key", c, t.message), n = !0
              } else i.Log.debug("State.clearStaleState: no item in storage for key: ", c), n = !0;
              if (n) return i.Log.debug("State.clearStaleState: removed item for key: ", c), r.remove(c)
            }), n.push(u)
          }, a = 0; a < e.length; a++) {
          var u;
          s(a)
        }
        return i.Log.debug("State.clearStaleState: waiting on promise count:", n.length), Promise.all(n)
      })
    }, n(t, [{
      key: "id",
      get: function t() {
        return this._id
      }
    }, {
      key: "data",
      get: function t() {
        return this._data
      }
    }, {
      key: "created",
      get: function t() {
        return this._created
      }
    }, {
      key: "request_type",
      get: function t() {
        return this._request_type
      }
    }]), t
  }()
}, function (t, e, r) {
  t.exports = !r(8) && !r(4)(function () {
    return 7 != Object.defineProperty(r(72)("div"), "a", {
      get: function () {
        return 7
      }
    }).a
  })
}, function (t, e, r) {
  e.f = r(6)
}, function (t, e, r) {
  var n = r(15),
    i = r(16),
    o = r(56)(!1),
    s = r(74)("IE_PROTO");
  t.exports = function (t, e) {
    var r, a = i(t),
      u = 0,
      c = [];
    for (r in a) r != s && n(a, r) && c.push(r);
    for (; e.length > u;) n(a, r = e[u++]) && (~o(c, r) || c.push(r));
    return c
  }
}, function (t, e, r) {
  var n = r(9),
    i = r(1),
    o = r(35);
  t.exports = r(8) ? Object.defineProperties : function t(e, r) {
    i(e);
    for (var s, a = o(r), u = a.length, c = 0; u > c;) n.f(e, s = a[c++], r[s]);
    return e
  }
}, function (t, e, r) {
  var n = r(16),
    i = r(38).f,
    o = {}.toString,
    s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  t.exports.f = function t(e) {
    return s && "[object Window]" == o.call(e) ? function (t) {
      try {
        return i(t)
      } catch (t) {
        return s.slice()
      }
    }(e) : i(n(e))
  }
}, function (t, e, r) {
  "use strict";
  var n = r(35),
    i = r(57),
    o = r(52),
    s = r(10),
    a = r(51),
    u = Object.assign;
  t.exports = !u || r(4)(function () {
    var t = {},
      e = {},
      r = Symbol(),
      n = "abcdefghijklmnopqrst";
    return t[r] = 7, n.split("").forEach(function (t) {
      e[t] = t
    }), 7 != u({}, t)[r] || Object.keys(u({}, e)).join("") != n
  }) ? function t(e, r) {
    for (var u = s(e), c = arguments.length, f = 1, h = i.f, l = o.f; c > f;)
      for (var p, d = a(arguments[f++]), g = h ? n(d).concat(h(d)) : n(d), v = g.length, y = 0; v > y;) l.call(d, p = g[y++]) && (u[p] = d[p]);
    return u
  } : u
}, function (t, e) {
  t.exports = Object.is || function t(e, r) {
    return e === r ? 0 !== e || 1 / e == 1 / r : e != e && r != r
  }
}, function (t, e, r) {
  "use strict";
  var n = r(11),
    i = r(5),
    o = r(111),
    s = [].slice,
    a = {};
  t.exports = Function.bind || function t(e) {
    var r = n(this),
      u = s.call(arguments, 1),
      c = function () {
        var t = u.concat(s.call(arguments));
        return this instanceof c ? function (t, e, r) {
          if (!(e in a)) {
            for (var n = [], i = 0; i < e; i++) n[i] = "a[" + i + "]";
            a[e] = Function("F,a", "return new F(" + n.join(",") + ")")
          }
          return a[e](t, r)
        }(r, t.length, t) : o(r, t, e)
      };
    return i(r.prototype) && (c.prototype = r.prototype), c
  }
}, function (t, e) {
  t.exports = function (t, e, r) {
    var n = void 0 === r;
    switch (e.length) {
      case 0:
        return n ? t() : t.call(r);
      case 1:
        return n ? t(e[0]) : t.call(r, e[0]);
      case 2:
        return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
      case 3:
        return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
      case 4:
        return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3])
    }
    return t.apply(r, e)
  }
}, function (t, e, r) {
  var n = r(2).parseInt,
    i = r(47).trim,
    o = r(78),
    s = /^[-+]?0[xX]/;
  t.exports = 8 !== n(o + "08") || 22 !== n(o + "0x16") ? function t(e, r) {
    var o = i(String(e), 3);
    return n(o, r >>> 0 || (s.test(o) ? 16 : 10))
  } : n
}, function (t, e, r) {
  var n = r(2).parseFloat,
    i = r(47).trim;
  t.exports = 1 / n(r(78) + "-0") != -1 / 0 ? function t(e) {
    var r = i(String(e), 3),
      o = n(r);
    return 0 === o && "-" == r.charAt(0) ? -0 : o
  } : n
}, function (t, e, r) {
  var n = r(21);
  t.exports = function (t, e) {
    if ("number" != typeof t && "Number" != n(t)) throw TypeError(e);
    return +t
  }
}, function (t, e, r) {
  var n = r(5),
    i = Math.floor;
  t.exports = function t(e) {
    return !n(e) && isFinite(e) && i(e) === e
  }
}, function (t, e) {
  t.exports = Math.log1p || function t(e) {
    return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
  }
}, function (t, e, r) {
  var n = r(81),
    i = Math.pow,
    o = i(2, -52),
    s = i(2, -23),
    a = i(2, 127) * (2 - s),
    u = i(2, -126);
  t.exports = Math.fround || function t(e) {
    var r, i, c = Math.abs(e),
      f = n(e);
    return c < u ? f * (c / u / s + 1 / o - 1 / o) * u * s : (i = (r = (1 + s / o) * c) - (r - c)) > a || i != i ? f * (1 / 0) : f * i
  }
}, function (t, e, r) {
  var n = r(1);
  t.exports = function (t, e, r, i) {
    try {
      return i ? e(n(r)[0], r[1]) : e(r)
    } catch (e) {
      var o = t.return;
      throw void 0 !== o && n(o.call(t)), e
    }
  }
}, function (t, e, r) {
  var n = r(11),
    i = r(10),
    o = r(51),
    s = r(7);
  t.exports = function (t, e, r, a, u) {
    n(e);
    var c = i(t),
      f = o(c),
      h = s(c.length),
      l = u ? h - 1 : 0,
      p = u ? -1 : 1;
    if (r < 2)
      for (;;) {
        if (l in f) {
          a = f[l], l += p;
          break
        }
        if (l += p, u ? l < 0 : h <= l) throw TypeError("Reduce of empty array with no initial value")
      }
    for (; u ? l >= 0 : h > l; l += p) l in f && (a = e(a, f[l], l, c));
    return a
  }
}, function (t, e, r) {
  "use strict";
  var n = r(10),
    i = r(36),
    o = r(7);
  t.exports = [].copyWithin || function t(e, r) {
    var s = n(this),
      a = o(s.length),
      u = i(e, a),
      c = i(r, a),
      f = arguments.length > 2 ? arguments[2] : void 0,
      h = Math.min((void 0 === f ? a : i(f, a)) - c, a - u),
      l = 1;
    for (c < u && u < c + h && (l = -1, c += h - 1, u += h - 1); h-- > 0;) c in s ? s[u] = s[c] : delete s[u], u += l, c += l;
    return s
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return {
      value: e,
      done: !!t
    }
  }
}, function (t, e, r) {
  "use strict";
  var n = r(93);
  r(0)({
    target: "RegExp",
    proto: !0,
    forced: n !== /./.exec
  }, {
    exec: n
  })
}, function (t, e, r) {
  r(8) && "g" != /./g.flags && r(9).f(RegExp.prototype, "flags", {
    configurable: !0,
    get: r(53)
  })
}, function (t, e) {
  t.exports = function (t) {
    try {
      return {
        e: !1,
        v: t()
      }
    } catch (t) {
      return {
        e: !0,
        v: t
      }
    }
  }
}, function (t, e, r) {
  var n = r(1),
    i = r(5),
    o = r(97);
  t.exports = function (t, e) {
    if (n(t), i(e) && e.constructor === t) return e;
    var r = o.f(t);
    return (0, r.resolve)(e), r.promise
  }
}, function (t, e, r) {
  "use strict";
  var n = r(127),
    i = r(43);
  t.exports = r(65)("Map", function (t) {
    return function e() {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    get: function t(e) {
      var r = n.getEntry(i(this, "Map"), e);
      return r && r.v
    },
    set: function t(e, r) {
      return n.def(i(this, "Map"), 0 === e ? 0 : e, r)
    }
  }, n, !0)
}, function (t, e, r) {
  "use strict";
  var n = r(9).f,
    i = r(37),
    o = r(42),
    s = r(20),
    a = r(40),
    u = r(41),
    c = r(83),
    f = r(121),
    h = r(39),
    l = r(8),
    p = r(31).fastKey,
    d = r(43),
    g = l ? "_s" : "size",
    v = function (t, e) {
      var r, n = p(e);
      if ("F" !== n) return t._i[n];
      for (r = t._f; r; r = r.n)
        if (r.k == e) return r
    };
  t.exports = {
    getConstructor: function (t, e, r, c) {
      var f = t(function (t, n) {
        a(t, f, e, "_i"), t._t = e, t._i = i(null), t._f = void 0, t._l = void 0, t[g] = 0, void 0 != n && u(n, r, t[c], t)
      });
      return o(f.prototype, {
        clear: function t() {
          for (var r = d(this, e), n = r._i, i = r._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
          r._f = r._l = void 0, r[g] = 0
        },
        delete: function (t) {
          var r = d(this, e),
            n = v(r, t);
          if (n) {
            var i = n.n,
              o = n.p;
            delete r._i[n.i], n.r = !0, o && (o.n = i), i && (i.p = o), r._f == n && (r._f = i), r._l == n && (r._l = o), r[g]--
          }
          return !!n
        },
        forEach: function t(r) {
          d(this, e);
          for (var n, i = s(r, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
            for (i(n.v, n.k, this); n && n.r;) n = n.p
        },
        has: function t(r) {
          return !!v(d(this, e), r)
        }
      }), l && n(f.prototype, "size", {
        get: function () {
          return d(this, e)[g]
        }
      }), f
    },
    def: function (t, e, r) {
      var n, i, o = v(t, e);
      return o ? o.v = r : (t._l = o = {
        i: i = p(e, !0),
        k: e,
        v: r,
        p: n = t._l,
        n: void 0,
        r: !1
      }, t._f || (t._f = o), n && (n.n = o), t[g]++, "F" !== i && (t._i[i] = o)), t
    },
    getEntry: v,
    setStrong: function (t, e, r) {
      c(t, e, function (t, r) {
        this._t = d(t, e), this._k = r, this._l = void 0
      }, function () {
        for (var t = this._k, e = this._l; e && e.r;) e = e.p;
        return this._t && (this._l = e = e ? e.n : this._t._f) ? f(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, f(1))
      }, r ? "entries" : "values", !r, !0), h(e)
    }
  }
}, function (t, e, r) {
  "use strict";
  var n = r(127),
    i = r(43);
  t.exports = r(65)("Set", function (t) {
    return function e() {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    add: function t(e) {
      return n.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
    }
  }, n)
}, function (t, e, r) {
  "use strict";
  var n, i = r(2),
    o = r(27)(0),
    s = r(13),
    a = r(31),
    u = r(108),
    c = r(130),
    f = r(5),
    h = r(43),
    l = r(43),
    p = !i.ActiveXObject && "ActiveXObject" in i,
    d = a.getWeak,
    g = Object.isExtensible,
    v = c.ufstore,
    y = function (t) {
      return function e() {
        return t(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    },
    m = {
      get: function t(e) {
        if (f(e)) {
          var r = d(e);
          return !0 === r ? v(h(this, "WeakMap")).get(e) : r ? r[this._i] : void 0
        }
      },
      set: function t(e, r) {
        return c.def(h(this, "WeakMap"), e, r)
      }
    },
    _ = t.exports = r(65)("WeakMap", y, m, c, !0, !0);
  l && p && (u((n = c.getConstructor(y, "WeakMap")).prototype, m), a.NEED = !0, o(["delete", "has", "get", "set"], function (t) {
    var e = _.prototype,
      r = e[t];
    s(e, t, function (e, i) {
      if (f(e) && !g(e)) {
        this._f || (this._f = new n);
        var o = this._f[t](e, i);
        return "set" == t ? this : o
      }
      return r.call(this, e, i)
    })
  }))
}, function (t, e, r) {
  "use strict";
  var n = r(42),
    i = r(31).getWeak,
    o = r(1),
    s = r(5),
    a = r(40),
    u = r(41),
    c = r(27),
    f = r(15),
    h = r(43),
    l = c(5),
    p = c(6),
    d = 0,
    g = function (t) {
      return t._l || (t._l = new v)
    },
    v = function () {
      this.a = []
    },
    y = function (t, e) {
      return l(t.a, function (t) {
        return t[0] === e
      })
    };
  v.prototype = {
    get: function (t) {
      var e = y(this, t);
      if (e) return e[1]
    },
    has: function (t) {
      return !!y(this, t)
    },
    set: function (t, e) {
      var r = y(this, t);
      r ? r[1] = e : this.a.push([t, e])
    },
    delete: function (t) {
      var e = p(this.a, function (e) {
        return e[0] === t
      });
      return ~e && this.a.splice(e, 1), !!~e
    }
  }, t.exports = {
    getConstructor: function (t, e, r, o) {
      var c = t(function (t, n) {
        a(t, c, e, "_i"), t._t = e, t._i = d++, t._l = void 0, void 0 != n && u(n, r, t[o], t)
      });
      return n(c.prototype, {
        delete: function (t) {
          if (!s(t)) return !1;
          var r = i(t);
          return !0 === r ? g(h(this, e)).delete(t) : r && f(r, this._i) && delete r[this._i]
        },
        has: function t(r) {
          if (!s(r)) return !1;
          var n = i(r);
          return !0 === n ? g(h(this, e)).has(r) : n && f(n, this._i)
        }
      }), c
    },
    def: function (t, e, r) {
      var n = i(o(e), !0);
      return !0 === n ? g(t).set(e, r) : n[t._i] = r, t
    },
    ufstore: g
  }
}, function (t, e, r) {
  var n = r(22),
    i = r(7);
  t.exports = function (t) {
    if (void 0 === t) return 0;
    var e = n(t),
      r = i(e);
    if (e !== r) throw RangeError("Wrong length!");
    return r
  }
}, function (t, e, r) {
  var n = r(38),
    i = r(57),
    o = r(1),
    s = r(2).Reflect;
  t.exports = s && s.ownKeys || function t(e) {
    var r = n.f(o(e)),
      s = i.f;
    return s ? r.concat(s(e)) : r
  }
}, function (t, e, r) {
  "use strict";
  var n = r(58),
    i = r(5),
    o = r(7),
    s = r(20),
    a = r(6)("isConcatSpreadable");
  t.exports = function t(e, r, u, c, f, h, l, p) {
    for (var d, g, v = f, y = 0, m = !!l && s(l, p, 3); y < c;) {
      if (y in u) {
        if (d = m ? m(u[y], y, r) : u[y], g = !1, i(d) && (g = void 0 !== (g = d[a]) ? !!g : n(d)), g && h > 0) v = t(e, r, d, o(d.length), v, h - 1) - 1;
        else {
          if (v >= 9007199254740991) throw TypeError();
          e[v] = d
        }
        v++
      }
      y++
    }
    return v
  }
}, function (t, e, r) {
  var n = r(7),
    i = r(80),
    o = r(25);
  t.exports = function (t, e, r, s) {
    var a = String(o(t)),
      u = a.length,
      c = void 0 === r ? " " : String(r),
      f = n(e);
    if (f <= u || "" == c) return a;
    var h = f - u,
      l = i.call(c, Math.ceil(h / c.length));
    return l.length > h && (l = l.slice(0, h)), s ? l + a : a + l
  }
}, function (t, e, r) {
  var n = r(35),
    i = r(16),
    o = r(52).f;
  t.exports = function (t) {
    return function (e) {
      for (var r, s = i(e), a = n(s), u = a.length, c = 0, f = []; u > c;) o.call(s, r = a[c++]) && f.push(t ? [r, s[r]] : s[r]);
      return f
    }
  }
}, function (t, e, r) {
  var n = r(46),
    i = r(137);
  t.exports = function (t) {
    return function e() {
      if (n(this) != t) throw TypeError(t + "#toJSON isn't generic");
      return i(this)
    }
  }
}, function (t, e, r) {
  var n = r(41);
  t.exports = function (t, e) {
    var r = [];
    return n(t, !1, r.push, r, e), r
  }
}, function (t, e) {
  t.exports = Math.scale || function t(e, r, n, i, o) {
    return 0 === arguments.length || e != e || r != r || n != n || i != i || o != o ? NaN : e === 1 / 0 || e === -1 / 0 ? e : (e - r) * (o - i) / (n - r) + i
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.OidcClient = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3),
    o = r(99),
    s = r(141),
    a = r(142),
    u = r(368),
    c = r(369),
    f = r(370),
    h = r(143),
    l = r(102);
  e.OidcClient = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      ! function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), e instanceof o.OidcClientSettings ? this._settings = e : this._settings = new o.OidcClientSettings(e)
    }
    return t.prototype.createSigninRequest = function t() {
      var e = this,
        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = r.response_type,
        o = r.scope,
        s = r.redirect_uri,
        u = r.data,
        c = r.state,
        f = r.prompt,
        h = r.display,
        l = r.max_age,
        p = r.ui_locales,
        d = r.id_token_hint,
        g = r.login_hint,
        v = r.acr_values,
        y = r.resource,
        m = r.request,
        _ = r.request_uri,
        S = r.response_mode,
        b = r.extraQueryParams,
        w = r.extraTokenParams,
        F = r.request_type,
        E = r.skipUserInfo,
        x = arguments[1];
      i.Log.debug("OidcClient.createSigninRequest");
      var A = this._settings.client_id;
      n = n || this._settings.response_type, o = o || this._settings.scope, s = s || this._settings.redirect_uri, f = f || this._settings.prompt, h = h || this._settings.display, l = l || this._settings.max_age, p = p || this._settings.ui_locales, v = v || this._settings.acr_values, y = y || this._settings.resource, S = S || this._settings.response_mode, b = b || this._settings.extraQueryParams;
      var k = this._settings.authority;
      return a.SigninRequest.isCode(n) && "code" !== n ? Promise.reject(new Error("OpenID Connect hybrid flow is not supported")) : this._metadataService.getAuthorizationEndpoint().then(function (t) {
        i.Log.debug("OidcClient.createSigninRequest: Received authorization endpoint", t);
        var r = new a.SigninRequest({
            url: t,
            client_id: A,
            redirect_uri: s,
            response_type: n,
            scope: o,
            data: u || c,
            authority: k,
            prompt: f,
            display: h,
            max_age: l,
            ui_locales: p,
            id_token_hint: d,
            login_hint: g,
            acr_values: v,
            resource: y,
            request: m,
            request_uri: _,
            extraQueryParams: b,
            extraTokenParams: w,
            request_type: F,
            response_mode: S,
            client_secret: e._settings.client_secret,
            skipUserInfo: E
          }),
          P = r.state;
        return (x = x || e._stateStore).set(P.id, P.toStorageString()).then(function () {
          return r
        })
      })
    }, t.prototype.readSigninResponseState = function t(e, r) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      i.Log.debug("OidcClient.readSigninResponseState");
      var o = "query" === this._settings.response_mode || !this._settings.response_mode && a.SigninRequest.isCode(this._settings.response_type) ? "?" : "#",
        s = new u.SigninResponse(e, o);
      return s.state ? (r = r || this._stateStore, (n ? r.remove.bind(r) : r.get.bind(r))(s.state).then(function (t) {
        if (!t) throw i.Log.error("OidcClient.readSigninResponseState: No matching state found in storage"), new Error("No matching state found in storage");
        return {
          state: h.SigninState.fromStorageString(t),
          response: s
        }
      })) : (i.Log.error("OidcClient.readSigninResponseState: No state in response"), Promise.reject(new Error("No state in response")))
    }, t.prototype.processSigninResponse = function t(e, r) {
      var n = this;
      return i.Log.debug("OidcClient.processSigninResponse"), this.readSigninResponseState(e, r, !0).then(function (t) {
        var e = t.state,
          r = t.response;
        return i.Log.debug("OidcClient.processSigninResponse: Received state from storage; validating response"), n._validator.validateSigninResponse(e, r)
      })
    }, t.prototype.createSignoutRequest = function t() {
      var e = this,
        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = r.id_token_hint,
        o = r.data,
        s = r.state,
        a = r.post_logout_redirect_uri,
        u = r.extraQueryParams,
        f = r.request_type,
        h = arguments[1];
      return i.Log.debug("OidcClient.createSignoutRequest"), a = a || this._settings.post_logout_redirect_uri, u = u || this._settings.extraQueryParams, this._metadataService.getEndSessionEndpoint().then(function (t) {
        if (!t) throw i.Log.error("OidcClient.createSignoutRequest: No end session endpoint url returned"), new Error("no end session endpoint");
        i.Log.debug("OidcClient.createSignoutRequest: Received end session endpoint", t);
        var r = new c.SignoutRequest({
            url: t,
            id_token_hint: n,
            post_logout_redirect_uri: a,
            data: o || s,
            extraQueryParams: u,
            request_type: f
          }),
          l = r.state;
        return l && (i.Log.debug("OidcClient.createSignoutRequest: Signout request has state to persist"), (h = h || e._stateStore).set(l.id, l.toStorageString())), r
      })
    }, t.prototype.readSignoutResponseState = function t(e, r) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      i.Log.debug("OidcClient.readSignoutResponseState");
      var o = new f.SignoutResponse(e);
      if (!o.state) return i.Log.debug("OidcClient.readSignoutResponseState: No state in response"), o.error ? (i.Log.warn("OidcClient.readSignoutResponseState: Response was error: ", o.error), Promise.reject(new s.ErrorResponse(o))) : Promise.resolve({
        undefined: void 0,
        response: o
      });
      var a = o.state;
      return r = r || this._stateStore, (n ? r.remove.bind(r) : r.get.bind(r))(a).then(function (t) {
        if (!t) throw i.Log.error("OidcClient.readSignoutResponseState: No matching state found in storage"), new Error("No matching state found in storage");
        return {
          state: l.State.fromStorageString(t),
          response: o
        }
      })
    }, t.prototype.processSignoutResponse = function t(e, r) {
      var n = this;
      return i.Log.debug("OidcClient.processSignoutResponse"), this.readSignoutResponseState(e, r, !0).then(function (t) {
        var e = t.state,
          r = t.response;
        return e ? (i.Log.debug("OidcClient.processSignoutResponse: Received state from storage; validating response"), n._validator.validateSignoutResponse(e, r)) : (i.Log.debug("OidcClient.processSignoutResponse: No state from storage; skipping validating response"), r)
      })
    }, t.prototype.clearStaleState = function t(e) {
      return i.Log.debug("OidcClient.clearStaleState"), e = e || this._stateStore, l.State.clearStaleState(e, this.settings.staleStateAge)
    }, n(t, [{
      key: "_stateStore",
      get: function t() {
        return this.settings.stateStore
      }
    }, {
      key: "_validator",
      get: function t() {
        return this.settings.validator
      }
    }, {
      key: "_metadataService",
      get: function t() {
        return this.settings.metadataService
      }
    }, {
      key: "settings",
      get: function t() {
        return this._settings
      }
    }, {
      key: "metadataService",
      get: function t() {
        return this._metadataService
      }
    }]), t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.TokenClient = void 0;
  var n = r(101),
    i = r(49),
    o = r(3);
  e.TokenClient = function () {
    function t(e) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.JsonService,
        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.MetadataService;
      if (function a(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), !e) throw o.Log.error("TokenClient.ctor: No settings passed"), new Error("settings");
      this._settings = e, this._jsonService = new r, this._metadataService = new s(this._settings)
    }
    return t.prototype.exchangeCode = function t() {
      var e = this,
        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (r = Object.assign({}, r)).grant_type = r.grant_type || "authorization_code", r.client_id = r.client_id || this._settings.client_id, r.redirect_uri = r.redirect_uri || this._settings.redirect_uri, r.code ? r.redirect_uri ? r.code_verifier ? r.client_id ? this._metadataService.getTokenEndpoint(!1).then(function (t) {
        return o.Log.debug("TokenClient.exchangeCode: Received token endpoint"), e._jsonService.postForm(t, r).then(function (t) {
          return o.Log.debug("TokenClient.exchangeCode: response received"), t
        })
      }) : (o.Log.error("TokenClient.exchangeCode: No client_id passed"), Promise.reject(new Error("A client_id is required"))) : (o.Log.error("TokenClient.exchangeCode: No code_verifier passed"), Promise.reject(new Error("A code_verifier is required"))) : (o.Log.error("TokenClient.exchangeCode: No redirect_uri passed"), Promise.reject(new Error("A redirect_uri is required"))) : (o.Log.error("TokenClient.exchangeCode: No code passed"), Promise.reject(new Error("A code is required")))
    }, t.prototype.exchangeRefreshToken = function t() {
      var e = this,
        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (r = Object.assign({}, r)).grant_type = r.grant_type || "refresh_token", r.client_id = r.client_id || this._settings.client_id, r.client_secret = r.client_secret || this._settings.client_secret, r.refresh_token ? r.client_id ? this._metadataService.getTokenEndpoint(!1).then(function (t) {
        return o.Log.debug("TokenClient.exchangeRefreshToken: Received token endpoint"), e._jsonService.postForm(t, r).then(function (t) {
          return o.Log.debug("TokenClient.exchangeRefreshToken: response received"), t
        })
      }) : (o.Log.error("TokenClient.exchangeRefreshToken: No client_id passed"), Promise.reject(new Error("A client_id is required"))) : (o.Log.error("TokenClient.exchangeRefreshToken: No refresh_token passed"), Promise.reject(new Error("A refresh_token is required")))
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ErrorResponse = void 0;
  var n = r(3);
  e.ErrorResponse = function (t) {
    function e() {
      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = r.error,
        o = r.error_description,
        s = r.error_uri,
        a = r.state;
      if (function u(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), !i) throw n.Log.error("No error passed to ErrorResponse"), new Error("error");
      var c = function f(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
      }(this, t.call(this, o || i));
      return c.name = "ErrorResponse", c.error = i, c.error_description = o, c.error_uri = s, c.state = a, c
    }
    return function r(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }(e, t), e
  }(Error)
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.SigninRequest = void 0;
  var n = r(3),
    i = r(55),
    o = r(143);
  e.SigninRequest = function () {
    function t(e) {
      var r = e.url,
        s = e.client_id,
        a = e.redirect_uri,
        u = e.response_type,
        c = e.scope,
        f = e.authority,
        h = e.data,
        l = e.prompt,
        p = e.display,
        d = e.max_age,
        g = e.ui_locales,
        v = e.id_token_hint,
        y = e.login_hint,
        m = e.acr_values,
        _ = e.resource,
        S = e.response_mode,
        b = e.request,
        w = e.request_uri,
        F = e.extraQueryParams,
        E = e.request_type,
        x = e.client_secret,
        A = e.extraTokenParams,
        k = e.skipUserInfo;
      if (function P(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), !r) throw n.Log.error("SigninRequest.ctor: No url passed"), new Error("url");
      if (!s) throw n.Log.error("SigninRequest.ctor: No client_id passed"), new Error("client_id");
      if (!a) throw n.Log.error("SigninRequest.ctor: No redirect_uri passed"), new Error("redirect_uri");
      if (!u) throw n.Log.error("SigninRequest.ctor: No response_type passed"), new Error("response_type");
      if (!c) throw n.Log.error("SigninRequest.ctor: No scope passed"), new Error("scope");
      if (!f) throw n.Log.error("SigninRequest.ctor: No authority passed"), new Error("authority");
      var C = t.isOidc(u),
        T = t.isCode(u);
      S || (S = t.isCode(u) ? "query" : null), this.state = new o.SigninState({
        nonce: C,
        data: h,
        client_id: s,
        authority: f,
        redirect_uri: a,
        code_verifier: T,
        request_type: E,
        response_mode: S,
        client_secret: x,
        scope: c,
        extraTokenParams: A,
        skipUserInfo: k
      }), r = i.UrlUtility.addQueryParam(r, "client_id", s), r = i.UrlUtility.addQueryParam(r, "redirect_uri", a), r = i.UrlUtility.addQueryParam(r, "response_type", u), r = i.UrlUtility.addQueryParam(r, "scope", c), r = i.UrlUtility.addQueryParam(r, "state", this.state.id), C && (r = i.UrlUtility.addQueryParam(r, "nonce", this.state.nonce)), T && (r = i.UrlUtility.addQueryParam(r, "code_challenge", this.state.code_challenge), r = i.UrlUtility.addQueryParam(r, "code_challenge_method", "S256"));
      var R = {
        prompt: l,
        display: p,
        max_age: d,
        ui_locales: g,
        id_token_hint: v,
        login_hint: y,
        acr_values: m,
        resource: _,
        request: b,
        request_uri: w,
        response_mode: S
      };
      for (var I in R) R[I] && (r = i.UrlUtility.addQueryParam(r, I, R[I]));
      for (var O in F) r = i.UrlUtility.addQueryParam(r, O, F[O]);
      this.url = r
    }
    return t.isOidc = function t(e) {
      return !!e.split(/\s+/g).filter(function (t) {
        return "id_token" === t
      })[0]
    }, t.isOAuth = function t(e) {
      return !!e.split(/\s+/g).filter(function (t) {
        return "token" === t
      })[0]
    }, t.isCode = function t(e) {
      return !!e.split(/\s+/g).filter(function (t) {
        return "code" === t
      })[0]
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.SigninState = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3),
    o = r(102),
    s = r(70),
    a = function u(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(r(144));
  e.SigninState = function (t) {
    function e() {
      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = r.nonce,
        i = r.authority,
        o = r.client_id,
        u = r.redirect_uri,
        c = r.code_verifier,
        f = r.response_mode,
        h = r.client_secret,
        l = r.scope,
        p = r.extraTokenParams,
        d = r.skipUserInfo;
      ! function g(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, e);
      var v = function y(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
      }(this, t.call(this, arguments[0]));
      if (!0 === n ? v._nonce = (0, a.default)() : n && (v._nonce = n), !0 === c ? v._code_verifier = (0, a.default)() + (0, a.default)() + (0, a.default)() : c && (v._code_verifier = c), v.code_verifier) {
        var m = s.JoseUtil.hashString(v.code_verifier, "SHA256");
        v._code_challenge = s.JoseUtil.hexToBase64Url(m)
      }
      return v._redirect_uri = u, v._authority = i, v._client_id = o, v._response_mode = f, v._client_secret = h, v._scope = l, v._extraTokenParams = p, v._skipUserInfo = d, v
    }
    return function r(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }(e, t), e.prototype.toStorageString = function t() {
      return i.Log.debug("SigninState.toStorageString"), JSON.stringify({
        id: this.id,
        data: this.data,
        created: this.created,
        request_type: this.request_type,
        nonce: this.nonce,
        code_verifier: this.code_verifier,
        redirect_uri: this.redirect_uri,
        authority: this.authority,
        client_id: this.client_id,
        response_mode: this.response_mode,
        client_secret: this.client_secret,
        scope: this.scope,
        extraTokenParams: this.extraTokenParams,
        skipUserInfo: this.skipUserInfo
      })
    }, e.fromStorageString = function t(r) {
      return i.Log.debug("SigninState.fromStorageString"), new e(JSON.parse(r))
    }, n(e, [{
      key: "nonce",
      get: function t() {
        return this._nonce
      }
    }, {
      key: "authority",
      get: function t() {
        return this._authority
      }
    }, {
      key: "client_id",
      get: function t() {
        return this._client_id
      }
    }, {
      key: "redirect_uri",
      get: function t() {
        return this._redirect_uri
      }
    }, {
      key: "code_verifier",
      get: function t() {
        return this._code_verifier
      }
    }, {
      key: "code_challenge",
      get: function t() {
        return this._code_challenge
      }
    }, {
      key: "response_mode",
      get: function t() {
        return this._response_mode
      }
    }, {
      key: "client_secret",
      get: function t() {
        return this._client_secret
      }
    }, {
      key: "scope",
      get: function t() {
        return this._scope
      }
    }, {
      key: "extraTokenParams",
      get: function t() {
        return this._extraTokenParams
      }
    }, {
      key: "skipUserInfo",
      get: function t() {
        return this._skipUserInfo
      }
    }]), e
  }(o.State)
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function n() {
    return (0, i.default)().replace(/-/g, "")
  };
  var i = function o(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }(r(365));
  t.exports = e.default
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.User = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3);
  e.User = function () {
    function t(e) {
      var r = e.id_token,
        n = e.session_state,
        i = e.access_token,
        o = e.refresh_token,
        s = e.token_type,
        a = e.scope,
        u = e.profile,
        c = e.expires_at,
        f = e.state;
      ! function h(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.id_token = r, this.session_state = n, this.access_token = i, this.refresh_token = o, this.token_type = s, this.scope = a, this.profile = u, this.expires_at = c, this.state = f
    }
    return t.prototype.toStorageString = function t() {
      return i.Log.debug("User.toStorageString"), JSON.stringify({
        id_token: this.id_token,
        session_state: this.session_state,
        access_token: this.access_token,
        refresh_token: this.refresh_token,
        token_type: this.token_type,
        scope: this.scope,
        profile: this.profile,
        expires_at: this.expires_at
      })
    }, t.fromStorageString = function e(r) {
      return i.Log.debug("User.fromStorageString"), new t(JSON.parse(r))
    }, n(t, [{
      key: "expires_in",
      get: function t() {
        if (this.expires_at) {
          var e = parseInt(Date.now() / 1e3);
          return this.expires_at - e
        }
      },
      set: function t(e) {
        var r = parseInt(e);
        if ("number" == typeof r && r > 0) {
          var n = parseInt(Date.now() / 1e3);
          this.expires_at = n + r
        }
      }
    }, {
      key: "expired",
      get: function t() {
        var e = this.expires_in;
        if (void 0 !== e) return e <= 0
      }
    }, {
      key: "scopes",
      get: function t() {
        return (this.scope || "").split(" ")
      }
    }]), t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.AccessTokenEvents = void 0;
  var n = r(3),
    i = r(380);
  var o = 60;
  e.AccessTokenEvents = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = e.accessTokenExpiringNotificationTime,
        n = void 0 === r ? o : r,
        s = e.accessTokenExpiringTimer,
        a = void 0 === s ? new i.Timer("Access token expiring") : s,
        u = e.accessTokenExpiredTimer,
        c = void 0 === u ? new i.Timer("Access token expired") : u;
      ! function f(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this._accessTokenExpiringNotificationTime = n, this._accessTokenExpiring = a, this._accessTokenExpired = c
    }
    return t.prototype.load = function t(e) {
      if (e.access_token && void 0 !== e.expires_in) {
        var r = e.expires_in;
        if (n.Log.debug("AccessTokenEvents.load: access token present, remaining duration:", r), r > 0) {
          var i = r - this._accessTokenExpiringNotificationTime;
          i <= 0 && (i = 1), n.Log.debug("AccessTokenEvents.load: registering expiring timer in:", i), this._accessTokenExpiring.init(i)
        } else n.Log.debug("AccessTokenEvents.load: canceling existing expiring timer becase we're past expiration."), this._accessTokenExpiring.cancel();
        var o = r + 1;
        n.Log.debug("AccessTokenEvents.load: registering expired timer in:", o), this._accessTokenExpired.init(o)
      } else this._accessTokenExpiring.cancel(), this._accessTokenExpired.cancel()
    }, t.prototype.unload = function t() {
      n.Log.debug("AccessTokenEvents.unload: canceling existing access token timers"), this._accessTokenExpiring.cancel(), this._accessTokenExpired.cancel()
    }, t.prototype.addAccessTokenExpiring = function t(e) {
      this._accessTokenExpiring.addHandler(e)
    }, t.prototype.removeAccessTokenExpiring = function t(e) {
      this._accessTokenExpiring.removeHandler(e)
    }, t.prototype.addAccessTokenExpired = function t(e) {
      this._accessTokenExpired.addHandler(e)
    }, t.prototype.removeAccessTokenExpired = function t(e) {
      this._accessTokenExpired.removeHandler(e)
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Event = void 0;
  var n = r(3);
  e.Event = function () {
    function t(e) {
      ! function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this._name = e, this._callbacks = []
    }
    return t.prototype.addHandler = function t(e) {
      this._callbacks.push(e)
    }, t.prototype.removeHandler = function t(e) {
      var r = this._callbacks.findIndex(function (t) {
        return t === e
      });
      r >= 0 && this._callbacks.splice(r, 1)
    }, t.prototype.raise = function t() {
      n.Log.debug("Event: Raising event: " + this._name);
      for (var e = 0; e < this._callbacks.length; e++) {
        var r;
        (r = this._callbacks)[e].apply(r, arguments)
      }
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.SessionMonitor = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3),
    o = r(149);
  e.SessionMonitor = function () {
    function t(e) {
      var r = this,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.CheckSessionIFrame;
      if (function s(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), !e) throw i.Log.error("SessionMonitor.ctor: No user manager passed to SessionMonitor"), new Error("userManager");
      this._userManager = e, this._CheckSessionIFrameCtor = n, this._userManager.events.addUserLoaded(this._start.bind(this)), this._userManager.events.addUserUnloaded(this._stop.bind(this)), this._userManager.getUser().then(function (t) {
        t && r._start(t)
      }).catch(function (t) {
        i.Log.error("SessionMonitor ctor: error from getUser:", t.message)
      })
    }
    return t.prototype._start = function t(e) {
      var r = this,
        n = e.session_state;
      n && (this._sub = e.profile.sub, this._sid = e.profile.sid, i.Log.debug("SessionMonitor._start: session_state:", n, ", sub:", this._sub), this._checkSessionIFrame ? this._checkSessionIFrame.start(n) : this._metadataService.getCheckSessionIframe().then(function (t) {
        if (t) {
          i.Log.debug("SessionMonitor._start: Initializing check session iframe");
          var e = r._client_id,
            o = r._checkSessionInterval,
            s = r._stopCheckSessionOnError;
          r._checkSessionIFrame = new r._CheckSessionIFrameCtor(r._callback.bind(r), e, t, o, s), r._checkSessionIFrame.load().then(function () {
            r._checkSessionIFrame.start(n)
          })
        } else i.Log.warn("SessionMonitor._start: No check session iframe found in the metadata")
      }).catch(function (t) {
        i.Log.error("SessionMonitor._start: Error from getCheckSessionIframe:", t.message)
      }))
    }, t.prototype._stop = function t() {
      this._sub = null, this._sid = null, this._checkSessionIFrame && (i.Log.debug("SessionMonitor._stop"), this._checkSessionIFrame.stop())
    }, t.prototype._callback = function t() {
      var e = this;
      this._userManager.querySessionStatus().then(function (t) {
        var r = !0;
        t ? t.sub === e._sub ? (r = !1, e._checkSessionIFrame.start(t.session_state), t.sid === e._sid ? i.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:", t.session_state) : (i.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", t.session_state), e._userManager.events._raiseUserSessionChanged())) : i.Log.debug("SessionMonitor._callback: Different subject signed into OP:", t.sub) : i.Log.debug("SessionMonitor._callback: Subject no longer signed into OP"), r && (i.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed out event"), e._userManager.events._raiseUserSignedOut())
      }).catch(function (t) {
        i.Log.debug("SessionMonitor._callback: Error calling queryCurrentSigninSession; raising signed out event", t.message), e._userManager.events._raiseUserSignedOut()
      })
    }, n(t, [{
      key: "_settings",
      get: function t() {
        return this._userManager.settings
      }
    }, {
      key: "_metadataService",
      get: function t() {
        return this._userManager.metadataService
      }
    }, {
      key: "_client_id",
      get: function t() {
        return this._settings.client_id
      }
    }, {
      key: "_checkSessionInterval",
      get: function t() {
        return this._settings.checkSessionInterval
      }
    }, {
      key: "_stopCheckSessionOnError",
      get: function t() {
        return this._settings.stopCheckSessionOnError
      }
    }]), t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.CheckSessionIFrame = void 0;
  var n = r(3);
  var i = 2e3;
  e.CheckSessionIFrame = function () {
    function t(e, r, n, o) {
      var s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
      ! function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this._callback = e, this._client_id = r, this._url = n, this._interval = o || i, this._stopOnError = s;
      var u = n.indexOf("/", n.indexOf("//") + 2);
      this._frame_origin = n.substr(0, u), this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "absolute", this._frame.style.display = "none", this._frame.style.width = 0, this._frame.style.height = 0, this._frame.src = n
    }
    return t.prototype.load = function t() {
      var e = this;
      return new Promise(function (t) {
        e._frame.onload = function () {
          t()
        }, window.document.body.appendChild(e._frame), e._boundMessageEvent = e._message.bind(e), window.addEventListener("message", e._boundMessageEvent, !1)
      })
    }, t.prototype._message = function t(e) {
      e.origin === this._frame_origin && e.source === this._frame.contentWindow && ("error" === e.data ? (n.Log.error("CheckSessionIFrame: error message from check session op iframe"), this._stopOnError && this.stop()) : "changed" === e.data ? (n.Log.debug("CheckSessionIFrame: changed message from check session op iframe"), this.stop(), this._callback()) : n.Log.debug("CheckSessionIFrame: " + e.data + " message from check session op iframe"))
    }, t.prototype.start = function t(e) {
      var r = this;
      if (this._session_state !== e) {
        n.Log.debug("CheckSessionIFrame.start"), this.stop(), this._session_state = e;
        var i = function t() {
          r._frame.contentWindow.postMessage(r._client_id + " " + r._session_state, r._frame_origin)
        };
        i(), this._timer = window.setInterval(i, this._interval)
      }
    }, t.prototype.stop = function t() {
      this._session_state = null, this._timer && (n.Log.debug("CheckSessionIFrame.stop"), window.clearInterval(this._timer), this._timer = null)
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.TokenRevocationClient = void 0;
  var n = r(3),
    i = r(49),
    o = r(44);
  e.TokenRevocationClient = function () {
    function t(e) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Global.XMLHttpRequest,
        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.MetadataService;
      if (function a(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), !e) throw n.Log.error("TokenRevocationClient.ctor: No settings provided"), new Error("No settings provided.");
      this._settings = e, this._XMLHttpRequestCtor = r, this._metadataService = new s(this._settings)
    }
    return t.prototype.revoke = function t(e, r) {
      var i = this,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "access_token";
      if (!e) throw n.Log.error("TokenRevocationClient.revoke: No token provided"), new Error("No token provided.");
      if ("access_token" !== o && "refresh_token" != o) throw n.Log.error("TokenRevocationClient.revoke: Invalid token type"), new Error("Invalid token type.");
      return this._metadataService.getRevocationEndpoint().then(function (t) {
        if (t) {
          n.Log.debug("TokenRevocationClient.revoke: Revoking " + o);
          var s = i._settings.client_id,
            a = i._settings.client_secret;
          return i._revoke(t, s, a, e, o)
        }
        if (r) throw n.Log.error("TokenRevocationClient.revoke: Revocation not supported"), new Error("Revocation not supported")
      })
    }, t.prototype._revoke = function t(e, r, i, o, s) {
      var a = this;
      return new Promise(function (t, u) {
        var c = new a._XMLHttpRequestCtor;
        c.open("POST", e), c.onload = function () {
          n.Log.debug("TokenRevocationClient.revoke: HTTP response received, status", c.status), 200 === c.status ? t() : u(Error(c.statusText + " (" + c.status + ")"))
        }, c.onerror = function () {
          n.Log.debug("TokenRevocationClient.revoke: Network Error."), u("Network Error")
        };
        var f = "client_id=" + encodeURIComponent(r);
        i && (f += "&client_secret=" + encodeURIComponent(i)), f += "&token_type_hint=" + encodeURIComponent(s), f += "&token=" + encodeURIComponent(o), c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.send(f)
      })
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.CordovaPopupWindow = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3);
  var o = "location=no,toolbar=no,zoom=no",
    s = "_blank";
  e.CordovaPopupWindow = function () {
    function t(e) {
      var r = this;
      ! function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this._promise = new Promise(function (t, e) {
        r._resolve = t, r._reject = e
      }), this.features = e.popupWindowFeatures || o, this.target = e.popupWindowTarget || s, this.redirect_uri = e.startUrl, i.Log.debug("CordovaPopupWindow.ctor: redirect_uri: " + this.redirect_uri)
    }
    return t.prototype._isInAppBrowserInstalled = function t(e) {
      return ["cordova-plugin-inappbrowser", "cordova-plugin-inappbrowser.inappbrowser", "org.apache.cordova.inappbrowser"].some(function (t) {
        return e.hasOwnProperty(t)
      })
    }, t.prototype.navigate = function t(e) {
      if (e && e.url) {
        if (!window.cordova) return this._error("cordova is undefined");
        var r = window.cordova.require("cordova/plugin_list").metadata;
        if (!1 === this._isInAppBrowserInstalled(r)) return this._error("InAppBrowser plugin not found");
        this._popup = cordova.InAppBrowser.open(e.url, this.target, this.features), this._popup ? (i.Log.debug("CordovaPopupWindow.navigate: popup successfully created"), this._exitCallbackEvent = this._exitCallback.bind(this), this._loadStartCallbackEvent = this._loadStartCallback.bind(this), this._popup.addEventListener("exit", this._exitCallbackEvent, !1), this._popup.addEventListener("loadstart", this._loadStartCallbackEvent, !1)) : this._error("Error opening popup window")
      } else this._error("No url provided");
      return this.promise
    }, t.prototype._loadStartCallback = function t(e) {
      0 === e.url.indexOf(this.redirect_uri) && this._success({
        url: e.url
      })
    }, t.prototype._exitCallback = function t(e) {
      this._error(e)
    }, t.prototype._success = function t(e) {
      this._cleanup(), i.Log.debug("CordovaPopupWindow: Successful response from cordova popup window"), this._resolve(e)
    }, t.prototype._error = function t(e) {
      this._cleanup(), i.Log.error(e), this._reject(new Error(e))
    }, t.prototype.close = function t() {
      this._cleanup()
    }, t.prototype._cleanup = function t() {
      this._popup && (i.Log.debug("CordovaPopupWindow: cleaning up popup"), this._popup.removeEventListener("exit", this._exitCallbackEvent, !1), this._popup.removeEventListener("loadstart", this._loadStartCallbackEvent, !1), this._popup.close()), this._popup = null
    }, n(t, [{
      key: "promise",
      get: function t() {
        return this._promise
      }
    }]), t
  }()
}, function (t, e, r) {
  r(153), t.exports = r(355)
}, function (t, e, r) {
  "use strict";
  (function (t) {
    if (r(154), r(351), r(352), t._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
    t._babelPolyfill = !0;
    var e = "defineProperty";

    function n(t, r, n) {
      t[r] || Object[e](t, r, {
        writable: !0,
        configurable: !0,
        value: n
      })
    }
    n(String.prototype, "padLeft", "".padStart), n(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (t) {
      [][t] && n(Array, t, Function.call.bind([][t]))
    })
  }).call(this, r(71))
}, function (t, e, r) {
  r(155), r(158), r(159), r(160), r(161), r(162), r(163), r(164), r(165), r(166), r(167), r(168), r(169), r(170), r(171), r(172), r(173), r(174), r(175), r(176), r(177), r(178), r(179), r(180), r(181), r(182), r(183), r(184), r(185), r(186), r(187), r(188), r(189), r(190), r(191), r(192), r(193), r(194), r(195), r(196), r(197), r(198), r(199), r(200), r(201), r(202), r(203), r(204), r(205), r(206), r(207), r(208), r(209), r(210), r(211), r(212), r(213), r(214), r(215), r(216), r(217), r(218), r(219), r(220), r(221), r(222), r(223), r(224), r(225), r(226), r(227), r(228), r(229), r(230), r(231), r(232), r(233), r(235), r(236), r(238), r(239), r(240), r(241), r(242), r(243), r(244), r(246), r(247), r(248), r(249), r(250), r(251), r(252), r(253), r(254), r(255), r(256), r(257), r(258), r(92), r(259), r(122), r(260), r(123), r(261), r(262), r(263), r(264), r(265), r(126), r(128), r(129), r(266), r(267), r(268), r(269), r(270), r(271), r(272), r(273), r(274), r(275), r(276), r(277), r(278), r(279), r(280), r(281), r(282), r(283), r(284), r(285), r(286), r(287), r(288), r(289), r(290), r(291), r(292), r(293), r(294), r(295), r(296), r(297), r(298), r(299), r(300), r(301), r(302), r(303), r(304), r(305), r(306), r(307), r(308), r(309), r(310), r(311), r(312), r(313), r(314), r(315), r(316), r(317), r(318), r(319), r(320), r(321), r(322), r(323), r(324), r(325), r(326), r(327), r(328), r(329), r(330), r(331), r(332), r(333), r(334), r(335), r(336), r(337), r(338), r(339), r(340), r(341), r(342), r(343), r(344), r(345), r(346), r(347), r(348), r(349), r(350), t.exports = r(19)
}, function (t, e, r) {
  "use strict";
  var n = r(2),
    i = r(15),
    o = r(8),
    s = r(0),
    a = r(13),
    u = r(31).KEY,
    c = r(4),
    f = r(50),
    h = r(45),
    l = r(34),
    p = r(6),
    d = r(104),
    g = r(73),
    v = r(157),
    y = r(58),
    m = r(1),
    _ = r(5),
    S = r(16),
    b = r(24),
    w = r(33),
    F = r(37),
    E = r(107),
    x = r(17),
    A = r(9),
    k = r(35),
    P = x.f,
    C = A.f,
    T = E.f,
    R = n.Symbol,
    I = n.JSON,
    O = I && I.stringify,
    D = p("_hidden"),
    N = p("toPrimitive"),
    L = {}.propertyIsEnumerable,
    M = f("symbol-registry"),
    j = f("symbols"),
    U = f("op-symbols"),
    B = Object.prototype,
    H = "function" == typeof R,
    V = n.QObject,
    K = !V || !V.prototype || !V.prototype.findChild,
    q = o && c(function () {
      return 7 != F(C({}, "a", {
        get: function () {
          return C(this, "a", {
            value: 7
          }).a
        }
      })).a
    }) ? function (t, e, r) {
      var n = P(B, e);
      n && delete B[e], C(t, e, r), n && t !== B && C(B, e, n)
    } : C,
    W = function (t) {
      var e = j[t] = F(R.prototype);
      return e._k = t, e
    },
    J = H && "symbol" == typeof R.iterator ? function (t) {
      return "symbol" == typeof t
    } : function (t) {
      return t instanceof R
    },
    z = function t(e, r, n) {
      return e === B && z(U, r, n), m(e), r = b(r, !0), m(n), i(j, r) ? (n.enumerable ? (i(e, D) && e[D][r] && (e[D][r] = !1), n = F(n, {
        enumerable: w(0, !1)
      })) : (i(e, D) || C(e, D, w(1, {})), e[D][r] = !0), q(e, r, n)) : C(e, r, n)
    },
    Y = function t(e, r) {
      m(e);
      for (var n, i = v(r = S(r)), o = 0, s = i.length; s > o;) z(e, n = i[o++], r[n]);
      return e
    },
    G = function t(e) {
      var r = L.call(this, e = b(e, !0));
      return !(this === B && i(j, e) && !i(U, e)) && (!(r || !i(this, e) || !i(j, e) || i(this, D) && this[D][e]) || r)
    },
    X = function t(e, r) {
      if (e = S(e), r = b(r, !0), e !== B || !i(j, r) || i(U, r)) {
        var n = P(e, r);
        return !n || !i(j, r) || i(e, D) && e[D][r] || (n.enumerable = !0), n
      }
    },
    $ = function t(e) {
      for (var r, n = T(S(e)), o = [], s = 0; n.length > s;) i(j, r = n[s++]) || r == D || r == u || o.push(r);
      return o
    },
    Q = function t(e) {
      for (var r, n = e === B, o = T(n ? U : S(e)), s = [], a = 0; o.length > a;) !i(j, r = o[a++]) || n && !i(B, r) || s.push(j[r]);
      return s
    };
  H || (a((R = function t() {
    if (this instanceof R) throw TypeError("Symbol is not a constructor!");
    var e = l(arguments.length > 0 ? arguments[0] : void 0),
      r = function (t) {
        this === B && r.call(U, t), i(this, D) && i(this[D], e) && (this[D][e] = !1), q(this, e, w(1, t))
      };
    return o && K && q(B, e, {
      configurable: !0,
      set: r
    }), W(e)
  }).prototype, "toString", function t() {
    return this._k
  }), x.f = X, A.f = z, r(38).f = E.f = $, r(52).f = G, r(57).f = Q, o && !r(30) && a(B, "propertyIsEnumerable", G, !0), d.f = function (t) {
    return W(p(t))
  }), s(s.G + s.W + s.F * !H, {
    Symbol: R
  });
  for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) p(Z[tt++]);
  for (var et = k(p.store), rt = 0; et.length > rt;) g(et[rt++]);
  s(s.S + s.F * !H, "Symbol", {
    for: function (t) {
      return i(M, t += "") ? M[t] : M[t] = R(t)
    },
    keyFor: function t(e) {
      if (!J(e)) throw TypeError(e + " is not a symbol!");
      for (var r in M)
        if (M[r] === e) return r
    },
    useSetter: function () {
      K = !0
    },
    useSimple: function () {
      K = !1
    }
  }), s(s.S + s.F * !H, "Object", {
    create: function t(e, r) {
      return void 0 === r ? F(e) : Y(F(e), r)
    },
    defineProperty: z,
    defineProperties: Y,
    getOwnPropertyDescriptor: X,
    getOwnPropertyNames: $,
    getOwnPropertySymbols: Q
  }), I && s(s.S + s.F * (!H || c(function () {
    var t = R();
    return "[null]" != O([t]) || "{}" != O({
      a: t
    }) || "{}" != O(Object(t))
  })), "JSON", {
    stringify: function t(e) {
      for (var r, n, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
      if (n = r = i[1], (_(r) || void 0 !== e) && !J(e)) return y(r) || (r = function (t, e) {
        if ("function" == typeof n && (e = n.call(this, t, e)), !J(e)) return e
      }), i[1] = r, O.apply(I, i)
    }
  }), R.prototype[N] || r(12)(R.prototype, N, R.prototype.valueOf), h(R, "Symbol"), h(Math, "Math", !0), h(n.JSON, "JSON", !0)
}, function (t, e, r) {
  t.exports = r(50)("native-function-to-string", Function.toString)
}, function (t, e, r) {
  var n = r(35),
    i = r(57),
    o = r(52);
  t.exports = function (t) {
    var e = n(t),
      r = i.f;
    if (r)
      for (var s, a = r(t), u = o.f, c = 0; a.length > c;) u.call(t, s = a[c++]) && e.push(s);
    return e
  }
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Object", {
    create: r(37)
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S + n.F * !r(8), "Object", {
    defineProperty: r(9).f
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S + n.F * !r(8), "Object", {
    defineProperties: r(106)
  })
}, function (t, e, r) {
  var n = r(16),
    i = r(17).f;
  r(26)("getOwnPropertyDescriptor", function () {
    return function t(e, r) {
      return i(n(e), r)
    }
  })
}, function (t, e, r) {
  var n = r(10),
    i = r(18);
  r(26)("getPrototypeOf", function () {
    return function t(e) {
      return i(n(e))
    }
  })
}, function (t, e, r) {
  var n = r(10),
    i = r(35);
  r(26)("keys", function () {
    return function t(e) {
      return i(n(e))
    }
  })
}, function (t, e, r) {
  r(26)("getOwnPropertyNames", function () {
    return r(107).f
  })
}, function (t, e, r) {
  var n = r(5),
    i = r(31).onFreeze;
  r(26)("freeze", function (t) {
    return function e(r) {
      return t && n(r) ? t(i(r)) : r
    }
  })
}, function (t, e, r) {
  var n = r(5),
    i = r(31).onFreeze;
  r(26)("seal", function (t) {
    return function e(r) {
      return t && n(r) ? t(i(r)) : r
    }
  })
}, function (t, e, r) {
  var n = r(5),
    i = r(31).onFreeze;
  r(26)("preventExtensions", function (t) {
    return function e(r) {
      return t && n(r) ? t(i(r)) : r
    }
  })
}, function (t, e, r) {
  var n = r(5);
  r(26)("isFrozen", function (t) {
    return function e(r) {
      return !n(r) || !!t && t(r)
    }
  })
}, function (t, e, r) {
  var n = r(5);
  r(26)("isSealed", function (t) {
    return function e(r) {
      return !n(r) || !!t && t(r)
    }
  })
}, function (t, e, r) {
  var n = r(5);
  r(26)("isExtensible", function (t) {
    return function e(r) {
      return !!n(r) && (!t || t(r))
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S + n.F, "Object", {
    assign: r(108)
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Object", {
    is: r(109)
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Object", {
    setPrototypeOf: r(77).set
  })
}, function (t, e, r) {
  "use strict";
  var n = r(46),
    i = {};
  i[r(6)("toStringTag")] = "z", i + "" != "[object z]" && r(13)(Object.prototype, "toString", function t() {
    return "[object " + n(this) + "]"
  }, !0)
}, function (t, e, r) {
  var n = r(0);
  n(n.P, "Function", {
    bind: r(110)
  })
}, function (t, e, r) {
  var n = r(9).f,
    i = Function.prototype,
    o = /^\s*function ([^ (]*)/;
  "name" in i || r(8) && n(i, "name", {
    configurable: !0,
    get: function () {
      try {
        return ("" + this).match(o)[1]
      } catch (t) {
        return ""
      }
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(5),
    i = r(18),
    o = r(6)("hasInstance"),
    s = Function.prototype;
  o in s || r(9).f(s, o, {
    value: function (t) {
      if ("function" != typeof this || !n(t)) return !1;
      if (!n(this.prototype)) return t instanceof this;
      for (; t = i(t);)
        if (this.prototype === t) return !0;
      return !1
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(112);
  n(n.G + n.F * (parseInt != i), {
    parseInt: i
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(113);
  n(n.G + n.F * (parseFloat != i), {
    parseFloat: i
  })
}, function (t, e, r) {
  "use strict";
  var n = r(2),
    i = r(15),
    o = r(21),
    s = r(79),
    a = r(24),
    u = r(4),
    c = r(38).f,
    f = r(17).f,
    h = r(9).f,
    l = r(47).trim,
    p = n.Number,
    d = p,
    g = p.prototype,
    v = "Number" == o(r(37)(g)),
    y = "trim" in String.prototype,
    m = function (t) {
      var e = a(t, !1);
      if ("string" == typeof e && e.length > 2) {
        var r, n, i, o = (e = y ? e.trim() : l(e, 3)).charCodeAt(0);
        if (43 === o || 45 === o) {
          if (88 === (r = e.charCodeAt(2)) || 120 === r) return NaN
        } else if (48 === o) {
          switch (e.charCodeAt(1)) {
            case 66:
            case 98:
              n = 2, i = 49;
              break;
            case 79:
            case 111:
              n = 8, i = 55;
              break;
            default:
              return +e
          }
          for (var s, u = e.slice(2), c = 0, f = u.length; c < f; c++)
            if ((s = u.charCodeAt(c)) < 48 || s > i) return NaN;
          return parseInt(u, n)
        }
      }
      return +e
    };
  if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
    p = function t(e) {
      var r = arguments.length < 1 ? 0 : e,
        n = this;
      return n instanceof p && (v ? u(function () {
        g.valueOf.call(n)
      }) : "Number" != o(n)) ? s(new d(m(r)), n, p) : m(r)
    };
    for (var _, S = r(8) ? c(d) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), b = 0; S.length > b; b++) i(d, _ = S[b]) && !i(p, _) && h(p, _, f(d, _));
    p.prototype = g, g.constructor = p, r(13)(n, "Number", p)
  }
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(22),
    o = r(114),
    s = r(80),
    a = 1..toFixed,
    u = Math.floor,
    c = [0, 0, 0, 0, 0, 0],
    f = "Number.toFixed: incorrect invocation!",
    h = function (t, e) {
      for (var r = -1, n = e; ++r < 6;) n += t * c[r], c[r] = n % 1e7, n = u(n / 1e7)
    },
    l = function (t) {
      for (var e = 6, r = 0; --e >= 0;) r += c[e], c[e] = u(r / t), r = r % t * 1e7
    },
    p = function () {
      for (var t = 6, e = ""; --t >= 0;)
        if ("" !== e || 0 === t || 0 !== c[t]) {
          var r = String(c[t]);
          e = "" === e ? r : e + s.call("0", 7 - r.length) + r
        } return e
    },
    d = function (t, e, r) {
      return 0 === e ? r : e % 2 == 1 ? d(t, e - 1, r * t) : d(t * t, e / 2, r)
    };
  n(n.P + n.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !r(4)(function () {
    a.call({})
  })), "Number", {
    toFixed: function t(e) {
      var r, n, a, u, c = o(this, f),
        g = i(e),
        v = "",
        y = "0";
      if (g < 0 || g > 20) throw RangeError(f);
      if (c != c) return "NaN";
      if (c <= -1e21 || c >= 1e21) return String(c);
      if (c < 0 && (v = "-", c = -c), c > 1e-21)
        if (n = (r = function (t) {
            for (var e = 0, r = t; r >= 4096;) e += 12, r /= 4096;
            for (; r >= 2;) e += 1, r /= 2;
            return e
          }(c * d(2, 69, 1)) - 69) < 0 ? c * d(2, -r, 1) : c / d(2, r, 1), n *= 4503599627370496, (r = 52 - r) > 0) {
          for (h(0, n), a = g; a >= 7;) h(1e7, 0), a -= 7;
          for (h(d(10, a, 1), 0), a = r - 1; a >= 23;) l(1 << 23), a -= 23;
          l(1 << a), h(1, 1), l(2), y = p()
        } else h(0, n), h(1 << -r, 0), y = p() + s.call("0", g);
      return y = g > 0 ? v + ((u = y.length) <= g ? "0." + s.call("0", g - u) + y : y.slice(0, u - g) + "." + y.slice(u - g)) : v + y
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(4),
    o = r(114),
    s = 1..toPrecision;
  n(n.P + n.F * (i(function () {
    return "1" !== s.call(1, void 0)
  }) || !i(function () {
    s.call({})
  })), "Number", {
    toPrecision: function t(e) {
      var r = o(this, "Number#toPrecision: incorrect invocation!");
      return void 0 === e ? s.call(r) : s.call(r, e)
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Number", {
    EPSILON: Math.pow(2, -52)
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(2).isFinite;
  n(n.S, "Number", {
    isFinite: function t(e) {
      return "number" == typeof e && i(e)
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Number", {
    isInteger: r(115)
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Number", {
    isNaN: function t(e) {
      return e != e
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(115),
    o = Math.abs;
  n(n.S, "Number", {
    isSafeInteger: function t(e) {
      return i(e) && o(e) <= 9007199254740991
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Number", {
    MAX_SAFE_INTEGER: 9007199254740991
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Number", {
    MIN_SAFE_INTEGER: -9007199254740991
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(113);
  n(n.S + n.F * (Number.parseFloat != i), "Number", {
    parseFloat: i
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(112);
  n(n.S + n.F * (Number.parseInt != i), "Number", {
    parseInt: i
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(116),
    o = Math.sqrt,
    s = Math.acosh;
  n(n.S + n.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", {
    acosh: function t(e) {
      return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : i(e - 1 + o(e - 1) * o(e + 1))
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = Math.asinh;
  n(n.S + n.F * !(i && 1 / i(0) > 0), "Math", {
    asinh: function t(e) {
      return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = Math.atanh;
  n(n.S + n.F * !(i && 1 / i(-0) < 0), "Math", {
    atanh: function t(e) {
      return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(81);
  n(n.S, "Math", {
    cbrt: function t(e) {
      return i(e = +e) * Math.pow(Math.abs(e), 1 / 3)
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    clz32: function t(e) {
      return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = Math.exp;
  n(n.S, "Math", {
    cosh: function t(e) {
      return (i(e = +e) + i(-e)) / 2
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(82);
  n(n.S + n.F * (i != Math.expm1), "Math", {
    expm1: i
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    fround: r(117)
  })
}, function (t, e, r) {
  var n = r(0),
    i = Math.abs;
  n(n.S, "Math", {
    hypot: function t(e, r) {
      for (var n, o, s = 0, a = 0, u = arguments.length, c = 0; a < u;) c < (n = i(arguments[a++])) ? (s = s * (o = c / n) * o + 1, c = n) : s += n > 0 ? (o = n / c) * o : n;
      return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(s)
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = Math.imul;
  n(n.S + n.F * r(4)(function () {
    return -5 != i(4294967295, 5) || 2 != i.length
  }), "Math", {
    imul: function t(e, r) {
      var n = +e,
        i = +r,
        o = 65535 & n,
        s = 65535 & i;
      return 0 | o * s + ((65535 & n >>> 16) * s + o * (65535 & i >>> 16) << 16 >>> 0)
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    log10: function t(e) {
      return Math.log(e) * Math.LOG10E
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    log1p: r(116)
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    log2: function t(e) {
      return Math.log(e) / Math.LN2
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    sign: r(81)
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(82),
    o = Math.exp;
  n(n.S + n.F * r(4)(function () {
    return -2e-17 != !Math.sinh(-2e-17)
  }), "Math", {
    sinh: function t(e) {
      return Math.abs(e = +e) < 1 ? (i(e) - i(-e)) / 2 : (o(e - 1) - o(-e - 1)) * (Math.E / 2)
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(82),
    o = Math.exp;
  n(n.S, "Math", {
    tanh: function t(e) {
      var r = i(e = +e),
        n = i(-e);
      return r == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (r - n) / (o(e) + o(-e))
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    trunc: function t(e) {
      return (e > 0 ? Math.floor : Math.ceil)(e)
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(36),
    o = String.fromCharCode,
    s = String.fromCodePoint;
  n(n.S + n.F * (!!s && 1 != s.length), "String", {
    fromCodePoint: function t(e) {
      for (var r, n = [], s = arguments.length, a = 0; s > a;) {
        if (r = +arguments[a++], i(r, 1114111) !== r) throw RangeError(r + " is not a valid code point");
        n.push(r < 65536 ? o(r) : o(55296 + ((r -= 65536) >> 10), r % 1024 + 56320))
      }
      return n.join("")
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(16),
    o = r(7);
  n(n.S, "String", {
    raw: function t(e) {
      for (var r = i(e.raw), n = o(r.length), s = arguments.length, a = [], u = 0; n > u;) a.push(String(r[u++])), u < s && a.push(String(arguments[u]));
      return a.join("")
    }
  })
}, function (t, e, r) {
  "use strict";
  r(47)("trim", function (t) {
    return function e() {
      return t(this, 3)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(59)(!0);
  r(83)(String, "String", function (t) {
    this._t = String(t), this._i = 0
  }, function () {
    var t, e = this._t,
      r = this._i;
    return r >= e.length ? {
      value: void 0,
      done: !0
    } : (t = n(e, r), this._i += t.length, {
      value: t,
      done: !1
    })
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(59)(!1);
  n(n.P, "String", {
    codePointAt: function t(e) {
      return i(this, e)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(7),
    o = r(85),
    s = "".endsWith;
  n(n.P + n.F * r(86)("endsWith"), "String", {
    endsWith: function t(e) {
      var r = o(this, e, "endsWith"),
        n = arguments.length > 1 ? arguments[1] : void 0,
        a = i(r.length),
        u = void 0 === n ? a : Math.min(i(n), a),
        c = String(e);
      return s ? s.call(r, c, u) : r.slice(u - c.length, u) === c
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(85);
  n(n.P + n.F * r(86)("includes"), "String", {
    includes: function t(e) {
      return !!~i(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.P, "String", {
    repeat: r(80)
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(7),
    o = r(85),
    s = "".startsWith;
  n(n.P + n.F * r(86)("startsWith"), "String", {
    startsWith: function t(e) {
      var r = o(this, e, "startsWith"),
        n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, r.length)),
        a = String(e);
      return s ? s.call(r, a, n) : r.slice(n, n + a.length) === a
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("anchor", function (t) {
    return function e(r) {
      return t(this, "a", "name", r)
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("big", function (t) {
    return function e() {
      return t(this, "big", "", "")
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("blink", function (t) {
    return function e() {
      return t(this, "blink", "", "")
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("bold", function (t) {
    return function e() {
      return t(this, "b", "", "")
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("fixed", function (t) {
    return function e() {
      return t(this, "tt", "", "")
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("fontcolor", function (t) {
    return function e(r) {
      return t(this, "font", "color", r)
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("fontsize", function (t) {
    return function e(r) {
      return t(this, "font", "size", r)
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("italics", function (t) {
    return function e() {
      return t(this, "i", "", "")
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("link", function (t) {
    return function e(r) {
      return t(this, "a", "href", r)
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("small", function (t) {
    return function e() {
      return t(this, "small", "", "")
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("strike", function (t) {
    return function e() {
      return t(this, "strike", "", "")
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("sub", function (t) {
    return function e() {
      return t(this, "sub", "", "")
    }
  })
}, function (t, e, r) {
  "use strict";
  r(14)("sup", function (t) {
    return function e() {
      return t(this, "sup", "", "")
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Date", {
    now: function () {
      return (new Date).getTime()
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(10),
    o = r(24);
  n(n.P + n.F * r(4)(function () {
    return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
      toISOString: function () {
        return 1
      }
    })
  }), "Date", {
    toJSON: function t(e) {
      var r = i(this),
        n = o(r);
      return "number" != typeof n || isFinite(n) ? r.toISOString() : null
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(234);
  n(n.P + n.F * (Date.prototype.toISOString !== i), "Date", {
    toISOString: i
  })
}, function (t, e, r) {
  "use strict";
  var n = r(4),
    i = Date.prototype.getTime,
    o = Date.prototype.toISOString,
    s = function (t) {
      return t > 9 ? t : "0" + t
    };
  t.exports = n(function () {
    return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1))
  }) || !n(function () {
    o.call(new Date(NaN))
  }) ? function t() {
    if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
    var e = this,
      r = e.getUTCFullYear(),
      n = e.getUTCMilliseconds(),
      o = r < 0 ? "-" : r > 9999 ? "+" : "";
    return o + ("00000" + Math.abs(r)).slice(o ? -6 : -4) + "-" + s(e.getUTCMonth() + 1) + "-" + s(e.getUTCDate()) + "T" + s(e.getUTCHours()) + ":" + s(e.getUTCMinutes()) + ":" + s(e.getUTCSeconds()) + "." + (n > 99 ? n : "0" + s(n)) + "Z"
  } : o
}, function (t, e, r) {
  var n = Date.prototype,
    i = n.toString,
    o = n.getTime;
  new Date(NaN) + "" != "Invalid Date" && r(13)(n, "toString", function t() {
    var e = o.call(this);
    return e == e ? i.call(this) : "Invalid Date"
  })
}, function (t, e, r) {
  var n = r(6)("toPrimitive"),
    i = Date.prototype;
  n in i || r(12)(i, n, r(237))
}, function (t, e, r) {
  "use strict";
  var n = r(1),
    i = r(24);
  t.exports = function (t) {
    if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
    return i(n(this), "number" != t)
  }
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Array", {
    isArray: r(58)
  })
}, function (t, e, r) {
  "use strict";
  var n = r(20),
    i = r(0),
    o = r(10),
    s = r(118),
    a = r(87),
    u = r(7),
    c = r(88),
    f = r(89);
  i(i.S + i.F * !r(61)(function (t) {
    Array.from(t)
  }), "Array", {
    from: function t(e) {
      var r, i, h, l, p = o(e),
        d = "function" == typeof this ? this : Array,
        g = arguments.length,
        v = g > 1 ? arguments[1] : void 0,
        y = void 0 !== v,
        m = 0,
        _ = f(p);
      if (y && (v = n(v, g > 2 ? arguments[2] : void 0, 2)), void 0 == _ || d == Array && a(_))
        for (i = new d(r = u(p.length)); r > m; m++) c(i, m, y ? v(p[m], m) : p[m]);
      else
        for (l = _.call(p), i = new d; !(h = l.next()).done; m++) c(i, m, y ? s(l, v, [h.value, m], !0) : h.value);
      return i.length = m, i
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(88);
  n(n.S + n.F * r(4)(function () {
    function t() {}
    return !(Array.of.call(t) instanceof t)
  }), "Array", {
    of: function t() {
      for (var e = 0, r = arguments.length, n = new("function" == typeof this ? this : Array)(r); r > e;) i(n, e, arguments[e++]);
      return n.length = r, n
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(16),
    o = [].join;
  n(n.P + n.F * (r(51) != Object || !r(23)(o)), "Array", {
    join: function t(e) {
      return o.call(i(this), void 0 === e ? "," : e)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(76),
    o = r(21),
    s = r(36),
    a = r(7),
    u = [].slice;
  n(n.P + n.F * r(4)(function () {
    i && u.call(i)
  }), "Array", {
    slice: function t(e, r) {
      var n = a(this.length),
        i = o(this);
      if (r = void 0 === r ? n : r, "Array" == i) return u.call(this, e, r);
      for (var c = s(e, n), f = s(r, n), h = a(f - c), l = new Array(h), p = 0; p < h; p++) l[p] = "String" == i ? this.charAt(c + p) : this[c + p];
      return l
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(11),
    o = r(10),
    s = r(4),
    a = [].sort,
    u = [1, 2, 3];
  n(n.P + n.F * (s(function () {
    u.sort(void 0)
  }) || !s(function () {
    u.sort(null)
  }) || !r(23)(a)), "Array", {
    sort: function t(e) {
      return void 0 === e ? a.call(o(this)) : a.call(o(this), i(e))
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(27)(0),
    o = r(23)([].forEach, !0);
  n(n.P + n.F * !o, "Array", {
    forEach: function t(e) {
      return i(this, e, arguments[1])
    }
  })
}, function (t, e, r) {
  var n = r(5),
    i = r(58),
    o = r(6)("species");
  t.exports = function (t) {
    var e;
    return i(t) && ("function" != typeof (e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), n(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
  }
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(27)(1);
  n(n.P + n.F * !r(23)([].map, !0), "Array", {
    map: function t(e) {
      return i(this, e, arguments[1])
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(27)(2);
  n(n.P + n.F * !r(23)([].filter, !0), "Array", {
    filter: function t(e) {
      return i(this, e, arguments[1])
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(27)(3);
  n(n.P + n.F * !r(23)([].some, !0), "Array", {
    some: function t(e) {
      return i(this, e, arguments[1])
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(27)(4);
  n(n.P + n.F * !r(23)([].every, !0), "Array", {
    every: function t(e) {
      return i(this, e, arguments[1])
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(119);
  n(n.P + n.F * !r(23)([].reduce, !0), "Array", {
    reduce: function t(e) {
      return i(this, e, arguments.length, arguments[1], !1)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(119);
  n(n.P + n.F * !r(23)([].reduceRight, !0), "Array", {
    reduceRight: function t(e) {
      return i(this, e, arguments.length, arguments[1], !0)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(56)(!1),
    o = [].indexOf,
    s = !!o && 1 / [1].indexOf(1, -0) < 0;
  n(n.P + n.F * (s || !r(23)(o)), "Array", {
    indexOf: function t(e) {
      return s ? o.apply(this, arguments) || 0 : i(this, e, arguments[1])
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(16),
    o = r(22),
    s = r(7),
    a = [].lastIndexOf,
    u = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
  n(n.P + n.F * (u || !r(23)(a)), "Array", {
    lastIndexOf: function t(e) {
      if (u) return a.apply(this, arguments) || 0;
      var r = i(this),
        n = s(r.length),
        c = n - 1;
      for (arguments.length > 1 && (c = Math.min(c, o(arguments[1]))), c < 0 && (c = n + c); c >= 0; c--)
        if (c in r && r[c] === e) return c || 0;
      return -1
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.P, "Array", {
    copyWithin: r(120)
  }), r(32)("copyWithin")
}, function (t, e, r) {
  var n = r(0);
  n(n.P, "Array", {
    fill: r(91)
  }), r(32)("fill")
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(27)(5),
    o = !0;
  "find" in [] && Array(1).find(function () {
    o = !1
  }), n(n.P + n.F * o, "Array", {
    find: function t(e) {
      return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), r(32)("find")
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(27)(6),
    o = "findIndex",
    s = !0;
  o in [] && Array(1)[o](function () {
    s = !1
  }), n(n.P + n.F * s, "Array", {
    findIndex: function t(e) {
      return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), r(32)(o)
}, function (t, e, r) {
  r(39)("Array")
}, function (t, e, r) {
  var n = r(2),
    i = r(79),
    o = r(9).f,
    s = r(38).f,
    a = r(60),
    u = r(53),
    c = n.RegExp,
    f = c,
    h = c.prototype,
    l = /a/g,
    p = /a/g,
    d = new c(l) !== l;
  if (r(8) && (!d || r(4)(function () {
      return p[r(6)("match")] = !1, c(l) != l || c(p) == p || "/a/i" != c(l, "i")
    }))) {
    c = function t(e, r) {
      var n = this instanceof c,
        o = a(e),
        s = void 0 === r;
      return !n && o && e.constructor === c && s ? e : i(d ? new f(o && !s ? e.source : e, r) : f((o = e instanceof c) ? e.source : e, o && s ? u.call(e) : r), n ? this : h, c)
    };
    for (var g = function (t) {
        t in c || o(c, t, {
          configurable: !0,
          get: function () {
            return f[t]
          },
          set: function (e) {
            f[t] = e
          }
        })
      }, v = s(f), y = 0; v.length > y;) g(v[y++]);
    h.constructor = c, c.prototype = h, r(13)(n, "RegExp", c)
  }
  r(39)("RegExp")
}, function (t, e, r) {
  "use strict";
  r(123);
  var n = r(1),
    i = r(53),
    o = r(8),
    s = /./.toString,
    a = function (t) {
      r(13)(RegExp.prototype, "toString", t, !0)
    };
  r(4)(function () {
    return "/a/b" != s.call({
      source: "a",
      flags: "b"
    })
  }) ? a(function t() {
    var e = n(this);
    return "/".concat(e.source, "/", "flags" in e ? e.flags : !o && e instanceof RegExp ? i.call(e) : void 0)
  }) : "toString" != s.name && a(function t() {
    return s.call(this)
  })
}, function (t, e, r) {
  "use strict";
  var n = r(1),
    i = r(7),
    o = r(94),
    s = r(62);
  r(63)("match", 1, function (t, e, r, a) {
    return [function r(n) {
      var i = t(this),
        o = void 0 == n ? void 0 : n[e];
      return void 0 !== o ? o.call(n, i) : new RegExp(n)[e](String(i))
    }, function (t) {
      var e = a(r, t, this);
      if (e.done) return e.value;
      var u = n(t),
        c = String(this);
      if (!u.global) return s(u, c);
      var f = u.unicode;
      u.lastIndex = 0;
      for (var h, l = [], p = 0; null !== (h = s(u, c));) {
        var d = String(h[0]);
        l[p] = d, "" === d && (u.lastIndex = o(c, i(u.lastIndex), f)), p++
      }
      return 0 === p ? null : l
    }]
  })
}, function (t, e, r) {
  "use strict";
  var n = r(1),
    i = r(10),
    o = r(7),
    s = r(22),
    a = r(94),
    u = r(62),
    c = Math.max,
    f = Math.min,
    h = Math.floor,
    l = /\$([$&`']|\d\d?|<[^>]*>)/g,
    p = /\$([$&`']|\d\d?)/g;
  r(63)("replace", 2, function (t, e, r, d) {
    return [function n(i, o) {
      var s = t(this),
        a = void 0 == i ? void 0 : i[e];
      return void 0 !== a ? a.call(i, s, o) : r.call(String(s), i, o)
    }, function (t, e) {
      var i = d(r, t, this, e);
      if (i.done) return i.value;
      var h = n(t),
        l = String(this),
        p = "function" == typeof e;
      p || (e = String(e));
      var v = h.global;
      if (v) {
        var y = h.unicode;
        h.lastIndex = 0
      }
      for (var m = [];;) {
        var _ = u(h, l);
        if (null === _) break;
        if (m.push(_), !v) break;
        "" === String(_[0]) && (h.lastIndex = a(l, o(h.lastIndex), y))
      }
      for (var S, b = "", w = 0, F = 0; F < m.length; F++) {
        _ = m[F];
        for (var E = String(_[0]), x = c(f(s(_.index), l.length), 0), A = [], k = 1; k < _.length; k++) A.push(void 0 === (S = _[k]) ? S : String(S));
        var P = _.groups;
        if (p) {
          var C = [E].concat(A, x, l);
          void 0 !== P && C.push(P);
          var T = String(e.apply(void 0, C))
        } else T = g(E, l, x, A, P, e);
        x >= w && (b += l.slice(w, x) + T, w = x + E.length)
      }
      return b + l.slice(w)
    }];

    function g(t, e, n, o, s, a) {
      var u = n + t.length,
        c = o.length,
        f = p;
      return void 0 !== s && (s = i(s), f = l), r.call(a, f, function (r, i) {
        var a;
        switch (i.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return t;
          case "`":
            return e.slice(0, n);
          case "'":
            return e.slice(u);
          case "<":
            a = s[i.slice(1, -1)];
            break;
          default:
            var f = +i;
            if (0 === f) return r;
            if (f > c) {
              var l = h(f / 10);
              return 0 === l ? r : l <= c ? void 0 === o[l - 1] ? i.charAt(1) : o[l - 1] + i.charAt(1) : r
            }
            a = o[f - 1]
        }
        return void 0 === a ? "" : a
      })
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(1),
    i = r(109),
    o = r(62);
  r(63)("search", 1, function (t, e, r, s) {
    return [function r(n) {
      var i = t(this),
        o = void 0 == n ? void 0 : n[e];
      return void 0 !== o ? o.call(n, i) : new RegExp(n)[e](String(i))
    }, function (t) {
      var e = s(r, t, this);
      if (e.done) return e.value;
      var a = n(t),
        u = String(this),
        c = a.lastIndex;
      i(c, 0) || (a.lastIndex = 0);
      var f = o(a, u);
      return i(a.lastIndex, c) || (a.lastIndex = c), null === f ? -1 : f.index
    }]
  })
}, function (t, e, r) {
  "use strict";
  var n = r(60),
    i = r(1),
    o = r(54),
    s = r(94),
    a = r(7),
    u = r(62),
    c = r(93),
    f = r(4),
    h = Math.min,
    l = [].push,
    p = !f(function () {
      RegExp(4294967295, "y")
    });
  r(63)("split", 2, function (t, e, r, f) {
    var d;
    return d = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, e) {
      var i = String(this);
      if (void 0 === t && 0 === e) return [];
      if (!n(t)) return r.call(i, t, e);
      for (var o, s, a, u = [], f = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), h = 0, p = void 0 === e ? 4294967295 : e >>> 0, d = new RegExp(t.source, f + "g");
        (o = c.call(d, i)) && !((s = d.lastIndex) > h && (u.push(i.slice(h, o.index)), o.length > 1 && o.index < i.length && l.apply(u, o.slice(1)), a = o[0].length, h = s, u.length >= p));) d.lastIndex === o.index && d.lastIndex++;
      return h === i.length ? !a && d.test("") || u.push("") : u.push(i.slice(h)), u.length > p ? u.slice(0, p) : u
    } : "0".split(void 0, 0).length ? function (t, e) {
      return void 0 === t && 0 === e ? [] : r.call(this, t, e)
    } : r, [function r(n, i) {
      var o = t(this),
        s = void 0 == n ? void 0 : n[e];
      return void 0 !== s ? s.call(n, o, i) : d.call(String(o), n, i)
    }, function (t, e) {
      var n = f(d, t, this, e, d !== r);
      if (n.done) return n.value;
      var c = i(t),
        l = String(this),
        g = o(c, RegExp),
        v = c.unicode,
        y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (p ? "y" : "g"),
        m = new g(p ? c : "^(?:" + c.source + ")", y),
        _ = void 0 === e ? 4294967295 : e >>> 0;
      if (0 === _) return [];
      if (0 === l.length) return null === u(m, l) ? [l] : [];
      for (var S = 0, b = 0, w = []; b < l.length;) {
        m.lastIndex = p ? b : 0;
        var F, E = u(m, p ? l : l.slice(b));
        if (null === E || (F = h(a(m.lastIndex + (p ? 0 : b)), l.length)) === S) b = s(l, b, v);
        else {
          if (w.push(l.slice(S, b)), w.length === _) return w;
          for (var x = 1; x <= E.length - 1; x++)
            if (w.push(E[x]), w.length === _) return w;
          b = S = F
        }
      }
      return w.push(l.slice(S)), w
    }]
  })
}, function (t, e, r) {
  "use strict";
  var n, i, o, s, a = r(30),
    u = r(2),
    c = r(20),
    f = r(46),
    h = r(0),
    l = r(5),
    p = r(11),
    d = r(40),
    g = r(41),
    v = r(54),
    y = r(95).set,
    m = r(96)(),
    _ = r(97),
    S = r(124),
    b = r(64),
    w = r(125),
    F = u.TypeError,
    E = u.process,
    x = E && E.versions,
    A = x && x.v8 || "",
    k = u.Promise,
    P = "process" == f(E),
    C = function () {},
    T = i = _.f,
    R = !! function () {
      try {
        var t = k.resolve(1),
          e = (t.constructor = {})[r(6)("species")] = function (t) {
            t(C, C)
          };
        return (P || "function" == typeof PromiseRejectionEvent) && t.then(C) instanceof e && 0 !== A.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
      } catch (t) {}
    }(),
    I = function (t) {
      var e;
      return !(!l(t) || "function" != typeof (e = t.then)) && e
    },
    O = function (t, e) {
      if (!t._n) {
        t._n = !0;
        var r = t._c;
        m(function () {
          for (var n = t._v, i = 1 == t._s, o = 0, s = function (e) {
              var r, o, s, a = i ? e.ok : e.fail,
                u = e.resolve,
                c = e.reject,
                f = e.domain;
              try {
                a ? (i || (2 == t._h && L(t), t._h = 1), !0 === a ? r = n : (f && f.enter(), r = a(n), f && (f.exit(), s = !0)), r === e.promise ? c(F("Promise-chain cycle")) : (o = I(r)) ? o.call(r, u, c) : u(r)) : c(n)
              } catch (t) {
                f && !s && f.exit(), c(t)
              }
            }; r.length > o;) s(r[o++]);
          t._c = [], t._n = !1, e && !t._h && D(t)
        })
      }
    },
    D = function (t) {
      y.call(u, function () {
        var e, r, n, i = t._v,
          o = N(t);
        if (o && (e = S(function () {
            P ? E.emit("unhandledRejection", i, t) : (r = u.onunhandledrejection) ? r({
              promise: t,
              reason: i
            }) : (n = u.console) && n.error && n.error("Unhandled promise rejection", i)
          }), t._h = P || N(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
      })
    },
    N = function (t) {
      return 1 !== t._h && 0 === (t._a || t._c).length
    },
    L = function (t) {
      y.call(u, function () {
        var e;
        P ? E.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
          promise: t,
          reason: t._v
        })
      })
    },
    M = function (t) {
      var e = this;
      e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), O(e, !0))
    },
    j = function (t) {
      var e, r = this;
      if (!r._d) {
        r._d = !0, r = r._w || r;
        try {
          if (r === t) throw F("Promise can't be resolved itself");
          (e = I(t)) ? m(function () {
            var n = {
              _w: r,
              _d: !1
            };
            try {
              e.call(t, c(j, n, 1), c(M, n, 1))
            } catch (t) {
              M.call(n, t)
            }
          }): (r._v = t, r._s = 1, O(r, !1))
        } catch (t) {
          M.call({
            _w: r,
            _d: !1
          }, t)
        }
      }
    };
  R || (k = function t(e) {
    d(this, k, "Promise", "_h"), p(e), n.call(this);
    try {
      e(c(j, this, 1), c(M, this, 1))
    } catch (t) {
      M.call(this, t)
    }
  }, (n = function t(e) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
  }).prototype = r(42)(k.prototype, {
    then: function t(e, r) {
      var n = T(v(this, k));
      return n.ok = "function" != typeof e || e, n.fail = "function" == typeof r && r, n.domain = P ? E.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && O(this, !1), n.promise
    },
    catch: function (t) {
      return this.then(void 0, t)
    }
  }), o = function () {
    var t = new n;
    this.promise = t, this.resolve = c(j, t, 1), this.reject = c(M, t, 1)
  }, _.f = T = function (t) {
    return t === k || t === s ? new o(t) : i(t)
  }), h(h.G + h.W + h.F * !R, {
    Promise: k
  }), r(45)(k, "Promise"), r(39)("Promise"), s = r(19).Promise, h(h.S + h.F * !R, "Promise", {
    reject: function t(e) {
      var r = T(this);
      return (0, r.reject)(e), r.promise
    }
  }), h(h.S + h.F * (a || !R), "Promise", {
    resolve: function t(e) {
      return w(a && this === s ? k : this, e)
    }
  }), h(h.S + h.F * !(R && r(61)(function (t) {
    k.all(t).catch(C)
  })), "Promise", {
    all: function t(e) {
      var r = this,
        n = T(r),
        i = n.resolve,
        o = n.reject,
        s = S(function () {
          var t = [],
            n = 0,
            s = 1;
          g(e, !1, function (e) {
            var a = n++,
              u = !1;
            t.push(void 0), s++, r.resolve(e).then(function (e) {
              u || (u = !0, t[a] = e, --s || i(t))
            }, o)
          }), --s || i(t)
        });
      return s.e && o(s.v), n.promise
    },
    race: function t(e) {
      var r = this,
        n = T(r),
        i = n.reject,
        o = S(function () {
          g(e, !1, function (t) {
            r.resolve(t).then(n.resolve, i)
          })
        });
      return o.e && i(o.v), n.promise
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(130),
    i = r(43);
  r(65)("WeakSet", function (t) {
    return function e() {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    add: function t(e) {
      return n.def(i(this, "WeakSet"), e, !0)
    }
  }, n, !1, !0)
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(66),
    o = r(98),
    s = r(1),
    a = r(36),
    u = r(7),
    c = r(5),
    f = r(2).ArrayBuffer,
    h = r(54),
    l = o.ArrayBuffer,
    p = o.DataView,
    d = i.ABV && f.isView,
    g = l.prototype.slice,
    v = i.VIEW;
  n(n.G + n.W + n.F * (f !== l), {
    ArrayBuffer: l
  }), n(n.S + n.F * !i.CONSTR, "ArrayBuffer", {
    isView: function t(e) {
      return d && d(e) || c(e) && v in e
    }
  }), n(n.P + n.U + n.F * r(4)(function () {
    return !new l(2).slice(1, void 0).byteLength
  }), "ArrayBuffer", {
    slice: function t(e, r) {
      if (void 0 !== g && void 0 === r) return g.call(s(this), e);
      for (var n = s(this).byteLength, i = a(e, n), o = a(void 0 === r ? n : r, n), c = new(h(this, l))(u(o - i)), f = new p(this), d = new p(c), v = 0; i < o;) d.setUint8(v++, f.getUint8(i++));
      return c
    }
  }), r(39)("ArrayBuffer")
}, function (t, e, r) {
  var n = r(0);
  n(n.G + n.W + n.F * !r(66).ABV, {
    DataView: r(98).DataView
  })
}, function (t, e, r) {
  r(28)("Int8", 1, function (t) {
    return function e(r, n, i) {
      return t(this, r, n, i)
    }
  })
}, function (t, e, r) {
  r(28)("Uint8", 1, function (t) {
    return function e(r, n, i) {
      return t(this, r, n, i)
    }
  })
}, function (t, e, r) {
  r(28)("Uint8", 1, function (t) {
    return function e(r, n, i) {
      return t(this, r, n, i)
    }
  }, !0)
}, function (t, e, r) {
  r(28)("Int16", 2, function (t) {
    return function e(r, n, i) {
      return t(this, r, n, i)
    }
  })
}, function (t, e, r) {
  r(28)("Uint16", 2, function (t) {
    return function e(r, n, i) {
      return t(this, r, n, i)
    }
  })
}, function (t, e, r) {
  r(28)("Int32", 4, function (t) {
    return function e(r, n, i) {
      return t(this, r, n, i)
    }
  })
}, function (t, e, r) {
  r(28)("Uint32", 4, function (t) {
    return function e(r, n, i) {
      return t(this, r, n, i)
    }
  })
}, function (t, e, r) {
  r(28)("Float32", 4, function (t) {
    return function e(r, n, i) {
      return t(this, r, n, i)
    }
  })
}, function (t, e, r) {
  r(28)("Float64", 8, function (t) {
    return function e(r, n, i) {
      return t(this, r, n, i)
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(11),
    o = r(1),
    s = (r(2).Reflect || {}).apply,
    a = Function.apply;
  n(n.S + n.F * !r(4)(function () {
    s(function () {})
  }), "Reflect", {
    apply: function t(e, r, n) {
      var u = i(e),
        c = o(n);
      return s ? s(u, r, c) : a.call(u, r, c)
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(37),
    o = r(11),
    s = r(1),
    a = r(5),
    u = r(4),
    c = r(110),
    f = (r(2).Reflect || {}).construct,
    h = u(function () {
      function t() {}
      return !(f(function () {}, [], t) instanceof t)
    }),
    l = !u(function () {
      f(function () {})
    });
  n(n.S + n.F * (h || l), "Reflect", {
    construct: function t(e, r) {
      o(e), s(r);
      var n = arguments.length < 3 ? e : o(arguments[2]);
      if (l && !h) return f(e, r, n);
      if (e == n) {
        switch (r.length) {
          case 0:
            return new e;
          case 1:
            return new e(r[0]);
          case 2:
            return new e(r[0], r[1]);
          case 3:
            return new e(r[0], r[1], r[2]);
          case 4:
            return new e(r[0], r[1], r[2], r[3])
        }
        var u = [null];
        return u.push.apply(u, r), new(c.apply(e, u))
      }
      var p = n.prototype,
        d = i(a(p) ? p : Object.prototype),
        g = Function.apply.call(e, d, r);
      return a(g) ? g : d
    }
  })
}, function (t, e, r) {
  var n = r(9),
    i = r(0),
    o = r(1),
    s = r(24);
  i(i.S + i.F * r(4)(function () {
    Reflect.defineProperty(n.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    })
  }), "Reflect", {
    defineProperty: function t(e, r, i) {
      o(e), r = s(r, !0), o(i);
      try {
        return n.f(e, r, i), !0
      } catch (t) {
        return !1
      }
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(17).f,
    o = r(1);
  n(n.S, "Reflect", {
    deleteProperty: function t(e, r) {
      var n = i(o(e), r);
      return !(n && !n.configurable) && delete e[r]
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(1),
    o = function (t) {
      this._t = i(t), this._i = 0;
      var e, r = this._k = [];
      for (e in t) r.push(e)
    };
  r(84)(o, "Object", function () {
    var t, e = this._k;
    do {
      if (this._i >= e.length) return {
        value: void 0,
        done: !0
      }
    } while (!((t = e[this._i++]) in this._t));
    return {
      value: t,
      done: !1
    }
  }), n(n.S, "Reflect", {
    enumerate: function t(e) {
      return new o(e)
    }
  })
}, function (t, e, r) {
  var n = r(17),
    i = r(18),
    o = r(15),
    s = r(0),
    a = r(5),
    u = r(1);
  s(s.S, "Reflect", {
    get: function t(e, r) {
      var s, c, f = arguments.length < 3 ? e : arguments[2];
      return u(e) === f ? e[r] : (s = n.f(e, r)) ? o(s, "value") ? s.value : void 0 !== s.get ? s.get.call(f) : void 0 : a(c = i(e)) ? t(c, r, f) : void 0
    }
  })
}, function (t, e, r) {
  var n = r(17),
    i = r(0),
    o = r(1);
  i(i.S, "Reflect", {
    getOwnPropertyDescriptor: function t(e, r) {
      return n.f(o(e), r)
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(18),
    o = r(1);
  n(n.S, "Reflect", {
    getPrototypeOf: function t(e) {
      return i(o(e))
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Reflect", {
    has: function t(e, r) {
      return r in e
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(1),
    o = Object.isExtensible;
  n(n.S, "Reflect", {
    isExtensible: function t(e) {
      return i(e), !o || o(e)
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Reflect", {
    ownKeys: r(132)
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(1),
    o = Object.preventExtensions;
  n(n.S, "Reflect", {
    preventExtensions: function t(e) {
      i(e);
      try {
        return o && o(e), !0
      } catch (t) {
        return !1
      }
    }
  })
}, function (t, e, r) {
  var n = r(9),
    i = r(17),
    o = r(18),
    s = r(15),
    a = r(0),
    u = r(33),
    c = r(1),
    f = r(5);
  a(a.S, "Reflect", {
    set: function t(e, r, a) {
      var h, l, p = arguments.length < 4 ? e : arguments[3],
        d = i.f(c(e), r);
      if (!d) {
        if (f(l = o(e))) return t(l, r, a, p);
        d = u(0)
      }
      if (s(d, "value")) {
        if (!1 === d.writable || !f(p)) return !1;
        if (h = i.f(p, r)) {
          if (h.get || h.set || !1 === h.writable) return !1;
          h.value = a, n.f(p, r, h)
        } else n.f(p, r, u(0, a));
        return !0
      }
      return void 0 !== d.set && (d.set.call(p, a), !0)
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(77);
  i && n(n.S, "Reflect", {
    setPrototypeOf: function t(e, r) {
      i.check(e, r);
      try {
        return i.set(e, r), !0
      } catch (t) {
        return !1
      }
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(56)(!0);
  n(n.P, "Array", {
    includes: function t(e) {
      return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), r(32)("includes")
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(133),
    o = r(10),
    s = r(7),
    a = r(11),
    u = r(90);
  n(n.P, "Array", {
    flatMap: function t(e) {
      var r, n, c = o(this);
      return a(e), r = s(c.length), n = u(c, 0), i(n, c, c, r, 0, 1, e, arguments[1]), n
    }
  }), r(32)("flatMap")
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(133),
    o = r(10),
    s = r(7),
    a = r(22),
    u = r(90);
  n(n.P, "Array", {
    flatten: function t() {
      var e = arguments[0],
        r = o(this),
        n = s(r.length),
        c = u(r, 0);
      return i(c, r, r, n, 0, void 0 === e ? 1 : a(e)), c
    }
  }), r(32)("flatten")
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(59)(!0);
  n(n.P, "String", {
    at: function t(e) {
      return i(this, e)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(134),
    o = r(64);
  n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), "String", {
    padStart: function t(e) {
      return i(this, e, arguments.length > 1 ? arguments[1] : void 0, !0)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(134),
    o = r(64);
  n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), "String", {
    padEnd: function t(e) {
      return i(this, e, arguments.length > 1 ? arguments[1] : void 0, !1)
    }
  })
}, function (t, e, r) {
  "use strict";
  r(47)("trimLeft", function (t) {
    return function e() {
      return t(this, 1)
    }
  }, "trimStart")
}, function (t, e, r) {
  "use strict";
  r(47)("trimRight", function (t) {
    return function e() {
      return t(this, 2)
    }
  }, "trimEnd")
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(25),
    o = r(7),
    s = r(60),
    a = r(53),
    u = RegExp.prototype,
    c = function (t, e) {
      this._r = t, this._s = e
    };
  r(84)(c, "RegExp String", function t() {
    var e = this._r.exec(this._s);
    return {
      value: e,
      done: null === e
    }
  }), n(n.P, "String", {
    matchAll: function t(e) {
      if (i(this), !s(e)) throw TypeError(e + " is not a regexp!");
      var r = String(this),
        n = "flags" in u ? String(e.flags) : a.call(e),
        f = new RegExp(e.source, ~n.indexOf("g") ? n : "g" + n);
      return f.lastIndex = o(e.lastIndex), new c(f, r)
    }
  })
}, function (t, e, r) {
  r(73)("asyncIterator")
}, function (t, e, r) {
  r(73)("observable")
}, function (t, e, r) {
  var n = r(0),
    i = r(132),
    o = r(16),
    s = r(17),
    a = r(88);
  n(n.S, "Object", {
    getOwnPropertyDescriptors: function t(e) {
      for (var r, n, u = o(e), c = s.f, f = i(u), h = {}, l = 0; f.length > l;) void 0 !== (n = c(u, r = f[l++])) && a(h, r, n);
      return h
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(135)(!1);
  n(n.S, "Object", {
    values: function t(e) {
      return i(e)
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(135)(!0);
  n(n.S, "Object", {
    entries: function t(e) {
      return i(e)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(10),
    o = r(11),
    s = r(9);
  r(8) && n(n.P + r(67), "Object", {
    __defineGetter__: function t(e, r) {
      s.f(i(this), e, {
        get: o(r),
        enumerable: !0,
        configurable: !0
      })
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(10),
    o = r(11),
    s = r(9);
  r(8) && n(n.P + r(67), "Object", {
    __defineSetter__: function t(e, r) {
      s.f(i(this), e, {
        set: o(r),
        enumerable: !0,
        configurable: !0
      })
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(10),
    o = r(24),
    s = r(18),
    a = r(17).f;
  r(8) && n(n.P + r(67), "Object", {
    __lookupGetter__: function t(e) {
      var r, n = i(this),
        u = o(e, !0);
      do {
        if (r = a(n, u)) return r.get
      } while (n = s(n))
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(10),
    o = r(24),
    s = r(18),
    a = r(17).f;
  r(8) && n(n.P + r(67), "Object", {
    __lookupSetter__: function t(e) {
      var r, n = i(this),
        u = o(e, !0);
      do {
        if (r = a(n, u)) return r.set
      } while (n = s(n))
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.P + n.R, "Map", {
    toJSON: r(136)("Map")
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.P + n.R, "Set", {
    toJSON: r(136)("Set")
  })
}, function (t, e, r) {
  r(68)("Map")
}, function (t, e, r) {
  r(68)("Set")
}, function (t, e, r) {
  r(68)("WeakMap")
}, function (t, e, r) {
  r(68)("WeakSet")
}, function (t, e, r) {
  r(69)("Map")
}, function (t, e, r) {
  r(69)("Set")
}, function (t, e, r) {
  r(69)("WeakMap")
}, function (t, e, r) {
  r(69)("WeakSet")
}, function (t, e, r) {
  var n = r(0);
  n(n.G, {
    global: r(2)
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "System", {
    global: r(2)
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(21);
  n(n.S, "Error", {
    isError: function t(e) {
      return "Error" === i(e)
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    clamp: function t(e, r, n) {
      return Math.min(n, Math.max(r, e))
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    DEG_PER_RAD: Math.PI / 180
  })
}, function (t, e, r) {
  var n = r(0),
    i = 180 / Math.PI;
  n(n.S, "Math", {
    degrees: function t(e) {
      return e * i
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(138),
    o = r(117);
  n(n.S, "Math", {
    fscale: function t(e, r, n, s, a) {
      return o(i(e, r, n, s, a))
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    iaddh: function t(e, r, n, i) {
      var o = e >>> 0,
        s = n >>> 0;
      return (r >>> 0) + (i >>> 0) + ((o & s | (o | s) & ~(o + s >>> 0)) >>> 31) | 0
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    isubh: function t(e, r, n, i) {
      var o = e >>> 0,
        s = n >>> 0;
      return (r >>> 0) - (i >>> 0) - ((~o & s | ~(o ^ s) & o - s >>> 0) >>> 31) | 0
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    imulh: function t(e, r) {
      var n = +e,
        i = +r,
        o = 65535 & n,
        s = 65535 & i,
        a = n >> 16,
        u = i >> 16,
        c = (a * s >>> 0) + (o * s >>> 16);
      return a * u + (c >> 16) + ((o * u >>> 0) + (65535 & c) >> 16)
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    RAD_PER_DEG: 180 / Math.PI
  })
}, function (t, e, r) {
  var n = r(0),
    i = Math.PI / 180;
  n(n.S, "Math", {
    radians: function t(e) {
      return e * i
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    scale: r(138)
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    umulh: function t(e, r) {
      var n = +e,
        i = +r,
        o = 65535 & n,
        s = 65535 & i,
        a = n >>> 16,
        u = i >>> 16,
        c = (a * s >>> 0) + (o * s >>> 16);
      return a * u + (c >>> 16) + ((o * u >>> 0) + (65535 & c) >>> 16)
    }
  })
}, function (t, e, r) {
  var n = r(0);
  n(n.S, "Math", {
    signbit: function t(e) {
      return (e = +e) != e ? e : 0 == e ? 1 / e == 1 / 0 : e > 0
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(19),
    o = r(2),
    s = r(54),
    a = r(125);
  n(n.P + n.R, "Promise", {
    finally: function (t) {
      var e = s(this, i.Promise || o.Promise),
        r = "function" == typeof t;
      return this.then(r ? function (r) {
        return a(e, t()).then(function () {
          return r
        })
      } : t, r ? function (r) {
        return a(e, t()).then(function () {
          throw r
        })
      } : t)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(97),
    o = r(124);
  n(n.S, "Promise", {
    try: function (t) {
      var e = i.f(this),
        r = o(t);
      return (r.e ? e.reject : e.resolve)(r.v), e.promise
    }
  })
}, function (t, e, r) {
  var n = r(29),
    i = r(1),
    o = n.key,
    s = n.set;
  n.exp({
    defineMetadata: function t(e, r, n, a) {
      s(e, r, i(n), o(a))
    }
  })
}, function (t, e, r) {
  var n = r(29),
    i = r(1),
    o = n.key,
    s = n.map,
    a = n.store;
  n.exp({
    deleteMetadata: function t(e, r) {
      var n = arguments.length < 3 ? void 0 : o(arguments[2]),
        u = s(i(r), n, !1);
      if (void 0 === u || !u.delete(e)) return !1;
      if (u.size) return !0;
      var c = a.get(r);
      return c.delete(n), !!c.size || a.delete(r)
    }
  })
}, function (t, e, r) {
  var n = r(29),
    i = r(1),
    o = r(18),
    s = n.has,
    a = n.get,
    u = n.key,
    c = function (t, e, r) {
      if (s(t, e, r)) return a(t, e, r);
      var n = o(e);
      return null !== n ? c(t, n, r) : void 0
    };
  n.exp({
    getMetadata: function t(e, r) {
      return c(e, i(r), arguments.length < 3 ? void 0 : u(arguments[2]))
    }
  })
}, function (t, e, r) {
  var n = r(128),
    i = r(137),
    o = r(29),
    s = r(1),
    a = r(18),
    u = o.keys,
    c = o.key,
    f = function (t, e) {
      var r = u(t, e),
        o = a(t);
      if (null === o) return r;
      var s = f(o, e);
      return s.length ? r.length ? i(new n(r.concat(s))) : s : r
    };
  o.exp({
    getMetadataKeys: function t(e) {
      return f(s(e), arguments.length < 2 ? void 0 : c(arguments[1]))
    }
  })
}, function (t, e, r) {
  var n = r(29),
    i = r(1),
    o = n.get,
    s = n.key;
  n.exp({
    getOwnMetadata: function t(e, r) {
      return o(e, i(r), arguments.length < 3 ? void 0 : s(arguments[2]))
    }
  })
}, function (t, e, r) {
  var n = r(29),
    i = r(1),
    o = n.keys,
    s = n.key;
  n.exp({
    getOwnMetadataKeys: function t(e) {
      return o(i(e), arguments.length < 2 ? void 0 : s(arguments[1]))
    }
  })
}, function (t, e, r) {
  var n = r(29),
    i = r(1),
    o = r(18),
    s = n.has,
    a = n.key,
    u = function (t, e, r) {
      if (s(t, e, r)) return !0;
      var n = o(e);
      return null !== n && u(t, n, r)
    };
  n.exp({
    hasMetadata: function t(e, r) {
      return u(e, i(r), arguments.length < 3 ? void 0 : a(arguments[2]))
    }
  })
}, function (t, e, r) {
  var n = r(29),
    i = r(1),
    o = n.has,
    s = n.key;
  n.exp({
    hasOwnMetadata: function t(e, r) {
      return o(e, i(r), arguments.length < 3 ? void 0 : s(arguments[2]))
    }
  })
}, function (t, e, r) {
  var n = r(29),
    i = r(1),
    o = r(11),
    s = n.key,
    a = n.set;
  n.exp({
    metadata: function t(e, r) {
      return function t(n, u) {
        a(e, r, (void 0 !== u ? i : o)(n), s(u))
      }
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(96)(),
    o = r(2).process,
    s = "process" == r(21)(o);
  n(n.G, {
    asap: function t(e) {
      var r = s && o.domain;
      i(r ? r.bind(e) : e)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(2),
    o = r(19),
    s = r(96)(),
    a = r(6)("observable"),
    u = r(11),
    c = r(1),
    f = r(40),
    h = r(42),
    l = r(12),
    p = r(41),
    d = p.RETURN,
    g = function (t) {
      return null == t ? void 0 : u(t)
    },
    v = function (t) {
      var e = t._c;
      e && (t._c = void 0, e())
    },
    y = function (t) {
      return void 0 === t._o
    },
    m = function (t) {
      y(t) || (t._o = void 0, v(t))
    },
    _ = function (t, e) {
      c(t), this._c = void 0, this._o = t, t = new S(this);
      try {
        var r = e(t),
          n = r;
        null != r && ("function" == typeof r.unsubscribe ? r = function () {
          n.unsubscribe()
        } : u(r), this._c = r)
      } catch (e) {
        return void t.error(e)
      }
      y(this) && v(this)
    };
  _.prototype = h({}, {
    unsubscribe: function t() {
      m(this)
    }
  });
  var S = function (t) {
    this._s = t
  };
  S.prototype = h({}, {
    next: function t(e) {
      var r = this._s;
      if (!y(r)) {
        var n = r._o;
        try {
          var i = g(n.next);
          if (i) return i.call(n, e)
        } catch (t) {
          try {
            m(r)
          } finally {
            throw t
          }
        }
      }
    },
    error: function t(e) {
      var r = this._s;
      if (y(r)) throw e;
      var n = r._o;
      r._o = void 0;
      try {
        var i = g(n.error);
        if (!i) throw e;
        e = i.call(n, e)
      } catch (t) {
        try {
          v(r)
        } finally {
          throw t
        }
      }
      return v(r), e
    },
    complete: function t(e) {
      var r = this._s;
      if (!y(r)) {
        var n = r._o;
        r._o = void 0;
        try {
          var i = g(n.complete);
          e = i ? i.call(n, e) : void 0
        } catch (t) {
          try {
            v(r)
          } finally {
            throw t
          }
        }
        return v(r), e
      }
    }
  });
  var b = function t(e) {
    f(this, b, "Observable", "_f")._f = u(e)
  };
  h(b.prototype, {
    subscribe: function t(e) {
      return new _(e, this._f)
    },
    forEach: function t(e) {
      var r = this;
      return new(o.Promise || i.Promise)(function (t, n) {
        u(e);
        var i = r.subscribe({
          next: function (t) {
            try {
              return e(t)
            } catch (t) {
              n(t), i.unsubscribe()
            }
          },
          error: n,
          complete: t
        })
      })
    }
  }), h(b, {
    from: function t(e) {
      var r = "function" == typeof this ? this : b,
        n = g(c(e)[a]);
      if (n) {
        var i = c(n.call(e));
        return i.constructor === r ? i : new r(function (t) {
          return i.subscribe(t)
        })
      }
      return new r(function (t) {
        var r = !1;
        return s(function () {
            if (!r) {
              try {
                if (p(e, !1, function (e) {
                    if (t.next(e), r) return d
                  }) === d) return
              } catch (e) {
                if (r) throw e;
                return void t.error(e)
              }
              t.complete()
            }
          }),
          function () {
            r = !0
          }
      })
    },
    of: function t() {
      for (var e = 0, r = arguments.length, n = new Array(r); e < r;) n[e] = arguments[e++];
      return new("function" == typeof this ? this : b)(function (t) {
        var e = !1;
        return s(function () {
            if (!e) {
              for (var r = 0; r < n.length; ++r)
                if (t.next(n[r]), e) return;
              t.complete()
            }
          }),
          function () {
            e = !0
          }
      })
    }
  }), l(b.prototype, a, function () {
    return this
  }), n(n.G, {
    Observable: b
  }), r(39)("Observable")
}, function (t, e, r) {
  var n = r(2),
    i = r(0),
    o = r(64),
    s = [].slice,
    a = /MSIE .\./.test(o),
    u = function (t) {
      return function (e, r) {
        var n = arguments.length > 2,
          i = !!n && s.call(arguments, 2);
        return t(n ? function () {
          ("function" == typeof e ? e : Function(e)).apply(this, i)
        } : e, r)
      }
    };
  i(i.G + i.B + i.F * a, {
    setTimeout: u(n.setTimeout),
    setInterval: u(n.setInterval)
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(95);
  n(n.G + n.B, {
    setImmediate: i.set,
    clearImmediate: i.clear
  })
}, function (t, e, r) {
  for (var n = r(92), i = r(35), o = r(13), s = r(2), a = r(12), u = r(48), c = r(6), f = c("iterator"), h = c("toStringTag"), l = u.Array, p = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, d = i(p), g = 0; g < d.length; g++) {
    var v, y = d[g],
      m = p[y],
      _ = s[y],
      S = _ && _.prototype;
    if (S && (S[f] || a(S, f, l), S[h] || a(S, h, y), u[y] = l, m))
      for (v in n) S[v] || o(S, v, n[v], !0)
  }
}, function (t, e, r) {
  (function (e) {
    ! function (e) {
      "use strict";
      var r, n = Object.prototype,
        i = n.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        s = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        u = o.toStringTag || "@@toStringTag",
        c = "object" == typeof t,
        f = e.regeneratorRuntime;
      if (f) c && (t.exports = f);
      else {
        (f = e.regeneratorRuntime = c ? t.exports : {}).wrap = S;
        var h = "suspendedStart",
          l = "suspendedYield",
          p = "executing",
          d = "completed",
          g = {},
          v = {};
        v[s] = function () {
          return this
        };
        var y = Object.getPrototypeOf,
          m = y && y(y(R([])));
        m && m !== n && i.call(m, s) && (v = m);
        var _ = E.prototype = w.prototype = Object.create(v);
        F.prototype = _.constructor = E, E.constructor = F, E[u] = F.displayName = "GeneratorFunction", f.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === F || "GeneratorFunction" === (e.displayName || e.name))
        }, f.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, E) : (t.__proto__ = E, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(_), t
        }, f.awrap = function (t) {
          return {
            __await: t
          }
        }, x(A.prototype), A.prototype[a] = function () {
          return this
        }, f.AsyncIterator = A, f.async = function (t, e, r, n) {
          var i = new A(S(t, e, r, n));
          return f.isGeneratorFunction(e) ? i : i.next().then(function (t) {
            return t.done ? t.value : i.next()
          })
        }, x(_), _[u] = "Generator", _[s] = function () {
          return this
        }, _.toString = function () {
          return "[object Generator]"
        }, f.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return e.reverse(),
            function r() {
              for (; e.length;) {
                var n = e.pop();
                if (n in t) return r.value = n, r.done = !1, r
              }
              return r.done = !0, r
            }
        }, f.values = R, T.prototype = {
          constructor: T,
          reset: function (t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(C), !t)
              for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;

            function n(n, i) {
              return a.type = "throw", a.arg = t, e.next = n, i && (e.method = "next", e.arg = r), !!i
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var s = this.tryEntries[o],
                a = s.completion;
              if ("root" === s.tryLoc) return n("end");
              if (s.tryLoc <= this.prev) {
                var u = i.call(s, "catchLoc"),
                  c = i.call(s, "finallyLoc");
                if (u && c) {
                  if (this.prev < s.catchLoc) return n(s.catchLoc, !0);
                  if (this.prev < s.finallyLoc) return n(s.finallyLoc)
                } else if (u) {
                  if (this.prev < s.catchLoc) return n(s.catchLoc, !0)
                } else {
                  if (!c) throw new Error("try statement without catch or finally");
                  if (this.prev < s.finallyLoc) return n(s.finallyLoc)
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var n = this.tryEntries[r];
              if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                var o = n;
                break
              }
            }
            o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
            var s = o ? o.completion : {};
            return s.type = t, s.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, g) : this.complete(s)
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), C(r), g
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var i = n.arg;
                  C(r)
                }
                return i
              }
            }
            throw new Error("illegal catch attempt")
          },
          delegateYield: function (t, e, n) {
            return this.delegate = {
              iterator: R(t),
              resultName: e,
              nextLoc: n
            }, "next" === this.method && (this.arg = r), g
          }
        }
      }

      function S(t, e, r, n) {
        var i = e && e.prototype instanceof w ? e : w,
          o = Object.create(i.prototype),
          s = new T(n || []);
        return o._invoke = function a(t, e, r) {
          var n = h;
          return function i(o, s) {
            if (n === p) throw new Error("Generator is already running");
            if (n === d) {
              if ("throw" === o) throw s;
              return I()
            }
            for (r.method = o, r.arg = s;;) {
              var a = r.delegate;
              if (a) {
                var u = k(a, r);
                if (u) {
                  if (u === g) continue;
                  return u
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (n === h) throw n = d, r.arg;
                r.dispatchException(r.arg)
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = p;
              var c = b(t, e, r);
              if ("normal" === c.type) {
                if (n = r.done ? d : l, c.arg === g) continue;
                return {
                  value: c.arg,
                  done: r.done
                }
              }
              "throw" === c.type && (n = d, r.method = "throw", r.arg = c.arg)
            }
          }
        }(t, r, s), o
      }

      function b(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          }
        } catch (t) {
          return {
            type: "throw",
            arg: t
          }
        }
      }

      function w() {}

      function F() {}

      function E() {}

      function x(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t)
          }
        })
      }

      function A(t) {
        function r(e, n, o, s) {
          var a = b(t[e], t, n);
          if ("throw" !== a.type) {
            var u = a.arg,
              c = u.value;
            return c && "object" == typeof c && i.call(c, "__await") ? Promise.resolve(c.__await).then(function (t) {
              r("next", t, o, s)
            }, function (t) {
              r("throw", t, o, s)
            }) : Promise.resolve(c).then(function (t) {
              u.value = t, o(u)
            }, s)
          }
          s(a.arg)
        }
        var n;
        "object" == typeof e.process && e.process.domain && (r = e.process.domain.bind(r)), this._invoke = function o(t, e) {
          function i() {
            return new Promise(function (n, i) {
              r(t, e, n, i)
            })
          }
          return n = n ? n.then(i, i) : i()
        }
      }

      function k(t, e) {
        var n = t.iterator[e.method];
        if (n === r) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = r, k(t, e), "throw" === e.method)) return g;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return g
        }
        var i = b(n, t.iterator, e.arg);
        if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, g;
        var o = i.arg;
        return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, g) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, g)
      }

      function P(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
      }

      function C(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e
      }

      function T(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(P, this), this.reset(!0)
      }

      function R(t) {
        if (t) {
          var e = t[s];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              o = function e() {
                for (; ++n < t.length;)
                  if (i.call(t, n)) return e.value = t[n], e.done = !1, e;
                return e.value = r, e.done = !0, e
              };
            return o.next = o
          }
        }
        return {
          next: I
        }
      }

      function I() {
        return {
          value: r,
          done: !0
        }
      }
    }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
  }).call(this, r(71))
}, function (t, e, r) {
  r(353), t.exports = r(19).RegExp.escape
}, function (t, e, r) {
  var n = r(0),
    i = r(354)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
  n(n.S, "RegExp", {
    escape: function t(e) {
      return i(e)
    }
  })
}, function (t, e) {
  t.exports = function (t, e) {
    var r = e === Object(e) ? function (t) {
      return e[t]
    } : e;
    return function (e) {
      return String(e).replace(t, r)
    }
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = r(3),
    i = r(139),
    o = r(99),
    s = r(100),
    a = r(371),
    u = r(372),
    c = r(146),
    f = r(49),
    h = r(382),
    l = r(383),
    p = r(149),
    d = r(150),
    g = r(148),
    v = r(44),
    y = r(145),
    m = r(384);
  e.default = {
    Version: m.Version,
    Log: n.Log,
    OidcClient: i.OidcClient,
    OidcClientSettings: o.OidcClientSettings,
    WebStorageStateStore: s.WebStorageStateStore,
    InMemoryWebStorage: a.InMemoryWebStorage,
    UserManager: u.UserManager,
    AccessTokenEvents: c.AccessTokenEvents,
    MetadataService: f.MetadataService,
    CordovaPopupNavigator: h.CordovaPopupNavigator,
    CordovaIFrameNavigator: l.CordovaIFrameNavigator,
    CheckSessionIFrame: p.CheckSessionIFrame,
    TokenRevocationClient: d.TokenRevocationClient,
    SessionMonitor: g.SessionMonitor,
    Global: v.Global,
    User: y.User
  }, t.exports = e.default
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ResponseValidator = void 0;
  var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    i = r(3),
    o = r(49),
    s = r(357),
    a = r(140),
    u = r(141),
    c = r(70);
  var f = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "c_hash"];
  e.ResponseValidator = function () {
    function t(e) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MetadataService,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.UserInfoService,
        u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.JoseUtil,
        f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.TokenClient;
      if (function h(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), !e) throw i.Log.error("ResponseValidator.ctor: No settings passed to ResponseValidator"), new Error("settings");
      this._settings = e, this._metadataService = new r(this._settings), this._userInfoService = new n(this._settings), this._joseUtil = u, this._tokenClient = new f(this._settings)
    }
    return t.prototype.validateSigninResponse = function t(e, r) {
      var n = this;
      return i.Log.debug("ResponseValidator.validateSigninResponse"), this._processSigninParams(e, r).then(function (t) {
        return i.Log.debug("ResponseValidator.validateSigninResponse: state processed"), n._validateTokens(e, t).then(function (t) {
          return i.Log.debug("ResponseValidator.validateSigninResponse: tokens validated"), n._processClaims(e, t).then(function (t) {
            return i.Log.debug("ResponseValidator.validateSigninResponse: claims processed"), t
          })
        })
      })
    }, t.prototype.validateSignoutResponse = function t(e, r) {
      return e.id !== r.state ? (i.Log.error("ResponseValidator.validateSignoutResponse: State does not match"), Promise.reject(new Error("State does not match"))) : (i.Log.debug("ResponseValidator.validateSignoutResponse: state validated"), r.state = e.data, r.error ? (i.Log.warn("ResponseValidator.validateSignoutResponse: Response was error", r.error), Promise.reject(new u.ErrorResponse(r))) : Promise.resolve(r))
    }, t.prototype._processSigninParams = function t(e, r) {
      if (e.id !== r.state) return i.Log.error("ResponseValidator._processSigninParams: State does not match"), Promise.reject(new Error("State does not match"));
      if (!e.client_id) return i.Log.error("ResponseValidator._processSigninParams: No client_id on state"), Promise.reject(new Error("No client_id on state"));
      if (!e.authority) return i.Log.error("ResponseValidator._processSigninParams: No authority on state"), Promise.reject(new Error("No authority on state"));
      if (this._settings.authority) {
        if (this._settings.authority && this._settings.authority !== e.authority) return i.Log.error("ResponseValidator._processSigninParams: authority mismatch on settings vs. signin state"), Promise.reject(new Error("authority mismatch on settings vs. signin state"))
      } else this._settings.authority = e.authority;
      if (this._settings.client_id) {
        if (this._settings.client_id && this._settings.client_id !== e.client_id) return i.Log.error("ResponseValidator._processSigninParams: client_id mismatch on settings vs. signin state"), Promise.reject(new Error("client_id mismatch on settings vs. signin state"))
      } else this._settings.client_id = e.client_id;
      return i.Log.debug("ResponseValidator._processSigninParams: state validated"), r.state = e.data, r.error ? (i.Log.warn("ResponseValidator._processSigninParams: Response was error", r.error), Promise.reject(new u.ErrorResponse(r))) : e.nonce && !r.id_token ? (i.Log.error("ResponseValidator._processSigninParams: Expecting id_token in response"), Promise.reject(new Error("No id_token in response"))) : !e.nonce && r.id_token ? (i.Log.error("ResponseValidator._processSigninParams: Not expecting id_token in response"), Promise.reject(new Error("Unexpected id_token in response"))) : e.code_verifier && !r.code ? (i.Log.error("ResponseValidator._processSigninParams: Expecting code in response"), Promise.reject(new Error("No code in response"))) : !e.code_verifier && r.code ? (i.Log.error("ResponseValidator._processSigninParams: Not expecting code in response"), Promise.reject(new Error("Unexpected code in response"))) : (r.scope || (r.scope = e.scope), Promise.resolve(r))
    }, t.prototype._processClaims = function t(e, r) {
      var n = this;
      if (r.isOpenIdConnect) {
        if (i.Log.debug("ResponseValidator._processClaims: response is OIDC, processing claims"), r.profile = this._filterProtocolClaims(r.profile), !0 !== e.skipUserInfo && this._settings.loadUserInfo && r.access_token) return i.Log.debug("ResponseValidator._processClaims: loading user info"), this._userInfoService.getClaims(r.access_token).then(function (t) {
          return i.Log.debug("ResponseValidator._processClaims: user info claims received from user info endpoint"), t.sub !== r.profile.sub ? (i.Log.error("ResponseValidator._processClaims: sub from user info endpoint does not match sub in access_token"), Promise.reject(new Error("sub from user info endpoint does not match sub in access_token"))) : (r.profile = n._mergeClaims(r.profile, t), i.Log.debug("ResponseValidator._processClaims: user info claims received, updated profile:", r.profile), r)
        });
        i.Log.debug("ResponseValidator._processClaims: not loading user info")
      } else i.Log.debug("ResponseValidator._processClaims: response is not OIDC, not processing claims");
      return Promise.resolve(r)
    }, t.prototype._mergeClaims = function t(e, r) {
      var i = Object.assign({}, e);
      for (var o in r) {
        var s = r[o];
        Array.isArray(s) || (s = [s]);
        for (var a = 0; a < s.length; a++) {
          var u = s[a];
          i[o] ? Array.isArray(i[o]) ? i[o].indexOf(u) < 0 && i[o].push(u) : i[o] !== u && ("object" === (void 0 === u ? "undefined" : n(u)) ? i[o] = this._mergeClaims(i[o], u) : i[o] = [i[o], u]) : i[o] = u
        }
      }
      return i
    }, t.prototype._filterProtocolClaims = function t(e) {
      i.Log.debug("ResponseValidator._filterProtocolClaims, incoming claims:", e);
      var r = Object.assign({}, e);
      return this._settings._filterProtocolClaims ? (f.forEach(function (t) {
        delete r[t]
      }), i.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims filtered", r)) : i.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims not filtered"), r
    }, t.prototype._validateTokens = function t(e, r) {
      return r.code ? (i.Log.debug("ResponseValidator._validateTokens: Validating code"), this._processCode(e, r)) : r.id_token ? r.access_token ? (i.Log.debug("ResponseValidator._validateTokens: Validating id_token and access_token"), this._validateIdTokenAndAccessToken(e, r)) : (i.Log.debug("ResponseValidator._validateTokens: Validating id_token"), this._validateIdToken(e, r)) : (i.Log.debug("ResponseValidator._validateTokens: No code to process or id_token to validate"), Promise.resolve(r))
    }, t.prototype._processCode = function t(e, r) {
      var o = this,
        s = {
          client_id: e.client_id,
          client_secret: e.client_secret,
          code: r.code,
          redirect_uri: e.redirect_uri,
          code_verifier: e.code_verifier
        };
      return e.extraTokenParams && "object" === n(e.extraTokenParams) && Object.assign(s, e.extraTokenParams), this._tokenClient.exchangeCode(s).then(function (t) {
        for (var n in t) r[n] = t[n];
        return r.id_token ? (i.Log.debug("ResponseValidator._processCode: token response successful, processing id_token"), o._validateIdTokenAttributes(e, r)) : (i.Log.debug("ResponseValidator._processCode: token response successful, returning response"), r)
      })
    }, t.prototype._validateIdTokenAttributes = function t(e, r) {
      var n = this;
      return this._metadataService.getIssuer().then(function (t) {
        var o = e.client_id,
          s = n._settings.clockSkew;
        return i.Log.debug("ResponseValidator._validateIdTokenAttributes: Validaing JWT attributes; using clock skew (in seconds) of: ", s), n._joseUtil.validateJwtAttributes(r.id_token, t, o, s).then(function (t) {
          return e.nonce && e.nonce !== t.nonce ? (i.Log.error("ResponseValidator._validateIdTokenAttributes: Invalid nonce in id_token"), Promise.reject(new Error("Invalid nonce in id_token"))) : t.sub ? (r.profile = t, r) : (i.Log.error("ResponseValidator._validateIdTokenAttributes: No sub present in id_token"), Promise.reject(new Error("No sub present in id_token")))
        })
      })
    }, t.prototype._validateIdTokenAndAccessToken = function t(e, r) {
      var n = this;
      return this._validateIdToken(e, r).then(function (t) {
        return n._validateAccessToken(t)
      })
    }, t.prototype._validateIdToken = function t(e, r) {
      var n = this;
      if (!e.nonce) return i.Log.error("ResponseValidator._validateIdToken: No nonce on state"), Promise.reject(new Error("No nonce on state"));
      var o = this._joseUtil.parseJwt(r.id_token);
      if (!o || !o.header || !o.payload) return i.Log.error("ResponseValidator._validateIdToken: Failed to parse id_token", o), Promise.reject(new Error("Failed to parse id_token"));
      if (e.nonce !== o.payload.nonce) return i.Log.error("ResponseValidator._validateIdToken: Invalid nonce in id_token"), Promise.reject(new Error("Invalid nonce in id_token"));
      var s = o.header.kid;
      return this._metadataService.getIssuer().then(function (t) {
        return i.Log.debug("ResponseValidator._validateIdToken: Received issuer"), n._metadataService.getSigningKeys().then(function (a) {
          if (!a) return i.Log.error("ResponseValidator._validateIdToken: No signing keys from metadata"), Promise.reject(new Error("No signing keys from metadata"));
          i.Log.debug("ResponseValidator._validateIdToken: Received signing keys");
          var u = void 0;
          if (s) u = a.filter(function (t) {
            return t.kid === s
          })[0];
          else {
            if ((a = n._filterByAlg(a, o.header.alg)).length > 1) return i.Log.error("ResponseValidator._validateIdToken: No kid found in id_token and more than one key found in metadata"), Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
            u = a[0]
          }
          if (!u) return i.Log.error("ResponseValidator._validateIdToken: No key matching kid or alg found in signing keys"), Promise.reject(new Error("No key matching kid or alg found in signing keys"));
          var c = e.client_id,
            f = n._settings.clockSkew;
          return i.Log.debug("ResponseValidator._validateIdToken: Validaing JWT; using clock skew (in seconds) of: ", f), n._joseUtil.validateJwt(r.id_token, u, t, c, f).then(function () {
            return i.Log.debug("ResponseValidator._validateIdToken: JWT validation successful"), o.payload.sub ? (r.profile = o.payload, r) : (i.Log.error("ResponseValidator._validateIdToken: No sub present in id_token"), Promise.reject(new Error("No sub present in id_token")))
          })
        })
      })
    }, t.prototype._filterByAlg = function t(e, r) {
      var n = null;
      if (r.startsWith("RS")) n = "RSA";
      else if (r.startsWith("PS")) n = "PS";
      else {
        if (!r.startsWith("ES")) return i.Log.debug("ResponseValidator._filterByAlg: alg not supported: ", r), [];
        n = "EC"
      }
      return i.Log.debug("ResponseValidator._filterByAlg: Looking for keys that match kty: ", n), e = e.filter(function (t) {
        return t.kty === n
      }), i.Log.debug("ResponseValidator._filterByAlg: Number of keys that match kty: ", n, e.length), e
    }, t.prototype._validateAccessToken = function t(e) {
      if (!e.profile) return i.Log.error("ResponseValidator._validateAccessToken: No profile loaded from id_token"), Promise.reject(new Error("No profile loaded from id_token"));
      if (!e.profile.at_hash) return i.Log.error("ResponseValidator._validateAccessToken: No at_hash in id_token"), Promise.reject(new Error("No at_hash in id_token"));
      if (!e.id_token) return i.Log.error("ResponseValidator._validateAccessToken: No id_token"), Promise.reject(new Error("No id_token"));
      var r = this._joseUtil.parseJwt(e.id_token);
      if (!r || !r.header) return i.Log.error("ResponseValidator._validateAccessToken: Failed to parse id_token", r), Promise.reject(new Error("Failed to parse id_token"));
      var n = r.header.alg;
      if (!n || 5 !== n.length) return i.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", n), Promise.reject(new Error("Unsupported alg: " + n));
      var o = n.substr(2, 3);
      if (!o) return i.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", n, o), Promise.reject(new Error("Unsupported alg: " + n));
      if (256 !== (o = parseInt(o)) && 384 !== o && 512 !== o) return i.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", n, o), Promise.reject(new Error("Unsupported alg: " + n));
      var s = "sha" + o,
        a = this._joseUtil.hashString(e.access_token, s);
      if (!a) return i.Log.error("ResponseValidator._validateAccessToken: access_token hash failed:", s), Promise.reject(new Error("Failed to validate at_hash"));
      var u = a.substr(0, a.length / 2),
        c = this._joseUtil.hexToBase64Url(u);
      return c !== e.profile.at_hash ? (i.Log.error("ResponseValidator._validateAccessToken: Failed to validate at_hash", c, e.profile.at_hash), Promise.reject(new Error("Failed to validate at_hash"))) : (i.Log.debug("ResponseValidator._validateAccessToken: success"), Promise.resolve(e))
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.UserInfoService = void 0;
  var n = r(101),
    i = r(49),
    o = r(3),
    s = r(70);
  e.UserInfoService = function () {
    function t(e) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.JsonService,
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.MetadataService,
        u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.JoseUtil;
      if (function c(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), !e) throw o.Log.error("UserInfoService.ctor: No settings passed"), new Error("settings");
      this._settings = e, this._jsonService = new r(void 0, void 0, this._getClaimsFromJwt.bind(this)), this._metadataService = new a(this._settings), this._joseUtil = u
    }
    return t.prototype.getClaims = function t(e) {
      var r = this;
      return e ? this._metadataService.getUserInfoEndpoint().then(function (t) {
        return o.Log.debug("UserInfoService.getClaims: received userinfo url", t), r._jsonService.getJson(t, e).then(function (t) {
          return o.Log.debug("UserInfoService.getClaims: claims received", t), t
        })
      }) : (o.Log.error("UserInfoService.getClaims: No token passed"), Promise.reject(new Error("A token is required")))
    }, t.prototype._getClaimsFromJwt = function t(e) {
      var r = this;
      try {
        var n = this._joseUtil.parseJwt(e.responseText);
        if (!n || !n.header || !n.payload) return o.Log.error("UserInfoService._getClaimsFromJwt: Failed to parse JWT", n), Promise.reject(new Error("Failed to parse id_token"));
        var i = n.header.kid,
          s = void 0;
        switch (this._settings.userInfoJwtIssuer) {
          case "OP":
            s = this._metadataService.getIssuer();
            break;
          case "ANY":
            s = Promise.resolve(n.payload.iss);
            break;
          default:
            s = Promise.resolve(this._settings.userInfoJwtIssuer)
        }
        return s.then(function (t) {
          return o.Log.debug("UserInfoService._getClaimsFromJwt: Received issuer:" + t), r._metadataService.getSigningKeys().then(function (s) {
            if (!s) return o.Log.error("UserInfoService._getClaimsFromJwt: No signing keys from metadata"), Promise.reject(new Error("No signing keys from metadata"));
            o.Log.debug("UserInfoService._getClaimsFromJwt: Received signing keys");
            var a = void 0;
            if (i) a = s.filter(function (t) {
              return t.kid === i
            })[0];
            else {
              if ((s = r._filterByAlg(s, n.header.alg)).length > 1) return o.Log.error("UserInfoService._getClaimsFromJwt: No kid found in id_token and more than one key found in metadata"), Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
              a = s[0]
            }
            if (!a) return o.Log.error("UserInfoService._getClaimsFromJwt: No key matching kid or alg found in signing keys"), Promise.reject(new Error("No key matching kid or alg found in signing keys"));
            var u = r._settings.client_id,
              c = r._settings.clockSkew;
            return o.Log.debug("UserInfoService._getClaimsFromJwt: Validaing JWT; using clock skew (in seconds) of: ", c), r._joseUtil.validateJwt(e.responseText, a, t, u, c, void 0, !0).then(function () {
              return o.Log.debug("UserInfoService._getClaimsFromJwt: JWT validation successful"), n.payload
            })
          })
        })
      } catch (t) {
        return o.Log.error("UserInfoService._getClaimsFromJwt: Error parsing JWT response", t.message), void reject(t)
      }
    }, t.prototype._filterByAlg = function t(e, r) {
      var n = null;
      if (r.startsWith("RS")) n = "RSA";
      else if (r.startsWith("PS")) n = "PS";
      else {
        if (!r.startsWith("ES")) return o.Log.debug("UserInfoService._filterByAlg: alg not supported: ", r), [];
        n = "EC"
      }
      return o.Log.debug("UserInfoService._filterByAlg: Looking for keys that match kty: ", n), e = e.filter(function (t) {
        return t.kty === n
      }), o.Log.debug("UserInfoService._filterByAlg: Number of keys that match kty: ", n, e.length), e
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.AllowedSigningAlgs = e.b64tohex = e.hextob64u = e.crypto = e.X509 = e.KeyUtil = e.jws = void 0;
  var n = r(359);
  e.jws = n.jws, e.KeyUtil = n.KEYUTIL, e.X509 = n.X509, e.crypto = n.crypto, e.hextob64u = n.hextob64u, e.b64tohex = n.b64tohex, e.AllowedSigningAlgs = ["RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"]
}, function (t, e, r) {
  "use strict";
  (function (t) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      n = {
        userAgent: !1
      },
      i = {};
    /*!
    Copyright (c) 2011, Yahoo! Inc. All rights reserved.
    Code licensed under the BSD License:
    http://developer.yahoo.com/yui/license.html
    version: 2.9.0
    */
    if (void 0 === o) var o = {};
    o.lang = {
      extend: function t(e, r, i) {
        if (!r || !e) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
        var o = function t() {};
        if (o.prototype = r.prototype, e.prototype = new o, e.prototype.constructor = e, e.superclass = r.prototype, r.prototype.constructor == Object.prototype.constructor && (r.prototype.constructor = r), i) {
          var s;
          for (s in i) e.prototype[s] = i[s];
          var a = function t() {},
            u = ["toString", "valueOf"];
          try {
            /MSIE/.test(n.userAgent) && (a = function t(e, r) {
              for (s = 0; s < u.length; s += 1) {
                var n = u[s],
                  i = r[n];
                "function" == typeof i && i != Object.prototype[n] && (e[n] = i)
              }
            })
          } catch (t) {}
          a(e.prototype, i)
        }
      }
    };
    /*! CryptoJS v3.1.2 core-fix.js
     * code.google.com/p/crypto-js
     * (c) 2009-2013 by Jeff Mott. All rights reserved.
     * code.google.com/p/crypto-js/wiki/License
     * THIS IS FIX of 'core.js' to fix Hmac issue.
     * https://code.google.com/p/crypto-js/issues/detail?id=84
     * https://crypto-js.googlecode.com/svn-history/r667/branches/3.x/src/core.js
     */
    var s, a, u, c, f, h, l, p, d, g, v, y = y || (s = Math, u = (a = {}).lib = {}, c = u.Base = function () {
      function t() {}
      return {
        extend: function e(r) {
          t.prototype = this;
          var n = new t;
          return r && n.mixIn(r), n.hasOwnProperty("init") || (n.init = function () {
            n.$super.init.apply(this, arguments)
          }), n.init.prototype = n, n.$super = this, n
        },
        create: function t() {
          var e = this.extend();
          return e.init.apply(e, arguments), e
        },
        init: function t() {},
        mixIn: function t(e) {
          for (var r in e) e.hasOwnProperty(r) && (this[r] = e[r]);
          e.hasOwnProperty("toString") && (this.toString = e.toString)
        },
        clone: function t() {
          return this.init.prototype.extend(this)
        }
      }
    }(), f = u.WordArray = c.extend({
      init: function t(e, r) {
        e = this.words = e || [], this.sigBytes = void 0 != r ? r : 4 * e.length
      },
      toString: function t(e) {
        return (e || l).stringify(this)
      },
      concat: function t(e) {
        var r = this.words,
          n = e.words,
          i = this.sigBytes,
          o = e.sigBytes;
        if (this.clamp(), i % 4)
          for (var s = 0; s < o; s++) {
            var a = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;
            r[i + s >>> 2] |= a << 24 - (i + s) % 4 * 8
          } else
            for (s = 0; s < o; s += 4) r[i + s >>> 2] = n[s >>> 2];
        return this.sigBytes += o, this
      },
      clamp: function t() {
        var e = this.words,
          r = this.sigBytes;
        e[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, e.length = s.ceil(r / 4)
      },
      clone: function t() {
        var e = c.clone.call(this);
        return e.words = this.words.slice(0), e
      },
      random: function t(e) {
        for (var r = [], n = 0; n < e; n += 4) r.push(4294967296 * s.random() | 0);
        return new f.init(r, e)
      }
    }), h = a.enc = {}, l = h.Hex = {
      stringify: function t(e) {
        for (var r = e.words, n = e.sigBytes, i = [], o = 0; o < n; o++) {
          var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
          i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16))
        }
        return i.join("")
      },
      parse: function t(e) {
        for (var r = e.length, n = [], i = 0; i < r; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
        return new f.init(n, r / 2)
      }
    }, p = h.Latin1 = {
      stringify: function t(e) {
        for (var r = e.words, n = e.sigBytes, i = [], o = 0; o < n; o++) {
          var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
          i.push(String.fromCharCode(s))
        }
        return i.join("")
      },
      parse: function t(e) {
        for (var r = e.length, n = [], i = 0; i < r; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
        return new f.init(n, r)
      }
    }, d = h.Utf8 = {
      stringify: function t(e) {
        try {
          return decodeURIComponent(escape(p.stringify(e)))
        } catch (t) {
          throw new Error("Malformed UTF-8 data")
        }
      },
      parse: function t(e) {
        return p.parse(unescape(encodeURIComponent(e)))
      }
    }, g = u.BufferedBlockAlgorithm = c.extend({
      reset: function t() {
        this._data = new f.init, this._nDataBytes = 0
      },
      _append: function t(e) {
        "string" == typeof e && (e = d.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
      },
      _process: function t(e) {
        var r = this._data,
          n = r.words,
          i = r.sigBytes,
          o = this.blockSize,
          a = i / (4 * o),
          u = (a = e ? s.ceil(a) : s.max((0 | a) - this._minBufferSize, 0)) * o,
          c = s.min(4 * u, i);
        if (u) {
          for (var h = 0; h < u; h += o) this._doProcessBlock(n, h);
          var l = n.splice(0, u);
          r.sigBytes -= c
        }
        return new f.init(l, c)
      },
      clone: function t() {
        var e = c.clone.call(this);
        return e._data = this._data.clone(), e
      },
      _minBufferSize: 0
    }), u.Hasher = g.extend({
      cfg: c.extend(),
      init: function t(e) {
        this.cfg = this.cfg.extend(e), this.reset()
      },
      reset: function t() {
        g.reset.call(this), this._doReset()
      },
      update: function t(e) {
        return this._append(e), this._process(), this
      },
      finalize: function t(e) {
        return e && this._append(e), this._doFinalize()
      },
      blockSize: 16,
      _createHelper: function t(e) {
        return function (t, r) {
          return new e.init(r).finalize(t)
        }
      },
      _createHmacHelper: function t(e) {
        return function (t, r) {
          return new v.HMAC.init(e, r).finalize(t)
        }
      }
    }), v = a.algo = {}, a);
    ! function (t) {
      var e, r = (e = y).lib,
        n = r.Base,
        i = r.WordArray;
      (e = e.x64 = {}).Word = n.extend({
        init: function t(e, r) {
          this.high = e, this.low = r
        }
      }), e.WordArray = n.extend({
        init: function t(e, r) {
          e = this.words = e || [], this.sigBytes = void 0 != r ? r : 8 * e.length
        },
        toX32: function t() {
          for (var e = this.words, r = e.length, n = [], o = 0; o < r; o++) {
            var s = e[o];
            n.push(s.high), n.push(s.low)
          }
          return i.create(n, this.sigBytes)
        },
        clone: function t() {
          for (var e = n.clone.call(this), r = e.words = this.words.slice(0), i = r.length, o = 0; o < i; o++) r[o] = r[o].clone();
          return e
        }
      })
    }(),
    function () {
      var t = y,
        e = t.lib.WordArray;
      t.enc.Base64 = {
        stringify: function t(e) {
          var r = e.words,
            n = e.sigBytes,
            i = this._map;
          e.clamp(), e = [];
          for (var o = 0; o < n; o += 3)
            for (var s = (r[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (r[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | r[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; 4 > a && o + .75 * a < n; a++) e.push(i.charAt(s >>> 6 * (3 - a) & 63));
          if (r = i.charAt(64))
            for (; e.length % 4;) e.push(r);
          return e.join("")
        },
        parse: function t(r) {
          var n = r.length,
            i = this._map;
          (o = i.charAt(64)) && (-1 != (o = r.indexOf(o)) && (n = o));
          for (var o = [], s = 0, a = 0; a < n; a++)
            if (a % 4) {
              var u = i.indexOf(r.charAt(a - 1)) << a % 4 * 2,
                c = i.indexOf(r.charAt(a)) >>> 6 - a % 4 * 2;
              o[s >>> 2] |= (u | c) << 24 - s % 4 * 8, s++
            } return e.create(o, s)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      }
    }(),
    function (t) {
      for (var e = y, r = (i = e.lib).WordArray, n = i.Hasher, i = e.algo, o = [], s = [], a = function t(e) {
          return 4294967296 * (e - (0 | e)) | 0
        }, u = 2, c = 0; 64 > c;) {
        var f;
        t: {
          f = u;
          for (var h = t.sqrt(f), l = 2; l <= h; l++)
            if (!(f % l)) {
              f = !1;
              break t
            } f = !0
        }
        f && (8 > c && (o[c] = a(t.pow(u, .5))), s[c] = a(t.pow(u, 1 / 3)), c++), u++
      }
      var p = [];
      i = i.SHA256 = n.extend({
        _doReset: function t() {
          this._hash = new r.init(o.slice(0))
        },
        _doProcessBlock: function t(e, r) {
          for (var n = this._hash.words, i = n[0], o = n[1], a = n[2], u = n[3], c = n[4], f = n[5], h = n[6], l = n[7], d = 0; 64 > d; d++) {
            if (16 > d) p[d] = 0 | e[r + d];
            else {
              var g = p[d - 15],
                v = p[d - 2];
              p[d] = ((g << 25 | g >>> 7) ^ (g << 14 | g >>> 18) ^ g >>> 3) + p[d - 7] + ((v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10) + p[d - 16]
            }
            g = l + ((c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)) + (c & f ^ ~c & h) + s[d] + p[d], v = ((i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)) + (i & o ^ i & a ^ o & a), l = h, h = f, f = c, c = u + g | 0, u = a, a = o, o = i, i = g + v | 0
          }
          n[0] = n[0] + i | 0, n[1] = n[1] + o | 0, n[2] = n[2] + a | 0, n[3] = n[3] + u | 0, n[4] = n[4] + c | 0, n[5] = n[5] + f | 0, n[6] = n[6] + h | 0, n[7] = n[7] + l | 0
        },
        _doFinalize: function e() {
          var r = this._data,
            n = r.words,
            i = 8 * this._nDataBytes,
            o = 8 * r.sigBytes;
          return n[o >>> 5] |= 128 << 24 - o % 32, n[14 + (o + 64 >>> 9 << 4)] = t.floor(i / 4294967296), n[15 + (o + 64 >>> 9 << 4)] = i, r.sigBytes = 4 * n.length, this._process(), this._hash
        },
        clone: function t() {
          var e = n.clone.call(this);
          return e._hash = this._hash.clone(), e
        }
      });
      e.SHA256 = n._createHelper(i), e.HmacSHA256 = n._createHmacHelper(i)
    }(Math),
    function () {
      function t() {
        return n.create.apply(n, arguments)
      }
      for (var e = y, r = e.lib.Hasher, n = (o = e.x64).Word, i = o.WordArray, o = e.algo, s = [t(1116352408, 3609767458), t(1899447441, 602891725), t(3049323471, 3964484399), t(3921009573, 2173295548), t(961987163, 4081628472), t(1508970993, 3053834265), t(2453635748, 2937671579), t(2870763221, 3664609560), t(3624381080, 2734883394), t(310598401, 1164996542), t(607225278, 1323610764), t(1426881987, 3590304994), t(1925078388, 4068182383), t(2162078206, 991336113), t(2614888103, 633803317), t(3248222580, 3479774868), t(3835390401, 2666613458), t(4022224774, 944711139), t(264347078, 2341262773), t(604807628, 2007800933), t(770255983, 1495990901), t(1249150122, 1856431235), t(1555081692, 3175218132), t(1996064986, 2198950837), t(2554220882, 3999719339), t(2821834349, 766784016), t(2952996808, 2566594879), t(3210313671, 3203337956), t(3336571891, 1034457026), t(3584528711, 2466948901), t(113926993, 3758326383), t(338241895, 168717936), t(666307205, 1188179964), t(773529912, 1546045734), t(1294757372, 1522805485), t(1396182291, 2643833823), t(1695183700, 2343527390), t(1986661051, 1014477480), t(2177026350, 1206759142), t(2456956037, 344077627), t(2730485921, 1290863460), t(2820302411, 3158454273), t(3259730800, 3505952657), t(3345764771, 106217008), t(3516065817, 3606008344), t(3600352804, 1432725776), t(4094571909, 1467031594), t(275423344, 851169720), t(430227734, 3100823752), t(506948616, 1363258195), t(659060556, 3750685593), t(883997877, 3785050280), t(958139571, 3318307427), t(1322822218, 3812723403), t(1537002063, 2003034995), t(1747873779, 3602036899), t(1955562222, 1575990012), t(2024104815, 1125592928), t(2227730452, 2716904306), t(2361852424, 442776044), t(2428436474, 593698344), t(2756734187, 3733110249), t(3204031479, 2999351573), t(3329325298, 3815920427), t(3391569614, 3928383900), t(3515267271, 566280711), t(3940187606, 3454069534), t(4118630271, 4000239992), t(116418474, 1914138554), t(174292421, 2731055270), t(289380356, 3203993006), t(460393269, 320620315), t(685471733, 587496836), t(852142971, 1086792851), t(1017036298, 365543100), t(1126000580, 2618297676), t(1288033470, 3409855158), t(1501505948, 4234509866), t(1607167915, 987167468), t(1816402316, 1246189591)], a = [], u = 0; 80 > u; u++) a[u] = t();
      o = o.SHA512 = r.extend({
        _doReset: function t() {
          this._hash = new i.init([new n.init(1779033703, 4089235720), new n.init(3144134277, 2227873595), new n.init(1013904242, 4271175723), new n.init(2773480762, 1595750129), new n.init(1359893119, 2917565137), new n.init(2600822924, 725511199), new n.init(528734635, 4215389547), new n.init(1541459225, 327033209)])
        },
        _doProcessBlock: function t(e, r) {
          for (var n = (l = this._hash.words)[0], i = l[1], o = l[2], u = l[3], c = l[4], f = l[5], h = l[6], l = l[7], p = n.high, d = n.low, g = i.high, v = i.low, y = o.high, m = o.low, _ = u.high, S = u.low, b = c.high, w = c.low, F = f.high, E = f.low, x = h.high, A = h.low, k = l.high, P = l.low, C = p, T = d, R = g, I = v, O = y, D = m, N = _, L = S, M = b, j = w, U = F, B = E, H = x, V = A, K = k, q = P, W = 0; 80 > W; W++) {
            var J = a[W];
            if (16 > W) var z = J.high = 0 | e[r + 2 * W],
              Y = J.low = 0 | e[r + 2 * W + 1];
            else {
              z = ((Y = (z = a[W - 15]).high) >>> 1 | (G = z.low) << 31) ^ (Y >>> 8 | G << 24) ^ Y >>> 7;
              var G = (G >>> 1 | Y << 31) ^ (G >>> 8 | Y << 24) ^ (G >>> 7 | Y << 25),
                X = ((Y = (X = a[W - 2]).high) >>> 19 | ($ = X.low) << 13) ^ (Y << 3 | $ >>> 29) ^ Y >>> 6,
                $ = ($ >>> 19 | Y << 13) ^ ($ << 3 | Y >>> 29) ^ ($ >>> 6 | Y << 26),
                Q = (Y = a[W - 7]).high,
                Z = (tt = a[W - 16]).high,
                tt = tt.low;
              z = (z = (z = z + Q + ((Y = G + Y.low) >>> 0 < G >>> 0 ? 1 : 0)) + X + ((Y = Y + $) >>> 0 < $ >>> 0 ? 1 : 0)) + Z + ((Y = Y + tt) >>> 0 < tt >>> 0 ? 1 : 0);
              J.high = z, J.low = Y
            }
            Q = M & U ^ ~M & H, tt = j & B ^ ~j & V, J = C & R ^ C & O ^ R & O;
            var et = T & I ^ T & D ^ I & D,
              rt = (G = (C >>> 28 | T << 4) ^ (C << 30 | T >>> 2) ^ (C << 25 | T >>> 7), X = (T >>> 28 | C << 4) ^ (T << 30 | C >>> 2) ^ (T << 25 | C >>> 7), ($ = s[W]).high),
              nt = $.low;
            Z = (Z = (Z = (Z = K + ((M >>> 14 | j << 18) ^ (M >>> 18 | j << 14) ^ (M << 23 | j >>> 9)) + (($ = q + ((j >>> 14 | M << 18) ^ (j >>> 18 | M << 14) ^ (j << 23 | M >>> 9))) >>> 0 < q >>> 0 ? 1 : 0)) + Q + (($ = $ + tt) >>> 0 < tt >>> 0 ? 1 : 0)) + rt + (($ = $ + nt) >>> 0 < nt >>> 0 ? 1 : 0)) + z + (($ = $ + Y) >>> 0 < Y >>> 0 ? 1 : 0), J = G + J + ((Y = X + et) >>> 0 < X >>> 0 ? 1 : 0), K = H, q = V, H = U, V = B, U = M, B = j, M = N + Z + ((j = L + $ | 0) >>> 0 < L >>> 0 ? 1 : 0) | 0, N = O, L = D, O = R, D = I, R = C, I = T, C = Z + J + ((T = $ + Y | 0) >>> 0 < $ >>> 0 ? 1 : 0) | 0
          }
          d = n.low = d + T, n.high = p + C + (d >>> 0 < T >>> 0 ? 1 : 0), v = i.low = v + I, i.high = g + R + (v >>> 0 < I >>> 0 ? 1 : 0), m = o.low = m + D, o.high = y + O + (m >>> 0 < D >>> 0 ? 1 : 0), S = u.low = S + L, u.high = _ + N + (S >>> 0 < L >>> 0 ? 1 : 0), w = c.low = w + j, c.high = b + M + (w >>> 0 < j >>> 0 ? 1 : 0), E = f.low = E + B, f.high = F + U + (E >>> 0 < B >>> 0 ? 1 : 0), A = h.low = A + V, h.high = x + H + (A >>> 0 < V >>> 0 ? 1 : 0), P = l.low = P + q, l.high = k + K + (P >>> 0 < q >>> 0 ? 1 : 0)
        },
        _doFinalize: function t() {
          var e = this._data,
            r = e.words,
            n = 8 * this._nDataBytes,
            i = 8 * e.sigBytes;
          return r[i >>> 5] |= 128 << 24 - i % 32, r[30 + (i + 128 >>> 10 << 5)] = Math.floor(n / 4294967296), r[31 + (i + 128 >>> 10 << 5)] = n, e.sigBytes = 4 * r.length, this._process(), this._hash.toX32()
        },
        clone: function t() {
          var e = r.clone.call(this);
          return e._hash = this._hash.clone(), e
        },
        blockSize: 32
      }), e.SHA512 = r._createHelper(o), e.HmacSHA512 = r._createHmacHelper(o)
    }(),
    function () {
      var t = y,
        e = (i = t.x64).Word,
        r = i.WordArray,
        n = (i = t.algo).SHA512,
        i = i.SHA384 = n.extend({
          _doReset: function t() {
            this._hash = new r.init([new e.init(3418070365, 3238371032), new e.init(1654270250, 914150663), new e.init(2438529370, 812702999), new e.init(355462360, 4144912697), new e.init(1731405415, 4290775857), new e.init(2394180231, 1750603025), new e.init(3675008525, 1694076839), new e.init(1203062813, 3204075428)])
          },
          _doFinalize: function t() {
            var e = n._doFinalize.call(this);
            return e.sigBytes -= 16, e
          }
        });
      t.SHA384 = n._createHelper(i), t.HmacSHA384 = n._createHmacHelper(i)
    }();
    /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
     */
    var m, _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      S = "=";

    function b(t) {
      var e, r, n = "";
      for (e = 0; e + 3 <= t.length; e += 3) r = parseInt(t.substring(e, e + 3), 16), n += _.charAt(r >> 6) + _.charAt(63 & r);
      if (e + 1 == t.length ? (r = parseInt(t.substring(e, e + 1), 16), n += _.charAt(r << 2)) : e + 2 == t.length && (r = parseInt(t.substring(e, e + 2), 16), n += _.charAt(r >> 2) + _.charAt((3 & r) << 4)), S)
        for (;
          (3 & n.length) > 0;) n += S;
      return n
    }

    function w(t) {
      var e, r, n, i = "",
        o = 0;
      for (e = 0; e < t.length && t.charAt(e) != S; ++e)(n = _.indexOf(t.charAt(e))) < 0 || (0 == o ? (i += O(n >> 2), r = 3 & n, o = 1) : 1 == o ? (i += O(r << 2 | n >> 4), r = 15 & n, o = 2) : 2 == o ? (i += O(r), i += O(n >> 2), r = 3 & n, o = 3) : (i += O(r << 2 | n >> 4), i += O(15 & n), o = 0));
      return 1 == o && (i += O(r << 2)), i
    }

    function F(t) {
      var e, r = w(t),
        n = new Array;
      for (e = 0; 2 * e < r.length; ++e) n[e] = parseInt(r.substring(2 * e, 2 * e + 2), 16);
      return n
    }

    function E(t, e, r) {
      null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
    }

    function x() {
      return new E(null)
    }
    "Microsoft Internet Explorer" == n.appName ? (E.prototype.am = function A(t, e, r, n, i, o) {
      for (var s = 32767 & e, a = e >> 15; --o >= 0;) {
        var u = 32767 & this[t],
          c = this[t++] >> 15,
          f = a * u + c * s;
        i = ((u = s * u + ((32767 & f) << 15) + r[n] + (1073741823 & i)) >>> 30) + (f >>> 15) + a * c + (i >>> 30), r[n++] = 1073741823 & u
      }
      return i
    }, m = 30) : "Netscape" != n.appName ? (E.prototype.am = function k(t, e, r, n, i, o) {
      for (; --o >= 0;) {
        var s = e * this[t++] + r[n] + i;
        i = Math.floor(s / 67108864), r[n++] = 67108863 & s
      }
      return i
    }, m = 26) : (E.prototype.am = function P(t, e, r, n, i, o) {
      for (var s = 16383 & e, a = e >> 14; --o >= 0;) {
        var u = 16383 & this[t],
          c = this[t++] >> 14,
          f = a * u + c * s;
        i = ((u = s * u + ((16383 & f) << 14) + r[n] + i) >> 28) + (f >> 14) + a * c, r[n++] = 268435455 & u
      }
      return i
    }, m = 28), E.prototype.DB = m, E.prototype.DM = (1 << m) - 1, E.prototype.DV = 1 << m;
    E.prototype.FV = Math.pow(2, 52), E.prototype.F1 = 52 - m, E.prototype.F2 = 2 * m - 52;
    var C, T, R = "0123456789abcdefghijklmnopqrstuvwxyz",
      I = new Array;
    for (C = "0".charCodeAt(0), T = 0; T <= 9; ++T) I[C++] = T;
    for (C = "a".charCodeAt(0), T = 10; T < 36; ++T) I[C++] = T;
    for (C = "A".charCodeAt(0), T = 10; T < 36; ++T) I[C++] = T;

    function O(t) {
      return R.charAt(t)
    }

    function D(t, e) {
      var r = I[t.charCodeAt(e)];
      return null == r ? -1 : r
    }

    function N(t) {
      var e = x();
      return e.fromInt(t), e
    }

    function L(t) {
      var e, r = 1;
      return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r
    }

    function M(t) {
      this.m = t
    }

    function j(t) {
      this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
    }

    function U(t, e) {
      return t & e
    }

    function B(t, e) {
      return t | e
    }

    function H(t, e) {
      return t ^ e
    }

    function V(t, e) {
      return t & ~e
    }

    function K(t) {
      if (0 == t) return -1;
      var e = 0;
      return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
    }

    function q(t) {
      for (var e = 0; 0 != t;) t &= t - 1, ++e;
      return e
    }

    function W() {}

    function J(t) {
      return t
    }

    function z(t) {
      this.r2 = x(), this.q3 = x(), E.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
    }
    M.prototype.convert = function Y(t) {
      return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
    }, M.prototype.revert = function G(t) {
      return t
    }, M.prototype.reduce = function X(t) {
      t.divRemTo(this.m, null, t)
    }, M.prototype.mulTo = function $(t, e, r) {
      t.multiplyTo(e, r), this.reduce(r)
    }, M.prototype.sqrTo = function Q(t, e) {
      t.squareTo(e), this.reduce(e)
    }, j.prototype.convert = function Z(t) {
      var e = x();
      return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(E.ZERO) > 0 && this.m.subTo(e, e), e
    }, j.prototype.revert = function tt(t) {
      var e = x();
      return t.copyTo(e), this.reduce(e), e
    }, j.prototype.reduce = function et(t) {
      for (; t.t <= this.mt2;) t[t.t++] = 0;
      for (var e = 0; e < this.m.t; ++e) {
        var r = 32767 & t[e],
          n = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
        for (t[r = e + this.m.t] += this.m.am(0, n, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++
      }
      t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
    }, j.prototype.mulTo = function rt(t, e, r) {
      t.multiplyTo(e, r), this.reduce(r)
    }, j.prototype.sqrTo = function nt(t, e) {
      t.squareTo(e), this.reduce(e)
    }, E.prototype.copyTo = function it(t) {
      for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
      t.t = this.t, t.s = this.s
    }, E.prototype.fromInt = function ot(t) {
      this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
    }, E.prototype.fromString = function st(t, e) {
      var r;
      if (16 == e) r = 4;
      else if (8 == e) r = 3;
      else if (256 == e) r = 8;
      else if (2 == e) r = 1;
      else if (32 == e) r = 5;
      else {
        if (4 != e) return void this.fromRadix(t, e);
        r = 2
      }
      this.t = 0, this.s = 0;
      for (var n = t.length, i = !1, o = 0; --n >= 0;) {
        var s = 8 == r ? 255 & t[n] : D(t, n);
        s < 0 ? "-" == t.charAt(n) && (i = !0) : (i = !1, 0 == o ? this[this.t++] = s : o + r > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - o) - 1) << o, this[this.t++] = s >> this.DB - o) : this[this.t - 1] |= s << o, (o += r) >= this.DB && (o -= this.DB))
      }
      8 == r && 0 != (128 & t[0]) && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)), this.clamp(), i && E.ZERO.subTo(this, this)
    }, E.prototype.clamp = function at() {
      for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
    }, E.prototype.dlShiftTo = function ut(t, e) {
      var r;
      for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
      for (r = t - 1; r >= 0; --r) e[r] = 0;
      e.t = this.t + t, e.s = this.s
    }, E.prototype.drShiftTo = function ct(t, e) {
      for (var r = t; r < this.t; ++r) e[r - t] = this[r];
      e.t = Math.max(this.t - t, 0), e.s = this.s
    }, E.prototype.lShiftTo = function ft(t, e) {
      var r, n = t % this.DB,
        i = this.DB - n,
        o = (1 << i) - 1,
        s = Math.floor(t / this.DB),
        a = this.s << n & this.DM;
      for (r = this.t - 1; r >= 0; --r) e[r + s + 1] = this[r] >> i | a, a = (this[r] & o) << n;
      for (r = s - 1; r >= 0; --r) e[r] = 0;
      e[s] = a, e.t = this.t + s + 1, e.s = this.s, e.clamp()
    }, E.prototype.rShiftTo = function ht(t, e) {
      e.s = this.s;
      var r = Math.floor(t / this.DB);
      if (r >= this.t) e.t = 0;
      else {
        var n = t % this.DB,
          i = this.DB - n,
          o = (1 << n) - 1;
        e[0] = this[r] >> n;
        for (var s = r + 1; s < this.t; ++s) e[s - r - 1] |= (this[s] & o) << i, e[s - r] = this[s] >> n;
        n > 0 && (e[this.t - r - 1] |= (this.s & o) << i), e.t = this.t - r, e.clamp()
      }
    }, E.prototype.subTo = function lt(t, e) {
      for (var r = 0, n = 0, i = Math.min(t.t, this.t); r < i;) n += this[r] - t[r], e[r++] = n & this.DM, n >>= this.DB;
      if (t.t < this.t) {
        for (n -= t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
        n += this.s
      } else {
        for (n += this.s; r < t.t;) n -= t[r], e[r++] = n & this.DM, n >>= this.DB;
        n -= t.s
      }
      e.s = n < 0 ? -1 : 0, n < -1 ? e[r++] = this.DV + n : n > 0 && (e[r++] = n), e.t = r, e.clamp()
    }, E.prototype.multiplyTo = function pt(t, e) {
      var r = this.abs(),
        n = t.abs(),
        i = r.t;
      for (e.t = i + n.t; --i >= 0;) e[i] = 0;
      for (i = 0; i < n.t; ++i) e[i + r.t] = r.am(0, n[i], e, i, 0, r.t);
      e.s = 0, e.clamp(), this.s != t.s && E.ZERO.subTo(e, e)
    }, E.prototype.squareTo = function dt(t) {
      for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0;) t[r] = 0;
      for (r = 0; r < e.t - 1; ++r) {
        var n = e.am(r, e[r], t, 2 * r, 0, 1);
        (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, n, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1)
      }
      t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp()
    }, E.prototype.divRemTo = function gt(t, e, r) {
      var n = t.abs();
      if (!(n.t <= 0)) {
        var i = this.abs();
        if (i.t < n.t) return null != e && e.fromInt(0), void(null != r && this.copyTo(r));
        null == r && (r = x());
        var o = x(),
          s = this.s,
          a = t.s,
          u = this.DB - L(n[n.t - 1]);
        u > 0 ? (n.lShiftTo(u, o), i.lShiftTo(u, r)) : (n.copyTo(o), i.copyTo(r));
        var c = o.t,
          f = o[c - 1];
        if (0 != f) {
          var h = f * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0),
            l = this.FV / h,
            p = (1 << this.F1) / h,
            d = 1 << this.F2,
            g = r.t,
            v = g - c,
            y = null == e ? x() : e;
          for (o.dlShiftTo(v, y), r.compareTo(y) >= 0 && (r[r.t++] = 1, r.subTo(y, r)), E.ONE.dlShiftTo(c, y), y.subTo(o, o); o.t < c;) o[o.t++] = 0;
          for (; --v >= 0;) {
            var m = r[--g] == f ? this.DM : Math.floor(r[g] * l + (r[g - 1] + d) * p);
            if ((r[g] += o.am(0, m, r, v, 0, c)) < m)
              for (o.dlShiftTo(v, y), r.subTo(y, r); r[g] < --m;) r.subTo(y, r)
          }
          null != e && (r.drShiftTo(c, e), s != a && E.ZERO.subTo(e, e)), r.t = c, r.clamp(), u > 0 && r.rShiftTo(u, r), s < 0 && E.ZERO.subTo(r, r)
        }
      }
    }, E.prototype.invDigit = function vt() {
      if (this.t < 1) return 0;
      var t = this[0];
      if (0 == (1 & t)) return 0;
      var e = 3 & t;
      return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
    }, E.prototype.isEven = function yt() {
      return 0 == (this.t > 0 ? 1 & this[0] : this.s)
    }, E.prototype.exp = function mt(t, e) {
      if (t > 4294967295 || t < 1) return E.ONE;
      var r = x(),
        n = x(),
        i = e.convert(this),
        o = L(t) - 1;
      for (i.copyTo(r); --o >= 0;)
        if (e.sqrTo(r, n), (t & 1 << o) > 0) e.mulTo(n, i, r);
        else {
          var s = r;
          r = n, n = s
        } return e.revert(r)
    }, E.prototype.toString = function _t(t) {
      if (this.s < 0) return "-" + this.negate().toString(t);
      var e;
      if (16 == t) e = 4;
      else if (8 == t) e = 3;
      else if (2 == t) e = 1;
      else if (32 == t) e = 5;
      else {
        if (4 != t) return this.toRadix(t);
        e = 2
      }
      var r, n = (1 << e) - 1,
        i = !1,
        o = "",
        s = this.t,
        a = this.DB - s * this.DB % e;
      if (s-- > 0)
        for (a < this.DB && (r = this[s] >> a) > 0 && (i = !0, o = O(r)); s >= 0;) a < e ? (r = (this[s] & (1 << a) - 1) << e - a, r |= this[--s] >> (a += this.DB - e)) : (r = this[s] >> (a -= e) & n, a <= 0 && (a += this.DB, --s)), r > 0 && (i = !0), i && (o += O(r));
      return i ? o : "0"
    }, E.prototype.negate = function St() {
      var t = x();
      return E.ZERO.subTo(this, t), t
    }, E.prototype.abs = function bt() {
      return this.s < 0 ? this.negate() : this
    }, E.prototype.compareTo = function wt(t) {
      var e = this.s - t.s;
      if (0 != e) return e;
      var r = this.t;
      if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
      for (; --r >= 0;)
        if (0 != (e = this[r] - t[r])) return e;
      return 0
    }, E.prototype.bitLength = function Ft() {
      return this.t <= 0 ? 0 : this.DB * (this.t - 1) + L(this[this.t - 1] ^ this.s & this.DM)
    }, E.prototype.mod = function Et(t) {
      var e = x();
      return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(E.ZERO) > 0 && t.subTo(e, e), e
    }, E.prototype.modPowInt = function xt(t, e) {
      var r;
      return r = t < 256 || e.isEven() ? new M(e) : new j(e), this.exp(t, r)
    }, E.ZERO = N(0), E.ONE = N(1), W.prototype.convert = J, W.prototype.revert = J, W.prototype.mulTo = function At(t, e, r) {
      t.multiplyTo(e, r)
    }, W.prototype.sqrTo = function kt(t, e) {
      t.squareTo(e)
    }, z.prototype.convert = function Pt(t) {
      if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
      if (t.compareTo(this.m) < 0) return t;
      var e = x();
      return t.copyTo(e), this.reduce(e), e
    }, z.prototype.revert = function Ct(t) {
      return t
    }, z.prototype.reduce = function Tt(t) {
      for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
      for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
    }, z.prototype.mulTo = function Rt(t, e, r) {
      t.multiplyTo(e, r), this.reduce(r)
    }, z.prototype.sqrTo = function It(t, e) {
      t.squareTo(e), this.reduce(e)
    };
    var Ot = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
      Dt = (1 << 26) / Ot[Ot.length - 1];
    /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
     */
    function Nt() {
      this.i = 0, this.j = 0, this.S = new Array
    }
    E.prototype.chunkSize = function Lt(t) {
        return Math.floor(Math.LN2 * this.DB / Math.log(t))
      }, E.prototype.toRadix = function Mt(t) {
        if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
        var e = this.chunkSize(t),
          r = Math.pow(t, e),
          n = N(r),
          i = x(),
          o = x(),
          s = "";
        for (this.divRemTo(n, i, o); i.signum() > 0;) s = (r + o.intValue()).toString(t).substr(1) + s, i.divRemTo(n, i, o);
        return o.intValue().toString(t) + s
      }, E.prototype.fromRadix = function jt(t, e) {
        this.fromInt(0), null == e && (e = 10);
        for (var r = this.chunkSize(e), n = Math.pow(e, r), i = !1, o = 0, s = 0, a = 0; a < t.length; ++a) {
          var u = D(t, a);
          u < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (i = !0) : (s = e * s + u, ++o >= r && (this.dMultiply(n), this.dAddOffset(s, 0), o = 0, s = 0))
        }
        o > 0 && (this.dMultiply(Math.pow(e, o)), this.dAddOffset(s, 0)), i && E.ZERO.subTo(this, this)
      }, E.prototype.fromNumber = function Ut(t, e, r) {
        if ("number" == typeof e)
          if (t < 2) this.fromInt(1);
          else
            for (this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(E.ONE.shiftLeft(t - 1), B, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(E.ONE.shiftLeft(t - 1), this);
        else {
          var n = new Array,
            i = 7 & t;
          n.length = 1 + (t >> 3), e.nextBytes(n), i > 0 ? n[0] &= (1 << i) - 1 : n[0] = 0, this.fromString(n, 256)
        }
      }, E.prototype.bitwiseTo = function Bt(t, e, r) {
        var n, i, o = Math.min(t.t, this.t);
        for (n = 0; n < o; ++n) r[n] = e(this[n], t[n]);
        if (t.t < this.t) {
          for (i = t.s & this.DM, n = o; n < this.t; ++n) r[n] = e(this[n], i);
          r.t = this.t
        } else {
          for (i = this.s & this.DM, n = o; n < t.t; ++n) r[n] = e(i, t[n]);
          r.t = t.t
        }
        r.s = e(this.s, t.s), r.clamp()
      }, E.prototype.changeBit = function Ht(t, e) {
        var r = E.ONE.shiftLeft(t);
        return this.bitwiseTo(r, e, r), r
      }, E.prototype.addTo = function Vt(t, e) {
        for (var r = 0, n = 0, i = Math.min(t.t, this.t); r < i;) n += this[r] + t[r], e[r++] = n & this.DM, n >>= this.DB;
        if (t.t < this.t) {
          for (n += t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
          n += this.s
        } else {
          for (n += this.s; r < t.t;) n += t[r], e[r++] = n & this.DM, n >>= this.DB;
          n += t.s
        }
        e.s = n < 0 ? -1 : 0, n > 0 ? e[r++] = n : n < -1 && (e[r++] = this.DV + n), e.t = r, e.clamp()
      }, E.prototype.dMultiply = function Kt(t) {
        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
      }, E.prototype.dAddOffset = function qt(t, e) {
        if (0 != t) {
          for (; this.t <= e;) this[this.t++] = 0;
          for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
        }
      }, E.prototype.multiplyLowerTo = function Wt(t, e, r) {
        var n, i = Math.min(this.t + t.t, e);
        for (r.s = 0, r.t = i; i > 0;) r[--i] = 0;
        for (n = r.t - this.t; i < n; ++i) r[i + this.t] = this.am(0, t[i], r, i, 0, this.t);
        for (n = Math.min(t.t, e); i < n; ++i) this.am(0, t[i], r, i, 0, e - i);
        r.clamp()
      }, E.prototype.multiplyUpperTo = function Jt(t, e, r) {
        --e;
        var n = r.t = this.t + t.t - e;
        for (r.s = 0; --n >= 0;) r[n] = 0;
        for (n = Math.max(e - this.t, 0); n < t.t; ++n) r[this.t + n - e] = this.am(e - n, t[n], r, 0, 0, this.t + n - e);
        r.clamp(), r.drShiftTo(1, r)
      }, E.prototype.modInt = function zt(t) {
        if (t <= 0) return 0;
        var e = this.DV % t,
          r = this.s < 0 ? t - 1 : 0;
        if (this.t > 0)
          if (0 == e) r = this[0] % t;
          else
            for (var n = this.t - 1; n >= 0; --n) r = (e * r + this[n]) % t;
        return r
      }, E.prototype.millerRabin = function Yt(t) {
        var e = this.subtract(E.ONE),
          r = e.getLowestSetBit();
        if (r <= 0) return !1;
        var n = e.shiftRight(r);
        (t = t + 1 >> 1) > Ot.length && (t = Ot.length);
        for (var i = x(), o = 0; o < t; ++o) {
          i.fromInt(Ot[Math.floor(Math.random() * Ot.length)]);
          var s = i.modPow(n, this);
          if (0 != s.compareTo(E.ONE) && 0 != s.compareTo(e)) {
            for (var a = 1; a++ < r && 0 != s.compareTo(e);)
              if (0 == (s = s.modPowInt(2, this)).compareTo(E.ONE)) return !1;
            if (0 != s.compareTo(e)) return !1
          }
        }
        return !0
      }, E.prototype.clone =
      /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
       */
      function Gt() {
        var t = x();
        return this.copyTo(t), t
      }, E.prototype.intValue = function Xt() {
        if (this.s < 0) {
          if (1 == this.t) return this[0] - this.DV;
          if (0 == this.t) return -1
        } else {
          if (1 == this.t) return this[0];
          if (0 == this.t) return 0
        }
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
      }, E.prototype.byteValue = function $t() {
        return 0 == this.t ? this.s : this[0] << 24 >> 24
      }, E.prototype.shortValue = function Qt() {
        return 0 == this.t ? this.s : this[0] << 16 >> 16
      }, E.prototype.signum = function Zt() {
        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
      }, E.prototype.toByteArray = function te() {
        var t = this.t,
          e = new Array;
        e[0] = this.s;
        var r, n = this.DB - t * this.DB % 8,
          i = 0;
        if (t-- > 0)
          for (n < this.DB && (r = this[t] >> n) != (this.s & this.DM) >> n && (e[i++] = r | this.s << this.DB - n); t >= 0;) n < 8 ? (r = (this[t] & (1 << n) - 1) << 8 - n, r |= this[--t] >> (n += this.DB - 8)) : (r = this[t] >> (n -= 8) & 255, n <= 0 && (n += this.DB, --t)), 0 != (128 & r) && (r |= -256), 0 == i && (128 & this.s) != (128 & r) && ++i, (i > 0 || r != this.s) && (e[i++] = r);
        return e
      }, E.prototype.equals = function ee(t) {
        return 0 == this.compareTo(t)
      }, E.prototype.min = function re(t) {
        return this.compareTo(t) < 0 ? this : t
      }, E.prototype.max = function ne(t) {
        return this.compareTo(t) > 0 ? this : t
      }, E.prototype.and = function ie(t) {
        var e = x();
        return this.bitwiseTo(t, U, e), e
      }, E.prototype.or = function oe(t) {
        var e = x();
        return this.bitwiseTo(t, B, e), e
      }, E.prototype.xor = function se(t) {
        var e = x();
        return this.bitwiseTo(t, H, e), e
      }, E.prototype.andNot = function ae(t) {
        var e = x();
        return this.bitwiseTo(t, V, e), e
      }, E.prototype.not = function ue() {
        for (var t = x(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
        return t.t = this.t, t.s = ~this.s, t
      }, E.prototype.shiftLeft = function ce(t) {
        var e = x();
        return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
      }, E.prototype.shiftRight = function fe(t) {
        var e = x();
        return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
      }, E.prototype.getLowestSetBit = function he() {
        for (var t = 0; t < this.t; ++t)
          if (0 != this[t]) return t * this.DB + K(this[t]);
        return this.s < 0 ? this.t * this.DB : -1
      }, E.prototype.bitCount = function le() {
        for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r) t += q(this[r] ^ e);
        return t
      }, E.prototype.testBit = function pe(t) {
        var e = Math.floor(t / this.DB);
        return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
      }, E.prototype.setBit = function de(t) {
        return this.changeBit(t, B)
      }, E.prototype.clearBit = function ge(t) {
        return this.changeBit(t, V)
      }, E.prototype.flipBit = function ve(t) {
        return this.changeBit(t, H)
      }, E.prototype.add = function ye(t) {
        var e = x();
        return this.addTo(t, e), e
      }, E.prototype.subtract = function me(t) {
        var e = x();
        return this.subTo(t, e), e
      }, E.prototype.multiply = function _e(t) {
        var e = x();
        return this.multiplyTo(t, e), e
      }, E.prototype.divide = function Se(t) {
        var e = x();
        return this.divRemTo(t, e, null), e
      }, E.prototype.remainder = function be(t) {
        var e = x();
        return this.divRemTo(t, null, e), e
      }, E.prototype.divideAndRemainder = function we(t) {
        var e = x(),
          r = x();
        return this.divRemTo(t, e, r), new Array(e, r)
      }, E.prototype.modPow = function Fe(t, e) {
        var r, n, i = t.bitLength(),
          o = N(1);
        if (i <= 0) return o;
        r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6, n = i < 8 ? new M(e) : e.isEven() ? new z(e) : new j(e);
        var s = new Array,
          a = 3,
          u = r - 1,
          c = (1 << r) - 1;
        if (s[1] = n.convert(this), r > 1) {
          var f = x();
          for (n.sqrTo(s[1], f); a <= c;) s[a] = x(), n.mulTo(f, s[a - 2], s[a]), a += 2
        }
        var h, l, p = t.t - 1,
          d = !0,
          g = x();
        for (i = L(t[p]) - 1; p >= 0;) {
          for (i >= u ? h = t[p] >> i - u & c : (h = (t[p] & (1 << i + 1) - 1) << u - i, p > 0 && (h |= t[p - 1] >> this.DB + i - u)), a = r; 0 == (1 & h);) h >>= 1, --a;
          if ((i -= a) < 0 && (i += this.DB, --p), d) s[h].copyTo(o), d = !1;
          else {
            for (; a > 1;) n.sqrTo(o, g), n.sqrTo(g, o), a -= 2;
            a > 0 ? n.sqrTo(o, g) : (l = o, o = g, g = l), n.mulTo(g, s[h], o)
          }
          for (; p >= 0 && 0 == (t[p] & 1 << i);) n.sqrTo(o, g), l = o, o = g, g = l, --i < 0 && (i = this.DB - 1, --p)
        }
        return n.revert(o)
      }, E.prototype.modInverse = function Ee(t) {
        var e = t.isEven();
        if (this.isEven() && e || 0 == t.signum()) return E.ZERO;
        for (var r = t.clone(), n = this.clone(), i = N(1), o = N(0), s = N(0), a = N(1); 0 != r.signum();) {
          for (; r.isEven();) r.rShiftTo(1, r), e ? (i.isEven() && o.isEven() || (i.addTo(this, i), o.subTo(t, o)), i.rShiftTo(1, i)) : o.isEven() || o.subTo(t, o), o.rShiftTo(1, o);
          for (; n.isEven();) n.rShiftTo(1, n), e ? (s.isEven() && a.isEven() || (s.addTo(this, s), a.subTo(t, a)), s.rShiftTo(1, s)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
          r.compareTo(n) >= 0 ? (r.subTo(n, r), e && i.subTo(s, i), o.subTo(a, o)) : (n.subTo(r, n), e && s.subTo(i, s), a.subTo(o, a))
        }
        return 0 != n.compareTo(E.ONE) ? E.ZERO : a.compareTo(t) >= 0 ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a), a.signum() < 0 ? a.add(t) : a) : a
      }, E.prototype.pow = function xe(t) {
        return this.exp(t, new W)
      }, E.prototype.gcd = function Ae(t) {
        var e = this.s < 0 ? this.negate() : this.clone(),
          r = t.s < 0 ? t.negate() : t.clone();
        if (e.compareTo(r) < 0) {
          var n = e;
          e = r, r = n
        }
        var i = e.getLowestSetBit(),
          o = r.getLowestSetBit();
        if (o < 0) return e;
        for (i < o && (o = i), o > 0 && (e.rShiftTo(o, e), r.rShiftTo(o, r)); e.signum() > 0;)(i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e), (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r), e.compareTo(r) >= 0 ? (e.subTo(r, e), e.rShiftTo(1, e)) : (r.subTo(e, r), r.rShiftTo(1, r));
        return o > 0 && r.lShiftTo(o, r), r
      }, E.prototype.isProbablePrime = function ke(t) {
        var e, r = this.abs();
        if (1 == r.t && r[0] <= Ot[Ot.length - 1]) {
          for (e = 0; e < Ot.length; ++e)
            if (r[0] == Ot[e]) return !0;
          return !1
        }
        if (r.isEven()) return !1;
        for (e = 1; e < Ot.length;) {
          for (var n = Ot[e], i = e + 1; i < Ot.length && n < Dt;) n *= Ot[i++];
          for (n = r.modInt(n); e < i;)
            if (n % Ot[e++] == 0) return !1
        }
        return r.millerRabin(t)
      }, E.prototype.square = function Pe() {
        var t = x();
        return this.squareTo(t), t
      }, Nt.prototype.init = function Ce(t) {
        var e, r, n;
        for (e = 0; e < 256; ++e) this.S[e] = e;
        for (r = 0, e = 0; e < 256; ++e) r = r + this.S[e] + t[e % t.length] & 255, n = this.S[e], this.S[e] = this.S[r], this.S[r] = n;
        this.i = 0, this.j = 0
      }, Nt.prototype.next = function Te() {
        var t;
        return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
      };
    var Re, Ie, Oe, De = 256;
    /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
     */
    function Ne() {
      ! function t(e) {
        Ie[Oe++] ^= 255 & e, Ie[Oe++] ^= e >> 8 & 255, Ie[Oe++] ^= e >> 16 & 255, Ie[Oe++] ^= e >> 24 & 255, Oe >= De && (Oe -= De)
      }((new Date).getTime())
    }
    if (null == Ie) {
      var Le;
      if (Ie = new Array, Oe = 0, void 0 !== i && (void 0 !== i.crypto || void 0 !== i.msCrypto)) {
        var Me = i.crypto || i.msCrypto;
        if (Me.getRandomValues) {
          var je = new Uint8Array(32);
          for (Me.getRandomValues(je), Le = 0; Le < 32; ++Le) Ie[Oe++] = je[Le]
        } else if ("Netscape" == n.appName && n.appVersion < "5") {
          var Ue = i.crypto.random(32);
          for (Le = 0; Le < Ue.length; ++Le) Ie[Oe++] = 255 & Ue.charCodeAt(Le)
        }
      }
      for (; Oe < De;) Le = Math.floor(65536 * Math.random()), Ie[Oe++] = Le >>> 8, Ie[Oe++] = 255 & Le;
      Oe = 0, Ne()
    }

    function Be() {
      if (null == Re) {
        for (Ne(), (Re = function t() {
            return new Nt
          }()).init(Ie), Oe = 0; Oe < Ie.length; ++Oe) Ie[Oe] = 0;
        Oe = 0
      }
      return Re.next()
    }

    function He() {}
    /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
     */
    function Ve(t, e) {
      return new E(t, e)
    }

    function Ke(t, e, r) {
      for (var n = "", i = 0; n.length < e;) n += r(String.fromCharCode.apply(String, t.concat([(4278190080 & i) >> 24, (16711680 & i) >> 16, (65280 & i) >> 8, 255 & i]))), i += 1;
      return n
    }

    function qe() {
      this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
    }
    /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
     */
    function We(t, e) {
      this.x = e, this.q = t
    }

    function Je(t, e, r, n) {
      this.curve = t, this.x = e, this.y = r, this.z = null == n ? E.ONE : n, this.zinv = null
    }

    function ze(t, e, r) {
      this.q = t, this.a = this.fromBigInteger(e), this.b = this.fromBigInteger(r), this.infinity = new Je(this, null, null)
    }
    He.prototype.nextBytes = function Ye(t) {
        var e;
        for (e = 0; e < t.length; ++e) t[e] = Be()
      }, qe.prototype.doPublic = function Ge(t) {
        return t.modPowInt(this.e, this.n)
      }, qe.prototype.setPublic = function Xe(t, e) {
        if (this.isPublic = !0, this.isPrivate = !1, "string" != typeof t) this.n = t, this.e = e;
        else {
          if (!(null != t && null != e && t.length > 0 && e.length > 0)) throw "Invalid RSA public key";
          this.n = Ve(t, 16), this.e = parseInt(e, 16)
        }
      }, qe.prototype.encrypt = function $e(t) {
        var e = function r(t, e) {
          if (e < t.length + 11) throw "Message too long for RSA";
          for (var r = new Array, n = t.length - 1; n >= 0 && e > 0;) {
            var i = t.charCodeAt(n--);
            i < 128 ? r[--e] = i : i > 127 && i < 2048 ? (r[--e] = 63 & i | 128, r[--e] = i >> 6 | 192) : (r[--e] = 63 & i | 128, r[--e] = i >> 6 & 63 | 128, r[--e] = i >> 12 | 224)
          }
          r[--e] = 0;
          for (var o = new He, s = new Array; e > 2;) {
            for (s[0] = 0; 0 == s[0];) o.nextBytes(s);
            r[--e] = s[0]
          }
          return r[--e] = 2, r[--e] = 0, new E(r)
        }(t, this.n.bitLength() + 7 >> 3);
        if (null == e) return null;
        var n = this.doPublic(e);
        if (null == n) return null;
        var i = n.toString(16);
        return 0 == (1 & i.length) ? i : "0" + i
      }, qe.prototype.encryptOAEP = function Qe(t, e, r) {
        var n = function i(t, e, r, n) {
          var i = Er.crypto.MessageDigest,
            o = Er.crypto.Util,
            s = null;
          if (r || (r = "sha1"), "string" == typeof r && (s = i.getCanonicalAlgName(r), n = i.getHashLength(s), r = function t(e) {
              return jr(o.hashHex(Ur(e), s))
            }), t.length + 2 * n + 2 > e) throw "Message too long for RSA";
          var a, u = "";
          for (a = 0; a < e - t.length - 2 * n - 2; a += 1) u += "\0";
          var c = r("") + u + "" + t,
            f = new Array(n);
          (new He).nextBytes(f);
          var h = Ke(f, c.length, r),
            l = [];
          for (a = 0; a < c.length; a += 1) l[a] = c.charCodeAt(a) ^ h.charCodeAt(a);
          var p = Ke(l, f.length, r),
            d = [0];
          for (a = 0; a < f.length; a += 1) d[a + 1] = f[a] ^ p.charCodeAt(a);
          return new E(d.concat(l))
        }(t, this.n.bitLength() + 7 >> 3, e, r);
        if (null == n) return null;
        var o = this.doPublic(n);
        if (null == o) return null;
        var s = o.toString(16);
        return 0 == (1 & s.length) ? s : "0" + s
      }, qe.prototype.type = "RSA", We.prototype.equals = function Ze(t) {
        return t == this || this.q.equals(t.q) && this.x.equals(t.x)
      }, We.prototype.toBigInteger = function tr() {
        return this.x
      }, We.prototype.negate = function er() {
        return new We(this.q, this.x.negate().mod(this.q))
      }, We.prototype.add = function rr(t) {
        return new We(this.q, this.x.add(t.toBigInteger()).mod(this.q))
      }, We.prototype.subtract = function nr(t) {
        return new We(this.q, this.x.subtract(t.toBigInteger()).mod(this.q))
      }, We.prototype.multiply = function ir(t) {
        return new We(this.q, this.x.multiply(t.toBigInteger()).mod(this.q))
      }, We.prototype.square = function or() {
        return new We(this.q, this.x.square().mod(this.q))
      }, We.prototype.divide = function sr(t) {
        return new We(this.q, this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))
      }, Je.prototype.getX = function ar() {
        return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
      }, Je.prototype.getY = function ur() {
        return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
      }, Je.prototype.equals = function cr(t) {
        return t == this || (this.isInfinity() ? t.isInfinity() : t.isInfinity() ? this.isInfinity() : !!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(E.ZERO) && t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(E.ZERO))
      }, Je.prototype.isInfinity = function fr() {
        return null == this.x && null == this.y || this.z.equals(E.ZERO) && !this.y.toBigInteger().equals(E.ZERO)
      }, Je.prototype.negate = function hr() {
        return new Je(this.curve, this.x, this.y.negate(), this.z)
      }, Je.prototype.add = function lr(t) {
        if (this.isInfinity()) return t;
        if (t.isInfinity()) return this;
        var e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q),
          r = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);
        if (E.ZERO.equals(r)) return E.ZERO.equals(e) ? this.twice() : this.curve.getInfinity();
        var n = new E("3"),
          i = this.x.toBigInteger(),
          o = this.y.toBigInteger(),
          s = (t.x.toBigInteger(), t.y.toBigInteger(), r.square()),
          a = s.multiply(r),
          u = i.multiply(s),
          c = e.square().multiply(this.z),
          f = c.subtract(u.shiftLeft(1)).multiply(t.z).subtract(a).multiply(r).mod(this.curve.q),
          h = u.multiply(n).multiply(e).subtract(o.multiply(a)).subtract(c.multiply(e)).multiply(t.z).add(e.multiply(a)).mod(this.curve.q),
          l = a.multiply(this.z).multiply(t.z).mod(this.curve.q);
        return new Je(this.curve, this.curve.fromBigInteger(f), this.curve.fromBigInteger(h), l)
      }, Je.prototype.twice = function pr() {
        if (this.isInfinity()) return this;
        if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
        var t = new E("3"),
          e = this.x.toBigInteger(),
          r = this.y.toBigInteger(),
          n = r.multiply(this.z),
          i = n.multiply(r).mod(this.curve.q),
          o = this.curve.a.toBigInteger(),
          s = e.square().multiply(t);
        E.ZERO.equals(o) || (s = s.add(this.z.square().multiply(o)));
        var a = (s = s.mod(this.curve.q)).square().subtract(e.shiftLeft(3).multiply(i)).shiftLeft(1).multiply(n).mod(this.curve.q),
          u = s.multiply(t).multiply(e).subtract(i.shiftLeft(1)).shiftLeft(2).multiply(i).subtract(s.square().multiply(s)).mod(this.curve.q),
          c = n.square().multiply(n).shiftLeft(3).mod(this.curve.q);
        return new Je(this.curve, this.curve.fromBigInteger(a), this.curve.fromBigInteger(u), c)
      }, Je.prototype.multiply = function dr(t) {
        if (this.isInfinity()) return this;
        if (0 == t.signum()) return this.curve.getInfinity();
        var e, r = t,
          n = r.multiply(new E("3")),
          i = this.negate(),
          o = this;
        for (e = n.bitLength() - 2; e > 0; --e) {
          o = o.twice();
          var s = n.testBit(e);
          s != r.testBit(e) && (o = o.add(s ? this : i))
        }
        return o
      }, Je.prototype.multiplyTwo = function gr(t, e, r) {
        var n;
        n = t.bitLength() > r.bitLength() ? t.bitLength() - 1 : r.bitLength() - 1;
        for (var i = this.curve.getInfinity(), o = this.add(e); n >= 0;) i = i.twice(), t.testBit(n) ? i = r.testBit(n) ? i.add(o) : i.add(this) : r.testBit(n) && (i = i.add(e)), --n;
        return i
      }, ze.prototype.getQ = function vr() {
        return this.q
      }, ze.prototype.getA = function yr() {
        return this.a
      }, ze.prototype.getB = function mr() {
        return this.b
      }, ze.prototype.equals = function _r(t) {
        return t == this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b)
      }, ze.prototype.getInfinity = function Sr() {
        return this.infinity
      }, ze.prototype.fromBigInteger = function br(t) {
        return new We(this.q, t)
      }, ze.prototype.decodePointHex = function wr(t) {
        switch (parseInt(t.substr(0, 2), 16)) {
          case 0:
            return this.infinity;
          case 2:
          case 3:
            return null;
          case 4:
          case 6:
          case 7:
            var e = (t.length - 2) / 2,
              r = t.substr(2, e),
              n = t.substr(e + 2, e);
            return new Je(this, this.fromBigInteger(new E(r, 16)), this.fromBigInteger(new E(n, 16)));
          default:
            return null
        }
      },
      /*! (c) Stefan Thomas | https://github.com/bitcoinjs/bitcoinjs-lib
       */
      We.prototype.getByteLength = function () {
        return Math.floor((this.toBigInteger().bitLength() + 7) / 8)
      }, Je.prototype.getEncoded = function (t) {
        var e = function t(e, r) {
            var n = e.toByteArrayUnsigned();
            if (r < n.length) n = n.slice(n.length - r);
            else
              for (; r > n.length;) n.unshift(0);
            return n
          },
          r = this.getX().toBigInteger(),
          n = this.getY().toBigInteger(),
          i = e(r, 32);
        return t ? n.isEven() ? i.unshift(2) : i.unshift(3) : (i.unshift(4), i = i.concat(e(n, 32))), i
      }, Je.decodeFrom = function (t, e) {
        e[0];
        var r = e.length - 1,
          n = e.slice(1, 1 + r / 2),
          i = e.slice(1 + r / 2, 1 + r);
        n.unshift(0), i.unshift(0);
        var o = new E(n),
          s = new E(i);
        return new Je(t, t.fromBigInteger(o), t.fromBigInteger(s))
      }, Je.decodeFromHex = function (t, e) {
        e.substr(0, 2);
        var r = e.length - 2,
          n = e.substr(2, r / 2),
          i = e.substr(2 + r / 2, r / 2),
          o = new E(n, 16),
          s = new E(i, 16);
        return new Je(t, t.fromBigInteger(o), t.fromBigInteger(s))
      }, Je.prototype.add2D = function (t) {
        if (this.isInfinity()) return t;
        if (t.isInfinity()) return this;
        if (this.x.equals(t.x)) return this.y.equals(t.y) ? this.twice() : this.curve.getInfinity();
        var e = t.x.subtract(this.x),
          r = t.y.subtract(this.y).divide(e),
          n = r.square().subtract(this.x).subtract(t.x),
          i = r.multiply(this.x.subtract(n)).subtract(this.y);
        return new Je(this.curve, n, i)
      }, Je.prototype.twice2D = function () {
        if (this.isInfinity()) return this;
        if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
        var t = this.curve.fromBigInteger(E.valueOf(2)),
          e = this.curve.fromBigInteger(E.valueOf(3)),
          r = this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(t)),
          n = r.square().subtract(this.x.multiply(t)),
          i = r.multiply(this.x.subtract(n)).subtract(this.y);
        return new Je(this.curve, n, i)
      }, Je.prototype.multiply2D = function (t) {
        if (this.isInfinity()) return this;
        if (0 == t.signum()) return this.curve.getInfinity();
        var e, r = t,
          n = r.multiply(new E("3")),
          i = this.negate(),
          o = this;
        for (e = n.bitLength() - 2; e > 0; --e) {
          o = o.twice();
          var s = n.testBit(e);
          s != r.testBit(e) && (o = o.add2D(s ? this : i))
        }
        return o
      }, Je.prototype.isOnCurve = function () {
        var t = this.getX().toBigInteger(),
          e = this.getY().toBigInteger(),
          r = this.curve.getA().toBigInteger(),
          n = this.curve.getB().toBigInteger(),
          i = this.curve.getQ(),
          o = e.multiply(e).mod(i),
          s = t.multiply(t).multiply(t).add(r.multiply(t)).add(n).mod(i);
        return o.equals(s)
      }, Je.prototype.toString = function () {
        return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")"
      }, Je.prototype.validate = function () {
        var t = this.curve.getQ();
        if (this.isInfinity()) throw new Error("Point is at infinity.");
        var e = this.getX().toBigInteger(),
          r = this.getY().toBigInteger();
        if (e.compareTo(E.ONE) < 0 || e.compareTo(t.subtract(E.ONE)) > 0) throw new Error("x coordinate out of bounds");
        if (r.compareTo(E.ONE) < 0 || r.compareTo(t.subtract(E.ONE)) > 0) throw new Error("y coordinate out of bounds");
        if (!this.isOnCurve()) throw new Error("Point is not on the curve.");
        if (this.multiply(t).isInfinity()) throw new Error("Point is not a scalar multiple of G.");
        return !0
      };
    /*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
     */
    var Fr = function () {
      var t = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))', "g"),
        e = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"),
        n = {
          '"': '"',
          "/": "/",
          "\\": "\\",
          b: "\b",
          f: "\f",
          n: "\n",
          r: "\r",
          t: "\t"
        };

      function i(t, e, r) {
        return e ? n[e] : String.fromCharCode(parseInt(r, 16))
      }
      var o = new String(""),
        s = (Object, Array, Object.hasOwnProperty);
      return function (n, a) {
        var u, c, f = n.match(t),
          h = f[0],
          l = !1;
        "{" === h ? u = {} : "[" === h ? u = [] : (u = [], l = !0);
        for (var p = [u], d = 1 - l, g = f.length; d < g; ++d) {
          var v;
          switch ((h = f[d]).charCodeAt(0)) {
            default:
              (v = p[0])[c || v.length] = +h, c = void 0;
              break;
            case 34:
              if (-1 !== (h = h.substring(1, h.length - 1)).indexOf("\\") && (h = h.replace(e, i)), v = p[0], !c) {
                if (!(v instanceof Array)) {
                  c = h || o;
                  break
                }
                c = v.length
              }
              v[c] = h, c = void 0;
              break;
            case 91:
              v = p[0], p.unshift(v[c || v.length] = []), c = void 0;
              break;
            case 93:
              p.shift();
              break;
            case 102:
              (v = p[0])[c || v.length] = !1, c = void 0;
              break;
            case 110:
              (v = p[0])[c || v.length] = null, c = void 0;
              break;
            case 116:
              (v = p[0])[c || v.length] = !0, c = void 0;
              break;
            case 123:
              v = p[0], p.unshift(v[c || v.length] = {}), c = void 0;
              break;
            case 125:
              p.shift()
          }
        }
        if (l) {
          if (1 !== p.length) throw new Error;
          u = u[0]
        } else if (p.length) throw new Error;
        if (a) {
          u = function t(e, n) {
            var i = e[n];
            if (i && "object" === (void 0 === i ? "undefined" : r(i))) {
              var o = null;
              for (var u in i)
                if (s.call(i, u) && i !== e) {
                  var c = t(i, u);
                  void 0 !== c ? i[u] = c : (o || (o = []), o.push(u))
                } if (o)
                for (var f = o.length; --f >= 0;) delete i[o[f]]
            }
            return a.call(e, n, i)
          }({
            "": u
          }, "")
        }
        return u
      }
    }();
    void 0 !== Er && Er || (e.KJUR = Er = {}), void 0 !== Er.asn1 && Er.asn1 || (Er.asn1 = {}), Er.asn1.ASN1Util = new function () {
      this.integerToByteHex = function (t) {
        var e = t.toString(16);
        return e.length % 2 == 1 && (e = "0" + e), e
      }, this.bigIntToMinTwosComplementsHex = function (t) {
        var e = t.toString(16);
        if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
        else {
          var r = e.substr(1).length;
          r % 2 == 1 ? r += 1 : e.match(/^[0-7]/) || (r += 2);
          for (var n = "", i = 0; i < r; i++) n += "f";
          e = new E(n, 16).xor(t).add(E.ONE).toString(16).replace(/^-/, "")
        }
        return e
      }, this.getPEMStringFromHex = function (t, e) {
        return Kr(t, e)
      }, this.newObject = function (t) {
        var e = Er.asn1,
          r = e.DERBoolean,
          n = e.DERInteger,
          i = e.DERBitString,
          o = e.DEROctetString,
          s = e.DERNull,
          a = e.DERObjectIdentifier,
          u = e.DEREnumerated,
          c = e.DERUTF8String,
          f = e.DERNumericString,
          h = e.DERPrintableString,
          l = e.DERTeletexString,
          p = e.DERIA5String,
          d = e.DERUTCTime,
          g = e.DERGeneralizedTime,
          v = e.DERSequence,
          y = e.DERSet,
          m = e.DERTaggedObject,
          _ = e.ASN1Util.newObject,
          S = Object.keys(t);
        if (1 != S.length) throw "key of param shall be only one.";
        var b = S[0];
        if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + b + ":")) throw "undefined key: " + b;
        if ("bool" == b) return new r(t[b]);
        if ("int" == b) return new n(t[b]);
        if ("bitstr" == b) return new i(t[b]);
        if ("octstr" == b) return new o(t[b]);
        if ("null" == b) return new s(t[b]);
        if ("oid" == b) return new a(t[b]);
        if ("enum" == b) return new u(t[b]);
        if ("utf8str" == b) return new c(t[b]);
        if ("numstr" == b) return new f(t[b]);
        if ("prnstr" == b) return new h(t[b]);
        if ("telstr" == b) return new l(t[b]);
        if ("ia5str" == b) return new p(t[b]);
        if ("utctime" == b) return new d(t[b]);
        if ("gentime" == b) return new g(t[b]);
        if ("seq" == b) {
          for (var w = t[b], F = [], E = 0; E < w.length; E++) {
            var x = _(w[E]);
            F.push(x)
          }
          return new v({
            array: F
          })
        }
        if ("set" == b) {
          for (w = t[b], F = [], E = 0; E < w.length; E++) {
            x = _(w[E]);
            F.push(x)
          }
          return new y({
            array: F
          })
        }
        if ("tag" == b) {
          var A = t[b];
          if ("[object Array]" === Object.prototype.toString.call(A) && 3 == A.length) {
            var k = _(A[2]);
            return new m({
              tag: A[0],
              explicit: A[1],
              obj: k
            })
          }
          var P = {};
          if (void 0 !== A.explicit && (P.explicit = A.explicit), void 0 !== A.tag && (P.tag = A.tag), void 0 === A.obj) throw "obj shall be specified for 'tag'.";
          return P.obj = _(A.obj), new m(P)
        }
      }, this.jsonToASN1HEX = function (t) {
        return this.newObject(t).getEncodedHex()
      }
    }, Er.asn1.ASN1Util.oidHexToInt = function (t) {
      for (var e = "", r = parseInt(t.substr(0, 2), 16), n = (e = Math.floor(r / 40) + "." + r % 40, ""), i = 2; i < t.length; i += 2) {
        var o = ("00000000" + parseInt(t.substr(i, 2), 16).toString(2)).slice(-8);
        if (n += o.substr(1, 7), "0" == o.substr(0, 1)) e = e + "." + new E(n, 2).toString(10), n = ""
      }
      return e
    }, Er.asn1.ASN1Util.oidIntToHex = function (t) {
      var e = function t(e) {
          var r = e.toString(16);
          return 1 == r.length && (r = "0" + r), r
        },
        r = function t(r) {
          var n = "",
            i = new E(r, 10).toString(2),
            o = 7 - i.length % 7;
          7 == o && (o = 0);
          for (var s = "", a = 0; a < o; a++) s += "0";
          i = s + i;
          for (a = 0; a < i.length - 1; a += 7) {
            var u = i.substr(a, 7);
            a != i.length - 7 && (u = "1" + u), n += e(parseInt(u, 2))
          }
          return n
        };
      if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
      var n = "",
        i = t.split("."),
        o = 40 * parseInt(i[0]) + parseInt(i[1]);
      n += e(o), i.splice(0, 2);
      for (var s = 0; s < i.length; s++) n += r(i[s]);
      return n
    }, Er.asn1.ASN1Object = function () {
      this.getLengthHexFromValue = function () {
        if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
        if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
        var t = this.hV.length / 2,
          e = t.toString(16);
        if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
        var r = e.length / 2;
        if (r > 15) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
        return (128 + r).toString(16) + e
      }, this.getEncodedHex = function () {
        return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
      }, this.getValueHex = function () {
        return this.getEncodedHex(), this.hV
      }, this.getFreshValueHex = function () {
        return ""
      }
    }, Er.asn1.DERAbstractString = function (t) {
      Er.asn1.DERAbstractString.superclass.constructor.call(this);
      this.getString = function () {
        return this.s
      }, this.setString = function (t) {
        this.hTLV = null, this.isModified = !0, this.s = t, this.hV = Lr(this.s).toLowerCase()
      }, this.setStringHex = function (t) {
        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
      }, this.getFreshValueHex = function () {
        return this.hV
      }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
    }, o.lang.extend(Er.asn1.DERAbstractString, Er.asn1.ASN1Object), Er.asn1.DERAbstractTime = function (t) {
      Er.asn1.DERAbstractTime.superclass.constructor.call(this);
      this.localDateToUTC = function (t) {
        return utc = t.getTime() + 6e4 * t.getTimezoneOffset(), new Date(utc)
      }, this.formatDate = function (t, e, r) {
        var n = this.zeroPadding,
          i = this.localDateToUTC(t),
          o = String(i.getFullYear());
        "utc" == e && (o = o.substr(2, 2));
        var s = o + n(String(i.getMonth() + 1), 2) + n(String(i.getDate()), 2) + n(String(i.getHours()), 2) + n(String(i.getMinutes()), 2) + n(String(i.getSeconds()), 2);
        if (!0 === r) {
          var a = i.getMilliseconds();
          if (0 != a) {
            var u = n(String(a), 3);
            s = s + "." + (u = u.replace(/[0]+$/, ""))
          }
        }
        return s + "Z"
      }, this.zeroPadding = function (t, e) {
        return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
      }, this.getString = function () {
        return this.s
      }, this.setString = function (t) {
        this.hTLV = null, this.isModified = !0, this.s = t, this.hV = Rr(t)
      }, this.setByDateValue = function (t, e, r, n, i, o) {
        var s = new Date(Date.UTC(t, e - 1, r, n, i, o, 0));
        this.setByDate(s)
      }, this.getFreshValueHex = function () {
        return this.hV
      }
    }, o.lang.extend(Er.asn1.DERAbstractTime, Er.asn1.ASN1Object), Er.asn1.DERAbstractStructured = function (t) {
      Er.asn1.DERAbstractString.superclass.constructor.call(this);
      this.setByASN1ObjectArray = function (t) {
        this.hTLV = null, this.isModified = !0, this.asn1Array = t
      }, this.appendASN1Object = function (t) {
        this.hTLV = null, this.isModified = !0, this.asn1Array.push(t)
      }, this.asn1Array = new Array, void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
    }, o.lang.extend(Er.asn1.DERAbstractStructured, Er.asn1.ASN1Object), Er.asn1.DERBoolean = function () {
      Er.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
    }, o.lang.extend(Er.asn1.DERBoolean, Er.asn1.ASN1Object), Er.asn1.DERInteger = function (t) {
      Er.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function (t) {
        this.hTLV = null, this.isModified = !0, this.hV = Er.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
      }, this.setByInteger = function (t) {
        var e = new E(String(t), 10);
        this.setByBigInteger(e)
      }, this.setValueHex = function (t) {
        this.hV = t
      }, this.getFreshValueHex = function () {
        return this.hV
      }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
    }, o.lang.extend(Er.asn1.DERInteger, Er.asn1.ASN1Object), Er.asn1.DERBitString = function (t) {
      if (void 0 !== t && void 0 !== t.obj) {
        var e = Er.asn1.ASN1Util.newObject(t.obj);
        t.hex = "00" + e.getEncodedHex()
      }
      Er.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function (t) {
        this.hTLV = null, this.isModified = !0, this.hV = t
      }, this.setUnusedBitsAndHexValue = function (t, e) {
        if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
        var r = "0" + t;
        this.hTLV = null, this.isModified = !0, this.hV = r + e
      }, this.setByBinaryString = function (t) {
        var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
        8 == e && (e = 0);
        for (var r = 0; r <= e; r++) t += "0";
        var n = "";
        for (r = 0; r < t.length - 1; r += 8) {
          var i = t.substr(r, 8),
            o = parseInt(i, 2).toString(16);
          1 == o.length && (o = "0" + o), n += o
        }
        this.hTLV = null, this.isModified = !0, this.hV = "0" + e + n
      }, this.setByBooleanArray = function (t) {
        for (var e = "", r = 0; r < t.length; r++) 1 == t[r] ? e += "1" : e += "0";
        this.setByBinaryString(e)
      }, this.newFalseArray = function (t) {
        for (var e = new Array(t), r = 0; r < t; r++) e[r] = !1;
        return e
      }, this.getFreshValueHex = function () {
        return this.hV
      }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
    }, o.lang.extend(Er.asn1.DERBitString, Er.asn1.ASN1Object), Er.asn1.DEROctetString = function (t) {
      if (void 0 !== t && void 0 !== t.obj) {
        var e = Er.asn1.ASN1Util.newObject(t.obj);
        t.hex = e.getEncodedHex()
      }
      Er.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04"
    }, o.lang.extend(Er.asn1.DEROctetString, Er.asn1.DERAbstractString), Er.asn1.DERNull = function () {
      Er.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
    }, o.lang.extend(Er.asn1.DERNull, Er.asn1.ASN1Object), Er.asn1.DERObjectIdentifier = function (t) {
      var e = function t(e) {
          var r = e.toString(16);
          return 1 == r.length && (r = "0" + r), r
        },
        r = function t(r) {
          var n = "",
            i = new E(r, 10).toString(2),
            o = 7 - i.length % 7;
          7 == o && (o = 0);
          for (var s = "", a = 0; a < o; a++) s += "0";
          i = s + i;
          for (a = 0; a < i.length - 1; a += 7) {
            var u = i.substr(a, 7);
            a != i.length - 7 && (u = "1" + u), n += e(parseInt(u, 2))
          }
          return n
        };
      Er.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function (t) {
        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
      }, this.setValueOidString = function (t) {
        if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
        var n = "",
          i = t.split("."),
          o = 40 * parseInt(i[0]) + parseInt(i[1]);
        n += e(o), i.splice(0, 2);
        for (var s = 0; s < i.length; s++) n += r(i[s]);
        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = n
      }, this.setValueName = function (t) {
        var e = Er.asn1.x509.OID.name2oid(t);
        if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
        this.setValueOidString(e)
      }, this.getFreshValueHex = function () {
        return this.hV
      }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
    }, o.lang.extend(Er.asn1.DERObjectIdentifier, Er.asn1.ASN1Object), Er.asn1.DEREnumerated = function (t) {
      Er.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function (t) {
        this.hTLV = null, this.isModified = !0, this.hV = Er.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
      }, this.setByInteger = function (t) {
        var e = new E(String(t), 10);
        this.setByBigInteger(e)
      }, this.setValueHex = function (t) {
        this.hV = t
      }, this.getFreshValueHex = function () {
        return this.hV
      }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
    }, o.lang.extend(Er.asn1.DEREnumerated, Er.asn1.ASN1Object), Er.asn1.DERUTF8String = function (t) {
      Er.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c"
    }, o.lang.extend(Er.asn1.DERUTF8String, Er.asn1.DERAbstractString), Er.asn1.DERNumericString = function (t) {
      Er.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12"
    }, o.lang.extend(Er.asn1.DERNumericString, Er.asn1.DERAbstractString), Er.asn1.DERPrintableString = function (t) {
      Er.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13"
    }, o.lang.extend(Er.asn1.DERPrintableString, Er.asn1.DERAbstractString), Er.asn1.DERTeletexString = function (t) {
      Er.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14"
    }, o.lang.extend(Er.asn1.DERTeletexString, Er.asn1.DERAbstractString), Er.asn1.DERIA5String = function (t) {
      Er.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16"
    }, o.lang.extend(Er.asn1.DERIA5String, Er.asn1.DERAbstractString), Er.asn1.DERUTCTime = function (t) {
      Er.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function (t) {
        this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = Rr(this.s)
      }, this.getFreshValueHex = function () {
        return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = Rr(this.s)), this.hV
      }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
    }, o.lang.extend(Er.asn1.DERUTCTime, Er.asn1.DERAbstractTime), Er.asn1.DERGeneralizedTime = function (t) {
      Er.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.withMillis = !1, this.setByDate = function (t) {
        this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = Rr(this.s)
      }, this.getFreshValueHex = function () {
        return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = Rr(this.s)), this.hV
      }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), !0 === t.millis && (this.withMillis = !0))
    }, o.lang.extend(Er.asn1.DERGeneralizedTime, Er.asn1.DERAbstractTime), Er.asn1.DERSequence = function (t) {
      Er.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function () {
        for (var t = "", e = 0; e < this.asn1Array.length; e++) {
          t += this.asn1Array[e].getEncodedHex()
        }
        return this.hV = t, this.hV
      }
    }, o.lang.extend(Er.asn1.DERSequence, Er.asn1.DERAbstractStructured), Er.asn1.DERSet = function (t) {
      Er.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function () {
        for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
          var r = this.asn1Array[e];
          t.push(r.getEncodedHex())
        }
        return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV
      }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
    }, o.lang.extend(Er.asn1.DERSet, Er.asn1.DERAbstractStructured), Er.asn1.DERTaggedObject = function (t) {
      Er.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function (t, e, r) {
        this.hT = e, this.isExplicit = t, this.asn1Object = r, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = r.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
      }, this.getFreshValueHex = function () {
        return this.hV
      }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
    }, o.lang.extend(Er.asn1.DERTaggedObject, Er.asn1.ASN1Object);
    var Er, xr, Ar, kr = new function () {};

    function Pr(t) {
      for (var e = new Array, r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
      return e
    }

    function Cr(t) {
      for (var e = "", r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
      return e
    }

    function Tr(t) {
      for (var e = "", r = 0; r < t.length; r++) {
        var n = t[r].toString(16);
        1 == n.length && (n = "0" + n), e += n
      }
      return e
    }

    function Rr(t) {
      return Tr(Pr(t))
    }

    function Ir(t) {
      return t = (t = (t = t.replace(/\=/g, "")).replace(/\+/g, "-")).replace(/\//g, "_")
    }

    function Or(t) {
      return t.length % 4 == 2 ? t += "==" : t.length % 4 == 3 && (t += "="), t = (t = t.replace(/-/g, "+")).replace(/_/g, "/")
    }

    function Dr(t) {
      return t.length % 2 == 1 && (t = "0" + t), Ir(b(t))
    }

    function Nr(t) {
      return w(Or(t))
    }

    function Lr(t) {
      return zr(Qr(t))
    }

    function Mr(t) {
      return decodeURIComponent(Yr(t))
    }

    function jr(t) {
      for (var e = "", r = 0; r < t.length - 1; r += 2) e += String.fromCharCode(parseInt(t.substr(r, 2), 16));
      return e
    }

    function Ur(t) {
      for (var e = "", r = 0; r < t.length; r++) e += ("0" + t.charCodeAt(r).toString(16)).slice(-2);
      return e
    }

    function Br(t) {
      return b(t)
    }

    function Hr(t) {
      var e = Br(t).replace(/(.{64})/g, "$1\r\n");
      return e = e.replace(/\r\n$/, "")
    }

    function Vr(t) {
      return w(t.replace(/[^0-9A-Za-z\/+=]*/g, ""))
    }

    function Kr(t, e) {
      return "-----BEGIN " + e + "-----\r\n" + Hr(t) + "\r\n-----END " + e + "-----\r\n"
    }

    function qr(t, e) {
      if (-1 == t.indexOf("-----BEGIN ")) throw "can't find PEM header: " + e;
      return Vr(t = void 0 !== e ? (t = t.replace("-----BEGIN " + e + "-----", "")).replace("-----END " + e + "-----", "") : (t = t.replace(/-----BEGIN [^-]+-----/, "")).replace(/-----END [^-]+-----/, ""))
    }

    function Wr(t) {
      var e, r, n, i, o, s, a, u, c, f, h;
      if (h = t.match(/^(\d{2}|\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/)) return u = h[1], e = parseInt(u), 2 === u.length && (50 <= e && e < 100 ? e = 1900 + e : 0 <= e && e < 50 && (e = 2e3 + e)), r = parseInt(h[2]) - 1, n = parseInt(h[3]), i = parseInt(h[4]), o = parseInt(h[5]), s = parseInt(h[6]), a = 0, "" !== (c = h[7]) && (f = (c.substr(1) + "00").substr(0, 3), a = parseInt(f)), Date.UTC(e, r, n, i, o, s, a);
      throw "unsupported zulu format: " + t
    }

    function Jr(t) {
      return ~~(Wr(t) / 1e3)
    }

    function zr(t) {
      return t.replace(/%/g, "")
    }

    function Yr(t) {
      return t.replace(/(..)/g, "%$1")
    }

    function Gr(t) {
      var e = "malformed IPv6 address";
      if (!t.match(/^[0-9A-Fa-f:]+$/)) throw e;
      var r = (t = t.toLowerCase()).split(":").length - 1;
      if (r < 2) throw e;
      var n = ":".repeat(7 - r + 2),
        i = (t = t.replace("::", n)).split(":");
      if (8 != i.length) throw e;
      for (var o = 0; o < 8; o++) i[o] = ("0000" + i[o]).slice(-4);
      return i.join("")
    }

    function Xr(t) {
      if (!t.match(/^[0-9A-Fa-f]{32}$/)) throw "malformed IPv6 address octet";
      for (var e = (t = t.toLowerCase()).match(/.{1,4}/g), r = 0; r < 8; r++) e[r] = e[r].replace(/^0+/, ""), "" == e[r] && (e[r] = "0");
      var n = (t = ":" + e.join(":") + ":").match(/:(0:){2,}/g);
      if (null === n) return t.slice(1, -1);
      var i = "";
      for (r = 0; r < n.length; r++) n[r].length > i.length && (i = n[r]);
      return (t = t.replace(i, "::")).slice(1, -1)
    }

    function $r(t) {
      var e = "malformed hex value";
      if (!t.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) throw e;
      if (8 != t.length) return 32 == t.length ? Xr(t) : t;
      try {
        return parseInt(t.substr(0, 2), 16) + "." + parseInt(t.substr(2, 2), 16) + "." + parseInt(t.substr(4, 2), 16) + "." + parseInt(t.substr(6, 2), 16)
      } catch (t) {
        throw e
      }
    }

    function Qr(t) {
      for (var e = encodeURIComponent(t), r = "", n = 0; n < e.length; n++) "%" == e[n] ? (r += e.substr(n, 3), n += 2) : r = r + "%" + Rr(e[n]);
      return r
    }

    function Zr(t) {
      return t.length % 2 == 1 ? "0" + t : t.substr(0, 1) > "7" ? "00" + t : t
    }
    kr.getLblen = function (t, e) {
      if ("8" != t.substr(e + 2, 1)) return 1;
      var r = parseInt(t.substr(e + 3, 1));
      return 0 == r ? -1 : 0 < r && r < 10 ? r + 1 : -2
    }, kr.getL = function (t, e) {
      var r = kr.getLblen(t, e);
      return r < 1 ? "" : t.substr(e + 2, 2 * r)
    }, kr.getVblen = function (t, e) {
      var r;
      return "" == (r = kr.getL(t, e)) ? -1 : ("8" === r.substr(0, 1) ? new E(r.substr(2), 16) : new E(r, 16)).intValue()
    }, kr.getVidx = function (t, e) {
      var r = kr.getLblen(t, e);
      return r < 0 ? r : e + 2 * (r + 1)
    }, kr.getV = function (t, e) {
      var r = kr.getVidx(t, e),
        n = kr.getVblen(t, e);
      return t.substr(r, 2 * n)
    }, kr.getTLV = function (t, e) {
      return t.substr(e, 2) + kr.getL(t, e) + kr.getV(t, e)
    }, kr.getNextSiblingIdx = function (t, e) {
      return kr.getVidx(t, e) + 2 * kr.getVblen(t, e)
    }, kr.getChildIdx = function (t, e) {
      var r = kr,
        n = new Array,
        i = r.getVidx(t, e);
      "03" == t.substr(e, 2) ? n.push(i + 2) : n.push(i);
      for (var o = r.getVblen(t, e), s = i, a = 0;;) {
        var u = r.getNextSiblingIdx(t, s);
        if (null == u || u - i >= 2 * o) break;
        if (a >= 200) break;
        n.push(u), s = u, a++
      }
      return n
    }, kr.getNthChildIdx = function (t, e, r) {
      return kr.getChildIdx(t, e)[r]
    }, kr.getIdxbyList = function (t, e, r, n) {
      var i, o, s = kr;
      if (0 == r.length) {
        if (void 0 !== n && t.substr(e, 2) !== n) throw "checking tag doesn't match: " + t.substr(e, 2) + "!=" + n;
        return e
      }
      return i = r.shift(), o = s.getChildIdx(t, e), s.getIdxbyList(t, o[i], r, n)
    }, kr.getTLVbyList = function (t, e, r, n) {
      var i = kr,
        o = i.getIdxbyList(t, e, r);
      if (void 0 === o) throw "can't find nthList object";
      if (void 0 !== n && t.substr(o, 2) != n) throw "checking tag doesn't match: " + t.substr(o, 2) + "!=" + n;
      return i.getTLV(t, o)
    }, kr.getVbyList = function (t, e, r, n, i) {
      var o, s, a = kr;
      if (void 0 === (o = a.getIdxbyList(t, e, r, n))) throw "can't find nthList object";
      return s = a.getV(t, o), !0 === i && (s = s.substr(2)), s
    }, kr.hextooidstr = function (t) {
      var e = function t(e, r) {
          return e.length >= r ? e : new Array(r - e.length + 1).join("0") + e
        },
        r = [],
        n = t.substr(0, 2),
        i = parseInt(n, 16);
      r[0] = new String(Math.floor(i / 40)), r[1] = new String(i % 40);
      for (var o = t.substr(2), s = [], a = 0; a < o.length / 2; a++) s.push(parseInt(o.substr(2 * a, 2), 16));
      var u = [],
        c = "";
      for (a = 0; a < s.length; a++) 128 & s[a] ? c += e((127 & s[a]).toString(2), 7) : (c += e((127 & s[a]).toString(2), 7), u.push(new String(parseInt(c, 2))), c = "");
      var f = r.join(".");
      return u.length > 0 && (f = f + "." + u.join(".")), f
    }, kr.dump = function (t, e, r, n) {
      var i = kr,
        o = i.getV,
        s = i.dump,
        a = i.getChildIdx,
        u = t;
      t instanceof Er.asn1.ASN1Object && (u = t.getEncodedHex());
      var c = function t(e, r) {
        return e.length <= 2 * r ? e : e.substr(0, r) + "..(total " + e.length / 2 + "bytes).." + e.substr(e.length - r, r)
      };
      void 0 === e && (e = {
        ommit_long_octet: 32
      }), void 0 === r && (r = 0), void 0 === n && (n = "");
      var f = e.ommit_long_octet;
      if ("01" == u.substr(r, 2)) return "00" == (h = o(u, r)) ? n + "BOOLEAN FALSE\n" : n + "BOOLEAN TRUE\n";
      if ("02" == u.substr(r, 2)) return n + "INTEGER " + c(h = o(u, r), f) + "\n";
      if ("03" == u.substr(r, 2)) return n + "BITSTRING " + c(h = o(u, r), f) + "\n";
      if ("04" == u.substr(r, 2)) {
        var h = o(u, r);
        if (i.isASN1HEX(h)) {
          var l = n + "OCTETSTRING, encapsulates\n";
          return l += s(h, e, 0, n + "  ")
        }
        return n + "OCTETSTRING " + c(h, f) + "\n"
      }
      if ("05" == u.substr(r, 2)) return n + "NULL\n";
      if ("06" == u.substr(r, 2)) {
        var p = o(u, r),
          d = Er.asn1.ASN1Util.oidHexToInt(p),
          g = Er.asn1.x509.OID.oid2name(d),
          v = d.replace(/\./g, " ");
        return "" != g ? n + "ObjectIdentifier " + g + " (" + v + ")\n" : n + "ObjectIdentifier (" + v + ")\n"
      }
      if ("0c" == u.substr(r, 2)) return n + "UTF8String '" + Mr(o(u, r)) + "'\n";
      if ("13" == u.substr(r, 2)) return n + "PrintableString '" + Mr(o(u, r)) + "'\n";
      if ("14" == u.substr(r, 2)) return n + "TeletexString '" + Mr(o(u, r)) + "'\n";
      if ("16" == u.substr(r, 2)) return n + "IA5String '" + Mr(o(u, r)) + "'\n";
      if ("17" == u.substr(r, 2)) return n + "UTCTime " + Mr(o(u, r)) + "\n";
      if ("18" == u.substr(r, 2)) return n + "GeneralizedTime " + Mr(o(u, r)) + "\n";
      if ("30" == u.substr(r, 2)) {
        if ("3000" == u.substr(r, 4)) return n + "SEQUENCE {}\n";
        l = n + "SEQUENCE\n";
        var y = e;
        if ((2 == (S = a(u, r)).length || 3 == S.length) && "06" == u.substr(S[0], 2) && "04" == u.substr(S[S.length - 1], 2)) {
          g = i.oidname(o(u, S[0]));
          var m = JSON.parse(JSON.stringify(e));
          m.x509ExtName = g, y = m
        }
        for (var _ = 0; _ < S.length; _++) l += s(u, y, S[_], n + "  ");
        return l
      }
      if ("31" == u.substr(r, 2)) {
        l = n + "SET\n";
        var S = a(u, r);
        for (_ = 0; _ < S.length; _++) l += s(u, e, S[_], n + "  ");
        return l
      }
      var b = parseInt(u.substr(r, 2), 16);
      if (0 != (128 & b)) {
        var w = 31 & b;
        if (0 != (32 & b)) {
          var l = n + "[" + w + "]\n";
          for (S = a(u, r), _ = 0; _ < S.length; _++) l += s(u, e, S[_], n + "  ");
          return l
        }
        return "68747470" == (h = o(u, r)).substr(0, 8) && (h = Mr(h)), "subjectAltName" === e.x509ExtName && 2 == w && (h = Mr(h)), l = n + "[" + w + "] " + h + "\n"
      }
      return n + "UNKNOWN(" + u.substr(r, 2) + ") " + o(u, r) + "\n"
    }, kr.isASN1HEX = function (t) {
      var e = kr;
      if (t.length % 2 == 1) return !1;
      var r = e.getVblen(t, 0),
        n = t.substr(0, 2),
        i = e.getL(t, 0);
      return t.length - n.length - i.length == 2 * r
    }, kr.oidname = function (t) {
      var e = Er.asn1;
      Er.lang.String.isHex(t) && (t = e.ASN1Util.oidHexToInt(t));
      var r = e.x509.OID.oid2name(t);
      return "" === r && (r = t), r
    }, void 0 !== Er && Er || (e.KJUR = Er = {}), void 0 !== Er.lang && Er.lang || (Er.lang = {}), Er.lang.String = function () {}, "function" == typeof t ? (e.utf8tob64u = xr = function e(r) {
      return Ir(new t(r, "utf8").toString("base64"))
    }, e.b64utoutf8 = Ar = function e(r) {
      return new t(Or(r), "base64").toString("utf8")
    }) : (e.utf8tob64u = xr = function t(e) {
      return Dr(zr(Qr(e)))
    }, e.b64utoutf8 = Ar = function t(e) {
      return decodeURIComponent(Yr(Nr(e)))
    }), Er.lang.String.isInteger = function (t) {
      return !!t.match(/^[0-9]+$/) || !!t.match(/^-[0-9]+$/)
    }, Er.lang.String.isHex = function (t) {
      return !(t.length % 2 != 0 || !t.match(/^[0-9a-f]+$/) && !t.match(/^[0-9A-F]+$/))
    }, Er.lang.String.isBase64 = function (t) {
      return !(!(t = t.replace(/\s+/g, "")).match(/^[0-9A-Za-z+\/]+={0,3}$/) || t.length % 4 != 0)
    }, Er.lang.String.isBase64URL = function (t) {
      return !t.match(/[+/=]/) && (t = Or(t), Er.lang.String.isBase64(t))
    }, Er.lang.String.isIntegerArray = function (t) {
      return !!(t = t.replace(/\s+/g, "")).match(/^\[[0-9,]+\]$/)
    };
    void 0 !== Er && Er || (e.KJUR = Er = {}), void 0 !== Er.crypto && Er.crypto || (Er.crypto = {}), Er.crypto.Util = new function () {
      this.DIGESTINFOHEAD = {
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        ripemd160: "3021300906052b2403020105000414"
      }, this.DEFAULTPROVIDER = {
        md5: "cryptojs",
        sha1: "cryptojs",
        sha224: "cryptojs",
        sha256: "cryptojs",
        sha384: "cryptojs",
        sha512: "cryptojs",
        ripemd160: "cryptojs",
        hmacmd5: "cryptojs",
        hmacsha1: "cryptojs",
        hmacsha224: "cryptojs",
        hmacsha256: "cryptojs",
        hmacsha384: "cryptojs",
        hmacsha512: "cryptojs",
        hmacripemd160: "cryptojs",
        MD5withRSA: "cryptojs/jsrsa",
        SHA1withRSA: "cryptojs/jsrsa",
        SHA224withRSA: "cryptojs/jsrsa",
        SHA256withRSA: "cryptojs/jsrsa",
        SHA384withRSA: "cryptojs/jsrsa",
        SHA512withRSA: "cryptojs/jsrsa",
        RIPEMD160withRSA: "cryptojs/jsrsa",
        MD5withECDSA: "cryptojs/jsrsa",
        SHA1withECDSA: "cryptojs/jsrsa",
        SHA224withECDSA: "cryptojs/jsrsa",
        SHA256withECDSA: "cryptojs/jsrsa",
        SHA384withECDSA: "cryptojs/jsrsa",
        SHA512withECDSA: "cryptojs/jsrsa",
        RIPEMD160withECDSA: "cryptojs/jsrsa",
        SHA1withDSA: "cryptojs/jsrsa",
        SHA224withDSA: "cryptojs/jsrsa",
        SHA256withDSA: "cryptojs/jsrsa",
        MD5withRSAandMGF1: "cryptojs/jsrsa",
        SHA1withRSAandMGF1: "cryptojs/jsrsa",
        SHA224withRSAandMGF1: "cryptojs/jsrsa",
        SHA256withRSAandMGF1: "cryptojs/jsrsa",
        SHA384withRSAandMGF1: "cryptojs/jsrsa",
        SHA512withRSAandMGF1: "cryptojs/jsrsa",
        RIPEMD160withRSAandMGF1: "cryptojs/jsrsa"
      }, this.CRYPTOJSMESSAGEDIGESTNAME = {
        md5: y.algo.MD5,
        sha1: y.algo.SHA1,
        sha224: y.algo.SHA224,
        sha256: y.algo.SHA256,
        sha384: y.algo.SHA384,
        sha512: y.algo.SHA512,
        ripemd160: y.algo.RIPEMD160
      }, this.getDigestInfoHex = function (t, e) {
        if (void 0 === this.DIGESTINFOHEAD[e]) throw "alg not supported in Util.DIGESTINFOHEAD: " + e;
        return this.DIGESTINFOHEAD[e] + t
      }, this.getPaddedDigestInfoHex = function (t, e, r) {
        var n = this.getDigestInfoHex(t, e),
          i = r / 4;
        if (n.length + 22 > i) throw "key is too short for SigAlg: keylen=" + r + "," + e;
        for (var o = "0001", s = "00" + n, a = "", u = i - o.length - s.length, c = 0; c < u; c += 2) a += "ff";
        return o + a + s
      }, this.hashString = function (t, e) {
        return new Er.crypto.MessageDigest({
          alg: e
        }).digestString(t)
      }, this.hashHex = function (t, e) {
        return new Er.crypto.MessageDigest({
          alg: e
        }).digestHex(t)
      }, this.sha1 = function (t) {
        return new Er.crypto.MessageDigest({
          alg: "sha1",
          prov: "cryptojs"
        }).digestString(t)
      }, this.sha256 = function (t) {
        return new Er.crypto.MessageDigest({
          alg: "sha256",
          prov: "cryptojs"
        }).digestString(t)
      }, this.sha256Hex = function (t) {
        return new Er.crypto.MessageDigest({
          alg: "sha256",
          prov: "cryptojs"
        }).digestHex(t)
      }, this.sha512 = function (t) {
        return new Er.crypto.MessageDigest({
          alg: "sha512",
          prov: "cryptojs"
        }).digestString(t)
      }, this.sha512Hex = function (t) {
        return new Er.crypto.MessageDigest({
          alg: "sha512",
          prov: "cryptojs"
        }).digestHex(t)
      }
    }, Er.crypto.Util.md5 = function (t) {
      return new Er.crypto.MessageDigest({
        alg: "md5",
        prov: "cryptojs"
      }).digestString(t)
    }, Er.crypto.Util.ripemd160 = function (t) {
      return new Er.crypto.MessageDigest({
        alg: "ripemd160",
        prov: "cryptojs"
      }).digestString(t)
    }, Er.crypto.Util.SECURERANDOMGEN = new He, Er.crypto.Util.getRandomHexOfNbytes = function (t) {
      var e = new Array(t);
      return Er.crypto.Util.SECURERANDOMGEN.nextBytes(e), Tr(e)
    }, Er.crypto.Util.getRandomBigIntegerOfNbytes = function (t) {
      return new E(Er.crypto.Util.getRandomHexOfNbytes(t), 16)
    }, Er.crypto.Util.getRandomHexOfNbits = function (t) {
      var e = t % 8,
        r = new Array((t - e) / 8 + 1);
      return Er.crypto.Util.SECURERANDOMGEN.nextBytes(r), r[0] = (255 << e & 255 ^ 255) & r[0], Tr(r)
    }, Er.crypto.Util.getRandomBigIntegerOfNbits = function (t) {
      return new E(Er.crypto.Util.getRandomHexOfNbits(t), 16)
    }, Er.crypto.Util.getRandomBigIntegerZeroToMax = function (t) {
      for (var e = t.bitLength();;) {
        var r = Er.crypto.Util.getRandomBigIntegerOfNbits(e);
        if (-1 != t.compareTo(r)) return r
      }
    }, Er.crypto.Util.getRandomBigIntegerMinToMax = function (t, e) {
      var r = t.compareTo(e);
      if (1 == r) throw "biMin is greater than biMax";
      if (0 == r) return t;
      var n = e.subtract(t);
      return Er.crypto.Util.getRandomBigIntegerZeroToMax(n).add(t)
    }, Er.crypto.MessageDigest = function (t) {
      this.setAlgAndProvider = function (t, e) {
        if (null !== (t = Er.crypto.MessageDigest.getCanonicalAlgName(t)) && void 0 === e && (e = Er.crypto.Util.DEFAULTPROVIDER[t]), -1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t) && "cryptojs" == e) {
          try {
            this.md = Er.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create()
          } catch (e) {
            throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + e
          }
          this.updateString = function (t) {
            this.md.update(t)
          }, this.updateHex = function (t) {
            var e = y.enc.Hex.parse(t);
            this.md.update(e)
          }, this.digest = function () {
            return this.md.finalize().toString(y.enc.Hex)
          }, this.digestString = function (t) {
            return this.updateString(t), this.digest()
          }, this.digestHex = function (t) {
            return this.updateHex(t), this.digest()
          }
        }
        if (-1 != ":sha256:".indexOf(t) && "sjcl" == e) {
          try {
            this.md = new sjcl.hash.sha256
          } catch (e) {
            throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + e
          }
          this.updateString = function (t) {
            this.md.update(t)
          }, this.updateHex = function (t) {
            var e = sjcl.codec.hex.toBits(t);
            this.md.update(e)
          }, this.digest = function () {
            var t = this.md.finalize();
            return sjcl.codec.hex.fromBits(t)
          }, this.digestString = function (t) {
            return this.updateString(t), this.digest()
          }, this.digestHex = function (t) {
            return this.updateHex(t), this.digest()
          }
        }
      }, this.updateString = function (t) {
        throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName
      }, this.updateHex = function (t) {
        throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName
      }, this.digest = function () {
        throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName
      }, this.digestString = function (t) {
        throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName
      }, this.digestHex = function (t) {
        throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName
      }, void 0 !== t && void 0 !== t.alg && (this.algName = t.alg, void 0 === t.prov && (this.provName = Er.crypto.Util.DEFAULTPROVIDER[this.algName]), this.setAlgAndProvider(this.algName, this.provName))
    }, Er.crypto.MessageDigest.getCanonicalAlgName = function (t) {
      return "string" == typeof t && (t = (t = t.toLowerCase()).replace(/-/, "")), t
    }, Er.crypto.MessageDigest.getHashLength = function (t) {
      var e = Er.crypto.MessageDigest,
        r = e.getCanonicalAlgName(t);
      if (void 0 === e.HASHLENGTH[r]) throw "not supported algorithm: " + t;
      return e.HASHLENGTH[r]
    }, Er.crypto.MessageDigest.HASHLENGTH = {
      md5: 16,
      sha1: 20,
      sha224: 28,
      sha256: 32,
      sha384: 48,
      sha512: 64,
      ripemd160: 20
    }, Er.crypto.Mac = function (t) {
      this.setAlgAndProvider = function (t, e) {
        if (null == (t = t.toLowerCase()) && (t = "hmacsha1"), "hmac" != (t = t.toLowerCase()).substr(0, 4)) throw "setAlgAndProvider unsupported HMAC alg: " + t;
        void 0 === e && (e = Er.crypto.Util.DEFAULTPROVIDER[t]), this.algProv = t + "/" + e;
        var r = t.substr(4);
        if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(r) && "cryptojs" == e) {
          try {
            var n = Er.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[r];
            this.mac = y.algo.HMAC.create(n, this.pass)
          } catch (t) {
            throw "setAlgAndProvider hash alg set fail hashAlg=" + r + "/" + t
          }
          this.updateString = function (t) {
            this.mac.update(t)
          }, this.updateHex = function (t) {
            var e = y.enc.Hex.parse(t);
            this.mac.update(e)
          }, this.doFinal = function () {
            return this.mac.finalize().toString(y.enc.Hex)
          }, this.doFinalString = function (t) {
            return this.updateString(t), this.doFinal()
          }, this.doFinalHex = function (t) {
            return this.updateHex(t), this.doFinal()
          }
        }
      }, this.updateString = function (t) {
        throw "updateString(str) not supported for this alg/prov: " + this.algProv
      }, this.updateHex = function (t) {
        throw "updateHex(hex) not supported for this alg/prov: " + this.algProv
      }, this.doFinal = function () {
        throw "digest() not supported for this alg/prov: " + this.algProv
      }, this.doFinalString = function (t) {
        throw "digestString(str) not supported for this alg/prov: " + this.algProv
      }, this.doFinalHex = function (t) {
        throw "digestHex(hex) not supported for this alg/prov: " + this.algProv
      }, this.setPassword = function (t) {
        if ("string" == typeof t) {
          var e = t;
          return t.length % 2 != 1 && t.match(/^[0-9A-Fa-f]+$/) || (e = Ur(t)), void(this.pass = y.enc.Hex.parse(e))
        }
        if ("object" != (void 0 === t ? "undefined" : r(t))) throw "KJUR.crypto.Mac unsupported password type: " + t;
        e = null;
        if (void 0 !== t.hex) {
          if (t.hex.length % 2 != 0 || !t.hex.match(/^[0-9A-Fa-f]+$/)) throw "Mac: wrong hex password: " + t.hex;
          e = t.hex
        }
        if (void 0 !== t.utf8 && (e = Lr(t.utf8)), void 0 !== t.rstr && (e = Ur(t.rstr)), void 0 !== t.b64 && (e = w(t.b64)), void 0 !== t.b64u && (e = Nr(t.b64u)), null == e) throw "KJUR.crypto.Mac unsupported password type: " + t;
        this.pass = y.enc.Hex.parse(e)
      }, void 0 !== t && (void 0 !== t.pass && this.setPassword(t.pass), void 0 !== t.alg && (this.algName = t.alg, void 0 === t.prov && (this.provName = Er.crypto.Util.DEFAULTPROVIDER[this.algName]), this.setAlgAndProvider(this.algName, this.provName)))
    }, Er.crypto.Signature = function (t) {
      var e = null;
      if (this._setAlgNames = function () {
          var t = this.algName.match(/^(.+)with(.+)$/);
          t && (this.mdAlgName = t[1].toLowerCase(), this.pubkeyAlgName = t[2].toLowerCase())
        }, this._zeroPaddingOfSignature = function (t, e) {
          for (var r = "", n = e / 4 - t.length, i = 0; i < n; i++) r += "0";
          return r + t
        }, this.setAlgAndProvider = function (t, e) {
          if (this._setAlgNames(), "cryptojs/jsrsa" != e) throw "provider not supported: " + e;
          if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)) {
            try {
              this.md = new Er.crypto.MessageDigest({
                alg: this.mdAlgName
              })
            } catch (t) {
              throw "setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + t
            }
            this.init = function (t, e) {
              var r = null;
              try {
                r = void 0 === e ? tn.getKey(t) : tn.getKey(t, e)
              } catch (t) {
                throw "init failed:" + t
              }
              if (!0 === r.isPrivate) this.prvKey = r, this.state = "SIGN";
              else {
                if (!0 !== r.isPublic) throw "init failed.:" + r;
                this.pubKey = r, this.state = "VERIFY"
              }
            }, this.updateString = function (t) {
              this.md.updateString(t)
            }, this.updateHex = function (t) {
              this.md.updateHex(t)
            }, this.sign = function () {
              if (this.sHashHex = this.md.digest(), void 0 !== this.ecprvhex && void 0 !== this.eccurvename) {
                var t = new Er.crypto.ECDSA({
                  curve: this.eccurvename
                });
                this.hSign = t.signHex(this.sHashHex, this.ecprvhex)
              } else if (this.prvKey instanceof qe && "rsaandmgf1" === this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);
              else if (this.prvKey instanceof qe && "rsa" === this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);
              else if (this.prvKey instanceof Er.crypto.ECDSA) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
              else {
                if (!(this.prvKey instanceof Er.crypto.DSA)) throw "Signature: unsupported private key alg: " + this.pubkeyAlgName;
                this.hSign = this.prvKey.signWithMessageHash(this.sHashHex)
              }
              return this.hSign
            }, this.signString = function (t) {
              return this.updateString(t), this.sign()
            }, this.signHex = function (t) {
              return this.updateHex(t), this.sign()
            }, this.verify = function (t) {
              if (this.sHashHex = this.md.digest(), void 0 !== this.ecpubhex && void 0 !== this.eccurvename) return new Er.crypto.ECDSA({
                curve: this.eccurvename
              }).verifyHex(this.sHashHex, t, this.ecpubhex);
              if (this.pubKey instanceof qe && "rsaandmgf1" === this.pubkeyAlgName) return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, t, this.mdAlgName, this.pssSaltLen);
              if (this.pubKey instanceof qe && "rsa" === this.pubkeyAlgName) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
              if (void 0 !== Er.crypto.ECDSA && this.pubKey instanceof Er.crypto.ECDSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
              if (void 0 !== Er.crypto.DSA && this.pubKey instanceof Er.crypto.DSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
              throw "Signature: unsupported public key alg: " + this.pubkeyAlgName
            }
          }
        }, this.init = function (t, e) {
          throw "init(key, pass) not supported for this alg:prov=" + this.algProvName
        }, this.updateString = function (t) {
          throw "updateString(str) not supported for this alg:prov=" + this.algProvName
        }, this.updateHex = function (t) {
          throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName
        }, this.sign = function () {
          throw "sign() not supported for this alg:prov=" + this.algProvName
        }, this.signString = function (t) {
          throw "digestString(str) not supported for this alg:prov=" + this.algProvName
        }, this.signHex = function (t) {
          throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName
        }, this.verify = function (t) {
          throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName
        }, this.initParams = t, void 0 !== t && (void 0 !== t.alg && (this.algName = t.alg, void 0 === t.prov ? this.provName = Er.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = t.prov, this.algProvName = this.algName + ":" + this.provName, this.setAlgAndProvider(this.algName, this.provName), this._setAlgNames()), void 0 !== t.psssaltlen && (this.pssSaltLen = t.psssaltlen), void 0 !== t.prvkeypem)) {
        if (void 0 !== t.prvkeypas) throw "both prvkeypem and prvkeypas parameters not supported";
        try {
          e = tn.getKey(t.prvkeypem);
          this.init(e)
        } catch (t) {
          throw "fatal error to load pem private key: " + t
        }
      }
    }, Er.crypto.Cipher = function (t) {}, Er.crypto.Cipher.encrypt = function (t, e, r) {
      if (e instanceof qe && e.isPublic) {
        var n = Er.crypto.Cipher.getAlgByKeyAndName(e, r);
        if ("RSA" === n) return e.encrypt(t);
        if ("RSAOAEP" === n) return e.encryptOAEP(t, "sha1");
        var i = n.match(/^RSAOAEP(\d+)$/);
        if (null !== i) return e.encryptOAEP(t, "sha" + i[1]);
        throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + r
      }
      throw "Cipher.encrypt: unsupported key or algorithm"
    }, Er.crypto.Cipher.decrypt = function (t, e, r) {
      if (e instanceof qe && e.isPrivate) {
        var n = Er.crypto.Cipher.getAlgByKeyAndName(e, r);
        if ("RSA" === n) return e.decrypt(t);
        if ("RSAOAEP" === n) return e.decryptOAEP(t, "sha1");
        var i = n.match(/^RSAOAEP(\d+)$/);
        if (null !== i) return e.decryptOAEP(t, "sha" + i[1]);
        throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + r
      }
      throw "Cipher.decrypt: unsupported key or algorithm"
    }, Er.crypto.Cipher.getAlgByKeyAndName = function (t, e) {
      if (t instanceof qe) {
        if (-1 != ":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(e)) return e;
        if (null === e || void 0 === e) return "RSA";
        throw "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + e
      }
      throw "getAlgByKeyAndName: not supported algorithm name: " + e
    }, Er.crypto.OID = new function () {
      this.oidhex2name = {
        "2a864886f70d010101": "rsaEncryption",
        "2a8648ce3d0201": "ecPublicKey",
        "2a8648ce380401": "dsa",
        "2a8648ce3d030107": "secp256r1",
        "2b8104001f": "secp192k1",
        "2b81040021": "secp224r1",
        "2b8104000a": "secp256k1",
        "2b81040023": "secp521r1",
        "2b81040022": "secp384r1",
        "2a8648ce380403": "SHA1withDSA",
        "608648016503040301": "SHA224withDSA",
        "608648016503040302": "SHA256withDSA"
      }
    }, void 0 !== Er && Er || (e.KJUR = Er = {}), void 0 !== Er.crypto && Er.crypto || (Er.crypto = {}), Er.crypto.ECDSA = function (t) {
      var e = new He;
      this.type = "EC", this.isPrivate = !1, this.isPublic = !1, this.getBigRandom = function (t) {
        return new E(t.bitLength(), e).mod(t.subtract(E.ONE)).add(E.ONE)
      }, this.setNamedCurve = function (t) {
        this.ecparams = Er.crypto.ECParameterDB.getByName(t), this.prvKeyHex = null, this.pubKeyHex = null, this.curveName = t
      }, this.setPrivateKeyHex = function (t) {
        this.isPrivate = !0, this.prvKeyHex = t
      }, this.setPublicKeyHex = function (t) {
        this.isPublic = !0, this.pubKeyHex = t
      }, this.getPublicKeyXYHex = function () {
        var t = this.pubKeyHex;
        if ("04" !== t.substr(0, 2)) throw "this method supports uncompressed format(04) only";
        var e = this.ecparams.keylen / 4;
        if (t.length !== 2 + 2 * e) throw "malformed public key hex length";
        var r = {};
        return r.x = t.substr(2, e), r.y = t.substr(2 + e), r
      }, this.getShortNISTPCurveName = function () {
        var t = this.curveName;
        return "secp256r1" === t || "NIST P-256" === t || "P-256" === t || "prime256v1" === t ? "P-256" : "secp384r1" === t || "NIST P-384" === t || "P-384" === t ? "P-384" : null
      }, this.generateKeyPairHex = function () {
        var t = this.ecparams.n,
          e = this.getBigRandom(t),
          r = this.ecparams.G.multiply(e),
          n = r.getX().toBigInteger(),
          i = r.getY().toBigInteger(),
          o = this.ecparams.keylen / 4,
          s = ("0000000000" + e.toString(16)).slice(-o),
          a = "04" + ("0000000000" + n.toString(16)).slice(-o) + ("0000000000" + i.toString(16)).slice(-o);
        return this.setPrivateKeyHex(s), this.setPublicKeyHex(a), {
          ecprvhex: s,
          ecpubhex: a
        }
      }, this.signWithMessageHash = function (t) {
        return this.signHex(t, this.prvKeyHex)
      }, this.signHex = function (t, e) {
        var r = new E(e, 16),
          n = this.ecparams.n,
          i = new E(t, 16);
        do {
          var o = this.getBigRandom(n),
            s = this.ecparams.G.multiply(o).getX().toBigInteger().mod(n)
        } while (s.compareTo(E.ZERO) <= 0);
        var a = o.modInverse(n).multiply(i.add(r.multiply(s))).mod(n);
        return Er.crypto.ECDSA.biRSSigToASN1Sig(s, a)
      }, this.sign = function (t, e) {
        var r = e,
          n = this.ecparams.n,
          i = E.fromByteArrayUnsigned(t);
        do {
          var o = this.getBigRandom(n),
            s = this.ecparams.G.multiply(o).getX().toBigInteger().mod(n)
        } while (s.compareTo(E.ZERO) <= 0);
        var a = o.modInverse(n).multiply(i.add(r.multiply(s))).mod(n);
        return this.serializeSig(s, a)
      }, this.verifyWithMessageHash = function (t, e) {
        return this.verifyHex(t, e, this.pubKeyHex)
      }, this.verifyHex = function (t, e, r) {
        var n, i, o, s = Er.crypto.ECDSA.parseSigHex(e);
        n = s.r, i = s.s, o = Je.decodeFromHex(this.ecparams.curve, r);
        var a = new E(t, 16);
        return this.verifyRaw(a, n, i, o)
      }, this.verify = function (t, e, n) {
        var i, o, s;
        if (Bitcoin.Util.isArray(e)) {
          var a = this.parseSig(e);
          i = a.r, o = a.s
        } else {
          if ("object" !== (void 0 === e ? "undefined" : r(e)) || !e.r || !e.s) throw "Invalid value for signature";
          i = e.r, o = e.s
        }
        if (n instanceof Je) s = n;
        else {
          if (!Bitcoin.Util.isArray(n)) throw "Invalid format for pubkey value, must be byte array or ECPointFp";
          s = Je.decodeFrom(this.ecparams.curve, n)
        }
        var u = E.fromByteArrayUnsigned(t);
        return this.verifyRaw(u, i, o, s)
      }, this.verifyRaw = function (t, e, r, n) {
        var i = this.ecparams.n,
          o = this.ecparams.G;
        if (e.compareTo(E.ONE) < 0 || e.compareTo(i) >= 0) return !1;
        if (r.compareTo(E.ONE) < 0 || r.compareTo(i) >= 0) return !1;
        var s = r.modInverse(i),
          a = t.multiply(s).mod(i),
          u = e.multiply(s).mod(i);
        return o.multiply(a).add(n.multiply(u)).getX().toBigInteger().mod(i).equals(e)
      }, this.serializeSig = function (t, e) {
        var r = t.toByteArraySigned(),
          n = e.toByteArraySigned(),
          i = [];
        return i.push(2), i.push(r.length), (i = i.concat(r)).push(2), i.push(n.length), (i = i.concat(n)).unshift(i.length), i.unshift(48), i
      }, this.parseSig = function (t) {
        var e;
        if (48 != t[0]) throw new Error("Signature not a valid DERSequence");
        if (2 != t[e = 2]) throw new Error("First element in signature must be a DERInteger");
        var r = t.slice(e + 2, e + 2 + t[e + 1]);
        if (2 != t[e += 2 + t[e + 1]]) throw new Error("Second element in signature must be a DERInteger");
        var n = t.slice(e + 2, e + 2 + t[e + 1]);
        return e += 2 + t[e + 1], {
          r: E.fromByteArrayUnsigned(r),
          s: E.fromByteArrayUnsigned(n)
        }
      }, this.parseSigCompact = function (t) {
        if (65 !== t.length) throw "Signature has the wrong length";
        var e = t[0] - 27;
        if (e < 0 || e > 7) throw "Invalid signature type";
        var r = this.ecparams.n;
        return {
          r: E.fromByteArrayUnsigned(t.slice(1, 33)).mod(r),
          s: E.fromByteArrayUnsigned(t.slice(33, 65)).mod(r),
          i: e
        }
      }, this.readPKCS5PrvKeyHex = function (t) {
        var e, r, n, i = kr,
          o = Er.crypto.ECDSA.getName,
          s = i.getVbyList;
        if (!1 === i.isASN1HEX(t)) throw "not ASN.1 hex string";
        try {
          e = s(t, 0, [2, 0], "06"), r = s(t, 0, [1], "04");
          try {
            n = s(t, 0, [3, 0], "03").substr(2)
          } catch (t) {}
        } catch (t) {
          throw "malformed PKCS#1/5 plain ECC private key"
        }
        if (this.curveName = o(e), void 0 === this.curveName) throw "unsupported curve name";
        this.setNamedCurve(this.curveName), this.setPublicKeyHex(n), this.setPrivateKeyHex(r), this.isPublic = !1
      }, this.readPKCS8PrvKeyHex = function (t) {
        var e, r, n, i = kr,
          o = Er.crypto.ECDSA.getName,
          s = i.getVbyList;
        if (!1 === i.isASN1HEX(t)) throw "not ASN.1 hex string";
        try {
          s(t, 0, [1, 0], "06"), e = s(t, 0, [1, 1], "06"), r = s(t, 0, [2, 0, 1], "04");
          try {
            n = s(t, 0, [2, 0, 2, 0], "03").substr(2)
          } catch (t) {}
        } catch (t) {
          throw "malformed PKCS#8 plain ECC private key"
        }
        if (this.curveName = o(e), void 0 === this.curveName) throw "unsupported curve name";
        this.setNamedCurve(this.curveName), this.setPublicKeyHex(n), this.setPrivateKeyHex(r), this.isPublic = !1
      }, this.readPKCS8PubKeyHex = function (t) {
        var e, r, n = kr,
          i = Er.crypto.ECDSA.getName,
          o = n.getVbyList;
        if (!1 === n.isASN1HEX(t)) throw "not ASN.1 hex string";
        try {
          o(t, 0, [0, 0], "06"), e = o(t, 0, [0, 1], "06"), r = o(t, 0, [1], "03").substr(2)
        } catch (t) {
          throw "malformed PKCS#8 ECC public key"
        }
        if (this.curveName = i(e), null === this.curveName) throw "unsupported curve name";
        this.setNamedCurve(this.curveName), this.setPublicKeyHex(r)
      }, this.readCertPubKeyHex = function (t, e) {
        5 !== e && (e = 6);
        var r, n, i = kr,
          o = Er.crypto.ECDSA.getName,
          s = i.getVbyList;
        if (!1 === i.isASN1HEX(t)) throw "not ASN.1 hex string";
        try {
          r = s(t, 0, [0, e, 0, 1], "06"), n = s(t, 0, [0, e, 1], "03").substr(2)
        } catch (t) {
          throw "malformed X.509 certificate ECC public key"
        }
        if (this.curveName = o(r), null === this.curveName) throw "unsupported curve name";
        this.setNamedCurve(this.curveName), this.setPublicKeyHex(n)
      }, void 0 !== t && void 0 !== t.curve && (this.curveName = t.curve), void 0 === this.curveName && (this.curveName = "secp256r1"), this.setNamedCurve(this.curveName), void 0 !== t && (void 0 !== t.prv && this.setPrivateKeyHex(t.prv), void 0 !== t.pub && this.setPublicKeyHex(t.pub))
    }, Er.crypto.ECDSA.parseSigHex = function (t) {
      var e = Er.crypto.ECDSA.parseSigHexInHexRS(t);
      return {
        r: new E(e.r, 16),
        s: new E(e.s, 16)
      }
    }, Er.crypto.ECDSA.parseSigHexInHexRS = function (t) {
      var e = kr,
        r = e.getChildIdx,
        n = e.getV;
      if ("30" != t.substr(0, 2)) throw "signature is not a ASN.1 sequence";
      var i = r(t, 0);
      if (2 != i.length) throw "number of signature ASN.1 sequence elements seem wrong";
      var o = i[0],
        s = i[1];
      if ("02" != t.substr(o, 2)) throw "1st item of sequene of signature is not ASN.1 integer";
      if ("02" != t.substr(s, 2)) throw "2nd item of sequene of signature is not ASN.1 integer";
      return {
        r: n(t, o),
        s: n(t, s)
      }
    }, Er.crypto.ECDSA.asn1SigToConcatSig = function (t) {
      var e = Er.crypto.ECDSA.parseSigHexInHexRS(t),
        r = e.r,
        n = e.s;
      if ("00" == r.substr(0, 2) && r.length % 32 == 2 && (r = r.substr(2)), "00" == n.substr(0, 2) && n.length % 32 == 2 && (n = n.substr(2)), r.length % 32 == 30 && (r = "00" + r), n.length % 32 == 30 && (n = "00" + n), r.length % 32 != 0) throw "unknown ECDSA sig r length error";
      if (n.length % 32 != 0) throw "unknown ECDSA sig s length error";
      return r + n
    }, Er.crypto.ECDSA.concatSigToASN1Sig = function (t) {
      if (t.length / 2 * 8 % 128 != 0) throw "unknown ECDSA concatinated r-s sig  length error";
      var e = t.substr(0, t.length / 2),
        r = t.substr(t.length / 2);
      return Er.crypto.ECDSA.hexRSSigToASN1Sig(e, r)
    }, Er.crypto.ECDSA.hexRSSigToASN1Sig = function (t, e) {
      var r = new E(t, 16),
        n = new E(e, 16);
      return Er.crypto.ECDSA.biRSSigToASN1Sig(r, n)
    }, Er.crypto.ECDSA.biRSSigToASN1Sig = function (t, e) {
      var r = Er.asn1,
        n = new r.DERInteger({
          bigint: t
        }),
        i = new r.DERInteger({
          bigint: e
        });
      return new r.DERSequence({
        array: [n, i]
      }).getEncodedHex()
    }, Er.crypto.ECDSA.getName = function (t) {
      return "2a8648ce3d030107" === t ? "secp256r1" : "2b8104000a" === t ? "secp256k1" : "2b81040022" === t ? "secp384r1" : -1 !== "|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(t) ? "secp256r1" : -1 !== "|secp256k1|".indexOf(t) ? "secp256k1" : -1 !== "|secp384r1|NIST P-384|P-384|".indexOf(t) ? "secp384r1" : null
    }, void 0 !== Er && Er || (e.KJUR = Er = {}), void 0 !== Er.crypto && Er.crypto || (Er.crypto = {}), Er.crypto.ECParameterDB = new function () {
      var t = {},
        e = {};

      function r(t) {
        return new E(t, 16)
      }
      this.getByName = function (r) {
        var n = r;
        if (void 0 !== e[n] && (n = e[r]), void 0 !== t[n]) return t[n];
        throw "unregistered EC curve name: " + n
      }, this.regist = function (n, i, o, s, a, u, c, f, h, l, p, d) {
        t[n] = {};
        var g = r(o),
          v = r(s),
          y = r(a),
          m = r(u),
          _ = r(c),
          S = new ze(g, v, y),
          b = S.decodePointHex("04" + f + h);
        t[n].name = n, t[n].keylen = i, t[n].curve = S, t[n].G = b, t[n].n = m, t[n].h = _, t[n].oid = p, t[n].info = d;
        for (var w = 0; w < l.length; w++) e[l[w]] = n
      }
    }, Er.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field"), Er.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field"), Er.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field"), Er.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []), Er.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []), Er.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []), Er.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []), Er.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", ["NIST P-256", "P-256", "prime256v1"]), Er.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", ["NIST P-384", "P-384"]), Er.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", ["NIST P-521", "P-521"]);
    var tn = function () {
      var t = function t(r, n, i) {
          return e(y.AES, r, n, i)
        },
        e = function t(e, r, n, i) {
          var o = y.enc.Hex.parse(r),
            s = y.enc.Hex.parse(n),
            a = y.enc.Hex.parse(i),
            u = {};
          u.key = s, u.iv = a, u.ciphertext = o;
          var c = e.decrypt(u, s, {
            iv: a
          });
          return y.enc.Hex.stringify(c)
        },
        r = function t(e, r, i) {
          return n(y.AES, e, r, i)
        },
        n = function t(e, r, n, i) {
          var o = y.enc.Hex.parse(r),
            s = y.enc.Hex.parse(n),
            a = y.enc.Hex.parse(i),
            u = e.encrypt(o, s, {
              iv: a
            }),
            c = y.enc.Hex.parse(u.toString());
          return y.enc.Base64.stringify(c)
        },
        i = {
          "AES-256-CBC": {
            proc: t,
            eproc: r,
            keylen: 32,
            ivlen: 16
          },
          "AES-192-CBC": {
            proc: t,
            eproc: r,
            keylen: 24,
            ivlen: 16
          },
          "AES-128-CBC": {
            proc: t,
            eproc: r,
            keylen: 16,
            ivlen: 16
          },
          "DES-EDE3-CBC": {
            proc: function t(r, n, i) {
              return e(y.TripleDES, r, n, i)
            },
            eproc: function t(e, r, i) {
              return n(y.TripleDES, e, r, i)
            },
            keylen: 24,
            ivlen: 8
          },
          "DES-CBC": {
            proc: function t(r, n, i) {
              return e(y.DES, r, n, i)
            },
            eproc: function t(e, r, i) {
              return n(y.DES, e, r, i)
            },
            keylen: 8,
            ivlen: 8
          }
        },
        o = function t(e) {
          var r = {},
            n = e.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
          n && (r.cipher = n[1], r.ivsalt = n[2]);
          var i = e.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
          i && (r.type = i[1]);
          var o = -1,
            s = 0; - 1 != e.indexOf("\r\n\r\n") && (o = e.indexOf("\r\n\r\n"), s = 2), -1 != e.indexOf("\n\n") && (o = e.indexOf("\n\n"), s = 1);
          var a = e.indexOf("-----END");
          if (-1 != o && -1 != a) {
            var u = e.substring(o + 2 * s, a - s);
            u = u.replace(/\s+/g, ""), r.data = u
          }
          return r
        },
        s = function t(e, r, n) {
          for (var o = n.substring(0, 16), s = y.enc.Hex.parse(o), a = y.enc.Utf8.parse(r), u = i[e].keylen + i[e].ivlen, c = "", f = null;;) {
            var h = y.algo.MD5.create();
            if (null != f && h.update(f), h.update(a), h.update(s), f = h.finalize(), (c += y.enc.Hex.stringify(f)).length >= 2 * u) break
          }
          var l = {};
          return l.keyhex = c.substr(0, 2 * i[e].keylen), l.ivhex = c.substr(2 * i[e].keylen, 2 * i[e].ivlen), l
        },
        a = function t(e, r, n, o) {
          var s = y.enc.Base64.parse(e),
            a = y.enc.Hex.stringify(s);
          return (0, i[r].proc)(a, n, o)
        };
      return {
        version: "1.0.0",
        parsePKCS5PEM: function t(e) {
          return o(e)
        },
        getKeyAndUnusedIvByPasscodeAndIvsalt: function t(e, r, n) {
          return s(e, r, n)
        },
        decryptKeyB64: function t(e, r, n, i) {
          return a(e, r, n, i)
        },
        getDecryptedKeyHex: function t(e, r) {
          var n = o(e),
            i = (n.type, n.cipher),
            u = n.ivsalt,
            c = n.data,
            f = s(i, r, u).keyhex;
          return a(c, i, f, u)
        },
        getEncryptedPKCS5PEMFromPrvKeyHex: function t(e, r, n, o, a) {
          var u = "";
          if (void 0 !== o && null != o || (o = "AES-256-CBC"), void 0 === i[o]) throw "KEYUTIL unsupported algorithm: " + o;
          void 0 !== a && null != a || (a = function t(e) {
            var r = y.lib.WordArray.random(e);
            return y.enc.Hex.stringify(r)
          }(i[o].ivlen).toUpperCase());
          var c = function t(e, r, n, o) {
            return (0, i[r].eproc)(e, n, o)
          }(r, o, s(o, n, a).keyhex, a);
          u = "-----BEGIN " + e + " PRIVATE KEY-----\r\n";
          return u += "Proc-Type: 4,ENCRYPTED\r\n", u += "DEK-Info: " + o + "," + a + "\r\n", u += "\r\n", u += c.replace(/(.{64})/g, "$1\r\n"), u += "\r\n-----END " + e + " PRIVATE KEY-----\r\n"
        },
        parseHexOfEncryptedPKCS8: function t(e) {
          var r = kr,
            n = r.getChildIdx,
            i = r.getV,
            o = {},
            s = n(e, 0);
          if (2 != s.length) throw "malformed format: SEQUENCE(0).items != 2: " + s.length;
          o.ciphertext = i(e, s[1]);
          var a = n(e, s[0]);
          if (2 != a.length) throw "malformed format: SEQUENCE(0.0).items != 2: " + a.length;
          if ("2a864886f70d01050d" != i(e, a[0])) throw "this only supports pkcs5PBES2";
          var u = n(e, a[1]);
          if (2 != a.length) throw "malformed format: SEQUENCE(0.0.1).items != 2: " + u.length;
          var c = n(e, u[1]);
          if (2 != c.length) throw "malformed format: SEQUENCE(0.0.1.1).items != 2: " + c.length;
          if ("2a864886f70d0307" != i(e, c[0])) throw "this only supports TripleDES";
          o.encryptionSchemeAlg = "TripleDES", o.encryptionSchemeIV = i(e, c[1]);
          var f = n(e, u[0]);
          if (2 != f.length) throw "malformed format: SEQUENCE(0.0.1.0).items != 2: " + f.length;
          if ("2a864886f70d01050c" != i(e, f[0])) throw "this only supports pkcs5PBKDF2";
          var h = n(e, f[1]);
          if (h.length < 2) throw "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + h.length;
          o.pbkdf2Salt = i(e, h[0]);
          var l = i(e, h[1]);
          try {
            o.pbkdf2Iter = parseInt(l, 16)
          } catch (t) {
            throw "malformed format pbkdf2Iter: " + l
          }
          return o
        },
        getPBKDF2KeyHexFromParam: function t(e, r) {
          var n = y.enc.Hex.parse(e.pbkdf2Salt),
            i = e.pbkdf2Iter,
            o = y.PBKDF2(r, n, {
              keySize: 6,
              iterations: i
            });
          return y.enc.Hex.stringify(o)
        },
        _getPlainPKCS8HexFromEncryptedPKCS8PEM: function t(e, r) {
          var n = qr(e, "ENCRYPTED PRIVATE KEY"),
            i = this.parseHexOfEncryptedPKCS8(n),
            o = tn.getPBKDF2KeyHexFromParam(i, r),
            s = {};
          s.ciphertext = y.enc.Hex.parse(i.ciphertext);
          var a = y.enc.Hex.parse(o),
            u = y.enc.Hex.parse(i.encryptionSchemeIV),
            c = y.TripleDES.decrypt(s, a, {
              iv: u
            });
          return y.enc.Hex.stringify(c)
        },
        getKeyFromEncryptedPKCS8PEM: function t(e, r) {
          var n = this._getPlainPKCS8HexFromEncryptedPKCS8PEM(e, r);
          return this.getKeyFromPlainPrivatePKCS8Hex(n)
        },
        parsePlainPrivatePKCS8Hex: function t(e) {
          var r = kr,
            n = r.getChildIdx,
            i = r.getV,
            o = {
              algparam: null
            };
          if ("30" != e.substr(0, 2)) throw "malformed plain PKCS8 private key(code:001)";
          var s = n(e, 0);
          if (3 != s.length) throw "malformed plain PKCS8 private key(code:002)";
          if ("30" != e.substr(s[1], 2)) throw "malformed PKCS8 private key(code:003)";
          var a = n(e, s[1]);
          if (2 != a.length) throw "malformed PKCS8 private key(code:004)";
          if ("06" != e.substr(a[0], 2)) throw "malformed PKCS8 private key(code:005)";
          if (o.algoid = i(e, a[0]), "06" == e.substr(a[1], 2) && (o.algparam = i(e, a[1])), "04" != e.substr(s[2], 2)) throw "malformed PKCS8 private key(code:006)";
          return o.keyidx = r.getVidx(e, s[2]), o
        },
        getKeyFromPlainPrivatePKCS8PEM: function t(e) {
          var r = qr(e, "PRIVATE KEY");
          return this.getKeyFromPlainPrivatePKCS8Hex(r)
        },
        getKeyFromPlainPrivatePKCS8Hex: function t(e) {
          var r, n = this.parsePlainPrivatePKCS8Hex(e);
          if ("2a864886f70d010101" == n.algoid) r = new qe;
          else if ("2a8648ce380401" == n.algoid) r = new Er.crypto.DSA;
          else {
            if ("2a8648ce3d0201" != n.algoid) throw "unsupported private key algorithm";
            r = new Er.crypto.ECDSA
          }
          return r.readPKCS8PrvKeyHex(e), r
        },
        _getKeyFromPublicPKCS8Hex: function t(e) {
          var r, n = kr.getVbyList(e, 0, [0, 0], "06");
          if ("2a864886f70d010101" === n) r = new qe;
          else if ("2a8648ce380401" === n) r = new Er.crypto.DSA;
          else {
            if ("2a8648ce3d0201" !== n) throw "unsupported PKCS#8 public key hex";
            r = new Er.crypto.ECDSA
          }
          return r.readPKCS8PubKeyHex(e), r
        },
        parsePublicRawRSAKeyHex: function t(e) {
          var r = kr,
            n = r.getChildIdx,
            i = r.getV,
            o = {};
          if ("30" != e.substr(0, 2)) throw "malformed RSA key(code:001)";
          var s = n(e, 0);
          if (2 != s.length) throw "malformed RSA key(code:002)";
          if ("02" != e.substr(s[0], 2)) throw "malformed RSA key(code:003)";
          if (o.n = i(e, s[0]), "02" != e.substr(s[1], 2)) throw "malformed RSA key(code:004)";
          return o.e = i(e, s[1]), o
        },
        parsePublicPKCS8Hex: function t(e) {
          var r = kr,
            n = r.getChildIdx,
            i = r.getV,
            o = {
              algparam: null
            },
            s = n(e, 0);
          if (2 != s.length) throw "outer DERSequence shall have 2 elements: " + s.length;
          var a = s[0];
          if ("30" != e.substr(a, 2)) throw "malformed PKCS8 public key(code:001)";
          var u = n(e, a);
          if (2 != u.length) throw "malformed PKCS8 public key(code:002)";
          if ("06" != e.substr(u[0], 2)) throw "malformed PKCS8 public key(code:003)";
          if (o.algoid = i(e, u[0]), "06" == e.substr(u[1], 2) ? o.algparam = i(e, u[1]) : "30" == e.substr(u[1], 2) && (o.algparam = {}, o.algparam.p = r.getVbyList(e, u[1], [0], "02"), o.algparam.q = r.getVbyList(e, u[1], [1], "02"), o.algparam.g = r.getVbyList(e, u[1], [2], "02")), "03" != e.substr(s[1], 2)) throw "malformed PKCS8 public key(code:004)";
          return o.key = i(e, s[1]).substr(2), o
        }
      }
    }();
    tn.getKey = function (t, e, r) {
      var n = (v = kr).getChildIdx,
        i = (v.getV, v.getVbyList),
        o = Er.crypto,
        s = o.ECDSA,
        a = o.DSA,
        u = qe,
        c = qr,
        f = tn;
      if (void 0 !== u && t instanceof u) return t;
      if (void 0 !== s && t instanceof s) return t;
      if (void 0 !== a && t instanceof a) return t;
      if (void 0 !== t.curve && void 0 !== t.xy && void 0 === t.d) return new s({
        pub: t.xy,
        curve: t.curve
      });
      if (void 0 !== t.curve && void 0 !== t.d) return new s({
        prv: t.d,
        curve: t.curve
      });
      if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) return (P = new u).setPublic(t.n, t.e), P;
      if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.co && void 0 === t.qi) return (P = new u).setPrivateEx(t.n, t.e, t.d, t.p, t.q, t.dp, t.dq, t.co), P;
      if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 === t.p) return (P = new u).setPrivate(t.n, t.e, t.d), P;
      if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 === t.x) return (P = new a).setPublic(t.p, t.q, t.g, t.y), P;
      if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 !== t.x) return (P = new a).setPrivate(t.p, t.q, t.g, t.y, t.x), P;
      if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) return (P = new u).setPublic(Nr(t.n), Nr(t.e)), P;
      if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.qi) return (P = new u).setPrivateEx(Nr(t.n), Nr(t.e), Nr(t.d), Nr(t.p), Nr(t.q), Nr(t.dp), Nr(t.dq), Nr(t.qi)), P;
      if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d) return (P = new u).setPrivate(Nr(t.n), Nr(t.e), Nr(t.d)), P;
      if ("EC" === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 === t.d) {
        var h = (k = new s({
            curve: t.crv
          })).ecparams.keylen / 4,
          l = "04" + ("0000000000" + Nr(t.x)).slice(-h) + ("0000000000" + Nr(t.y)).slice(-h);
        return k.setPublicKeyHex(l), k
      }
      if ("EC" === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 !== t.d) {
        h = (k = new s({
          curve: t.crv
        })).ecparams.keylen / 4, l = "04" + ("0000000000" + Nr(t.x)).slice(-h) + ("0000000000" + Nr(t.y)).slice(-h);
        var p = ("0000000000" + Nr(t.d)).slice(-h);
        return k.setPublicKeyHex(l), k.setPrivateKeyHex(p), k
      }
      if ("pkcs5prv" === r) {
        var d, g = t,
          v = kr;
        if (9 === (d = n(g, 0)).length)(P = new u).readPKCS5PrvKeyHex(g);
        else if (6 === d.length)(P = new a).readPKCS5PrvKeyHex(g);
        else {
          if (!(d.length > 2 && "04" === g.substr(d[1], 2))) throw "unsupported PKCS#1/5 hexadecimal key";
          (P = new s).readPKCS5PrvKeyHex(g)
        }
        return P
      }
      if ("pkcs8prv" === r) return P = f.getKeyFromPlainPrivatePKCS8Hex(t);
      if ("pkcs8pub" === r) return f._getKeyFromPublicPKCS8Hex(t);
      if ("x509pub" === r) return sn.getPublicKeyFromCertHex(t);
      if (-1 != t.indexOf("-END CERTIFICATE-", 0) || -1 != t.indexOf("-END X509 CERTIFICATE-", 0) || -1 != t.indexOf("-END TRUSTED CERTIFICATE-", 0)) return sn.getPublicKeyFromCertPEM(t);
      if (-1 != t.indexOf("-END PUBLIC KEY-")) {
        var y = qr(t, "PUBLIC KEY");
        return f._getKeyFromPublicPKCS8Hex(y)
      }
      if (-1 != t.indexOf("-END RSA PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
        var m = c(t, "RSA PRIVATE KEY");
        return f.getKey(m, null, "pkcs5prv")
      }
      if (-1 != t.indexOf("-END DSA PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
        var _ = i(R = c(t, "DSA PRIVATE KEY"), 0, [1], "02"),
          S = i(R, 0, [2], "02"),
          b = i(R, 0, [3], "02"),
          w = i(R, 0, [4], "02"),
          F = i(R, 0, [5], "02");
        return (P = new a).setPrivate(new E(_, 16), new E(S, 16), new E(b, 16), new E(w, 16), new E(F, 16)), P
      }
      if (-1 != t.indexOf("-END PRIVATE KEY-")) return f.getKeyFromPlainPrivatePKCS8PEM(t);
      if (-1 != t.indexOf("-END RSA PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
        var x = f.getDecryptedKeyHex(t, e),
          A = new qe;
        return A.readPKCS5PrvKeyHex(x), A
      }
      if (-1 != t.indexOf("-END EC PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
        var k, P = i(R = f.getDecryptedKeyHex(t, e), 0, [1], "04"),
          C = i(R, 0, [2, 0], "06"),
          T = i(R, 0, [3, 0], "03").substr(2);
        if (void 0 === Er.crypto.OID.oidhex2name[C]) throw "undefined OID(hex) in KJUR.crypto.OID: " + C;
        return (k = new s({
          curve: Er.crypto.OID.oidhex2name[C]
        })).setPublicKeyHex(T), k.setPrivateKeyHex(P), k.isPublic = !1, k
      }
      if (-1 != t.indexOf("-END DSA PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
        var R;
        _ = i(R = f.getDecryptedKeyHex(t, e), 0, [1], "02"), S = i(R, 0, [2], "02"), b = i(R, 0, [3], "02"), w = i(R, 0, [4], "02"), F = i(R, 0, [5], "02");
        return (P = new a).setPrivate(new E(_, 16), new E(S, 16), new E(b, 16), new E(w, 16), new E(F, 16)), P
      }
      if (-1 != t.indexOf("-END ENCRYPTED PRIVATE KEY-")) return f.getKeyFromEncryptedPKCS8PEM(t, e);
      throw "not supported argument"
    }, tn.generateKeypair = function (t, e) {
      if ("RSA" == t) {
        var r = e;
        (s = new qe).generate(r, "10001"), s.isPrivate = !0, s.isPublic = !0;
        var n = new qe,
          i = s.n.toString(16),
          o = s.e.toString(16);
        return n.setPublic(i, o), n.isPrivate = !1, n.isPublic = !0, (a = {}).prvKeyObj = s, a.pubKeyObj = n, a
      }
      if ("EC" == t) {
        var s, a, u = e,
          c = new Er.crypto.ECDSA({
            curve: u
          }).generateKeyPairHex();
        return (s = new Er.crypto.ECDSA({
          curve: u
        })).setPublicKeyHex(c.ecpubhex), s.setPrivateKeyHex(c.ecprvhex), s.isPrivate = !0, s.isPublic = !1, (n = new Er.crypto.ECDSA({
          curve: u
        })).setPublicKeyHex(c.ecpubhex), n.isPrivate = !1, n.isPublic = !0, (a = {}).prvKeyObj = s, a.pubKeyObj = n, a
      }
      throw "unknown algorithm: " + t
    }, tn.getPEM = function (t, e, r, n, i, o) {
      var s = Er,
        a = s.asn1,
        u = a.DERObjectIdentifier,
        c = a.DERInteger,
        f = a.ASN1Util.newObject,
        h = a.x509.SubjectPublicKeyInfo,
        l = s.crypto,
        p = l.DSA,
        d = l.ECDSA,
        g = qe;

      function v(t) {
        return f({
          seq: [{
            int: 0
          }, {
            int: {
              bigint: t.n
            }
          }, {
            int: t.e
          }, {
            int: {
              bigint: t.d
            }
          }, {
            int: {
              bigint: t.p
            }
          }, {
            int: {
              bigint: t.q
            }
          }, {
            int: {
              bigint: t.dmp1
            }
          }, {
            int: {
              bigint: t.dmq1
            }
          }, {
            int: {
              bigint: t.coeff
            }
          }]
        })
      }

      function m(t) {
        return f({
          seq: [{
            int: 1
          }, {
            octstr: {
              hex: t.prvKeyHex
            }
          }, {
            tag: ["a0", !0, {
              oid: {
                name: t.curveName
              }
            }]
          }, {
            tag: ["a1", !0, {
              bitstr: {
                hex: "00" + t.pubKeyHex
              }
            }]
          }]
        })
      }

      function _(t) {
        return f({
          seq: [{
            int: 0
          }, {
            int: {
              bigint: t.p
            }
          }, {
            int: {
              bigint: t.q
            }
          }, {
            int: {
              bigint: t.g
            }
          }, {
            int: {
              bigint: t.y
            }
          }, {
            int: {
              bigint: t.x
            }
          }]
        })
      }
      if ((void 0 !== g && t instanceof g || void 0 !== p && t instanceof p || void 0 !== d && t instanceof d) && 1 == t.isPublic && (void 0 === e || "PKCS8PUB" == e)) return Kr(F = new h(t).getEncodedHex(), "PUBLIC KEY");
      if ("PKCS1PRV" == e && void 0 !== g && t instanceof g && (void 0 === r || null == r) && 1 == t.isPrivate) return Kr(F = v(t).getEncodedHex(), "RSA PRIVATE KEY");
      if ("PKCS1PRV" == e && void 0 !== d && t instanceof d && (void 0 === r || null == r) && 1 == t.isPrivate) {
        var S = new u({
            name: t.curveName
          }).getEncodedHex(),
          b = m(t).getEncodedHex(),
          w = "";
        return w += Kr(S, "EC PARAMETERS"), w += Kr(b, "EC PRIVATE KEY")
      }
      if ("PKCS1PRV" == e && void 0 !== p && t instanceof p && (void 0 === r || null == r) && 1 == t.isPrivate) return Kr(F = _(t).getEncodedHex(), "DSA PRIVATE KEY");
      if ("PKCS5PRV" == e && void 0 !== g && t instanceof g && void 0 !== r && null != r && 1 == t.isPrivate) {
        var F = v(t).getEncodedHex();
        return void 0 === n && (n = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", F, r, n, o)
      }
      if ("PKCS5PRV" == e && void 0 !== d && t instanceof d && void 0 !== r && null != r && 1 == t.isPrivate) {
        F = m(t).getEncodedHex();
        return void 0 === n && (n = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", F, r, n, o)
      }
      if ("PKCS5PRV" == e && void 0 !== p && t instanceof p && void 0 !== r && null != r && 1 == t.isPrivate) {
        F = _(t).getEncodedHex();
        return void 0 === n && (n = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", F, r, n, o)
      }
      var E = function t(e, r) {
          var n = x(e, r);
          return new f({
            seq: [{
              seq: [{
                oid: {
                  name: "pkcs5PBES2"
                }
              }, {
                seq: [{
                  seq: [{
                    oid: {
                      name: "pkcs5PBKDF2"
                    }
                  }, {
                    seq: [{
                      octstr: {
                        hex: n.pbkdf2Salt
                      }
                    }, {
                      int: n.pbkdf2Iter
                    }]
                  }]
                }, {
                  seq: [{
                    oid: {
                      name: "des-EDE3-CBC"
                    }
                  }, {
                    octstr: {
                      hex: n.encryptionSchemeIV
                    }
                  }]
                }]
              }]
            }, {
              octstr: {
                hex: n.ciphertext
              }
            }]
          }).getEncodedHex()
        },
        x = function t(e, r) {
          var n = y.lib.WordArray.random(8),
            i = y.lib.WordArray.random(8),
            o = y.PBKDF2(r, n, {
              keySize: 6,
              iterations: 100
            }),
            s = y.enc.Hex.parse(e),
            a = y.TripleDES.encrypt(s, o, {
              iv: i
            }) + "",
            u = {};
          return u.ciphertext = a, u.pbkdf2Salt = y.enc.Hex.stringify(n), u.pbkdf2Iter = 100, u.encryptionSchemeAlg = "DES-EDE3-CBC", u.encryptionSchemeIV = y.enc.Hex.stringify(i), u
        };
      if ("PKCS8PRV" == e && void 0 != g && t instanceof g && 1 == t.isPrivate) {
        var A = v(t).getEncodedHex();
        F = f({
          seq: [{
            int: 0
          }, {
            seq: [{
              oid: {
                name: "rsaEncryption"
              }
            }, {
              null: !0
            }]
          }, {
            octstr: {
              hex: A
            }
          }]
        }).getEncodedHex();
        return void 0 === r || null == r ? Kr(F, "PRIVATE KEY") : Kr(b = E(F, r), "ENCRYPTED PRIVATE KEY")
      }
      if ("PKCS8PRV" == e && void 0 !== d && t instanceof d && 1 == t.isPrivate) {
        A = new f({
          seq: [{
            int: 1
          }, {
            octstr: {
              hex: t.prvKeyHex
            }
          }, {
            tag: ["a1", !0, {
              bitstr: {
                hex: "00" + t.pubKeyHex
              }
            }]
          }]
        }).getEncodedHex(), F = f({
          seq: [{
            int: 0
          }, {
            seq: [{
              oid: {
                name: "ecPublicKey"
              }
            }, {
              oid: {
                name: t.curveName
              }
            }]
          }, {
            octstr: {
              hex: A
            }
          }]
        }).getEncodedHex();
        return void 0 === r || null == r ? Kr(F, "PRIVATE KEY") : Kr(b = E(F, r), "ENCRYPTED PRIVATE KEY")
      }
      if ("PKCS8PRV" == e && void 0 !== p && t instanceof p && 1 == t.isPrivate) {
        A = new c({
          bigint: t.x
        }).getEncodedHex(), F = f({
          seq: [{
            int: 0
          }, {
            seq: [{
              oid: {
                name: "dsa"
              }
            }, {
              seq: [{
                int: {
                  bigint: t.p
                }
              }, {
                int: {
                  bigint: t.q
                }
              }, {
                int: {
                  bigint: t.g
                }
              }]
            }]
          }, {
            octstr: {
              hex: A
            }
          }]
        }).getEncodedHex();
        return void 0 === r || null == r ? Kr(F, "PRIVATE KEY") : Kr(b = E(F, r), "ENCRYPTED PRIVATE KEY")
      }
      throw "unsupported object nor format"
    }, tn.getKeyFromCSRPEM = function (t) {
      var e = qr(t, "CERTIFICATE REQUEST");
      return tn.getKeyFromCSRHex(e)
    }, tn.getKeyFromCSRHex = function (t) {
      var e = tn.parseCSRHex(t);
      return tn.getKey(e.p8pubkeyhex, null, "pkcs8pub")
    }, tn.parseCSRHex = function (t) {
      var e = kr,
        r = e.getChildIdx,
        n = e.getTLV,
        i = {},
        o = t;
      if ("30" != o.substr(0, 2)) throw "malformed CSR(code:001)";
      var s = r(o, 0);
      if (s.length < 1) throw "malformed CSR(code:002)";
      if ("30" != o.substr(s[0], 2)) throw "malformed CSR(code:003)";
      var a = r(o, s[0]);
      if (a.length < 3) throw "malformed CSR(code:004)";
      return i.p8pubkeyhex = n(o, a[2]), i
    }, tn.getJWKFromKey = function (t) {
      var e = {};
      if (t instanceof qe && t.isPrivate) return e.kty = "RSA", e.n = Dr(t.n.toString(16)), e.e = Dr(t.e.toString(16)), e.d = Dr(t.d.toString(16)), e.p = Dr(t.p.toString(16)), e.q = Dr(t.q.toString(16)), e.dp = Dr(t.dmp1.toString(16)), e.dq = Dr(t.dmq1.toString(16)), e.qi = Dr(t.coeff.toString(16)), e;
      if (t instanceof qe && t.isPublic) return e.kty = "RSA", e.n = Dr(t.n.toString(16)), e.e = Dr(t.e.toString(16)), e;
      if (t instanceof Er.crypto.ECDSA && t.isPrivate) {
        if ("P-256" !== (n = t.getShortNISTPCurveName()) && "P-384" !== n) throw "unsupported curve name for JWT: " + n;
        var r = t.getPublicKeyXYHex();
        return e.kty = "EC", e.crv = n, e.x = Dr(r.x), e.y = Dr(r.y), e.d = Dr(t.prvKeyHex), e
      }
      if (t instanceof Er.crypto.ECDSA && t.isPublic) {
        var n;
        if ("P-256" !== (n = t.getShortNISTPCurveName()) && "P-384" !== n) throw "unsupported curve name for JWT: " + n;
        r = t.getPublicKeyXYHex();
        return e.kty = "EC", e.crv = n, e.x = Dr(r.x), e.y = Dr(r.y), e
      }
      throw "not supported key object"
    }, qe.getPosArrayOfChildrenFromHex = function (t) {
      return kr.getChildIdx(t, 0)
    }, qe.getHexValueArrayOfChildrenFromHex = function (t) {
      var e, r = kr.getV,
        n = r(t, (e = qe.getPosArrayOfChildrenFromHex(t))[0]),
        i = r(t, e[1]),
        o = r(t, e[2]),
        s = r(t, e[3]),
        a = r(t, e[4]),
        u = r(t, e[5]),
        c = r(t, e[6]),
        f = r(t, e[7]),
        h = r(t, e[8]);
      return (e = new Array).push(n, i, o, s, a, u, c, f, h), e
    }, qe.prototype.readPrivateKeyFromPEMString = function (t) {
      var e = qr(t),
        r = qe.getHexValueArrayOfChildrenFromHex(e);
      this.setPrivateEx(r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8])
    }, qe.prototype.readPKCS5PrvKeyHex = function (t) {
      var e = qe.getHexValueArrayOfChildrenFromHex(t);
      this.setPrivateEx(e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8])
    }, qe.prototype.readPKCS8PrvKeyHex = function (t) {
      var e, r, n, i, o, s, a, u, c = kr,
        f = c.getVbyList;
      if (!1 === c.isASN1HEX(t)) throw "not ASN.1 hex string";
      try {
        e = f(t, 0, [2, 0, 1], "02"), r = f(t, 0, [2, 0, 2], "02"), n = f(t, 0, [2, 0, 3], "02"), i = f(t, 0, [2, 0, 4], "02"), o = f(t, 0, [2, 0, 5], "02"), s = f(t, 0, [2, 0, 6], "02"), a = f(t, 0, [2, 0, 7], "02"), u = f(t, 0, [2, 0, 8], "02")
      } catch (t) {
        throw "malformed PKCS#8 plain RSA private key"
      }
      this.setPrivateEx(e, r, n, i, o, s, a, u)
    }, qe.prototype.readPKCS5PubKeyHex = function (t) {
      var e = kr,
        r = e.getV;
      if (!1 === e.isASN1HEX(t)) throw "keyHex is not ASN.1 hex string";
      var n = e.getChildIdx(t, 0);
      if (2 !== n.length || "02" !== t.substr(n[0], 2) || "02" !== t.substr(n[1], 2)) throw "wrong hex for PKCS#5 public key";
      var i = r(t, n[0]),
        o = r(t, n[1]);
      this.setPublic(i, o)
    }, qe.prototype.readPKCS8PubKeyHex = function (t) {
      var e = kr;
      if (!1 === e.isASN1HEX(t)) throw "not ASN.1 hex string";
      if ("06092a864886f70d010101" !== e.getTLVbyList(t, 0, [0, 0])) throw "not PKCS8 RSA public key";
      var r = e.getTLVbyList(t, 0, [1, 0]);
      this.readPKCS5PubKeyHex(r)
    }, qe.prototype.readCertPubKeyHex = function (t, e) {
      var r, n;
      (r = new sn).readCertHex(t), n = r.getPublicKeyHex(), this.readPKCS8PubKeyHex(n)
    };
    var en = new RegExp("");

    function rn(t, e) {
      for (var r = "", n = e / 4 - t.length, i = 0; i < n; i++) r += "0";
      return r + t
    }

    function nn(t, e, r) {
      for (var n = "", i = 0; n.length < e;) n += jr(r(Ur(t + String.fromCharCode.apply(String, [(4278190080 & i) >> 24, (16711680 & i) >> 16, (65280 & i) >> 8, 255 & i])))), i += 1;
      return n
    }

    function on(t) {
      for (var e in Er.crypto.Util.DIGESTINFOHEAD) {
        var r = Er.crypto.Util.DIGESTINFOHEAD[e],
          n = r.length;
        if (t.substring(0, n) == r) return [e, t.substring(n)]
      }
      return []
    }

    function sn() {
      var t = kr,
        e = t.getChildIdx,
        r = t.getV,
        n = t.getTLV,
        i = t.getVbyList,
        o = t.getTLVbyList,
        s = t.getIdxbyList,
        a = t.getVidx,
        u = t.oidname,
        c = sn,
        f = qr;
      this.hex = null, this.version = 0, this.foffset = 0, this.aExtInfo = null, this.getVersion = function () {
        return null === this.hex || 0 !== this.version ? this.version : "a003020102" !== o(this.hex, 0, [0, 0]) ? (this.version = 1, this.foffset = -1, 1) : (this.version = 3, 3)
      }, this.getSerialNumberHex = function () {
        return i(this.hex, 0, [0, 1 + this.foffset], "02")
      }, this.getSignatureAlgorithmField = function () {
        return u(i(this.hex, 0, [0, 2 + this.foffset, 0], "06"))
      }, this.getIssuerHex = function () {
        return o(this.hex, 0, [0, 3 + this.foffset], "30")
      }, this.getIssuerString = function () {
        return c.hex2dn(this.getIssuerHex())
      }, this.getSubjectHex = function () {
        return o(this.hex, 0, [0, 5 + this.foffset], "30")
      }, this.getSubjectString = function () {
        return c.hex2dn(this.getSubjectHex())
      }, this.getNotBefore = function () {
        var t = i(this.hex, 0, [0, 4 + this.foffset, 0]);
        return t = t.replace(/(..)/g, "%$1"), t = decodeURIComponent(t)
      }, this.getNotAfter = function () {
        var t = i(this.hex, 0, [0, 4 + this.foffset, 1]);
        return t = t.replace(/(..)/g, "%$1"), t = decodeURIComponent(t)
      }, this.getPublicKeyHex = function () {
        return t.getTLVbyList(this.hex, 0, [0, 6 + this.foffset], "30")
      }, this.getPublicKeyIdx = function () {
        return s(this.hex, 0, [0, 6 + this.foffset], "30")
      }, this.getPublicKeyContentIdx = function () {
        var t = this.getPublicKeyIdx();
        return s(this.hex, t, [1, 0], "30")
      }, this.getPublicKey = function () {
        return tn.getKey(this.getPublicKeyHex(), null, "pkcs8pub")
      }, this.getSignatureAlgorithmName = function () {
        return u(i(this.hex, 0, [1, 0], "06"))
      }, this.getSignatureValueHex = function () {
        return i(this.hex, 0, [2], "03", !0)
      }, this.verifySignature = function (t) {
        var e = this.getSignatureAlgorithmName(),
          r = this.getSignatureValueHex(),
          n = o(this.hex, 0, [0], "30"),
          i = new Er.crypto.Signature({
            alg: e
          });
        return i.init(t), i.updateHex(n), i.verify(r)
      }, this.parseExt = function () {
        if (3 !== this.version) return -1;
        var r = s(this.hex, 0, [0, 7, 0], "30"),
          n = e(this.hex, r);
        this.aExtInfo = new Array;
        for (var o = 0; o < n.length; o++) {
          var u = {
              critical: !1
            },
            c = 0;
          3 === e(this.hex, n[o]).length && (u.critical = !0, c = 1), u.oid = t.hextooidstr(i(this.hex, n[o], [0], "06"));
          var f = s(this.hex, n[o], [1 + c]);
          u.vidx = a(this.hex, f), this.aExtInfo.push(u)
        }
      }, this.getExtInfo = function (t) {
        var e = this.aExtInfo,
          r = t;
        if (t.match(/^[0-9.]+$/) || (r = Er.asn1.x509.OID.name2oid(t)), "" !== r)
          for (var n = 0; n < e.length; n++)
            if (e[n].oid === r) return e[n]
      }, this.getExtBasicConstraints = function () {
        var t = this.getExtInfo("basicConstraints");
        if (void 0 === t) return t;
        var e = r(this.hex, t.vidx);
        if ("" === e) return {};
        if ("0101ff" === e) return {
          cA: !0
        };
        if ("0101ff02" === e.substr(0, 8)) {
          var n = r(e, 6);
          return {
            cA: !0,
            pathLen: parseInt(n, 16)
          }
        }
        throw "basicConstraints parse error"
      }, this.getExtKeyUsageBin = function () {
        var t = this.getExtInfo("keyUsage");
        if (void 0 === t) return "";
        var e = r(this.hex, t.vidx);
        if (e.length % 2 != 0 || e.length <= 2) throw "malformed key usage value";
        var n = parseInt(e.substr(0, 2)),
          i = parseInt(e.substr(2), 16).toString(2);
        return i.substr(0, i.length - n)
      }, this.getExtKeyUsageString = function () {
        for (var t = this.getExtKeyUsageBin(), e = new Array, r = 0; r < t.length; r++) "1" == t.substr(r, 1) && e.push(sn.KEYUSAGE_NAME[r]);
        return e.join(",")
      }, this.getExtSubjectKeyIdentifier = function () {
        var t = this.getExtInfo("subjectKeyIdentifier");
        return void 0 === t ? t : r(this.hex, t.vidx)
      }, this.getExtAuthorityKeyIdentifier = function () {
        var t = this.getExtInfo("authorityKeyIdentifier");
        if (void 0 === t) return t;
        for (var i = {}, o = n(this.hex, t.vidx), s = e(o, 0), a = 0; a < s.length; a++) "80" === o.substr(s[a], 2) && (i.kid = r(o, s[a]));
        return i
      }, this.getExtExtKeyUsageName = function () {
        var t = this.getExtInfo("extKeyUsage");
        if (void 0 === t) return t;
        var i = new Array,
          o = n(this.hex, t.vidx);
        if ("" === o) return i;
        for (var s = e(o, 0), a = 0; a < s.length; a++) i.push(u(r(o, s[a])));
        return i
      }, this.getExtSubjectAltName = function () {
        for (var t = this.getExtSubjectAltName2(), e = new Array, r = 0; r < t.length; r++) "DNS" === t[r][0] && e.push(t[r][1]);
        return e
      }, this.getExtSubjectAltName2 = function () {
        var t, i, o, s = this.getExtInfo("subjectAltName");
        if (void 0 === s) return s;
        for (var a = new Array, u = n(this.hex, s.vidx), c = e(u, 0), f = 0; f < c.length; f++) o = u.substr(c[f], 2), t = r(u, c[f]), "81" === o && (i = Mr(t), a.push(["MAIL", i])), "82" === o && (i = Mr(t), a.push(["DNS", i])), "84" === o && (i = sn.hex2dn(t, 0), a.push(["DN", i])), "86" === o && (i = Mr(t), a.push(["URI", i])), "87" === o && (i = $r(t), a.push(["IP", i]));
        return a
      }, this.getExtCRLDistributionPointsURI = function () {
        var t = this.getExtInfo("cRLDistributionPoints");
        if (void 0 === t) return t;
        for (var r = new Array, n = e(this.hex, t.vidx), o = 0; o < n.length; o++) try {
          var s = Mr(i(this.hex, n[o], [0, 0, 0], "86"));
          r.push(s)
        } catch (t) {}
        return r
      }, this.getExtAIAInfo = function () {
        var t = this.getExtInfo("authorityInfoAccess");
        if (void 0 === t) return t;
        for (var r = {
            ocsp: [],
            caissuer: []
          }, n = e(this.hex, t.vidx), o = 0; o < n.length; o++) {
          var s = i(this.hex, n[o], [0], "06"),
            a = i(this.hex, n[o], [1], "86");
          "2b06010505073001" === s && r.ocsp.push(Mr(a)), "2b06010505073002" === s && r.caissuer.push(Mr(a))
        }
        return r
      }, this.getExtCertificatePolicies = function () {
        var t = this.getExtInfo("certificatePolicies");
        if (void 0 === t) return t;
        for (var o = n(this.hex, t.vidx), s = [], a = e(o, 0), c = 0; c < a.length; c++) {
          var f = {},
            h = e(o, a[c]);
          if (f.id = u(r(o, h[0])), 2 === h.length)
            for (var l = e(o, h[1]), p = 0; p < l.length; p++) {
              var d = i(o, l[p], [0], "06");
              "2b06010505070201" === d ? f.cps = Mr(i(o, l[p], [1])) : "2b06010505070202" === d && (f.unotice = Mr(i(o, l[p], [1, 0])))
            }
          s.push(f)
        }
        return s
      }, this.readCertPEM = function (t) {
        this.readCertHex(f(t))
      }, this.readCertHex = function (t) {
        this.hex = t, this.getVersion();
        try {
          s(this.hex, 0, [0, 7], "a3"), this.parseExt()
        } catch (t) {}
      }, this.getInfo = function () {
        var t, e, r;
        if (t = "Basic Fields\n", t += "  serial number: " + this.getSerialNumberHex() + "\n", t += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n", t += "  issuer: " + this.getIssuerString() + "\n", t += "  notBefore: " + this.getNotBefore() + "\n", t += "  notAfter: " + this.getNotAfter() + "\n", t += "  subject: " + this.getSubjectString() + "\n", t += "  subject public key info: \n", t += "    key algorithm: " + (e = this.getPublicKey()).type + "\n", "RSA" === e.type && (t += "    n=" + Zr(e.n.toString(16)).substr(0, 16) + "...\n", t += "    e=" + Zr(e.e.toString(16)) + "\n"), void 0 !== (r = this.aExtInfo) && null !== r) {
          t += "X509v3 Extensions:\n";
          for (var n = 0; n < r.length; n++) {
            var i = r[n],
              o = Er.asn1.x509.OID.oid2name(i.oid);
            "" === o && (o = i.oid);
            var s = "";
            if (!0 === i.critical && (s = "CRITICAL"), t += "  " + o + " " + s + ":\n", "basicConstraints" === o) {
              var a = this.getExtBasicConstraints();
              void 0 === a.cA ? t += "    {}\n" : (t += "    cA=true", void 0 !== a.pathLen && (t += ", pathLen=" + a.pathLen), t += "\n")
            } else if ("keyUsage" === o) t += "    " + this.getExtKeyUsageString() + "\n";
            else if ("subjectKeyIdentifier" === o) t += "    " + this.getExtSubjectKeyIdentifier() + "\n";
            else if ("authorityKeyIdentifier" === o) {
              var u = this.getExtAuthorityKeyIdentifier();
              void 0 !== u.kid && (t += "    kid=" + u.kid + "\n")
            } else {
              if ("extKeyUsage" === o) t += "    " + this.getExtExtKeyUsageName().join(", ") + "\n";
              else if ("subjectAltName" === o) t += "    " + this.getExtSubjectAltName2() + "\n";
              else if ("cRLDistributionPoints" === o) t += "    " + this.getExtCRLDistributionPointsURI() + "\n";
              else if ("authorityInfoAccess" === o) {
                var c = this.getExtAIAInfo();
                void 0 !== c.ocsp && (t += "    ocsp: " + c.ocsp.join(",") + "\n"), void 0 !== c.caissuer && (t += "    caissuer: " + c.caissuer.join(",") + "\n")
              } else if ("certificatePolicies" === o)
                for (var f = this.getExtCertificatePolicies(), h = 0; h < f.length; h++) void 0 !== f[h].id && (t += "    policy oid: " + f[h].id + "\n"), void 0 !== f[h].cps && (t += "    cps: " + f[h].cps + "\n")
            }
          }
        }
        return t += "signature algorithm: " + this.getSignatureAlgorithmName() + "\n", t += "signature: " + this.getSignatureValueHex().substr(0, 16) + "...\n"
      }
    }
    en.compile("[^0-9a-f]", "gi"), qe.prototype.sign = function (t, e) {
      var r = function t(r) {
        return Er.crypto.Util.hashString(r, e)
      }(t);
      return this.signWithMessageHash(r, e)
    }, qe.prototype.signWithMessageHash = function (t, e) {
      var r = Ve(Er.crypto.Util.getPaddedDigestInfoHex(t, e, this.n.bitLength()), 16);
      return rn(this.doPrivate(r).toString(16), this.n.bitLength())
    }, qe.prototype.signPSS = function (t, e, r) {
      var n = function t(r) {
        return Er.crypto.Util.hashHex(r, e)
      }(Ur(t));
      return void 0 === r && (r = -1), this.signWithMessageHashPSS(n, e, r)
    }, qe.prototype.signWithMessageHashPSS = function (t, e, r) {
      var n, i = jr(t),
        o = i.length,
        s = this.n.bitLength() - 1,
        a = Math.ceil(s / 8),
        u = function t(r) {
          return Er.crypto.Util.hashHex(r, e)
        };
      if (-1 === r || void 0 === r) r = o;
      else if (-2 === r) r = a - o - 2;
      else if (r < -2) throw "invalid salt length";
      if (a < o + r + 2) throw "data too long";
      var c = "";
      r > 0 && (c = new Array(r), (new He).nextBytes(c), c = String.fromCharCode.apply(String, c));
      var f = jr(u(Ur("\0\0\0\0\0\0\0\0" + i + c))),
        h = [];
      for (n = 0; n < a - r - o - 2; n += 1) h[n] = 0;
      var l = String.fromCharCode.apply(String, h) + "" + c,
        p = nn(f, l.length, u),
        d = [];
      for (n = 0; n < l.length; n += 1) d[n] = l.charCodeAt(n) ^ p.charCodeAt(n);
      var g = 65280 >> 8 * a - s & 255;
      for (d[0] &= ~g, n = 0; n < o; n++) d.push(f.charCodeAt(n));
      return d.push(188), rn(this.doPrivate(new E(d)).toString(16), this.n.bitLength())
    }, qe.prototype.verify = function (t, e) {
      var r = Ve(e = (e = e.replace(en, "")).replace(/[ \n]+/g, ""), 16);
      if (r.bitLength() > this.n.bitLength()) return 0;
      var n = on(this.doPublic(r).toString(16).replace(/^1f+00/, ""));
      if (0 == n.length) return !1;
      var i = n[0];
      return n[1] == function t(e) {
        return Er.crypto.Util.hashString(e, i)
      }(t)
    }, qe.prototype.verifyWithMessageHash = function (t, e) {
      var r = Ve(e = (e = e.replace(en, "")).replace(/[ \n]+/g, ""), 16);
      if (r.bitLength() > this.n.bitLength()) return 0;
      var n = on(this.doPublic(r).toString(16).replace(/^1f+00/, ""));
      if (0 == n.length) return !1;
      n[0];
      return n[1] == t
    }, qe.prototype.verifyPSS = function (t, e, r, n) {
      var i = function t(e) {
        return Er.crypto.Util.hashHex(e, r)
      }(Ur(t));
      return void 0 === n && (n = -1), this.verifyWithMessageHashPSS(i, e, r, n)
    }, qe.prototype.verifyWithMessageHashPSS = function (t, e, r, n) {
      var i = new E(e, 16);
      if (i.bitLength() > this.n.bitLength()) return !1;
      var o, s = function t(e) {
          return Er.crypto.Util.hashHex(e, r)
        },
        a = jr(t),
        u = a.length,
        c = this.n.bitLength() - 1,
        f = Math.ceil(c / 8);
      if (-1 === n || void 0 === n) n = u;
      else if (-2 === n) n = f - u - 2;
      else if (n < -2) throw "invalid salt length";
      if (f < u + n + 2) throw "data too long";
      var h = this.doPublic(i).toByteArray();
      for (o = 0; o < h.length; o += 1) h[o] &= 255;
      for (; h.length < f;) h.unshift(0);
      if (188 !== h[f - 1]) throw "encoded message does not end in 0xbc";
      var l = (h = String.fromCharCode.apply(String, h)).substr(0, f - u - 1),
        p = h.substr(l.length, u),
        d = 65280 >> 8 * f - c & 255;
      if (0 != (l.charCodeAt(0) & d)) throw "bits beyond keysize not zero";
      var g = nn(p, l.length, s),
        v = [];
      for (o = 0; o < l.length; o += 1) v[o] = l.charCodeAt(o) ^ g.charCodeAt(o);
      v[0] &= ~d;
      var y = f - u - n - 2;
      for (o = 0; o < y; o += 1)
        if (0 !== v[o]) throw "leftmost octets not zero";
      if (1 !== v[y]) throw "0x01 marker not found";
      return p === jr(s(Ur("\0\0\0\0\0\0\0\0" + a + String.fromCharCode.apply(String, v.slice(-n)))))
    }, qe.SALT_LEN_HLEN = -1, qe.SALT_LEN_MAX = -2, qe.SALT_LEN_RECOVER = -2, sn.hex2dn = function (t, e) {
      if (void 0 === e && (e = 0), "30" !== t.substr(e, 2)) throw "malformed DN";
      for (var r = new Array, n = kr.getChildIdx(t, e), i = 0; i < n.length; i++) r.push(sn.hex2rdn(t, n[i]));
      return "/" + (r = r.map(function (t) {
        return t.replace("/", "\\/")
      })).join("/")
    }, sn.hex2rdn = function (t, e) {
      if (void 0 === e && (e = 0), "31" !== t.substr(e, 2)) throw "malformed RDN";
      for (var r = new Array, n = kr.getChildIdx(t, e), i = 0; i < n.length; i++) r.push(sn.hex2attrTypeValue(t, n[i]));
      return (r = r.map(function (t) {
        return t.replace("+", "\\+")
      })).join("+")
    }, sn.hex2attrTypeValue = function (t, e) {
      var r = kr,
        n = r.getV;
      if (void 0 === e && (e = 0), "30" !== t.substr(e, 2)) throw "malformed attribute type and value";
      var i = r.getChildIdx(t, e);
      2 !== i.length || t.substr(i[0], 2);
      var o = n(t, i[0]),
        s = Er.asn1.ASN1Util.oidHexToInt(o);
      return Er.asn1.x509.OID.oid2atype(s) + "=" + jr(n(t, i[1]))
    }, sn.getPublicKeyFromCertHex = function (t) {
      var e = new sn;
      return e.readCertHex(t), e.getPublicKey()
    }, sn.getPublicKeyFromCertPEM = function (t) {
      var e = new sn;
      return e.readCertPEM(t), e.getPublicKey()
    }, sn.getPublicKeyInfoPropOfCertPEM = function (t) {
      var e, r, n = kr.getVbyList,
        i = {};
      return i.algparam = null, (e = new sn).readCertPEM(t), r = e.getPublicKeyHex(), i.keyhex = n(r, 0, [1], "03").substr(2), i.algoid = n(r, 0, [0, 0], "06"), "2a8648ce3d0201" === i.algoid && (i.algparam = n(r, 0, [0, 1], "06")), i
    }, sn.KEYUSAGE_NAME = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"], void 0 !== Er && Er || (e.KJUR = Er = {}), void 0 !== Er.jws && Er.jws || (Er.jws = {}), Er.jws.JWS = function () {
      var t = Er.jws.JWS.isSafeJSONString;
      this.parseJWS = function (e, r) {
        if (void 0 === this.parsedJWS || !r && void 0 === this.parsedJWS.sigvalH) {
          var n = e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
          if (null == n) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
          var i = n[1],
            o = n[2],
            s = n[3],
            a = i + "." + o;
          if (this.parsedJWS = {}, this.parsedJWS.headB64U = i, this.parsedJWS.payloadB64U = o, this.parsedJWS.sigvalB64U = s, this.parsedJWS.si = a, !r) {
            var u = Nr(s),
              c = Ve(u, 16);
            this.parsedJWS.sigvalH = u, this.parsedJWS.sigvalBI = c
          }
          var f = Ar(i),
            h = Ar(o);
          if (this.parsedJWS.headS = f, this.parsedJWS.payloadS = h, !t(f, this.parsedJWS, "headP")) throw "malformed JSON string for JWS Head: " + f
        }
      }
    }, Er.jws.JWS.sign = function (t, e, n, i, o) {
      var s, a, u, c = Er,
        f = c.jws.JWS,
        h = f.readSafeJSONString,
        l = f.isSafeJSONString,
        p = c.crypto,
        d = (p.ECDSA, p.Mac),
        g = p.Signature,
        v = JSON;
      if ("string" != typeof e && "object" != (void 0 === e ? "undefined" : r(e))) throw "spHeader must be JSON string or object: " + e;
      if ("object" == (void 0 === e ? "undefined" : r(e)) && (a = e, s = v.stringify(a)), "string" == typeof e) {
        if (!l(s = e)) throw "JWS Head is not safe JSON string: " + s;
        a = h(s)
      }
      if (u = n, "object" == (void 0 === n ? "undefined" : r(n)) && (u = v.stringify(n)), "" != t && null != t || void 0 === a.alg || (t = a.alg), "" != t && null != t && void 0 === a.alg && (a.alg = t, s = v.stringify(a)), t !== a.alg) throw "alg and sHeader.alg doesn't match: " + t + "!=" + a.alg;
      var y = null;
      if (void 0 === f.jwsalg2sigalg[t]) throw "unsupported alg name: " + t;
      y = f.jwsalg2sigalg[t];
      var m = xr(s) + "." + xr(u),
        _ = "";
      if ("Hmac" == y.substr(0, 4)) {
        if (void 0 === i) throw "mac key shall be specified for HS* alg";
        var S = new d({
          alg: y,
          prov: "cryptojs",
          pass: i
        });
        S.updateString(m), _ = S.doFinal()
      } else {
        var b;
        if (-1 != y.indexOf("withECDSA"))(b = new g({
          alg: y
        })).init(i, o), b.updateString(m), hASN1Sig = b.sign(), _ = Er.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig);
        else if ("none" != y)(b = new g({
          alg: y
        })).init(i, o), b.updateString(m), _ = b.sign()
      }
      return m + "." + Dr(_)
    }, Er.jws.JWS.verify = function (t, e, n) {
      var i, o = Er,
        s = o.jws.JWS,
        a = s.readSafeJSONString,
        u = o.crypto,
        c = u.ECDSA,
        f = u.Mac,
        h = u.Signature;
      void 0 !== r(qe) && (i = qe);
      var l = t.split(".");
      if (3 !== l.length) return !1;
      var p = l[0] + "." + l[1],
        d = Nr(l[2]),
        g = a(Ar(l[0])),
        v = null,
        y = null;
      if (void 0 === g.alg) throw "algorithm not specified in header";
      if ((y = (v = g.alg).substr(0, 2), null != n && "[object Array]" === Object.prototype.toString.call(n) && n.length > 0) && -1 == (":" + n.join(":") + ":").indexOf(":" + v + ":")) throw "algorithm '" + v + "' not accepted in the list";
      if ("none" != v && null === e) throw "key shall be specified to verify.";
      if ("string" == typeof e && -1 != e.indexOf("-----BEGIN ") && (e = tn.getKey(e)), !("RS" != y && "PS" != y || e instanceof i)) throw "key shall be a RSAKey obj for RS* and PS* algs";
      if ("ES" == y && !(e instanceof c)) throw "key shall be a ECDSA obj for ES* algs";
      var m = null;
      if (void 0 === s.jwsalg2sigalg[g.alg]) throw "unsupported alg name: " + v;
      if ("none" == (m = s.jwsalg2sigalg[v])) throw "not supported";
      if ("Hmac" == m.substr(0, 4)) {
        if (void 0 === e) throw "hexadecimal key shall be specified for HMAC";
        var _ = new f({
          alg: m,
          pass: e
        });
        return _.updateString(p), d == _.doFinal()
      }
      if (-1 != m.indexOf("withECDSA")) {
        var S, b = null;
        try {
          b = c.concatSigToASN1Sig(d)
        } catch (t) {
          return !1
        }
        return (S = new h({
          alg: m
        })).init(e), S.updateString(p), S.verify(b)
      }
      return (S = new h({
        alg: m
      })).init(e), S.updateString(p), S.verify(d)
    }, Er.jws.JWS.parse = function (t) {
      var e, r, n, i = t.split("."),
        o = {};
      if (2 != i.length && 3 != i.length) throw "malformed sJWS: wrong number of '.' splitted elements";
      return e = i[0], r = i[1], 3 == i.length && (n = i[2]), o.headerObj = Er.jws.JWS.readSafeJSONString(Ar(e)), o.payloadObj = Er.jws.JWS.readSafeJSONString(Ar(r)), o.headerPP = JSON.stringify(o.headerObj, null, "  "), null == o.payloadObj ? o.payloadPP = Ar(r) : o.payloadPP = JSON.stringify(o.payloadObj, null, "  "), void 0 !== n && (o.sigHex = Nr(n)), o
    }, Er.jws.JWS.verifyJWT = function (t, e, n) {
      var i = Er.jws,
        o = i.JWS,
        s = o.readSafeJSONString,
        a = o.inArray,
        u = o.includedArray,
        c = t.split("."),
        f = c[0],
        h = c[1],
        l = (Nr(c[2]), s(Ar(f))),
        p = s(Ar(h));
      if (void 0 === l.alg) return !1;
      if (void 0 === n.alg) throw "acceptField.alg shall be specified";
      if (!a(l.alg, n.alg)) return !1;
      if (void 0 !== p.iss && "object" === r(n.iss) && !a(p.iss, n.iss)) return !1;
      if (void 0 !== p.sub && "object" === r(n.sub) && !a(p.sub, n.sub)) return !1;
      if (void 0 !== p.aud && "object" === r(n.aud))
        if ("string" == typeof p.aud) {
          if (!a(p.aud, n.aud)) return !1
        } else if ("object" == r(p.aud) && !u(p.aud, n.aud)) return !1;
      var d = i.IntDate.getNow();
      return void 0 !== n.verifyAt && "number" == typeof n.verifyAt && (d = n.verifyAt), void 0 !== n.gracePeriod && "number" == typeof n.gracePeriod || (n.gracePeriod = 0), !(void 0 !== p.exp && "number" == typeof p.exp && p.exp + n.gracePeriod < d) && (!(void 0 !== p.nbf && "number" == typeof p.nbf && d < p.nbf - n.gracePeriod) && (!(void 0 !== p.iat && "number" == typeof p.iat && d < p.iat - n.gracePeriod) && ((void 0 === p.jti || void 0 === n.jti || p.jti === n.jti) && !!o.verify(t, e, n.alg))))
    }, Er.jws.JWS.includedArray = function (t, e) {
      var n = Er.jws.JWS.inArray;
      if (null === t) return !1;
      if ("object" !== (void 0 === t ? "undefined" : r(t))) return !1;
      if ("number" != typeof t.length) return !1;
      for (var i = 0; i < t.length; i++)
        if (!n(t[i], e)) return !1;
      return !0
    }, Er.jws.JWS.inArray = function (t, e) {
      if (null === e) return !1;
      if ("object" !== (void 0 === e ? "undefined" : r(e))) return !1;
      if ("number" != typeof e.length) return !1;
      for (var n = 0; n < e.length; n++)
        if (e[n] == t) return !0;
      return !1
    }, Er.jws.JWS.jwsalg2sigalg = {
      HS256: "HmacSHA256",
      HS384: "HmacSHA384",
      HS512: "HmacSHA512",
      RS256: "SHA256withRSA",
      RS384: "SHA384withRSA",
      RS512: "SHA512withRSA",
      ES256: "SHA256withECDSA",
      ES384: "SHA384withECDSA",
      PS256: "SHA256withRSAandMGF1",
      PS384: "SHA384withRSAandMGF1",
      PS512: "SHA512withRSAandMGF1",
      none: "none"
    }, Er.jws.JWS.isSafeJSONString = function (t, e, n) {
      var i = null;
      try {
        return "object" != (void 0 === (i = Fr(t)) ? "undefined" : r(i)) ? 0 : i.constructor === Array ? 0 : (e && (e[n] = i), 1)
      } catch (t) {
        return 0
      }
    }, Er.jws.JWS.readSafeJSONString = function (t) {
      var e = null;
      try {
        return "object" != (void 0 === (e = Fr(t)) ? "undefined" : r(e)) ? null : e.constructor === Array ? null : e
      } catch (t) {
        return null
      }
    }, Er.jws.JWS.getEncodedSignatureValueFromJWS = function (t) {
      var e = t.match(/^[^.]+\.[^.]+\.([^.]+)$/);
      if (null == e) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
      return e[1]
    }, Er.jws.JWS.getJWKthumbprint = function (t) {
      if ("RSA" !== t.kty && "EC" !== t.kty && "oct" !== t.kty) throw "unsupported algorithm for JWK Thumprint";
      var e = "{";
      if ("RSA" === t.kty) {
        if ("string" != typeof t.n || "string" != typeof t.e) throw "wrong n and e value for RSA key";
        e += '"e":"' + t.e + '",', e += '"kty":"' + t.kty + '",', e += '"n":"' + t.n + '"}'
      } else if ("EC" === t.kty) {
        if ("string" != typeof t.crv || "string" != typeof t.x || "string" != typeof t.y) throw "wrong crv, x and y value for EC key";
        e += '"crv":"' + t.crv + '",', e += '"kty":"' + t.kty + '",', e += '"x":"' + t.x + '",', e += '"y":"' + t.y + '"}'
      } else if ("oct" === t.kty) {
        if ("string" != typeof t.k) throw "wrong k value for oct(symmetric) key";
        e += '"kty":"' + t.kty + '",', e += '"k":"' + t.k + '"}'
      }
      var r = Ur(e);
      return Dr(Er.crypto.Util.hashHex(r, "sha256"))
    }, Er.jws.IntDate = {}, Er.jws.IntDate.get = function (t) {
      var e = Er.jws.IntDate,
        r = e.getNow,
        n = e.getZulu;
      if ("now" == t) return r();
      if ("now + 1hour" == t) return r() + 3600;
      if ("now + 1day" == t) return r() + 86400;
      if ("now + 1month" == t) return r() + 2592e3;
      if ("now + 1year" == t) return r() + 31536e3;
      if (t.match(/Z$/)) return n(t);
      if (t.match(/^[0-9]+$/)) return parseInt(t);
      throw "unsupported format: " + t
    }, Er.jws.IntDate.getZulu = function (t) {
      return Jr(t)
    }, Er.jws.IntDate.getNow = function () {
      return ~~(new Date / 1e3)
    }, Er.jws.IntDate.intDate2UTCString = function (t) {
      return new Date(1e3 * t).toUTCString()
    }, Er.jws.IntDate.intDate2Zulu = function (t) {
      var e = new Date(1e3 * t);
      return ("0000" + e.getUTCFullYear()).slice(-4) + ("00" + (e.getUTCMonth() + 1)).slice(-2) + ("00" + e.getUTCDate()).slice(-2) + ("00" + e.getUTCHours()).slice(-2) + ("00" + e.getUTCMinutes()).slice(-2) + ("00" + e.getUTCSeconds()).slice(-2) + "Z"
    }, e.SecureRandom = He, e.rng_seed_time = Ne, e.BigInteger = E, e.RSAKey = qe;
    var an = Er.crypto.EDSA;
    e.EDSA = an;
    var un = Er.crypto.DSA;
    e.DSA = un;
    var cn = Er.crypto.Signature;
    e.Signature = cn;
    var fn = Er.crypto.MessageDigest;
    e.MessageDigest = fn;
    var hn = Er.crypto.Mac;
    e.Mac = hn;
    var ln = Er.crypto.Cipher;
    e.Cipher = ln, e.KEYUTIL = tn, e.ASN1HEX = kr, e.X509 = sn, e.CryptoJS = y, e.b64tohex = w, e.b64toBA = F, e.stoBA = Pr, e.BAtos = Cr, e.BAtohex = Tr, e.stohex = Rr, e.stob64 = function pn(t) {
      return b(Rr(t))
    }, e.stob64u = function dn(t) {
      return Ir(b(Rr(t)))
    }, e.b64utos = function gn(t) {
      return Cr(F(Or(t)))
    }, e.b64tob64u = Ir, e.b64utob64 = Or, e.hex2b64 = b, e.hextob64u = Dr, e.b64utohex = Nr, e.utf8tob64u = xr, e.b64utoutf8 = Ar, e.utf8tob64 = function vn(t) {
      return b(zr(Qr(t)))
    }, e.b64toutf8 = function yn(t) {
      return decodeURIComponent(Yr(w(t)))
    }, e.utf8tohex = Lr, e.hextoutf8 = Mr, e.hextorstr = jr, e.rstrtohex = Ur, e.hextob64 = Br, e.hextob64nl = Hr, e.b64nltohex = Vr, e.hextopem = Kr, e.pemtohex = qr, e.hextoArrayBuffer = function mn(t) {
      if (t.length % 2 != 0) throw "input is not even length";
      if (null == t.match(/^[0-9A-Fa-f]+$/)) throw "input is not hexadecimal";
      for (var e = new ArrayBuffer(t.length / 2), r = new DataView(e), n = 0; n < t.length / 2; n++) r.setUint8(n, parseInt(t.substr(2 * n, 2), 16));
      return e
    }, e.ArrayBuffertohex = function _n(t) {
      for (var e = "", r = new DataView(t), n = 0; n < t.byteLength; n++) e += ("00" + r.getUint8(n).toString(16)).slice(-2);
      return e
    }, e.zulutomsec = Wr, e.zulutosec = Jr, e.zulutodate = function Sn(t) {
      return new Date(Wr(t))
    }, e.datetozulu = function bn(t, e, r) {
      var n, i = t.getUTCFullYear();
      if (e) {
        if (i < 1950 || 2049 < i) throw "not proper year for UTCTime: " + i;
        n = ("" + i).slice(-2)
      } else n = ("000" + i).slice(-4);
      if (n += ("0" + (t.getUTCMonth() + 1)).slice(-2), n += ("0" + t.getUTCDate()).slice(-2), n += ("0" + t.getUTCHours()).slice(-2), n += ("0" + t.getUTCMinutes()).slice(-2), n += ("0" + t.getUTCSeconds()).slice(-2), r) {
        var o = t.getUTCMilliseconds();
        0 !== o && (n += "." + (o = (o = ("00" + o).slice(-3)).replace(/0+$/g, "")))
      }
      return n += "Z"
    }, e.uricmptohex = zr, e.hextouricmp = Yr, e.ipv6tohex = Gr, e.hextoipv6 = Xr, e.hextoip = $r, e.iptohex = function wn(t) {
      var e = "malformed IP address";
      if (!(t = t.toLowerCase(t)).match(/^[0-9.]+$/)) {
        if (t.match(/^[0-9a-f:]+$/) && -1 !== t.indexOf(":")) return Gr(t);
        throw e
      }
      var r = t.split(".");
      if (4 !== r.length) throw e;
      var n = "";
      try {
        for (var i = 0; i < 4; i++) n += ("0" + parseInt(r[i]).toString(16)).slice(-2);
        return n
      } catch (t) {
        throw e
      }
    }, e.encodeURIComponentAll = Qr, e.newline_toUnix = function Fn(t) {
      return t = t.replace(/\r\n/gm, "\n")
    }, e.newline_toDos = function En(t) {
      return t = (t = t.replace(/\r\n/gm, "\n")).replace(/\n/gm, "\r\n")
    }, e.hextoposhex = Zr, e.intarystrtohex = function xn(t) {
      t = (t = (t = t.replace(/^\s*\[\s*/, "")).replace(/\s*\]\s*$/, "")).replace(/\s*/g, "");
      try {
        return t.split(/,/).map(function (t, e, r) {
          var n = parseInt(t);
          if (n < 0 || 255 < n) throw "integer not in range 0-255";
          return ("00" + n.toString(16)).slice(-2)
        }).join("")
      } catch (t) {
        throw "malformed integer array string: " + t
      }
    }, e.strdiffidx = function t(e, r) {
      var n = e.length;
      e.length > r.length && (n = r.length);
      for (var i = 0; i < n; i++)
        if (e.charCodeAt(i) != r.charCodeAt(i)) return i;
      return e.length != r.length ? n : -1
    }, e.KJUR = Er;
    var An = Er.crypto;
    e.crypto = An;
    var kn = Er.asn1;
    e.asn1 = kn;
    var Pn = Er.jws;
    e.jws = Pn;
    var Cn = Er.lang;
    e.lang = Cn
  }).call(this, r(360).Buffer)
}, function (t, e, r) {
  "use strict";
  (function (t) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    var n = r(361),
      i = r(362),
      o = r(363);

    function s() {
      return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }

    function a(t, e) {
      if (s() < e) throw new RangeError("Invalid typed array length");
      return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t
    }

    function u(t, e, r) {
      if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, r);
      if ("number" == typeof t) {
        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
        return h(this, t)
      }
      return c(this, t, e, r)
    }

    function c(t, e, r, n) {
      if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function i(t, e, r, n) {
        if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
        if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
        e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
        u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = l(t, e);
        return t
      }(t, e, r, n) : "string" == typeof e ? function s(t, e, r) {
        "string" == typeof r && "" !== r || (r = "utf8");
        if (!u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
        var n = 0 | d(e, r),
          i = (t = a(t, n)).write(e, r);
        i !== n && (t = t.slice(0, i));
        return t
      }(t, e, r) : function c(t, e) {
        if (u.isBuffer(e)) {
          var r = 0 | p(e.length);
          return 0 === (t = a(t, r)).length ? t : (e.copy(t, 0, 0, r), t)
        }
        if (e) {
          if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function n(t) {
            return t != t
          }(e.length) ? a(t, 0) : l(t, e);
          if ("Buffer" === e.type && o(e.data)) return l(t, e.data)
        }
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
      }(t, e)
    }

    function f(t) {
      if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
      if (t < 0) throw new RangeError('"size" argument must not be negative')
    }

    function h(t, e) {
      if (f(e), t = a(t, e < 0 ? 0 : 0 | p(e)), !u.TYPED_ARRAY_SUPPORT)
        for (var r = 0; r < e; ++r) t[r] = 0;
      return t
    }

    function l(t, e) {
      var r = e.length < 0 ? 0 : 0 | p(e.length);
      t = a(t, r);
      for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
      return t
    }

    function p(t) {
      if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
      return 0 | t
    }

    function d(t, e) {
      if (u.isBuffer(t)) return t.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
      "string" != typeof t && (t = "" + t);
      var r = t.length;
      if (0 === r) return 0;
      for (var n = !1;;) switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
        case void 0:
          return V(t).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * r;
        case "hex":
          return r >>> 1;
        case "base64":
          return K(t).length;
        default:
          if (n) return V(t).length;
          e = ("" + e).toLowerCase(), n = !0
      }
    }

    function g(t, e, r) {
      var n = t[e];
      t[e] = t[r], t[r] = n
    }

    function v(t, e, r, n, i) {
      if (0 === t.length) return -1;
      if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
        if (i) return -1;
        r = t.length - 1
      } else if (r < 0) {
        if (!i) return -1;
        r = 0
      }
      if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, r, n, i);
      if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : y(t, [e], r, n, i);
      throw new TypeError("val must be string, number or Buffer")
    }

    function y(t, e, r, n, i) {
      var o, s = 1,
        a = t.length,
        u = e.length;
      if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
        if (t.length < 2 || e.length < 2) return -1;
        s = 2, a /= 2, u /= 2, r /= 2
      }

      function c(t, e) {
        return 1 === s ? t[e] : t.readUInt16BE(e * s)
      }
      if (i) {
        var f = -1;
        for (o = r; o < a; o++)
          if (c(t, o) === c(e, -1 === f ? 0 : o - f)) {
            if (-1 === f && (f = o), o - f + 1 === u) return f * s
          } else -1 !== f && (o -= o - f), f = -1
      } else
        for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
          for (var h = !0, l = 0; l < u; l++)
            if (c(t, o + l) !== c(e, l)) {
              h = !1;
              break
            } if (h) return o
        }
      return -1
    }

    function m(t, e, r, n) {
      r = Number(r) || 0;
      var i = t.length - r;
      n ? (n = Number(n)) > i && (n = i) : n = i;
      var o = e.length;
      if (o % 2 != 0) throw new TypeError("Invalid hex string");
      n > o / 2 && (n = o / 2);
      for (var s = 0; s < n; ++s) {
        var a = parseInt(e.substr(2 * s, 2), 16);
        if (isNaN(a)) return s;
        t[r + s] = a
      }
      return s
    }

    function _(t, e, r, n) {
      return q(V(e, t.length - r), t, r, n)
    }

    function S(t, e, r, n) {
      return q(function i(t) {
        for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
        return e
      }(e), t, r, n)
    }

    function b(t, e, r, n) {
      return S(t, e, r, n)
    }

    function w(t, e, r, n) {
      return q(K(e), t, r, n)
    }

    function F(t, e, r, n) {
      return q(function i(t, e) {
        for (var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
        return o
      }(e, t.length - r), t, r, n)
    }

    function E(t, e, r) {
      return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
    }

    function x(t, e, r) {
      r = Math.min(t.length, r);
      for (var n = [], i = e; i < r;) {
        var o, s, a, u, c = t[i],
          f = null,
          h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
        if (i + h <= r) switch (h) {
          case 1:
            c < 128 && (f = c);
            break;
          case 2:
            128 == (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (f = u);
            break;
          case 3:
            o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u);
            break;
          case 4:
            o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (f = u)
        }
        null === f ? (f = 65533, h = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), i += h
      }
      return function l(t) {
        var e = t.length;
        if (e <= P) return String.fromCharCode.apply(String, t);
        var r = "",
          n = 0;
        for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += P));
        return r
      }(n)
    }
    e.Buffer = u, e.SlowBuffer = function A(t) {
      +t != t && (t = 0);
      return u.alloc(+t)
    }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function k() {
      try {
        var t = new Uint8Array(1);
        return t.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function () {
            return 42
          }
        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
      } catch (t) {
        return !1
      }
    }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function (t) {
      return t.__proto__ = u.prototype, t
    }, u.from = function (t, e, r) {
      return c(null, t, e, r)
    }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
      value: null,
      configurable: !0
    })), u.alloc = function (t, e, r) {
      return function n(t, e, r, i) {
        return f(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" == typeof i ? a(t, e).fill(r, i) : a(t, e).fill(r) : a(t, e)
      }(null, t, e, r)
    }, u.allocUnsafe = function (t) {
      return h(null, t)
    }, u.allocUnsafeSlow = function (t) {
      return h(null, t)
    }, u.isBuffer = function t(e) {
      return !(null == e || !e._isBuffer)
    }, u.compare = function t(e, r) {
      if (!u.isBuffer(e) || !u.isBuffer(r)) throw new TypeError("Arguments must be Buffers");
      if (e === r) return 0;
      for (var n = e.length, i = r.length, o = 0, s = Math.min(n, i); o < s; ++o)
        if (e[o] !== r[o]) {
          n = e[o], i = r[o];
          break
        } return n < i ? -1 : i < n ? 1 : 0
    }, u.isEncoding = function t(e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1
      }
    }, u.concat = function t(e, r) {
      if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return u.alloc(0);
      var n;
      if (void 0 === r)
        for (r = 0, n = 0; n < e.length; ++n) r += e[n].length;
      var i = u.allocUnsafe(r),
        s = 0;
      for (n = 0; n < e.length; ++n) {
        var a = e[n];
        if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
        a.copy(i, s), s += a.length
      }
      return i
    }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function t() {
      var e = this.length;
      if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var r = 0; r < e; r += 2) g(this, r, r + 1);
      return this
    }, u.prototype.swap32 = function t() {
      var e = this.length;
      if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var r = 0; r < e; r += 4) g(this, r, r + 3), g(this, r + 1, r + 2);
      return this
    }, u.prototype.swap64 = function t() {
      var e = this.length;
      if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var r = 0; r < e; r += 8) g(this, r, r + 7), g(this, r + 1, r + 6), g(this, r + 2, r + 5), g(this, r + 3, r + 4);
      return this
    }, u.prototype.toString = function t() {
      var e = 0 | this.length;
      return 0 === e ? "" : 0 === arguments.length ? x(this, 0, e) : function r(t, e, n) {
        var i = !1;
        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
        if ((n >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8");;) switch (t) {
          case "hex":
            return R(this, e, n);
          case "utf8":
          case "utf-8":
            return x(this, e, n);
          case "ascii":
            return C(this, e, n);
          case "latin1":
          case "binary":
            return T(this, e, n);
          case "base64":
            return E(this, e, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return I(this, e, n);
          default:
            if (i) throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), i = !0
        }
      }.apply(this, arguments)
    }, u.prototype.equals = function t(e) {
      if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      return this === e || 0 === u.compare(this, e)
    }, u.prototype.inspect = function t() {
      var r = "",
        n = e.INSPECT_MAX_BYTES;
      return this.length > 0 && (r = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (r += " ... ")), "<Buffer " + r + ">"
    }, u.prototype.compare = function t(e, r, n, i, o) {
      if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      if (void 0 === r && (r = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === o && (o = this.length), r < 0 || n > e.length || i < 0 || o > this.length) throw new RangeError("out of range index");
      if (i >= o && r >= n) return 0;
      if (i >= o) return -1;
      if (r >= n) return 1;
      if (r >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === e) return 0;
      for (var s = o - i, a = n - r, c = Math.min(s, a), f = this.slice(i, o), h = e.slice(r, n), l = 0; l < c; ++l)
        if (f[l] !== h[l]) {
          s = f[l], a = h[l];
          break
        } return s < a ? -1 : a < s ? 1 : 0
    }, u.prototype.includes = function t(e, r, n) {
      return -1 !== this.indexOf(e, r, n)
    }, u.prototype.indexOf = function t(e, r, n) {
      return v(this, e, r, n, !0)
    }, u.prototype.lastIndexOf = function t(e, r, n) {
      return v(this, e, r, n, !1)
    }, u.prototype.write = function t(e, r, n, i) {
      if (void 0 === r) i = "utf8", n = this.length, r = 0;
      else if (void 0 === n && "string" == typeof r) i = r, n = this.length, r = 0;
      else {
        if (!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        r |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
      }
      var o = this.length - r;
      if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      i || (i = "utf8");
      for (var s = !1;;) switch (i) {
        case "hex":
          return m(this, e, r, n);
        case "utf8":
        case "utf-8":
          return _(this, e, r, n);
        case "ascii":
          return S(this, e, r, n);
        case "latin1":
        case "binary":
          return b(this, e, r, n);
        case "base64":
          return w(this, e, r, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return F(this, e, r, n);
        default:
          if (s) throw new TypeError("Unknown encoding: " + i);
          i = ("" + i).toLowerCase(), s = !0
      }
    }, u.prototype.toJSON = function t() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };
    var P = 4096;

    function C(t, e, r) {
      var n = "";
      r = Math.min(t.length, r);
      for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
      return n
    }

    function T(t, e, r) {
      var n = "";
      r = Math.min(t.length, r);
      for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
      return n
    }

    function R(t, e, r) {
      var n = t.length;
      (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
      for (var i = "", o = e; o < r; ++o) i += H(t[o]);
      return i
    }

    function I(t, e, r) {
      for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
      return i
    }

    function O(t, e, r) {
      if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
      if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
    }

    function D(t, e, r, n, i, o) {
      if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
      if (r + n > t.length) throw new RangeError("Index out of range")
    }

    function N(t, e, r, n) {
      e < 0 && (e = 65535 + e + 1);
      for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i) t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
    }

    function L(t, e, r, n) {
      e < 0 && (e = 4294967295 + e + 1);
      for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i) t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255
    }

    function M(t, e, r, n, i, o) {
      if (r + n > t.length) throw new RangeError("Index out of range");
      if (r < 0) throw new RangeError("Index out of range")
    }

    function j(t, e, r, n, o) {
      return o || M(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4
    }

    function U(t, e, r, n, o) {
      return o || M(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8
    }
    u.prototype.slice = function t(e, r) {
      var n, i = this.length;
      if (e = ~~e, r = void 0 === r ? i : ~~r, e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), r < 0 ? (r += i) < 0 && (r = 0) : r > i && (r = i), r < e && (r = e), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, r)).__proto__ = u.prototype;
      else {
        var o = r - e;
        n = new u(o, void 0);
        for (var s = 0; s < o; ++s) n[s] = this[s + e]
      }
      return n
    }, u.prototype.readUIntLE = function t(e, r, n) {
      e |= 0, r |= 0, n || O(e, r, this.length);
      for (var i = this[e], o = 1, s = 0; ++s < r && (o *= 256);) i += this[e + s] * o;
      return i
    }, u.prototype.readUIntBE = function t(e, r, n) {
      e |= 0, r |= 0, n || O(e, r, this.length);
      for (var i = this[e + --r], o = 1; r > 0 && (o *= 256);) i += this[e + --r] * o;
      return i
    }, u.prototype.readUInt8 = function t(e, r) {
      return r || O(e, 1, this.length), this[e]
    }, u.prototype.readUInt16LE = function t(e, r) {
      return r || O(e, 2, this.length), this[e] | this[e + 1] << 8
    }, u.prototype.readUInt16BE = function t(e, r) {
      return r || O(e, 2, this.length), this[e] << 8 | this[e + 1]
    }, u.prototype.readUInt32LE = function t(e, r) {
      return r || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
    }, u.prototype.readUInt32BE = function t(e, r) {
      return r || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    }, u.prototype.readIntLE = function t(e, r, n) {
      e |= 0, r |= 0, n || O(e, r, this.length);
      for (var i = this[e], o = 1, s = 0; ++s < r && (o *= 256);) i += this[e + s] * o;
      return i >= (o *= 128) && (i -= Math.pow(2, 8 * r)), i
    }, u.prototype.readIntBE = function t(e, r, n) {
      e |= 0, r |= 0, n || O(e, r, this.length);
      for (var i = r, o = 1, s = this[e + --i]; i > 0 && (o *= 256);) s += this[e + --i] * o;
      return s >= (o *= 128) && (s -= Math.pow(2, 8 * r)), s
    }, u.prototype.readInt8 = function t(e, r) {
      return r || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
    }, u.prototype.readInt16LE = function t(e, r) {
      r || O(e, 2, this.length);
      var n = this[e] | this[e + 1] << 8;
      return 32768 & n ? 4294901760 | n : n
    }, u.prototype.readInt16BE = function t(e, r) {
      r || O(e, 2, this.length);
      var n = this[e + 1] | this[e] << 8;
      return 32768 & n ? 4294901760 | n : n
    }, u.prototype.readInt32LE = function t(e, r) {
      return r || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    }, u.prototype.readInt32BE = function t(e, r) {
      return r || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    }, u.prototype.readFloatLE = function t(e, r) {
      return r || O(e, 4, this.length), i.read(this, e, !0, 23, 4)
    }, u.prototype.readFloatBE = function t(e, r) {
      return r || O(e, 4, this.length), i.read(this, e, !1, 23, 4)
    }, u.prototype.readDoubleLE = function t(e, r) {
      return r || O(e, 8, this.length), i.read(this, e, !0, 52, 8)
    }, u.prototype.readDoubleBE = function t(e, r) {
      return r || O(e, 8, this.length), i.read(this, e, !1, 52, 8)
    }, u.prototype.writeUIntLE = function t(e, r, n, i) {
      (e = +e, r |= 0, n |= 0, i) || D(this, e, r, n, Math.pow(2, 8 * n) - 1, 0);
      var o = 1,
        s = 0;
      for (this[r] = 255 & e; ++s < n && (o *= 256);) this[r + s] = e / o & 255;
      return r + n
    }, u.prototype.writeUIntBE = function t(e, r, n, i) {
      (e = +e, r |= 0, n |= 0, i) || D(this, e, r, n, Math.pow(2, 8 * n) - 1, 0);
      var o = n - 1,
        s = 1;
      for (this[r + o] = 255 & e; --o >= 0 && (s *= 256);) this[r + o] = e / s & 255;
      return r + n
    }, u.prototype.writeUInt8 = function t(e, r, n) {
      return e = +e, r |= 0, n || D(this, e, r, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[r] = 255 & e, r + 1
    }, u.prototype.writeUInt16LE = function t(e, r, n) {
      return e = +e, r |= 0, n || D(this, e, r, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & e, this[r + 1] = e >>> 8) : N(this, e, r, !0), r + 2
    }, u.prototype.writeUInt16BE = function t(e, r, n) {
      return e = +e, r |= 0, n || D(this, e, r, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8, this[r + 1] = 255 & e) : N(this, e, r, !1), r + 2
    }, u.prototype.writeUInt32LE = function t(e, r, n) {
      return e = +e, r |= 0, n || D(this, e, r, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[r + 3] = e >>> 24, this[r + 2] = e >>> 16, this[r + 1] = e >>> 8, this[r] = 255 & e) : L(this, e, r, !0), r + 4
    }, u.prototype.writeUInt32BE = function t(e, r, n) {
      return e = +e, r |= 0, n || D(this, e, r, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = 255 & e) : L(this, e, r, !1), r + 4
    }, u.prototype.writeIntLE = function t(e, r, n, i) {
      if (e = +e, r |= 0, !i) {
        var o = Math.pow(2, 8 * n - 1);
        D(this, e, r, n, o - 1, -o)
      }
      var s = 0,
        a = 1,
        u = 0;
      for (this[r] = 255 & e; ++s < n && (a *= 256);) e < 0 && 0 === u && 0 !== this[r + s - 1] && (u = 1), this[r + s] = (e / a >> 0) - u & 255;
      return r + n
    }, u.prototype.writeIntBE = function t(e, r, n, i) {
      if (e = +e, r |= 0, !i) {
        var o = Math.pow(2, 8 * n - 1);
        D(this, e, r, n, o - 1, -o)
      }
      var s = n - 1,
        a = 1,
        u = 0;
      for (this[r + s] = 255 & e; --s >= 0 && (a *= 256);) e < 0 && 0 === u && 0 !== this[r + s + 1] && (u = 1), this[r + s] = (e / a >> 0) - u & 255;
      return r + n
    }, u.prototype.writeInt8 = function t(e, r, n) {
      return e = +e, r |= 0, n || D(this, e, r, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[r] = 255 & e, r + 1
    }, u.prototype.writeInt16LE = function t(e, r, n) {
      return e = +e, r |= 0, n || D(this, e, r, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & e, this[r + 1] = e >>> 8) : N(this, e, r, !0), r + 2
    }, u.prototype.writeInt16BE = function t(e, r, n) {
      return e = +e, r |= 0, n || D(this, e, r, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8, this[r + 1] = 255 & e) : N(this, e, r, !1), r + 2
    }, u.prototype.writeInt32LE = function t(e, r, n) {
      return e = +e, r |= 0, n || D(this, e, r, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & e, this[r + 1] = e >>> 8, this[r + 2] = e >>> 16, this[r + 3] = e >>> 24) : L(this, e, r, !0), r + 4
    }, u.prototype.writeInt32BE = function t(e, r, n) {
      return e = +e, r |= 0, n || D(this, e, r, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = 255 & e) : L(this, e, r, !1), r + 4
    }, u.prototype.writeFloatLE = function t(e, r, n) {
      return j(this, e, r, !0, n)
    }, u.prototype.writeFloatBE = function t(e, r, n) {
      return j(this, e, r, !1, n)
    }, u.prototype.writeDoubleLE = function t(e, r, n) {
      return U(this, e, r, !0, n)
    }, u.prototype.writeDoubleBE = function t(e, r, n) {
      return U(this, e, r, !1, n)
    }, u.prototype.copy = function t(e, r, n, i) {
      if (n || (n = 0), i || 0 === i || (i = this.length), r >= e.length && (r = e.length), r || (r = 0), i > 0 && i < n && (i = n), i === n) return 0;
      if (0 === e.length || 0 === this.length) return 0;
      if (r < 0) throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
      if (i < 0) throw new RangeError("sourceEnd out of bounds");
      i > this.length && (i = this.length), e.length - r < i - n && (i = e.length - r + n);
      var o, s = i - n;
      if (this === e && n < r && r < i)
        for (o = s - 1; o >= 0; --o) e[o + r] = this[o + n];
      else if (s < 1e3 || !u.TYPED_ARRAY_SUPPORT)
        for (o = 0; o < s; ++o) e[o + r] = this[o + n];
      else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), r);
      return s
    }, u.prototype.fill = function t(e, r, n, i) {
      if ("string" == typeof e) {
        if ("string" == typeof r ? (i = r, r = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === e.length) {
          var o = e.charCodeAt(0);
          o < 256 && (e = o)
        }
        if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
        if ("string" == typeof i && !u.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
      } else "number" == typeof e && (e &= 255);
      if (r < 0 || this.length < r || this.length < n) throw new RangeError("Out of range index");
      if (n <= r) return this;
      var s;
      if (r >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
        for (s = r; s < n; ++s) this[s] = e;
      else {
        var a = u.isBuffer(e) ? e : V(new u(e, i).toString()),
          c = a.length;
        for (s = 0; s < n - r; ++s) this[s + r] = a[s % c]
      }
      return this
    };
    var B = /[^+\/0-9A-Za-z-_]/g;

    function H(t) {
      return t < 16 ? "0" + t.toString(16) : t.toString(16)
    }

    function V(t, e) {
      var r;
      e = e || 1 / 0;
      for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
        if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue
            }
            if (s + 1 === n) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue
            }
            i = r;
            continue
          }
          if (r < 56320) {
            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
            continue
          }
          r = 65536 + (i - 55296 << 10 | r - 56320)
        } else i && (e -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, r < 128) {
          if ((e -= 1) < 0) break;
          o.push(r)
        } else if (r < 2048) {
          if ((e -= 2) < 0) break;
          o.push(r >> 6 | 192, 63 & r | 128)
        } else if (r < 65536) {
          if ((e -= 3) < 0) break;
          o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
        } else {
          if (!(r < 1114112)) throw new Error("Invalid code point");
          if ((e -= 4) < 0) break;
          o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
        }
      }
      return o
    }

    function K(t) {
      return n.toByteArray(function e(t) {
        if ((t = function e(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
          }(t).replace(B, "")).length < 2) return "";
        for (; t.length % 4 != 0;) t += "=";
        return t
      }(t))
    }

    function q(t, e, r, n) {
      for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
      return i
    }
  }).call(this, r(71))
}, function (t, e, r) {
  "use strict";
  e.byteLength = function n(t) {
    var e = l(t),
      r = e[0],
      n = e[1];
    return 3 * (r + n) / 4 - n
  }, e.toByteArray = function i(t) {
    for (var e, r = l(t), n = r[0], i = r[1], o = new u(function s(t, e, r) {
        return 3 * (e + r) / 4 - r
      }(0, n, i)), c = 0, f = i > 0 ? n - 4 : n, h = 0; h < f; h += 4) e = a[t.charCodeAt(h)] << 18 | a[t.charCodeAt(h + 1)] << 12 | a[t.charCodeAt(h + 2)] << 6 | a[t.charCodeAt(h + 3)], o[c++] = e >> 16 & 255, o[c++] = e >> 8 & 255, o[c++] = 255 & e;
    2 === i && (e = a[t.charCodeAt(h)] << 2 | a[t.charCodeAt(h + 1)] >> 4, o[c++] = 255 & e);
    1 === i && (e = a[t.charCodeAt(h)] << 10 | a[t.charCodeAt(h + 1)] << 4 | a[t.charCodeAt(h + 2)] >> 2, o[c++] = e >> 8 & 255, o[c++] = 255 & e);
    return o
  }, e.fromByteArray = function o(t) {
    for (var e, r = t.length, n = r % 3, i = [], o = 0, a = r - n; o < a; o += 16383) i.push(p(t, o, o + 16383 > a ? a : o + 16383));
    1 === n ? (e = t[r - 1], i.push(s[e >> 2] + s[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], i.push(s[e >> 10] + s[e >> 4 & 63] + s[e << 2 & 63] + "="));
    return i.join("")
  };
  for (var s = [], a = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, h = c.length; f < h; ++f) s[f] = c[f], a[c.charCodeAt(f)] = f;

  function l(t) {
    var e = t.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var r = t.indexOf("=");
    return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
  }

  function p(t, e, r) {
    for (var n, i, o = [], a = e; a < r; a += 3) n = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), o.push(s[(i = n) >> 18 & 63] + s[i >> 12 & 63] + s[i >> 6 & 63] + s[63 & i]);
    return o.join("")
  }
  a["-".charCodeAt(0)] = 62, a["_".charCodeAt(0)] = 63
}, function (t, e) {
  e.read = function (t, e, r, n, i) {
    var o, s, a = 8 * i - n - 1,
      u = (1 << a) - 1,
      c = u >> 1,
      f = -7,
      h = r ? i - 1 : 0,
      l = r ? -1 : 1,
      p = t[e + h];
    for (h += l, o = p & (1 << -f) - 1, p >>= -f, f += a; f > 0; o = 256 * o + t[e + h], h += l, f -= 8);
    for (s = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; s = 256 * s + t[e + h], h += l, f -= 8);
    if (0 === o) o = 1 - c;
    else {
      if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
      s += Math.pow(2, n), o -= c
    }
    return (p ? -1 : 1) * s * Math.pow(2, o - n)
  }, e.write = function (t, e, r, n, i, o) {
    var s, a, u, c = 8 * o - i - 1,
      f = (1 << c) - 1,
      h = f >> 1,
      l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      p = n ? 0 : o - 1,
      d = n ? 1 : -1,
      g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + h >= 1 ? l / u : l * Math.pow(2, 1 - h)) * u >= 2 && (s++, u /= 2), s + h >= f ? (a = 0, s = f) : s + h >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + p] = 255 & a, p += d, a /= 256, i -= 8);
    for (s = s << i | a, c += i; c > 0; t[r + p] = 255 & s, p += d, s /= 256, c -= 8);
    t[r + p - d] |= 128 * g
  }
}, function (t, e) {
  var r = {}.toString;
  t.exports = Array.isArray || function (t) {
    return "[object Array]" == r.call(t)
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function n(t) {
    var e = t.jws,
      r = t.KeyUtil,
      n = t.X509,
      o = t.crypto,
      s = t.hextob64u,
      a = t.b64tohex,
      u = t.AllowedSigningAlgs;
    return function () {
      function t() {
        ! function e(t, r) {
          if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
        }(this, t)
      }
      return t.parseJwt = function t(r) {
        i.Log.debug("JoseUtil.parseJwt");
        try {
          var n = e.JWS.parse(r);
          return {
            header: n.headerObj,
            payload: n.payloadObj
          }
        } catch (t) {
          i.Log.error(t)
        }
      }, t.validateJwt = function e(o, s, u, c, f, h, l) {
        i.Log.debug("JoseUtil.validateJwt");
        try {
          if ("RSA" === s.kty)
            if (s.e && s.n) s = r.getKey(s);
            else {
              if (!s.x5c || !s.x5c.length) return i.Log.error("JoseUtil.validateJwt: RSA key missing key material", s), Promise.reject(new Error("RSA key missing key material"));
              var p = a(s.x5c[0]);
              s = n.getPublicKeyFromCertHex(p)
            }
          else {
            if ("EC" !== s.kty) return i.Log.error("JoseUtil.validateJwt: Unsupported key type", s && s.kty), Promise.reject(new Error(s.kty));
            if (!(s.crv && s.x && s.y)) return i.Log.error("JoseUtil.validateJwt: EC key missing key material", s), Promise.reject(new Error("EC key missing key material"));
            s = r.getKey(s)
          }
          return t._validateJwt(o, s, u, c, f, h, l)
        } catch (t) {
          return i.Log.error(t && t.message || t), Promise.reject("JWT validation failed")
        }
      }, t.validateJwtAttributes = function e(r, n, o, s, a, u) {
        s || (s = 0), a || (a = parseInt(Date.now() / 1e3));
        var c = t.parseJwt(r).payload;
        if (!c.iss) return i.Log.error("JoseUtil._validateJwt: issuer was not provided"), Promise.reject(new Error("issuer was not provided"));
        if (c.iss !== n) return i.Log.error("JoseUtil._validateJwt: Invalid issuer in token", c.iss), Promise.reject(new Error("Invalid issuer in token: " + c.iss));
        if (!c.aud) return i.Log.error("JoseUtil._validateJwt: aud was not provided"), Promise.reject(new Error("aud was not provided"));
        var f = c.aud === o || Array.isArray(c.aud) && c.aud.indexOf(o) >= 0;
        if (!f) return i.Log.error("JoseUtil._validateJwt: Invalid audience in token", c.aud), Promise.reject(new Error("Invalid audience in token: " + c.aud));
        if (c.azp && c.azp !== o) return i.Log.error("JoseUtil._validateJwt: Invalid azp in token", c.azp), Promise.reject(new Error("Invalid azp in token: " + c.azp));
        if (!u) {
          var h = a + s,
            l = a - s;
          if (!c.iat) return i.Log.error("JoseUtil._validateJwt: iat was not provided"), Promise.reject(new Error("iat was not provided"));
          if (h < c.iat) return i.Log.error("JoseUtil._validateJwt: iat is in the future", c.iat), Promise.reject(new Error("iat is in the future: " + c.iat));
          if (c.nbf && h < c.nbf) return i.Log.error("JoseUtil._validateJwt: nbf is in the future", c.nbf), Promise.reject(new Error("nbf is in the future: " + c.nbf));
          if (!c.exp) return i.Log.error("JoseUtil._validateJwt: exp was not provided"), Promise.reject(new Error("exp was not provided"));
          if (c.exp < l) return i.Log.error("JoseUtil._validateJwt: exp is in the past", c.exp), Promise.reject(new Error("exp is in the past:" + c.exp))
        }
        return Promise.resolve(c)
      }, t._validateJwt = function r(n, o, s, a, c, f, h) {
        return t.validateJwtAttributes(n, s, a, c, f, h).then(function (t) {
          try {
            return e.JWS.verify(n, o, u) ? t : (i.Log.error("JoseUtil._validateJwt: signature validation failed"), Promise.reject(new Error("signature validation failed")))
          } catch (t) {
            return i.Log.error(t && t.message || t), Promise.reject(new Error("signature validation failed"))
          }
        })
      }, t.hashString = function t(e, r) {
        try {
          return o.Util.hashString(e, r)
        } catch (t) {
          i.Log.error(t)
        }
      }, t.hexToBase64Url = function t(e) {
        try {
          return s(e)
        } catch (t) {
          i.Log.error(t)
        }
      }, t
    }()
  };
  var i = r(3);
  t.exports = e.default
}, function (t, e, r) {
  var n = r(366),
    i = r(367);
  t.exports = function o(t, e, r) {
    var o = e && r || 0;
    "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
    var s = (t = t || {}).random || (t.rng || n)();
    if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e)
      for (var a = 0; a < 16; ++a) e[o + a] = s[a];
    return e || i(s)
  }
}, function (t, e) {
  var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
  if (r) {
    var n = new Uint8Array(16);
    t.exports = function t() {
      return r(n), n
    }
  } else {
    var i = new Array(16);
    t.exports = function t() {
      for (var e, r = 0; r < 16; r++) 0 == (3 & r) && (e = 4294967296 * Math.random()), i[r] = e >>> ((3 & r) << 3) & 255;
      return i
    }
  }
}, function (t, e) {
  for (var r = [], n = 0; n < 256; ++n) r[n] = (n + 256).toString(16).substr(1);
  t.exports = function i(t, e) {
    var n = e || 0,
      i = r;
    return [i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]]].join("")
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.SigninResponse = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(55);
  e.SigninResponse = function () {
    function t(e) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#";
      ! function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var o = i.UrlUtility.parseUrlFragment(e, r);
      this.error = o.error, this.error_description = o.error_description, this.error_uri = o.error_uri, this.code = o.code, this.state = o.state, this.id_token = o.id_token, this.session_state = o.session_state, this.access_token = o.access_token, this.token_type = o.token_type, this.scope = o.scope, this.profile = void 0, this.expires_in = o.expires_in
    }
    return n(t, [{
      key: "expires_in",
      get: function t() {
        if (this.expires_at) {
          var e = parseInt(Date.now() / 1e3);
          return this.expires_at - e
        }
      },
      set: function t(e) {
        var r = parseInt(e);
        if ("number" == typeof r && r > 0) {
          var n = parseInt(Date.now() / 1e3);
          this.expires_at = n + r
        }
      }
    }, {
      key: "expired",
      get: function t() {
        var e = this.expires_in;
        if (void 0 !== e) return e <= 0
      }
    }, {
      key: "scopes",
      get: function t() {
        return (this.scope || "").split(" ")
      }
    }, {
      key: "isOpenIdConnect",
      get: function t() {
        return this.scopes.indexOf("openid") >= 0 || !!this.id_token
      }
    }]), t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.SignoutRequest = void 0;
  var n = r(3),
    i = r(55),
    o = r(102);
  e.SignoutRequest = function t(e) {
    var r = e.url,
      s = e.id_token_hint,
      a = e.post_logout_redirect_uri,
      u = e.data,
      c = e.extraQueryParams,
      f = e.request_type;
    if (function h(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), !r) throw n.Log.error("SignoutRequest.ctor: No url passed"), new Error("url");
    for (var l in s && (r = i.UrlUtility.addQueryParam(r, "id_token_hint", s)), a && (r = i.UrlUtility.addQueryParam(r, "post_logout_redirect_uri", a), u && (this.state = new o.State({
        data: u,
        request_type: f
      }), r = i.UrlUtility.addQueryParam(r, "state", this.state.id))), c) r = i.UrlUtility.addQueryParam(r, l, c[l]);
    this.url = r
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.SignoutResponse = void 0;
  var n = r(55);
  e.SignoutResponse = function t(e) {
    ! function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, t);
    var i = n.UrlUtility.parseUrlFragment(e, "?");
    this.error = i.error, this.error_description = i.error_description, this.error_uri = i.error_uri, this.state = i.state
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.InMemoryWebStorage = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3);
  e.InMemoryWebStorage = function () {
    function t() {
      ! function e(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this._data = {}
    }
    return t.prototype.getItem = function t(e) {
      return i.Log.debug("InMemoryWebStorage.getItem", e), this._data[e]
    }, t.prototype.setItem = function t(e, r) {
      i.Log.debug("InMemoryWebStorage.setItem", e), this._data[e] = r
    }, t.prototype.removeItem = function t(e) {
      i.Log.debug("InMemoryWebStorage.removeItem", e), delete this._data[e]
    }, t.prototype.key = function t(e) {
      return Object.getOwnPropertyNames(this._data)[e]
    }, n(t, [{
      key: "length",
      get: function t() {
        return Object.getOwnPropertyNames(this._data).length
      }
    }]), t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.UserManager = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3),
    o = r(139),
    s = r(373),
    a = r(145),
    u = r(379),
    c = r(381),
    f = r(148),
    h = r(150),
    l = r(140),
    p = r(70);
  e.UserManager = function (t) {
    function e() {
      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.SilentRenewService,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.SessionMonitor,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.TokenRevocationClient,
        d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l.TokenClient,
        g = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : p.JoseUtil;
      ! function v(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, e), r instanceof s.UserManagerSettings || (r = new s.UserManagerSettings(r));
      var y = function m(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
      }(this, t.call(this, r));
      return y._events = new u.UserManagerEvents(r), y._silentRenewService = new n(y), y.settings.automaticSilentRenew && (i.Log.debug("UserManager.ctor: automaticSilentRenew is configured, setting up silent renew"), y.startSilentRenew()), y.settings.monitorSession && (i.Log.debug("UserManager.ctor: monitorSession is configured, setting up session monitor"), y._sessionMonitor = new o(y)), y._tokenRevocationClient = new a(y._settings), y._tokenClient = new d(y._settings), y._joseUtil = g, y
    }
    return function r(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }(e, t), e.prototype.getUser = function t() {
      var e = this;
      return this._loadUser().then(function (t) {
        return t ? (i.Log.info("UserManager.getUser: user loaded"), e._events.load(t, !1), t) : (i.Log.info("UserManager.getUser: user not found in storage"), null)
      })
    }, e.prototype.removeUser = function t() {
      var e = this;
      return this.storeUser(null).then(function () {
        i.Log.info("UserManager.removeUser: user removed from storage"), e._events.unload()
      })
    }, e.prototype.signinRedirect = function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (e = Object.assign({}, e)).request_type = "si:r";
      var r = {
        useReplaceToNavigate: e.useReplaceToNavigate
      };
      return this._signinStart(e, this._redirectNavigator, r).then(function () {
        i.Log.info("UserManager.signinRedirect: successful")
      })
    }, e.prototype.signinRedirectCallback = function t(e) {
      return this._signinEnd(e || this._redirectNavigator.url).then(function (t) {
        return t.profile && t.profile.sub ? i.Log.info("UserManager.signinRedirectCallback: successful, signed in sub: ", t.profile.sub) : i.Log.info("UserManager.signinRedirectCallback: no sub"), t
      })
    }, e.prototype.signinPopup = function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (e = Object.assign({}, e)).request_type = "si:p";
      var r = e.redirect_uri || this.settings.popup_redirect_uri || this.settings.redirect_uri;
      return r ? (e.redirect_uri = r, e.display = "popup", this._signin(e, this._popupNavigator, {
        startUrl: r,
        popupWindowFeatures: e.popupWindowFeatures || this.settings.popupWindowFeatures,
        popupWindowTarget: e.popupWindowTarget || this.settings.popupWindowTarget
      }).then(function (t) {
        return t && (t.profile && t.profile.sub ? i.Log.info("UserManager.signinPopup: signinPopup successful, signed in sub: ", t.profile.sub) : i.Log.info("UserManager.signinPopup: no sub")), t
      })) : (i.Log.error("UserManager.signinPopup: No popup_redirect_uri or redirect_uri configured"), Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured")))
    }, e.prototype.signinPopupCallback = function t(e) {
      return this._signinCallback(e, this._popupNavigator).then(function (t) {
        return t && (t.profile && t.profile.sub ? i.Log.info("UserManager.signinPopupCallback: successful, signed in sub: ", t.profile.sub) : i.Log.info("UserManager.signinPopupCallback: no sub")), t
      }).catch(function (t) {
        i.Log.error(t.message)
      })
    }, e.prototype.signinSilent = function t() {
      var e = this,
        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (r = Object.assign({}, r)).request_type = "si:s", this._loadUser().then(function (t) {
        return t && t.refresh_token ? (r.refresh_token = t.refresh_token, e._useRefreshToken(r)) : (r.id_token_hint = r.id_token_hint || e.settings.includeIdTokenInSilentRenew && t && t.id_token, t && e._settings.validateSubOnSilentRenew && (i.Log.debug("UserManager.signinSilent, subject prior to silent renew: ", t.profile.sub), r.current_sub = t.profile.sub), e._signinSilentIframe(r))
      })
    }, e.prototype._useRefreshToken = function t() {
      var e = this,
        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return this._tokenClient.exchangeRefreshToken(r).then(function (t) {
        return t ? t.access_token ? e._loadUser().then(function (r) {
          if (r) {
            var n = Promise.resolve();
            return t.id_token && (n = e._validateIdTokenFromTokenRefreshToken(r.profile, t.id_token)), n.then(function () {
              return i.Log.debug("UserManager._useRefreshToken: refresh token response success"), r.id_token = t.id_token, r.access_token = t.access_token, r.refresh_token = t.refresh_token || r.refresh_token, r.expires_in = t.expires_in, e.storeUser(r).then(function () {
                return e._events.load(r), r
              })
            })
          }
          return null
        }) : (i.Log.error("UserManager._useRefreshToken: No access token returned from token endpoint"), Promise.reject("No access token returned from token endpoint")) : (i.Log.error("UserManager._useRefreshToken: No response returned from token endpoint"), Promise.reject("No response returned from token endpoint"))
      })
    }, e.prototype._validateIdTokenFromTokenRefreshToken = function t(e, r) {
      var n = this;
      return this._metadataService.getIssuer().then(function (t) {
        return n._joseUtil.validateJwtAttributes(r, t, n._settings.client_id, n._settings.clockSkew).then(function (t) {
          return t ? t.sub !== e.sub ? (i.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: sub in id_token does not match current sub"), Promise.reject(new Error("sub in id_token does not match current sub"))) : t.auth_time && t.auth_time !== e.auth_time ? (i.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: auth_time in id_token does not match original auth_time"), Promise.reject(new Error("auth_time in id_token does not match original auth_time"))) : t.azp && t.azp !== e.azp ? (i.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp in id_token does not match original azp"), Promise.reject(new Error("azp in id_token does not match original azp"))) : !t.azp && e.azp ? (i.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp not in id_token, but present in original id_token"), Promise.reject(new Error("azp not in id_token, but present in original id_token"))) : void 0 : (i.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: Failed to validate id_token"), Promise.reject(new Error("Failed to validate id_token")))
        })
      })
    }, e.prototype._signinSilentIframe = function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = e.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
      return r ? (e.redirect_uri = r, e.prompt = e.prompt || "none", this._signin(e, this._iframeNavigator, {
        startUrl: r,
        silentRequestTimeout: e.silentRequestTimeout || this.settings.silentRequestTimeout
      }).then(function (t) {
        return t && (t.profile && t.profile.sub ? i.Log.info("UserManager.signinSilent: successful, signed in sub: ", t.profile.sub) : i.Log.info("UserManager.signinSilent: no sub")), t
      })) : (i.Log.error("UserManager.signinSilent: No silent_redirect_uri configured"), Promise.reject(new Error("No silent_redirect_uri configured")))
    }, e.prototype.signinSilentCallback = function t(e) {
      return this._signinCallback(e, this._iframeNavigator).then(function (t) {
        return t && (t.profile && t.profile.sub ? i.Log.info("UserManager.signinSilentCallback: successful, signed in sub: ", t.profile.sub) : i.Log.info("UserManager.signinSilentCallback: no sub")), t
      })
    }, e.prototype.signinCallback = function t(e) {
      var r = this;
      return this.readSigninResponseState(e).then(function (t) {
        var n = t.state;
        t.response;
        return "si:r" === n.request_type ? r.signinRedirectCallback(e) : "si:p" === n.request_type ? r.signinPopupCallback(e) : "si:s" === n.request_type ? r.signinSilentCallback(e) : Promise.reject(new Error("invalid response_type in state"))
      })
    }, e.prototype.signoutCallback = function t(e, r) {
      var n = this;
      return this.readSignoutResponseState(e).then(function (t) {
        var i = t.state,
          o = t.response;
        return i ? "so:r" === i.request_type ? n.signoutRedirectCallback(e) : "so:p" === i.request_type ? n.signoutPopupCallback(e, r) : Promise.reject(new Error("invalid response_type in state")) : o
      })
    }, e.prototype.querySessionStatus = function t() {
      var e = this,
        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (r = Object.assign({}, r)).request_type = "si:s";
      var n = r.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
      return n ? (r.redirect_uri = n, r.prompt = "none", r.response_type = r.response_type || this.settings.query_status_response_type, r.scope = r.scope || "openid", r.skipUserInfo = !0, this._signinStart(r, this._iframeNavigator, {
        startUrl: n,
        silentRequestTimeout: r.silentRequestTimeout || this.settings.silentRequestTimeout
      }).then(function (t) {
        return e.processSigninResponse(t.url).then(function (t) {
          if (i.Log.debug("UserManager.querySessionStatus: got signin response"), t.session_state && t.profile.sub) return i.Log.info("UserManager.querySessionStatus: querySessionStatus success for sub: ", t.profile.sub), {
            session_state: t.session_state,
            sub: t.profile.sub,
            sid: t.profile.sid
          };
          i.Log.info("querySessionStatus successful, user not authenticated")
        })
      })) : (i.Log.error("UserManager.querySessionStatus: No silent_redirect_uri configured"), Promise.reject(new Error("No silent_redirect_uri configured")))
    }, e.prototype._signin = function t(e, r) {
      var n = this,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return this._signinStart(e, r, i).then(function (t) {
        return n._signinEnd(t.url, e)
      })
    }, e.prototype._signinStart = function t(e, r) {
      var n = this,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return r.prepare(o).then(function (t) {
        return i.Log.debug("UserManager._signinStart: got navigator window handle"), n.createSigninRequest(e).then(function (e) {
          return i.Log.debug("UserManager._signinStart: got signin request"), o.url = e.url, o.id = e.state.id, t.navigate(o)
        }).catch(function (e) {
          throw t.close && (i.Log.debug("UserManager._signinStart: Error after preparing navigator, closing navigator window"), t.close()), e
        })
      })
    }, e.prototype._signinEnd = function t(e) {
      var r = this,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return this.processSigninResponse(e).then(function (t) {
        i.Log.debug("UserManager._signinEnd: got signin response");
        var e = new a.User(t);
        if (n.current_sub) {
          if (n.current_sub !== e.profile.sub) return i.Log.debug("UserManager._signinEnd: current user does not match user returned from signin. sub from signin: ", e.profile.sub), Promise.reject(new Error("login_required"));
          i.Log.debug("UserManager._signinEnd: current user matches user returned from signin")
        }
        return r.storeUser(e).then(function () {
          return i.Log.debug("UserManager._signinEnd: user stored"), r._events.load(e), e
        })
      })
    }, e.prototype._signinCallback = function t(e, r) {
      return i.Log.debug("UserManager._signinCallback"), r.callback(e)
    }, e.prototype.signoutRedirect = function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (e = Object.assign({}, e)).request_type = "so:r";
      var r = e.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
      r && (e.post_logout_redirect_uri = r);
      var n = {
        useReplaceToNavigate: e.useReplaceToNavigate
      };
      return this._signoutStart(e, this._redirectNavigator, n).then(function () {
        i.Log.info("UserManager.signoutRedirect: successful")
      })
    }, e.prototype.signoutRedirectCallback = function t(e) {
      return this._signoutEnd(e || this._redirectNavigator.url).then(function (t) {
        return i.Log.info("UserManager.signoutRedirectCallback: successful"), t
      })
    }, e.prototype.signoutPopup = function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (e = Object.assign({}, e)).request_type = "so:p";
      var r = e.post_logout_redirect_uri || this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
      return e.post_logout_redirect_uri = r, e.display = "popup", e.post_logout_redirect_uri && (e.state = e.state || {}), this._signout(e, this._popupNavigator, {
        startUrl: r,
        popupWindowFeatures: e.popupWindowFeatures || this.settings.popupWindowFeatures,
        popupWindowTarget: e.popupWindowTarget || this.settings.popupWindowTarget
      }).then(function () {
        i.Log.info("UserManager.signoutPopup: successful")
      })
    }, e.prototype.signoutPopupCallback = function t(e, r) {
      void 0 === r && "boolean" == typeof e && (r = e, e = null);
      return this._popupNavigator.callback(e, r, "?").then(function () {
        i.Log.info("UserManager.signoutPopupCallback: successful")
      })
    }, e.prototype._signout = function t(e, r) {
      var n = this,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return this._signoutStart(e, r, i).then(function (t) {
        return n._signoutEnd(t.url)
      })
    }, e.prototype._signoutStart = function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = this,
        n = arguments[1],
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return n.prepare(o).then(function (t) {
        return i.Log.debug("UserManager._signoutStart: got navigator window handle"), r._loadUser().then(function (n) {
          return i.Log.debug("UserManager._signoutStart: loaded current user from storage"), (r._settings.revokeAccessTokenOnSignout ? r._revokeInternal(n) : Promise.resolve()).then(function () {
            var s = e.id_token_hint || n && n.id_token;
            return s && (i.Log.debug("UserManager._signoutStart: Setting id_token into signout request"), e.id_token_hint = s), r.removeUser().then(function () {
              return i.Log.debug("UserManager._signoutStart: user removed, creating signout request"), r.createSignoutRequest(e).then(function (e) {
                return i.Log.debug("UserManager._signoutStart: got signout request"), o.url = e.url, e.state && (o.id = e.state.id), t.navigate(o)
              })
            })
          })
        }).catch(function (e) {
          throw t.close && (i.Log.debug("UserManager._signoutStart: Error after preparing navigator, closing navigator window"), t.close()), e
        })
      })
    }, e.prototype._signoutEnd = function t(e) {
      return this.processSignoutResponse(e).then(function (t) {
        return i.Log.debug("UserManager._signoutEnd: got signout response"), t
      })
    }, e.prototype.revokeAccessToken = function t() {
      var e = this;
      return this._loadUser().then(function (t) {
        return e._revokeInternal(t, !0).then(function (r) {
          if (r) return i.Log.debug("UserManager.revokeAccessToken: removing token properties from user and re-storing"), t.access_token = null, t.refresh_token = null, t.expires_at = null, t.token_type = null, e.storeUser(t).then(function () {
            i.Log.debug("UserManager.revokeAccessToken: user stored"), e._events.load(t)
          })
        })
      }).then(function () {
        i.Log.info("UserManager.revokeAccessToken: access token revoked successfully")
      })
    }, e.prototype._revokeInternal = function t(e, r) {
      var n = this;
      if (e) {
        var o = e.access_token,
          s = e.refresh_token;
        return this._revokeAccessTokenInternal(o, r).then(function (t) {
          return n._revokeRefreshTokenInternal(s, r).then(function (e) {
            return t || e || i.Log.debug("UserManager.revokeAccessToken: no need to revoke due to no token(s), or JWT format"), t || e
          })
        })
      }
      return Promise.resolve(!1)
    }, e.prototype._revokeAccessTokenInternal = function t(e, r) {
      return !e || e.indexOf(".") >= 0 ? Promise.resolve(!1) : this._tokenRevocationClient.revoke(e, r).then(function () {
        return !0
      })
    }, e.prototype._revokeRefreshTokenInternal = function t(e, r) {
      return e ? this._tokenRevocationClient.revoke(e, r, "refresh_token").then(function () {
        return !0
      }) : Promise.resolve(!1)
    }, e.prototype.startSilentRenew = function t() {
      this._silentRenewService.start()
    }, e.prototype.stopSilentRenew = function t() {
      this._silentRenewService.stop()
    }, e.prototype._loadUser = function t() {
      return this._userStore.get(this._userStoreKey).then(function (t) {
        return t ? (i.Log.debug("UserManager._loadUser: user storageString loaded"), a.User.fromStorageString(t)) : (i.Log.debug("UserManager._loadUser: no user storageString"), null)
      })
    }, e.prototype.storeUser = function t(e) {
      if (e) {
        i.Log.debug("UserManager.storeUser: storing user");
        var r = e.toStorageString();
        return this._userStore.set(this._userStoreKey, r)
      }
      return i.Log.debug("storeUser.storeUser: removing user"), this._userStore.remove(this._userStoreKey)
    }, n(e, [{
      key: "_redirectNavigator",
      get: function t() {
        return this.settings.redirectNavigator
      }
    }, {
      key: "_popupNavigator",
      get: function t() {
        return this.settings.popupNavigator
      }
    }, {
      key: "_iframeNavigator",
      get: function t() {
        return this.settings.iframeNavigator
      }
    }, {
      key: "_userStore",
      get: function t() {
        return this.settings.userStore
      }
    }, {
      key: "events",
      get: function t() {
        return this._events
      }
    }, {
      key: "_userStoreKey",
      get: function t() {
        return "user:" + this.settings.authority + ":" + this.settings.client_id
      }
    }]), e
  }(o.OidcClient)
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.UserManagerSettings = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = (r(3), r(99)),
    o = r(374),
    s = r(375),
    a = r(377),
    u = r(100),
    c = r(44),
    f = r(142);
  var h = 60,
    l = 2e3;
  e.UserManagerSettings = function (t) {
    function e() {
      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = r.popup_redirect_uri,
        i = r.popup_post_logout_redirect_uri,
        p = r.popupWindowFeatures,
        d = r.popupWindowTarget,
        g = r.silent_redirect_uri,
        v = r.silentRequestTimeout,
        y = r.automaticSilentRenew,
        m = void 0 !== y && y,
        _ = r.validateSubOnSilentRenew,
        S = void 0 !== _ && _,
        b = r.includeIdTokenInSilentRenew,
        w = void 0 === b || b,
        F = r.monitorSession,
        E = void 0 === F || F,
        x = r.checkSessionInterval,
        A = void 0 === x ? l : x,
        k = r.stopCheckSessionOnError,
        P = void 0 === k || k,
        C = r.query_status_response_type,
        T = r.revokeAccessTokenOnSignout,
        R = void 0 !== T && T,
        I = r.accessTokenExpiringNotificationTime,
        O = void 0 === I ? h : I,
        D = r.redirectNavigator,
        N = void 0 === D ? new o.RedirectNavigator : D,
        L = r.popupNavigator,
        M = void 0 === L ? new s.PopupNavigator : L,
        j = r.iframeNavigator,
        U = void 0 === j ? new a.IFrameNavigator : j,
        B = r.userStore,
        H = void 0 === B ? new u.WebStorageStateStore({
          store: c.Global.sessionStorage
        }) : B;
      ! function V(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, e);
      var K = function q(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
      }(this, t.call(this, arguments[0]));
      return K._popup_redirect_uri = n, K._popup_post_logout_redirect_uri = i, K._popupWindowFeatures = p, K._popupWindowTarget = d, K._silent_redirect_uri = g, K._silentRequestTimeout = v, K._automaticSilentRenew = m, K._validateSubOnSilentRenew = S, K._includeIdTokenInSilentRenew = w, K._accessTokenExpiringNotificationTime = O, K._monitorSession = E, K._checkSessionInterval = A, K._stopCheckSessionOnError = P, C ? K._query_status_response_type = C : arguments[0] && arguments[0].response_type ? K._query_status_response_type = f.SigninRequest.isOidc(arguments[0].response_type) ? "id_token" : "code" : K._query_status_response_type = "id_token", K._revokeAccessTokenOnSignout = R, K._redirectNavigator = N, K._popupNavigator = M, K._iframeNavigator = U, K._userStore = H, K
    }
    return function r(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }(e, t), n(e, [{
      key: "popup_redirect_uri",
      get: function t() {
        return this._popup_redirect_uri
      }
    }, {
      key: "popup_post_logout_redirect_uri",
      get: function t() {
        return this._popup_post_logout_redirect_uri
      }
    }, {
      key: "popupWindowFeatures",
      get: function t() {
        return this._popupWindowFeatures
      }
    }, {
      key: "popupWindowTarget",
      get: function t() {
        return this._popupWindowTarget
      }
    }, {
      key: "silent_redirect_uri",
      get: function t() {
        return this._silent_redirect_uri
      }
    }, {
      key: "silentRequestTimeout",
      get: function t() {
        return this._silentRequestTimeout
      }
    }, {
      key: "automaticSilentRenew",
      get: function t() {
        return this._automaticSilentRenew
      }
    }, {
      key: "validateSubOnSilentRenew",
      get: function t() {
        return this._validateSubOnSilentRenew
      }
    }, {
      key: "includeIdTokenInSilentRenew",
      get: function t() {
        return this._includeIdTokenInSilentRenew
      }
    }, {
      key: "accessTokenExpiringNotificationTime",
      get: function t() {
        return this._accessTokenExpiringNotificationTime
      }
    }, {
      key: "monitorSession",
      get: function t() {
        return this._monitorSession
      }
    }, {
      key: "checkSessionInterval",
      get: function t() {
        return this._checkSessionInterval
      }
    }, {
      key: "stopCheckSessionOnError",
      get: function t() {
        return this._stopCheckSessionOnError
      }
    }, {
      key: "query_status_response_type",
      get: function t() {
        return this._query_status_response_type
      }
    }, {
      key: "revokeAccessTokenOnSignout",
      get: function t() {
        return this._revokeAccessTokenOnSignout
      }
    }, {
      key: "redirectNavigator",
      get: function t() {
        return this._redirectNavigator
      }
    }, {
      key: "popupNavigator",
      get: function t() {
        return this._popupNavigator
      }
    }, {
      key: "iframeNavigator",
      get: function t() {
        return this._iframeNavigator
      }
    }, {
      key: "userStore",
      get: function t() {
        return this._userStore
      }
    }]), e
  }(i.OidcClientSettings)
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.RedirectNavigator = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3);
  e.RedirectNavigator = function () {
    function t() {
      ! function e(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
      }(this, t)
    }
    return t.prototype.prepare = function t() {
      return Promise.resolve(this)
    }, t.prototype.navigate = function t(e) {
      return e && e.url ? (e.useReplaceToNavigate ? window.location.replace(e.url) : window.location = e.url, Promise.resolve()) : (i.Log.error("RedirectNavigator.navigate: No url provided"), Promise.reject(new Error("No url provided")))
    }, n(t, [{
      key: "url",
      get: function t() {
        return window.location.href
      }
    }]), t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.PopupNavigator = void 0;
  var n = r(3),
    i = r(376);
  e.PopupNavigator = function () {
    function t() {
      ! function e(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
      }(this, t)
    }
    return t.prototype.prepare = function t(e) {
      var r = new i.PopupWindow(e);
      return Promise.resolve(r)
    }, t.prototype.callback = function t(e, r, o) {
      n.Log.debug("PopupNavigator.callback");
      try {
        return i.PopupWindow.notifyOpener(e, r, o), Promise.resolve()
      } catch (t) {
        return Promise.reject(t)
      }
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.PopupWindow = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3),
    o = r(55);
  var s = 500,
    a = "location=no,toolbar=no,width=500,height=500,left=100,top=100;",
    u = "_blank";
  e.PopupWindow = function () {
    function t(e) {
      var r = this;
      ! function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this._promise = new Promise(function (t, e) {
        r._resolve = t, r._reject = e
      });
      var o = e.popupWindowTarget || u,
        c = e.popupWindowFeatures || a;
      this._popup = window.open("", o, c), this._popup && (i.Log.debug("PopupWindow.ctor: popup successfully created"), this._checkForPopupClosedTimer = window.setInterval(this._checkForPopupClosed.bind(this), s))
    }
    return t.prototype.navigate = function t(e) {
      return this._popup ? e && e.url ? (i.Log.debug("PopupWindow.navigate: Setting URL in popup"), this._id = e.id, this._id && (window["popupCallback_" + e.id] = this._callback.bind(this)), this._popup.focus(), this._popup.window.location = e.url) : (this._error("PopupWindow.navigate: no url provided"), this._error("No url provided")) : this._error("PopupWindow.navigate: Error opening popup window"), this.promise
    }, t.prototype._success = function t(e) {
      i.Log.debug("PopupWindow.callback: Successful response from popup window"), this._cleanup(), this._resolve(e)
    }, t.prototype._error = function t(e) {
      i.Log.error("PopupWindow.error: ", e), this._cleanup(), this._reject(new Error(e))
    }, t.prototype.close = function t() {
      this._cleanup(!1)
    }, t.prototype._cleanup = function t(e) {
      i.Log.debug("PopupWindow.cleanup"), window.clearInterval(this._checkForPopupClosedTimer), this._checkForPopupClosedTimer = null, delete window["popupCallback_" + this._id], this._popup && !e && this._popup.close(), this._popup = null
    }, t.prototype._checkForPopupClosed = function t() {
      this._popup && !this._popup.closed || this._error("Popup window closed")
    }, t.prototype._callback = function t(e, r) {
      this._cleanup(r), e ? (i.Log.debug("PopupWindow.callback success"), this._success({
        url: e
      })) : (i.Log.debug("PopupWindow.callback: Invalid response from popup"), this._error("Invalid response from popup"))
    }, t.notifyOpener = function t(e, r, n) {
      if (window.opener) {
        if (e = e || window.location.href) {
          var s = o.UrlUtility.parseUrlFragment(e, n);
          if (s.state) {
            var a = "popupCallback_" + s.state,
              u = window.opener[a];
            u ? (i.Log.debug("PopupWindow.notifyOpener: passing url message to opener"), u(e, r)) : i.Log.warn("PopupWindow.notifyOpener: no matching callback found on opener")
          } else i.Log.warn("PopupWindow.notifyOpener: no state found in response url")
        }
      } else i.Log.warn("PopupWindow.notifyOpener: no window.opener. Can't complete notification.")
    }, n(t, [{
      key: "promise",
      get: function t() {
        return this._promise
      }
    }]), t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IFrameNavigator = void 0;
  var n = r(3),
    i = r(378);
  e.IFrameNavigator = function () {
    function t() {
      ! function e(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
      }(this, t)
    }
    return t.prototype.prepare = function t(e) {
      var r = new i.IFrameWindow(e);
      return Promise.resolve(r)
    }, t.prototype.callback = function t(e) {
      n.Log.debug("IFrameNavigator.callback");
      try {
        return i.IFrameWindow.notifyParent(e), Promise.resolve()
      } catch (t) {
        return Promise.reject(t)
      }
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IFrameWindow = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3);
  e.IFrameWindow = function () {
    function t(e) {
      var r = this;
      ! function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this._promise = new Promise(function (t, e) {
        r._resolve = t, r._reject = e
      }), this._boundMessageEvent = this._message.bind(this), window.addEventListener("message", this._boundMessageEvent, !1), this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "absolute", this._frame.style.display = "none", this._frame.style.width = 0, this._frame.style.height = 0, window.document.body.appendChild(this._frame)
    }
    return t.prototype.navigate = function t(e) {
      if (e && e.url) {
        var r = e.silentRequestTimeout || 1e4;
        i.Log.debug("IFrameWindow.navigate: Using timeout of:", r), this._timer = window.setTimeout(this._timeout.bind(this), r), this._frame.src = e.url
      } else this._error("No url provided");
      return this.promise
    }, t.prototype._success = function t(e) {
      this._cleanup(), i.Log.debug("IFrameWindow: Successful response from frame window"), this._resolve(e)
    }, t.prototype._error = function t(e) {
      this._cleanup(), i.Log.error(e), this._reject(new Error(e))
    }, t.prototype.close = function t() {
      this._cleanup()
    }, t.prototype._cleanup = function t() {
      this._frame && (i.Log.debug("IFrameWindow: cleanup"), window.removeEventListener("message", this._boundMessageEvent, !1), window.clearTimeout(this._timer), window.document.body.removeChild(this._frame), this._timer = null, this._frame = null, this._boundMessageEvent = null)
    }, t.prototype._timeout = function t() {
      i.Log.debug("IFrameWindow.timeout"), this._error("Frame window timed out")
    }, t.prototype._message = function t(e) {
      if (i.Log.debug("IFrameWindow.message"), this._timer && e.origin === this._origin && e.source === this._frame.contentWindow) {
        var r = e.data;
        r ? this._success({
          url: r
        }) : this._error("Invalid response from frame")
      }
    }, t.notifyParent = function t(e) {
      i.Log.debug("IFrameWindow.notifyParent"), window.frameElement && (e = e || window.location.href) && (i.Log.debug("IFrameWindow.notifyParent: posting url message to parent"), window.parent.postMessage(e, location.protocol + "//" + location.host))
    }, n(t, [{
      key: "promise",
      get: function t() {
        return this._promise
      }
    }, {
      key: "_origin",
      get: function t() {
        return location.protocol + "//" + location.host
      }
    }]), t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.UserManagerEvents = void 0;
  var n = r(3),
    i = r(146),
    o = r(147);
  e.UserManagerEvents = function (t) {
    function e(r) {
      ! function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, e);
      var i = function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
      }(this, t.call(this, r));
      return i._userLoaded = new o.Event("User loaded"), i._userUnloaded = new o.Event("User unloaded"), i._silentRenewError = new o.Event("Silent renew error"), i._userSignedOut = new o.Event("User signed out"), i._userSessionChanged = new o.Event("User session changed"), i
    }
    return function r(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }(e, t), e.prototype.load = function e(r) {
      var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      n.Log.debug("UserManagerEvents.load"), t.prototype.load.call(this, r), i && this._userLoaded.raise(r)
    }, e.prototype.unload = function e() {
      n.Log.debug("UserManagerEvents.unload"), t.prototype.unload.call(this), this._userUnloaded.raise()
    }, e.prototype.addUserLoaded = function t(e) {
      this._userLoaded.addHandler(e)
    }, e.prototype.removeUserLoaded = function t(e) {
      this._userLoaded.removeHandler(e)
    }, e.prototype.addUserUnloaded = function t(e) {
      this._userUnloaded.addHandler(e)
    }, e.prototype.removeUserUnloaded = function t(e) {
      this._userUnloaded.removeHandler(e)
    }, e.prototype.addSilentRenewError = function t(e) {
      this._silentRenewError.addHandler(e)
    }, e.prototype.removeSilentRenewError = function t(e) {
      this._silentRenewError.removeHandler(e)
    }, e.prototype._raiseSilentRenewError = function t(e) {
      n.Log.debug("UserManagerEvents._raiseSilentRenewError", e.message), this._silentRenewError.raise(e)
    }, e.prototype.addUserSignedOut = function t(e) {
      this._userSignedOut.addHandler(e)
    }, e.prototype.removeUserSignedOut = function t(e) {
      this._userSignedOut.removeHandler(e)
    }, e.prototype._raiseUserSignedOut = function t() {
      n.Log.debug("UserManagerEvents._raiseUserSignedOut"), this._userSignedOut.raise()
    }, e.prototype.addUserSessionChanged = function t(e) {
      this._userSessionChanged.addHandler(e)
    }, e.prototype.removeUserSessionChanged = function t(e) {
      this._userSessionChanged.removeHandler(e)
    }, e.prototype._raiseUserSessionChanged = function t() {
      n.Log.debug("UserManagerEvents._raiseUserSessionChanged"), this._userSessionChanged.raise()
    }, e
  }(i.AccessTokenEvents)
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Timer = void 0;
  var n = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(),
    i = r(3),
    o = r(44),
    s = r(147);
  e.Timer = function (t) {
    function e(r) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Global.timer,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      ! function s(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, e);
      var a = function u(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
      }(this, t.call(this, r));
      return a._timer = n, a._nowFunc = i || function () {
        return Date.now() / 1e3
      }, a
    }
    return function r(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }(e, t), e.prototype.init = function t(e) {
      e <= 0 && (e = 1), e = parseInt(e);
      var r = this.now + e;
      if (this.expiration === r && this._timerHandle) i.Log.debug("Timer.init timer " + this._name + " skipping initialization since already initialized for expiration:", this.expiration);
      else {
        this.cancel(), i.Log.debug("Timer.init timer " + this._name + " for duration:", e), this._expiration = r;
        var n = 5;
        e < n && (n = e), this._timerHandle = this._timer.setInterval(this._callback.bind(this), 1e3 * n)
      }
    }, e.prototype.cancel = function t() {
      this._timerHandle && (i.Log.debug("Timer.cancel: ", this._name), this._timer.clearInterval(this._timerHandle), this._timerHandle = null)
    }, e.prototype._callback = function e() {
      var r = this._expiration - this.now;
      i.Log.debug("Timer.callback; " + this._name + " timer expires in:", r), this._expiration <= this.now && (this.cancel(), t.prototype.raise.call(this))
    }, n(e, [{
      key: "now",
      get: function t() {
        return parseInt(this._nowFunc())
      }
    }, {
      key: "expiration",
      get: function t() {
        return this._expiration
      }
    }]), e
  }(s.Event)
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.SilentRenewService = void 0;
  var n = r(3);
  e.SilentRenewService = function () {
    function t(e) {
      ! function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this._userManager = e
    }
    return t.prototype.start = function t() {
      this._callback || (this._callback = this._tokenExpiring.bind(this), this._userManager.events.addAccessTokenExpiring(this._callback), this._userManager.getUser().then(function (t) {}).catch(function (t) {
        n.Log.error("SilentRenewService.start: Error from getUser:", t.message)
      }))
    }, t.prototype.stop = function t() {
      this._callback && (this._userManager.events.removeAccessTokenExpiring(this._callback), delete this._callback)
    }, t.prototype._tokenExpiring = function t() {
      var e = this;
      this._userManager.signinSilent().then(function (t) {
        n.Log.debug("SilentRenewService._tokenExpiring: Silent token renewal successful")
      }, function (t) {
        n.Log.error("SilentRenewService._tokenExpiring: Error from signinSilent:", t.message), e._userManager.events._raiseSilentRenewError(t)
      })
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.CordovaPopupNavigator = void 0;
  var n = r(151);
  e.CordovaPopupNavigator = function () {
    function t() {
      ! function e(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
      }(this, t)
    }
    return t.prototype.prepare = function t(e) {
      var r = new n.CordovaPopupWindow(e);
      return Promise.resolve(r)
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.CordovaIFrameNavigator = void 0;
  var n = r(151);
  e.CordovaIFrameNavigator = function () {
    function t() {
      ! function e(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
      }(this, t)
    }
    return t.prototype.prepare = function t(e) {
      e.popupWindowFeatures = "hidden=yes";
      var r = new n.CordovaPopupWindow(e);
      return Promise.resolve(r)
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.Version = "1.9.1"
}]);

layui.define(function (exports) {
  exports('oidc', Oidc);
});
