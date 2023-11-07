(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-reports-report-module"],{

/***/ "./node_modules/print-js/dist/print.js":
/*!*********************************************!*\
  !*** ./node_modules/print-js/dist/print.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n\nvar _init = __webpack_require__(/*! ./js/init */ \"./src/js/init.js\");\n\nvar _init2 = _interopRequireDefault(_init);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar printJS = _init2.default.init;\n\nif (typeof window !== 'undefined') {\n  window.printJS = printJS;\n}\n\nexports.default = printJS;\n\n//# sourceURL=webpack://printJS/./src/index.js?");

/***/ }),

/***/ "./src/js/browser.js":
/*!***************************!*\
  !*** ./src/js/browser.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Browser = {\n  // Firefox 1.0+\n  isFirefox: function isFirefox() {\n    return typeof InstallTrigger !== 'undefined';\n  },\n  // Internet Explorer 6-11\n  isIE: function isIE() {\n    return navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode;\n  },\n  // Edge 20+\n  isEdge: function isEdge() {\n    return !Browser.isIE() && !!window.StyleMedia;\n  },\n  // Chrome 1+\n  isChrome: function isChrome() {\n    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;\n\n    return !!context.chrome;\n  },\n  // At least Safari 3+: \"[object HTMLElementConstructor]\"\n  isSafari: function isSafari() {\n    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || navigator.userAgent.toLowerCase().indexOf('safari') !== -1;\n  },\n  // IOS Chrome\n  isIOSChrome: function isIOSChrome() {\n    return navigator.userAgent.toLowerCase().indexOf('crios') !== -1;\n  }\n};\n\nexports.default = Browser;\n\n//# sourceURL=webpack://printJS/./src/js/browser.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.addWrapper = addWrapper;\nexports.capitalizePrint = capitalizePrint;\nexports.collectStyles = collectStyles;\nexports.addHeader = addHeader;\nexports.cleanUp = cleanUp;\nexports.isRawHTML = isRawHTML;\n\nvar _modal = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n\nvar _modal2 = _interopRequireDefault(_modal);\n\nvar _browser = __webpack_require__(/*! ./browser */ \"./src/js/browser.js\");\n\nvar _browser2 = _interopRequireDefault(_browser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction addWrapper(htmlData, params) {\n  var bodyStyle = 'font-family:' + params.font + ' !important; font-size: ' + params.font_size + ' !important; width:100%;';\n  return '<div style=\"' + bodyStyle + '\">' + htmlData + '</div>';\n}\n\nfunction capitalizePrint(obj) {\n  return obj.charAt(0).toUpperCase() + obj.slice(1);\n}\n\nfunction collectStyles(element, params) {\n  var win = document.defaultView || window;\n\n  // String variable to hold styling for each element\n  var elementStyle = '';\n\n  // Loop over computed styles\n  var styles = win.getComputedStyle(element, '');\n\n  Object.keys(styles).map(function (key) {\n    // Check if style should be processed\n    if (params.targetStyles.indexOf('*') !== -1 || params.targetStyle.indexOf(styles[key]) !== -1 || targetStylesMatch(params.targetStyles, styles[key])) {\n      if (styles.getPropertyValue(styles[key])) elementStyle += styles[key] + ':' + styles.getPropertyValue(styles[key]) + ';';\n    }\n  });\n\n  // Print friendly defaults (deprecated)\n  elementStyle += 'max-width: ' + params.maxWidth + 'px !important;' + params.font_size + ' !important;';\n\n  return elementStyle;\n}\n\nfunction targetStylesMatch(styles, value) {\n  for (var i = 0; i < styles.length; i++) {\n    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.indexOf(styles[i]) !== -1) return true;\n  }\n  return false;\n}\n\nfunction addHeader(printElement, params) {\n  // Create the header container div\n  var headerContainer = document.createElement('div');\n\n  // Check if the header is text or raw html\n  if (isRawHTML(params.header)) {\n    headerContainer.innerHTML = params.header;\n  } else {\n    // Create header element\n    var headerElement = document.createElement('h1');\n\n    // Create header text node\n    var headerNode = document.createTextNode(params.header);\n\n    // Build and style\n    headerElement.appendChild(headerNode);\n    headerElement.setAttribute('style', params.headerStyle);\n    headerContainer.appendChild(headerElement);\n  }\n\n  printElement.insertBefore(headerContainer, printElement.childNodes[0]);\n}\n\nfunction cleanUp(params) {\n  // If we are showing a feedback message to user, remove it\n  if (params.showModal) _modal2.default.close();\n\n  // Check for a finished loading hook function\n  if (params.onLoadingEnd) params.onLoadingEnd();\n\n  // If preloading pdf files, clean blob url\n  if (params.showModal || params.onLoadingStart) window.URL.revokeObjectURL(params.printable);\n\n  // If a onPrintDialogClose callback is given, execute it\n  if (params.onPrintDialogClose) {\n    var event = 'mouseover';\n\n    if (_browser2.default.isChrome() || _browser2.default.isFirefox()) {\n      // Ps.: Firefox will require an extra click in the document to fire the focus event.\n      event = 'focus';\n    }\n    var handler = function handler() {\n      // Make sure the event only happens once.\n      window.removeEventListener(event, handler);\n\n      params.onPrintDialogClose();\n    };\n\n    window.addEventListener(event, handler);\n  }\n}\n\nfunction isRawHTML(raw) {\n  var regexHtml = new RegExp('<([A-Za-z][A-Za-z0-9]*)\\\\b[^>]*>(.*?)</\\\\1>');\n  return regexHtml.test(raw);\n}\n\n//# sourceURL=webpack://printJS/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/html.js":
