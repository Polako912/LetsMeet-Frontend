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
}), _react.default.createElement("path", {
  d: "M19 3H4.99C3.88 3 3 3.9 3 5v14c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-3.13c-.47 0-.85.34-.98.8-.35 1.27-1.52 2.2-2.89 2.2s-2.54-.93-2.89-2.2c-.13-.46-.51-.8-.98-.8H4.99V6c0-.55.45-1 1-1H18c.55 0 1 .45 1 1v9zm-3-5h-2V7h-4v3H8l3.65 3.65c.2.2.51.2.71 0L16 10z"
})), 'MoveToInboxRounded');

exports.default = _default;