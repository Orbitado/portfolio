"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _lucideReact = require("lucide-react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var Footer = function Footer() {
  var currentYear = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer",
    role: "contentinfo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "copyright"
  }, "\xA9 ", currentYear, " Leonardo Valdez. All rights reserved.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-social"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "social-links",
    "aria-label": "Social media links"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "https://linkedin.com/in/leonardo-valdez",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "LinkedIn profile",
    className: "social-link"
  }, /*#__PURE__*/React.createElement(_lucideReact.Linkedin, {
    size: 20,
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "https://github.com/Orbitado",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "GitHub profile",
    className: "social-link"
  }, /*#__PURE__*/React.createElement(_lucideReact.Github, {
    size: 20,
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "https://www.instagram.com/juanpabloovaldez",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Instagram profile",
    className: "social-link"
  }, /*#__PURE__*/React.createElement(_lucideReact.Instagram, {
    size: 20,
    "aria-hidden": "true"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-contact"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "mailto:contact@vleonardojuanpablo.com",
    className: "contact-link",
    "aria-label": "Send me an email"
  }, /*#__PURE__*/React.createElement(_lucideReact.Mail, {
    size: 20,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, "Contact Me")))));
};
var _default = exports.default = Footer;