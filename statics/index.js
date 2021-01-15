!function (e) {
    function t(n) {
        if (o[n]) return o[n].exports;
        var r = o[n] = {exports: {}, id: n, loaded: !1};
        return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }

    var n = window.webpackJsonp;
    window.webpackJsonp = function (o, i) {
        for (var a, s, c = 0, u = []; c < o.length; c++) s = o[c], r[s] && u.push.apply(u, r[s]), r[s] = 0;
        for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
        for (n && n(o, i); u.length;) u.shift().call(null, t)
    };
    var o = {}, r = {3: 0};
    return t.e = function (e, n) {
        if (0 === r[e]) return n.call(null, t);
        if (void 0 !== r[e]) r[e].push(n); else {
            r[e] = [n];
            var o = document.getElementsByTagName("head")[0], i = document.createElement("script");
            i.type = "text/javascript", i.charset = "utf-8", i.async = !0, i.src = t.p + "chunck/" + e + ".chunk.js", o.appendChild(i)
        }
    }, t.m = e, t.c = o, t.p = "/public/specials/", t(0)
}([function (e, t, n) {
    "use strict";
    var o = n(22), r = n(6);
    n(40);
    var i = n(54), a = (n(13), n(11)), s = n(55), c = n(8), u = n(52), l = n(19), p = n(4), d = n(51), f = n(59),
        h = n(53), g = n(15), m = n(16), _ = n(21), v = n(57);
    window.Swipe = n(69);
    var y = n(68);
    n(107), r(function () {
        function e() {
            r(".relative-specials-box .swipe").map(function (e, t) {
                new Swipe(t, {
                    startSlide: 0,
                    continuous: !1,
                    disableScroll: !1,
                    stopPropagation: !1,
                    callback: function (e, n) {
                        r(t).find(".indicator").find("li").eq(e).addClass("cur").siblings("li").removeClass("cur")
                    },
                    transitionEnd: function (e, t) {
                    }
                })
            }), l.getWinSize(function (e) {
                var t = 30, n = 8;
                r(".relative-specials-box .relative-slip-1").map(function (o, i) {
                    var a = r(i), s = a.find(".relative-slip-col"), c = e.width - t - n / 2;
                    a.css({width: (c + n) * s.length + t + "px"}), s.css({width: c + "px"})
                }), r(".relative-specials-box .relative-slip-3").map(function (o, i) {
                    var a = r(i), s = a.find(".relative-slip-col"), c = (e.width - t) / 2 - n / 2;
                    a.css({width: (c + n) * s.length + t + "px"}), s.css({width: c + "px"})
                }), r(".relative-specials-box .relative-slip").map(function (e, t) {
                    y("px", t, {direction: "x", no_bar: !0})
                })
            }, 10), r(".relative-specials-box").on("click", ".btn-rel-spe", function () {
                var e = r(this), t = e.attr("data-href"), n = "0" | e.attr("data-pos"),
                    o = e.find(".relative-title").text() || "";
                t && (window.AppStateController && c && c.avaliable() ? c.log({
                    action: "topic",
                    module: document.title,
                    page: document.topicId,
                    ckUrl: t,
                    resType: "link",
                    position: n,
                    appId: S,
                    appName: o.trim(),
                    keyword: location.href
                }) : s.log.click({
                    ch_src: g.getChSrc(),
                    ch: window.ch,
                    spaceType: "topic",
                    spaceName: document.title,
                    spaceRType: S,
                    spaceId: document.topicId,
                    spaceUrl: t,
                    order: n,
                    query: window.query
                }), setTimeout(function () {
                    window.location.href = t
                }, 500))
            })
        }

        var t = p.getQueryString("theme") || "", n = parseInt(p.getQueryString("sid")) || 1,
            w = parseInt(p.getQueryString("listType")) || 0, b = null, S = parseInt(p.getQueryString("rType")) || 0,
            x = parseInt(p.getQueryString("rank")) || 0, T = null, E = parseInt(p.getQueryString("titleBorder")) || 0,
            A = parseInt(p.getQueryString("isShare")) || 0, I = p.getQueryString("banner") || "default",
            P = parseInt(p.getQueryString("bannerTxt")) || 0, k = parseInt(p.getQueryString("bannerGrid")) || 0,
            C = p.getQueryString("downloadText") || "下载", O = parseInt(p.getQueryString("pp6")) || 0,
            N = parseInt(p.getQueryString("isGameReserving")) || 0, R = parseInt(p.getQueryString("noBtnStatus")) || 0,
            D = parseInt(getQueryString("isWdj")) || 0, L = {
                colorRank: p.getQueryString("cRank") || p.getQueryString("cAppName") || p.getQueryString("cAppInfo") || "",
                colorAppName: p.getQueryString("cAppName") || p.getQueryString("cAppInfo") || p.getQueryString("cRank") || "",
                colorAppInfo: p.getQueryString("cAppInfo") || p.getQueryString("cAppName") || p.getQueryString("cRank") || "",
                colorBG: p.getQueryString("bg") || "",
                colorBtnDown: p.getQueryString("cBtnDown") || "",
                colorBtnPause: p.getQueryString("cBtnPause") || "",
                colorBtnInstall: p.getQueryString("cBtnInstall") || "",
                colorBtnOpen: p.getQueryString("cBtnOpen") || "",
                colorLiBorder: p.getQueryString("liBorder") || "",
                colorTitleBg: p.getQueryString("titleBg") || "",
                colorTitleBgAbove: p.getQueryString("titleBgAbove") || "",
                colotTitleTxt: p.getQueryString("titleTxtColor") || ""
            };
        t && "default" !== t || L.colorBG || (L.colorBG = "000000");
        var M = document.createElement("style");
        if (document.body.appendChild(M), M.innerHTML = ".ctl-ul .rank-num { color: #" + L.colorRank + "; }.ico-name { color: #" + L.colorAppName + "; }.app-num,.app-info { color: #" + L.colorAppInfo + "; }body { background-color: #" + L.colorBG + "; }.btn-down,.btn-update { background-color: #" + L.colorBtnDown + "; }.btn-pause { background-color: #" + L.colorBtnPause + "; }.btn-continue,.btn-install,.btn-installing { background-color: #" + L.colorBtnInstall + "; }.btn-open { background-color: #" + L.colorBtnOpen + "; }.stencil-box .title, .stencil-box .title span, .stencil-box .title span:before {color: #" + L.colotTitleTxt + ";background-color: #" + L.colorTitleBgAbove + "; }.stencil-box .title-block {background-color: #" + L.colorTitleBg + "; }.box-stencil-info, .stencil-app-list, .stencil-app-list-1 li, .stencil-app-list-2 li { border-bottom: 1px solid #" + L.colorLiBorder + "; }", window.ch = p.getQueryString("ch") || "topic", window.query = p.getQueryString("searchKeyword") || "", window.AppStateController) 1 == A ? r(".stencil-share").show() : r(".stencil-share").hide(), f.init(h); else {
            var j = /AliApp\(PPYYQ\//.test(navigator.userAgent), U = parseInt(p.getQueryString("searchIcon") || "1");
            0 === U || j || r("#header2").find(".header2-search").show()
        }
        try {
            b = JSON.parse(new String(p.getQueryString("listTypes")))
        } catch (e) {
            console.log("e:" + e)
        }
        try {
            T = JSON.parse(new String(p.getQueryString("ranknum")))
        } catch (e) {
            console.log("e:" + e)
        }
        i.helper("sizeFormat", d.sizeFormat), i.helper("iconFormat", d.iconFormat), i.helper("downloadsFormat", d.downloadsFormat), i.helper("webpFormat", u.webpFormat);
        var F = (new Date).getTime();
        a.listAppsBySpecial(n, function (t) {
            var a = (new Date).getTime();
            o.extendParams && (o.extendParams.proxyTime = a - F);
            var c = {};
            if (t) {
                c.data = t;
                var u = "undefined" != typeof c.data.shareInfo, l = c.data.name, d = "";
                if (c.data && c.data.exData) for (var y = 0, A = c.data.exData.length; y < A; y++) if ("nativeSubTitle" === c.data.exData[y].key) {
                    d = c.data.exData[y].value;
                    break
                }
                document.topicId = n, c.pp6 = O, c.listType = w, c.listTypes = b, c.rType = S, c.rank = x, c.downloadText = C, c.rankNum = T, c.titleBorder = E, c.bannerTheme = I, c.bannerTxt = P, c.bannerGrid = k, c.titleName = l, c.titleDesc = d, c.isClient = window.AppStateController ? 1 : 0, c.isWdj = D ? 1 : 0, c.tag = p.getQueryString("tag"), u ? (h.opt_share.title = c.data.shareInfo.title || "【推荐】" + l, h.opt_share.content = c.data.shareInfo.description || "我发现一个好玩的专题“" + l + "”，你也来看看！", h.opt_share.icon = c.data.shareInfo.image || "http://a.img.pp.cn/upload_files/2016/03/07/pp_logo.jpg") : (h.opt_share.title = "【推荐】" + l, h.opt_share.content = "我发现一个好玩的专题“" + l + "”，你也来看看！", h.opt_share.icon = "http://a.img.pp.cn/upload_files/2016/03/07/pp_logo.jpg"), h.opt_share.share_url = window.location.href, f.init(h), document.getElementById("wrapper").innerHTML = i("template", c), setTimeout(function () {
                    m.init({navHeight: 10})
                }, 500), v.scrollLoadImg(), window.location.hash && setTimeout(function () {
                    location.href = location.hash
                }, 300), c && c.data && c.data.name && (r("#header2Title").text(l), document.title = l), _.options({
                    downloadText: C,
                    needBtnStatus: !R
                }), _.fEvent_bind(1), _.checkAppStatus(), window.AppStateController ? m.showLog() : s.log.access({
                    ch_src: g.getChSrc(),
                    ch: window.ch,
                    spaceType: "topic",
                    spaceName: document.title,
                    spaceId: document.topicId,
                    query: window.query
                }), window.setTimeout(function () {
                    e()
                }, 50)
            }
        }, function (e) {
            console.log(e)
        }, {isGameReserving: !!N})
    })
}, function (e, t) {
    "use strict";
    var n = {
        checkPhone: function (e) {
            var t = /^((13[0-9])|(14[5,7,9])|(15[^4,\D])|(17[0,6-8])|(18[0-9]))\d{8}$/;
            return !!t.test(e)
        }, insertArray: function (e, t, n) {
            return e.length < t ? e : e.splice(t, 0, n)
        }, isObjectNotEmpty: function (e) {
            if ("object" != typeof e || e instanceof Array) return !1;
            for (var t in e) return !0;
            return !1
        }, extend: function (e, t) {
            return Object.assign || Object.defineProperty(Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
                    for (var t = Object(e), n = 1; n < arguments.length; n++) {
                        var o = arguments[n];
                        if (void 0 !== o && null !== o) {
                            o = Object(o);
                            for (var r = Object.keys(Object(o)), i = 0, a = r.length; i < a; i++) {
                                var s = r[i], c = Object.getOwnPropertyDescriptor(o, s);
                                void 0 !== c && c.enumerable && (t[s] = o[s])
                            }
                        }
                    }
                    return t
                }
            }), Object.assign(e, t)
        }
    };
    e.exports = n
}, function (e, t) {
    "use strict";
    e.exports = {
        methodId: {
            LOG: 1,
            APP_STATUS: 4,
            APP_CHECK_STATUS: 5,
            APP_DOWNLOAD: 6,
            APP_PAUSE_DOWNLOAD: 7,
            APP_CONTINUE_DOWNLOAD: 8,
            APP_PROGRESS_DOWNLOAD: 2004,
            APP_INSTALL: 9,
            APP_OPEN: 10,
            APP_DETAIL: 11,
            APP_LIST_INSTALLED: 201,
            APP_DPK_UNCOMPRESS: 202,
            APP_UPDATE_LIST: 210,
            APP_INSTALLED_ALL_M9: 211,
            APP_IGNORE_UPDATE: 212,
            APP_IGNORE_UPDATE_LIST: 213,
            APP_COLLECTION_ACTION: 4001,
            APP_COLLECTION_STATUS: 4002,
            APP_ORDER: 1127,
            APP_FOLLOW: 1129,
            APP_UNFOLLOW: 1130,
            APP_SPECIAL: 1131,
            APP_SPECIAL_ORDER: 1132,
            APP_COMMENT_DETAIL: 1133,
            LOGIN_CHECK_STATUS: 12,
            LOGIN: 13,
            LOGIN_BIND_TAOBAO: 14,
            SHOW_PAGE_SSO: 315,
            JIFENBAO_PAGE: 16,
            NEW_PAGE: 1110,
            USER_IS_NEW: 316,
            SHARE: 15,
            SHARE_MOMENTS: 17,
            SHARE_SYS: 618,
            SHARE_IMG: 1125,
            SYSTEM_INFO: 101,
            CLIENT_INFO: 102,
            OPEN_ROUTE_PAGE: 104,
            NETWORK_TYPE: 3001,
            TOAST: 1101,
            POPUP: 1102,
            SHAKE: 103,
            INPUT_KEYBOARD: 1112,
            SWITCH_TITLE: 1114,
            HIDE_LOADING: 1115,
            FULL_SCREEN: 1116,
            GAME_ORDER_LOGIN: 1117,
            GAME_ORDER_RECEIVE: 1118,
            GAME_ORDER_SUBMIT: 1119,
            GAME_ASSISTANT: 1122,
            OPEN_ANSWER_ASSISTANT: 1123,
            CHECK_FLOW_INFO: 1124,
            OPEN_GAME_URL: 1128,
            SCREEN_CAPTURE: 1105,
            SCREEN_CAPTURE_DP: 1126,
            EXIT_PAGE: 1108,
            STORE_KEY_VALUE_GET: 703,
            STORE_KEY_VALUE_SET: 704,
            EVENT: 1109,
            PAY_ZFB: 901,
            PAY_ZFB_CALLBACK: 3002,
            ILLEGAL: -1
        },
        appStatus: {
            unknown: 0,
            undownload: 2,
            downloading: 4,
            downloadPause: 8,
            downloadComplete: 16,
            installing: 32,
            latestInstalled: 64,
            oldVerInstalled: 128,
            patchInstalled: 256,
            uncompressable: 512,
            uncompressing: 1024
        },
        resourceType: {soft: 0, game: 1},
        loginType: {TAOBAO: 3}
    }
}, function (e, t, n) {
    "use strict";
    void 0 === window.console && (window.console = {
        log: function () {
        }, warn: function () {
        }
    });
    var o = n(2), r = function () {
        var e = {}, t = window.ppAJSClient;
        e._methodId = o.methodId, e._appStatus = o.appStatus, e._resourceType = o.resourceType, e._loginType = o.loginType, e.available = e.avaliable = function () {
            return void 0 !== t
        }, e.ApiProtocol = function (e, n, o) {
            var r = o;
            if ("undefined" == typeof t || !t.callAndroidMethod) return console.warn("ppAJSClient not exist or ppAJSClient.callAndroidMethod is undefined. methodId:" + e), void console.log(n);
            if ("function" == typeof o) {
                "undefined" == typeof window.pca && (window.pca = {});
                var i = parseInt(1e4 * Math.random()) + "" + parseInt(1e4 * Math.random());
                r = "callback_" + e + "_" + (new Date).getTime() + i, window.pca[r] = o, r = "pca." + r
            }
            for (var a in n) !n.hasOwnProperty(a) || null !== n[a] && void 0 !== n[a] && "" !== n[a] || delete n[a];
            var s = {key_method_id: e, key_js_callback: 1, key_callback_method: r || "", key_data: n, key_tpdata: ""};
            t.callAndroidMethod(JSON.stringify(s))
        };
        var n = [], r = [];
        return e.listener = {
            set: function (e, t) {
                n[e] = t
            }, all: function (e) {
                r.push(e)
            }
        }, "object" == typeof t && (t.callFromAndroid = function (e) {
            try {
                var t = parseInt(e.key_method_id);
                if ("function" == typeof n[t] && n[t](e), "object" == typeof r) for (var o = 0, i = r.length; o < i; o++) r[o](e)
            } catch (e) {
                console.warn("e:" + e)
            }
        }), e
    }();
    r.available() && r.ApiProtocol(o.methodId.HIDE_LOADING), window.Pca = r, void 0 === window.pca && (window.pca = r), e.exports = r
}, function (e, t, n) {
    /**!
     * URL帮助类
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   陈精任 <jingren.cjr@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/89291)
     */
    "use strict";
    var o = n(1);
    o.getQueryString = function (e, t) {
        var n = "", o = "";
        if ("undefined" != typeof t) {
            var r = t.indexOf("#") !== -1 ? t.indexOf("#") : t.length;
            n = t.substring(t.indexOf("?"), r), o = t.substring(r, t.length)
        } else n = window.location.search, o = window.location.hash;
        var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), a = (n || o).substr(1).match(i);
        return null != a ? decodeURIComponent(a[2]) : ""
    }, o.delQueryString = function (e, t) {
        var n = "";
        return "undefined" != typeof t ? n = e + "=" + encodeURIComponent(o.getQueryString(e, t)) : (t = window.location.href, n = e + "=" + encodeURIComponent(o.getQueryString(e))), t.indexOf("?" + n) !== -1 ? (t = t.replace(n + "&", "").replace(n, ""), "?" === t[t.length - 1] && (t = t.replace("?", "")), t.indexOf("?#") !== -1 && (t = t.replace("?#", "#"))) : t = t.replace("&" + n, ""), t
    }, o.queryFormat = function (e, t) {
        function n(e) {
            return null !== e && void 0 !== e && "" !== e
        }

        if ("string" != typeof e && (e = ""), "object" == typeof t) {
            var o = e.indexOf("#") < 0 ? "" : e.substring(e.indexOf("#")),
                r = e.substring(0, e.indexOf("?") < 0 ? e.length : e.indexOf("?")),
                i = e.substr(r.length + 1, e.length - r.length - o.length - 1);
            o && (r = r.substring(0, r.indexOf("#") < 0 ? r.length : r.indexOf("#")));
            var a = i.split("&").filter(function (e) {
                return "" !== e
            }).map(function (e) {
                return e.split("=")
            });
            for (var s in t) if (t.hasOwnProperty(s) && n(t[s])) {
                for (var c = !1, u = 0; u < a.length; u++) a[u][0] === s && (a[u][1] = encodeURIComponent(t[s]), c = !0);
                c || a.push([s, encodeURIComponent(t[s])])
            }
            return a.length > 0 && (i = "?" + a.map(function (e) {
                return e.join("=")
            }).join("&")), r + i + o
        }
        return e
    }, e.exports = o
}, function (e, t, n) {
    /**!
     * 平台
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   陈精任 <jingren.cjr@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/89291)
     */

    "use strict";
    var o = n(1), r = n(9), i = navigator.userAgent.toLowerCase(), a = {isInPP: !1, isInNewWdj: !1};
    o.ua = {
        toString: function () {
            return i
        },
        weixin: i.indexOf("micromessenger") !== -1,
        uc: i.indexOf("ucbrowser") !== -1,
        ucweb: i.indexOf("ucweb") !== -1,
        android: i.indexOf("android") !== -1,
        ipad: i.indexOf("ipad") !== -1,
        iphone: i.indexOf("iphone") !== -1,
        ios: i.indexOf("ipad") !== -1 || i.indexOf("iphone") !== -1 || i.indexOf("ipod") !== -1
    }, o.getPlatform = function () {
        var e = "unkonw";
        return i.indexOf("windows") > -1 && (e = "windows"), i.indexOf("windows nt") > -1 && (e = "windows"), i.indexOf("linux") > -1 && (e = "linux"), i.indexOf("mac") > -1 && (e = "mac"), i.indexOf("ipod") > -1 && (e = "iPod"), i.indexOf("ipad") > -1 && (e = "iPad"), i.indexOf("iphone") > -1 && (e = "iPhone"), i.indexOf("android") > -1 && (e = "android"), i.indexOf("iphone") > -1 && i.indexOf("micromessenger") > -1 && (e = "iphone_weChat"), i.indexOf("ipad") > -1 && i.indexOf("micromessenger") > -1 && (e = "ipad_weChat"), i.indexOf("android") > -1 && i.indexOf("micromessenger") > -1 && (e = "android_weChat"), e
    }, o.clientType = function () {
        var e = "wechat", t = "browser", n = "ppa", r = "ppyy", a = "ppzb", s = "ppplugin", c = "wdj",
            u = o.getPlatform();
        return u = window.StatLoggerInterface ? n : void 0 !== window.ppAJSClient ? s : u.indexOf("weChat") > -1 ? e : i.indexOf("pphelperns") !== -1 ? r : i.indexOf("ppappinstallzb") !== -1 ? a : window.campaignPlugin ? c : t
    }, o.getOs = function () {
        return o.ua.android ? "android" : o.ua.ios ? "ios" : "other"
    }, o.getBrowser = function () {
        var e = "unknown";
        return i.indexOf("ucweb") > -1 || i.indexOf("ucbrowser") > -1 ? e = "UC" : i.indexOf("qqbrowser") > -1 ? e = "QQ" : i.indexOf("baidubrowser") > -1 ? e = "Baidu" : i.indexOf("mxios") > -1 ? e = "Maxthon" : i.indexOf("qhbrowser") > -1 ? e = "360" : i.indexOf("opios") > -1 ? e = "Opera" : i.indexOf("firefox") > -1 || i.indexOf("fxios") > -1 ? e = "Firefox" : i.indexOf("quark") > -1 ? e = "Quark" : i.indexOf("micromessenger") > -1 ? e = "weChat" : i.indexOf("msie") > -1 || i.indexOf("iemobile") > -1 ? e = "IE" : i.indexOf("chrome") > -1 || i.indexOf("crios") > -1 ? e = "Chrome" : i.indexOf("safari") > -1 && (e = "Safari"), e
    }, o.browserType = o.getBrowser(), o.isInUCBrowser = function () {
        var e = i.indexOf("ucbrowser") > -1 && i.split("ucbrowser/")[1].split(" ")[0], t = !1;
        if (!e) try {
            e = document.cookie.split(" ve=")[1].split(" ")[0]
        } catch (e) {
        }
        return window.ucweb && e && (e.match(/^9\.9\.[3-9]/) || e.match(/^\d{2,}\.\d+\.\d+/)) && (t = !0), t
    }, o.isInAndroidClient = function () {
        return "ppa" === o.clientType()
    }, o.isInPPPlugin = function () {
        return "ppplugin" === o.clientType()
    }, o.isInIOSClient = function () {
        return "ppyy" === o.clientType() || "ppzb" === o.clientType()
    }, o.isInWdjClient = function () {
        return "wdj" === o.clientType()
    }, o.isInWdjOrPPClient = function (e) {
        !o.isInAndroidClient() || a.isInPP || a.isInNewWdj ? e(a) : r.getClientInfo(function (t) {
            t && t.key_data && (2011 === t.key_data.productId ? a.isInNewWdj = !0 : 2001 === t.key_data.productId && (a.isInPP = !0)), e(a)
        })
    }, o.isInClient = function () {
        return o.isInAndroidClient() || o.isInIOSClient() || o.isInWdjClient()
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    n(37), n(36), n(38), n(39), e.exports = n(7)
}, function (e, t) {
    "use strict";
    var n = function () {
        function e(e) {
            return null == e ? String(e) : $[V.call(e)] || "object"
        }

        function t(t) {
            return "function" == e(t)
        }

        function n(e) {
            return null != e && e == e.window
        }

        function o(e) {
            return null != e && e.nodeType == e.DOCUMENT_NODE
        }

        function r(t) {
            return "object" == e(t)
        }

        function i(e) {
            return r(e) && !n(e) && Object.getPrototypeOf(e) == Object.prototype
        }

        function a(e) {
            var t = !!e && "length" in e && e.length, o = T.type(e);
            return "function" != o && !n(e) && ("array" == o || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function s(e) {
            return C.call(e, function (e) {
                return null != e
            })
        }

        function c(e) {
            return e.length > 0 ? T.fn.concat.apply([], e) : e
        }

        function u(e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function l(e) {
            return e in D ? D[e] : D[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
        }

        function p(e, t) {
            return "number" != typeof t || L[u(e)] ? t : t + "px"
        }

        function d(e) {
            var t, n;
            return R[e] || (t = N.createElement(e), N.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), R[e] = n), R[e]
        }

        function f(e) {
            return "children" in e ? O.call(e.children) : T.map(e.childNodes, function (e) {
                if (1 == e.nodeType) return e
            })
        }

        function h(e, t) {
            var n, o = e ? e.length : 0;
            for (n = 0; n < o; n++) this[n] = e[n];
            this.length = o, this.selector = t || ""
        }

        function g(e, t, n) {
            for (x in t) n && (i(t[x]) || J(t[x])) ? (i(t[x]) && !i(e[x]) && (e[x] = {}), J(t[x]) && !J(e[x]) && (e[x] = []), g(e[x], t[x], n)) : t[x] !== S && (e[x] = t[x])
        }

        function m(e, t) {
            return null == t ? T(e) : T(e).filter(t)
        }

        function _(e, n, o, r) {
            return t(n) ? n.call(e, o, r) : n
        }

        function v(e, t, n) {
            null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
        }

        function y(e, t) {
            var n = e.className || "", o = n && n.baseVal !== S;
            return t === S ? o ? n.baseVal : n : void(o ? n.baseVal = t : e.className = t)
        }

        function w(e) {
            try {
                return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? T.parseJSON(e) : e) : e
            } catch (t) {
                return e
            }
        }

        function b(e, t) {
            t(e);
            for (var n = 0, o = e.childNodes.length; n < o; n++) b(e.childNodes[n], t)
        }

        var S, x, T, E, A, I, P = [], k = P.concat, C = P.filter, O = P.slice, N = window.document, R = {}, D = {},
            L = {"column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1},
            M = /^\s*<(\w+|!)[^>]*>/, j = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            U = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, F = /^(?:body|html)$/i,
            B = /([A-Z])/g, H = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            W = ["after", "prepend", "before", "append"], G = N.createElement("table"), q = N.createElement("tr"),
            Q = {tr: N.createElement("tbody"), tbody: G, thead: G, tfoot: G, td: q, th: q, "*": N.createElement("div")},
            z = /^[\w-]*$/, $ = {}, V = $.toString, X = {}, Y = N.createElement("div"), K = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            }, J = Array.isArray || function (e) {
                return e instanceof Array
            };
        return X.matches = function (e, t) {
            if (!t || !e || 1 !== e.nodeType) return !1;
            var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
            if (n) return n.call(e, t);
            var o, r = e.parentNode, i = !r;
            return i && (r = Y).appendChild(e), o = ~X.qsa(r, t).indexOf(e), i && Y.removeChild(e), o
        }, A = function (e) {
            return e.replace(/-+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : ""
            })
        }, I = function (e) {
            return C.call(e, function (t, n) {
                return e.indexOf(t) == n
            })
        }, X.fragment = function (e, t, n) {
            var o, r, a;
            return j.test(e) && (o = T(N.createElement(RegExp.$1))), o || (e.replace && (e = e.replace(U, "<$1></$2>")), t === S && (t = M.test(e) && RegExp.$1), t in Q || (t = "*"), a = Q[t], a.innerHTML = "" + e, o = T.each(O.call(a.childNodes), function () {
                a.removeChild(this)
            })), i(n) && (r = T(o), T.each(n, function (e, t) {
                H.indexOf(e) > -1 ? r[e](t) : r.attr(e, t)
            })), o
        }, X.Z = function (e, t) {
            return new h(e, t)
        }, X.isZ = function (e) {
            return e instanceof X.Z
        }, X.init = function (e, n) {
            var o;
            if (!e) return X.Z();
            if ("string" == typeof e) if (e = e.trim(), "<" == e[0] && M.test(e)) o = X.fragment(e, RegExp.$1, n), e = null; else {
                if (n !== S) return T(n).find(e);
                o = X.qsa(N, e)
            } else {
                if (t(e)) return T(N).ready(e);
                if (X.isZ(e)) return e;
                if (J(e)) o = s(e); else if (r(e)) o = [e], e = null; else if (M.test(e)) o = X.fragment(e.trim(), RegExp.$1, n), e = null; else {
                    if (n !== S) return T(n).find(e);
                    o = X.qsa(N, e)
                }
            }
            return X.Z(o, e)
        }, T = function (e, t) {
            return X.init(e, t)
        }, T.extend = function (e) {
            var t, n = O.call(arguments, 1);
            return "boolean" == typeof e && (t = e, e = n.shift()), n.forEach(function (n) {
                g(e, n, t)
            }), e
        }, X.qsa = function (e, t) {
            var n, o = "#" == t[0], r = !o && "." == t[0], i = o || r ? t.slice(1) : t, a = z.test(i);
            return e.getElementById && a && o ? (n = e.getElementById(i)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : O.call(a && !o && e.getElementsByClassName ? r ? e.getElementsByClassName(i) : e.getElementsByTagName(t) : e.querySelectorAll(t))
        }, T.contains = N.documentElement.contains ? function (e, t) {
            return e !== t && e.contains(t)
        } : function (e, t) {
            for (; t && (t = t.parentNode);) if (t === e) return !0;
            return !1
        }, T.type = e, T.isFunction = t, T.isWindow = n, T.isArray = J, T.isPlainObject = i, T.isEmptyObject = function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, T.isNumeric = function (e) {
            var t = Number(e), n = typeof e;
            return null != e && "boolean" != n && ("string" != n || e.length) && !isNaN(t) && isFinite(t) || !1
        }, T.inArray = function (e, t, n) {
            return P.indexOf.call(t, e, n)
        }, T.camelCase = A, T.trim = function (e) {
            return null == e ? "" : String.prototype.trim.call(e)
        }, T.uuid = 0, T.support = {}, T.expr = {}, T.noop = function () {
        }, T.map = function (e, t) {
            var n, o, r, i = [];
            if (a(e)) for (o = 0; o < e.length; o++) n = t(e[o], o), null != n && i.push(n); else for (r in e) n = t(e[r], r), null != n && i.push(n);
            return c(i)
        }, T.each = function (e, t) {
            var n, o;
            if (a(e)) {
                for (n = 0; n < e.length; n++) if (t.call(e[n], n, e[n]) === !1) return e
            } else for (o in e) if (t.call(e[o], o, e[o]) === !1) return e;
            return e
        }, T.grep = function (e, t) {
            return C.call(e, t)
        }, window.JSON && (T.parseJSON = JSON.parse), T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            $["[object " + t + "]"] = t.toLowerCase()
        }), T.fn = {
            constructor: X.Z,
            length: 0,
            forEach: P.forEach,
            reduce: P.reduce,
            push: P.push,
            sort: P.sort,
            splice: P.splice,
            indexOf: P.indexOf,
            concat: function () {
                var e, t, n = [];
                for (e = 0; e < arguments.length; e++) t = arguments[e], n[e] = X.isZ(t) ? t.toArray() : t;
                return k.apply(X.isZ(this) ? this.toArray() : this, n)
            },
            map: function (e) {
                return T(T.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return T(O.apply(this, arguments))
            },
            ready: function (e) {
                if ("complete" === N.readyState || "loading" !== N.readyState && !N.documentElement.doScroll) setTimeout(function () {
                    e(T)
                }, 0); else {
                    var t = function t() {
                        N.removeEventListener("DOMContentLoaded", t, !1), window.removeEventListener("load", t, !1), e(T)
                    };
                    N.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("load", t, !1)
                }
                return this
            },
            get: function (e) {
                return e === S ? O.call(this) : this[e >= 0 ? e : e + this.length]
            },
            toArray: function () {
                return this.get()
            },
            size: function () {
                return this.length
            },
            remove: function () {
                return this.each(function () {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function (e) {
                return P.every.call(this, function (t, n) {
                    return e.call(t, n, t) !== !1
                }), this
            },
            filter: function (e) {
                return t(e) ? this.not(this.not(e)) : T(C.call(this, function (t) {
                    return X.matches(t, e)
                }))
            },
            add: function (e, t) {
                return T(I(this.concat(T(e, t))))
            },
            is: function (e) {
                return this.length > 0 && X.matches(this[0], e)
            },
            not: function (e) {
                var n = [];
                if (t(e) && e.call !== S) this.each(function (t) {
                    e.call(this, t) || n.push(this)
                }); else {
                    var o = "string" == typeof e ? this.filter(e) : a(e) && t(e.item) ? O.call(e) : T(e);
                    this.forEach(function (e) {
                        o.indexOf(e) < 0 && n.push(e)
                    })
                }
                return T(n)
            },
            has: function (e) {
                return this.filter(function () {
                    return r(e) ? T.contains(this, e) : T(this).find(e).size()
                })
            },
            eq: function (e) {
                return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
            },
            first: function () {
                var e = this[0];
                return e && !r(e) ? e : T(e)
            },
            last: function () {
                var e = this[this.length - 1];
                return e && !r(e) ? e : T(e)
            },
            find: function (e) {
                var t, n = this;
                return t = e ? "object" == typeof e ? T(e).filter(function () {
                    var e = this;
                    return P.some.call(n, function (t) {
                        return T.contains(t, e)
                    })
                }) : 1 == this.length ? T(X.qsa(this[0], e)) : this.map(function () {
                    return X.qsa(this, e)
                }) : T()
            },
            closest: function (e, t) {
                var n = [], r = "object" == typeof e && T(e);
                return this.each(function (i, a) {
                    for (; a && !(r ? r.indexOf(a) >= 0 : X.matches(a, e));) a = a !== t && !o(a) && a.parentNode;
                    a && n.indexOf(a) < 0 && n.push(a)
                }), T(n)
            },
            parents: function (e) {
                for (var t = [], n = this; n.length > 0;) n = T.map(n, function (e) {
                    if ((e = e.parentNode) && !o(e) && t.indexOf(e) < 0) return t.push(e), e
                });
                return m(t, e)
            },
            parent: function (e) {
                return m(I(this.pluck("parentNode")), e)
            },
            children: function (e) {
                return m(this.map(function () {
                    return f(this)
                }), e)
            },
            contents: function () {
                return this.map(function () {
                    return this.contentDocument || O.call(this.childNodes)
                })
            },
            siblings: function (e) {
                return m(this.map(function (e, t) {
                    return C.call(f(t.parentNode), function (e) {
                        return e !== t
                    })
                }), e)
            },
            empty: function () {
                return this.each(function () {
                    this.innerHTML = ""
                })
            },
            pluck: function (e) {
                return T.map(this, function (t) {
                    return t[e]
                })
            },
            show: function () {
                return this.each(function () {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = d(this.nodeName))
                })
            },
            replaceWith: function (e) {
                return this.before(e).remove()
            },
            wrap: function (e) {
                var n = t(e);
                if (this[0] && !n) var o = T(e).get(0), r = o.parentNode || this.length > 1;
                return this.each(function (t) {
                    T(this).wrapAll(n ? e.call(this, t) : r ? o.cloneNode(!0) : o)
                })
            },
            wrapAll: function (e) {
                if (this[0]) {
                    T(this[0]).before(e = T(e));
                    for (var t; (t = e.children()).length;) e = t.first();
                    T(e).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                var n = t(e);
                return this.each(function (t) {
                    var o = T(this), r = o.contents(), i = n ? e.call(this, t) : e;
                    r.length ? r.wrapAll(i) : o.append(i)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    T(this).replaceWith(T(this).children())
                }), this
            },
            clone: function () {
                return this.map(function () {
                    return this.cloneNode(!0)
                })
            },
            hide: function () {
                return this.css("display", "none")
            },
            toggle: function (e) {
                return this.each(function () {
                    var t = T(this);
                    (e === S ? "none" == t.css("display") : e) ? t.show() : t.hide()
                })
            },
            prev: function (e) {
                return T(this.pluck("previousElementSibling")).filter(e || "*")
            },
            next: function (e) {
                return T(this.pluck("nextElementSibling")).filter(e || "*")
            },
            html: function (e) {
                return 0 in arguments ? this.each(function (t) {
                    var n = this.innerHTML;
                    T(this).empty().append(_(this, e, t, n))
                }) : 0 in this ? this[0].innerHTML : null
            },
            text: function (e) {
                return 0 in arguments ? this.each(function (t) {
                    var n = _(this, e, t, this.textContent);
                    this.textContent = null == n ? "" : "" + n
                }) : 0 in this ? this.pluck("textContent").join("") : null
            },
            attr: function (e, t) {
                var n;
                return "string" != typeof e || 1 in arguments ? this.each(function (n) {
                    if (1 === this.nodeType) if (r(e)) for (x in e) v(this, x, e[x]); else v(this, e, _(this, t, n, this.getAttribute(e)))
                }) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(e)) ? n : S
            },
            removeAttr: function (e) {
                return this.each(function () {
                    1 === this.nodeType && e.split(" ").forEach(function (e) {
                        v(this, e)
                    }, this)
                })
            },
            prop: function (e, t) {
                return e = K[e] || e, 1 in arguments ? this.each(function (n) {
                    this[e] = _(this, t, n, this[e])
                }) : this[0] && this[0][e]
            },
            removeProp: function (e) {
                return e = K[e] || e, this.each(function () {
                    delete this[e]
                })
            },
            data: function e(t, n) {
                var o = "data-" + t.replace(B, "-$1").toLowerCase(),
                    e = 1 in arguments ? this.attr(o, n) : this.attr(o);
                return null !== e ? w(e) : S
            },
            val: function (e) {
                return 0 in arguments ? (null == e && (e = ""), this.each(function (t) {
                    this.value = _(this, e, t, this.value)
                })) : this[0] && (this[0].multiple ? T(this[0]).find("option").filter(function () {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function (e) {
                if (e) return this.each(function (t) {
                    var n = T(this), o = _(this, e, t, n.offset()), r = n.offsetParent().offset(),
                        i = {top: o.top - r.top, left: o.left - r.left};
                    "static" == n.css("position") && (i.position = "relative"), n.css(i)
                });
                if (!this.length) return null;
                if (N.documentElement !== this[0] && !T.contains(N.documentElement, this[0])) return {top: 0, left: 0};
                var t = this[0].getBoundingClientRect();
                return {
                    left: t.left + window.pageXOffset,
                    top: t.top + window.pageYOffset,
                    width: Math.round(t.width),
                    height: Math.round(t.height)
                }
            },
            css: function t(n, o) {
                if (arguments.length < 2) {
                    var r = this[0];
                    if ("string" == typeof n) {
                        if (!r) return;
                        return r.style[A(n)] || getComputedStyle(r, "").getPropertyValue(n)
                    }
                    if (J(n)) {
                        if (!r) return;
                        var i = {}, a = getComputedStyle(r, "");
                        return T.each(n, function (e, t) {
                            i[t] = r.style[A(t)] || a.getPropertyValue(t)
                        }), i
                    }
                }
                var t = "";
                if ("string" == e(n)) o || 0 === o ? t = u(n) + ":" + p(n, o) : this.each(function () {
                    this.style.removeProperty(u(n))
                }); else for (x in n) n[x] || 0 === n[x] ? t += u(x) + ":" + p(x, n[x]) + ";" : this.each(function () {
                    this.style.removeProperty(u(x))
                });
                return this.each(function () {
                    this.style.cssText += ";" + t
                })
            },
            index: function (e) {
                return e ? this.indexOf(T(e)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function (e) {
                return !!e && P.some.call(this, function (e) {
                    return this.test(y(e))
                }, l(e))
            },
            addClass: function (e) {
                return e ? this.each(function (t) {
                    if ("className" in this) {
                        E = [];
                        var n = y(this), o = _(this, e, t, n);
                        o.split(/\s+/g).forEach(function (e) {
                            T(this).hasClass(e) || E.push(e)
                        }, this), E.length && y(this, n + (n ? " " : "") + E.join(" "))
                    }
                }) : this
            },
            removeClass: function (e) {
                return this.each(function (t) {
                    if ("className" in this) {
                        if (e === S) return y(this, "");
                        E = y(this), _(this, e, t, E).split(/\s+/g).forEach(function (e) {
                            E = E.replace(l(e), " ")
                        }), y(this, E.trim())
                    }
                })
            },
            toggleClass: function (e, t) {
                return e ? this.each(function (n) {
                    var o = T(this), r = _(this, e, n, y(this));
                    r.split(/\s+/g).forEach(function (e) {
                        (t === S ? !o.hasClass(e) : t) ? o.addClass(e) : o.removeClass(e)
                    })
                }) : this
            },
            scrollTop: function (e) {
                if (this.length) {
                    var t = "scrollTop" in this[0];
                    return e === S ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function () {
                        this.scrollTop = e
                    } : function () {
                        this.scrollTo(this.scrollX, e)
                    })
                }
            },
            scrollLeft: function (e) {
                if (this.length) {
                    var t = "scrollLeft" in this[0];
                    return e === S ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function () {
                        this.scrollLeft = e
                    } : function () {
                        this.scrollTo(e, this.scrollY)
                    })
                }
            },
            position: function () {
                if (this.length) {
                    var e = this[0], t = this.offsetParent(), n = this.offset(),
                        o = F.test(t[0].nodeName) ? {top: 0, left: 0} : t.offset();
                    return n.top -= parseFloat(T(e).css("margin-top")) || 0, n.left -= parseFloat(T(e).css("margin-left")) || 0, o.top += parseFloat(T(t[0]).css("border-top-width")) || 0, o.left += parseFloat(T(t[0]).css("border-left-width")) || 0, {
                        top: n.top - o.top,
                        left: n.left - o.left
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || N.body; e && !F.test(e.nodeName) && "static" == T(e).css("position");) e = e.offsetParent;
                    return e
                })
            }
        }, T.fn.detach = T.fn.remove, ["width", "height"].forEach(function (e) {
            var t = e.replace(/./, function (e) {
                return e[0].toUpperCase()
            });
            T.fn[e] = function (r) {
                var i, a = this[0];
                return r === S ? n(a) ? a["inner" + t] : o(a) ? a.documentElement["scroll" + t] : (i = this.offset()) && i[e] : this.each(function (t) {
                    a = T(this), a.css(e, _(this, r, t, a[e]()))
                })
            }
        }), W.forEach(function (t, n) {
            var o = n % 2;
            T.fn[t] = function () {
                var t, r, i = T.map(arguments, function (n) {
                    var o = [];
                    return t = e(n), "array" == t ? (n.forEach(function (e) {
                        return e.nodeType !== S ? o.push(e) : T.zepto.isZ(e) ? o = o.concat(e.get()) : void(o = o.concat(X.fragment(e)))
                    }), o) : "object" == t || null == n ? n : X.fragment(n)
                }), a = this.length > 1;
                return i.length < 1 ? this : this.each(function (e, t) {
                    r = o ? t : t.parentNode, t = 0 == n ? t.nextSibling : 1 == n ? t.firstChild : 2 == n ? t : null;
                    var s = T.contains(N.documentElement, r);
                    i.forEach(function (e) {
                        if (a) e = e.cloneNode(!0); else if (!r) return T(e).remove();
                        r.insertBefore(e, t), s && b(e, function (e) {
                            if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                var t = e.ownerDocument ? e.ownerDocument.defaultView : window;
                                t.eval.call(t, e.innerHTML)
                            }
                        })
                    })
                })
            }, T.fn[o ? t + "To" : "insert" + (n ? "Before" : "After")] = function (e) {
                return T(e)[t](this), this
            }
        }), X.Z.prototype = h.prototype = T.fn, X.uniq = I, X.deserializeValue = w, T.zepto = X, T
    }();
    window.Zepto = n, void 0 === window.$ && (window.$ = n), e.exports = n
}, function (e, t, n) {
    "use strict";
    n(9), n(29), n(28), n(25), n(30), n(26), n(20), n(31), n(27), e.exports = n(3)
}, function (e, t, n) {
    "use strict";
    var o = n(2), r = n(3);
    r.getSysInfo = function (e) {
        r.ApiProtocol(o.methodId.SYSTEM_INFO, {}, e)
    }, r.getClientInfo = function (e) {
        r.ApiProtocol(o.methodId.CLIENT_INFO, {}, e)
    }, r.newPage = function (e, t, n, i) {
        r.ApiProtocol(o.methodId.NEW_PAGE, {url: e, title: t, level: n}, i)
    }, r.openRoutePage = function (e, t) {
        r.ApiProtocol(o.methodId.OPEN_ROUTE_PAGE, {router: e}, t)
    }, r.showPageSSO = function (e) {
        var t = {url: e};
        r.ApiProtocol(o.methodId.SHOW_PAGE_SSO, t)
    }, r.exit = function () {
        r.ApiProtocol(o.methodId.EXIT_PAGE, {})
    }, r.clearHistory = function () {
        r.ApiProtocol(o.methodId.EVENT, {event: 1})
    }, r.openInputKeyboard = function () {
        r.ApiProtocol(o.methodId.INPUT_KEYBOARD, {show: !0})
    }, r.closeInputKeyboard = function () {
        r.ApiProtocol(o.methodId.INPUT_KEYBOARD, {show: !1})
    }, r.screenCapture = function (e, t, n, i, a) {
        r.ApiProtocol(o.methodId.SCREEN_CAPTURE, {left: e, top: t, right: n, bottom: i, action: 0}, a)
    }, r.screenCaptureShare = function (e, t, n, i, a, s, c) {
        r.ApiProtocol(o.methodId.SCREEN_CAPTURE, {left: e, top: t, right: n, bottom: i, action: 1, msg: s}, c)
    }, r.screenCaptureDp = function (e, t, n, i, a) {
        r.ApiProtocol(o.methodId.SCREEN_CAPTURE_DP, {left: e, top: t, right: n, bottom: i}, a)
    }, r.shake = function (e) {
        r.ApiProtocol(o.methodId.SHAKE, {shake: e})
    }, r.switchTitle = function (e) {
        r.ApiProtocol(o.methodId.SWITCH_TITLE, {show: e})
    }, r.hideLoading = function () {
        r.ApiProtocol(o.methodId.HIDE_LOADING)
    }, r.fullScreen = function (e) {
        r.ApiProtocol(o.methodId.FULL_SCREEN, {isFullScreen: e})
    }, r.checkIsNewUser = function (e) {
        r.ApiProtocol(o.methodId.USER_IS_NEW, {}, e)
    }, e.exports = r
}, function (e, t) {
    "use strict";

    function n(e) {
        return "object" == typeof e && null !== e
    }

    var o = function (e) {
        return "[object Number]" === Object.prototype.toString.call(e)
    };
    t.isNumber = o, t.isNaN = function (e) {
        return o(e) && e !== +e
    }, t.isArray = function (e) {
        return Array.isArray ? Array.isArray(e) : Object.prototype.toString.call(e).toUpperCase().indexOf("ARRAY") !== -1
    }, t.noop = function (e) {
        return e || ""
    }, t.extend = function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }, t.shallowMerge = function (e, t, n) {
        for (var o in t) t.hasOwnProperty(o) && (n || void 0 === e[o]) && (e[o] = t[o])
    }, t.getSpm = function () {
        var e = "", n = "", o = window.goldlog || {}, r = o.spmAb || o.spm_ab;
        return r && t.isArray(r) && (e = r[0], r[1] && (n = r[1])), {a: e, b: n}
    }, t.unifyErrorMsg = function (e) {
        return /^script error\.?$/i.test(e) ? "Script error" : e
    }, t.getScreenSize = function () {
        return window.screen.width + "x" + window.screen.height
    }, t.generateIdentifier = function (e) {
        return [e.type, e.uid, e.page, e.msg || "", e.ajaxurl || ""].join("_")
    }, t.addEvent = function (e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, function () {
            return n.call(e, window.event)
        })
    }, t.isError = function (e) {
        var t = {}.toString.call(e);
        return n(e) && "[object Error]" === t || "[object Exception]" === t || e instanceof Error
    }
}, function (e, t, n) {
    "use strict";
    var o = n(6), r = n(13), i = n(5);
    r.downloadApp = function (e, t) {
        r.goto(r._dhost + "/download/apk?appId=" + e, t)
    }, r.getAppDUrl = function (e, t, n) {
        r.get("/download/url", {appId: e}, t, n)
    }, r.getAppDUrlAndLog = function (e, t, n, o) {
        r.get("/download/url/dot?appId=" + e + "&apprd=" + e, t, n, o)
    }, r.downloadPP = function (e) {
        !e && (e = "PP_27"), r.goto(r._dhost + "/pp/apk", {channel: e})
    }, r.getPPUrl = function (e, t, n) {
        !e && (e = "PP_27"), r.get("/pp/url", {channel: e}, function (e) {
            e && e.url ? t(e.url) : n({state: {msg: "empty"}})
        }, function (e) {
            e && e.code === r._resCode.OK && e.data ? t(e.data) : n(e)
        })
    }, r.getAppDetailAndLog = function (e, t, n, o) {
        "object" != typeof t && (t = {}), !t.ch_src && (t.ch_src = "pp"), r.get("/StoreDetailController/detail?appId=" + e, t, n, o)
    }, r.getAppScore = function (e, t, n, o) {
        r.get("/StoreDetailController/score", {appId: e, versionId: t}, n, o)
    }, r.getAppCommentHot = function (e, t, n, o) {
        r.get("/StoreDetailController/comment", {appId: e, page: t}, n, o)
    }, r.listAppRecs = function (e, t, n) {
        r.get("/StoreDetailController/recs", {q: e}, t, n)
    }, r.listAppInLabel = function (e, t, n) {
        r.get("/StoreDetailController/subcates", {appId: e}, t, n)
    }, r.listSpecialsByAppId = function (e, t, n, o) {
        r.get("/StoreDetailController/specials", {appId: e, specialNum: t}, n, o)
    }, r.listAppsBySpecial = function (e, t, n, i) {
        var a = o.extend({}, {
            urlKey: "op.special.template.listApps",
            specialId: parseInt(e),
            svr: window.StatLoggerInterface ? 1 : 2
        }, i);
        // r.get("/api/proxyNew", a, t, n)
    }, r.listSpecialsAll = function (e, t, n, o) {
        e = parseInt(e) || 0, t = parseInt(t) || 15, r.get("/api/proxyNew", {
            urlKey: "op.special.template.getAllShowList",
            offset: e,
            count: t,
            svr: window.StatLoggerInterface ? 1 : 2
        }, n, o)
    }, r.getDetail = function (e, t, n) {
        var o = {urlKey: "resource.app.getDetail", appId: e};
        r.get("/api/proxy", o, t, n)
    }, r.listSpecialAndroid = function (e, t, n) {
        var o = {urlKey: "op.special.template.listApps", specialId: e, osVersion: 19};
        r.get("/api/proxyNew", o, t, n)
    }, r.listSpecialIOS = function (e, t, n) {
        var o = navigator.userAgent, a = /ipad/i.test(o) ? 2 : 1, s = 1;
        s = "ppzb" === i.clientType() ? 1 === a ? 2 : 8 : 1 === a ? 1 : 4;
        var c = {special_id: e, platform: s, device: a};
        r.get("/lucky/ios.special.get", c, t, n)
    }, r.listSpecialWdj = function (e, t, n) {
        var o = {special_id: e};
        r.get("/lucky/wdj.special.get", o, t, n)
    }, r.listAppFirst = function (e, t, n, o, i, a) {
        var s = {urlKey: "op.activiy.simpleActiviy.getList", type: e, offset: t, count: n, resourceType: o};
        r.post("/api/proxyNew", s, i, a)
    }, r.listMutiGameNews = function (e, t, n) {
        var o = {urlKey: "resource.app.getMutiGameNewsList", appIds: e};
        r.post("/api/proxyNew", o, t, n)
    }, r.listGuessLike = function (e, t, n, o) {
        var i = {urlKey: "op.rec.personality.listApps", offset: e, count: t};
        r.post("/api/proxyNew", i, n, o)
    }, r.listNewGame = function (e, t, n, o, i) {
        var a = {urlKey: "resource.game.getBetaList", dayBefore: e, dayAfter: t, count: n};
        r.post("/api/proxyNew", a, o, i)
    }, r.ucAppsBigData = function (e, t, n) {
        var o = {
            ch_src: e.ch_src || "pp_uc_smweb_rec",
            ch: e.ch || "default",
            arrange: e.arrange || 2,
            dataRoute: e.channel || 2,
            offset: e.offset || 0,
            count: e.count || 100
        };
        r.get("/uc/rec", o, t, n)
    }, e.exports = r
}, function (e, t) {
    "use strict";
    e.exports = {
        resCode: {
            OK: 2e6,
            QUOTA_FULL: 5090002,
            NOT_TAOBAO: 5050017,
            USER_UNAUTHENTICATED: 5000406,
            TIME_OUT: -1,
            PARAM_REQUIRED: -2
        }, ucParamStr: "frvecpeimemintnidnut"
    }
}, function (e, t, n) {
    "use strict";
    var o = n(12), r = n(17), i = n(4), a = {};
    a.get = function (e, t, n, o) {
        r.ajax("GET", e, t, {async: !0}, n, o)
    }, a.post = function (e, t, n, o) {
        r.ajax("POST", e, t, {async: !0}, n, o)
    }, a.postSync = function (e, t, n, o) {
        r.ajax("POST", e, t, {async: !1}, n, o)
    }, a.uploadFile = function (e, t, n, o, i) {
        var a = new FormData;
        a.append("file", t), "object" != typeof n && (n = {});
        for (var s in n) a.append(s, n[s]);
        r.ajaxForm(e, a, {async: !0}, o, i)
    }, a.goto = function (e, t) {
        t && "object" == typeof t || (t = {}), t.uc_param_str = o.ucParamStr, location.href = i.queryFormat(e, t)
    }, a._resCode = o.resCode, a._dhost = r._dhost, window.PPProxy = a, e.exports = a
}, function (e, t) {
    "use strict";

    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }

    function i(e) {
        if (p === clearTimeout) return clearTimeout(e);
        if ((p === o || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
        try {
            return p(e)
        } catch (t) {
            try {
                return p.call(null, e)
            } catch (t) {
                return p.call(this, e)
            }
        }
    }

    function a() {
        g && f && (g = !1, f.length ? h = f.concat(h) : m = -1, h.length && s())
    }

    function s() {
        if (!g) {
            var e = r(a);
            g = !0;
            for (var t = h.length; t;) {
                for (f = h, h = []; ++m < t;) f && f[m].run();
                m = -1, t = h.length
            }
            f = null, g = !1, i(e)
        }
    }

    function c(e, t) {
        this.fun = e, this.array = t
    }

    function u() {
    }

    var l, p, d = e.exports = {};
    !function () {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            p = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            p = o
        }
    }();
    var f, h = [], g = !1, m = -1;
    d.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new c(e, t)), 1 !== h.length || g || r(s)
    }, c.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.prependListener = u, d.prependOnceListener = u, d.listeners = function (e) {
        return []
    }, d.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, d.cwd = function () {
        return "/"
    }, d.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, d.umask = function () {
        return 0
    }
}, function (e, t, n) {
    var o, r = n(32);
    !function () {
        var i = function () {
            var e = {};
            return e.getChSrc = function () {
                return r.getQueryString("ch_src") || "pp"
            }, e.JSONParse = function (e, t) {
                var n = t || {};
                try {
                    n = JSON.parse(e)
                } catch (e) {
                }
                return n
            }, e.hasExDataKey = function (e, t) {
                var n = !1;
                if (!t) return n;
                for (var o in e) if (e[o].key.toLowerCase() === t) {
                    n = !0;
                    break
                }
                return n
            }, e
        }();
        this.Common = i, e.exports = i, o = function () {
            return i
        }.call(t, n, t, e), !(void 0 !== o && (e.exports = o))
    }()
}, function (e, t, n) {
    var o, r = n(6), i = n(19), a = n(4), s = (n(18).storage, n(8));
    !function () {
        var c = function () {
            function e() {
                for (var e = 0; e < r(u.targetClassName + ":not(.log-done)").length;) {
                    var t = r(u.targetClassName + ":not(.log-done)")[e], n = r(t);
                    n.offset().top < document.body.scrollTop + document.documentElement.clientHeight - u.navHeight ? (c.showLogCtr({
                        ch: p,
                        ch_src: d,
                        appId: n.data("appid"),
                        appName: n.data("name"),
                        position: Number(n.data("pos")) || n.index() || 0,
                        versionId: n.data("versionid"),
                        resType: 1 === Number(n.data("resourcetype")) ? "game" : "soft",
                        exd: "app",
                        recModel: n.data("recmodel"),
                        cpModel: c.getCpModel(n)
                    }), n.addClass("log-done")) : e++
                }
            }

            function t(e) {
                var t = [];
                if (!e) return t;
                var n = e.lastIndexOf("?");
                if (n > 0) {
                    var o = e.substring(n + 1), r = ["yingid=pp", "ch=pp"];
                    for (var i in r) if (o.indexOf(r[i]) !== -1) {
                        var a = o.split("&");
                        for (var s in a) {
                            var c = a[s].split("=");
                            2 == c.length && c[0] && c[1] && ("minSDK" === c[0] ? t[0] = c[1] : "size" === c[0] ? t[1] = c[1] : "md5" === c[0] ? t[2] = c[1] : "pkgType" === c[0] ? t[3] = c[1] : "data" === c[0] && (t[4] = c[1]))
                        }
                        break
                    }
                }
                return t
            }

            function n() {
                e()
            }

            function o() {
                r(window).bind("scroll", function () {
                    e()
                })
            }

            var c = {}, u = {navHeight: 0, targetClassName: ".ctl-li"}, l = 0, p = a.getQueryString("ch"),
                d = a.getQueryString("ch_src"), f = a.getQueryString("sid") || 0, h = a.getQueryString("pp_ctrPos"),
                g = a.getQueryString("pp_index"), m = a.getQueryString("pp_cardId"),
                _ = a.getQueryString("pp_cardType"), v = a.getQueryString("pp_cardGroup"),
                y = a.getQueryString("pushId") || "", w = a.getQueryString("pushAppType") || "",
                b = a.getQueryString("ab") || "";
            return i.getWinSize(function (e) {
                l = e.height
            }), c.init = function (e) {
                "object" == typeof e && (u.navHeight = e.navHeight || u.navHeight, u.targetClassName = e.targetClassName || u.targetClassName), n(), o()
            }, c.showLog = function (e) {
                var t = {
                    module: "web_page",
                    page: "web_page",
                    type: "pageview",
                    action: f,
                    keyword: location.href,
                    pushId: y,
                    pushAppType: w,
                    ab: b
                };
                "object" == typeof e && r.extend(t, e), s.log(t)
            }, c.showLogCtr = function (e) {
                var t = {ppCtrPos: h, ppIndex: g, ppCardId: m, ppCardType: _, ppCardGroup: v};
                t.ppCtrPos && e.appId && (t.ppCtrPos = t.ppCtrPos + "/" + e.appId), "object" == typeof e && r.extend(t, e), c.showLog(t)
            }, c.getCpModel = function (e) {
                if (e.attr("data-cpmodel")) return e.attr("data-cpmodel");
                var n = "-1", o = e.data("durl");
                if (o) {
                    n = "0";
                    try {
                        var r = t(o);
                        if (r.length > 3) {
                            var i = r[3];
                            i && parseInt(i) > 0 && (n = "1")
                        }
                    } catch (e) {
                    }
                }
                return e.attr("data-cpmodel", n), n
            }, c
        }();
        e.exports = c, o = function () {
            return c
        }.call(t, n, t, e), !(void 0 !== o && (e.exports = o))
    }()
}, function (e, t, n) {
    "use strict";
    var o = n(6), r = n(4), i = n(5), a = n(12), s = n(24);
    "object" != typeof sessionStorage && (sessionStorage = {});
    var c = function () {
        var e = {}, t = r.getQueryString("debug"), n = sessionStorage.debug || "prod", c = i.isInUCBrowser(), u = {
            prod: {
                host: "https:" === location.protocol ? "https://server-m.pp.cn" : "http://server.m.pp.cn",
                dhost: "https://server-m.pp.cn"
            },
            dev: {host: "http://androidppproxy.dev.uae.uc.cn", dhost: "http://androidppproxy.dev.uae.uc.cn"},
            test: {host: "http://androidppproxy.test2.uae.uc.cn", dhost: "http://androidppproxy.test2.uae.uc.cn"},
            testa: {
                host: "http://androidppproxyprea.test2.uae.uc.cn",
                dhost: "http://androidppproxyprea.test2.uae.uc.cn"
            },
            testb: {
                host: "http://androidppproxypreb.test2.uae.uc.cn",
                dhost: "http://androidppproxypreb.test2.uae.uc.cn"
            },
            testc: {
                host: "http://androidppproxyprec.test2.uae.uc.cn",
                dhost: "http://androidppproxyprec.test2.uae.uc.cn"
            },
            local: {host: "", dhost: ""}
        }, l = [];
        for (var p in u) u.hasOwnProperty(p) && l.push(p);
        l.indexOf(t) >= 0 ? n = sessionStorage.debug = t : "" !== t && (n = sessionStorage.debug = "prod");
        var d = u[n].host || u.prod.host, f = u[n].dhost || u.prod.dhost;
        return e.ajax = function (e, t, n, i, u, l) {
            return t = d + t, "object" != typeof i && (i = {async: !0}), n || (n = {}), "object" != typeof n ? void("function" == typeof l && l({
                data: {},
                state: {code: a.resCode.PARAM_REQUIRED, msg: "JSON参数错误"}
            })) : (c && !n.noUCParamStr && ("get" === e || "GET" === e ? n.uc_param_str = a.ucParamStr : t = r.queryFormat(t, {uc_param_str: a.ucParamStr})), void s.get(function (r) {
                var s = o.extend({}, n, r);
                for (var c in s) !s.hasOwnProperty(c) || null !== s[c] && void 0 !== s[c] && "" !== s[c] || delete s[c];
                o.ajax({
                    type: e,
                    url: t,
                    async: i.async,
                    dataType: "json",
                    data: s,
                    xhrFields: {withCredentials: !0},
                    success: function (e) {
                        e && !e.state && e.code && (e.state = {
                            code: e.code,
                            msg: e.msg
                        }), e && e.state && e.state.code === a.resCode.OK ? "function" == typeof u && u(e.data) : "function" == typeof l && l(e)
                    },
                    error: function (n, o, r) {
                        "function" == typeof l && l({
                            data: {},
                            state: {code: a.resCode.TIME_OUT, msg: "[" + t + "]请求超时"}
                        });
                        try {
                            window.PPTracker && window.PPTracker.log({
                                code: 2,
                                ajaxurl: t,
                                params: JSON.stringify(s),
                                msg: o + "(" + n.readyState + "):" + r,
                                c1: e,
                                c2: n.status
                            })
                        } catch (e) {
                        }
                    }
                })
            }))
        }, e.ajaxForm = function (e, t, n, i, u) {
            return e = d + e, "object" != typeof n && (n = {
                async: !0,
                noUCParamStr: !1
            }), t || (t = new FormData), "object" != typeof t ? void("function" == typeof u && u({
                data: {},
                state: {code: a.resCode.PARAM_REQUIRED, msg: "JSON参数错误"}
            })) : (c && !n.noUCParamStr && (e = r.queryFormat(e, {uc_param_str: a.ucParamStr})), void s.get(function (r) {
                for (var s in r) null !== r[s] && void 0 !== r[s] && "" !== r[s] && t.append(s, r[s]);
                o.ajax({
                    type: "POST",
                    url: e,
                    async: n.async,
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    data: t,
                    xhrFields: {withCredentials: !0},
                    success: function (e) {
                        e && !e.state && e.code && (e.state = {
                            code: e.code,
                            msg: e.msg
                        }), e && e.state && e.state.code === a.resCode.OK ? "function" == typeof i && i(e.data) : "function" == typeof u && u(e)
                    },
                    error: function (n, o, r) {
                        "function" == typeof u && u({
                            data: {}, state: {code: a.resCode.TIME_OUT, msg: "[" + e + "]请求超时"}
                        });
                        try {
                            window.PPTracker && window.PPTracker.log({
                                code: 2,
                                ajaxurl: e,
                                params: JSON.stringify(t),
                                msg: o + "(" + n.readyState + "):" + r,
                                c1: "post",
                                c2: n.status
                            })
                        } catch (e) {
                        }
                    }
                })
            }))
        }, e._dhost = f, e.sendBeacon = function (e, t, n, o) {
            if (e = d + e, t || (t = {}), "object" == typeof t) {
                c && !t.noUCParamStr && (e = r.queryFormat(e, {uc_param_str: a.ucParamStr}));
                try {
                    var i = new FormData;
                    for (var s in t) i.append(s, t[s]);
                    window.navigator.sendBeacon(e, i) ? "function" == typeof n && n() : "function" == typeof o && o()
                } catch (e) {
                    "function" == typeof o && o()
                }
            }
        }, e.UCSendBeacon = function (e, t, n, o) {
            e = d + e, t || (t = {}), "object" == typeof t && (c && !t.noUCParamStr && (e = r.queryFormat(e, {uc_param_str: a.ucParamStr})), ucapi.base.sendBeacon({
                url: e,
                data: t,
                success: function (e) {
                    n && n(e)
                },
                fail: function (e) {
                    o && o(e)
                }
            }))
        }, e
    }();
    e.exports = c
}, function (e, t, n) {
    /**!
     * 存储
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   徐闻东 <jingren.cjr@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/89291)
     */
    "use strict";
    "object" != typeof localStorage && (localStorage = {});
    var o = n(1);
    n(35), o.storage = {
        set: function (e, t) {
            e && (localStorage[e] = t, o.cookie.set(e, t, {path: "/", seconds: 2592e3}))
        }, get: function (e) {
            return e ? localStorage[e] || o.cookie.get(e) || "" : null
        }
    }, e.exports = o
}, function (e, t, n) {
    /**!
     * 浏览器客户端/DOM相关
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   陈精任 <jingren.cjr@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/89291)
     */
    "use strict";
    var o = n(1);
    o.getdomSize = function () {
        return {
            width: document.documentElement.offsetWidth || document.body.offsetWidth,
            height: document.documentElement.offsetHeight || document.body.offsetHeight,
            scrollT: document.documentElement.scrollTop || document.body.scrollTop
        }
    }, o.getWinSize = function (e, t) {
        var n = 0, r = 0;
        t = isNaN(parseInt(t)) ? 10 : parseInt(t), window.innerWidth ? r = window.innerWidth : document.body && document.body.clientWidth && (r = document.body.clientWidth), window.innerHeight ? n = window.innerHeight : document.body && document.body.clientHeight && (n = document.body.clientHeight), document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth && (n = document.documentElement.clientHeight, r = document.documentElement.clientWidth), t-- > 0 && (n <= 0 || r <= 0) ? setTimeout(function () {
            o.getWinSize(e, t)
        }, 200) : e({height: n, width: r})
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    var o = n(2), r = n(3);
    r.toast = function (e) {
        e && r.ApiProtocol(o.methodId.TOAST, {message: e})
    }, r.popup = function (e) {
        e && r.ApiProtocol(o.methodId.POPUP, {type: 2, dialStyle: 3, content: e, contentGravity: 2, action: 0})
    }, r.popupHtml = function (e) {
        e && r.ApiProtocol(o.methodId.POPUP, {type: 1, dialStyle: 3, content: e, contentGravity: 2, action: 0})
    }, r.alert = function (e, t, n, i) {
        t && (i = i || 1, r.ApiProtocol(o.methodId.POPUP, {
            type: 2,
            dialStyle: 2,
            title: e,
            content: t,
            comfirm: n,
            contentGravity: i,
            action: 0
        }))
    }, r.alertHtml = function (e, t, n, i) {
        t && (i = i || 1, r.ApiProtocol(o.methodId.POPUP, {
            type: 1,
            dialStyle: 2,
            title: e,
            content: t,
            comfirm: n,
            contentGravity: i,
            action: 0
        }))
    }, r.confirm = function (e, t, n, i, a) {
        t && (a = a || 1, r.ApiProtocol(o.methodId.POPUP, {
            type: 2,
            dialStyle: 1,
            title: e,
            content: t,
            comfirm: n,
            cancel: i,
            contentGravity: a,
            action: 0
        }))
    }, r.confirmHtml = function (e, t, n, i, a) {
        t && (a = a || 1, r.ApiProtocol(o.methodId.POPUP, {
            type: 1,
            dialStyle: 1,
            title: e,
            content: t,
            comfirm: n,
            cancel: i,
            contentGravity: a,
            action: 0
        }))
    }, r.closePopup = function () {
        r.ApiProtocol(o.methodId.POPUP, {action: 1})
    }, e.exports = r
}, function (e, t, n) {
    var o, r = n(8), i = n(16), a = n(23), s = n(4), c = n(5), u = n(15), l = n(11),
        p = s.getQueryString("debug") || "", d = sessionStorage.debug || "";
    "dev" === p || "test" === p || "testa" === p || "testb" === p || "testc" === p || "local" === p ? (d = p, sessionStorage.debug = p) : "" !== p && (sessionStorage.debug = "");
    var f = new a({debug: d});
    f.queryHash(), !function () {
        var a = function () {
            function e() {
                var e = navigator.userAgent.toLowerCase(), t = function () {
                    var t = ["", ""], n = "unkonw";
                    return e.indexOf("windows") > -1 && (t = e.match(/windows ([\d.]+)/), n = "windows"), e.indexOf("windows nt") > -1 && (t = e.match(/windows nt ([\d.]+)/), n = "windows"), e.indexOf("linux") > -1 && (t = e.match(/linux ([\d.]+)/), n = "linux"), e.indexOf("mac") > -1 && (t = e.match(/mac ([\d.]+)/), n = "mac"), e.indexOf("ipod") > -1 && (t = e.match(/ipod ([\d.]+)/), n = "iPod"), e.indexOf("ipad") > -1 && (t = e.match(/ipad ([\d.]+)/), n = "iPad"), e.indexOf("iphone") > -1 && (t = e.match(/iphone ([\d.]+)/), n = "iPhone"), e.indexOf("android") > -1 && (t = e.match(/android ([\d.]+)/), n = "android"), e.indexOf("iphone") > -1 && e.indexOf("micromessenger") > -1 && (t = e.match(/iphone ([\d.]+)/), n = "iphone_weChat"), e.indexOf("ipad") > -1 && e.indexOf("micromessenger") > -1 && (t = e.match(/ipad ([\d.]+)/), n = "ipad_weChat"), e.indexOf("android") > -1 && e.indexOf("micromessenger") > -1 && (t = e.match(/android ([\d.]+)/), n = "android_weChat"), n
                }();
                return t
            }

            function t() {
                $(".ctl-li:not(.init)").map(function (e, t) {
                    var o = $(t);
                    o.addClass("init").attr("data-pos", e);
                    var i = n(o);
                    window.AppStateController && "function" == typeof window.AppStateController.updateApp ? window.AppStateController.queryAppState(i.appId, i.versionId, i.packageName, i.versionCode, i.resType) : r.avaliable() && r.checkAppStatus(i.appId, i.versionId, i.packageName, i.versionCode, i.resType)
                })
            }

            function n(e) {
                return {
                    appId: parseInt(e.attr("data-appid")),
                    versionId: parseInt(e.attr("data-versionid")),
                    packageName: e.attr("data-packagename"),
                    name: e.attr("data-name"),
                    versionCode: parseInt(e.attr("data-versioncode")),
                    versionName: e.attr("data-versionname"),
                    resType: parseInt(e.attr("data-resourcetype")),
                    downloadUrl: e.attr("data-downloadUrl"),
                    iconUrl: e.attr("data-iconUrl"),
                    requireId: Number(e.attr("data-requireId")) || 0,
                    x86Stat: Number(e.attr("data-x86Stat")) || 0,
                    positionId: (parseInt(e.attr("data-pos")) || e.index() || "0") + "",
                    downloadPPUrl: e.attr("data-ppdownloadurl"),
                    recModel: e.attr("data-recmodel"),
                    cpModel: i.getCpModel(e),
                    exData: e.attr("data-exdata"),
                    pkgStatus: parseInt(e.attr("data-pkgStatus")) || 0
                }
            }

            var o = {
                appStateUnknown: 0,
                appStateUndownload: 2,
                appStateDownloading: 4,
                appStateDownloadPause: 8,
                appStateDownloadComplete: 16,
                appStateInstalling: 32,
                appStateLatestInstalled: 64,
                appStateOldVerInstalled: 128
            }, a = {appDetail: !0, downloadText: "下载", needToLog: !0, needBtnStatus: !0}, p = {};
            p[o.appStateUndownload] = {
                className: "btn-down", text: "下载", callback: function (t) {
                    var n = {
                        requireId: t.requireId,
                        x86Stat: t.x86Stat,
                        key_log_pushId: s.getQueryString("pushId") || "",
                        key_log_pushAppType: s.getQueryString("pushAppType") || "",
                        key_log_ab: s.getQueryString("ab") || ""
                    };
                    if (r && r.avaliable()) if (window.AppStateController) {
                        if (r.downloadApp(t.appId, t.name, t.positionId, t.resType, t.downloadUrl, t.iconUrl, t.versionId, t.versionName, t.versionCode, t.packageName, 0, {
                            requireId: t.requireId,
                            x86Stat: t.x86Stat
                        }, {}), a.needToLog) {
                            var o = {
                                module: "web_page",
                                page: "web_page",
                                ckUrl: "down",
                                type: "click",
                                resType: 0 == t.resType ? "soft" : "game",
                                position: void 0 == t.positionId ? 0 : t.positionId,
                                appId: t.appId,
                                appName: t.name,
                                versionId: t.versionId,
                                keyword: location.href,
                                recModel: t.recModel,
                                cpModel: t.cpModel
                            };
                            i.showLogCtr(o)
                        }
                    } else l.getAppDUrlAndLog(t.appId, {
                        ch_src: u.getChSrc(),
                        ch: window.ch,
                        custom: "0",
                        spaceType: "topic",
                        spaceName: document.title,
                        spaceId: document.topicId,
                        order: t.positionId,
                        query: window.query
                    }, function (e) {
                        r.downloadApp(t.appId, t.name, t.positionId, t.resType, e, t.iconUrl, t.versionId, t.versionName, t.versionCode, t.packageName, 0, n, {})
                    }, function (e) {
                        r.downloadApp(t.appId, t.name, t.positionId, t.resType, t.downloadUrl, t.iconUrl, t.versionId, t.versionName, t.versionCode, t.packageName, 0, n, {})
                    }); else if (window.AppStateController && "function" == typeof window.AppStateController.downloadApp) window.AppStateController.downloadApp(t.appId, t.resType, t.name, t.positionId); else if (c.ua.ios) {
                        var p = document.getElementById("ios-dialog"), d = document.getElementById("ios-tips");
                        d.src = "http://image.uc.cn/s/uae/g/2u/specials/mask/mask_ios.png", p.style.display = "block"
                    } else {
                        var h = e();
                        if ("iphone_weChat" == h || "ipad_weChat" == h || "android_weChat" == h) {
                            var g = document.getElementById("weixin-tips"), m = document.getElementById("wechatDialog");
                            return g.src = "http://a.img.pp.cn/upload_files/common/weixin/weixin-tips.png", void(m.style.display = "block")
                        }
                        if (t.downloadPPUrl) return;
                        l.downloadApp(t.appId, {
                            ch_src: u.getChSrc(),
                            ch: window.ch,
                            custom: "0",
                            spaceType: "topic",
                            spaceName: document.title,
                            spaceId: document.topicId,
                            order: t.positionId,
                            query: window.query,
                            fpt: f.getHash()
                        })
                    }
                }
            }, p[o.appStateDownloading] = {
                className: "btn-pause", text: "暂停", callback: function (e) {
                    r && r.avaliable() ? r.pauseDownloadApp(e.resType, e.versionId, e.appId) : window.AppStateController && "function" == typeof window.AppStateController.pauseDlApp && window.AppStateController.pauseDlApp(e.resType, e.versionId, e.positionId)
                }
            }, p[o.appStateDownloadPause] = {
                className: "btn-continue", text: "继续", callback: function (e) {
                    r && r.avaliable() ? r.continueDownloadApp(e.resType, e.versionId, e.appId) : window.AppStateController && "function" == typeof window.AppStateController.resumeDlApp && window.AppStateController.resumeDlApp(e.resType, e.versionId, e.positionId)
                }
            }, p[o.appStateDownloadComplete] = {
                className: "btn-install", text: "安装", callback: function (e) {
                    r && r.avaliable() ? r.installApp(e.resType, e.versionId) : window.AppStateController && "function" == typeof window.AppStateController.installApp && window.AppStateController.installApp(e.resType, e.versionId, e.positionId)
                }
            }, p[o.appStateInstalling] = {
                className: "btn-installing", text: "安装中", callback: function (e) {
                }
            }, p[o.appStateLatestInstalled] = {
                className: "btn-open", text: "打开", callback: function (e) {
                    var t = !1, n = [];
                    try {
                        n = JSON.parse(e.exData)
                    } catch (e) {
                    }
                    for (var o in n) if ("scheme" === n[o].key) {
                        t = !0, window.location.href = n[o].value;
                        break
                    }
                    r && r.avaliable() ? (t || r.openApp(e.packageName), a.needToLog && r.log({
                        module: "web_page",
                        page: "web_page",
                        ckUrl: "open",
                        resType: 0 == e.resType ? "soft" : "game",
                        position: void 0 == e.positionId ? 0 : e.positionId,
                        appId: e.appId,
                        appName: e.name,
                        versionId: e.versionId,
                        keyword: location.href,
                        recModel: e.recModel,
                        cpModel: e.cpModel
                    })) : window.AppStateController && "function" == typeof window.AppStateController.openApp && (t || window.AppStateController.openApp(e.packageName, e.positionId))
                }
            }, p[o.appStateOldVerInstalled] = {
                className: "btn-update", text: "更新", callback: function (e) {
                    var t = {
                        requireId: e.requireId,
                        x86Stat: e.x86Stat,
                        key_log_pushId: s.getQueryString("pushId") || "",
                        key_log_pushAppType: s.getQueryString("pushAppType") || "",
                        key_log_ab: s.getQueryString("ab") || ""
                    };
                    r && r.avaliable() ? (r.updateApp(e.appId, e.name, e.positionId, e.resType, e.downloadUrl, e.iconUrl, e.versionId, e.versionName, e.versionCode, e.packageName, 0, t), a.needToLog && (i.showLogCtr({
                        module: "web_page",
                        page: "web_page",
                        ckUrl: "up",
                        type: "click",
                        resType: 0 == e.resType ? "soft" : "game",
                        position: void 0 == e.positionId ? 0 : e.positionId,
                        appId: e.appId,
                        appName: e.name,
                        versionId: e.versionId,
                        keyword: location.href
                    }), window.AppStateController || l.getAppDUrlAndLog(e.appId, {
                        ch_src: u.getChSrc(),
                        ch: window.ch,
                        custom: "2",
                        spaceType: "topic",
                        spaceName: document.title,
                        spaceId: document.topicId,
                        order: e.positionId,
                        query: window.query
                    }))) : window.AppStateController && "function" == typeof window.AppStateController.updateApp && window.AppStateController.updateApp(e.appId, e.resType, e.name, e.positionId)
                }
            };
            var d = function (e) {
                $("#wrapper").on("click", ".ctl-li", function (t) {
                    var o = $(this), l = n(o), d = t.target || t.srcElement,
                        f = parseInt(s.getQueryString("isChannel")) || 0,
                        h = parseInt(s.getQueryString("isWdjDetail")) || 0,
                        g = parseInt(s.getQueryString("isSpecialArea")) || 0;
                    if ($(d).hasClass("ctl-btn") && f && "topic" !== window.ch) h ? location.href = "https://m.wandoujia.com/apps/com.tencent.tmgp.sgame/binding?source=wap_" + window.ch + "_bind" : location.href = "https://ucan.25pp.com/PPAssistant_" + window.ch + ".apk"; else if (!$(d).hasClass("ctl-btn") || 5 === e && (5 !== e || g) || 1 === e && (1 !== e || g)) {
                        if (!a.appDetail) return;
                        if (r.avaliable()) {
                            var m = {
                                module: "web_page",
                                page: "web_page",
                                ckUrl: "app_rg",
                                type: "click",
                                resType: 0 == l.resType ? "soft" : "game",
                                position: void 0 == l.positionId ? 0 : l.positionId,
                                appId: l.appId,
                                appName: l.name,
                                versionId: l.versionId,
                                keyword: location.href,
                                recModel: l.recModel,
                                cpModel: l.cpModel
                            };
                            o.hasClass("no-ctr-log") ? i.showLog(m) : i.showLogCtr(m), 1 !== e && 5 !== e || !g ? r.openAppDetail(l.appId, l.name, l.resType, l.positionId, window.location.href) : Pca.getClientInfo(function (e) {
                                e && e.key_data && e.key_data.versionCode && (l.pkgStatus ? e.key_data.versionCode >= 18061 ? Pca.openAppSpecialOrder(l.appId) : Pca.openRoutePage("wdj://router/bookabledetail?appId=" + l.appId + "&autoDownload=0&autoBook=0") : e.key_data.versionCode >= 17961 ? Pca.openAppSpecial(l.appId) : Pca.openAppDetail(l.appId, l.appName, l.resourceType, 0, window.location.href))
                            })
                        } else if (window.AppStateController && "function" == typeof window.AppStateController.openDetail) window.AppStateController.openDetail(l.appId, l.resType, l.name, l.positionId); else if (c.ua.ios && !g) {
                            var _ = document.getElementById("ios-dialog");
                            _.style.display = "block"
                        } else {
                            var v = "/detail.html?appid=" + l.appId;
                            r && r.avaliable() && (v = "/ppaweb/uc-plugin/views/detail.html?appid=" + l.appId), h && (v = "https://m.wandoujia.com/apps/" + l.packageName + "?utm_source=wap&utm_medium=cpc&utm_campaign=" + window.ch), 1 !== e && 5 !== e || !g || (v = "https://activity.pp.cn/h5/special/index.html?appId=" + l.appId + "&download=1"), v = s.queryFormat(v, {
                                ch: window.ch + "_" + document.topicId,
                                ch_src: u.getChSrc()
                            }), window.query && (v = s.queryFormat(v, {query: window.query})), location.href = v
                        }
                    } else {
                        var y = parseInt(this.getAttribute("resstate"));
                        y && p[y].callback(l)
                    }
                }), $("body").on("click", ".dialog", function (e) {
                    e.stopPropagation(), $(this).hide()
                })
            }, h = function (e, t) {
                t == o.appStateUnknown && (t = o.appStateUndownload);
                var n = $(".ctl-li_" + e);
                if (n.length > 0 && a.needBtnStatus) {
                    var r = n.find(".ctl-btn");
                    n.attr("data-versionid") == e && (g(r), r.text(p[t].text), r.addClass(p[t].className), n.attr("resstate", t))
                }
            }, g = function (e) {
                e.removeClass("btn-update").removeClass("btn-install").removeClass("btn-down").removeClass("btn-open").removeClass("btn-installing").removeClass("btn-pause").removeClass("btn-continue")
            }, m = function (e) {
                a = $.extend(a, e), p[o.appStateUndownload].text = a.downloadText
            };
            return r.avaliable() && r.listener.all(function (e) {
                try {
                    switch (e.key_method_id) {
                        case r._methodId.APP_STATUS:
                            h(parseInt(e.key_data.key_version_id), parseInt(e.key_data.key_target_state))
                    }
                } catch (e) {
                }
            }), {
                updateAppState: function (e, t) {
                    h(e, t)
                }, setLog: function (e, t, n, o, r) {
                    fLog_set(e, t, n, o, r)
                }, fEvent_bind: d, checkAppStatus: t, options: m
            }
        }();
        this.PPW = a, e.exports = a, o = function () {
            return a
        }.call(t, n, t, e), !(void 0 !== o && (e.exports = o))
    }()
}, function (e, t, n) {
    /**!
     * 异常及性能数据监控
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   主帅 <shiwang.zsw@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/104910)
     */
    "use strict";
    var o = n(33);
    o.init("pp-android-specials", {ignoreScriptError: !0}, {enable: !0, uc: !0}), e.exports = o
}, function (e, t, n) {
    "use strict";
    !function (t, n) {
        e.exports = n()
    }(void 0, function () {
        function e(e, t) {
            var n = {};
            n.encode = function (e) {
                var t = e.replace(/[\u0080-\u07ff]/g, function (e) {
                    var t = e.charCodeAt(0);
                    return String.fromCharCode(192 | t >> 6, 128 | 63 & t)
                });
                return t = t.replace(/[\u0800-\uffff]/g, function (e) {
                    var t = e.charCodeAt(0);
                    return String.fromCharCode(224 | t >> 12, 128 | t >> 6 & 63, 128 | 63 & t)
                })
            }, n.ROTL = function (e, t) {
                return e << t | e >>> 32 - t
            }, n.toHexStr = function (e) {
                for (var t, n = "", o = 7; o >= 0; o--) t = e >>> 4 * o & 15, n += t.toString(16);
                return n
            }, n.f = function (e, t, n, o) {
                switch (e) {
                    case 0:
                        return t & n ^ ~t & o;
                    case 1:
                        return t ^ n ^ o;
                    case 2:
                        return t & n ^ t & o ^ n & o;
                    case 3:
                        return t ^ n ^ o
                }
            }, t = "undefined" == typeof t || t, t && (e = n.encode(e));
            var o = [1518500249, 1859775393, 2400959708, 3395469782];
            e += String.fromCharCode(128);
            var r, i, a, s = e.length / 4 + 2, c = Math.ceil(s / 16), u = new Array(c);
            for (r = 0; c > r; r++) for (u[r] = new Array(16), a = 0; 16 > a; a++) u[r][a] = e.charCodeAt(64 * r + 4 * a) << 24 | e.charCodeAt(64 * r + 4 * a + 1) << 16 | e.charCodeAt(64 * r + 4 * a + 2) << 8 | e.charCodeAt(64 * r + 4 * a + 3);
            u[c - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), u[c - 1][14] = Math.floor(u[c - 1][14]), u[c - 1][15] = 8 * (e.length - 1) & 4294967295;
            var l, p, d, f, h, g = 1732584193, m = 4023233417, _ = 2562383102, v = 271733878, y = 3285377520,
                w = new Array(80);
            for (r = 0; c > r; r++) {
                for (i = 0; 16 > i; i++) w[i] = u[r][i];
                for (i = 16; 80 > i; i++) w[i] = n.ROTL(w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16], 1);
                for (l = g, p = m, d = _, f = v, h = y, i = 0; 80 > i; i++) {
                    var b = Math.floor(i / 20), S = n.ROTL(l, 5) + n.f(b, p, d, f) + h + o[b] + w[i] & 4294967295;
                    h = f, f = d, d = n.ROTL(p, 30), p = l, l = S
                }
                g = g + l & 4294967295, m = m + p & 4294967295, _ = _ + d & 4294967295, v = v + f & 4294967295, y = y + h & 4294967295
            }
            return n.toHexStr(g) + n.toHexStr(m) + n.toHexStr(_) + n.toHexStr(v) + n.toHexStr(y)
        }

        function t(e) {
            for (var t = ""; t.length < e;) t += Math.random().toString().substr(2);
            return t.substring(t.length - e)
        }

        function n() {
        }

        function o(e) {
            return e && "object" == typeof e
        }

        function r(e) {
            return e && "number" == typeof e && isFinite(e)
        }

        function i(e) {
            return e && "[object Date]" === Object.prototype.toString.call(e)
        }

        function a(e, t) {
            t = o(t) ? t : {};
            var n = [];
            for (var r in t) if (t.hasOwnProperty(r)) {
                var i = t[r];
                n.push(encodeURIComponent(r) + "=" + encodeURIComponent(i))
            }
            var a = n.length ? "?" + n.join("&") : "";
            return e + a
        }

        function s(e) {
            if (!e) return "";
            e = c(e);
            for (var t, n, o, r, i, a, s, u = "", l = 0; l < e.length;) t = 15 ^ e.charCodeAt(l++), n = e.charCodeAt(l++), o = e.charCodeAt(l++), isNaN(o) || (o ^= 15), r = t >> 2, i = (3 & t) << 4 | n >> 4, a = (15 & n) << 2 | o >> 6, s = 63 & o, u = u + h.charAt(r) + h.charAt(i), isNaN(n) || (u += h.charAt(a), isNaN(o) || (u += h.charAt(s)));
            return u
        }

        function c(e) {
            var t = e.replace(/[\u0080-\u07ff]/g, function (e) {
                var t = e.charCodeAt(0);
                return String.fromCharCode(192 | t >> 6, 128 | 63 & t)
            });
            return t = t.replace(/[\u0800-\uffff]/g, function (e) {
                var t = e.charCodeAt(0);
                return String.fromCharCode(224 | t >> 12, 128 | t >> 6 & 63, 128 | 63 & t)
            })
        }

        function u(e) {
            return g + "~~" + s(e)
        }

        function l(e, t, n, o) {
            function r() {
                u && u.parentNode && u.parentNode.removeChild(u);
                try {
                    delete window[c]
                } catch (e) {
                    window[c] = void 0
                }
                a && clearTimeout(a)
            }

            e = e || "", t = t || {}, n = n || "", o = o || function () {
            };
            var i;
            "object" == typeof t ? isFinite(t.timeout) && (i = t.timeout) : "function" == typeof t && (n = t, o = n), "function" == typeof n && (o = n, n = "callback"), Date.now || (Date.now = function () {
                return (new Date).getTime()
            });
            var a, s = Date.now(), c = "jsonp" + Math.round(s + 1000001 * Math.random());
            i && (a = setTimeout(function () {
                r(), o && o(null, new Error("Timeout"))
            }, i)), window[c] = function (e) {
                o(e), r()
            }, e += e.indexOf("?") === -1 ? "?" : "&";
            var u = document.createElement("script");
            u.setAttribute("src", e + n + "=" + c), document.getElementsByTagName("head")[0].appendChild(u)
        }

        var p = function () {
        };
        p.getValue = function (e) {
            var t, n = decodeURIComponent;
            return (t = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? n(t[1]) : null
        }, p.setValue = function (e, t, n) {
            var i, a;
            if (arguments.length > 1 && "[object Object]" !== String(t)) return n = o(n) ? n : {}, null !== t && void 0 !== t || (n.expires = -1), r(n.expires) && (i = 24 * n.expires * 60 * 60 * 1e3, a = n.expires = new Date, a.setTime(a.getTime() + i)), t = String(t), document.cookie = [encodeURIComponent(e), "=", encodeURIComponent(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
        };
        var d = function () {
        };
        d.getValue = function (e) {
            var t = window.localStorage[e];
            if (t && "string" == typeof t) try {
                var n = JSON.parse(t), o = (r(n.expires) ? n.expires : -1, n.data, (new Date).getTime());
                return o > n.expires ? null : n.data
            } catch (e) {
            }
            return null
        }, d.setValue = function (e, t, n) {
            var a, s;
            if (arguments.length > 1 && "[object Object]" !== String(t)) {
                if (n = o(n) ? n : {}, null !== t && void 0 !== t || (n.expires = -1), r(n.expires)) a = 24 * n.expires * 60 * 60 * 1e3, s = n.expires = new Date, s.setTime(s.getTime() + a); else if (!i(n.expires)) return;
                t = String(t), window.localStorage[e] = JSON.stringify({data: t, expires: n.expires.getTime()})
            }
        };
        var f = function () {
        };
        f.getValue = function (e, t) {
            var n = d.getValue(e, t) || p.getValue(e, t);
            return n
        }, f.setValue = function (e, t, n) {
            d.setValue(e, t, n), p.setValue(e, t, n)
        };
        var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", g = "v1.0", m = {
                uuidKey: "awu",
                uuidExpires: 365,
                hashKey: "fph",
                hashExpires: 30,
                queryHashTimeout: 2e3,
                cid: "C1001",
                apiHost: "http://api.open.uc.cn/nbi/queryPrint"
            }, _ = {
                uuidKey: "awu",
                uuidExpires: 365,
                hashKey: "fph",
                hashExpires: 30,
                queryHashTimeout: 2e3,
                cid: "C1001",
                apiHost: "http://test.open.uc.cn:6001/nbi/queryPrint"
            }, v = navigator, y = screen, w = document, b = window,
            S = b.RTCPeerConnection || b.mozRTCPeerConnection || b.webkitRTCPeerConnection, x = function (e) {
                o(e) || (e = {});
                var t = !!e.debug;
                t ? this.config = _ : this.config = m, this.isExist = !1, this.fpObject = {bt: (new Date).getTime()}
            };
        return x.prototype.getFPData = function (e) {
            return this.isExist ? (this.getNowTime(), this.fpObject) : (this.getTouchSupport(), this.getPlugins(), this.getPlatform(), this.getScreen(), this.getCanvas(), this.getAdBlocked(), this.getIndexDBEnabled(), this.getCookieEnabled(), this.getLocalStorageEnabled(), this.getSessionStorageEnabled(), this.getPixelRatio(), this.getWebGL(), this.getUserAgent(), this.getIPs(), this.getWebUUID(), e && (this.fpObject.uuid = e), this.isExist = !0, this.fpObject)
        }, x.prototype.getFPDataB64 = function (e) {
            return u(JSON.stringify(this.getFPData(e)))
        }, x.prototype.queryHash = function (e) {
            var t = this, n = f.getValue(this.config.hashKey), r = !!p.getValue(this.config.hashKey);
            if (n) r || p.setValue(this.config.hashKey, n, {expires: this.config.hashExpires}); else {
                e = o(e) ? e : {}, e.uid = e.uid || "", e.sid = e.sid || "";
                var i = this.getFPDataB64(), s = this.config.apiHost, c = this.config.cid,
                    u = {cid: c, data: i, uid: e.uid, sid: e.sid};
                l(a(s, u), {timeout: this.config.timeout}, function (e, n) {
                    e && 0 == e.res && "string" == typeof e.bp && f.setValue(t.config.hashKey, e.bp, {expires: t.config.hashExpires})
                })
            }
        }, x.prototype.getHash = function () {
            return f.getValue(this.config.hashKey)
        }, x.prototype.getNowTime = function () {
            this.fpObject.bt = (new Date).getTime()
        }, x.prototype.getWebUUID = function () {
            var e = f.getValue(this.config.uuidKey);
            e || (e = (new Date).getTime() + t(8), f.setValue(this.config.uuidKey, e, {expires: this.config.uuidExpires})), this.fpObject.awu = e
        }, x.prototype.getUserAgent = function () {
            this.fpObject.ua = v.userAgent ? v.userAgent : ""
        }, x.prototype.getTouchSupport = function () {
            var e = 0, t = !1;
            "undefined" != typeof v.maxTouchPoints ? e = v.maxTouchPoints : "undefined" != typeof v.msMaxTouchPoints && (e = v.msMaxTouchPoints);
            try {
                w.createEvent("TouchEvent"), t = !0
            } catch (e) {
            }
            var n = "ontouchstart" in b, o = [e, t, n];
            this.fpObject.ts = o.join()
        }, x.prototype.getPlugins = function () {
            var e = "";
            try {
                for (var t = 0; t < v.plugins.length; ++t) {
                    var n = v.plugins[t];
                    e += "Plugin " + t + ": " + n.name + "; " + n.description + "; " + n.filename + ";";
                    for (var o = 0; o < n.length; ++o) e += " (" + n[o].description + "; " + n[o].type + "; " + n[o].suffixes + ")";
                    e += ". "
                }
                if ("" == e) for (var r = ["QuickTime", "Java", "DevalVR", "Flash", "Shockwave", "WindowsMediaPlayer", "Silverlight", "VLC", "AdobeReader", "PDFReader", "RealPlayer", "IEcomponent", "ActiveX", "PDFjs"], i = 0; i < r.length; ++i) {
                    var a = PluginDetect.getVersion(r[i]);
                    a && (e += r[i] + " " + a + "; ")
                }
                "" == e && (e = "unknown")
            } catch (t) {
                e = "unknown"
            }
            this.fpObject.fpl = e
        }, x.prototype.getTimezone = function () {
            this.fpObject.tz = (new Date).getTimezoneOffset()
        }, x.prototype.getPixelRatio = function () {
            this.fpObject.dp = b.devicePixelRatio && b.devicePixelRatio || ""
        }, x.prototype.getScreen = function () {
            this.fpObject.sn = y.width + "x" + y.height + "x" + y.colorDepth
        }, x.prototype.getSessionStorageEnabled = function () {
            var e = "0";
            try {
                "sessionStorage" in b && null !== b.sessionStorage && (e = "1")
            } catch (e) {
            }
            this.fpObject.sse = e
        }, x.prototype.getIndexDBEnabled = function () {
            var e = "0";
            try {
                b.indexedDB && (e = "1")
            } catch (e) {
            }
            this.fpObject.ide = e
        }, x.prototype.getLocalStorageEnabled = function () {
            var e = "0";
            try {
                "localStorage" in b && null !== b.localStorage && (e = "1")
            } catch (e) {
            }
            this.fpObject.lse = e
        }, x.prototype.getCookieEnabled = function () {
            var e = "0";
            try {
                e = navigator.cookieEnabled ? "1" : "0"
            } catch (e) {
            }
            this.fpObject.ce = e
        }, x.prototype.getAdBlocked = function () {
            var e = w.createElement("div");
            e.innerHTML = "&nbsp;", e.className = "adsbox";
            var t = !1;
            try {
                w.body.appendChild(e), t = 0 === w.getElementsByClassName("adsbox")[0].offsetHeight, w.body.removeChild(e)
            } catch (e) {
                t = !1
            }
            this.fpObject.ab = t ? "1" : "0"
        }, x.prototype.getPlatform = function () {
            var e = v.platform ? v.platform : "unknown";
            this.fpObject.pf = e
        }, x.prototype.getCanvas = function () {
            try {
                var t = w.createElement("canvas");
                t.height = 60, t.width = 400;
                var n = t.getContext("2d");
                t.style.display = "inline", n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.7)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), this.fpObject.cns = e(t.toDataURL())
            } catch (e) {
                this.fpObject.cns = "Not supported"
            }
        }, x.prototype._getWebGLVendor = function (e) {
            var t = "nspt";
            try {
                var n = e;
                n.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0 && (t = n.getParameter(n.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL))
            } catch (e) {
            }
            this.fpObject.wgv = t
        }, x.prototype._getWebGLRenderer = function (e) {
            var t = "nspt";
            try {
                var n = e;
                n.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0 && (t = n.getParameter(n.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL))
            } catch (e) {
            }
            this.fpObject.wgr = t
        }, x.prototype._fetchGL = function () {
            var e = null, t = w.createElement("canvas");
            try {
                e = t.getContext("webgl") || t.getContext("experimental-webgl")
            } catch (e) {
            }
            return e || (e = null), e
        }, x.prototype._handleCandidate = function (e) {
            var t = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/, n = {}, o = [], r = t.exec(e)[1];
            n[r] || (o.push(r), n[r] = !0), this.fpObject.ips = o.join(",")
        }, x.prototype.getIPs = function () {
            var e = this;
            if (S) {
                var t = null;
                try {
                    t = new S({iceServers: [{url: "stun:stun.services.mozilla.com"}]}, {optional: [{RtpDataChannels: !0}]})
                } catch (e) {
                    return
                }
                if (!t) return;
                t.onicecandidate = function (t) {
                    t.candidate && (n(t.candidate.candidate), e._handleCandidate(t.candidate.candidate))
                }, t.createDataChannel(""), t.createOffer(function (e) {
                    var o = this;
                    if (t.setLocalDescription(e, function () {
                    }, function () {
                    }), e.sdp) {
                        var r = e.sdp.split("\n");
                        r.forEach(function (e) {
                            n(e), 0 === e.indexOf("a=candidate:") && o._handleCandidate(e)
                        })
                    }
                }, function () {
                })
            }
        }, x.prototype._getWebGLHash = function (t) {
            if (t = t ? t : this._fetchGL(), !t) return "nspt";
            var o = function (e) {
                    return t.clearColor(0, 0, 0, 1), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), "[" + e[0] + ", " + e[1] + "]"
                }, r = function (e) {
                    var t,
                        n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return n ? (t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
                }, i = [],
                a = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
                s = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
                c = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, c);
            var u = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            t.bufferData(t.ARRAY_BUFFER, u, t.STATIC_DRAW), c.itemSize = 3, c.numItems = 3;
            var l = t.createProgram(), p = t.createShader(t.VERTEX_SHADER);
            t.shaderSource(p, a), t.compileShader(p);
            var d = t.createShader(t.FRAGMENT_SHADER);
            t.shaderSource(d, s), t.compileShader(d), t.attachShader(l, p), t.attachShader(l, d), t.linkProgram(l), t.useProgram(l), l.vertexPosAttrib = t.getAttribLocation(l, "attrVertex"), l.offsetUniform = t.getUniformLocation(l, "uniformOffset"), t.enableVertexAttribArray(l.vertexPosArray), t.vertexAttribPointer(l.vertexPosAttrib, c.itemSize, t.FLOAT, !1, 0, 0), t.uniform2f(l.offsetUniform, 1, 1), t.drawArrays(t.TRIANGLE_STRIP, 0, c.numItems), null != t.canvas && i.push(t.canvas.toDataURL());
            try {
                i.push(t.getSupportedExtensions().join(";")), i.push(o(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE))), i.push(o(t.getParameter(t.ALIASED_POINT_SIZE_RANGE))), i.push(t.getParameter(t.ALPHA_BITS)), i.push(t.getContextAttributes().antialias ? "yes" : "no"), i.push(t.getParameter(t.BLUE_BITS)), i.push(t.getParameter(t.DEPTH_BITS)), i.push(t.getParameter(t.GREEN_BITS)), i.push(r(t)), i.push(t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), i.push(t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)), i.push(t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)), i.push(t.getParameter(t.MAX_RENDERBUFFER_SIZE)), i.push(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)), i.push(t.getParameter(t.MAX_TEXTURE_SIZE)), i.push(t.getParameter(t.MAX_VARYING_VECTORS)), i.push(t.getParameter(t.MAX_VERTEX_ATTRIBS)), i.push(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), i.push(t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)), i.push(o(t.getParameter(t.MAX_VIEWPORT_DIMS))), i.push(t.getParameter(t.RED_BITS)), i.push(t.getParameter(t.RENDERER)), i.push(t.getParameter(t.SHADING_LANGUAGE_VERSION)), i.push(t.getParameter(t.STENCIL_BITS)), i.push(t.getParameter(t.VENDOR)), i.push(t.getParameter(t.VERSION))
            } catch (e) {
                n("error1 :" + e)
            }
            try {
                if (!t.getShaderPrecisionFormat) return e(i.join(","));
                i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).rangeMin), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).rangeMax), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).rangeMin), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).rangeMax), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).precision), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).rangeMin), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).rangeMax), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).rangeMin), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).rangeMax), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).rangeMin), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).rangeMax), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).precision), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).rangeMin), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).rangeMax), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).precision), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).rangeMin), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).rangeMax), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).precision), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).rangeMin), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).rangeMax), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).precision), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).rangeMin), i.push(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).rangeMax), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).precision), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).rangeMin), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).rangeMax), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).precision), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).rangeMin), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).rangeMax), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).precision), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).rangeMin), i.push(t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).rangeMax)
            } catch (e) {
                n("error2:" + e)
            }
            return e(i.join(","))
        }, x.prototype.getWebGL = function () {
            var e = this._fetchGL();
            this._getWebGLRenderer(e), this._getWebGLVendor(e), this.fpObject.wg = this._getWebGLHash(e)
        }, x
    })
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(9), i = n(42), a = n(47);
    a.polyfill(), e.exports = function () {
        var e = {}, t = {}, a = 100, s = !1;
        return function () {
            if (o.isInAndroidClient() || o.isInPPPlugin()) window.StatLoggerInterface && "function" == typeof window.StatLoggerInterface.getSdkVersion ? t.osVersion = window.StatLoggerInterface.getSdkVersion() : t.osVersion = a, r.getClientInfo("onGetClientInfoAtPPProxy"), window.onGetClientInfoAtPPProxy = function (e) {
                t.ai = e.key_data.aid, t.aid = e.key_data.aid, t.puid = e.key_data.puid, t.uuid = e.key_data.uuid, t.ut = e.key_data.utdid, t.utdid = e.key_data.utdid, t.umid = e.key_data.umid, t.v = e.key_data.v, t.versionCode = e.key_data.versionCode, t.uc_version_code = e.key_data.versionCode, t.ch_ver = e.key_data.client_ch || e.key_data.ch, t.productId = e.key_data.productId, s = !0
            }; else if (o.isInIOSClient()) n.e(0, function () {
                var e = n(67);
                e.getIosIdString(function (e, n) {
                    t = {}, n ? t.iosIdString = e : t.iosIdOldString = e, s = !0
                })
            }); else if (o.isInWdjClient()) t = {
                udid: window.campaignPlugin.getUDID(),
                wuid: window.campaignPlugin.getUID()
            }, s = !0; else if (i.isInShuqiClient()) {
                var e = i.getClientInfo(), c = {sn: e.sn, userId: e.uid}, u = "";
                try {
                    u = JSON.stringify(c)
                } catch (e) {
                    u = ""
                }
                t = {shuqiStr: u, imei: e.imei, utdid: e.utdid}, s = !0
            } else t = {osVersion: a}, s = !0
        }(), e.get = function (e) {
            var n = 20;
            if (s) e(t); else var o = window.setInterval(function () {
                (s || n-- < 0) && (window.clearInterval(o), e(t))
            }, 50)
        }, e
    }()
}, function (e, t, n) {
    "use strict";
    var o = n(2), r = n(3);
    r.checkAppStatus = function (e, t, n, i, a, s) {
        var c = {key_app_id: e, key_version_id: t, key_package_name: n, key_version_code: i, key_res_type: a};
        r.ApiProtocol(o.methodId.APP_CHECK_STATUS, c, s)
    }, r.downloadApp = function (e, t, n, i, a, s, c, u, l, p, d, f, h) {
        "undefined" == typeof f && (f = {});
        var g = {
            key_app_id: e,
            key_app_name: t,
            key_webapp_position: void 0 === n ? 0 : n,
            key_res_type: i,
            key_download_url: a,
            key_icon_url: s,
            key_res_id: c,
            key_version_name: u,
            key_version_code: l,
            key_package_name: p,
            key_app_size: d,
            key_ext_data: f || {}
        };
        "object" == typeof h && (g.key_vurl = h.vurl || "", g.key_curl = h.curl || "", g.key_durl = h.dfUrl || "", g.key_iurl = h.iurl || "", g.key_feedback_param = h.feedbackParameter || ""), r.ApiProtocol(o.methodId.APP_DOWNLOAD, g)
    }, r.updateApp = function (e, t, n, i, a, s, c, u, l, p, d, f) {
        var h = {
            key_app_id: e,
            key_app_name: t,
            key_webapp_position: void 0 === n ? 0 : n,
            key_res_type: i,
            key_download_url: a,
            key_icon_url: s,
            key_res_id: c,
            key_version_name: u,
            key_version_code: l,
            key_package_name: p,
            key_app_size: d,
            key_ext_data: f || {}
        };
        r.ApiProtocol(o.methodId.APP_DOWNLOAD, h)
    }, r.pauseDownloadApp = function (e, t, n) {
        var i = {key_app_id: n, key_res_type: e, key_version_id: t};
        r.ApiProtocol(o.methodId.APP_PAUSE_DOWNLOAD, i)
    }, r.continueDownloadApp = function (e, t, n) {
        var i = {key_app_id: n, key_res_type: e, key_version_id: t};
        r.ApiProtocol(o.methodId.APP_CONTINUE_DOWNLOAD, i)
    }, r.uncompressAppDpk = function (e, t) {
        var n = {key_res_type: e, key_version_id: t};
        r.ApiProtocol(o.methodId.APP_DPK_UNCOMPRESS, n)
    }, r.installApp = function (e, t, n, i) {
        var a = {key_app_id: n, key_res_type: e, key_version_id: t};
        r.ApiProtocol(o.methodId.APP_INSTALL, a, i)
    }, r.openApp = function (e) {
        r.ApiProtocol(o.methodId.APP_OPEN, {key_package_name: e})
    }, r.openAppDetail = function (e, t, n, i, a) {
        var s = {key_app_id: e, key_res_name: t, key_res_type: n, key_position: i, key_from: a};
        r.ApiProtocol(o.methodId.APP_DETAIL, s)
    }, r.openAppSpecial = function (e) {
        var t = {key_app_id: e};
        r.ApiProtocol(o.methodId.APP_SPECIAL, t)
    }, r.openAppSpecialOrder = function (e) {
        var t = {key_app_id: e};
        r.ApiProtocol(o.methodId.APP_SPECIAL_ORDER, t)
    }, r.openAppCommentDetail = function (e, t) {
        var n = {key_app_id: e, key_comment_id: t};
        r.ApiProtocol(o.methodId.APP_COMMENT_DETAIL, n)
    }, r.followApp = function (e, t, n) {
        var i = {key_dataId: e, key_resType: t};
        r.ApiProtocol(o.methodId.APP_FOLLOW, i, n)
    }, r.unfollowApp = function (e, t, n) {
        var i = {key_dataId: e, key_resType: t};
        r.ApiProtocol(o.methodId.APP_UNFOLLOW, i, n)
    }, r.checkCollectionAppStatus = function (e, t, n) {
        var i = {key_app_id: e, key_res_type: t};
        r.ApiProtocol(o.methodId.APP_COLLECTION_STATUS, i, n)
    }, r.orderApp = function (e, t, n) {
        var i = {appId: e, name: t};
        r.ApiProtocol(o.methodId.APP_ORDER, i, n)
    }, r.collectApp = function (e, t, n, i) {
        var a = {key_app_id: e, key_res_type: t, key_collection_action: n};
        r.ApiProtocol(o.methodId.APP_COLLECTION_ACTION, a, i)
    }, r.openGameUrl = function (e, t, n) {
        var i = {url: e, referer: t};
        r.ApiProtocol(o.methodId.OPEN_GAME_URL, i, n)
    }, r.listAppInstalled = function (e) {
        r.ApiProtocol(o.methodId.APP_LIST_INSTALLED, {}, e)
    }, r.listAppsUpdate = function (e) {
        r.ApiProtocol(o.methodId.APP_UPDATE_LIST, {}, e)
    }, r.getAppInstalledAllM9 = function (e) {
        r.ApiProtocol(o.methodId.APP_INSTALLED_ALL_M9, {}, e)
    }, r.ignoreAppUpdate = function (e, t) {
        r.ApiProtocol(o.methodId.APP_IGNORE_UPDATE, {key_package_name: e, key_is_ignore: !0}, t)
    }, r.ignoreAppUpdateCancel = function (e, t) {
        r.ApiProtocol(o.methodId.APP_IGNORE_UPDATE, {key_package_name: e, key_is_ignore: !1}, t)
    }, r.listIgnoreUpdate = function (e) {
        r.ApiProtocol(o.methodId.APP_IGNORE_UPDATE_LIST, {}, e)
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    var o = n(2), r = n(3);
    r.checkLoginStatus = function (e) {
        r.ApiProtocol(o.methodId.LOGIN_CHECK_STATUS, {}, e)
    }, r.login = function (e, t, n, i, a, s) {
        var c = {type: e, title: t, content: n, cancel: i, confirm: a};
        r.ApiProtocol(o.methodId.LOGIN, c, s)
    }, r.loginAndBindTaobao = function (e, t, n, i, a) {
        var s = {type: o.loginType.TAOBAO, title: e, content: t, cancel: n, confirm: i};
        r.ApiProtocol(o.methodId.LOGIN_BIND_TAOBAO, s, a)
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    var o = n(2), r = n(3);
    r.openJifenbaoPage = function () {
        r.ApiProtocol(o.methodId.JIFENBAO_PAGE, {caller: "PP"})
    }, r.orderGame = function (e, t, n) {
        r.applyGameLoginAndOrder(e, t, 1, n)
    }, r.applyGameLoginAndOrder = function (e, t, n, i) {
        r.ApiProtocol(o.methodId.GAME_ORDER_LOGIN, {gameid: e, url: t, order: !!n}, i)
    }, r.submitGameInfo = function (e, t) {
        r.ApiProtocol(o.methodId.GAME_ORDER_SUBMIT, {gameid: e}, t)
    }, r.callGameAssistant = function () {
        r.ApiProtocol(o.methodId.GAME_ASSISTANT)
    }, r.openAnswerAssistant = function (e) {
        r.ApiProtocol(o.methodId.OPEN_ANSWER_ASSISTANT, null, e)
    }, r.checkFlowInfo = function (e, t, n, i) {
        r.ApiProtocol(o.methodId.CHECK_FLOW_INFO, {checkType: e, carrierType: t, phoneToken: n}, i)
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    var o = n(2), r = n(3);
    r.log = function (e, t) {
        if ("object" != typeof e) return console.warn('[log] param "data" must be "object", now is ' + typeof e), void console.log(e);
        !e.type && (e.type = "click");
        var n = {
            key_log_logtype: e.type,
            key_log_action: e.action,
            key_log_app_id: e.appId,
            key_app_name: e.appName,
            key_log_module: e.module,
            key_log_page: e.page,
            key_log_restype: e.resType,
            key_log_ck_url: e.ckUrl,
            key_log_position: e.position,
            key_log_keyword: e.keyword,
            key_log_packid: e.versionId,
            key_log_ex_a: e.exa,
            key_log_ex_b: e.exb,
            key_log_ex_c: e.exc,
            key_log_ex_d: e.exd,
            key_tpdata: e.tpData,
            key_log_ctrPos: e.ppCtrPos,
            key_log_index: e.ppIndex,
            key_log_cardId: e.ppCardId,
            key_log_cardType: e.ppCardType,
            key_log_cardGroup: e.ppCardGroup,
            key_log_pushId: e.pushId,
            key_log_pushAppType: e.pushAppType,
            key_log_recModel: e.recModel,
            key_log_cpModel: e.cpModel,
            key_log_ab: e.ab
        };
        r.ApiProtocol(o.methodId.LOG, n, t)
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    var o = n(2), r = n(3);
    r.callZFBPay = function (e, t) {
        r.ApiProtocol(o.methodId.PAY_ZFB, {payInfo: e.payInfo}, t)
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    var o = n(2), r = n(3);
    r.share = function (e, t, n, i, a, s, c) {
        var u = {title: e, content: t, url: n, imgUrl: i, id: a, name: s};
        r.ApiProtocol(o.methodId.SHARE, u, c)
    }, r.shareMoments = function (e, t, n, i, a, s, c) {
        var u = {title: e, content: t, url: n, imgUrl: i, id: a, name: s};
        r.ApiProtocol(o.methodId.SHARE_MOMENTS, u, c)
    }, r.shareSys = {
        all: function (e, t) {
            r.ApiProtocol(o.methodId.SHARE_SYS, e, t)
        }, timeLine: function (e, t) {
            e.packageName = "com.tencent.mm", e.componentName = "com.tencent.mm.ui.tools.ShareToTimeLineUI", r.ApiProtocol(o.methodId.SHARE_SYS, e, t)
        }, weixin: function (e, t) {
            e.packageName = "com.tencent.mm", e.componentName = "com.tencent.mm.ui.tools.ShareImgUI", r.ApiProtocol(o.methodId.SHARE_SYS, e, t)
        }, qq: function (e, t) {
            e.packageName = "com.tencent.mobileqq", e.componentName = "com.tencent.mobileqq.activity.JumpActivity", r.ApiProtocol(o.methodId.SHARE_SYS, e, t)
        }, weibo: function (e, t) {
            e.packageName = "com.sina.weibo", e.componentName = "com.sina.weibo.ComposerDispatchActivity", r.ApiProtocol(o.methodId.SHARE_SYS, e, t)
        }
    }, r.shareImg = function (e, t, n) {
        var i = {uri: e, platform: t};
        r.ApiProtocol(o.methodId.SHARE_IMG, i, n)
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    var o = n(2), r = n(3);
    r.getKeyValue = function (e, t) {
        r.ApiProtocol(o.methodId.STORE_KEY_VALUE_GET, {key: e, valueType: 0}, t)
    }, r.setKeyValue = function (e, t, n) {
        r.ApiProtocol(o.methodId.STORE_KEY_VALUE_SET, {key: e, valueType: 0, stringValue: t}, n)
    }, e.exports = r
}, function (e, t, n) {
    var o;
    !function () {
        var r = function () {
            var e = {};
            return e.getQueryString = function (e, t) {
                var n = "", o = "";
                if ("undefined" != typeof t) {
                    var r = t.indexOf("#") !== -1 ? t.indexOf("#") : t.length;
                    n = t.substring(t.indexOf("?"), r), o = t.substring(r, t.length)
                } else n = window.location.search, o = window.location.hash;
                var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), a = (n || o).substr(1).match(i);
                return null != a ? decodeURIComponent(a[2]) : ""
            }, e.queryFormat = function (e, t) {
                function n(e) {
                    return null !== e && void 0 !== e && "" !== e
                }

                if ("string" != typeof e && (e = ""), "object" == typeof t) {
                    var o = e.indexOf("#") < 0 ? "" : e.substring(e.indexOf("#")),
                        r = e.substring(0, e.indexOf("?") < 0 ? e.length : e.indexOf("?")),
                        i = e.substr(r.length + 1, e.length - r.length - o.length - 1);
                    o && (r = r.substring(0, r.indexOf("#") < 0 ? r.length : r.indexOf("#")));
                    var a = i.split("&").filter(function (e) {
                        return "" !== e
                    }).map(function (e) {
                        return e.split("=")
                    });
                    for (var s in t) if (t.hasOwnProperty(s) && n(t[s])) {
                        for (var c = !1, u = 0; u < a.length; u++) a[u][0] === s && (a[u][1] = encodeURIComponent(t[s]), c = !0);
                        c || a.push([s, encodeURIComponent(t[s])])
                    }
                    return a.length > 0 && (i = "?" + a.map(function (e) {
                        return e.join("=")
                    }).join("&")), r + i + o
                }
                return e
            }, e.delUrlStr = function (t, n) {
                var o = "";
                return "undefined" != typeof n ? o = t + "=" + e.getQueryString(t, n) : (n = window.location.href, o = t + "=" + e.getQueryString(t)), n.indexOf("?" + o) !== -1 ? (n = n.replace(o + "&", "").replace(o, ""), "?" === n[n.length - 1] && (n = n.replace("?", "")), n.indexOf("?#") !== -1 && (n = n.replace("?#", "#"))) : n = n.replace("&" + o, ""), n
            }, e
        }();
        this.paUrl = r, e.exports = r, o = function () {
            return r
        }.call(t, n, t, e), !(void 0 !== o && (e.exports = o))
    }()
}, function (e, t, n) {
    /**!
     * 异常及性能数据监控
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   主帅
     */
    "use strict";
    var o = n(43), r = n(44), i = n(34), a = n(4), s = n(1),
        c = a.getQueryString("debug") || sessionStorage.debug || "",
        u = ["dev", "test", "testa", "testb", "testc", "local"].indexOf(c) !== -1, l = 11, p = new o({
            beforeLog: function (e) {
                if (u) return console && console.log(e), !1
            }
        });
    p.extendParams = {}, p.init = function (e, t, n) {
        try {
            "string" == typeof e ? (t = t || {}, t.pid = e) : t = e, t.logCode && (l = t.logCode || 11), t.plugins || (t.plugins = []), p.offGlobalError(), p.config(t);
            var o = {enable: !0, uc: !1, options: {sampleRate: 1}};
            n = n || {}, s.extend(o, n), o.enable && p.addPlugin(r, o.options), !u && o.uc && p.addPlugin(i, o.options), p.onGlobalError()
        } catch (e) {
            console && console.log(e)
        }
        return p
    }, p.sendLog = function (e, t) {
        if (!e) return !1;
        try {
            if ("string" == typeof e) t = t || {}, t.code || (t.code = l), t.msg = e; else {
                if ("object" != typeof e) return !1;
                t = {code: l}, s.extend(t, e)
            }
            return p.log(t), !0
        } catch (e) {
            return console && console.log(e), !1
        }
    };
    var d = "undefined" != typeof window ? window : "undefined" != typeof self ? self : {};
    d.PPTracker = p, e.exports = p
}, function (e, t, n) {
    "use strict";

    function o(e, t) {
        var n = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance;
        if (window.ucweb && window.ucweb.window && window.ucweb.window.performance && n && n.timing) {
            var o = n.setResourceTimingBufferSize || n.webkitSetResourceTimingBufferSize;
            o && o.call(n, 200);
            var i = {sampleRate: 1}, a = r.extend(i, t), s = {
                api: "https://track.uc.cn/collect",
                ucParams: "dnfrpinwntcpve",
                appId: "29d38cf5412c",
                lt: "performance"
            }, c = {
                scriptLog: function () {
                    var t = {appid: s.appId, lt: s.lt, uc_param_str: s.ucParams};
                    return t.pid = e.pid, t.page = window.location.href.split("?")[0], t.query = window.location.search, t.sampleRate = a.sampleRate, t
                }, scriptPageLog: function () {
                    var t = this.scriptLog();
                    this.needSend = !0;
                    var n = this.collectPerformanceTiming();
                    for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o]);
                    if (e.extendParams) for (var r in e.extendParams) e.extendParams.hasOwnProperty(r) && (t[r] = e.extendParams[r]);
                    return t
                }, collectPerformanceTiming: function () {
                    var e = {}, t = n.timing, o = window.ucweb.window.performance, i = (new Date).getTime();
                    e.loadTime = t.loadEventEnd - t.fetchStart, e.domReadyTime = t.domComplete - t.domInteractive, e.readyStart = t.fetchStart - t.navigationStart, e.redirectTime = t.redirectEnd - t.redirectStart, e.appcacheTime = t.domainLookupStart - t.fetchStart, e.lookupDomainTime = t.domainLookupEnd - t.domainLookupStart, e.connectTime = t.connectEnd - t.connectStart, e.requestTime = t.responseEnd - t.requestStart, e.initDomTreeTime = t.domInteractive - t.responseEnd, e.loadEventTime = t.loadEventEnd - t.loadEventStart, e.tillDomLookupEndTime = t.domainLookupEnd - t.navigationStart, e.tillResponseEndTime = t.responseEnd - t.navigationStart, e.tillDomReadyTime = t.domInteractive - t.navigationStart, e.totalTime = t.loadEventEnd - t.navigationStart, e.stayTime = i - t.navigationStart, e.t0 = o.t0, e.t1 = o.t1, e.t2 = o.t2;
                    for (var a in e) e.hasOwnProperty(a) && (!r.isNumber(e[a]) || r.isNaN(e[a]) || e[a] < 0 ? e[a] = -1 : e[a] = parseFloat(e[a].toFixed(2)));
                    return e
                }, checkDirtyIndexes: function (e) {
                    var t = !0;
                    for (var n in e) if (e.hasOwnProperty(n) && e[n] === -2) {
                        t = !1;
                        break
                    }
                    return t
                }, checkSampleRate: function () {
                    return !(null != a.sampleRate && Math.random() > a.sampleRate)
                }, log: function (e) {
                    var t = [];
                    for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    var o = s.api + "?" + t.join("&");
                    if (navigator.sendBeacon) navigator.sendBeacon(o); else {
                        var r = new Image;
                        r.src = o
                    }
                }, getPagePerformance: function () {
                    var e = this;
                    try {
                        if (!e.checkSampleRate()) return;
                        var t = e.scriptPageLog();
                        e.log(t)
                    } catch (e) {
                        console && console.log(e)
                    }
                }
            };
            try {
                window.ucweb.window.addEventListener("BacktracePaintReady", function () {
                    c.getPagePerformance()
                }, !1)
            } catch (e) {
                console && console.log(e)
            }
        }
    }

    var r = n(10);
    e.exports = o
}, function (e, t, n) {
    /**!
     * cookie操作
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   陈精任 <jingren.cjr@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/89291)
     */
    "use strict";
    var o = n(1);
    o.cookie = {
        set: function (e, t, n) {
            n && "object" == typeof n || (n = {});
            var o = e + "=" + encodeURIComponent(t);
            if (n && n.seconds) {
                var r = new Date;
                r.setTime(r.getTime() + 1e3 * n.seconds), o += ";expires=" + r.toGMTString()
            }
            n && n.path && (o += ";path=" + n.path), n && n.domain && (o += ";domain=" + n.domain), document.cookie = o
        }, get: function (e) {
            var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return document.cookie.match(n) ? (t = document.cookie.match(n), decodeURIComponent(t[2])) : null
        }, del: function (e) {
            var t = new Date, n = o.cookie.get(e);
            t.setTime(t.getTime() - 1), null != n && (document.cookie = e + "=" + n + ";expires=" + t.toGMTString())
        }
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    var o = n(7);
    !function (e) {
        function t(t, n, o) {
            var r = e.Event(n);
            return e(t).trigger(r, o), !r.isDefaultPrevented()
        }

        function n(e, n, o, r) {
            if (e.global) return t(n || y, o, r)
        }

        function o(t) {
            t.global && 0 === e.active++ && n(t, null, "ajaxStart")
        }

        function r(t) {
            t.global && !--e.active && n(t, null, "ajaxStop")
        }

        function i(e, t) {
            var o = t.context;
            return t.beforeSend.call(o, e, t) !== !1 && n(t, o, "ajaxBeforeSend", [e, t]) !== !1 && void n(t, o, "ajaxSend", [e, t])
        }

        function a(e, t, o, r) {
            var i = o.context, a = "success";
            o.success.call(i, e, a, t), r && r.resolveWith(i, [e, a, t]), n(o, i, "ajaxSuccess", [t, o, e]), c(a, t, o)
        }

        function s(e, t, o, r, i) {
            var a = r.context;
            r.error.call(a, o, t, e), i && i.rejectWith(a, [o, t, e]), n(r, a, "ajaxError", [o, r, e || t]), c(t, o, r)
        }

        function c(e, t, o) {
            var i = o.context;
            o.complete.call(i, t, e), n(o, i, "ajaxComplete", [t, o]), r(o)
        }

        function u(e, t, n) {
            if (n.dataFilter == l) return e;
            var o = n.context;
            return n.dataFilter.call(o, e, t)
        }

        function l() {
        }

        function p(e) {
            return e && (e = e.split(";", 2)[0]), e && (e == T ? "html" : e == x ? "json" : b.test(e) ? "script" : S.test(e) && "xml") || "text"
        }

        function d(e, t) {
            return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
        }

        function f(t) {
            t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = d(t.url, t.data), t.data = void 0)
        }

        function h(t, n, o, r) {
            return e.isFunction(n) && (r = o, o = n, n = void 0), e.isFunction(o) || (r = o, o = void 0), {
                url: t,
                data: n,
                success: o,
                dataType: r
            }
        }

        function g(t, n, o, r) {
            var i, a = e.isArray(n), s = e.isPlainObject(n);
            e.each(n, function (n, c) {
                i = e.type(c), r && (n = o ? r : r + "[" + (s || "object" == i || "array" == i ? n : "") + "]"), !r && a ? t.add(c.name, c.value) : "array" == i || !o && "object" == i ? g(t, c, o, n) : t.add(n, c)
            })
        }

        var m, _, v = +new Date, y = window.document, w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            b = /^(?:text|application)\/javascript/i, S = /^(?:text|application)\/xml/i, x = "application/json",
            T = "text/html", E = /^\s*$/, A = y.createElement("a");
        A.href = window.location.href, e.active = 0, e.ajaxJSONP = function (t, n) {
            if (!("type" in t)) return e.ajax(t);
            var o, r, c = t.jsonpCallback, u = (e.isFunction(c) ? c() : c) || "Zepto" + v++,
                l = y.createElement("script"), p = window[u], d = function (t) {
                    e(l).triggerHandler("error", t || "abort")
                }, f = {abort: d};
            return n && n.promise(f), e(l).on("load error", function (i, c) {
                clearTimeout(r), e(l).off().remove(), "error" != i.type && o ? a(o[0], f, t, n) : s(null, c || "error", f, t, n), window[u] = p, o && e.isFunction(p) && p(o[0]), p = o = void 0
            }), i(f, t) === !1 ? (d("abort"), f) : (window[u] = function () {
                o = arguments
            }, l.src = t.url.replace(/\?(.+)=\?/, "?$1=" + u), y.head.appendChild(l), t.timeout > 0 && (r = setTimeout(function () {
                d("timeout")
            }, t.timeout)), f)
        }, e.ajaxSettings = {
            type: "GET",
            beforeSend: l,
            success: l,
            error: l,
            complete: l,
            context: null,
            global: !0,
            xhr: function () {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: x,
                xml: "application/xml, text/xml",
                html: T,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0,
            dataFilter: l
        }, e.ajax = function (t) {
            var n, r, c = e.extend({}, t || {}), h = e.Deferred && e.Deferred();
            for (m in e.ajaxSettings) void 0 === c[m] && (c[m] = e.ajaxSettings[m]);
            o(c), c.crossDomain || (n = y.createElement("a"), n.href = c.url, n.href = n.href, c.crossDomain = A.protocol + "//" + A.host != n.protocol + "//" + n.host), c.url || (c.url = window.location.toString()), (r = c.url.indexOf("#")) > -1 && (c.url = c.url.slice(0, r)), f(c);
            var g = c.dataType, v = /\?.+=\?/.test(c.url);
            if (v && (g = "jsonp"), c.cache !== !1 && (t && t.cache === !0 || "script" != g && "jsonp" != g) || (c.url = d(c.url, "_=" + Date.now())), "jsonp" == g) return v || (c.url = d(c.url, c.jsonp ? c.jsonp + "=?" : c.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(c, h);
            var w, b = c.accepts[g], S = {}, x = function (e, t) {
                    S[e.toLowerCase()] = [e, t]
                }, T = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : window.location.protocol, I = c.xhr(),
                P = I.setRequestHeader;
            if (h && h.promise(I), c.crossDomain || x("X-Requested-With", "XMLHttpRequest"), x("Accept", b || "*/*"), (b = c.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), I.overrideMimeType && I.overrideMimeType(b)), (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && x("Content-Type", c.contentType || "application/x-www-form-urlencoded"), c.headers) for (_ in c.headers) x(_, c.headers[_]);
            if (I.setRequestHeader = x, I.onreadystatechange = function () {
                if (4 == I.readyState) {
                    I.onreadystatechange = l, clearTimeout(w);
                    var t, n = !1;
                    if (I.status >= 200 && I.status < 300 || 304 == I.status || 0 == I.status && "file:" == T) {
                        if (g = g || p(c.mimeType || I.getResponseHeader("content-type")), "arraybuffer" == I.responseType || "blob" == I.responseType) t = I.response; else {
                            t = I.responseText;
                            try {
                                t = u(t, g, c), "script" == g ? (0, eval)(t) : "xml" == g ? t = I.responseXML : "json" == g && (t = E.test(t) ? null : e.parseJSON(t))
                            } catch (e) {
                                n = e
                            }
                            if (n) return s(n, "parsererror", I, c, h)
                        }
                        a(t, I, c, h)
                    } else s(I.statusText || null, I.status ? "error" : "abort", I, c, h)
                }
            }, i(I, c) === !1) return I.abort(), s(null, "abort", I, c, h), I;
            var k = !("async" in c) || c.async;
            if (I.open(c.type, c.url, k, c.username, c.password), c.xhrFields) for (_ in c.xhrFields) I[_] = c.xhrFields[_];
            for (_ in S) P.apply(I, S[_]);
            return c.timeout > 0 && (w = setTimeout(function () {
                I.onreadystatechange = l, I.abort(), s(null, "timeout", I, c, h)
            }, c.timeout)), I.send(c.data ? c.data : null), I
        }, e.get = function () {
            return e.ajax(h.apply(null, arguments))
        }, e.post = function () {
            var t = h.apply(null, arguments);
            return t.type = "POST", e.ajax(t)
        }, e.getJSON = function () {
            var t = h.apply(null, arguments);
            return t.dataType = "json", e.ajax(t)
        }, e.fn.load = function (t, n, o) {
            if (!this.length) return this;
            var r, i = this, a = t.split(/\s/), s = h(t, n, o), c = s.success;
            return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function (t) {
                i.html(r ? e("<div>").html(t.replace(w, "")).find(r) : t), c && c.apply(i, arguments)
            }, e.ajax(s), this
        };
        var I = encodeURIComponent;
        e.param = function (t, n) {
            var o = [];
            return o.add = function (t, n) {
                e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(I(t) + "=" + I(n))
            }, g(o, t, n), o.join("&").replace(/%20/g, "+")
        }
    }(o), e.exports = o
}, function (e, t, n) {
    "use strict";
    var o = n(7);
    !function (e) {
        function t(e) {
            return e._zid || (e._zid = d++)
        }

        function n(e, n, i, a) {
            if (n = o(n), n.ns) var s = r(n.ns);
            return (m[t(e)] || []).filter(function (e) {
                return e && (!n.e || e.e == n.e) && (!n.ns || s.test(e.ns)) && (!i || t(e.fn) === t(i)) && (!a || e.sel == a)
            })
        }

        function o(e) {
            var t = ("" + e).split(".");
            return {e: t[0], ns: t.slice(1).sort().join(" ")}
        }

        function r(e) {
            return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
        }

        function i(e, t) {
            return e.del && !v && e.e in y || !!t
        }

        function a(e) {
            return w[e] || v && y[e] || e
        }

        function s(n, r, s, c, l, d, f) {
            var h = t(n), g = m[h] || (m[h] = []);
            r.split(/\s/).forEach(function (t) {
                if ("ready" == t) return e(document).ready(s);
                var r = o(t);
                r.fn = s, r.sel = l, r.e in w && (s = function (t) {
                    var n = t.relatedTarget;
                    if (!n || n !== this && !e.contains(this, n)) return r.fn.apply(this, arguments)
                }), r.del = d;
                var h = d || s;
                r.proxy = function (e) {
                    if (e = u(e), !e.isImmediatePropagationStopped()) {
                        e.data = c;
                        var t = h.apply(n, e._args == p ? [e] : [e].concat(e._args));
                        return t === !1 && (e.preventDefault(), e.stopPropagation()), t
                    }
                }, r.i = g.length, g.push(r), "addEventListener" in n && n.addEventListener(a(r.e), r.proxy, i(r, f))
            })
        }

        function c(e, o, r, s, c) {
            var u = t(e);
            (o || "").split(/\s/).forEach(function (t) {
                n(e, t, r, s).forEach(function (t) {
                    delete m[u][t.i], "removeEventListener" in e && e.removeEventListener(a(t.e), t.proxy, i(t, c))
                })
            })
        }

        function u(t, n) {
            if (n || !t.isDefaultPrevented) {
                n || (n = t), e.each(T, function (e, o) {
                    var r = n[e];
                    t[e] = function () {
                        return this[o] = b, r && r.apply(n, arguments)
                    }, t[o] = S
                });
                try {
                    t.timeStamp || (t.timeStamp = Date.now())
                } catch (e) {
                }
                (n.defaultPrevented !== p ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = b)
            }
            return t
        }

        function l(e) {
            var t, n = {originalEvent: e};
            for (t in e) x.test(t) || e[t] === p || (n[t] = e[t]);
            return u(n, e)
        }

        var p, d = 1, f = Array.prototype.slice, h = e.isFunction, g = function (e) {
                return "string" == typeof e
            }, m = {}, _ = {}, v = "onfocusin" in window, y = {focus: "focusin", blur: "focusout"},
            w = {mouseenter: "mouseover", mouseleave: "mouseout"};
        _.click = _.mousedown = _.mouseup = _.mousemove = "MouseEvents", e.event = {
            add: s,
            remove: c
        }, e.proxy = function (n, o) {
            var r = 2 in arguments && f.call(arguments, 2);
            if (h(n)) {
                var i = function () {
                    return n.apply(o, r ? r.concat(f.call(arguments)) : arguments)
                };
                return i._zid = t(n), i
            }
            if (g(o)) return r ? (r.unshift(n[o], n), e.proxy.apply(null, r)) : e.proxy(n[o], n);
            throw new TypeError("expected function")
        }, e.fn.bind = function (e, t, n) {
            return this.on(e, t, n)
        }, e.fn.unbind = function (e, t) {
            return this.off(e, t)
        }, e.fn.one = function (e, t, n, o) {
            return this.on(e, t, n, o, 1)
        };
        var b = function () {
            return !0
        }, S = function () {
            return !1
        }, x = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, T = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        e.fn.delegate = function (e, t, n) {
            return this.on(t, e, n)
        }, e.fn.undelegate = function (e, t, n) {
            return this.off(t, e, n)
        }, e.fn.live = function (t, n) {
            return e(document.body).delegate(this.selector, t, n), this
        }, e.fn.die = function (t, n) {
            return e(document.body).undelegate(this.selector, t, n), this
        }, e.fn.on = function (t, n, o, r, i) {
            var a, u, d = this;
            return t && !g(t) ? (e.each(t, function (e, t) {
                d.on(e, n, o, t, i)
            }), d) : (g(n) || h(r) || r === !1 || (r = o, o = n, n = p), r !== p && o !== !1 || (r = o, o = p), r === !1 && (r = S), d.each(function (p, d) {
                i && (a = function (e) {
                    return c(d, e.type, r), r.apply(this, arguments)
                }), n && (u = function (t) {
                    var o, i = e(t.target).closest(n, d).get(0);
                    if (i && i !== d) return o = e.extend(l(t), {
                        currentTarget: i,
                        liveFired: d
                    }), (a || r).apply(i, [o].concat(f.call(arguments, 1)))
                }), s(d, t, r, o, n, u || a)
            }))
        }, e.fn.off = function (t, n, o) {
            var r = this;
            return t && !g(t) ? (e.each(t, function (e, t) {
                r.off(e, n, t)
            }), r) : (g(n) || h(o) || o === !1 || (o = n, n = p), o === !1 && (o = S), r.each(function () {
                c(this, t, o, n)
            }))
        }, e.fn.trigger = function (t, n) {
            return t = g(t) || e.isPlainObject(t) ? e.Event(t) : u(t), t._args = n, this.each(function () {
                t.type in y && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
            })
        }, e.fn.triggerHandler = function (t, o) {
            var r, i;
            return this.each(function (a, s) {
                r = l(g(t) ? e.Event(t) : t), r._args = o, r.target = s, e.each(n(s, t.type || t), function (e, t) {
                    if (i = t.proxy(r), r.isImmediatePropagationStopped()) return !1
                })
            }), i
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
            e.fn[t] = function (e) {
                return 0 in arguments ? this.bind(t, e) : this.trigger(t)
            }
        }), e.Event = function (e, t) {
            g(e) || (t = e, e = t.type);
            var n = document.createEvent(_[e] || "Events"), o = !0;
            if (t) for (var r in t) "bubbles" == r ? o = !!t[r] : n[r] = t[r];
            return n.initEvent(e, o, !0), u(n)
        }
    }(o), e.exports = o
}, function (e, t, n) {
    "use strict";
    var o = n(7);
    !function (e) {
        e.fn.serializeArray = function () {
            var t, n, o = [], r = function e(n) {
                return n.forEach ? n.forEach(e) : void o.push({name: t, value: n})
            };
            return this[0] && e.each(this[0].elements, function (o, i) {
                n = i.type, t = i.name, t && "fieldset" != i.nodeName.toLowerCase() && !i.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || i.checked) && r(e(i).val())
            }), o
        }, e.fn.serialize = function () {
            var e = [];
            return this.serializeArray().forEach(function (t) {
                e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
            }), e.join("&")
        }, e.fn.submit = function (t) {
            if (0 in arguments) this.bind("submit", t); else if (this.length) {
                var n = e.Event("submit");
                this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(o), e.exports = o
}, function (e, t) {
    "use strict";
    !function () {
        try {
            getComputedStyle(void 0)
        } catch (t) {
            var e = getComputedStyle;
            window.getComputedStyle = function (t, n) {
                try {
                    return e(t, n)
                } catch (e) {
                    return null
                }
            }
        }
    }()
}, function (e, t, n) {
    "use strict";
    var o = n(7);
    !function (e) {
        function t(e, t, n, o) {
            return Math.abs(e - t) >= Math.abs(n - o) ? e - t > 0 ? "Left" : "Right" : n - o > 0 ? "Up" : "Down"
        }

        function n() {
            l = null, d.last && (d.el.trigger("longTap"), d = {})
        }

        function o() {
            l && clearTimeout(l), l = null
        }

        function r() {
            s && clearTimeout(s), c && clearTimeout(c), u && clearTimeout(u), l && clearTimeout(l), s = c = u = l = null, d = {}
        }

        function i(e) {
            return ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
        }

        function a(e, t) {
            return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
        }

        var s, c, u, l, p, d = {}, f = 750;
        e(document).ready(function () {
            var h, g, m, _, v = 0, y = 0;
            "MSGesture" in window && (p = new MSGesture, p.target = document.body), e(document).bind("MSGestureEnd", function (e) {
                var t = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null;
                t && (d.el.trigger("swipe"), d.el.trigger("swipe" + t))
            }).on("touchstart MSPointerDown pointerdown", function (t) {
                (_ = a(t, "down")) && !i(t) || (m = _ ? t : t.touches[0], t.touches && 1 === t.touches.length && d.x2 && (d.x2 = void 0, d.y2 = void 0), h = Date.now(), g = h - (d.last || h), d.el = e("tagName" in m.target ? m.target : m.target.parentNode), s && clearTimeout(s), d.x1 = m.pageX, d.y1 = m.pageY, g > 0 && g <= 250 && (d.isDoubleTap = !0), d.last = h, l = setTimeout(n, f), p && _ && p.addPointer(t.pointerId))
            }).on("touchmove MSPointerMove pointermove", function (e) {
                (_ = a(e, "move")) && !i(e) || (m = _ ? e : e.touches[0], o(), d.x2 = m.pageX, d.y2 = m.pageY, v += Math.abs(d.x1 - d.x2), y += Math.abs(d.y1 - d.y2))
            }).on("touchend MSPointerUp pointerup", function (n) {
                (_ = a(n, "up")) && !i(n) || (o(), d.x2 && Math.abs(d.x1 - d.x2) > 30 || d.y2 && Math.abs(d.y1 - d.y2) > 30 ? u = setTimeout(function () {
                    d.el && (d.el.trigger("swipe"), d.el.trigger("swipe" + t(d.x1, d.x2, d.y1, d.y2))), d = {}
                }, 0) : "last" in d && (v < 30 && y < 30 ? c = setTimeout(function () {
                    var t = e.Event("tap");
                    t.cancelTouch = r, d.el && d.el.trigger(t), d.isDoubleTap ? (d.el && d.el.trigger("doubleTap"), d = {}) : s = setTimeout(function () {
                        s = null, d.el && d.el.trigger("singleTap"), d = {}
                    }, 250)
                }, 0) : d = {}), v = y = 0)
            }).on("touchcancel MSPointerCancel pointercancel", r), e(window).on("scroll", r)
        }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (t) {
            e.fn[t] = function (e) {
                return this.on(t, e)
            }
        })
    }(o), e.exports = o
}, function (e, t) {
    (function (t) {
        /**!
         * 书旗客户端js接口
         *
         * Copyright(c) Alibaba Group Holding Limited.
         *
         * Authors:
         *   徐闻东 <wendong.xwd@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/106725)
         */
        "use strict";
        var n = function (e) {
            var t = {}, o = window.shuqiAppWall;
            return t.isInShuqiClient = function () {
                return "undefined" != typeof o
            }, t.callAndroidMehod = function (e, t) {
                return o ? "string" == typeof e && o[e] ? "string" == typeof t ? o[e](t) : o[e]() : {} : void console.log("call method " + e + " but ShuqiClient not exist")
            }, t.jonsParseString = function (e) {
                try {
                    e = JSON.stringify(e)
                } catch (e) {
                }
                return e
            }, e.Sqca = n, void 0 === e.sqca && (e.sqca = n), t
        }("undefined" != typeof window ? window : t);
        e.exports = n
    }).call(t, function () {
        return this
    }())
}, function (e, t, n) {
    /**!
     * 书旗客户端系统相关js接口
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   徐闻东 <wendong.xwd@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/106725)
     */
    "use strict";
    var o = n(41);
    o.ShowBar = function (e, t) {
        var n = {actionBar: {show: !0, title: e, rightItem: t}};
        n = o.jonsParseString(n), o.callAndroidMehod("config", n)
    }, o.copy2Clipboard = function (e) {
        var t = {content: e || ""};
        t = o.jonsParseString(t), o.callAndroidMehod("copy2Clipboard", t)
    }, o.webNavigation = function (e) {
        var t = {action: e || "goBack"};
        return t = o.jonsParseString(t), o.callAndroidMehod("webNavigation", t)
    }, o.getClientInfo = function () {
        var e = o.callAndroidMehod("getClientInfo");
        try {
            e = JSON.parse(e)
        } catch (t) {
            e = {}
        }
        return e
    }, o.showToast = function (e) {
        var t = {message: e || ""};
        t = o.jonsParseString(t), o.callAndroidMehod("showToast", t)
    }, e.exports = o
}, function (e, t, n) {
    (function (t) {
        "use strict";

        function o(e) {
            return this instanceof o ? (e = e || {}, e.hotPatch === !0 && this._hotPatch(), e.global !== !1 && "object" == typeof m.__trackerOptions && i(e, m.__trackerOptions), this.global = null == e.global || !!e.global, this.pid = e.pid, this.sampleRate = e.sampleRate || 1, this.uidResolver = e.uidResolver || a, this.userOptions = e, this.requiredFields = e.requiredFields || [], this.releaseResolver = e.releaseResolver || a, this.uaParser = e.uaParser || a, this.beforeLog = e.beforeLog || null, this.msgWhitelist = e.msgWhitelist || e.msgWhiteList || E, this.urlWhitelist = e.urlWhitelist || e.urlWhiteList || A, this.oncePerSession = void 0 === e.oncePerSession || e.oncePerSession, this.consoleDisplay = e.consoleDisplay || !1, this.ignoreScriptError = e.ignoreScriptError || !1, this.ignoredQueries = e.ignoredQueries || [], this.global && (m.__trackerOptions = e), this._inited = !1, this._tracked = [], this._logWaitingQueue = [], this._plugins = e.plugins || [], this._pos = "0,0", void this._trackMousePos()) : new o(e)
        }

        var r = n(10), i = r.shallowMerge, a = r.noop, s = r.generateIdentifier, c = r.getScreenSize, u = r.addEvent,
            l = r.getSpm, p = r.isError, d = n(46), f = n(45), h = r.unifyErrorMsg, g = !1;
        try {
            g = "[object process]" === t.process.toString()
        } catch (e) {
        }
        var m = {};
        g || (m = "undefined" != typeof window ? window : "undefined" != typeof self ? self : {});
        var _ = m.document, v = m.navigator, y = !1, w = m.Tracker, b = {JS_ERROR: 1}, S = "//gm.mmstat.com/",
            x = "http://gm.mmstat.com/", T = "fsp.1.1", E = null, A = null, I = +new Date, P = m.onerror;
        o.noConflict = function () {
            return m.Tracker === o && (m.Tracker = w), o
        }, o.prototype = {
            VERSION: "3.5.5", log: function (e, t) {
                "object" == typeof e ? t = e : "string" == typeof e && (t = t || {}, i(t, {
                    code: 1,
                    msg: e
                })), this._log(t)
            }, captureMessage: function (e, t) {
                return this.log(e, t)
            }, logError: function (e, t) {
                if (!p(e)) return this.log(e, t);
                if (t = t || {}, t.c1 || t.c2 || t.c3) return void this.warn("使用 tracker.logError() 时不可再传入 c1,c2,c3 字段，请求未发送");
                var n = {}, o = f(e);
                n.msg = e.toString(), n.c1 = o[0], n.c2 = o[1], n.c3 = o[2], i(n, t), this._log(n)
            }, captureException: function (e, t) {
                return this.logError(e, t)
            }, logReq: function () {
                this.warn("logReq() 方法已经废弃，若有需要，请使用自定义打点方式( `tracker.log()` )监控接口错误。")
            }, logPerf: function () {
                this.warn("logPerf() 方法已经废弃，若有需要，请使用自定义打点方式( `tracker.log()` )监控接口错误。")
            }, config: function (e, t) {
                return "string" == typeof e ? (t = t || {}, t.pid = e) : t = e, i(this, t, !0), i(this.userOptions, t, !0), "object" == typeof m.__trackerOptions && i(m.__trackerOptions, t, !0), this._checkRequiredFields() && this._popWaitingQueue(), this
            }, onGlobalError: function () {
                if (!_) return this;
                var e = this;
                if (this.pid && !this._inited) {
                    if (m.onerror = function (t, n, o, r, i) {
                        e._handleError(t, n, o, r, i)
                    }, this._plugins.length) for (; this._plugins.length > 0;) {
                        var t = this._plugins.pop(), n = t[0], o = t[1];
                        n.apply(this, [this].concat(o))
                    }
                    this._inited = !0
                }
                return this
            }, install: function () {
                return this.onGlobalError()
            }, offGlobalError: function () {
                return _ ? (m.onerror = P, this._inited = !1, this._plugins = [], this._tracked = [], this) : this
            }, uninstall: function () {
                return this.offGlobalError()
            }, addPlugin: function (e) {
                if (!_) return this;
                var t = [].slice.call(arguments, 1);
                return "function" == typeof e && this._inited ? e.apply(this, [this].concat(t)) : this._plugins.push([e, t]), this
            }, _handleError: function (e, t, n, o, r) {
                if (P) try {
                    P.call(this, e, t, n, o, r)
                } catch (e) {
                }
                t = t || "-", n = n || "-", o = o || "-", e = h(e);
                var i = {msg: e, code: b.JS_ERROR};
                if (!this.ignoreScriptError || "Script error" !== e) {
                    if (null != r && (1 === this.sampleRate || Math.random() < .1)) {
                        var a = f(r);
                        i.c1 = a[0], i.c2 = a[1], i.c3 = a[2]
                    }
                    this._log(i)
                }
            }, _handleMouseDown: function (e) {
                var t = _ && _.documentElement, n = Math.round(e.pageY || e.clientY + _.body.scrollTop + t.scrollTop),
                    o = Math.round(e.pageX || e.clientX + _.body.scrollLeft + t.scrollLeft),
                    r = Math.max(t.clientWidth, t.offsetWidth, t.scrollWidth);
                o -= r / 2, this._pos = String(o) + "," + String(n)
            }, _trackMousePos: function () {
                var e = _ && _.documentElement, t = this;
                e && u(_, "mousedown", function (e) {
                    t._handleMouseDown(e)
                })
            }, _postData: function (e) {
                var t = !!(m.navigator && m.navigator.sendBeacon && m.Blob),
                    n = "file:" === m.location.protocol ? x + (e.base || T) : S + (e.base || T),
                    o = d.stringify(e, ["code", "base", "sampleRate", "oncePerSession"], t);
                if (t) try {
                    m.navigator.sendBeacon(n, JSON.stringify({gmkey: "OTHER", gokey: o, logtype: "2"}))
                } catch (t) {
                    o = d.stringify(e, ["code", "base", "sampleRate", "oncePerSession"], !1);
                    var r = new Image;
                    r.src = n + "?" + o
                } else {
                    var r = new Image;
                    r.src = n + "?" + o
                }
            }, _log: function (e) {
                if (!_) return this;
                if (e = e || {}, e.type || e.code || (e.type = 1), !e.type && e.code && (e.type = e.code), !(e.type === b.JS_ERROR && Math.random() > (e.sampleRate || this.sampleRate) || null != e.sampleRate && Math.random() > e.sampleRate)) {
                    if (e = this._enhanceOpitons(e), !e.pid) return void this.warn("未配置 pid，请求未发送");
                    for (var t = s(e), n = !1, o = 0; o < this._tracked.length; o++) if (this._tracked[o] === t) {
                        n = !0;
                        break
                    }
                    var r = null == e.oncePerSession ? this.oncePerSession : e.oncePerSession;
                    if (!(r && n || this.msgWhitelist && null !== this.msgWhitelist.exec(e.msg) || this.urlWhitelist && null !== this.urlWhitelist.exec(e.page))) {
                        if ("function" == typeof this.beforeLog) {
                            var i;
                            try {
                                i = this.beforeLog(e)
                            } catch (e) {
                            }
                            if (i === !1) return;
                            "object" == typeof i && (e = i)
                        }
                        return this._tracked.push(t), this.consoleDisplay && "object" == typeof m && m.console && "function" == typeof m.console.log && m.console.log("[Tracker] %s", e.msg), this._checkRequiredFields() ? void this._postData(e) : void this._pushWaitingQueue(e)
                    }
                }
            }, _checkRequiredFields: function () {
                for (var e = 0; e < this.requiredFields.length; e++) {
                    var t = this.requiredFields[e];
                    if (void 0 === this.userOptions[t]) return !1
                }
                return !0
            }, _popWaitingQueue: function () {
                var e = this;
                if (this._logWaitingQueue && this._logWaitingQueue.length) for (var t = 0; t < this._logWaitingQueue.length; t++) {
                    var n = this._logWaitingQueue[t];
                    i(n, e._enhanceOpitonsByUser(e.userOptions), !0), e._postData(n)
                }
                this._logWaitingQueue = []
            }, _pushWaitingQueue: function (e) {
                this._logWaitingQueue.push(e)
            }, _enhanceOpitonsByUser: function (e) {
                return e.uid || (e.uid = this.uidResolver()), e.pid || (e.pid = this.pid), e.rel || (e.rel = this.releaseResolver()), e.ua || (e.ua = this.uaParser(v ? v.userAgent : "")), e
            }, _enhanceOpitons: function (e) {
                e = this._enhanceOpitonsByUser(e), e.page || (e.page = m.location.href.split("?")[0]), e.query || (e.query = d.stringify(d.parse(window.location.search), e.ignoredQueries)), e.hash || (e.hash = window.location.hash), e.title || (e.title = _.title), e.spm_a || (e.spm_a = l().a), e.spm_b || (e.spm_b = l().b), e.scr || (e.scr = c()), e.raw_ua = v ? v.userAgent : "", e.delay = parseFloat(((+new Date - I) / 1e3).toFixed(2)), e.tracker_ver = this.VERSION, e.patch_ver = this.PATCH_VERSION || "-";
                var t = _.referrer.split("?"), n = t[0],
                    o = 2 === t.length ? d.stringify(d.parse(t[1]), e.ignoredQueries) : "";
                return 2 === t.length && o.length > 0 ? e.referrer = n + "?" + o : e.referrer = n, e.last_pos = this._pos, e
            }, warn: function (e) {
                "object" == typeof m && m.console && "function" == typeof m.console.warn && m.console.warn("[Tracker] " + e)
            }, _hotPatch: function () {
                var e = "__tracker_patch__";
                if (m && _) {
                    if (y && m.__trackerPatch) return;
                    y = !0;
                    var t = Math.random();
                    if (m.localStorage && m.localStorage.getItem) {
                        var n = m.localStorage.getItem(e), o = +new Date;
                        if (n && o - parseInt(n, 10) < 432e5) t = n; else {
                            t = o;
                            try {
                                m.localStorage.setItem(e, o)
                            } catch (e) {
                            }
                        }
                    }
                    var r = _.createElement("script");
                    r.src = "//g.alicdn.com/fsp/tracker-patch/index.js?" + t, r.async = !0, r.crossOrigin = !0, r.id = "tracker-patch", (_.head || _.body).appendChild(r);
                    var i = this;
                    m.__trackerPatch = function () {
                        return i
                    }
                }
            }
        }, e.exports = o
    }).call(t, function () {
        return this
    }())
}, function (e, t, n) {
    "use strict";

    function o(e, t) {
        var n = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance;
        if (n && n.timing) {
            var o = n.setResourceTimingBufferSize || n.webkitSetResourceTimingBufferSize;
            o && o.call(n, 200);
            var s = {
                sampleRate: .1,
                isCalEntry: !1,
                dirtyThreshold: 6e4,
                scriptThreshold: 250,
                cssThreshold: 250,
                imgThreshold: 500
            };
            t && (void 0 !== t.scriptThreshold && r.isNumber(t.scriptThreshold) && t.scriptThreshold <= s.scriptThreshold && (t.scriptThreshold = s.scriptThreshold), void 0 !== t.cssThreshold && r.isNumber(t.cssThreshold) && t.cssThreshold <= s.cssThreshold && (t.cssThreshold = s.cssThreshold), void 0 !== t.imgThreshold && r.isNumber(t.imgThreshold) && t.imgThreshold <= s.imgThreshold && (t.imgThreshold = s.imgThreshold));
            var c = r.extend(s, t), u = {
                scriptLog: function () {
                    var t = {code: 3};
                    return t.pid = e.pid, t.page = window.location.href.split("?")[0], t.sampleRate = c.sampleRate, t
                }, scriptPageLog: function () {
                    var e = this.scriptLog();
                    this.needSend = !0;
                    var t = n.timing, o = t.navigationStart, r = this.collectPerformanceTiming(t);
                    for (var i in r) r.hasOwnProperty(i) && (e[i] = r[i]);
                    return e.firstPaintTime = this.collectFirstPaint(t, o), this.collectNetworkInformation() && (e.effectiveType = this.collectNetworkInformation()), e
                }, scriptEntryLog: function () {
                    var e = this.scriptLog(), t = n.getEntriesByType("resource");
                    return e.entry = JSON.stringify(this.collectEntries(t)), e
                }, collectPerformanceTiming: function (e) {
                    var t = {};
                    t.loadTime = e.loadEventEnd - e.fetchStart, t.domReadyTime = e.domComplete - e.domInteractive, t.readyStart = e.fetchStart - e.navigationStart, t.redirectTime = e.redirectEnd - e.redirectStart, t.appcacheTime = e.domainLookupStart - e.fetchStart, t.unloadEventTime = e.unloadEventEnd - e.unloadEventStart, t.lookupDomainTime = e.domainLookupEnd - e.domainLookupStart, t.connectTime = e.connectEnd - e.connectStart, t.requestTime = e.responseEnd - e.requestStart, t.initDomTreeTime = e.domInteractive - e.responseEnd, t.loadEventTime = e.loadEventEnd - e.loadEventStart, t.tillDomLookupEndTime = e.domainLookupEnd - e.navigationStart, t.tillResponseEndTime = e.responseEnd - e.navigationStart, t.tillDomReadyTime = e.domInteractive - e.navigationStart, t.totalTime = e.loadEventEnd - e.navigationStart;
                    for (var n in t) t.hasOwnProperty(n) && (!r.isNumber(t[n]) || r.isNaN(t[n]) || t[n] < 0 ? t[n] = -1 : t[n] >= c.dirtyThreshold ? t[n] = -2 : t[n] = parseFloat(t[n].toFixed(2)));
                    return t
                }, collectFirstPaint: function (e, t) {
                    var n;
                    if (window.chrome && window.chrome.loadTimes ? n = 1e3 * window.chrome.loadTimes().firstPaintTime : r.isNumber(e.msFirstPaint) && (n = e.msFirstPaint), void 0 === n || !r.isNumber(n) || r.isNaN(n)) return -1;
                    var o;
                    return o = n >= t ? parseFloat((n - t).toFixed(2)) : -1, o >= c.dirtyThreshold && (o = -2), o
                }, collectNetworkInformation: function () {
                    if (navigator.connection && navigator.connection.effectiveType) return navigator.connection.effectiveType
                }, collectEntries: function (e) {
                    for (var t, n = {}, o = 0; o < e.length; o++) t = e[o].responseEnd - e[o].fetchStart, (0 === e[o].decodedBodySize || !r.isNumber(t) || r.isNaN(t) || "script" === e[o].initiatorType && t >= c.scriptThreshold || "css" === e[o].initiatorType && t >= c.cssThreshold || "img" === e[o].initiatorType && t >= c.imgThreshold) && (n[e[o].name] = {
                        size: e[o].decodedBodySize,
                        type: e[o].initiatorType,
                        loadTime: t
                    });
                    return n
                }, checkDirtyIndexes: function (e) {
                    var t = !0;
                    for (var n in e) if (e.hasOwnProperty(n) && e[n] === -2) {
                        t = !1;
                        break
                    }
                    return t
                }, getPagePerformance: function () {
                    var t = this;
                    try {
                        var n = t.scriptPageLog();
                        n.base = a, c.isCalEntry && (n = r.extend(n, t.scriptEntryLog())), t.checkDirtyIndexes(n) && e.log(n)
                    } catch (t) {
                        e.logError(t, {pid: "fsp", code: 12, c4: e.pid})
                    }
                }
            }, l = /iPad|iPod|iPhone/.test(navigator.userAgent), p = l ? "pagehide" : "beforeunload";
            i(window, p, function () {
                /loaded|complete/.test(document.readyState) && u.getPagePerformance()
            })
        }
    }

    var r = n(10), i = r.addEvent, a = "/fsp.1.3";
    e.exports = o
}, function (e, t, n) {
    (function (t) {
        "use strict";

        function n(e) {
            for (var t = ((e || {}).stack || "").split("\n"), n = ["", "", ""], s = {}, c = 0; c < t.length; c++) {
                var u = r, l = (t[c] || "").match(u);
                if (null === l && (u = i, l = (t[c] || "").match(u)), null === l && (u = a, l = (t[c] || "").match(u)), null !== l) {
                    var p = l[1], d = s[p];
                    void 0 === d && (s[p] = "#" + c + "#", d = s[p]), t[c] = t[c].replace(p, d)
                }
            }
            if (t.length > 0) {
                t.shift();
                var f = "";
                for (c = 0; f.length + (t[c] || "").length < o && c < t.length;) f += t[c] + "\n", c++;
                n[1] = f;
                for (var h = ""; h.length + (t[c] || "").length < o && c < t.length;) h += t[c] + "\n", c++;
                n[2] = h
            }
            var g = "";
            for (p in s) s.hasOwnProperty(p) && (g += p + "@" + s[p] + ";");
            return g = g.replace(/;$/, ""), n[0] = g, n
        }

        var o = 4096,
            r = /^\s*at .*? ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::\d+)?(?::\d+)?\)?\s*$/i,
            i = /^\s*.*?(?:\(.*?\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::\d+)?(?::\d+)?\s*$/i,
            a = /^\s*at (?:(?:\[object object\])?.+ )?\(?((?:file|ms-appx|https?|blob):.*?):\d+(?::\d+)?\)?\s*$/i;
        "object" == typeof t && "test" === t.env.NODE_ENV && (r = /([^\()]+\.spec\.js)/i), e.exports = n
    }).call(t, n(14))
}, function (e, t) {
    "use strict";

    function n(e) {
        return "[object Array]" === {}.toString.call(e)
    }

    t.parse = function (e) {
        var t = {};
        if ("string" != typeof e) return t;
        if (e = (e || "").split("?")[1] || "", e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "").replace(/^(\?|#|&)/, ""), !e) return t;
        for (var o = e.split("&"), r = 0; r < o.length; ++r) {
            var i = o[r], a = i.replace(/\+/g, " ").split("="), s = a.shift(), c = a.length > 0 ? a.join("=") : void 0;
            s = decodeURIComponent(s), c = void 0 === c ? null : decodeURIComponent(c), void 0 === t[s] ? t[s] = c : n(t[s]) ? t[s].push(c) : t[s] = [t[s], c]
        }
        return t
    };
    var o = 512;
    t.stringify = function (e, t, n) {
        if (!e) return "";
        t = t || [];
        var r = [];
        for (var i in e) e.hasOwnProperty(i) && r.push(i);
        var a = [];
        r = r.sort();
        for (var s = 0; s < r.length; ++s) {
            i = r[s];
            var c = e[i];
            if (null != c) {
                for (var u = !1, l = 0; l < t.length; ++l) if (t[l] === i) {
                    u = !0;
                    break
                }
                u || a.push(encodeURIComponent(i) + "=" + encodeURIComponent(n ? encodeURIComponent(c) : String(c).slice(0, o)))
            }
        }
        return a.join("&")
    }
}, function (e, t, n) {
    (function (t, n) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   v4.2.6+9869a4bc
	 */
        "use strict";
        !function (t, n) {
            e.exports = n()
        }(void 0, function () {
            function e(e) {
                var t = typeof e;
                return null !== e && ("object" === t || "function" === t)
            }

            function o(e) {
                return "function" == typeof e
            }

            function r(e) {
                Q = e
            }

            function i(e) {
                z = e
            }

            function a() {
                return function () {
                    return t.nextTick(p)
                }
            }

            function s() {
                return "undefined" != typeof q ? function () {
                    q(p)
                } : l()
            }

            function c() {
                var e = 0, t = new X(p), n = document.createTextNode("");
                return t.observe(n, {characterData: !0}), function () {
                    n.data = e = ++e % 2
                }
            }

            function u() {
                var e = new MessageChannel;
                return e.port1.onmessage = p, function () {
                    return e.port2.postMessage(0)
                }
            }

            function l() {
                var e = setTimeout;
                return function () {
                    return e(p, 1)
                }
            }

            function p() {
                for (var e = 0; e < G; e += 2) {
                    var t = J[e], n = J[e + 1];
                    t(n), J[e] = void 0, J[e + 1] = void 0
                }
                G = 0
            }

            function d() {
                try {
                    var e = Function("return this")().require("vertx");
                    return q = e.runOnLoop || e.runOnContext, s()
                } catch (e) {
                    return l()
                }
            }

            function f(e, t) {
                var n = this, o = new this.constructor(g);
                void 0 === o[ee] && R(o);
                var r = n._state;
                if (r) {
                    var i = arguments[r - 1];
                    z(function () {
                        return C(r, o, i, n._result)
                    })
                } else I(n, o, e, t);
                return o
            }

            function h(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t) return e;
                var n = new t(g);
                return x(n, e), n
            }

            function g() {
            }

            function m() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function _() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function v(e) {
                try {
                    return e.then
                } catch (e) {
                    return re.error = e, re
                }
            }

            function y(e, t, n, o) {
                try {
                    e.call(t, n, o)
                } catch (e) {
                    return e
                }
            }

            function w(e, t, n) {
                z(function (e) {
                    var o = !1, r = y(n, t, function (n) {
                        o || (o = !0, t !== n ? x(e, n) : E(e, n))
                    }, function (t) {
                        o || (o = !0, A(e, t))
                    }, "Settle: " + (e._label || " unknown promise"));
                    !o && r && (o = !0, A(e, r))
                }, e)
            }

            function b(e, t) {
                t._state === ne ? E(e, t._result) : t._state === oe ? A(e, t._result) : I(t, void 0, function (t) {
                    return x(e, t)
                }, function (t) {
                    return A(e, t)
                })
            }

            function S(e, t, n) {
                t.constructor === e.constructor && n === f && t.constructor.resolve === h ? b(e, t) : n === re ? (A(e, re.error), re.error = null) : void 0 === n ? E(e, t) : o(n) ? w(e, t, n) : E(e, t)
            }

            function x(t, n) {
                t === n ? A(t, m()) : e(n) ? S(t, n, v(n)) : E(t, n)
            }

            function T(e) {
                e._onerror && e._onerror(e._result), P(e)
            }

            function E(e, t) {
                e._state === te && (e._result = t, e._state = ne, 0 !== e._subscribers.length && z(P, e))
            }

            function A(e, t) {
                e._state === te && (e._state = oe, e._result = t, z(T, e))
            }

            function I(e, t, n, o) {
                var r = e._subscribers, i = r.length;
                e._onerror = null, r[i] = t, r[i + ne] = n, r[i + oe] = o, 0 === i && e._state && z(P, e)
            }

            function P(e) {
                var t = e._subscribers, n = e._state;
                if (0 !== t.length) {
                    for (var o = void 0, r = void 0, i = e._result, a = 0; a < t.length; a += 3) o = t[a], r = t[a + n], o ? C(n, o, r, i) : r(i);
                    e._subscribers.length = 0
                }
            }

            function k(e, t) {
                try {
                    return e(t)
                } catch (e) {
                    return re.error = e, re
                }
            }

            function C(e, t, n, r) {
                var i = o(n), a = void 0, s = void 0, c = void 0, u = void 0;
                if (i) {
                    if (a = k(n, r), a === re ? (u = !0, s = a.error, a.error = null) : c = !0, t === a) return void A(t, _())
                } else a = r, c = !0;
                t._state !== te || (i && c ? x(t, a) : u ? A(t, s) : e === ne ? E(t, a) : e === oe && A(t, a))
            }

            function O(e, t) {
                try {
                    t(function (t) {
                        x(e, t)
                    }, function (t) {
                        A(e, t)
                    })
                } catch (t) {
                    A(e, t)
                }
            }

            function N() {
                return ie++
            }

            function R(e) {
                e[ee] = ie++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            function D() {
                return new Error("Array Methods must be provided an Array")
            }

            function L(e) {
                return new ae(this, e).promise
            }

            function M(e) {
                var t = this;
                return new t(W(e) ? function (n, o) {
                    for (var r = e.length, i = 0; i < r; i++) t.resolve(e[i]).then(n, o)
                } : function (e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }

            function j(e) {
                var t = this, n = new t(g);
                return A(n, e), n
            }

            function U() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function F() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function B() {
                var e = void 0;
                if ("undefined" != typeof n) e = n; else if ("undefined" != typeof self) e = self; else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var o = null;
                    try {
                        o = Object.prototype.toString.call(t.resolve())
                    } catch (e) {
                    }
                    if ("[object Promise]" === o && !t.cast) return
                }
                e.Promise = se
            }

            var H = void 0;
            H = Array.isArray ? Array.isArray : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            var W = H, G = 0, q = void 0, Q = void 0, z = function (e, t) {
                    J[G] = e, J[G + 1] = t, G += 2, 2 === G && (Q ? Q(p) : Z())
                }, $ = "undefined" != typeof window ? window : void 0, V = $ || {},
                X = V.MutationObserver || V.WebKitMutationObserver,
                Y = "undefined" == typeof self && "undefined" != typeof t && "[object process]" === {}.toString.call(t),
                K = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                J = new Array(1e3), Z = void 0;
            Z = Y ? a() : X ? c() : K ? u() : void 0 === $ ? d() : l();
            var ee = Math.random().toString(36).substring(2), te = void 0, ne = 1, oe = 2, re = {error: null}, ie = 0,
                ae = function () {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(g), this.promise[ee] || R(this.promise), W(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? E(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && E(this.promise, this._result))) : A(this.promise, D())
                    }

                    return e.prototype._enumerate = function (e) {
                        for (var t = 0; this._state === te && t < e.length; t++) this._eachEntry(e[t], t)
                    }, e.prototype._eachEntry = function (e, t) {
                        var n = this._instanceConstructor, o = n.resolve;
                        if (o === h) {
                            var r = v(e);
                            if (r === f && e._state !== te) this._settledAt(e._state, t, e._result); else if ("function" != typeof r) this._remaining--, this._result[t] = e; else if (n === se) {
                                var i = new n(g);
                                S(i, e, r), this._willSettleAt(i, t)
                            } else this._willSettleAt(new n(function (t) {
                                return t(e)
                            }), t)
                        } else this._willSettleAt(o(e), t)
                    }, e.prototype._settledAt = function (e, t, n) {
                        var o = this.promise;
                        o._state === te && (this._remaining--, e === oe ? A(o, n) : this._result[t] = n), 0 === this._remaining && E(o, this._result)
                    }, e.prototype._willSettleAt = function (e, t) {
                        var n = this;
                        I(e, void 0, function (e) {
                            return n._settledAt(ne, t, e)
                        }, function (e) {
                            return n._settledAt(oe, t, e)
                        })
                    }, e
                }(), se = function () {
                    function e(t) {
                        this[ee] = N(), this._result = this._state = void 0, this._subscribers = [], g !== t && ("function" != typeof t && U(), this instanceof e ? O(this, t) : F())
                    }

                    return e.prototype.catch = function (e) {
                        return this.then(null, e)
                    }, e.prototype.finally = function (e) {
                        var t = this, n = t.constructor;
                        return o(e) ? t.then(function (t) {
                            return n.resolve(e()).then(function () {
                                return t
                            })
                        }, function (t) {
                            return n.resolve(e()).then(function () {
                                throw t
                            })
                        }) : t.then(e, e)
                    }, e
                }();
            return se.prototype.then = f, se.all = L, se.race = M, se.resolve = h, se.reject = j, se._setScheduler = r, se._setAsap = i, se._asap = z, se.polyfill = B, se.Promise = se, se
        })
    }).call(t, n(14), function () {
        return this
    }())
}, function (e, t, n) {
    /**!
     * fact 平台打点
     * http://yes.uc.cn/
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   徐闻东 <wendong.xwd@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/106725)
     */
    "use strict";
    var o = n(1), r = n(49), i = "29d38cf5412c";
    e.exports = function () {
        function e(e) {
            e || console.warn("if you want to see your data on http://yes.sz.uae.uc.cn/web/yes, you must have a app_key of fact。Please check out http://gitlab.alibaba-inc.com/ppweb/pp-weblog/tree/master/src/fact to see more details")
        }

        function t(e) {
            var t = {};
            return "object" != typeof e && (e = {}), o.extend(t, u), o.extend(t, l), o.extend(t, e), t
        }

        var n = {}, a = 1, s = 1, c = 1, u = {appid: i, app_key: "", lt: "fact-common-log"},
            l = {entry: "", abtest: "", fact_link_id: ""};
        return n.init = function (t) {
            return "object" != typeof t ? void console.error("config is not defined") : (e(t.app_key), void o.extend(u, t))
        }, n.baseParam = function (e) {
            "object" == typeof e && o.extend(l, e)
        }, n.pageview = function (n, o) {
            var i = t(o);
            e(i.app_key), r.pageview(n, i)
        }, n.click = function (n, o) {
            var i = t(o);
            e(i.app_key), r.click(n, i)
        }, n.event = function (n, o) {
            var i = t(o);
            e(i.app_key), r.event(n, i)
        }, n.loading = function (e) {
            a && a-- && n.pageview("act_load", e)
        }, n.ready = function (e) {
            s && s-- && n.pageview("act_ready", e)
        }, n.start = function (e) {
            c && c-- && n.click("act_start", e)
        }, n.pageScene = function (e, t) {
            return e ? ("object" != typeof t && (t = {}), t.fact_node_ext = e, void n.pageview("act_scene", t)) : void console.error("sceneId required.")
        }, n.clickScene = function (e, t) {
            return e ? ("object" != typeof t && (t = {}), t.fact_node_ext = e, void n.click("act_scene", t)) : void console.error("sceneId required.")
        }, n.share = function (e) {
            n.click("act_share", e)
        }, n.download = function (e) {
            n.click("act_download", e)
        }, n.convert = function (e) {
            n.click("act_convert", e)
        }, n
    }()
}, function (e, t, n) {
    /**!
     * fact 平台打点
     * http://yes.uc.cn/
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   徐闻东 <wendong.xwd@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/106725)
     */
    "use strict";
    var o = n(1), r = n(5), i = n(4), a = n(61), s = n(50), c = n(56),
        u = "https:" === window.location.protocol ? "https:" : "http:", l = u + "//track.uc.cn/", p = l + "collect",
        d = "277c899c7008";
    e.exports = function () {
        function e(e) {
            var t = new Image;
            t.src = e
        }

        function t(e) {
            var t = 20;
            if (y.platform) e(); else var n = window.setInterval(function () {
                (y.platform || t-- < 0) && (window.clearInterval(n), e())
            }, 50)
        }

        function n() {
            r.isInAndroidClient() ? r.isInWdjOrPPClient(function (e) {
                e.isInPP ? y.platform = "PP" : e.isInNewWdj ? y.platform = "WDJ" : y.platform = "PP"
            }) : r.isInWdjClient() ? y.platform = "WDJ" : y.platform = s.pf
        }

        var u = {}, l = "ppweb-access", f = "ppweb-click", h = "ppweb-event", g = "ppweb-show",
            m = {PAGE: "pg", CLICK: "ck_id", EVENT: "event", SHOW: "show"}, _ = a.getPWID(),
            v = {appid: d, app_key: "", lt: "", sid: _, uuid: _, sessionid: _, debug: !1}, y = {platform: ""};
        return n(), u.init = function (e) {
            return "object" != typeof e ? void console.error("config is not defined") : (e.lt_access && (l = e.lt_access, delete e.lt_access), e.lt_click && (f = e.lt_click, delete e.lt_click), e.lt_event && (h = e.lt_event, delete e.lt_event), e.lt_show && (g = e.lt_show, delete e.lt_show), void o.extend(v, e))
        }, u.baseParam = function (e) {
            "object" == typeof e && o.extend(y, e)
        }, u.pageview = function (e, t) {
            v.lt = l, u.jslog(m.PAGE, e, t)
        }, u.click = function (e, t) {
            v.lt = f, u.jslog(m.CLICK, e, t)
        }, u.event = function (e, t) {
            v.lt = h, u.jslog(m.EVENT, e, t)
        }, u.show = function (e, t) {
            v.lt = g, u.jslog(m.SHOW, e, t)
        }, u.jslog = function (n, r, a) {
            var u = {}, l = {};
            "event" === n && (u.e_c = "act", u.e_a = r), "object" != typeof a && (a = {}), t(function () {
                if (o.extend(l, v), o.extend(l, y), o.extend(l, u), o.extend(l, a), l[n] = r, v.debug) console.log(p, l); else {
                    var t = i.queryFormat(p, l);
                    navigator.sendBeacon ? navigator.sendBeacon(c.ucParam(t), "") : "IOS" === s.os && "UC" === s.pf && s.compareVersion(s.getUCVersion(), "10.9.16.801") && window.ucapi ? window.ucapi.invoke("base.checkAPI", {
                        apiList: ["base.sendBeacon"],
                        success: function (n) {
                            "OK" === n.checkResult["base.sendBeacon"] ? window.ucapi.invoke("base.sendBeacon", {
                                url: c.ucParam(t),
                                success: function (e) {
                                },
                                fail: function () {
                                    e(t)
                                }
                            }) : e(t)
                        },
                        fail: function () {
                            e(t)
                        }
                    }) : e(t)
                }
            })
        }, u
    }()
}, function (e, t, n) {
    "use strict";
    !function (t, o) {
        e.exports = o(n(65))
    }(void 0, function (e) {
        function t() {
            var t = e.get(l);
            if (t) return e.set(l, t, {domain: "uc.cn"}), t;
            for (var n = (+new Date + "").substr(2, 10); n.length < u;) n += parseInt(10 * Math.random(), 10);
            return n
        }

        function n(e, t) {
            if (!e.length) return !1;
            for (var n = e.split("."), o = t.split("."), r = 0, i = o.length > n.length ? n.length : o.length; r < i;) {
                if (parseInt(n[r], 10) < parseInt(o[r], 10)) return !1;
                if (parseInt(n[r], 10) > parseInt(o[r], 10)) return !0;
                ++r
            }
            return !0
        }

        function o(e, t) {
            t = t || location.search;
            var n, o = t.indexOf("#");
            return o > 0 && (t = t.substr(0, o)), n = t.match(new RegExp("[?|&]" + encodeURIComponent(e) + "=([^&]*)(&|$)")), n && "%s" === n[1] ? n[1] : n ? decodeURIComponent(n[1]) : ""
        }

        if ("undefined" == typeof window) return {};
        var r = {}, i = window.navigator.userAgent.toLowerCase(), a = "", s = "", c = "";
        r.isUcMiniFlow = function () {
            return i.indexOf("ucminiiflow") >= 0
        }, a = "139" === o("pf") || "140" === o("pf") || "142" === o("pf") || r.isUcMiniFlow() ? "UC_MINI" : i.indexOf("dingtalk") >= 0 ? "DINGTALK" : i.indexOf("ucbrowser") >= 0 && i.indexOf("uws/") === -1 ? "UC" : i.indexOf("ucnewsapp") >= 0 || i.indexOf("ucnewsintl") >= 0 ? "UCNEWS" : i.indexOf("uclite") >= 0 ? "UCLITE" : i.indexOf("micromessenger") >= 0 ? "WECHAT" : i.indexOf("youku/") >= 0 ? "YOUKU" : new RegExp("qq/\\d+\\.\\d+\\.\\d+\\.\\d+", "i").test(i) ? "QQ" : new RegExp("weibo__\\d+\\.\\d+\\.\\d+", "i").test(i) ? "WEIBO" : i.indexOf("quark") >= 0 ? "QUARK" : i.indexOf(";fbav/") >= 0 ? "FACEBOOK" : "OTHERS", r.pf = a, r.isIOS = function () {
            if (window.__UC_PARAMS__ && window.__UC_PARAMS__.fr) return "iphone" === window.__UC_PARAMS__.fr;
            if ("UC" === a) try {
                var e = /&fr=([^&]*)/.exec(window.location.search);
                if ("android" === e[1]) return !1;
                if ("iphone" === e[1]) return !0
            } catch (e) {
            }
            return /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(i)
        }, s = r.isIOS() ? "IOS" : i.indexOf("android") > 1 ? "ANDROID" : "OTHERS", r.os = s;
        var u = 24, l = "b-user-id";
        return r.getSessionId = function () {
            try {
                var n = "UEM_SESSION_ID";
                if (c = c || window.localStorage.getItem(n)) {
                    try {
                        e.set(l, c, {domain: "uc.cn"})
                    } catch (e) {
                        console.error(e)
                    }
                    return c
                }
                return c = t(), window.localStorage.setItem(n, c), c
            } catch (e) {
                return ""
            }
        }, r.getSessionId(), r.getUCVersion = function () {
            var e = r.isUcMiniFlow() ? /ucminiiflow\/([^\s]*)/.exec(i) : /ucbrowser\/([^\s]*)/.exec(i);
            if ("UC" === a) try {
                var t = /&ve=([^&]*)/.exec(window.location.search);
                t && 2 === t.length && t[1].length > 0 && (e = t)
            } catch (e) {
            }
            return e && 2 === e.length ? e[1] : ""
        }, r.isUCLatestVersion = function (e) {
            var t = r.getUCVersion();
            return n(t, e)
        }, r.getUCNewsVersion = function () {
            var e = /ucnews(app|intl)\/([^\s]*)/.exec(i);
            return e && 3 === e.length ? e[2] : ""
        }, r.isUCNewsLatestVersion = function (e) {
            var t = r.getUCNewsVersion();
            return n(t, e)
        }, r.compareVersion = n, r.isPC = function () {
            for (var e = window.navigator.userAgent, t = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"), n = !0, o = 0; o < t.length; o++) if (e.indexOf(t[o]) > 0) {
                n = !1;
                break
            }
            return n
        }, r
    })
}, function (e, t, n) {
    /**!
     * 数据格式化
     * Copyright(c) Alibaba Group Holding Limited.
     */
    "use strict";
    var o = n(1);
    o.sizeFormat = function (e) {
        try {
            var t = ["", "KB", "MB", "GB", "TB"], n = parseInt(e);
            if (0 === n || isNaN(n)) return "0K";
            if (n < 1024) return "小于1K";
            for (var o = 0; o < t.length - 1; o++) {
                if (n < 1024) return n = Math.floor(100 * (n + .005)) / 100, n + t[o];
                n /= 1024
            }
            return n = Math.floor(100 * (n + .005)) / 100, n + t[t.length - 1]
        } catch (e) {
            return "小于1M"
        }
    }, o.numberFormat = function (e) {
        try {
            var t = parseInt(e);
            return 0 === t || isNaN(t) ? "0" : t < 1e4 ? e + "" : (t = Math.floor(10 * (t / 1e4 + .05)) / 10, t < 1e4 ? t + "万" : (t = Math.floor(10 * (t / 1e4 + .05)) / 10, t + "亿"))
        } catch (t) {
            return e + ""
        }
    }, o.downloadsFormat = o.numberFormat, o.moneyFormat = function (e, t) {
        var n, o, r = parseFloat(e);
        (isNaN(r) || 0 === r) && (r = 0), n = r === (r = Math.abs(r)), r = Math.floor(100 * r + .50000000001), o = r % 100, r = Math.floor(r / 100).toString(), o < 10 && (o = "0" + o);
        for (var i = 0; i < Math.floor((r.length - (1 + i)) / 3); i++) r = r.substring(0, r.length - (4 * i + 3)) + "," + r.substring(r.length - (4 * i + 3));
        return t ? (n ? "" : "-") + r + "." + o : (n ? "" : "-") + r
    }, o.stampFormat2Date = function (e, t) {
        t = t <= 9999999999 ? 1e3 * t : t;
        var n = t ? new Date(t) : new Date, r = function (e, t) {
                return (e += "").length < t ? new Array(++t - e.length).join("0") + e : e
            }, i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            a = {1: "st", 2: "nd", 3: "rd", 21: "st", 22: "nd", 23: "rd", 31: "st"},
            s = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            c = {
                d: function () {
                    return r(c.j(), 2)
                }, D: function () {
                    return c.l().substr(0, 3)
                }, j: function () {
                    return n.getDate()
                }, l: function () {
                    return i[c.w()]
                }, N: function () {
                    return c.w() + 1
                }, S: function () {
                    return a[c.j()] ? a[c.j()] : "th"
                }, w: function () {
                    return n.getDay()
                }, z: function () {
                    return (n - new Date(n.getFullYear() + "/1/1")) / 864e5 >> 0
                }, W: function () {
                    var e, t = c.z(), r = 364 + c.L() - t, i = (7 | new Date(n.getFullYear() + "/1/1").getDay()) - 1;
                    return r <= 2 && (7 | n.getDay()) - 1 <= 2 - r ? 1 : t <= 2 && i >= 4 && t >= 6 - i ? (e = new Date(n.getFullYear() - 1 + "/12/31"), o.stampFormat2Date("W", Math.round(e.getTime() / 1e3))) : 1 + (i <= 3 ? (t + i) / 7 : (t - (7 - i)) / 7) >> 0
                }, F: function () {
                    return s[c.n()]
                }, m: function () {
                    return r(c.n(), 2)
                }, M: function () {
                    return c.F().substr(0, 3)
                }, n: function () {
                    return n.getMonth() + 1
                }, t: function () {
                    var e;
                    return 2 === (e = n.getMonth() + 1) ? 28 + c.L() : 1 & e && e < 8 || !(1 & e) && e > 7 ? 31 : 30
                }, L: function () {
                    var e = c.Y();
                    return e % 4 !== 0 || e % 100 === 0 && e % 400 !== 0 ? 0 : 1
                }, Y: function () {
                    return n.getFullYear()
                }, y: function () {
                    return (n.getFullYear() + "").slice(2)
                }, a: function () {
                    return n.getHours() > 11 ? "pm" : "am"
                }, A: function () {
                    return c.a().toUpperCase()
                }, B: function () {
                    var e = 60 * (n.getTimezoneOffset() + 60),
                        t = 3600 * n.getHours() + 60 * n.getMinutes() + n.getSeconds() + e, o = Math.floor(t / 86.4);
                    return o > 1e3 && (o -= 1e3), o < 0 && (o += 1e3), 1 === String(o).length && (o = "00" + o), 2 === String(o).length && (o = "0" + o), o
                }, g: function () {
                    return n.getHours() % 12 || 12
                }, G: function () {
                    return n.getHours()
                }, h: function () {
                    return r(c.g(), 2)
                }, H: function () {
                    return r(n.getHours(), 2)
                }, i: function () {
                    return r(n.getMinutes(), 2)
                }, s: function () {
                    return r(n.getSeconds(), 2)
                }, O: function () {
                    var e = r(Math.abs(n.getTimezoneOffset() / 60 * 100), 4);
                    return e = n.getTimezoneOffset() > 0 ? "-" + e : "+" + e
                }, P: function () {
                    var e = c.O();
                    return e.substr(0, 3) + ":" + e.substr(3, 2)
                }, c: function () {
                    return c.Y() + "-" + c.m() + "-" + c.d() + "T" + c.h() + ":" + c.i() + ":" + c.s() + c.P()
                }, U: function () {
                    return Math.round(n.getTime() / 1e3)
                }
            };
        return e.replace(/[\\]?([a-zA-Z])/g, function (e, t) {
            var n;
            return n = e !== t ? t : c[t] ? c[t]() : t
        })
    }, o.iconFormat = function (e, t) {
        var n = function (e, t) {
            for (var n = 0; n < t.length; ++n) if (e === t[n]) return !0;
            return !1
        }, o = ".png", r = -1, i = "", a = 130, s = [50, 65, 100, 130, 195, 260];
        return t = parseInt(t || a), e ? t === -1 ? e : (r = e.indexOf(o)) > -1 ? (i = e.substring(0, r), n(t, s) || (t = a), e = i + "_" + t + "x" + t + o) : e : e
    }, e.exports = o
}, function (e, t, n) {
    /**!
     * 图片处理相关
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   主帅 <shiwang.zsw@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/104910)
     */
    "use strict";
    var o = n(1), r = n(4);
    o._webpAvailable = null, o.webpAvailable = function () {
        return null === o._webpAvailable && (o._webpAvailable = !![].map && 0 === document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")), o._webpAvailable
    }, o.canWebpFormat = function (e) {
        return !(!e || /webp/.test(e) || !/(serverfile.ac.uc.cn|android-imgs.25pp.com|img.ucdl.pp.uc.cn|a.img.pp.cn|android-screenimgs.25pp.com|img.25pp.com)\S+(jpg|jpeg|png)/.test(e))
    }, o.webpFormat = function (e) {
        return o.webpAvailable() && o.canWebpFormat(e) ? r.queryFormat(e, {"x-oss-process": "image/format,webp"}) : e
    }, e.exports = o
}, function (e, t, n) {
    var o;
    !function () {
        var r = function () {
            var e = {share: ".stencil-share"}, t = {
                title: "【推荐】专题名称",
                content: "我发现一个好玩的专题“专题名称”，你也来看看！",
                icon: "http://a.img.pp.cn/upload_files/2016/03/07/pp_logo.jpg",
                share_url: window.location.href,
                yesOrNo: !1,
                onError: function () {
                },
                noNeedLog: !0
            };
            return {opt_bt: e, opt_share: t}
        }();
        this.Config = r, e.exports = r, o = function () {
            return r
        }.call(t, n, t, e), !(void 0 !== o && (e.exports = o))
    }()
}, function (e, t, n) {
    var o;
    !function () {
        function r(e) {
            return e.replace(x, "").replace(T, ",").replace(E, "").replace(A, "").replace(I, "").split(P)
        }

        function i(e) {
            return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
        }

        function a(e, t) {
            function n(e) {
                return d += e.split(/\n/).length - 1, l && (e = e.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), e && (e = g[1] + i(e) + g[2] + "\n"), e
            }

            function o(e) {
                var n = d;
                if (u ? e = u(e, t) : a && (e = e.replace(/\n/g, function () {
                    return d++, "$line=" + d + ";"
                })), 0 === e.indexOf("=")) {
                    var o = p && !/^=[=#]/.test(e);
                    if (e = e.replace(/^=[=#]?|[\s;]*$/g, ""), o) {
                        var i = e.replace(/\s*\([^\)]+\)/, "");
                        _[i] || /^(include|print)$/.test(i) || (e = "$escape(" + e + ")")
                    } else e = "$string(" + e + ")";
                    e = g[1] + e + g[2]
                }
                return a && (e = "$line=" + n + ";" + e), b(r(e), function (e) {
                    if (e && !f[e]) {
                        var t;
                        t = "print" === e ? y : "include" === e ? w : _[e] ? "$utils." + e : v[e] ? "$helpers." + e : "$data." + e, S += e + "=" + t + ",", f[e] = !0
                    }
                }), e + "\n"
            }

            var a = t.debug, s = t.openTag, c = t.closeTag, u = t.parser, l = t.compress, p = t.escape, d = 1,
                f = {$data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1}, h = "".trim,
                g = h ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(', ');", "$out.join('')"],
                m = h ? "$out+=text;return $out;" : "$out.push(text);",
                y = "function(){var text=''.concat.apply('',arguments);" + m + "}",
                w = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + m + "}",
                S = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (a ? "$line=0," : ""), x = g[0],
                T = "return new String(" + g[3] + ");";
            b(e.split(s), function (e) {
                e = e.split(c);
                var t = e[0], r = e[1];
                1 === e.length ? x += n(t) : (x += o(t), r && (x += n(r)))
            });
            var E = S + x + T;
            a && (E = "try{" + E + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + i(e) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
            try {
                var A = new Function("$data", "$filename", E);
                return A.prototype = _, A
            } catch (e) {
                throw e.temp = "function anonymous($data,$filename) {" + E + "}", e
            }
        }

        var s = function (e, t) {
            return "string" == typeof t ? w(t, {filename: e}) : l(e, t)
        };
        s.version = "3.0.0", s.config = function (e, t) {
            c[e] = t
        };
        var c = s.defaults = {openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null},
            u = s.cache = {};
        s.render = function (e, t) {
            return w(e, t)
        };
        var l = s.renderFile = function (e, t) {
            var n = s.get(e) || y({filename: e, name: "Render Error", message: "Template not found"});
            return t ? n(t) : n
        };
        s.get = function (e) {
            var t;
            if (u[e]) t = u[e]; else if ("object" == typeof document) {
                var n = document.getElementById(e);
                if (n) {
                    var o = (n.value || n.innerHTML).replace(/^\s*|\s*$/g, "");
                    t = w(o, {filename: e})
                }
            }
            return t
        };
        var p = function e(t, n) {
            return "string" != typeof t && (n = typeof t, "number" === n ? t += "" : t = "function" === n ? e(t.call(t)) : ""), t
        }, d = {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"}, f = function (e) {
            return d[e]
        }, h = function (e) {
            return p(e).replace(/&(?![\w#]+;)|[<>"']/g, f)
        }, g = Array.isArray || function (e) {
            return "[object Array]" === {}.toString.call(e)
        }, m = function (e, t) {
            var n, o;
            if (g(e)) for (n = 0, o = e.length; n < o; n++) t.call(e, e[n], n, e); else for (n in e) t.call(e, e[n], n)
        }, _ = s.utils = {$helpers: {}, $include: l, $string: p, $escape: h, $each: m};
        s.helper = function (e, t) {
            v[e] = t
        };
        var v = s.helpers = _.$helpers;
        s.onerror = function (e) {
            var t = "Template Error\n\n";
            for (var n in e) t += "<" + n + ">\n" + e[n] + "\n\n";
            "object" == typeof console && console.error(t)
        };
        var y = function (e) {
                return s.onerror(e), function () {
                    return "{Template Error}"
                }
            }, w = s.compile = function (e, t) {
                function n(n) {
                    try {
                        return new i(n, r) + ""
                    } catch (o) {
                        return t.debug ? y(o)() : (t.debug = !0, w(e, t)(n))
                    }
                }

                t = t || {};
                for (var o in c) void 0 === t[o] && (t[o] = c[o]);
                var r = t.filename;
                try {
                    var i = a(e, t)
                } catch (e) {
                    return e.filename = r || "anonymous", e.name = "Syntax Error", y(e)
                }
                return n.prototype = i.prototype, n.toString = function () {
                    return i.toString()
                }, r && t.cache && (u[r] = n), n
            }, b = _.$each,
            S = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
            x = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
            T = /[^\w$]+/g, E = new RegExp(["\\b" + S.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
            A = /^\d[^,]*|,\d[^,]*/g, I = /^,+|,+$/g, P = /^$|,+/;
        c.openTag = "{{", c.closeTag = "}}";
        var k = function (e, t) {
            var n = t.split(":"), o = n.shift(), r = n.join(":") || "";
            return r && (r = ", " + r), "$helpers." + o + "(" + e + r + ")"
        };
        c.parser = function (e) {
            e = e.replace(/^\s/, "");
            var t = e.split(" "), n = t.shift(), o = t.join(" ");
            switch (n) {
                case"if":
                    e = "if(" + o + "){";
                    break;
                case"else":
                    t = "if" === t.shift() ? " if(" + t.join(" ") + ")" : "", e = "}else" + t + "{";
                    break;
                case"/if":
                    e = "}";
                    break;
                case"each":
                    var r = t[0] || "$data", i = t[1] || "as", a = t[2] || "$value", c = t[3] || "$index",
                        u = a + "," + c;
                    "as" !== i && (r = "[]"), e = "$each(" + r + ",function(" + u + "){";
                    break;
                case"/each":
                    e = "});";
                    break;
                case"echo":
                    e = "print(" + o + ");";
                    break;
                case"print":
                case"include":
                    e = n + "(" + t.join(",") + ");";
                    break;
                default:
                    if (/^\s*\|\s*[\w\$]/.test(o)) {
                        var l = !0;
                        0 === e.indexOf("#") && (e = e.substr(1), l = !1);
                        for (var p = 0, d = e.split("|"), f = d.length, h = d[p++]; p < f; p++) h = k(h, d[p]);
                        e = (l ? "=" : "=#") + h
                    } else e = s.helpers[n] ? "=#" + n + "(" + t.join(",") + ");" : "=" + e
            }
            return e
        }, this.template = s, e.exports = s, o = function () {
            return s
        }.call(t, n, t, e), !(void 0 !== o && (e.exports = o))
    }()
}, function (e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        "undefined" != typeof window.navigator.sendBeacon ? i.sendBeacon(e, t, n, o) : a.isInUCBrowser() && "undefined" != typeof ucapi && ucapi.base && ucapi.base.sendBeacon ? i.UCSendBeacon(e, t, n, o) : r.postSync(e, t, n, o)
    }

    var r = n(13), i = n(17), a = n(5);
    r.log = {
        access: function (e, t, n) {
            r.post("/log/access", e, t, n)
        }, click: function (e, t, n) {
            o("/log/click", e, t, n)
        }, search: function (e, t, n) {
            o("/log/search", e, t, n)
        }, activity: function (e, t, n) {
            r.post("/log/activity", e, t, n)
        }
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    !function (t, o) {
        e.exports = o(n(50))
    }(void 0, function (e) {
        function t(e) {
            var t;
            return null == e ? t = String(e) : (t = Object.prototype.toString.call(e).toLowerCase(), t = t.substring(8, t.length - 1)), t
        }

        function n(e, n, o) {
            var r, i, a;
            if ("object" == typeof e) if (a = t(e), o = o || e, "array" === a || "arguments" === a || "nodelist" === a) {
                for (r = 0, i = e.length; r < i; r++) if (n.call(o, e[r], r, e) === !1) return
            } else for (r in e) if (e.hasOwnProperty(r) && n.call(o, e[r], r, e) === !1) return
        }

        function o() {
            var e = {};
            return n(arguments, function (t) {
                n(t, function (t, n) {
                    e[n] = t
                })
            }), e
        }

        function r(e, t) {
            t = t || location.search;
            var n, o = t.indexOf("#");
            return o > 0 && (t = t.substr(0, o)), n = t.match(new RegExp("[?|&]" + encodeURIComponent(e) + "=([^&]*)(&|$)")), n && "%s" === n[1] ? n[1] : n ? decodeURIComponent(n[1]) : ""
        }

        function i(e, t) {
            var n, o;
            return t && (n = e.indexOf("#"), n >= 0 ? (o = e.substr(n), e = e.substr(0, n)) : o = "", e += (e.indexOf("?") < 0 ? "?" : "&") + t.replace(/^[?|&]+/, "") + o), e
        }

        function a(e) {
            e = (e || location.queryString).replace(/^\?/, "");
            var t, n, o = e.split("&"), r = {};
            if (o.length) for (t = 0; t < o.length; t++) n = o[t].split("="), 2 === n.length && ("%s" === n[1] ? r[n[0]] = n[1] : r[n[0]] = decodeURIComponent(n[1]));
            return r
        }

        function s(e, r) {
            var i, s, c, u, l = [], p = "", d = "string" === t(r);
            return d && (s = r.indexOf("#"), s >= 0 && (p = r.substr(s), r = r.substr(0, s)), c = r.indexOf("?"), c >= 0 && (u = a(r.substr(c)), e = o(u, e), r = r.substr(0, c))), n(e, function (e, t) {
                l.push(encodeURIComponent(t) + "=" + encodeURIComponent(void 0 === e ? "" : e))
            }), i = l.join("&").replace(/%20/g, "+"), d ? r + "?" + i + p : i
        }

        function c() {
            try {
                return {__dt: +new Date - window.performance.timing.navigationStart, __t: +new Date}
            } catch (e) {
                return {__t: +new Date}
            }
        }

        function u(e, t) {
            for (var n in t) "Content-Type" !== n && e.setRequestHeader(n, t[n])
        }

        function l(e) {
            e = e || {};
            var i, a = e.type || "GET", l = e.url || "", d = e.success, f = e.error || function () {
                }, h = e.config || {}, _ = h.forbidExtendRequestParams ? e.data : o(c(), v, e.data), w = new XMLHttpRequest,
                b = Date.now();
            w.onreadystatechange = function () {
                var e;
                if (4 === w.readyState) if (200 === w.status) {
                    try {
                        e = JSON.parse(w.responseText)
                    } catch (e) {
                        return w.customError = e, w.parseError = !0, w.xtime = Date.now() - b, w.statechange = w.status, w.errortime = r("__t", l), void f(w)
                    }
                    g && g(e), d && d(e)
                } else w.xtime = Date.now() - b, w.statechange = w.status, w.errortime = r("__t", l), f(w)
            }, w.timeout = h.timeout || 3e4, a = "POST" === a.toUpperCase() ? "POST" : "GET";
            try {
                if ("POST" === a) {
                    if (n(_, function (e) {
                        if ("file" === t(e)) return i = new FormData, !1
                    }), l = m(l), w.open(a, l, !0), i) n(_, function (e, n) {
                        n && void 0 !== e && i.append(n, "array" === t(e) ? e.join() : e)
                    }); else {
                        var S;
                        h.headers && "application/json" === (S = h.headers["Content-Type"]) ? (i = JSON.stringify(_), w.setRequestHeader("Content-Type", S)) : (i = s(_), w.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"))
                    }
                    w.setRequestHeader("X-Requested-With", "XMLHttpRequest")
                } else l = m(s(_, l)), w.open(a, l, !0);
                w.customRequestUrl = l, h.headers && u(w, h.headers), p(w, y), p(w, h, ["headers"]), w.send(i)
            } catch (e) {
                console.error("ajax error", e)
            }
        }

        function p(e, t, o) {
            return o = o || [], n(t, function (t, n) {
                t && o.indexOf(n) === -1 && (e[n] = t)
            }), e
        }

        function d(e) {
            return function (t, n, o, r, i) {
                l({type: e, url: t, data: n, success: o, error: r, config: i})
            }
        }

        function f(e, t) {
            var n = 1, o = setTimeout(function () {
                n = h(n, t, !1), o = null
            }, w);
            e.onload = e.onerror = function () {
                n = h(n, t, !0), o && (clearTimeout(o), o = null)
            }
        }

        function h(e, t, n) {
            return e && t && (t(n), --e), e
        }

        if ("undefined" == typeof window) return {};
        var g, m, _ = {}, v = {}, y = {};
        m = function () {
            var t, n, o, a, c, u, l, p, d, f = 0, h = {}, g = {},
                m = window.navigator.userAgent.toLowerCase().indexOf("ucnewsapp") !== -1, _ = "UCLITE" === e.pf,
                v = "UC" === e.pf;
            if (_ || m || "wp" === r("fr") || "139" === r("pf") || "140" === r("pf") || v) for (c = r("uc_param_str"), d = c.length - c.length % 2; f < d;) u = c.substr(f, 2), l = r(u), l.length > 0 && (h[u] = l), f += 2;
            return n = r("entry").replace(/\s/g, ""), n && (g.entry = h.entry = n), o = r("origin").replace(/\s/g, ""), o && (g.origin = h.origin = o), a = r("forcela").replace(/\s/g, ""), a && (g.forcela = h.forcela = a), t = s(h), p = s(g), function (e, n) {
                return e = n ? i(e, p) : i(e, t), r("uc_param_str", e) || (e = i(e, "uc_param_str=dsdnfrpfbivessbtbmnilauputogpintnwmtsvpccpprsnch")), e
            }
        }(), _.ping = function (e, t, n) {
            var r = new Image, i = o(c(), v, t);
            f(r, n), r.src = m(s(i, e))
        };
        var w = 2e3;
        return _.baseParam = function (e, n) {
            if ("string" === t(e)) {
                if (1 === arguments.length) return v[e];
                v[e] = n
            } else "object" === t(e) && (v = o(v, e))
        }, _.baseSuccess = function (e) {
            "function" === t(e) && (g = e)
        }, _.redirect = function (e) {
            if (e) {
                if (!/http[s]:\/\//.test(e)) {
                    var t = document.createElement("a");
                    t.href = e, e = t.href, t = void 0
                }
                location.href = m(s(v, e))
            }
        }, _.refreshUCNewsNotUtDs = function () {
            !("UCNEWS" === e.pf && r("uc_param_str").length > 0) || r("ut").length > 0 || r("ds").length > 0 || window.localStorage.getItem("netwrok_refreshUCNewsNotUtDs") || setTimeout(function () {
                window.localStorage.setItem("netwrok_refreshUCNewsNotUtDs", !0), window.location.reload()
            }, 300)
        }, _.setup = function (e) {
            y = e
        }, _.query = r, _.parseObject = a, _.parseQuery = s, _.ucParam = m, _.ajax = l, _.get = d("GET"), _.post = d("POST"), _
    })
}, function (e, t, n) {
    /**!
     * 图片延时懒加载
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   王博文 <wangbowen.wbw@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/95662)
     */
    "use strict";
    !function () {
        function t() {
            var e, t, n;
            for (f.prepend(v), h = d.height(), y.nPageAreaHeight = y.nPageAreaHeight < h ? h : y.nPageAreaHeight, a = l("." + y.lazyImgClass + ":not(." + y.doneImgClass + ")"), s = [], t = a.length, e = 0; e < t; e++) 0 !== a[e].y && (n = Math.floor(a[e].y / y.nPageAreaHeight), s[n] || (s[n] = []), s[n].push(a[e]));
            v.remove()
        }

        function o(e, t) {
            var n, o, r;
            if (m = m <= 1e4 ? m + 1 : 0, t === !0 && (m = y.nSpeedstepRatio), m % y.nSpeedstepRatio === 0) {
                if (c = window.scrollY + h, u = Math.floor(c / y.nPageAreaHeight), s[u - 1]) for (o = s[u - 1].length, n = 0; n < o; n++) r = s[u - 1][n], !r || r.y + r.offsetHeight + y.nPreloadHeight < window.scrollY || (r.src = r.getAttribute(y.lazyImgAttr), r.className = r.className.replace(" " + y.doneImgClass, "") + " " + y.doneImgClass, delete s[u - 1][n]);
                if (s[u]) for (o = s[u].length, n = 0; n < o; n++) r = s[u][n], !r || r.y - y.nPreloadHeight > c || (r.src = r.getAttribute(y.lazyImgAttr), r.className = r.className.replace(" " + y.doneImgClass, "") + " " + y.doneImgClass, delete s[u][n])
            }
        }

        function r(e) {
            setTimeout(function () {
                o(e), !0
            }, 100)
        }

        function i(e) {
            setTimeout(function () {
                o(e, !0)
            }, 200), setTimeout(function () {
                o(e, !0)
            }, 800), setTimeout(function () {
                o(e, !0)
            }, 2e3)
        }

        var a, s, c, u, l = n(7), p = n(5), d = l(window), f = l("body"), h = d.height(), g = {}, m = 0,
            _ = p.getPlatform(), v = l('<div style="height:1px"></div>'), y = {
                lazyImgClass: "img-lazy",
                doneImgClass: "img-lazy-done",
                lazyImgAttr: "data-img",
                nPageAreaHeight: 1e3,
                nSpeedstepRatio: 8,
                nPreloadHeight: 50
            };
        g.scrollLoadImg = function (e) {
            y = l.extend(y, e), y.nPageAreaHeight = y.nPageAreaHeight < h ? h : y.nPageAreaHeight, t(), o("", !0), setTimeout(function () {
                o("", !0)
            }, 500), document.addEventListener("touchmove", o), document.addEventListener("touchend", i), "windows|linux|mac".indexOf(_) > -1 && (document.addEventListener("scroll", r), document.addEventListener("mousewheel", r))
        }, g.loadImg = function (e, t) {
            setTimeout(function () {
                l("." + y.lazyImgClass + ":not(." + y.doneImgClass + ")").map(function (n, o) {
                    var r = new Image;
                    r.src = o.getAttribute(y.lazyImgAttr), r.onload = function () {
                        o.setAttribute("src", r.src), e && "function" == typeof e && e(o)
                    }, r.onerror = function () {
                        t && "function" == typeof t && t(o)
                    }, o.className = o.className.replace(" " + y.doneImgClass, "") + " " + y.doneImgClass
                })
            }, 10)
        }, e.exports = g
    }()
}, function (e, t, n) {
    var o, r = n(6), i = n(5);
    !function () {
        var a = function () {
            var e = 0, t = function () {
                e = document.body.scrollTop || document.documentElement.scrollTop, r("body").css("overflow", "hidden").addClass("block")
            }, n = function () {
                r("body").css("overflow", "initial").removeClass("block"), document.body.scrollTop = document.documentElement.scrollTop = e
            }, o = function () {
                var e = "click";
                return i.ua.ios && (e = "tap"), e
            };
            return {holdBody: t, releaseBody: n, getClickName: o}
        }();
        e.exports = a, o = function () {
            return a
        }.call(t, n, t, e), !(void 0 !== o && (e.exports = o))
    }()
}, function (e, t, n) {
    var o, r = n(6);
    n(40);
    var i = n(8), a = n(60), s = n(63), c = n(5), u = n(4), l = n(58);
    n(66), !function () {
        var p = function () {
            function e(e) {
                e && r.extend(y, e)
            }

            function t() {
                if (v.opt_bt.share) {
                    var e = "";
                    c.ua.weixin || c.isInAndroidClient() || (e += y.htmlBorwserShare ? y.htmlBorwserShare : '<div id="browser-share" class="base-pop-mask"><div><img src="' + y.imgBrowserShare + '"></div></div>'), c.ua.weixin && (e += y.htmlWechatShare ? y.htmlWechatShare : '<div id="wechat-share" class="base-pop-mask"><div><img src="' + y.imgWechatShare + '"></div></div>'), c.isInWdjClient() && (e += '<div id="wdj-share" class="base-pop-mask"><div class="wdj-share-board"><h3>分享至</h3><ul><li class="sina-weibo"></li><li class="wechat-friend"></li><li class="wechat-timeline"></li></ul></div></div>'), r(document.body).append(e)
                }
            }

            function n() {
                var e = l.getClickName();
                r("body").on(e, v.opt_bt.share, function () {
                    _(function (e) {
                        var t = v.opt_share.share_url;
                        e && (t = u.queryFormat(v.opt_share.share_url, {ch_src_share: e})), c.isInAndroidClient() ? v.opt_share.PPWDJShare(t) : "wechat" === c.clientType() ? v.opt_share.weixinShare() : "ppyy" === c.clientType() ? v.opt_share.PPIOSyyShare() : "ppzb" === c.clientType() ? v.opt_share.PPIOSzbShare(t) : c.isInWdjClient() ? r("#wdj-share").show() : "browser" === c.clientType() && (c.isInUCBrowser() && window.ucweb && window.ucapi && window.ucapi.invoke ? v.opt_share.UCAndroidShare(t) : window.ucbrowser ? v.opt_share.UCIosShare(t) : v.opt_share.browserShare()), !v.opt_share.noNeedLog && a.tolog.webClickLog("share")
                    })
                }), r(".base-pop-mask").on(e, function (e) {
                    var t = r(e.target);
                    t.hasClass("wdj-share-board") || t.parents().hasClass("wdj-share-board") || r(this).hide()
                }), r("#wdj-share").on(e, function (e) {
                    var t = r(e.target);
                    if (t.hasClass("sina-weibo")) {
                        var n = v.opt_share.weibo_icon || v.opt_share.icon;
                        s.runAppShare(v.opt_share.title, v.opt_share.content, n, v.opt_share.share_url, "SINA_WEIBO")
                    } else t.hasClass("wechat-friend") ? s.runAppShare(v.opt_share.title, v.opt_share.content, v.opt_share.icon, v.opt_share.share_url, "WECHAT") : t.hasClass("wechat-timeline") && s.runAppShare(v.opt_share.title, v.opt_share.content, v.opt_share.icon, v.opt_share.share_url, "WECHAT_TIMELINE")
                })
            }

            function o(e) {
                window.AppStateController && "undefined" != typeof i && i.avaliable() && i.share(v.opt_share.title, v.opt_share.content, e, v.opt_share.icon, 0, "")
            }

            function p() {
                r("#wechat-share").show()
            }

            function d() {
                "object" == typeof window.TRH5Obj && window.TRH5Obj.showShareView()
            }

            function f(e) {
                var t = {
                    shareUrl: e || "",
                    shareImageUri: v.opt_share.icon || "",
                    shareTitle: v.opt_share.title || "",
                    shareContent: v.opt_share.content || ""
                };
                "object" == typeof window.TRH5Obj && window.TRH5Obj.shareCommonContent(t, function () {
                })
            }

            function h(e) {
                window.ucapi.invoke("biz.share", {
                    title: v.opt_share.title,
                    content: v.opt_share.content,
                    url: e,
                    image_url: v.opt_share.icon,
                    target: ""
                })
            }

            function g(e) {
                window.ucbrowser.web_share ? window.ucbrowser.web_share(v.opt_share.title, v.opt_share.content, e, "WechatFriends,WechatTimeline", "", "", "") : window.ucbrowser.web_shareEX('{"title":"' + v.opt_share.title + '","content":"' + v.opt_share.content + '","sourceUrl": "' + e + '","target":"","disableTarget":"kQQ,kQZone,kSinaWeibo,kSystem,kUnknown","source":"","htmlNode":"","imageUrl":"' + v.opt_share.icon + '"}')
            }

            function m() {
                r("#browser-share").show()
            }

            function _(e) {
                var t = "";
                c.isInAndroidClient() ? c.isInWdjOrPPClient(function (n) {
                    t = n.isInPP ? "pp_aty_ppshare" : n.isInNewWdj ? "pp_aty_wdjshare" : "", e(t)
                }) : "ppzb" === c.clientType() ? (t = "pp_aty_zbshare", e(t)) : c.isInUCBrowser() ? (t = "pp_aty_ucshare", e(t)) : (t = "", e(t))
            }

            var v = {
                opt_bt: {share: ""},
                opt_share: {
                    title: "",
                    content: "",
                    icon: "",
                    weibo_icon: "",
                    share_url: "",
                    PPWDJShare: o,
                    weixinShare: p,
                    PPIOSyyShare: d,
                    PPIOSzbShare: f,
                    UCAndroidShare: h,
                    UCIosShare: g,
                    browserShare: m
                }
            }, y = {
                htmlBorwserShare: "",
                htmlWechatShare: "",
                imgBrowserShare: "//img.ucdl.pp.uc.cn/upload_files/2015/11/18/common/activity/mask/img_browser_share.png",
                imgWechatShare: "//img.ucdl.pp.uc.cn/upload_files/2015/11/18/common/activity/mask/img_wechat_share.png"
            }, w = function (o, i) {
                "object" == typeof o && (v = r.extend(!0, v, o)), e(i), t(), n()
            }, b = function (e) {
                r.extend(v, e)
            };
            return {init: w, setConfig: b}
        }();
        e.exports = p, o = function () {
            return p
        }.call(t, n, t, e), !(void 0 !== o && (e.exports = o))
    }()
}, function (e, t, n) {
    var o, r = n(4), i = n(1), a = n(5), s = n(48), c = n(62);
    !function () {
        var u = function () {
            function e(e) {
                "object" != typeof e && (e = {}), m = {}, _ = {}, l = t(), p = n(), d = "undefined" == typeof e.restype ? null : 0 === e.restype || "0" === e.restype ? "soft" : 1 === e.restype || "1" === e.restype ? "game" : e.restype, f = e.activityId || r.getQueryString("activityId") || r.getQueryString("activityid") || null, h = e.specialId || r.getQueryString("specialId") || r.getQueryString("specialid") || null, g = e.position || "operation_activity_1", a.isInAndroidClient() && (_ = u()), m = o(), i.extend(_, e), i.extend(m, e)
            }

            function t() {
                var e = r.getQueryString("ch_src_share") || r.getQueryString("ch_src") || "pp";
                return e
            }

            function n() {
                var e = r.getQueryString("ch") || "pp";
                return e
            }

            function o() {
                var e = {
                    ch_src: l,
                    ch: p,
                    page: h,
                    module: f,
                    resType: d,
                    position: g,
                    keyword: location.href,
                    appId: null,
                    appName: null
                };
                return e
            }

            function u() {
                var e = {
                    page: "marketing_activity_1" === g ? l : h,
                    module: "marketing_activity_1" === g ? p : f,
                    resType: d,
                    keyword: location.href,
                    position: g,
                    appId: null,
                    appName: null,
                    versionId: null,
                    recModel: null,
                    cpModel: null
                };
                return e
            }

            var l, p, d, f, h, g, m, _, v = function (e) {
                c.init(e)
            }, y = function (e) {
                c.baseParam(e)
            }, w = {
                webViewLog: function (t, n) {
                    e(n), c.base.webViewLog(t, m, _)
                }, webClickLog: function (t, n) {
                    e(n), c.base.webClickLog(t, m, _)
                }, downloadLog: function (t, n) {
                    e(n), c.base.downloadLog(t, m, _)
                }, eventLog: function (t, n) {
                    e(n), c.base.eventLog(t, m, _)
                }, showLog: function (t, n) {
                    e(n), c.base.showLog(t, m, _)
                }
            }, b = w, S = {
                loading: function (t) {
                    e(t), s.loading(m)
                }, ready: function (t) {
                    e(t), c.base.webViewLog("act_ready", m, _)
                }, start: function (t) {
                    e(t), s.start(m)
                }, pageScene: function (t, n) {
                    e(n), s.pageScene(t, m)
                }, clickScene: function (t, n) {
                    e(n), s.clickScene(t, m)
                }, share: function (t) {
                    e(t), s.share(m)
                }, download: function (t, n) {
                    e(n), c.base.downloadLog(t, m, _)
                }, convert: function (t) {
                    e(t), s.convert(m)
                }
            };
            return {init: v, baseParam: y, base: w, tolog: b, trace: S, getCh: n}
        }();
        e.exports = u, o = function () {
            return u
        }.call(t, n, t, e), !(void 0 !== o && (e.exports = o))
    }()
}, function (e, t, n) {
    /**!
     * ppweb 用户id管理
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   陈精任 <jingren.cjr@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/89291)
     */
    "use strict";
    var o = n(18).storage;
    e.exports = function () {
        function e(e) {
            o.set(n, e)
        }

        var t = {}, n = "_pwid", r = 32, i = [23, 11, 29, 12, 27, 15, 18];
        return t.generatePWID = function () {
            var e = ("00000000" + (new Date).getTime() + (Math.random() + "00000000").substr(2, 10)).split("");
            for (var t in i) e[t] = e[i[t]];
            return e.join("") + "3"
        }, t.checkPWID = function (e) {
            if (!e || e.length !== r || "3" !== e[r - 1]) return !1;
            var t = e.split("");
            for (var n in i) if (t.hasOwnProperty(n) && t[n] !== t[i[n]]) return !1;
            return !0
        }, t.getPWID = function () {
            if ("object" != typeof window) return t.generatePWID();
            var r = o.get(n);
            return t.checkPWID(r) || (r = t.generatePWID(), e(r)), r
        }, t
    }()
}, function (e, t, n) {
    /**!
     * 兼容安卓客户端端内外逻辑的打点方法
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   徐闻东 <wendong.xwd@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/106725)
     */
    "use strict";
    var o = n(6), r = n(5), i = n(4), a = n(8), s = n(1), c = n(48), u = n(49);
    e.exports = function () {
        function e() {
            return {}
        }

        function t() {
            return {
                action: null,
                type: null,
                page: null,
                ckUrl: null,
                module: null,
                keyword: null,
                appId: null,
                appName: null,
                resType: null,
                versionId: null,
                position: null,
                ppCtrPos: null,
                ppIndex: null,
                ppCardId: null,
                ppCardType: null,
                ppCardGroup: null,
                recModel: null,
                cpModel: null,
                pushId: v,
                pushAppType: y,
                ab: w
            }
        }

        function n() {
            b.resType = "soft", S.resType = "soft"
        }

        function l(n, i, a, s) {
            "object" == typeof arguments[1] && (i = "", a = arguments[1], s = arguments[2]), b = e(), S = t(), a && o.extend(b, a), s && o.extend(S, s), r.isInAndroidClient() && ("click" === _[n] ? S.ckUrl = i : S.action = i, S.type = _[n]), b.action = i, b.type = n
        }

        function p() {
            a.log(S)
        }

        function d() {
            switch (b.type) {
                case"pageview":
                    u.pageview(b.action, b), g.app_key && c.pageview(b.action, b);
                    break;
                case"click":
                    u.click(b.action, b), g.app_key && c.click(b.action, b);
                    break;
                case"download":
                    u.click(b.action, b), g.app_key && c.download(b);
                    break;
                case"event":
                    u.event(b.action, b), g.app_key && c.event(b.action, b);
                    break;
                case"show":
                    u.show(b.action, b)
            }
        }

        function f() {
            r.isInAndroidClient() && p(), d()
        }

        var h = {}, g = {}, m = {},
            _ = {download: "click", pageview: "pageview", click: "click", event: "event", show: "pageview"},
            v = i.getQueryString("pushId") || "", y = i.getQueryString("pushAppType") || "",
            w = i.getQueryString("ab") || "", b = e(), S = t();
        return h.init = function (e) {
            s.extend(g, e), u.init(e), g.app_key && (m.app_key = g.app_key, c.init(m))
        }, h.baseParam = function (e) {
            u.baseParam(e)
        }, h.base = {
            webViewLog: function (e, t, n) {
                l("pageview", e, t, n), f()
            }, webClickLog: function (e, t, n) {
                l("click", e, t, n), f()
            }, downloadLog: function (e, t, o) {
                n(), l("download", e, t, o), f()
            }, eventLog: function (e, t, n) {
                l("event", e, t, n), f()
            }, showLog: function (e, t, n) {
                l("show", e, t, n), f()
            }
        }, h.tolog = h.base, !window.PPWeblog && (window.PPWeblog = h), h
    }()
}, function (e, t, n) {
    /**!
     * 豌豆荚客户端分享相关js接口
     *
     * Copyright(c) Alibaba Group Holding Limited.
     *
     * Authors:
     *   徐闻东 <wendong.xwd@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/106725)
     */
    "use strict";
    var o = n(64), r = window.campaignPlugin;
    o.runSystemShare = function (e, t) {
        e = e || "豌豆荚", t = t || "你的手机娱乐中心", r.share(e, t)
    }, o.runAppShare = function (e, t, n, o, i) {
        e = e || "豌豆荚", t = t || "你的手机娱乐中心", n = n || "http://static.wdjimg.com/www/images/www/p4.png", o = o || "http://www.wandoujia.com/", i = i || "SINA_WEIBO", r.shareTo(e, t, n, o, i)
    }, o.openInBrowser = function (e) {
        r.openInBrowser(e)
    };
    var i = {weibo: [], wechatFriend: [], wechatTimeline: []}, a = function (e, t) {
        for (var n = t.length - 1; n >= 0; n--) if ($(t[n].element)[0] === $(e)[0]) return t[n];
        return !1
    }, s = function (e, t) {
        var n = a(e.element, i[t]);
        if (n) for (var o in n) n.hasOwnProperty(o) && (n[o] = e[o]); else if (e.element) switch (i[t].push(e), t) {
            case"weibo":
                $(document).on("click", e.element, function () {
                    var t = "http://service.weibo.com/share/share.php?appkey=1483181040&relateUid=1727978503&url=" + encodeURIComponent(e.shortLink || e.link) + "&title=" + encodeURIComponent(e.desc) + "&pic=" + e.imgUrl;
                    e.successCallback("weibo-redirect"), location.href = t
                });
                break;
            case"wechatFriend":
                $(document).on("click", e.element, function () {
                    e.successCallback("other-wechatFriend-qrcode"), e.qrcode()
                });
                break;
            case"wechatTimeline":
                $(document).on("click", e.element, function () {
                    e.successCallback("other-wechatTimeline-qrcode"), e.qrcode()
                })
        }
    };
    o.shareButtonSetup = function (e, t, n) {
        s(e, "weibo"), s(t, "wechatFriend"), s(n, "wechatTimeline")
    }, e.exports = o
}, function (e, t) {
    (function (t) {
        /**!
         * 豌豆荚客户端js接口
         *
         * Copyright(c) Alibaba Group Holding Limited.
         *
         * Authors:
         *   徐闻东 <wendong.xwd@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/106725)
         */
        "use strict";
        void 0 === window.console && (window.console = {
            warn: function () {
            }
        });
        var n = function (e) {
            var t = {};
            return e.Wca = n, void 0 === e.wca && (e.wca = n), t
        }("undefined" != typeof window ? window : t);
        e.exports = n
    }).call(t, function () {
        return this
    }())
}, function (e, t, n) {
    var o, r;
    !function (i) {
        var a = !1;
        if (o = i, r = "function" == typeof o ? o.call(t, n, t, e) : o, !(void 0 !== r && (e.exports = r)), a = !0, e.exports = i(), a = !0, !a) {
            var s = window.Cookies, c = window.Cookies = i();
            c.noConflict = function () {
                return window.Cookies = s, c
            }
        }
    }(function () {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) t[o] = n[o]
            }
            return t
        }

        function t(n) {
            function o(t, r, i) {
                var a;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (i = e({path: "/"}, o.defaults, i), "number" == typeof i.expires) {
                            var s = new Date;
                            s.setMilliseconds(s.getMilliseconds() + 864e5 * i.expires), i.expires = s
                        }
                        i.expires = i.expires ? i.expires.toUTCString() : "";
                        try {
                            a = JSON.stringify(r), /^[\{\[]/.test(a) && (r = a)
                        } catch (e) {
                        }
                        r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
                        var c = "";
                        for (var u in i) i[u] && (c += "; " + u, i[u] !== !0 && (c += "=" + i[u]));
                        return document.cookie = t + "=" + r + c
                    }
                    t || (a = {});
                    for (var l = document.cookie ? document.cookie.split("; ") : [], p = /(%[0-9A-Z]{2})+/g, d = 0; d < l.length; d++) {
                        var f = l[d].split("="), h = f.slice(1).join("=");
                        this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
                        try {
                            var g = f[0].replace(p, decodeURIComponent);
                            if (h = n.read ? n.read(h, g) : n(h, g) || h.replace(p, decodeURIComponent), this.json) try {
                                h = JSON.parse(h)
                            } catch (e) {
                            }
                            if (t === g) {
                                a = h;
                                break
                            }
                            t || (a[g] = h)
                        } catch (e) {
                        }
                    }
                    return a
                }
            }

            return o.set = o, o.get = function (e) {
                return o.call(o, e)
            }, o.getJSON = function () {
                return o.apply({json: !0}, [].slice.call(arguments))
            }, o.defaults = {}, o.remove = function (t, n) {
                o(t, "", e(n, {expires: -1}))
            }, o.withConverter = t, o
        }

        return t(function () {
        })
    })
}, function (e, t) {
}, , function (e, t) {
    "use strict";
    !function (t, n) {
        function o(e, t, n) {
            if (n || (n = {}), r.ios() && parseInt(r.version()) >= 5 && "x" === n.direction && n.wit) t.parentNode.style.cssText += "overflow:scroll; -webkit-overflow-scrolling:touch;"; else switch (e) {
                case"page":
                    n.direction = "x";
                    var o = r.clone(a);
                    return o._init(t, n), o;
                case"px":
                    var i = r.clone(s);
                    return i._init(t, n), i
            }
        }

        var r = {
            ios: function () {
                var e = navigator.userAgent.match(/.*OS\s([\d_]+)/), t = !!e;
                return !this._version_value && t && (this._version_value = e[1].replace(/_/g, ".")), this.ios = function () {
                    return t
                }, t
            }, version: function () {
                return this._version_value
            }, clone: function (e) {
                function t() {
                }

                return t.prototype = e, new t
            }
        }, i = {
            _refreshCommon: function (e, t) {
                var n = this;
                n.wide_high = e || n.core[n.offset] - n.up_range, n.parent_wide_high = t || n._parent_node[n.offset], n._getCoreWidthSubtractShellWidth()
            }, _initCommon: function (e, t) {
                var n = this;
                n.core = e, n.startFun = t.startFun, n.moveFun = t.moveFun, n.touchEndFun = t.touchEndFun, n.endFun = t.endFun, n.direction = t.direction, n.up_range = t.up_range || 0, n.down_range = t.down_range || 0, n._parent_node = n.core.parentNode, "x" === n.direction ? (n.offset = "offsetWidth", n._pos = n.__posX) : (n.offset = "offsetHeight", n._pos = n.__posY), n.wide_high = t.wide_high || n.core[n.offset] - n.up_range, n.parent_wide_high = t.parent_wide_high || n._parent_node[n.offset], n._getCoreWidthSubtractShellWidth(), n._bind("touchstart"), n._bind("touchmove"), n._bind("touchend"), n._bind("webkitTransitionEnd"), n.xy = 0, n.y = 0
            }, _getCoreWidthSubtractShellWidth: function () {
                var e = this;
                e.width_cut_coreWidth = e.parent_wide_high - e.wide_high, e.coreWidth_cut_width = e.wide_high - e.parent_wide_high
            }, handleEvent: function (e) {
                var t = this;
                switch (e.type) {
                    case"touchstart":
                        t._start(e);
                        break;
                    case"touchmove":
                        t._move(e);
                        break;
                    case"touchend":
                    case"touchcancel":
                        t._end(e);
                        break;
                    case"webkitTransitionEnd":
                        t._transitionEnd(e)
                }
            }, _bind: function (e, t) {
                this.core.addEventListener(e, this, !!t)
            }, _unBind: function (e, t) {
                this.core.removeEventListener(e, this, !!t)
            }, __posX: function (e) {
                this.xy = e, this.core.style.webkitTransform = "translate3d(" + e + "px, 0px, 0px)"
            }, __posY: function (e) {
                this.xy = e, this.core.style.webkitTransform = "translate3d(0px, " + e + "px, 0px)", this.core.style.webkitTransform = "translate(0px, " + e + "px) scale(1) translateZ(0px)"
            }, _posTime: function (e, t) {
                this.core.style.webkitTransitionDuration = "" + t + "ms", this._pos(e)
            }, addCallback: function (e, t) {
                this[e] = t
            }
        }, a = r.clone(i);
        a._init = function (e, t) {
            var n = this;
            if (n.num = t.num, 1 !== n.num) {
                if (n._initCommon(e, t), n.page = 0, n.loop = t.loop, n.change_time = t.change_time, n.lastPageFun = t.lastPageFun, n.firstPageFun = t.firstPageFun, t.change_time && n._autoChange(), n.loop) {
                    var o = n.core.querySelectorAll("li"), r = o[0].cloneNode(!0), i = o[n.num - 1].cloneNode(!0);
                    n.core.insertBefore(i, o[0]), n.core.appendChild(r), n._initial_coordinates = -n.parent_wide_high
                } else n._initial_coordinates = 0;
                t.no_follow ? (n._move = n._moveNoMove, n.next_time = 500) : n.next_time = 300, n._pos(n._initial_coordinates), n._parent_node.style.webkitTransform = "translate3d(0px, 0px, 0px)"
            }
        }, a._start = function (e) {
            var t = this, n = e.touches[0];
            t._abrupt_x = 0, t._abrupt_x_abs = 0, t._start_x = t._start_x_clone = n.pageX, t._start_y = n.pageY, t._movestart = void 0, t.change_time && t._stop(), t.startFun && t.startFun(n)
        }, a._move = function (e) {
            var t = this;
            if (t._moveShare(e), !t._movestart) {
                var n = e.touches[0];
                if (e.preventDefault(), t.loop ? t.offset_x = t._dis_x + t.xy : t.offset_x = t.xy > 0 || t.xy < t.width_cut_coreWidth ? t._dis_x / 2 + t.xy : t._dis_x + t.xy, t._start_x = n.pageX, t._abrupt_x_abs < 6) return t._abrupt_x += t._dis_x, void(t._abrupt_x_abs = Math.abs(t._abrupt_x));
                t._pos(t.offset_x), t.moveFun && t.moveFun(n)
            }
        }, a._moveNoMove = function (e) {
            var t = this;
            t._moveShare(e), t._movestart || (e.preventDefault(), t.moveFun && t.moveFun(e))
        }, a._moveShare = function (e) {
            var t = this, n = e.touches[0];
            t._dis_x = n.pageX - t._start_x, t._dis_y = n.pageY - t._start_y, "undefined" == typeof t._movestart && (t._movestart = !!(t._movestart || Math.abs(t._dis_x) < Math.abs(t._dis_y)))
        }, a._end = function (e) {
            if (!this._movestart) {
                var t = this;
                t._end_x = e.changedTouches[0].pageX, t._range = t._end_x - t._start_x_clone, t._range > 35 ? t._backward() : Math.abs(t._range) > 35 ? t._forward() : t.toPage(t.page), t.touchEndFun && t.touchEndFun(e)
            }
        }, a.backward = function () {
            var e = this;
            e.change_time && e._stop(), e._backward()
        }, a.forward = function () {
            var e = this;
            e.change_time && e._stop(), e._forward()
        }, a._backward = function (e) {
            var t = this, n = t.page -= 1;
            n < 0 && (t.loop ? n = -1 : (n = 0, t.firstPageFun && t.firstPageFun(e))), t.toPage(n, t.next_time)
        }, a._forward = function (e) {
            var t = this, n = t.page += 1;
            n > t.num - 1 && (t.loop ? n = t.num : (n = t.num - 1, t.lastPageFun && t.lastPageFun(e))), t.toPage(n, t.next_time)
        }, a._transitionEnd = function (e) {
            var t = this;
            e.stopPropagation(), t.core.style.webkitTransitionDuration = "0", t._stop_ing && t._autoChange(), t._stop_ing = !1, t.loop && (t.page >= t.num ? t.toPage(0, 0) : t.page <= -1 && t.toPage(t.num - 1, 0)), t.endFun && t.endFun()
        }, a.toPage = function (e, t) {
            this._posTime(-this.parent_wide_high * e + this._initial_coordinates, t || 0), this.page = e
        }, a._stop = function () {
            clearInterval(this._autoChangeSet), this._stop_ing = !0
        }, a._autoChange = function () {
            var e = this;
            e._autoChangeSet = setInterval(function () {
                e._page_medium = e.page + 1, e.page !== e.num - 1 ? e.page += 1 : e.page = 0, e.loop ? e.toPage(e._page_medium, e.next_time) : e.toPage(e.page, e.next_time)
            }, e.change_time)
        }, a.refresh = function (e, t) {
            this._refreshCommon(e, t), this.loop && (this._initial_coordinates = -this.parent_wide_high), this.toPage(this.page)
        };
        var s = r.clone(i);
        s._init = function (e, t) {
            var n = this;
            n._initCommon(e, t), n._pos(-n.up_range), n.perfect = t.perfect, n.bar_no_hide = t.bar_no_hide, n._steps = [], "x" === n.direction ? (n.page_x = "pageX", n.page_y = "pageY", n.width_or_height = "width", n._real = n._realX, n._posBar = n.__posBarX) : (n.page_x = "pageY", n.page_y = "pageX", n.width_or_height = "height", n._real = n._realY, n._posBar = n.__posBarY), n.perfect ? (n._transitionEnd = function () {
            }, n._stop = n._stopPerfect, n._slipBar = n._slipBarPerfect, n._posTime = n._posTimePerfect, n._bar_upRange = n.up_range, n.no_bar = !1, n._slipBarTime = function () {
            }) : (n.no_bar = t.no_bar, n.core.style.webkitTransitionTimingFunction = "cubic-bezier(0.33, 0.66, 0.66, 1)"), n.bar_no_hide && (n._hideBar = function () {
            }, n._showBar = function () {
            }), n.no_bar ? (n._hideBar = function () {
            }, n._showBar = function () {
            }) : (n.coreWidth_cut_width <= 0 && (n._bar_shell_opacity = 0, n._showBarStorage = n._showBar, n._showBar = function () {
            }), n._insertSlipBar(t))
        }, s._start = function (e) {
            var t = this, n = e.touches[0];
            t._animating = !1, t._abrupt_x = 0, t._abrupt_x_abs = 0, t._start_x = t._start_x_clone = n[t.page_x], t._start_y = n[t.page_y], t._start_time = n.timeStamp || Date.now(), t._movestart = void 0, !t.perfect && t._need_stop && t._stop(), t.core.style.webkitTransitionDuration = "0", t.startFun && t.startFun(n)
        }, s._move = function (e) {
            var t = this, n = e.touches[0], o = n[t.page_x], r = n[t.page_y], i = t.xy;
            if (t._dis_x = o - t._start_x, t._dis_y = r - t._start_y, "x" === t.direction && "undefined" == typeof t._movestart && (t._movestart = !!(t._movestart || Math.abs(t._dis_x) < Math.abs(t._dis_y))), !t._movestart) {
                if (e.preventDefault(), t._move_time = n.timeStamp || Date.now(), t.offset_x = i > 0 || i < t.width_cut_coreWidth - t.up_range ? t._dis_x / 2 + i : t._dis_x + i, t._start_x = o, t._start_y = r, t._abrupt_x_abs < 6) return t._abrupt_x += t._dis_x, void(t._abrupt_x_abs = Math.abs(t._abrupt_x));
                t._pos(t.offset_x), t.no_bar || t._slipBar(), t._move_time - t._start_time > 300 && (t._start_time = t._move_time, t._start_x_clone = o), t.moveFun && t.moveFun(n)
            }
        }, s._end = function (e) {
            if (!this._movestart) {
                var t = this, n = e.changedTouches[0], o = (n.timeStamp || Date.now()) - t._start_time,
                    r = n[t.page_x] - t._start_x_clone;
                if (t._need_stop = !0, o < 300 && Math.abs(r) > 10) if (t.xy > -t.up_range || t.xy < t.width_cut_coreWidth) t._rebound(); else {
                    var i = t._momentum(r, o, -t.xy - t.up_range, t.coreWidth_cut_width + t.xy, t.parent_wide_high);
                    t._posTime(t.xy + i.dist, i.time), t.no_bar || t._slipBarTime(i.time)
                } else t._rebound();
                t.touchEndFun && t.touchEndFun(n)
            }
        }, s._transitionEnd = function (e) {
            var t = this;
            e.target === t.core && (t._rebound(), t._need_stop = !1)
        }, s._rebound = function (e) {
            var t = this,
                n = t.coreWidth_cut_width <= 0 ? 0 : t.xy >= -t.up_range ? -t.up_range : t.xy <= t.width_cut_coreWidth - t.up_range ? t.width_cut_coreWidth - t.up_range : t.xy;
            return n === t.xy ? (t.endFun && t.endFun(), void t._hideBar()) : (t._posTime(n, e || 400), void(t.no_bar || t._slipBarTime(e)))
        }, s._insertSlipBar = function (e) {
            var t, o, r = this;
            r._bar = n.createElement("div"), r._bar_shell = n.createElement("div"), r._bar_show_ing = !0, "x" === r.direction ? (t = "height: 5px; position: absolute; top:1px;z-index: 10; pointer-events: none;", o = "opacity: " + r._bar_shell_opacity + "; left:2px; bottom: 2px; right: 2px; height: 6px; position: absolute; z-index: 10; pointer-events: none;") : (t = "width: 5px; position: absolute; left:1px; z-index: 10; pointer-events: none;", o = "opacity: " + r._bar_shell_opacity + "; top:2px; bottom: 2px; right: 2px; width: 6px; position: absolute; z-index: 10; pointer-events: none; ");
            var i = " background-color: rgba(0, 0, 0, 0.5); border-radius: 11px; -webkit-transition: cubic-bezier(0.33, 0.66, 0.66, 1);";
            t = t + i + e.bar_css, r._bar.style.cssText = t, r._bar_shell.style.cssText = o, r._countAboutBar(), r._countBarSize(), r._setBarSize(), r._countWidthCutBarSize(), r._bar_shell.appendChild(r._bar), r._parent_node.appendChild(r._bar_shell), setTimeout(function () {
                r._hideBar()
            }, 500)
        }, s._posBar = function () {
        }, s.__posBarX = function (e) {
            var t = this;
            t._bar.style.webkitTransform = "translate3d(" + e + "px, 0px, 0px)"
        }, s.__posBarY = function (e) {
            var t = this;
            t._bar.style.webkitTransform = "translate3d(0px, " + e + "px, 0px)"
        }, s._slipBar = function () {
            var e = this, t = e._about_bar * (e.xy + e.up_range);
            t <= 0 ? t = 0 : t >= e._width_cut_barSize && (t = Math.round(e._width_cut_barSize)), e._showBar(), e._posBar(t)
        }, s._slipBarPerfect = function () {
            var e, t = this, n = t._about_bar * (t.xy + t._bar_upRange);
            t._bar.style[t.width_or_height] = t._bar_size + "px", n < 0 ? (e = t._bar_size + 3 * n, t._bar.style[t.width_or_height] = Math.round(Math.max(e, 5)) + "px", n = 0) : n >= t._width_cut_barSize && (e = t._bar_size - 3 * (n - t._width_cut_barSize), e < 5 && (e = 5), t._bar.style[t.width_or_height] = Math.round(e) + "px", n = Math.round(t._width_cut_barSize + t._bar_size - e)), t._showBar(), t._posBar(n)
        }, s._slipBarTime = function (e) {
            this._bar.style.webkitTransitionDuration = "" + e + "ms", this._slipBar()
        }, s._stop = function () {
            var e = this, t = e._real();
            e._pos(t), e.no_bar || (e._bar.style.webkitTransitionDuration = "0", e._posBar(e._about_bar * t))
        }, s._stopPerfect = function () {
            clearTimeout(this._aniTime), this._animating = !1
        }, s._realX = function () {
            var e = getComputedStyle(this.core, null).webkitTransform.replace(/[^0-9-.,]/g, "").split(",");
            return 1 * e[4]
        }, s._realY = function () {
            var e = getComputedStyle(this.core, null).webkitTransform.replace(/[^0-9-.,]/g, "").split(",");
            return 1 * e[5]
        }, s._countBarSize = function () {
            this._bar_size = Math.round(Math.max(this.parent_wide_high * this.parent_wide_high / this.wide_high, 5))
        }, s._setBarSize = function () {
            this._bar.style[this.width_or_height] = this._bar_size + "px"
        }, s._countAboutBar = function () {
            this._about_bar = (this.parent_wide_high - 4 - (this.parent_wide_high - 4) * this.parent_wide_high / this.wide_high) / this.width_cut_coreWidth
        }, s._countWidthCutBarSize = function () {
            this._width_cut_barSize = this.parent_wide_high - 4 - this._bar_size
        }, s.refresh = function (e, t) {
            var n = this;
            n._refreshCommon(e, t), n.no_bar || (n.coreWidth_cut_width <= 0 ? (n._bar_shell_opacity = 0, n._showBar = function () {
            }) : (n._showBar = n._showBarStorage || n._showBar, n._countAboutBar(), n._countBarSize(), n._setBarSize(), n._countWidthCutBarSize())), n._rebound(0)
        }, s._posTimePerfect = function (e, t) {
            var n = this;
            n._steps.push({x: e, time: t || 0}), n._startAni()
        }, s.pos = function (e, t) {
            var n = this;
            if (n.xy !== e) {
                var o = t || 0;
                n._posTime(e, o), n.perfect || 0 !== o || (n._showBar(), setTimeout(function () {
                    n._hideBar()
                }, 100)), n.no_bar || n._slipBarTime(o)
            }
        }, s._startAni = function () {
            var e, t, n, o = this, r = o.xy, i = Date.now();
            if (!o._animating) {
                if (!o._steps.length) return void o._rebound();
                e = o._steps.shift(), e.x === r && (e.time = 0), o._animating = !0, n = function () {
                    var a, s = Date.now();
                    return s >= i + e.time ? (o._pos(e.x), o._animating = !1, void o._startAni()) : (s = (s - i) / e.time - 1, t = Math.sqrt(1 - s * s), a = (e.x - r) * t + r, o._pos(a), void(o._animating && (o._slipBar(), o._aniTime = setTimeout(n, 1))))
                }, n()
            }
        }, s._momentum = function (e, t, n, o, r) {
            var i = .001, a = Math.abs(e) / t, s = a * a / (2 * i), c = 0, u = 0;
            return e > 0 && s > n ? (u = r / (6 / (s / a * i)), n += u, a = a * n / s, s = n) : e < 0 && s > o && (u = r / (6 / (s / a * i)), o += u, a = a * o / s, s = o), s *= e < 0 ? -1 : 1, c = a / i, {
                dist: s,
                time: c
            }
        }, s._showBar = function () {
            var e = this;
            e._bar_show_ing || (e._bar_shell.style.opacity = "1", e._bar_shell.style.webkitTransitionDelay = "0ms", e._bar_shell.style.webkitTransitionDuration = "0ms", e._bar_show_ing = !0)
        }, s._hideBar = function () {
            var e = this;
            e._bar_shell.style.opacity = "0", e._bar_shell.style.webkitTransitionDelay = "300ms", e._bar_shell.style.webkitTransitionDuration = "300ms", e._bar.style.webkitTransitionDuration = "0ms", e._bar_show_ing = !1
        }, t.slip = o, e.exports = o
    }(window, document)
}, function (e, t) {
    "use strict";

    function n(e, t) {
        function n() {
            g = y.children, v = g.length, g.length < 2 && (t.continuous = !1), h.transitions && t.continuous && g.length < 3 && (y.appendChild(g[0].cloneNode(!0)), y.appendChild(y.children[1].cloneNode(!0)), g = y.children), m = new Array(g.length), _ = e.getBoundingClientRect().width || e.offsetWidth, y.style.width = g.length * _ + "px";
            for (var n = g.length; n--;) {
                var o = g[n];
                o.style.width = _ + "px", o.setAttribute("data-index", n), h.transitions && (o.style.left = n * -_ + "px", s(n, w > n ? -_ : w < n ? _ : 0, 0))
            }
            t.continuous && h.transitions && (s(i(w - 1), -_, 0), s(i(w + 1), _, 0)), h.transitions || (y.style.left = w * -_ + "px"), e.style.visibility = "visible"
        }

        function o() {
            t.continuous ? a(w - 1) : w && a(w - 1)
        }

        function r() {
            t.continuous ? a(w + 1) : w < g.length - 1 && a(w + 1)
        }

        function i(e) {
            return (g.length + e % g.length) % g.length
        }

        function a(e, n) {
            if (w != e) {
                if (h.transitions) {
                    var o = Math.abs(w - e) / (w - e);
                    if (t.continuous) {
                        var r = o;
                        o = -m[i(e)] / _, o !== r && (e = -o * g.length + e)
                    }
                    for (var a = Math.abs(w - e) - 1; a--;) s(i((e > w ? e : w) - a - 1), _ * o, 0);
                    e = i(e), s(w, _ * o, n || b), s(e, 0, n || b), t.continuous && s(i(e - o), -(_ * o), 0)
                } else e = i(e), u(w * -_, e * -_, n || b);
                w = e, f(t.callback && t.callback(w, g[w]))
            }
        }

        function s(e, t, n) {
            c(e, t, n), m[e] = t
        }

        function c(e, t, n) {
            var o = g[e], r = o && o.style;
            r && (r.webkitTransitionDuration = r.MozTransitionDuration = r.msTransitionDuration = r.OTransitionDuration = r.transitionDuration = n + "ms", r.webkitTransform = "translate(" + t + "px,0)translateZ(0)", r.msTransform = r.MozTransform = r.OTransform = "translateX(" + t + "px)")
        }

        function u(e, n, o) {
            if (!o) return void(y.style.left = n + "px");
            var r = +new Date, i = setInterval(function () {
                var a = +new Date - r;
                return a > o ? (y.style.left = n + "px", T && l(), t.transitionEnd && t.transitionEnd.call(event, w, g[w]), void clearInterval(i)) : void(y.style.left = (n - e) * (Math.floor(a / o * 100) / 100) + e + "px")
            }, 4)
        }

        function l() {
            S = setTimeout(r, T)
        }

        function p() {
            clearTimeout(S)
        }

        var d = function () {
        }, f = function (e) {
            setTimeout(e || d, 0)
        }, h = {
            addEventListener: !!window.addEventListener,
            touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            transitions: function (e) {
                var t = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
                for (var n in t) if (void 0 !== e.style[t[n]]) return !0;
                return !1
            }(document.createElement("swipe"))
        };
        if (e) {
            var g, m, _, v, y = e.children[0];
            t = t || {};
            var w = parseInt(t.startSlide, 10) || 0, b = t.speed || 300;
            t.continuous = void 0 === t.continuous || t.continuous;
            var S, x, T = t.auto || 0, E = {}, A = {}, I = {
                handleEvent: function (e) {
                    switch (e.type) {
                        case"touchstart":
                            this.start(e);
                            break;
                        case"touchmove":
                            this.move(e);
                            break;
                        case"touchend":
                            f(this.end(e));
                            break;
                        case"webkitTransitionEnd":
                        case"msTransitionEnd":
                        case"oTransitionEnd":
                        case"otransitionend":
                        case"transitionend":
                            f(this.transitionEnd(e));
                            break;
                        case"resize":
                            f(n)
                    }
                    t.stopPropagation && e.stopPropagation()
                }, start: function (e) {
                    var t = e.touches[0];
                    E = {
                        x: t.pageX,
                        y: t.pageY,
                        time: +new Date
                    }, x = void 0, A = {}, y.addEventListener("touchmove", this, !1), y.addEventListener("touchend", this, !1)
                }, move: function (e) {
                    if (!(e.touches.length > 1 || e.scale && 1 !== e.scale)) {
                        t.disableScroll && e.preventDefault();
                        var n = e.touches[0];
                        A = {
                            x: n.pageX - E.x,
                            y: n.pageY - E.y
                        }, "undefined" == typeof x && (x = !!(x || Math.abs(A.x) < Math.abs(A.y))), x || (e.preventDefault(), p(), t.continuous ? (c(i(w - 1), A.x + m[i(w - 1)], 0), c(w, A.x + m[w], 0), c(i(w + 1), A.x + m[i(w + 1)], 0)) : (A.x = A.x / (!w && A.x > 0 || w == g.length - 1 && A.x < 0 ? Math.abs(A.x) / _ + 1 : 1), c(w - 1, A.x + m[w - 1], 0), c(w, A.x + m[w], 0), c(w + 1, A.x + m[w + 1], 0)))
                    }
                }, end: function (e) {
                    var n = +new Date - E.time, o = Number(n) < 250 && Math.abs(A.x) > 20 || Math.abs(A.x) > _ / 2,
                        r = !w && A.x > 0 || w == g.length - 1 && A.x < 0;
                    t.continuous && (r = !1);
                    var a = A.x < 0;
                    x || (o && !r ? (a ? (t.continuous ? (s(i(w - 1), -_, 0), s(i(w + 2), _, 0)) : s(w - 1, -_, 0), s(w, m[w] - _, b), s(i(w + 1), m[i(w + 1)] - _, b), w = i(w + 1)) : (t.continuous ? (s(i(w + 1), _, 0), s(i(w - 2), -_, 0)) : s(w + 1, _, 0), s(w, m[w] + _, b), s(i(w - 1), m[i(w - 1)] + _, b), w = i(w - 1)), t.callback && t.callback(w, g[w])) : t.continuous ? (s(i(w - 1), -_, b), s(w, 0, b), s(i(w + 1), _, b)) : (s(w - 1, -_, b), s(w, 0, b), s(w + 1, _, b))), y.removeEventListener("touchmove", I, !1), y.removeEventListener("touchend", I, !1)
                }, transitionEnd: function (e) {
                    parseInt(e.target.getAttribute("data-index"), 10) == w && (T && l(), t.transitionEnd && t.transitionEnd.call(e, w, g[w]))
                }
            };
            return n(), T && l(), h.addEventListener ? (h.touch && y.addEventListener("touchstart", I, !1), h.transitions && (y.addEventListener("webkitTransitionEnd", I, !1), y.addEventListener("msTransitionEnd", I, !1), y.addEventListener("oTransitionEnd", I, !1), y.addEventListener("otransitionend", I, !1), y.addEventListener("transitionend", I, !1)), window.addEventListener("resize", I, !1)) : window.onresize = function () {
                n()
            }, {
                setup: function () {
                    n()
                }, slide: function (e, t) {
                    p(), a(e, t)
                }, prev: function () {
                    p(), o()
                }, next: function () {
                    p(), r()
                }, stop: function () {
                    p()
                }, getPos: function () {
                    return w
                }, getNumSlides: function () {
                    return v
                }, kill: function () {
                    p(), y.style.width = "", y.style.left = "";
                    for (var e = g.length; e--;) {
                        var t = g[e];
                        t.style.width = "", t.style.left = "", h.transitions && c(e, 0, 0)
                    }
                    h.addEventListener ? (y.removeEventListener("touchstart", I, !1), y.removeEventListener("webkitTransitionEnd", I, !1), y.removeEventListener("msTransitionEnd", I, !1), y.removeEventListener("oTransitionEnd", I, !1), y.removeEventListener("otransitionend", I, !1), y.removeEventListener("transitionend", I, !1), window.removeEventListener("resize", I, !1)) : window.onresize = null
                }
            }
        }
    }

    (window.jQuery || window.Zepto) && !function (e) {
        e.fn.Swipe = function (t) {
            return this.each(function () {
                e(this).data("Swipe", new n(e(this)[0], t))
            })
        }
    }(window.jQuery || window.Zepto), e.exports = n
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
}]);