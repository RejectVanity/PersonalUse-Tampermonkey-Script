// ==UserScript==
// @name         維基百科重定向
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  重定向 zh.m.wikipedia.org/zh-cn/ 到 zh.m.wikipedia.org/zh-tw/
// @author       您
// @match        https://zh.m.wikipedia.org/zh-cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 獲取當前地址欄的 URL
    var currentURL = window.location.href;

    // 檢查地址欄是否包含 "https://zh.m.wikipedia.org/zh-cn/"
    if (currentURL.includes("https://zh.m.wikipedia.org/zh-cn/")) {
        // 如果是，重定向到對應的地址，保留頁面路徑
        var newPath = currentURL.replace("https://zh.m.wikipedia.org/zh-cn/", "https://zh.m.wikipedia.org/zh-tw/");
        window.location.href = newPath;
    }
})();
