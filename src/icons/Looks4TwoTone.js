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
      d: 'M.04 0h24v24h-24V0z',
    }), _react.default.createElement('g', null,
      _react.default.createElement('path', {
        d: 'M5.04 19h14V5h-14v14zm4-12h2v4h2V7h2v10h-2v-4h-4V7z',
        opacity: '.3',
      }), _react.default.createElement('path', {
        d: 'M19.04 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-14V5h14v14z',
      }), _react.default.createElement('path', {
        d: 'M13.04 17h2V7h-2v4h-2V7h-2v6h4z',
      }))), 'Looks4TwoTone');

exports.default = _default;
