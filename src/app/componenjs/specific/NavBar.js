"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _menuData = require("@/app/constants/menuData");
var _types = require("@/app/types/types");
var _ThemeSwitcher = _interopRequireDefault(require("./ThemeSwitcher"));
var _LanguageToggler = _interopRequireDefault(require("./LanguageToggler"));
var _lucideReact = require("lucide-react");
var _react = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function NavBar() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  return /*#__PURE__*/React.createElement("header", {
    className: "container"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "nav__logo"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/"
  }, "LV")), /*#__PURE__*/React.createElement("ul", {
    className: "nav__list ".concat(isMenuOpen ? "open" : "close")
  }, _menuData.navbarLinks.map(function (link) {
    return /*#__PURE__*/React.createElement("li", {
      key: link.name,
      className: "nav__item"
    }, /*#__PURE__*/React.createElement(_link.default, {
      href: link.url,
      className: "nav__link"
    }, link.name));
  })), /*#__PURE__*/React.createElement("ul", {
    className: "nav__list--togglers"
  }, /*#__PURE__*/React.createElement(_ThemeSwitcher.default, null), /*#__PURE__*/React.createElement(_LanguageToggler.default, null), /*#__PURE__*/React.createElement("li", {
    className: "nav__item--mobile"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Toggle navigation",
    className: "nav__toggler",
    onClick: function onClick() {
      return setIsMenuOpen(!isMenuOpen);
    }
  }, isMenuOpen ? /*#__PURE__*/React.createElement(_lucideReact.X, {
    className: "nav__icon"
  }) : /*#__PURE__*/React.createElement(_lucideReact.Menu, {
    className: "nav__icon"
  }))))));
}
var _default = exports.default = NavBar;