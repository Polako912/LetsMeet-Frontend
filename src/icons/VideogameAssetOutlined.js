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
  d: "M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8z"
}), _react.default.createElement("path", {
  d: "M6 15h2v-2h2v-2H8V9H6v2H4v2h2z"
}), _react.default.createElement("circle", {
  cx: "14.5",
  cy: "13.5",
  r: "1.5"
}), _react.default.createElement("circle", {
  cx: "18.5",
  cy: "10.5",
  r: "1.5"
}))), 'VideogameAssetOutlined');

exports.default = _default;