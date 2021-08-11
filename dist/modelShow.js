/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cameraUtil\": () => (/* binding */ cameraUtil)\n/* harmony export */ });\nclass cameraUtil{\r\n\r\n     setPosition() {\r\n        alert('x')\r\n    }\r\n    //初始化镜头\r\n     initCamera(camera) {\r\n        camera = new THREE.PerspectiveCamera(55, this.width / this.height, 1, 2000);\r\n        camera.position.set(-96.18409385000196, 109.51883971544846, 534.568718641901);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://modelShow/./src/camera.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modelShow\": () => (/* binding */ modelShow)\n/* harmony export */ });\n// import * as THREE from \"three\";\r\n// import { OrbitControls } from \"three/examples/jsm/controls/OrbitControls.js\";\r\n// import { GLTFLoader } from \"three/examples/jsm/loaders/GLTFLoader.js\";\r\n// import { DRACOLoader } from \"three/examples/jsm/loaders/DRACOLoader.js\";\r\n// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';\r\n// import { getModelCenter } from \"../lib/util\";\r\n// import { cameraUtil }  from \"./camera\";\r\n\r\n\r\nclass modelShow {\r\n  constructor(Option) {\r\n    this.Option = Option;\r\n    this.light = undefined;\r\n    this.camera = undefined;\r\n    this.renderer = undefined;\r\n    this.controls = undefined;\r\n    // this.loader = new GLTFLoader();\r\n    // this.scene = new THREE.Scene();\r\n    // this.dracoLoader = new DRACOLoader();\r\n    this.width = this.Option.dom ? document.querySelector(this.Option.dom).clientWidth : window.innerWidth;\r\n    this.height = this.Option.dom ? document.querySelector(this.Option.dom).clientHeight : window.innerHeight;\r\n  }\r\n\r\n//   show() {\r\n//     this.initRender();\r\n//     this.initCamera()\r\n//     // cameraUtil.initCamera(this.camera);\r\n//     console.log(this.camera)\r\n//     this.initControls();\r\n//     this.initLight();\r\n//     this.initHDR();\r\n//     this.loadModel();\r\n//     this.animate();\r\n//     // cameraUtil.setPosition()\r\n//     console.log(cameraUtil.prototype.setPosition())\r\n//   }\r\n\r\n//   //设置渲染器\r\n//   initRender() {\r\n//     this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, precision: \"highp\", });\r\n//     this.renderer.shadowMap.enabled = true;\r\n//     this.renderer.setSize(this.width, this.height);\r\n//     this.renderer.setPixelRatio(window.devicePixelRatio);\r\n//     this.renderer.outputEncoding = THREE.sRGBEncoding;\r\n//     this.Option.dom ? document.querySelector(this.Option.dom).appendChild(this.renderer.domElement) : document.body.appendChild(this.renderer.domElement);\r\n//   }\r\n\r\n//   //初始化HDR\r\n//   initHDR() {\r\n//     const pmremGenerator = new THREE.PMREMGenerator(this.renderer); // 使用hdr作为背景色\r\n//     pmremGenerator.compileEquirectangularShader();\r\n\r\n//     new RGBELoader().load('./test.hdr', (texture) => {\r\n//       const envMap = pmremGenerator.fromEquirectangular(texture).texture;\r\n//       pmremGenerator.dispose();\r\n//       this.scene.environment = envMap;\r\n//       this.scene.background = envMap;\r\n//     });\r\n//   }\r\n\r\n//   //加载模型\r\n//   loadModel() {\r\n//     this.dracoLoader.setDecoderPath(\"three/examples/js/libs/draco/gltf/\"),\r\n//       this.loader.setDRACOLoader(this.dracoLoader);\r\n//     this.loader.load(this.Option.src, (obj) => {\r\n//       this.scene.add(obj.scene);\r\n//     });\r\n//   }\r\n\r\n//   //初始化控制器\r\n//   initControls() {\r\n//     this.controls = new OrbitControls(this.camera, this.renderer.domElement);\r\n//     this.controls.update();\r\n//   }\r\n\r\n//   //初始化灯光\r\n//   initLight() {\r\n//     this.light = new THREE.AmbientLight(0xffffff, 1);\r\n//     this.scene.add(this.light);\r\n//   }\r\n\r\n//   initCamera() {\r\n//     this.camera = new THREE.PerspectiveCamera(55, this.width / this.height, 1, 2000);\r\n//     this.camera.position.set(-96.18409385000196, 109.51883971544846, 534.568718641901);\r\n// }\r\n\r\n//   //重复渲染\r\n//   animate() {\r\n//     requestAnimationFrame(this.animate.bind(this));\r\n//     this.controls.update();\r\n//     this.renderer.render(this.scene, this.camera);\r\n//   }\r\n}\r\n\r\nwindow.modelShow = modelShow;\r\n\n\n//# sourceURL=webpack://modelShow/./src/index.js?");

/***/ }),

/***/ "./src/modelShow.js":
/*!**************************!*\
  !*** ./src/modelShow.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modelShow\": () => (/* binding */ modelShow)\n/* harmony export */ });\n/* harmony import */ var _camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera.js */ \"./src/camera.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\nclass modelShow{\r\n    constructor(Option) {\r\n        this.Option = Option;\r\n        this.light = undefined;\r\n        this.camera = undefined;\r\n        this.renderer = undefined;\r\n        this.controls = undefined;\r\n        // this.loader = new GLTFLoader();\r\n        // this.scene = new THREE.Scene();\r\n        // this.dracoLoader = new DRACOLoader();\r\n        this.width = this.Option.dom ? document.querySelector(this.Option.dom).clientWidth : window.innerWidth;\r\n        this.height = this.Option.dom ? document.querySelector(this.Option.dom).clientHeight : window.innerHeight;\r\n      }\r\n    show() {\r\n        // this.initRender();\r\n        // this.initCamera();\r\n        // this.initControls();\r\n        // this.initLight();\r\n        // this.initHDR();\r\n        // this.loadModel();\r\n        // this.animate();\r\n        console.log('xx')\r\n\r\n        _camera_js__WEBPACK_IMPORTED_MODULE_0__.cameraUtil.setPosition()\r\n        // console.log(getModelCenter)\r\n      }\r\n}\r\n\n\n//# sourceURL=webpack://modelShow/./src/modelShow.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modelShow.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});