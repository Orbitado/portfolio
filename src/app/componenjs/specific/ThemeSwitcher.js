"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lucideReact = require("lucide-react");
function ThemeSwitcher() {
  return /*#__PURE__*/React.createElement("li", {
    className: "nav__item--theme-toggle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__theme-toggle"
  }, /*#__PURE__*/React.createElement(_lucideReact.Moon, {
    className: "nav__icon nav__item"
  }), /*#__PURE__*/React.createElement(_lucideReact.Sun, {
    className: "nav__icon nav__item"
  })));
}
var _default = exports.default = ThemeSwitcher;