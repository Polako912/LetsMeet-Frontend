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
      d: 'M5 4v3h5.5v12h3V7H19V4z',
    }), _react.default.createElement('path', {
      fill: 'none',
      d: 'M0 0h24v24H0V0z',
    })), 'Title');

exports.default = _default;
