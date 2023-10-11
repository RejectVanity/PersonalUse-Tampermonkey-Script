// ==UserScript==
// @name 获取当前屏幕的vh
// @namespace [1](http://tampermonkey.net/)
// @version 0.1
// @description 获取当前屏幕的高度相当于多少vh并弹窗显示
// @author You
// @match *
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    // 延迟1秒后执行
    setTimeout(function() {
        // 获取当前窗口的高度（以像素为单位）
        var windowHeight = window.innerHeight;
        // 获取屏幕总高度（以像素为单位）
        var screenHeight = screen.height;
        // 计算当前屏幕的高度相当于多少vh
        var currentVh = (windowHeight / screenHeight) * 100;
        // 弹窗显示结果
        alert("当前屏幕的高度相当于 " + currentVh + " vh。");
    }, 1000); // 1000毫秒（1秒）
})();
