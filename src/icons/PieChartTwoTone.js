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
        d: 'M4 12c0 4.07 3.06 7.44 7 7.93V4.07C7.06 4.56 4 7.93 4 12zM13 19.93c3.61-.45 6.48-3.32 6.93-6.93H13v6.93zM13 4.07V11h6.93c-.45-3.61-3.32-6.48-6.93-6.93z',
        opacity: '.3',
      }), _react.default.createElement('path', {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.86-7-7.93s3.06-7.44 7-7.93v15.86zm2 0V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93zM13 11V4.07c3.61.45 6.48 3.32 6.93 6.93H13z',
      }))), 'PieChartTwoTone');

exports.default = _default;
