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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_formValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/formValidator */ \"./src/modules/formValidator.js\");\n\n\n\n //Function calls\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_formValidator__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n//# sourceURL=webpack://LandingPage-Diploma/./src/index.js?");

/***/ }),

/***/ "./src/modules/formValidator.js":
/*!**************************************!*\
  !*** ./src/modules/formValidator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar formValidator = function formValidator() {\n  var formTextInput = document.querySelectorAll('.text-input');\n  var formNumberInput = document.querySelectorAll('.num-input'); //const expandedFormName = document.querySelector('.top-form');\n  //const expandedFormMessage = document.querySelector('.mess');\n\n  var formBtns = document.querySelectorAll('.btn-send');\n  formTextInput.forEach(function (item) {\n    item.setAttribute('autocomplete', 'off');\n  });\n  formNumberInput.forEach(function (item) {\n    item.setAttribute('autocomplete', 'off');\n  }); //expandedFormName.setAttribute('autocomplete', 'off');\n  //expandedFormMessage.setAttribute('autocomplete', 'off');\n\n  var validatePhoneInput = function validatePhoneInput(dom) {\n    dom.forEach(function (item) {\n      item.addEventListener('input', function () {\n        if (item.value !== '') {\n          if (!item.value.match(/^(\\+?[0-9]*)$/g)) {\n            //item.value = item.value.substr(0, item.value.length - 1);\n            formBtns.forEach(function (btns) {\n              btns.setAttribute('disabled', true);\n            });\n          } else {\n            formBtns.forEach(function (btns) {\n              btns.removeAttribute('disabled', true);\n            });\n          }\n        }\n      });\n    });\n    dom.forEach(function (item) {\n      item.addEventListener('change', function () {\n        if (item.value !== '') {\n          if (!item.value.match(/^(\\+?[0-9]*)$/g)) {\n            item.value = '';\n          }\n        }\n      });\n    });\n  };\n\n  var validateStringInput = function validateStringInput(dom) {\n    dom.forEach(function (item) {\n      item.addEventListener('input', function () {\n        // if (!item.value[item.value.length - 1].match(/^[а-яА-Я ]/)) {\n        //     item.value = item.value.substr(0, item.value.length - 1);\n        // }\n        item.value = item.value.replace(/[^А-Яа-яЁё ]/g, \"\");\n      });\n    });\n  };\n\n  validatePhoneInput(formNumberInput);\n  validateStringInput(formTextInput); // expandedFormName.addEventListener('input', () => {\n  //     expandedFormName.value = expandedFormName.value.replace(/[^А-Яа-яЁё ]/g, \"\");\n  // });\n  // expandedFormMessage.addEventListener('input', () => {\n  //     expandedFormMessage.value = expandedFormMessage.value.replace(/[^А-Яа-яЁё.,!? ]/g, \"\");\n  // });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidator);\n\n//# sourceURL=webpack://LandingPage-Diploma/./src/modules/formValidator.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body) // ,credentials: 'include'\n\n    });\n  }; // const form = document.getElementById('form1');\n  // const popUpForm = document.getElementById('form3');\n  //const formInputs = document.querySelector('.client-input');\n\n\n  var checkbox = document.querySelectorAll('.checkbox');\n  var popUp = document.querySelector('.popup');\n  var popUpThanks = document.querySelector('#thanks');\n  var bannerForm = document.getElementById('banner-form');\n  var form1 = document.getElementById('form1');\n  var form2 = document.getElementById('form2');\n  var statusMessage = document.createElement('div');\n  var allPageInputs = document.querySelectorAll('input');\n  statusMessage.style.cssText = 'font-size: 2rem;';\n\n  function formHandler(form) {\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      statusMessage.textContent = loadMessage;\n\n      if (event.target === bannerForm) {\n        event.target.children[3].innerText = loadMessage;\n      } else {\n        event.target.lastElementChild.innerText = loadMessage;\n      }\n\n      var formData = new FormData(form);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('Status error, something went wrong.');\n        }\n\n        statusMessage.textContent = successMessage;\n        allPageInputs.forEach(function (item) {\n          item.value = '';\n        }); //mozho vernyt vse na mesto posle vyhoda\n\n        popUp.style.display = 'none';\n\n        if (event.target === bannerForm) {\n          event.target.children[3].innerText = 'Записаться';\n        } else {\n          event.target.lastElementChild.innerText = 'Записаться';\n        }\n\n        popUpThanks.style.display = 'block';\n        checkbox.forEach(function (elem) {\n          elem.checked = false;\n        });\n        popUpThanks.addEventListener('click', function (event) {\n          var target = event.target;\n\n          if (target.classList.contains('close_icon')) {\n            popUpThanks.style.display = 'none';\n          } else if (target.classList.contains('overlay')) {\n            popUpThanks.style.display = 'none';\n          } else if (target.classList.contains('close-btn')) {\n            popUpThanks.style.display = 'none';\n          }\n        });\n      })[\"catch\"](function (error) {\n        //statusMessage.textContent = errorMessage;\n        event.target.lastElementChild.innerText = \"\".concat(errorMessage);\n        setTimeout(function () {\n          event.target.lastElementChild.innerText = \"\\u0417\\u0430\\u043F\\u0438\\u0441\\u0430\\u0442\\u044C\\u0441\\u044F\";\n        }, 2500);\n        console.error(error);\n      });\n    });\n  }\n\n  formHandler(form1);\n  formHandler(form2);\n  formHandler(bannerForm);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://LandingPage-Diploma/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector('.club-select'),\n      menu = document.getElementById('club-list'),\n      menuSelector = document.querySelector('.clubs-list').firstElementChild;\n  var count = 0;\n\n  var handlerMenu = function handlerMenu(event) {\n    var target = event.target.tagName;\n\n    if (menu.style.display !== 'block') {\n      var flyInterval;\n\n      var flyAnimate = function flyAnimate() {\n        flyInterval = requestAnimationFrame(flyAnimate);\n        count += 0.02;\n        menu.style.opacity = count;\n\n        if (count > 1) {\n          cancelAnimationFrame(flyInterval);\n        }\n      };\n\n      flyInterval = requestAnimationFrame(flyAnimate);\n      menu.style.display = 'block';\n      menuSelector.textContent = 'Закрыть меню';\n    } else if (menu.style.display === 'block' && target === 'A' || target === 'P') {\n      var _flyInterval;\n\n      var _flyAnimate = function _flyAnimate() {\n        _flyInterval = requestAnimationFrame(_flyAnimate);\n        count -= 0.02;\n        menu.style.opacity = count;\n\n        if (count < 0.2) {\n          menu.style.display = 'none';\n          cancelAnimationFrame(_flyInterval);\n        }\n      };\n\n      _flyInterval = requestAnimationFrame(_flyAnimate);\n      menuSelector.textContent = 'Выбрать клуб';\n    }\n  };\n\n  btnMenu.addEventListener('click', handlerMenu);\n  document.body.addEventListener('click', function (event) {\n    var target = event.target.tagName;\n\n    if (menu.style.display === 'block' && target !== 'A' && target !== 'P' && target !== 'LI' && target !== 'UL') {\n      var flyInterval;\n\n      var flyAnimate = function flyAnimate() {\n        flyInterval = requestAnimationFrame(flyAnimate);\n        count -= 0.02;\n        menu.style.opacity = count;\n\n        if (count < 0.2) {\n          menu.style.display = 'none';\n          cancelAnimationFrame(flyInterval);\n        }\n      };\n\n      flyInterval = requestAnimationFrame(flyAnimate);\n      menuSelector.textContent = 'Выбрать клуб';\n    }\n  });\n  menu.addEventListener('click', function (event) {\n    var target = event.target.tagName;\n\n    if (target === 'A') {\n      handlerMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://LandingPage-Diploma/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var opacityIn = 0;\n  var opacityOut = 1;\n  var popUp = document.querySelector('.popup'),\n      formContent = document.querySelector('.form-content'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      promoBtn = document.querySelector('.fixed-gift'),\n      promoPopUp = document.getElementById('gift');\n  var formInputs = document.querySelectorAll('.input-text input');\n  var checkbox = document.querySelectorAll('.checkbox'); //fadeIn\n\n  function fadeIn(speed, domStr) {\n    var opacityInterval;\n\n    var opacityAnimate = function opacityAnimate() {\n      opacityInterval = requestAnimationFrame(opacityAnimate);\n      opacityIn += speed;\n\n      if (opacityIn < 1.01) {\n        domStr.style.display = \"block\";\n        domStr.style.opacity = opacityIn;\n      } else if (opacityIn >= 1) {\n        cancelAnimationFrame(opacityInterval);\n      }\n    };\n\n    opacityInterval = requestAnimationFrame(opacityAnimate);\n  } //fadeOff\n\n\n  function fadeOff(speed, domStr) {\n    var opacityInterval;\n    opacityOut = 1;\n\n    var opacityAnimate = function opacityAnimate() {\n      opacityInterval = requestAnimationFrame(opacityAnimate);\n      opacityOut -= speed;\n\n      if (opacityOut > 0.1) {\n        domStr.style.opacity = opacityOut;\n      } else {\n        domStr.style.display = 'none';\n        formInputs.forEach(function (elem) {\n          elem.value = '';\n        });\n        checkbox.forEach(function (elem) {\n          elem.checked = false;\n        });\n        cancelAnimationFrame(opacityInterval);\n      }\n    };\n\n    opacityInterval = requestAnimationFrame(opacityAnimate);\n  } //popUpON\n\n\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      if (document.documentElement.clientWidth >= 768) {\n        opacityIn = 0;\n        popUp.style.display = 'block';\n        fadeIn(0.05, formContent);\n      } else {\n        popUp.style.display = 'block';\n        popUp.style.opacity = 1;\n      }\n    }); //giftPopUp\n\n    promoBtn.addEventListener('click', function () {\n      //giftPopUpON\n      if (document.documentElement.clientWidth >= 768) {\n        opacityIn = 0;\n        promoPopUp.style.display = 'block';\n        promoBtn.style.display = 'none';\n        fadeIn(0.01, promoPopUp);\n      } else {\n        promoPopUp.style.display = 'block';\n        promoPopUp.style.opacity = 1;\n        promoBtn.style.display = 'none';\n      } //giftPopUpOFF\n\n\n      promoPopUp.addEventListener('click', function (event) {\n        var target = event.target;\n\n        if (target.classList.contains('close_icon')) {\n          if (document.documentElement.clientWidth >= 768) {\n            fadeOff(0.01, promoPopUp);\n            promoPopUp.style.display = 'none';\n          } else {\n            promoPopUp.style.display = 'none';\n          }\n        } else if (target.classList.contains('overlay')) {\n          if (document.documentElement.clientWidth >= 768) {\n            fadeOff(0.01, promoPopUp);\n            promoPopUp.style.display = 'none';\n          } else {\n            promoPopUp.style.display = 'none';\n          }\n        } else if (target.classList.contains('close-btn')) {\n          if (document.documentElement.clientWidth >= 768) {\n            fadeOff(0.01, promoPopUp);\n            promoPopUp.style.display = 'none';\n          } else {\n            promoPopUp.style.display = 'none';\n          }\n        }\n      });\n    }); //popUpOFF\n\n    popUp.addEventListener('click', function (event) {\n      var target = event.target;\n\n      if (target.classList.contains('close_icon')) {\n        if (document.documentElement.clientWidth >= 768) {\n          fadeOff(0.01, formContent);\n          popUp.style.display = 'none';\n        } else {\n          popUp.style.display = 'none';\n          formInputs.forEach(function (elem) {\n            elem.value = '';\n          });\n          checkbox.forEach(function (elem) {\n            elem.checked = false;\n          });\n          popUp.style.display = 'none';\n        }\n      } else if (target.classList.contains('overlay')) {\n        if (document.documentElement.clientWidth >= 768) {\n          fadeOff(0.01, formContent);\n          popUp.style.display = 'none';\n          checkbox.forEach(function (elem) {\n            elem.checked = false;\n          });\n        } else {\n          formInputs.forEach(function (elem) {\n            elem.value = '';\n          });\n          popUp.style.display = 'none';\n          checkbox.forEach(function (elem) {\n            elem.checked = false;\n          });\n        }\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://LandingPage-Diploma/./src/modules/togglePopUp.js?");

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