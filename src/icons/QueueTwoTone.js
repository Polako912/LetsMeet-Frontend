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
    }), _react.default.createElement('path', {
      d: 'M8 16h12V4H8v12zm1-7h4V5h2v4h4v2h-4v4h-2v-4H9V9z',
      opacity: '.3',
    }), _react.default.createElement('path', {
      d: 'M2 20c0 1.1.9 2 2 2h14v-2H4V6H2v14z',
    }), _react.default.createElement('path', {
      d: 'M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z',
    }), _react.default.createElement('path', {
      d: 'M13 15h2v-4h4V9h-4V5h-2v4H9v2h4z',
    })), 'QueueTwoTone');

exports.default = _default;
