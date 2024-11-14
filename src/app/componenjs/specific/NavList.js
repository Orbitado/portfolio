"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _menuData = require("@/app/constants/menuData");
var _useMenu2 = require("@/app/hooks/useMenu");
var _types = require("@/app/types/types");
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function NavList() {
  var _useMenu = (0, _useMenu2.useMenu)(),
    isMenuOpen = _useMenu.isMenuOpen,
    toggleMenu = _useMenu.toggleMenu;
  return /*#__PURE__*/React.createElement("ul", {
    className: "nav__list ".concat(isMenuOpen ? "open" : "close")
  }, _menuData.navbarLinks.map(function (link) {
    return /*#__PURE__*/React.createElement("li", {
      key: link.name,
      className: "nav__item"
    }, /*#__PURE__*/React.createElement(_link.default, {
      href: link.url,
      className: "nav__link",
      onClick: toggleMenu
    }, link.name));
  }));
}
var _default = exports.default = NavList;