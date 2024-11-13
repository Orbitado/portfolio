"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useTheme2 = require("@/app/hooks/useTheme");
var _lucideReact = require("lucide-react");
function ThemeSwitcher() {
  var _useTheme = (0, _useTheme2.useTheme)(),
    theme = _useTheme.theme,
    setTheme = _useTheme.setTheme;
  var toggleTheme = function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return /*#__PURE__*/React.createElement("li", {
    className: "nav__theme-switcher"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Toggle dark mode",
    className: "nav__toggler",
    onClick: toggleTheme
  }, theme === "dark" ? /*#__PURE__*/React.createElement(_lucideReact.Moon, {
    className: "nav__icon"
  }) : /*#__PURE__*/React.createElement(_lucideReact.Sun, {
    className: "nav__icon"
  })));
}
var _default = exports.default = ThemeSwitcher;