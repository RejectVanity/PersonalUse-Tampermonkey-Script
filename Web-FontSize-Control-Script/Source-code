// ==UserScript==
// @name         调整字体大小并自动调整弹窗大小
// @namespace    调整字体大小自动调整弹窗
// @version      0.1
// @description  通过自定义字体大小来控制网页的显示，并提供一个弹窗进行设置
// @match        https://i.linuxtoy.org/*
// @match        http://www.guoxue.com/*
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // 默认字体大小（以像素为单位）
    var defaultFontSize = '26px';

    // 控制字体大小的函数
    function setFontSize(newSize) {
        document.body.style.fontSize = newSize; // 设置字体大小
    }

    // 创建弹窗
    function createPopup() {
        var popupContainer = document.createElement('div');
        popupContainer.style.position = 'fixed';
        popupContainer.style.top = '50%';
        popupContainer.style.left = '50%';
        popupContainer.style.transform = 'translate(-50%, -50%)';
        popupContainer.style.background = 'url("http://img.92fa.com/pic/TX853_05.jpg")'; // 添加背景图片的URL
        popupContainer.style.backgroundSize = 'cover'; // 背景图片适应容器
        popupContainer.style.border = '1px solid #ccc';
        popupContainer.style.borderRadius = '5px';
        popupContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        popupContainer.style.minWidth = '200px'; // 设置最小宽度
        popupContainer.style.minHeight = '150px'; // 设置最小高度

        var popupContent = document.createElement('div');
        popupContent.style.display = 'flex';
        popupContent.style.flexDirection = 'column';
        popupContent.style.alignItems = 'center';
        popupContent.style.justifyContent = 'center';
        popupContent.style.padding = '20px';

        popupContent.innerHTML = `
            <h2 style="color: red;">設定字體大小</h2>
            <p style="color: green; font-size: 20px;">預設字體大小 ${defaultFontSize.replace('px', '像素')} </p>
            <label for="fontSizeInput">字體大小</label>
            <input type="text" id="fontSizeInput" style="width: 50px;" />
            <div style="display: flex; justify-content: center; margin-top: 10px;">
                <button id="setFontSizeButton" style="background: #007acc; color: white; border: none; padding: 10px 20px; margin-right: 10px;">設定</button>
                <button id="closePopupButton" style="background: #ccc; color: #333; border: none; padding: 10px 20px; margin-left: 10px;">關閉</button>
            </div>
        `;

        popupContainer.appendChild(popupContent);
        document.body.appendChild(popupContainer);

        // 绑定設定按钮的点击事件
        var setFontSizeButton = document.getElementById('setFontSizeButton');
        setFontSizeButton.addEventListener('click', function () {
            var newSize = document.getElementById('fontSizeInput').value;
            setFontSize(newSize);
            closePopup(popupContainer);
        });

        // 绑定關閉按钮的点击事件
        var closePopupButton = document.getElementById('closePopupButton');
        closePopupButton.addEventListener('click', function () {
            closePopup(popupContainer);
        });
    }

    // 關閉弹窗
    function closePopup(popup) {
        if (popup) {
            popup.remove();
        }
    }

    // 在頁面加載时自動彈出設定菜單
    createPopup();

    // 设置默认字体大小
    setFontSize(defaultFontSize);
})();
