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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:\\maizuowang\\maizuo\\.babelrc: Error while parsing JSON - Expected '}' instead of '�' at line 2 column 37 of the JSON5 data. Still to read: \"��\\r\\n       \\r\\n       \"\n    at error (D:\\maizuowang\\maizuo\\node_modules\\_json5@0.5.1@json5\\lib\\json5.js:56:25)\n    at next (D:\\maizuowang\\maizuo\\node_modules\\_json5@0.5.1@json5\\lib\\json5.js:72:17)\n    at object (D:\\maizuowang\\maizuo\\node_modules\\_json5@0.5.1@json5\\lib\\json5.js:464:25)\n    at value (D:\\maizuowang\\maizuo\\node_modules\\_json5@0.5.1@json5\\lib\\json5.js:482:20)\n    at Object.parse (D:\\maizuowang\\maizuo\\node_modules\\_json5@0.5.1@json5\\lib\\json5.js:508:18)\n    at ConfigChainBuilder.addConfig (D:\\maizuowang\\maizuo\\node_modules\\_babel-core@6.26.0@babel-core\\lib\\transformation\\file\\options\\build-config-chain.js:150:65)\n    at ConfigChainBuilder.findConfigs (D:\\maizuowang\\maizuo\\node_modules\\_babel-core@6.26.0@babel-core\\lib\\transformation\\file\\options\\build-config-chain.js:96:16)\n    at buildConfigChain (D:\\maizuowang\\maizuo\\node_modules\\_babel-core@6.26.0@babel-core\\lib\\transformation\\file\\options\\build-config-chain.js:61:13)\n    at OptionManager.init (D:\\maizuowang\\maizuo\\node_modules\\_babel-core@6.26.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:354:58)\n    at File.initOptions (D:\\maizuowang\\maizuo\\node_modules\\_babel-core@6.26.0@babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (D:\\maizuowang\\maizuo\\node_modules\\_babel-core@6.26.0@babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (D:\\maizuowang\\maizuo\\node_modules\\_babel-core@6.26.0@babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (D:\\maizuowang\\maizuo\\node_modules\\_babel-loader@7.1.1@babel-loader\\lib\\index.js:49:20)\n    at Object.module.exports (D:\\maizuowang\\maizuo\\node_modules\\_babel-loader@7.1.1@babel-loader\\lib\\index.js:174:20)");

/***/ })
/******/ ]);