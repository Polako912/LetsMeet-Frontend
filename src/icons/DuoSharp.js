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
        d: 'M20 2h-8C6.38 2 2 6.66 2 12.28 2 17.5 6.49 22 11.72 22 17.39 22 22 17.62 22 12V4c0-1.1-.9-2-2-2zm-3 13l-3-2v2H7V9h7v2l3-2v6z',
      }))), 'DuoSharp');

exports.default = _default;
