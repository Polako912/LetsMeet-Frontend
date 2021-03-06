'use strict';

var _interopRequireDefault = require(
  '@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _createSvgIcon = _interopRequireDefault(require('./utils/createSvgIcon'));

var _default = (0, _createSvgIcon.default)(
  _react.default.createElement(_react.default.Fragment, null,
    _react.default.createElement('path', {
      d: 'M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z',
    }), _react.default.createElement('path', {
      fill: 'none',
      d: 'M0 0h24v24H0z',
    })), 'FastForward');

exports.default = _default;