/*!************************!*\
  !*** ./src/js/html.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Get the DOM printable element\n    var printElement = document.getElementById(params.printable);\n\n    // Check if the element exists\n    if (!printElement) {\n      window.console.error('Invalid HTML element id: ' + params.printable);\n      return;\n    }\n\n    // Clone the target element including its children (if available)\n    params.printableElement = cloneElement(printElement, params);\n\n    // Add header\n    if (params.header) {\n      (0, _functions.addHeader)(params.printableElement, params);\n    }\n\n    // Print html element contents\n    _print2.default.send(params, printFrame);\n  }\n};\n\n\nfunction cloneElement(element, params) {\n  // Clone the main node (if not already inside the recursion process)\n  var clone = element.cloneNode();\n\n  // Loop over and process the children elements / nodes (including text nodes)\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = element.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var child = _step.value;\n\n      // Check if we are skiping the current element\n      if (params.ignoreElements.indexOf(child.id) !== -1) {\n        continue;\n      }\n\n      // Clone the child element\n      var clonedChild = cloneElement(child, params);\n\n      // Attach the cloned child to the cloned parent node\n      clone.appendChild(clonedChild);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  console.log(element.nodeType);\n  // Get all styling for print element (for nodes of type element only)\n  if (params.scanStyles && element.nodeType === 1) {\n    clone.setAttribute('style', (0, _functions.collectStyles)(element, params));\n  }\n\n  // Check if the element needs any state processing (copy user input data)\n  switch (element.tagName) {\n    case 'SELECT':\n      // Copy the current selection value to its clone\n      clone.value = element.value;\n      break;\n    case 'CANVAS':\n      // Copy the canvas content to its clone\n      clone.getContext('2d').drawImage(element, 0, 0);\n      break;\n  }\n\n  return clone;\n}\n\n//# sourceURL=webpack://printJS/./src/js/html.js?");

/***/ }),

