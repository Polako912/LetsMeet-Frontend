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
    _react.default.createElement('defs', null,
      _react.default.createElement('path', {
        id: 'a',
        d: 'M0 0h24v24H0z',
      })), _react.default.createElement('g', null,
      _react.default.createElement('path', {
        d: 'M11 8v5l4.25 2.52.77-1.28-3.52-2.09V8z',
      }), _react.default.createElement('path', {
        d: 'M21 10V3l-2.64 2.64C16.74 4.01 14.49 3 12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9h-2c0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7c1.93 0 3.68.79 4.95 2.05L14 10h7z',
      }))), 'UpdateOutlined');

exports.default = _default;
