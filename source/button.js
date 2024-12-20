(window.__twttrll = window.__twttrll || []).push([
    [3], {
        171: function(t, e, r) {
            var a = r(40),
                n = r(173),
                s = r(7);
            (a = Object.create(a)).build = s(a.build, null, n), t.exports = a
        },
        172: function(t, e, r) {
            var a = r(43),
                n = r(38),
                s = r(31),
                i = r(39),
                o = r(0),
                u = r(7),
                c = r(34),
                l = r(5),
                p = r(177);
            t.exports = function(t) {
                t.params({
                    partner: {
                        fallback: u(c.val, c, "partner")
                    }
                }), t.define("scribeItems", function() {
                    return {}
                }), t.define("scribeNamespace", function() {
                    return {
                        client: "tfw"
                    }
                }), t.define("scribeData", function() {
                    return {
                        widget_origin: i.rootDocumentLocation(),
                        widget_frame: i.isFramed() && i.currentDocumentLocation(),
                        widget_partner: this.params.partner,
                        widget_site_screen_name: p(c.val("site")),
                        widget_site_user_id: l.asNumber(c.val("site:id")),
                        widget_creator_screen_name: p(c.val("creator")),
                        widget_creator_user_id: l.asNumber(c.val("creator:id"))
                    }
                }), t.define("scribe", function(t, e, r) {
                    var n = this;
                    return s.getHorizonSettings().then(function(s) {
                        var i = {
                            session_id: s.sessionId
                        };
                        t = o.aug(n.scribeNamespace(), t || {}), e = o.aug(n.scribeData(), e || {}), a.clientEvent(t, e, !1, r, i)
                    })
                }), t.define("scribeInteraction", function(t, e, r) {
                    var a = n.extractTermsFromDOM(t.target);
                    return a.action = t.type, "url" === a.element && (a.element = n.clickEventElement(t.target)), this.scribe(a, e, r)
                })
            }
        },
        173: function(t, e, r) {
            var a = r(41),
                n = r(0),
                s = r(174);

            function i() {
                a.apply(this, arguments), this.Widget = this.Component
            }
            i.prototype = Object.create(a.prototype), n.aug(i.prototype, {
                factory: s,
                build: function() {
                    return a.prototype.build.apply(this, arguments)
                },
                selectors: function(t) {
                    var e = this.Widget.prototype.selectors;
                    t = t || {}, this.Widget.prototype.selectors = n.aug({}, t, e)
                }
            }), t.exports = i
        },
        174: function(t, e, r) {
            var a = r(6),
                n = r(36),
                s = r(42),
                i = r(0),
                o = r(7),
                u = r(175),
                c = "twitter-widget-";
            t.exports = function() {
                var t = s();

                function e(e, r) {
                    t.apply(this, arguments), this.id = c + u(), this.sandbox = r
                }
                return e.prototype = Object.create(t.prototype), i.aug(e.prototype, {
                    selectors: {},
                    hydrate: function() {
                        return a.resolve()
                    },
                    prepForInsertion: function() {},
                    render: function() {
                        return a.resolve()
                    },
                    show: function() {
                        return a.resolve()
                    },
                    resize: function() {
                        return a.resolve()
                    },
                    select: function(t, e) {
                        return 1 === arguments.length && (e = t, t = this.el), t ? (e = this.selectors[e] || e, i.toRealArray(t.querySelectorAll(e))) : []
                    },
                    selectOne: function() {
                        return this.select.apply(this, arguments)[0]
                    },
                    selectLast: function() {
                        return this.select.apply(this, arguments).pop()
                    },
                    on: function(t, e, r) {
                        var a, s = this.el;
                        this.el && (t = (t || "").split(/\s+/), 2 === arguments.length ? r = e : a = e, a = this.selectors[a] || a, r = o(r, this), t.forEach(a ? function(t) {
                            n.delegate(s, t, a, r)
                        } : function(t) {
                            s.addEventListener(t, r, !1)
                        }))
                    }
                }), e
            }
        },
        175: function(t, e) {
            var r = 0;
            t.exports = function() {
                return String(r++)
            }
        },
        176: function(t, e, r) {
            var a = r(5),
                n = r(0);
            t.exports = function(t) {
                t.define("widgetDataAttributes", function() {
                    return {}
                }), t.define("setDataAttributes", function() {
                    var t = this.sandbox.sandboxEl;
                    n.forIn(this.widgetDataAttributes(), function(e, r) {
                        a.hasValue(r) && t.setAttribute("data-" + e, r)
                    })
                }), t.after("render", function() {
                    this.setDataAttributes()
                })
            }
        },
        177: function(t, e) {
            t.exports = function(t) {
                return t && "@" === t[0] ? t.substr(1) : t
            }
        },
        194: function(t, e) {
            var r = /\{\{([\w_]+)\}\}/g;
            t.exports = function(t, e) {
                return t.replace(r, function(t, r) {
                    return void 0 !== e[r] ? e[r] : t
                })
            }
        },
        211: function(t, e, r) {
            var a = r(6),
                n = r(171),
                s = r(34),
                i = r(19),
                o = r(194),
                u = r(0),
                c = r(11),
                l = r(7),
                p = r(73),
                h = r(72),
                m = p.followButtonHtmlPath,
                f = "Twitter Follow Button",
                d = "twitter-follow-button";

            function g(t) {
                return "large" === t ? "l" : "m"
            }
            t.exports = n.couple(r(172), r(176), function(t) {
                t.params({
                    screenName: {
                        required: !0
                    },
                    lang: {
                        required: !0,
                        transform: h.matchLanguage,
                        fallback: "en"
                    },
                    size: {
                        fallback: "medium",
                        transform: g
                    },
                    showScreenName: {
                        fallback: !0
                    },
                    showCount: {
                        fallback: !0
                    },
                    partner: {
                        fallback: l(s.val, s, "partner")
                    },
                    count: {},
                    preview: {}
                }), t.define("getUrlParams", function() {
                    return u.compact({
                        id: this.id,
                        lang: this.params.lang,
                        size: this.params.size,
                        screen_name: this.params.screenName,
                        show_count: "none" !== this.params.count && this.params.showCount,
                        show_screen_name: this.params.showScreenName,
                        preview: this.params.preview,
                        partner: this.params.partner,
                        dnt: i.enabled(),
                        time: +new Date
                    })
                }), t.around("widgetDataAttributes", function(t) {
                    return u.aug({
                        "screen-name": this.params.screenName
                    }, t())
                }), t.around("scribeNamespace", function(t) {
                    return u.aug(t(), {
                        page: "button",
                        section: "follow"
                    })
                }), t.define("scribeImpression", function() {
                    this.scribe({
                        action: "impression"
                    }, {
                        language: this.params.lang,
                        message: [this.params.size, "none" === this.params.count ? "nocount" : "withcount"].join(":") + ":"
                    })
                }), t.override("render", function() {
                    var t = o(m, {
                            lang: this.params.lang
                        }),
                        e = c.encode(this.getUrlParams()),
                        r = p.resourceBaseUrl + t + "#" + e;
                    return this.scribeImpression(), a.all([this.sandbox.setTitle(f), this.sandbox.addClass(d), this.sandbox.loadDocument(r)])
                })
            })
        },
        246: function(t, e, r) {
            var a = r(6),
                n = r(4),
                s = r(9),
                i = r(34),
                o = r(19),
                u = r(194),
                c = r(77),
                l = r(0),
                p = r(11),
                h = r(3),
                m = r(171),
                f = r(7),
                d = r(73),
                g = r(72),
                b = d.tweetButtonHtmlPath,
                w = "Twitter Tweet Button",
                v = "twitter-tweet-button",
                _ = "twitter-share-button",
                y = "twitter-hashtag-button",
                x = "twitter-mention-button",
                N = ["share", "hashtag", "mention"];

            function D(t) {
                return "large" === t ? "l" : "m"
            }

            function k(t) {
                return l.contains(N, t)
            }

            function z(t) {
                return h.hashTag(t, !1)
            }

            function A(t) {
                return /\+/.test(t) && !/ /.test(t) ? t.replace(/\+/g, " ") : t
            }
            t.exports = m.couple(r(172), r(176), function(t) {
                t.params({
                    lang: {
                        required: !0,
                        transform: g.matchLanguage,
                        fallback: "en"
                    },
                    size: {
                        fallback: "medium",
                        transform: D
                    },
                    type: {
                        fallback: "share",
                        validate: k
                    },
                    text: {
                        transform: A
                    },
                    screenName: {
                        transform: h.screenName
                    },
                    buttonHashtag: {
                        transform: z
                    },
                    partner: {
                        fallback: f(i.val, i, "partner")
                    },
                    via: {},
                    related: {},
                    hashtags: {},
                    url: {}
                }), t.define("getUrlParams", function() {
                    var t = this.params.text,
                        e = this.params.url,
                        r = this.params.via,
                        a = this.params.related,
                        i = c.getScreenNameFromPage();
                    return "share" === this.params.type ? (t = t || n.title, e = e || c.getCanonicalURL() || s.href, r = r || i) : i && (a = a ? i + "," + a : i), l.compact({
                        id: this.id,
                        lang: this.params.lang,
                        size: this.params.size,
                        type: this.params.type,
                        text: t,
                        url: e,
                        via: r,
                        related: a,
                        button_hashtag: this.params.buttonHashtag,
                        screen_name: this.params.screenName,
                        hashtags: this.params.hashtags,
                        partner: this.params.partner,
                        original_referer: s.href,
                        dnt: o.enabled(),
                        time: +new Date
                    })
                }), t.around("widgetDataAttributes", function(t) {
                    return "mention" == this.params.type ? l.aug({
                        "screen-name": this.params.screenName
                    }, t()) : "hashtag" == this.params.type ? l.aug({
                        hashtag: this.params.buttonHashtag
                    }, t()) : l.aug({
                        url: this.params.url
                    }, t())
                }), t.around("scribeNamespace", function(t) {
                    return l.aug(t(), {
                        page: "button",
                        section: this.params.type
                    })
                }), t.define("scribeImpression", function() {
                    this.scribe({
                        action: "impression"
                    }, {
                        language: this.params.lang,
                        message: [this.params.size, "nocount"].join(":") + ":"
                    })
                }), t.override("render", function() {
                    var t, e = u(b, {
                            lang: this.params.lang
                        }),
                        r = p.encode(this.getUrlParams()),
                        n = d.resourceBaseUrl + e + "#" + r;
                    switch (this.params.type) {
                        case "hashtag":
                            t = y;
                            break;
                        case "mention":
                            t = x;
                            break;
                        default:
                            t = _
                    }
                    return this.scribeImpression(), a.all([this.sandbox.setTitle(w), this.sandbox.addClass(v), this.sandbox.addClass(t), this.sandbox.loadDocument(n)])
                })
            })
        },
        85: function(t, e, r) {
            var a = r(171);
            t.exports = a.build([r(211)])
        },
        91: function(t, e, r) {
            var a = r(171);
            t.exports = a.build([r(246)])
        }
    }
]);