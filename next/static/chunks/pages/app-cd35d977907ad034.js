(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (n, e, t) {
      (window._next_P = window._next_P || []).push([
        "/_app",
        function () {
          return t(8455);
        },
      ]);
    },
    8455: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return u;
          },
        });
      var r = t(5893);
      function u(n) {
        var e = n.Component,
          t = n.pageProps;
        return (0, r.jsx)(
          e,
          (function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(t).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                  })
                )),
                r.forEach(function (e) {
                  var r, u;
                  (r = n),
                    (u = t[e]),
                    e in r
                      ? Object.defineProperty(r, e, {
                          value: u,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[e] = u);
                });
            }
            return n;
          })({ className: "App" }, t)
        );
      }
      t(7952);
    },
    7952: function () {},
  },
  function (n) {
    var e = function (e) {
      return n((n.s = e));
    };
    n.O(0, [774, 179], function () {
      return e(1118), e(6885);
    }),
      (_N_E = n.O());
  },
]);
