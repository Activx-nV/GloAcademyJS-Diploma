/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n\n //function expressions\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://LandingPage-Diploma/./src/index.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector('.club-select'),\n      menu = document.getElementById('club-list'),\n      menuSelector = document.querySelector('.clubs-list').firstElementChild;\n  var count = 0;\n\n  var handlerMenu = function handlerMenu(event) {\n    var target = event.target.tagName;\n\n    if (menu.style.display !== 'block') {\n      var flyInterval;\n\n      var flyAnimate = function flyAnimate() {\n        flyInterval = requestAnimationFrame(flyAnimate);\n        count += 0.02;\n        menu.style.opacity = count;\n\n        if (count > 1) {\n          cancelAnimationFrame(flyInterval);\n        }\n      };\n\n      flyInterval = requestAnimationFrame(flyAnimate);\n      menu.style.display = 'block';\n      menuSelector.textContent = 'Закрыть меню';\n    } else if (menu.style.display === 'block' && target === 'A' || target === 'P') {\n      var _flyInterval;\n\n      var _flyAnimate = function _flyAnimate() {\n        _flyInterval = requestAnimationFrame(_flyAnimate);\n        count -= 0.02;\n        menu.style.opacity = count;\n\n        if (count < 0.2) {\n          menu.style.display = 'none';\n          cancelAnimationFrame(_flyInterval);\n        }\n      };\n\n      _flyInterval = requestAnimationFrame(_flyAnimate);\n      menuSelector.textContent = 'Выбрать клуб';\n    }\n  };\n\n  btnMenu.addEventListener('click', handlerMenu);\n  menu.addEventListener('click', function (event) {\n    var target = event.target.tagName;\n\n    if (target === 'A') {\n      handlerMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://LandingPage-Diploma/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var opacityIn = 0;\n  var opacityOut = 1;\n  var popUp = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      promoBtn = document.querySelector('.fixed-gift'),\n      promoPopUp = document.getElementById('gift');\n  var formInputs = document.querySelectorAll('.input-text input'); //fadeIn\n\n  function fadeIn(speed, domStr) {\n    var opacityInterval;\n\n    var opacityAnimate = function opacityAnimate() {\n      opacityInterval = requestAnimationFrame(opacityAnimate);\n      opacityIn += speed;\n\n      if (opacityIn < 1.01) {\n        domStr.style.opacity = opacityIn;\n      } else if (opacityIn >= 1) {\n        cancelAnimationFrame(opacityInterval);\n      }\n    };\n\n    opacityInterval = requestAnimationFrame(opacityAnimate);\n  } //fadeOff\n\n\n  function fadeOff(speed, domStr) {\n    var opacityInterval;\n    opacityOut = 1;\n\n    var opacityAnimate = function opacityAnimate() {\n      opacityInterval = requestAnimationFrame(opacityAnimate);\n      opacityOut -= speed;\n\n      if (opacityOut > 0.1) {\n        domStr.style.opacity = opacityOut;\n      } else {\n        domStr.style.display = 'none';\n        formInputs.forEach(function (elem) {\n          elem.value = '';\n        });\n        cancelAnimationFrame(opacityInterval);\n      }\n    };\n\n    opacityInterval = requestAnimationFrame(opacityAnimate);\n  } //popUpON\n\n\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      if (document.documentElement.clientWidth >= 768) {\n        opacityIn = 0;\n        popUp.style.display = 'block';\n        fadeIn(0.05, popUp);\n      } else {\n        popUp.style.display = 'block';\n        popUp.style.opacity = 1;\n      }\n    }); //giftPopUp\n\n    promoBtn.addEventListener('click', function () {\n      //giftPopUpON\n      if (document.documentElement.clientWidth >= 768) {\n        opacityIn = 0;\n        promoPopUp.style.display = 'block';\n        promoBtn.style.display = 'none';\n        fadeIn(0.01, promoPopUp);\n      } else {\n        promoPopUp.style.display = 'block';\n        promoPopUp.style.opacity = 1;\n        promoBtn.style.display = 'none';\n      } //giftPopUpOFF\n\n\n      promoPopUp.addEventListener('click', function (event) {\n        var target = event.target;\n\n        if (target.classList.contains('close_icon')) {\n          if (document.documentElement.clientWidth >= 768) {\n            fadeOff(0.01, promoPopUp);\n          } else {\n            promoPopUp.style.display = 'none';\n          }\n        } else if (target.classList.contains('overlay')) {\n          if (document.documentElement.clientWidth >= 768) {\n            fadeOff(0.01, promoPopUp);\n          } else {\n            promoPopUp.style.display = 'none';\n          }\n        } else if (target.classList.contains('close-btn')) {\n          if (document.documentElement.clientWidth >= 768) {\n            fadeOff(0.01, promoPopUp);\n          } else {\n            promoPopUp.style.display = 'none';\n          }\n        }\n      });\n    }); //popUpOFF\n\n    popUp.addEventListener('click', function (event) {\n      var target = event.target;\n\n      if (target.classList.contains('close_icon')) {\n        if (document.documentElement.clientWidth >= 768) {\n          fadeOff(0.01, popUp);\n        } else {\n          popUp.style.display = 'none';\n          formInputs.forEach(function (elem) {\n            elem.value = '';\n          });\n          popUp.style.display = 'none';\n        }\n      } else if (target.classList.contains('overlay')) {\n        if (document.documentElement.clientWidth >= 768) {\n          fadeOff(0.01, popUp);\n        } else {\n          formInputs.forEach(function (elem) {\n            elem.value = '';\n          });\n          popUp.style.display = 'none';\n        }\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://LandingPage-Diploma/./src/modules/togglePopUp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;