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
        d: 'M13 7h2v2h-2z',
        opacity: '.3',
      }), _react.default.createElement('path', {
        d: 'M7 17h14V3H7v14zm4-4h4v-2h-2c-1.1 0-2-.89-2-2V7c0-1.11.9-2 2-2h2c1.1 0 2 .89 2 2v6c0 1.11-.9 2-2 2h-4v-2z',
        opacity: '.3',
      }), _react.default.createElement('path', {
        d: 'M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z',
      }), _react.default.createElement('path', {
        d: 'M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2z',
      }), _react.default.createElement('path', {
        d: 'M17 13V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v2c0 1.11.9 2 2 2h2v2h-4v2h4c1.1 0 2-.89 2-2zm-4-4V7h2v2h-2z',
      }))), 'Filter9TwoTone');

exports.default = _default;
