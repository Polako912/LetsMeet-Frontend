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
        d: 'M18.12 14.44l-3.24-1.62c1.29-1 2.12-2.56 2.12-4.32C17 5.47 14.53 3 11.5 3S6 5.47 6 8.5c0 2.13 1.22 3.98 3 4.89v3.26l-1.84-.39-.1-.02c-.1-.02-.2-.03-.32-.03-.53 0-1.03.21-1.41.59l-1.4 1.42 5.09 5.09c.43.44 1.03.69 1.65.69h6.3c.98 0 1.81-.7 1.97-1.67l.8-4.71c.22-1.3-.43-2.58-1.62-3.18zM8 8.5C8 6.57 9.57 5 11.5 5S15 6.57 15 8.5c0 .95-.38 1.81-1 2.44V8.5C14 7.12 12.88 6 11.5 6S9 7.12 9 8.5v2.44c-.62-.63-1-1.49-1-2.44zm9.77 8.79l-.8 4.71h-6.3c-.09 0-.17-.04-.24-.1l-3.68-3.68 4.25.89V8.5c0-.28.22-.5.5-.5s.5.22.5.5v6h1.76l3.46 1.73c.4.2.62.63.55 1.06z',
      }), _react.default.createElement('path', {
        d: 'M17.23 16.23l-3.46-1.73H12v-6c0-.28-.22-.5-.5-.5s-.5.22-.5.5v10.61l-4.25-.89 3.68 3.68c.06.06.15.1.24.1h6.3l.8-4.71c.07-.43-.15-.86-.54-1.06z',
        opacity: '.3',
      }))), 'TouchAppTwoTone');

exports.default = _default;
