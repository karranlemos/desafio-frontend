// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css/config/fonts.css":[function(require,module,exports) {

},{"./..\\..\\fonts\\NotoSans\\NotoSans-Regular.ttf":[["NotoSans-Regular.e781d50c.ttf","fonts/NotoSans/NotoSans-Regular.ttf"],"fonts/NotoSans/NotoSans-Regular.ttf"],"./..\\..\\fonts\\NotoSans\\NotoSans-Italic.ttf":[["NotoSans-Italic.dfaa4b17.ttf","fonts/NotoSans/NotoSans-Italic.ttf"],"fonts/NotoSans/NotoSans-Italic.ttf"],"./..\\..\\fonts\\NotoSans\\NotoSans-Bold.ttf":[["NotoSans-Bold.e74c5b45.ttf","fonts/NotoSans/NotoSans-Bold.ttf"],"fonts/NotoSans/NotoSans-Bold.ttf"],"./..\\..\\fonts\\NotoSans\\NotoSans-BoldItalic.ttf":[["NotoSans-BoldItalic.4e13719f.ttf","fonts/NotoSans/NotoSans-BoldItalic.ttf"],"fonts/NotoSans/NotoSans-BoldItalic.ttf"],"./..\\..\\fonts\\Quicksand\\Quicksand-SemiBold.ttf":[["Quicksand-SemiBold.37ab67df.ttf","fonts/Quicksand/Quicksand-SemiBold.ttf"],"fonts/Quicksand/Quicksand-SemiBold.ttf"],"./..\\..\\fonts\\Quicksand\\Quicksand-Bold.ttf":[["Quicksand-Bold.b48bd0f5.ttf","fonts/Quicksand/Quicksand-Bold.ttf"],"fonts/Quicksand/Quicksand-Bold.ttf"]}],"css/config/vars.css":[function(require,module,exports) {

},{}],"css/config/init.css":[function(require,module,exports) {

},{"./fonts.css":"css/config/fonts.css","./vars.css":"css/config/vars.css","./functions.css":"css/config/vars.css","./normalize.css":"css/config/vars.css","./normalize-mine.css":"css/config/vars.css"}],"css/components/header-nav.css":[function(require,module,exports) {

},{"./..\\..\\images\\icons\\menu-button.svg":[["menu-button.9a97d4c2.svg","images/icons/menu-button.svg"],"images/icons/menu-button.svg"],"./..\\..\\images\\icons\\menu-button-close.svg":[["menu-button-close.22be289c.svg","images/icons/menu-button-close.svg"],"images/icons/menu-button-close.svg"]}],"css/components/main/info-call-to-action.css":[function(require,module,exports) {

},{"./..\\..\\..\\images\\backgrounds\\call-to-action-services.jpg":[["call-to-action-services.d0bf4fac.jpg","images/backgrounds/call-to-action-services.jpg"],"images/backgrounds/call-to-action-services.jpg"]}],"css/components/main/init.css":[function(require,module,exports) {

},{"./general.css":"css/config/vars.css","./most-viewed-tags.css":"css/config/vars.css","./info-call-to-action.css":"css/components/main/info-call-to-action.css"}],"css/components/init.css":[function(require,module,exports) {

},{"./tags.css":"css/config/vars.css","./utils.css":"css/config/vars.css","./header-nav.css":"css/components/header-nav.css","./footer.css":"css/config/vars.css","./main/init.css":"css/components/main/init.css"}],"css/style.css":[function(require,module,exports) {

},{"./config/init.css":"css/config/init.css","./components/init.css":"css/components/init.css"}],"js/components/Navbar.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var htmlClassName = 'js-navbar';
var mobileButtonClassName = 'js-mobile-button';
var singleton = null;

var Navbar = /*#__PURE__*/function () {
  function Navbar(navbar) {
    var _this = this;

    _classCallCheck(this, Navbar);

    _defineProperty(this, "toggleMenu", function () {
      _this.navbar.classList.toggle('open');
    });

    this.navbar = navbar;
    this.mobileButton = this.navbar.querySelector(".".concat(mobileButtonClassName));
    if (!this.mobileButton) throw 'Mobile button not found...';
    this.mobileButton.addEventListener('click', this.toggleMenu);
  }

  _createClass(Navbar, null, [{
    key: "getSingleton",
    value: function getSingleton() {
      if (!singleton) Navbar._initSingleton();
      return singleton;
    }
  }, {
    key: "_logError",
    value: function _logError(message) {
      console.log("Navbar: ".concat(message));
    }
  }, {
    key: "_initSingleton",
    value: function _initSingleton() {
      var navbarElement = document.querySelector(".".concat(htmlClassName));
      if (!navbarElement) return;

      try {
        singleton = new Navbar(navbarElement);
      } catch (err) {
        Navbar._logError(err);
      }
    }
  }]);

  return Navbar;
}();

