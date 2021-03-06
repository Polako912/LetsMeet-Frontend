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
    }),
    _react.default.createElement('g', null, _react.default.createElement('g', {
      opacity: '.3',
    }, _react.default.createElement('path', {
      d: 'M5 5h4v6H5zM15 13h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z',
    })), _react.default.createElement('path', {
      d: 'M3 13h8V3H3v10zm2-8h4v6H5V5zM13 21h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z',
    }))), 'DashboardTwoTone');

exports.default = _default;
