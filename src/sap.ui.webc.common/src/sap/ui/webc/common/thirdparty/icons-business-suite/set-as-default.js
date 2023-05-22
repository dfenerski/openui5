sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v1/set-as-default", "./v2/set-as-default"], function (_exports, _Theme, _setAsDefault, _setAsDefault2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _setAsDefault.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _setAsDefault.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isLegacyThemeFamily)() ? _setAsDefault.pathData : _setAsDefault2.pathData;
  _exports.pathData = pathData;
  var _default = "business-suite/set-as-default";
  _exports.default = _default;
});