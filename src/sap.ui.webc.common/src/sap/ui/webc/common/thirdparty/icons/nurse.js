sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v4/nurse", "./v5/nurse"], function (_exports, _Theme, _nurse, _nurse2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _nurse.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _nurse.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isLegacyThemeFamily)() ? _nurse.pathData : _nurse2.pathData;
  _exports.pathData = pathData;
  var _default = "nurse";
  _exports.default = _default;
});