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
        d: 'M6 8.83V20h12V4h-7.17L6 8.83zM9 19H7v-2h2v2zm0-4H7v-4h2v4zm6-4h2v4h-2v-4zm0 6h2v2h-2v-2zm-4-6h2v2h-2v-2zm0 4h2v4h-2v-4z',
        opacity: '.3',
      }), _react.default.createElement('path', {
        d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v16H6V8.83L10.83 4H18z',
      }), _react.default.createElement('path', {
        d: 'M7 17h2v2H7zM15 17h2v2h-2zM7 11h2v4H7zM11 15h2v4h-2zM11 11h2v2h-2zM15 11h2v4h-2z',
      }))), 'SimCardTwoTone');

exports.default = _default;
