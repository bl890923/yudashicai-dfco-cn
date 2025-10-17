"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
function(t) {
    return typeof t
}: function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
}; !
function(t, e, n) {
    e.mk = {
        init: function() {
            return (arguments[0] ? arguments[0] : {}).imgAuto && t("img").each(function() {
                var e = t(this);
                e.attr("img-Auto") && ("cover" == e.attr("img-Auto") ? e.imgAuto("cover") : e.imgAuto())
            }),
            this
        },
        rem: function(n) {
            return n = n || 640,
            t(e).width() > n ? t("html").css("font-size", 100) : t("html").css("font-size", t(e).width() / n * 100),
            this
        },
        
       
      
       
       
        
        
    },
    t.fn.roll = function() {
        function i(t) {
            k || (k = !0, void 0 !== t && ("+" == t ? y++:y--), b.removeClass("in").eq( - y % (m / 3)).addClass("in"), C ? h.css({
                transform: D(),
                transition: "transform " + a.speed + "ms " + a.timing
            }) : h.stop(!0, !0).animate({
                left: z()
            },
            a.speed, a.easing,
            function() {
                y >= 0 && (y = -m / 3, h.css("left", z())),
                y <= -(m - 1) && (y = -(2 * m / 3 - 1), h.css("left", z())),
                k = !1
            }))
        }
        var o = t(this),
        a = arguments[0] ? arguments[0] : {};
        "number" != typeof a.num && (a.num = 1),
        "number" != typeof a.timer && (a.timer = 5e3),
        "number" != typeof a.speed && (a.speed = 400),
        "string" != typeof a.easing && (a.easing = "swing"),
        "string" != typeof a.timing && (a.timing = "ease-out"),
        a.adaptive === n && (a.adaptive = !0);
        var r, s, c, l, d, f, u, h = o.find("ul"),
        p = h.find("li"),
        m = p.length,
        v = p.outerWidth(!0),
        g = a.lbtn || o.find(".btn_l"),
        w = a.rbtn || o.find(".btn_r"),
        b = o.find(".banner_btn").find("a"),
        y = -m,
        x = null,
        k = !1,
        T = !1,
        _ = 0,
        I = 0,
        S = 0,
        A = 0,
        C = mk.css3_3d(),
        D = function() {
            return "translate3d(" + v * y + "px, 0px, 0px)"
        },
        z = function() {
            return v * y
        };
        if (h.html(h.html() + h.html() + h.html()), p = h.find("li"), m = p.length, o.css({
            position: "relative",
            overflow: "hidden",
            margin: "0 auto",
            width: a.width ? a.width: a.banner ? "100%": a.num * v
        }), p.css({
            width: a.banner ? v: p.width(),
            height: "100%",
            float: "left",
            position: "relative",
            overflow: "hidden"
        }), h.css({
            width: m * v,
            height: "100%"
        }), a.height && o.height(a.height), a.btn) {
            r = t('<div class="banner_btn"></div>'),
            s = t("<span></span>");
            for (var $ = 0; $ < m / 3; $++) s.append('<a href="javascript:;"></a>'); (b = s.find("a")).first().addClass("in"),
            r.append(s),
            o.append(r),
            "all" == a.btn && (o.append('<div class="banner_l"></div><div class="banner_r"></div>'), g = o.find(".banner_l"), w = o.find(".banner_r"))
        }
        return c = b.add(g).add(w),
        a.banner ? (f = t("div.center:first"), (u = function() {
            l = o.width(),
            d = f.width(),
            v = a.adaptive ? l: l > d ? l: d,
            p.width(v),
            h.width(m * v),
            C ? h.css({
                transform: D(),
                transition: "transform 0ms"
            }) : h.css({
                left: z()
            })
        })(), t(e).resize(function() {
            u()
        })) : c.add(p),
        C ? h.css({
            transform: D()
        }).on("webkitTransitionEnd",
        function() {
            k && (y >= 0 && (y = -m / 3, h.css({
                transform: D(),
                transition: "transform 0ms"
            })), y <= -(m - 1) && (y = -(2 * m / 3 - 1), h.css({
                transform: D(),
                transition: "transform 0ms"
            })), k = !1)
        }) : h.css({
            position: "absolute",
            top: 0,
            left: z()
        }),
       
       
       
       
        o.on("touchmove",
        function(t) {
            t.preventDefault(),
            (I = t.originalEvent.changedTouches[0].clientX - _) > l / 3 ? h.css("transform", "translate3d(" + (A + l / 3 + (I - l / 3) / 2) + "px, 0px, 0px)") : I < -l / 3 ? h.css("transform", "translate3d(" + (A - l / 3 + (I + l / 3) / 2) + "px, 0px, 0px)") : h.css("transform", "translate3d(" + (A + I) + "px, 0px, 0px)")
        }),
        o.on("touchend",
        function(t) {
            T = !1,
            y >= 0 && I > 0 && (y = -1, T = 1),
            y <= -(m - 1) && I < 0 && (y = 1 - (m - 1), T = 2),
            (I = t.originalEvent.changedTouches[0].clientX - _) >= l / 3 || Date.now() - S < 300 && I > 30 || 1 == T ? i("+") : I < -l / 3 || Date.now() - S < 300 && I < -30 || 2 == T ? i("-") : i(),
            clearInterval(x),
            x = setInterval(function() {
                i("-")
            },
            a.timer)
        }),
        x = setInterval(function() {
            i("-")
        },
        a.timer),
        c.hover(function() {
            clearInterval(x)
        },
        function() {
            x = setInterval(function() {
                i("-")
            },
            a.timer)
        }),
        o.fadeTo("slow", 1),
        this
    },
    t.fn.imgAuto = function(n, i) {
        i = arguments[1] ? arguments[1] : {};
        var o = function(t, e) {
            "function" == typeof i[t] && i[t](e)
        };
        return t(this).each(function() {
            function i() {
                r.width > 0 || r.height > 0 ? (o("imgAutoStart", r), a.css({
                    display: "block",
                    margin: 0
                }).parent().css(), c = r.width, l = r.height, d = s.width(), f = s.height(), u = f / l * c, h = d / c * l, c / l < d / f ? p ? a.css({
                    width: "100%",
                    height: "auto"
                }).css("margin-top", -(h - f) / 2) : a.css({
                    width: "auto",
                    height: "100%"
                }).css("margin-left", (d - u) / 2) : p ? a.css({
                    width: "auto",
                    height: "100%"
                }).css("margin-left", -(u - d) / 2) : a.css({
                    width: "100%",
                    height: "auto"
                }).css("margin-top", (f - h) / 2)) : setTimeout(i),
                o("callback", r)
            }
            var a = t(this);
            a.css("opacity", 1);
            var r = new Image;
            r.src = a.attr("src");
            var s, c, l, d, f, u, h, p = !("cover" != a.attr("img-Auto") && !n),
            m = a.attr("width"),
            v = a.attr("height");
            m && v ? ((s = t('<div class="imgAuto_box"></div>')).css({
                width: m,
                height: v,
                "text-align": "left",
                overflow: "hidden"
            }), a.wrapAll(s)) : s = a.parent(),
            i(),
            a.fadeTo(2e3, 1);
            
        }),
        this
    }
} (jQuery, window, document),

