"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useMenu2 = require("@/app/hooks/useMenu");
var _lucideReact = require("lucide-react");
function NavToggler() {
  var _useMenu = (0, _useMenu2.useMenu)(),
    isMenuOpen = _useMenu.isMenuOpen,
    toggleMenu = _useMenu.toggleMenu;
  return /*#__PURE__*/React.createElement("li", {
    className: "nav__item--mobile"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Toggle navigation",
    className: "nav__toggler",
    onClick: function onClick() {
      return toggleMenu();
    }
  }, isMenuOpen ? /*#__PURE__*/React.createElement(_lucideReact.X, {
    className: "nav__icon"
  }) : /*#__PURE__*/React.createElement(_lucideReact.Menu, {
    className: "nav__icon"
  })));
}
var _default = exports.default = NavToggler;