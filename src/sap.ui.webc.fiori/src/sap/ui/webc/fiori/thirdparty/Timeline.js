sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/UI5Element", "sap/ui/webc/common/thirdparty/base/decorators/customElement", "sap/ui/webc/common/thirdparty/base/decorators/property", "sap/ui/webc/common/thirdparty/base/decorators/slot", "sap/ui/webc/common/thirdparty/base/i18nBundle", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer", "sap/ui/webc/common/thirdparty/base/Keys", "sap/ui/webc/common/thirdparty/base/delegate/ItemNavigation", "sap/ui/webc/common/thirdparty/base/types/NavigationMode", "sap/ui/webc/common/thirdparty/base/MarkedEvents", "./generated/i18n/i18n-defaults", "./generated/templates/TimelineTemplate.lit", "./TimelineItem", "./generated/themes/Timeline.css", "./types/TimelineLayout"], function (_exports, _UI5Element, _customElement, _property, _slot, _i18nBundle, _LitRenderer, _Keys, _ItemNavigation, _NavigationMode, _MarkedEvents, _i18nDefaults, _TimelineTemplate, _TimelineItem, _Timeline, _TimelineLayout) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _UI5Element = _interopRequireDefault(_UI5Element);
  _customElement = _interopRequireDefault(_customElement);
  _property = _interopRequireDefault(_property);
  _slot = _interopRequireDefault(_slot);
  _LitRenderer = _interopRequireDefault(_LitRenderer);
  _ItemNavigation = _interopRequireDefault(_ItemNavigation);
  _NavigationMode = _interopRequireDefault(_NavigationMode);
  _TimelineTemplate = _interopRequireDefault(_TimelineTemplate);
  _TimelineItem = _interopRequireDefault(_TimelineItem);
  _Timeline = _interopRequireDefault(_Timeline);
  _TimelineLayout = _interopRequireDefault(_TimelineLayout);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var Timeline_1;
  const SHORT_LINE_WIDTH = "ShortLineWidth";
  const LARGE_LINE_WIDTH = "LargeLineWidth";
  /**
   * @class
   *
   * <h3 class="comment-api-title">Overview</h3>
   *
   * The <code>ui5-timeline</code> component shows entries (such as objects, events, or posts) in chronological order.
   * A common use case is to provide information about changes to an object, or events related to an object.
   * These entries can be generated by the system (for example, value XY changed from A to B), or added manually.
   * There are two distinct variants of the timeline: basic and social. The basic timeline is read-only,
   * while the social timeline offers a high level of interaction and collaboration, and is integrated within SAP Jam.
   *
   * @constructor
   * @author SAP SE
   * @alias sap.ui.webc.fiori.Timeline
   * @extends sap.ui.webc.base.UI5Element
   * @tagname ui5-timeline
   * @appenddocs sap.ui.webc.fiori.TimelineItem
   * @public
   * @since 0.8.0
   */
  let Timeline = Timeline_1 = class Timeline extends _UI5Element.default {
    constructor() {
      super();
      this._itemNavigation = new _ItemNavigation.default(this, {
        getItemsCallback: () => this.items
      });
    }
    static async onDefine() {
      Timeline_1.i18nBundle = await (0, _i18nBundle.getI18nBundle)("@ui5/webcomponents-fiori");
    }
    get ariaLabel() {
      return this.accessibleName ? `${Timeline_1.i18nBundle.getText(_i18nDefaults.TIMELINE_ARIA_LABEL)} ${this.accessibleName}` : Timeline_1.i18nBundle.getText(_i18nDefaults.TIMELINE_ARIA_LABEL);
    }
    _onfocusin(e) {
      const target = e.target;
      this._itemNavigation.setCurrentItem(target);
    }
    onBeforeRendering() {
      this._itemNavigation._navigationMode = this.layout === _TimelineLayout.default.Horizontal ? _NavigationMode.default.Horizontal : _NavigationMode.default.Vertical;
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].layout = this.layout;
        if (this.items[i + 1] && !!this.items[i + 1].icon) {
          this.items[i]._lineWidth = SHORT_LINE_WIDTH;
        } else if (this.items[i].icon && this.items[i + 1] && !this.items[i + 1].icon) {
          this.items[i]._lineWidth = LARGE_LINE_WIDTH;
        }
      }
    }
    _onkeydown(e) {
      const target = e.target;
      if ((0, _Keys.isTabNext)(e)) {
        if (!target.nameClickable || (0, _MarkedEvents.getEventMark)(e) === "link") {
          this._handleTabNextOrPrevious(e, (0, _Keys.isTabNext)(e));
        }
      } else if ((0, _Keys.isTabPrevious)(e)) {
        this._handleTabNextOrPrevious(e);
      }
    }
    _handleTabNextOrPrevious(e, isNext) {
      const target = e.target;
      const nextTargetIndex = isNext ? this.items.indexOf(target) + 1 : this.items.indexOf(target) - 1;
      const nextTarget = this.items[nextTargetIndex];
      if (!nextTarget) {
        return;
      }
      if (nextTarget.nameClickable && !isNext) {
        e.preventDefault();
        nextTarget.focusLink();
        return;
      }
      e.preventDefault();
      nextTarget.focus();
      this._itemNavigation.setCurrentItem(nextTarget);
    }
  };
  __decorate([(0, _property.default)({
    type: _TimelineLayout.default,
    defaultValue: _TimelineLayout.default.Vertical
  })], Timeline.prototype, "layout", void 0);
  __decorate([(0, _property.default)()], Timeline.prototype, "accessibleName", void 0);
  __decorate([(0, _slot.default)({
    type: HTMLElement,
    individualSlots: true,
    "default": true
  })], Timeline.prototype, "items", void 0);
  Timeline = Timeline_1 = __decorate([(0, _customElement.default)({
    tag: "ui5-timeline",
    languageAware: true,
    renderer: _LitRenderer.default,
    styles: _Timeline.default,
    template: _TimelineTemplate.default,
    dependencies: [_TimelineItem.default]
  })], Timeline);
  Timeline.define();
  var _default = Timeline;
  _exports.default = _default;
});