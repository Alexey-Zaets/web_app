!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "dist",
    t(t.s = 1)
}([function(e, t, n) {
    var i, o;
    !function(t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return n(e)
        }
        : n(t)
    }("undefined" != typeof window ? window : this, function(n, r) {
        "use strict";
        function s(e, t, n) {
            t = t || ue;
            var i, o = t.createElement("script");
            if (o.text = e,
            n)
                for (i in xe)
                    n[i] && (o[i] = n[i]);
            t.head.appendChild(o).parentNode.removeChild(o)
        }
        function a(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ge[ve.call(e)] || "object" : typeof e
        }
        function l(e) {
            var t = !!e && "length"in e && e.length
              , n = a(e);
            return !Te(e) && !we(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        function c(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        function u(e, t, n) {
            return Te(t) ? _e.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? _e.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? _e.grep(e, function(e) {
                return me.call(t, e) > -1 !== n
            }) : _e.filter(t, e, n)
        }
        function d(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        function h(e) {
            var t = {};
            return _e.each(e.match(He) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }
        function f(e) {
            return e
        }
        function p(e) {
            throw e
        }
        function m(e, t, n, i) {
            var o;
            try {
                e && Te(o = e.promise) ? o.call(e).done(t).fail(n) : e && Te(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        function g() {
            ue.removeEventListener("DOMContentLoaded", g),
            n.removeEventListener("load", g),
            _e.ready()
        }
        function v(e, t) {
            return t.toUpperCase()
        }
        function b(e) {
            return e.replace(je, "ms-").replace(We, v)
        }
        function y() {
            this.expando = _e.expando + y.uid++
        }
        function E(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ve.test(e) ? JSON.parse(e) : e)
        }
        function C(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Ge, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = E(n)
                    } catch (e) {}
                    Ke.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        function T(e, t, n, i) {
            var o, r, s = 20, a = i ? function() {
                return i.cur()
            }
            : function() {
                return _e.css(e, t, "")
            }
            , l = a(), c = n && n[3] || (_e.cssNumber[t] ? "" : "px"), u = (_e.cssNumber[t] || "px" !== c && +l) && $e.exec(_e.css(e, t));
            if (u && u[3] !== c) {
                for (l /= 2,
                c = c || u[3],
                u = +l || 1; s--; )
                    _e.style(e, t, u + c),
                    (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0),
                    u /= r;
                u *= 2,
                _e.style(e, t, u + c),
                n = n || []
            }
            return n && (u = +u || +l || 0,
            o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
            i && (i.unit = c,
            i.start = u,
            i.end = o)),
            o
        }
        function w(e) {
            var t, n = e.ownerDocument, i = e.nodeName, o = Je[i];
            return o || (t = n.body.appendChild(n.createElement(i)),
            o = _e.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === o && (o = "block"),
            Je[i] = o,
            o)
        }
        function x(e, t) {
            for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
                i = e[r],
                i.style && (n = i.style.display,
                t ? ("none" === n && (o[r] = Ue.get(i, "display") || null,
                o[r] || (i.style.display = "")),
                "" === i.style.display && Ye(i) && (o[r] = w(i))) : "none" !== n && (o[r] = "none",
                Ue.set(i, "display", n)));
            for (r = 0; r < s; r++)
                null != o[r] && (e[r].style.display = o[r]);
            return e
        }
        function _(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && c(e, t) ? _e.merge([e], n) : n
        }
        function A(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                Ue.set(e[n], "globalEval", !t || Ue.get(t[n], "globalEval"))
        }
        function S(e, t, n, i, o) {
            for (var r, s, l, c, u, d, h = t.createDocumentFragment(), f = [], p = 0, m = e.length; p < m; p++)
                if ((r = e[p]) || 0 === r)
                    if ("object" === a(r))
                        _e.merge(f, r.nodeType ? [r] : r);
                    else if (it.test(r)) {
                        for (s = s || h.appendChild(t.createElement("div")),
                        l = (et.exec(r) || ["", ""])[1].toLowerCase(),
                        c = nt[l] || nt._default,
                        s.innerHTML = c[1] + _e.htmlPrefilter(r) + c[2],
                        d = c[0]; d--; )
                            s = s.lastChild;
                        _e.merge(f, s.childNodes),
                        s = h.firstChild,
                        s.textContent = ""
                    } else
                        f.push(t.createTextNode(r));
            for (h.textContent = "",
            p = 0; r = f[p++]; )
                if (i && _e.inArray(r, i) > -1)
                    o && o.push(r);
                else if (u = _e.contains(r.ownerDocument, r),
                s = _(h.appendChild(r), "script"),
                u && A(s),
                n)
                    for (d = 0; r = s[d++]; )
                        tt.test(r.type || "") && n.push(r);
            return h
        }
        function D() {
            return !0
        }
        function N() {
            return !1
        }
        function k() {
            try {
                return ue.activeElement
            } catch (e) {}
        }
        function O(e, t, n, i, o, r) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n,
                n = void 0);
                for (a in t)
                    O(e, a, n, i, t[a], r);
                return e
            }
            if (null == i && null == o ? (o = n,
            i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
            i = void 0) : (o = i,
            i = n,
            n = void 0)),
            !1 === o)
                o = N;
            else if (!o)
                return e;
            return 1 === r && (s = o,
            o = function(e) {
                return _e().off(e),
                s.apply(this, arguments)
            }
            ,
            o.guid = s.guid || (s.guid = _e.guid++)),
            e.each(function() {
                _e.event.add(this, t, o, i, n)
            })
        }
        function L(e, t) {
            return c(e, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") ? _e(e).children("tbody")[0] || e : e
        }
        function I(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function P(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function R(e, t) {
            var n, i, o, r, s, a, l, c;
            if (1 === t.nodeType) {
                if (Ue.hasData(e) && (r = Ue.access(e),
                s = Ue.set(t, r),
                c = r.events)) {
                    delete s.handle,
                    s.events = {};
                    for (o in c)
                        for (n = 0,
                        i = c[o].length; n < i; n++)
                            _e.event.add(t, o, c[o][n])
                }
                Ke.hasData(e) && (a = Ke.access(e),
                l = _e.extend({}, a),
                Ke.set(t, l))
            }
        }
        function H(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
        function M(e, t, n, i) {
            t = fe.apply([], t);
            var o, r, a, l, c, u, d = 0, h = e.length, f = h - 1, p = t[0], m = Te(p);
            if (m || h > 1 && "string" == typeof p && !Ce.checkClone && ut.test(p))
                return e.each(function(o) {
                    var r = e.eq(o);
                    m && (t[0] = p.call(this, o, r.html())),
                    M(r, t, n, i)
                });
            if (h && (o = S(t, e[0].ownerDocument, !1, e, i),
            r = o.firstChild,
            1 === o.childNodes.length && (o = r),
            r || i)) {
                for (a = _e.map(_(o, "script"), I),
                l = a.length; d < h; d++)
                    c = o,
                    d !== f && (c = _e.clone(c, !0, !0),
                    l && _e.merge(a, _(c, "script"))),
                    n.call(e[d], c, d);
                if (l)
                    for (u = a[a.length - 1].ownerDocument,
                    _e.map(a, P),
                    d = 0; d < l; d++)
                        c = a[d],
                        tt.test(c.type || "") && !Ue.access(c, "globalEval") && _e.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _e._evalUrl && _e._evalUrl(c.src) : s(c.textContent.replace(dt, ""), u, c))
            }
            return e
        }
        function F(e, t, n) {
            for (var i, o = t ? _e.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
                n || 1 !== i.nodeType || _e.cleanData(_(i)),
                i.parentNode && (n && _e.contains(i.ownerDocument, i) && A(_(i, "script")),
                i.parentNode.removeChild(i));
            return e
        }
        function B(e, t, n) {
            var i, o, r, s, a = e.style;
            return n = n || ft(e),
            n && (s = n.getPropertyValue(t) || n[t],
            "" !== s || _e.contains(e.ownerDocument, e) || (s = _e.style(e, t)),
            !Ce.pixelBoxStyles() && ht.test(s) && pt.test(t) && (i = a.width,
            o = a.minWidth,
            r = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = s,
            s = n.width,
            a.width = i,
            a.minWidth = o,
            a.maxWidth = r)),
            void 0 !== s ? s + "" : s
        }
        function j(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }
        function W(e) {
            if (e in Et)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = yt.length; n--; )
                if ((e = yt[n] + t)in Et)
                    return e
        }
        function q(e) {
            var t = _e.cssProps[e];
            return t || (t = _e.cssProps[e] = W(e) || e),
            t
        }
        function U(e, t, n) {
            var i = $e.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }
        function K(e, t, n, i, o, r) {
            var s = "width" === t ? 1 : 0
              , a = 0
              , l = 0;
            if (n === (i ? "border" : "content"))
                return 0;
            for (; s < 4; s += 2)
                "margin" === n && (l += _e.css(e, n + Qe[s], !0, o)),
                i ? ("content" === n && (l -= _e.css(e, "padding" + Qe[s], !0, o)),
                "margin" !== n && (l -= _e.css(e, "border" + Qe[s] + "Width", !0, o))) : (l += _e.css(e, "padding" + Qe[s], !0, o),
                "padding" !== n ? l += _e.css(e, "border" + Qe[s] + "Width", !0, o) : a += _e.css(e, "border" + Qe[s] + "Width", !0, o));
            return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))),
            l
        }
        function V(e, t, n) {
            var i = ft(e)
              , o = B(e, t, i)
              , r = "border-box" === _e.css(e, "boxSizing", !1, i)
              , s = r;
            if (ht.test(o)) {
                if (!n)
                    return o;
                o = "auto"
            }
            return s = s && (Ce.boxSizingReliable() || o === e.style[t]),
            ("auto" === o || !parseFloat(o) && "inline" === _e.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)],
            s = !0),
            (o = parseFloat(o) || 0) + K(e, t, n || (r ? "border" : "content"), s, i, o) + "px"
        }
        function G(e, t, n, i, o) {
            return new G.prototype.init(e,t,n,i,o)
        }
        function z() {
            Tt && (!1 === ue.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(z) : n.setTimeout(z, _e.fx.interval),
            _e.fx.tick())
        }
        function $() {
            return n.setTimeout(function() {
                Ct = void 0
            }),
            Ct = Date.now()
        }
        function Q(e, t) {
            var n, i = 0, o = {
                height: e
            };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
                n = Qe[i],
                o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e),
            o
        }
        function Y(e, t, n) {
            for (var i, o = (Z.tweeners[t] || []).concat(Z.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, t, e))
                    return i
        }
        function X(e, t, n) {
            var i, o, r, s, a, l, c, u, d = "width"in t || "height"in t, h = this, f = {}, p = e.style, m = e.nodeType && Ye(e), g = Ue.get(e, "fxshow");
            n.queue || (s = _e._queueHooks(e, "fx"),
            null == s.unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            h.always(function() {
                h.always(function() {
                    s.unqueued--,
                    _e.queue(e, "fx").length || s.empty.fire()
                })
            }));
            for (i in t)
                if (o = t[i],
                wt.test(o)) {
                    if (delete t[i],
                    r = r || "toggle" === o,
                    o === (m ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i])
                            continue;
                        m = !0
                    }
                    f[i] = g && g[i] || _e.style(e, i)
                }
            if ((l = !_e.isEmptyObject(t)) || !_e.isEmptyObject(f)) {
                d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                c = g && g.display,
                null == c && (c = Ue.get(e, "display")),
                u = _e.css(e, "display"),
                "none" === u && (c ? u = c : (x([e], !0),
                c = e.style.display || c,
                u = _e.css(e, "display"),
                x([e]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === _e.css(e, "float") && (l || (h.done(function() {
                    p.display = c
                }),
                null == c && (u = p.display,
                c = "none" === u ? "" : u)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                h.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                l = !1;
                for (i in f)
                    l || (g ? "hidden"in g && (m = g.hidden) : g = Ue.access(e, "fxshow", {
                        display: c
                    }),
                    r && (g.hidden = !m),
                    m && x([e], !0),
                    h.done(function() {
                        m || x([e]),
                        Ue.remove(e, "fxshow");
                        for (i in f)
                            _e.style(e, i, f[i])
                    })),
                    l = Y(m ? g[i] : 0, i, h),
                    i in g || (g[i] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
            }
        }
        function J(e, t) {
            var n, i, o, r, s;
            for (n in e)
                if (i = b(n),
                o = t[i],
                r = e[n],
                Array.isArray(r) && (o = r[1],
                r = e[n] = r[0]),
                n !== i && (e[i] = r,
                delete e[n]),
                (s = _e.cssHooks[i]) && "expand"in s) {
                    r = s.expand(r),
                    delete e[i];
                    for (n in r)
                        n in e || (e[n] = r[n],
                        t[n] = o)
                } else
                    t[i] = o
        }
        function Z(e, t, n) {
            var i, o, r = 0, s = Z.prefilters.length, a = _e.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (o)
                    return !1;
                for (var t = Ct || $(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; s < l; s++)
                    c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, n]),
                r < 1 && l ? n : (l || a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c]),
                !1)
            }, c = a.promise({
                elem: e,
                props: _e.extend({}, t),
                opts: _e.extend(!0, {
                    specialEasing: {},
                    easing: _e.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ct || $(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = _e.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i),
                    i
                },
                stop: function(t) {
                    var n = 0
                      , i = t ? c.tweens.length : 0;
                    if (o)
                        return this;
                    for (o = !0; n < i; n++)
                        c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]),
                    a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                    this
                }
            }), u = c.props;
            for (J(u, c.opts.specialEasing); r < s; r++)
                if (i = Z.prefilters[r].call(c, e, u, c.opts))
                    return Te(i.stop) && (_e._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                    i;
            return _e.map(u, Y, c),
            Te(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            _e.fx.timer(_e.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c
        }
        function ee(e) {
            return (e.match(He) || []).join(" ")
        }
        function te(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function ne(e) {
            return Array.isArray(e) ? e : "string" == typeof e ? e.match(He) || [] : []
        }
        function ie(e, t, n, i) {
            var o;
            if (Array.isArray(t))
                _e.each(t, function(t, o) {
                    n || Rt.test(e) ? i(e, o) : ie(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
                });
            else if (n || "object" !== a(t))
                i(e, t);
            else
                for (o in t)
                    ie(e + "[" + o + "]", t[o], n, i)
        }
        function oe(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var i, o = 0, r = t.toLowerCase().match(He) || [];
                if (Te(n))
                    for (; i = r[o++]; )
                        "+" === i[0] ? (i = i.slice(1) || "*",
                        (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }
        function re(e, t, n, i) {
            function o(a) {
                var l;
                return r[a] = !0,
                _e.each(e[a] || [], function(e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                    o(c),
                    !1)
                }),
                l
            }
            var r = {}
              , s = e === zt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }
        function se(e, t) {
            var n, i, o = _e.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && _e.extend(!0, e, i),
            e
        }
        function ae(e, t, n) {
            for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                l.shift(),
                void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (o in a)
                    if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break
                    }
            if (l[0]in n)
                r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    s || (s = o)
                }
                r = r || s
            }
            if (r)
                return r !== l[0] && l.unshift(r),
                n[r]
        }
        function le(e, t, n, i) {
            var o, r, s, a, l, c = {}, u = e.dataTypes.slice();
            if (u[1])
                for (s in e.converters)
                    c[s.toLowerCase()] = e.converters[s];
            for (r = u.shift(); r; )
                if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                l = r,
                r = u.shift())
                    if ("*" === r)
                        r = l;
                    else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if (a = o.split(" "),
                                a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0],
                                    u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws)
                                t = s(t);
                            else
                                try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + l + " to " + r
                                    }
                                }
                    }
            return {
                state: "success",
                data: t
            }
        }
        var ce = []
          , ue = n.document
          , de = Object.getPrototypeOf
          , he = ce.slice
          , fe = ce.concat
          , pe = ce.push
          , me = ce.indexOf
          , ge = {}
          , ve = ge.toString
          , be = ge.hasOwnProperty
          , ye = be.toString
          , Ee = ye.call(Object)
          , Ce = {}
          , Te = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }
          , we = function(e) {
            return null != e && e === e.window
        }
          , xe = {
            type: !0,
            src: !0,
            noModule: !0
        }
          , _e = function(e, t) {
            return new _e.fn.init(e,t)
        }
          , Ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        _e.fn = _e.prototype = {
            jquery: "3.3.1",
            constructor: _e,
            length: 0,
            toArray: function() {
                return he.call(this)
            },
            get: function(e) {
                return null == e ? he.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = _e.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return _e.each(this, e)
            },
            map: function(e) {
                return this.pushStack(_e.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(he.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: pe,
            sort: ce.sort,
            splice: ce.splice
        },
        _e.extend = _e.fn.extend = function() {
            var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s,
            s = arguments[a] || {},
            a++),
            "object" == typeof s || Te(s) || (s = {}),
            a === l && (s = this,
            a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        n = s[t],
                        i = e[t],
                        s !== i && (c && i && (_e.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1,
                        r = n && Array.isArray(n) ? n : []) : r = n && _e.isPlainObject(n) ? n : {},
                        s[t] = _e.extend(c, r, i)) : void 0 !== i && (s[t] = i));
            return s
        }
        ,
        _e.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== ve.call(e) || (t = de(e)) && ("function" != typeof (n = be.call(t, "constructor") && t.constructor) || ye.call(n) !== Ee))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function(e) {
                s(e)
            },
            each: function(e, t) {
                var n, i = 0;
                if (l(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                        ;
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(Ae, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (l(Object(e)) ? _e.merge(n, "string" == typeof e ? [e] : e) : pe.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : me.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                    e[o++] = t[i];
                return e.length = o,
                e
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                    !t(e[o], o) !== s && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var i, o, r = 0, s = [];
                if (l(e))
                    for (i = e.length; r < i; r++)
                        null != (o = t(e[r], r, n)) && s.push(o);
                else
                    for (r in e)
                        null != (o = t(e[r], r, n)) && s.push(o);
                return fe.apply([], s)
            },
            guid: 1,
            support: Ce
        }),
        "function" == typeof Symbol && (_e.fn[Symbol.iterator] = ce[Symbol.iterator]),
        _e.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            ge["[object " + t + "]"] = t.toLowerCase()
        });
        var Se = function(e) {
            function t(e, t, n, i) {
                var o, r, s, a, l, u, h, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
                if (n = n || [],
                "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p)
                    return n;
                if (!i && ((t ? t.ownerDocument || t : B) !== O && k(t),
                t = t || O,
                I)) {
                    if (11 !== p && (l = me.exec(e)))
                        if (o = l[1]) {
                            if (9 === p) {
                                if (!(s = t.getElementById(o)))
                                    return n;
                                if (s.id === o)
                                    return n.push(s),
                                    n
                            } else if (f && (s = f.getElementById(o)) && M(t, s) && s.id === o)
                                return n.push(s),
                                n
                        } else {
                            if (l[2])
                                return Y.apply(n, t.getElementsByTagName(e)),
                                n;
                            if ((o = l[3]) && E.getElementsByClassName && t.getElementsByClassName)
                                return Y.apply(n, t.getElementsByClassName(o)),
                                n
                        }
                    if (E.qsa && !K[e + " "] && (!P || !P.test(e))) {
                        if (1 !== p)
                            f = t,
                            h = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(ye, Ee) : t.setAttribute("id", a = F),
                            u = x(e),
                            r = u.length; r--; )
                                u[r] = "#" + a + " " + d(u[r]);
                            h = u.join(","),
                            f = ge.test(e) && c(t.parentNode) || t
                        }
                        if (h)
                            try {
                                return Y.apply(n, f.querySelectorAll(h)),
                                n
                            } catch (e) {} finally {
                                a === F && t.removeAttribute("id")
                            }
                    }
                }
                return A(e.replace(re, "$1"), t, n, i)
            }
            function n() {
                function e(n, i) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()],
                    e[n + " "] = i
                }
                var t = [];
                return e
            }
            function i(e) {
                return e[F] = !0,
                e
            }
            function o(e) {
                var t = O.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function r(e, t) {
                for (var n = e.split("|"), i = n.length; i--; )
                    C.attrHandle[n[i]] = t
            }
            function s(e, t) {
                var n = t && e
                  , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function a(e) {
                return function(t) {
                    return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label"in t && t.disabled === e
                }
            }
            function l(e) {
                return i(function(t) {
                    return t = +t,
                    i(function(n, i) {
                        for (var o, r = e([], n.length, t), s = r.length; s--; )
                            n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }
            function c(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            function u() {}
            function d(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++)
                    i += e[t].value;
                return i
            }
            function h(e, t, n) {
                var i = t.dir
                  , o = t.next
                  , r = o || i
                  , s = n && "parentNode" === r
                  , a = W++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i]; )
                        if (1 === t.nodeType || s)
                            return e(t, n, o);
                    return !1
                }
                : function(t, n, l) {
                    var c, u, d, h = [j, a];
                    if (l) {
                        for (; t = t[i]; )
                            if ((1 === t.nodeType || s) && e(t, n, l))
                                return !0
                    } else
                        for (; t = t[i]; )
                            if (1 === t.nodeType || s)
                                if (d = t[F] || (t[F] = {}),
                                u = d[t.uniqueID] || (d[t.uniqueID] = {}),
                                o && o === t.nodeName.toLowerCase())
                                    t = t[i] || t;
                                else {
                                    if ((c = u[r]) && c[0] === j && c[1] === a)
                                        return h[2] = c[2];
                                    if (u[r] = h,
                                    h[2] = e(t, n, l))
                                        return !0
                                }
                    return !1
                }
            }
            function f(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--; )
                        if (!e[o](t, n, i))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function p(e, n, i) {
                for (var o = 0, r = n.length; o < r; o++)
                    t(e, n[o], i);
                return i
            }
            function m(e, t, n, i, o) {
                for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                    (r = e[a]) && (n && !n(r, i, o) || (s.push(r),
                    c && t.push(a)));
                return s
            }
            function g(e, t, n, o, r, s) {
                return o && !o[F] && (o = g(o)),
                r && !r[F] && (r = g(r, s)),
                i(function(i, s, a, l) {
                    var c, u, d, h = [], f = [], g = s.length, v = i || p(t || "*", a.nodeType ? [a] : a, []), b = !e || !i && t ? v : m(v, h, e, a, l), y = n ? r || (i ? e : g || o) ? [] : s : b;
                    if (n && n(b, y, a, l),
                    o)
                        for (c = m(y, f),
                        o(c, [], a, l),
                        u = c.length; u--; )
                            (d = c[u]) && (y[f[u]] = !(b[f[u]] = d));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (c = [],
                                u = y.length; u--; )
                                    (d = y[u]) && c.push(b[u] = d);
                                r(null, y = [], c, l)
                            }
                            for (u = y.length; u--; )
                                (d = y[u]) && (c = r ? J(i, d) : h[u]) > -1 && (i[c] = !(s[c] = d))
                        }
                    } else
                        y = m(y === s ? y.splice(g, y.length) : y),
                        r ? r(null, s, y, l) : Y.apply(s, y)
                })
            }
            function v(e) {
                for (var t, n, i, o = e.length, r = C.relative[e[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = h(function(e) {
                    return e === t
                }, s, !0), c = h(function(e) {
                    return J(t, e) > -1
                }, s, !0), u = [function(e, n, i) {
                    var o = !r && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null,
                    o
                }
                ]; a < o; a++)
                    if (n = C.relative[e[a].type])
                        u = [h(f(u), n)];
                    else {
                        if (n = C.filter[e[a].type].apply(null, e[a].matches),
                        n[F]) {
                            for (i = ++a; i < o && !C.relative[e[i].type]; i++)
                                ;
                            return g(a > 1 && f(u), a > 1 && d(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(re, "$1"), n, a < i && v(e.slice(a, i)), i < o && v(e = e.slice(i)), i < o && d(e))
                        }
                        u.push(n)
                    }
                return f(u)
            }
            function b(e, n) {
                var o = n.length > 0
                  , r = e.length > 0
                  , s = function(i, s, a, l, c) {
                    var u, d, h, f = 0, p = "0", g = i && [], v = [], b = S, y = i || r && C.find.TAG("*", c), E = j += null == b ? 1 : Math.random() || .1, T = y.length;
                    for (c && (S = s === O || s || c); p !== T && null != (u = y[p]); p++) {
                        if (r && u) {
                            for (d = 0,
                            s || u.ownerDocument === O || (k(u),
                            a = !I); h = e[d++]; )
                                if (h(u, s || O, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (j = E)
                        }
                        o && ((u = !h && u) && f--,
                        i && g.push(u))
                    }
                    if (f += p,
                    o && p !== f) {
                        for (d = 0; h = n[d++]; )
                            h(g, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; p--; )
                                    g[p] || v[p] || (v[p] = $.call(l));
                            v = m(v)
                        }
                        Y.apply(l, v),
                        c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (j = E,
                    S = b),
                    g
                };
                return o ? i(s) : s
            }
            var y, E, C, T, w, x, _, A, S, D, N, k, O, L, I, P, R, H, M, F = "sizzle" + 1 * new Date, B = e.document, j = 0, W = 0, q = n(), U = n(), K = n(), V = function(e, t) {
                return e === t && (N = !0),
                0
            }, G = {}.hasOwnProperty, z = [], $ = z.pop, Q = z.push, Y = z.push, X = z.slice, J = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", oe = new RegExp(ee + "+","g"), re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), se = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), ce = new RegExp(ie), ue = new RegExp("^" + te + "$"), de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
                bool: new RegExp("^(?:" + Z + ")$","i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
            }, he = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, pe = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), be = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, ye = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Ee = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, Ce = function() {
                k()
            }, Te = h(function(e) {
                return !0 === e.disabled && ("form"in e || "label"in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                Y.apply(z = X.call(B.childNodes), B.childNodes),
                z[B.childNodes.length].nodeType
            } catch (e) {
                Y = {
                    apply: z.length ? function(e, t) {
                        Q.apply(e, X.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            E = t.support = {},
            w = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            k = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : B;
                return i !== O && 9 === i.nodeType && i.documentElement ? (O = i,
                L = O.documentElement,
                I = !w(O),
                B !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
                E.attributes = o(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                E.getElementsByTagName = o(function(e) {
                    return e.appendChild(O.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                E.getElementsByClassName = pe.test(O.getElementsByClassName),
                E.getById = o(function(e) {
                    return L.appendChild(e).id = F,
                    !O.getElementsByName || !O.getElementsByName(F).length
                }),
                E.getById ? (C.filter.ID = function(e) {
                    var t = e.replace(ve, be);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                C.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && I) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ) : (C.filter.ID = function(e) {
                    var t = e.replace(ve, be);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ,
                C.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && I) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                                return [r];
                            for (o = t.getElementsByName(e),
                            i = 0; r = o[i++]; )
                                if ((n = r.getAttributeNode("id")) && n.value === e)
                                    return [r]
                        }
                        return []
                    }
                }
                ),
                C.find.TAG = E.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : E.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, i = [], o = 0, r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++]; )
                            1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }
                ,
                C.find.CLASS = E.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && I)
                        return t.getElementsByClassName(e)
                }
                ,
                R = [],
                P = [],
                (E.qsa = pe.test(O.querySelectorAll)) && (o(function(e) {
                    L.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ee + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || P.push("\\[" + ee + "*(?:value|" + Z + ")"),
                    e.querySelectorAll("[id~=" + F + "-]").length || P.push("~="),
                    e.querySelectorAll(":checked").length || P.push(":checked"),
                    e.querySelectorAll("a#" + F + "+*").length || P.push(".#.+[+~]")
                }),
                o(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = O.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && P.push("name" + ee + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"),
                    L.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    P.push(",.*:")
                })),
                (E.matchesSelector = pe.test(H = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function(e) {
                    E.disconnectedMatch = H.call(e, "*"),
                    H.call(e, "[s!='']:x"),
                    R.push("!=", ie)
                }),
                P = P.length && new RegExp(P.join("|")),
                R = R.length && new RegExp(R.join("|")),
                t = pe.test(L.compareDocumentPosition),
                M = t || pe.test(L.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                V = t ? function(e, t) {
                    if (e === t)
                        return N = !0,
                        0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                    1 & n || !E.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === B && M(B, e) ? -1 : t === O || t.ownerDocument === B && M(B, t) ? 1 : D ? J(D, e) - J(D, t) : 0 : 4 & n ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return N = !0,
                        0;
                    var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], l = [t];
                    if (!o || !r)
                        return e === O ? -1 : t === O ? 1 : o ? -1 : r ? 1 : D ? J(D, e) - J(D, t) : 0;
                    if (o === r)
                        return s(e, t);
                    for (n = e; n = n.parentNode; )
                        a.unshift(n);
                    for (n = t; n = n.parentNode; )
                        l.unshift(n);
                    for (; a[i] === l[i]; )
                        i++;
                    return i ? s(a[i], l[i]) : a[i] === B ? -1 : l[i] === B ? 1 : 0
                }
                ,
                O) : O
            }
            ,
            t.matches = function(e, n) {
                return t(e, null, null, n)
            }
            ,
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== O && k(e),
                n = n.replace(le, "='$1']"),
                E.matchesSelector && I && !K[n + " "] && (!R || !R.test(n)) && (!P || !P.test(n)))
                    try {
                        var i = H.call(e, n);
                        if (i || E.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return i
                    } catch (e) {}
                return t(n, O, null, [e]).length > 0
            }
            ,
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== O && k(e),
                M(e, t)
            }
            ,
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== O && k(e);
                var n = C.attrHandle[t.toLowerCase()]
                  , i = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
                return void 0 !== i ? i : E.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }
            ,
            t.escape = function(e) {
                return (e + "").replace(ye, Ee)
            }
            ,
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function(e) {
                var t, n = [], i = 0, o = 0;
                if (N = !E.detectDuplicates,
                D = !E.sortStable && e.slice(0),
                e.sort(V),
                N) {
                    for (; t = e[o++]; )
                        t === e[o] && (i = n.push(o));
                    for (; i--; )
                        e.splice(n[i], 1)
                }
                return D = null,
                e
            }
            ,
            T = t.getText = function(e) {
                var t, n = "", i = 0, o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += T(e)
                    } else if (3 === o || 4 === o)
                        return e.nodeValue
                } else
                    for (; t = e[i++]; )
                        n += T(t);
                return n
            }
            ,
            C = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ve, be),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(ve, be),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = x(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ve, be).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = q[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && q(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : !n || (r += "",
                            "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3)
                          , s = "last" !== e.slice(-4)
                          , a = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, l) {
                            var c, u, d, h, f, p, m = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), b = !l && !a, y = !1;
                            if (g) {
                                if (r) {
                                    for (; m; ) {
                                        for (h = t; h = h[m]; )
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                                return !1;
                                        p = m = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild],
                                s && b) {
                                    for (h = g,
                                    d = h[F] || (h[F] = {}),
                                    u = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                    c = u[e] || [],
                                    f = c[0] === j && c[1],
                                    y = f && c[2],
                                    h = f && g.childNodes[f]; h = ++f && h && h[m] || (y = f = 0) || p.pop(); )
                                        if (1 === h.nodeType && ++y && h === t) {
                                            u[e] = [j, f, y];
                                            break
                                        }
                                } else if (b && (h = t,
                                d = h[F] || (h[F] = {}),
                                u = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                c = u[e] || [],
                                f = c[0] === j && c[1],
                                y = f),
                                !1 === y)
                                    for (; (h = ++f && h && h[m] || (y = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++y || (b && (d = h[F] || (h[F] = {}),
                                    u = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                    u[e] = [j, y]),
                                    h !== t)); )
                                        ;
                                return (y -= o) === i || y % i == 0 && y / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[F] ? r(n) : r.length > 1 ? (o = [e, e, "", n],
                        C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, o = r(e, n), s = o.length; s--; )
                                i = J(e, o[s]),
                                e[i] = !(t[i] = o[s])
                        }) : function(e) {
                            return r(e, 0, o)
                        }
                        ) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = []
                          , n = []
                          , o = _(e.replace(re, "$1"));
                        return o[F] ? i(function(e, t, n, i) {
                            for (var r, s = o(e, null, i, []), a = e.length; a--; )
                                (r = s[a]) && (e[a] = !(t[a] = r))
                        }) : function(e, i, r) {
                            return t[0] = e,
                            o(t, null, r, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(ve, be),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return ue.test(e || "") || t.error("unsupported lang: " + e),
                        e = e.replace(ve, be).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === L
                    },
                    focus: function(e) {
                        return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: a(!1),
                    disabled: a(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return fe.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0; )
                            e.push(i);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t; )
                            e.push(i);
                        return e
                    })
                }
            },
            C.pseudos.nth = C.pseudos.eq;
            for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                C.pseudos[y] = function(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(y);
            for (y in {
                submit: !0,
                reset: !0
            })
                C.pseudos[y] = function(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }(y);
            return u.prototype = C.filters = C.pseudos,
            C.setFilters = new u,
            x = t.tokenize = function(e, n) {
                var i, o, r, s, a, l, c, u = U[e + " "];
                if (u)
                    return n ? 0 : u.slice(0);
                for (a = e,
                l = [],
                c = C.preFilter; a; ) {
                    i && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                    l.push(r = [])),
                    i = !1,
                    (o = ae.exec(a)) && (i = o.shift(),
                    r.push({
                        value: i,
                        type: o[0].replace(re, " ")
                    }),
                    a = a.slice(i.length));
                    for (s in C.filter)
                        !(o = de[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(),
                        r.push({
                            value: i,
                            type: s,
                            matches: o
                        }),
                        a = a.slice(i.length));
                    if (!i)
                        break
                }
                return n ? a.length : a ? t.error(e) : U(e, l).slice(0)
            }
            ,
            _ = t.compile = function(e, t) {
                var n, i = [], o = [], r = K[e + " "];
                if (!r) {
                    for (t || (t = x(e)),
                    n = t.length; n--; )
                        r = v(t[n]),
                        r[F] ? i.push(r) : o.push(r);
                    r = K(e, b(o, i)),
                    r.selector = e
                }
                return r
            }
            ,
            A = t.select = function(e, t, n, i) {
                var o, r, s, a, l, u = "function" == typeof e && e, h = !i && x(e = u.selector || e);
                if (n = n || [],
                1 === h.length) {
                    if (r = h[0] = h[0].slice(0),
                    r.length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && I && C.relative[r[1].type]) {
                        if (!(t = (C.find.ID(s.matches[0].replace(ve, be), t) || [])[0]))
                            return n;
                        u && (t = t.parentNode),
                        e = e.slice(r.shift().value.length)
                    }
                    for (o = de.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o],
                    !C.relative[a = s.type]); )
                        if ((l = C.find[a]) && (i = l(s.matches[0].replace(ve, be), ge.test(r[0].type) && c(t.parentNode) || t))) {
                            if (r.splice(o, 1),
                            !(e = i.length && d(r)))
                                return Y.apply(n, i),
                                n;
                            break
                        }
                }
                return (u || _(e, h))(i, t, !I, n, !t || ge.test(e) && c(t.parentNode) || t),
                n
            }
            ,
            E.sortStable = F.split("").sort(V).join("") === F,
            E.detectDuplicates = !!N,
            k(),
            E.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
            }),
            o(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            E.attributes && o(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            o(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(Z, function(e, t, n) {
                var i;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }),
            t
        }(n);
        _e.find = Se,
        _e.expr = Se.selectors,
        _e.expr[":"] = _e.expr.pseudos,
        _e.uniqueSort = _e.unique = Se.uniqueSort,
        _e.text = Se.getText,
        _e.isXMLDoc = Se.isXML,
        _e.contains = Se.contains,
        _e.escapeSelector = Se.escape;
        var De = function(e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (o && _e(e).is(n))
                        break;
                    i.push(e)
                }
            return i
        }
          , Ne = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , ke = _e.expr.match.needsContext
          , Oe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        _e.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? _e.find.matchesSelector(i, e) ? [i] : [] : _e.find.matches(e, _e.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        _e.fn.extend({
            find: function(e) {
                var t, n, i = this.length, o = this;
                if ("string" != typeof e)
                    return this.pushStack(_e(e).filter(function() {
                        for (t = 0; t < i; t++)
                            if (_e.contains(o[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                t = 0; t < i; t++)
                    _e.find(e, o[t], n);
                return i > 1 ? _e.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(u(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(u(this, e || [], !0))
            },
            is: function(e) {
                return !!u(this, "string" == typeof e && ke.test(e) ? _e(e) : e || [], !1).length
            }
        });
        var Le, Ie = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (_e.fn.init = function(e, t, n) {
            var i, o;
            if (!e)
                return this;
            if (n = n || Le,
            "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ie.exec(e)) || !i[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof _e ? t[0] : t,
                    _e.merge(this, _e.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ue, !0)),
                    Oe.test(i[1]) && _e.isPlainObject(t))
                        for (i in t)
                            Te(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return o = ue.getElementById(i[2]),
                o && (this[0] = o,
                this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : Te(e) ? void 0 !== n.ready ? n.ready(e) : e(_e) : _e.makeArray(e, this)
        }
        ).prototype = _e.fn,
        Le = _e(ue);
        var Pe = /^(?:parents|prev(?:Until|All))/
          , Re = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        _e.fn.extend({
            has: function(e) {
                var t = _e(e, this)
                  , n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (_e.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0, o = this.length, r = [], s = "string" != typeof e && _e(e);
                if (!ke.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && _e.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(r.length > 1 ? _e.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? me.call(_e(e), this[0]) : me.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(_e.uniqueSort(_e.merge(this.get(), _e(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        _e.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return De(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return De(e, "parentNode", n)
            },
            next: function(e) {
                return d(e, "nextSibling")
            },
            prev: function(e) {
                return d(e, "previousSibling")
            },
            nextAll: function(e) {
                return De(e, "nextSibling")
            },
            prevAll: function(e) {
                return De(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return De(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return De(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Ne((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Ne(e.firstChild)
            },
            contents: function(e) {
                return c(e, "iframe") ? e.contentDocument : (c(e, "template") && (e = e.content || e),
                _e.merge([], e.childNodes))
            }
        }, function(e, t) {
            _e.fn[e] = function(n, i) {
                var o = _e.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (o = _e.filter(i, o)),
                this.length > 1 && (Re[e] || _e.uniqueSort(o),
                Pe.test(e) && o.reverse()),
                this.pushStack(o)
            }
        });
        var He = /[^\x20\t\r\n\f]+/g;
        _e.Callbacks = function(e) {
            e = "string" == typeof e ? h(e) : _e.extend({}, e);
            var t, n, i, o, r = [], s = [], l = -1, c = function() {
                for (o = o || e.once,
                i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < r.length; )
                        !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length,
                        n = !1);
                e.memory || (n = !1),
                t = !1,
                o && (r = n ? [] : "")
            }, u = {
                add: function() {
                    return r && (n && !t && (l = r.length - 1,
                    s.push(n)),
                    function t(n) {
                        _e.each(n, function(n, i) {
                            Te(i) ? e.unique && u.has(i) || r.push(i) : i && i.length && "string" !== a(i) && t(i)
                        })
                    }(arguments),
                    n && !t && c()),
                    this
                },
                remove: function() {
                    return _e.each(arguments, function(e, t) {
                        for (var n; (n = _e.inArray(t, r, n)) > -1; )
                            r.splice(n, 1),
                            n <= l && l--
                    }),
                    this
                },
                has: function(e) {
                    return e ? _e.inArray(e, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []),
                    this
                },
                disable: function() {
                    return o = s = [],
                    r = n = "",
                    this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = s = [],
                    n || t || (r = n = ""),
                    this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = n || [],
                    n = [e, n.slice ? n.slice() : n],
                    s.push(n),
                    t || c()),
                    this
                },
                fire: function() {
                    return u.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!i
                }
            };
            return u
        }
        ,
        _e.extend({
            Deferred: function(e) {
                var t = [["notify", "progress", _e.Callbacks("memory"), _e.Callbacks("memory"), 2], ["resolve", "done", _e.Callbacks("once memory"), _e.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _e.Callbacks("once memory"), _e.Callbacks("once memory"), 1, "rejected"]]
                  , i = "pending"
                  , o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return _e.Deferred(function(n) {
                            _e.each(t, function(t, i) {
                                var o = Te(e[i[4]]) && e[i[4]];
                                r[i[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && Te(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    then: function(e, i, o) {
                        function r(e, t, i, o) {
                            return function() {
                                var a = this
                                  , l = arguments
                                  , c = function() {
                                    var n, c;
                                    if (!(e < s)) {
                                        if ((n = i.apply(a, l)) === t.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        c = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        Te(c) ? o ? c.call(n, r(s, t, f, o), r(s, t, p, o)) : (s++,
                                        c.call(n, r(s, t, f, o), r(s, t, p, o), r(s, t, f, t.notifyWith))) : (i !== f && (a = void 0,
                                        l = [n]),
                                        (o || t.resolveWith)(a, l))
                                    }
                                }
                                  , u = o ? c : function() {
                                    try {
                                        c()
                                    } catch (n) {
                                        _e.Deferred.exceptionHook && _e.Deferred.exceptionHook(n, u.stackTrace),
                                        e + 1 >= s && (i !== p && (a = void 0,
                                        l = [n]),
                                        t.rejectWith(a, l))
                                    }
                                }
                                ;
                                e ? u() : (_e.Deferred.getStackHook && (u.stackTrace = _e.Deferred.getStackHook()),
                                n.setTimeout(u))
                            }
                        }
                        var s = 0;
                        return _e.Deferred(function(n) {
                            t[0][3].add(r(0, n, Te(o) ? o : f, n.notifyWith)),
                            t[1][3].add(r(0, n, Te(e) ? e : f)),
                            t[2][3].add(r(0, n, Te(i) ? i : p))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? _e.extend(e, o) : o
                    }
                }
                  , r = {};
                return _e.each(t, function(e, n) {
                    var s = n[2]
                      , a = n[5];
                    o[n[1]] = s.add,
                    a && s.add(function() {
                        i = a
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                    s.add(n[3].fire),
                    r[n[0]] = function() {
                        return r[n[0] + "With"](this === r ? void 0 : this, arguments),
                        this
                    }
                    ,
                    r[n[0] + "With"] = s.fireWith
                }),
                o.promise(r),
                e && e.call(r, r),
                r
            },
            when: function(e) {
                var t = arguments.length
                  , n = t
                  , i = Array(n)
                  , o = he.call(arguments)
                  , r = _e.Deferred()
                  , s = function(e) {
                    return function(n) {
                        i[e] = this,
                        o[e] = arguments.length > 1 ? he.call(arguments) : n,
                        --t || r.resolveWith(i, o)
                    }
                };
                if (t <= 1 && (m(e, r.done(s(n)).resolve, r.reject, !t),
                "pending" === r.state() || Te(o[n] && o[n].then)))
                    return r.then();
                for (; n--; )
                    m(o[n], s(n), r.reject);
                return r.promise()
            }
        });
        var Me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        _e.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && Me.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        _e.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        }
        ;
        var Fe = _e.Deferred();
        _e.fn.ready = function(e) {
            return Fe.then(e).catch(function(e) {
                _e.readyException(e)
            }),
            this
        }
        ,
        _e.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --_e.readyWait : _e.isReady) || (_e.isReady = !0,
                !0 !== e && --_e.readyWait > 0 || Fe.resolveWith(ue, [_e]))
            }
        }),
        _e.ready.then = Fe.then,
        "complete" === ue.readyState || "loading" !== ue.readyState && !ue.documentElement.doScroll ? n.setTimeout(_e.ready) : (ue.addEventListener("DOMContentLoaded", g),
        n.addEventListener("load", g));
        var Be = function(e, t, n, i, o, r, s) {
            var l = 0
              , c = e.length
              , u = null == n;
            if ("object" === a(n)) {
                o = !0;
                for (l in n)
                    Be(e, t, l, n[l], !0, r, s)
            } else if (void 0 !== i && (o = !0,
            Te(i) || (s = !0),
            u && (s ? (t.call(e, i),
            t = null) : (u = t,
            t = function(e, t, n) {
                return u.call(_e(e), n)
            }
            )),
            t))
                for (; l < c; l++)
                    t(e[l], n, s ? i : i.call(e[l], l, t(e[l], n)));
            return o ? e : u ? t.call(e) : c ? t(e[0], n) : r
        }
          , je = /^-ms-/
          , We = /-([a-z])/g
          , qe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        y.uid = 1,
        y.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                qe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t)
                    o[b(t)] = n;
                else
                    for (i in t)
                        o[b(i)] = t[i];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][b(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        Array.isArray(t) ? t = t.map(b) : (t = b(t),
                        t = t in i ? [t] : t.match(He) || []),
                        n = t.length;
                        for (; n--; )
                            delete i[t[n]]
                    }
                    (void 0 === t || _e.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !_e.isEmptyObject(t)
            }
        };
        var Ue = new y
          , Ke = new y
          , Ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , Ge = /[A-Z]/g;
        _e.extend({
            hasData: function(e) {
                return Ke.hasData(e) || Ue.hasData(e)
            },
            data: function(e, t, n) {
                return Ke.access(e, t, n)
            },
            removeData: function(e, t) {
                Ke.remove(e, t)
            },
            _data: function(e, t, n) {
                return Ue.access(e, t, n)
            },
            _removeData: function(e, t) {
                Ue.remove(e, t)
            }
        }),
        _e.fn.extend({
            data: function(e, t) {
                var n, i, o, r = this[0], s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Ke.get(r),
                    1 === r.nodeType && !Ue.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--; )
                            s[n] && (i = s[n].name,
                            0 === i.indexOf("data-") && (i = b(i.slice(5)),
                            C(r, i, o[i])));
                        Ue.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    Ke.set(this, e)
                }) : Be(this, function(t) {
                    var n;
                    if (r && void 0 === t) {
                        if (void 0 !== (n = Ke.get(r, e)))
                            return n;
                        if (void 0 !== (n = C(r, e)))
                            return n
                    } else
                        this.each(function() {
                            Ke.set(this, e, t)
                        })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Ke.remove(this, e)
                })
            }
        }),
        _e.extend({
            queue: function(e, t, n) {
                var i;
                if (e)
                    return t = (t || "fx") + "queue",
                    i = Ue.get(e, t),
                    n && (!i || Array.isArray(n) ? i = Ue.access(e, t, _e.makeArray(n)) : i.push(n)),
                    i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = _e.queue(e, t)
                  , i = n.length
                  , o = n.shift()
                  , r = _e._queueHooks(e, t)
                  , s = function() {
                    _e.dequeue(e, t)
                };
                "inprogress" === o && (o = n.shift(),
                i--),
                o && ("fx" === t && n.unshift("inprogress"),
                delete r.stop,
                o.call(e, s, r)),
                !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Ue.get(e, n) || Ue.access(e, n, {
                    empty: _e.Callbacks("once memory").add(function() {
                        Ue.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        _e.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? _e.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = _e.queue(this, e, t);
                    _e._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && _e.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    _e.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1, o = _e.Deferred(), r = this, s = this.length, a = function() {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; s--; )
                    (n = Ue.get(r[s], e + "queueHooks")) && n.empty && (i++,
                    n.empty.add(a));
                return a(),
                o.promise(t)
            }
        });
        var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , $e = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$","i")
          , Qe = ["Top", "Right", "Bottom", "Left"]
          , Ye = function(e, t) {
            return e = t || e,
            "none" === e.style.display || "" === e.style.display && _e.contains(e.ownerDocument, e) && "none" === _e.css(e, "display")
        }
          , Xe = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t)
                s[r] = e.style[r],
                e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t)
                e.style[r] = s[r];
            return o
        }
          , Je = {};
        _e.fn.extend({
            show: function() {
                return x(this, !0)
            },
            hide: function() {
                return x(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ye(this) ? _e(this).show() : _e(this).hide()
                })
            }
        });
        var Ze = /^(?:checkbox|radio)$/i
          , et = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , tt = /^$|^module$|\/(?:java|ecma)script/i
          , nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        nt.optgroup = nt.option,
        nt.tbody = nt.tfoot = nt.colgroup = nt.caption = nt.thead,
        nt.th = nt.td;
        var it = /<|&#?\w+;/;
        !function() {
            var e = ue.createDocumentFragment()
              , t = e.appendChild(ue.createElement("div"))
              , n = ue.createElement("input");
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            Ce.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            Ce.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var ot = ue.documentElement
          , rt = /^key/
          , st = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , at = /^([^.]*)(?:\.(.+)|)/;
        _e.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, s, a, l, c, u, d, h, f, p, m, g = Ue.get(e);
                if (g)
                    for (n.handler && (r = n,
                    n = r.handler,
                    o = r.selector),
                    o && _e.find.matchesSelector(ot, o),
                    n.guid || (n.guid = _e.guid++),
                    (l = g.events) || (l = g.events = {}),
                    (s = g.handle) || (s = g.handle = function(t) {
                        return void 0 !== _e && _e.event.triggered !== t.type ? _e.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    t = (t || "").match(He) || [""],
                    c = t.length; c--; )
                        a = at.exec(t[c]) || [],
                        f = m = a[1],
                        p = (a[2] || "").split(".").sort(),
                        f && (d = _e.event.special[f] || {},
                        f = (o ? d.delegateType : d.bindType) || f,
                        d = _e.event.special[f] || {},
                        u = _e.extend({
                            type: f,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && _e.expr.match.needsContext.test(o),
                            namespace: p.join(".")
                        }, r),
                        (h = l[f]) || (h = l[f] = [],
                        h.delegateCount = 0,
                        d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)),
                        d.add && (d.add.call(e, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                        o ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                        _e.event.global[f] = !0)
            },
            remove: function(e, t, n, i, o) {
                var r, s, a, l, c, u, d, h, f, p, m, g = Ue.hasData(e) && Ue.get(e);
                if (g && (l = g.events)) {
                    for (t = (t || "").match(He) || [""],
                    c = t.length; c--; )
                        if (a = at.exec(t[c]) || [],
                        f = m = a[1],
                        p = (a[2] || "").split(".").sort(),
                        f) {
                            for (d = _e.event.special[f] || {},
                            f = (i ? d.delegateType : d.bindType) || f,
                            h = l[f] || [],
                            a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            s = r = h.length; r--; )
                                u = h[r],
                                !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1),
                                u.selector && h.delegateCount--,
                                d.remove && d.remove.call(e, u));
                            s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || _e.removeEvent(e, f, g.handle),
                            delete l[f])
                        } else
                            for (f in l)
                                _e.event.remove(e, f + t[c], n, i, !0);
                    _e.isEmptyObject(l) && Ue.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, o, r, s, a = _e.event.fix(e), l = new Array(arguments.length), c = (Ue.get(this, "events") || {})[a.type] || [], u = _e.event.special[a.type] || {};
                for (l[0] = a,
                t = 1; t < arguments.length; t++)
                    l[t] = arguments[t];
                if (a.delegateTarget = this,
                !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (s = _e.event.handlers.call(this, a, c),
                    t = 0; (o = s[t++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = o.elem,
                        n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                            a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r,
                            a.data = r.data,
                            void 0 !== (i = ((_e.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                            a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a),
                    a.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (r = [],
                            s = {},
                            n = 0; n < l; n++)
                                i = t[n],
                                o = i.selector + " ",
                                void 0 === s[o] && (s[o] = i.needsContext ? _e(o, this).index(c) > -1 : _e.find(o, this, null, [c]).length),
                                s[o] && r.push(i);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return c = this,
                l < t.length && a.push({
                    elem: c,
                    handlers: t.slice(l)
                }),
                a
            },
            addProp: function(e, t) {
                Object.defineProperty(_e.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: Te(t) ? function() {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    }
                    ,
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[_e.expando] ? e : new _e.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== k() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === k() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && c(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(e) {
                        return c(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        _e.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        _e.Event = function(e, t) {
            if (!(this instanceof _e.Event))
                return new _e.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? D : N,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && _e.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[_e.expando] = !0
        }
        ,
        _e.Event.prototype = {
            constructor: _e.Event,
            isDefaultPrevented: N,
            isPropagationStopped: N,
            isImmediatePropagationStopped: N,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = D,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = D,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = D,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        _e.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && rt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && st.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, _e.event.addProp),
        _e.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            _e.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this, o = e.relatedTarget, r = e.handleObj;
                    return o && (o === i || _e.contains(i, o)) || (e.type = r.origType,
                    n = r.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }),
        _e.fn.extend({
            on: function(e, t, n, i) {
                return O(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return O(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj,
                    _e(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                    this;
                if ("object" == typeof e) {
                    for (o in e)
                        this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = N),
                this.each(function() {
                    _e.event.remove(this, e, n, t)
                })
            }
        });
        var lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , ct = /<script|<style|<link/i
          , ut = /checked\s*(?:[^=]|=\s*.checked.)/i
          , dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        _e.extend({
            htmlPrefilter: function(e) {
                return e.replace(lt, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, o, r, s, a = e.cloneNode(!0), l = _e.contains(e.ownerDocument, e);
                if (!(Ce.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _e.isXMLDoc(e)))
                    for (s = _(a),
                    r = _(e),
                    i = 0,
                    o = r.length; i < o; i++)
                        H(r[i], s[i]);
                if (t)
                    if (n)
                        for (r = r || _(e),
                        s = s || _(a),
                        i = 0,
                        o = r.length; i < o; i++)
                            R(r[i], s[i]);
                    else
                        R(e, a);
                return s = _(a, "script"),
                s.length > 0 && A(s, !l && _(e, "script")),
                a
            },
            cleanData: function(e) {
                for (var t, n, i, o = _e.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (qe(n)) {
                        if (t = n[Ue.expando]) {
                            if (t.events)
                                for (i in t.events)
                                    o[i] ? _e.event.remove(n, i) : _e.removeEvent(n, i, t.handle);
                            n[Ue.expando] = void 0
                        }
                        n[Ke.expando] && (n[Ke.expando] = void 0)
                    }
            }
        }),
        _e.fn.extend({
            detach: function(e) {
                return F(this, e, !0)
            },
            remove: function(e) {
                return F(this, e)
            },
            text: function(e) {
                return Be(this, function(e) {
                    return void 0 === e ? _e.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return M(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || L(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return M(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = L(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return M(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return M(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (_e.cleanData(_(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return _e.clone(this, e, t)
                })
            },
            html: function(e) {
                return Be(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , i = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !ct.test(e) && !nt[(et.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = _e.htmlPrefilter(e);
                        try {
                            for (; n < i; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (_e.cleanData(_(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return M(this, arguments, function(t) {
                    var n = this.parentNode;
                    _e.inArray(this, e) < 0 && (_e.cleanData(_(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        _e.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            _e.fn[e] = function(e) {
                for (var n, i = [], o = _e(e), r = o.length - 1, s = 0; s <= r; s++)
                    n = s === r ? this : this.clone(!0),
                    _e(o[s])[t](n),
                    pe.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var ht = new RegExp("^(" + ze + ")(?!px)[a-z%]+$","i")
          , ft = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }
          , pt = new RegExp(Qe.join("|"),"i");
        !function() {
            function e() {
                if (c) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    ot.appendChild(l).appendChild(c);
                    var e = n.getComputedStyle(c);
                    i = "1%" !== e.top,
                    a = 12 === t(e.marginLeft),
                    c.style.right = "60%",
                    s = 36 === t(e.right),
                    o = 36 === t(e.width),
                    c.style.position = "absolute",
                    r = 36 === c.offsetWidth || "absolute",
                    ot.removeChild(l),
                    c = null
                }
            }
            function t(e) {
                return Math.round(parseFloat(e))
            }
            var i, o, r, s, a, l = ue.createElement("div"), c = ue.createElement("div");
            c.style && (c.style.backgroundClip = "content-box",
            c.cloneNode(!0).style.backgroundClip = "",
            Ce.clearCloneStyle = "content-box" === c.style.backgroundClip,
            _e.extend(Ce, {
                boxSizingReliable: function() {
                    return e(),
                    o
                },
                pixelBoxStyles: function() {
                    return e(),
                    s
                },
                pixelPosition: function() {
                    return e(),
                    i
                },
                reliableMarginLeft: function() {
                    return e(),
                    a
                },
                scrollboxSize: function() {
                    return e(),
                    r
                }
            }))
        }();
        var mt = /^(none|table(?!-c[ea]).+)/
          , gt = /^--/
          , vt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , bt = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , yt = ["Webkit", "Moz", "ms"]
          , Et = ue.createElement("div").style;
        _e.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = B(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, a = b(t), l = gt.test(t), c = e.style;
                    if (l || (t = q(a)),
                    s = _e.cssHooks[t] || _e.cssHooks[a],
                    void 0 === n)
                        return s && "get"in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                    r = typeof n,
                    "string" === r && (o = $e.exec(n)) && o[1] && (n = T(e, t, o),
                    r = "number"),
                    null != n && n === n && ("number" === r && (n += o && o[3] || (_e.cssNumber[a] ? "" : "px")),
                    Ce.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                    s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, i) {
                var o, r, s, a = b(t);
                return gt.test(t) || (t = q(a)),
                s = _e.cssHooks[t] || _e.cssHooks[a],
                s && "get"in s && (o = s.get(e, !0, n)),
                void 0 === o && (o = B(e, t, i)),
                "normal" === o && t in bt && (o = bt[t]),
                "" === n || n ? (r = parseFloat(o),
                !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }),
        _e.each(["height", "width"], function(e, t) {
            _e.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n)
                        return !mt.test(_e.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? V(e, t, i) : Xe(e, vt, function() {
                            return V(e, t, i)
                        })
                },
                set: function(e, n, i) {
                    var o, r = ft(e), s = "border-box" === _e.css(e, "boxSizing", !1, r), a = i && K(e, t, i, s, r);
                    return s && Ce.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - K(e, t, "border", !1, r) - .5)),
                    a && (o = $e.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                    n = _e.css(e, t)),
                    U(e, n, a)
                }
            }
        }),
        _e.cssHooks.marginLeft = j(Ce.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(B(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        _e.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            _e.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                        o[e + Qe[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            },
            "margin" !== e && (_e.cssHooks[e + t].set = U)
        }),
        _e.fn.extend({
            css: function(e, t) {
                return Be(this, function(e, t, n) {
                    var i, o, r = {}, s = 0;
                    if (Array.isArray(t)) {
                        for (i = ft(e),
                        o = t.length; s < o; s++)
                            r[t[s]] = _e.css(e, t[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? _e.style(e, t, n) : _e.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }),
        _e.Tween = G,
        G.prototype = {
            constructor: G,
            init: function(e, t, n, i, o, r) {
                this.elem = e,
                this.prop = n,
                this.easing = o || _e.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = r || (_e.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = G.propHooks[this.prop];
                return e && e.get ? e.get(this) : G.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = G.propHooks[this.prop];
                return this.options.duration ? this.pos = t = _e.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : G.propHooks._default.set(this),
                this
            }
        },
        G.prototype.init.prototype = G.prototype,
        G.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _e.css(e.elem, e.prop, ""),
                    t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    _e.fx.step[e.prop] ? _e.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_e.cssProps[e.prop]] && !_e.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _e.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        G.propHooks.scrollTop = G.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        _e.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        _e.fx = G.prototype.init,
        _e.fx.step = {};
        var Ct, Tt, wt = /^(?:toggle|show|hide)$/, xt = /queueHooks$/;
        _e.Animation = _e.extend(Z, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return T(n.elem, e, $e.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                Te(e) ? (t = e,
                e = ["*"]) : e = e.match(He);
                for (var n, i = 0, o = e.length; i < o; i++)
                    n = e[i],
                    Z.tweeners[n] = Z.tweeners[n] || [],
                    Z.tweeners[n].unshift(t)
            },
            prefilters: [X],
            prefilter: function(e, t) {
                t ? Z.prefilters.unshift(e) : Z.prefilters.push(e)
            }
        }),
        _e.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? _e.extend({}, e) : {
                complete: n || !n && t || Te(e) && e,
                duration: e,
                easing: n && t || t && !Te(t) && t
            };
            return _e.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _e.fx.speeds ? i.duration = _e.fx.speeds[i.duration] : i.duration = _e.fx.speeds._default),
            null != i.queue && !0 !== i.queue || (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function() {
                Te(i.old) && i.old.call(this),
                i.queue && _e.dequeue(this, i.queue)
            }
            ,
            i
        }
        ,
        _e.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ye).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = _e.isEmptyObject(e)
                  , r = _e.speed(t, n, i)
                  , s = function() {
                    var t = Z(this, _e.extend({}, e), r);
                    (o || Ue.get(this, "finish")) && t.stop(!0)
                };
                return s.finish = s,
                o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = void 0),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0
                      , o = null != e && e + "queueHooks"
                      , r = _e.timers
                      , s = Ue.get(this);
                    if (o)
                        s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s)
                            s[o] && s[o].stop && xt.test(o) && i(s[o]);
                    for (o = r.length; o--; )
                        r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n),
                        t = !1,
                        r.splice(o, 1));
                    !t && n || _e.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                this.each(function() {
                    var t, n = Ue.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = _e.timers, s = i ? i.length : 0;
                    for (n.finish = !0,
                    _e.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = r.length; t--; )
                        r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                        r.splice(t, 1));
                    for (t = 0; t < s; t++)
                        i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        _e.each(["toggle", "show", "hide"], function(e, t) {
            var n = _e.fn[t];
            _e.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Q(t, !0), e, i, o)
            }
        }),
        _e.each({
            slideDown: Q("show"),
            slideUp: Q("hide"),
            slideToggle: Q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            _e.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }),
        _e.timers = [],
        _e.fx.tick = function() {
            var e, t = 0, n = _e.timers;
            for (Ct = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || _e.fx.stop(),
            Ct = void 0
        }
        ,
        _e.fx.timer = function(e) {
            _e.timers.push(e),
            _e.fx.start()
        }
        ,
        _e.fx.interval = 13,
        _e.fx.start = function() {
            Tt || (Tt = !0,
            z())
        }
        ,
        _e.fx.stop = function() {
            Tt = null
        }
        ,
        _e.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        _e.fn.delay = function(e, t) {
            return e = _e.fx ? _e.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, i) {
                var o = n.setTimeout(t, e);
                i.stop = function() {
                    n.clearTimeout(o)
                }
            })
        }
        ,
        function() {
            var e = ue.createElement("input")
              , t = ue.createElement("select")
              , n = t.appendChild(ue.createElement("option"));
            e.type = "checkbox",
            Ce.checkOn = "" !== e.value,
            Ce.optSelected = n.selected,
            e = ue.createElement("input"),
            e.value = "t",
            e.type = "radio",
            Ce.radioValue = "t" === e.value
        }();
        var _t, At = _e.expr.attrHandle;
        _e.fn.extend({
            attr: function(e, t) {
                return Be(this, _e.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    _e.removeAttr(this, e)
                })
            }
        }),
        _e.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return void 0 === e.getAttribute ? _e.prop(e, t, n) : (1 === r && _e.isXMLDoc(e) || (o = _e.attrHooks[t.toLowerCase()] || (_e.expr.match.bool.test(t) ? _t : void 0)),
                    void 0 !== n ? null === n ? void _e.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                    n) : o && "get"in o && null !== (i = o.get(e, t)) ? i : (i = _e.find.attr(e, t),
                    null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!Ce.radioValue && "radio" === t && c(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0, o = t && t.match(He);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++]; )
                        e.removeAttribute(n)
            }
        }),
        _t = {
            set: function(e, t, n) {
                return !1 === t ? _e.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        _e.each(_e.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = At[t] || _e.find.attr;
            At[t] = function(e, t, i) {
                var o, r, s = t.toLowerCase();
                return i || (r = At[s],
                At[s] = o,
                o = null != n(e, t, i) ? s : null,
                At[s] = r),
                o
            }
        });
        var St = /^(?:input|select|textarea|button)$/i
          , Dt = /^(?:a|area)$/i;
        _e.fn.extend({
            prop: function(e, t) {
                return Be(this, _e.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[_e.propFix[e] || e]
                })
            }
        }),
        _e.extend({
            prop: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return 1 === r && _e.isXMLDoc(e) || (t = _e.propFix[t] || t,
                    o = _e.propHooks[t]),
                    void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = _e.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : St.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        Ce.optSelected || (_e.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        _e.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            _e.propFix[this.toLowerCase()] = this
        }),
        _e.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, s, a, l = 0;
                if (Te(e))
                    return this.each(function(t) {
                        _e(this).addClass(e.call(this, t, te(this)))
                    });
                if (t = ne(e),
                t.length)
                    for (; n = this[l++]; )
                        if (o = te(n),
                        i = 1 === n.nodeType && " " + ee(o) + " ") {
                            for (s = 0; r = t[s++]; )
                                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = ee(i),
                            o !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, s, a, l = 0;
                if (Te(e))
                    return this.each(function(t) {
                        _e(this).removeClass(e.call(this, t, te(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if (t = ne(e),
                t.length)
                    for (; n = this[l++]; )
                        if (o = te(n),
                        i = 1 === n.nodeType && " " + ee(o) + " ") {
                            for (s = 0; r = t[s++]; )
                                for (; i.indexOf(" " + r + " ") > -1; )
                                    i = i.replace(" " + r + " ", " ");
                            a = ee(i),
                            o !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e
                  , i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : Te(e) ? this.each(function(n) {
                    _e(this).toggleClass(e.call(this, n, te(this), t), t)
                }) : this.each(function() {
                    var t, o, r, s;
                    if (i)
                        for (o = 0,
                        r = _e(this),
                        s = ne(e); t = s[o++]; )
                            r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else
                        void 0 !== e && "boolean" !== n || (t = te(this),
                        t && Ue.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ue.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++]; )
                    if (1 === n.nodeType && (" " + ee(te(n)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
        var Nt = /\r/g;
        _e.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = Te(e),
                this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, _e(this).val()) : e,
                    null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = _e.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (t = _e.valHooks[this.type] || _e.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = _e.valHooks[o.type] || _e.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value,
                "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n) : void 0
            }
        }),
        _e.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = _e.find.attr(e, "value");
                        return null != t ? t : ee(_e.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, o = e.options, r = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? r + 1 : o.length;
                        for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                            if (n = o[i],
                            (n.selected || i === r) && !n.disabled && (!n.parentNode.disabled || !c(n.parentNode, "optgroup"))) {
                                if (t = _e(n).val(),
                                s)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = _e.makeArray(t), s = o.length; s--; )
                            i = o[s],
                            (i.selected = _e.inArray(_e.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        r
                    }
                }
            }
        }),
        _e.each(["radio", "checkbox"], function() {
            _e.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = _e.inArray(_e(e).val(), t) > -1
                }
            },
            Ce.checkOn || (_e.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }),
        Ce.focusin = "onfocusin"in n;
        var kt = /^(?:focusinfocus|focusoutblur)$/
          , Ot = function(e) {
            e.stopPropagation()
        };
        _e.extend(_e.event, {
            trigger: function(e, t, i, o) {
                var r, s, a, l, c, u, d, h, f = [i || ue], p = be.call(e, "type") ? e.type : e, m = be.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = h = a = i = i || ue,
                3 !== i.nodeType && 8 !== i.nodeType && !kt.test(p + _e.event.triggered) && (p.indexOf(".") > -1 && (m = p.split("."),
                p = m.shift(),
                m.sort()),
                c = p.indexOf(":") < 0 && "on" + p,
                e = e[_e.expando] ? e : new _e.Event(p,"object" == typeof e && e),
                e.isTrigger = o ? 2 : 3,
                e.namespace = m.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = i),
                t = null == t ? [e] : _e.makeArray(t, [e]),
                d = _e.event.special[p] || {},
                o || !d.trigger || !1 !== d.trigger.apply(i, t))) {
                    if (!o && !d.noBubble && !we(i)) {
                        for (l = d.delegateType || p,
                        kt.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                            f.push(s),
                            a = s;
                        a === (i.ownerDocument || ue) && f.push(a.defaultView || a.parentWindow || n)
                    }
                    for (r = 0; (s = f[r++]) && !e.isPropagationStopped(); )
                        h = s,
                        e.type = r > 1 ? l : d.bindType || p,
                        u = (Ue.get(s, "events") || {})[e.type] && Ue.get(s, "handle"),
                        u && u.apply(s, t),
                        (u = c && s[c]) && u.apply && qe(s) && (e.result = u.apply(s, t),
                        !1 === e.result && e.preventDefault());
                    return e.type = p,
                    o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), t) || !qe(i) || c && Te(i[p]) && !we(i) && (a = i[c],
                    a && (i[c] = null),
                    _e.event.triggered = p,
                    e.isPropagationStopped() && h.addEventListener(p, Ot),
                    i[p](),
                    e.isPropagationStopped() && h.removeEventListener(p, Ot),
                    _e.event.triggered = void 0,
                    a && (i[c] = a)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var i = _e.extend(new _e.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                _e.event.trigger(i, null, t)
            }
        }),
        _e.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    _e.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return _e.event.trigger(e, t, n, !0)
            }
        }),
        Ce.focusin || _e.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                _e.event.simulate(t, e.target, _e.event.fix(e))
            };
            _e.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this
                      , o = Ue.access(i, t);
                    o || i.addEventListener(e, n, !0),
                    Ue.access(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this
                      , o = Ue.access(i, t) - 1;
                    o ? Ue.access(i, t, o) : (i.removeEventListener(e, n, !0),
                    Ue.remove(i, t))
                }
            }
        });
        var Lt = n.location
          , It = Date.now()
          , Pt = /\?/;
        _e.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || _e.error("Invalid XML: " + e),
            t
        }
        ;
        var Rt = /\[\]$/
          , Ht = /\r?\n/g
          , Mt = /^(?:submit|button|image|reset|file)$/i
          , Ft = /^(?:input|select|textarea|keygen)/i;
        _e.param = function(e, t) {
            var n, i = [], o = function(e, t) {
                var n = Te(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(e) || e.jquery && !_e.isPlainObject(e))
                _e.each(e, function() {
                    o(this.name, this.value)
                });
            else
                for (n in e)
                    ie(n, e[n], t, o);
            return i.join("&")
        }
        ,
        _e.fn.extend({
            serialize: function() {
                return _e.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = _e.prop(this, "elements");
                    return e ? _e.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !_e(this).is(":disabled") && Ft.test(this.nodeName) && !Mt.test(e) && (this.checked || !Ze.test(e))
                }).map(function(e, t) {
                    var n = _e(this).val();
                    return null == n ? null : Array.isArray(n) ? _e.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ht, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ht, "\r\n")
                    }
                }).get()
            }
        });
        var Bt = /%20/g
          , jt = /#.*$/
          , Wt = /([?&])_=[^&]*/
          , qt = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , Kt = /^(?:GET|HEAD)$/
          , Vt = /^\/\//
          , Gt = {}
          , zt = {}
          , $t = "*/".concat("*")
          , Qt = ue.createElement("a");
        Qt.href = Lt.href,
        _e.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Lt.href,
                type: "GET",
                isLocal: Ut.test(Lt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": _e.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? se(se(e, _e.ajaxSettings), t) : se(_e.ajaxSettings, e)
            },
            ajaxPrefilter: oe(Gt),
            ajaxTransport: oe(zt),
            ajax: function(e, t) {
                function i(e, t, i, a) {
                    var c, h, f, E, C, T = t;
                    u || (u = !0,
                    l && n.clearTimeout(l),
                    o = void 0,
                    s = a || "",
                    w.readyState = e > 0 ? 4 : 0,
                    c = e >= 200 && e < 300 || 304 === e,
                    i && (E = ae(p, w, i)),
                    E = le(p, E, w, c),
                    c ? (p.ifModified && (C = w.getResponseHeader("Last-Modified"),
                    C && (_e.lastModified[r] = C),
                    (C = w.getResponseHeader("etag")) && (_e.etag[r] = C)),
                    204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = E.state,
                    h = E.data,
                    f = E.error,
                    c = !f)) : (f = T,
                    !e && T || (T = "error",
                    e < 0 && (e = 0))),
                    w.status = e,
                    w.statusText = (t || T) + "",
                    c ? v.resolveWith(m, [h, T, w]) : v.rejectWith(m, [w, T, f]),
                    w.statusCode(y),
                    y = void 0,
                    d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [w, p, c ? h : f]),
                    b.fireWith(m, [w, T]),
                    d && (g.trigger("ajaxComplete", [w, p]),
                    --_e.active || _e.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var o, r, s, a, l, c, u, d, h, f, p = _e.ajaxSetup({}, t), m = p.context || p, g = p.context && (m.nodeType || m.jquery) ? _e(m) : _e.event, v = _e.Deferred(), b = _e.Callbacks("once memory"), y = p.statusCode || {}, E = {}, C = {}, T = "canceled", w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = qt.exec(s); )
                                    a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e,
                        E[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (p.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u)
                                w.always(e[w.status]);
                            else
                                for (t in e)
                                    y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return o && o.abort(t),
                        i(0, t),
                        this
                    }
                };
                if (v.promise(w),
                p.url = ((e || p.url || Lt.href) + "").replace(Vt, Lt.protocol + "//"),
                p.type = t.method || t.type || p.method || p.type,
                p.dataTypes = (p.dataType || "*").toLowerCase().match(He) || [""],
                null == p.crossDomain) {
                    c = ue.createElement("a");
                    try {
                        c.href = p.url,
                        c.href = c.href,
                        p.crossDomain = Qt.protocol + "//" + Qt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = _e.param(p.data, p.traditional)),
                re(Gt, p, t, w),
                u)
                    return w;
                d = _e.event && p.global,
                d && 0 == _e.active++ && _e.event.trigger("ajaxStart"),
                p.type = p.type.toUpperCase(),
                p.hasContent = !Kt.test(p.type),
                r = p.url.replace(jt, ""),
                p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Bt, "+")) : (f = p.url.slice(r.length),
                p.data && (p.processData || "string" == typeof p.data) && (r += (Pt.test(r) ? "&" : "?") + p.data,
                delete p.data),
                !1 === p.cache && (r = r.replace(Wt, "$1"),
                f = (Pt.test(r) ? "&" : "?") + "_=" + It++ + f),
                p.url = r + f),
                p.ifModified && (_e.lastModified[r] && w.setRequestHeader("If-Modified-Since", _e.lastModified[r]),
                _e.etag[r] && w.setRequestHeader("If-None-Match", _e.etag[r])),
                (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && w.setRequestHeader("Content-Type", p.contentType),
                w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : p.accepts["*"]);
                for (h in p.headers)
                    w.setRequestHeader(h, p.headers[h]);
                if (p.beforeSend && (!1 === p.beforeSend.call(m, w, p) || u))
                    return w.abort();
                if (T = "abort",
                b.add(p.complete),
                w.done(p.success),
                w.fail(p.error),
                o = re(zt, p, t, w)) {
                    if (w.readyState = 1,
                    d && g.trigger("ajaxSend", [w, p]),
                    u)
                        return w;
                    p.async && p.timeout > 0 && (l = n.setTimeout(function() {
                        w.abort("timeout")
                    }, p.timeout));
                    try {
                        u = !1,
                        o.send(E, i)
                    } catch (e) {
                        if (u)
                            throw e;
                        i(-1, e)
                    }
                } else
                    i(-1, "No Transport");
                return w
            },
            getJSON: function(e, t, n) {
                return _e.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return _e.get(e, void 0, t, "script")
            }
        }),
        _e.each(["get", "post"], function(e, t) {
            _e[t] = function(e, n, i, o) {
                return Te(n) && (o = o || i,
                i = n,
                n = void 0),
                _e.ajax(_e.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, _e.isPlainObject(e) && e))
            }
        }),
        _e._evalUrl = function(e) {
            return _e.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        _e.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (Te(e) && (e = e.call(this[0])),
                t = _e(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }).append(this)),
                this
            },
            wrapInner: function(e) {
                return Te(e) ? this.each(function(t) {
                    _e(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = _e(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = Te(e);
                return this.each(function(n) {
                    _e(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    _e(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        _e.expr.pseudos.hidden = function(e) {
            return !_e.expr.pseudos.visible(e)
        }
        ,
        _e.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        _e.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var Yt = {
            0: 200,
            1223: 204
        }
          , Xt = _e.ajaxSettings.xhr();
        Ce.cors = !!Xt && "withCredentials"in Xt,
        Ce.ajax = Xt = !!Xt,
        _e.ajaxTransport(function(e) {
            var t, i;
            if (Ce.cors || Xt && !e.crossDomain)
                return {
                    send: function(o, r) {
                        var s, a = e.xhr();
                        if (a.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (s in e.xhrFields)
                                a[s] = e.xhrFields[s];
                        e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                        e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        for (s in o)
                            a.setRequestHeader(s, o[s]);
                        t = function(e) {
                            return function() {
                                t && (t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Yt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }
                        ,
                        a.onload = t(),
                        i = a.onerror = a.ontimeout = t("error"),
                        void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                            4 === a.readyState && n.setTimeout(function() {
                                t && i()
                            })
                        }
                        ,
                        t = t("abort");
                        try {
                            a.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)
                                throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
        }),
        _e.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        _e.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return _e.globalEval(e),
                    e
                }
            }
        }),
        _e.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        _e.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, o) {
                        t = _e("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && o("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        ue.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Jt = []
          , Zt = /(=)\?(?=&|$)|\?\?/;
        _e.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Jt.pop() || _e.expando + "_" + It++;
                return this[e] = !0,
                e
            }
        }),
        _e.ajaxPrefilter("json jsonp", function(e, t, i) {
            var o, r, s, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return o = e.jsonpCallback = Te(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                a ? e[a] = e[a].replace(Zt, "$1" + o) : !1 !== e.jsonp && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                e.converters["script json"] = function() {
                    return s || _e.error(o + " was not called"),
                    s[0]
                }
                ,
                e.dataTypes[0] = "json",
                r = n[o],
                n[o] = function() {
                    s = arguments
                }
                ,
                i.always(function() {
                    void 0 === r ? _e(n).removeProp(o) : n[o] = r,
                    e[o] && (e.jsonpCallback = t.jsonpCallback,
                    Jt.push(o)),
                    s && Te(r) && r(s[0]),
                    s = r = void 0
                }),
                "script"
        }),
        Ce.createHTMLDocument = function() {
            var e = ue.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>",
            2 === e.childNodes.length
        }(),
        _e.parseHTML = function(e, t, n) {
            if ("string" != typeof e)
                return [];
            "boolean" == typeof t && (n = t,
            t = !1);
            var i, o, r;
            return t || (Ce.createHTMLDocument ? (t = ue.implementation.createHTMLDocument(""),
            i = t.createElement("base"),
            i.href = ue.location.href,
            t.head.appendChild(i)) : t = ue),
            o = Oe.exec(e),
            r = !n && [],
            o ? [t.createElement(o[1])] : (o = S([e], t, r),
            r && r.length && _e(r).remove(),
            _e.merge([], o.childNodes))
        }
        ,
        _e.fn.load = function(e, t, n) {
            var i, o, r, s = this, a = e.indexOf(" ");
            return a > -1 && (i = ee(e.slice(a)),
            e = e.slice(0, a)),
            Te(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (o = "POST"),
            s.length > 0 && _e.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments,
                s.html(i ? _e("<div>").append(_e.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }
            ),
            this
        }
        ,
        _e.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            _e.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        _e.expr.pseudos.animated = function(e) {
            return _e.grep(_e.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        _e.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, s, a, l, c, u = _e.css(e, "position"), d = _e(e), h = {};
                "static" === u && (e.style.position = "relative"),
                a = d.offset(),
                r = _e.css(e, "top"),
                l = _e.css(e, "left"),
                c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1,
                c ? (i = d.position(),
                s = i.top,
                o = i.left) : (s = parseFloat(r) || 0,
                o = parseFloat(l) || 0),
                Te(t) && (t = t.call(e, n, _e.extend({}, a))),
                null != t.top && (h.top = t.top - a.top + s),
                null != t.left && (h.left = t.left - a.left + o),
                "using"in t ? t.using.call(e, h) : d.css(h)
            }
        },
        _e.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        _e.offset.setOffset(this, e, t)
                    });
                var t, n, i = this[0];
                return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(),
                n = i.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, i = this[0], o = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === _e.css(i, "position"))
                        t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _e.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && (o = _e(e).offset(),
                        o.top += _e.css(e, "borderTopWidth", !0),
                        o.left += _e.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - _e.css(i, "marginTop", !0),
                        left: t.left - o.left - _e.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === _e.css(e, "position"); )
                        e = e.offsetParent;
                    return e || ot
                })
            }
        }),
        _e.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            _e.fn[e] = function(i) {
                return Be(this, function(e, i, o) {
                    var r;
                    if (we(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === o)
                        return r ? r[t] : e[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
                }, e, i, arguments.length)
            }
        }),
        _e.each(["top", "left"], function(e, t) {
            _e.cssHooks[t] = j(Ce.pixelPosition, function(e, n) {
                if (n)
                    return n = B(e, t),
                    ht.test(n) ? _e(e).position()[t] + "px" : n
            })
        }),
        _e.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            _e.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                _e.fn[i] = function(o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o)
                      , a = n || (!0 === o || !0 === r ? "margin" : "border");
                    return Be(this, function(t, n, o) {
                        var r;
                        return we(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                        Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? _e.css(t, n, a) : _e.style(t, n, o, a)
                    }, t, s ? o : void 0, s)
                }
            })
        }),
        _e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            _e.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        _e.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        _e.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        _e.proxy = function(e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            Te(e))
                return i = he.call(arguments, 2),
                o = function() {
                    return e.apply(t || this, i.concat(he.call(arguments)))
                }
                ,
                o.guid = e.guid = e.guid || _e.guid++,
                o
        }
        ,
        _e.holdReady = function(e) {
            e ? _e.readyWait++ : _e.ready(!0)
        }
        ,
        _e.isArray = Array.isArray,
        _e.parseJSON = JSON.parse,
        _e.nodeName = c,
        _e.isFunction = Te,
        _e.isWindow = we,
        _e.camelCase = b,
        _e.type = a,
        _e.now = Date.now,
        _e.isNumeric = function(e) {
            var t = _e.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        i = [],
        void 0 !== (o = function() {
            return _e
        }
        .apply(t, i)) && (e.exports = o);
        var en = n.jQuery
          , tn = n.$;
        return _e.noConflict = function(e) {
            return n.$ === _e && (n.$ = tn),
            e && n.jQuery === _e && (n.jQuery = en),
            _e
        }
        ,
        r || (n.jQuery = n.$ = _e),
        _e
    })
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i() {
            e(this).scrollTop() > 0 ? (e(".navbar").addClass("fixed-top navbar-dark bg-black"),
            e(".navbar").removeClass("absolute-top navbar-light bg-white")) : (e(".navbar").addClass("absolute-top navbar-light bg-white"),
            e(".navbar").removeClass("fixed-top navbar-dark bg-black"))
        }
        n(2),
        n(3);
        var o = n(6)
          , r = t(o)
          , s = n(7)
          , a = t(s);
        (0,
        r.default)().render(document.querySelectorAll(".timeago")),
        e(window).scroll(function() {
            i()
        }),
        i(),
        e(".js-search").on("focus", function() {
            e(this).data("placeholder", e(this).attr("placeholder")),
            e(this).attr("placeholder", e(this).attr("title"))
        }).on("blur", function() {
            e(this).attr("placeholder", e(this).data("placeholder"))
        }),
        console.log(new a.default),
        new a.default(".js-editable")
    }
    ).call(t, n(0))
}
, function(e, t) {}
, function(e, t, n) {
    !function(e, i) {
        !function(e, t, n) {
            "use strict";
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            function o(e, t, n) {
                return t && i(e.prototype, t),
                n && i(e, n),
                e
            }
            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))),
                    i.forEach(function(t) {
                        r(e, t, n[t])
                    })
                }
                return e
            }
            function a(e, t) {
                e.prototype = Object.create(t.prototype),
                e.prototype.constructor = e,
                e.__proto__ = t
            }
            t = t && t.hasOwnProperty("default") ? t.default : t,
            n = n && n.hasOwnProperty("default") ? n.default : n;
            var l = function(e) {
                function t(e) {
                    return {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()
                }
                function n() {
                    return {
                        bindType: o,
                        delegateType: o,
                        handle: function(t) {
                            if (e(t.target).is(this))
                                return t.handleObj.handler.apply(this, arguments)
                        }
                    }
                }
                function i(t) {
                    var n = this
                      , i = !1;
                    return e(this).one(r.TRANSITION_END, function() {
                        i = !0
                    }),
                    setTimeout(function() {
                        i || r.triggerTransitionEnd(n)
                    }, t),
                    this
                }
                var o = "transitionend"
                  , r = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(e) {
                        do {
                            e += ~~(1e6 * Math.random())
                        } while (document.getElementById(e));return e
                    },
                    getSelectorFromElement: function(t) {
                        var n = t.getAttribute("data-target");
                        n && "#" !== n || (n = t.getAttribute("href") || "");
                        try {
                            return e(document).find(n).length > 0 ? n : null
                        } catch (e) {
                            return null
                        }
                    },
                    getTransitionDurationFromElement: function(t) {
                        if (!t)
                            return 0;
                        var n = e(t).css("transition-duration");
                        return parseFloat(n) ? (n = n.split(",")[0],
                        1e3 * parseFloat(n)) : 0
                    },
                    reflow: function(e) {
                        return e.offsetHeight
                    },
                    triggerTransitionEnd: function(t) {
                        e(t).trigger(o)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(o)
                    },
                    isElement: function(e) {
                        return (e[0] || e).nodeType
                    },
                    typeCheckConfig: function(e, n, i) {
                        for (var o in i)
                            if (Object.prototype.hasOwnProperty.call(i, o)) {
                                var s = i[o]
                                  , a = n[o]
                                  , l = a && r.isElement(a) ? "element" : t(a);
                                if (!new RegExp(s).test(l))
                                    throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + l + '" but expected type "' + s + '".')
                            }
                    }
                };
                return function() {
                    e.fn.emulateTransitionEnd = i,
                    e.event.special[r.TRANSITION_END] = n()
                }(),
                r
            }(t)
              , c = function(e) {
                var t = "alert"
                  , n = e.fn[t]
                  , i = {
                    DISMISS: '[data-dismiss="alert"]'
                }
                  , r = {
                    CLOSE: "close.bs.alert",
                    CLOSED: "closed.bs.alert",
                    CLICK_DATA_API: "click.bs.alert.data-api"
                }
                  , s = {
                    ALERT: "alert",
                    FADE: "fade",
                    SHOW: "show"
                }
                  , a = function() {
                    function t(e) {
                        this._element = e
                    }
                    var n = t.prototype;
                    return n.close = function(e) {
                        var t = this._element;
                        e && (t = this._getRootElement(e)),
                        this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                    }
                    ,
                    n.dispose = function() {
                        e.removeData(this._element, "bs.alert"),
                        this._element = null
                    }
                    ,
                    n._getRootElement = function(t) {
                        var n = l.getSelectorFromElement(t)
                          , i = !1;
                        return n && (i = e(n)[0]),
                        i || (i = e(t).closest("." + s.ALERT)[0]),
                        i
                    }
                    ,
                    n._triggerCloseEvent = function(t) {
                        var n = e.Event(r.CLOSE);
                        return e(t).trigger(n),
                        n
                    }
                    ,
                    n._removeElement = function(t) {
                        var n = this;
                        if (e(t).removeClass(s.SHOW),
                        !e(t).hasClass(s.FADE))
                            return void this._destroyElement(t);
                        var i = l.getTransitionDurationFromElement(t);
                        e(t).one(l.TRANSITION_END, function(e) {
                            return n._destroyElement(t, e)
                        }).emulateTransitionEnd(i)
                    }
                    ,
                    n._destroyElement = function(t) {
                        e(t).detach().trigger(r.CLOSED).remove()
                    }
                    ,
                    t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this)
                              , o = i.data("bs.alert");
                            o || (o = new t(this),
                            i.data("bs.alert", o)),
                            "close" === n && o[n](this)
                        })
                    }
                    ,
                    t._handleDismiss = function(e) {
                        return function(t) {
                            t && t.preventDefault(),
                            e.close(this)
                        }
                    }
                    ,
                    o(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.1"
                        }
                    }]),
                    t
                }();
                return e(document).on(r.CLICK_DATA_API, i.DISMISS, a._handleDismiss(new a)),
                e.fn[t] = a._jQueryInterface,
                e.fn[t].Constructor = a,
                e.fn[t].noConflict = function() {
                    return e.fn[t] = n,
                    a._jQueryInterface
                }
                ,
                a
            }(t)
              , u = function(e) {
                var t = "button"
                  , n = e.fn[t]
                  , i = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                }
                  , r = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                }
                  , s = {
                    CLICK_DATA_API: "click.bs.button.data-api",
                    FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
                }
                  , a = function() {
                    function t(e) {
                        this._element = e
                    }
                    var n = t.prototype;
                    return n.toggle = function() {
                        var t = !0
                          , n = !0
                          , o = e(this._element).closest(r.DATA_TOGGLE)[0];
                        if (o) {
                            var s = e(this._element).find(r.INPUT)[0];
                            if (s) {
                                if ("radio" === s.type)
                                    if (s.checked && e(this._element).hasClass(i.ACTIVE))
                                        t = !1;
                                    else {
                                        var a = e(o).find(r.ACTIVE)[0];
                                        a && e(a).removeClass(i.ACTIVE)
                                    }
                                if (t) {
                                    if (s.hasAttribute("disabled") || o.hasAttribute("disabled") || s.classList.contains("disabled") || o.classList.contains("disabled"))
                                        return;
                                    s.checked = !e(this._element).hasClass(i.ACTIVE),
                                    e(s).trigger("change")
                                }
                                s.focus(),
                                n = !1
                            }
                        }
                        n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i.ACTIVE)),
                        t && e(this._element).toggleClass(i.ACTIVE)
                    }
                    ,
                    n.dispose = function() {
                        e.removeData(this._element, "bs.button"),
                        this._element = null
                    }
                    ,
                    t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this).data("bs.button");
                            i || (i = new t(this),
                            e(this).data("bs.button", i)),
                            "toggle" === n && i[n]()
                        })
                    }
                    ,
                    o(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.1"
                        }
                    }]),
                    t
                }();
                return e(document).on(s.CLICK_DATA_API, r.DATA_TOGGLE_CARROT, function(t) {
                    t.preventDefault();
                    var n = t.target;
                    e(n).hasClass(i.BUTTON) || (n = e(n).closest(r.BUTTON)),
                    a._jQueryInterface.call(e(n), "toggle")
                }).on(s.FOCUS_BLUR_DATA_API, r.DATA_TOGGLE_CARROT, function(t) {
                    var n = e(t.target).closest(r.BUTTON)[0];
                    e(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(t.type))
                }),
                e.fn[t] = a._jQueryInterface,
                e.fn[t].Constructor = a,
                e.fn[t].noConflict = function() {
                    return e.fn[t] = n,
                    a._jQueryInterface
                }
                ,
                a
            }(t)
              , d = function(e) {
                var t = "carousel"
                  , n = "bs.carousel"
                  , i = "." + n
                  , r = e.fn[t]
                  , a = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                }
                  , c = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                }
                  , u = {
                    NEXT: "next",
                    PREV: "prev",
                    LEFT: "left",
                    RIGHT: "right"
                }
                  , d = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    TOUCHEND: "touchend" + i,
                    LOAD_DATA_API: "load.bs.carousel.data-api",
                    CLICK_DATA_API: "click.bs.carousel.data-api"
                }
                  , h = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "carousel-item-right",
                    LEFT: "carousel-item-left",
                    NEXT: "carousel-item-next",
                    PREV: "carousel-item-prev",
                    ITEM: "carousel-item"
                }
                  , f = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                }
                  , p = function() {
                    function r(t, n) {
                        this._items = null,
                        this._interval = null,
                        this._activeElement = null,
                        this._isPaused = !1,
                        this._isSliding = !1,
                        this.touchTimeout = null,
                        this._config = this._getConfig(n),
                        this._element = e(t)[0],
                        this._indicatorsElement = e(this._element).find(f.INDICATORS)[0],
                        this._addEventListeners()
                    }
                    var p = r.prototype;
                    return p.next = function() {
                        this._isSliding || this._slide(u.NEXT)
                    }
                    ,
                    p.nextWhenVisible = function() {
                        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                    }
                    ,
                    p.prev = function() {
                        this._isSliding || this._slide(u.PREV)
                    }
                    ,
                    p.pause = function(t) {
                        t || (this._isPaused = !0),
                        e(this._element).find(f.NEXT_PREV)[0] && (l.triggerTransitionEnd(this._element),
                        this.cycle(!0)),
                        clearInterval(this._interval),
                        this._interval = null
                    }
                    ,
                    p.cycle = function(e) {
                        e || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval),
                        this._interval = null),
                        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }
                    ,
                    p.to = function(t) {
                        var n = this;
                        this._activeElement = e(this._element).find(f.ACTIVE_ITEM)[0];
                        var i = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0)) {
                            if (this._isSliding)
                                return void e(this._element).one(d.SLID, function() {
                                    return n.to(t)
                                });
                            if (i === t)
                                return this.pause(),
                                void this.cycle();
                            var o = t > i ? u.NEXT : u.PREV;
                            this._slide(o, this._items[t])
                        }
                    }
                    ,
                    p.dispose = function() {
                        e(this._element).off(i),
                        e.removeData(this._element, n),
                        this._items = null,
                        this._config = null,
                        this._element = null,
                        this._interval = null,
                        this._isPaused = null,
                        this._isSliding = null,
                        this._activeElement = null,
                        this._indicatorsElement = null
                    }
                    ,
                    p._getConfig = function(e) {
                        return e = s({}, a, e),
                        l.typeCheckConfig(t, e, c),
                        e
                    }
                    ,
                    p._addEventListeners = function() {
                        var t = this;
                        this._config.keyboard && e(this._element).on(d.KEYDOWN, function(e) {
                            return t._keydown(e)
                        }),
                        "hover" === this._config.pause && (e(this._element).on(d.MOUSEENTER, function(e) {
                            return t.pause(e)
                        }).on(d.MOUSELEAVE, function(e) {
                            return t.cycle(e)
                        }),
                        "ontouchstart"in document.documentElement && e(this._element).on(d.TOUCHEND, function() {
                            t.pause(),
                            t.touchTimeout && clearTimeout(t.touchTimeout),
                            t.touchTimeout = setTimeout(function(e) {
                                return t.cycle(e)
                            }, 500 + t._config.interval)
                        }))
                    }
                    ,
                    p._keydown = function(e) {
                        if (!/input|textarea/i.test(e.target.tagName))
                            switch (e.which) {
                            case 37:
                                e.preventDefault(),
                                this.prev();
                                break;
                            case 39:
                                e.preventDefault(),
                                this.next()
                            }
                    }
                    ,
                    p._getItemIndex = function(t) {
                        return this._items = e.makeArray(e(t).parent().find(f.ITEM)),
                        this._items.indexOf(t)
                    }
                    ,
                    p._getItemByDirection = function(e, t) {
                        var n = e === u.NEXT
                          , i = e === u.PREV
                          , o = this._getItemIndex(t)
                          , r = this._items.length - 1;
                        if ((i && 0 === o || n && o === r) && !this._config.wrap)
                            return t;
                        var s = e === u.PREV ? -1 : 1
                          , a = (o + s) % this._items.length;
                        return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                    }
                    ,
                    p._triggerSlideEvent = function(t, n) {
                        var i = this._getItemIndex(t)
                          , o = this._getItemIndex(e(this._element).find(f.ACTIVE_ITEM)[0])
                          , r = e.Event(d.SLIDE, {
                            relatedTarget: t,
                            direction: n,
                            from: o,
                            to: i
                        });
                        return e(this._element).trigger(r),
                        r
                    }
                    ,
                    p._setActiveIndicatorElement = function(t) {
                        if (this._indicatorsElement) {
                            e(this._indicatorsElement).find(f.ACTIVE).removeClass(h.ACTIVE);
                            var n = this._indicatorsElement.children[this._getItemIndex(t)];
                            n && e(n).addClass(h.ACTIVE)
                        }
                    }
                    ,
                    p._slide = function(t, n) {
                        var i, o, r, s = this, a = e(this._element).find(f.ACTIVE_ITEM)[0], c = this._getItemIndex(a), p = n || a && this._getItemByDirection(t, a), m = this._getItemIndex(p), g = Boolean(this._interval);
                        if (t === u.NEXT ? (i = h.LEFT,
                        o = h.NEXT,
                        r = u.LEFT) : (i = h.RIGHT,
                        o = h.PREV,
                        r = u.RIGHT),
                        p && e(p).hasClass(h.ACTIVE))
                            return void (this._isSliding = !1);
                        if (!this._triggerSlideEvent(p, r).isDefaultPrevented() && a && p) {
                            this._isSliding = !0,
                            g && this.pause(),
                            this._setActiveIndicatorElement(p);
                            var v = e.Event(d.SLID, {
                                relatedTarget: p,
                                direction: r,
                                from: c,
                                to: m
                            });
                            if (e(this._element).hasClass(h.SLIDE)) {
                                e(p).addClass(o),
                                l.reflow(p),
                                e(a).addClass(i),
                                e(p).addClass(i);
                                var b = l.getTransitionDurationFromElement(a);
                                e(a).one(l.TRANSITION_END, function() {
                                    e(p).removeClass(i + " " + o).addClass(h.ACTIVE),
                                    e(a).removeClass(h.ACTIVE + " " + o + " " + i),
                                    s._isSliding = !1,
                                    setTimeout(function() {
                                        return e(s._element).trigger(v)
                                    }, 0)
                                }).emulateTransitionEnd(b)
                            } else
                                e(a).removeClass(h.ACTIVE),
                                e(p).addClass(h.ACTIVE),
                                this._isSliding = !1,
                                e(this._element).trigger(v);
                            g && this.cycle()
                        }
                    }
                    ,
                    r._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n)
                              , o = s({}, a, e(this).data());
                            "object" == typeof t && (o = s({}, o, t));
                            var l = "string" == typeof t ? t : o.slide;
                            if (i || (i = new r(this,o),
                            e(this).data(n, i)),
                            "number" == typeof t)
                                i.to(t);
                            else if ("string" == typeof l) {
                                if (void 0 === i[l])
                                    throw new TypeError('No method named "' + l + '"');
                                i[l]()
                            } else
                                o.interval && (i.pause(),
                                i.cycle())
                        })
                    }
                    ,
                    r._dataApiClickHandler = function(t) {
                        var i = l.getSelectorFromElement(this);
                        if (i) {
                            var o = e(i)[0];
                            if (o && e(o).hasClass(h.CAROUSEL)) {
                                var a = s({}, e(o).data(), e(this).data())
                                  , c = this.getAttribute("data-slide-to");
                                c && (a.interval = !1),
                                r._jQueryInterface.call(e(o), a),
                                c && e(o).data(n).to(c),
                                t.preventDefault()
                            }
                        }
                    }
                    ,
                    o(r, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a
                        }
                    }]),
                    r
                }();
                return e(document).on(d.CLICK_DATA_API, f.DATA_SLIDE, p._dataApiClickHandler),
                e(window).on(d.LOAD_DATA_API, function() {
                    e(f.DATA_RIDE).each(function() {
                        var t = e(this);
                        p._jQueryInterface.call(t, t.data())
                    })
                }),
                e.fn[t] = p._jQueryInterface,
                e.fn[t].Constructor = p,
                e.fn[t].noConflict = function() {
                    return e.fn[t] = r,
                    p._jQueryInterface
                }
                ,
                p
            }(t)
              , h = function(e) {
                var t = "collapse"
                  , n = "bs.collapse"
                  , i = e.fn[t]
                  , r = {
                    toggle: !0,
                    parent: ""
                }
                  , a = {
                    toggle: "boolean",
                    parent: "(string|element)"
                }
                  , c = {
                    SHOW: "show.bs.collapse",
                    SHOWN: "shown.bs.collapse",
                    HIDE: "hide.bs.collapse",
                    HIDDEN: "hidden.bs.collapse",
                    CLICK_DATA_API: "click.bs.collapse.data-api"
                }
                  , u = {
                    SHOW: "show",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                }
                  , d = {
                    WIDTH: "width",
                    HEIGHT: "height"
                }
                  , h = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                }
                  , f = function() {
                    function i(t, n) {
                        this._isTransitioning = !1,
                        this._element = t,
                        this._config = this._getConfig(n),
                        this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                        for (var i = e(h.DATA_TOGGLE), o = 0; o < i.length; o++) {
                            var r = i[o]
                              , s = l.getSelectorFromElement(r);
                            null !== s && e(s).filter(t).length > 0 && (this._selector = s,
                            this._triggerArray.push(r))
                        }
                        this._parent = this._config.parent ? this._getParent() : null,
                        this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                        this._config.toggle && this.toggle()
                    }
                    var f = i.prototype;
                    return f.toggle = function() {
                        e(this._element).hasClass(u.SHOW) ? this.hide() : this.show()
                    }
                    ,
                    f.show = function() {
                        var t = this;
                        if (!this._isTransitioning && !e(this._element).hasClass(u.SHOW)) {
                            var o, r;
                            if (this._parent && (o = e.makeArray(e(this._parent).find(h.ACTIVES).filter('[data-parent="' + this._config.parent + '"]')),
                            0 === o.length && (o = null)),
                            !(o && (r = e(o).not(this._selector).data(n)) && r._isTransitioning)) {
                                var s = e.Event(c.SHOW);
                                if (e(this._element).trigger(s),
                                !s.isDefaultPrevented()) {
                                    o && (i._jQueryInterface.call(e(o).not(this._selector), "hide"),
                                    r || e(o).data(n, null));
                                    var a = this._getDimension();
                                    e(this._element).removeClass(u.COLLAPSE).addClass(u.COLLAPSING),
                                    this._element.style[a] = 0,
                                    this._triggerArray.length > 0 && e(this._triggerArray).removeClass(u.COLLAPSED).attr("aria-expanded", !0),
                                    this.setTransitioning(!0);
                                    var d = function() {
                                        e(t._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).addClass(u.SHOW),
                                        t._element.style[a] = "",
                                        t.setTransitioning(!1),
                                        e(t._element).trigger(c.SHOWN)
                                    }
                                      , f = a[0].toUpperCase() + a.slice(1)
                                      , p = "scroll" + f
                                      , m = l.getTransitionDurationFromElement(this._element);
                                    e(this._element).one(l.TRANSITION_END, d).emulateTransitionEnd(m),
                                    this._element.style[a] = this._element[p] + "px"
                                }
                            }
                        }
                    }
                    ,
                    f.hide = function() {
                        var t = this;
                        if (!this._isTransitioning && e(this._element).hasClass(u.SHOW)) {
                            var n = e.Event(c.HIDE);
                            if (e(this._element).trigger(n),
                            !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                                l.reflow(this._element),
                                e(this._element).addClass(u.COLLAPSING).removeClass(u.COLLAPSE).removeClass(u.SHOW),
                                this._triggerArray.length > 0)
                                    for (var o = 0; o < this._triggerArray.length; o++) {
                                        var r = this._triggerArray[o]
                                          , s = l.getSelectorFromElement(r);
                                        if (null !== s) {
                                            var a = e(s);
                                            a.hasClass(u.SHOW) || e(r).addClass(u.COLLAPSED).attr("aria-expanded", !1)
                                        }
                                    }
                                this.setTransitioning(!0);
                                var d = function() {
                                    t.setTransitioning(!1),
                                    e(t._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).trigger(c.HIDDEN)
                                };
                                this._element.style[i] = "";
                                var h = l.getTransitionDurationFromElement(this._element);
                                e(this._element).one(l.TRANSITION_END, d).emulateTransitionEnd(h)
                            }
                        }
                    }
                    ,
                    f.setTransitioning = function(e) {
                        this._isTransitioning = e
                    }
                    ,
                    f.dispose = function() {
                        e.removeData(this._element, n),
                        this._config = null,
                        this._parent = null,
                        this._element = null,
                        this._triggerArray = null,
                        this._isTransitioning = null
                    }
                    ,
                    f._getConfig = function(e) {
                        return e = s({}, r, e),
                        e.toggle = Boolean(e.toggle),
                        l.typeCheckConfig(t, e, a),
                        e
                    }
                    ,
                    f._getDimension = function() {
                        return e(this._element).hasClass(d.WIDTH) ? d.WIDTH : d.HEIGHT
                    }
                    ,
                    f._getParent = function() {
                        var t = this
                          , n = null;
                        l.isElement(this._config.parent) ? (n = this._config.parent,
                        void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                        var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return e(n).find(o).each(function(e, n) {
                            t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                        }),
                        n
                    }
                    ,
                    f._addAriaAndCollapsedClass = function(t, n) {
                        if (t) {
                            var i = e(t).hasClass(u.SHOW);
                            n.length > 0 && e(n).toggleClass(u.COLLAPSED, !i).attr("aria-expanded", i)
                        }
                    }
                    ,
                    i._getTargetFromElement = function(t) {
                        var n = l.getSelectorFromElement(t);
                        return n ? e(n)[0] : null
                    }
                    ,
                    i._jQueryInterface = function(t) {
                        return this.each(function() {
                            var o = e(this)
                              , a = o.data(n)
                              , l = s({}, r, o.data(), "object" == typeof t && t ? t : {});
                            if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1),
                            a || (a = new i(this,l),
                            o.data(n, a)),
                            "string" == typeof t) {
                                if (void 0 === a[t])
                                    throw new TypeError('No method named "' + t + '"');
                                a[t]()
                            }
                        })
                    }
                    ,
                    o(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return r
                        }
                    }]),
                    i
                }();
                return e(document).on(c.CLICK_DATA_API, h.DATA_TOGGLE, function(t) {
                    "A" === t.currentTarget.tagName && t.preventDefault();
                    var i = e(this)
                      , o = l.getSelectorFromElement(this);
                    e(o).each(function() {
                        var t = e(this)
                          , o = t.data(n)
                          , r = o ? "toggle" : i.data();
                        f._jQueryInterface.call(t, r)
                    })
                }),
                e.fn[t] = f._jQueryInterface,
                e.fn[t].Constructor = f,
                e.fn[t].noConflict = function() {
                    return e.fn[t] = i,
                    f._jQueryInterface
                }
                ,
                f
            }(t)
              , f = function(e) {
                var t = "dropdown"
                  , i = "bs.dropdown"
                  , r = "." + i
                  , a = e.fn[t]
                  , c = new RegExp("38|40|27")
                  , u = {
                    HIDE: "hide" + r,
                    HIDDEN: "hidden" + r,
                    SHOW: "show" + r,
                    SHOWN: "shown" + r,
                    CLICK: "click" + r,
                    CLICK_DATA_API: "click.bs.dropdown.data-api",
                    KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                    KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
                }
                  , d = {
                    DISABLED: "disabled",
                    SHOW: "show",
                    DROPUP: "dropup",
                    DROPRIGHT: "dropright",
                    DROPLEFT: "dropleft",
                    MENURIGHT: "dropdown-menu-right",
                    MENULEFT: "dropdown-menu-left",
                    POSITION_STATIC: "position-static"
                }
                  , h = {
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    MENU: ".dropdown-menu",
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                }
                  , f = {
                    TOP: "top-start",
                    TOPEND: "top-end",
                    BOTTOM: "bottom-start",
                    BOTTOMEND: "bottom-end",
                    RIGHT: "right-start",
                    RIGHTEND: "right-end",
                    LEFT: "left-start",
                    LEFTEND: "left-end"
                }
                  , p = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent",
                    reference: "toggle",
                    display: "dynamic"
                }
                  , m = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)",
                    reference: "(string|element)",
                    display: "string"
                }
                  , g = function() {
                    function a(e, t) {
                        this._element = e,
                        this._popper = null,
                        this._config = this._getConfig(t),
                        this._menu = this._getMenuElement(),
                        this._inNavbar = this._detectNavbar(),
                        this._addEventListeners()
                    }
                    var g = a.prototype;
                    return g.toggle = function() {
                        if (!this._element.disabled && !e(this._element).hasClass(d.DISABLED)) {
                            var t = a._getParentFromElement(this._element)
                              , i = e(this._menu).hasClass(d.SHOW);
                            if (a._clearMenus(),
                            !i) {
                                var o = {
                                    relatedTarget: this._element
                                }
                                  , r = e.Event(u.SHOW, o);
                                if (e(t).trigger(r),
                                !r.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === n)
                                            throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var s = this._element;
                                        "parent" === this._config.reference ? s = t : l.isElement(this._config.reference) && (s = this._config.reference,
                                        void 0 !== this._config.reference.jquery && (s = this._config.reference[0])),
                                        "scrollParent" !== this._config.boundary && e(t).addClass(d.POSITION_STATIC),
                                        this._popper = new n(s,this._menu,this._getPopperConfig())
                                    }
                                    "ontouchstart"in document.documentElement && 0 === e(t).closest(h.NAVBAR_NAV).length && e(document.body).children().on("mouseover", null, e.noop),
                                    this._element.focus(),
                                    this._element.setAttribute("aria-expanded", !0),
                                    e(this._menu).toggleClass(d.SHOW),
                                    e(t).toggleClass(d.SHOW).trigger(e.Event(u.SHOWN, o))
                                }
                            }
                        }
                    }
                    ,
                    g.dispose = function() {
                        e.removeData(this._element, i),
                        e(this._element).off(r),
                        this._element = null,
                        this._menu = null,
                        null !== this._popper && (this._popper.destroy(),
                        this._popper = null)
                    }
                    ,
                    g.update = function() {
                        this._inNavbar = this._detectNavbar(),
                        null !== this._popper && this._popper.scheduleUpdate()
                    }
                    ,
                    g._addEventListeners = function() {
                        var t = this;
                        e(this._element).on(u.CLICK, function(e) {
                            e.preventDefault(),
                            e.stopPropagation(),
                            t.toggle()
                        })
                    }
                    ,
                    g._getConfig = function(n) {
                        return n = s({}, this.constructor.Default, e(this._element).data(), n),
                        l.typeCheckConfig(t, n, this.constructor.DefaultType),
                        n
                    }
                    ,
                    g._getMenuElement = function() {
                        if (!this._menu) {
                            var t = a._getParentFromElement(this._element);
                            this._menu = e(t).find(h.MENU)[0]
                        }
                        return this._menu
                    }
                    ,
                    g._getPlacement = function() {
                        var t = e(this._element).parent()
                          , n = f.BOTTOM;
                        return t.hasClass(d.DROPUP) ? (n = f.TOP,
                        e(this._menu).hasClass(d.MENURIGHT) && (n = f.TOPEND)) : t.hasClass(d.DROPRIGHT) ? n = f.RIGHT : t.hasClass(d.DROPLEFT) ? n = f.LEFT : e(this._menu).hasClass(d.MENURIGHT) && (n = f.BOTTOMEND),
                        n
                    }
                    ,
                    g._detectNavbar = function() {
                        return e(this._element).closest(".navbar").length > 0
                    }
                    ,
                    g._getPopperConfig = function() {
                        var e = this
                          , t = {};
                        "function" == typeof this._config.offset ? t.fn = function(t) {
                            return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}),
                            t
                        }
                        : t.offset = this._config.offset;
                        var n = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: t,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        };
                        return "static" === this._config.display && (n.modifiers.applyStyle = {
                            enabled: !1
                        }),
                        n
                    }
                    ,
                    a._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data(i)
                              , o = "object" == typeof t ? t : null;
                            if (n || (n = new a(this,o),
                            e(this).data(i, n)),
                            "string" == typeof t) {
                                if (void 0 === n[t])
                                    throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }
                    ,
                    a._clearMenus = function(t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var n = e.makeArray(e(h.DATA_TOGGLE)), o = 0; o < n.length; o++) {
                                var r = a._getParentFromElement(n[o])
                                  , s = e(n[o]).data(i)
                                  , l = {
                                    relatedTarget: n[o]
                                };
                                if (s) {
                                    var c = s._menu;
                                    if (e(r).hasClass(d.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(r, t.target))) {
                                        var f = e.Event(u.HIDE, l);
                                        e(r).trigger(f),
                                        f.isDefaultPrevented() || ("ontouchstart"in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                                        n[o].setAttribute("aria-expanded", "false"),
                                        e(c).removeClass(d.SHOW),
                                        e(r).removeClass(d.SHOW).trigger(e.Event(u.HIDDEN, l)))
                                    }
                                }
                            }
                    }
                    ,
                    a._getParentFromElement = function(t) {
                        var n, i = l.getSelectorFromElement(t);
                        return i && (n = e(i)[0]),
                        n || t.parentNode
                    }
                    ,
                    a._dataApiKeydownHandler = function(t) {
                        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(h.MENU).length)) : c.test(t.which)) && (t.preventDefault(),
                        t.stopPropagation(),
                        !this.disabled && !e(this).hasClass(d.DISABLED))) {
                            var n = a._getParentFromElement(this)
                              , i = e(n).hasClass(d.SHOW);
                            if (!i && (27 !== t.which || 32 !== t.which) || i && (27 === t.which || 32 === t.which)) {
                                if (27 === t.which) {
                                    var o = e(n).find(h.DATA_TOGGLE)[0];
                                    e(o).trigger("focus")
                                }
                                return void e(this).trigger("click")
                            }
                            var r = e(n).find(h.VISIBLE_ITEMS).get();
                            if (0 !== r.length) {
                                var s = r.indexOf(t.target);
                                38 === t.which && s > 0 && s--,
                                40 === t.which && s < r.length - 1 && s++,
                                s < 0 && (s = 0),
                                r[s].focus()
                            }
                        }
                    }
                    ,
                    o(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return p
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return m
                        }
                    }]),
                    a
                }();
                return e(document).on(u.KEYDOWN_DATA_API, h.DATA_TOGGLE, g._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, h.MENU, g._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, g._clearMenus).on(u.CLICK_DATA_API, h.DATA_TOGGLE, function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    g._jQueryInterface.call(e(this), "toggle")
                }).on(u.CLICK_DATA_API, h.FORM_CHILD, function(e) {
                    e.stopPropagation()
                }),
                e.fn[t] = g._jQueryInterface,
                e.fn[t].Constructor = g,
                e.fn[t].noConflict = function() {
                    return e.fn[t] = a,
                    g._jQueryInterface
                }
                ,
                g
            }(t)
              , p = function(e) {
                var t = "modal"
                  , n = e.fn[t]
                  , i = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                }
                  , r = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                }
                  , a = {
                    HIDE: "hide.bs.modal",
                    HIDDEN: "hidden.bs.modal",
                    SHOW: "show.bs.modal",
                    SHOWN: "shown.bs.modal",
                    FOCUSIN: "focusin.bs.modal",
                    RESIZE: "resize.bs.modal",
                    CLICK_DISMISS: "click.dismiss.bs.modal",
                    KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                    MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                    MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                    CLICK_DATA_API: "click.bs.modal.data-api"
                }
                  , c = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    SHOW: "show"
                }
                  , u = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                }
                  , d = function() {
                    function n(t, n) {
                        this._config = this._getConfig(n),
                        this._element = t,
                        this._dialog = e(t).find(u.DIALOG)[0],
                        this._backdrop = null,
                        this._isShown = !1,
                        this._isBodyOverflowing = !1,
                        this._ignoreBackdropClick = !1,
                        this._scrollbarWidth = 0
                    }
                    var d = n.prototype;
                    return d.toggle = function(e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }
                    ,
                    d.show = function(t) {
                        var n = this;
                        if (!this._isTransitioning && !this._isShown) {
                            e(this._element).hasClass(c.FADE) && (this._isTransitioning = !0);
                            var i = e.Event(a.SHOW, {
                                relatedTarget: t
                            });
                            e(this._element).trigger(i),
                            this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                            this._checkScrollbar(),
                            this._setScrollbar(),
                            this._adjustDialog(),
                            e(document.body).addClass(c.OPEN),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            e(this._element).on(a.CLICK_DISMISS, u.DATA_DISMISS, function(e) {
                                return n.hide(e)
                            }),
                            e(this._dialog).on(a.MOUSEDOWN_DISMISS, function() {
                                e(n._element).one(a.MOUSEUP_DISMISS, function(t) {
                                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }),
                            this._showBackdrop(function() {
                                return n._showElement(t)
                            }))
                        }
                    }
                    ,
                    d.hide = function(t) {
                        var n = this;
                        if (t && t.preventDefault(),
                        !this._isTransitioning && this._isShown) {
                            var i = e.Event(a.HIDE);
                            if (e(this._element).trigger(i),
                            this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var o = e(this._element).hasClass(c.FADE);
                                if (o && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                e(document).off(a.FOCUSIN),
                                e(this._element).removeClass(c.SHOW),
                                e(this._element).off(a.CLICK_DISMISS),
                                e(this._dialog).off(a.MOUSEDOWN_DISMISS),
                                o) {
                                    var r = l.getTransitionDurationFromElement(this._element);
                                    e(this._element).one(l.TRANSITION_END, function(e) {
                                        return n._hideModal(e)
                                    }).emulateTransitionEnd(r)
                                } else
                                    this._hideModal()
                            }
                        }
                    }
                    ,
                    d.dispose = function() {
                        e.removeData(this._element, "bs.modal"),
                        e(window, document, this._element, this._backdrop).off(".bs.modal"),
                        this._config = null,
                        this._element = null,
                        this._dialog = null,
                        this._backdrop = null,
                        this._isShown = null,
                        this._isBodyOverflowing = null,
                        this._ignoreBackdropClick = null,
                        this._scrollbarWidth = null
                    }
                    ,
                    d.handleUpdate = function() {
                        this._adjustDialog()
                    }
                    ,
                    d._getConfig = function(e) {
                        return e = s({}, i, e),
                        l.typeCheckConfig(t, e, r),
                        e
                    }
                    ,
                    d._showElement = function(t) {
                        var n = this
                          , i = e(this._element).hasClass(c.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                        this._element.style.display = "block",
                        this._element.removeAttribute("aria-hidden"),
                        this._element.scrollTop = 0,
                        i && l.reflow(this._element),
                        e(this._element).addClass(c.SHOW),
                        this._config.focus && this._enforceFocus();
                        var o = e.Event(a.SHOWN, {
                            relatedTarget: t
                        })
                          , r = function() {
                            n._config.focus && n._element.focus(),
                            n._isTransitioning = !1,
                            e(n._element).trigger(o)
                        };
                        if (i) {
                            var s = l.getTransitionDurationFromElement(this._element);
                            e(this._dialog).one(l.TRANSITION_END, r).emulateTransitionEnd(s)
                        } else
                            r()
                    }
                    ,
                    d._enforceFocus = function() {
                        var t = this;
                        e(document).off(a.FOCUSIN).on(a.FOCUSIN, function(n) {
                            document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                        })
                    }
                    ,
                    d._setEscapeEvent = function() {
                        var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(a.KEYDOWN_DISMISS, function(e) {
                            27 === e.which && (e.preventDefault(),
                            t.hide())
                        }) : this._isShown || e(this._element).off(a.KEYDOWN_DISMISS)
                    }
                    ,
                    d._setResizeEvent = function() {
                        var t = this;
                        this._isShown ? e(window).on(a.RESIZE, function(e) {
                            return t.handleUpdate(e)
                        }) : e(window).off(a.RESIZE)
                    }
                    ,
                    d._hideModal = function() {
                        var t = this;
                        this._element.style.display = "none",
                        this._element.setAttribute("aria-hidden", !0),
                        this._isTransitioning = !1,
                        this._showBackdrop(function() {
                            e(document.body).removeClass(c.OPEN),
                            t._resetAdjustments(),
                            t._resetScrollbar(),
                            e(t._element).trigger(a.HIDDEN)
                        })
                    }
                    ,
                    d._removeBackdrop = function() {
                        this._backdrop && (e(this._backdrop).remove(),
                        this._backdrop = null)
                    }
                    ,
                    d._showBackdrop = function(t) {
                        var n = this
                          , i = e(this._element).hasClass(c.FADE) ? c.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            if (this._backdrop = document.createElement("div"),
                            this._backdrop.className = c.BACKDROP,
                            i && e(this._backdrop).addClass(i),
                            e(this._backdrop).appendTo(document.body),
                            e(this._element).on(a.CLICK_DISMISS, function(e) {
                                if (n._ignoreBackdropClick)
                                    return void (n._ignoreBackdropClick = !1);
                                e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                            }),
                            i && l.reflow(this._backdrop),
                            e(this._backdrop).addClass(c.SHOW),
                            !t)
                                return;
                            if (!i)
                                return void t();
                            var o = l.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(l.TRANSITION_END, t).emulateTransitionEnd(o)
                        } else if (!this._isShown && this._backdrop) {
                            e(this._backdrop).removeClass(c.SHOW);
                            var r = function() {
                                n._removeBackdrop(),
                                t && t()
                            };
                            if (e(this._element).hasClass(c.FADE)) {
                                var s = l.getTransitionDurationFromElement(this._backdrop);
                                e(this._backdrop).one(l.TRANSITION_END, r).emulateTransitionEnd(s)
                            } else
                                r()
                        } else
                            t && t()
                    }
                    ,
                    d._adjustDialog = function() {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                        this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }
                    ,
                    d._resetAdjustments = function() {
                        this._element.style.paddingLeft = "",
                        this._element.style.paddingRight = ""
                    }
                    ,
                    d._checkScrollbar = function() {
                        var e = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = e.left + e.right < window.innerWidth,
                        this._scrollbarWidth = this._getScrollbarWidth()
                    }
                    ,
                    d._setScrollbar = function() {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            e(u.FIXED_CONTENT).each(function(n, i) {
                                var o = e(i)[0].style.paddingRight
                                  , r = e(i).css("padding-right");
                                e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                            }),
                            e(u.STICKY_CONTENT).each(function(n, i) {
                                var o = e(i)[0].style.marginRight
                                  , r = e(i).css("margin-right");
                                e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                            }),
                            e(u.NAVBAR_TOGGLER).each(function(n, i) {
                                var o = e(i)[0].style.marginRight
                                  , r = e(i).css("margin-right");
                                e(i).data("margin-right", o).css("margin-right", parseFloat(r) + t._scrollbarWidth + "px")
                            });
                            var n = document.body.style.paddingRight
                              , i = e(document.body).css("padding-right");
                            e(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                        }
                    }
                    ,
                    d._resetScrollbar = function() {
                        e(u.FIXED_CONTENT).each(function(t, n) {
                            var i = e(n).data("padding-right");
                            void 0 !== i && e(n).css("padding-right", i).removeData("padding-right")
                        }),
                        e(u.STICKY_CONTENT + ", " + u.NAVBAR_TOGGLER).each(function(t, n) {
                            var i = e(n).data("margin-right");
                            void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                        });
                        var t = e(document.body).data("padding-right");
                        void 0 !== t && e(document.body).css("padding-right", t).removeData("padding-right")
                    }
                    ,
                    d._getScrollbarWidth = function() {
                        var e = document.createElement("div");
                        e.className = c.SCROLLBAR_MEASURER,
                        document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e),
                        t
                    }
                    ,
                    n._jQueryInterface = function(t, o) {
                        return this.each(function() {
                            var r = e(this).data("bs.modal")
                              , a = s({}, i, e(this).data(), "object" == typeof t && t ? t : {});
                            if (r || (r = new n(this,a),
                            e(this).data("bs.modal", r)),
                            "string" == typeof t) {
                                if (void 0 === r[t])
                                    throw new TypeError('No method named "' + t + '"');
                                r[t](o)
                            } else
                                a.show && r.show(o)
                        })
                    }
                    ,
                    o(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return i
                        }
                    }]),
                    n
                }();
                return e(document).on(a.CLICK_DATA_API, u.DATA_TOGGLE, function(t) {
                    var n, i = this, o = l.getSelectorFromElement(this);
                    o && (n = e(o)[0]);
                    var r = e(n).data("bs.modal") ? "toggle" : s({}, e(n).data(), e(this).data());
                    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                    var c = e(n).one(a.SHOW, function(t) {
                        t.isDefaultPrevented() || c.one(a.HIDDEN, function() {
                            e(i).is(":visible") && i.focus()
                        })
                    });
                    d._jQueryInterface.call(e(n), r, this)
                }),
                e.fn[t] = d._jQueryInterface,
                e.fn[t].Constructor = d,
                e.fn[t].noConflict = function() {
                    return e.fn[t] = n,
                    d._jQueryInterface
                }
                ,
                d
            }(t)
              , m = function(e) {
                var t = "tooltip"
                  , i = ".bs.tooltip"
                  , r = e.fn[t]
                  , a = new RegExp("(^|\\s)bs-tooltip\\S+","g")
                  , c = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                }
                  , u = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                }
                  , d = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent"
                }
                  , h = {
                    SHOW: "show",
                    OUT: "out"
                }
                  , f = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                }
                  , p = {
                    FADE: "fade",
                    SHOW: "show"
                }
                  , m = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner",
                    ARROW: ".arrow"
                }
                  , g = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                }
                  , v = function() {
                    function r(e, t) {
                        if (void 0 === n)
                            throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0,
                        this._timeout = 0,
                        this._hoverState = "",
                        this._activeTrigger = {},
                        this._popper = null,
                        this.element = e,
                        this.config = this._getConfig(t),
                        this.tip = null,
                        this._setListeners()
                    }
                    var v = r.prototype;
                    return v.enable = function() {
                        this._isEnabled = !0
                    }
                    ,
                    v.disable = function() {
                        this._isEnabled = !1
                    }
                    ,
                    v.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }
                    ,
                    v.toggle = function(t) {
                        if (this._isEnabled)
                            if (t) {
                                var n = this.constructor.DATA_KEY
                                  , i = e(t.currentTarget).data(n);
                                i || (i = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                                e(t.currentTarget).data(n, i)),
                                i._activeTrigger.click = !i._activeTrigger.click,
                                i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (e(this.getTipElement()).hasClass(p.SHOW))
                                    return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }
                    ,
                    v.dispose = function() {
                        clearTimeout(this._timeout),
                        e.removeData(this.element, this.constructor.DATA_KEY),
                        e(this.element).off(this.constructor.EVENT_KEY),
                        e(this.element).closest(".modal").off("hide.bs.modal"),
                        this.tip && e(this.tip).remove(),
                        this._isEnabled = null,
                        this._timeout = null,
                        this._hoverState = null,
                        this._activeTrigger = null,
                        null !== this._popper && this._popper.destroy(),
                        this._popper = null,
                        this.element = null,
                        this.config = null,
                        this.tip = null
                    }
                    ,
                    v.show = function() {
                        var t = this;
                        if ("none" === e(this.element).css("display"))
                            throw new Error("Please use show on visible elements");
                        var i = e.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            e(this.element).trigger(i);
                            var o = e.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !o)
                                return;
                            var r = this.getTipElement()
                              , s = l.getUID(this.constructor.NAME);
                            r.setAttribute("id", s),
                            this.element.setAttribute("aria-describedby", s),
                            this.setContent(),
                            this.config.animation && e(r).addClass(p.FADE);
                            var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                              , c = this._getAttachment(a);
                            this.addAttachmentClass(c);
                            var u = !1 === this.config.container ? document.body : e(this.config.container);
                            e(r).data(this.constructor.DATA_KEY, this),
                            e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(u),
                            e(this.element).trigger(this.constructor.Event.INSERTED),
                            this._popper = new n(this.element,r,{
                                placement: c,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: m.ARROW
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function(e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                },
                                onUpdate: function(e) {
                                    t._handlePopperPlacementChange(e)
                                }
                            }),
                            e(r).addClass(p.SHOW),
                            "ontouchstart"in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                            var d = function() {
                                t.config.animation && t._fixTransition();
                                var n = t._hoverState;
                                t._hoverState = null,
                                e(t.element).trigger(t.constructor.Event.SHOWN),
                                n === h.OUT && t._leave(null, t)
                            };
                            if (e(this.tip).hasClass(p.FADE)) {
                                var f = l.getTransitionDurationFromElement(this.tip);
                                e(this.tip).one(l.TRANSITION_END, d).emulateTransitionEnd(f)
                            } else
                                d()
                        }
                    }
                    ,
                    v.hide = function(t) {
                        var n = this
                          , i = this.getTipElement()
                          , o = e.Event(this.constructor.Event.HIDE)
                          , r = function() {
                            n._hoverState !== h.SHOW && i.parentNode && i.parentNode.removeChild(i),
                            n._cleanTipClass(),
                            n.element.removeAttribute("aria-describedby"),
                            e(n.element).trigger(n.constructor.Event.HIDDEN),
                            null !== n._popper && n._popper.destroy(),
                            t && t()
                        };
                        if (e(this.element).trigger(o),
                        !o.isDefaultPrevented()) {
                            if (e(i).removeClass(p.SHOW),
                            "ontouchstart"in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                            this._activeTrigger[g.CLICK] = !1,
                            this._activeTrigger[g.FOCUS] = !1,
                            this._activeTrigger[g.HOVER] = !1,
                            e(this.tip).hasClass(p.FADE)) {
                                var s = l.getTransitionDurationFromElement(i);
                                e(i).one(l.TRANSITION_END, r).emulateTransitionEnd(s)
                            } else
                                r();
                            this._hoverState = ""
                        }
                    }
                    ,
                    v.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }
                    ,
                    v.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }
                    ,
                    v.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-tooltip-" + t)
                    }
                    ,
                    v.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0],
                        this.tip
                    }
                    ,
                    v.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(m.TOOLTIP_INNER), this.getTitle()),
                        t.removeClass(p.FADE + " " + p.SHOW)
                    }
                    ,
                    v.setElementContent = function(t, n) {
                        var i = this.config.html;
                        "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                    }
                    ,
                    v.getTitle = function() {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                        e
                    }
                    ,
                    v._getAttachment = function(e) {
                        return u[e.toUpperCase()]
                    }
                    ,
                    v._setListeners = function() {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function(n) {
                            if ("click" === n)
                                e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                                    return t.toggle(e)
                                });
                            else if (n !== g.MANUAL) {
                                var i = n === g.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                                  , o = n === g.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                e(t.element).on(i, t.config.selector, function(e) {
                                    return t._enter(e)
                                }).on(o, t.config.selector, function(e) {
                                    return t._leave(e)
                                })
                            }
                            e(t.element).closest(".modal").on("hide.bs.modal", function() {
                                return t.hide()
                            })
                        }),
                        this.config.selector ? this.config = s({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }
                    ,
                    v._fixTitle = function() {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                        this.element.setAttribute("title", ""))
                    }
                    ,
                    v._enter = function(t, n) {
                        var i = this.constructor.DATA_KEY;
                        return n = n || e(t.currentTarget).data(i),
                        n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                        e(t.currentTarget).data(i, n)),
                        t && (n._activeTrigger["focusin" === t.type ? g.FOCUS : g.HOVER] = !0),
                        e(n.getTipElement()).hasClass(p.SHOW) || n._hoverState === h.SHOW ? void (n._hoverState = h.SHOW) : (clearTimeout(n._timeout),
                        n._hoverState = h.SHOW,
                        n.config.delay && n.config.delay.show ? void (n._timeout = setTimeout(function() {
                            n._hoverState === h.SHOW && n.show()
                        }, n.config.delay.show)) : void n.show())
                    }
                    ,
                    v._leave = function(t, n) {
                        var i = this.constructor.DATA_KEY;
                        if (n = n || e(t.currentTarget).data(i),
                        n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                        e(t.currentTarget).data(i, n)),
                        t && (n._activeTrigger["focusout" === t.type ? g.FOCUS : g.HOVER] = !1),
                        !n._isWithActiveTrigger()) {
                            if (clearTimeout(n._timeout),
                            n._hoverState = h.OUT,
                            !n.config.delay || !n.config.delay.hide)
                                return void n.hide();
                            n._timeout = setTimeout(function() {
                                n._hoverState === h.OUT && n.hide()
                            }, n.config.delay.hide)
                        }
                    }
                    ,
                    v._isWithActiveTrigger = function() {
                        for (var e in this._activeTrigger)
                            if (this._activeTrigger[e])
                                return !0;
                        return !1
                    }
                    ,
                    v._getConfig = function(n) {
                        return n = s({}, this.constructor.Default, e(this.element).data(), "object" == typeof n && n ? n : {}),
                        "number" == typeof n.delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }),
                        "number" == typeof n.title && (n.title = n.title.toString()),
                        "number" == typeof n.content && (n.content = n.content.toString()),
                        l.typeCheckConfig(t, n, this.constructor.DefaultType),
                        n
                    }
                    ,
                    v._getDelegateConfig = function() {
                        var e = {};
                        if (this.config)
                            for (var t in this.config)
                                this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e
                    }
                    ,
                    v._cleanTipClass = function() {
                        var t = e(this.getTipElement())
                          , n = t.attr("class").match(a);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }
                    ,
                    v._handlePopperPlacementChange = function(e) {
                        this._cleanTipClass(),
                        this.addAttachmentClass(this._getAttachment(e.placement))
                    }
                    ,
                    v._fixTransition = function() {
                        var t = this.getTipElement()
                          , n = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass(p.FADE),
                        this.config.animation = !1,
                        this.hide(),
                        this.show(),
                        this.config.animation = n)
                    }
                    ,
                    r._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data("bs.tooltip")
                              , i = "object" == typeof t && t;
                            if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this,i),
                            e(this).data("bs.tooltip", n)),
                            "string" == typeof t)) {
                                if (void 0 === n[t])
                                    throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }
                    ,
                    o(r, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return d
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.tooltip"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return f
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return c
                        }
                    }]),
                    r
                }();
                return e.fn[t] = v._jQueryInterface,
                e.fn[t].Constructor = v,
                e.fn[t].noConflict = function() {
                    return e.fn[t] = r,
                    v._jQueryInterface
                }
                ,
                v
            }(t)
              , g = function(e) {
                var t = "popover"
                  , n = ".bs.popover"
                  , i = e.fn[t]
                  , r = new RegExp("(^|\\s)bs-popover\\S+","g")
                  , l = s({}, m.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                })
                  , c = s({}, m.DefaultType, {
                    content: "(string|element|function)"
                })
                  , u = {
                    FADE: "fade",
                    SHOW: "show"
                }
                  , d = {
                    TITLE: ".popover-header",
                    CONTENT: ".popover-body"
                }
                  , h = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    INSERTED: "inserted" + n,
                    CLICK: "click" + n,
                    FOCUSIN: "focusin" + n,
                    FOCUSOUT: "focusout" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n
                }
                  , f = function(i) {
                    function s() {
                        return i.apply(this, arguments) || this
                    }
                    a(s, i);
                    var f = s.prototype;
                    return f.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }
                    ,
                    f.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-popover-" + t)
                    }
                    ,
                    f.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0],
                        this.tip
                    }
                    ,
                    f.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(d.TITLE), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)),
                        this.setElementContent(t.find(d.CONTENT), n),
                        t.removeClass(u.FADE + " " + u.SHOW)
                    }
                    ,
                    f._getContent = function() {
                        return this.element.getAttribute("data-content") || this.config.content
                    }
                    ,
                    f._cleanTipClass = function() {
                        var t = e(this.getTipElement())
                          , n = t.attr("class").match(r);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }
                    ,
                    s._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data("bs.popover")
                              , i = "object" == typeof t ? t : null;
                            if ((n || !/destroy|hide/.test(t)) && (n || (n = new s(this,i),
                            e(this).data("bs.popover", n)),
                            "string" == typeof t)) {
                                if (void 0 === n[t])
                                    throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }
                    ,
                    o(s, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.popover"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return h
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return c
                        }
                    }]),
                    s
                }(m);
                return e.fn[t] = f._jQueryInterface,
                e.fn[t].Constructor = f,
                e.fn[t].noConflict = function() {
                    return e.fn[t] = i,
                    f._jQueryInterface
                }
                ,
                f
            }(t)
              , v = function(e) {
                var t = "scrollspy"
                  , n = e.fn[t]
                  , i = {
                    offset: 10,
                    method: "auto",
                    target: ""
                }
                  , r = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                }
                  , a = {
                    ACTIVATE: "activate.bs.scrollspy",
                    SCROLL: "scroll.bs.scrollspy",
                    LOAD_DATA_API: "load.bs.scrollspy.data-api"
                }
                  , c = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active"
                }
                  , u = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                }
                  , d = {
                    OFFSET: "offset",
                    POSITION: "position"
                }
                  , h = function() {
                    function n(t, n) {
                        var i = this;
                        this._element = t,
                        this._scrollElement = "BODY" === t.tagName ? window : t,
                        this._config = this._getConfig(n),
                        this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS,
                        this._offsets = [],
                        this._targets = [],
                        this._activeTarget = null,
                        this._scrollHeight = 0,
                        e(this._scrollElement).on(a.SCROLL, function(e) {
                            return i._process(e)
                        }),
                        this.refresh(),
                        this._process()
                    }
                    var h = n.prototype;
                    return h.refresh = function() {
                        var t = this
                          , n = this._scrollElement === this._scrollElement.window ? d.OFFSET : d.POSITION
                          , i = "auto" === this._config.method ? n : this._config.method
                          , o = i === d.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [],
                        this._targets = [],
                        this._scrollHeight = this._getScrollHeight(),
                        e.makeArray(e(this._selector)).map(function(t) {
                            var n, r = l.getSelectorFromElement(t);
                            if (r && (n = e(r)[0]),
                            n) {
                                var s = n.getBoundingClientRect();
                                if (s.width || s.height)
                                    return [e(n)[i]().top + o, r]
                            }
                            return null
                        }).filter(function(e) {
                            return e
                        }).sort(function(e, t) {
                            return e[0] - t[0]
                        }).forEach(function(e) {
                            t._offsets.push(e[0]),
                            t._targets.push(e[1])
                        })
                    }
                    ,
                    h.dispose = function() {
                        e.removeData(this._element, "bs.scrollspy"),
                        e(this._scrollElement).off(".bs.scrollspy"),
                        this._element = null,
                        this._scrollElement = null,
                        this._config = null,
                        this._selector = null,
                        this._offsets = null,
                        this._targets = null,
                        this._activeTarget = null,
                        this._scrollHeight = null
                    }
                    ,
                    h._getConfig = function(n) {
                        if (n = s({}, i, "object" == typeof n && n ? n : {}),
                        "string" != typeof n.target) {
                            var o = e(n.target).attr("id");
                            o || (o = l.getUID(t),
                            e(n.target).attr("id", o)),
                            n.target = "#" + o
                        }
                        return l.typeCheckConfig(t, n, r),
                        n
                    }
                    ,
                    h._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }
                    ,
                    h._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }
                    ,
                    h._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }
                    ,
                    h._process = function() {
                        var e = this._getScrollTop() + this._config.offset
                          , t = this._getScrollHeight()
                          , n = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(),
                        e >= n) {
                            var i = this._targets[this._targets.length - 1];
                            return void (this._activeTarget !== i && this._activate(i))
                        }
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                            return this._activeTarget = null,
                            void this._clear();
                        for (var o = this._offsets.length; o--; )
                            this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                    ,
                    h._activate = function(t) {
                        this._activeTarget = t,
                        this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function(e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        });
                        var i = e(n.join(","));
                        i.hasClass(c.DROPDOWN_ITEM) ? (i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c.ACTIVE),
                        i.addClass(c.ACTIVE)) : (i.addClass(c.ACTIVE),
                        i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(c.ACTIVE),
                        i.parents(u.NAV_LIST_GROUP).prev(u.NAV_ITEMS).children(u.NAV_LINKS).addClass(c.ACTIVE)),
                        e(this._scrollElement).trigger(a.ACTIVATE, {
                            relatedTarget: t
                        })
                    }
                    ,
                    h._clear = function() {
                        e(this._selector).filter(u.ACTIVE).removeClass(c.ACTIVE)
                    }
                    ,
                    n._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data("bs.scrollspy")
                              , o = "object" == typeof t && t;
                            if (i || (i = new n(this,o),
                            e(this).data("bs.scrollspy", i)),
                            "string" == typeof t) {
                                if (void 0 === i[t])
                                    throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }
                    ,
                    o(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return i
                        }
                    }]),
                    n
                }();
                return e(window).on(a.LOAD_DATA_API, function() {
                    for (var t = e.makeArray(e(u.DATA_SPY)), n = t.length; n--; ) {
                        var i = e(t[n]);
                        h._jQueryInterface.call(i, i.data())
                    }
                }),
                e.fn[t] = h._jQueryInterface,
                e.fn[t].Constructor = h,
                e.fn[t].noConflict = function() {
                    return e.fn[t] = n,
                    h._jQueryInterface
                }
                ,
                h
            }(t)
              , b = function(e) {
                var t = e.fn.tab
                  , n = {
                    HIDE: "hide.bs.tab",
                    HIDDEN: "hidden.bs.tab",
                    SHOW: "show.bs.tab",
                    SHOWN: "shown.bs.tab",
                    CLICK_DATA_API: "click.bs.tab.data-api"
                }
                  , i = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    DISABLED: "disabled",
                    FADE: "fade",
                    SHOW: "show"
                }
                  , r = {
                    DROPDOWN: ".dropdown",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    ACTIVE: ".active",
                    ACTIVE_UL: "> li > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                }
                  , s = function() {
                    function t(e) {
                        this._element = e
                    }
                    var s = t.prototype;
                    return s.show = function() {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(i.ACTIVE) || e(this._element).hasClass(i.DISABLED))) {
                            var o, s, a = e(this._element).closest(r.NAV_LIST_GROUP)[0], c = l.getSelectorFromElement(this._element);
                            if (a) {
                                var u = "UL" === a.nodeName ? r.ACTIVE_UL : r.ACTIVE;
                                s = e.makeArray(e(a).find(u)),
                                s = s[s.length - 1]
                            }
                            var d = e.Event(n.HIDE, {
                                relatedTarget: this._element
                            })
                              , h = e.Event(n.SHOW, {
                                relatedTarget: s
                            });
                            if (s && e(s).trigger(d),
                            e(this._element).trigger(h),
                            !h.isDefaultPrevented() && !d.isDefaultPrevented()) {
                                c && (o = e(c)[0]),
                                this._activate(this._element, a);
                                var f = function() {
                                    var i = e.Event(n.HIDDEN, {
                                        relatedTarget: t._element
                                    })
                                      , o = e.Event(n.SHOWN, {
                                        relatedTarget: s
                                    });
                                    e(s).trigger(i),
                                    e(t._element).trigger(o)
                                };
                                o ? this._activate(o, o.parentNode, f) : f()
                            }
                        }
                    }
                    ,
                    s.dispose = function() {
                        e.removeData(this._element, "bs.tab"),
                        this._element = null
                    }
                    ,
                    s._activate = function(t, n, o) {
                        var s, a = this;
                        s = "UL" === n.nodeName ? e(n).find(r.ACTIVE_UL) : e(n).children(r.ACTIVE);
                        var c = s[0]
                          , u = o && c && e(c).hasClass(i.FADE)
                          , d = function() {
                            return a._transitionComplete(t, c, o)
                        };
                        if (c && u) {
                            var h = l.getTransitionDurationFromElement(c);
                            e(c).one(l.TRANSITION_END, d).emulateTransitionEnd(h)
                        } else
                            d()
                    }
                    ,
                    s._transitionComplete = function(t, n, o) {
                        if (n) {
                            e(n).removeClass(i.SHOW + " " + i.ACTIVE);
                            var s = e(n.parentNode).find(r.DROPDOWN_ACTIVE_CHILD)[0];
                            s && e(s).removeClass(i.ACTIVE),
                            "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (e(t).addClass(i.ACTIVE),
                        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                        l.reflow(t),
                        e(t).addClass(i.SHOW),
                        t.parentNode && e(t.parentNode).hasClass(i.DROPDOWN_MENU)) {
                            var a = e(t).closest(r.DROPDOWN)[0];
                            a && e(a).find(r.DROPDOWN_TOGGLE).addClass(i.ACTIVE),
                            t.setAttribute("aria-expanded", !0)
                        }
                        o && o()
                    }
                    ,
                    t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this)
                              , o = i.data("bs.tab");
                            if (o || (o = new t(this),
                            i.data("bs.tab", o)),
                            "string" == typeof n) {
                                if (void 0 === o[n])
                                    throw new TypeError('No method named "' + n + '"');
                                o[n]()
                            }
                        })
                    }
                    ,
                    o(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.1"
                        }
                    }]),
                    t
                }();
                return e(document).on(n.CLICK_DATA_API, r.DATA_TOGGLE, function(t) {
                    t.preventDefault(),
                    s._jQueryInterface.call(e(this), "show")
                }),
                e.fn.tab = s._jQueryInterface,
                e.fn.tab.Constructor = s,
                e.fn.tab.noConflict = function() {
                    return e.fn.tab = t,
                    s._jQueryInterface
                }
                ,
                s
            }(t);
            !function(e) {
                if (void 0 === e)
                    throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var t = e.fn.jquery.split(" ")[0].split(".");
                if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)
                    throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }(t),
            e.Util = l,
            e.Alert = c,
            e.Button = u,
            e.Carousel = d,
            e.Collapse = h,
            e.Dropdown = f,
            e.Modal = p,
            e.Popover = g,
            e.Scrollspy = v,
            e.Tab = b,
            e.Tooltip = m,
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }(t, n(0), n(4))
    }()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        function n(e) {
            var t = !1;
            return function() {
                t || (t = !0,
                window.Promise.resolve().then(function() {
                    t = !1,
                    e()
                }))
            }
        }
        function i(e) {
            var t = !1;
            return function() {
                t || (t = !0,
                setTimeout(function() {
                    t = !1,
                    e()
                }, de))
            }
        }
        function o(e) {
            var t = {};
            return e && "[object Function]" === t.toString.call(e)
        }
        function r(e, t) {
            if (1 !== e.nodeType)
                return [];
            var n = getComputedStyle(e, null);
            return t ? n[t] : n
        }
        function s(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }
        function a(e) {
            if (!e)
                return document.body;
            switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
            }
            var t = r(e)
              , n = t.overflow
              , i = t.overflowX;
            return /(auto|scroll|overlay)/.test(n + t.overflowY + i) ? e : a(s(e))
        }
        function l(e) {
            return 11 === e ? me : 10 === e ? ge : me || ge
        }
        function c(e) {
            if (!e)
                return document.documentElement;
            for (var t = l(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling; )
                n = (e = e.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === r(n, "position") ? c(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
        }
        function u(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || c(e.firstElementChild) === e)
        }
        function d(e) {
            return null !== e.parentNode ? d(e.parentNode) : e
        }
        function h(e, t) {
            if (!(e && e.nodeType && t && t.nodeType))
                return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
              , i = n ? e : t
              , o = n ? t : e
              , r = document.createRange();
            r.setStart(i, 0),
            r.setEnd(o, 0);
            var s = r.commonAncestorContainer;
            if (e !== s && t !== s || i.contains(o))
                return u(s) ? s : c(s);
            var a = d(e);
            return a.host ? h(a.host, t) : h(e, d(t).host)
        }
        function f(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top"
              , n = "top" === t ? "scrollTop" : "scrollLeft"
              , i = e.nodeName;
            if ("BODY" === i || "HTML" === i) {
                var o = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || o)[n]
            }
            return e[n]
        }
        function p(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , i = f(t, "top")
              , o = f(t, "left")
              , r = n ? -1 : 1;
            return e.top += i * r,
            e.bottom += i * r,
            e.left += o * r,
            e.right += o * r,
            e
        }
        function m(e, t) {
            var n = "x" === t ? "Left" : "Top"
              , i = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
        }
        function g(e, t, n, i) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], l(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
        }
        function v() {
            var e = document.body
              , t = document.documentElement
              , n = l(10) && getComputedStyle(t);
            return {
                height: g("Height", e, t, n),
                width: g("Width", e, t, n)
            }
        }
        function b(e) {
            return Ee({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }
        function y(e) {
            var t = {};
            try {
                if (l(10)) {
                    t = e.getBoundingClientRect();
                    var n = f(e, "top")
                      , i = f(e, "left");
                    t.top += n,
                    t.left += i,
                    t.bottom += n,
                    t.right += i
                } else
                    t = e.getBoundingClientRect()
            } catch (e) {}
            var o = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            }
              , s = "HTML" === e.nodeName ? v() : {}
              , a = s.width || e.clientWidth || o.right - o.left
              , c = s.height || e.clientHeight || o.bottom - o.top
              , u = e.offsetWidth - a
              , d = e.offsetHeight - c;
            if (u || d) {
                var h = r(e);
                u -= m(h, "x"),
                d -= m(h, "y"),
                o.width -= u,
                o.height -= d
            }
            return b(o)
        }
        function E(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , i = l(10)
              , o = "HTML" === t.nodeName
              , s = y(e)
              , c = y(t)
              , u = a(e)
              , d = r(t)
              , h = parseFloat(d.borderTopWidth, 10)
              , f = parseFloat(d.borderLeftWidth, 10);
            n && "HTML" === t.nodeName && (c.top = Math.max(c.top, 0),
            c.left = Math.max(c.left, 0));
            var m = b({
                top: s.top - c.top - h,
                left: s.left - c.left - f,
                width: s.width,
                height: s.height
            });
            if (m.marginTop = 0,
            m.marginLeft = 0,
            !i && o) {
                var g = parseFloat(d.marginTop, 10)
                  , v = parseFloat(d.marginLeft, 10);
                m.top -= h - g,
                m.bottom -= h - g,
                m.left -= f - v,
                m.right -= f - v,
                m.marginTop = g,
                m.marginLeft = v
            }
            return (i && !n ? t.contains(u) : t === u && "BODY" !== u.nodeName) && (m = p(m, t)),
            m
        }
        function C(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = e.ownerDocument.documentElement
              , i = E(e, n)
              , o = Math.max(n.clientWidth, window.innerWidth || 0)
              , r = Math.max(n.clientHeight, window.innerHeight || 0)
              , s = t ? 0 : f(n)
              , a = t ? 0 : f(n, "left");
            return b({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: o,
                height: r
            })
        }
        function T(e) {
            var t = e.nodeName;
            return "BODY" !== t && "HTML" !== t && ("fixed" === r(e, "position") || T(s(e)))
        }
        function w(e) {
            if (!e || !e.parentElement || l())
                return document.documentElement;
            for (var t = e.parentElement; t && "none" === r(t, "transform"); )
                t = t.parentElement;
            return t || document.documentElement
        }
        function x(e, t, n, i) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
              , r = {
                top: 0,
                left: 0
            }
              , l = o ? w(e) : h(e, t);
            if ("viewport" === i)
                r = C(l, o);
            else {
                var c = void 0;
                "scrollParent" === i ? (c = a(s(t)),
                "BODY" === c.nodeName && (c = e.ownerDocument.documentElement)) : c = "window" === i ? e.ownerDocument.documentElement : i;
                var u = E(c, l, o);
                if ("HTML" !== c.nodeName || T(l))
                    r = u;
                else {
                    var d = v()
                      , f = d.height
                      , p = d.width;
                    r.top += u.top - u.marginTop,
                    r.bottom = f + u.top,
                    r.left += u.left - u.marginLeft,
                    r.right = p + u.left
                }
            }
            return r.left += n,
            r.top += n,
            r.right -= n,
            r.bottom -= n,
            r
        }
        function _(e) {
            return e.width * e.height
        }
        function A(e, t, n, i, o) {
            var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto"))
                return e;
            var s = x(n, i, r, o)
              , a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            }
              , l = Object.keys(a).map(function(e) {
                return Ee({
                    key: e
                }, a[e], {
                    area: _(a[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            })
              , c = l.filter(function(e) {
                var t = e.width
                  , i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight
            })
              , u = c.length > 0 ? c[0].key : l[0].key
              , d = e.split("-")[1];
            return u + (d ? "-" + d : "")
        }
        function S(e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return E(n, i ? w(t) : h(t, n), i)
        }
        function D(e) {
            var t = getComputedStyle(e)
              , n = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
              , i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
            return {
                width: e.offsetWidth + i,
                height: e.offsetHeight + n
            }
        }
        function N(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function(e) {
                return t[e]
            })
        }
        function k(e, t, n) {
            n = n.split("-")[0];
            var i = D(e)
              , o = {
                width: i.width,
                height: i.height
            }
              , r = -1 !== ["right", "left"].indexOf(n)
              , s = r ? "top" : "left"
              , a = r ? "left" : "top"
              , l = r ? "height" : "width"
              , c = r ? "width" : "height";
            return o[s] = t[s] + t[l] / 2 - i[l] / 2,
            o[a] = n === a ? t[a] - i[c] : t[N(a)],
            o
        }
        function O(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }
        function L(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e[t] === n
                });
            var i = O(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }
        function I(e, t, n) {
            return (void 0 === n ? e : e.slice(0, L(e, "name", n))).forEach(function(e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = e.function || e.fn;
                e.enabled && o(n) && (t.offsets.popper = b(t.offsets.popper),
                t.offsets.reference = b(t.offsets.reference),
                t = n(t, e))
            }),
            t
        }
        function P() {
            if (!this.state.isDestroyed) {
                var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                };
                e.offsets.reference = S(this.state, this.popper, this.reference, this.options.positionFixed),
                e.placement = A(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                e.originalPlacement = e.placement,
                e.positionFixed = this.options.positionFixed,
                e.offsets.popper = k(this.popper, e.offsets.reference, e.placement),
                e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                e = I(this.modifiers, e),
                this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                this.options.onCreate(e))
            }
        }
        function R(e, t) {
            return e.some(function(e) {
                var n = e.name;
                return e.enabled && n === t
            })
        }
        function H(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                var o = t[i]
                  , r = o ? "" + o + n : e;
                if (void 0 !== document.body.style[r])
                    return r
            }
            return null
        }
        function M() {
            return this.state.isDestroyed = !0,
            R(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
            this.popper.style.position = "",
            this.popper.style.top = "",
            this.popper.style.left = "",
            this.popper.style.right = "",
            this.popper.style.bottom = "",
            this.popper.style.willChange = "",
            this.popper.style[H("transform")] = ""),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
        }
        function F(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }
        function B(e, t, n, i) {
            var o = "BODY" === e.nodeName
              , r = o ? e.ownerDocument.defaultView : e;
            r.addEventListener(t, n, {
                passive: !0
            }),
            o || B(a(r.parentNode), t, n, i),
            i.push(r)
        }
        function j(e, t, n, i) {
            n.updateBound = i,
            F(e).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var o = a(e);
            return B(o, "scroll", n.updateBound, n.scrollParents),
            n.scrollElement = o,
            n.eventsEnabled = !0,
            n
        }
        function W() {
            this.state.eventsEnabled || (this.state = j(this.reference, this.options, this.state, this.scheduleUpdate))
        }
        function q(e, t) {
            return F(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function(e) {
                e.removeEventListener("scroll", t.updateBound)
            }),
            t.updateBound = null,
            t.scrollParents = [],
            t.scrollElement = null,
            t.eventsEnabled = !1,
            t
        }
        function U() {
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
            this.state = q(this.reference, this.state))
        }
        function K(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }
        function V(e, t) {
            Object.keys(t).forEach(function(n) {
                var i = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && K(t[n]) && (i = "px"),
                e.style[n] = t[n] + i
            })
        }
        function G(e, t) {
            Object.keys(t).forEach(function(n) {
                !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
            })
        }
        function z(e) {
            return V(e.instance.popper, e.styles),
            G(e.instance.popper, e.attributes),
            e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles),
            e
        }
        function $(e, t, n, i, o) {
            var r = S(o, t, e, n.positionFixed)
              , s = A(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
            return t.setAttribute("x-placement", s),
            V(t, {
                position: n.positionFixed ? "fixed" : "absolute"
            }),
            n
        }
        function Q(e, t) {
            var n = t.x
              , i = t.y
              , o = e.offsets.popper
              , r = O(e.instance.modifiers, function(e) {
                return "applyStyle" === e.name
            }).gpuAcceleration;
            void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
            var s = void 0 !== r ? r : t.gpuAcceleration
              , a = c(e.instance.popper)
              , l = y(a)
              , u = {
                position: o.position
            }
              , d = {
                left: Math.floor(o.left),
                top: Math.round(o.top),
                bottom: Math.round(o.bottom),
                right: Math.floor(o.right)
            }
              , h = "bottom" === n ? "top" : "bottom"
              , f = "right" === i ? "left" : "right"
              , p = H("transform")
              , m = void 0
              , g = void 0;
            if (g = "bottom" === h ? -l.height + d.bottom : d.top,
            m = "right" === f ? -l.width + d.right : d.left,
            s && p)
                u[p] = "translate3d(" + m + "px, " + g + "px, 0)",
                u[h] = 0,
                u[f] = 0,
                u.willChange = "transform";
            else {
                var v = "bottom" === h ? -1 : 1
                  , b = "right" === f ? -1 : 1;
                u[h] = g * v,
                u[f] = m * b,
                u.willChange = h + ", " + f
            }
            var E = {
                "x-placement": e.placement
            };
            return e.attributes = Ee({}, E, e.attributes),
            e.styles = Ee({}, u, e.styles),
            e.arrowStyles = Ee({}, e.offsets.arrow, e.arrowStyles),
            e
        }
        function Y(e, t, n) {
            var i = O(e, function(e) {
                return e.name === t
            })
              , o = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
            if (!o) {
                var r = "`" + t + "`"
                  , s = "`" + n + "`";
                console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
            }
            return o
        }
        function X(e, t) {
            var n;
            if (!Y(e.instance.modifiers, "arrow", "keepTogether"))
                return e;
            var i = t.element;
            if ("string" == typeof i) {
                if (!(i = e.instance.popper.querySelector(i)))
                    return e
            } else if (!e.instance.popper.contains(i))
                return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                e;
            var o = e.placement.split("-")[0]
              , s = e.offsets
              , a = s.popper
              , l = s.reference
              , c = -1 !== ["left", "right"].indexOf(o)
              , u = c ? "height" : "width"
              , d = c ? "Top" : "Left"
              , h = d.toLowerCase()
              , f = c ? "left" : "top"
              , p = c ? "bottom" : "right"
              , m = D(i)[u];
            l[p] - m < a[h] && (e.offsets.popper[h] -= a[h] - (l[p] - m)),
            l[h] + m > a[p] && (e.offsets.popper[h] += l[h] + m - a[p]),
            e.offsets.popper = b(e.offsets.popper);
            var g = l[h] + l[u] / 2 - m / 2
              , v = r(e.instance.popper)
              , y = parseFloat(v["margin" + d], 10)
              , E = parseFloat(v["border" + d + "Width"], 10)
              , C = g - e.offsets.popper[h] - y - E;
            return C = Math.max(Math.min(a[u] - m, C), 0),
            e.arrowElement = i,
            e.offsets.arrow = (n = {},
            ye(n, h, Math.round(C)),
            ye(n, f, ""),
            n),
            e
        }
        function J(e) {
            return "end" === e ? "start" : "start" === e ? "end" : e
        }
        function Z(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = Te.indexOf(e)
              , i = Te.slice(n + 1).concat(Te.slice(0, n));
            return t ? i.reverse() : i
        }
        function ee(e, t) {
            if (R(e.instance.modifiers, "inner"))
                return e;
            if (e.flipped && e.placement === e.originalPlacement)
                return e;
            var n = x(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
              , i = e.placement.split("-")[0]
              , o = N(i)
              , r = e.placement.split("-")[1] || ""
              , s = [];
            switch (t.behavior) {
            case we.FLIP:
                s = [i, o];
                break;
            case we.CLOCKWISE:
                s = Z(i);
                break;
            case we.COUNTERCLOCKWISE:
                s = Z(i, !0);
                break;
            default:
                s = t.behavior
            }
            return s.forEach(function(a, l) {
                if (i !== a || s.length === l + 1)
                    return e;
                i = e.placement.split("-")[0],
                o = N(i);
                var c = e.offsets.popper
                  , u = e.offsets.reference
                  , d = Math.floor
                  , h = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom)
                  , f = d(c.left) < d(n.left)
                  , p = d(c.right) > d(n.right)
                  , m = d(c.top) < d(n.top)
                  , g = d(c.bottom) > d(n.bottom)
                  , v = "left" === i && f || "right" === i && p || "top" === i && m || "bottom" === i && g
                  , b = -1 !== ["top", "bottom"].indexOf(i)
                  , y = !!t.flipVariations && (b && "start" === r && f || b && "end" === r && p || !b && "start" === r && m || !b && "end" === r && g);
                (h || v || y) && (e.flipped = !0,
                (h || v) && (i = s[l + 1]),
                y && (r = J(r)),
                e.placement = i + (r ? "-" + r : ""),
                e.offsets.popper = Ee({}, e.offsets.popper, k(e.instance.popper, e.offsets.reference, e.placement)),
                e = I(e.instance.modifiers, e, "flip"))
            }),
            e
        }
        function te(e) {
            var t = e.offsets
              , n = t.popper
              , i = t.reference
              , o = e.placement.split("-")[0]
              , r = Math.floor
              , s = -1 !== ["top", "bottom"].indexOf(o)
              , a = s ? "right" : "bottom"
              , l = s ? "left" : "top"
              , c = s ? "width" : "height";
            return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]),
            n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])),
            e
        }
        function ne(e, t, n, i) {
            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
              , r = +o[1]
              , s = o[2];
            if (!r)
                return e;
            if (0 === s.indexOf("%")) {
                var a = void 0;
                switch (s) {
                case "%p":
                    a = n;
                    break;
                case "%":
                case "%r":
                default:
                    a = i
                }
                return b(a)[t] / 100 * r
            }
            return "vh" === s || "vw" === s ? ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r
        }
        function ie(e, t, n, i) {
            var o = [0, 0]
              , r = -1 !== ["right", "left"].indexOf(i)
              , s = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            })
              , a = s.indexOf(O(s, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
            s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/
              , c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
            return c = c.map(function(e, i) {
                var o = (1 === i ? !r : r) ? "height" : "width"
                  , s = !1;
                return e.reduce(function(e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                    s = !0,
                    e) : s ? (e[e.length - 1] += t,
                    s = !1,
                    e) : e.concat(t)
                }, []).map(function(e) {
                    return ne(e, o, t, n)
                })
            }),
            c.forEach(function(e, t) {
                e.forEach(function(n, i) {
                    K(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1))
                })
            }),
            o
        }
        function oe(e, t) {
            var n = t.offset
              , i = e.placement
              , o = e.offsets
              , r = o.popper
              , s = o.reference
              , a = i.split("-")[0]
              , l = void 0;
            return l = K(+n) ? [+n, 0] : ie(n, r, s, a),
            "left" === a ? (r.top += l[0],
            r.left -= l[1]) : "right" === a ? (r.top += l[0],
            r.left += l[1]) : "top" === a ? (r.left += l[0],
            r.top -= l[1]) : "bottom" === a && (r.left += l[0],
            r.top += l[1]),
            e.popper = r,
            e
        }
        function re(e, t) {
            var n = t.boundariesElement || c(e.instance.popper);
            e.instance.reference === n && (n = c(n));
            var i = H("transform")
              , o = e.instance.popper.style
              , r = o.top
              , s = o.left
              , a = o[i];
            o.top = "",
            o.left = "",
            o[i] = "";
            var l = x(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
            o.top = r,
            o.left = s,
            o[i] = a,
            t.boundaries = l;
            var u = t.priority
              , d = e.offsets.popper
              , h = {
                primary: function(e) {
                    var n = d[e];
                    return d[e] < l[e] && !t.escapeWithReference && (n = Math.max(d[e], l[e])),
                    ye({}, e, n)
                },
                secondary: function(e) {
                    var n = "right" === e ? "left" : "top"
                      , i = d[n];
                    return d[e] > l[e] && !t.escapeWithReference && (i = Math.min(d[n], l[e] - ("right" === e ? d.width : d.height))),
                    ye({}, n, i)
                }
            };
            return u.forEach(function(e) {
                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                d = Ee({}, d, h[t](e))
            }),
            e.offsets.popper = d,
            e
        }
        function se(e) {
            var t = e.placement
              , n = t.split("-")[0]
              , i = t.split("-")[1];
            if (i) {
                var o = e.offsets
                  , r = o.reference
                  , s = o.popper
                  , a = -1 !== ["bottom", "top"].indexOf(n)
                  , l = a ? "left" : "top"
                  , c = a ? "width" : "height"
                  , u = {
                    start: ye({}, l, r[l]),
                    end: ye({}, l, r[l] + r[c] - s[c])
                };
                e.offsets.popper = Ee({}, s, u[i])
            }
            return e
        }
        function ae(e) {
            if (!Y(e.instance.modifiers, "hide", "preventOverflow"))
                return e;
            var t = e.offsets.reference
              , n = O(e.instance.modifiers, function(e) {
                return "preventOverflow" === e.name
            }).boundaries;
            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                if (!0 === e.hide)
                    return e;
                e.hide = !0,
                e.attributes["x-out-of-boundaries"] = ""
            } else {
                if (!1 === e.hide)
                    return e;
                e.hide = !1,
                e.attributes["x-out-of-boundaries"] = !1
            }
            return e
        }
        function le(e) {
            var t = e.placement
              , n = t.split("-")[0]
              , i = e.offsets
              , o = i.popper
              , r = i.reference
              , s = -1 !== ["left", "right"].indexOf(n)
              , a = -1 === ["top", "left"].indexOf(n);
            return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0),
            e.placement = N(t),
            e.offsets.popper = b(o),
            e
        }
        for (var ce = "undefined" != typeof window && "undefined" != typeof document, ue = ["Edge", "Trident", "Firefox"], de = 0, he = 0; he < ue.length; he += 1)
            if (ce && navigator.userAgent.indexOf(ue[he]) >= 0) {
                de = 1;
                break
            }
        var fe = ce && window.Promise
          , pe = fe ? n : i
          , me = ce && !(!window.MSInputMethodContext || !document.documentMode)
          , ge = ce && /MSIE 10/.test(navigator.userAgent)
          , ve = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
          , be = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , ye = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
          , Ee = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
          , Ce = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
          , Te = Ce.slice(3)
          , we = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        }
          , xe = {
            shift: {
                order: 100,
                enabled: !0,
                fn: se
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: oe,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: re,
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: te
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: X,
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: ee,
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: le
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: ae
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: Q,
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: z,
                onLoad: $,
                gpuAcceleration: void 0
            }
        }
          , _e = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: xe
        }
          , Ae = function() {
            function e(t, n) {
                var i = this
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                ve(this, e),
                this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }
                ,
                this.update = pe(this.update.bind(this)),
                this.options = Ee({}, e.Defaults, r),
                this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                },
                this.reference = t && t.jquery ? t[0] : t,
                this.popper = n && n.jquery ? n[0] : n,
                this.options.modifiers = {},
                Object.keys(Ee({}, e.Defaults.modifiers, r.modifiers)).forEach(function(t) {
                    i.options.modifiers[t] = Ee({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                }),
                this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return Ee({
                        name: e
                    }, i.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }),
                this.modifiers.forEach(function(e) {
                    e.enabled && o(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                }),
                this.update();
                var s = this.options.eventsEnabled;
                s && this.enableEventListeners(),
                this.state.eventsEnabled = s
            }
            return be(e, [{
                key: "update",
                value: function() {
                    return P.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return M.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return W.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return U.call(this)
                }
            }]),
            e
        }();
        Ae.Utils = ("undefined" != typeof window ? window : e).PopperUtils,
        Ae.placements = Ce,
        Ae.Defaults = _e,
        t.default = Ae
    }
    .call(t, n(5))
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t) {
    !function(t, n) {
        "object" == typeof e && e.exports ? (e.exports = n(),
        e.exports.default = e.exports) : t.timeago = n()
    }("undefined" != typeof window ? window : this, function() {
        function e(e) {
            return e instanceof Date ? e : isNaN(e) ? /^\d+$/.test(e) ? new Date(t(e)) : (e = (e || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"),
            new Date(e)) : new Date(t(e))
        }
        function t(e) {
            return parseInt(e)
        }
        function n(e, n, i) {
            n = h[n] ? n : h[i] ? i : "en";
            for (var o = 0, r = e < 0 ? 1 : 0, s = e = Math.abs(e); e >= f[o] && o < p; o++)
                e /= f[o];
            return e = t(e),
            o *= 2,
            e > (0 === o ? 9 : 1) && (o += 1),
            h[n](e, o, s)[r].replace("%s", e)
        }
        function i(t, n) {
            return ((n = n ? e(n) : new Date) - e(t)) / 1e3
        }
        function o(e) {
            for (var t = 1, n = 0, i = Math.abs(e); e >= f[n] && n < p; n++)
                e /= f[n],
                t *= f[n];
            return i %= t,
            i = i ? t - i : t,
            Math.ceil(i)
        }
        function r(e) {
            return s(e, "data-timeago") || s(e, "datetime")
        }
        function s(e, t) {
            return e.getAttribute ? e.getAttribute(t) : e.attr ? e.attr(t) : void 0
        }
        function a(e, t) {
            return e.setAttribute ? e.setAttribute(m, t) : e.attr ? e.attr(m, t) : void 0
        }
        function l(e, t) {
            this.nowDate = e,
            this.defaultLocale = t || "en"
        }
        function c(e, t) {
            return new l(e,t)
        }
        var u = "second_minute_hour_day_week_month_year".split("_")
          , d = "秒_分钟_小时_天_周_月_年".split("_")
          , h = {
            en: function(e, t) {
                if (0 === t)
                    return ["just now", "right now"];
                var n = u[parseInt(t / 2)];
                return e > 1 && (n += "s"),
                [e + " " + n + " ago", "in " + e + " " + n]
            },
            zh_CN: function(e, t) {
                if (0 === t)
                    return ["刚刚", "片刻后"];
                var n = d[parseInt(t / 2)];
                return [e + n + "前", e + n + "后"]
            }
        }
          , f = [60, 60, 24, 7, 365 / 7 / 12, 12]
          , p = 6
          , m = "data-tid"
          , g = {};
        return l.prototype.doRender = function(e, t, r) {
            var s, l = i(t, this.nowDate), c = this;
            e.innerHTML = n(l, r, this.defaultLocale),
            g[s = setTimeout(function() {
                c.doRender(e, t, r),
                delete g[s]
            }, Math.min(1e3 * o(l), 2147483647))] = 0,
            a(e, s)
        }
        ,
        l.prototype.format = function(e, t) {
            return n(i(e, this.nowDate), t, this.defaultLocale)
        }
        ,
        l.prototype.render = function(e, t) {
            void 0 === e.length && (e = [e]);
            for (var n = 0, i = e.length; n < i; n++)
                this.doRender(e[n], r(e[n]), t)
        }
        ,
        l.prototype.setLocale = function(e) {
            this.defaultLocale = e
        }
        ,
        c.register = function(e, t) {
            h[e] = t
        }
        ,
        c.cancel = function(e) {
            var t;
            if (e)
                (t = s(e, m)) && (clearTimeout(t),
                delete g[t]);
            else {
                for (t in g)
                    clearTimeout(t);
                g = {}
            }
        }
        ,
        c
    })
}
, function(e, t, n) {
    (function(i) {
        var o;
        "classList"in document.createElement("_") || function(e) {
            "use strict";
            if ("Element"in e) {
                var t = e.Element.prototype
                  , n = Object
                  , i = String.prototype.trim || function() {
                    return this.replace(/^\s+|\s+$/g, "")
                }
                  , o = Array.prototype.indexOf || function(e) {
                    for (var t = 0, n = this.length; t < n; t++)
                        if (t in this && this[t] === e)
                            return t;
                    return -1
                }
                  , r = function(e, t) {
                    this.name = e,
                    this.code = DOMException[e],
                    this.message = t
                }
                  , s = function(e, t) {
                    if ("" === t)
                        throw new r("SYNTAX_ERR","An invalid or illegal string was specified");
                    if (/\s/.test(t))
                        throw new r("INVALID_CHARACTER_ERR","String contains an invalid character");
                    return o.call(e, t)
                }
                  , a = function(e) {
                    for (var t = i.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], o = 0, r = n.length; o < r; o++)
                        this.push(n[o]);
                    this._updateClassName = function() {
                        e.setAttribute("class", this.toString())
                    }
                }
                  , l = a.prototype = []
                  , c = function() {
                    return new a(this)
                };
                if (r.prototype = Error.prototype,
                l.item = function(e) {
                    return this[e] || null
                }
                ,
                l.contains = function(e) {
                    return e += "",
                    -1 !== s(this, e)
                }
                ,
                l.add = function() {
                    var e, t = arguments, n = 0, i = t.length, o = !1;
                    do {
                        e = t[n] + "",
                        -1 === s(this, e) && (this.push(e),
                        o = !0)
                    } while (++n < i);o && this._updateClassName()
                }
                ,
                l.remove = function() {
                    var e, t, n = arguments, i = 0, o = n.length, r = !1;
                    do {
                        for (e = n[i] + "",
                        t = s(this, e); -1 !== t; )
                            this.splice(t, 1),
                            r = !0,
                            t = s(this, e)
                    } while (++i < o);r && this._updateClassName()
                }
                ,
                l.toggle = function(e, t) {
                    e += "";
                    var n = this.contains(e)
                      , i = n ? !0 !== t && "remove" : !1 !== t && "add";
                    return i && this[i](e),
                    !0 === t || !1 === t ? t : !n
                }
                ,
                l.toString = function() {
                    return this.join(" ")
                }
                ,
                n.defineProperty) {
                    var u = {
                        get: c,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        n.defineProperty(t, "classList", u)
                    } catch (e) {
                        -2146823252 === e.number && (u.enumerable = !1,
                        n.defineProperty(t, "classList", u))
                    }
                } else
                    n.prototype.__defineGetter__ && t.__defineGetter__("classList", c)
            }
        }(self),
        function(e) {
            "use strict";
            if (e.URL = e.URL || e.webkitURL,
            e.Blob && e.URL)
                try {
                    return void new Blob
                } catch (e) {}
            var t = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || function(e) {
                var t = function(e) {
                    return Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]
                }
                  , n = function() {
                    this.data = []
                }
                  , i = function(e, t, n) {
                    this.data = e,
                    this.size = e.length,
                    this.type = t,
                    this.encoding = n
                }
                  , o = n.prototype
                  , r = i.prototype
                  , s = e.FileReaderSync
                  , a = function(e) {
                    this.code = this[this.name = e]
                }
                  , l = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" ")
                  , c = l.length
                  , u = e.URL || e.webkitURL || e
                  , d = u.createObjectURL
                  , h = u.revokeObjectURL
                  , f = u
                  , p = e.btoa
                  , m = e.atob
                  , g = e.ArrayBuffer
                  , v = e.Uint8Array
                  , b = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
                for (i.fake = r.fake = !0; c--; )
                    a.prototype[l[c]] = c + 1;
                return u.createObjectURL || (f = e.URL = function(e) {
                    var t, n = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                    return n.href = e,
                    "origin"in n || ("data:" === n.protocol.toLowerCase() ? n.origin = null : (t = e.match(b),
                    n.origin = t && t[1])),
                    n
                }
                ),
                f.createObjectURL = function(e) {
                    var t, n = e.type;
                    return null === n && (n = "application/octet-stream"),
                    e instanceof i ? (t = "data:" + n,
                    "base64" === e.encoding ? t + ";base64," + e.data : "URI" === e.encoding ? t + "," + decodeURIComponent(e.data) : p ? t + ";base64," + p(e.data) : t + "," + encodeURIComponent(e.data)) : d ? d.call(u, e) : void 0
                }
                ,
                f.revokeObjectURL = function(e) {
                    "data:" !== e.substring(0, 5) && h && h.call(u, e)
                }
                ,
                o.append = function(e) {
                    var n = this.data;
                    if (v && (e instanceof g || e instanceof v)) {
                        for (var o = "", r = new v(e), l = 0, c = r.length; l < c; l++)
                            o += String.fromCharCode(r[l]);
                        n.push(o)
                    } else if ("Blob" === t(e) || "File" === t(e)) {
                        if (!s)
                            throw new a("NOT_READABLE_ERR");
                        var u = new s;
                        n.push(u.readAsBinaryString(e))
                    } else
                        e instanceof i ? "base64" === e.encoding && m ? n.push(m(e.data)) : "URI" === e.encoding ? n.push(decodeURIComponent(e.data)) : "raw" === e.encoding && n.push(e.data) : ("string" != typeof e && (e += ""),
                        n.push(unescape(encodeURIComponent(e))))
                }
                ,
                o.getBlob = function(e) {
                    return arguments.length || (e = null),
                    new i(this.data.join(""),e,"raw")
                }
                ,
                o.toString = function() {
                    return "[object BlobBuilder]"
                }
                ,
                r.slice = function(e, t, n) {
                    var o = arguments.length;
                    return o < 3 && (n = null),
                    new i(this.data.slice(e, o > 1 ? t : this.data.length),n,this.encoding)
                }
                ,
                r.toString = function() {
                    return "[object Blob]"
                }
                ,
                r.close = function() {
                    this.size = 0,
                    delete this.data
                }
                ,
                n
            }(e);
            e.Blob = function(e, n) {
                var i = n ? n.type || "" : ""
                  , o = new t;
                if (e)
                    for (var r = 0, s = e.length; r < s; r++)
                        Uint8Array && e[r]instanceof Uint8Array ? o.append(e[r].buffer) : o.append(e[r]);
                var a = o.getBlob(i);
                return !a.slice && a.webkitSlice && (a.slice = a.webkitSlice),
                a
            }
            ;
            var n = Object.getPrototypeOf || function(e) {
                return e.__proto__
            }
            ;
            e.Blob.prototype = n(new e.Blob)
        }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content || this),
        function(r, s) {
            "use strict";
            "object" == typeof e && void 0 !== i && i && i.versions && i.versions.electron || "object" != typeof e ? void 0 !== (o = function() {
                return s
            }
            .call(t, n, t, e)) && (e.exports = o) : e.exports = s
        }(0, function() {
            "use strict";
            function e(e, t) {
                return this.init(e, t)
            }
            return e.extensions = {},
            function(t) {
                function n(e, t) {
                    var n, i = Array.prototype.slice.call(arguments, 2);
                    t = t || {};
                    for (var o = 0; o < i.length; o++) {
                        var r = i[o];
                        if (r)
                            for (n in r)
                                r.hasOwnProperty(n) && void 0 !== r[n] && (e || !1 === t.hasOwnProperty(n)) && (t[n] = r[n])
                    }
                    return t
                }
                var i = !1;
                try {
                    var o = document.createElement("div")
                      , r = document.createTextNode(" ");
                    o.appendChild(r),
                    i = o.contains(r)
                } catch (e) {}
                var s = {
                    isIE: "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && null !== new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent),
                    isEdge: null !== /Edge\/\d+/.exec(navigator.userAgent),
                    isFF: navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                    isMac: t.navigator.platform.toUpperCase().indexOf("MAC") >= 0,
                    keyCode: {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        ESCAPE: 27,
                        SPACE: 32,
                        DELETE: 46,
                        K: 75,
                        M: 77,
                        V: 86
                    },
                    isMetaCtrlKey: function(e) {
                        return !!(s.isMac && e.metaKey || !s.isMac && e.ctrlKey)
                    },
                    isKey: function(e, t) {
                        var n = s.getKeyCode(e);
                        return !1 === Array.isArray(t) ? n === t : -1 !== t.indexOf(n)
                    },
                    getKeyCode: function(e) {
                        var t = e.which;
                        return null === t && (t = null !== e.charCode ? e.charCode : e.keyCode),
                        t
                    },
                    blockContainerElementNames: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "ul", "li", "ol", "address", "article", "aside", "audio", "canvas", "dd", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "header", "hgroup", "main", "nav", "noscript", "output", "section", "video", "table", "thead", "tbody", "tfoot", "tr", "th", "td"],
                    emptyElementNames: ["br", "col", "colgroup", "hr", "img", "input", "source", "wbr"],
                    extend: function() {
                        var e = [!0].concat(Array.prototype.slice.call(arguments));
                        return n.apply(this, e)
                    },
                    defaults: function() {
                        var e = [!1].concat(Array.prototype.slice.call(arguments));
                        return n.apply(this, e)
                    },
                    createLink: function(e, t, n, i) {
                        var o = e.createElement("a");
                        return s.moveTextRangeIntoElement(t[0], t[t.length - 1], o),
                        o.setAttribute("href", n),
                        i && ("_blank" === i && o.setAttribute("rel", "noopener noreferrer"),
                        o.setAttribute("target", i)),
                        o
                    },
                    findOrCreateMatchingTextNodes: function(e, t, n) {
                        for (var i = e.createTreeWalker(t, NodeFilter.SHOW_ALL, null, !1), o = [], r = 0, a = !1, l = null, c = null; null !== (l = i.nextNode()); )
                            if (!(l.nodeType > 3))
                                if (3 === l.nodeType) {
                                    if (!a && n.start < r + l.nodeValue.length && (a = !0,
                                    c = s.splitStartNodeIfNeeded(l, n.start, r)),
                                    a && s.splitEndNodeIfNeeded(l, c, n.end, r),
                                    a && r === n.end)
                                        break;
                                    if (a && r > n.end + 1)
                                        throw new Error("PerformLinking overshot the target!");
                                    a && o.push(c || l),
                                    r += l.nodeValue.length,
                                    null !== c && (r += c.nodeValue.length,
                                    i.nextNode()),
                                    c = null
                                } else
                                    "img" === l.tagName.toLowerCase() && (!a && n.start <= r && (a = !0),
                                    a && o.push(l));
                        return o
                    },
                    splitStartNodeIfNeeded: function(e, t, n) {
                        return t !== n ? e.splitText(t - n) : null
                    },
                    splitEndNodeIfNeeded: function(e, t, n, i) {
                        var o, r;
                        o = i + e.nodeValue.length + (t ? t.nodeValue.length : 0) - 1,
                        r = n - i - (t ? e.nodeValue.length : 0),
                        o >= n && i !== o && 0 !== r && (t || e).splitText(r)
                    },
                    splitByBlockElements: function(t) {
                        if (3 !== t.nodeType && 1 !== t.nodeType)
                            return [];
                        var n = []
                          , i = e.util.blockContainerElementNames.join(",");
                        if (3 === t.nodeType || 0 === t.querySelectorAll(i).length)
                            return [t];
                        for (var o = 0; o < t.childNodes.length; o++) {
                            var r = t.childNodes[o];
                            if (3 === r.nodeType)
                                n.push(r);
                            else if (1 === r.nodeType) {
                                var s = r.querySelectorAll(i);
                                0 === s.length ? n.push(r) : n = n.concat(e.util.splitByBlockElements(r))
                            }
                        }
                        return n
                    },
                    findAdjacentTextNodeWithContent: function(e, t, n) {
                        var i, o = !1, r = n.createNodeIterator(e, NodeFilter.SHOW_TEXT, null, !1);
                        for (i = r.nextNode(); i; ) {
                            if (i === t)
                                o = !0;
                            else if (o && 3 === i.nodeType && i.nodeValue && i.nodeValue.trim().length > 0)
                                break;
                            i = r.nextNode()
                        }
                        return i
                    },
                    findPreviousSibling: function(e) {
                        if (!e || s.isMediumEditorElement(e))
                            return !1;
                        for (var t = e.previousSibling; !t && !s.isMediumEditorElement(e.parentNode); )
                            e = e.parentNode,
                            t = e.previousSibling;
                        return t
                    },
                    isDescendant: function(e, t, n) {
                        if (!e || !t)
                            return !1;
                        if (e === t)
                            return !!n;
                        if (1 !== e.nodeType)
                            return !1;
                        if (i || 3 !== t.nodeType)
                            return e.contains(t);
                        for (var o = t.parentNode; null !== o; ) {
                            if (o === e)
                                return !0;
                            o = o.parentNode
                        }
                        return !1
                    },
                    isElement: function(e) {
                        return !(!e || 1 !== e.nodeType)
                    },
                    throttle: function(e, t) {
                        var n, i, o, r = null, s = 0, a = function() {
                            s = Date.now(),
                            r = null,
                            o = e.apply(n, i),
                            r || (n = i = null)
                        };
                        return t || 0 === t || (t = 50),
                        function() {
                            var l = Date.now()
                              , c = t - (l - s);
                            return n = this,
                            i = arguments,
                            c <= 0 || c > t ? (r && (clearTimeout(r),
                            r = null),
                            s = l,
                            o = e.apply(n, i),
                            r || (n = i = null)) : r || (r = setTimeout(a, c)),
                            o
                        }
                    },
                    traverseUp: function(e, t) {
                        if (!e)
                            return !1;
                        do {
                            if (1 === e.nodeType) {
                                if (t(e))
                                    return e;
                                if (s.isMediumEditorElement(e))
                                    return !1
                            }
                            e = e.parentNode
                        } while (e);return !1
                    },
                    htmlEntities: function(e) {
                        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                    },
                    insertHTMLCommand: function(t, n) {
                        var i, o, r, a, l, c, u, d = !1, h = ["insertHTML", !1, n];
                        if (!e.util.isEdge && t.queryCommandSupported("insertHTML"))
                            try {
                                return t.execCommand.apply(t, h)
                            } catch (e) {}
                        if (i = t.getSelection(),
                        i.rangeCount) {
                            if (o = i.getRangeAt(0),
                            u = o.commonAncestorContainer,
                            s.isMediumEditorElement(u) && !u.firstChild)
                                o.selectNode(u.appendChild(t.createTextNode("")));
                            else if (3 === u.nodeType && 0 === o.startOffset && o.endOffset === u.nodeValue.length || 3 !== u.nodeType && u.innerHTML === o.toString()) {
                                for (; !s.isMediumEditorElement(u) && u.parentNode && 1 === u.parentNode.childNodes.length && !s.isMediumEditorElement(u.parentNode); )
                                    u = u.parentNode;
                                o.selectNode(u)
                            }
                            for (o.deleteContents(),
                            r = t.createElement("div"),
                            r.innerHTML = n,
                            a = t.createDocumentFragment(); r.firstChild; )
                                l = r.firstChild,
                                c = a.appendChild(l);
                            o.insertNode(a),
                            c && (o = o.cloneRange(),
                            o.setStartAfter(c),
                            o.collapse(!0),
                            e.selection.selectRange(t, o)),
                            d = !0
                        }
                        return t.execCommand.callListeners && t.execCommand.callListeners(h, d),
                        d
                    },
                    execFormatBlock: function(t, n) {
                        var i, o = s.getTopBlockContainer(e.selection.getSelectionStart(t));
                        if ("blockquote" === n) {
                            if (o && (i = Array.prototype.slice.call(o.childNodes),
                            i.some(function(e) {
                                return s.isBlockContainer(e)
                            })))
                                return t.execCommand("outdent", !1, null);
                            if (s.isIE)
                                return t.execCommand("indent", !1, n)
                        }
                        if (o && n === o.nodeName.toLowerCase() && (n = "p"),
                        s.isIE && (n = "<" + n + ">"),
                        o && "blockquote" === o.nodeName.toLowerCase()) {
                            if (s.isIE && "<p>" === n)
                                return t.execCommand("outdent", !1, n);
                            if ((s.isFF || s.isEdge) && "p" === n)
                                return i = Array.prototype.slice.call(o.childNodes),
                                i.some(function(e) {
                                    return !s.isBlockContainer(e)
                                }) && t.execCommand("formatBlock", !1, n),
                                t.execCommand("outdent", !1, n)
                        }
                        return t.execCommand("formatBlock", !1, n)
                    },
                    setTargetBlank: function(e, t) {
                        var n, i = t || !1;
                        if ("a" === e.nodeName.toLowerCase())
                            e.target = "_blank",
                            e.rel = "noopener noreferrer";
                        else
                            for (e = e.getElementsByTagName("a"),
                            n = 0; n < e.length; n += 1)
                                !1 !== i && i !== e[n].attributes.href.value || (e[n].target = "_blank",
                                e[n].rel = "noopener noreferrer")
                    },
                    removeTargetBlank: function(e, t) {
                        var n;
                        if ("a" === e.nodeName.toLowerCase())
                            e.removeAttribute("target"),
                            e.removeAttribute("rel");
                        else
                            for (e = e.getElementsByTagName("a"),
                            n = 0; n < e.length; n += 1)
                                t === e[n].attributes.href.value && (e[n].removeAttribute("target"),
                                e[n].removeAttribute("rel"))
                    },
                    addClassToAnchors: function(e, t) {
                        var n, i, o = t.split(" ");
                        if ("a" === e.nodeName.toLowerCase())
                            for (i = 0; i < o.length; i += 1)
                                e.classList.add(o[i]);
                        else {
                            var r = e.getElementsByTagName("a");
                            if (0 === r.length) {
                                var a = s.getClosestTag(e, "a");
                                e = a ? [a] : []
                            } else
                                e = r;
                            for (n = 0; n < e.length; n += 1)
                                for (i = 0; i < o.length; i += 1)
                                    e[n].classList.add(o[i])
                        }
                    },
                    isListItem: function(e) {
                        if (!e)
                            return !1;
                        if ("li" === e.nodeName.toLowerCase())
                            return !0;
                        for (var t = e.parentNode, n = t.nodeName.toLowerCase(); "li" === n || !s.isBlockContainer(t) && "div" !== n; ) {
                            if ("li" === n)
                                return !0;
                            if (!(t = t.parentNode))
                                return !1;
                            n = t.nodeName.toLowerCase()
                        }
                        return !1
                    },
                    cleanListDOM: function(t, n) {
                        if ("li" === n.nodeName.toLowerCase()) {
                            var i = n.parentElement;
                            "p" === i.parentElement.nodeName.toLowerCase() && (s.unwrap(i.parentElement, t),
                            e.selection.moveCursor(t, n.firstChild, n.firstChild.textContent.length))
                        }
                    },
                    splitOffDOMTree: function(e, t, n) {
                        for (var i = t, o = null, r = !n; i !== e; ) {
                            var s, a = i.parentNode, l = a.cloneNode(!1), c = r ? i : a.firstChild;
                            for (o && (r ? l.appendChild(o) : s = o),
                            o = l; c; ) {
                                var u = c.nextSibling;
                                c === i ? (c.hasChildNodes() ? c = c.cloneNode(!1) : c.parentNode.removeChild(c),
                                c.textContent && o.appendChild(c),
                                c = r ? u : null) : (c.parentNode.removeChild(c),
                                (c.hasChildNodes() || c.textContent) && o.appendChild(c),
                                c = u)
                            }
                            s && o.appendChild(s),
                            i = a
                        }
                        return o
                    },
                    moveTextRangeIntoElement: function(e, t, n) {
                        if (!e || !t)
                            return !1;
                        var i = s.findCommonRoot(e, t);
                        if (!i)
                            return !1;
                        if (t === e) {
                            var o = e.parentNode
                              , r = e.nextSibling;
                            return o.removeChild(e),
                            n.appendChild(e),
                            r ? o.insertBefore(n, r) : o.appendChild(n),
                            n.hasChildNodes()
                        }
                        for (var a, l, c, u = [], d = 0; d < i.childNodes.length; d++)
                            if (c = i.childNodes[d],
                            a) {
                                if (s.isDescendant(c, t, !0)) {
                                    l = c;
                                    break
                                }
                                u.push(c)
                            } else
                                s.isDescendant(c, e, !0) && (a = c);
                        var h = l.nextSibling
                          , f = i.ownerDocument.createDocumentFragment();
                        return a === e ? (a.parentNode.removeChild(a),
                        f.appendChild(a)) : f.appendChild(s.splitOffDOMTree(a, e)),
                        u.forEach(function(e) {
                            e.parentNode.removeChild(e),
                            f.appendChild(e)
                        }),
                        l === t ? (l.parentNode.removeChild(l),
                        f.appendChild(l)) : f.appendChild(s.splitOffDOMTree(l, t, !0)),
                        n.appendChild(f),
                        l.parentNode === i ? i.insertBefore(n, l) : h ? i.insertBefore(n, h) : i.appendChild(n),
                        n.hasChildNodes()
                    },
                    depthOfNode: function(e) {
                        for (var t = 0, n = e; null !== n.parentNode; )
                            n = n.parentNode,
                            t++;
                        return t
                    },
                    findCommonRoot: function(e, t) {
                        for (var n = s.depthOfNode(e), i = s.depthOfNode(t), o = e, r = t; n !== i; )
                            n > i ? (o = o.parentNode,
                            n -= 1) : (r = r.parentNode,
                            i -= 1);
                        for (; o !== r; )
                            o = o.parentNode,
                            r = r.parentNode;
                        return o
                    },
                    isElementAtBeginningOfBlock: function(e) {
                        for (var t, n; !s.isBlockContainer(e) && !s.isMediumEditorElement(e); ) {
                            for (n = e; n = n.previousSibling; )
                                if (t = 3 === n.nodeType ? n.nodeValue : n.textContent,
                                t.length > 0)
                                    return !1;
                            e = e.parentNode
                        }
                        return !0
                    },
                    isMediumEditorElement: function(e) {
                        return e && e.getAttribute && !!e.getAttribute("data-medium-editor-element")
                    },
                    getContainerEditorElement: function(e) {
                        return s.traverseUp(e, function(e) {
                            return s.isMediumEditorElement(e)
                        })
                    },
                    isBlockContainer: function(e) {
                        return e && 3 !== e.nodeType && -1 !== s.blockContainerElementNames.indexOf(e.nodeName.toLowerCase())
                    },
                    getClosestBlockContainer: function(e) {
                        return s.traverseUp(e, function(e) {
                            return s.isBlockContainer(e) || s.isMediumEditorElement(e)
                        })
                    },
                    getTopBlockContainer: function(e) {
                        var t = !!s.isBlockContainer(e) && e;
                        return s.traverseUp(e, function(e) {
                            return s.isBlockContainer(e) && (t = e),
                            !(t || !s.isMediumEditorElement(e) || (t = e,
                            0))
                        }),
                        t
                    },
                    getFirstSelectableLeafNode: function(e) {
                        for (; e && e.firstChild; )
                            e = e.firstChild;
                        if (e = s.traverseUp(e, function(e) {
                            return -1 === s.emptyElementNames.indexOf(e.nodeName.toLowerCase())
                        }),
                        "table" === e.nodeName.toLowerCase()) {
                            var t = e.querySelector("th, td");
                            t && (e = t)
                        }
                        return e
                    },
                    getFirstTextNode: function(e) {
                        return s.warn("getFirstTextNode is deprecated and will be removed in version 6.0.0"),
                        s._getFirstTextNode(e)
                    },
                    _getFirstTextNode: function(e) {
                        if (3 === e.nodeType)
                            return e;
                        for (var t = 0; t < e.childNodes.length; t++) {
                            var n = s._getFirstTextNode(e.childNodes[t]);
                            if (null !== n)
                                return n
                        }
                        return null
                    },
                    ensureUrlHasProtocol: function(e) {
                        return -1 === e.indexOf("://") ? "http://" + e : e
                    },
                    warn: function() {
                        void 0 !== t.console && "function" == typeof t.console.warn && t.console.warn.apply(t.console, arguments)
                    },
                    deprecated: function(e, t, n) {
                        var i = e + " is deprecated, please use " + t + " instead.";
                        n && (i += " Will be removed in " + n),
                        s.warn(i)
                    },
                    deprecatedMethod: function(e, t, n, i) {
                        s.deprecated(e, t, i),
                        "function" == typeof this[t] && this[t].apply(this, n)
                    },
                    cleanupAttrs: function(e, t) {
                        t.forEach(function(t) {
                            e.removeAttribute(t)
                        })
                    },
                    cleanupTags: function(e, t) {
                        -1 !== t.indexOf(e.nodeName.toLowerCase()) && e.parentNode.removeChild(e)
                    },
                    unwrapTags: function(t, n) {
                        -1 !== n.indexOf(t.nodeName.toLowerCase()) && e.util.unwrap(t, document)
                    },
                    getClosestTag: function(e, t) {
                        return s.traverseUp(e, function(e) {
                            return e.nodeName.toLowerCase() === t.toLowerCase()
                        })
                    },
                    unwrap: function(e, t) {
                        for (var n = t.createDocumentFragment(), i = Array.prototype.slice.call(e.childNodes), o = 0; o < i.length; o++)
                            n.appendChild(i[o]);
                        n.childNodes.length ? e.parentNode.replaceChild(n, e) : e.parentNode.removeChild(e)
                    },
                    guid: function() {
                        function e() {
                            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                        }
                        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                    }
                };
                e.util = s
            }(window),
            function() {
                var t = function(t) {
                    e.util.extend(this, t)
                };
                t.extend = function(t) {
                    var n, i = this;
                    n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return i.apply(this, arguments)
                    }
                    ,
                    e.util.extend(n, i);
                    var o = function() {
                        this.constructor = n
                    };
                    return o.prototype = i.prototype,
                    n.prototype = new o,
                    t && e.util.extend(n.prototype, t),
                    n
                }
                ,
                t.prototype = {
                    init: function() {},
                    base: void 0,
                    name: void 0,
                    checkState: void 0,
                    destroy: void 0,
                    queryCommandState: void 0,
                    isActive: void 0,
                    isAlreadyApplied: void 0,
                    setActive: void 0,
                    setInactive: void 0,
                    getInteractionElements: void 0,
                    window: void 0,
                    document: void 0,
                    getEditorElements: function() {
                        return this.base.elements
                    },
                    getEditorId: function() {
                        return this.base.id
                    },
                    getEditorOption: function(e) {
                        return this.base.options[e]
                    }
                },
                ["execAction", "on", "off", "subscribe", "trigger"].forEach(function(e) {
                    t.prototype[e] = function() {
                        return this.base[e].apply(this.base, arguments)
                    }
                }),
                e.Extension = t
            }(),
            function() {
                function t(t) {
                    return e.util.isBlockContainer(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
                var n = {
                    findMatchingSelectionParent: function(t, n) {
                        var i, o, r = n.getSelection();
                        return 0 !== r.rangeCount && (i = r.getRangeAt(0),
                        o = i.commonAncestorContainer,
                        e.util.traverseUp(o, t))
                    },
                    getSelectionElement: function(t) {
                        return this.findMatchingSelectionParent(function(t) {
                            return e.util.isMediumEditorElement(t)
                        }, t)
                    },
                    exportSelection: function(e, t) {
                        if (!e)
                            return null;
                        var n = null
                          , i = t.getSelection();
                        if (i.rangeCount > 0) {
                            var o, r = i.getRangeAt(0), s = r.cloneRange();
                            s.selectNodeContents(e),
                            s.setEnd(r.startContainer, r.startOffset),
                            o = s.toString().length,
                            n = {
                                start: o,
                                end: o + r.toString().length
                            },
                            this.doesRangeStartWithImages(r, t) && (n.startsWithImage = !0);
                            var a = this.getTrailingImageCount(e, n, r.endContainer, r.endOffset);
                            if (a && (n.trailingImageCount = a),
                            0 !== o) {
                                var l = this.getIndexRelativeToAdjacentEmptyBlocks(t, e, r.startContainer, r.startOffset);
                                -1 !== l && (n.emptyBlocksIndex = l)
                            }
                        }
                        return n
                    },
                    importSelection: function(e, t, n, i) {
                        if (e && t) {
                            var o = n.createRange();
                            o.setStart(t, 0),
                            o.collapse(!0);
                            var r, s = t, a = [], l = 0, c = !1, u = !1, d = 0, h = !1, f = !1, p = null;
                            for ((i || e.startsWithImage || void 0 !== e.emptyBlocksIndex) && (f = !0); !h && s; )
                                if (s.nodeType > 3)
                                    s = a.pop();
                                else {
                                    if (3 !== s.nodeType || u) {
                                        if (e.trailingImageCount && u && ("img" === s.nodeName.toLowerCase() && d++,
                                        d === e.trailingImageCount)) {
                                            for (var m = 0; s.parentNode.childNodes[m] !== s; )
                                                m++;
                                            o.setEnd(s.parentNode, m + 1),
                                            h = !0
                                        }
                                        if (!h && 1 === s.nodeType)
                                            for (var g = s.childNodes.length - 1; g >= 0; )
                                                a.push(s.childNodes[g]),
                                                g -= 1
                                    } else
                                        r = l + s.length,
                                        !c && e.start >= l && e.start <= r && (f || e.start < r ? (o.setStart(s, e.start - l),
                                        c = !0) : p = s),
                                        c && e.end >= l && e.end <= r && (e.trailingImageCount ? u = !0 : (o.setEnd(s, e.end - l),
                                        h = !0)),
                                        l = r;
                                    h || (s = a.pop())
                                }
                            !c && p && (o.setStart(p, p.length),
                            o.setEnd(p, p.length)),
                            void 0 !== e.emptyBlocksIndex && (o = this.importSelectionMoveCursorPastBlocks(n, t, e.emptyBlocksIndex, o)),
                            i && (o = this.importSelectionMoveCursorPastAnchor(e, o)),
                            this.selectRange(n, o)
                        }
                    },
                    importSelectionMoveCursorPastAnchor: function(t, n) {
                        var i = function(e) {
                            return "a" === e.nodeName.toLowerCase()
                        };
                        if (t.start === t.end && 3 === n.startContainer.nodeType && n.startOffset === n.startContainer.nodeValue.length && e.util.traverseUp(n.startContainer, i)) {
                            for (var o = n.startContainer, r = n.startContainer.parentNode; null !== r && "a" !== r.nodeName.toLowerCase(); )
                                r.childNodes[r.childNodes.length - 1] !== o ? r = null : (o = r,
                                r = r.parentNode);
                            if (null !== r && "a" === r.nodeName.toLowerCase()) {
                                for (var s = null, a = 0; null === s && a < r.parentNode.childNodes.length; a++)
                                    r.parentNode.childNodes[a] === r && (s = a);
                                n.setStart(r.parentNode, s + 1),
                                n.collapse(!0)
                            }
                        }
                        return n
                    },
                    importSelectionMoveCursorPastBlocks: function(n, i, o, r) {
                        var s, a, l = n.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, t, !1), c = r.startContainer, u = 0;
                        for (o = o || 1,
                        s = 3 === c.nodeType && e.util.isBlockContainer(c.previousSibling) ? c.previousSibling : e.util.getClosestBlockContainer(c); l.nextNode(); )
                            if (a) {
                                if (a = l.currentNode,
                                ++u === o)
                                    break;
                                if (a.textContent.length > 0)
                                    break
                            } else
                                s === l.currentNode && (a = l.currentNode);
                        return a || (a = s),
                        r.setStart(e.util.getFirstSelectableLeafNode(a), 0),
                        r
                    },
                    getIndexRelativeToAdjacentEmptyBlocks: function(n, i, o, r) {
                        if (o.textContent.length > 0 && r > 0)
                            return -1;
                        var s = o;
                        if (3 !== s.nodeType && (s = o.childNodes[r]),
                        s) {
                            if (!e.util.isElementAtBeginningOfBlock(s))
                                return -1;
                            var a = e.util.findPreviousSibling(s);
                            if (!a)
                                return -1;
                            if (a.nodeValue)
                                return -1
                        }
                        for (var l = e.util.getClosestBlockContainer(o), c = n.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, t, !1), u = 0; c.nextNode(); ) {
                            var d = "" === c.currentNode.textContent;
                            if ((d || u > 0) && (u += 1),
                            c.currentNode === l)
                                return u;
                            d || (u = 0)
                        }
                        return u
                    },
                    doesRangeStartWithImages: function(e, t) {
                        if (0 !== e.startOffset || 1 !== e.startContainer.nodeType)
                            return !1;
                        if ("img" === e.startContainer.nodeName.toLowerCase())
                            return !0;
                        var n = e.startContainer.querySelector("img");
                        if (!n)
                            return !1;
                        for (var i = t.createTreeWalker(e.startContainer, NodeFilter.SHOW_ALL, null, !1); i.nextNode(); ) {
                            var o = i.currentNode;
                            if (o === n)
                                break;
                            if (o.nodeValue)
                                return !1
                        }
                        return !0
                    },
                    getTrailingImageCount: function(e, t, n, i) {
                        if (0 === i || 1 !== n.nodeType)
                            return 0;
                        if ("img" !== n.nodeName.toLowerCase() && !n.querySelector("img"))
                            return 0;
                        for (var o = n.childNodes[i - 1]; o.hasChildNodes(); )
                            o = o.lastChild;
                        for (var r, s = e, a = [], l = 0, c = !1, u = !1, d = !1, h = 0; !d && s; )
                            if (s.nodeType > 3)
                                s = a.pop();
                            else {
                                if (3 !== s.nodeType || u) {
                                    if ("img" === s.nodeName.toLowerCase() && h++,
                                    s === o)
                                        d = !0;
                                    else if (1 === s.nodeType)
                                        for (var f = s.childNodes.length - 1; f >= 0; )
                                            a.push(s.childNodes[f]),
                                            f -= 1
                                } else
                                    h = 0,
                                    r = l + s.length,
                                    !c && t.start >= l && t.start <= r && (c = !0),
                                    c && t.end >= l && t.end <= r && (u = !0),
                                    l = r;
                                d || (s = a.pop())
                            }
                        return h
                    },
                    selectionContainsContent: function(e) {
                        var t = e.getSelection();
                        if (!t || t.isCollapsed || !t.rangeCount)
                            return !1;
                        if ("" !== t.toString().trim())
                            return !0;
                        var n = this.getSelectedParentElement(t.getRangeAt(0));
                        return !(!n || !("img" === n.nodeName.toLowerCase() || 1 === n.nodeType && n.querySelector("img")))
                    },
                    selectionInContentEditableFalse: function(e) {
                        var t, n = this.findMatchingSelectionParent(function(e) {
                            var n = e && e.getAttribute("contenteditable");
                            return "true" === n && (t = !0),
                            "#text" !== e.nodeName && "false" === n
                        }, e);
                        return !t && n
                    },
                    getSelectionHtml: function(e) {
                        var t, n, i, o = "", r = e.getSelection();
                        if (r.rangeCount) {
                            for (i = e.createElement("div"),
                            t = 0,
                            n = r.rangeCount; t < n; t += 1)
                                i.appendChild(r.getRangeAt(t).cloneContents());
                            o = i.innerHTML
                        }
                        return o
                    },
                    getCaretOffsets: function(e, t) {
                        var n, i;
                        return t || (t = window.getSelection().getRangeAt(0)),
                        n = t.cloneRange(),
                        i = t.cloneRange(),
                        n.selectNodeContents(e),
                        n.setEnd(t.endContainer, t.endOffset),
                        i.selectNodeContents(e),
                        i.setStart(t.endContainer, t.endOffset),
                        {
                            left: n.toString().length,
                            right: i.toString().length
                        }
                    },
                    rangeSelectsSingleNode: function(e) {
                        var t = e.startContainer;
                        return t === e.endContainer && t.hasChildNodes() && e.endOffset === e.startOffset + 1
                    },
                    getSelectedParentElement: function(e) {
                        return e ? this.rangeSelectsSingleNode(e) && 3 !== e.startContainer.childNodes[e.startOffset].nodeType ? e.startContainer.childNodes[e.startOffset] : 3 === e.startContainer.nodeType ? e.startContainer.parentNode : e.startContainer : null
                    },
                    getSelectedElements: function(e) {
                        var t, n, i, o = e.getSelection();
                        if (!o.rangeCount || o.isCollapsed || !o.getRangeAt(0).commonAncestorContainer)
                            return [];
                        if (t = o.getRangeAt(0),
                        3 === t.commonAncestorContainer.nodeType) {
                            for (n = [],
                            i = t.commonAncestorContainer; i.parentNode && 1 === i.parentNode.childNodes.length; )
                                n.push(i.parentNode),
                                i = i.parentNode;
                            return n
                        }
                        return [].filter.call(t.commonAncestorContainer.getElementsByTagName("*"), function(e) {
                            return "function" != typeof o.containsNode || o.containsNode(e, !0)
                        })
                    },
                    selectNode: function(e, t) {
                        var n = t.createRange();
                        n.selectNodeContents(e),
                        this.selectRange(t, n)
                    },
                    select: function(e, t, n, i, o) {
                        var r = e.createRange();
                        return r.setStart(t, n),
                        i ? r.setEnd(i, o) : r.collapse(!0),
                        this.selectRange(e, r),
                        r
                    },
                    clearSelection: function(e, t) {
                        t ? e.getSelection().collapseToStart() : e.getSelection().collapseToEnd()
                    },
                    moveCursor: function(e, t, n) {
                        this.select(e, t, n)
                    },
                    getSelectionRange: function(e) {
                        var t = e.getSelection();
                        return 0 === t.rangeCount ? null : t.getRangeAt(0)
                    },
                    selectRange: function(e, t) {
                        var n = e.getSelection();
                        n.removeAllRanges(),
                        n.addRange(t)
                    },
                    getSelectionStart: function(e) {
                        var t = e.getSelection().anchorNode;
                        return t && 3 === t.nodeType ? t.parentNode : t
                    }
                };
                e.selection = n
            }(),
            function() {
                function t(t, n) {
                    return !!t && t.some(function(t) {
                        if ("function" != typeof t.getInteractionElements)
                            return !1;
                        var i = t.getInteractionElements();
                        return !!i && (Array.isArray(i) || (i = [i]),
                        i.some(function(t) {
                            return e.util.isDescendant(t, n, !0)
                        }))
                    })
                }
                var n = function(e) {
                    this.base = e,
                    this.options = this.base.options,
                    this.events = [],
                    this.disabledEvents = {},
                    this.customEvents = {},
                    this.listeners = {}
                };
                n.prototype = {
                    InputEventOnContenteditableSupported: !e.util.isIE && !e.util.isEdge,
                    attachDOMEvent: function(t, n, i, o) {
                        var r = this.base.options.contentWindow
                          , s = this.base.options.ownerDocument;
                        t = e.util.isElement(t) || [r, s].indexOf(t) > -1 ? [t] : t,
                        Array.prototype.forEach.call(t, function(e) {
                            e.addEventListener(n, i, o),
                            this.events.push([e, n, i, o])
                        }
                        .bind(this))
                    },
                    detachDOMEvent: function(t, n, i, o) {
                        var r, s, a = this.base.options.contentWindow, l = this.base.options.ownerDocument;
                        t && (t = e.util.isElement(t) || [a, l].indexOf(t) > -1 ? [t] : t,
                        Array.prototype.forEach.call(t, function(e) {
                            -1 !== (r = this.indexOfListener(e, n, i, o)) && (s = this.events.splice(r, 1)[0],
                            s[0].removeEventListener(s[1], s[2], s[3]))
                        }
                        .bind(this)))
                    },
                    indexOfListener: function(e, t, n, i) {
                        var o, r, s;
                        for (o = 0,
                        r = this.events.length; o < r; o += 1)
                            if (s = this.events[o],
                            s[0] === e && s[1] === t && s[2] === n && s[3] === i)
                                return o;
                        return -1
                    },
                    detachAllDOMEvents: function() {
                        for (var e = this.events.pop(); e; )
                            e[0].removeEventListener(e[1], e[2], e[3]),
                            e = this.events.pop()
                    },
                    detachAllEventsFromElement: function(e) {
                        for (var t = this.events.filter(function(t) {
                            return t && t[0].getAttribute && t[0].getAttribute("medium-editor-index") === e.getAttribute("medium-editor-index")
                        }), n = 0, i = t.length; n < i; n++) {
                            var o = t[n];
                            this.detachDOMEvent(o[0], o[1], o[2], o[3])
                        }
                    },
                    attachAllEventsToElement: function(e) {
                        this.listeners.editableInput && (this.contentCache[e.getAttribute("medium-editor-index")] = e.innerHTML),
                        this.eventsCache && this.eventsCache.forEach(function(t) {
                            this.attachDOMEvent(e, t.name, t.handler.bind(this))
                        }, this)
                    },
                    enableCustomEvent: function(e) {
                        void 0 !== this.disabledEvents[e] && delete this.disabledEvents[e]
                    },
                    disableCustomEvent: function(e) {
                        this.disabledEvents[e] = !0
                    },
                    attachCustomEvent: function(e, t) {
                        this.setupListener(e),
                        this.customEvents[e] || (this.customEvents[e] = []),
                        this.customEvents[e].push(t)
                    },
                    detachCustomEvent: function(e, t) {
                        var n = this.indexOfCustomListener(e, t);
                        -1 !== n && this.customEvents[e].splice(n, 1)
                    },
                    indexOfCustomListener: function(e, t) {
                        return this.customEvents[e] && this.customEvents[e].length ? this.customEvents[e].indexOf(t) : -1
                    },
                    detachAllCustomEvents: function() {
                        this.customEvents = {}
                    },
                    triggerCustomEvent: function(e, t, n) {
                        this.customEvents[e] && !this.disabledEvents[e] && this.customEvents[e].forEach(function(e) {
                            e(t, n)
                        })
                    },
                    destroy: function() {
                        this.detachAllDOMEvents(),
                        this.detachAllCustomEvents(),
                        this.detachExecCommand(),
                        this.base.elements && this.base.elements.forEach(function(e) {
                            e.removeAttribute("data-medium-focused")
                        })
                    },
                    attachToExecCommand: function() {
                        this.execCommandListener || (this.execCommandListener = function(e) {
                            this.handleDocumentExecCommand(e)
                        }
                        .bind(this),
                        this.wrapExecCommand(),
                        this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener))
                    },
                    detachExecCommand: function() {
                        var e = this.options.ownerDocument;
                        if (this.execCommandListener && e.execCommand.listeners) {
                            var t = e.execCommand.listeners.indexOf(this.execCommandListener);
                            -1 !== t && e.execCommand.listeners.splice(t, 1),
                            e.execCommand.listeners.length || this.unwrapExecCommand()
                        }
                    },
                    wrapExecCommand: function() {
                        var e = this.options.ownerDocument;
                        if (!e.execCommand.listeners) {
                            var t = function(t, n) {
                                e.execCommand.listeners && e.execCommand.listeners.forEach(function(e) {
                                    e({
                                        command: t[0],
                                        value: t[2],
                                        args: t,
                                        result: n
                                    })
                                })
                            }
                              , n = function() {
                                var n = e.execCommand.orig.apply(this, arguments);
                                if (!e.execCommand.listeners)
                                    return n;
                                var i = Array.prototype.slice.call(arguments);
                                return t(i, n),
                                n
                            };
                            n.orig = e.execCommand,
                            n.listeners = [],
                            n.callListeners = t,
                            e.execCommand = n
                        }
                    },
                    unwrapExecCommand: function() {
                        var e = this.options.ownerDocument;
                        e.execCommand.orig && (e.execCommand = e.execCommand.orig)
                    },
                    setupListener: function(e) {
                        if (!this.listeners[e]) {
                            switch (e) {
                            case "externalInteraction":
                                this.attachDOMEvent(this.options.ownerDocument.body, "mousedown", this.handleBodyMousedown.bind(this), !0),
                                this.attachDOMEvent(this.options.ownerDocument.body, "click", this.handleBodyClick.bind(this), !0),
                                this.attachDOMEvent(this.options.ownerDocument.body, "focus", this.handleBodyFocus.bind(this), !0);
                                break;
                            case "blur":
                            case "focus":
                                this.setupListener("externalInteraction");
                                break;
                            case "editableInput":
                                this.contentCache = {},
                                this.base.elements.forEach(function(e) {
                                    this.contentCache[e.getAttribute("medium-editor-index")] = e.innerHTML
                                }, this),
                                this.InputEventOnContenteditableSupported && this.attachToEachElement("input", this.handleInput),
                                this.InputEventOnContenteditableSupported || (this.setupListener("editableKeypress"),
                                this.keypressUpdateInput = !0,
                                this.attachDOMEvent(document, "selectionchange", this.handleDocumentSelectionChange.bind(this)),
                                this.attachToExecCommand());
                                break;
                            case "editableClick":
                                this.attachToEachElement("click", this.handleClick);
                                break;
                            case "editableBlur":
                                this.attachToEachElement("blur", this.handleBlur);
                                break;
                            case "editableKeypress":
                                this.attachToEachElement("keypress", this.handleKeypress);
                                break;
                            case "editableKeyup":
                                this.attachToEachElement("keyup", this.handleKeyup);
                                break;
                            case "editableKeydown":
                                this.attachToEachElement("keydown", this.handleKeydown);
                                break;
                            case "editableKeydownSpace":
                            case "editableKeydownEnter":
                            case "editableKeydownTab":
                            case "editableKeydownDelete":
                                this.setupListener("editableKeydown");
                                break;
                            case "editableMouseover":
                                this.attachToEachElement("mouseover", this.handleMouseover);
                                break;
                            case "editableDrag":
                                this.attachToEachElement("dragover", this.handleDragging),
                                this.attachToEachElement("dragleave", this.handleDragging);
                                break;
                            case "editableDrop":
                                this.attachToEachElement("drop", this.handleDrop);
                                break;
                            case "editablePaste":
                                this.attachToEachElement("paste", this.handlePaste)
                            }
                            this.listeners[e] = !0
                        }
                    },
                    attachToEachElement: function(e, t) {
                        this.eventsCache || (this.eventsCache = []),
                        this.base.elements.forEach(function(n) {
                            this.attachDOMEvent(n, e, t.bind(this))
                        }, this),
                        this.eventsCache.push({
                            name: e,
                            handler: t
                        })
                    },
                    cleanupElement: function(e) {
                        var t = e.getAttribute("medium-editor-index");
                        t && (this.detachAllEventsFromElement(e),
                        this.contentCache && delete this.contentCache[t])
                    },
                    focusElement: function(e) {
                        e.focus(),
                        this.updateFocus(e, {
                            target: e,
                            type: "focus"
                        })
                    },
                    updateFocus: function(n, i) {
                        var o, r = this.base.getFocusedElement();
                        r && "click" === i.type && this.lastMousedownTarget && (e.util.isDescendant(r, this.lastMousedownTarget, !0) || t(this.base.extensions, this.lastMousedownTarget)) && (o = r),
                        o || this.base.elements.some(function(t) {
                            return !o && e.util.isDescendant(t, n, !0) && (o = t),
                            !!o
                        }, this);
                        var s = !e.util.isDescendant(r, n, !0) && !t(this.base.extensions, n);
                        o !== r && (r && s && (r.removeAttribute("data-medium-focused"),
                        this.triggerCustomEvent("blur", i, r)),
                        o && (o.setAttribute("data-medium-focused", !0),
                        this.triggerCustomEvent("focus", i, o))),
                        s && this.triggerCustomEvent("externalInteraction", i)
                    },
                    updateInput: function(e, t) {
                        if (this.contentCache) {
                            var n = e.getAttribute("medium-editor-index")
                              , i = e.innerHTML;
                            i !== this.contentCache[n] && this.triggerCustomEvent("editableInput", t, e),
                            this.contentCache[n] = i
                        }
                    },
                    handleDocumentSelectionChange: function(t) {
                        if (t.currentTarget && t.currentTarget.activeElement) {
                            var n, i = t.currentTarget.activeElement;
                            this.base.elements.some(function(t) {
                                return !!e.util.isDescendant(t, i, !0) && (n = t,
                                !0)
                            }, this),
                            n && this.updateInput(n, {
                                target: i,
                                currentTarget: n
                            })
                        }
                    },
                    handleDocumentExecCommand: function() {
                        var e = this.base.getFocusedElement();
                        e && this.updateInput(e, {
                            target: e,
                            currentTarget: e
                        })
                    },
                    handleBodyClick: function(e) {
                        this.updateFocus(e.target, e)
                    },
                    handleBodyFocus: function(e) {
                        this.updateFocus(e.target, e)
                    },
                    handleBodyMousedown: function(e) {
                        this.lastMousedownTarget = e.target
                    },
                    handleInput: function(e) {
                        this.updateInput(e.currentTarget, e)
                    },
                    handleClick: function(e) {
                        this.triggerCustomEvent("editableClick", e, e.currentTarget)
                    },
                    handleBlur: function(e) {
                        this.triggerCustomEvent("editableBlur", e, e.currentTarget)
                    },
                    handleKeypress: function(e) {
                        if (this.triggerCustomEvent("editableKeypress", e, e.currentTarget),
                        this.keypressUpdateInput) {
                            var t = {
                                target: e.target,
                                currentTarget: e.currentTarget
                            };
                            setTimeout(function() {
                                this.updateInput(t.currentTarget, t)
                            }
                            .bind(this), 0)
                        }
                    },
                    handleKeyup: function(e) {
                        this.triggerCustomEvent("editableKeyup", e, e.currentTarget)
                    },
                    handleMouseover: function(e) {
                        this.triggerCustomEvent("editableMouseover", e, e.currentTarget)
                    },
                    handleDragging: function(e) {
                        this.triggerCustomEvent("editableDrag", e, e.currentTarget)
                    },
                    handleDrop: function(e) {
                        this.triggerCustomEvent("editableDrop", e, e.currentTarget)
                    },
                    handlePaste: function(e) {
                        this.triggerCustomEvent("editablePaste", e, e.currentTarget)
                    },
                    handleKeydown: function(t) {
                        return this.triggerCustomEvent("editableKeydown", t, t.currentTarget),
                        e.util.isKey(t, e.util.keyCode.SPACE) ? this.triggerCustomEvent("editableKeydownSpace", t, t.currentTarget) : e.util.isKey(t, e.util.keyCode.ENTER) || t.ctrlKey && e.util.isKey(t, e.util.keyCode.M) ? this.triggerCustomEvent("editableKeydownEnter", t, t.currentTarget) : e.util.isKey(t, e.util.keyCode.TAB) ? this.triggerCustomEvent("editableKeydownTab", t, t.currentTarget) : e.util.isKey(t, [e.util.keyCode.DELETE, e.util.keyCode.BACKSPACE]) ? this.triggerCustomEvent("editableKeydownDelete", t, t.currentTarget) : void 0
                    }
                },
                e.Events = n
            }(),
            function() {
                var t = e.Extension.extend({
                    action: void 0,
                    aria: void 0,
                    tagNames: void 0,
                    style: void 0,
                    useQueryState: void 0,
                    contentDefault: void 0,
                    contentFA: void 0,
                    classList: void 0,
                    attrs: void 0,
                    constructor: function(n) {
                        t.isBuiltInButton(n) ? e.Extension.call(this, this.defaults[n]) : e.Extension.call(this, n)
                    },
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.button = this.createButton(),
                        this.on(this.button, "click", this.handleClick.bind(this))
                    },
                    getButton: function() {
                        return this.button
                    },
                    getAction: function() {
                        return "function" == typeof this.action ? this.action(this.base.options) : this.action
                    },
                    getAria: function() {
                        return "function" == typeof this.aria ? this.aria(this.base.options) : this.aria
                    },
                    getTagNames: function() {
                        return "function" == typeof this.tagNames ? this.tagNames(this.base.options) : this.tagNames
                    },
                    createButton: function() {
                        var e = this.document.createElement("button")
                          , t = this.contentDefault
                          , n = this.getAria()
                          , i = this.getEditorOption("buttonLabels");
                        return e.classList.add("medium-editor-action"),
                        e.classList.add("medium-editor-action-" + this.name),
                        this.classList && this.classList.forEach(function(t) {
                            e.classList.add(t)
                        }),
                        e.setAttribute("data-action", this.getAction()),
                        n && (e.setAttribute("title", n),
                        e.setAttribute("aria-label", n)),
                        this.attrs && Object.keys(this.attrs).forEach(function(t) {
                            e.setAttribute(t, this.attrs[t])
                        }, this),
                        "fontawesome" === i && this.contentFA && (t = this.contentFA),
                        e.innerHTML = t,
                        e
                    },
                    handleClick: function(e) {
                        e.preventDefault(),
                        e.stopPropagation();
                        var t = this.getAction();
                        t && this.execAction(t)
                    },
                    isActive: function() {
                        return this.button.classList.contains(this.getEditorOption("activeButtonClass"))
                    },
                    setInactive: function() {
                        this.button.classList.remove(this.getEditorOption("activeButtonClass")),
                        delete this.knownState
                    },
                    setActive: function() {
                        this.button.classList.add(this.getEditorOption("activeButtonClass")),
                        delete this.knownState
                    },
                    queryCommandState: function() {
                        var e = null;
                        return this.useQueryState && (e = this.base.queryCommandState(this.getAction())),
                        e
                    },
                    isAlreadyApplied: function(e) {
                        var t, n, i = !1, o = this.getTagNames();
                        return !1 === this.knownState || !0 === this.knownState ? this.knownState : (o && o.length > 0 && (i = -1 !== o.indexOf(e.nodeName.toLowerCase())),
                        !i && this.style && (t = this.style.value.split("|"),
                        n = this.window.getComputedStyle(e, null).getPropertyValue(this.style.prop),
                        t.forEach(function(e) {
                            this.knownState || ((i = -1 !== n.indexOf(e)) || "text-decoration" !== this.style.prop) && (this.knownState = i)
                        }, this)),
                        i)
                    }
                });
                t.isBuiltInButton = function(t) {
                    return "string" == typeof t && e.extensions.button.prototype.defaults.hasOwnProperty(t)
                }
                ,
                e.extensions.button = t
            }(),
            function() {
                e.extensions.button.prototype.defaults = {
                    bold: {
                        name: "bold",
                        action: "bold",
                        aria: "bold",
                        tagNames: ["b", "strong"],
                        style: {
                            prop: "font-weight",
                            value: "700|bold"
                        },
                        useQueryState: !0,
                        contentDefault: "<b>B</b>",
                        contentFA: '<i class="fa fa-bold"></i>'
                    },
                    italic: {
                        name: "italic",
                        action: "italic",
                        aria: "italic",
                        tagNames: ["i", "em"],
                        style: {
                            prop: "font-style",
                            value: "italic"
                        },
                        useQueryState: !0,
                        contentDefault: "<b><i>I</i></b>",
                        contentFA: '<i class="fa fa-italic"></i>'
                    },
                    underline: {
                        name: "underline",
                        action: "underline",
                        aria: "underline",
                        tagNames: ["u"],
                        style: {
                            prop: "text-decoration",
                            value: "underline"
                        },
                        useQueryState: !0,
                        contentDefault: "<b><u>U</u></b>",
                        contentFA: '<i class="fa fa-underline"></i>'
                    },
                    strikethrough: {
                        name: "strikethrough",
                        action: "strikethrough",
                        aria: "strike through",
                        tagNames: ["strike"],
                        style: {
                            prop: "text-decoration",
                            value: "line-through"
                        },
                        useQueryState: !0,
                        contentDefault: "<s>A</s>",
                        contentFA: '<i class="fa fa-strikethrough"></i>'
                    },
                    superscript: {
                        name: "superscript",
                        action: "superscript",
                        aria: "superscript",
                        tagNames: ["sup"],
                        contentDefault: "<b>x<sup>1</sup></b>",
                        contentFA: '<i class="fa fa-superscript"></i>'
                    },
                    subscript: {
                        name: "subscript",
                        action: "subscript",
                        aria: "subscript",
                        tagNames: ["sub"],
                        contentDefault: "<b>x<sub>1</sub></b>",
                        contentFA: '<i class="fa fa-subscript"></i>'
                    },
                    image: {
                        name: "image",
                        action: "image",
                        aria: "image",
                        tagNames: ["img"],
                        contentDefault: "<b>image</b>",
                        contentFA: '<i class="fa fa-picture-o"></i>'
                    },
                    html: {
                        name: "html",
                        action: "html",
                        aria: "evaluate html",
                        tagNames: ["iframe", "object"],
                        contentDefault: "<b>html</b>",
                        contentFA: '<i class="fa fa-code"></i>'
                    },
                    orderedlist: {
                        name: "orderedlist",
                        action: "insertorderedlist",
                        aria: "ordered list",
                        tagNames: ["ol"],
                        useQueryState: !0,
                        contentDefault: "<b>1.</b>",
                        contentFA: '<i class="fa fa-list-ol"></i>'
                    },
                    unorderedlist: {
                        name: "unorderedlist",
                        action: "insertunorderedlist",
                        aria: "unordered list",
                        tagNames: ["ul"],
                        useQueryState: !0,
                        contentDefault: "<b>&bull;</b>",
                        contentFA: '<i class="fa fa-list-ul"></i>'
                    },
                    indent: {
                        name: "indent",
                        action: "indent",
                        aria: "indent",
                        tagNames: [],
                        contentDefault: "<b>&rarr;</b>",
                        contentFA: '<i class="fa fa-indent"></i>'
                    },
                    outdent: {
                        name: "outdent",
                        action: "outdent",
                        aria: "outdent",
                        tagNames: [],
                        contentDefault: "<b>&larr;</b>",
                        contentFA: '<i class="fa fa-outdent"></i>'
                    },
                    justifyCenter: {
                        name: "justifyCenter",
                        action: "justifyCenter",
                        aria: "center justify",
                        tagNames: [],
                        style: {
                            prop: "text-align",
                            value: "center"
                        },
                        contentDefault: "<b>C</b>",
                        contentFA: '<i class="fa fa-align-center"></i>'
                    },
                    justifyFull: {
                        name: "justifyFull",
                        action: "justifyFull",
                        aria: "full justify",
                        tagNames: [],
                        style: {
                            prop: "text-align",
                            value: "justify"
                        },
                        contentDefault: "<b>J</b>",
                        contentFA: '<i class="fa fa-align-justify"></i>'
                    },
                    justifyLeft: {
                        name: "justifyLeft",
                        action: "justifyLeft",
                        aria: "left justify",
                        tagNames: [],
                        style: {
                            prop: "text-align",
                            value: "left"
                        },
                        contentDefault: "<b>L</b>",
                        contentFA: '<i class="fa fa-align-left"></i>'
                    },
                    justifyRight: {
                        name: "justifyRight",
                        action: "justifyRight",
                        aria: "right justify",
                        tagNames: [],
                        style: {
                            prop: "text-align",
                            value: "right"
                        },
                        contentDefault: "<b>R</b>",
                        contentFA: '<i class="fa fa-align-right"></i>'
                    },
                    removeFormat: {
                        name: "removeFormat",
                        aria: "remove formatting",
                        action: "removeFormat",
                        contentDefault: "<b>X</b>",
                        contentFA: '<i class="fa fa-eraser"></i>'
                    },
                    quote: {
                        name: "quote",
                        action: "append-blockquote",
                        aria: "blockquote",
                        tagNames: ["blockquote"],
                        contentDefault: "<b>&ldquo;</b>",
                        contentFA: '<i class="fa fa-quote-right"></i>'
                    },
                    pre: {
                        name: "pre",
                        action: "append-pre",
                        aria: "preformatted text",
                        tagNames: ["pre"],
                        contentDefault: "<b>0101</b>",
                        contentFA: '<i class="fa fa-code fa-lg"></i>'
                    },
                    h1: {
                        name: "h1",
                        action: "append-h1",
                        aria: "header type one",
                        tagNames: ["h1"],
                        contentDefault: "<b>H1</b>",
                        contentFA: '<i class="fa fa-header"><sup>1</sup>'
                    },
                    h2: {
                        name: "h2",
                        action: "append-h2",
                        aria: "header type two",
                        tagNames: ["h2"],
                        contentDefault: "<b>H2</b>",
                        contentFA: '<i class="fa fa-header"><sup>2</sup>'
                    },
                    h3: {
                        name: "h3",
                        action: "append-h3",
                        aria: "header type three",
                        tagNames: ["h3"],
                        contentDefault: "<b>H3</b>",
                        contentFA: '<i class="fa fa-header"><sup>3</sup>'
                    },
                    h4: {
                        name: "h4",
                        action: "append-h4",
                        aria: "header type four",
                        tagNames: ["h4"],
                        contentDefault: "<b>H4</b>",
                        contentFA: '<i class="fa fa-header"><sup>4</sup>'
                    },
                    h5: {
                        name: "h5",
                        action: "append-h5",
                        aria: "header type five",
                        tagNames: ["h5"],
                        contentDefault: "<b>H5</b>",
                        contentFA: '<i class="fa fa-header"><sup>5</sup>'
                    },
                    h6: {
                        name: "h6",
                        action: "append-h6",
                        aria: "header type six",
                        tagNames: ["h6"],
                        contentDefault: "<b>H6</b>",
                        contentFA: '<i class="fa fa-header"><sup>6</sup>'
                    }
                }
            }(),
            function() {
                var t = e.extensions.button.extend({
                    init: function() {
                        e.extensions.button.prototype.init.apply(this, arguments)
                    },
                    formSaveLabel: "&#10003;",
                    formCloseLabel: "&times;",
                    activeClass: "medium-editor-toolbar-form-active",
                    hasForm: !0,
                    getForm: function() {},
                    isDisplayed: function() {
                        return !!this.hasForm && this.getForm().classList.contains(this.activeClass)
                    },
                    showForm: function() {
                        this.hasForm && this.getForm().classList.add(this.activeClass)
                    },
                    hideForm: function() {
                        this.hasForm && this.getForm().classList.remove(this.activeClass)
                    },
                    showToolbarDefaultActions: function() {
                        var e = this.base.getExtensionByName("toolbar");
                        e && e.showToolbarDefaultActions()
                    },
                    hideToolbarDefaultActions: function() {
                        var e = this.base.getExtensionByName("toolbar");
                        e && e.hideToolbarDefaultActions()
                    },
                    setToolbarPosition: function() {
                        var e = this.base.getExtensionByName("toolbar");
                        e && e.setToolbarPosition()
                    }
                });
                e.extensions.form = t
            }(),
            function() {
                var t = e.extensions.form.extend({
                    customClassOption: null,
                    customClassOptionText: "Button",
                    linkValidation: !1,
                    placeholderText: "Paste or type a link",
                    targetCheckbox: !1,
                    targetCheckboxText: "Open in new window",
                    name: "anchor",
                    action: "createLink",
                    aria: "link",
                    tagNames: ["a"],
                    contentDefault: "<b>#</b>",
                    contentFA: '<i class="fa fa-link"></i>',
                    init: function() {
                        e.extensions.form.prototype.init.apply(this, arguments),
                        this.subscribe("editableKeydown", this.handleKeydown.bind(this))
                    },
                    handleClick: function(t) {
                        t.preventDefault(),
                        t.stopPropagation();
                        var n = e.selection.getSelectionRange(this.document);
                        return "a" === n.startContainer.nodeName.toLowerCase() || "a" === n.endContainer.nodeName.toLowerCase() || e.util.getClosestTag(e.selection.getSelectedParentElement(n), "a") ? this.execAction("unlink") : (this.isDisplayed() || this.showForm(),
                        !1)
                    },
                    handleKeydown: function(t) {
                        e.util.isKey(t, e.util.keyCode.K) && e.util.isMetaCtrlKey(t) && !t.shiftKey && this.handleClick(t)
                    },
                    getForm: function() {
                        return this.form || (this.form = this.createForm()),
                        this.form
                    },
                    getTemplate: function() {
                        var e = ['<input type="text" class="medium-editor-toolbar-input" placeholder="', this.placeholderText, '">'];
                        return e.push('<a href="#" class="medium-editor-toolbar-save">', "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : this.formSaveLabel, "</a>"),
                        e.push('<a href="#" class="medium-editor-toolbar-close">', "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : this.formCloseLabel, "</a>"),
                        this.targetCheckbox && e.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-target" id="medium-editor-toolbar-anchor-target-field-' + this.getEditorId() + '">', '<label for="medium-editor-toolbar-anchor-target-field-' + this.getEditorId() + '">', this.targetCheckboxText, "</label>", "</div>"),
                        this.customClassOption && e.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-button">', "<label>", this.customClassOptionText, "</label>", "</div>"),
                        e.join("")
                    },
                    isDisplayed: function() {
                        return e.extensions.form.prototype.isDisplayed.apply(this)
                    },
                    hideForm: function() {
                        e.extensions.form.prototype.hideForm.apply(this),
                        this.getInput().value = ""
                    },
                    showForm: function(t) {
                        var n = this.getInput()
                          , i = this.getAnchorTargetCheckbox()
                          , o = this.getAnchorButtonCheckbox();
                        if (t = t || {
                            value: ""
                        },
                        "string" == typeof t && (t = {
                            value: t
                        }),
                        this.base.saveSelection(),
                        this.hideToolbarDefaultActions(),
                        e.extensions.form.prototype.showForm.apply(this),
                        this.setToolbarPosition(),
                        n.value = t.value,
                        n.focus(),
                        i && (i.checked = "_blank" === t.target),
                        o) {
                            var r = t.buttonClass ? t.buttonClass.split(" ") : [];
                            o.checked = -1 !== r.indexOf(this.customClassOption)
                        }
                    },
                    destroy: function() {
                        if (!this.form)
                            return !1;
                        this.form.parentNode && this.form.parentNode.removeChild(this.form),
                        delete this.form
                    },
                    getFormOpts: function() {
                        var e = this.getAnchorTargetCheckbox()
                          , t = this.getAnchorButtonCheckbox()
                          , n = {
                            value: this.getInput().value.trim()
                        };
                        return this.linkValidation && (n.value = this.checkLinkFormat(n.value)),
                        n.target = "_self",
                        e && e.checked && (n.target = "_blank"),
                        t && t.checked && (n.buttonClass = this.customClassOption),
                        n
                    },
                    doFormSave: function() {
                        var e = this.getFormOpts();
                        this.completeFormSave(e)
                    },
                    completeFormSave: function(e) {
                        this.base.restoreSelection(),
                        this.execAction(this.action, e),
                        this.base.checkSelection()
                    },
                    ensureEncodedUri: function(e) {
                        return e === decodeURI(e) ? encodeURI(e) : e
                    },
                    ensureEncodedUriComponent: function(e) {
                        return e === decodeURIComponent(e) ? encodeURIComponent(e) : e
                    },
                    ensureEncodedParam: function(e) {
                        var t = e.split("=")
                          , n = t[0]
                          , i = t[1];
                        return n + (void 0 === i ? "" : "=" + this.ensureEncodedUriComponent(i))
                    },
                    ensureEncodedQuery: function(e) {
                        return e.split("&").map(this.ensureEncodedParam.bind(this)).join("&")
                    },
                    checkLinkFormat: function(e) {
                        var t = /^([a-z]+:)?\/\/|^(mailto|tel|maps):|^\#/i
                          , n = t.test(e)
                          , i = ""
                          , o = /^\+?\s?\(?(?:\d\s?\-?\)?){3,20}$/
                          , r = e.match(/^(.*?)(?:\?(.*?))?(?:#(.*))?$/)
                          , s = r[1]
                          , a = r[2]
                          , l = r[3];
                        if (o.test(e))
                            return "tel:" + e;
                        if (!n) {
                            var c = s.split("/")[0];
                            (c.match(/.+(\.|:).+/) || "localhost" === c) && (i = "http://")
                        }
                        return i + this.ensureEncodedUri(s) + (void 0 === a ? "" : "?" + this.ensureEncodedQuery(a)) + (void 0 === l ? "" : "#" + l)
                    },
                    doFormCancel: function() {
                        this.base.restoreSelection(),
                        this.base.checkSelection()
                    },
                    attachFormEvents: function(e) {
                        var t = e.querySelector(".medium-editor-toolbar-close")
                          , n = e.querySelector(".medium-editor-toolbar-save")
                          , i = e.querySelector(".medium-editor-toolbar-input");
                        this.on(e, "click", this.handleFormClick.bind(this)),
                        this.on(i, "keyup", this.handleTextboxKeyup.bind(this)),
                        this.on(t, "click", this.handleCloseClick.bind(this)),
                        this.on(n, "click", this.handleSaveClick.bind(this), !0)
                    },
                    createForm: function() {
                        var e = this.document
                          , t = e.createElement("div");
                        return t.className = "medium-editor-toolbar-form",
                        t.id = "medium-editor-toolbar-form-anchor-" + this.getEditorId(),
                        t.innerHTML = this.getTemplate(),
                        this.attachFormEvents(t),
                        t
                    },
                    getInput: function() {
                        return this.getForm().querySelector("input.medium-editor-toolbar-input")
                    },
                    getAnchorTargetCheckbox: function() {
                        return this.getForm().querySelector(".medium-editor-toolbar-anchor-target")
                    },
                    getAnchorButtonCheckbox: function() {
                        return this.getForm().querySelector(".medium-editor-toolbar-anchor-button")
                    },
                    handleTextboxKeyup: function(t) {
                        if (t.keyCode === e.util.keyCode.ENTER)
                            return t.preventDefault(),
                            void this.doFormSave();
                        t.keyCode === e.util.keyCode.ESCAPE && (t.preventDefault(),
                        this.doFormCancel())
                    },
                    handleFormClick: function(e) {
                        e.stopPropagation()
                    },
                    handleSaveClick: function(e) {
                        e.preventDefault(),
                        this.doFormSave()
                    },
                    handleCloseClick: function(e) {
                        e.preventDefault(),
                        this.doFormCancel()
                    }
                });
                e.extensions.anchor = t
            }(),
            function() {
                var t = e.Extension.extend({
                    name: "anchor-preview",
                    hideDelay: 500,
                    previewValueSelector: "a",
                    showWhenToolbarIsVisible: !1,
                    showOnEmptyLinks: !0,
                    init: function() {
                        this.anchorPreview = this.createPreview(),
                        this.getEditorOption("elementsContainer").appendChild(this.anchorPreview),
                        this.attachToEditables()
                    },
                    getInteractionElements: function() {
                        return this.getPreviewElement()
                    },
                    getPreviewElement: function() {
                        return this.anchorPreview
                    },
                    createPreview: function() {
                        var e = this.document.createElement("div");
                        return e.id = "medium-editor-anchor-preview-" + this.getEditorId(),
                        e.className = "medium-editor-anchor-preview",
                        e.innerHTML = this.getTemplate(),
                        this.on(e, "click", this.handleClick.bind(this)),
                        e
                    },
                    getTemplate: function() {
                        return '<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">    <a class="medium-editor-toolbar-anchor-preview-inner"></a></div>'
                    },
                    destroy: function() {
                        this.anchorPreview && (this.anchorPreview.parentNode && this.anchorPreview.parentNode.removeChild(this.anchorPreview),
                        delete this.anchorPreview)
                    },
                    hidePreview: function() {
                        this.anchorPreview && this.anchorPreview.classList.remove("medium-editor-anchor-preview-active"),
                        this.activeAnchor = null
                    },
                    showPreview: function(e) {
                        return !(!this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") && !e.getAttribute("data-disable-preview")) || (this.previewValueSelector && (this.anchorPreview.querySelector(this.previewValueSelector).textContent = e.attributes.href.value,
                        this.anchorPreview.querySelector(this.previewValueSelector).href = e.attributes.href.value),
                        this.anchorPreview.classList.add("medium-toolbar-arrow-over"),
                        this.anchorPreview.classList.remove("medium-toolbar-arrow-under"),
                        this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") || this.anchorPreview.classList.add("medium-editor-anchor-preview-active"),
                        this.activeAnchor = e,
                        this.positionPreview(),
                        this.attachPreviewHandlers(),
                        this)
                    },
                    positionPreview: function(e) {
                        e = e || this.activeAnchor;
                        var t, n, i, o, r, s = this.window.innerWidth, a = this.anchorPreview.offsetHeight, l = e.getBoundingClientRect(), c = this.diffLeft, u = this.diffTop, d = this.getEditorOption("elementsContainer"), h = ["absolute", "fixed"].indexOf(window.getComputedStyle(d).getPropertyValue("position")) > -1, f = {};
                        t = this.anchorPreview.offsetWidth / 2;
                        var p = this.base.getExtensionByName("toolbar");
                        p && (c = p.diffLeft,
                        u = p.diffTop),
                        n = c - t,
                        h ? (o = d.getBoundingClientRect(),
                        ["top", "left"].forEach(function(e) {
                            f[e] = l[e] - o[e]
                        }),
                        f.width = l.width,
                        f.height = l.height,
                        l = f,
                        s = o.width,
                        r = d.scrollTop) : r = this.window.pageYOffset,
                        i = l.left + l.width / 2,
                        r += a + l.top + l.height - u - this.anchorPreview.offsetHeight,
                        this.anchorPreview.style.top = Math.round(r) + "px",
                        this.anchorPreview.style.right = "initial",
                        i < t ? (this.anchorPreview.style.left = n + t + "px",
                        this.anchorPreview.style.right = "initial") : s - i < t ? (this.anchorPreview.style.left = "auto",
                        this.anchorPreview.style.right = 0) : (this.anchorPreview.style.left = n + i + "px",
                        this.anchorPreview.style.right = "initial")
                    },
                    attachToEditables: function() {
                        this.subscribe("editableMouseover", this.handleEditableMouseover.bind(this)),
                        this.subscribe("positionedToolbar", this.handlePositionedToolbar.bind(this))
                    },
                    handlePositionedToolbar: function() {
                        this.showWhenToolbarIsVisible || this.hidePreview()
                    },
                    handleClick: function(e) {
                        var t = this.base.getExtensionByName("anchor")
                          , n = this.activeAnchor;
                        t && n && (e.preventDefault(),
                        this.base.selectElement(this.activeAnchor),
                        this.base.delay(function() {
                            if (n) {
                                var e = {
                                    value: n.attributes.href.value,
                                    target: n.getAttribute("target"),
                                    buttonClass: n.getAttribute("class")
                                };
                                t.showForm(e),
                                n = null
                            }
                        }
                        .bind(this))),
                        this.hidePreview()
                    },
                    handleAnchorMouseout: function() {
                        this.anchorToPreview = null,
                        this.off(this.activeAnchor, "mouseout", this.instanceHandleAnchorMouseout),
                        this.instanceHandleAnchorMouseout = null
                    },
                    handleEditableMouseover: function(t) {
                        var n = e.util.getClosestTag(t.target, "a");
                        if (!1 !== n) {
                            if (!this.showOnEmptyLinks && (!/href=["']\S+["']/.test(n.outerHTML) || /href=["']#\S+["']/.test(n.outerHTML)))
                                return !0;
                            var i = this.base.getExtensionByName("toolbar");
                            if (!this.showWhenToolbarIsVisible && i && i.isDisplayed && i.isDisplayed())
                                return !0;
                            this.activeAnchor && this.activeAnchor !== n && this.detachPreviewHandlers(),
                            this.anchorToPreview = n,
                            this.instanceHandleAnchorMouseout = this.handleAnchorMouseout.bind(this),
                            this.on(this.anchorToPreview, "mouseout", this.instanceHandleAnchorMouseout),
                            this.base.delay(function() {
                                this.anchorToPreview && this.showPreview(this.anchorToPreview)
                            }
                            .bind(this))
                        }
                    },
                    handlePreviewMouseover: function() {
                        this.lastOver = (new Date).getTime(),
                        this.hovering = !0
                    },
                    handlePreviewMouseout: function(e) {
                        e.relatedTarget && /anchor-preview/.test(e.relatedTarget.className) || (this.hovering = !1)
                    },
                    updatePreview: function() {
                        if (this.hovering)
                            return !0;
                        (new Date).getTime() - this.lastOver > this.hideDelay && this.detachPreviewHandlers()
                    },
                    detachPreviewHandlers: function() {
                        clearInterval(this.intervalTimer),
                        this.instanceHandlePreviewMouseover && (this.off(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover),
                        this.off(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout),
                        this.activeAnchor && (this.off(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover),
                        this.off(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout))),
                        this.hidePreview(),
                        this.hovering = this.instanceHandlePreviewMouseover = this.instanceHandlePreviewMouseout = null
                    },
                    attachPreviewHandlers: function() {
                        this.lastOver = (new Date).getTime(),
                        this.hovering = !0,
                        this.instanceHandlePreviewMouseover = this.handlePreviewMouseover.bind(this),
                        this.instanceHandlePreviewMouseout = this.handlePreviewMouseout.bind(this),
                        this.intervalTimer = setInterval(this.updatePreview.bind(this), 200),
                        this.on(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover),
                        this.on(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout),
                        this.on(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover),
                        this.on(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout)
                    }
                });
                e.extensions.anchorPreview = t
            }(),
            function() {
                function t(t) {
                    return !e.util.getClosestTag(t, "a")
                }
                var n, i, o, r, s;
                n = [" ", "\t", "\n", "\r", " ", " ", " ", " ", " ", "\u2028", "\u2029"],
                i = "com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw",
                o = "(((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.](" + i + ")\\/)\\S+(?:[^\\s`!\\[\\]{};:'\".,?«»“”‘’])))|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.(" + i + "))",
                r = new RegExp("^(" + i + ")$","i"),
                s = new RegExp(o,"gi");
                var a = e.Extension.extend({
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.disableEventHandling = !1,
                        this.subscribe("editableKeypress", this.onKeypress.bind(this)),
                        this.subscribe("editableBlur", this.onBlur.bind(this)),
                        this.document.execCommand("AutoUrlDetect", !1, !1)
                    },
                    isLastInstance: function() {
                        for (var e = 0, t = 0; t < this.window._mediumEditors.length; t++) {
                            var n = this.window._mediumEditors[t];
                            null !== n && void 0 !== n.getExtensionByName("autoLink") && e++
                        }
                        return 1 === e
                    },
                    destroy: function() {
                        this.document.queryCommandSupported("AutoUrlDetect") && this.isLastInstance() && this.document.execCommand("AutoUrlDetect", !1, !0)
                    },
                    onBlur: function(e, t) {
                        this.performLinking(t)
                    },
                    onKeypress: function(t) {
                        this.disableEventHandling || e.util.isKey(t, [e.util.keyCode.SPACE, e.util.keyCode.ENTER]) && (clearTimeout(this.performLinkingTimeout),
                        this.performLinkingTimeout = setTimeout(function() {
                            try {
                                var e = this.base.exportSelection();
                                this.performLinking(t.target) && this.base.importSelection(e, !0)
                            } catch (e) {
                                window.console && window.console.error("Failed to perform linking", e),
                                this.disableEventHandling = !0
                            }
                        }
                        .bind(this), 0))
                    },
                    performLinking: function(t) {
                        var n = e.util.splitByBlockElements(t)
                          , i = !1;
                        0 === n.length && (n = [t]);
                        for (var o = 0; o < n.length; o++)
                            i = this.removeObsoleteAutoLinkSpans(n[o]) || i,
                            i = this.performLinkingWithinElement(n[o]) || i;
                        return this.base.events.updateInput(t, {
                            target: t,
                            currentTarget: t
                        }),
                        i
                    },
                    removeObsoleteAutoLinkSpans: function(n) {
                        if (!n || 3 === n.nodeType)
                            return !1;
                        for (var i = n.querySelectorAll('span[data-auto-link="true"]'), o = !1, r = 0; r < i.length; r++) {
                            var s = i[r].textContent;
                            if (-1 === s.indexOf("://") && (s = e.util.ensureUrlHasProtocol(s)),
                            i[r].getAttribute("data-href") !== s && t(i[r])) {
                                o = !0;
                                var a = s.replace(/\s+$/, "");
                                if (i[r].getAttribute("data-href") === a) {
                                    var l = s.length - a.length
                                      , c = e.util.splitOffDOMTree(i[r], this.splitTextBeforeEnd(i[r], l));
                                    i[r].parentNode.insertBefore(c, i[r].nextSibling)
                                } else
                                    e.util.unwrap(i[r], this.document)
                            }
                        }
                        return o
                    },
                    splitTextBeforeEnd: function(e, t) {
                        for (var n = this.document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1), i = !0; i; )
                            i = null !== n.lastChild();
                        for (var o, r, s; t > 0 && null !== s; )
                            o = n.currentNode,
                            r = o.nodeValue,
                            r.length > t ? (s = o.splitText(r.length - t),
                            t = 0) : (s = n.previousNode(),
                            t -= r.length);
                        return s
                    },
                    performLinkingWithinElement: function(t) {
                        for (var n = this.findLinkableText(t), i = 0; i < n.length; i++) {
                            var o = e.util.findOrCreateMatchingTextNodes(this.document, t, n[i]);
                            this.shouldNotLink(o) || this.createAutoLink(o, n[i].href)
                        }
                        return !1
                    },
                    shouldNotLink: function(t) {
                        for (var n = !1, i = 0; i < t.length && !1 === n; i++)
                            n = !!e.util.traverseUp(t[i], function(e) {
                                return "a" === e.nodeName.toLowerCase() || e.getAttribute && "true" === e.getAttribute("data-auto-link")
                            });
                        return n
                    },
                    findLinkableText: function(e) {
                        for (var t = e.textContent, i = null, o = []; null !== (i = s.exec(t)); ) {
                            var a = !0
                              , l = i.index + i[0].length;
                            a = !(0 !== i.index && -1 === n.indexOf(t[i.index - 1]) || l !== t.length && -1 === n.indexOf(t[l])),
                            (a = a && (-1 !== i[0].indexOf("/") || r.test(i[0].split(".").pop().split("?").shift()))) && o.push({
                                href: i[0],
                                start: i.index,
                                end: l
                            })
                        }
                        return o
                    },
                    createAutoLink: function(t, n) {
                        n = e.util.ensureUrlHasProtocol(n);
                        var i = e.util.createLink(this.document, t, n, this.getEditorOption("targetBlank") ? "_blank" : null)
                          , o = this.document.createElement("span");
                        for (o.setAttribute("data-auto-link", "true"),
                        o.setAttribute("data-href", n),
                        i.insertBefore(o, i.firstChild); i.childNodes.length > 1; )
                            o.appendChild(i.childNodes[1])
                    }
                });
                e.extensions.autoLink = a
            }(),
            function() {
                function t(t) {
                    var i = e.util.getContainerEditorElement(t);
                    Array.prototype.slice.call(i.parentElement.querySelectorAll("." + n)).forEach(function(e) {
                        e.classList.remove(n)
                    })
                }
                var n = "medium-editor-dragover"
                  , i = e.Extension.extend({
                    name: "fileDragging",
                    allowedTypes: ["image"],
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.subscribe("editableDrag", this.handleDrag.bind(this)),
                        this.subscribe("editableDrop", this.handleDrop.bind(this))
                    },
                    handleDrag: function(e) {
                        e.preventDefault(),
                        e.dataTransfer.dropEffect = "copy";
                        var i = e.target.classList ? e.target : e.target.parentElement;
                        t(i),
                        "dragover" === e.type && i.classList.add(n)
                    },
                    handleDrop: function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        this.base.selectElement(e.target);
                        var n = this.base.exportSelection();
                        n.start = n.end,
                        this.base.importSelection(n),
                        e.dataTransfer.files && Array.prototype.slice.call(e.dataTransfer.files).forEach(function(e) {
                            this.isAllowedFile(e) && e.type.match("image") && this.insertImageFile(e)
                        }, this),
                        t(e.target)
                    },
                    isAllowedFile: function(e) {
                        return this.allowedTypes.some(function(t) {
                            return !!e.type.match(t)
                        })
                    },
                    insertImageFile: function(t) {
                        if ("function" == typeof FileReader) {
                            var n = new FileReader;
                            n.readAsDataURL(t),
                            n.addEventListener("load", function(t) {
                                var n = this.document.createElement("img");
                                n.src = t.target.result,
                                e.util.insertHTMLCommand(this.document, n.outerHTML)
                            }
                            .bind(this))
                        }
                    }
                });
                e.extensions.fileDragging = i
            }(),
            function() {
                var t = e.Extension.extend({
                    name: "keyboard-commands",
                    commands: [{
                        command: "bold",
                        key: "B",
                        meta: !0,
                        shift: !1,
                        alt: !1
                    }, {
                        command: "italic",
                        key: "I",
                        meta: !0,
                        shift: !1,
                        alt: !1
                    }, {
                        command: "underline",
                        key: "U",
                        meta: !0,
                        shift: !1,
                        alt: !1
                    }],
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.subscribe("editableKeydown", this.handleKeydown.bind(this)),
                        this.keys = {},
                        this.commands.forEach(function(e) {
                            var t = e.key.charCodeAt(0);
                            this.keys[t] || (this.keys[t] = []),
                            this.keys[t].push(e)
                        }, this)
                    },
                    handleKeydown: function(t) {
                        var n = e.util.getKeyCode(t);
                        if (this.keys[n]) {
                            var i = e.util.isMetaCtrlKey(t)
                              , o = !!t.shiftKey
                              , r = !!t.altKey;
                            this.keys[n].forEach(function(e) {
                                e.meta !== i || e.shift !== o || e.alt !== r && void 0 !== e.alt || (t.preventDefault(),
                                t.stopPropagation(),
                                "function" == typeof e.command ? e.command.apply(this) : !1 !== e.command && this.execAction(e.command))
                            }, this)
                        }
                    }
                });
                e.extensions.keyboardCommands = t
            }(),
            function() {
                var t = e.extensions.form.extend({
                    name: "fontname",
                    action: "fontName",
                    aria: "change font name",
                    contentDefault: "&#xB1;",
                    contentFA: '<i class="fa fa-font"></i>',
                    fonts: ["", "Arial", "Verdana", "Times New Roman"],
                    init: function() {
                        e.extensions.form.prototype.init.apply(this, arguments)
                    },
                    handleClick: function(e) {
                        if (e.preventDefault(),
                        e.stopPropagation(),
                        !this.isDisplayed()) {
                            var t = this.document.queryCommandValue("fontName") + "";
                            this.showForm(t)
                        }
                        return !1
                    },
                    getForm: function() {
                        return this.form || (this.form = this.createForm()),
                        this.form
                    },
                    isDisplayed: function() {
                        return "block" === this.getForm().style.display
                    },
                    hideForm: function() {
                        this.getForm().style.display = "none",
                        this.getSelect().value = ""
                    },
                    showForm: function(e) {
                        var t = this.getSelect();
                        this.base.saveSelection(),
                        this.hideToolbarDefaultActions(),
                        this.getForm().style.display = "block",
                        this.setToolbarPosition(),
                        t.value = e || "",
                        t.focus()
                    },
                    destroy: function() {
                        if (!this.form)
                            return !1;
                        this.form.parentNode && this.form.parentNode.removeChild(this.form),
                        delete this.form
                    },
                    doFormSave: function() {
                        this.base.restoreSelection(),
                        this.base.checkSelection()
                    },
                    doFormCancel: function() {
                        this.base.restoreSelection(),
                        this.clearFontName(),
                        this.base.checkSelection()
                    },
                    createForm: function() {
                        var e, t = this.document, n = t.createElement("div"), i = t.createElement("select"), o = t.createElement("a"), r = t.createElement("a");
                        n.className = "medium-editor-toolbar-form",
                        n.id = "medium-editor-toolbar-form-fontname-" + this.getEditorId(),
                        this.on(n, "click", this.handleFormClick.bind(this));
                        for (var s = 0; s < this.fonts.length; s++)
                            e = t.createElement("option"),
                            e.innerHTML = this.fonts[s],
                            e.value = this.fonts[s],
                            i.appendChild(e);
                        return i.className = "medium-editor-toolbar-select",
                        n.appendChild(i),
                        this.on(i, "change", this.handleFontChange.bind(this)),
                        r.setAttribute("href", "#"),
                        r.className = "medium-editor-toobar-save",
                        r.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : "&#10003;",
                        n.appendChild(r),
                        this.on(r, "click", this.handleSaveClick.bind(this), !0),
                        o.setAttribute("href", "#"),
                        o.className = "medium-editor-toobar-close",
                        o.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : "&times;",
                        n.appendChild(o),
                        this.on(o, "click", this.handleCloseClick.bind(this)),
                        n
                    },
                    getSelect: function() {
                        return this.getForm().querySelector("select.medium-editor-toolbar-select")
                    },
                    clearFontName: function() {
                        e.selection.getSelectedElements(this.document).forEach(function(e) {
                            "font" === e.nodeName.toLowerCase() && e.hasAttribute("face") && e.removeAttribute("face")
                        })
                    },
                    handleFontChange: function() {
                        var e = this.getSelect().value;
                        "" === e ? this.clearFontName() : this.execAction("fontName", {
                            value: e
                        })
                    },
                    handleFormClick: function(e) {
                        e.stopPropagation()
                    },
                    handleSaveClick: function(e) {
                        e.preventDefault(),
                        this.doFormSave()
                    },
                    handleCloseClick: function(e) {
                        e.preventDefault(),
                        this.doFormCancel()
                    }
                });
                e.extensions.fontName = t
            }(),
            function() {
                var t = e.extensions.form.extend({
                    name: "fontsize",
                    action: "fontSize",
                    aria: "increase/decrease font size",
                    contentDefault: "&#xB1;",
                    contentFA: '<i class="fa fa-text-height"></i>',
                    init: function() {
                        e.extensions.form.prototype.init.apply(this, arguments)
                    },
                    handleClick: function(e) {
                        if (e.preventDefault(),
                        e.stopPropagation(),
                        !this.isDisplayed()) {
                            var t = this.document.queryCommandValue("fontSize") + "";
                            this.showForm(t)
                        }
                        return !1
                    },
                    getForm: function() {
                        return this.form || (this.form = this.createForm()),
                        this.form
                    },
                    isDisplayed: function() {
                        return "block" === this.getForm().style.display
                    },
                    hideForm: function() {
                        this.getForm().style.display = "none",
                        this.getInput().value = ""
                    },
                    showForm: function(e) {
                        var t = this.getInput();
                        this.base.saveSelection(),
                        this.hideToolbarDefaultActions(),
                        this.getForm().style.display = "block",
                        this.setToolbarPosition(),
                        t.value = e || "",
                        t.focus()
                    },
                    destroy: function() {
                        if (!this.form)
                            return !1;
                        this.form.parentNode && this.form.parentNode.removeChild(this.form),
                        delete this.form
                    },
                    doFormSave: function() {
                        this.base.restoreSelection(),
                        this.base.checkSelection()
                    },
                    doFormCancel: function() {
                        this.base.restoreSelection(),
                        this.clearFontSize(),
                        this.base.checkSelection()
                    },
                    createForm: function() {
                        var e = this.document
                          , t = e.createElement("div")
                          , n = e.createElement("input")
                          , i = e.createElement("a")
                          , o = e.createElement("a");
                        return t.className = "medium-editor-toolbar-form",
                        t.id = "medium-editor-toolbar-form-fontsize-" + this.getEditorId(),
                        this.on(t, "click", this.handleFormClick.bind(this)),
                        n.setAttribute("type", "range"),
                        n.setAttribute("min", "1"),
                        n.setAttribute("max", "7"),
                        n.className = "medium-editor-toolbar-input",
                        t.appendChild(n),
                        this.on(n, "change", this.handleSliderChange.bind(this)),
                        o.setAttribute("href", "#"),
                        o.className = "medium-editor-toobar-save",
                        o.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : "&#10003;",
                        t.appendChild(o),
                        this.on(o, "click", this.handleSaveClick.bind(this), !0),
                        i.setAttribute("href", "#"),
                        i.className = "medium-editor-toobar-close",
                        i.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : "&times;",
                        t.appendChild(i),
                        this.on(i, "click", this.handleCloseClick.bind(this)),
                        t
                    },
                    getInput: function() {
                        return this.getForm().querySelector("input.medium-editor-toolbar-input")
                    },
                    clearFontSize: function() {
                        e.selection.getSelectedElements(this.document).forEach(function(e) {
                            "font" === e.nodeName.toLowerCase() && e.hasAttribute("size") && e.removeAttribute("size")
                        })
                    },
                    handleSliderChange: function() {
                        var e = this.getInput().value;
                        "4" === e ? this.clearFontSize() : this.execAction("fontSize", {
                            value: e
                        })
                    },
                    handleFormClick: function(e) {
                        e.stopPropagation()
                    },
                    handleSaveClick: function(e) {
                        e.preventDefault(),
                        this.doFormSave()
                    },
                    handleCloseClick: function(e) {
                        e.preventDefault(),
                        this.doFormCancel()
                    }
                });
                e.extensions.fontSize = t
            }(),
            function() {
                function t() {
                    return [[new RegExp(/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g), ""], [new RegExp(/<!--StartFragment-->|<!--EndFragment-->/g), ""], [new RegExp(/<br>$/i), ""], [new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi), ""], [new RegExp(/<\/b>(<br[^>]*>)?$/gi), ""], [new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g), " "], [new RegExp(/<br class="Apple-interchange-newline">/g), "<br>"], [new RegExp(/<span[^>]*(font-style:italic;font-weight:(bold|700)|font-weight:(bold|700);font-style:italic)[^>]*>/gi), '<span class="replace-with italic bold">'], [new RegExp(/<span[^>]*font-style:italic[^>]*>/gi), '<span class="replace-with italic">'], [new RegExp(/<span[^>]*font-weight:(bold|700)[^>]*>/gi), '<span class="replace-with bold">'], [new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi), "<$1$2>"], [new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi), '<a href="$1">'], [new RegExp(/<\/p>\n+/gi), "</p>"], [new RegExp(/\n+<p/gi), "<p"], [new RegExp(/<\/?o:[a-z]*>/gi), ""], [new RegExp(/<!\[if !supportLists\]>(((?!<!).)*)<!\[endif]\>/gi), "$1"]]
                }
                function n(e, t, n) {
                    var i = e.clipboardData || t.clipboardData || n.dataTransfer
                      , o = {};
                    if (!i)
                        return o;
                    if (i.getData) {
                        var r = i.getData("Text");
                        r && r.length > 0 && (o["text/plain"] = r)
                    }
                    if (i.types)
                        for (var s = 0; s < i.types.length; s++) {
                            var a = i.types[s];
                            o[a] = i.getData(a)
                        }
                    return o
                }
                var i = null
                  , o = null
                  , r = function(e) {
                    e.stopPropagation()
                }
                  , s = e.Extension.extend({
                    forcePlainText: !0,
                    cleanPastedHTML: !1,
                    preCleanReplacements: [],
                    cleanReplacements: [],
                    cleanAttrs: ["class", "style", "dir"],
                    cleanTags: ["meta"],
                    unwrapTags: [],
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        (this.forcePlainText || this.cleanPastedHTML) && (this.subscribe("editableKeydown", this.handleKeydown.bind(this)),
                        this.getEditorElements().forEach(function(e) {
                            this.on(e, "paste", this.handlePaste.bind(this))
                        }, this),
                        this.subscribe("addElement", this.handleAddElement.bind(this)))
                    },
                    handleAddElement: function(e, t) {
                        this.on(t, "paste", this.handlePaste.bind(this))
                    },
                    destroy: function() {
                        (this.forcePlainText || this.cleanPastedHTML) && this.removePasteBin()
                    },
                    handlePaste: function(e, t) {
                        if (!e.defaultPrevented) {
                            var i = n(e, this.window, this.document)
                              , o = i["text/html"]
                              , r = i["text/plain"];
                            this.window.clipboardData && void 0 === e.clipboardData && !o && (o = r),
                            (o || r) && (e.preventDefault(),
                            this.doPaste(o, r, t))
                        }
                    },
                    doPaste: function(t, n, i) {
                        var o, r, s = "";
                        if (this.cleanPastedHTML && t)
                            return this.cleanPaste(t);
                        if (n) {
                            if (this.getEditorOption("disableReturn") || i && i.getAttribute("data-disable-return"))
                                s = e.util.htmlEntities(n);
                            else if (o = n.split(/[\r\n]+/g),
                            o.length > 1)
                                for (r = 0; r < o.length; r += 1)
                                    "" !== o[r] && (s += "<p>" + e.util.htmlEntities(o[r]) + "</p>");
                            else
                                s = e.util.htmlEntities(o[0]);
                            e.util.insertHTMLCommand(this.document, s)
                        }
                    },
                    handlePasteBinPaste: function(e) {
                        if (e.defaultPrevented)
                            return void this.removePasteBin();
                        var t = n(e, this.window, this.document)
                          , i = t["text/html"]
                          , r = t["text/plain"]
                          , s = o;
                        if (!this.cleanPastedHTML || i)
                            return e.preventDefault(),
                            this.removePasteBin(),
                            this.doPaste(i, r, s),
                            void this.trigger("editablePaste", {
                                currentTarget: s,
                                target: s
                            }, s);
                        setTimeout(function() {
                            this.cleanPastedHTML && (i = this.getPasteBinHtml()),
                            this.removePasteBin(),
                            this.doPaste(i, r, s),
                            this.trigger("editablePaste", {
                                currentTarget: s,
                                target: s
                            }, s)
                        }
                        .bind(this), 0)
                    },
                    handleKeydown: function(t, n) {
                        e.util.isKey(t, e.util.keyCode.V) && e.util.isMetaCtrlKey(t) && (t.stopImmediatePropagation(),
                        this.removePasteBin(),
                        this.createPasteBin(n))
                    },
                    createPasteBin: function(t) {
                        var n, s = e.selection.getSelectionRange(this.document), a = this.window.pageYOffset;
                        o = t,
                        s && (n = s.getClientRects(),
                        n.length ? a += n[0].top : void 0 !== s.startContainer.getBoundingClientRect ? a += s.startContainer.getBoundingClientRect().top : a += s.getBoundingClientRect().top),
                        i = s;
                        var l = this.document.createElement("div");
                        l.id = this.pasteBinId = "medium-editor-pastebin-" + +Date.now(),
                        l.setAttribute("style", "border: 1px red solid; position: absolute; top: " + a + "px; width: 10px; height: 10px; overflow: hidden; opacity: 0"),
                        l.setAttribute("contentEditable", !0),
                        l.innerHTML = "%ME_PASTEBIN%",
                        this.document.body.appendChild(l),
                        this.on(l, "focus", r),
                        this.on(l, "focusin", r),
                        this.on(l, "focusout", r),
                        l.focus(),
                        e.selection.selectNode(l, this.document),
                        this.boundHandlePaste || (this.boundHandlePaste = this.handlePasteBinPaste.bind(this)),
                        this.on(l, "paste", this.boundHandlePaste)
                    },
                    removePasteBin: function() {
                        null !== i && (e.selection.selectRange(this.document, i),
                        i = null),
                        null !== o && (o = null);
                        var t = this.getPasteBin();
                        t && t && (this.off(t, "focus", r),
                        this.off(t, "focusin", r),
                        this.off(t, "focusout", r),
                        this.off(t, "paste", this.boundHandlePaste),
                        t.parentElement.removeChild(t))
                    },
                    getPasteBin: function() {
                        return this.document.getElementById(this.pasteBinId)
                    },
                    getPasteBinHtml: function() {
                        var e = this.getPasteBin();
                        if (!e)
                            return !1;
                        if (e.firstChild && "mcepastebin" === e.firstChild.id)
                            return !1;
                        var t = e.innerHTML;
                        return !(!t || "%ME_PASTEBIN%" === t) && t
                    },
                    cleanPaste: function(e) {
                        var n, i, o, r, s = /<p|<br|<div/.test(e), a = [].concat(this.preCleanReplacements || [], t(), this.cleanReplacements || []);
                        for (n = 0; n < a.length; n += 1)
                            e = e.replace(a[n][0], a[n][1]);
                        if (!s)
                            return this.pasteHTML(e);
                        for (o = this.document.createElement("div"),
                        o.innerHTML = "<p>" + e.split("<br><br>").join("</p><p>") + "</p>",
                        i = o.querySelectorAll("a,p,div,br"),
                        n = 0; n < i.length; n += 1)
                            switch (r = i[n],
                            r.innerHTML = r.innerHTML.replace(/\n/gi, " "),
                            r.nodeName.toLowerCase()) {
                            case "p":
                            case "div":
                                this.filterCommonBlocks(r);
                                break;
                            case "br":
                                this.filterLineBreak(r)
                            }
                        this.pasteHTML(o.innerHTML)
                    },
                    pasteHTML: function(t, n) {
                        n = e.util.defaults({}, n, {
                            cleanAttrs: this.cleanAttrs,
                            cleanTags: this.cleanTags,
                            unwrapTags: this.unwrapTags
                        });
                        var i, o, r, s, a = this.document.createDocumentFragment();
                        for (a.appendChild(this.document.createElement("body")),
                        s = a.querySelector("body"),
                        s.innerHTML = t,
                        this.cleanupSpans(s),
                        i = s.querySelectorAll("*"),
                        r = 0; r < i.length; r += 1)
                            o = i[r],
                            "a" === o.nodeName.toLowerCase() && this.getEditorOption("targetBlank") && e.util.setTargetBlank(o),
                            e.util.cleanupAttrs(o, n.cleanAttrs),
                            e.util.cleanupTags(o, n.cleanTags),
                            e.util.unwrapTags(o, n.unwrapTags);
                        e.util.insertHTMLCommand(this.document, s.innerHTML.replace(/&nbsp;/g, " "))
                    },
                    isCommonBlock: function(e) {
                        return e && ("p" === e.nodeName.toLowerCase() || "div" === e.nodeName.toLowerCase())
                    },
                    filterCommonBlocks: function(e) {
                        /^\s*$/.test(e.textContent) && e.parentNode && e.parentNode.removeChild(e)
                    },
                    filterLineBreak: function(e) {
                        this.isCommonBlock(e.previousElementSibling) ? this.removeWithParent(e) : !this.isCommonBlock(e.parentNode) || e.parentNode.firstChild !== e && e.parentNode.lastChild !== e ? e.parentNode && 1 === e.parentNode.childElementCount && "" === e.parentNode.textContent && this.removeWithParent(e) : this.removeWithParent(e)
                    },
                    removeWithParent: function(e) {
                        e && e.parentNode && (e.parentNode.parentNode && 1 === e.parentNode.childElementCount ? e.parentNode.parentNode.removeChild(e.parentNode) : e.parentNode.removeChild(e))
                    },
                    cleanupSpans: function(t) {
                        var n, i, o, r = t.querySelectorAll(".replace-with"), s = function(e) {
                            return e && "#text" !== e.nodeName && "false" === e.getAttribute("contenteditable")
                        };
                        for (n = 0; n < r.length; n += 1)
                            i = r[n],
                            o = this.document.createElement(i.classList.contains("bold") ? "b" : "i"),
                            i.classList.contains("bold") && i.classList.contains("italic") ? o.innerHTML = "<i>" + i.innerHTML + "</i>" : o.innerHTML = i.innerHTML,
                            i.parentNode.replaceChild(o, i);
                        for (r = t.querySelectorAll("span"),
                        n = 0; n < r.length; n += 1) {
                            if (i = r[n],
                            e.util.traverseUp(i, s))
                                return !1;
                            e.util.unwrap(i, this.document)
                        }
                    }
                });
                e.extensions.paste = s
            }(),
            function() {
                var t = e.Extension.extend({
                    name: "placeholder",
                    text: "Type your text",
                    hideOnClick: !0,
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.initPlaceholders(),
                        this.attachEventHandlers()
                    },
                    initPlaceholders: function() {
                        this.getEditorElements().forEach(this.initElement, this)
                    },
                    handleAddElement: function(e, t) {
                        this.initElement(t)
                    },
                    initElement: function(e) {
                        e.getAttribute("data-placeholder") || e.setAttribute("data-placeholder", this.text),
                        this.updatePlaceholder(e)
                    },
                    destroy: function() {
                        this.getEditorElements().forEach(this.cleanupElement, this)
                    },
                    handleRemoveElement: function(e, t) {
                        this.cleanupElement(t)
                    },
                    cleanupElement: function(e) {
                        e.getAttribute("data-placeholder") === this.text && e.removeAttribute("data-placeholder")
                    },
                    showPlaceholder: function(t) {
                        t && (e.util.isFF && 0 === t.childNodes.length ? (t.classList.add("medium-editor-placeholder-relative"),
                        t.classList.remove("medium-editor-placeholder")) : (t.classList.add("medium-editor-placeholder"),
                        t.classList.remove("medium-editor-placeholder-relative")))
                    },
                    hidePlaceholder: function(e) {
                        e && (e.classList.remove("medium-editor-placeholder"),
                        e.classList.remove("medium-editor-placeholder-relative"))
                    },
                    updatePlaceholder: function(e, t) {
                        if (e.querySelector("img, blockquote, ul, ol, table") || "" !== e.textContent.replace(/^\s+|\s+$/g, ""))
                            return this.hidePlaceholder(e);
                        t || this.showPlaceholder(e)
                    },
                    attachEventHandlers: function() {
                        this.hideOnClick && this.subscribe("focus", this.handleFocus.bind(this)),
                        this.subscribe("editableInput", this.handleInput.bind(this)),
                        this.subscribe("blur", this.handleBlur.bind(this)),
                        this.subscribe("addElement", this.handleAddElement.bind(this)),
                        this.subscribe("removeElement", this.handleRemoveElement.bind(this))
                    },
                    handleInput: function(e, t) {
                        var n = this.hideOnClick && t === this.base.getFocusedElement();
                        this.updatePlaceholder(t, n)
                    },
                    handleFocus: function(e, t) {
                        this.hidePlaceholder(t)
                    },
                    handleBlur: function(e, t) {
                        this.updatePlaceholder(t)
                    }
                });
                e.extensions.placeholder = t
            }(),
            function() {
                var t = e.Extension.extend({
                    name: "toolbar",
                    align: "center",
                    allowMultiParagraphSelection: !0,
                    buttons: ["bold", "italic", "underline", "anchor", "h2", "h3", "quote"],
                    diffLeft: 0,
                    diffTop: -10,
                    firstButtonClass: "medium-editor-button-first",
                    lastButtonClass: "medium-editor-button-last",
                    standardizeSelectionStart: !1,
                    static: !1,
                    sticky: !1,
                    stickyTopOffset: 0,
                    updateOnEmptySelection: !1,
                    relativeContainer: null,
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.initThrottledMethods(),
                        this.relativeContainer ? this.relativeContainer.appendChild(this.getToolbarElement()) : this.getEditorOption("elementsContainer").appendChild(this.getToolbarElement())
                    },
                    forEachExtension: function(e, t) {
                        return this.base.extensions.forEach(function(n) {
                            if (n !== this)
                                return e.apply(t || this, arguments)
                        }, this)
                    },
                    createToolbar: function() {
                        var e = this.document.createElement("div");
                        return e.id = "medium-editor-toolbar-" + this.getEditorId(),
                        e.className = "medium-editor-toolbar",
                        this.static ? e.className += " static-toolbar" : this.relativeContainer ? e.className += " medium-editor-relative-toolbar" : e.className += " medium-editor-stalker-toolbar",
                        e.appendChild(this.createToolbarButtons()),
                        this.forEachExtension(function(t) {
                            t.hasForm && e.appendChild(t.getForm())
                        }),
                        this.attachEventHandlers(),
                        e
                    },
                    createToolbarButtons: function() {
                        var t, n, i, o, r, s, a = this.document.createElement("ul");
                        return a.id = "medium-editor-toolbar-actions" + this.getEditorId(),
                        a.className = "medium-editor-toolbar-actions",
                        a.style.display = "block",
                        this.buttons.forEach(function(i) {
                            "string" == typeof i ? (r = i,
                            s = null) : (r = i.name,
                            s = i),
                            (o = this.base.addBuiltInExtension(r, s)) && "function" == typeof o.getButton && (n = o.getButton(this.base),
                            t = this.document.createElement("li"),
                            e.util.isElement(n) ? t.appendChild(n) : t.innerHTML = n,
                            a.appendChild(t))
                        }, this),
                        i = a.querySelectorAll("button"),
                        i.length > 0 && (i[0].classList.add(this.firstButtonClass),
                        i[i.length - 1].classList.add(this.lastButtonClass)),
                        a
                    },
                    destroy: function() {
                        this.toolbar && (this.toolbar.parentNode && this.toolbar.parentNode.removeChild(this.toolbar),
                        delete this.toolbar)
                    },
                    getInteractionElements: function() {
                        return this.getToolbarElement()
                    },
                    getToolbarElement: function() {
                        return this.toolbar || (this.toolbar = this.createToolbar()),
                        this.toolbar
                    },
                    getToolbarActionsElement: function() {
                        return this.getToolbarElement().querySelector(".medium-editor-toolbar-actions")
                    },
                    initThrottledMethods: function() {
                        this.throttledPositionToolbar = e.util.throttle(function() {
                            this.base.isActive && this.positionToolbarIfShown()
                        }
                        .bind(this))
                    },
                    attachEventHandlers: function() {
                        this.subscribe("blur", this.handleBlur.bind(this)),
                        this.subscribe("focus", this.handleFocus.bind(this)),
                        this.subscribe("editableClick", this.handleEditableClick.bind(this)),
                        this.subscribe("editableKeyup", this.handleEditableKeyup.bind(this)),
                        this.on(this.document.documentElement, "mouseup", this.handleDocumentMouseup.bind(this)),
                        this.static && this.sticky && this.on(this.window, "scroll", this.handleWindowScroll.bind(this), !0),
                        this.on(this.window, "resize", this.handleWindowResize.bind(this))
                    },
                    handleWindowScroll: function() {
                        this.positionToolbarIfShown()
                    },
                    handleWindowResize: function() {
                        this.throttledPositionToolbar()
                    },
                    handleDocumentMouseup: function(t) {
                        if (t && t.target && e.util.isDescendant(this.getToolbarElement(), t.target))
                            return !1;
                        this.checkState()
                    },
                    handleEditableClick: function() {
                        setTimeout(function() {
                            this.checkState()
                        }
                        .bind(this), 0)
                    },
                    handleEditableKeyup: function() {
                        this.checkState()
                    },
                    handleBlur: function() {
                        clearTimeout(this.hideTimeout),
                        clearTimeout(this.delayShowTimeout),
                        this.hideTimeout = setTimeout(function() {
                            this.hideToolbar()
                        }
                        .bind(this), 1)
                    },
                    handleFocus: function() {
                        this.checkState()
                    },
                    isDisplayed: function() {
                        return this.getToolbarElement().classList.contains("medium-editor-toolbar-active")
                    },
                    showToolbar: function() {
                        clearTimeout(this.hideTimeout),
                        this.isDisplayed() || (this.getToolbarElement().classList.add("medium-editor-toolbar-active"),
                        this.trigger("showToolbar", {}, this.base.getFocusedElement()))
                    },
                    hideToolbar: function() {
                        this.isDisplayed() && (this.getToolbarElement().classList.remove("medium-editor-toolbar-active"),
                        this.trigger("hideToolbar", {}, this.base.getFocusedElement()))
                    },
                    isToolbarDefaultActionsDisplayed: function() {
                        return "block" === this.getToolbarActionsElement().style.display
                    },
                    hideToolbarDefaultActions: function() {
                        this.isToolbarDefaultActionsDisplayed() && (this.getToolbarActionsElement().style.display = "none")
                    },
                    showToolbarDefaultActions: function() {
                        this.hideExtensionForms(),
                        this.isToolbarDefaultActionsDisplayed() || (this.getToolbarActionsElement().style.display = "block"),
                        this.delayShowTimeout = this.base.delay(function() {
                            this.showToolbar()
                        }
                        .bind(this))
                    },
                    hideExtensionForms: function() {
                        this.forEachExtension(function(e) {
                            e.hasForm && e.isDisplayed() && e.hideForm()
                        })
                    },
                    multipleBlockElementsSelected: function() {
                        var t = /<[^\/>][^>]*><\/[^>]+>/gim
                          , n = new RegExp("<(" + e.util.blockContainerElementNames.join("|") + ")[^>]*>","g")
                          , i = e.selection.getSelectionHtml(this.document).replace(t, "")
                          , o = i.match(n);
                        return !!o && o.length > 1
                    },
                    modifySelection: function() {
                        var t = this.window.getSelection()
                          , n = t.getRangeAt(0);
                        if (this.standardizeSelectionStart && n.startContainer.nodeValue && n.startOffset === n.startContainer.nodeValue.length) {
                            var i = e.util.findAdjacentTextNodeWithContent(e.selection.getSelectionElement(this.window), n.startContainer, this.document);
                            if (i) {
                                for (var o = 0; 0 === i.nodeValue.substr(o, 1).trim().length; )
                                    o += 1;
                                n = e.selection.select(this.document, i, o, n.endContainer, n.endOffset)
                            }
                        }
                    },
                    checkState: function() {
                        if (!this.base.preventSelectionUpdates) {
                            if (!this.base.getFocusedElement() || e.selection.selectionInContentEditableFalse(this.window))
                                return this.hideToolbar();
                            var t = e.selection.getSelectionElement(this.window);
                            return !t || -1 === this.getEditorElements().indexOf(t) || t.getAttribute("data-disable-toolbar") ? this.hideToolbar() : this.updateOnEmptySelection && this.static ? this.showAndUpdateToolbar() : !e.selection.selectionContainsContent(this.document) || !1 === this.allowMultiParagraphSelection && this.multipleBlockElementsSelected() ? this.hideToolbar() : void this.showAndUpdateToolbar()
                        }
                    },
                    showAndUpdateToolbar: function() {
                        this.modifySelection(),
                        this.setToolbarButtonStates(),
                        this.trigger("positionToolbar", {}, this.base.getFocusedElement()),
                        this.showToolbarDefaultActions(),
                        this.setToolbarPosition()
                    },
                    setToolbarButtonStates: function() {
                        this.forEachExtension(function(e) {
                            "function" == typeof e.isActive && "function" == typeof e.setInactive && e.setInactive()
                        }),
                        this.checkActiveButtons()
                    },
                    checkActiveButtons: function() {
                        var t, n = [], i = null, o = e.selection.getSelectionRange(this.document), r = function(e) {
                            "function" == typeof e.checkState ? e.checkState(t) : "function" == typeof e.isActive && "function" == typeof e.isAlreadyApplied && "function" == typeof e.setActive && !e.isActive() && e.isAlreadyApplied(t) && e.setActive()
                        };
                        if (o && (this.forEachExtension(function(e) {
                            if ("function" == typeof e.queryCommandState && null !== (i = e.queryCommandState()))
                                return void (i && "function" == typeof e.setActive && e.setActive());
                            n.push(e)
                        }),
                        t = e.selection.getSelectedParentElement(o),
                        this.getEditorElements().some(function(n) {
                            return e.util.isDescendant(n, t, !0)
                        })))
                            for (; t && (n.forEach(r),
                            !e.util.isMediumEditorElement(t)); )
                                t = t.parentNode
                    },
                    positionToolbarIfShown: function() {
                        this.isDisplayed() && this.setToolbarPosition()
                    },
                    setToolbarPosition: function() {
                        var e = this.base.getFocusedElement()
                          , t = this.window.getSelection();
                        if (!e)
                            return this;
                        !this.static && t.isCollapsed || (this.showToolbar(),
                        this.relativeContainer || (this.static ? this.positionStaticToolbar(e) : this.positionToolbar(t)),
                        this.trigger("positionedToolbar", {}, this.base.getFocusedElement()))
                    },
                    positionStaticToolbar: function(e) {
                        this.getToolbarElement().style.left = "0";
                        var t, n = this.document.documentElement && this.document.documentElement.scrollTop || this.document.body.scrollTop, i = this.window.innerWidth, o = this.getToolbarElement(), r = e.getBoundingClientRect(), s = r.top + n, a = r.left + r.width / 2, l = o.offsetHeight, c = o.offsetWidth, u = c / 2;
                        switch (this.sticky ? n > s + e.offsetHeight - l - this.stickyTopOffset ? (o.style.top = s + e.offsetHeight - l + "px",
                        o.classList.remove("medium-editor-sticky-toolbar")) : n > s - l - this.stickyTopOffset ? (o.classList.add("medium-editor-sticky-toolbar"),
                        o.style.top = this.stickyTopOffset + "px") : (o.classList.remove("medium-editor-sticky-toolbar"),
                        o.style.top = s - l + "px") : o.style.top = s - l + "px",
                        this.align) {
                        case "left":
                            t = r.left;
                            break;
                        case "right":
                            t = r.right - c;
                            break;
                        case "center":
                            t = a - u
                        }
                        t < 0 ? t = 0 : t + c > i && (t = i - Math.ceil(c) - 1),
                        o.style.left = t + "px"
                    },
                    positionToolbar: function(e) {
                        this.getToolbarElement().style.left = "0",
                        this.getToolbarElement().style.right = "initial";
                        var t = e.getRangeAt(0)
                          , n = t.getBoundingClientRect();
                        (!n || 0 === n.height && 0 === n.width && t.startContainer === t.endContainer) && (n = 1 === t.startContainer.nodeType && t.startContainer.querySelector("img") ? t.startContainer.querySelector("img").getBoundingClientRect() : t.startContainer.getBoundingClientRect());
                        var i, o, r = this.window.innerWidth, s = this.getToolbarElement(), a = s.offsetHeight, l = s.offsetWidth, c = l / 2, u = this.diffLeft - c, d = this.getEditorOption("elementsContainer"), h = ["absolute", "fixed"].indexOf(window.getComputedStyle(d).getPropertyValue("position")) > -1, f = {}, p = {};
                        h ? (o = d.getBoundingClientRect(),
                        ["top", "left"].forEach(function(e) {
                            p[e] = n[e] - o[e]
                        }),
                        p.width = n.width,
                        p.height = n.height,
                        n = p,
                        r = o.width,
                        f.top = d.scrollTop) : f.top = this.window.pageYOffset,
                        i = n.left + n.width / 2,
                        f.top += n.top - a,
                        n.top < 50 ? (s.classList.add("medium-toolbar-arrow-over"),
                        s.classList.remove("medium-toolbar-arrow-under"),
                        f.top += 50 + n.height - this.diffTop) : (s.classList.add("medium-toolbar-arrow-under"),
                        s.classList.remove("medium-toolbar-arrow-over"),
                        f.top += this.diffTop),
                        i < c ? (f.left = u + c,
                        f.right = "initial") : r - i < c ? (f.left = "auto",
                        f.right = 0) : (f.left = u + i,
                        f.right = "initial"),
                        ["top", "left", "right"].forEach(function(e) {
                            s.style[e] = f[e] + (isNaN(f[e]) ? "" : "px")
                        })
                    }
                });
                e.extensions.toolbar = t
            }(),
            function() {
                var t = e.Extension.extend({
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.subscribe("editableDrag", this.handleDrag.bind(this)),
                        this.subscribe("editableDrop", this.handleDrop.bind(this))
                    },
                    handleDrag: function(e) {
                        e.preventDefault(),
                        e.dataTransfer.dropEffect = "copy",
                        "dragover" === e.type ? e.target.classList.add("medium-editor-dragover") : "dragleave" === e.type && e.target.classList.remove("medium-editor-dragover")
                    },
                    handleDrop: function(t) {
                        var n;
                        t.preventDefault(),
                        t.stopPropagation(),
                        t.dataTransfer.files && (n = Array.prototype.slice.call(t.dataTransfer.files, 0),
                        n.some(function(t) {
                            if (t.type.match("image")) {
                                var n, i;
                                n = new FileReader,
                                n.readAsDataURL(t),
                                i = "medium-img-" + +new Date,
                                e.util.insertHTMLCommand(this.document, '<img class="medium-editor-image-loading" id="' + i + '" />'),
                                n.onload = function() {
                                    var e = this.document.getElementById(i);
                                    e && (e.removeAttribute("id"),
                                    e.removeAttribute("class"),
                                    e.src = n.result)
                                }
                                .bind(this)
                            }
                        }
                        .bind(this))),
                        t.target.classList.remove("medium-editor-dragover")
                    }
                });
                e.extensions.imageDragging = t
            }(),
            function() {
                function t(t) {
                    var n = e.selection.getSelectionStart(this.options.ownerDocument)
                      , i = n.textContent
                      , o = e.selection.getCaretOffsets(n);
                    (void 0 === i[o.left - 1] || "" === i[o.left - 1].trim() || void 0 !== i[o.left] && "" === i[o.left].trim()) && t.preventDefault()
                }
                function n(t, n) {
                    if (this.options.disableReturn || n.getAttribute("data-disable-return"))
                        t.preventDefault();
                    else if (this.options.disableDoubleReturn || n.getAttribute("data-disable-double-return")) {
                        var i = e.selection.getSelectionStart(this.options.ownerDocument);
                        (i && "" === i.textContent.trim() && "li" !== i.nodeName.toLowerCase() || i.previousElementSibling && "br" !== i.previousElementSibling.nodeName.toLowerCase() && "" === i.previousElementSibling.textContent.trim()) && t.preventDefault()
                    }
                }
                function i(t) {
                    var n = e.selection.getSelectionStart(this.options.ownerDocument);
                    "pre" === (n && n.nodeName.toLowerCase()) && (t.preventDefault(),
                    e.util.insertHTMLCommand(this.options.ownerDocument, "    ")),
                    e.util.isListItem(n) && (t.preventDefault(),
                    t.shiftKey ? this.options.ownerDocument.execCommand("outdent", !1, null) : this.options.ownerDocument.execCommand("indent", !1, null))
                }
                function o(t) {
                    var n, i = e.selection.getSelectionStart(this.options.ownerDocument), o = i.nodeName.toLowerCase(), r = /^(\s+|<br\/?>)?$/i, s = /h\d/i;
                    e.util.isKey(t, [e.util.keyCode.BACKSPACE, e.util.keyCode.ENTER]) && i.previousElementSibling && s.test(o) && 0 === e.selection.getCaretOffsets(i).left ? e.util.isKey(t, e.util.keyCode.BACKSPACE) && r.test(i.previousElementSibling.innerHTML) ? (i.previousElementSibling.parentNode.removeChild(i.previousElementSibling),
                    t.preventDefault()) : !this.options.disableDoubleReturn && e.util.isKey(t, e.util.keyCode.ENTER) && (n = this.options.ownerDocument.createElement("p"),
                    n.innerHTML = "<br>",
                    i.previousElementSibling.parentNode.insertBefore(n, i),
                    t.preventDefault()) : e.util.isKey(t, e.util.keyCode.DELETE) && i.nextElementSibling && i.previousElementSibling && !s.test(o) && r.test(i.innerHTML) && s.test(i.nextElementSibling.nodeName.toLowerCase()) ? (e.selection.moveCursor(this.options.ownerDocument, i.nextElementSibling),
                    i.previousElementSibling.parentNode.removeChild(i),
                    t.preventDefault()) : e.util.isKey(t, e.util.keyCode.BACKSPACE) && "li" === o && r.test(i.innerHTML) && !i.previousElementSibling && !i.parentElement.previousElementSibling && i.nextElementSibling && "li" === i.nextElementSibling.nodeName.toLowerCase() ? (n = this.options.ownerDocument.createElement("p"),
                    n.innerHTML = "<br>",
                    i.parentElement.parentElement.insertBefore(n, i.parentElement),
                    e.selection.moveCursor(this.options.ownerDocument, n),
                    i.parentElement.removeChild(i),
                    t.preventDefault()) : e.util.isKey(t, e.util.keyCode.BACKSPACE) && !1 !== e.util.getClosestTag(i, "blockquote") && 0 === e.selection.getCaretOffsets(i).left ? (t.preventDefault(),
                    e.util.execFormatBlock(this.options.ownerDocument, "p")) : e.util.isKey(t, e.util.keyCode.ENTER) && !1 !== e.util.getClosestTag(i, "blockquote") && 0 === e.selection.getCaretOffsets(i).right ? (n = this.options.ownerDocument.createElement("p"),
                    n.innerHTML = "<br>",
                    i.parentElement.insertBefore(n, i.nextSibling),
                    e.selection.moveCursor(this.options.ownerDocument, n),
                    t.preventDefault()) : e.util.isKey(t, e.util.keyCode.BACKSPACE) && e.util.isMediumEditorElement(i.parentElement) && !i.previousElementSibling && i.nextElementSibling && r.test(i.innerHTML) && (t.preventDefault(),
                    e.selection.moveCursor(this.options.ownerDocument, i.nextSibling),
                    i.parentElement.removeChild(i))
                }
                function r(t) {
                    var n, i = e.selection.getSelectionStart(this.options.ownerDocument);
                    i && (e.util.isMediumEditorElement(i) && 0 === i.children.length && !e.util.isBlockContainer(i) && this.options.ownerDocument.execCommand("formatBlock", !1, "p"),
                    !e.util.isKey(t, e.util.keyCode.ENTER) || e.util.isListItem(i) || e.util.isBlockContainer(i) || (n = i.nodeName.toLowerCase(),
                    "a" === n ? this.options.ownerDocument.execCommand("unlink", !1, null) : t.shiftKey || t.ctrlKey || this.options.ownerDocument.execCommand("formatBlock", !1, "p")))
                }
                function s(e, t) {
                    var n = t.parentNode.querySelector('textarea[medium-editor-textarea-id="' + t.getAttribute("medium-editor-textarea-id") + '"]');
                    n && (n.value = t.innerHTML.trim())
                }
                function a(e) {
                    e._mediumEditors || (e._mediumEditors = [null]),
                    this.id || (this.id = e._mediumEditors.length),
                    e._mediumEditors[this.id] = this
                }
                function l(e) {
                    e._mediumEditors && e._mediumEditors[this.id] && (e._mediumEditors[this.id] = null)
                }
                function c(t, n, i) {
                    var o = [];
                    if (t || (t = []),
                    "string" == typeof t && (t = n.querySelectorAll(t)),
                    e.util.isElement(t) && (t = [t]),
                    i)
                        for (var r = 0; r < t.length; r++) {
                            var s = t[r];
                            !e.util.isElement(s) || s.getAttribute("data-medium-editor-element") || s.getAttribute("medium-editor-textarea-id") || o.push(s)
                        }
                    else
                        o = Array.prototype.slice.apply(t);
                    return o
                }
                function u(e) {
                    var t = e.parentNode.querySelector('textarea[medium-editor-textarea-id="' + e.getAttribute("medium-editor-textarea-id") + '"]');
                    t && (t.classList.remove("medium-editor-hidden"),
                    t.removeAttribute("medium-editor-textarea-id")),
                    e.parentNode && e.parentNode.removeChild(e)
                }
                function d(e, t) {
                    return Object.keys(t).forEach(function(n) {
                        void 0 === e[n] && (e[n] = t[n])
                    }),
                    e
                }
                function h(e, t, n) {
                    return e = d(e, {
                        window: n.options.contentWindow,
                        document: n.options.ownerDocument,
                        base: n
                    }),
                    "function" == typeof e.init && e.init(),
                    e.name || (e.name = t),
                    e
                }
                function f() {
                    return !this.elements.every(function(e) {
                        return !!e.getAttribute("data-disable-toolbar")
                    }) && !1 !== this.options.toolbar
                }
                function p() {
                    return !!f.call(this) && !1 !== this.options.anchorPreview
                }
                function m() {
                    return !1 !== this.options.placeholder
                }
                function g() {
                    return !1 !== this.options.autoLink
                }
                function v() {
                    return !1 !== this.options.imageDragging
                }
                function b() {
                    return !1 !== this.options.keyboardCommands
                }
                function y() {
                    return !this.options.extensions.imageDragging
                }
                function E(e) {
                    for (var t = this.options.ownerDocument.createElement("div"), n = Date.now(), i = "medium-editor-" + n, o = e.attributes; this.options.ownerDocument.getElementById(i); )
                        n++,
                        i = "medium-editor-" + n;
                    t.className = e.className,
                    t.id = i,
                    t.innerHTML = e.value,
                    e.setAttribute("medium-editor-textarea-id", i);
                    for (var r = 0, s = o.length; r < s; r++)
                        t.hasAttribute(o[r].nodeName) || t.setAttribute(o[r].nodeName, o[r].value);
                    return e.form && this.on(e.form, "reset", function(e) {
                        e.defaultPrevented || this.resetContent(this.options.ownerDocument.getElementById(i))
                    }
                    .bind(this)),
                    e.classList.add("medium-editor-hidden"),
                    e.parentNode.insertBefore(t, e),
                    t
                }
                function C(t, i) {
                    if (!t.getAttribute("data-medium-editor-element")) {
                        "textarea" === t.nodeName.toLowerCase() && (t = E.call(this, t),
                        this.instanceHandleEditableInput || (this.instanceHandleEditableInput = s.bind(this),
                        this.subscribe("editableInput", this.instanceHandleEditableInput))),
                        this.options.disableEditing || t.getAttribute("data-disable-editing") || (t.setAttribute("contentEditable", !0),
                        t.setAttribute("spellcheck", this.options.spellcheck)),
                        this.instanceHandleEditableKeydownEnter || (t.getAttribute("data-disable-return") || t.getAttribute("data-disable-double-return")) && (this.instanceHandleEditableKeydownEnter = n.bind(this),
                        this.subscribe("editableKeydownEnter", this.instanceHandleEditableKeydownEnter)),
                        this.options.disableReturn || t.getAttribute("data-disable-return") || this.on(t, "keyup", r.bind(this));
                        var o = e.util.guid();
                        t.setAttribute("data-medium-editor-element", !0),
                        t.classList.add("medium-editor-element"),
                        t.setAttribute("role", "textbox"),
                        t.setAttribute("aria-multiline", !0),
                        t.setAttribute("data-medium-editor-editor-index", i),
                        t.setAttribute("medium-editor-index", o),
                        S[o] = t.innerHTML,
                        this.events.attachAllEventsToElement(t)
                    }
                    return t
                }
                function T() {
                    this.subscribe("editableKeydownTab", i.bind(this)),
                    this.subscribe("editableKeydownDelete", o.bind(this)),
                    this.subscribe("editableKeydownEnter", o.bind(this)),
                    this.options.disableExtraSpaces && this.subscribe("editableKeydownSpace", t.bind(this)),
                    this.instanceHandleEditableKeydownEnter || (this.options.disableReturn || this.options.disableDoubleReturn) && (this.instanceHandleEditableKeydownEnter = n.bind(this),
                    this.subscribe("editableKeydownEnter", this.instanceHandleEditableKeydownEnter))
                }
                function w() {
                    if (this.extensions = [],
                    Object.keys(this.options.extensions).forEach(function(e) {
                        "toolbar" !== e && this.options.extensions[e] && this.extensions.push(h(this.options.extensions[e], e, this))
                    }, this),
                    y.call(this)) {
                        var t = this.options.fileDragging;
                        t || (t = {},
                        v.call(this) || (t.allowedTypes = [])),
                        this.addBuiltInExtension("fileDragging", t)
                    }
                    var n = {
                        paste: !0,
                        "anchor-preview": p.call(this),
                        autoLink: g.call(this),
                        keyboardCommands: b.call(this),
                        placeholder: m.call(this)
                    };
                    Object.keys(n).forEach(function(e) {
                        n[e] && this.addBuiltInExtension(e)
                    }, this);
                    var i = this.options.extensions.toolbar;
                    if (!i && f.call(this)) {
                        var o = e.util.extend({}, this.options.toolbar, {
                            allowMultiParagraphSelection: this.options.allowMultiParagraphSelection
                        });
                        i = new e.extensions.toolbar(o)
                    }
                    i && this.extensions.push(h(i, "toolbar", this))
                }
                function x(t, n) {
                    var i = [["allowMultiParagraphSelection", "toolbar.allowMultiParagraphSelection"]];
                    return n && i.forEach(function(t) {
                        n.hasOwnProperty(t[0]) && void 0 !== n[t[0]] && e.util.deprecated(t[0], t[1], "v6.0.0")
                    }),
                    e.util.defaults({}, n, t)
                }
                function _(t, n) {
                    var i, o, r = /^append-(.+)$/gi, s = /justify([A-Za-z]*)$/g;
                    if (i = r.exec(t))
                        return e.util.execFormatBlock(this.options.ownerDocument, i[1]);
                    if ("fontSize" === t)
                        return n.size && e.util.deprecated(".size option for fontSize command", ".value", "6.0.0"),
                        o = n.value || n.size,
                        this.options.ownerDocument.execCommand("fontSize", !1, o);
                    if ("fontName" === t)
                        return n.name && e.util.deprecated(".name option for fontName command", ".value", "6.0.0"),
                        o = n.value || n.name,
                        this.options.ownerDocument.execCommand("fontName", !1, o);
                    if ("createLink" === t)
                        return this.createLink(n);
                    if ("image" === t) {
                        var a = this.options.contentWindow.getSelection().toString().trim();
                        return this.options.ownerDocument.execCommand("insertImage", !1, a)
                    }
                    if ("html" === t) {
                        var l = this.options.contentWindow.getSelection().toString().trim();
                        return e.util.insertHTMLCommand(this.options.ownerDocument, l)
                    }
                    if (s.exec(t)) {
                        var c = this.options.ownerDocument.execCommand(t, !1, null)
                          , u = e.selection.getSelectedParentElement(e.selection.getSelectionRange(this.options.ownerDocument));
                        return u && A.call(this, e.util.getTopBlockContainer(u)),
                        c
                    }
                    return o = n && n.value,
                    this.options.ownerDocument.execCommand(t, !1, o)
                }
                function A(t) {
                    if (t) {
                        var n, i = Array.prototype.slice.call(t.childNodes).filter(function(e) {
                            var t = "div" === e.nodeName.toLowerCase();
                            return t && !n && (n = e.style.textAlign),
                            t
                        });
                        i.length && (this.saveSelection(),
                        i.forEach(function(t) {
                            if (t.style.textAlign === n) {
                                var i = t.lastChild;
                                if (i) {
                                    e.util.unwrap(t, this.options.ownerDocument);
                                    var o = this.options.ownerDocument.createElement("BR");
                                    i.parentNode.insertBefore(o, i.nextSibling)
                                }
                            }
                        }, this),
                        t.style.textAlign = n,
                        this.restoreSelection())
                    }
                }
                var S = {};
                e.prototype = {
                    init: function(e, t) {
                        return this.options = x.call(this, this.defaults, t),
                        this.origElements = e,
                        this.options.elementsContainer || (this.options.elementsContainer = this.options.ownerDocument.body),
                        this.setup()
                    },
                    setup: function() {
                        this.isActive || (a.call(this, this.options.contentWindow),
                        this.events = new e.Events(this),
                        this.elements = [],
                        this.addElements(this.origElements),
                        0 !== this.elements.length && (this.isActive = !0,
                        w.call(this),
                        T.call(this)))
                    },
                    destroy: function() {
                        this.isActive && (this.isActive = !1,
                        this.extensions.forEach(function(e) {
                            "function" == typeof e.destroy && e.destroy()
                        }, this),
                        this.events.destroy(),
                        this.elements.forEach(function(e) {
                            this.options.spellcheck && (e.innerHTML = e.innerHTML),
                            e.removeAttribute("contentEditable"),
                            e.removeAttribute("spellcheck"),
                            e.removeAttribute("data-medium-editor-element"),
                            e.classList.remove("medium-editor-element"),
                            e.removeAttribute("role"),
                            e.removeAttribute("aria-multiline"),
                            e.removeAttribute("medium-editor-index"),
                            e.removeAttribute("data-medium-editor-editor-index"),
                            e.getAttribute("medium-editor-textarea-id") && u(e)
                        }, this),
                        this.elements = [],
                        this.instanceHandleEditableKeydownEnter = null,
                        this.instanceHandleEditableInput = null,
                        l.call(this, this.options.contentWindow))
                    },
                    on: function(e, t, n, i) {
                        return this.events.attachDOMEvent(e, t, n, i),
                        this
                    },
                    off: function(e, t, n, i) {
                        return this.events.detachDOMEvent(e, t, n, i),
                        this
                    },
                    subscribe: function(e, t) {
                        return this.events.attachCustomEvent(e, t),
                        this
                    },
                    unsubscribe: function(e, t) {
                        return this.events.detachCustomEvent(e, t),
                        this
                    },
                    trigger: function(e, t, n) {
                        return this.events.triggerCustomEvent(e, t, n),
                        this
                    },
                    delay: function(e) {
                        var t = this;
                        return setTimeout(function() {
                            t.isActive && e()
                        }, this.options.delay)
                    },
                    serialize: function() {
                        var e, t, n = {}, i = this.elements.length;
                        for (e = 0; e < i; e += 1)
                            t = "" !== this.elements[e].id ? this.elements[e].id : "element-" + e,
                            n[t] = {
                                value: this.elements[e].innerHTML.trim()
                            };
                        return n
                    },
                    getExtensionByName: function(e) {
                        var t;
                        return this.extensions && this.extensions.length && this.extensions.some(function(n) {
                            return n.name === e && (t = n,
                            !0)
                        }),
                        t
                    },
                    addBuiltInExtension: function(t, n) {
                        var i, o = this.getExtensionByName(t);
                        if (o)
                            return o;
                        switch (t) {
                        case "anchor":
                            i = e.util.extend({}, this.options.anchor, n),
                            o = new e.extensions.anchor(i);
                            break;
                        case "anchor-preview":
                            o = new e.extensions.anchorPreview(this.options.anchorPreview);
                            break;
                        case "autoLink":
                            o = new e.extensions.autoLink;
                            break;
                        case "fileDragging":
                            o = new e.extensions.fileDragging(n);
                            break;
                        case "fontname":
                            o = new e.extensions.fontName(this.options.fontName);
                            break;
                        case "fontsize":
                            o = new e.extensions.fontSize(n);
                            break;
                        case "keyboardCommands":
                            o = new e.extensions.keyboardCommands(this.options.keyboardCommands);
                            break;
                        case "paste":
                            o = new e.extensions.paste(this.options.paste);
                            break;
                        case "placeholder":
                            o = new e.extensions.placeholder(this.options.placeholder);
                            break;
                        default:
                            e.extensions.button.isBuiltInButton(t) && (n ? (i = e.util.defaults({}, n, e.extensions.button.prototype.defaults[t]),
                            o = new e.extensions.button(i)) : o = new e.extensions.button(t))
                        }
                        return o && this.extensions.push(h(o, t, this)),
                        o
                    },
                    stopSelectionUpdates: function() {
                        this.preventSelectionUpdates = !0
                    },
                    startSelectionUpdates: function() {
                        this.preventSelectionUpdates = !1
                    },
                    checkSelection: function() {
                        var e = this.getExtensionByName("toolbar");
                        return e && e.checkState(),
                        this
                    },
                    queryCommandState: function(e) {
                        var t, n = /^full-(.+)$/gi, i = null;
                        (t = n.exec(e)) && (e = t[1]);
                        try {
                            i = this.options.ownerDocument.queryCommandState(e)
                        } catch (e) {
                            i = null
                        }
                        return i
                    },
                    execAction: function(t, n) {
                        var i, o;
                        return i = /^full-(.+)$/gi.exec(t),
                        i ? (this.saveSelection(),
                        this.selectAllContents(),
                        o = _.call(this, i[1], n),
                        this.restoreSelection()) : o = _.call(this, t, n),
                        "insertunorderedlist" !== t && "insertorderedlist" !== t || e.util.cleanListDOM(this.options.ownerDocument, this.getSelectedParentElement()),
                        this.checkSelection(),
                        o
                    },
                    getSelectedParentElement: function(t) {
                        return void 0 === t && (t = this.options.contentWindow.getSelection().getRangeAt(0)),
                        e.selection.getSelectedParentElement(t)
                    },
                    selectAllContents: function() {
                        var t = e.selection.getSelectionElement(this.options.contentWindow);
                        if (t) {
                            for (; 1 === t.children.length; )
                                t = t.children[0];
                            this.selectElement(t)
                        }
                    },
                    selectElement: function(t) {
                        e.selection.selectNode(t, this.options.ownerDocument);
                        var n = e.selection.getSelectionElement(this.options.contentWindow);
                        n && this.events.focusElement(n)
                    },
                    getFocusedElement: function() {
                        var e;
                        return this.elements.some(function(t) {
                            return !e && t.getAttribute("data-medium-focused") && (e = t),
                            !!e
                        }, this),
                        e
                    },
                    exportSelection: function() {
                        var t = e.selection.getSelectionElement(this.options.contentWindow)
                          , n = this.elements.indexOf(t)
                          , i = null;
                        return n >= 0 && (i = e.selection.exportSelection(t, this.options.ownerDocument)),
                        null !== i && 0 !== n && (i.editableElementIndex = n),
                        i
                    },
                    saveSelection: function() {
                        this.selectionState = this.exportSelection()
                    },
                    importSelection: function(t, n) {
                        if (t) {
                            var i = this.elements[t.editableElementIndex || 0];
                            e.selection.importSelection(t, i, this.options.ownerDocument, n)
                        }
                    },
                    restoreSelection: function() {
                        this.importSelection(this.selectionState)
                    },
                    createLink: function(t) {
                        var n, i = e.selection.getSelectionElement(this.options.contentWindow), o = {};
                        if (-1 !== this.elements.indexOf(i)) {
                            try {
                                if (this.events.disableCustomEvent("editableInput"),
                                t.url && e.util.deprecated(".url option for createLink", ".value", "6.0.0"),
                                (n = t.url || t.value) && n.trim().length > 0) {
                                    var r = this.options.contentWindow.getSelection();
                                    if (r) {
                                        var s, a, l, c, u = r.getRangeAt(0), d = u.commonAncestorContainer;
                                        if (3 === u.endContainer.nodeType && 3 !== u.startContainer.nodeType && 0 === u.startOffset && u.startContainer.firstChild === u.endContainer && (d = u.endContainer),
                                        a = e.util.getClosestBlockContainer(u.startContainer),
                                        l = e.util.getClosestBlockContainer(u.endContainer),
                                        3 !== d.nodeType && 0 !== d.textContent.length && a === l) {
                                            var h = a || i
                                              , f = this.options.ownerDocument.createDocumentFragment();
                                            this.execAction("unlink"),
                                            s = this.exportSelection(),
                                            f.appendChild(h.cloneNode(!0)),
                                            i === h ? e.selection.select(this.options.ownerDocument, h.firstChild, 0, h.lastChild, 3 === h.lastChild.nodeType ? h.lastChild.nodeValue.length : h.lastChild.childNodes.length) : e.selection.select(this.options.ownerDocument, h, 0, h, h.childNodes.length);
                                            var p = this.exportSelection();
                                            c = e.util.findOrCreateMatchingTextNodes(this.options.ownerDocument, f, {
                                                start: s.start - p.start,
                                                end: s.end - p.start,
                                                editableElementIndex: s.editableElementIndex
                                            }),
                                            0 === c.length && (f = this.options.ownerDocument.createDocumentFragment(),
                                            f.appendChild(d.cloneNode(!0)),
                                            c = [f.firstChild.firstChild, f.firstChild.lastChild]),
                                            e.util.createLink(this.options.ownerDocument, c, n.trim());
                                            var m = (f.firstChild.innerHTML.match(/^\s+/) || [""])[0].length;
                                            e.util.insertHTMLCommand(this.options.ownerDocument, f.firstChild.innerHTML.replace(/^\s+/, "")),
                                            s.start -= m,
                                            s.end -= m,
                                            this.importSelection(s)
                                        } else
                                            this.options.ownerDocument.execCommand("createLink", !1, n);
                                        this.options.targetBlank || "_blank" === t.target ? e.util.setTargetBlank(e.selection.getSelectionStart(this.options.ownerDocument), n) : e.util.removeTargetBlank(e.selection.getSelectionStart(this.options.ownerDocument), n),
                                        t.buttonClass && e.util.addClassToAnchors(e.selection.getSelectionStart(this.options.ownerDocument), t.buttonClass)
                                    }
                                }
                                if (this.options.targetBlank || "_blank" === t.target || t.buttonClass) {
                                    o = this.options.ownerDocument.createEvent("HTMLEvents"),
                                    o.initEvent("input", !0, !0, this.options.contentWindow);
                                    for (var g = 0, v = this.elements.length; g < v; g += 1)
                                        this.elements[g].dispatchEvent(o)
                                }
                            } finally {
                                this.events.enableCustomEvent("editableInput")
                            }
                            this.events.triggerCustomEvent("editableInput", o, i)
                        }
                    },
                    cleanPaste: function(e) {
                        this.getExtensionByName("paste").cleanPaste(e)
                    },
                    pasteHTML: function(e, t) {
                        this.getExtensionByName("paste").pasteHTML(e, t)
                    },
                    setContent: function(e, t) {
                        if (t = t || 0,
                        this.elements[t]) {
                            var n = this.elements[t];
                            n.innerHTML = e,
                            this.checkContentChanged(n)
                        }
                    },
                    getContent: function(e) {
                        return e = e || 0,
                        this.elements[e] ? this.elements[e].innerHTML.trim() : null
                    },
                    checkContentChanged: function(t) {
                        t = t || e.selection.getSelectionElement(this.options.contentWindow),
                        this.events.updateInput(t, {
                            target: t,
                            currentTarget: t
                        })
                    },
                    resetContent: function(e) {
                        if (e) {
                            var t = this.elements.indexOf(e);
                            return void (-1 !== t && this.setContent(S[e.getAttribute("medium-editor-index")], t))
                        }
                        this.elements.forEach(function(e, t) {
                            this.setContent(S[e.getAttribute("medium-editor-index")], t)
                        }, this)
                    },
                    addElements: function(e) {
                        var t = c(e, this.options.ownerDocument, !0);
                        if (0 === t.length)
                            return !1;
                        t.forEach(function(e) {
                            e = C.call(this, e, this.id),
                            this.elements.push(e),
                            this.trigger("addElement", {
                                target: e,
                                currentTarget: e
                            }, e)
                        }, this)
                    },
                    removeElements: function(e) {
                        var t = c(e, this.options.ownerDocument)
                          , n = t.map(function(e) {
                            return e.getAttribute("medium-editor-textarea-id") && e.parentNode ? e.parentNode.querySelector('div[medium-editor-textarea-id="' + e.getAttribute("medium-editor-textarea-id") + '"]') : e
                        });
                        this.elements = this.elements.filter(function(e) {
                            return -1 === n.indexOf(e) || (this.events.cleanupElement(e),
                            e.getAttribute("medium-editor-textarea-id") && u(e),
                            this.trigger("removeElement", {
                                target: e,
                                currentTarget: e
                            }, e),
                            !1)
                        }, this)
                    }
                },
                e.getEditorFromElement = function(e) {
                    var t = e.getAttribute("data-medium-editor-editor-index")
                      , n = e && e.ownerDocument && (e.ownerDocument.defaultView || e.ownerDocument.parentWindow);
                    return n && n._mediumEditors && n._mediumEditors[t] ? n._mediumEditors[t] : null
                }
            }(),
            function() {
                e.prototype.defaults = {
                    activeButtonClass: "medium-editor-button-active",
                    buttonLabels: !1,
                    delay: 0,
                    disableReturn: !1,
                    disableDoubleReturn: !1,
                    disableExtraSpaces: !1,
                    disableEditing: !1,
                    autoLink: !1,
                    elementsContainer: !1,
                    contentWindow: window,
                    ownerDocument: document,
                    targetBlank: !1,
                    extensions: {},
                    spellcheck: !0
                }
            }(),
            e.parseVersionString = function(e) {
                var t = e.split("-")
                  , n = t[0].split(".")
                  , i = t.length > 1 ? t[1] : "";
                return {
                    major: parseInt(n[0], 10),
                    minor: parseInt(n[1], 10),
                    revision: parseInt(n[2], 10),
                    preRelease: i,
                    toString: function() {
                        return [n[0], n[1], n[2]].join(".") + (i ? "-" + i : "")
                    }
                }
            }
            ,
            e.version = e.parseVersionString.call(this, {
                version: "5.23.3"
            }.version),
            e
        }())
    }
    ).call(t, n(8))
}
, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(e) {
        if (u === setTimeout)
            return setTimeout(e, 0);
        if ((u === n || !u) && setTimeout)
            return u = setTimeout,
            setTimeout(e, 0);
        try {
            return u(e, 0)
        } catch (t) {
            try {
                return u.call(null, e, 0)
            } catch (t) {
                return u.call(this, e, 0)
            }
        }
    }
    function r(e) {
        if (d === clearTimeout)
            return clearTimeout(e);
        if ((d === i || !d) && clearTimeout)
            return d = clearTimeout,
            clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }
    function s() {
        m && f && (m = !1,
        f.length ? p = f.concat(p) : g = -1,
        p.length && a())
    }
    function a() {
        if (!m) {
            var e = o(s);
            m = !0;
            for (var t = p.length; t; ) {
                for (f = p,
                p = []; ++g < t; )
                    f && f[g].run();
                g = -1,
                t = p.length
            }
            f = null,
            m = !1,
            r(e)
        }
    }
    function l(e, t) {
        this.fun = e,
        this.array = t
    }
    function c() {}
    var u, d, h = e.exports = {};
    !function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            u = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            d = i
        }
    }();
    var f, p = [], m = !1, g = -1;
    h.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        p.push(new l(e,t)),
        1 !== p.length || m || o(a)
    }
    ,
    l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    h.title = "browser",
    h.browser = !0,
    h.env = {},
    h.argv = [],
    h.version = "",
    h.versions = {},
    h.on = c,
    h.addListener = c,
    h.once = c,
    h.off = c,
    h.removeListener = c,
    h.removeAllListeners = c,
    h.emit = c,
    h.prependListener = c,
    h.prependOnceListener = c,
    h.listeners = function(e) {
        return []
    }
    ,
    h.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    h.cwd = function() {
        return "/"
    }
    ,
    h.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    h.umask = function() {
        return 0
    }
}
]);
//# sourceMappingURL=bundle.js.map
