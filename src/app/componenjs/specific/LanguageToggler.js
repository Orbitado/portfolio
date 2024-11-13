"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lucideReact = require("lucide-react");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function LanguageToggler() {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav__item"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav__toggler"
  }, /*#__PURE__*/_react.default.createElement(_lucideReact.Globe, {
    className: "nav__icon"
  })));
}
var _default = exports.default = LanguageToggler;