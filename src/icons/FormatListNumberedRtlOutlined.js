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
  d: "M18 17h2v.5h-1v1h1v.5h-2v1h3v-4h-3v1zm1-9h1V4h-2v1h1v3zm-1 3h1.8L18 13.1v.9h3v-1h-1.8l1.8-2.1V10h-3v1zM2 5h14v2H2V5zm0 12h14v2H2v-2zm0-6h14v2H2v-2z"
}))), 'FormatListNumberedRtlOutlined');

exports.default = _default;