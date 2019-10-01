webpackHotUpdate("static/development/pages/product/[_id].js",{

/***/ "./components/Product/ProductAttributes.js":
/*!*************************************************!*\
  !*** ./components/Product/ProductAttributes.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");


var _jsxFileName = "/Users/mmatamoros/Documents/react-reserve/components/Product/ProductAttributes.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var ProductAttributes = function ProductAttributes(_ref) {
  var _id = _ref._id,
      description = _ref.description;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      modal = _useState[0],
      setModal = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var handleDelete =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var url;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__["default"], "/api/product/").concat(_id);
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"](url);

            case 3:
              router.push('/');

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDelete() {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    as: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "About this product"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, description), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    icon: "trash alternate outline",
    color: "red",
    content: "Delete Product",
    onClick: function onClick() {
      return setModal(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    open: modal,
    dimmer: "blurring",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Confirm Delete"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Modal"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Are you sure you want to delete this product?")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Modal"].Actions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    content: "Cancel",
    onClick: function onClick() {
      return setModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    negative: true,
    icon: "trash",
    labelPosition: "right",
    content: "Delete",
    onClick: handleDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductAttributes);

/***/ })

})
//# sourceMappingURL=[_id].js.4da23f10c0cfd877a19a.hot-update.js.map