/***/ "./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Check if we are printing one image or multiple images\n    if (params.printable.constructor !== Array) {\n      // Create array with one image\n      params.printable = [params.printable];\n    }\n\n    // Create printable element (container)\n    params.printableElement = document.createElement('div');\n\n    // Create all image elements and append them to the printable container\n    params.printable.forEach(function (src) {\n      // Create the image element\n      var img = document.createElement('img');\n      img.setAttribute('style', params.imageStyle);\n\n      // Set image src with the file url\n      img.src = src;\n\n      // Create the image wrapper\n      var imageWrapper = document.createElement('div');\n\n      // Append image to the wrapper element\n      imageWrapper.appendChild(img);\n\n      // Append wrapper to the printable element\n      params.printableElement.appendChild(imageWrapper);\n    });\n\n    // Check if we are adding a print header\n    if (params.header) (0, _functions.addHeader)(params.printableElement, params);\n\n    // Print image\n    _print2.default.send(params, printFrame);\n  }\n};\n\n//# sourceURL=webpack://printJS/./src/js/image.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _browser = __webpack_require__(/*! ./browser */ \"./src/js/browser.js\");\n\nvar _browser2 = _interopRequireDefault(_browser);\n\nvar _modal = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n\nvar _modal2 = _interopRequireDefault(_modal);\n\nvar _pdf = __webpack_require__(/*! ./pdf */ \"./src/js/pdf.js\");\n\nvar _pdf2 = _interopRequireDefault(_pdf);\n\nvar _html = __webpack_require__(/*! ./html */ \"./src/js/html.js\");\n\nvar _html2 = _interopRequireDefault(_html);\n\nvar _rawHtml = __webpack_require__(/*! ./raw-html */ \"./src/js/raw-html.js\");\n\nvar _rawHtml2 = _interopRequireDefault(_rawHtml);\n\nvar _image = __webpack_require__(/*! ./image */ \"./src/js/image.js\");\n\nvar _image2 = _interopRequireDefault(_image);\n\nvar _json = __webpack_require__(/*! ./json */ \"./src/js/json.js\");\n\nvar _json2 = _interopRequireDefault(_json);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar printTypes = ['pdf', 'html', 'image', 'json', 'raw-html'];\n\nexports.default = {\n  init: function init() {\n    var params = {\n      printable: null,\n      fallbackPrintable: null,\n      type: 'pdf',\n      header: null,\n      headerStyle: 'font-weight: 300;',\n      maxWidth: 800,\n      font: 'TimesNewRoman',\n      font_size: '12pt',\n      honorMarginPadding: true,\n      honorColor: false,\n      properties: null,\n      gridHeaderStyle: 'font-weight: bold; padding: 5px; border: 1px solid #dddddd;',\n      gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',\n      showModal: false,\n      onError: function onError(error) {\n        throw error;\n      },\n      onLoadingStart: null,\n      onLoadingEnd: null,\n      onPrintDialogClose: null,\n      onPdfOpen: null,\n      onBrowserIncompatible: function onBrowserIncompatible() {\n        return true;\n      },\n      modalMessage: 'Retrieving Document...',\n      frameId: 'printJS',\n      printableElement: null,\n      documentTitle: 'Document',\n      targetStyle: ['clear', 'display', 'width', 'min-width', 'height', 'min-height', 'max-height'],\n      targetStyles: ['border', 'box', 'break', 'text-decoration'],\n      ignoreElements: [],\n      imageStyle: 'max-width: 100%;',\n      repeatTableHeader: true,\n      css: null,\n      style: null,\n      scanStyles: true,\n      base64: false\n\n      // Check if a printable document or object was supplied\n    };var args = arguments[0];\n    if (args === undefined) throw new Error('printJS expects at least 1 attribute.');\n\n    // Process parameters\n    switch (typeof args === 'undefined' ? 'undefined' : _typeof(args)) {\n      case 'string':\n        params.printable = encodeURI(args);\n        params.fallbackPrintable = params.printable;\n        params.type = arguments[1] || params.type;\n        break;\n      case 'object':\n        params.printable = args.printable;\n        params.base64 = typeof args.base64 !== 'undefined';\n        params.fallbackPrintable = typeof args.fallbackPrintable !== 'undefined' ? args.fallbackPrintable : params.printable;\n        params.fallbackPrintable = params.base64 ? 'data:application/pdf;base64,' + params.fallbackPrintable : params.fallbackPrintable;\n        for (var k in params) {\n          if (k === 'printable' || k === 'fallbackPrintable' || k === 'base64') continue;\n\n          params[k] = typeof args[k] !== 'undefined' ? args[k] : params[k];\n        }\n        break;\n      default:\n        throw new Error('Unexpected argument type! Expected \"string\" or \"object\", got ' + (typeof args === 'undefined' ? 'undefined' : _typeof(args)));\n    }\n\n    // Validate printable\n    if (!params.printable) throw new Error('Missing printable information.');\n\n    // Validate type\n    if (!params.type || typeof params.type !== 'string' || printTypes.indexOf(params.type.toLowerCase()) === -1) {\n      throw new Error('Invalid print type. Available types are: pdf, html, image and json.');\n    }\n\n    // Check if we are showing a feedback message to the user (useful for large files)\n    if (params.showModal) _modal2.default.show(params);\n\n    // Check for a print start hook function\n    if (params.onLoadingStart) params.onLoadingStart();\n\n    // To prevent duplication and issues, remove any used printFrame from the DOM\n    var usedFrame = document.getElementById(params.frameId);\n\n    if (usedFrame) usedFrame.parentNode.removeChild(usedFrame);\n\n    // Create a new iframe or embed element (IE prints blank pdf's if we use iframe)\n    var printFrame = void 0;\n\n    // Create iframe element\n    printFrame = document.createElement('iframe');\n\n    // Hide iframe\n    printFrame.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute;');\n\n    // Set iframe element id\n    printFrame.setAttribute('id', params.frameId);\n\n    // For non pdf printing, pass an html document string to srcdoc (force onload callback)\n    if (params.type !== 'pdf') {\n      printFrame.srcdoc = '<html><head><title>' + params.documentTitle + '</title>';\n\n      // Attach css files\n      if (params.css) {\n        // Add support for single file\n        if (!Array.isArray(params.css)) params.css = [params.css];\n\n        // Create link tags for each css file\n        params.css.forEach(function (file) {\n          printFrame.srcdoc += '<link rel=\"stylesheet\" href=\"' + file + '\">';\n        });\n      }\n\n      printFrame.srcdoc += '</head><body></body></html>';\n    }\n\n    // Check printable type\n    switch (params.type) {\n      case 'pdf':\n        // Check browser support for pdf and if not supported we will just open the pdf file instead\n        if (_browser2.default.isFirefox() || _browser2.default.isEdge() || _browser2.default.isIE()) {\n          try {\n            console.info('PrintJS currently doesn\\'t support PDF printing in Firefox, Internet Explorer and Edge.');\n            if (params.onBrowserIncompatible() === true) {\n              var win = window.open(params.fallbackPrintable, '_blank');\n              win.focus();\n              if (params.onPdfOpen) params.onPdfOpen();\n            }\n          } catch (e) {\n            params.onError(e);\n          } finally {\n            // Make sure there is no loading modal opened\n            if (params.showModal) _modal2.default.close();\n            if (params.onLoadingEnd) params.onLoadingEnd();\n          }\n        } else {\n          _pdf2.default.print(params, printFrame);\n        }\n        break;\n      case 'image':\n        _image2.default.print(params, printFrame);\n        break;\n      case 'html':\n        _html2.default.print(params, printFrame);\n        break;\n      case 'raw-html':\n        _rawHtml2.default.print(params, printFrame);\n        break;\n      case 'json':\n        _json2.default.print(params, printFrame);\n        break;\n    }\n  }\n};\n\n//# sourceURL=webpack://printJS/./src/js/init.js?");

/***/ }),

