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
        d: 'M6.67 11H4v2h2.67l1-1zM13 6.67V4h-2v2.67l1 1zM11 17.33V20h2v-2.67l-1-1zM16.33 12l1 1H20v-2h-2.67z',
        opacity: '.3',
      }), _react.default.createElement('path', {
        d: 'M9 16.5V22h6v-5.5l-3-3-3 3zm4 3.5h-2v-2.67l1-1 1 1V20zM15 7.5V2H9v5.5l3 3 3-3zM11 4h2v2.67l-1 1-1-1V4zM7.5 9H2v6h5.5l3-3-3-3zm-.83 4H4v-2h2.67l1 1-1 1zM16.5 9l-3 3 3 3H22V9h-5.5zm3.5 4h-2.67l-1-1 1-1H20v2z',
      }))), 'GamepadTwoTone');

exports.default = _default;
