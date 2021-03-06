!function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(o) {
        return n(o, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, n, o, t, i) {
    "use strict";
    var a = "fullpage-wrapper"
      , l = "." + a
      , r = "fp-responsive"
      , s = "fp-notransition"
      , c = "fp-destroyed"
      , d = "fp-enabled"
      , f = "fp-viewing"
      , u = "active"
      , h = "." + u
      , v = "fp-completely"
      , p = "." + v
      , g = "fp-section"
      , m = "." + g
      , w = m + h
      , S = m + ":first"
      , b = m + ":last"
      , x = "fp-tableCell"
      , y = "." + x
      , C = "fp-auto-height"
      , T = "fp-normal-scroll"
      , k = "fp-nav"
      , L = "#" + k
      , A = "fp-tooltip"
      , O = "." + A
      , I = "fp-show-active"
      , E = "fp-slide"
      , M = "." + E
      , B = M + h
      , R = "fp-slides"
      , z = "." + R
      , H = "fp-slidesContainer"
      , D = "." + H
      , P = "fp-table"
      , q = "fp-slidesNav"
      , F = "." + q
      , V = F + " a"
      , j = ".fp-controlArrow"
      , Y = "fp-prev"
      , N = "fp-controlArrow " + Y
      , X = j + ("." + Y)
      , U = "fp-controlArrow fp-next"
      , W = j + ".fp-next"
      , K = e(n)
      , _ = e(o);
    e.fn.fullpage = function(Q) {
        if (e("html").hasClass(d))
            $n();
        else {
            var G = e("html, body")
              , J = e("body")
              , Z = e.fn.fullpage;
            Q = e.extend({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: e.fn.fp_scrolloverflow ? e.fn.fp_scrolloverflow.iscrollHandler : null,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {
                    type: "reveal",
                    percentage: 62,
                    property: "translate"
                },
                sectionSelector: ".section",
                slideSelector: ".slide",
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0
            }, Q);
            var $, ee, ne, oe, te = !1, ie = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), ae = "ontouchstart"in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, le = e(this), re = K.height(), se = !1, ce = !0, de = !0, fe = [], ue = {
                m: {
                    up: !0,
                    down: !0,
                    left: !0,
                    right: !0
                }
            };
            ue.k = e.extend(!0, {}, ue.m);
            var he, ve, pe, ge, me, we, Se, be = function() {
                var e;
                e = n.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                };
                return e
            }(), xe = {
                touchmove: "ontouchmove"in n ? "touchmove" : be.move,
                touchstart: "ontouchstart"in n ? "touchstart" : be.down
            }, ye = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', Ce = e.extend(!0, {}, Q);
            $n(),
            e.extend(e.easing, {
                easeInOutCubic: function(e, n, o, t, i) {
                    return (n /= i / 2) < 1 ? t / 2 * n * n * n + o : t / 2 * ((n -= 2) * n * n + 2) + o
                }
            }),
            e(this).length && (Z.version = "2.9.5",
            Z.setAutoScrolling = ze,
            Z.setRecordHistory = He,
            Z.setScrollingSpeed = De,
            Z.setFitToSection = Pe,
            Z.setLockAnchors = function(e) {
                Q.lockAnchors = e
            }
            ,
            Z.setMouseWheelScrolling = qe,
            Z.setAllowScrolling = Fe,
            Z.setKeyboardScrolling = Ve,
            Z.moveSectionUp = je,
            Z.moveSectionDown = Ye,
            Z.silentMoveTo = Ne,
            Z.moveTo = Xe,
            Z.moveSlideRight = Ue,
            Z.moveSlideLeft = We,
            Z.fitToSection = Je,
            Z.reBuild = Ke,
            Z.setResponsive = _e,
            Z.destroy = function(n) {
                ze(!1, "internal"),
                Fe(!1),
                Ve(!1),
                le.addClass(c),
                clearTimeout(ge),
                clearTimeout(pe),
                clearTimeout(ve),
                clearTimeout(me),
                clearTimeout(we),
                K.off("scroll", Ge).off("hashchange", mn).off("resize", Mn),
                _.off("click touchstart", L + " a").off("mouseenter", L + " li").off("mouseleave", L + " li").off("click touchstart", V).off("mouseover", Q.normalScrollElements).off("mouseout", Q.normalScrollElements),
                e(m).off("click touchstart", j),
                clearTimeout(ge),
                clearTimeout(pe),
                n && function() {
                    Qn(0),
                    le.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                        dn(e(this), "src")
                    }),
                    le.find("img[data-srcset]").each(function() {
                        dn(e(this), "srcset")
                    }),
                    e(L + ", " + F + ", " + j).remove(),
                    e(m).css({
                        height: "",
                        "background-color": "",
                        padding: ""
                    }),
                    e(M).css({
                        width: ""
                    }),
                    le.css({
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }),
                    G.css({
                        overflow: "",
                        height: ""
                    }),
                    e("html").removeClass(d),
                    J.removeClass(r),
                    e.each(J.get(0).className.split(/\s+/), function(e, n) {
                        0 === n.indexOf(f) && J.removeClass(n)
                    }),
                    e(m + ", " + M).each(function() {
                        Q.scrollOverflowHandler && Q.scrollOverflowHandler.remove(e(this)),
                        e(this).removeClass(P + " " + u),
                        e(this).attr("style", e(this).data("fp-styles"))
                    }),
                    zn(le),
                    le.find(y + ", " + D + ", " + z).each(function() {
                        e(this).replaceWith(this.childNodes)
                    }),
                    le.css({
                        "-webkit-transition": "none",
                        transition: "none"
                    }),
                    G.scrollTop(0);
                    var n = [g, E, H];
                    e.each(n, function(n, o) {
                        e("." + o).removeClass(o)
                    })
                }()
            }
            ,
            Z.shared = {
                afterRenderActions: Qe
            },
            function() {
                Q.css3 && (Q.css3 = function() {
                    var e, t = o.createElement("p"), a = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                    for (var l in o.body.insertBefore(t, null),
                    a)
                        t.style[l] !== i && (t.style[l] = "",
                        e = n.getComputedStyle(t).getPropertyValue(a[l]));
                    return o.body.removeChild(t),
                    e !== i && e.length > 0 && "none" !== e
                }());
                Q.scrollBar = Q.scrollBar || Q.hybrid,
                t = le.find(Q.sectionSelector),
                Q.anchors.length || (Q.anchors = t.filter("[data-anchor]").map(function() {
                    return e(this).data("anchor").toString()
                }).get()),
                Q.navigationTooltips.length || (Q.navigationTooltips = t.filter("[data-tooltip]").map(function() {
                    return e(this).data("tooltip").toString()
                }).get()),
                le.css({
                    height: "100%",
                    position: "relative"
                }),
                le.addClass(a),
                e("html").addClass(d),
                re = K.height(),
                le.removeClass(c),
                le.find(Q.sectionSelector).addClass(g),
                le.find(Q.slideSelector).addClass(E),
                e(m).each(function(n) {
                    var o = e(this)
                      , t = o.find(M)
                      , i = t.length;
                    o.data("fp-styles", o.attr("style")),
                    function(n, o) {
                        o || 0 !== e(w).length || n.addClass(u),
                        oe = e(w),
                        n.css("height", re + "px"),
                        Q.paddingTop && n.css("padding-top", Q.paddingTop),
                        Q.paddingBottom && n.css("padding-bottom", Q.paddingBottom),
                        void 0 !== Q.sectionsColor[o] && n.css("background-color", Q.sectionsColor[o]),
                        void 0 !== Q.anchors[o] && n.attr("data-anchor", Q.anchors[o])
                    }(o, n),
                    function(n, o) {
                        void 0 !== Q.anchors[o] && n.hasClass(u) && Hn(Q.anchors[o], o),
                        Q.menu && Q.css3 && e(Q.menu).closest(l).length && e(Q.menu).appendTo(J)
                    }(o, n),
                    i > 0 ? function(n, o, t) {
                        var i = 100 * t
                          , a = 100 / t;
                        o.wrapAll('<div class="' + H + '" />'),
                        o.parent().wrap('<div class="' + R + '" />'),
                        n.find(D).css("width", i + "%"),
                        t > 1 && (Q.controlArrows && function(e) {
                            e.find(z).after('<div class="' + N + '"></div><div class="' + U + '"></div>'),
                            "#fff" != Q.controlArrowColor && (e.find(W).css("border-color", "transparent transparent transparent " + Q.controlArrowColor),
                            e.find(X).css("border-color", "transparent " + Q.controlArrowColor + " transparent transparent")),
                            Q.loopHorizontal || e.find(X).hide()
                        }(n),
                        Q.slidesNavigation && function(e, n) {
                            e.append('<div class="' + q + '"><ul></ul></div>');
                            var o = e.find(F);
                            o.addClass(Q.slidesNavPosition);
                            for (var t = 0; t < n; t++)
                                o.find("ul").append('<li><a href="#"><span></span></a></li>');
                            o.css("margin-left", "-" + o.width() / 2 + "px"),
                            o.find("li").first().find("a").addClass(u)
                        }(n, t)),
                        o.each(function(n) {
                            e(this).css("width", a + "%"),
                            Q.verticalCentered && Pn(e(this))
                        });
                        var l = n.find(B);
                        l.length && (0 !== e(w).index(m) || 0 === e(w).index(m) && 0 !== l.index()) ? _n(l, "internal") : o.eq(0).addClass(u)
                    }(o, t, i) : Q.verticalCentered && Pn(o)
                }),
                Q.fixedElements && Q.css3 && e(Q.fixedElements).appendTo(J),
                Q.navigation && function() {
                    J.append('<div class="lt" id="' + k + '"><ul></ul></div>');
                    var n = e(L);
                    n.addClass(function() {
                        return Q.showActiveTooltip ? I + " " + Q.navigationPosition : Q.navigationPosition
                    });
                    for (var o = 0; o < e(m).length; o++) {
                        var t = "";
                        Q.anchors.length && (t = Q.anchors[o]);
                        var i = '<li><a href="#' + t + '"><span></span></a>'
                          , a = Q.navigationTooltips[o];
                        void 0 !== a && "" !== a && (i += '<div class="' + A + " " + Q.navigationPosition + '">' + a + "</div>"),
                        i += "</li>",
                        n.find("ul").append(i)
                    }
                    e(L).find("li").eq(e(w).index(m)).find("a").addClass(u)
                }(),
                le.find('iframe[src*="youtube.com/embed/"]').each(function() {
                    var n, o, t;
                    n = e(this),
                    o = "enablejsapi=1",
                    t = n.attr("src"),
                    n.attr("src", t + (/\?/.test(t) ? "&" : "?") + o)
                }),
                Q.scrollOverflow ? he = Q.scrollOverflowHandler.init(Q) : Qe(),
                Fe(!0),
                ze(Q.autoScrolling, "internal"),
                Bn(),
                Wn(),
                "complete" === o.readyState && gn();
                var t;
                K.on("load", gn)
            }(),
            K.on("scroll", Ge).on("hashchange", mn).blur(kn).resize(Mn),
            _.keydown(Sn).keyup(xn).on("click touchstart", L + " a", Ln).on("click touchstart", V, An).on("click", O, bn),
            e(m).on("click touchstart", j, Tn),
            Q.normalScrollElements && (_.on("mouseenter touchstart", Q.normalScrollElements, function() {
                Fe(!1)
            }),
            _.on("mouseleave touchend", Q.normalScrollElements, function() {
                Fe(!0)
            })));
            var Te = !1
              , ke = 0
              , Le = 0
              , Ae = 0
              , Oe = 0
              , Ie = 0
              , Ee = (new Date).getTime()
              , Me = 0
              , Be = 0
              , Re = re
        }
        function ze(n, o) {
            n || Qn(0),
            Zn("autoScrolling", n, o);
            var t = e(w);
            Q.autoScrolling && !Q.scrollBar ? (G.css({
                overflow: "hidden",
                height: "100%"
            }),
            He(Ce.recordHistory, "internal"),
            le.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }),
            t.length && Qn(t.position().top)) : (G.css({
                overflow: "visible",
                height: "initial"
            }),
            He(!1, "internal"),
            le.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            t.length && G.scrollTop(t.position().top))
        }
        function He(e, n) {
            Zn("recordHistory", e, n)
        }
        function De(e, n) {
            Zn("scrollingSpeed", e, n)
        }
        function Pe(e, n) {
            Zn("fitToSection", e, n)
        }
        function qe(e) {
            e ? (!function() {
                var e, t = "";
                n.addEventListener ? e = "addEventListener" : (e = "attachEvent",
                t = "on");
                var a = "onwheel"in o.createElement("div") ? "wheel" : o.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == a ? o[e](t + "MozMousePixelScroll", an, !1) : o[e](t + a, an, !1)
            }(),
            le.on("mousedown", yn).on("mouseup", Cn)) : (o.addEventListener ? (o.removeEventListener("mousewheel", an, !1),
            o.removeEventListener("wheel", an, !1),
            o.removeEventListener("MozMousePixelScroll", an, !1)) : o.detachEvent("onmousewheel", an),
            le.off("mousedown", yn).off("mouseup", Cn))
        }
        function Fe(n, o) {
            void 0 !== o ? (o = o.replace(/ /g, "").split(","),
            e.each(o, function(e, o) {
                Jn(n, o, "m")
            })) : (Jn(n, "all", "m"),
            n ? (qe(!0),
            (ie || ae) && (Q.autoScrolling && J.off(xe.touchmove).on(xe.touchmove, $e),
            e(l).off(xe.touchstart).on(xe.touchstart, on).off(xe.touchmove).on(xe.touchmove, en))) : (qe(!1),
            (ie || ae) && (Q.autoScrolling && J.off(xe.touchmove),
            e(l).off(xe.touchstart).off(xe.touchmove))))
        }
        function Ve(n, o) {
            void 0 !== o ? (o = o.replace(/ /g, "").split(","),
            e.each(o, function(e, o) {
                Jn(n, o, "k")
            })) : (Jn(n, "all", "k"),
            Q.keyboardScrolling = n)
        }
        function je() {
            var n = e(w).prev(m);
            n.length || !Q.loopTop && !Q.continuousVertical || (n = e(m).last()),
            n.length && sn(n, null, !0)
        }
        function Ye() {
            var n = e(w).next(m);
            n.length || !Q.loopBottom && !Q.continuousVertical || (n = e(m).first()),
            n.length && sn(n, null, !1)
        }
        function Ne(e, n) {
            De(0, "internal"),
            Xe(e, n),
            De(Ce.scrollingSpeed, "internal")
        }
        function Xe(e, n) {
            var o = Vn(e);
            void 0 !== n ? jn(e, n) : o.length > 0 && sn(o)
        }
        function Ue(e) {
            ln("right", e)
        }
        function We(e) {
            ln("left", e)
        }
        function Ke(n) {
            if (!le.hasClass(c)) {
                se = !0,
                re = K.height(),
                e(m).each(function() {
                    var n = e(this).find(z)
                      , o = e(this).find(M);
                    Q.verticalCentered && e(this).find(y).css("height", qn(e(this)) + "px"),
                    e(this).css("height", re + "px"),
                    o.length > 1 && In(n, n.find(B))
                }),
                Q.scrollOverflow && he.createScrollBarForAll();
                var o = e(w).index(m);
                o && Ne(o + 1),
                se = !1,
                e.isFunction(Q.afterResize) && n && Q.afterResize.call(le),
                e.isFunction(Q.afterReBuild) && !n && Q.afterReBuild.call(le)
            }
        }
        function _e(n) {
            var o = J.hasClass(r);
            n ? o || (ze(!1, "internal"),
            Pe(!1, "internal"),
            e(L).hide(),
            J.addClass(r),
            e.isFunction(Q.afterResponsive) && Q.afterResponsive.call(le, n)) : o && (ze(Ce.autoScrolling, "internal"),
            Pe(Ce.autoScrolling, "internal"),
            e(L).show(),
            J.removeClass(r),
            e.isFunction(Q.afterResponsive) && Q.afterResponsive.call(le, n))
        }
        function Qe() {
            var n, o = e(w);
            o.addClass(v),
            fn(o),
            un(o),
            Q.scrollOverflow && Q.scrollOverflowHandler.afterLoad(),
            (!(n = Vn(wn().section)) || n.length && n.index() === oe.index()) && e.isFunction(Q.afterLoad) && Q.afterLoad.call(o, o.data("anchor"), o.index(m) + 1),
            e.isFunction(Q.afterRender) && Q.afterRender.call(le)
        }
        function Ge() {
            var n;
            if (!Q.autoScrolling || Q.scrollBar) {
                var t = K.scrollTop()
                  , i = function(e) {
                    var n = e > ke ? "down" : "up";
                    return ke = e,
                    Me = e,
                    n
                }(t)
                  , a = 0
                  , l = t + K.height() / 2
                  , r = J.height() - K.height() === t
                  , s = o.querySelectorAll(m);
                if (r)
                    a = s.length - 1;
                else if (t)
                    for (var c = 0; c < s.length; ++c) {
                        s[c].offsetTop <= l && (a = c)
                    }
                else
                    a = 0;
                if (function(n) {
                    var o = e(w).position().top
                      , t = o + K.height();
                    if ("up" == n)
                        return t >= K.scrollTop() + K.height();
                    return o <= K.scrollTop()
                }(i) && (e(w).hasClass(v) || e(w).addClass(v).siblings().removeClass(v)),
                !(n = e(s).eq(a)).hasClass(u)) {
                    Te = !0;
                    var d, f, h = e(w), p = h.index(m) + 1, g = Dn(n), S = n.data("anchor"), b = n.index(m) + 1, x = n.find(B);
                    x.length && (f = x.data("anchor"),
                    d = x.index()),
                    de && (n.addClass(u).siblings().removeClass(u),
                    e.isFunction(Q.onLeave) && Q.onLeave.call(h, p, b, g),
                    e.isFunction(Q.afterLoad) && Q.afterLoad.call(n, S, b),
                    vn(h),
                    fn(n),
                    un(n),
                    Hn(S, b - 1),
                    Q.anchors.length && ($ = S),
                    Nn(d, f, S, b)),
                    clearTimeout(me),
                    me = setTimeout(function() {
                        Te = !1
                    }, 100)
                }
                Q.fitToSection && (clearTimeout(we),
                we = setTimeout(function() {
                    Q.fitToSection && e(w).outerHeight() <= re && Je()
                }, Q.fitToSectionDelay))
            }
        }
        function Je() {
            de && (se = !0,
            sn(e(w)),
            se = !1)
        }
        function Ze(n) {
            if (ue.m[n]) {
                var o = "down" === n ? Ye : je;
                if (Q.scrollOverflow) {
                    var t = Q.scrollOverflowHandler.scrollable(e(w))
                      , i = "down" === n ? "bottom" : "top";
                    if (t.length > 0) {
                        if (!Q.scrollOverflowHandler.isScrolled(i, t))
                            return !0;
                        o()
                    } else
                        o()
                } else
                    o()
            }
        }
        function $e(e) {
            var n = e.originalEvent;
            Q.autoScrolling && nn(n) && e.preventDefault()
        }
        function en(n) {
            var o = n.originalEvent
              , i = e(o.target).closest(m);
            if (nn(o)) {
                Q.autoScrolling && n.preventDefault();
                var a = Kn(o);
                Oe = a.y,
                Ie = a.x,
                i.find(z).length && t.abs(Ae - Ie) > t.abs(Le - Oe) ? !te && t.abs(Ae - Ie) > K.outerWidth() / 100 * Q.touchSensitivity && (Ae > Ie ? ue.m.right && Ue(i) : ue.m.left && We(i)) : Q.autoScrolling && de && t.abs(Le - Oe) > K.height() / 100 * Q.touchSensitivity && (Le > Oe ? Ze("down") : Oe > Le && Ze("up"))
            }
        }
        function nn(e) {
            return void 0 === e.pointerType || "mouse" != e.pointerType
        }
        function on(e) {
            var n = e.originalEvent;
            if (Q.fitToSection && G.stop(),
            nn(n)) {
                var o = Kn(n);
                Le = o.y,
                Ae = o.x
            }
        }
        function tn(e, n) {
            for (var o = 0, i = e.slice(t.max(e.length - n, 1)), a = 0; a < i.length; a++)
                o += i[a];
            return t.ceil(o / n)
        }
        function an(o) {
            var i = (new Date).getTime()
              , a = e(p).hasClass(T);
            if (Q.autoScrolling && !ne && !a) {
                var l = (o = o || n.event).wheelDelta || -o.deltaY || -o.detail
                  , r = t.max(-1, t.min(1, l))
                  , s = void 0 !== o.wheelDeltaX || void 0 !== o.deltaX
                  , c = t.abs(o.wheelDeltaX) < t.abs(o.wheelDelta) || t.abs(o.deltaX) < t.abs(o.deltaY) || !s;
                fe.length > 149 && fe.shift(),
                fe.push(t.abs(l)),
                Q.scrollBar && (o.preventDefault ? o.preventDefault() : o.returnValue = !1);
                var d = i - Ee;
                if (Ee = i,
                d > 200 && (fe = []),
                de)
                    tn(fe, 10) >= tn(fe, 70) && c && Ze(r < 0 ? "down" : "up");
                return !1
            }
            Q.fitToSection && G.stop()
        }
        function ln(n, o) {
            var t = (void 0 === o ? e(w) : o).find(z)
              , i = t.find(M).length;
            if (!(!t.length || te || i < 2)) {
                var a = t.find(B)
                  , l = null;
                if (!(l = "left" === n ? a.prev(M) : a.next(M)).length) {
                    if (!Q.loopHorizontal)
                        return;
                    l = "left" === n ? a.siblings(":last") : a.siblings(":first")
                }
                te = !0,
                In(t, l, n)
            }
        }
        function rn() {
            e(B).each(function() {
                _n(e(this), "internal")
            })
        }
        function sn(n, o, i) {
            if (void 0 !== n) {
                var a, r, s = function(e) {
                    var n = e.position()
                      , o = n.top
                      , t = n.top > Me
                      , i = o - re + e.outerHeight()
                      , a = Q.bigSectionsDestination;
                    return e.outerHeight() > re ? (t || a) && "bottom" !== a || (o = i) : (t || se && e.is(":last-child")) && (o = i),
                    Me = o,
                    o
                }(n), c = {
                    element: n,
                    callback: o,
                    isMovementUp: i,
                    dtop: s,
                    yMovement: Dn(n),
                    anchorLink: n.data("anchor"),
                    sectionIndex: n.index(m),
                    activeSlide: n.find(B),
                    activeSection: e(w),
                    leavingSection: e(w).index(m) + 1,
                    localIsResizing: se
                };
                c.activeSection.is(n) && !se || Q.scrollBar && K.scrollTop() === c.dtop && !n.hasClass(C) || (c.activeSlide.length && (a = c.activeSlide.data("anchor"),
                r = c.activeSlide.index()),
                e.isFunction(Q.onLeave) && !c.localIsResizing && !1 === Q.onLeave.call(c.activeSection, c.leavingSection, c.sectionIndex + 1, c.yMovement) || (Q.autoScrolling && Q.continuousVertical && void 0 !== c.isMovementUp && (!c.isMovementUp && "up" == c.yMovement || c.isMovementUp && "down" == c.yMovement) && (c = function(n) {
                    n.isMovementUp ? e(w).before(n.activeSection.nextAll(m)) : e(w).after(n.activeSection.prevAll(m).get().reverse());
                    return Qn(e(w).position().top),
                    rn(),
                    n.wrapAroundElements = n.activeSection,
                    n.dtop = n.element.position().top,
                    n.yMovement = Dn(n.element),
                    n.leavingSection = n.activeSection.index(m) + 1,
                    n.sectionIndex = n.element.index(m),
                    n
                }(c)),
                c.localIsResizing || vn(c.activeSection),
                Q.scrollOverflow && Q.scrollOverflowHandler.beforeLeave(),
                n.addClass(u).siblings().removeClass(u),
                fn(n),
                Q.scrollOverflow && Q.scrollOverflowHandler.onLeave(),
                de = !1,
                Nn(r, a, c.anchorLink, c.sectionIndex),
                function(n) {
                    if (Q.css3 && Q.autoScrolling && !Q.scrollBar) {
                        var o = "translate3d(0px, -" + t.round(n.dtop) + "px, 0px)";
                        Fn(o, !0),
                        Q.scrollingSpeed ? (clearTimeout(pe),
                        pe = setTimeout(function() {
                            cn(n)
                        }, Q.scrollingSpeed)) : cn(n)
                    } else {
                        var i = function(e) {
                            var n = {};
                            Q.autoScrolling && !Q.scrollBar ? (n.options = {
                                top: -e.dtop
                            },
                            n.element = l) : (n.options = {
                                scrollTop: e.dtop
                            },
                            n.element = "html, body");
                            return n
                        }(n);
                        e(i.element).animate(i.options, Q.scrollingSpeed, Q.easing).promise().done(function() {
                            Q.scrollBar ? setTimeout(function() {
                                cn(n)
                            }, 30) : cn(n)
                        })
                    }
                }(c),
                $ = c.anchorLink,
                Hn(c.anchorLink, c.sectionIndex)))
            }
        }
        function cn(n) {
            !function(n) {
                n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(S).before(n.wrapAroundElements) : e(b).after(n.wrapAroundElements),
                Qn(e(w).position().top),
                rn())
            }(n),
            e.isFunction(Q.afterLoad) && !n.localIsResizing && Q.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1),
            Q.scrollOverflow && Q.scrollOverflowHandler.afterLoad(),
            n.localIsResizing || un(n.element),
            n.element.addClass(v).siblings().removeClass(v),
            de = !0,
            e.isFunction(n.callback) && n.callback.call(this)
        }
        function dn(e, n) {
            e.attr(n, e.data(n)).removeAttr("data-" + n)
        }
        function fn(n) {
            var o;
            Q.lazyLoading && pn(n).find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function() {
                if (o = e(this),
                e.each(["src", "srcset"], function(e, n) {
                    var t = o.attr("data-" + n);
                    void 0 !== t && t && dn(o, n)
                }),
                o.is("source")) {
                    var n = o.closest("video").length ? "video" : "audio";
                    o.closest(n).get(0).load()
                }
            })
        }
        function un(n) {
            var o = pn(n);
            o.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play()
            }),
            o.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && hn(n),
                n.onload = function() {
                    n.hasAttribute("data-autoplay") && hn(n)
                }
            })
        }
        function hn(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }
        function vn(n) {
            var o = pn(n);
            o.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause()
            }),
            o.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }
        function pn(n) {
            var o = n.find(B);
            return o.length && (n = e(o)),
            n
        }
        function gn() {
            var e = wn()
              , n = e.section
              , o = e.slide;
            n && (Q.animateAnchor ? jn(n, o) : Ne(n, o))
        }
        function mn() {
            if (!Te && !Q.lockAnchors) {
                var e = wn()
                  , n = e.section
                  , o = e.slide
                  , t = void 0 === $
                  , i = void 0 === $ && void 0 === o && !te;
                n.length && (n && n !== $ && !t || i || !te && ee != o) && jn(n, o)
            }
        }
        function wn() {
            var e, o, t = n.location.hash;
            if (t.length) {
                var i = t.replace("#", "").split("/")
                  , a = t.indexOf("#/") > -1;
                e = a ? "/" + i[1] : decodeURIComponent(i[0]);
                var l = a ? i[2] : i[1];
                l && l.length && (o = decodeURIComponent(l))
            }
            return {
                section: e,
                slide: o
            }
        }
        function Sn(n) {
            clearTimeout(Se);
            var o = e(":focus")
              , t = n.which;
            if (9 === t)
                !function(n) {
                    var o = n.shiftKey
                      , t = e(":focus")
                      , i = e(w)
                      , a = i.find(B)
                      , l = (a.length ? a : i).find(ye);
                    function r(e) {
                        return e.preventDefault(),
                        l.first().focus()
                    }
                    t.length ? t.closest(w, B).length || (t = r(n)) : r(n);
                    (!o && t.is(l.last()) || o && t.is(l.first())) && n.preventDefault()
                }(n);
            else if (!o.is("textarea") && !o.is("input") && !o.is("select") && "true" !== o.attr("contentEditable") && "" !== o.attr("contentEditable") && Q.keyboardScrolling && Q.autoScrolling) {
                e.inArray(t, [40, 38, 32, 33, 34]) > -1 && n.preventDefault(),
                ne = n.ctrlKey,
                Se = setTimeout(function() {
                    !function(n) {
                        var o = n.shiftKey;
                        if (!de && [37, 39].indexOf(n.which) < 0)
                            return;
                        switch (n.which) {
                        case 38:
                        case 33:
                            ue.k.up && je();
                            break;
                        case 32:
                            if (o && ue.k.up) {
                                je();
                                break
                            }
                        case 40:
                        case 34:
                            ue.k.down && Ye();
                            break;
                        case 36:
                            ue.k.up && Xe(1);
                            break;
                        case 35:
                            ue.k.down && Xe(e(m).length);
                            break;
                        case 37:
                            ue.k.left && We();
                            break;
                        case 39:
                            ue.k.right && Ue();
                            break;
                        default:
                            ;
                        }
                    }(n)
                }, 150)
            }
        }
        function bn() {
            e(this).prev().trigger("click")
        }
        function xn(e) {
            ce && (ne = e.ctrlKey)
        }
        function yn(e) {
            2 == e.which && (Be = e.pageY,
            le.on("mousemove", On))
        }
        function Cn(e) {
            2 == e.which && le.off("mousemove")
        }
        function Tn() {
            var n = e(this).closest(m);
            e(this).hasClass(Y) ? ue.m.left && We(n) : ue.m.right && Ue(n)
        }
        function kn() {
            ce = !1,
            ne = !1
        }
        function Ln(n) {
            n.preventDefault();
            var o = e(this).parent().index();
            sn(e(m).eq(o))
        }
        function An(n) {
            n.preventDefault();
            var o = e(this).closest(m).find(z)
              , t = o.find(M).eq(e(this).closest("li").index());
            In(o, t)
        }
        function On(e) {
            de && (e.pageY < Be && ue.m.up ? je() : e.pageY > Be && ue.m.down && Ye()),
            Be = e.pageY
        }
        function In(n, o, i) {
            var a = n.closest(m)
              , l = {
                slides: n,
                destiny: o,
                direction: i,
                destinyPos: o.position(),
                slideIndex: o.index(),
                section: a,
                sectionIndex: a.index(m),
                anchorLink: a.data("anchor"),
                slidesNav: a.find(F),
                slideAnchor: Un(o),
                prevSlide: a.find(B),
                prevSlideIndex: a.find(B).index(),
                localIsResizing: se
            };
            l.xMovement = function(e, n) {
                if (e == n)
                    return "none";
                if (e > n)
                    return "left";
                return "right"
            }(l.prevSlideIndex, l.slideIndex),
            l.localIsResizing || (de = !1),
            Q.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && e.isFunction(Q.onSlideLeave) && !1 === Q.onSlideLeave.call(l.prevSlide, l.anchorLink, l.sectionIndex + 1, l.prevSlideIndex, l.direction, l.slideIndex) ? te = !1 : (o.addClass(u).siblings().removeClass(u),
            l.localIsResizing || (vn(l.prevSlide),
            fn(o)),
            !Q.loopHorizontal && Q.controlArrows && (a.find(X).toggle(0 !== l.slideIndex),
            a.find(W).toggle(!o.is(":last-child"))),
            a.hasClass(u) && !l.localIsResizing && Nn(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex),
            function(e, n, o) {
                var i = n.destinyPos;
                if (Q.css3) {
                    var a = "translate3d(-" + t.round(i.left) + "px, 0px, 0px)";
                    Rn(e.find(D)).css(Gn(a)),
                    ge = setTimeout(function() {
                        o && En(n)
                    }, Q.scrollingSpeed, Q.easing)
                } else
                    e.animate({
                        scrollLeft: t.round(i.left)
                    }, Q.scrollingSpeed, Q.easing, function() {
                        o && En(n)
                    })
            }(n, l, !0))
        }
        function En(n) {
            var o, t;
            o = n.slidesNav,
            t = n.slideIndex,
            o.find(h).removeClass(u),
            o.find("li").eq(t).find("a").addClass(u),
            n.localIsResizing || (e.isFunction(Q.afterSlideLoad) && Q.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex),
            de = !0,
            un(n.destiny)),
            te = !1
        }
        function Mn() {
            if (Bn(),
            ie) {
                var n = e(o.activeElement);
                if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
                    var i = K.height();
                    t.abs(i - Re) > 20 * t.max(Re, i) / 100 && (Ke(!0),
                    Re = i)
                }
            } else
                clearTimeout(ve),
                ve = setTimeout(function() {
                    Ke(!0)
                }, 350)
        }
        function Bn() {
            var e = Q.responsive || Q.responsiveWidth
              , n = Q.responsiveHeight
              , o = e && K.outerWidth() < e
              , t = n && K.height() < n;
            e && n ? _e(o || t) : e ? _e(o) : n && _e(t)
        }
        function Rn(e) {
            var n = "all " + Q.scrollingSpeed + "ms " + Q.easingcss3;
            return e.removeClass(s),
            e.css({
                "-webkit-transition": n,
                transition: n
            })
        }
        function zn(e) {
            return e.addClass(s)
        }
        function Hn(n, o) {
            var t;
            t = n,
            Q.menu && (e(Q.menu).find(h).removeClass(u),
            e(Q.menu).find('[data-menuanchor="' + t + '"]').addClass(u)),
            function(n, o) {
                Q.navigation && (e(L).find(h).removeClass(u),
                n ? e(L).find('a[href="#' + n + '"]').addClass(u) : e(L).find("li").eq(o).find("a").addClass(u))
            }(n, o)
        }
        function Dn(n) {
            var o = e(w).index(m)
              , t = n.index(m);
            return o == t ? "none" : o > t ? "up" : "down"
        }
        function Pn(e) {
            e.hasClass(P) || e.addClass(P).wrapInner('<div class="' + x + '" style="height:' + qn(e) + 'px;" />')
        }
        function qn(e) {
            var n = re;
            if (Q.paddingTop || Q.paddingBottom) {
                var o = e;
                o.hasClass(g) || (o = e.closest(m));
                var t = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom"));
                n = re - t
            }
            return n
        }
        function Fn(e, n) {
            n ? Rn(le) : zn(le),
            le.css(Gn(e)),
            setTimeout(function() {
                le.removeClass(s)
            }, 10)
        }
        function Vn(n) {
            var o = le.find(m + '[data-anchor="' + n + '"]');
            if (!o.length) {
                var t = void 0 !== n ? n - 1 : 0;
                o = e(m).eq(t)
            }
            return o
        }
        function jn(e, n) {
            var o = Vn(e);
            if (o.length) {
                var t = function(e, n) {
                    var o = n.find(M + '[data-anchor="' + e + '"]');
                    return o.length || (e = void 0 !== e ? e : 0,
                    o = n.find(M).eq(e)),
                    o
                }(n, o);
                e === $ || o.hasClass(u) ? Yn(t) : sn(o, function() {
                    Yn(t)
                })
            }
        }
        function Yn(e) {
            e.length && In(e.closest(z), e)
        }
        function Nn(e, n, o, t) {
            var i = "";
            Q.anchors.length && !Q.lockAnchors && (e ? (void 0 !== o && (i = o),
            void 0 === n && (n = e),
            ee = n,
            Xn(i + "/" + n)) : void 0 !== e ? (ee = n,
            Xn(o)) : Xn(o)),
            Wn()
        }
        function Xn(e) {
            if (Q.recordHistory)
                location.hash = e;
            else if (ie || ae)
                n.history.replaceState(i, i, "#" + e);
            else {
                var o = n.location.href.split("#")[0];
                n.location.replace(o + "#" + e)
            }
        }
        function Un(e) {
            var n = e.data("anchor")
              , o = e.index();
            return void 0 === n && (n = o),
            n
        }
        function Wn() {
            var n = e(w)
              , o = n.find(B)
              , t = Un(n)
              , i = Un(o)
              , a = String(t);
            o.length && (a = a + "-" + i),
            a = a.replace("/", "-").replace("#", "");
            var l = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b","g");
            J[0].className = J[0].className.replace(l, ""),
            J.addClass(f + "-" + a)
        }
        function Kn(e) {
            var n = [];
            return n.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY,
            n.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX,
            ae && nn(e) && (Q.scrollBar || !Q.autoScrolling) && (n.y = e.touches[0].pageY,
            n.x = e.touches[0].pageX),
            n
        }
        function _n(e, n) {
            De(0, "internal"),
            void 0 !== n && (se = !0),
            In(e.closest(z), e),
            void 0 !== n && (se = !1),
            De(Ce.scrollingSpeed, "internal")
        }
        function Qn(e) {
            var n = t.round(e);
            Q.css3 && Q.autoScrolling && !Q.scrollBar ? Fn("translate3d(0px, -" + n + "px, 0px)", !1) : Q.autoScrolling && !Q.scrollBar ? le.css("top", -n) : G.scrollTop(n)
        }
        function Gn(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }
        function Jn(n, o, t) {
            "all" !== o ? ue[t][o] = n : e.each(Object.keys(ue[t]), function(e, o) {
                ue[t][o] = n
            })
        }
        function Zn(e, n, o) {
            Q[e] = n,
            "internal" !== o && (Ce[e] = n)
        }
        function $n() {
            e("html").hasClass(d) ? eo("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (Q.continuousVertical && (Q.loopTop || Q.loopBottom) && (Q.continuousVertical = !1,
            eo("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            Q.scrollBar && Q.scrollOverflow && eo("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),
            !Q.continuousVertical || !Q.scrollBar && Q.autoScrolling || (Q.continuousVertical = !1,
            eo("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            Q.scrollOverflow && !Q.scrollOverflowHandler && (Q.scrollOverflow = !1,
            eo("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
            e.each(["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"], function(e, n) {
                Q[n] && eo("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + n)
            }),
            e.each(Q.anchors, function(n, o) {
                var t = _.find("[name]").filter(function() {
                    return e(this).attr("name") && e(this).attr("name").toLowerCase() == o.toLowerCase()
                })
                  , i = _.find("[id]").filter(function() {
                    return e(this).attr("id") && e(this).attr("id").toLowerCase() == o.toLowerCase()
                });
                (i.length || t.length) && (eo("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),
                i.length && eo("error", '"' + o + '" is is being used by another element `id` property'),
                t.length && eo("error", '"' + o + '" is is being used by another element `name` property'))
            }))
        }
        function eo(e, n) {
            console && console[e] && console[e]("fullPage: " + n)
        }
    }
});