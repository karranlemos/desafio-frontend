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

},{"./..\\..\\fonts\\NotoSans\\NotoSans-Regular.ttf":[["NotoSans-Regular.e781d50c.ttf","fonts/NotoSans/NotoSans-Regular.ttf"],"fonts/NotoSans/NotoSans-Regular.ttf"],"./..\\..\\fonts\\NotoSans\\NotoSans-Italic.ttf":[["NotoSans-Italic.dfaa4b17.ttf","fonts/NotoSans/NotoSans-Italic.ttf"],"fonts/NotoSans/NotoSans-Italic.ttf"],"./..\\..\\fonts\\NotoSans\\NotoSans-Bold.ttf":[["NotoSans-Bold.e74c5b45.ttf","fonts/NotoSans/NotoSans-Bold.ttf"],"fonts/NotoSans/NotoSans-Bold.ttf"],"./..\\..\\fonts\\NotoSans\\NotoSans-BoldItalic.ttf":[["NotoSans-BoldItalic.4e13719f.ttf","fonts/NotoSans/NotoSans-BoldItalic.ttf"],"fonts/NotoSans/NotoSans-BoldItalic.ttf"],"./..\\..\\fonts\\Quicksand\\Quicksand-Medium.ttf":[["Quicksand-Medium.b41c759c.ttf","fonts/Quicksand/Quicksand-Medium.ttf"],"fonts/Quicksand/Quicksand-Medium.ttf"],"./..\\..\\fonts\\Quicksand\\Quicksand-Bold.ttf":[["Quicksand-Bold.b48bd0f5.ttf","fonts/Quicksand/Quicksand-Bold.ttf"],"fonts/Quicksand/Quicksand-Bold.ttf"]}],"css/config/vars.css":[function(require,module,exports) {

},{}],"css/config/init.css":[function(require,module,exports) {

},{"./fonts.css":"css/config/fonts.css","./vars.css":"css/config/vars.css","./functions.css":"css/config/vars.css","./normalize.css":"css/config/vars.css","./normalize-mine.css":"css/config/vars.css"}],"css/components/header-nav.css":[function(require,module,exports) {

},{"./..\\..\\images\\icons\\menu-button.svg":[["menu-button.9a97d4c2.svg","images/icons/menu-button.svg"],"images/icons/menu-button.svg"],"./..\\..\\images\\icons\\menu-button-close.svg":[["menu-button-close.22be289c.svg","images/icons/menu-button-close.svg"],"images/icons/menu-button-close.svg"]}],"css/components/init.css":[function(require,module,exports) {

},{"./tags.css":"css/config/vars.css","./utils.css":"css/config/vars.css","./header-nav.css":"css/components/header-nav.css","./footer.css":"css/config/vars.css"}],"css/style.css":[function(require,module,exports) {

},{"./config/init.css":"css/config/init.css","./components/init.css":"css/components/init.css"}],"js/components/helpers.js":[function(require,module,exports) {
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
},{}],"js/components/init.js":[function(require,module,exports) {
"use strict";

var _helpers = _interopRequireDefault(require("./helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./helpers":"js/components/helpers.js"}],"js/script.js":[function(require,module,exports) {
"use strict";

var _init = _interopRequireDefault(require("./components/init"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./components/init":"js/components/init.js"}],"bundle.js":[function(require,module,exports) {
"use strict";

require("./css/style.css");

require("./js/script");
},{"./css/style.css":"css/style.css","./js/script":"js/script.js"}]},{},["bundle.js"], null)
//# sourceMappingURL=/bundle/bundle.js.map