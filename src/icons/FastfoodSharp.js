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
      fill: 'none',
      d: 'M0 0h24v24H0V0z',
    }), _react.default.createElement('path', {
      d: 'M18 5V1h-2v4h-5l.23 2.31C14.9 8.16 18 10.77 18 15l.02 8h3.18L23 5h-5zM1 21h15v2H1z',
    }), _react.default.createElement('path', {
      d: 'M8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01zM1 17h15v2H1z',
    })), 'FastfoodSharp');

exports.default = _default;
