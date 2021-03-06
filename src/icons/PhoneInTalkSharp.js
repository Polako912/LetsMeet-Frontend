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
        d: 'M19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7z',
      }), _react.default.createElement('path', {
        d: 'M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z',
      }), _react.default.createElement('path', {
        d: 'M13.21 17.37c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61-2.52 2.52z',
      }))), 'PhoneInTalkSharp');

exports.default = _default;
