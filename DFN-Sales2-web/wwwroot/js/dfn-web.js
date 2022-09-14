!function (e, r) {
    if (void 0 !== e && !e.adbrix) {
        var o = {queue: []}, t = navigator.userAgent.toLowerCase(), c = r.createElement("script"),
            a = "Netscape" === navigator.appName && -1 !== navigator.userAgent.search("Trident") || -1 !== t.indexOf("msie") ? "abx-web-sdk.ie.min.js" : "abx-web-sdk.min.js";
        c.type = "text/javascript", c.async = !0, c.src = "//static.adbrix.io/web-sdk/latest/" + a, c.onload = function () {
            e.adbrix.runQueuedFunctions ? e.adbrix.runQueuedFunctions() : console.log("[adbrix] Error: could not load SDK")
        };
        var i = r.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(c, i);
        ["init", "onInitialized", "login", "getUserId", "logout", "userProperty.get", "userProperty.getAll", "userProperty.addOrUpdate", "userProperty.remove", "userProperty.removes", "common.signUp", "common.invite", "common.useCredit", "common.purchase", "event.send", "debug.traceListener", "commerceAttr.categories", "commerceAttr.product", "commerce.viewHome", "commerce.categoryView", "commerce.productView", "commerce.addToCart", "commerce.addToWishList", "commerce.reviewOrder", "commerce.refund", "commerce.search", "commerce.share", "commerce.listView", "commerce.cartView", "commerce.paymentInfoAdded", "game.tutorialComplete", "game.characterCreated", "game.stageCleared", "game.levelAchieved"].forEach(function (e) {
            var r = e.split("."), t = r.pop();
            r.reduce(function (e, r) {
                return e[r] = e[r] || {}
            }, o)[t] = function () {
                o.queue.push([e, arguments])
            }
        }), e.adbrix = o
    }
}(window, document);
