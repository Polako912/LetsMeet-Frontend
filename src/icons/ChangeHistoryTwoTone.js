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
  d: "M12 7.77L5.61 18h12.78z",
  opacity: ".3"
}), _react.default.createElement("path", {
  d: "M12 4L2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z"
}))), 'ChangeHistoryTwoTone');

exports.default = _default;