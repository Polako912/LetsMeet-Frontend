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
  d: "M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-3.06 10.41L15 15.28l-1.94 1.13c-.38.22-.84-.12-.74-.55l.51-2.2-1.69-1.46c-.33-.29-.16-.84.28-.88l2.23-.19.88-2.06c.17-.4.75-.4.92 0l.88 2.06 2.23.19c.44.04.62.59.28.88l-1.69 1.46.51 2.2c.11.43-.35.77-.72.55z"
}))), 'FolderSpecialRounded');

exports.default = _default;