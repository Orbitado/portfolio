"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _experienceList = require("@/constants/experienceList");
var _TagList = _interopRequireDefault(require("@/components/common/TagList"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ExperienceList() {
  return /*#__PURE__*/React.createElement("ol", {
    className: "experience__list"
  }, _experienceList.experienceList.map(function (_ref) {
    var company = _ref.company,
      position = _ref.position,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      description = _ref.description,
      technologies = _ref.technologies;
    return /*#__PURE__*/React.createElement("li", {
      key: company,
      className: "experience__item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "experience__header"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "experience__role"
    }, position), /*#__PURE__*/React.createElement("h4", {
      className: "experience__company"
    }, company), /*#__PURE__*/React.createElement("time", {
      className: "experience__date"
    }, startDate, " - ", endDate)), /*#__PURE__*/React.createElement("div", {
      className: "experience__brief"
    }, /*#__PURE__*/React.createElement("p", {
      className: "experience__description"
    }, description), /*#__PURE__*/React.createElement(_TagList.default, {
      list: technologies
    })));
  }));
}
var _default = exports.default = ExperienceList;