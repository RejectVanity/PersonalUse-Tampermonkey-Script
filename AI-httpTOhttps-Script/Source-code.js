// ==UserScript==
// @name         自动将HTTP改为HTTPS，同时处理页面内的图片地址
// @namespace    httpstohttps.example.com
// @version      1.0
// @description  将浏览器地址栏中的HTTP自动改为HTTPS，以及处理页面内的图片地址
// @author       逍遙客
// @exclude-match   http://www.yck2.com/*
// @match        *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 替换页面内的资源请求为HTTPS
    function replaceHttpWithHttps(element) {
        if (element.tagName === 'IMG' && element.src.startsWith('http://')) {
            element.src = element.src.replace(/^http:/, 'https:');
        }
        // 可以添加更多类型的资源，如链接、脚本等，进行相应的替换
    }

    // 处理地址栏和页面内资源
    function processPage() {
        // 如果是HTTP协议，则将地址栏替换为HTTPS
        if (window.location.protocol === "http:") {
            window.location.href = window.location.href.replace(/^http:/, 'https:');
        }

        // 替换页面内的资源请求为HTTPS
        var elements = document.querySelectorAll('img'); // 可以添加其他资源类型的选择器
        elements.forEach(replaceHttpWithHttps);
    }

    // 监听地址栏的变化
    window.addEventListener('load', processPage);
})();
