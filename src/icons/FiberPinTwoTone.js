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
      d: 'M5 14.62h1.31v-1.75h1.75c.74 0 1.31-.57 1.31-1.31v-.88c0-.74-.57-1.31-1.31-1.31H5v5.25zm1.31-3.93h1.75v.88H6.31v-.88zM11.34 9.38h1.31v5.25h-1.31zM14.62 14.62h1.1v-3.06l2.23 3.06H19V9.38h-1.09v3.06l-2.19-3.06h-1.1z',
    }), _react.default.createElement('g', null,
      _react.default.createElement('path', {
        d: 'M4 6h16v12H4z',
        opacity: '.3',
      }), _react.default.createElement('path', {
        d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z',
      }))), 'FiberPinTwoTone');

exports.default = _default;
