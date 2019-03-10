"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeWeb = require("react-native-web");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Input = function Input(props) {
  return _react["default"].createElement(_reactNativeWeb.TextInput, props);
};

var _default = Input;
exports["default"] = _default;