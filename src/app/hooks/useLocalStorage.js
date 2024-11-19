"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function useLocalStorage(key, initialValue) {
  var _useState = (0, _react.useState)(function () {
      if (typeof window === "undefined") {
        return initialValue;
      }
      try {
        var item = localStorage.getItem(key);
        // Si no es JSON válido, devuelve el valor como una cadena
        return item ? isJSON(item) ? JSON.parse(item) : item : initialValue;
      } catch (error) {
        console.error("Error reading localStorage key: ".concat(key), error);
        return initialValue;
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    storedValue = _useState2[0],
    setStoredValue = _useState2[1];
  var setValue = function setValue(value) {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        var valueToStore = typeof value === "string" || typeof value === "number" || typeof value === "boolean" ? value : JSON.stringify(value);
        localStorage.setItem(key, valueToStore);
      }
    } catch (error) {
      console.error("Error setting localStorage key: ".concat(key), error);
    }
  };
  (0, _react.useEffect)(function () {
    if (typeof window === "undefined") return;
    try {
      var item = localStorage.getItem(key);
      if (item) {
        setStoredValue(isJSON(item) ? JSON.parse(item) : item);
      }
    } catch (error) {
      console.error("Error syncing localStorage key: ".concat(key), error);
    }
  }, [key]);
  return [storedValue, setValue];
}

// Helper para verificar si un valor es JSON
var isJSON = function isJSON(value) {
  try {
    JSON.parse(value);
    return true;
  } catch (_unused) {
    return false;
  }
};
var _default = exports.default = useLocalStorage;