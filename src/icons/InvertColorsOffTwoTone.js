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
  d: "M6 13.59c0 1.6.62 3.1 1.76 4.24 1.13 1.14 2.64 1.76 4.24 1.76v-4.8L7.21 10C6.43 11.03 6 12.27 6 13.59z",
  opacity: ".3"
}), _react.default.createElement("path", {
  d: "M12 5.1v4.05l7.4 7.4c1.15-2.88.59-6.28-1.75-8.61L12 2.27 8.56 5.71l1.41 1.41L12 5.1zM4.4 4.37L2.99 5.78l2.78 2.78c-2.54 3.14-2.35 7.75.57 10.68C7.9 20.8 9.95 21.58 12 21.58c1.78 0 3.56-.59 5.02-1.77l2.7 2.7 1.41-1.41L4.4 4.37zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59c0-1.32.43-2.56 1.21-3.59L12 14.79v4.8z"
}), _react.default.createElement("path", {
  d: "M12 9.15V5.1L9.97 7.12z",
  opacity: ".3"
}))), 'InvertColorsOffTwoTone');

exports.default = _default;