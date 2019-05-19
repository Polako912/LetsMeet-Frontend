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
}), _react.default.createElement("circle", {
  cx: "11",
  cy: "8",
  r: "2",
  opacity: ".3"
}), _react.default.createElement("path", {
  d: "M5 18h4.99L9 17l.93-.94C7.55 16.33 5.2 17.37 5 18z",
  opacity: ".3"
}), _react.default.createElement("path", {
  d: "M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM10 18H5c.2-.63 2.55-1.67 4.93-1.94h.03l.46-.45L12 14.06c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-2-2zM20.6 12.5l-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z"
})), 'HowToRegTwoTone');

exports.default = _default;