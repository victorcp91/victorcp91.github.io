/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\ndiv {\n  position: relative;\n  cursor: pointer;\n  width: 280px;\n  height: 280px;\n  background-color: transparent;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-top: 140px;\n  /* margin-top: 0; */\n  background-color: rgba(120, 184, 250, 0.1);\n  box-shadow: inset -51px -138px 60px rgba(120, 184, 250, 0.3),\n    inset 1px 1px 5px rgba(0, 0, 0, 0.1),\n    inset 37px 2px 23px rgba(120, 184, 250, 0.1),\n    inset 4px 2px 1px rgba(120, 184, 250, 0.1),\n    inset -14px -17px 18px rgba(0, 0, 0, 0.2), 14px 30px 70px rgba(0, 0, 0, 0.5);\n  transition: margin-top 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),\n    box-shadow 0.5s ease-in-out;\n}\n\ndiv:before {\n  content: \"Ghost Comunication\";\n  position: fixed;\n  top: 15%;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 60px;\n  font-family: fantasy;\n  pointer-events: none;\n}\n\ndiv:hover {\n  box-shadow: inset -51px -138px 60px rgba(120, 184, 250, 0.3),\n    inset 1px 1px 5px rgba(0, 0, 0, 0.1),\n    inset 37px 2px 23px rgba(120, 184, 250, 0.1),\n    inset 4px 2px 1px rgba(120, 184, 250, 0.1),\n    inset -14px -17px 18px rgba(0, 0, 0, 0.2), 14px 70px 70px rgba(0, 0, 0, 0.5),\n    0px 0px 1000px 1000px rgba(0, 0, 0, 1);\n  margin-top: 0;\n  animation: float 0.8s linear infinite alternate;\n  animation-delay: 0.8s;\n}\n\ndiv:hover:before {\n  position: absolute;\n  content: 'Press the magic ball';\n  white-space: nowrap;\n  line-height: 50px;\n  font-size: 16px;\n  color: white;\n  top: var(--positiony);\n  left: var(--positionx);\n  width: 1px;\n  height: 1px;\n  border-radius: 50%;\n  transition: opacity 1s ease-in-out;\n  animation: colors 1s infinite;\n  animation-direction: alternate;\n  animation-timing-function: linear;\n  animation-delay: 0.1s;\n}\n\ndiv:active:before {\n  content: '';\n}\n\ndiv:active:before {\n  animation-duration: .4s;\n  box-shadow: 0px 0px 1000px 1000px rgba(0, 0, 0, 1);\n}\n\ndiv:active {\n  animation: touch .8s infinite alternate;\n  z-index: 1;\n}\n\ndiv:after {\n  content: \"\";\n  position: fixed;\n  box-sizing: content-box;\n  top: 50%;\n  left: 50%;\n  width: 250px;\n  height: 100px;\n  margin-top: 0;\n  background-color: gray;\n  transform: translateX(-50%) translateY(160px) perspective(115px) rotateX(20deg) rotateY(-2deg);\n  border-top-left-radius: 23%;\n  border-top-right-radius: 23%;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.5),\n    inset -11px -1px 20px rgba(0, 0, 0, 0.3),\n    inset -6px 21px 31px rgba(0, 0, 0, 0.3),\n    inset 10px 3px 20px rgba(255, 255, 255, 0.4);\n  transition: opacity 0.2s ease-in-out;\n  border-top: 0px solid rgba(0, 0, 0, 0);\n  pointer-events: none;\n}\n\ndiv:hover:after {\n  opacity: 0;\n  border-top: 15px solid rgba(0, 0, 0, 0.3);\n  box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.5),\n    inset -11px -1px 20px rgba(0, 0, 0, 0.3),\n    inset -6px 21px 31px rgba(0, 0, 0, 0.3),\n    inset 10px 3px 20px rgba(255, 255, 255, 0.4),\n    inset 2px 11px 11px rgba(0, 0, 0, 0.3);\n  width: 250px;\n  height: 95px;\n  margin-top: -10px;\n}\n\ndiv:active:after {\n  opacity: 1;\n  width: 39px;\n  height: 87px;\n  border-radius: 50%;\n  position: fixed;\n  background-color: black;\n  border: none;\n  animation: ghost 10s ease-in-out alternate infinite;\n  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  z-index: 0;\n}\n\n@keyframes colors {\n  0% {\n    background-color: red;\n    box-shadow: 0 0 15px 8px red, 0 0 10px 20px orange, 0 0 15px 40px yellow,\n      0 0 30px 140px greenyellow, 0 0 30px 140px cyan, 0 0 30px 210px blue,\n      0 0 30px 350px purple;\n  }\n\n  14.28% {\n    background-color: orange;\n    box-shadow: 0 0 15px 8px orange, 0 0 10px 20px yellow,\n      0 0 15px 40px greenyellow, 0 0 30px 80px cyan, 0 0 30px 140px blue,\n      0 0 30px 210px purple, 0 0 30px 350px red;\n  }\n\n  28.56% {\n    background-color: yellow;\n    box-shadow: 0 0 15px 8px yellow, 0 0 10px 20px greenyellow,\n      0 0 15px 40px cyan, 0 0 30px 80px blue, 0 0 30px 140px purple,\n      0 0 30px 210px red, 0 0 30px 350px orange;\n  }\n\n  42.84% {\n    background-color: greenyellow;\n    box-shadow: 0 0 15px 8px greenyellow, 0 0 10px 20px cyan, 0 0 15px 40px blue,\n      0 0 30px 80px purple, 0 0 30px 140px red, 0 0 30px 210px orange,\n      0 0 30px 350px yellow;\n  }\n\n  57.12% {\n    background-color: cyan;\n    box-shadow: 0 0 15px 8px cyan, 0 0 10px 20px blue, 0 0 15px 40px purple,\n      0 0 30px 80px red, 0 0 30px 140px orange, 0 0 30px 210px yellow,\n      0 0 30px 350px greenyellow;\n  }\n\n  71.4% {\n    background-color: blue;\n    box-shadow: 0 0 15px 8px blue, 0 0 10px 20px purple, 0 0 15px 40px red,\n      0 0 30px 80px orange, 0 0 30px 140px yellow, 0 0 30px 210px greenyellow,\n      0 0 30px 350px cyan;\n  }\n\n  85.58% {\n    background-color: purple;\n    box-shadow: 0 0 15px 8px purple, 0 0 10px 20px red, 0 0 15px 40px orange,\n      0 0 30px 80px yellow, 0 0 30px 140px greenyellow, 0 0 30px 210px cyan,\n      0 0 30px 350px blue;\n  }\n\n  100% {\n    background-color: red;\n    box-shadow: 0 0 15px 8px red, 0 0 10px 20px orange, 0 0 15px 40px yellow,\n      0 0 30px 80px greenyellow, 0 0 30px 140px cyan, 0 0 30px 210px blue,\n      0 0 30px 350px purple;\n  }\n}\n\n@keyframes float {\n  from {\n    margin-top: 0px;\n  }\n\n  to {\n    margin-top: 20px;\n  }\n}\n\n@keyframes touch {\n  0% {\n    box-shadow: calc(100px + var(--translatex)*4) calc(100px + var(--translatey)*4) 1000px 150px rgba(155, 0, 155, 1), 0px 0px 1000px 1000px rgba(0, 0, 0, 1);\n  }\n\n  25% {\n    box-shadow: calc(-100px + var(--translatex)*4) calc(100px + var(--translatey)*4) 1000px 150px rgba(255, 155, 0, 1), 0px 0px 1000px 1000px rgba(0, 0, 0, 1);\n  }\n\n  50% {\n    box-shadow: calc(100px + var(--translatex)*4) calc(-100px + var(--translatey)*4) 1000px 150px rgba(0, 155, 155, 1), 0px 0px 1000px 1000px rgba(0, 0, 0, 1);\n  }\n\n  75% {\n    box-shadow: calc(-100px + var(--translatex)*4) calc(-100px + var(--translatey)*4) 1000px 150px rgba(255, 20, 20, 1), 0px 0px 1000px 1000px rgba(0, 0, 0, 1);\n  }\n\n  100% {\n    box-shadow: calc(100px + var(--translatex)*4) calc(100px + var(--translatey)*4) 1000px 150px rgba(15, 155, 0, 1), 0px 0px 1000px 1000px rgba(0, 0, 0, 1);\n  }\n}\n\n@keyframes ghost {\n  0% {\n    left: 0%;\n    top: 35%;\n    transform: perspective(150px) rotateX(20deg) rotateY(10deg) rotateZ(5deg);\n    box-shadow: 60px 0px 0px 0px black, 31px 82px 0px -6px black;\n  }\n\n  25% {\n    left: 30%;\n    top: 67%;\n    transform: perspective(-150px) rotateX(40deg) rotateY(20deg) rotateZ(20deg);\n    box-shadow: 60px 0px 0px 0px black, 31px 82px 0px -10px black;\n  }\n\n  50% {\n    left: 74%;\n    top: 30%;\n    transform: perspective(150px) rotateX(30deg) rotateY(-10deg) rotateZ(-15deg);\n    box-shadow: 60px 0px 0px 0px black, 31px 82px 0px -6px black;\n  }\n\n  75% {\n    left: 14%;\n    top: 65%;\n    transform: perspective(-150px) rotateX(35deg) rotateY(30deg) rotateZ(5deg);\n    box-shadow: 60px 0px 0px 0px black, 31px 82px 0px 10px black;\n  }\n\n  100% {\n    left: 24%;\n    top: 35%;\n    transform: perspective(150px) rotateX(10deg) rotateY(-5deg) rotateZ(20deg);\n    box-shadow: 60px 0px 0px 0px black, 31px 82px 0px -10px black;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>OneDiv</title>\n  </head>\n  <body>\n    <div></div>\n  </body>\n</html>\n";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);



