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
    className: "nav__item--theme-toggle"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Toggle dark mode",
    className: "nav__theme-toggle",
    onClick: toggleTheme
  }, theme === "dark" ? /*#__PURE__*/React.createElement(_lucideReact.Moon, null) : /*#__PURE__*/React.createElement(_lucideReact.Sun, null)));
}
var _default = exports.default = ThemeSwitcher;