sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v1/polygon-white", "./v2/polygon-white"], function (_exports, _Theme, _polygonWhite, _polygonWhite2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _polygonWhite.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _polygonWhite.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isLegacyThemeFamily)() ? _polygonWhite.pathData : _polygonWhite2.pathData;
  _exports.pathData = pathData;
  var _default = "business-suite/polygon-white";
  _exports.default = _default;
});