$.fn.imgscroll = function(t) {
    return t = $.extend({
        speed: 40,
        amount: 0,
        width: 1,
        dir: "left"
    },
    t),
    this.each(function() {
        function e() { (a += t.width) > i && (a = 0, n.parent().css("left" == t.dir ? {
                left: -a
            }: {
                top: -a
            }), a += t.width),
            n.parent().animate("left" == t.dir ? {
                left: -a
            }: {
                top: -a
            },
            t.amount)
        }
       
        
       
       
    })
},

function(t, e, n, i) {
    e.yunu = {
        
       
       
       
       
        getDbJson: function(t) {
            return JSON.parse(localStorage.getItem(t))
        },
        setDbJson: function(t, e) {
            localStorage.setItem(t, JSON.stringify(e))
        },
        loadMore: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = function() {
                t.ajax({
                    url: e.url,
                    type: e.type,
                    data: e.data,
                    dataType: "jsonp",
                    beforeSend: function(t) {
                        e.beforeSend(t),
                        e.btn.attr("disabled", !0)
                    }
                }).done(function(t, n, i) {
                    e.done(t, n, i),
                    (!t.data.length || !e.data.limit || t.data.length < e.data.limit) && e.btn.replaceWith(e.load_more_none)
                }).fail(function(t, n, i) {
                    e.fail(t, n, i)
                }).always(function(t, n, i) {
                    e.always(t, n, i),
                    e.key = !0,
                    e.btn.attr("disabled", !1)
                })
            }; (e = t.extend(!0, {
                key: !0,
                url: "",
                type: "POST",
                btn: t("#load_more_btn"),
                box: t("#list>ul"),
                data: {
                    pages: 1,
                    limit: 5
                },
                beforeSend: function() {},
                done: function() {},
                fail: function() {},
                always: function() {},
                load_icon: !0,
                load_icon_class: "",
                loading: t('<div class="la-ball-fall"><div></div><div></div><div></div><div></div>'),
                load_more_none: t('<p class="load_more_none tac c_red mt20">没有了</p>')
            },
            e)).load_icon && (t(e.loading).addClass(e.load_icon_class), e.btn.after(e.loading)),
            e.btn.click(function() {
                e.key && (e.key = !1, e.data.pages++, n())
            })
        }
    },
    yunu.rem(),
    t(function() {
        yunu.nav().gotop()
    }),
    t.fn.imgAuto = function(e, n) {
        var i = this;
        n = n || {};
        var o = function(t, e) {
            "function" == typeof n[t] && n[t](e)
        };
        return t(this).each(function() {
            var n = t(i),
            a = new Image,
            r = !("cover" != n.attr("img-Auto") && !e),
            s = n.attr("width"),
            c = n.attr("height"),
            l = n.attr("box-Scale"),
            d = void 0;
            n.css({
                display: "block",
                opacity: 0
            }),
            a.src = n.attr("src"),
            !n.parent().hasClass("imgAuto_box") && (n.attr("no-Box") || s && c) && ((d = t('<div class="imgAuto_box"></div>')).css({
                width: s,
                height: c
            }), n.wrapAll(d)),
            (d = n.parent()).css(),
            l && d.each(function() {
                var e = t(i);
                yunu.throttle(function() {
                    e.height(e.width() / l)
                })
            });
            yunu.throttle(function t() {
                if (a.width > 0 || a.height > 0) {
                    o("imgAutoStart", a);
                    var e = a.width,
                    i = a.height,
                    s = d.width(),
                    c = d.height();
                    e / i < s / c === r ? n.css({
                        width: "100%",
                        height: "auto",
                        margin: -(s / (e / i) - c) / 2 + "px 0 0 0"
                    }) : n.css({
                        width: "auto",
                        height: "100%",
                        margin: "0 0 0 " + -(c * (e / i) - s) / 2 + "px"
                    }),
                    o("callback", a)
                } else setTimeout(t)
            }),
            n.fadeTo("fast", 1)
        }),
        this
    }
} (jQuery, window, document);