!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : (e.moment = t());
})(this, function () {
    "use strict";
    var e, i;
    function c() {
        return e.apply(null, arguments);
    }
    function o(e) {
        return (
            e instanceof Array ||
            "[object Array]" === Object.prototype.toString.call(e)
        );
    }
    function u(e) {
        return (
            null != e && "[object Object]" === Object.prototype.toString.call(e)
        );
    }
    function l(e) {
        return void 0 === e;
    }
    function h(e) {
        return (
            "number" == typeof e ||
            "[object Number]" === Object.prototype.toString.call(e)
        );
    }
    function d(e) {
        return (
            e instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(e)
        );
    }
    function f(e, t) {
        var n,
            s = [];
        for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
        return s;
    }
    function m(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }
    function _(e, t) {
        for (var n in t) m(t, n) && (e[n] = t[n]);
        return (
            m(t, "toString") && (e.toString = t.toString),
            m(t, "valueOf") && (e.valueOf = t.valueOf),
            e
        );
    }
    function y(e, t, n, s) {
        return Tt(e, t, n, s, !0).utc();
    }
    function g(e) {
        return (
            null == e._pf &&
                (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1,
                }),
            e._pf
        );
    }
    function v(e) {
        if (null == e._isValid) {
            var t = g(e),
                n = i.call(t.parsedDateParts, function (e) {
                    return null != e;
                }),
                s =
                    !isNaN(e._d.getTime()) &&
                    t.overflow < 0 &&
                    !t.empty &&
                    !t.invalidMonth &&
                    !t.invalidWeekday &&
                    !t.weekdayMismatch &&
                    !t.nullInput &&
                    !t.invalidFormat &&
                    !t.userInvalidated &&
                    (!t.meridiem || (t.meridiem && n));
            if (
                (e._strict &&
                    (s =
                        s &&
                        0 === t.charsLeftOver &&
                        0 === t.unusedTokens.length &&
                        void 0 === t.bigHour),
                null != Object.isFrozen && Object.isFrozen(e))
            )
                return s;
            e._isValid = s;
        }
        return e._isValid;
    }
    function p(e) {
        var t = y(NaN);
        return null != e ? _(g(t), e) : (g(t).userInvalidated = !0), t;
    }
    i = Array.prototype.some
        ? Array.prototype.some
        : function (e) {
              for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
                  if (s in t && e.call(this, t[s], s, t)) return !0;
              return !1;
          };
    var r = (c.momentProperties = []);
    function w(e, t) {
        var n, s, i;
        if (
            (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
            l(t._i) || (e._i = t._i),
            l(t._f) || (e._f = t._f),
            l(t._l) || (e._l = t._l),
            l(t._strict) || (e._strict = t._strict),
            l(t._tzm) || (e._tzm = t._tzm),
            l(t._isUTC) || (e._isUTC = t._isUTC),
            l(t._offset) || (e._offset = t._offset),
            l(t._pf) || (e._pf = g(t)),
            l(t._locale) || (e._locale = t._locale),
            0 < r.length)
        )
            for (n = 0; n < r.length; n++) l((i = t[(s = r[n])])) || (e[s] = i);
        return e;
    }
    var t = !1;
    function M(e) {
        w(this, e),
            (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === t && ((t = !0), c.updateOffset(this), (t = !1));
    }
    function k(e) {
        return e instanceof M || (null != e && null != e._isAMomentObject);
    }
    function S(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }
    function D(e) {
        var t = +e,
            n = 0;
        return 0 !== t && isFinite(t) && (n = S(t)), n;
    }
    function a(e, t, n) {
        var s,
            i = Math.min(e.length, t.length),
            r = Math.abs(e.length - t.length),
            a = 0;
        for (s = 0; s < i; s++)
            ((n && e[s] !== t[s]) || (!n && D(e[s]) !== D(t[s]))) && a++;
        return a + r;
    }
    function Y(e) {
        !1 === c.suppressDeprecationWarnings &&
            "undefined" != typeof console &&
            console.warn &&
            console.warn("Deprecation warning: " + e);
    }
    function n(i, r) {
        var a = !0;
        return _(function () {
            if (
                (null != c.deprecationHandler && c.deprecationHandler(null, i),
                a)
            ) {
                for (var e, t = [], n = 0; n < arguments.length; n++) {
                    if (((e = ""), "object" == typeof arguments[n])) {
                        for (var s in ((e += "\n[" + n + "] "), arguments[0]))
                            e += s + ": " + arguments[0][s] + ", ";
                        e = e.slice(0, -2);
                    } else e = arguments[n];
                    t.push(e);
                }
                Y(
                    i +
                        "\nArguments: " +
                        Array.prototype.slice.call(t).join("") +
                        "\n" +
                        new Error().stack
                ),
                    (a = !1);
            }
            return r.apply(this, arguments);
        }, r);
    }
    var s,
        O = {};
    function T(e, t) {
        null != c.deprecationHandler && c.deprecationHandler(e, t),
            O[e] || (Y(t), (O[e] = !0));
    }
    function b(e) {
        return (
            e instanceof Function ||
            "[object Function]" === Object.prototype.toString.call(e)
        );
    }
    function x(e, t) {
        var n,
            s = _({}, e);
        for (n in t)
            m(t, n) &&
                (u(e[n]) && u(t[n])
                    ? ((s[n] = {}), _(s[n], e[n]), _(s[n], t[n]))
                    : null != t[n]
                    ? (s[n] = t[n])
                    : delete s[n]);
        for (n in e) m(e, n) && !m(t, n) && u(e[n]) && (s[n] = _({}, s[n]));
        return s;
    }
    function P(e) {
        null != e && this.set(e);
    }
    (c.suppressDeprecationWarnings = !1),
        (c.deprecationHandler = null),
        (s = Object.keys
            ? Object.keys
            : function (e) {
                  var t,
                      n = [];
                  for (t in e) m(e, t) && n.push(t);
                  return n;
              });
    var W = {};
    function C(e, t) {
        var n = e.toLowerCase();
        W[n] = W[n + "s"] = W[t] = e;
    }
    function H(e) {
        return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0;
    }
    function R(e) {
        var t,
            n,
            s = {};
        for (n in e) m(e, n) && (t = H(n)) && (s[t] = e[n]);
        return s;
    }
    var U = {};
    function F(e, t) {
        U[e] = t;
    }
    function L(e, t, n) {
        var s = "" + Math.abs(e),
            i = t - s.length;
        return (
            (0 <= e ? (n ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, i)).toString().substr(1) +
            s
        );
    }
    var N =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        V = {},
        E = {};
    function I(e, t, n, s) {
        var i = s;
        "string" == typeof s &&
            (i = function () {
                return this[s]();
            }),
            e && (E[e] = i),
            t &&
                (E[t[0]] = function () {
                    return L(i.apply(this, arguments), t[1], t[2]);
                }),
            n &&
                (E[n] = function () {
                    return this.localeData().ordinal(
                        i.apply(this, arguments),
                        e
                    );
                });
    }
    function A(e, t) {
        return e.isValid()
            ? ((t = j(t, e.localeData())),
              (V[t] =
                  V[t] ||
                  (function (s) {
                      var e,
                          i,
                          t,
                          r = s.match(N);
                      for (e = 0, i = r.length; e < i; e++)
                          E[r[e]]
                              ? (r[e] = E[r[e]])
                              : (r[e] = (t = r[e]).match(/\[[\s\S]/)
                                    ? t.replace(/^\[|\]$/g, "")
                                    : t.replace(/\\/g, ""));
                      return function (e) {
                          var t,
                              n = "";
                          for (t = 0; t < i; t++)
                              n += b(r[t]) ? r[t].call(e, s) : r[t];
                          return n;
                      };
                  })(t)),
              V[t](e))
            : e.localeData().invalidDate();
    }
    function j(e, t) {
        var n = 5;
        function s(e) {
            return t.longDateFormat(e) || e;
        }
        for (G.lastIndex = 0; 0 <= n && G.test(e); )
            (e = e.replace(G, s)), (G.lastIndex = 0), (n -= 1);
        return e;
    }
    var Z = /\d/,
        z = /\d\d/,
        $ = /\d{3}/,
        q = /\d{4}/,
        J = /[+-]?\d{6}/,
        B = /\d\d?/,
        Q = /\d\d\d\d?/,
        X = /\d\d\d\d\d\d?/,
        K = /\d{1,3}/,
        ee = /\d{1,4}/,
        te = /[+-]?\d{1,6}/,
        ne = /\d+/,
        se = /[+-]?\d+/,
        ie = /Z|[+-]\d\d:?\d\d/gi,
        re = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ae =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        oe = {};
    function ue(e, n, s) {
        oe[e] = b(n)
            ? n
            : function (e, t) {
                  return e && s ? s : n;
              };
    }
    function le(e, t) {
        return m(oe, e)
            ? oe[e](t._strict, t._locale)
            : new RegExp(
                  he(
                      e
                          .replace("\\", "")
                          .replace(
                              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                              function (e, t, n, s, i) {
                                  return t || n || s || i;
                              }
                          )
                  )
              );
    }
    function he(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    var de = {};
    function ce(e, n) {
        var t,
            s = n;
        for (
            "string" == typeof e && (e = [e]),
                h(n) &&
                    (s = function (e, t) {
                        t[n] = D(e);
                    }),
                t = 0;
            t < e.length;
            t++
        )
            de[e[t]] = s;
    }
    function fe(e, i) {
        ce(e, function (e, t, n, s) {
            (n._w = n._w || {}), i(e, n._w, n, s);
        });
    }
    var me = 0,
        _e = 1,
        ye = 2,
        ge = 3,
        ve = 4,
        pe = 5,
        we = 6,
        Me = 7,
        ke = 8;
    function Se(e) {
        return De(e) ? 366 : 365;
    }
    function De(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    }
    I("Y", 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e;
    }),
        I(0, ["YY", 2], 0, function () {
            return this.year() % 100;
        }),
        I(0, ["YYYY", 4], 0, "year"),
        I(0, ["YYYYY", 5], 0, "year"),
        I(0, ["YYYYYY", 6, !0], 0, "year"),
        C("year", "y"),
        F("year", 1),
        ue("Y", se),
        ue("YY", B, z),
        ue("YYYY", ee, q),
        ue("YYYYY", te, J),
        ue("YYYYYY", te, J),
        ce(["YYYYY", "YYYYYY"], me),
        ce("YYYY", function (e, t) {
            t[me] = 2 === e.length ? c.parseTwoDigitYear(e) : D(e);
        }),
        ce("YY", function (e, t) {
            t[me] = c.parseTwoDigitYear(e);
        }),
        ce("Y", function (e, t) {
            t[me] = parseInt(e, 10);
        }),
        (c.parseTwoDigitYear = function (e) {
            return D(e) + (68 < D(e) ? 1900 : 2e3);
        });
    var Ye,
        Oe = Te("FullYear", !0);
    function Te(t, n) {
        return function (e) {
            return null != e
                ? (xe(this, t, e), c.updateOffset(this, n), this)
                : be(this, t);
        };
    }
    function be(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
    }
    function xe(e, t, n) {
        e.isValid() &&
            !isNaN(n) &&
            ("FullYear" === t &&
            De(e.year()) &&
            1 === e.month() &&
            29 === e.date()
                ? e._d["set" + (e._isUTC ? "UTC" : "") + t](
                      n,
                      e.month(),
                      Pe(n, e.month())
                  )
                : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
    }
    function Pe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n,
            s = ((t % (n = 12)) + n) % n;
        return (
            (e += (t - s) / 12),
            1 === s ? (De(e) ? 29 : 28) : 31 - ((s % 7) % 2)
        );
    }
    (Ye = Array.prototype.indexOf
        ? Array.prototype.indexOf
        : function (e) {
              var t;
              for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
              return -1;
          }),
        I("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
        }),
        I("MMM", 0, 0, function (e) {
            return this.localeData().monthsShort(this, e);
        }),
        I("MMMM", 0, 0, function (e) {
            return this.localeData().months(this, e);
        }),
        C("month", "M"),
        F("month", 8),
        ue("M", B),
        ue("MM", B, z),
        ue("MMM", function (e, t) {
            return t.monthsShortRegex(e);
        }),
        ue("MMMM", function (e, t) {
            return t.monthsRegex(e);
        }),
        ce(["M", "MM"], function (e, t) {
            t[_e] = D(e) - 1;
        }),
        ce(["MMM", "MMMM"], function (e, t, n, s) {
            var i = n._locale.monthsParse(e, s, n._strict);
            null != i ? (t[_e] = i) : (g(n).invalidMonth = e);
        });
    var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Ce =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
            );
    var He = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function Re(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t)
            if (/^\d+$/.test(t)) t = D(t);
            else if (!h((t = e.localeData().monthsParse(t)))) return e;
        return (
            (n = Math.min(e.date(), Pe(e.year(), t))),
            e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
            e
        );
    }
    function Ue(e) {
        return null != e
            ? (Re(this, e), c.updateOffset(this, !0), this)
            : be(this, "Month");
    }
    var Fe = ae;
    var Le = ae;
    function Ne() {
        function e(e, t) {
            return t.length - e.length;
        }
        var t,
            n,
            s = [],
            i = [],
            r = [];
        for (t = 0; t < 12; t++)
            (n = y([2e3, t])),
                s.push(this.monthsShort(n, "")),
                i.push(this.months(n, "")),
                r.push(this.months(n, "")),
                r.push(this.monthsShort(n, ""));
        for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++)
            (s[t] = he(s[t])), (i[t] = he(i[t]));
        for (t = 0; t < 24; t++) r[t] = he(r[t]);
        (this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i"
            )),
            (this._monthsShortStrictRegex = new RegExp(
                "^(" + s.join("|") + ")",
                "i"
            ));
    }
    function Ge(e) {
        var t;
        if (e < 100 && 0 <= e) {
            var n = Array.prototype.slice.call(arguments);
            (n[0] = e + 400),
                (t = new Date(Date.UTC.apply(null, n))),
                isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e);
        } else t = new Date(Date.UTC.apply(null, arguments));
        return t;
    }
    function Ve(e, t, n) {
        var s = 7 + t - n;
        return -((7 + Ge(e, 0, s).getUTCDay() - t) % 7) + s - 1;
    }
    function Ee(e, t, n, s, i) {
        var r,
            a,
            o = 1 + 7 * (t - 1) + ((7 + n - s) % 7) + Ve(e, s, i);
        return (
            (a =
                o <= 0
                    ? Se((r = e - 1)) + o
                    : o > Se(e)
                    ? ((r = e + 1), o - Se(e))
                    : ((r = e), o)),
            { year: r, dayOfYear: a }
        );
    }
    function Ie(e, t, n) {
        var s,
            i,
            r = Ve(e.year(), t, n),
            a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return (
            a < 1
                ? (s = a + Ae((i = e.year() - 1), t, n))
                : a > Ae(e.year(), t, n)
                ? ((s = a - Ae(e.year(), t, n)), (i = e.year() + 1))
                : ((i = e.year()), (s = a)),
            { week: s, year: i }
        );
    }
    function Ae(e, t, n) {
        var s = Ve(e, t, n),
            i = Ve(e + 1, t, n);
        return (Se(e) - s + i) / 7;
    }
    I("w", ["ww", 2], "wo", "week"),
        I("W", ["WW", 2], "Wo", "isoWeek"),
        C("week", "w"),
        C("isoWeek", "W"),
        F("week", 5),
        F("isoWeek", 5),
        ue("w", B),
        ue("ww", B, z),
        ue("W", B),
        ue("WW", B, z),
        fe(["w", "ww", "W", "WW"], function (e, t, n, s) {
            t[s.substr(0, 1)] = D(e);
        });
    function je(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t));
    }
    I("d", 0, "do", "day"),
        I("dd", 0, 0, function (e) {
            return this.localeData().weekdaysMin(this, e);
        }),
        I("ddd", 0, 0, function (e) {
            return this.localeData().weekdaysShort(this, e);
        }),
        I("dddd", 0, 0, function (e) {
            return this.localeData().weekdays(this, e);
        }),
        I("e", 0, 0, "weekday"),
        I("E", 0, 0, "isoWeekday"),
        C("day", "d"),
        C("weekday", "e"),
        C("isoWeekday", "E"),
        F("day", 11),
        F("weekday", 11),
        F("isoWeekday", 11),
        ue("d", B),
        ue("e", B),
        ue("E", B),
        ue("dd", function (e, t) {
            return t.weekdaysMinRegex(e);
        }),
        ue("ddd", function (e, t) {
            return t.weekdaysShortRegex(e);
        }),
        ue("dddd", function (e, t) {
            return t.weekdaysRegex(e);
        }),
        fe(["dd", "ddd", "dddd"], function (e, t, n, s) {
            var i = n._locale.weekdaysParse(e, s, n._strict);
            null != i ? (t.d = i) : (g(n).invalidWeekday = e);
        }),
        fe(["d", "e", "E"], function (e, t, n, s) {
            t[s] = D(e);
        });
    var Ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_"
    );
    var ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var $e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var qe = ae;
    var Je = ae;
    var Be = ae;
    function Qe() {
        function e(e, t) {
            return t.length - e.length;
        }
        var t,
            n,
            s,
            i,
            r,
            a = [],
            o = [],
            u = [],
            l = [];
        for (t = 0; t < 7; t++)
            (n = y([2e3, 1]).day(t)),
                (s = this.weekdaysMin(n, "")),
                (i = this.weekdaysShort(n, "")),
                (r = this.weekdays(n, "")),
                a.push(s),
                o.push(i),
                u.push(r),
                l.push(s),
                l.push(i),
                l.push(r);
        for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++)
            (o[t] = he(o[t])), (u[t] = he(u[t])), (l[t] = he(l[t]));
        (this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
                "^(" + u.join("|") + ")",
                "i"
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i"
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + a.join("|") + ")",
                "i"
            ));
    }
    function Xe() {
        return this.hours() % 12 || 12;
    }
    function Ke(e, t) {
        I(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
        });
    }
    function et(e, t) {
        return t._meridiemParse;
    }
    I("H", ["HH", 2], 0, "hour"),
        I("h", ["hh", 2], 0, Xe),
        I("k", ["kk", 2], 0, function () {
            return this.hours() || 24;
        }),
        I("hmm", 0, 0, function () {
            return "" + Xe.apply(this) + L(this.minutes(), 2);
        }),
        I("hmmss", 0, 0, function () {
            return (
                "" +
                Xe.apply(this) +
                L(this.minutes(), 2) +
                L(this.seconds(), 2)
            );
        }),
        I("Hmm", 0, 0, function () {
            return "" + this.hours() + L(this.minutes(), 2);
        }),
        I("Hmmss", 0, 0, function () {
            return (
                "" + this.hours() + L(this.minutes(), 2) + L(this.seconds(), 2)
            );
        }),
        Ke("a", !0),
        Ke("A", !1),
        C("hour", "h"),
        F("hour", 13),
        ue("a", et),
        ue("A", et),
        ue("H", B),
        ue("h", B),
        ue("k", B),
        ue("HH", B, z),
        ue("hh", B, z),
        ue("kk", B, z),
        ue("hmm", Q),
        ue("hmmss", X),
        ue("Hmm", Q),
        ue("Hmmss", X),
        ce(["H", "HH"], ge),
        ce(["k", "kk"], function (e, t, n) {
            var s = D(e);
            t[ge] = 24 === s ? 0 : s;
        }),
        ce(["a", "A"], function (e, t, n) {
            (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
        }),
        ce(["h", "hh"], function (e, t, n) {
            (t[ge] = D(e)), (g(n).bigHour = !0);
        }),
        ce("hmm", function (e, t, n) {
            var s = e.length - 2;
            (t[ge] = D(e.substr(0, s))),
                (t[ve] = D(e.substr(s))),
                (g(n).bigHour = !0);
        }),
        ce("hmmss", function (e, t, n) {
            var s = e.length - 4,
                i = e.length - 2;
            (t[ge] = D(e.substr(0, s))),
                (t[ve] = D(e.substr(s, 2))),
                (t[pe] = D(e.substr(i))),
                (g(n).bigHour = !0);
        }),
        ce("Hmm", function (e, t, n) {
            var s = e.length - 2;
            (t[ge] = D(e.substr(0, s))), (t[ve] = D(e.substr(s)));
        }),
        ce("Hmmss", function (e, t, n) {
            var s = e.length - 4,
                i = e.length - 2;
            (t[ge] = D(e.substr(0, s))),
                (t[ve] = D(e.substr(s, 2))),
                (t[pe] = D(e.substr(i)));
        });
    var tt,
        nt = Te("Hours", !0),
        st = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L",
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A",
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years",
            },
            months: Ce,
            monthsShort: He,
            week: { dow: 0, doy: 6 },
            weekdays: Ze,
            weekdaysMin: $e,
            weekdaysShort: ze,
            meridiemParse: /[ap]\.?m?\.?/i,
        },
        it = {},
        rt = {};
    function at(e) {
        return e ? e.toLowerCase().replace("_", "-") : e;
    }
    function ot(e) {
        var t = null;
        if (!it[e] && "undefined" != typeof module && module && module.exports)
            try {
                (t = tt._abbr), require("./locale/" + e), ut(t);
            } catch (e) {}
        return it[e];
    }
    function ut(e, t) {
        var n;
        return (
            e &&
                ((n = l(t) ? ht(e) : lt(e, t))
                    ? (tt = n)
                    : "undefined" != typeof console &&
                      console.warn &&
                      console.warn(
                          "Locale " +
                              e +
                              " not found. Did you forget to load it?"
                      )),
            tt._abbr
        );
    }
    function lt(e, t) {
        if (null === t) return delete it[e], null;
        var n,
            s = st;
        if (((t.abbr = e), null != it[e]))
            T(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            ),
                (s = it[e]._config);
        else if (null != t.parentLocale)
            if (null != it[t.parentLocale]) s = it[t.parentLocale]._config;
            else {
                if (null == (n = ot(t.parentLocale)))
                    return (
                        rt[t.parentLocale] || (rt[t.parentLocale] = []),
                        rt[t.parentLocale].push({ name: e, config: t }),
                        null
                    );
                s = n._config;
            }
        return (
            (it[e] = new P(x(s, t))),
            rt[e] &&
                rt[e].forEach(function (e) {
                    lt(e.name, e.config);
                }),
            ut(e),
            it[e]
        );
    }
    function ht(e) {
        var t;
        if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
            return tt;
        if (!o(e)) {
            if ((t = ot(e))) return t;
            e = [e];
        }
        return (function (e) {
            for (var t, n, s, i, r = 0; r < e.length; ) {
                for (
                    t = (i = at(e[r]).split("-")).length,
                        n = (n = at(e[r + 1])) ? n.split("-") : null;
                    0 < t;

                ) {
                    if ((s = ot(i.slice(0, t).join("-")))) return s;
                    if (n && n.length >= t && a(i, n, !0) >= t - 1) break;
                    t--;
                }
                r++;
            }
            return tt;
        })(e);
    }
    function dt(e) {
        var t,
            n = e._a;
        return (
            n &&
                -2 === g(e).overflow &&
                ((t =
                    n[_e] < 0 || 11 < n[_e]
                        ? _e
                        : n[ye] < 1 || n[ye] > Pe(n[me], n[_e])
                        ? ye
                        : n[ge] < 0 ||
                          24 < n[ge] ||
                          (24 === n[ge] &&
                              (0 !== n[ve] || 0 !== n[pe] || 0 !== n[we]))
                        ? ge
                        : n[ve] < 0 || 59 < n[ve]
                        ? ve
                        : n[pe] < 0 || 59 < n[pe]
                        ? pe
                        : n[we] < 0 || 999 < n[we]
                        ? we
                        : -1),
                g(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye),
                g(e)._overflowWeeks && -1 === t && (t = Me),
                g(e)._overflowWeekday && -1 === t && (t = ke),
                (g(e).overflow = t)),
            e
        );
    }
    function ct(e, t, n) {
        return null != e ? e : null != t ? t : n;
    }
    function ft(e) {
        var t,
            n,
            s,
            i,
            r,
            a = [];
        if (!e._d) {
            var o, u;
            for (
                o = e,
                    u = new Date(c.now()),
                    s = o._useUTC
                        ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()]
                        : [u.getFullYear(), u.getMonth(), u.getDate()],
                    e._w &&
                        null == e._a[ye] &&
                        null == e._a[_e] &&
                        (function (e) {
                            var t, n, s, i, r, a, o, u;
                            if (
                                null != (t = e._w).GG ||
                                null != t.W ||
                                null != t.E
                            )
                                (r = 1),
                                    (a = 4),
                                    (n = ct(
                                        t.GG,
                                        e._a[me],
                                        Ie(bt(), 1, 4).year
                                    )),
                                    (s = ct(t.W, 1)),
                                    ((i = ct(t.E, 1)) < 1 || 7 < i) && (u = !0);
                            else {
                                (r = e._locale._week.dow),
                                    (a = e._locale._week.doy);
                                var l = Ie(bt(), r, a);
                                (n = ct(t.gg, e._a[me], l.year)),
                                    (s = ct(t.w, l.week)),
                                    null != t.d
                                        ? ((i = t.d) < 0 || 6 < i) && (u = !0)
                                        : null != t.e
                                        ? ((i = t.e + r),
                                          (t.e < 0 || 6 < t.e) && (u = !0))
                                        : (i = r);
                            }
                            s < 1 || s > Ae(n, r, a)
                                ? (g(e)._overflowWeeks = !0)
                                : null != u
                                ? (g(e)._overflowWeekday = !0)
                                : ((o = Ee(n, s, i, r, a)),
                                  (e._a[me] = o.year),
                                  (e._dayOfYear = o.dayOfYear));
                        })(e),
                    null != e._dayOfYear &&
                        ((r = ct(e._a[me], s[me])),
                        (e._dayOfYear > Se(r) || 0 === e._dayOfYear) &&
                            (g(e)._overflowDayOfYear = !0),
                        (n = Ge(r, 0, e._dayOfYear)),
                        (e._a[_e] = n.getUTCMonth()),
                        (e._a[ye] = n.getUTCDate())),
                    t = 0;
                t < 3 && null == e._a[t];
                ++t
            )
                e._a[t] = a[t] = s[t];
            for (; t < 7; t++)
                e._a[t] = a[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
            24 === e._a[ge] &&
                0 === e._a[ve] &&
                0 === e._a[pe] &&
                0 === e._a[we] &&
                ((e._nextDay = !0), (e._a[ge] = 0)),
                (e._d = (
                    e._useUTC
                        ? Ge
                        : function (e, t, n, s, i, r, a) {
                              var o;
                              return (
                                  e < 100 && 0 <= e
                                      ? ((o = new Date(
                                            e + 400,
                                            t,
                                            n,
                                            s,
                                            i,
                                            r,
                                            a
                                        )),
                                        isFinite(o.getFullYear()) &&
                                            o.setFullYear(e))
                                      : (o = new Date(e, t, n, s, i, r, a)),
                                  o
                              );
                          }
                ).apply(null, a)),
                (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm &&
                    e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[ge] = 24),
                e._w &&
                    void 0 !== e._w.d &&
                    e._w.d !== i &&
                    (g(e).weekdayMismatch = !0);
        }
    }
    var mt =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        _t =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        yt = /Z|[+-]\d\d(?::?\d\d)?/,
        gt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
        ],
        vt = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
        ],
        pt = /^\/?Date\((\-?\d+)/i;
    function wt(e) {
        var t,
            n,
            s,
            i,
            r,
            a,
            o = e._i,
            u = mt.exec(o) || _t.exec(o);
        if (u) {
            for (g(e).iso = !0, t = 0, n = gt.length; t < n; t++)
                if (gt[t][1].exec(u[1])) {
                    (i = gt[t][0]), (s = !1 !== gt[t][2]);
                    break;
                }
            if (null == i) return void (e._isValid = !1);
            if (u[3]) {
                for (t = 0, n = vt.length; t < n; t++)
                    if (vt[t][1].exec(u[3])) {
                        r = (u[2] || " ") + vt[t][0];
                        break;
                    }
                if (null == r) return void (e._isValid = !1);
            }
            if (!s && null != r) return void (e._isValid = !1);
            if (u[4]) {
                if (!yt.exec(u[4])) return void (e._isValid = !1);
                a = "Z";
            }
            (e._f = i + (r || "") + (a || "")), Yt(e);
        } else e._isValid = !1;
    }
    var Mt =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    function kt(e, t, n, s, i, r) {
        var a = [
            (function (e) {
                var t = parseInt(e, 10);
                {
                    if (t <= 49) return 2e3 + t;
                    if (t <= 999) return 1900 + t;
                }
                return t;
            })(e),
            He.indexOf(t),
            parseInt(n, 10),
            parseInt(s, 10),
            parseInt(i, 10),
        ];
        return r && a.push(parseInt(r, 10)), a;
    }
    var St = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480,
    };
    function Dt(e) {
        var t,
            n,
            s,
            i = Mt.exec(
                e._i
                    .replace(/\([^)]*\)|[\n\t]/g, " ")
                    .replace(/(\s\s+)/g, " ")
                    .replace(/^\s\s*/, "")
                    .replace(/\s\s*$/, "")
            );
        if (i) {
            var r = kt(i[4], i[3], i[2], i[5], i[6], i[7]);
            if (
                ((t = i[1]),
                (n = r),
                (s = e),
                t &&
                    ze.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() &&
                    ((g(s).weekdayMismatch = !0), !(s._isValid = !1)))
            )
                return;
            (e._a = r),
                (e._tzm = (function (e, t, n) {
                    if (e) return St[e];
                    if (t) return 0;
                    var s = parseInt(n, 10),
                        i = s % 100;
                    return ((s - i) / 100) * 60 + i;
                })(i[8], i[9], i[10])),
                (e._d = Ge.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (g(e).rfc2822 = !0);
        } else e._isValid = !1;
    }
    function Yt(e) {
        if (e._f !== c.ISO_8601)
            if (e._f !== c.RFC_2822) {
                (e._a = []), (g(e).empty = !0);
                var t,
                    n,
                    s,
                    i,
                    r,
                    a,
                    o,
                    u,
                    l = "" + e._i,
                    h = l.length,
                    d = 0;
                for (
                    s = j(e._f, e._locale).match(N) || [], t = 0;
                    t < s.length;
                    t++
                )
                    (i = s[t]),
                        (n = (l.match(le(i, e)) || [])[0]) &&
                            (0 < (r = l.substr(0, l.indexOf(n))).length &&
                                g(e).unusedInput.push(r),
                            (l = l.slice(l.indexOf(n) + n.length)),
                            (d += n.length)),
                        E[i]
                            ? (n
                                  ? (g(e).empty = !1)
                                  : g(e).unusedTokens.push(i),
                              (a = i),
                              (u = e),
                              null != (o = n) &&
                                  m(de, a) &&
                                  de[a](o, u._a, u, a))
                            : e._strict && !n && g(e).unusedTokens.push(i);
                (g(e).charsLeftOver = h - d),
                    0 < l.length && g(e).unusedInput.push(l),
                    e._a[ge] <= 12 &&
                        !0 === g(e).bigHour &&
                        0 < e._a[ge] &&
                        (g(e).bigHour = void 0),
                    (g(e).parsedDateParts = e._a.slice(0)),
                    (g(e).meridiem = e._meridiem),
                    (e._a[ge] = (function (e, t, n) {
                        var s;
                        if (null == n) return t;
                        return null != e.meridiemHour
                            ? e.meridiemHour(t, n)
                            : (null != e.isPM &&
                                  ((s = e.isPM(n)) && t < 12 && (t += 12),
                                  s || 12 !== t || (t = 0)),
                              t);
                    })(e._locale, e._a[ge], e._meridiem)),
                    ft(e),
                    dt(e);
            } else Dt(e);
        else wt(e);
    }
    function Ot(e) {
        var t,
            n,
            s,
            i,
            r = e._i,
            a = e._f;
        return (
            (e._locale = e._locale || ht(e._l)),
            null === r || (void 0 === a && "" === r)
                ? p({ nullInput: !0 })
                : ("string" == typeof r && (e._i = r = e._locale.preparse(r)),
                  k(r)
                      ? new M(dt(r))
                      : (d(r)
                            ? (e._d = r)
                            : o(a)
                            ? (function (e) {
                                  var t, n, s, i, r;
                                  if (0 === e._f.length)
                                      return (
                                          (g(e).invalidFormat = !0),
                                          (e._d = new Date(NaN))
                                      );
                                  for (i = 0; i < e._f.length; i++)
                                      (r = 0),
                                          (t = w({}, e)),
                                          null != e._useUTC &&
                                              (t._useUTC = e._useUTC),
                                          (t._f = e._f[i]),
                                          Yt(t),
                                          v(t) &&
                                              ((r += g(t).charsLeftOver),
                                              (r +=
                                                  10 *
                                                  g(t).unusedTokens.length),
                                              (g(t).score = r),
                                              (null == s || r < s) &&
                                                  ((s = r), (n = t)));
                                  _(e, n || t);
                              })(e)
                            : a
                            ? Yt(e)
                            : l((n = (t = e)._i))
                            ? (t._d = new Date(c.now()))
                            : d(n)
                            ? (t._d = new Date(n.valueOf()))
                            : "string" == typeof n
                            ? ((s = t),
                              null === (i = pt.exec(s._i))
                                  ? (wt(s),
                                    !1 === s._isValid &&
                                        (delete s._isValid,
                                        Dt(s),
                                        !1 === s._isValid &&
                                            (delete s._isValid,
                                            c.createFromInputFallback(s))))
                                  : (s._d = new Date(+i[1])))
                            : o(n)
                            ? ((t._a = f(n.slice(0), function (e) {
                                  return parseInt(e, 10);
                              })),
                              ft(t))
                            : u(n)
                            ? (function (e) {
                                  if (!e._d) {
                                      var t = R(e._i);
                                      (e._a = f(
                                          [
                                              t.year,
                                              t.month,
                                              t.day || t.date,
                                              t.hour,
                                              t.minute,
                                              t.second,
                                              t.millisecond,
                                          ],
                                          function (e) {
                                              return e && parseInt(e, 10);
                                          }
                                      )),
                                          ft(e);
                                  }
                              })(t)
                            : h(n)
                            ? (t._d = new Date(n))
                            : c.createFromInputFallback(t),
                        v(e) || (e._d = null),
                        e))
        );
    }
    function Tt(e, t, n, s, i) {
        var r,
            a = {};
        return (
            (!0 !== n && !1 !== n) || ((s = n), (n = void 0)),
            ((u(e) &&
                (function (e) {
                    if (Object.getOwnPropertyNames)
                        return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e) if (e.hasOwnProperty(t)) return !1;
                    return !0;
                })(e)) ||
                (o(e) && 0 === e.length)) &&
                (e = void 0),
            (a._isAMomentObject = !0),
            (a._useUTC = a._isUTC = i),
            (a._l = n),
            (a._i = e),
            (a._f = t),
            (a._strict = s),
            (r = new M(dt(Ot(a))))._nextDay &&
                (r.add(1, "d"), (r._nextDay = void 0)),
            r
        );
    }
    function bt(e, t, n, s) {
        return Tt(e, t, n, s, !1);
    }
    (c.createFromInputFallback = n(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function (e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
        }
    )),
        (c.ISO_8601 = function () {}),
        (c.RFC_2822 = function () {});
    var xt = n(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
                var e = bt.apply(null, arguments);
                return this.isValid() && e.isValid()
                    ? e < this
                        ? this
                        : e
                    : p();
            }
        ),
        Pt = n(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
                var e = bt.apply(null, arguments);
                return this.isValid() && e.isValid()
                    ? this < e
                        ? this
                        : e
                    : p();
            }
        );
    function Wt(e, t) {
        var n, s;
        if ((1 === t.length && o(t[0]) && (t = t[0]), !t.length)) return bt();
        for (n = t[0], s = 1; s < t.length; ++s)
            (t[s].isValid() && !t[s][e](n)) || (n = t[s]);
        return n;
    }
    var Ct = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond",
    ];
    function Ht(e) {
        var t = R(e),
            n = t.year || 0,
            s = t.quarter || 0,
            i = t.month || 0,
            r = t.week || t.isoWeek || 0,
            a = t.day || 0,
            o = t.hour || 0,
            u = t.minute || 0,
            l = t.second || 0,
            h = t.millisecond || 0;
        (this._isValid = (function (e) {
            for (var t in e)
                if (-1 === Ye.call(Ct, t) || (null != e[t] && isNaN(e[t])))
                    return !1;
            for (var n = !1, s = 0; s < Ct.length; ++s)
                if (e[Ct[s]]) {
                    if (n) return !1;
                    parseFloat(e[Ct[s]]) !== D(e[Ct[s]]) && (n = !0);
                }
            return !0;
        })(t)),
            (this._milliseconds = +h + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60),
            (this._days = +a + 7 * r),
            (this._months = +i + 3 * s + 12 * n),
            (this._data = {}),
            (this._locale = ht()),
            this._bubble();
    }
    function Rt(e) {
        return e instanceof Ht;
    }
    function Ut(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
    }
    function Ft(e, n) {
        I(e, 0, 0, function () {
            var e = this.utcOffset(),
                t = "+";
            return (
                e < 0 && ((e = -e), (t = "-")),
                t + L(~~(e / 60), 2) + n + L(~~e % 60, 2)
            );
        });
    }
    Ft("Z", ":"),
        Ft("ZZ", ""),
        ue("Z", re),
        ue("ZZ", re),
        ce(["Z", "ZZ"], function (e, t, n) {
            (n._useUTC = !0), (n._tzm = Nt(re, e));
        });
    var Lt = /([\+\-]|\d\d)/gi;
    function Nt(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var s = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0],
            i = 60 * s[1] + D(s[2]);
        return 0 === i ? 0 : "+" === s[0] ? i : -i;
    }
    function Gt(e, t) {
        var n, s;
        return t._isUTC
            ? ((n = t.clone()),
              (s =
                  (k(e) || d(e) ? e.valueOf() : bt(e).valueOf()) - n.valueOf()),
              n._d.setTime(n._d.valueOf() + s),
              c.updateOffset(n, !1),
              n)
            : bt(e).local();
    }
    function Vt(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
    }
    function Et() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
    }
    c.updateOffset = function () {};
    var It = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        At =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function jt(e, t) {
        var n,
            s,
            i,
            r = e,
            a = null;
        return (
            Rt(e)
                ? (r = { ms: e._milliseconds, d: e._days, M: e._months })
                : h(e)
                ? ((r = {}), t ? (r[t] = e) : (r.milliseconds = e))
                : (a = It.exec(e))
                ? ((n = "-" === a[1] ? -1 : 1),
                  (r = {
                      y: 0,
                      d: D(a[ye]) * n,
                      h: D(a[ge]) * n,
                      m: D(a[ve]) * n,
                      s: D(a[pe]) * n,
                      ms: D(Ut(1e3 * a[we])) * n,
                  }))
                : (a = At.exec(e))
                ? ((n = "-" === a[1] ? -1 : 1),
                  (r = {
                      y: Zt(a[2], n),
                      M: Zt(a[3], n),
                      w: Zt(a[4], n),
                      d: Zt(a[5], n),
                      h: Zt(a[6], n),
                      m: Zt(a[7], n),
                      s: Zt(a[8], n),
                  }))
                : null == r
                ? (r = {})
                : "object" == typeof r &&
                  ("from" in r || "to" in r) &&
                  ((i = (function (e, t) {
                      var n;
                      if (!e.isValid() || !t.isValid())
                          return { milliseconds: 0, months: 0 };
                      (t = Gt(t, e)),
                          e.isBefore(t)
                              ? (n = zt(e, t))
                              : (((n = zt(t, e)).milliseconds =
                                    -n.milliseconds),
                                (n.months = -n.months));
                      return n;
                  })(bt(r.from), bt(r.to))),
                  ((r = {}).ms = i.milliseconds),
                  (r.M = i.months)),
            (s = new Ht(r)),
            Rt(e) && m(e, "_locale") && (s._locale = e._locale),
            s
        );
    }
    function Zt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t;
    }
    function zt(e, t) {
        var n = {};
        return (
            (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
            e.clone().add(n.months, "M").isAfter(t) && --n.months,
            (n.milliseconds = +t - +e.clone().add(n.months, "M")),
            n
        );
    }
    function $t(s, i) {
        return function (e, t) {
            var n;
            return (
                null === t ||
                    isNaN(+t) ||
                    (T(
                        i,
                        "moment()." +
                            i +
                            "(period, number) is deprecated. Please use moment()." +
                            i +
                            "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                    ),
                    (n = e),
                    (e = t),
                    (t = n)),
                qt(this, jt((e = "string" == typeof e ? +e : e), t), s),
                this
            );
        };
    }
    function qt(e, t, n, s) {
        var i = t._milliseconds,
            r = Ut(t._days),
            a = Ut(t._months);
        e.isValid() &&
            ((s = null == s || s),
            a && Re(e, be(e, "Month") + a * n),
            r && xe(e, "Date", be(e, "Date") + r * n),
            i && e._d.setTime(e._d.valueOf() + i * n),
            s && c.updateOffset(e, r || a));
    }
    (jt.fn = Ht.prototype),
        (jt.invalid = function () {
            return jt(NaN);
        });
    var Jt = $t(1, "add"),
        Bt = $t(-1, "subtract");
    function Qt(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            s = e.clone().add(n, "months");
        return (
            -(
                n +
                (t - s < 0
                    ? (t - s) / (s - e.clone().add(n - 1, "months"))
                    : (t - s) / (e.clone().add(n + 1, "months") - s))
            ) || 0
        );
    }
    function Xt(e) {
        var t;
        return void 0 === e
            ? this._locale._abbr
            : (null != (t = ht(e)) && (this._locale = t), this);
    }
    (c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
        (c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
    var Kt = n(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function (e) {
            return void 0 === e ? this.localeData() : this.locale(e);
        }
    );
    function en() {
        return this._locale;
    }
    var tn = 126227808e5;
    function nn(e, t) {
        return ((e % t) + t) % t;
    }
    function sn(e, t, n) {
        return e < 100 && 0 <= e
            ? new Date(e + 400, t, n) - tn
            : new Date(e, t, n).valueOf();
    }
    function rn(e, t, n) {
        return e < 100 && 0 <= e
            ? Date.UTC(e + 400, t, n) - tn
            : Date.UTC(e, t, n);
    }
    function an(e, t) {
        I(0, [e, e.length], 0, t);
    }
    function on(e, t, n, s, i) {
        var r;
        return null == e
            ? Ie(this, s, i).year
            : ((r = Ae(e, s, i)) < t && (t = r),
              function (e, t, n, s, i) {
                  var r = Ee(e, t, n, s, i),
                      a = Ge(r.year, 0, r.dayOfYear);
                  return (
                      this.year(a.getUTCFullYear()),
                      this.month(a.getUTCMonth()),
                      this.date(a.getUTCDate()),
                      this
                  );
              }.call(this, e, t, n, s, i));
    }
    I(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100;
    }),
        I(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
        }),
        an("gggg", "weekYear"),
        an("ggggg", "weekYear"),
        an("GGGG", "isoWeekYear"),
        an("GGGGG", "isoWeekYear"),
        C("weekYear", "gg"),
        C("isoWeekYear", "GG"),
        F("weekYear", 1),
        F("isoWeekYear", 1),
        ue("G", se),
        ue("g", se),
        ue("GG", B, z),
        ue("gg", B, z),
        ue("GGGG", ee, q),
        ue("gggg", ee, q),
        ue("GGGGG", te, J),
        ue("ggggg", te, J),
        fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
            t[s.substr(0, 2)] = D(e);
        }),
        fe(["gg", "GG"], function (e, t, n, s) {
            t[s] = c.parseTwoDigitYear(e);
        }),
        I("Q", 0, "Qo", "quarter"),
        C("quarter", "Q"),
        F("quarter", 7),
        ue("Q", Z),
        ce("Q", function (e, t) {
            t[_e] = 3 * (D(e) - 1);
        }),
        I("D", ["DD", 2], "Do", "date"),
        C("date", "D"),
        F("date", 9),
        ue("D", B),
        ue("DD", B, z),
        ue("Do", function (e, t) {
            return e
                ? t._dayOfMonthOrdinalParse || t._ordinalParse
                : t._dayOfMonthOrdinalParseLenient;
        }),
        ce(["D", "DD"], ye),
        ce("Do", function (e, t) {
            t[ye] = D(e.match(B)[0]);
        });
    var un = Te("Date", !0);
    I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        C("dayOfYear", "DDD"),
        F("dayOfYear", 4),
        ue("DDD", K),
        ue("DDDD", $),
        ce(["DDD", "DDDD"], function (e, t, n) {
            n._dayOfYear = D(e);
        }),
        I("m", ["mm", 2], 0, "minute"),
        C("minute", "m"),
        F("minute", 14),
        ue("m", B),
        ue("mm", B, z),
        ce(["m", "mm"], ve);
    var ln = Te("Minutes", !1);
    I("s", ["ss", 2], 0, "second"),
        C("second", "s"),
        F("second", 15),
        ue("s", B),
        ue("ss", B, z),
        ce(["s", "ss"], pe);
    var hn,
        dn = Te("Seconds", !1);
    for (
        I("S", 0, 0, function () {
            return ~~(this.millisecond() / 100);
        }),
            I(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10);
            }),
            I(0, ["SSS", 3], 0, "millisecond"),
            I(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond();
            }),
            I(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond();
            }),
            I(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond();
            }),
            I(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond();
            }),
            I(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond();
            }),
            I(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond();
            }),
            C("millisecond", "ms"),
            F("millisecond", 16),
            ue("S", K, Z),
            ue("SS", K, z),
            ue("SSS", K, $),
            hn = "SSSS";
        hn.length <= 9;
        hn += "S"
    )
        ue(hn, ne);
    function cn(e, t) {
        t[we] = D(1e3 * ("0." + e));
    }
    for (hn = "S"; hn.length <= 9; hn += "S") ce(hn, cn);
    var fn = Te("Milliseconds", !1);
    I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
    var mn = M.prototype;
    function _n(e) {
        return e;
    }
    (mn.add = Jt),
        (mn.calendar = function (e, t) {
            var n = e || bt(),
                s = Gt(n, this).startOf("day"),
                i = c.calendarFormat(this, s) || "sameElse",
                r = t && (b(t[i]) ? t[i].call(this, n) : t[i]);
            return this.format(r || this.localeData().calendar(i, this, bt(n)));
        }),
        (mn.clone = function () {
            return new M(this);
        }),
        (mn.diff = function (e, t, n) {
            var s, i, r;
            if (!this.isValid()) return NaN;
            if (!(s = Gt(e, this)).isValid()) return NaN;
            switch (
                ((i = 6e4 * (s.utcOffset() - this.utcOffset())), (t = H(t)))
            ) {
                case "year":
                    r = Qt(this, s) / 12;
                    break;
                case "month":
                    r = Qt(this, s);
                    break;
                case "quarter":
                    r = Qt(this, s) / 3;
                    break;
                case "second":
                    r = (this - s) / 1e3;
                    break;
                case "minute":
                    r = (this - s) / 6e4;
                    break;
                case "hour":
                    r = (this - s) / 36e5;
                    break;
                case "day":
                    r = (this - s - i) / 864e5;
                    break;
                case "week":
                    r = (this - s - i) / 6048e5;
                    break;
                default:
                    r = this - s;
            }
            return n ? r : S(r);
        }),
        (mn.endOf = function (e) {
            var t;
            if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid())
                return this;
            var n = this._isUTC ? rn : sn;
            switch (e) {
                case "year":
                    t = n(this.year() + 1, 0, 1) - 1;
                    break;
                case "quarter":
                    t =
                        n(
                            this.year(),
                            this.month() - (this.month() % 3) + 3,
                            1
                        ) - 1;
                    break;
                case "month":
                    t = n(this.year(), this.month() + 1, 1) - 1;
                    break;
                case "week":
                    t =
                        n(
                            this.year(),
                            this.month(),
                            this.date() - this.weekday() + 7
                        ) - 1;
                    break;
                case "isoWeek":
                    t =
                        n(
                            this.year(),
                            this.month(),
                            this.date() - (this.isoWeekday() - 1) + 7
                        ) - 1;
                    break;
                case "day":
                case "date":
                    t = n(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case "hour":
                    (t = this._d.valueOf()),
                        (t +=
                            36e5 -
                            nn(
                                t + (this._isUTC ? 0 : 6e4 * this.utcOffset()),
                                36e5
                            ) -
                            1);
                    break;
                case "minute":
                    (t = this._d.valueOf()), (t += 6e4 - nn(t, 6e4) - 1);
                    break;
                case "second":
                    (t = this._d.valueOf()), (t += 1e3 - nn(t, 1e3) - 1);
                    break;
            }
            return this._d.setTime(t), c.updateOffset(this, !0), this;
        }),
        (mn.format = function (e) {
            e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
            var t = A(this, e);
            return this.localeData().postformat(t);
        }),
        (mn.from = function (e, t) {
            return this.isValid() && ((k(e) && e.isValid()) || bt(e).isValid())
                ? jt({ to: this, from: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate();
        }),
        (mn.fromNow = function (e) {
            return this.from(bt(), e);
        }),
        (mn.to = function (e, t) {
            return this.isValid() && ((k(e) && e.isValid()) || bt(e).isValid())
                ? jt({ from: this, to: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate();
        }),
        (mn.toNow = function (e) {
            return this.to(bt(), e);
        }),
        (mn.get = function (e) {
            return b(this[(e = H(e))]) ? this[e]() : this;
        }),
        (mn.invalidAt = function () {
            return g(this).overflow;
        }),
        (mn.isAfter = function (e, t) {
            var n = k(e) ? e : bt(e);
            return (
                !(!this.isValid() || !n.isValid()) &&
                ("millisecond" === (t = H(t) || "millisecond")
                    ? this.valueOf() > n.valueOf()
                    : n.valueOf() < this.clone().startOf(t).valueOf())
            );
        }),
        (mn.isBefore = function (e, t) {
            var n = k(e) ? e : bt(e);
            return (
                !(!this.isValid() || !n.isValid()) &&
                ("millisecond" === (t = H(t) || "millisecond")
                    ? this.valueOf() < n.valueOf()
                    : this.clone().endOf(t).valueOf() < n.valueOf())
            );
        }),
        (mn.isBetween = function (e, t, n, s) {
            var i = k(e) ? e : bt(e),
                r = k(t) ? t : bt(t);
            return (
                !!(this.isValid() && i.isValid() && r.isValid()) &&
                ("(" === (s = s || "()")[0]
                    ? this.isAfter(i, n)
                    : !this.isBefore(i, n)) &&
                (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
            );
        }),
        (mn.isSame = function (e, t) {
            var n,
                s = k(e) ? e : bt(e);
            return (
                !(!this.isValid() || !s.isValid()) &&
                ("millisecond" === (t = H(t) || "millisecond")
                    ? this.valueOf() === s.valueOf()
                    : ((n = s.valueOf()),
                      this.clone().startOf(t).valueOf() <= n &&
                          n <= this.clone().endOf(t).valueOf()))
            );
        }),
        (mn.isSameOrAfter = function (e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
        }),
        (mn.isSameOrBefore = function (e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
        }),
        (mn.isValid = function () {
            return v(this);
        }),
        (mn.lang = Kt),
        (mn.locale = Xt),
        (mn.localeData = en),
        (mn.max = Pt),
        (mn.min = xt),
        (mn.parsingFlags = function () {
            return _({}, g(this));
        }),
        (mn.set = function (e, t) {
            if ("object" == typeof e)
                for (
                    var n = (function (e) {
                            var t = [];
                            for (var n in e)
                                t.push({ unit: n, priority: U[n] });
                            return (
                                t.sort(function (e, t) {
                                    return e.priority - t.priority;
                                }),
                                t
                            );
                        })((e = R(e))),
                        s = 0;
                    s < n.length;
                    s++
                )
                    this[n[s].unit](e[n[s].unit]);
            else if (b(this[(e = H(e))])) return this[e](t);
            return this;
        }),
        (mn.startOf = function (e) {
            var t;
            if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid())
                return this;
            var n = this._isUTC ? rn : sn;
            switch (e) {
                case "year":
                    t = n(this.year(), 0, 1);
                    break;
                case "quarter":
                    t = n(this.year(), this.month() - (this.month() % 3), 1);
                    break;
                case "month":
                    t = n(this.year(), this.month(), 1);
                    break;
                case "week":
                    t = n(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday()
                    );
                    break;
                case "isoWeek":
                    t = n(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1)
                    );
                    break;
                case "day":
                case "date":
                    t = n(this.year(), this.month(), this.date());
                    break;
                case "hour":
                    (t = this._d.valueOf()),
                        (t -= nn(
                            t + (this._isUTC ? 0 : 6e4 * this.utcOffset()),
                            36e5
                        ));
                    break;
                case "minute":
                    (t = this._d.valueOf()), (t -= nn(t, 6e4));
                    break;
                case "second":
                    (t = this._d.valueOf()), (t -= nn(t, 1e3));
                    break;
            }
            return this._d.setTime(t), c.updateOffset(this, !0), this;
        }),
        (mn.subtract = Bt),
        (mn.toArray = function () {
            var e = this;
            return [
                e.year(),
                e.month(),
                e.date(),
                e.hour(),
                e.minute(),
                e.second(),
                e.millisecond(),
            ];
        }),
        (mn.toObject = function () {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds(),
            };
        }),
        (mn.toDate = function () {
            return new Date(this.valueOf());
        }),
        (mn.toISOString = function (e) {
            if (!this.isValid()) return null;
            var t = !0 !== e,
                n = t ? this.clone().utc() : this;
            return n.year() < 0 || 9999 < n.year()
                ? A(
                      n,
                      t
                          ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                          : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                  )
                : b(Date.prototype.toISOString)
                ? t
                    ? this.toDate().toISOString()
                    : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                          .toISOString()
                          .replace("Z", A(n, "Z"))
                : A(
                      n,
                      t
                          ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                          : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                  );
        }),
        (mn.inspect = function () {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e = "moment",
                t = "";
            this.isLocal() ||
                ((e =
                    0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                (t = "Z"));
            var n = "[" + e + '("]',
                s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                i = t + '[")]';
            return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i);
        }),
        (mn.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
        }),
        (mn.toString = function () {
            return this.clone()
                .locale("en")
                .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }),
        (mn.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
        }),
        (mn.valueOf = function () {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
        }),
        (mn.creationData = function () {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict,
            };
        }),
        (mn.year = Oe),
        (mn.isLeapYear = function () {
            return De(this.year());
        }),
        (mn.weekYear = function (e) {
            return on.call(
                this,
                e,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy
            );
        }),
        (mn.isoWeekYear = function (e) {
            return on.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
        }),
        (mn.quarter = mn.quarters =
            function (e) {
                return null == e
                    ? Math.ceil((this.month() + 1) / 3)
                    : this.month(3 * (e - 1) + (this.month() % 3));
            }),
        (mn.month = Ue),
        (mn.daysInMonth = function () {
            return Pe(this.year(), this.month());
        }),
        (mn.week = mn.weeks =
            function (e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d");
            }),
        (mn.isoWeek = mn.isoWeeks =
            function (e) {
                var t = Ie(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d");
            }),
        (mn.weeksInYear = function () {
            var e = this.localeData()._week;
            return Ae(this.year(), e.dow, e.doy);
        }),
        (mn.isoWeeksInYear = function () {
            return Ae(this.year(), 1, 4);
        }),
        (mn.date = un),
        (mn.day = mn.days =
            function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t,
                    n,
                    s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e
                    ? ((t = e),
                      (n = this.localeData()),
                      (e =
                          "string" != typeof t
                              ? t
                              : isNaN(t)
                              ? "number" == typeof (t = n.weekdaysParse(t))
                                  ? t
                                  : null
                              : parseInt(t, 10)),
                      this.add(e - s, "d"))
                    : s;
            }),
        (mn.weekday = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d");
        }),
        (mn.isoWeekday = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null == e) return this.day() || 7;
            var t,
                n,
                s =
                    ((t = e),
                    (n = this.localeData()),
                    "string" == typeof t
                        ? n.weekdaysParse(t) % 7 || 7
                        : isNaN(t)
                        ? null
                        : t);
            return this.day(this.day() % 7 ? s : s - 7);
        }),
        (mn.dayOfYear = function (e) {
            var t =
                Math.round(
                    (this.clone().startOf("day") -
                        this.clone().startOf("year")) /
                        864e5
                ) + 1;
            return null == e ? t : this.add(e - t, "d");
        }),
        (mn.hour = mn.hours = nt),
        (mn.minute = mn.minutes = ln),
        (mn.second = mn.seconds = dn),
        (mn.millisecond = mn.milliseconds = fn),
        (mn.utcOffset = function (e, t, n) {
            var s,
                i = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null == e) return this._isUTC ? i : Vt(this);
            if ("string" == typeof e) {
                if (null === (e = Nt(re, e))) return this;
            } else Math.abs(e) < 16 && !n && (e *= 60);
            return (
                !this._isUTC && t && (s = Vt(this)),
                (this._offset = e),
                (this._isUTC = !0),
                null != s && this.add(s, "m"),
                i !== e &&
                    (!t || this._changeInProgress
                        ? qt(this, jt(e - i, "m"), 1, !1)
                        : this._changeInProgress ||
                          ((this._changeInProgress = !0),
                          c.updateOffset(this, !0),
                          (this._changeInProgress = null))),
                this
            );
        }),
        (mn.utc = function (e) {
            return this.utcOffset(0, e);
        }),
        (mn.local = function (e) {
            return (
                this._isUTC &&
                    (this.utcOffset(0, e),
                    (this._isUTC = !1),
                    e && this.subtract(Vt(this), "m")),
                this
            );
        }),
        (mn.parseZone = function () {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var e = Nt(ie, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
            }
            return this;
        }),
        (mn.hasAlignedHourOffset = function (e) {
            return (
                !!this.isValid() &&
                ((e = e ? bt(e).utcOffset() : 0),
                (this.utcOffset() - e) % 60 == 0)
            );
        }),
        (mn.isDST = function () {
            return (
                this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset()
            );
        }),
        (mn.isLocal = function () {
            return !!this.isValid() && !this._isUTC;
        }),
        (mn.isUtcOffset = function () {
            return !!this.isValid() && this._isUTC;
        }),
        (mn.isUtc = Et),
        (mn.isUTC = Et),
        (mn.zoneAbbr = function () {
            return this._isUTC ? "UTC" : "";
        }),
        (mn.zoneName = function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
        }),
        (mn.dates = n("dates accessor is deprecated. Use date instead.", un)),
        (mn.months = n("months accessor is deprecated. Use month instead", Ue)),
        (mn.years = n("years accessor is deprecated. Use year instead", Oe)),
        (mn.zone = n(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            function (e, t) {
                return null != e
                    ? ("string" != typeof e && (e = -e),
                      this.utcOffset(e, t),
                      this)
                    : -this.utcOffset();
            }
        )),
        (mn.isDSTShifted = n(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            function () {
                if (!l(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if ((w(e, this), (e = Ot(e))._a)) {
                    var t = e._isUTC ? y(e._a) : bt(e._a);
                    this._isDSTShifted =
                        this.isValid() && 0 < a(e._a, t.toArray());
                } else this._isDSTShifted = !1;
                return this._isDSTShifted;
            }
        ));
    var yn = P.prototype;
    function gn(e, t, n, s) {
        var i = ht(),
            r = y().set(s, t);
        return i[n](r, e);
    }
    function vn(e, t, n) {
        if ((h(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
            return gn(e, t, n, "month");
        var s,
            i = [];
        for (s = 0; s < 12; s++) i[s] = gn(e, s, n, "month");
        return i;
    }
    function pn(e, t, n, s) {
        t =
            ("boolean" == typeof e
                ? h(t) && ((n = t), (t = void 0))
                : ((t = e), (e = !1), h((n = t)) && ((n = t), (t = void 0))),
            t || "");
        var i,
            r = ht(),
            a = e ? r._week.dow : 0;
        if (null != n) return gn(t, (n + a) % 7, s, "day");
        var o = [];
        for (i = 0; i < 7; i++) o[i] = gn(t, (i + a) % 7, s, "day");
        return o;
    }
    (yn.calendar = function (e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return b(s) ? s.call(t, n) : s;
    }),
        (yn.longDateFormat = function (e) {
            var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
            return t || !n
                ? t
                : ((this._longDateFormat[e] = n.replace(
                      /MMMM|MM|DD|dddd/g,
                      function (e) {
                          return e.slice(1);
                      }
                  )),
                  this._longDateFormat[e]);
        }),
        (yn.invalidDate = function () {
            return this._invalidDate;
        }),
        (yn.ordinal = function (e) {
            return this._ordinal.replace("%d", e);
        }),
        (yn.preparse = _n),
        (yn.postformat = _n),
        (yn.relativeTime = function (e, t, n, s) {
            var i = this._relativeTime[n];
            return b(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
        }),
        (yn.pastFuture = function (e, t) {
            var n = this._relativeTime[0 < e ? "future" : "past"];
            return b(n) ? n(t) : n.replace(/%s/i, t);
        }),
        (yn.set = function (e) {
            var t, n;
            for (n in e) b((t = e[n])) ? (this[n] = t) : (this["_" + n] = t);
            (this._config = e),
                (this._dayOfMonthOrdinalParseLenient = new RegExp(
                    (this._dayOfMonthOrdinalParse.source ||
                        this._ordinalParse.source) +
                        "|" +
                        /\d{1,2}/.source
                ));
        }),
        (yn.months = function (e, t) {
            return e
                ? o(this._months)
                    ? this._months[e.month()]
                    : this._months[
                          (this._months.isFormat || We).test(t)
                              ? "format"
                              : "standalone"
                      ][e.month()]
                : o(this._months)
                ? this._months
                : this._months.standalone;
        }),
        (yn.monthsShort = function (e, t) {
            return e
                ? o(this._monthsShort)
                    ? this._monthsShort[e.month()]
                    : this._monthsShort[We.test(t) ? "format" : "standalone"][
                          e.month()
                      ]
                : o(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
        }),
        (yn.monthsParse = function (e, t, n) {
            var s, i, r;
            if (this._monthsParseExact)
                return function (e, t, n) {
                    var s,
                        i,
                        r,
                        a = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (
                            this._monthsParse = [],
                                this._longMonthsParse = [],
                                this._shortMonthsParse = [],
                                s = 0;
                            s < 12;
                            ++s
                        )
                            (r = y([2e3, s])),
                                (this._shortMonthsParse[s] = this.monthsShort(
                                    r,
                                    ""
                                ).toLocaleLowerCase()),
                                (this._longMonthsParse[s] = this.months(
                                    r,
                                    ""
                                ).toLocaleLowerCase());
                    return n
                        ? "MMM" === t
                            ? -1 !== (i = Ye.call(this._shortMonthsParse, a))
                                ? i
                                : null
                            : -1 !== (i = Ye.call(this._longMonthsParse, a))
                            ? i
                            : null
                        : "MMM" === t
                        ? -1 !== (i = Ye.call(this._shortMonthsParse, a))
                            ? i
                            : -1 !== (i = Ye.call(this._longMonthsParse, a))
                            ? i
                            : null
                        : -1 !== (i = Ye.call(this._longMonthsParse, a))
                        ? i
                        : -1 !== (i = Ye.call(this._shortMonthsParse, a))
                        ? i
                        : null;
                }.call(this, e, t, n);
            for (
                this._monthsParse ||
                    ((this._monthsParse = []),
                    (this._longMonthsParse = []),
                    (this._shortMonthsParse = [])),
                    s = 0;
                s < 12;
                s++
            ) {
                if (
                    ((i = y([2e3, s])),
                    n &&
                        !this._longMonthsParse[s] &&
                        ((this._longMonthsParse[s] = new RegExp(
                            "^" + this.months(i, "").replace(".", "") + "$",
                            "i"
                        )),
                        (this._shortMonthsParse[s] = new RegExp(
                            "^" +
                                this.monthsShort(i, "").replace(".", "") +
                                "$",
                            "i"
                        ))),
                    n ||
                        this._monthsParse[s] ||
                        ((r =
                            "^" +
                            this.months(i, "") +
                            "|^" +
                            this.monthsShort(i, "")),
                        (this._monthsParse[s] = new RegExp(
                            r.replace(".", ""),
                            "i"
                        ))),
                    n && "MMMM" === t && this._longMonthsParse[s].test(e))
                )
                    return s;
                if (n && "MMM" === t && this._shortMonthsParse[s].test(e))
                    return s;
                if (!n && this._monthsParse[s].test(e)) return s;
            }
        }),
        (yn.monthsRegex = function (e) {
            return this._monthsParseExact
                ? (m(this, "_monthsRegex") || Ne.call(this),
                  e ? this._monthsStrictRegex : this._monthsRegex)
                : (m(this, "_monthsRegex") || (this._monthsRegex = Le),
                  this._monthsStrictRegex && e
                      ? this._monthsStrictRegex
                      : this._monthsRegex);
        }),
        (yn.monthsShortRegex = function (e) {
            return this._monthsParseExact
                ? (m(this, "_monthsRegex") || Ne.call(this),
                  e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                : (m(this, "_monthsShortRegex") ||
                      (this._monthsShortRegex = Fe),
                  this._monthsShortStrictRegex && e
                      ? this._monthsShortStrictRegex
                      : this._monthsShortRegex);
        }),
        (yn.week = function (e) {
            return Ie(e, this._week.dow, this._week.doy).week;
        }),
        (yn.firstDayOfYear = function () {
            return this._week.doy;
        }),
        (yn.firstDayOfWeek = function () {
            return this._week.dow;
        }),
        (yn.weekdays = function (e, t) {
            var n = o(this._weekdays)
                ? this._weekdays
                : this._weekdays[
                      e && !0 !== e && this._weekdays.isFormat.test(t)
                          ? "format"
                          : "standalone"
                  ];
            return !0 === e ? je(n, this._week.dow) : e ? n[e.day()] : n;
        }),
        (yn.weekdaysMin = function (e) {
            return !0 === e
                ? je(this._weekdaysMin, this._week.dow)
                : e
                ? this._weekdaysMin[e.day()]
                : this._weekdaysMin;
        }),
        (yn.weekdaysShort = function (e) {
            return !0 === e
                ? je(this._weekdaysShort, this._week.dow)
                : e
                ? this._weekdaysShort[e.day()]
                : this._weekdaysShort;
        }),
        (yn.weekdaysParse = function (e, t, n) {
            var s, i, r;
            if (this._weekdaysParseExact)
                return function (e, t, n) {
                    var s,
                        i,
                        r,
                        a = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (
                            this._weekdaysParse = [],
                                this._shortWeekdaysParse = [],
                                this._minWeekdaysParse = [],
                                s = 0;
                            s < 7;
                            ++s
                        )
                            (r = y([2e3, 1]).day(s)),
                                (this._minWeekdaysParse[s] = this.weekdaysMin(
                                    r,
                                    ""
                                ).toLocaleLowerCase()),
                                (this._shortWeekdaysParse[s] =
                                    this.weekdaysShort(
                                        r,
                                        ""
                                    ).toLocaleLowerCase()),
                                (this._weekdaysParse[s] = this.weekdays(
                                    r,
                                    ""
                                ).toLocaleLowerCase());
                    return n
                        ? "dddd" === t
                            ? -1 !== (i = Ye.call(this._weekdaysParse, a))
                                ? i
                                : null
                            : "ddd" === t
                            ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a))
                                ? i
                                : null
                            : -1 !== (i = Ye.call(this._minWeekdaysParse, a))
                            ? i
                            : null
                        : "dddd" === t
                        ? -1 !== (i = Ye.call(this._weekdaysParse, a))
                            ? i
                            : -1 !== (i = Ye.call(this._shortWeekdaysParse, a))
                            ? i
                            : -1 !== (i = Ye.call(this._minWeekdaysParse, a))
                            ? i
                            : null
                        : "ddd" === t
                        ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a))
                            ? i
                            : -1 !== (i = Ye.call(this._weekdaysParse, a))
                            ? i
                            : -1 !== (i = Ye.call(this._minWeekdaysParse, a))
                            ? i
                            : null
                        : -1 !== (i = Ye.call(this._minWeekdaysParse, a))
                        ? i
                        : -1 !== (i = Ye.call(this._weekdaysParse, a))
                        ? i
                        : -1 !== (i = Ye.call(this._shortWeekdaysParse, a))
                        ? i
                        : null;
                }.call(this, e, t, n);
            for (
                this._weekdaysParse ||
                    ((this._weekdaysParse = []),
                    (this._minWeekdaysParse = []),
                    (this._shortWeekdaysParse = []),
                    (this._fullWeekdaysParse = [])),
                    s = 0;
                s < 7;
                s++
            ) {
                if (
                    ((i = y([2e3, 1]).day(s)),
                    n &&
                        !this._fullWeekdaysParse[s] &&
                        ((this._fullWeekdaysParse[s] = new RegExp(
                            "^" +
                                this.weekdays(i, "").replace(".", "\\.?") +
                                "$",
                            "i"
                        )),
                        (this._shortWeekdaysParse[s] = new RegExp(
                            "^" +
                                this.weekdaysShort(i, "").replace(".", "\\.?") +
                                "$",
                            "i"
                        )),
                        (this._minWeekdaysParse[s] = new RegExp(
                            "^" +
                                this.weekdaysMin(i, "").replace(".", "\\.?") +
                                "$",
                            "i"
                        ))),
                    this._weekdaysParse[s] ||
                        ((r =
                            "^" +
                            this.weekdays(i, "") +
                            "|^" +
                            this.weekdaysShort(i, "") +
                            "|^" +
                            this.weekdaysMin(i, "")),
                        (this._weekdaysParse[s] = new RegExp(
                            r.replace(".", ""),
                            "i"
                        ))),
                    n && "dddd" === t && this._fullWeekdaysParse[s].test(e))
                )
                    return s;
                if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e))
                    return s;
                if (n && "dd" === t && this._minWeekdaysParse[s].test(e))
                    return s;
                if (!n && this._weekdaysParse[s].test(e)) return s;
            }
        }),
        (yn.weekdaysRegex = function (e) {
            return this._weekdaysParseExact
                ? (m(this, "_weekdaysRegex") || Qe.call(this),
                  e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = qe),
                  this._weekdaysStrictRegex && e
                      ? this._weekdaysStrictRegex
                      : this._weekdaysRegex);
        }),
        (yn.weekdaysShortRegex = function (e) {
            return this._weekdaysParseExact
                ? (m(this, "_weekdaysRegex") || Qe.call(this),
                  e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                : (m(this, "_weekdaysShortRegex") ||
                      (this._weekdaysShortRegex = Je),
                  this._weekdaysShortStrictRegex && e
                      ? this._weekdaysShortStrictRegex
                      : this._weekdaysShortRegex);
        }),
        (yn.weekdaysMinRegex = function (e) {
            return this._weekdaysParseExact
                ? (m(this, "_weekdaysRegex") || Qe.call(this),
                  e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                : (m(this, "_weekdaysMinRegex") ||
                      (this._weekdaysMinRegex = Be),
                  this._weekdaysMinStrictRegex && e
                      ? this._weekdaysMinStrictRegex
                      : this._weekdaysMinRegex);
        }),
        (yn.isPM = function (e) {
            return "p" === (e + "").toLowerCase().charAt(0);
        }),
        (yn.meridiem = function (e, t, n) {
            return 11 < e ? (n ? "pm" : "PM") : n ? "am" : "AM";
        }),
        ut("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
                var t = e % 10;
                return (
                    e +
                    (1 === D((e % 100) / 10)
                        ? "th"
                        : 1 === t
                        ? "st"
                        : 2 === t
                        ? "nd"
                        : 3 === t
                        ? "rd"
                        : "th")
                );
            },
        }),
        (c.lang = n(
            "moment.lang is deprecated. Use moment.locale instead.",
            ut
        )),
        (c.langData = n(
            "moment.langData is deprecated. Use moment.localeData instead.",
            ht
        ));
    var wn = Math.abs;
    function Mn(e, t, n, s) {
        var i = jt(t, n);
        return (
            (e._milliseconds += s * i._milliseconds),
            (e._days += s * i._days),
            (e._months += s * i._months),
            e._bubble()
        );
    }
    function kn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function Sn(e) {
        return (4800 * e) / 146097;
    }
    function Dn(e) {
        return (146097 * e) / 4800;
    }
    function Yn(e) {
        return function () {
            return this.as(e);
        };
    }
    var On = Yn("ms"),
        Tn = Yn("s"),
        bn = Yn("m"),
        xn = Yn("h"),
        Pn = Yn("d"),
        Wn = Yn("w"),
        Cn = Yn("M"),
        Hn = Yn("Q"),
        Rn = Yn("y");
    function Un(e) {
        return function () {
            return this.isValid() ? this._data[e] : NaN;
        };
    }
    var Fn = Un("milliseconds"),
        Ln = Un("seconds"),
        Nn = Un("minutes"),
        Gn = Un("hours"),
        Vn = Un("days"),
        En = Un("months"),
        In = Un("years");
    var An = Math.round,
        jn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
    var Zn = Math.abs;
    function zn(e) {
        return (0 < e) - (e < 0) || +e;
    }
    function $n() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e,
            t,
            n = Zn(this._milliseconds) / 1e3,
            s = Zn(this._days),
            i = Zn(this._months);
        (t = S((e = S(n / 60)) / 60)), (n %= 60), (e %= 60);
        var r = S(i / 12),
            a = (i %= 12),
            o = s,
            u = t,
            l = e,
            h = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
            d = this.asSeconds();
        if (!d) return "P0D";
        var c = d < 0 ? "-" : "",
            f = zn(this._months) !== zn(d) ? "-" : "",
            m = zn(this._days) !== zn(d) ? "-" : "",
            _ = zn(this._milliseconds) !== zn(d) ? "-" : "";
        return (
            c +
            "P" +
            (r ? f + r + "Y" : "") +
            (a ? f + a + "M" : "") +
            (o ? m + o + "D" : "") +
            (u || l || h ? "T" : "") +
            (u ? _ + u + "H" : "") +
            (l ? _ + l + "M" : "") +
            (h ? _ + h + "S" : "")
        );
    }
    var qn = Ht.prototype;
    return (
        (qn.isValid = function () {
            return this._isValid;
        }),
        (qn.abs = function () {
            var e = this._data;
            return (
                (this._milliseconds = wn(this._milliseconds)),
                (this._days = wn(this._days)),
                (this._months = wn(this._months)),
                (e.milliseconds = wn(e.milliseconds)),
                (e.seconds = wn(e.seconds)),
                (e.minutes = wn(e.minutes)),
                (e.hours = wn(e.hours)),
                (e.months = wn(e.months)),
                (e.years = wn(e.years)),
                this
            );
        }),
        (qn.add = function (e, t) {
            return Mn(this, e, t, 1);
        }),
        (qn.subtract = function (e, t) {
            return Mn(this, e, t, -1);
        }),
        (qn.as = function (e) {
            if (!this.isValid()) return NaN;
            var t,
                n,
                s = this._milliseconds;
            if ("month" === (e = H(e)) || "quarter" === e || "year" === e)
                switch (
                    ((t = this._days + s / 864e5),
                    (n = this._months + Sn(t)),
                    e)
                ) {
                    case "month":
                        return n;
                    case "quarter":
                        return n / 3;
                    case "year":
                        return n / 12;
                }
            else
                switch (((t = this._days + Math.round(Dn(this._months))), e)) {
                    case "week":
                        return t / 7 + s / 6048e5;
                    case "day":
                        return t + s / 864e5;
                    case "hour":
                        return 24 * t + s / 36e5;
                    case "minute":
                        return 1440 * t + s / 6e4;
                    case "second":
                        return 86400 * t + s / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + s;
                    default:
                        throw new Error("Unknown unit " + e);
                }
        }),
        (qn.asMilliseconds = On),
        (qn.asSeconds = Tn),
        (qn.asMinutes = bn),
        (qn.asHours = xn),
        (qn.asDays = Pn),
        (qn.asWeeks = Wn),
        (qn.asMonths = Cn),
        (qn.asQuarters = Hn),
        (qn.asYears = Rn),
        (qn.valueOf = function () {
            return this.isValid()
                ? this._milliseconds +
                      864e5 * this._days +
                      (this._months % 12) * 2592e6 +
                      31536e6 * D(this._months / 12)
                : NaN;
        }),
        (qn._bubble = function () {
            var e,
                t,
                n,
                s,
                i,
                r = this._milliseconds,
                a = this._days,
                o = this._months,
                u = this._data;
            return (
                (0 <= r && 0 <= a && 0 <= o) ||
                    (r <= 0 && a <= 0 && o <= 0) ||
                    ((r += 864e5 * kn(Dn(o) + a)), (o = a = 0)),
                (u.milliseconds = r % 1e3),
                (e = S(r / 1e3)),
                (u.seconds = e % 60),
                (t = S(e / 60)),
                (u.minutes = t % 60),
                (n = S(t / 60)),
                (u.hours = n % 24),
                (o += i = S(Sn((a += S(n / 24))))),
                (a -= kn(Dn(i))),
                (s = S(o / 12)),
                (o %= 12),
                (u.days = a),
                (u.months = o),
                (u.years = s),
                this
            );
        }),
        (qn.clone = function () {
            return jt(this);
        }),
        (qn.get = function (e) {
            return (e = H(e)), this.isValid() ? this[e + "s"]() : NaN;
        }),
        (qn.milliseconds = Fn),
        (qn.seconds = Ln),
        (qn.minutes = Nn),
        (qn.hours = Gn),
        (qn.days = Vn),
        (qn.weeks = function () {
            return S(this.days() / 7);
        }),
        (qn.months = En),
        (qn.years = In),
        (qn.humanize = function (e) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t,
                n,
                s,
                i,
                r,
                a,
                o,
                u,
                l,
                h,
                d,
                c = this.localeData(),
                f =
                    ((n = !e),
                    (s = c),
                    (i = jt((t = this)).abs()),
                    (r = An(i.as("s"))),
                    (a = An(i.as("m"))),
                    (o = An(i.as("h"))),
                    (u = An(i.as("d"))),
                    (l = An(i.as("M"))),
                    (h = An(i.as("y"))),
                    ((d = (r <= jn.ss && ["s", r]) ||
                        (r < jn.s && ["ss", r]) ||
                        (a <= 1 && ["m"]) ||
                        (a < jn.m && ["mm", a]) ||
                        (o <= 1 && ["h"]) ||
                        (o < jn.h && ["hh", o]) ||
                        (u <= 1 && ["d"]) ||
                        (u < jn.d && ["dd", u]) ||
                        (l <= 1 && ["M"]) ||
                        (l < jn.M && ["MM", l]) ||
                        (h <= 1 && ["y"]) || ["yy", h])[2] = n),
                    (d[3] = 0 < +t),
                    (d[4] = s),
                    function (e, t, n, s, i) {
                        return i.relativeTime(t || 1, !!n, e, s);
                    }.apply(null, d));
            return e && (f = c.pastFuture(+this, f)), c.postformat(f);
        }),
        (qn.toISOString = $n),
        (qn.toString = $n),
        (qn.toJSON = $n),
        (qn.locale = Xt),
        (qn.localeData = en),
        (qn.toIsoString = n(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            $n
        )),
        (qn.lang = Kt),
        I("X", 0, 0, "unix"),
        I("x", 0, 0, "valueOf"),
        ue("x", se),
        ue("X", /[+-]?\d+(\.\d{1,3})?/),
        ce("X", function (e, t, n) {
            n._d = new Date(1e3 * parseFloat(e, 10));
        }),
        ce("x", function (e, t, n) {
            n._d = new Date(D(e));
        }),
        (c.version = "2.24.0"),
        (e = bt),
        (c.fn = mn),
        (c.min = function () {
            return Wt("isBefore", [].slice.call(arguments, 0));
        }),
        (c.max = function () {
            return Wt("isAfter", [].slice.call(arguments, 0));
        }),
        (c.now = function () {
            return Date.now ? Date.now() : +new Date();
        }),
        (c.utc = y),
        (c.unix = function (e) {
            return bt(1e3 * e);
        }),
        (c.months = function (e, t) {
            return vn(e, t, "months");
        }),
        (c.isDate = d),
        (c.locale = ut),
        (c.invalid = p),
        (c.duration = jt),
        (c.isMoment = k),
        (c.weekdays = function (e, t, n) {
            return pn(e, t, n, "weekdays");
        }),
        (c.parseZone = function () {
            return bt.apply(null, arguments).parseZone();
        }),
        (c.localeData = ht),
        (c.isDuration = Rt),
        (c.monthsShort = function (e, t) {
            return vn(e, t, "monthsShort");
        }),
        (c.weekdaysMin = function (e, t, n) {
            return pn(e, t, n, "weekdaysMin");
        }),
        (c.defineLocale = lt),
        (c.updateLocale = function (e, t) {
            if (null != t) {
                var n,
                    s,
                    i = st;
                null != (s = ot(e)) && (i = s._config),
                    ((n = new P((t = x(i, t)))).parentLocale = it[e]),
                    (it[e] = n),
                    ut(e);
            } else
                null != it[e] &&
                    (null != it[e].parentLocale
                        ? (it[e] = it[e].parentLocale)
                        : null != it[e] && delete it[e]);
            return it[e];
        }),
        (c.locales = function () {
            return s(it);
        }),
        (c.weekdaysShort = function (e, t, n) {
            return pn(e, t, n, "weekdaysShort");
        }),
        (c.normalizeUnits = H),
        (c.relativeTimeRounding = function (e) {
            return void 0 === e ? An : "function" == typeof e && ((An = e), !0);
        }),
        (c.relativeTimeThreshold = function (e, t) {
            return (
                void 0 !== jn[e] &&
                (void 0 === t
                    ? jn[e]
                    : ((jn[e] = t), "s" === e && (jn.ss = t - 1), !0))
            );
        }),
        (c.calendarFormat = function (e, t) {
            var n = e.diff(t, "days", !0);
            return n < -6
                ? "sameElse"
                : n < -1
                ? "lastWeek"
                : n < 0
                ? "lastDay"
                : n < 1
                ? "sameDay"
                : n < 2
                ? "nextDay"
                : n < 7
                ? "nextWeek"
                : "sameElse";
        }),
        (c.prototype = mn),
        (c.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM",
        }),
        c
    );
});
