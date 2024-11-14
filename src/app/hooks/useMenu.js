"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMenu = void 0;
var _react = require("react");
var _MenuContext = require("../context/MenuContext");
var useMenu = exports.useMenu = function useMenu() {
  var context = (0, _react.useContext)(_MenuContext.MenuContext);
  if (!context) throw new Error("useMenu must be used within a MenuProvider");
  return context;
};