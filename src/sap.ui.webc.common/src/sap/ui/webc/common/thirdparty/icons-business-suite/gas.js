sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v1/gas", "./v2/gas"], function (_exports, _Theme, _gas, _gas2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _gas.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _gas.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isLegacyThemeFamily)() ? _gas.pathData : _gas2.pathData;
  _exports.pathData = pathData;
  var _default = "business-suite/gas";
  _exports.default = _default;
});