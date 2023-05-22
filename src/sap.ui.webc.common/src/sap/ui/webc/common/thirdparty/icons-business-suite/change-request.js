sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v1/change-request", "./v2/change-request"], function (_exports, _Theme, _changeRequest, _changeRequest2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _changeRequest.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _changeRequest.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isLegacyThemeFamily)() ? _changeRequest.pathData : _changeRequest2.pathData;
  _exports.pathData = pathData;
  var _default = "business-suite/change-request";
  _exports.default = _default;
});