document.addEventListener('DOMContentLoaded', function () {
  return Navbar.getSingleton();
});
},{}],"js/components/helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Helpers = /*#__PURE__*/function () {
  function Helpers() {
    _classCallCheck(this, Helpers);

    throw 'Static Only';
  }

  _createClass(Helpers, null, [{
    key: "request",
    value: function request(data) {
      var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      Helpers._fillRequestParameters(data, callbacks);

      var httpRequest = new XMLHttpRequest();
      httpRequest.addEventListener('load', function () {
        callbacks.onStart(httpRequest);
        if (callbacks.isSuccessful(httpRequest)) callbacks.onSuccess(httpRequest);else callbacks.onFailure(httpRequest);
        callbacks.onEnd(httpRequest);
      });
      if (data.contentType) httpRequest.setRequestHeader('Content-type', data.contentType);
      httpRequest.open(data.method, data.url);
      httpRequest.send(data.params);
    }
  }, {
    key: "_fillRequestParameters",
    value: function _fillRequestParameters(data, callbacks) {
      if (!data.url) throw 'URL must be provided...';
      if (!data.method) data.method = 'get';
      if (!data.params) data.params = '';
      if (!callbacks.isSuccessful || typeof callbacks.isSuccessful !== 'function') callbacks.isSuccessful = function () {
        return true;
      };

      for (var _i = 0, _arr = ['onStart', 'onSuccess', 'onFailure', 'onEnd']; _i < _arr.length; _i++) {
        var callbackName = _arr[_i];
        if (!callbacks[callbackName] || typeof callbacks[callbackName] !== 'function') callbacks[callbackName] = function () {};
      }
    }
  }]);

  return Helpers;
}();

exports.default = Helpers;
},{}],"js/components/MostViewedTags.js":[function(require,module,exports) {
"use strict";

var _helpers = _interopRequireDefault(require("./helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var htmlClassName = 'js-most-viewed-tags';
var url = 'https://labs.inforcedata.com.br/desafio-frontend/cloudtags.json';

var MostViewedTags = /*#__PURE__*/function () {
  function MostViewedTags(mostViewedTagsDiv) {
    var _this = this;

    _classCallCheck(this, MostViewedTags);

    _defineProperty(this, "_isSuccessful", function (httpRequest) {
      return httpRequest.status === 200;
    });

    _defineProperty(this, "_onSuccess", function (httpRequest) {
      try {
        var json = JSON.parse(httpRequest.responseText);
      } catch (err) {
        MostViewedTags.logError('Could not read JSON...');

        _this._insertMessage('Erro ao ler informação...');

        return;
      }

      var tagsHTML = '';

      var _iterator = _createForOfIteratorHelper(json),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          tagsHTML += "<a href=\"".concat(item.link, "\" class=\"tag\">").concat(item.tag, "</a>");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (tagsHTML === '') return _this._insertMessage('No tags found...');

      _this._insertContent(tagsHTML);
    });

    _defineProperty(this, "_onFailure", function () {
      _this._insertMessage('Não foi possível carregar tags...');
    });

    _defineProperty(this, "_emptyDiv", function () {
      while (_this.mostViewedTagsDiv.firstChild) {
        _this.mostViewedTagsDiv.removeChild(_this.mostViewedTagsDiv.firstChild);
      }
    });

    _defineProperty(this, "_insertContent", function (content) {
      var mustEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (mustEmpty) _this._emptyDiv();

      _this.mostViewedTagsDiv.insertAdjacentHTML('beforeend', content);
    });

    _defineProperty(this, "_insertMessage", function (message) {
      var mustEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var messageHTML = "<div class=\"message\">".concat(message, "</div>");

      _this._insertContent(messageHTML, mustEmpty);
    });

    _defineProperty(this, "_insertLoadingMessage", function () {
      var loadingHTML = '<img src="images/icons/loading.gif" alt="Loading...">';

      _this._insertMessage(loadingHTML);
    });

    this.mostViewedTagsDiv = mostViewedTagsDiv;

    this._insertLoadingMessage();

    _helpers.default.request({
      url: url,
      method: 'get'
    }, {
      isSuccessful: this._isSuccessful,
      onSuccess: this._onSuccess,
      onFailure: this._onFailure
    });
  }

  _createClass(MostViewedTags, null, [{
    key: "logError",
    value: function logError(message) {
      console.log("MostViewedTags: ".concat(message));
    }
  }, {
    key: "initAll",
    value: function initAll() {
      var mostViewedTagsDivs = document.getElementsByClassName(htmlClassName);
      var i = 0;

      var _iterator2 = _createForOfIteratorHelper(mostViewedTagsDivs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var mostViewedTagsDiv = _step2.value;

          try {
            new MostViewedTags(mostViewedTagsDiv);
          } catch (err) {
            MostViewedTags.logError("#".concat(i, ": ").concat(err));
          }

          i++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return MostViewedTags;
}();

document.addEventListener('DOMContentLoaded', function () {
  return MostViewedTags.initAll();
});
},{"./helpers":"js/components/helpers.js"}],"js/components/init.js":[function(require,module,exports) {
"use strict";

require("./Navbar");

require("./MostViewedTags");
},{"./Navbar":"js/components/Navbar.js","./MostViewedTags":"js/components/MostViewedTags.js"}],"js/script.js":[function(require,module,exports) {
"use strict";

var _init = _interopRequireDefault(require("./components/init"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./components/init":"js/components/init.js"}],"bundle.js":[function(require,module,exports) {
"use strict";

require("./css/style.css");

require("./js/script");
},{"./css/style.css":"css/style.css","./js/script":"js/script.js"}]},{},["bundle.js"], null)
//# sourceMappingURL=/bundle/bundle.js.map