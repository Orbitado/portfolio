"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TagList = _interopRequireDefault(require("@/components/common/TagList"));
var _lucideReact = require("lucide-react");
var _link = _interopRequireDefault(require("next/link"));
var _types = require("@/types/types");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Card(_ref) {
  var project = _ref.project;
  return /*#__PURE__*/React.createElement("div", {
    className: "projects__card"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "projects__image"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: project.demo,
    "aria-label": "Link to the ".concat(project.title, " demo."),
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: project.img,
    alt: "E-commerce UI"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "projects__content"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "projects__heading"
  }, project.title), /*#__PURE__*/React.createElement("p", {
    className: "projects__text"
  }, project.description), /*#__PURE__*/React.createElement(_TagList.default, {
    list: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  }), /*#__PURE__*/React.createElement("div", {
    className: "projects__links"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: project.github,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Link to the ".concat(project.title, " code."),
    className: "projects__link"
  }, /*#__PURE__*/React.createElement(_lucideReact.GithubIcon, {
    className: "projects__icon"
  }), " ", /*#__PURE__*/React.createElement("span", null, "Code")), /*#__PURE__*/React.createElement(_link.default, {
    href: project.demo,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Link to the ".concat(project.title, " demo."),
    className: "projects__link"
  }, /*#__PURE__*/React.createElement(_lucideReact.ExternalLink, {
    className: "projects__icon"
  }), /*#__PURE__*/React.createElement("span", null, "Live Demo"))))));
}
var _default = exports.default = Card;