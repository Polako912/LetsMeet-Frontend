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
    }), _react.default.createElement('g', null,
      _react.default.createElement('path', {
        d: 'M13.21 17.37c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61-2.52 2.52z',
      }), _react.default.createElement('path', {
        d: 'M20 4v-.36c0-1.31-.94-2.5-2.24-2.63C16.26.86 15 2.03 15 3.5V4h-1v6h7V4h-1zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V4z',
      }))), 'PhoneLockedSharp');

exports.default = _default;
