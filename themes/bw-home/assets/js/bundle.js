(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).LazyLoad=e()}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),r={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_poster:"poster",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)};var s=function(t,e){return t.getAttribute("data-"+e)},i=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},c=function(t){return"true"===s(t,"was-processed")},l=function(t,e){return i(t,"ll-timeout",e)},u=function(t){return s(t,"ll-timeout")},d=function(t,e,n,o){t&&(void 0===o?void 0===n?t(e):t(e,n):t(e,n,o))},f=function(t,e){t.loadingCount+=e,0===t._elements.length&&0===t.loadingCount&&d(t._settings.callback_finish,t)},_=function(t){for(var e,n=[],o=0;e=t.children[o];o+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},g=function(t,e){v(t,"sizes",s(t,e.data_sizes)),v(t,"srcset",s(t,e.data_srcset)),v(t,"src",s(t,e.data_src))},m={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){g(t,e)});g(t,e)},IFRAME:function(t,e){v(t,"src",s(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",s(t,e.data_src))}),v(t,"poster",s(t,e.data_poster)),v(t,"src",s(t,e.data_src)),t.load()}},h=function(t,e){var n,o,r=e._settings,a=t.tagName,i=m[a];if(i)return i(t,r),f(e,1),void(e._elements=(n=e._elements,o=t,n.filter(function(t){return t!==o})));!function(t,e){var n=s(t,e.data_src),o=s(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),o&&(t.style.backgroundImage=o)}(t,r)},p=function(t,e){o?t.classList.add(e):t.className+=(t.className?" ":"")+e},b=function(t,e){o?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},y=function(t,e,n){t.addEventListener(e,n)},E=function(t,e,n){t.removeEventListener(e,n)},w=function(t,e,n){E(t,"load",e),E(t,"loadeddata",e),E(t,"error",n)},I=function(t,e,n){var o=n._settings,r=e?o.class_loaded:o.class_error,a=e?o.callback_loaded:o.callback_error,s=t.target;b(s,o.class_loading),p(s,r),d(a,s,n),f(n,-1)},k=function(t,e){var n=function n(r){I(r,!0,e),w(t,n,o)},o=function o(r){I(r,!1,e),w(t,n,o)};!function(t,e,n){y(t,"load",e),y(t,"loadeddata",e),y(t,"error",n)}(t,n,o)},A=["IMG","IFRAME","VIDEO"],L=function(t,e){var n=e._observer;O(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},x=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},z=function(t,e){var n=e._settings.load_delay,o=u(t);o||(o=setTimeout(function(){L(t,e),x(t)},n),l(t,o))},O=function(t,e,n){var o=e._settings;!n&&c(t)||(A.indexOf(t.tagName)>-1&&(k(t,e),p(t,o.class_loading)),h(t,e),function(t){i(t,"was-processed","true")}(t),d(o.callback_reveal,t,e),d(o.callback_set,t,e))},N=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e,n){var o=n._settings;d(o.callback_enter,t,e,n),o.load_delay?z(t,n):L(t,n)}(e.target,e,t):function(t,e,n){var o=n._settings;d(o.callback_exit,t,e,n),o.load_delay&&x(t)}(e.target,e,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},C=["IMG","IFRAME"],M=function(t,e){return function(t){return t.filter(function(t){return!c(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},S=function(t){var e=t._settings;e.container.querySelectorAll("."+e.class_error).forEach(function(t){b(t,e.class_error),function(t){i(t,"was-processed",null)}(t)}),t.update()},R=function(e,n){var o;this._settings=function(t){return _extends({},r,t)}(e),this.loadingCount=0,N(this),this.update(n),o=this,t&&window.addEventListener("online",function(t){S(o)})};return R.prototype={update:function(t){var n,o=this,r=this._settings;(this._elements=M(t,r),!e&&this._observer)?(function(t){return t.use_native&&"loading"in HTMLImageElement.prototype}(r)&&((n=this)._elements.forEach(function(t){-1!==C.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),O(t,n))}),this._elements=M(t,r)),this._elements.forEach(function(t){o._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){O(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){L(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)a(t,n);else a(t,e)}(R,window.lazyLoadOptions),R});


},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vanillaLazyload = _interopRequireDefault(require("vanilla-lazyload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lazyLoader = function lazyLoader() {
  var options = {
    elements_selector: '[loading="lazy"]',
    class_loading: 'is-loading',
    class_loaded: 'is-loaded',
    class_error: 'has-error',
    user_native: true
  };
  var lazyLoadInstance = new _vanillaLazyload.default(options);

  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }
};

var _default = lazyLoader;
exports.default = _default;

},{"vanilla-lazyload":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var scrollAnimator = function scrollAnimator() {
  // Animate in view images
  if ('IntersectionObserver' in window) {
    var elements = _toConsumableArray(document.querySelectorAll('[data-animation]'));

    var options = {
      rootMargin: '0px',
      threshold: 0.3
    };

    var callback = function callback(entries) {
      entries.forEach(function (entry) {
        var elementAnimated = false;

        if (entry.isIntersecting && !elementAnimated) {
          entry.target.classList.add('is-animated');
          elementAnimated = true;
        }
      });
    };

    var observer = new IntersectionObserver(callback, options);
    elements.forEach(function (element) {
      return observer.observe(element);
    });
  }
};

var _default = scrollAnimator;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DATA_SKIP_LINKS = 'data-skip-links';
var DATA_SKIP_LINKS_CLOSE = 'data-skip-links-close';
/**
 * SKIP LINKS
 * ----------
 * Progressively enhanced accessible skip links. Add function to close panel
 * with ESC key and close button.
 */

var SkipLinks = /*#__PURE__*/function () {
  function SkipLinks(element) {
    _classCallCheck(this, SkipLinks);

    this.element = element;
    this.closeButton = this.element.querySelector("[".concat(DATA_SKIP_LINKS_CLOSE, "]"));
    this.hasFocus = false;
    this.setupEventHandlers();
  }

  _createClass(SkipLinks, [{
    key: "setupEventHandlers",
    value: function setupEventHandlers() {
      var _this = this;

      this.element.addEventListener('focus', function (event) {
        return _this.handleFocus(event);
      }, true);
      this.element.addEventListener('blur', function (event) {
        return _this.handleBlur(event);
      }, true);
      this.element.addEventListener('keydown', function (event) {
        return _this.handleKeydown(event);
      }, true);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      this.hasFocus = event.target ? event.target.dataset.hasOwnProperty('skipLinksElement') : false;
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.hasFocus = event.relatedTarget ? event.relatedTarget.dataset.hasOwnProperty('skipLinksElement') : false;
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(event) {
      if (event.key === "Escape" && this.hasFocus) this.close();
    }
  }, {
    key: "close",
    value: function close() {
      this.element.nextElementSibling.querySelector('a').focus();
    }
  }]);

  return SkipLinks;
}();

window.addEventListener('DOMContentLoaded', function () {
  var element = document.querySelector("[".concat(DATA_SKIP_LINKS, "]"));
  new SkipLinks(element);
});

},{}],5:[function(require,module,exports){
"use strict";

var _lazyLoader = _interopRequireDefault(require("./components/lazy-loader"));

var _scrollAnimator = _interopRequireDefault(require("./components/scroll-animator"));

require("./components/skip-links");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('touchstart', function () {}, false);
(0, _lazyLoader.default)();
(0, _scrollAnimator.default)();

},{"./components/lazy-loader":2,"./components/scroll-animator":3,"./components/skip-links":4}]},{},[5]);
