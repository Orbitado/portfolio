"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ThemeSwitcher = _interopRequireDefault(require("./ThemeSwitcher"));
var _LanguageToggler = _interopRequireDefault(require("./LanguageToggler"));
var _NavToggler = _interopRequireDefault(require("./NavToggler"));
var _NavList = _interopRequireDefault(require("./NavList"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function NavBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "container"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "nav__logo"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/"
  }, "LV")), /*#__PURE__*/React.createElement(_NavList.default, null), /*#__PURE__*/React.createElement("ul", {
    className: "nav__list--togglers"
  }, /*#__PURE__*/React.createElement(_ThemeSwitcher.default, null), /*#__PURE__*/React.createElement(_LanguageToggler.default, null), /*#__PURE__*/React.createElement(_NavToggler.default, null))));
}
var _default = exports.default = NavBar;