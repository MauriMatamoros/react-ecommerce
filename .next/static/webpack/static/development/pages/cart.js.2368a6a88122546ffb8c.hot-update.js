webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./components/Cart/CartItemList.js":
/*!*****************************************!*\
  !*** ./components/Cart/CartItemList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/mmatamoros/Documents/react-reserve/components/Cart/CartItemList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var CartItemList = function CartItemList() {
  var user = false;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    secondary: true,
    color: "teal",
    inverted: true,
    textAlign: "center",
    placeholder: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    icon: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "shopping basket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), "No products in your cart. Add some!"), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, user ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "View Products") : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Login to Add Products")));
};

/* harmony default export */ __webpack_exports__["default"] = (CartItemList);

/***/ })

})
//# sourceMappingURL=cart.js.2368a6a88122546ffb8c.hot-update.js.map