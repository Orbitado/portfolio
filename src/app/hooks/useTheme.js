"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = void 0;
var _react = require("react");
var _types = require("@/app/types/types");
var _themeContext = require("@/app/context/themeContext");
var useTheme = exports.useTheme = function useTheme() {
  var context = (0, _react.useContext)(_themeContext.ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};