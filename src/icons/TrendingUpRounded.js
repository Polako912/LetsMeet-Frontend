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
  d: "M16.85 6.85l1.44 1.44-4.88 4.88-3.29-3.29a.9959.9959 0 0 0-1.41 0l-6 6.01c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L9.41 12l3.29 3.29c.39.39 1.02.39 1.41 0l5.59-5.58 1.44 1.44c.31.31.85.09.85-.35V6.5c.01-.28-.21-.5-.49-.5h-4.29c-.45 0-.67.54-.36.85z"
}))), 'TrendingUpRounded');

exports.default = _default;