const oneDiv = document.querySelector("div");
console.log(oneDiv);

let mousedown = false;

oneDiv.onmousedown = function(e) {
  mousedown = true;
  oneDiv.style.setProperty("--positionx", e.clientX - oneDiv.offsetLeft + "px");
  oneDiv.style.setProperty("--positiony", e.clientY - oneDiv.offsetTop + "px");
};

oneDiv.onmouseup = function(e) {
  mousedown = false;
};

oneDiv.addEventListener("mousemove", e => {
  const xCenter = window.innerWidth / 2;
  const yCenter = window.innerHeight / 2;
  oneDiv.style.setProperty("--translatex", -(e.clientX - xCenter) + "px");
  oneDiv.style.setProperty("--translatey", -(e.clientY - yCenter) + "px");
  oneDiv.style.setProperty("--positionx", e.clientX - oneDiv.offsetLeft + "px");
  oneDiv.style.setProperty("--positiony", e.clientY - oneDiv.offsetTop + "px");
});


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFNBQVMsa0JB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzVRQSw0Szs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQjtBQUNEOztBQUVyQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDekJELFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsa0hBQXNEOztBQUV4Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmRpdiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMjgwcHg7XFxuICBoZWlnaHQ6IDI4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLXRvcDogMTQwcHg7XFxuICAvKiBtYXJnaW4tdG9wOiAwOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjAsIDE4NCwgMjUwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTUxcHggLTEzOHB4IDYwcHggcmdiYSgxMjAsIDE4NCwgMjUwLCAwLjMpLFxcbiAgICBpbnNldCAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxuICAgIGluc2V0IDM3cHggMnB4IDIzcHggcmdiYSgxMjAsIDE4NCwgMjUwLCAwLjEpLFxcbiAgICBpbnNldCA0cHggMnB4IDFweCByZ2JhKDEyMCwgMTg0LCAyNTAsIDAuMSksXFxuICAgIGluc2V0IC0xNHB4IC0xN3B4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAxNHB4IDMwcHggNzBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDAuOHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpLFxcbiAgICBib3gtc2hhZG93IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmRpdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkdob3N0IENvbXVuaWNhdGlvblxcXCI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDE1JTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmRpdjpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAtNTFweCAtMTM4cHggNjBweCByZ2JhKDEyMCwgMTg0LCAyNTAsIDAuMyksXFxuICAgIGluc2V0IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcXG4gICAgaW5zZXQgMzdweCAycHggMjNweCByZ2JhKDEyMCwgMTg0LCAyNTAsIDAuMSksXFxuICAgIGluc2V0IDRweCAycHggMXB4IHJnYmEoMTIwLCAxODQsIDI1MCwgMC4xKSxcXG4gICAgaW5zZXQgLTE0cHggLTE3cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMiksIDE0cHggNzBweCA3MHB4IHJnYmEoMCwgMCwgMCwgMC41KSxcXG4gICAgMHB4IDBweCAxMDAwcHggMTAwMHB4IHJnYmEoMCwgMCwgMCwgMSk7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYW5pbWF0aW9uOiBmbG9hdCAwLjhzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XFxufVxcblxcbmRpdjpob3ZlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJ1ByZXNzIHRoZSBtYWdpYyBiYWxsJztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRvcDogdmFyKC0tcG9zaXRpb255KTtcXG4gIGxlZnQ6IHZhcigtLXBvc2l0aW9ueCk7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uOiBjb2xvcnMgMXMgaW5maW5pdGU7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XFxufVxcblxcbmRpdjphY3RpdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG5cXG5kaXY6YWN0aXZlOmJlZm9yZSB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IC40cztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTAwMHB4IDEwMDBweCByZ2JhKDAsIDAsIDAsIDEpO1xcbn1cXG5cXG5kaXY6YWN0aXZlIHtcXG4gIGFuaW1hdGlvbjogdG91Y2ggLjhzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbmRpdjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgxNjBweCkgcGVyc3BlY3RpdmUoMTE1cHgpIHJvdGF0ZVgoMjBkZWcpIHJvdGF0ZVkoLTJkZWcpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjMlO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIzJTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxcbiAgICBpbnNldCAtMTFweCAtMXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpLFxcbiAgICBpbnNldCAtNnB4IDIxcHggMzFweCByZ2JhKDAsIDAsIDAsIDAuMyksXFxuICAgIGluc2V0IDEwcHggM3B4IDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuZGl2OmhvdmVyOmFmdGVyIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IDJweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxcbiAgICBpbnNldCAtMTFweCAtMXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpLFxcbiAgICBpbnNldCAtNnB4IDIxcHggMzFweCByZ2JhKDAsIDAsIDAsIDAuMyksXFxuICAgIGluc2V0IDEwcHggM3B4IDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxcbiAgICBpbnNldCAycHggMTFweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogOTVweDtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbn1cXG5cXG5kaXY6YWN0aXZlOmFmdGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB3aWR0aDogMzlweDtcXG4gIGhlaWdodDogODdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYW5pbWF0aW9uOiBnaG9zdCAxMHMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNvbG9ycyB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggOHB4IHJlZCwgMCAwIDEwcHggMjBweCBvcmFuZ2UsIDAgMCAxNXB4IDQwcHggeWVsbG93LFxcbiAgICAgIDAgMCAzMHB4IDE0MHB4IGdyZWVueWVsbG93LCAwIDAgMzBweCAxNDBweCBjeWFuLCAwIDAgMzBweCAyMTBweCBibHVlLFxcbiAgICAgIDAgMCAzMHB4IDM1MHB4IHB1cnBsZTtcXG4gIH1cXG5cXG4gIDE0LjI4JSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggOHB4IG9yYW5nZSwgMCAwIDEwcHggMjBweCB5ZWxsb3csXFxuICAgICAgMCAwIDE1cHggNDBweCBncmVlbnllbGxvdywgMCAwIDMwcHggODBweCBjeWFuLCAwIDAgMzBweCAxNDBweCBibHVlLFxcbiAgICAgIDAgMCAzMHB4IDIxMHB4IHB1cnBsZSwgMCAwIDMwcHggMzUwcHggcmVkO1xcbiAgfVxcblxcbiAgMjguNTYlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCA4cHggeWVsbG93LCAwIDAgMTBweCAyMHB4IGdyZWVueWVsbG93LFxcbiAgICAgIDAgMCAxNXB4IDQwcHggY3lhbiwgMCAwIDMwcHggODBweCBibHVlLCAwIDAgMzBweCAxNDBweCBwdXJwbGUsXFxuICAgICAgMCAwIDMwcHggMjEwcHggcmVkLCAwIDAgMzBweCAzNTBweCBvcmFuZ2U7XFxuICB9XFxuXFxuICA0Mi44NCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggOHB4IGdyZWVueWVsbG93LCAwIDAgMTBweCAyMHB4IGN5YW4sIDAgMCAxNXB4IDQwcHggYmx1ZSxcXG4gICAgICAwIDAgMzBweCA4MHB4IHB1cnBsZSwgMCAwIDMwcHggMTQwcHggcmVkLCAwIDAgMzBweCAyMTBweCBvcmFuZ2UsXFxuICAgICAgMCAwIDMwcHggMzUwcHggeWVsbG93O1xcbiAgfVxcblxcbiAgNTcuMTIlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggOHB4IGN5YW4sIDAgMCAxMHB4IDIwcHggYmx1ZSwgMCAwIDE1cHggNDBweCBwdXJwbGUsXFxuICAgICAgMCAwIDMwcHggODBweCByZWQsIDAgMCAzMHB4IDE0MHB4IG9yYW5nZSwgMCAwIDMwcHggMjEwcHggeWVsbG93LFxcbiAgICAgIDAgMCAzMHB4IDM1MHB4IGdyZWVueWVsbG93O1xcbiAgfVxcblxcbiAgNzEuNCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCA4cHggYmx1ZSwgMCAwIDEwcHggMjBweCBwdXJwbGUsIDAgMCAxNXB4IDQwcHggcmVkLFxcbiAgICAgIDAgMCAzMHB4IDgwcHggb3JhbmdlLCAwIDAgMzBweCAxNDBweCB5ZWxsb3csIDAgMCAzMHB4IDIxMHB4IGdyZWVueWVsbG93LFxcbiAgICAgIDAgMCAzMHB4IDM1MHB4IGN5YW47XFxuICB9XFxuXFxuICA4NS41OCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IDhweCBwdXJwbGUsIDAgMCAxMHB4IDIwcHggcmVkLCAwIDAgMTVweCA0MHB4IG9yYW5nZSxcXG4gICAgICAwIDAgMzBweCA4MHB4IHllbGxvdywgMCAwIDMwcHggMTQwcHggZ3JlZW55ZWxsb3csIDAgMCAzMHB4IDIxMHB4IGN5YW4sXFxuICAgICAgMCAwIDMwcHggMzUwcHggYmx1ZTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IDhweCByZWQsIDAgMCAxMHB4IDIwcHggb3JhbmdlLCAwIDAgMTVweCA0MHB4IHllbGxvdyxcXG4gICAgICAwIDAgMzBweCA4MHB4IGdyZWVueWVsbG93LCAwIDAgMzBweCAxNDBweCBjeWFuLCAwIDAgMzBweCAyMTBweCBibHVlLFxcbiAgICAgIDAgMCAzMHB4IDM1MHB4IHB1cnBsZTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmbG9hdCB7XFxuICBmcm9tIHtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRvdWNoIHtcXG4gIDAlIHtcXG4gICAgYm94LXNoYWRvdzogY2FsYygxMDBweCArIHZhcigtLXRyYW5zbGF0ZXgpKjQpIGNhbGMoMTAwcHggKyB2YXIoLS10cmFuc2xhdGV5KSo0KSAxMDAwcHggMTUwcHggcmdiYSgxNTUsIDAsIDE1NSwgMSksIDBweCAwcHggMTAwMHB4IDEwMDBweCByZ2JhKDAsIDAsIDAsIDEpO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgYm94LXNoYWRvdzogY2FsYygtMTAwcHggKyB2YXIoLS10cmFuc2xhdGV4KSo0KSBjYWxjKDEwMHB4ICsgdmFyKC0tdHJhbnNsYXRleSkqNCkgMTAwMHB4IDE1MHB4IHJnYmEoMjU1LCAxNTUsIDAsIDEpLCAwcHggMHB4IDEwMDBweCAxMDAwcHggcmdiYSgwLCAwLCAwLCAxKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIGJveC1zaGFkb3c6IGNhbGMoMTAwcHggKyB2YXIoLS10cmFuc2xhdGV4KSo0KSBjYWxjKC0xMDBweCArIHZhcigtLXRyYW5zbGF0ZXkpKjQpIDEwMDBweCAxNTBweCByZ2JhKDAsIDE1NSwgMTU1LCAxKSwgMHB4IDBweCAxMDAwcHggMTAwMHB4IHJnYmEoMCwgMCwgMCwgMSk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICBib3gtc2hhZG93OiBjYWxjKC0xMDBweCArIHZhcigtLXRyYW5zbGF0ZXgpKjQpIGNhbGMoLTEwMHB4ICsgdmFyKC0tdHJhbnNsYXRleSkqNCkgMTAwMHB4IDE1MHB4IHJnYmEoMjU1LCAyMCwgMjAsIDEpLCAwcHggMHB4IDEwMDBweCAxMDAwcHggcmdiYSgwLCAwLCAwLCAxKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiBjYWxjKDEwMHB4ICsgdmFyKC0tdHJhbnNsYXRleCkqNCkgY2FsYygxMDBweCArIHZhcigtLXRyYW5zbGF0ZXkpKjQpIDEwMDBweCAxNTBweCByZ2JhKDE1LCAxNTUsIDAsIDEpLCAwcHggMHB4IDEwMDBweCAxMDAwcHggcmdiYSgwLCAwLCAwLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBnaG9zdCB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICB0b3A6IDM1JTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNTBweCkgcm90YXRlWCgyMGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWig1ZGVnKTtcXG4gICAgYm94LXNoYWRvdzogNjBweCAwcHggMHB4IDBweCBibGFjaywgMzFweCA4MnB4IDBweCAtNnB4IGJsYWNrO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgbGVmdDogMzAlO1xcbiAgICB0b3A6IDY3JTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgtMTUwcHgpIHJvdGF0ZVgoNDBkZWcpIHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVooMjBkZWcpO1xcbiAgICBib3gtc2hhZG93OiA2MHB4IDBweCAwcHggMHB4IGJsYWNrLCAzMXB4IDgycHggMHB4IC0xMHB4IGJsYWNrO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgbGVmdDogNzQlO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNTBweCkgcm90YXRlWCgzMGRlZykgcm90YXRlWSgtMTBkZWcpIHJvdGF0ZVooLTE1ZGVnKTtcXG4gICAgYm94LXNoYWRvdzogNjBweCAwcHggMHB4IDBweCBibGFjaywgMzFweCA4MnB4IDBweCAtNnB4IGJsYWNrO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgbGVmdDogMTQlO1xcbiAgICB0b3A6IDY1JTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgtMTUwcHgpIHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoMzBkZWcpIHJvdGF0ZVooNWRlZyk7XFxuICAgIGJveC1zaGFkb3c6IDYwcHggMHB4IDBweCAwcHggYmxhY2ssIDMxcHggODJweCAwcHggMTBweCBibGFjaztcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAyNCU7XFxuICAgIHRvcDogMzUlO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE1MHB4KSByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC01ZGVnKSByb3RhdGVaKDIwZGVnKTtcXG4gICAgYm94LXNoYWRvdzogNjBweCAwcHggMHB4IDBweCBibGFjaywgMzFweCA4MnB4IDBweCAtMTBweCBibGFjaztcXG4gIH1cXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbD5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgPHRpdGxlPk9uZURpdjwvdGl0bGU+XFxuICA8L2hlYWQ+XFxuICA8Ym9keT5cXG4gICAgPGRpdj48L2Rpdj5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuXCI7IiwiaW1wb3J0IFwiLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBvbmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuY29uc29sZS5sb2cob25lRGl2KTtcblxubGV0IG1vdXNlZG93biA9IGZhbHNlO1xuXG5vbmVEaXYub25tb3VzZWRvd24gPSBmdW5jdGlvbihlKSB7XG4gIG1vdXNlZG93biA9IHRydWU7XG4gIG9uZURpdi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcG9zaXRpb254XCIsIGUuY2xpZW50WCAtIG9uZURpdi5vZmZzZXRMZWZ0ICsgXCJweFwiKTtcbiAgb25lRGl2LnN0eWxlLnNldFByb3BlcnR5KFwiLS1wb3NpdGlvbnlcIiwgZS5jbGllbnRZIC0gb25lRGl2Lm9mZnNldFRvcCArIFwicHhcIik7XG59O1xuXG5vbmVEaXYub25tb3VzZXVwID0gZnVuY3Rpb24oZSkge1xuICBtb3VzZWRvd24gPSBmYWxzZTtcbn07XG5cbm9uZURpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICBjb25zdCB4Q2VudGVyID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xuICBjb25zdCB5Q2VudGVyID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbiAgb25lRGl2LnN0eWxlLnNldFByb3BlcnR5KFwiLS10cmFuc2xhdGV4XCIsIC0oZS5jbGllbnRYIC0geENlbnRlcikgKyBcInB4XCIpO1xuICBvbmVEaXYuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRyYW5zbGF0ZXlcIiwgLShlLmNsaWVudFkgLSB5Q2VudGVyKSArIFwicHhcIik7XG4gIG9uZURpdi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcG9zaXRpb254XCIsIGUuY2xpZW50WCAtIG9uZURpdi5vZmZzZXRMZWZ0ICsgXCJweFwiKTtcbiAgb25lRGl2LnN0eWxlLnNldFByb3BlcnR5KFwiLS1wb3NpdGlvbnlcIiwgZS5jbGllbnRZIC0gb25lRGl2Lm9mZnNldFRvcCArIFwicHhcIik7XG59KTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==