/***/ "./src/js/json.js":
/*!************************!*\
  !*** ./src/js/json.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Check if we received proper data\n    if (_typeof(params.printable) !== 'object') {\n      throw new Error('Invalid javascript data object (JSON).');\n    }\n\n    // Validate repeatTableHeader\n    if (typeof params.repeatTableHeader !== 'boolean') {\n      throw new Error('Invalid value for repeatTableHeader attribute (JSON).');\n    }\n\n    // Validate properties\n    if (!params.properties || !Array.isArray(params.properties)) {\n      throw new Error('Invalid properties array for your JSON data.');\n    }\n\n    // We will format the property objects to keep the JSON api compatible with older releases\n    params.properties = params.properties.map(function (property) {\n      return {\n        field: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' ? property.field : property,\n        displayName: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' ? property.displayName : property,\n        columnSize: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' && property.columnSize ? property.columnSize + ';' : 100 / params.properties.length + '%;'\n      };\n    });\n\n    // Create a print container element\n    params.printableElement = document.createElement('div');\n\n    // Check if we are adding a print header\n    if (params.header) {\n      (0, _functions.addHeader)(params.printableElement, params);\n    }\n\n    // Build the printable html data\n    params.printableElement.innerHTML += jsonToHTML(params);\n\n    // Print the json data\n    _print2.default.send(params, printFrame);\n  }\n};\n\n\nfunction jsonToHTML(params) {\n  // Get the row and column data\n  var data = params.printable;\n  var properties = params.properties;\n\n  // Create a html table\n  var htmlData = '<table style=\"border-collapse: collapse; width: 100%;\">';\n\n  // Check if the header should be repeated\n  if (params.repeatTableHeader) {\n    htmlData += '<thead>';\n  }\n\n  // Add the table header row\n  htmlData += '<tr>';\n\n  // Add the table header columns\n  for (var a = 0; a < properties.length; a++) {\n    htmlData += '<th style=\"width:' + properties[a].columnSize + ';' + params.gridHeaderStyle + '\">' + (0, _functions.capitalizePrint)(properties[a].displayName) + '</th>';\n  }\n\n  // Add the closing tag for the table header row\n  htmlData += '</tr>';\n\n  // If the table header is marked as repeated, add the closing tag\n  if (params.repeatTableHeader) {\n    htmlData += '</thead>';\n  }\n\n  // Create the table body\n  htmlData += '<tbody>';\n\n  // Add the table data rows\n  for (var i = 0; i < data.length; i++) {\n    // Add the row starting tag\n    htmlData += '<tr>';\n\n    // Print selected properties only\n    for (var n = 0; n < properties.length; n++) {\n      var stringData = data[i];\n\n      // Support nested objects\n      var property = properties[n].field.split('.');\n      if (property.length > 1) {\n        for (var p = 0; p < property.length; p++) {\n          stringData = stringData[property[p]];\n        }\n      } else {\n        stringData = stringData[properties[n].field];\n      }\n\n      // Add the row contents and styles\n      htmlData += '<td style=\"width:' + properties[n].columnSize + params.gridStyle + '\">' + stringData + '</td>';\n    }\n\n    // Add the row closing tag\n    htmlData += '</tr>';\n  }\n\n  // Add the table and body closing tags\n  htmlData += '</tbody></table>';\n\n  return htmlData;\n}\n\n//# sourceURL=webpack://printJS/./src/js/json.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Modal = {\n  show: function show(params) {\n    // Build modal\n    var modalStyle = 'font-family:sans-serif; ' + 'display:table; ' + 'text-align:center; ' + 'font-weight:300; ' + 'font-size:30px; ' + 'left:0; top:0;' + 'position:fixed; ' + 'z-index: 9990;' + 'color: #0460B5; ' + 'width: 100%; ' + 'height: 100%; ' + 'background-color:rgba(255,255,255,.9);' + 'transition: opacity .3s ease;';\n\n    // Create wrapper\n    var printModal = document.createElement('div');\n    printModal.setAttribute('style', modalStyle);\n    printModal.setAttribute('id', 'printJS-Modal');\n\n    // Create content div\n    var contentDiv = document.createElement('div');\n    contentDiv.setAttribute('style', 'display:table-cell; vertical-align:middle; padding-bottom:100px;');\n\n    // Add close button (requires print.css)\n    var closeButton = document.createElement('div');\n    closeButton.setAttribute('class', 'printClose');\n    closeButton.setAttribute('id', 'printClose');\n    contentDiv.appendChild(closeButton);\n\n    // Add spinner (requires print.css)\n    var spinner = document.createElement('span');\n    spinner.setAttribute('class', 'printSpinner');\n    contentDiv.appendChild(spinner);\n\n    // Add message\n    var messageNode = document.createTextNode(params.modalMessage);\n    contentDiv.appendChild(messageNode);\n\n    // Add contentDiv to printModal\n    printModal.appendChild(contentDiv);\n\n    // Append print modal element to document body\n    document.getElementsByTagName('body')[0].appendChild(printModal);\n\n    // Add event listener to close button\n    document.getElementById('printClose').addEventListener('click', function () {\n      Modal.close();\n    });\n  },\n  close: function close() {\n    var printFrame = document.getElementById('printJS-Modal');\n\n    printFrame.parentNode.removeChild(printFrame);\n  }\n};\n\nexports.default = Modal;\n\n//# sourceURL=webpack://printJS/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/pdf.js":
/*!***********************!*\
  !*** ./src/js/pdf.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Check if we have base64 data\n    if (params.base64) {\n      var bytesArray = Uint8Array.from(atob(params.printable), function (c) {\n        return c.charCodeAt(0);\n      });\n      createBlobAndPrint(params, printFrame, bytesArray);\n      return;\n    }\n\n    // Format pdf url\n    params.printable = /^(blob|http)/i.test(params.printable) ? params.printable : window.location.origin + (params.printable.charAt(0) !== '/' ? '/' + params.printable : params.printable);\n\n    // Get the file through a http request (Preload)\n    var req = new window.XMLHttpRequest();\n    req.responseType = 'arraybuffer';\n\n    req.addEventListener('load', function () {\n      // Check for errors\n      if ([200, 201].indexOf(req.status) === -1) {\n        (0, _functions.cleanUp)(params);\n        params.onError(req.statusText);\n\n        // Since we don't have a pdf document available, we will stop the print job\n        return;\n      }\n\n      // Print requested document\n      createBlobAndPrint(params, printFrame, req.response);\n    });\n\n    req.open('GET', params.printable, true);\n    req.send();\n  }\n};\n\n\nfunction createBlobAndPrint(params, printFrame, data) {\n  // Pass response or base64 data to a blob and create a local object url\n  var localPdf = new window.Blob([data], { type: 'application/pdf' });\n  localPdf = window.URL.createObjectURL(localPdf);\n\n  // Set iframe src with pdf document url\n  printFrame.setAttribute('src', localPdf);\n\n  _print2.default.send(params, printFrame);\n}\n\n//# sourceURL=webpack://printJS/./src/js/pdf.js?");

/***/ }),

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _browser = __webpack_require__(/*! ./browser */ \"./src/js/browser.js\");\n\nvar _browser2 = _interopRequireDefault(_browser);\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Print = {\n  send: function send(params, printFrame) {\n    // Append iframe element to document body\n    document.getElementsByTagName('body')[0].appendChild(printFrame);\n\n    // Get iframe element\n    var iframeElement = document.getElementById(params.frameId);\n\n    // Wait for iframe to load all content\n    iframeElement.onload = function () {\n      if (params.type === 'pdf') {\n        performPrint(iframeElement, params);\n        return;\n      }\n\n      // Get iframe element document\n      var printDocument = iframeElement.contentWindow || iframeElement.contentDocument;\n      if (printDocument.document) printDocument = printDocument.document;\n\n      // Append printable element to the iframe body\n      printDocument.body.appendChild(params.printableElement);\n\n      // Add custom style\n      if (params.type !== 'pdf' && params.style) {\n        // Create style element\n        var style = document.createElement('style');\n        style.innerHTML = params.style;\n\n        // Append style element to iframe's head\n        printDocument.head.appendChild(style);\n      }\n\n      // If printing images, wait for them to load inside the iframe\n      var images = printDocument.getElementsByTagName('img');\n\n      if (images.length > 0) {\n        loadIframeImages(images).then(function () {\n          return performPrint(iframeElement, params);\n        });\n      } else {\n        performPrint(iframeElement, params);\n      }\n    };\n  }\n};\n\nfunction performPrint(iframeElement, params) {\n  try {\n    iframeElement.focus();\n\n    // If Edge or IE, try catch with execCommand\n    if (_browser2.default.isEdge() || _browser2.default.isIE()) {\n      try {\n        iframeElement.contentWindow.document.execCommand('print', false, null);\n      } catch (e) {\n        iframeElement.contentWindow.print();\n      }\n    } else {\n      // Other browsers\n      iframeElement.contentWindow.print();\n    }\n  } catch (error) {\n    params.onError(error);\n  } finally {\n    (0, _functions.cleanUp)(params);\n  }\n}\n\nfunction loadIframeImages(images) {\n  var promises = [];\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var image = _step.value;\n\n      promises.push(loadIframeImage(image));\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return Promise.all(promises);\n}\n\nfunction loadIframeImage(image) {\n  return new Promise(function (resolve) {\n    var pollImage = function pollImage() {\n      !image || typeof image.naturalWidth === 'undefined' || image.naturalWidth === 0 || !image.complete ? setTimeout(pollImage, 500) : resolve();\n    };\n    pollImage();\n  });\n}\n\nexports.default = Print;\n\n//# sourceURL=webpack://printJS/./src/js/print.js?");

