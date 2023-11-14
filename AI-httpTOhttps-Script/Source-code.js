// ==UserScript==
// @name         自動將HTTP改為HTTPS，同時處理頁面內的圖片地址
// @namespace    httpstohttps.example.com
// @version      1.1
// @description  將瀏覽器地址欄中的HTTP自動改為HTTPS，以及處理頁面內的圖片地址
// @author       逍遥客
// @match        *http://*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

        // 使用正則表達式匹配的白名單
    var whitelistRegex = [
        /https?:\/\/(?:www\.)?(qunxs\.(?:cn|com)|yck2\.com|guoxue\.com|hnskl\.org|zhexueshi\.com|.*\.gov\.cn|qstheory\.cn|m?\.?caibaojian\.com|m?\.?blog\.itpub\.net|cckf\.org|morin\.feiyu\.vin|morin\.vin|www\.8vdy\.com|11txs\.com|www\.86109\.com|gushi\.ci)\/.*/g
    ];


    // 檢查當前網址是否在白名單中
    function isWhitelisted(url) {
        return whitelistRegex.some(regex => regex.test(url));
    }

    // 替換頁面內的資源請求為HTTPS
    function replaceResourceWithHttps(elements, resourceType) {
        elements.forEach(element => {
            if (element.src && element.src.startsWith('http://')) {
                element.src = element.src.replace(/^http:/, 'https:');
            }
            // 這裡可以添加其他資源類型的替換邏輯，例如鏈接、腳本等
        });
    }

    // 處理地址欄和頁面內資源
    function processPage() {
        // 獲取當前網址
        const currentUrl = window.location.href;

        // 檢查是否在白名單中
        if (isWhitelisted(currentUrl)) {
            return;
        }

        // 如果是HTTP協議，則將地址欄替換為HTTPS
        if (window.location.protocol === "http:") {
            window.location.href = window.location.href.replace(/^http:/, 'https:');
        }

        // 替換頁面內的資源請求為HTTPS，包括圖片、音頻和視頻
        const elements = document.querySelectorAll('img, audio, video');
        replaceResourceWithHttps(elements, 'resource');
    }

    // 監聽地址欄的變化
    window.addEventListener('load', processPage);
})();
