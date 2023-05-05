(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (n, u, i) {
      (window._next_P = window._next_P || []).push([
        "/",
        function () {
          return i(5901);
        },
      ]);
    },
    5901: function (n, u, i) {
      "use strict";
      i.r(u);
      var o = i(5893),
        t = i(1163),
        c = i(304);
      u.default = function () {
        var n = (0, t.useRouter)();
        return (0, o.jsx)(c.Z, {
          variant: "contained",
          onClick: function () {
            n.replace("/coins");
          },
          children: "Go To Coins",
        });
      };
    },
  },
  function (n) {
    n.O(0, [357, 774, 888, 179], function () {
      return n((n.s = 5557));
    }),
      (_N_E = n.O());
  },
]);
