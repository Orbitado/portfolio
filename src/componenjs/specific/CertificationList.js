"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lucideReact = require("lucide-react");
var _certificationsList = require("@/constants/certificationsList");
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function CertificationList() {
  return /*#__PURE__*/React.createElement("div", {
    className: "education__list--certifications"
  }, /*#__PURE__*/React.createElement(_lucideReact.Award, {
    className: "education__icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "education__header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "education__title"
  }, "Licenses and Certificates"), /*#__PURE__*/React.createElement("ol", {
    className: "education__list--container"
  }, _certificationsList.certificationsList.map(function (certification) {
    return /*#__PURE__*/React.createElement("li", {
      key: certification.course,
      className: "education__item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "education__details"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "education__title--certification"
    }, certification.course), /*#__PURE__*/React.createElement("h5", {
      className: "education__institution--certification"
    }, certification.institution), /*#__PURE__*/React.createElement(_link.default, {
      href: certification.certificate,
      "aria-label": "Link to the ".concat(certification.course, " certificate."),
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/React.createElement(_lucideReact.Link2, {
      className: "education__icon--certification"
    })), /*#__PURE__*/React.createElement(_link.default, {
      href: certification.project,
      "aria-label": "Link to the ".concat(certification.course, " project."),
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/React.createElement(_lucideReact.Github, {
      className: "education__icon--certification"
    }))));
  }))));
}
var _default = exports.default = CertificationList;