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
      d: 'M19 5H5v14h14V5zm-7 8.51h-1V15H9.5v-1.5h-3V9H8v3h1.5V9H11v3h1v1.51zM18.2 15h-1.7l-2-3v3H13V9h1.5v3l2-3h1.7l-2 3 2 3z',
      opacity: '.3',
    }), _react.default.createElement('path', {
      d: 'M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2zM5 5h14v14H5V5z',
    }), _react.default.createElement('path', {
      d: 'M11 9H9.5v3H8V9H6.5v4.5h3V15H11v-1.49h1V12h-1zM16.5 9l-2 3 2 3h1.7l-2-3 2-3zM13 9v6h1.5V9z',
    })), 'FourKTwoTone');

exports.default = _default;
