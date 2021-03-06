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
      d: 'M4.47 19h15.06L12 5.99 4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z',
      opacity: '.3',
    }), _react.default.createElement('path', {
      d: 'M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47z',
    }), _react.default.createElement('path', {
      d: 'M11 16h2v2h-2zM11 10h2v4h-2z',
    })), 'WarningTwoTone');

exports.default = _default;
