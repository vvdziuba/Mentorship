(self.__BUILD_MANIFEST = (function (s) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": [s, "static/chunks/pages/index-5d53c35a81cf38fb.js"],
    "/_error": ["static/chunks/pages/error-54de1933a164a1ff.js"],
    "/coins": [
      s,
      "static/chunks/263-3a6b04a6282e8244.js",
      "static/chunks/pages/coins-6714e81472d273f5.js",
    ],
    "/coins/[id]": [
      s,
      "static/chunks/422-5a5b0628c741357c.js",
      "static/chunks/pages/coins/[id]-9aaf73781eccbe04.js",
    ],
    sortedPages: ["/", "/_app", "/_error", "/coins", "/coins/[id]"],
  };
})("static/chunks/357-3c37ccccf52aa5ca.js")),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
