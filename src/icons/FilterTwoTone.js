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
        d: 'M7 17h14V3H7v14zm4.25-5.53l1.96 2.36 2.75-3.54L19.5 15h-11l2.75-3.53z',
        opacity: '.3',
      }), _react.default.createElement('path', {
        d: 'M1 21c0 1.1.9 2 2 2h16v-2H3V5H1v16z',
      }), _react.default.createElement('path', {
        d: 'M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z',
      }), _react.default.createElement('path', {
        d: 'M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11z',
      }))), 'FilterTwoTone');

exports.default = _default;
