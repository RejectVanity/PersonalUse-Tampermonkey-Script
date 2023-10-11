// ==UserScript==
// @name         維基百科重定向
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  重定向 zh.m.wikipedia.org/zh-cn/ 到 zh.m.wikipedia.org/zh-tw/
// @author       您
// @match        https://zh.m.wikipedia.org/zh-cn/*
// @match        https://zh.m.wikipedia.org/zh-hant/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 获取当前地址栏的 URL
    var currentURL = window.location.href;

    // 检查地址栏是否包含 "https://zh.m.wikipedia.org/zh-cn/" 或 "https://zh.m.wikipedia.org/zh-hant/"
    if (currentURL.includes("https://zh.m.wikipedia.org/zh-cn/") || currentURL.includes("https://zh.m.wikipedia.org/zh-hant/")) {
        // 如果是，重定向到对应的地址，保留页面路径
        var newPath = currentURL.replace("/zh-cn/", "/zh-tw/").replace("/zh-hant/", "/zh-tw/");
        window.location.href = newPath;
    }
})();
