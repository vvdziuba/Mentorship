(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [674],
  {
    7518: function (n, t, i) {
      (window._next_P = window._next_P || []).push([
        "/coins",
        function () {
          return i(2701);
        },
      ]);
    },
    2701: function (n, t, i) {
      "use strict";
      i.r(t);
      var e = i(1010),
        r = i(2729),
        c = i(655),
        s = i(5893),
        u = i(186),
        o = i(9039),
        a = i(1163),
        f = i(304),
        _ = i(1664),
        d = i.n(_);
      function h() {
        var n = (0, r._)(["\n  text-align: center;\n"]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      var l = (0, u.ZP)(o.Z)(h()),
        p = function (n) {
          var t = n.coins,
            i = (0, a.useRouter)();
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)(f.Z, {
                variant: "contained",
                onClick: function () {
                  i.replace("/");
                },
                children: "Go Home",
              }),
              (t || []).map(function (n, t) {
                return (0,
                s.jsx)(d(), { href: "/coins/" + n.id, children: (0, s.jsx)(l, { id: n.id, primary: n.name }) }, n.id);
              }),
            ],
          });
        };
      (p.getInitialProps = (0, e._)(function () {
        return (0, c.Jh)(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, fetch("https://api.coincap.io/v2/assets?limit=20")];
            case 1:
              return [4, n.sent().json()];
            case 2:
              return [2, { coins: n.sent().data }];
          }
        });
      })),
        (t.default = p);
    },
  },
  function (n) {
    n.O(0, [357, 263, 774, 888, 179], function () {
      return n((n.s = 7518));
    }),
      (_N_E = n.O());
  },
]);