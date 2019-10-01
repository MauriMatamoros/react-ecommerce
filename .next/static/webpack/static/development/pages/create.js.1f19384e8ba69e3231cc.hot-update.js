webpackHotUpdate("static/development/pages/create.js",{

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (error, displayError) {
  var errorMessage;

  if (error.response) {
    // The request was made and the server responded with a server code above 2XX
    errorMessage = error.response.data;
    console.error('Error response', errorMessage); // Cloudinary image uploads fails

    if (error.response.data.error) {
      errorMessage = error.response.data.error.message;
    }
  } else if (error.request) {
    // The request was made, but no response was recieved
    errorMessage = error.request;
    console.error('Error request', errorMessage);
  } else {
    // Something else happened, God knows what
    errorMessage = error.message;
    console.error('Error message', errorMessage);
  }

  displayError(errorMessage);
});

/***/ })

})
//# sourceMappingURL=create.js.1f19384e8ba69e3231cc.hot-update.js.map