"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), _react.default.createElement("g", null, _react.default.createElement("path", {
  d: "M20 4H8v12h12V4zm-1 7h-4v4h-2v-4H9V9h4V5h2v4h4v2z",
  opacity: ".3"
}), _react.default.createElement("path", {
  d: "M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2z"
}), _react.default.createElement("path", {
  d: "M8 18h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM8 4h12v12H8V4z"
}), _react.default.createElement("path", {
  d: "M15 5h-2v4H9v2h4v4h2v-4h4V9h-4z"
}))), 'AddToPhotosTwoTone');

exports.default = _default;