/***/ }),

/***/ "./src/js/raw-html.js":
/*!****************************!*\
  !*** ./src/js/raw-html.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Create printable element (container)\n    params.printableElement = document.createElement('div');\n    params.printableElement.setAttribute('style', 'width:100%');\n\n    // Set our raw html as the printable element inner html content\n    params.printableElement.innerHTML = params.printable;\n\n    // Print html contents\n    _print2.default.send(params, printFrame);\n  }\n};\n\n//# sourceURL=webpack://printJS/./src/js/raw-html.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://printJS/./src/sass/index.scss?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://printJS/multi_./src/index.js?");

/***/ })

/******/ })["default"];
});

/***/ }),

/***/ "./src/app/modules/reports/report-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/reports/report-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function() { return ReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.component */ "./src/app/modules/reports/report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["RoleAuthGuard"]],
        data: { roles: ['SECURITY', 'SECURITYHEAD'] }
    },
];
var ReportRoutingModule = /** @class */ (function () {
    function ReportRoutingModule() {
    }
    ReportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportRoutingModule);
    return ReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/reports/report.component.html":
/*!*******************************************************!*\
  !*** ./src/app/modules/reports/report.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-xs-12\">\n\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n\n        <h2 style=\"color: #41ad4f; text-align: center;padding: 8px;\">{{'Header.Report' | translate}}</h2>\n\n        <div class=\"row\" style=\"margin: 10px;\">\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label for=\"StatusId\">{{'Visit.StatusId' | translate}}</label>\n            <ng-select [items]=\"status\" \n            [virtualScroll]=\"true\" \n            [ngModelOptions]=\"{standalone: true}\"\n            bindLabel='{{statustextLbl}}'\n            bindValue=\"StatusID\"\n            placeholder=\"{{'Visit.StatusId' | translate}}\"\n            [(ngModel)]=\"reportModel.StatusId\">\n  </ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label for=\"Name\">{{'Visit.Name' | translate}}</label>\n              <input type=\"text\" name=\"Name\"  placeholder=\"{{'Visit.Name' | translate}}\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" \n              class=\"form-control\"  [(ngModel)]=\"reportModel.Name\" />\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label for=\"ID\">{{'Visit.ID' | translate}}</label>\n              <input type=\"text\" name=\"ID\" placeholder=\"{{'Visit.ID' | translate}}\"  class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" \n              class=\"form-control\"  [(ngModel)]=\"reportModel.NationalID\" />\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label for=\"MobileNo\">{{'Visit.MobileNo' | translate}}</label>\n              <input type=\"text\" placeholder=\"{{'Visit.MobileNo' | translate}}\" name=\"MobileNo\"  [ngModelOptions]=\"{standalone: true}\" \n              class=\"form-control\"  [(ngModel)]=\"reportModel.MobileNo\" />\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n            <label >{{'Report.FromDate' | translate}}</label>\n           \n            <p-calendar class=\"primeate\"  [style]=\"{'width':'100%'}\" [inputStyle]=\"{'width':'100%'}\"   [ngModelOptions]=\"{standalone: true}\" [maxDate]=\"reportModel.ToDate\"  [(ngModel)]=\"reportModel.FromDate\"></p-calendar>\n            </div>\n          </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n              <label >{{'Report.ToDate' | translate}}</label>\n             \n              <p-calendar  class=\"primeate\" [style]=\"{'width':'100%'}\" [inputStyle]=\"{'width':'100%'}\" [ngModelOptions]=\"{standalone: true}\"  [minDate]=\"reportModel.FromDate\" [(ngModel)]=\"reportModel.ToDate\"></p-calendar>\n              </div>\n            </div>\n\n          <div class=\"col-sm-12\" style=\"display: flex;flex-direction: row; flex-wrap: nowrap;justify-content: space-around; align-items: center; align-content: center;\">\n          <div class=\"col-sm-4\">\n              <button type=\"button\" id=\"Search\" (click)=\"VisitorReport()\"\n              class=\"submit-btn2 search-btn\">{{'Report.VisitorReport' | translate}}</button>\n              <br>\n            </div>\n         <!--    <div class=\"col-sm-4\">\n              <button type=\"button\" id=\"Search\" (click)=\"ContractReport()\"\n              class=\"submit-btn2 search-btn\">{{'Report.ContractReport' | translate}}</button>\n              <br>\n            </div>\n             -->\n            </div>\n       \n    </div>\n\n\n      <!--   <div>\n          <h2 style=\"color: #41ad4f; text-align: center;padding: 8px;\">{{SearchblTitlePage}}</h2>\n\n          <ng2-smart-table [settings]=\"settingsbL\"  [source]=\"sourcebl\" >\n          </ng2-smart-table>\n        </div>\n        <br>\n        <hr class=\"type_5\"> -->\n        <br>\n        <div *ngIf=\"source&&source.length>0\">\n          <h2 style=\"color: #41ad4f; text-align: center; padding: 8px;\">{{ReportvisitTitlePage}}</h2>\n          <br>\n      <div *ngIf=\"source&&source.length>0\" class=\"col-sm-4\">\n            <button type=\"button\" id=\"pdf\" (click)=\"export()\"\n            class=\"submit-btn2 search-btn\">{{'Report.ExportPdf' | translate}}</button>\n            <br>\n          </div> \n          <div>\n          <h3 style=\"color: #41ad4f;  padding: 8px;\"><span>{{'Report.NumberRecord' | translate}}</span> &nbsp; <span style=\"font-weight: bold;  text-decoration: underline;\">{{visitorCount}}</span></h3>\n        </div>\n          <ng2-smart-table [settings]=\"settings\"  id=\"myTableElementId\"  [source]=\"source\"  >\n          </ng2-smart-table>\n        </div>\n<div style=\"text-align:center;\" *ngIf=\"!source||source.length==0\">\n  <H2 style=\"background-color: green;text-align:center; border-radius: \n10px; color: white; padding: 10px;\"> \n {{'Visit.NoRequest' | translate}}😄 </H2> <br>\n  \n  \n  </div>\n\n\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/reports/report.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/reports/report.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialogbtn{width:80px;font-size:bold;font-weight:600;height:31px}.fot{z-index:99;width:100%}.search-btn{color:#fff !important;font-weight:normal !important;display:block !important;text-align:center;height:45px !important;font-size:15px !important;line-height:45px !important;border-radius:2px !important;background:linear-gradient(45deg, #0d8a74 0%, #76cd50 100%) !important;-webkit-transition:all 0.3s !important;transition:all 0.3s !important;border:none !important;width:100% !important;margin-bottom:0px;margin-top:0px;align-content:center;cursor:pointer}\n"

/***/ }),

