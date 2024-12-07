"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TagList = _interopRequireDefault(require("@/components/common/TagList"));
var _lucideReact = require("lucide-react");
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Card() {
  return /*#__PURE__*/React.createElement("div", {
    className: "projects__card"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "projects__image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/images/image.png",
    alt: "E-commerce UI"
  })), /*#__PURE__*/React.createElement("section", {
    className: "projects__content"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "projects__heading"
  }, "Modern E-commerce UI"), /*#__PURE__*/React.createElement("p", {
    className: "projects__text"
  }, "A responsive e-commerce interface built with React and modern design principles"), /*#__PURE__*/React.createElement(_TagList.default, {
    list: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  }), /*#__PURE__*/React.createElement("h4", {
    className: "projects__subheading"
  }, /*#__PURE__*/React.createElement(_lucideReact.Code, {
    className: "projects__icon",
    "aria-hidden": "true"
  }), "Key Features"), /*#__PURE__*/React.createElement("ul", {
    className: "projects__list"
  }, /*#__PURE__*/React.createElement("li", {
    className: "projects__list-item"
  }, "Responsive product grid with filtering"), /*#__PURE__*/React.createElement("li", {
    className: "projects__list-item"
  }, "Animated transitions and micro-interactions"), /*#__PURE__*/React.createElement("li", {
    className: "projects__list-item"
  }, "Advanced cart management system")), /*#__PURE__*/React.createElement("div", {
    className: "projects__links"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "#",
    className: "projects__link"
  }, /*#__PURE__*/React.createElement(_lucideReact.GithubIcon, {
    className: "projects__icon"
  }), " ", /*#__PURE__*/React.createElement("span", null, "Code")), /*#__PURE__*/React.createElement(_link.default, {
    href: "#",
    className: "projects__link"
  }, /*#__PURE__*/React.createElement(_lucideReact.ExternalLink, {
    className: "projects__icon"
  }), /*#__PURE__*/React.createElement("span", null, "Live Demo"))))));
}
var _default = exports.default = Card;