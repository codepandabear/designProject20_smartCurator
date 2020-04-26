! function(t) {
    var e = {};

    function r(n) { if (e[n]) return e[n].exports; var i = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports }
    r.m = t, r.c = e, r.d = function(t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, r.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var i in t) r.d(n, i, function(e) { return t[e] }.bind(null, i));
        return n
    }, r.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return r.d(e, "a", e), e }, r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "", r(r.s = 11)
}([function(t, e, r) {
    "use strict";
    var n, i = function() { return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n },
        a = function() {
            var t = {};
            return function(e) {
                if (void 0 === t[e]) {
                    var r = document.querySelector(e);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try { r = r.contentDocument.head } catch (t) { r = null }
                    t[e] = r
                }
                return t[e]
            }
        }(),
        s = [];

    function o(t) {
        for (var e = -1, r = 0; r < s.length; r++)
            if (s[r].identifier === t) { e = r; break }
        return e
    }

    function u(t, e) {
        for (var r = {}, n = [], i = 0; i < t.length; i++) {
            var a = t[i],
                u = e.base ? a[0] + e.base : a[0],
                l = r[u] || 0,
                h = "".concat(u, " ").concat(l);
            r[u] = l + 1;
            var c = o(h),
                f = { css: a[1], media: a[2], sourceMap: a[3] }; - 1 !== c ? (s[c].references++, s[c].updater(f)) : s.push({ identifier: h, updater: g(f, e), references: 1 }), n.push(h)
        }
        return n
    }

    function l(t) {
        var e = document.createElement("style"),
            n = t.attributes || {};
        if (void 0 === n.nonce) {
            var i = r.nc;
            i && (n.nonce = i)
        }
        if (Object.keys(n).forEach((function(t) { e.setAttribute(t, n[t]) })), "function" == typeof t.insert) t.insert(e);
        else {
            var s = a(t.insert || "head");
            if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            s.appendChild(e)
        }
        return e
    }
    var h, c = (h = [], function(t, e) { return h[t] = e, h.filter(Boolean).join("\n") });

    function f(t, e, r, n) {
        var i = r ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
        if (t.styleSheet) t.styleSheet.cssText = c(e, i);
        else {
            var a = document.createTextNode(i),
                s = t.childNodes;
            s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(a, s[e]) : t.appendChild(a)
        }
    }

    function p(t, e, r) {
        var n = r.css,
            i = r.media,
            a = r.sourceMap;
        if (i ? t.setAttribute("media", i) : t.removeAttribute("media"), a && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleSheet) t.styleSheet.cssText = n;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
        }
    }
    var d = null,
        _ = 0;

    function g(t, e) {
        var r, n, i;
        if (e.singleton) {
            var a = _++;
            r = d || (d = l(e)), n = f.bind(null, r, a, !1), i = f.bind(null, r, a, !0)
        } else r = l(e), n = p.bind(null, r, e), i = function() {
            ! function(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t)
            }(r)
        };
        return n(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    n(t = e)
                } else i()
            }
    }
    t.exports = function(t, e) {
        (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = i());
        var r = u(t = t || [], e);
        return function(t) {
            if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                for (var n = 0; n < r.length; n++) {
                    var i = o(r[n]);
                    s[i].references--
                }
                for (var a = u(t, e), l = 0; l < r.length; l++) {
                    var h = o(r[l]);
                    0 === s[h].references && (s[h].updater(), s.splice(h, 1))
                }
                r = a
            }
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map((function(e) {
                var r = function(t, e) {
                    var r = t[1] || "",
                        n = t[3];
                    if (!n) return r;
                    if (e && "function" == typeof btoa) {
                        var i = (s = n, o = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(u, " */")),
                            a = n.sources.map((function(t) { return "/*# sourceURL=".concat(n.sourceRoot || "").concat(t, " */") }));
                        return [r].concat(a).concat([i]).join("\n")
                    }
                    var s, o, u;
                    return [r].join("\n")
                }(e, t);
                return e[2] ? "@media ".concat(e[2], " {").concat(r, "}") : r
            })).join("")
        }, e.i = function(t, r, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            var i = {};
            if (n)
                for (var a = 0; a < this.length; a++) {
                    var s = this[a][0];
                    null != s && (i[s] = !0)
                }
            for (var o = 0; o < t.length; o++) {
                var u = [].concat(t[o]);
                n && i[u[0]] || (r && (u[2] ? u[2] = "".concat(r, " and ").concat(u[2]) : u[2] = r), e.push(u))
            }
        }, e
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(3);
    "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
        [t.i, i, ""]
    ]);
    var a = { insert: "head", singleton: !1 },
        s = (n(i, a), i.locals ? i.locals : {});
    t.exports = s
}, function(t, e, r) {
    (e = r(1)(!1)).push([t.i, 'body {\r\n  font-family: "Caladea";\r\n}\r\n\r\n.body-slider {\r\n  background-color: rgb(255, 255, 255);\r\n  color: black;\r\n}\r\n\r\n.page-slider {\r\n  display: flex !important;\r\n  margin-top: 4%;\r\n}\r\n\r\n.page-slider > * {\r\n  flex-basis: 50%;\r\n}\r\n\r\n.left-slider {\r\n  margin-left: 15%;\r\n}\r\n\r\n.swiper-slider-image-container {\r\n  /* margin-top: 10%; */\r\n  /* margin-left: 15vw;\r\n  margin-right: 15vw; */\r\n  margin-bottom: 1%;\r\n  margin-left: 15px;\r\n  position: relative;\r\n  width: 16vw; /* 1:1.768 aspect ratio */\r\n  height: 28.29vw; /* other valid value: 30vw */\r\n  box-sizing: border-box;\r\n}\r\n\r\n.swiper-slider-image {\r\n  width: 19vw;\r\n  /* 1:1.768 aspect ratio */\r\n  height: 29.29vw; /* other valid value: 30vw */\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  /* background-color: aquamarine; */\r\n  opacity: 0;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n#swiper-slider-image-5 {\r\n  /* background-image: url("./assets/CloseupPNA.jpg"); */\r\n  background-image: url("https://images.squarespace-cdn.com/content/v1/5442b6cce4b0cf00d1a3bef2/1581452381291-COIIFX1G453K3GOIZCPP/ke17ZwdGBToddI8pDm48kFArOLL-JrphExIyKlUU2JFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzheQTriTsAekrCXGzx1_YDKd_v_e5OKe84jVwEuJ7LHQK5Xp-Xi2MgqmPG9kHvKeY/Ethical+Capsule+Wardrobe+For+The+Office+-+Vetta+Capsule?format=750w");\r\n}\r\n\r\n#swiper-slider-image-4 {\r\n  /* background-image: url("./assets/frontviewPNA.jpg"); */\r\n  /* transform: rotate(180deg); */\r\n  background-image: url("https://res.cloudinary.com/everlane/image/upload/c_scale/dpr_2.0,f_auto,q_auto/v1/i/9d3d8301_4ffb.jpg");\r\n}\r\n\r\n#swiper-slider-image-3 {\r\n  background-image: url("https://res.cloudinary.com/everlane/image/upload/c_scale/c_fill,dpr_2.0,f_auto,q_auto,w_auto:100:1200/v1/i/ff992ca9_fd9f.jpg");\r\n}\r\n\r\n#swiper-slider-image-2 {\r\n  background-image: url("https://images.squarespace-cdn.com/content/v1/5442b6cce4b0cf00d1a3bef2/1546461013992-6DX3U6A3AJNG0BE9KUBD/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIedjZT6_OBzi2ofH1EqNdNeCRxNMlbxs9807lIebBlcA/Responsibly+Made+Blazers+-+Citizen%27s+Mark?format=750w");\r\n}\r\n\r\n/**********************************/\r\n/*  SECTION:                      */\r\n/*  image-slider Nav-bar section: */\r\n\r\n.swiper-slider-nav {\r\n  display: flex;\r\n  padding: 10%;\r\n  /*   padding-top: 2%; */\r\n  /* margin-left: 15vw; */\r\n  padding-left: 0;\r\n}\r\n\r\n/* .swiper-slider intra element spacing */\r\n.swiper-pagination-bullet {\r\n  margin-right: 5%;\r\n}\r\n\r\n.swiper-pagination-bullet {\r\n  width: 40px;\r\n  height: 40px;\r\n  font-size: 14px;\r\n  line-height: 17px;\r\n  font-weight: 100;\r\n  font-style: normal;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  /*  transition: all 0.2s ease-in-out; */\r\n  cursor: pointer;\r\n\r\n  color: rgba(32, 32, 32, 0.25);\r\n}\r\n.swiper-pagination-bullet.swiper-pagination-bullet-active .circle-2 {\r\n  stroke-dashoffset: 0;\r\n  /*  transition-duration: 5.6s; */\r\n}\r\n\r\n.my-svg {\r\n  --color-text: #202020;\r\n  --color-text-opacity: rgba(32, 32, 32, 0.25);\r\n}\r\n\r\nspan.my-svg {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\ncircle {\r\n  fill: none;\r\n}\r\n\r\n.circle-1 {\r\n  stroke: var(--color-text-opacity);\r\n  opacity: 1;\r\n  stroke-width: 1px;\r\n}\r\n\r\n.circle-2 {\r\n  stroke: var(--color-text);\r\n  stroke-width: 2px;\r\n  stroke-dashoffset: 130;\r\n  stroke-dasharray: 130;\r\n  /*  transition: stroke-dashoffset 2s linear 0ms, transform 2ms linear 0ms; */\r\n  transform-origin: center;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n/* SECTION: Swiper-slider details (text): */\r\n.right-slider {\r\n  margin-right: 7%;\r\n  padding-right: 7%;\r\n  position: relative;\r\n}\r\n\r\n.right-slider h3 {\r\n  color: #e64299;\r\n  font-size: 3vw;\r\n  font-weight: 1000;\r\n}\r\n\r\n.right-slider h5 {\r\n  color: #e64299;\r\n  font-size: 1.5vw;\r\n}\r\n\r\n.swiper-slider-details {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n}\r\n\r\n.swiper-slider-details h3:first-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.swiper-slider-details .info span:first-child {\r\n  color: silver;\r\n}\r\n', ""]), t.exports = e
}, function(t, e, r) {
    var n = r(0),
        i = r(5);
    "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
        [t.i, i, ""]
    ]);
    var a = { insert: "head", singleton: !1 },
        s = (n(i, a), i.locals ? i.locals : {});
    t.exports = s
}, function(t, e, r) {
    var n = r(1),
        i = r(6),
        a = r(7);
    e = n(!1);
    var s = i(a);
    e.push([t.i, "body {\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  background-color: rgb(157, 216, 250);\r\n  color: white;\r\n}\r\n\r\n.top-section {\r\n  padding-top: 2%;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.top-section .name {\r\n  cursor: pointer;\r\n}\r\n\r\n.hero-section {\r\n  margin-top: 10%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.left {\r\n  flex-basis: 50%;\r\n}\r\n\r\n.left h2 span {\r\n  font-size: 3rem;\r\n}\r\n\r\n.left h2 > span:first-child {\r\n  font-size: 4rem;\r\n}\r\n.left h2 {\r\n  margin: 0%;\r\n}\r\n\r\n.what-we-do {\r\n  position: relative;\r\n}\r\n\r\n.what-we-do > * {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  /*  opacity: 0; */\r\n  /* Properties for typewriter effect */\r\n  overflow: hidden; /* hide overflowing content when width too small */\r\n  white-space: nowrap; /* Single line */\r\n  width: 0; /* animate this by extending to width 100% */\r\n  border-right: 0.15em solid transparent;\r\n}\r\n\r\n.what-we-do-image-container {\r\n}\r\n\r\n#what-we-do-image-1 {\r\n  background-image: url(" + s + ');\r\n  background-image: url("https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_2600,f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/5JMJqG6V77pdPXLorPGY6z/5185c6cba753906a5c4694d6e3f4d6da/WR_Collection_BNR_1300x692__1_.jpg");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  width: 37vw;\r\n  height: 24.69vw;\r\n  border-radius: 2em;\r\n}\r\n\r\n/* .right {\r\n  flex-basis: 50%;\r\n} */\r\n\r\n.bottom {\r\n  padding-top: 5%;\r\n  flex-basis: 100%;\r\n  font-size: 2em;\r\n}\r\n\r\n.bottom a {\r\n  cursor: pointer;\r\n  transition: color 0.3s ease-in;\r\n  color: inherit;\r\n}\r\n\r\n.bottom a:hover {\r\n  color: black;\r\n}\r\n\r\n/* LOADER section */\r\n.page {\r\n  display: block;\r\n  opacity: 0;\r\n  height: 0%;\r\n  transition: opacity 0.3s ease-in-out 0.2s, height 0.3s ease-in-out 0.2s;\r\n}\r\n\r\n.loader-wrapper {\r\n  position: fixed;\r\n  z-index: 10000;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: white;\r\n  transition: opacity 0.3s ease-in-out, height 0.3s ease-in-out;\r\n}\r\n\r\n.loader-wrapper::after {\r\n  content: "";\r\n  position: absolute;\r\n  width: 90px; /* nearly same width and height as the loader itself */\r\n  height: 90px;\r\n  background-color: transparent;\r\n  border: 10px solid #fefefe; /* to cover the outlines of the .loader image */\r\n  outline: none;\r\n}\r\n\r\n.loader {\r\n  width: 100px;\r\n  height: 100px;\r\n  outline: none;\r\n}\r\n', ""]), t.exports = e
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) { return e || (e = {}), "string" != typeof(t = t && t.__esModule ? t.default : t) ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), e.hash && (t += e.hash), /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t) }
}, function(t, e, r) {
    "use strict";
    r.r(e), e.default = r.p + "59d72119b3322f57022bce985887a184.jpg"
}, function(t, e, r) {
    var n = r(0),
        i = r(9);
    "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
        [t.i, i, ""]
    ]);
    var a = { insert: "head", singleton: !1 },
        s = (n(i, a), i.locals ? i.locals : {});
    t.exports = s
}, function(t, e, r) {
    (e = r(1)(!1)).push([t.i, '.search-body {\r\n  background-color: rgb(245, 221, 202);\r\n}\r\n\r\n#search-top-section {\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n.search-hero-section-wrapper {\r\n  height: 60vh;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.search-hero-section {\r\n  padding-left: 20%;\r\n  padding-right: 20%;\r\n  color: black;\r\n  /*   height: 60vh; */\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.search-hero-section > * {\r\n  flex-basis: 100%;\r\n}\r\n\r\n.search-hero-section h1:first-child {\r\n  font-weight: 300;\r\n  font-size: 4rem;\r\n}\r\n\r\n.search-hero-section .form > * {\r\n  box-sizing: border-box;\r\n  border: 0;\r\n  padding: 10px;\r\n  background: rgb(248, 248, 248);\r\n  line-height: 50px;\r\n  font-size: 17px;\r\n  border-radius: 0;\r\n  outline: 0;\r\n  border-right: 1px solid rgba(32, 32, 32, 0.3);\r\n  /* border-bottom: 1px solid rgba(32, 32, 32, 0.3); */\r\n  /* -webkit-appearance: none; */\r\n  flex-basis: 2;\r\n  flex-grow: 2;\r\n}\r\n.form > *:last-child {\r\n  border-right: 0;\r\n  border-bottom: 0;\r\n  cursor: pointer;\r\n  background-color: rgb(19, 93, 177);\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.form input[type="search"] {\r\n  padding-left: 4%;\r\n  color: rgb(19, 93, 177);\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.form input[type="search"]::placeholder {\r\n  font-style: italic;\r\n  color: rgb(19, 93, 177);\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.form input[type="submit"] {\r\n  /* background: #ff5a5f; */\r\n  /*   border-top: 1px solid #ff5a5f;\r\n  border-bottom: 1px solid #ff5a5f; */\r\n  /* color: rgb(237, 242, 245); */\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  border: 1px solid rgba(32, 32, 32, 0.3);\r\n  /* border-radius: 5px; */\r\n}\r\n\r\n/* Back Pulse */\r\n@-webkit-keyframes hvr-back-pulse {\r\n  50% {\r\n    background-color: rgba(233, 252, 255, 0.75);\r\n  }\r\n}\r\n@keyframes hvr-back-pulse {\r\n  50% {\r\n    background-color: rgba(233, 252, 255, 0.75);\r\n  }\r\n}\r\n.hvr-back-pulse {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  overflow: hidden;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n}\r\n.hvr-back-pulse:hover,\r\n.hvr-back-pulse:focus,\r\n.hvr-back-pulse:active {\r\n  -webkit-animation-name: hvr-back-pulse;\r\n  animation-name: hvr-back-pulse;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-delay: 0.5s;\r\n  animation-delay: 0.5s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  /*   -webkit-animation-iteration-count: infinite;\r\n    animation-iteration-count: infinite; */\r\n  /*   background-color: #2098d1;\r\n    background-color: #2098d1;   */\r\n  /*   color: white; */\r\n}\r\n', ""]), t.exports = e
}, function(t, e) {}, function(t, e, r) {
    "use strict";

    function n(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

    function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
    /*!
     * GSAP 3.2.2
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    r.r(e);
    var a, s, o, u, l, h, c, f, p, d, _, g, m, v, y, b, w, x, T, k, M, O, C, S, A, P = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
        z = { duration: .5, overwrite: !1, delay: 0 },
        D = 2 * Math.PI,
        E = D / 4,
        R = 0,
        F = Math.sqrt,
        B = Math.cos,
        I = Math.sin,
        N = function(t) { return "string" == typeof t },
        L = function(t) { return "function" == typeof t },
        U = function(t) { return "number" == typeof t },
        j = function(t) { return void 0 === t },
        q = function(t) { return "object" == typeof t },
        X = function(t) { return !1 !== t },
        Y = function() { return "undefined" != typeof window },
        G = function(t) { return L(t) || N(t) },
        V = Array.isArray,
        Z = /(?:-?\.?\d|\.)+/gi,
        J = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        Q = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        W = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        H = /\(([^()]+)\)/i,
        K = /[+-]=-?[\.\d]+/,
        $ = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        tt = {},
        et = {},
        rt = function(t) { return (et = St(t, tt)) && sr },
        nt = function(t, e) { return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()") },
        it = function(t, e) { return !e && console.warn(t) },
        at = function(t, e) { return t && (tt[t] = e) && et && (et[t] = e) || tt },
        st = function() { return 0 },
        ot = {},
        ut = [],
        lt = {},
        ht = {},
        ct = {},
        ft = 30,
        pt = [],
        dt = "",
        _t = function(t) {
            var e, r, n = t[0];
            if (q(n) || L(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                for (r = pt.length; r-- && !pt[r].targetTest(n););
                e = pt[r]
            }
            for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new ze(t[r], e))) || t.splice(r, 1);
            return t
        },
        gt = function(t) { return t._gsap || _t(Kt(t))[0]._gsap },
        mt = function(t, e) { var r = t[e]; return L(r) ? t[e]() : j(r) && t.getAttribute(e) || r },
        vt = function(t, e) { return (t = t.split(",")).forEach(e) || t },
        yt = function(t) { return Math.round(1e5 * t) / 1e5 || 0 },
        bt = function(t, e) { for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;); return n < r },
        wt = function(t, e, r) {
            var n, i = U(t[1]),
                a = (i ? 2 : 1) + (e < 2 ? 0 : 1),
                s = t[a];
            if (i && (s.duration = t[1]), s.parent = r, e) {
                for (n = s; r && !("immediateRender" in n);) n = r.vars.defaults || {}, r = X(r.vars.inherit) && r.parent;
                s.immediateRender = X(n.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[a - 1]
            }
            return s
        },
        xt = function() {
            var t, e, r = ut.length,
                n = ut.slice(0);
            for (lt = {}, ut.length = 0, t = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        Tt = function(t, e, r, n) { ut.length && xt(), t.render(e, r, n), ut.length && xt() },
        kt = function(t) { var e = parseFloat(t); return (e || 0 === e) && (t + "").match($).length < 2 ? e : t },
        Mt = function(t) { return t },
        Ot = function(t, e) { for (var r in e) r in t || (t[r] = e[r]); return t },
        Ct = function(t, e) { for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r]) },
        St = function(t, e) { for (var r in e) t[r] = e[r]; return t },
        At = function t(e, r) { for (var n in r) e[n] = q(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]; return e },
        Pt = function(t, e) { var r, n = {}; for (r in t) r in e || (n[r] = t[r]); return n },
        zt = function(t, e, r, n) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var i = e._prev,
                a = e._next;
            i ? i._next = a : t[r] === e && (t[r] = a), a ? a._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
        },
        Dt = function(t, e) {!t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0 },
        Et = function(t) { for (var e = t; e;) e._dirty = 1, e = e.parent; return t },
        Rt = function(t) { for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent; return t },
        Ft = function(t) { return t._repeat ? Bt(t._tTime, t = t.duration() + t._rDelay) * t : 0 },
        Bt = function(t, e) { return (t /= e) && ~~t === t ? ~~t - 1 : ~~t },
        It = function(t, e) { return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur) },
        Nt = function(t) { return t._end = yt(t._start + (t._tDur / Math.abs(t._ts || t._pauseTS || 1e-8) || 0)) },
        Lt = function(t, e) {
            var r;
            if ((e._time || !e._dur && e._initted) && (r = (t.rawTime() - e._start) * e._ts, (!e._dur || Zt(0, e.totalDuration(), r) - e._tTime > 1e-8) && e.render(r, !0)), Et(t)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                t._zTime = -1e-8
            }
        },
        Ut = function(t, e, r, n) {
            return e.parent && Dt(e), e._start = yt(r + e._delay), e._end = yt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function(t, e, r, n, i) {
                    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
                    var a, s = t[n];
                    if (i)
                        for (a = e[i]; s && s[i] > a;) s = s._prev;
                    s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = s, e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, n || Lt(t, e), t
        },
        jt = function(t, e, r, n) { return Ne(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && h !== ye.frame ? (ut.push(t), t._lazy = [e, n], 1) : void 0 : 1 },
        qt = function(t, e, r) {
            var n = t._repeat,
                i = yt(e);
            return t._dur = i, t._tDur = n ? n < 0 ? 1e12 : yt(i * (n + 1) + t._rDelay * n) : i, !r && Et(t.parent), t.parent && Nt(t), t
        },
        Xt = function(t) { return t instanceof Ee ? Et(t) : qt(t, t._dur) },
        Yt = { _start: 0, endTime: st },
        Gt = function t(e, r) {
            var n, i, a = e.labels,
                s = e._recent || Yt,
                o = e.duration() >= 1e8 ? s.endTime(!1) : e._dur;
            return N(r) && (isNaN(r) || r in a) ? "<" === (n = r.charAt(0)) || ">" === n ? ("<" === n ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) : (n = r.indexOf("=")) < 0 ? (r in a || (a[r] = o), a[r]) : (i = +(r.charAt(n - 1) + r.substr(n + 1)), n > 1 ? t(e, r.substr(0, n - 1)) + i : o + i) : null == r ? o : +r
        },
        Vt = function(t, e) { return t || 0 === t ? e(t) : e },
        Zt = function(t, e, r) { return r < t ? t : r > e ? e : r },
        Jt = function(t) { return (t + "").substr((parseFloat(t) + "").length) },
        Qt = [].slice,
        Wt = function(t, e) { return t && q(t) && "length" in t && (!e && !t.length || t.length - 1 in t && q(t[0])) && !t.nodeType && t !== s },
        Ht = function(t, e, r) { return void 0 === r && (r = []), t.forEach((function(t) { var n; return N(t) && !e || Wt(t, 1) ? (n = r).push.apply(n, Kt(t)) : r.push(t) })) || r },
        Kt = function(t, e) { return !N(t) || e || !o && be() ? V(t) ? Ht(t, e) : Wt(t) ? Qt.call(t, 0) : t ? [t] : [] : Qt.call(u.querySelectorAll(t), 0) },
        $t = function(t) { return t.sort((function() { return .5 - Math.random() })) },
        te = function(t) {
            if (L(t)) return t;
            var e = q(t) ? t : { each: t },
                r = Oe(e.ease),
                n = e.from || 0,
                i = parseFloat(e.base) || 0,
                a = {},
                s = n > 0 && n < 1,
                o = isNaN(n) || s,
                u = e.axis,
                l = n,
                h = n;
            return N(n) ? l = h = { center: .5, edges: .5, end: 1 }[n] || 0 : !s && o && (l = n[0], h = n[1]),
                function(t, s, c) {
                    var f, p, d, _, g, m, v, y, b, w = (c || e).length,
                        x = a[w];
                    if (!x) {
                        if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                            for (v = -1e8; v < (v = c[b++].getBoundingClientRect().left) && b < w;);
                            b--
                        }
                        for (x = a[w] = [], f = o ? Math.min(b, w) * l - .5 : n % b, p = o ? w * h / b - .5 : n / b | 0, v = 0, y = 1e8, m = 0; m < w; m++) d = m % b - f, _ = p - (m / b | 0), x[m] = g = u ? Math.abs("y" === u ? _ : d) : F(d * d + _ * _), g > v && (v = g), g < y && (y = g);
                        "random" === n && $t(x), x.max = v - y, x.min = y, x.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (b > w ? w - 1 : u ? "y" === u ? w / b : b : Math.max(b, w / b)) || 0) * ("edges" === n ? -1 : 1), x.b = w < 0 ? i - w : i, x.u = Jt(e.amount || e.each) || 0, r = r && w < 0 ? Me(r) : r
                    }
                    return w = (x[t] - x.min) / x.max || 0, yt(x.b + (r ? r(w) : w) * x.v) + x.u
                }
        },
        ee = function(t) { var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1; return function(r) { return ~~(Math.round(parseFloat(r) / t) * t * e) / e + (U(r) ? 0 : Jt(r)) } },
        re = function(t, e) { var r, n, i = V(t); return !i && q(t) && (r = i = t.radius || 1e8, t.values ? (t = Kt(t.values), (n = !U(t[0])) && (r *= r)) : t = ee(t.increment)), Vt(e, i ? L(t) ? function(e) { return n = t(e), Math.abs(n - e) <= r ? n : e } : function(e) { for (var i, a, s = parseFloat(n ? e.x : e), o = parseFloat(n ? e.y : 0), u = 1e8, l = 0, h = t.length; h--;)(i = n ? (i = t[h].x - s) * i + (a = t[h].y - o) * a : Math.abs(t[h] - s)) < u && (u = i, l = h); return l = !r || u <= r ? t[l] : e, n || l === e || U(e) ? l : l + Jt(e) } : ee(t)) },
        ne = function(t, e, r, n) { return Vt(V(t) ? !e : !0 === r ? !!(r = 0) : !n, (function() { return V(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / r) * r * n) / n })) },
        ie = function(t, e, r) { return Vt(r, (function(r) { return t[~~e(r)] })) },
        ae = function(t) { for (var e, r, n, i, a = 0, s = ""; ~(e = t.indexOf("random(", a));) n = t.indexOf(")", e), i = "[" === t.charAt(e + 7), r = t.substr(e + 7, n - e - 7).match(i ? $ : Z), s += t.substr(a, e - a) + ne(i ? r : +r[0], +r[1], +r[2] || 1e-5), a = n + 1; return s + t.substr(a, t.length - a) },
        se = function(t, e, r, n, i) {
            var a = e - t,
                s = n - r;
            return Vt(i, (function(e) { return r + (e - t) / a * s }))
        },
        oe = function(t, e, r) {
            var n, i, a, s = t.labels,
                o = 1e8;
            for (n in s)(i = s[n] - e) < 0 == !!r && i && o > (i = Math.abs(i)) && (a = n, o = i);
            return a
        },
        ue = function(t, e, r) {
            var n, i, a = t.vars,
                s = a[e];
            if (s) return n = a[e + "Params"], i = a.callbackScope || t, r && ut.length && xt(), n ? s.apply(i, n) : s.call(i)
        },
        le = function(t) { return Dt(t), t.progress() < 1 && ue(t, "onInterrupt"), t },
        he = function(t) {
            var e = (t = !t.name && t.default || t).name,
                r = L(t),
                n = e && !r && t.init ? function() { this._props = [] } : t,
                i = { init: st, render: He, add: Be, kill: $e, modifier: Ke, rawVars: 0 },
                a = { targetTest: 0, get: 0, getSetter: Ze, aliases: {}, register: 0 };
            if (be(), t !== n) {
                if (ht[e]) return;
                Ot(n, Ot(Pt(t, i), a)), St(n.prototype, St(i, Pt(t, a))), ht[n.prop = e] = n, t.targetTest && (pt.push(n), ot[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            at(e, n), t.register && t.register(sr, n, rr)
        },
        ce = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
        fe = function(t, e, r) { return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
        pe = function(t, e, r) {
            var n, i, a, s, o, u, l, h, c, f, p = t ? U(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ce.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ce[t]) p = ce[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), i = t.charAt(2), a = t.charAt(3), t = "#" + n + n + i + i + a + a), p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                else if ("hsl" === t.substr(0, 3))
                    if (p = f = t.match(Z), e) { if (~t.indexOf("=")) return p = t.match(J), r && p.length < 4 && (p[3] = 1), p } else s = +p[0] % 360 / 360, o = +p[1] / 100, n = 2 * (u = +p[2] / 100) - (i = u <= .5 ? u * (o + 1) : u + o - u * o), p.length > 3 && (p[3] *= 1), p[0] = fe(s + 1 / 3, n, i), p[1] = fe(s, n, i), p[2] = fe(s - 1 / 3, n, i);
                else p = t.match(Z) || ce.transparent;
                p = p.map(Number)
            }
            return e && !f && (n = p[0] / 255, i = p[1] / 255, a = p[2] / 255, u = ((l = Math.max(n, i, a)) + (h = Math.min(n, i, a))) / 2, l === h ? s = o = 0 : (c = l - h, o = u > .5 ? c / (2 - l - h) : c / (l + h), s = l === n ? (i - a) / c + (i < a ? 6 : 0) : l === i ? (a - n) / c + 2 : (n - i) / c + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        de = function(t) {
            var e = [],
                r = [],
                n = -1;
            return t.split(ge).forEach((function(t) {
                var i = t.match(Q) || [];
                e.push.apply(e, i), r.push(n += i.length + 1)
            })), e.c = r, e
        },
        _e = function(t, e, r) {
            var n, i, a, s, o = "",
                u = (t + o).match(ge),
                l = e ? "hsla(" : "rgba(",
                h = 0;
            if (!u) return t;
            if (u = u.map((function(t) { return (t = pe(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")" })), r && (a = de(t), (n = r.c).join(o) !== a.c.join(o)))
                for (s = (i = t.replace(ge, "1").split(Q)).length - 1; h < s; h++) o += i[h] + (~n.indexOf(h) ? u.shift() || l + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
            if (!i)
                for (s = (i = t.split(ge)).length - 1; h < s; h++) o += i[h] + u[h];
            return o + i[s]
        },
        ge = function() { var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; for (t in ce) e += "|" + t + "\\b"; return new RegExp(e + ")", "gi") }(),
        me = /hsl[a]?\(/,
        ve = function(t) { var e, r = t.join(" "); if (ge.lastIndex = 0, ge.test(r)) return e = me.test(r), t[1] = _e(t[1], e), t[0] = _e(t[0], e, de(t[1])), !0 },
        ye = (m = Date.now, v = 500, y = 33, b = m(), w = b, T = x = 1 / 240, M = function t(e) {
            var r, n, i = m() - w,
                a = !0 === e;
            i > v && (b += i - y), w += i, g.time = (w - b) / 1e3, ((r = g.time - T) > 0 || a) && (g.frame++, T += r + (r >= x ? .004 : x - r), n = 1), a || (p = d(t)), n && k.forEach((function(t) { return t(g.time, i, g.frame, e) }))
        }, g = {
            time: 0,
            frame: 0,
            tick: function() { M(!0) },
            wake: function() { l && (!o && Y() && (s = o = window, u = s.document || {}, tt.gsap = sr, (s.gsapVersions || (s.gsapVersions = [])).push(sr.version), rt(et || s.GreenSockGlobals || !s.gsap && s || {}), _ = s.requestAnimationFrame), p && g.sleep(), d = _ || function(t) { return setTimeout(t, 1e3 * (T - g.time) + 1 | 0) }, f = 1, M(2)) },
            sleep: function() {
                (_ ? s.cancelAnimationFrame : clearTimeout)(p), f = 0, d = st
            },
            lagSmoothing: function(t, e) { v = t || 1e8, y = Math.min(e, v, 0) },
            fps: function(t) { x = 1 / (t || 240), T = g.time + x },
            add: function(t) { k.indexOf(t) < 0 && k.push(t), be() },
            remove: function(t) { var e;~(e = k.indexOf(t)) && k.splice(e, 1) },
            _listeners: k = []
        }),
        be = function() { return !f && ye.wake() },
        we = {},
        xe = /^[\d.\-M][\d.\-,\s]/,
        Te = /["']/g,
        ke = function(t) { for (var e, r, n, i = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[s] = isNaN(n) ? n.replace(Te, "").trim() : +n, s = r.substr(e + 1).trim(); return i },
        Me = function(t) { return function(e) { return 1 - t(1 - e) } },
        Oe = function(t, e) {
            return t && (L(t) ? t : we[t] || function(t) {
                var e = (t + "").split("("),
                    r = we[e[0]];
                return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [ke(e[1])] : H.exec(t)[1].split(",").map(kt)) : we._CE && xe.test(t) ? we._CE("", t) : r
            }(t)) || e
        },
        Ce = function(t, e, r, n) { void 0 === r && (r = function(t) { return 1 - e(1 - t) }), void 0 === n && (n = function(t) { return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2 }); var i, a = { easeIn: e, easeOut: r, easeInOut: n }; return vt(t, (function(t) { for (var e in we[t] = tt[t] = a, we[i = t.toLowerCase()] = r, a) we[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = we[t + "." + e] = a[e] })), a },
        Se = function(t) { return function(e) { return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2 } },
        Ae = function t(e, r, n) {
            var i = r >= 1 ? r : 1,
                a = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
                s = a / D * (Math.asin(1 / i) || 0),
                o = function(t) { return 1 === t ? 1 : i * Math.pow(2, -10 * t) * I((t - s) * a) + 1 },
                u = "out" === e ? o : "in" === e ? function(t) { return 1 - o(1 - t) } : Se(o);
            return a = D / a, u.config = function(r, n) { return t(e, r, n) }, u
        },
        Pe = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var n = function(t) { return t ? --t * t * ((r + 1) * t + r) + 1 : 0 },
                i = "out" === e ? n : "in" === e ? function(t) { return 1 - n(1 - t) } : Se(n);
            return i.config = function(r) { return t(e, r) }, i
        };
    vt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Ce(t + ",Power" + (r - 1), e ? function(t) { return Math.pow(t, r) } : function(t) { return t }, (function(t) { return 1 - Math.pow(1 - t, r) }), (function(t) { return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2 }))
    })), we.Linear.easeNone = we.none = we.Linear.easeIn, Ce("Elastic", Ae("in"), Ae("out"), Ae()), O = 7.5625, S = 1 / (C = 2.75), Ce("Bounce", (function(t) { return 1 - A(1 - t) }), A = function(t) { return t < S ? O * t * t : t < .7272727272727273 ? O * Math.pow(t - 1.5 / C, 2) + .75 : t < .9090909090909092 ? O * (t -= 2.25 / C) * t + .9375 : O * Math.pow(t - 2.625 / C, 2) + .984375 }), Ce("Expo", (function(t) { return t ? Math.pow(2, 10 * (t - 1)) : 0 })), Ce("Circ", (function(t) { return -(F(1 - t * t) - 1) })), Ce("Sine", (function(t) { return 1 - B(t * E) })), Ce("Back", Pe("in"), Pe("out"), Pe()), we.SteppedEase = we.steps = tt.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                n = t + (e ? 0 : 1),
                i = e ? 1 : 0;
            return function(t) { return ((n * Zt(0, 1 - 1e-8, t) | 0) + i) * r }
        }
    }, z.ease = we["quad.out"], vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) { return dt += t + "," + t + "Params," }));
    var ze = function(t, e) { this.id = R++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : mt, this.set = e ? e.getSetter : Ze },
        De = function() {
            function t(t, e) {
                var r = t.parent || a;
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = t.reversed ? -1 : 1, qt(this, +t.duration, 1), this.data = t.data, f || ye.wake(), r && Ut(r, this, e || 0 === e ? e : r._time, 1), t.paused && this.paused(!0)
            }
            var e = t.prototype;
            return e.delay = function(t) { return t || 0 === t ? (this._delay = t, this) : this._delay }, e.duration = function(t) { return arguments.length ? qt(this, t) : this.totalDuration() && this._dur }, e.totalDuration = function(t) { return arguments.length ? (this._dirty = 0, qt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur }, e.totalTime = function(t, e) { if (be(), !arguments.length) return this._tTime; var r = this.parent || this._dp; if (r && r.smoothChildTiming && this._ts) { for (this._start = yt(r._time - (this._ts > 0 ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), Nt(this), r._dirty || Et(r); r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;!this.parent && this._dp.autoRemoveChildren && Ut(this._dp, this, this._start - this._delay) } return this._tTime === t && (this._dur || e) && 1e-8 !== Math.abs(this._zTime) || (this._ts || (this._pTime = t), Tt(this, t, e)), this }, e.time = function(t, e) { return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ft(this)) % this._dur || (t ? this._dur : 0), e) : this._time }, e.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio }, e.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ft(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio }, e.iteration = function(t, e) { var r = this.duration() + this._rDelay; return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Bt(this._tTime, r) + 1 : 1 }, e.timeScale = function(t) { if (!arguments.length) return this._ts || this._pauseTS || 0; if (null !== this._pauseTS) return this._pauseTS = t, this; var e = this.parent && this._ts ? It(this.parent._time, this) : this._tTime; return this._ts = t, Rt(this.totalTime(e, !0)) }, e.paused = function(t) { var e = !this._ts; return arguments.length ? (e !== t && (t ? (this._pauseTS = this._ts, this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (be(), this._ts = this._pauseTS || 1, this._pauseTS = null, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : e }, e.startTime = function(t) { return arguments.length ? (this.parent && this.parent._sort && Ut(this.parent, this, t - this._delay), this) : this._start }, e.endTime = function(t) { return this._start + (X(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts) }, e.rawTime = function(t) { var e = this.parent || this._dp; return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? It(e.rawTime(t), this) : this._tTime : this._tTime }, e.repeat = function(t) { return arguments.length ? (this._repeat = t, Xt(this)) : this._repeat }, e.repeatDelay = function(t) { return arguments.length ? (this._rDelay = t, Xt(this)) : this._rDelay }, e.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, e.seek = function(t, e) { return this.totalTime(Gt(this, t), X(e)) }, e.restart = function(t, e) { return this.play().totalTime(t ? -this._delay : 0, X(e)) }, e.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, e.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, e.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, e.resume = function() { return this.paused(!1) }, e.reversed = function(t) { var e = this._ts || this._pauseTS || 0; return arguments.length ? (t !== this.reversed() && (this[null === this._pauseTS ? "_ts" : "_pauseTS"] = Math.abs(e) * (t ? -1 : 1), this.totalTime(this._tTime, !0)), this) : e < 0 }, e.invalidate = function() { return this._initted = 0, this._zTime = -1e-8, this }, e.isActive = function(t) {
                var e, r = this.parent || this._dp,
                    n = this._start;
                return !(r && !(this._ts && (this._initted || !t) && r.isActive(t) && (e = r.rawTime(!0)) >= n && e < this.endTime(!0) - 1e-8))
            }, e.eventCallback = function(t, e, r) { var n = this.vars; return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t] }, e.then = function(t) {
                var e = this;
                return new Promise((function(r) {
                    var n = L(t) ? t : Mt,
                        i = function() {
                            var t = e.then;
                            e.then = null, L(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
                }))
            }, e.kill = function() { le(this) }, t
        }();
    Ot(De.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _pauseTS: null });
    var Ee = function(t) {
        function e(e, r) { var i; return void 0 === e && (e = {}), (i = t.call(this, e, r) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = X(e.sortChildren), i.parent && Lt(i.parent, n(i)), i }
        i(e, t);
        var r = e.prototype;
        return r.to = function(t, e, r) { return new qe(t, wt(arguments, 0, this), Gt(this, U(e) ? arguments[3] : r)), this }, r.from = function(t, e, r) { return new qe(t, wt(arguments, 1, this), Gt(this, U(e) ? arguments[3] : r)), this }, r.fromTo = function(t, e, r, n) { return new qe(t, wt(arguments, 2, this), Gt(this, U(e) ? arguments[4] : n)), this }, r.set = function(t, e, r) { return e.duration = 0, e.parent = this, e.repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new qe(t, e, Gt(this, r)), this }, r.call = function(t, e, r) { return Ut(this, qe.delayedCall(0, t, e), Gt(this, r)) }, r.staggerTo = function(t, e, r, n, i, a, s) { return r.duration = e, r.stagger = r.stagger || n, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new qe(t, r, Gt(this, i)), this }, r.staggerFrom = function(t, e, r, n, i, a, s) { return r.runBackwards = 1, r.immediateRender = X(r.immediateRender), this.staggerTo(t, e, r, n, i, a, s) }, r.staggerFromTo = function(t, e, r, n, i, a, s, o) { return n.startAt = r, n.immediateRender = X(n.immediateRender), this.staggerTo(t, e, n, i, a, s, o) }, r.render = function(t, e, r) {
            var n, i, s, o, u, l, h, c, f, p, d, _, g = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur,
                y = this !== a && t > m - 1e-8 && t >= 0 ? m : t < 1e-8 ? 0 : t,
                b = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (y !== this._tTime || r || b) {
                if (g !== this._time && v && (y += this._time - g, t += this._time - g), n = y, f = this._start, l = !(c = this._ts), b && (v || (g = this._zTime), !t && e || (this._zTime = t)), this._repeat && (d = this._yoyo, u = v + this._rDelay, ((n = yt(y % u)) > v || m === y) && (n = v), (o = ~~(y / u)) && o === y / u && (n = v, o--), d && 1 & o && (n = v - n, _ = 1), o !== (p = Bt(this._tTime, u)) && !this._lock)) {
                    var w = d && 1 & p,
                        x = w === (d && 1 & o);
                    if (o < p && (w = !w), g = w ? 0 : v, this._lock = 1, this.render(g, e, !v)._lock = 0, !e && this.parent && ue(this, "onRepeat"), this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1), g !== this._time || l !== !this._ts) return this;
                    if (x && (this._lock = 2, g = w ? v + 1e-4 : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !_ && this.invalidate()), this._lock = 0, !this._ts && !l) return this
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, r) {
                        var n;
                        if (r > e)
                            for (n = t._first; n && n._start <= r;) {
                                if (!n._dur && "isPause" === n.data && n._start > e) return n;
                                n = n._next
                            } else
                                for (n = t._last; n && n._start >= r;) {
                                    if (!n._dur && "isPause" === n.data && n._start < e) return n;
                                    n = n._prev
                                }
                    }(this, yt(g), yt(n))) && (y -= n - (n = h._start)), this._tTime = y, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), g || !n || e || ue(this, "onStart"), n >= g && t >= 0)
                    for (i = this._first; i;) {
                        if (s = i._next, (i._act || n >= i._start) && i._ts && h !== i) { if (i.parent !== this) return this.render(t, e, r); if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !l) { h = 0, s && (y += this._zTime = -1e-8); break } }
                        i = s
                    } else {
                        i = this._last;
                        for (var T = t < 0 ? t : n; i;) {
                            if (s = i._prev, (i._act || T <= i._end) && i._ts && h !== i) { if (i.parent !== this) return this.render(t, e, r); if (i.render(i._ts > 0 ? (T - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (T - i._start) * i._ts, e, r), n !== this._time || !this._ts && !l) { h = 0, s && (y += this._zTime = T ? -1e-8 : 1e-8); break } }
                            i = s
                        }
                    }
                if (h && !e && (this.pause(), h.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = f, Nt(this), this.render(t, e, r);
                this._onUpdate && !e && ue(this, "onUpdate", !0), (y === m && m >= this.totalDuration() || !y && this._ts < 0) && (f !== this._start && Math.abs(c) === Math.abs(this._ts) || ((t || !v) && (t && this._ts > 0 || !y && this._ts < 0) && Dt(this, 1), e || t < 0 && !g || (ue(this, y === m ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom())))
            }
            return this
        }, r.add = function(t, e) {
            var r = this;
            if (U(e) || (e = Gt(this, e)), !(t instanceof De)) {
                if (V(t)) return t.forEach((function(t) { return r.add(t, e) })), Et(this);
                if (N(t)) return this.addLabel(t, e);
                if (!L(t)) return this;
                t = qe.delayedCall(0, t)
            }
            return this !== t ? Ut(this, t, e) : this
        }, r.getChildren = function(t, e, r, n) { void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -1e8); for (var i = [], a = this._first; a;) a._start >= n && (a instanceof qe ? e && i.push(a) : (r && i.push(a), t && i.push.apply(i, a.getChildren(!0, e, r)))), a = a._next; return i }, r.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, r.remove = function(t) { return N(t) ? this.removeLabel(t) : L(t) ? this.killTweensOf(t) : (zt(this, t), t === this._recent && (this._recent = this._last), Et(this)) }, r.totalTime = function(e, r) { return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = yt(ye.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime }, r.addLabel = function(t, e) { return this.labels[t] = Gt(this, e), this }, r.removeLabel = function(t) { return delete this.labels[t], this }, r.addPause = function(t, e, r) { var n = qe.delayedCall(0, e || st, r); return n.data = "isPause", this._hasPause = 1, Ut(this, n, Gt(this, t)) }, r.removePause = function(t) { var e = this._first; for (t = Gt(this, t); e;) e._start === t && "isPause" === e.data && Dt(e), e = e._next }, r.killTweensOf = function(t, e, r) { for (var n = this.getTweensOf(t, r), i = n.length; i--;) Re !== n[i] && n[i].kill(t, e); return this }, r.getTweensOf = function(t, e) { for (var r, n = [], i = Kt(t), a = this._first; a;) a instanceof qe ? !bt(a._targets, i) || e && !a.isActive("started" === e) || n.push(a) : (r = a.getTweensOf(i, e)).length && n.push.apply(n, r), a = a._next; return n }, r.tweenTo = function(t, e) {
            e = e || {};
            var r = this,
                n = Gt(r, t),
                i = e,
                a = i.startAt,
                s = i.onStart,
                o = i.onStartParams,
                u = qe.to(r, Ot(e, {
                    ease: "none",
                    lazy: !1,
                    time: n,
                    duration: e.duration || Math.abs(n - (a && "time" in a ? a.time : r._time)) / r.timeScale() || 1e-8,
                    onStart: function() {
                        r.pause();
                        var t = e.duration || Math.abs(n - r._time) / r.timeScale();
                        u._dur !== t && qt(u, t).render(u._time, !0, !0), s && s.apply(u, o || [])
                    }
                }));
            return u
        }, r.tweenFromTo = function(t, e, r) { return this.tweenTo(e, Ot({ startAt: { time: Gt(this, t) } }, r)) }, r.recent = function() { return this._recent }, r.nextLabel = function(t) { return void 0 === t && (t = this._time), oe(this, Gt(this, t)) }, r.previousLabel = function(t) { return void 0 === t && (t = this._time), oe(this, Gt(this, t), 1) }, r.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8) }, r.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            for (var n, i = this._first, a = this.labels; i;) i._start >= r && (i._start += t), i = i._next;
            if (e)
                for (n in a) a[n] >= r && (a[n] += t);
            return Et(this)
        }, r.invalidate = function() { var e = this._first; for (this._lock = 0; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, r.clear = function(t) { void 0 === t && (t = !0); for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e; return this._time = this._tTime = 0, t && (this.labels = {}), Et(this) }, r.totalDuration = function(t) {
            var e, r, n, i, s = 0,
                o = this,
                u = o._last,
                l = 1e8;
            if (arguments.length) return o._repeat < 0 ? o : o.timeScale(o.totalDuration() / t);
            if (o._dirty) {
                for (i = o.parent; u;) e = u._prev, u._dirty && u.totalDuration(), (n = u._start) > l && o._sort && u._ts && !o._lock ? (o._lock = 1, Ut(o, u, n - u._delay, 1)._lock = 0) : l = n, n < 0 && u._ts && (s -= n, (!i && !o._dp || i && i.smoothChildTiming) && (o._start += n / o._ts, o._time -= n, o._tTime -= n), o.shiftChildren(-n, !1, -1e20), l = 0), (r = Nt(u)) > s && u._ts && (s = r), u = e;
                qt(o, o === a && o._time > s ? o._time : Math.min(1e8, s), 1), o._dirty = 0
            }
            return o._tDur
        }, e.updateRoot = function(t) {
            if (a._ts && (Tt(a, It(t, a)), h = ye.frame), ye.frame >= ft) {
                ft += P.autoSleep || 120;
                var e = a._first;
                if ((!e || !e._ts) && P.autoSleep && ye._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || ye.sleep()
                }
            }
        }, e
    }(De);
    Ot(Ee.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Re, Fe = function(t, e, r, n, i, a, s) {
            var o, u, l, h, c, f, p, d, _ = new rr(this._pt, t, e, 0, 1, We, null, i),
                g = 0,
                m = 0;
            for (_.b = r, _.e = n, r += "", (p = ~(n += "").indexOf("random(")) && (n = ae(n)), a && (a(d = [r, n], t, e), r = d[0], n = d[1]), u = r.match(W) || []; o = W.exec(n);) h = o[0], c = n.substring(g, o.index), l ? l = (l + 1) % 5 : "rgba(" === c.substr(-5) && (l = 1), h !== u[m++] && (f = parseFloat(u[m - 1]) || 0, _._pt = { _next: _._pt, p: c || 1 === m ? c : ",", s: f, c: "=" === h.charAt(1) ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1) : parseFloat(h) - f, m: l && l < 4 ? Math.round : 0 }, g = W.lastIndex);
            return _.c = g < n.length ? n.substring(g, n.length) : "", _.fp = s, (K.test(n) || p) && (_.e = 0), this._pt = _, _
        },
        Be = function(t, e, r, n, i, a, s, o, u) {
            L(n) && (n = n(i || 0, t, a));
            var l, h = t[e],
                c = "get" !== r ? r : L(h) ? u ? t[e.indexOf("set") || !L(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h,
                f = L(h) ? u ? Ge : Ye : Xe;
            if (N(n) && (~n.indexOf("random(") && (n = ae(n)), "=" === n.charAt(1) && (n = parseFloat(c) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (Jt(c) || 0))), c !== n) return isNaN(c + n) ? (!h && !(e in t) && nt(e, n), Fe.call(this, t, e, c, n, f, o || P.stringFilter, u)) : (l = new rr(this._pt, t, e, +c || 0, n - (c || 0), "boolean" == typeof h ? Qe : Je, 0, f), u && (l.fp = u), s && l.modifier(s, this, t), this._pt = l)
        },
        Ie = function(t, e, r, n, i, a) {
            var s, o, u, l;
            if (ht[t] && !1 !== (s = new ht[t]).init(i, s.rawVars ? e[t] : function(t, e, r, n, i) { if (L(t) && (t = Le(t, i, e, r, n)), !q(t) || t.style && t.nodeType || V(t)) return N(t) ? Le(t, i, e, r, n) : t; var a, s = {}; for (a in t) s[a] = Le(t[a], i, e, r, n); return s }(e[t], n, i, a, r), r, n, a) && (r._pt = o = new rr(r._pt, i, t, 0, 1, s.render, s, 0, s.priority), r !== c))
                for (u = r._ptLookup[r._targets.indexOf(i)], l = s._props.length; l--;) u[s._props[l]] = o;
            return s
        },
        Ne = function t(e, r) {
            var n, i, s, o, u, l, h, c, f, p, d, _, g = e.vars,
                m = g.ease,
                v = g.startAt,
                y = g.immediateRender,
                b = g.lazy,
                w = g.onUpdate,
                x = g.onUpdateParams,
                T = g.callbackScope,
                k = g.runBackwards,
                M = g.yoyoEase,
                O = g.keyframes,
                C = g.autoRevert,
                S = e._dur,
                A = e._startAt,
                P = e._targets,
                D = e.parent,
                E = D && "nested" === D.data ? D.parent._targets : P,
                R = "auto" === e._overwrite,
                F = e.timeline;
            if (!F || O && m || (m = "none"), e._ease = Oe(m, z.ease), e._yEase = M ? Me(Oe(!0 === M ? m : M, z.ease)) : 0, M && e._yoyo && !e._repeat && (M = e._yEase, e._yEase = e._ease, e._ease = M), !F) {
                if (A && A.render(-1, !0).kill(), v) {
                    if (Dt(e._startAt = qe.set(P, Ot({ data: "isStart", overwrite: !1, parent: D, immediateRender: !0, lazy: X(b), startAt: null, delay: 0, onUpdate: w, onUpdateParams: x, callbackScope: T, stagger: 0 }, v))), y)
                        if (r > 0) !C && (e._startAt = 0);
                        else if (S) return
                } else if (k && S)
                    if (A) !C && (e._startAt = 0);
                    else if (r && (y = !1), Dt(e._startAt = qe.set(P, St(Pt(g, ot), { overwrite: !1, data: "isFromStart", lazy: y && X(b), immediateRender: y, stagger: 0, parent: D }))), y) { if (!r) return } else t(e._startAt, 1e-8);
                for (n = Pt(g, ot), e._pt = 0, _ = (c = P[0] ? gt(P[0]).harness : 0) && g[c.prop], b = S && X(b) || b && !S, i = 0; i < P.length; i++) {
                    if (h = (u = P[i])._gsap || _t(P)[i]._gsap, e._ptLookup[i] = p = {}, lt[h.id] && xt(), d = E === P ? i : E.indexOf(u), c && !1 !== (f = new c).init(u, _ || n, e, d, E) && (e._pt = o = new rr(e._pt, u, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((function(t) { p[t] = o })), f.priority && (l = 1)), !c || _)
                        for (s in n) ht[s] && (f = Ie(s, n, e, d, u, E)) ? f.priority && (l = 1) : p[s] = o = Be.call(e, u, s, "get", n[s], d, E, 0, g.stringFilter);
                    e._op && e._op[i] && e.kill(u, e._op[i]), R && e._pt && (Re = e, a.killTweensOf(u, p, "started"), Re = 0), e._pt && b && (lt[h.id] = 1)
                }
                l && er(e), e._onInit && e._onInit(e)
            }
            e._from = !F && !!g.runBackwards, e._onUpdate = w, e._initted = 1
        },
        Le = function(t, e, r, n, i) { return L(t) ? t.call(e, r, n, i) : N(t) && ~t.indexOf("random(") ? ae(t) : t },
        Ue = dt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        je = (Ue + ",id,stagger,delay,duration,paused").split(","),
        qe = function(t) {
            function e(e, r, i) {
                var s;
                "number" == typeof r && (i.duration = r, r = i, i = null);
                var o, u, l, h, c, f, p, d, _ = (s = t.call(this, function(t) {
                        var e = t.parent || a,
                            r = t.keyframes ? Ct : Ot;
                        if (X(t.inherit))
                            for (; e;) r(t, e.vars.defaults), e = e.parent;
                        return t
                    }(r), i) || this).vars,
                    g = _.duration,
                    m = _.delay,
                    v = _.immediateRender,
                    y = _.stagger,
                    b = _.overwrite,
                    w = _.keyframes,
                    x = _.defaults,
                    T = s.parent,
                    k = (V(e) ? U(e[0]) : "length" in r) ? [e] : Kt(e);
                if (s._targets = k.length ? _t(k) : it("GSAP target " + e + " not found. https://greensock.com", !P.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = b, w || y || G(g) || G(m)) {
                    if (r = s.vars, (o = s.timeline = new Ee({ data: "nested", defaults: x || {} })).kill(), o.parent = n(s), w) Ot(o.vars.defaults, { ease: "none" }), w.forEach((function(t) { return o.to(k, t, ">") }));
                    else {
                        if (h = k.length, p = y ? te(y) : st, q(y))
                            for (c in y) ~Ue.indexOf(c) && (d || (d = {}), d[c] = y[c]);
                        for (u = 0; u < h; u++) {
                            for (c in l = {}, r) je.indexOf(c) < 0 && (l[c] = r[c]);
                            l.stagger = 0, d && St(l, d), r.yoyoEase && !r.repeat && (l.yoyoEase = r.yoyoEase), f = k[u], l.duration = +Le(g, n(s), u, f, k), l.delay = (+Le(m, n(s), u, f, k) || 0) - s._delay, !y && 1 === h && l.delay && (s._delay = m = l.delay, s._start += m, l.delay = 0), o.to(f, l, p(u, f, k))
                        }
                        g = m = 0
                    }
                    g || s.duration(g = o.duration())
                } else s.timeline = 0;
                return !0 === b && (Re = n(s), a.killTweensOf(k), Re = 0), (v || !g && !w && s._start === T._time && X(v) && function t(e) { return !e || e._ts && t(e.parent) }(n(s)) && "nested" !== T.data) && (s._tTime = -1e-8, s.render(Math.max(0, -m))), T && Lt(T, n(s)), s
            }
            i(e, t);
            var r = e.prototype;
            return r.render = function(t, e, r) {
                var n, i, a, s, o, u, l, h, c, f = this._time,
                    p = this._tDur,
                    d = this._dur,
                    _ = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
                if (d) {
                    if (_ !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {
                        if (n = _, h = this.timeline, this._repeat) {
                            if (s = d + this._rDelay, ((n = yt(_ % s)) > d || p === _) && (n = d), (a = ~~(_ / s)) && a === _ / s && (n = d, a--), (u = this._yoyo && 1 & a) && (c = this._yEase, n = d - n), o = Bt(this._tTime, s), n === f && !r && this._initted) return this;
                            a !== o && (!this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(s * a, !0).invalidate()._lock = 0))
                        }
                        if (!this._initted && jt(this, n, r, e)) return this._tTime = 0, this;
                        for (this._tTime = _, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (c || this._ease)(n / d), this._from && (this.ratio = l = 1 - l), f || !n || e || ue(this, "onStart"), i = this._pt; i;) i.r(l, i.d), i = i._next;
                        h && h.render(t < 0 ? t : !n && u ? -1e-8 : h._dur * l, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), ue(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && ue(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, r), (t || !d) && (t && this._ts > 0 || !_ && this._ts < 0) && Dt(this, 1), e || t < 0 && !f || (ue(this, _ === p ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom()))
                    }
                } else ! function(t, e, r, n) {
                    var i, a = t._zTime < 0 ? 0 : 1,
                        s = e < 0 ? 0 : 1,
                        o = t._rDelay,
                        u = 0;
                    if (o && t._repeat && (u = Zt(0, t._tDur, e), Bt(u, o) !== Bt(t._tTime, o) && (a = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), (t._initted || !jt(t, e, n, r)) && (s !== a || n || 1e-8 === t._zTime || !e && t._zTime)) { for (t._zTime = e || (r ? 1e-8 : 0), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, r || ue(t, "onStart"), i = t._pt; i;) i.r(s, i.d), i = i._next;!s && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, n), t._onUpdate && !r && ue(t, "onUpdate"), u && t._repeat && !r && t.parent && ue(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (t.ratio && Dt(t, 1), r || (ue(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom())) }
                }(this, t, e, r);
                return this
            }, r.targets = function() { return this._targets }, r.invalidate = function() { return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this) }, r.kill = function(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return le(this);
                if (this.timeline) return this.timeline.killTweensOf(t, e, Re && !0 !== Re.vars.overwrite), this;
                var r, n, i, a, s, o, u, l = this._targets,
                    h = t ? Kt(t) : l,
                    c = this._ptLookup,
                    f = this._pt;
                if ((!e || "all" === e) && function(t, e) { for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];); return r < 0 }(l, h)) return le(this);
                for (r = this._op = this._op || [], "all" !== e && (N(e) && (s = {}, vt(e, (function(t) { return s[t] = 1 })), e = s), e = function(t, e) {
                        var r, n, i, a, s = t[0] ? gt(t[0]).harness : 0,
                            o = s && s.aliases;
                        if (!o) return e;
                        for (n in r = St({}, e), o)
                            if (n in r)
                                for (i = (a = o[n].split(",")).length; i--;) r[a[i]] = r[n];
                        return r
                    }(l, e)), u = l.length; u--;)
                    if (~h.indexOf(l[u]))
                        for (s in n = c[u], "all" === e ? (r[u] = e, a = n, i = {}) : (i = r[u] = r[u] || {}, a = e), a)(o = n && n[s]) && ("kill" in o.d && !0 !== o.d.kill(s) || zt(this, o, "_pt"), delete n[s]), "all" !== i && (i[s] = 1);
                return this._initted && !this._pt && f && le(this), this
            }, e.to = function(t, r) { return new e(t, r, arguments[2]) }, e.from = function(t, r) { return new e(t, wt(arguments, 1)) }, e.delayedCall = function(t, r, n, i) { return new e(r, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: r, onReverseComplete: r, onCompleteParams: n, onReverseCompleteParams: n, callbackScope: i }) }, e.fromTo = function(t, r, n) { return new e(t, wt(arguments, 2)) }, e.set = function(t, r) { return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r) }, e.killTweensOf = function(t, e, r) { return a.killTweensOf(t, e, r) }, e
        }(De);
    Ot(qe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), vt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        qe[t] = function() {
            var e = new Ee,
                r = Qt.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
    }));
    var Xe = function(t, e, r) { return t[e] = r },
        Ye = function(t, e, r) { return t[e](r) },
        Ge = function(t, e, r, n) { return t[e](n.fp, r) },
        Ve = function(t, e, r) { return t.setAttribute(e, r) },
        Ze = function(t, e) { return L(t[e]) ? Ye : j(t[e]) && t.setAttribute ? Ve : Xe },
        Je = function(t, e) { return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e) },
        Qe = function(t, e) { return e.set(e.t, e.p, !!(e.s + e.c * t), e) },
        We = function(t, e) {
            var r = e._pt,
                n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
                for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n, r = r._next;
                n += e.c
            }
            e.set(e.t, e.p, n, e)
        },
        He = function(t, e) { for (var r = e._pt; r;) r.r(t, r.d), r = r._next },
        Ke = function(t, e, r, n) { for (var i, a = this._pt; a;) i = a._next, a.p === n && a.modifier(t, e, r), a = i },
        $e = function(t) { for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? zt(this, n, "_pt") : n.dep || (e = 1), n = r; return !e },
        tr = function(t, e, r, n) { n.mSet(t, e, n.m.call(n.tween, r, n.mt), n) },
        er = function(t) {
            for (var e, r, n, i, a = t._pt; a;) {
                for (e = a._next, r = n; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : i) ? a._prev._next = a: n = a, (a._next = r) ? r._prev = a : i = a, a = e
            }
            t._pt = n
        },
        rr = function() {
            function t(t, e, r, n, i, a, s, o, u) { this.t = e, this.s = n, this.c = i, this.p = r, this.r = a || Je, this.d = s || this, this.set = o || Xe, this.pr = u || 0, this._next = t, t && (t._prev = this) }
            return t.prototype.modifier = function(t, e, r) { this.mSet = this.mSet || this.set, this.set = tr, this.m = t, this.mt = r, this.tween = e }, t
        }();
    vt(dt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert", (function(t) { return ot[t] = 1 })), tt.TweenMax = tt.TweenLite = qe, tt.TimelineLite = tt.TimelineMax = Ee, a = new Ee({ sortChildren: !1, defaults: z, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 }), P.stringFilter = ve;
    var nr = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach((function(t) { return he(t) }))
        },
        timeline: function(t) { return new Ee(t) },
        getTweensOf: function(t, e) { return a.getTweensOf(t, e) },
        getProperty: function(t, e, r, n) {
            N(t) && (t = Kt(t)[0]);
            var i = gt(t || {}).get,
                a = r ? Mt : kt;
            return "native" === r && (r = ""), t ? e ? a((ht[e] && ht[e].get || i)(t, e, r, n)) : function(e, r, n) { return a((ht[e] && ht[e].get || i)(t, e, r, n)) } : t
        },
        quickSetter: function(t, e, r) {
            if ((t = Kt(t)).length > 1) {
                var n = t.map((function(t) { return sr.quickSetter(t, e, r) })),
                    i = n.length;
                return function(t) { for (var e = i; e--;) n[e](t) }
            }
            t = t[0] || {};
            var a = ht[e],
                s = gt(t),
                o = a ? function(e) {
                    var n = new a;
                    c._pt = 0, n.init(t, r ? e + r : e, c, 0, [t]), n.render(1, n), c._pt && He(1, c)
                } : s.set(t, e);
            return a ? o : function(n) { return o(t, e, r ? n + r : n, s, 1) }
        },
        isTweening: function(t) { return a.getTweensOf(t, !0).length > 0 },
        defaults: function(t) { return t && t.ease && (t.ease = Oe(t.ease, z.ease)), At(z, t || {}) },
        config: function(t) { return At(P, t || {}) },
        registerEffect: function(t) {
            var e = t.name,
                r = t.effect,
                n = t.plugins,
                i = t.defaults,
                a = t.extendTimeline;
            (n || "").split(",").forEach((function(t) { return t && !ht[t] && !tt[t] && it(e + " effect requires " + t + " plugin.") })), ct[e] = function(t, e) { return r(Kt(t), Ot(e || {}, i)) }, a && (Ee.prototype[e] = function(t, r, n) { return this.add(ct[e](t, q(r) ? r : (n = r) && {}), n) })
        },
        registerEase: function(t, e) { we[t] = Oe(e) },
        parseEase: function(t, e) { return arguments.length ? Oe(t, e) : we },
        getById: function(t) { return a.getById(t) },
        exportRoot: function(t, e) { void 0 === t && (t = {}); var r, n, i = new Ee(t); for (i.smoothChildTiming = X(t.smoothChildTiming), a.remove(i), i._dp = 0, i._time = i._tTime = a._time, r = a._first; r;) n = r._next, !e && !r._dur && r instanceof qe && r.vars.onComplete === r._targets[0] || Ut(i, r, r._start - r._delay), r = n; return Ut(a, i, 0), i },
        utils: {
            wrap: function t(e, r, n) { var i = r - e; return V(e) ? ie(e, t(0, e.length), r) : Vt(n, (function(t) { return (i + (t - e) % i) % i + e })) },
            wrapYoyo: function t(e, r, n) {
                var i = r - e,
                    a = 2 * i;
                return V(e) ? ie(e, t(0, e.length - 1), r) : Vt(n, (function(t) { return e + ((t = (a + (t - e) % a) % a) > i ? a - t : t) }))
            },
            distribute: te,
            random: ne,
            snap: re,
            normalize: function(t, e, r) { return se(t, e, 0, 1, r) },
            getUnit: Jt,
            clamp: function(t, e, r) { return Vt(r, (function(r) { return Zt(t, e, r) })) },
            splitColor: pe,
            toArray: Kt,
            mapRange: se,
            pipe: function() { for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]; return function(t) { return e.reduce((function(t, e) { return e(t) }), t) } },
            unitize: function(t, e) { return function(r) { return t(parseFloat(r)) + (e || Jt(r)) } },
            interpolate: function t(e, r, n, i) {
                var a = isNaN(e + r) ? 0 : function(t) { return (1 - t) * e + t * r };
                if (!a) {
                    var s, o, u, l, h, c = N(e),
                        f = {};
                    if (!0 === n && (i = 1) && (n = null), c) e = { p: e }, r = { p: r };
                    else if (V(e) && !V(r)) {
                        for (u = [], l = e.length, h = l - 2, o = 1; o < l; o++) u.push(t(e[o - 1], e[o]));
                        l--, a = function(t) { t *= l; var e = Math.min(h, ~~t); return u[e](t - e) }, n = r
                    } else i || (e = St(V(e) ? [] : {}, e));
                    if (!u) {
                        for (s in r) Be.call(f, e, s, "get", r[s]);
                        a = function(t) { return He(t, f) || (c ? e.p : e) }
                    }
                }
                return Vt(n, a)
            },
            shuffle: $t
        },
        install: rt,
        effects: ct,
        ticker: ye,
        updateRoot: Ee.updateRoot,
        plugins: ht,
        globalTimeline: a,
        core: { PropTween: rr, globals: at, Tween: qe, Timeline: Ee, Animation: De, getCache: gt, _removeLinkedListItem: zt }
    };
    vt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) { return nr[t] = qe[t] })), ye.add(Ee.updateRoot), c = nr.to({}, { duration: 0 });
    var ir = function(t, e) { for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next; return r },
        ar = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, r, n) {
                    n._onInit = function(t) {
                        var n, i;
                        if (N(r) && (n = {}, vt(r, (function(t) { return n[t] = 1 })), r = n), e) {
                            for (i in n = {}, r) n[i] = e(r[i]);
                            r = n
                        }! function(t, e) {
                            var r, n, i, a = t._targets;
                            for (r in e)
                                for (n = a.length; n--;)(i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = ir(i, r)), i && i.modifier && i.modifier(e[r], t, a[n], r))
                        }(t, r)
                    }
                }
            }
        },
        sr = nr.registerPlugin({ name: "attr", init: function(t, e, r, n, i) { for (var a in e) this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], n, i, 0, 0, a), this._props.push(a) } }, { name: "endArray", init: function(t, e) { for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r]) } }, ar("roundProps", ee), ar("modifiers"), ar("snap", re)) || nr;
    qe.version = Ee.version = sr.version = "3.2.2", l = 1, Y() && be();
    we.Power0, we.Power1, we.Power2, we.Power3, we.Power4, we.Linear, we.Quad, we.Cubic, we.Quart, we.Quint, we.Strong, we.Elastic, we.Back, we.SteppedEase, we.Bounce, we.Sine, we.Expo, we.Circ;
    /*!
     * CSSPlugin 3.2.2
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var or, ur, lr, hr, cr, fr, pr, dr, _r = {},
        gr = 180 / Math.PI,
        mr = Math.PI / 180,
        vr = Math.atan2,
        yr = /([A-Z])/g,
        br = /(?:left|right|width|margin|padding|x)/i,
        wr = /[\s,\(]\S/,
        xr = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
        Tr = function(t, e) { return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e) },
        kr = function(t, e) { return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e) },
        Mr = function(t, e) { return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e) },
        Or = function(t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        },
        Cr = function(t, e) { return e.set(e.t, e.p, t ? e.e : e.b, e) },
        Sr = function(t, e) { return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e) },
        Ar = function(t, e, r) { return t.style[e] = r },
        Pr = function(t, e, r) { return t.style.setProperty(e, r) },
        zr = function(t, e, r) { return t._gsap[e] = r },
        Dr = function(t, e, r) { return t._gsap.scaleX = t._gsap.scaleY = r },
        Er = function(t, e, r, n, i) {
            var a = t._gsap;
            a.scaleX = a.scaleY = r, a.renderTransform(i, a)
        },
        Rr = function(t, e, r, n, i) {
            var a = t._gsap;
            a[e] = r, a.renderTransform(i, a)
        },
        Fr = "transform",
        Br = Fr + "Origin",
        Ir = function(t, e) { var r = ur.createElementNS ? ur.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ur.createElement(t); return r.style ? r : ur.createElement(t) },
        Nr = function t(e, r, n) { var i = getComputedStyle(e); return i[r] || i.getPropertyValue(r.replace(yr, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, Ur(r) || r, 1) || "" },
        Lr = "O,Moz,ms,Ms,Webkit".split(","),
        Ur = function(t, e, r) {
            var n = (e || cr).style,
                i = 5;
            if (t in n && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(Lr[i] + t in n););
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Lr[i] : "") + t
        },
        jr = function() { "undefined" != typeof window && (or = window, ur = or.document, lr = ur.documentElement, cr = Ir("div") || { style: {} }, fr = Ir("div"), Fr = Ur(Fr), Br = Ur(Br), cr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", dr = !!Ur("perspective"), hr = 1) },
        qr = function t(e) {
            var r, n = Ir("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                i = this.parentNode,
                a = this.nextSibling,
                s = this.style.cssText;
            if (lr.appendChild(n), n.appendChild(this), this.style.display = "block", e) try { r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t } catch (t) {} else this._gsapBBox && (r = this._gsapBBox());
            return i && (a ? i.insertBefore(this, a) : i.appendChild(this)), lr.removeChild(n), this.style.cssText = s, r
        },
        Xr = function(t, e) {
            for (var r = e.length; r--;)
                if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        Yr = function(t) { var e; try { e = t.getBBox() } catch (r) { e = qr.call(t, !0) } return e && (e.width || e.height) || t.getBBox === qr || (e = qr.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +Xr(t, ["x", "cx", "x1"]) || 0, y: +Xr(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } },
        Gr = function(t) { return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Yr(t)) },
        Vr = function(t, e) {
            if (e) {
                var r = t.style;
                e in _r && (e = Fr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(yr, "-$1").toLowerCase())) : r.removeAttribute(e)
            }
        },
        Zr = function(t, e, r, n, i, a) { var s = new rr(t._pt, e, r, 0, 1, a ? Sr : Cr); return t._pt = s, s.b = n, s.e = i, t._props.push(r), s },
        Jr = { deg: 1, rad: 1, turn: 1 },
        Qr = function(t, e, r, n) {
            var i, a, s, o, u = parseFloat(r) || 0,
                l = (r + "").trim().substr((u + "").length) || "px",
                h = cr.style,
                c = br.test(e),
                f = "svg" === t.tagName.toLowerCase(),
                p = (f ? "client" : "offset") + (c ? "Width" : "Height"),
                d = "px" === n;
            return n === l || !u || Jr[n] || Jr[l] ? u : (o = t.getCTM && Gr(t), "%" === n && (_r[e] || ~e.indexOf("adius")) ? yt(u / (o ? t.getBBox()[c ? "width" : "height"] : t[p]) * 100) : (h[c ? "width" : "height"] = 100 + (d ? l : n), a = ~e.indexOf("adius") || "em" === n && t.appendChild && !f ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== ur && a.appendChild || (a = ur.body), (s = a._gsap) && "%" === n && s.width && c && s.time === ye.time ? yt(u / s.width * 100) : (a === t && (h.position = "static"), a.appendChild(cr), i = cr[p], a.removeChild(cr), h.position = "absolute", c && "%" === n && ((s = gt(a)).time = ye.time, s.width = a[p]), yt(d ? i * u / 100 : 100 / i * u))))
        },
        Wr = function(t, e, r, n) { var i; return hr || jr(), e in xr && "transform" !== e && ~(e = xr[e]).indexOf(",") && (e = e.split(",")[0]), _r[e] && "transform" !== e ? (i = un(t, n), i = "transformOrigin" !== e ? i[e] : ln(Nr(t, Br)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = tn[e] && tn[e](t, e, r) || Nr(t, e) || mt(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").indexOf(" ") ? Qr(t, e, i, r) + r : i },
        Hr = function(t, e, r, n) {
            if (!r || "none" === r) {
                var i = Ur(e, t, 1),
                    a = i && Nr(t, i, 1);
                a && a !== r && (e = i, r = a)
            }
            var s, o, u, l, h, c, f, p, d, _, g, m, v = new rr(this._pt, t.style, e, 0, 1, We),
                y = 0,
                b = 0;
            if (v.b = r, v.e = n, r += "", "auto" === (n += "") && (t.style[e] = n, n = Nr(t, e) || n, t.style[e] = r), ve(s = [r, n]), n = s[1], u = (r = s[0]).match(Q) || [], (n.match(Q) || []).length) {
                for (; o = Q.exec(n);) f = o[0], d = n.substring(y, o.index), h ? h = (h + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (h = 1), f !== (c = u[b++] || "") && (l = parseFloat(c) || 0, g = c.substr((l + "").length), (m = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) && (f = f.substr(2)), p = parseFloat(f), _ = f.substr((p + "").length), y = Q.lastIndex - _.length, _ || (_ = _ || P.units[e] || g, y === n.length && (n += _, v.e += _)), g !== _ && (l = Qr(t, e, c, _) || 0), v._pt = { _next: v._pt, p: d || 1 === b ? d : ",", s: l, c: m ? m * p : p - l, m: h && h < 4 ? Math.round : 0 });
                v.c = y < n.length ? n.substring(y, n.length) : ""
            } else v.r = "display" === e && "none" === n ? Sr : Cr;
            return K.test(n) && (v.e = 0), this._pt = v, v
        },
        Kr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
        $r = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var r, n, i, a = e.t,
                    s = a.style,
                    o = e.u;
                if ("all" === o || !0 === o) s.cssText = "", n = 1;
                else
                    for (i = (o = o.split(",")).length; --i > -1;) r = o[i], _r[r] && (n = 1, r = "transformOrigin" === r ? Br : Fr), Vr(a, r);
                n && (Vr(a, Fr), (n = a._gsap) && (n.svg && a.removeAttribute("transform"), un(a, 1)))
            }
        },
        tn = { clearProps: function(t, e, r, n, i) { if ("isFromStart" !== i.data) { var a = t._pt = new rr(t._pt, e, r, 0, 0, $r); return a.u = n, a.pr = -10, a.tween = i, t._props.push(r), 1 } } },
        en = [1, 0, 0, 1, 0, 0],
        rn = {},
        nn = function(t) { return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t },
        an = function(t) { var e = Nr(t, Fr); return nn(e) ? en : e.substr(7).match(J).map(yt) },
        sn = function(t, e) {
            var r, n, i, a, s = t._gsap || gt(t),
                o = t.style,
                u = an(t);
            return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? en : u : (u !== en || t.offsetParent || t === lr || s.svg || (i = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, n = t.nextSibling, lr.appendChild(t)), u = an(t), i ? o.display = i : Vr(t, "display"), a && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : lr.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        on = function(t, e, r, n, i, a) {
            var s, o, u, l = t._gsap,
                h = i || sn(t, !0),
                c = l.xOrigin || 0,
                f = l.yOrigin || 0,
                p = l.xOffset || 0,
                d = l.yOffset || 0,
                _ = h[0],
                g = h[1],
                m = h[2],
                v = h[3],
                y = h[4],
                b = h[5],
                w = e.split(" "),
                x = parseFloat(w[0]) || 0,
                T = parseFloat(w[1]) || 0;
            r ? h !== en && (o = _ * v - g * m) && (u = x * (-g / o) + T * (_ / o) - (_ * b - g * y) / o, x = x * (v / o) + T * (-m / o) + (m * b - v * y) / o, T = u) : (x = (s = Yr(t)).x + (~w[0].indexOf("%") ? x / 100 * s.width : x), T = s.y + (~(w[1] || w[0]).indexOf("%") ? T / 100 * s.height : T)), n || !1 !== n && l.smooth ? (y = x - c, b = T - f, l.xOffset = p + (y * _ + b * m) - y, l.yOffset = d + (y * g + b * v) - b) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = T, l.smooth = !!n, l.origin = e, l.originIsAbsolute = !!r, t.style[Br] = "0px 0px", a && (Zr(a, l, "xOrigin", c, x), Zr(a, l, "yOrigin", f, T), Zr(a, l, "xOffset", p, l.xOffset), Zr(a, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", x + " " + T)
        },
        un = function(t, e) {
            var r = t._gsap || new ze(t);
            if ("x" in r && !e && !r.uncache) return r;
            var n, i, a, s, o, u, l, h, c, f, p, d, _, g, m, v, y, b, w, x, T, k, M, O, C, S, A, z, D, E, R, F, B = t.style,
                I = r.scaleX < 0,
                N = Nr(t, Br) || "0";
            return n = i = a = u = l = h = c = f = p = 0, s = o = 1, r.svg = !(!t.getCTM || !Gr(t)), g = sn(t, r.svg), r.svg && (O = !r.uncache && t.getAttribute("data-svg-origin"), on(t, O || N, !!O || r.originIsAbsolute, !1 !== r.smooth, g)), d = r.xOrigin || 0, _ = r.yOrigin || 0, g !== en && (b = g[0], w = g[1], x = g[2], T = g[3], n = k = g[4], i = M = g[5], 6 === g.length ? (s = Math.sqrt(b * b + w * w), o = Math.sqrt(T * T + x * x), u = b || w ? vr(w, b) * gr : 0, (c = x || T ? vr(x, T) * gr + u : 0) && (o *= Math.cos(c * mr)), r.svg && (n -= d - (d * b + _ * x), i -= _ - (d * w + _ * T))) : (F = g[6], E = g[7], A = g[8], z = g[9], D = g[10], R = g[11], n = g[12], i = g[13], a = g[14], l = (m = vr(F, D)) * gr, m && (O = k * (v = Math.cos(-m)) + A * (y = Math.sin(-m)), C = M * v + z * y, S = F * v + D * y, A = k * -y + A * v, z = M * -y + z * v, D = F * -y + D * v, R = E * -y + R * v, k = O, M = C, F = S), h = (m = vr(-x, D)) * gr, m && (v = Math.cos(-m), R = T * (y = Math.sin(-m)) + R * v, b = O = b * v - A * y, w = C = w * v - z * y, x = S = x * v - D * y), u = (m = vr(w, b)) * gr, m && (O = b * (v = Math.cos(m)) + w * (y = Math.sin(m)), C = k * v + M * y, w = w * v - b * y, M = M * v - k * y, b = O, k = C), l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0, h = 180 - h), s = yt(Math.sqrt(b * b + w * w + x * x)), o = yt(Math.sqrt(M * M + F * F)), m = vr(k, M), c = Math.abs(m) > 2e-4 ? m * gr : 0, p = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (g = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !nn(Nr(t, Fr)), g && t.setAttribute("transform", g))), Math.abs(c) > 90 && Math.abs(c) < 270 && (I ? (s *= -1, c += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, c += c <= 0 ? 180 : -180)), r.x = ((r.xPercent = n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", r.y = ((r.yPercent = i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", r.z = a + "px", r.scaleX = yt(s), r.scaleY = yt(o), r.rotation = yt(u) + "deg", r.rotationX = yt(l) + "deg", r.rotationY = yt(h) + "deg", r.skewX = c + "deg", r.skewY = f + "deg", r.transformPerspective = p + "px", (r.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (B[Br] = ln(N)), r.xOffset = r.yOffset = 0, r.force3D = P.force3D, r.renderTransform = r.svg ? pn : dr ? fn : cn, r.uncache = 0, r
        },
        ln = function(t) { return (t = t.split(" "))[0] + " " + t[1] },
        hn = function(t, e, r) { var n = Jt(e); return yt(parseFloat(e) + parseFloat(Qr(t, "x", r + "px", n))) + n },
        cn = function(t, e) { e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, fn(t, e) },
        fn = function(t, e) {
            var r = e || this,
                n = r.xPercent,
                i = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                l = r.rotationY,
                h = r.rotationX,
                c = r.skewX,
                f = r.skewY,
                p = r.scaleX,
                d = r.scaleY,
                _ = r.transformPerspective,
                g = r.force3D,
                m = r.target,
                v = r.zOrigin,
                y = "",
                b = "auto" === g && t && 1 !== t || !0 === g;
            if (v && ("0deg" !== h || "0deg" !== l)) {
                var w, x = parseFloat(l) * mr,
                    T = Math.sin(x),
                    k = Math.cos(x);
                x = parseFloat(h) * mr, w = Math.cos(x), a = hn(m, a, T * w * -v), s = hn(m, s, -Math.sin(x) * -v), o = hn(m, o, k * w * -v + v)
            }
            "0px" !== _ && (y += "perspective(" + _ + ") "), (n || i) && (y += "translate(" + n + "%, " + i + "%) "), (b || "0px" !== a || "0px" !== s || "0px" !== o) && (y += "0px" !== o || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + ") "), "0deg" !== u && (y += "rotate(" + u + ") "), "0deg" !== l && (y += "rotateY(" + l + ") "), "0deg" !== h && (y += "rotateX(" + h + ") "), "0deg" === c && "0deg" === f || (y += "skew(" + c + ", " + f + ") "), 1 === p && 1 === d || (y += "scale(" + p + ", " + d + ") "), m.style[Fr] = y || "translate(0, 0)"
        },
        pn = function(t, e) {
            var r, n, i, a, s, o = e || this,
                u = o.xPercent,
                l = o.yPercent,
                h = o.x,
                c = o.y,
                f = o.rotation,
                p = o.skewX,
                d = o.skewY,
                _ = o.scaleX,
                g = o.scaleY,
                m = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                b = o.xOffset,
                w = o.yOffset,
                x = o.forceCSS,
                T = parseFloat(h),
                k = parseFloat(c);
            f = parseFloat(f), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), f += d), f || p ? (f *= mr, p *= mr, r = Math.cos(f) * _, n = Math.sin(f) * _, i = Math.sin(f - p) * -g, a = Math.cos(f - p) * g, p && (d *= mr, s = Math.tan(p - d), i *= s = Math.sqrt(1 + s * s), a *= s, d && (s = Math.tan(d), r *= s = Math.sqrt(1 + s * s), n *= s)), r = yt(r), n = yt(n), i = yt(i), a = yt(a)) : (r = _, a = g, n = i = 0), (T && !~(h + "").indexOf("px") || k && !~(c + "").indexOf("px")) && (T = Qr(m, "x", h, "px"), k = Qr(m, "y", c, "px")), (v || y || b || w) && (T = yt(T + v - (v * r + y * i) + b), k = yt(k + y - (v * n + y * a) + w)), (u || l) && (s = m.getBBox(), T = yt(T + u / 100 * s.width), k = yt(k + l / 100 * s.height)), s = "matrix(" + r + "," + n + "," + i + "," + a + "," + T + "," + k + ")", m.setAttribute("transform", s), x && (m.style[Fr] = s)
        },
        dn = function(t, e, r, n, i, a) {
            var s, o, u = N(i),
                l = parseFloat(i) * (u && ~i.indexOf("rad") ? gr : 1),
                h = a ? l * a : l - n,
                c = n + h + "deg";
            return u && ("short" === (s = i.split("_")[1]) && (h %= 360) !== h % 180 && (h += h < 0 ? 360 : -360), "cw" === s && h < 0 ? h = (h + 36e9) % 360 - 360 * ~~(h / 360) : "ccw" === s && h > 0 && (h = (h - 36e9) % 360 - 360 * ~~(h / 360))), t._pt = o = new rr(t._pt, e, r, n, h, kr), o.e = c, o.u = "deg", t._props.push(r), o
        },
        _n = function(t, e, r) {
            var n, i, a, s, o, u, l, h = fr.style,
                c = r._gsap;
            for (i in h.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", h[Fr] = e, ur.body.appendChild(fr), n = un(fr, 1), _r)(a = c[i]) !== (s = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (o = Jt(a) !== (l = Jt(s)) ? Qr(r, i, a, l) : parseFloat(a), u = parseFloat(s), t._pt = new rr(t._pt, c, i, o, u - o, Tr), t._pt.u = l || 0, t._props.push(i));
            ur.body.removeChild(fr)
        };
    vt("padding,margin,Width,Radius", (function(t, e) {
        var r = "Top",
            n = "Right",
            i = "Bottom",
            a = "Left",
            s = (e < 3 ? [r, n, i, a] : [r + a, r + n, i + n, i + a]).map((function(r) { return e < 2 ? t + r : "border" + r + t }));
        tn[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
            var a, o;
            if (arguments.length < 4) return a = s.map((function(e) { return Wr(t, e, r) })), 5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o;
            a = (n + "").split(" "), o = {}, s.forEach((function(t, e) { return o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0] })), t.init(e, o, i)
        }
    }));
    var gn, mn, vn = {
        name: "css",
        register: jr,
        targetTest: function(t) { return t.style && t.nodeType },
        init: function(t, e, r, n, i) {
            var a, s, o, u, l, h, c, f, p, d, _, g, m, v, y, b, w, x, T, k = this._props,
                M = t.style;
            for (c in hr || jr(), e)
                if ("autoRound" !== c && (s = e[c], !ht[c] || !Ie(c, e, r, n, t, i)))
                    if (l = typeof s, h = tn[c], "function" === l && (l = typeof(s = s.call(r, n, t, i))), "string" === l && ~s.indexOf("random(") && (s = ae(s)), h) h(this, t, c, s, r) && (y = 1);
                    else if ("--" === c.substr(0, 2)) this.add(M, "setProperty", getComputedStyle(t).getPropertyValue(c) + "", s + "", n, i, 0, 0, c);
            else {
                if (a = Wr(t, c), u = parseFloat(a), (d = "string" === l && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), c in xr && ("autoAlpha" === c && (1 === u && "hidden" === Wr(t, "visibility") && o && (u = 0), Zr(this, M, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== c && "transform" !== c && ~(c = xr[c]).indexOf(",") && (c = c.split(",")[0])), _ = c in _r)
                    if (g || ((m = t._gsap).renderTransform || un(t), v = !1 !== e.smoothOrigin && m.smooth, (g = this._pt = new rr(this._pt, M, Fr, 0, 1, m.renderTransform, m, 0, -1)).dep = 1), "scale" === c) this._pt = new rr(this._pt, m, "scaleY", m.scaleY, d ? d * o : o - m.scaleY), k.push("scaleY", c), c += "X";
                    else { if ("transformOrigin" === c) { w = void 0, x = void 0, T = void 0, w = (b = s).split(" "), x = w[0], T = w[1] || "50%", "top" !== x && "bottom" !== x && "left" !== T && "right" !== T || (b = x, x = T, T = b), w[0] = Kr[x] || x, w[1] = Kr[T] || T, s = w.join(" "), m.svg ? on(t, s, 0, v, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== m.zOrigin && Zr(this, m, "zOrigin", m.zOrigin, p), Zr(this, M, c, ln(a), ln(s))); continue } if ("svgOrigin" === c) { on(t, s, 1, v, 0, this); continue } if (c in rn) { dn(this, m, c, u, s, d); continue } if ("smoothOrigin" === c) { Zr(this, m, "smooth", m.smooth, s); continue } if ("force3D" === c) { m[c] = s; continue } if ("transform" === c) { _n(this, s, t); continue } }
                else c in M || (c = Ur(c) || c);
                if (_ || (o || 0 === o) && (u || 0 === u) && !wr.test(s) && c in M) o || (o = 0), (f = (a + "").substr((u + "").length)) !== (p = (s + "").substr((o + "").length) || (c in P.units ? P.units[c] : f)) && (u = Qr(t, c, a, p)), this._pt = new rr(this._pt, _ ? m : M, c, u, d ? d * o : o - u, "px" !== p || !1 === e.autoRound || _ ? Tr : Or), this._pt.u = p || 0, f !== p && (this._pt.b = a, this._pt.r = Mr);
                else if (c in M) Hr.call(this, t, c, a, s);
                else {
                    if (!(c in t)) { nt(c, s); continue }
                    this.add(t, c, t[c], s, n, i)
                }
                k.push(c)
            }
            y && er(this)
        },
        get: Wr,
        aliases: xr,
        getSetter: function(t, e, r) { var n = xr[e]; return n && n.indexOf(",") < 0 && (e = n), e in _r && e !== Br && (t._gsap.x || Wr(t, "x")) ? r && pr === r ? "scale" === e ? Dr : zr : (pr = r || {}) && ("scale" === e ? Er : Rr) : t.style && !j(t.style[e]) ? Ar : ~e.indexOf("-") ? Pr : Ze(t, e) },
        core: { _removeProperty: Vr, _getMatrix: sn }
    };
    sr.utils.checkPrefix = Ur, mn = vt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (gn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) { _r[t] = 1 })), vt(gn, (function(t) { P.units[t] = "deg", rn[t] = 1 })), xr[mn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + gn, vt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        xr[e[1]] = mn[e[0]]
    })), vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) { P.units[t] = "px" })), sr.registerPlugin(vn);
    var yn = sr.registerPlugin(vn) || sr;
    yn.core.Tween, r(2), r(4), r(8), r(10);

    function bn(t, e, r, n, i, a) { var s = new yn.timeline; return s.add(t), s.to(".circle-2", { strokeDashoffset: 130, duration: 2 }, t), s.to([".swiper-slider-image", ".swiper-slider-details"], { opacity: 0, duration: 2 }, t), s.to(".swiper-pagination-bullet", { color: "rgba(32,32,32,.25)", duration: 2 }), s.to(r, { strokeDashoffset: 0, duration: 3 }, t), s.to(i, { color: "rgba(1,1,1)", duration: 3 }, t), s.to([n, a], { opacity: 1, duration: 3 }, t), console.log("sr2"), s }
    const wn = new yn.timeline({ repeat: -1 });
    wn.add(bn("part1", 0, "#circle-2-1", "#swiper-slider-image-5", "#swiper-pagination-bullet-1", "#swiper-slider-details-5"), "part1"), wn.add(bn("part2", 0, "#circle-2-2", "#swiper-slider-image-4", "#swiper-pagination-bullet-2", "#swiper-slider-details-4"), "part2"), wn.add(bn("part3", 0, "#circle-2-3", "#swiper-slider-image-3", "#swiper-pagination-bullet-3", "#swiper-slider-details-3"), "part3"), wn.add(bn("part4", 0, "#circle-2-4", "#swiper-slider-image-2", "#swiper-pagination-bullet-4", "#swiper-slider-details-2"), "part4"), wn.add(bn("part5", 0, "#circle-2-5", "#swiper-slider-image-1", "#swiper-pagination-bullet-5", "#swiper-slider-details-1"), "part5");
    const xn = document.querySelectorAll(".swiper-pagination-bullet"),
        Tn = xn.length,
        kn = ["part1", "part2", "part3", "part4", "part5"];
    for (let t = 0; t < Tn; t++) xn[t].addEventListener("click", (function() {
        var e;
        e = kn[t], console.log("sir"), wn.seek(e), wn.play()
    })), console.log(t);

    function Mn(t, e) { document.querySelector(t).style.opacity = e ? 1 : 0, document.querySelector(t).style.height = e ? "100%" : "0" }
    var On, Cn;
    var Sn;
    On = function() { Mn(".page", !0), Mn(".loader-wrapper", !1) }, Cn = window.setInterval((function() { void 0 !== document.getElementsByTagName("body")[0] && (window.clearInterval(Cn), On.call(this)) }), 2e3), new yn.timeline({ repeat: -1 }).add(((Sn = new yn.timeline).to("#what-we-do-1", { width: "100%", duration: 3 }), Sn.to("#what-we-do-1", { width: "0", duration: 3 }), Sn.to("#what-we-do-2", { width: "100%", duration: 3 }), Sn.to("#what-we-do-2", { width: "0", duration: 3 }), Sn.to("#what-we-do-3", { width: "100%", duration: 3 }), Sn.to("#what-we-do-3", { width: "0", duration: 3 }), Sn))
}]);