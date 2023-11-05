(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function updateValue() {
        var valueElement = document.querySelector(".flags__online span");
        var randomSeconds = getRandomNumber(1, 5);
        var randomChange = getRandomNumber(-1093, 1093);
        var currentValue = parseInt(valueElement.textContent.replace(/\s+/g, ""), 10);
        var newValue = currentValue + randomChange;
        valueElement.textContent = newValue.toLocaleString() + " чел";
        setTimeout(updateValue, randomSeconds * 1e3);
    }
    updateValue();
    window["FLS"] = true;
    isWebp();
})();