/***/ "./src/app/modules/reports/report.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/reports/report.component.ts ***!
  \*****************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! print-js */ "./node_modules/print-js/dist/print.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportComponent = /** @class */ (function () {
    /*    exportAsConfig: ExportAsConfig = {
        type: 'docx', // the type you want to download
        elementId: 'myTableIdElementId', // the id of html/table element,
        options: { // html-docx-js document options
          orientation: 'landscape',
          margins: {
            top: '20'
          }
        }
      } */
    function ReportComponent(reportService, lookUpsService, title, commonService, spinnerService) {
        var _this = this;
        this.reportService = reportService;
        this.lookUpsService = lookUpsService;
        this.title = title;
        this.commonService = commonService;
        this.spinnerService = spinnerService;
        this.visitorCount = 0;
        this.reportModel = {};
        this.errors = {};
        this.translate = this.commonService.returnTranslate();
        this.statustextLbl = this.translate.currentLang == "ar" ? "StatusTypeAR" : "StatusTypeEN";
        this.status = [];
        this.sourcebl = [];
        this.source = [];
        this.settings = { actions: {
                position: 'right',
                add: false,
                edit: false,
                editable: false,
                columnTitle: '',
                delete: false
            }, };
        this.settingsV = {
            // hideSubHeader: true,
            noDataMessage: this.translate.instant('Visit.NoRequest'),
            mode: "external",
            actions: {
                position: 'right',
                add: false,
                edit: false,
                editable: false,
                columnTitle: '',
                delete: false
            },
            columns: {
                Name: {
                    title: this.translate.instant('ApproveRequest.VisitorName'),
                    type: "string",
                    editable: false
                },
                NationalId: {
                    title: this.translate.instant('Visit.ID'),
                    type: "string",
                    editable: false
                },
                office_extn: {
                    title: this.translate.instant('SearchRequest.office_extn'),
                    type: "string", width: "4%",
                    editable: false
                },
                CreatedDate: {
                    title: this.translate.instant('Visit.CreatedDate'),
                    type: "string", width: "13%",
                    editable: false,
                    valuePrepareFunction: function (date) {
                        if (date) {
                            return new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(date, 'yyyy-MM-dd h:mm a');
                        }
                        return null;
                    },
                },
                VisitDate: {
                    title: this.translate.instant('Visit.VisitDate'),
                    type: "string",
                    editable: false,
                    width: '12%'
                },
                TimeAttendance: {
                    title: this.translate.instant('SearchRequest.TimeAttendance'),
                    type: "string",
                    editable: false,
                    width: '10%'
                },
                TimeToleave: {
                    title: this.translate.instant('SearchRequest.TimeToleave'),
                    type: "string",
                    editable: false,
                    width: '10%'
                },
                VisitTypeID: {
                    title: this.translate.instant('Visit.VisitTypeID'),
                    type: "string", editable: false,
                    valuePrepareFunction: function (data) {
                        if (data) {
                            return data == 1 ? _this.translate.instant('Visit.VisitTypeVisit') : _this.translate.instant('Visit.VisitTypWalkinVisitor');
                        }
                        return null;
                    },
                },
            },
            attr: {
                class: 'table table-bordered'
            }
        };
        this.settingsC = {
            // hideSubHeader: true,
            noDataMessage: this.translate.instant('Visit.NoRequest'),
            mode: "external",
            actions: {
                position: 'right',
                add: false,
                edit: false,
                editable: false,
                columnTitle: '',
                delete: false
            },
            columns: {
                bl_ID: {
                    title: this.translate.instant('Visit.ID'),
                    type: "string",
                    editable: false
                },
                bl_Name: {
                    title: this.translate.instant('SearchRequest.bl_Name'),
                    type: "string",
                    editable: false
                },
                bl_MobileNo: {
                    title: this.translate.instant('SearchRequest.bl_MobileNo'),
                    type: "string",
                    editable: false
                }
            },
            attr: {
                class: 'table table-bordered'
            }
        };
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'myTableElementId',
            options: {
                orientation: 'landscape',
                height: '100%',
                format: 'letter',
                styles: { columnWidth: 'wrap' },
                columnStyles: {
                    text: { columnWidth: 'auto' },
                    nil: { halign: 'right' },
                    tgl: { halign: 'right' }
                },
                headerStyles: { halign: 'center' },
                theme: 'striped',
                lang: 'ar'
            }
        };
        this.title.setTitle(this.translate.instant('Header.Report'));
        if (this.translate.currentLang == 'ar') {
            this.settingsV.columns.StatusTypeAR = {
                title: this.translate.instant('Visit.StatusType'),
                type: "string", editable: false, width: '8%'
            };
            this.settingsV.columns.Employee_name_AR = {
                title: this.translate.instant('ApproveRequest.Employee_name_AR'),
                type: "string", editable: false, width: '11%'
            };
            //----------------
            this.settingsC.columns.RequesterNameAR = {
                title: this.translate.instant('SearchRequest.RequesterName'),
                type: "string", editable: false
            };
        }
        else {
            this.settingsV.columns.StatusTypeEN = {
                title: this.translate.instant('Visit.StatusType'),
                type: "string", editable: false, width: '8%'
            };
            this.settingsV.columns.Employee_name_EN = {
                title: this.translate.instant('ApproveRequest.Employee_name_EN'),
                type: "string", editable: false, width: '11%'
            };
            //----------------
            this.settingsC.columns.RequesterNameEN = {
                title: this.translate.instant('SearchRequest.RequesterName'),
                type: "string", editable: false
            };
        }
        this.settingsV.columns.Comments = {
            title: this.translate.instant('SearchRequest.Comments'), type: "string", editable: false, width: '11%'
        };
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.getStatus();
    };
    ReportComponent.prototype.VisitorReport = function () {
        this.settings = this.settingsV;
        this.ReportvisitTitlePage = this.translate.instant('Report.SearchVisitTitlePage');
        this.getRequests();
    };
    ReportComponent.prototype.ContractReport = function () {
        this.settings = this.settingsC;
        this.ReportvisitTitlePage = this.translate.instant('Report.SearchContractTitlePage');
        //this.getblackListRequests();
    };
    ReportComponent.prototype.getRequests = function () {
        var _this = this;
        if (this.reportModel.ToDate) {
            this.reportModel.ToDate = new Date(new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.reportModel.ToDate, 'yyyy-MM-dd'));
        }
        if (this.reportModel.FromDate) {
            this.reportModel.FromDate = new Date(new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.reportModel.FromDate, 'yyyy-MM-dd'));
        }
        this.spinnerService.show();
        try {
            this.reportService
                .getData(this.reportModel).subscribe(function (requests) {
                if (requests) {
                    _this.source = requests;
                    _this.visitorCount = requests.length;
                    _this.spinnerService.hide();
                }
            }, function (err) {
                _this.commonService.showFailureToast(err.Message);
                _this.spinnerService.hide();
            }),
                function (err) {
                    _this.commonService.showFailureToast(err);
                    _this.spinnerService.hide();
                };
        }
        catch (err) {
            this.spinnerService.hide();
            this.commonService.showFailureToast(err);
            this.errors = err;
        }
    };
    /*   getblackListRequests() {
        this.spinnerService.show();
        try {
          this.searchRequestService
            .getblackList(this.reportModel).subscribe((requests:any) => {
              if (requests){
                this.source = requests;
                this.visitorCount=requests.length;
                this.spinnerService.hide();
              }
            },err =>{this.commonService.showFailureToast(err.Message);
              this.spinnerService.hide();}),
              err =>{this.commonService.showFailureToast(err);
               this.spinnerService.hide();}
        } catch (err) {
          this.spinnerService.hide();
          this.commonService.showFailureToast(err);
          this.errors = err;
        }
     
      } */
    ReportComponent.prototype.getStatus = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.lookUpsService
                .getStatusLookup('v').subscribe(function (requests) {
                if (requests) {
                    _this.status = requests;
                }
            }, function (error) { _this.commonService.showFailureToast(error); _this.spinnerService.hide(); }), function (err) {
                _this.commonService.showFailureToast(err);
                _this.spinnerService.hide();
            };
        }
        catch (err) {
            this.spinnerService.hide();
            this.commonService.showFailureToast(err);
            this.errors = err;
        }
    };
    ReportComponent.prototype.export = function () {
        var cols = [];
        var rows = [];
        var i = 1;
        for (var key in this.source) {
            var temp = [];
            for (var col in Object.keys(this.settings.columns)) {
                var item = Object.keys(this.settings.columns)[col];
                if (key == '0') {
                    var coldata = { field: item, displayName: this.settings.columns[item]['title'] };
                    cols.push(coldata);
                }
                this.source[key].no = Number(i);
                temp.push(this.source[key][item]);
            }
            rows.push(temp);
            i = i + 1;
        }
        cols.push({ field: 'no', displayName: '#' });
        print_js__WEBPACK_IMPORTED_MODULE_4__({ printable: this.source, css: ['../../../assets/styles/main.css', '../../../styles.css',
                "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'",], properties: cols,
            documentTitle: this.ReportvisitTitlePage + new Date().toDateString(),
            style: "@page {\n    size: landscape;orphans:4; widows:2;\n    margin: 3%\n }.custom-h3 { color: #17750c;text-align:center;font-weight: 600; } \n   table{font-size: 16px;text-align: center !important;\n    display: table !important;} tr:nth-child(odd) { \n      background-color: rgba(65, 171, 52, 0.23);}\n      thead ,th {\n        font-size:\t17pt;\n        background-color:white;\n        font-family: \tEl Messiri,titillium web,sans-serif, sans-serif !important;\n        text-align: center !important;\n        \n          }\n          tbody {\n            font-size:\t16pt;\n            text-align: center !important;}\n      ",
            showModal: true, font: 'TimesNewRoman',
            headerStyle: 'font-weight: 600;',
            gridHeaderStyle: 'font-weight: bolder;font-size:17pt;text-align:center;color: #17750c;  border: 2px solid #333;',
            gridStyle: 'font-size: 14pt;text-align:center;border: 1px solid #333;font-weight: 300;font-family:Times New Roman,Times,serif;',
            header: "<h3 dir=\"rtl\" class=\"custom-h3\">" + this.ReportvisitTitlePage + "</h3>", type: 'json' });
        //  this.exportAsService.save(this.exportAsConfig, 'My File Name');
        // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
        /*   this.exportAsService.get(this.exportAsConfig).subscribe(content => {
            console.log(content);
          }); */
        /*  var doc = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
         var cols =[];
         var rows = [];
         
         for(var key in this.source){
           
           var temp=[];
           for(var col in Object.keys(this.settings.columns)){
       
            var item= Object.keys(this.settings.columns)[col];
            if(key=='0'){
             cols.push(this.settings.columns[item]['title'])
            }
            
              temp.push(this.source[key][item]);
            
           }
       
           rows.push(temp);
         }
       
         console.log('cols',cols)
         console.log('rows',rows)
       
       
       
       /*   doc.autoTable(cols, rows, {
           startY: 20,
           orientation: 'landscape',
           format: 'letter',
           margin: { horizontal: 7 },
           styles: { columnWidth: 'wrap' },
           columnStyles: {
               text: { columnWidth: 'auto' },
               nil: { halign: 'right' },
               tgl: { halign: 'right' }
           },
           headerStyles: { halign: 'center' },
           theme: 'striped',
           lang: 'ar'
       }); */
        /* const elementToPrint = document.getElementById('myTableElementId');
        html2canvas(elementToPrint).then(canvas => {
          // Few necessary setting options
          var imgWidth = 208;
          var pageHeight = 295;
          var imgHeight = canvas.height * imgWidth / canvas.width;
          var heightLeft = imgHeight;
        
          const contentDataURL = canvas.toDataURL('image/png')
          var position = 0;
          doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
          doc.save('MYPdf.pdf'); // Generated PDF
        });
        */
        /* doc.autoTable({html: document.getElementById('myTableElementId')});
          doc.save('Te58st.pdf');*/
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-report-page',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/modules/reports/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/modules/reports/report.component.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["LookUpsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
            _core__WEBPACK_IMPORTED_MODULE_3__["CommonService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/reports/report.module.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/reports/report.module.ts ***!
  \**************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.component */ "./src/app/modules/reports/report.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/modules/reports/report-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReportRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]],
            declarations: [_report_component__WEBPACK_IMPORTED_MODULE_0__["ReportComponent"]],
            providers: [],
            entryComponents: []
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-reports-report-module.js.map