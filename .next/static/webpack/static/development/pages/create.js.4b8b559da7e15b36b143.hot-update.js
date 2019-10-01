webpackHotUpdate("static/development/pages/create.js",{

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");





var _jsxFileName = "/Users/mmatamoros/Documents/react-reserve/pages/create.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var CreateProduct = function CreateProduct() {
  var _jsx;

  var INITIAL_PRODUCT = {
    name: '',
    description: '',
    price: '',
    media: ''
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(INITIAL_PRODUCT),
      product = _useState[0],
      setProduct = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      mediaPreview = _useState2[0],
      setMediaPreview = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      success = _useState3[0],
      setSuccess = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      disabled = _useState5[0],
      setDisabled = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var isProduct = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_4___default()(product).every(function (element) {
      return Boolean(element);
    });

    isProduct ? setDisabled(false) : setDisabled(true);
  }, [product]);

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value,
        files = _e$target.files;

    if (name === 'media') {
      setProduct(function (prevState) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, prevState, {
          media: files[0]
        });
      });
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setProduct(function (prevState) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, prevState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, value));
      });
    }
  }; //refactor image upload to the server


  var handleImageUpload =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data, _ref2, mediaUrl;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = new FormData();
              data.append('file', product.media);
              data.append('upload_preset', 'reactreserve');
              data.append('cloud_name', 'mmatamoros');
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("https://api.cloudinary.com/v1_1/mmatamoros/image/upload", data);

            case 6:
              _ref2 = _context.sent;
              mediaUrl = _ref2.data.url;
              return _context.abrupt("return", mediaUrl);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleImageUpload() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      var mediaUrl, url, name, price, description, payload, _ref4, data;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              e.preventDefault();
              setLoading(true);
              _context2.next = 5;
              return handleImageUpload();

            case 5:
              mediaUrl = _context2.sent;
              url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__["default"], "/api/product");
              name = product.name, price = product.price, description = product.description;
              payload = {
                name: '',
                price: price,
                description: description,
                mediaUrl: mediaUrl
              };
              _context2.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url, payload);

            case 11:
              _ref4 = _context2.sent;
              data = _ref4.data;
              setProduct(INITIAL_PRODUCT);
              setSuccess(true);
              _context2.next = 20;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](0);
              console.error('ERROR', _context2.t0);

            case 20:
              _context2.prev = 20;
              setLoading(false);
              return _context2.finish(20);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 17, 20, 23]]);
    }));

    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    as: "h2",
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    name: "add",
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), "Create New Product"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    loading: loading,
    onSubmit: handleSubmit,
    success: success,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    success: true,
    icon: "check",
    header: "Success!",
    content: "Your product has been posted.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"],
    name: "name",
    label: "Name",
    placeholder: "Name",
    type: "text",
    onChange: handleChange,
    value: product.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, (_jsx = {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"],
    name: "price",
    label: "Price",
    placeholder: "Price",
    type: "text",
    min: "0.00",
    step: "0.01"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "type", "number"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "onChange", handleChange), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "value", product.price), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 101
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "__self", this), _jsx)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"],
    name: "media",
    label: "Media",
    content: "Select Image",
    type: "file",
    accept: "image/*",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: mediaPreview,
    rounded: true,
    centered: true,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["TextArea"],
    name: "description",
    label: "Description",
    placeholder: "Description",
    type: "text",
    onChange: handleChange,
    value: product.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"],
    color: "blue",
    icon: "pencil alternate",
    content: "Submit",
    type: "submit",
    disabled: disabled || loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateProduct);

/***/ })

})
//# sourceMappingURL=create.js.4b8b559da7e15b36b143.hot-update.js.map