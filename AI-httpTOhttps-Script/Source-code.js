// ==UserScript==
// @name         自动将HTTP改为HTTPS，同时处理页面内的图片地址
// @namespace    httpstohttps.example.com
// @version      1.0
// @description  将浏览器地址栏中的HTTP自动改为HTTPS，以及处理页面内的图片地址
// @author       逍遙客
// @match        *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 使用正则表达式匹配的白名单
    var whitelistRegex = [
        /http:\/\/www\.qunxs\.com\/.*/g,
        /http:\/\/www\.yck2\.com\/.*/g,
        /http:\/\/www\.guoxue\.com\/.*/g,
        /http:\/\/www\.hnskl\.org\/.*/g,
        /http:\/\/www\.zhexueshi\.com\/.*/g,
        /http:\/\/.*\.gov\.cn\/.*/g,
        /http:\/\/www\.qstheory\.cn\/.*/g,
        
    ];

    // 检查当前网址是否在白名单中
    function isWhitelisted(url) {
        return whitelistRegex.some(function(regex) {
            return regex.test(url);
        });
    }

    // 替换页面内的资源请求为HTTPS
    function replaceResourceWithHttps(elements, resourceType) {
        elements.forEach(function(element) {
            if (element.src && element.src.startsWith('http://')) {
                element.src = element.src.replace(/^http:/, 'https:');
            }
            // 这里可以添加其他资源类型的替换逻辑，例如链接、脚本等
        });
    }

    // 处理地址栏和页面内资源
    function processPage() {
        // 获取当前网址
        var currentUrl = window.location.href;

        // 检查是否在白名单中
        if (isWhitelisted(currentUrl)) {
            alert('當前網站使用的是不安全的「HTTP」協定！');
            return;
        }

        // 如果是HTTP协议，则将地址栏替换为HTTPS
        if (window.location.protocol === "http:") {
            window.location.href = window.location.href.replace(/^http:/, 'https:');
        }

        // 替换页面内的资源请求为HTTPS，包括图片、音频和视频
        var elements = document.querySelectorAll('img, audio, video');
        replaceResourceWithHttps(elements, 'resource');
    }

    // 监听地址栏的变化
    window.addEventListener('load', processPage);
})();
