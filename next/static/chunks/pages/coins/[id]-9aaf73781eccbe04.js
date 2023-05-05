(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [172],
  {
    7930: function (n, e, i) {
      (window._next_P = window._next_P || []).push([
        "/coins/[id]",
        function () {
          return i(6465);
        },
      ]);
    },
    6465: function (n, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          __N_SSG: function () {
            return l;
          },
        });
      var r = i(5893),
        c = i(7213),
        s = i(304),
        t = i(1163),
        o = i(5675),
        d = i.n(o),
        l = !0;
      e.default = function (n) {
        var e = n.coin,
          i = (0, t.useRouter)();
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)(s.Z, {
              variant: "contained",
              onClick: function () {
                i.replace("/coins");
              },
              children: "Go Back",
            }),
            (0, r.jsxs)(c.ZP, {
              children: [
                (0, r.jsx)("p", { children: e.name }),
                (0, r.jsxs)("p", { children: ["Coin id: ", e.id] }),
                (0, r.jsxs)("p", { children: ["Symbol: ", e.symbol] }),
                (0, r.jsxs)("p", { children: ["Rank: ", e.rank] }),
                (0, r.jsxs)("p", {
                  children: [
                    "Link:",
                    " ",
                    (0, r.jsx)("a", {
                      target: "_blank",
                      href: e.explorer,
                      children: e.explorer,
                    }),
                  ],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "Change Percent 24Hr: ",
                    Number(e.changePercent24Hr).toFixed(5),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(d(), {
              src: "/my-bitcoin.jpg",
              alt: "Pic",
              width: 100,
              height: 100,
            }),
          ],
        });
      };
    },
  },
  function (n) {
    n.O(0, [357, 422, 774, 888, 179], function () {
      return n((n.s = 7930));
    }),
      (_N_E = n.O());
  },
]);
