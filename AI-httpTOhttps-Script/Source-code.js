// ==UserScript==
// @name         自動將HTTP改為HTTPS，同時處理頁面內的圖片地址
// @namespace    httpstohttps.example.com
// @version      1.1
// @description  將瀏覽器地址欄中的HTTP自動改為HTTPS，以及處理頁面內的圖片地址，並且在網頁標題中添加一個不安全的圖標
// @author       逍遥客
// @match        *http://*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 使用正則表達式匹配的白名單
    var whitelistRegex = [
        /http:\/\/((m||www)\.)?qunxs\.(cn||com)\/.*/g,
        /http:\/\/((m||www)\.)?yck2\.com\/.*/g,
        /http:\/\/((m||www)\.)?guoxue\.com\/.*/g,
        /http:\/\/((m||www)\.)?hnskl\.org\/.*/g,
        /http:\/\/((m||www)\.)?zhexueshi\.com\/.*/g,
        /http:\/\/.*\.gov\.cn\/.*/g,
        /http:\/\/((m||www)\.)?qstheory\.cn\/.*/g,
        /http:\/\/m?\.?caibaojian\.com\/.*/g,
        /http:\/\/m?\.?blog\.itpub\.net\/.*/g

    ];

    // 檢查當前網址是否在白名單中
    function isWhitelisted(url) {
        return whitelistRegex.some(function(regex) {
            return regex.test(url);
        });
    }

    // 替換頁面內的資源請求為HTTPS
    function replaceResourceWithHttps(elements, resourceType) {
        elements.forEach(function(element) {
            if (element.src && element.src.startsWith('http://')) {
                element.src = element.src.replace(/^http:/, 'https:');
            }
            // 這裡可以添加其他資源類型的替換邏輯，例如鏈接、腳本等
        });
    }

    // 處理地址欄和頁面內資源
    function processPage() {
        // 獲取當前網址
        var currentUrl = window.location.href;

        // 檢查是否在白名單中
        if (isWhitelisted(currentUrl)) {
            // 在網頁標題中添加一個不安全的圖標
            addUnsafeIconToTitle();
            alert('當前網站使用的是不安全的「HTTP」協定！');
            return;
        }

        // 如果是HTTP協議，則將地址欄替換為HTTPS
        if (window.location.protocol === "http:") {
            window.location.href = window.location.href.replace(/^http:/, 'https:');
        }

        // 替換頁面內的資源請求為HTTPS，包括圖片、音頻和視頻
        var elements = document.querySelectorAll('img, audio, video');
        replaceResourceWithHttps(elements, 'resource');
    }

    // 監聽地址欄的變化
    window.addEventListener('load', processPage);

    // 在網頁標題中添加一個不安全的圖標
    function addUnsafeIconToTitle() {
        // 獲取網頁標題元素
        var titleElement = document.querySelector('title');

        // 如果存在，則在其內容前面添加一個紅色的不安全圖標
        if (titleElement) {
            titleElement.textContent = "⚠ | " + titleElement.textContent;
        }
    }
})();
