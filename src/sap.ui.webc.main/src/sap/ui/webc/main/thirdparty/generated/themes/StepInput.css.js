sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", async () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents", "sap_fiori_3", async () => _parametersBundle2.default);
  const styleData = {
    packageName: "@ui5/webcomponents",
    fileName: "themes/StepInput.css",
    content: ":host {\n\tvertical-align: middle;\n}\n.ui5-hidden-text {\n\tposition: absolute;\n\tclip: rect(1px,1px,1px,1px);\n\tuser-select: none;\n\tleft: -1000px; /* ensure the invisible texts are never part of the viewport */\n\ttop: -1000px;\n\tpointer-events: none;\n\tfont-size: 0;\n}\n/*\n\tThis CSS file enables visual alignment of all icons within input elements.\n\tAPI:\n\t- add input-icon attribute to an icon\n\t- [Optional] pressed attribute set to the icon will enable additional styling (check MultiComboBox, Select, etc.)\n*/\n[input-icon] {\n\tcolor: var(--_ui5_input_icon_color);\n\tcursor: pointer;\n\toutline: none;\n\tpadding: var(--_ui5_input_icon_padding);\n\tborder-inline-start: var(--_ui5_input_icon_border);\n\tmin-width: 1rem;\n\tmin-height: 1rem;\n\tborder-radius: var(--_ui5_input_icon_border_radius);\n}\n[input-icon][pressed] {\n\tbackground: var(--_ui5_input_icon_pressed_bg);\n\tbox-shadow: var(--_ui5_input_icon_box_shadow);\n\tborder-inline-start: var(--_ui5_select_hover_icon_left_border);\n\tcolor: var(--_ui5_input_icon_pressed_color);\n}\n[input-icon]:active {\n\tbackground-color: var(--sapButton_Active_Background);\n\tbox-shadow: var(--_ui5_input_icon_box_shadow);\n\tborder-inline-start: var(--_ui5_select_hover_icon_left_border);\n\tcolor: var(--_ui5_input_icon_pressed_color);\n}\n[input-icon]:not([pressed]):not(:active):hover {\n\tbackground: var(--_ui5_input_icon_hover_bg);\n\tbox-shadow: var(--_ui5_input_icon_box_shadow);\n}\n[input-icon]:hover {\n\tborder-inline-start: var(--_ui5_select_hover_icon_left_border);\n\tbox-shadow: var(--_ui5_input_icon_box_shadow);\n}\n:host(:not([hidden])) {\n\tdisplay: inline-block;\n\twidth: 100%;\n\tline-height: normal;\n\tletter-spacing: normal;\n\tword-spacing: normal;\n}\n:host {\n\t--ui5_input_focus_pseudo_element_content: none;\n\tcolor: var(--sapField_TextColor);\n\tbackground-color: var(--sapField_Background);\n\tborder: var(--_ui5_step_input_border_style);\n\tborder-radius: var(--sapField_BorderCornerRadius);\n\tbox-sizing: border-box;\n\theight: var(--_ui5_input_height);\n\tposition: relative;\n\tmin-width: var(--_ui5_step_input_min_width);\n\ttext-align: right;\n}\n:host .ui5-step-input-input {\n\ttext-align: inherit;\n}\n:host(:not([value-state]):not([readonly]):not([disabled])){\n\tbox-shadow: none;\n}\n:host([value-state=\"Success\"]:not([readonly]):not([disabled])) {\n\tbackground-color: var(--sapField_SuccessBackground);\n}\n:host([value-state=\"Error\"]:not([readonly]):not([disabled])) {\n\tbackground-color: var(--sapField_InvalidBackground);\n}\n:host([value-state=\"Information\"]:not([readonly]):not([disabled])) {\n\tbackground-color: var(--sapField_InformationBackground);\n}\n:host([value-state=\"Warning\"]:not([readonly]):not([disabled])) {\n\tbackground-color: var(--sapField_WarningBackground);\n}\n:host(:not([value-state]):not([readonly]):not([disabled]):hover),\n:host([value-state=\"None\"]:not([readonly]):not([disabled]):hover) {\n\tbackground-color: var(--_ui5_step_input_border_color_hover);\n\tborder: var(--_ui5_step_input_border_hover);\n}\n:host(:not([value-state]):not([readonly]):not([disabled]):not([focused]):hover),\n:host([value-state=\"None\"]:not([readonly]):not([disabled]):not([focused]):hover) {\n\tbackground-color: var(--sapField_Hover_Background);\n\tborder: var(--_ui5_step_input_border_style_hover);\n\tbox-shadow: var(--sapField_Hover_Shadow);\n}\n:host([value-state=\"Success\"]:not([readonly]):not([disabled]):not([focused]):hover) {\n\tbox-shadow: var(--sapField_Hover_SuccessShadow);\n}\n:host([value-state=\"Information\"]:not([readonly]):not([disabled]):not([focused]):hover) {\n\tbox-shadow: var(--sapField_Hover_InformationShadow);\n}\n:host([value-state=\"Warning\"]:not([readonly]):not([disabled]):not([focused]):hover) {\n\tbox-shadow: var(--sapField_Hover_WarningShadow);\n}\n:host([value-state=\"Error\"]:not([readonly]):not([disabled]):not([focused]):hover) {\n\tbox-shadow: var(--sapField_Hover_InvalidShadow);\n}\n:host([value-state=\"Success\"]:not([readonly]):not([disabled]):hover),\n:host([value-state=\"Error\"]:not([readonly]):not([disabled]):hover),\n:host([value-state=\"Information\"]:not([readonly]):not([disabled]):hover),\n:host([value-state=\"Warning\"]:not([readonly]):not([disabled]):hover) {\n\tbackground-color: var(--_ui5-step_input_button_state_hover_background_color);\n}\n:host(:not([value-state]):not([readonly]):not([disabled])[focused]),\n:host([value-state=\"None\"]:not([readonly]):not([disabled])[focused]),\n:host([value-state=\"Success\"]:not([readonly]):not([disabled])[focused]),\n:host([value-state=\"Error\"]:not([readonly]):not([disabled])[focused]),\n:host([value-state=\"Information\"]:not([readonly]):not([disabled])[focused]),\n:host([value-state=\"Warning\"]:not([readonly]):not([disabled])[focused]){\n\tbackground-color: var(--sapField_Focus_Background);\n}\n:host([value-state=\"Success\"]:not([readonly]):not([disabled]))::after,\n:host([value-state=\"Error\"]:not([readonly]):not([disabled]))::after,\n:host([value-state=\"None\"]:not([readonly]):not([disabled]))::after,\n:host([value-state=\"Information\"]:not([readonly]):not([disabled]))::after,\n:host([value-state=\"Warning\"]:not([readonly]):not([disabled]))::after {\n\tposition: absolute;\n\tcontent: \"\";\n\ttop: -1px;\n\tright: -1px;\n\tbottom: -1px;\n\tleft: -1px;\n\toutline: none;\n\tpointer-events: none;\n\tborder-radius: var(--sapField_BorderCornerRadius);\n\tborder-style: var(--_ui5_input_error_warning_border_style);\n\tz-index: 3;\n\tborder-width: 0px;\n}\n:host([value-state=\"Information\"]:not([readonly]):not([disabled]))::after {\n\tborder-color: var(--sapField_InformationColor);\n\tborder-width: var(--_ui5_input_information_border_width);\n}\n:host([value-state=\"Warning\"]:not([readonly]):not([disabled]))::after {\n\tborder-color: var(--sapField_WarningColor);\n\tborder-width: 2px;\n}\n:host([value-state=\"Success\"]:not([readonly]):not([disabled]))::after {\n\tborder-color: var(--sapField_SuccessColor);\n\tborder-width: 1px;\n}\n:host([value-state=\"Error\"]:not([readonly]):not([disabled]))::after {\n\tborder-color: var(--sapField_InvalidColor);\n\tborder-width: var(--_ui5_input_information_border_width);\n}\n:host([value-state])::after {\n\tborder-width: var(--_ui5_input_state_border_width);\n}\n:host([value-state=\"Error\"]:not([readonly]):not([disabled])) .ui5-step-input-input {\n\tbackground-color: var(--_ui5_input_input_background_color);\n}\n:host([value-state=\"Error\"]:not([readonly]):not([disabled])) .ui5-step-input-input:hover {\n\tbackground-color: var(--_ui5_step_input_input_error_background_color);\n}\n:host([value-state]:not([value-state=\"None\"]) .ui5-step-input-input[focused]) {\n\t\toutline: none;\n}\n:host .ui5-step-input-input {\n\twidth: 100%;\n\tcolor: inherit;\n\tbackground-color: inherit;\n\tborder: var(--_ui5_step_input_input_border);\n\tbox-sizing: border-box;\n\tvertical-align: top;\n\tmargin-top: var(--_ui5_step_input_input_margin_top);\n\tmin-width: var(--_ui5_step_input_min_width);\n\tpadding-inline-start: var(--_ui5_step_input_padding);\n\tpadding-inline-end: var(--_ui5_step_input_padding);\n\tposition: relative;\n\toutline: none;\n\tline-height: inherit;\n\tletter-spacing: inherit;\n\tword-spacing: inherit;\n}\n:host .ui5-step-input-input[readonly] {\n\tpadding: 0;\n}\n:host .ui5-step-input-input:hover,\n:host .ui5-step-input-input[focused]{\n\tbox-shadow: none;\n}\n:host .ui5-step-input-root {\n\twhite-space: nowrap;\n\tline-height: inherit;\n\tletter-spacing: inherit;\n\tword-spacing: inherit;\n}\n:host .ui5-step-input-input[text-align=left] {\n\ttext-align: left;\n}\n:host .ui5-step-input-input[text-align=center] {\n\ttext-align: center;\n}\n:host .ui5-step-input-input[text-align=right] {\n\ttext-align: right;\n}\n:host .ui5-step-icon {\n\tposition: absolute;\n\tdisplay: var(--_ui5_step_input_button_display);\n\theight: 2rem;\n\theight: 100%;\n\tbackground-color: var(--_ui5_step_input_button_background_color);\n\tz-index: 2;\n}\n:host .ui5-step-icon[focused] {\n\tborder: none;\n\toutline: none;\n}\n:host .ui5-step-icon.ui5-step-dec {\n\tleft: var(--_ui5_step_input_button_left);\n}\n:host .ui5-step-icon.ui5-step-inc {\n\tright: var(--_ui5_step_input_button_right);\n}\n:host .ui5-step-icon *:not([clickable]),\n:host .ui5-step-icon *:not([clickable]):active,\n:host .ui5-step-icon *:not([clickable]):hover {\n\topacity: 0.5;\n\tbackground-color: transparent;\n\tcolor: var(--sapContent_IconColor);\n}\n:host .ui5-step-icon :not([clickable]) *:hover,\n:host .ui5-step-icon :not([clickable]) *:active {\n\tbackground-color: var(--sapField_Background);\n\tcolor: var(--sapContent_IconColor);\n}\n:host .ui5-step-input-input[focused]::after {\n\tposition: absolute;\n\tcontent: \"\";\n\tborder: var(--_ui5_step_input_input_border_focused_after);\n\ttop: var(--_ui5_step_input_input_border_top_bottom_focused_after);\n\tright: 0px;\n\tbottom: var(--_ui5_step_input_input_border_top_bottom_focused_after);\n\tborder-radius: var(--_ui5_step_input_input_border_radius_focused_after);\n\tleft: 0px;\n\toutline: none;\n\tpointer-events: none;\n\tz-index: 3;\n}\n:host .ui5-step-input-input[focused] {\n\toutline: none;\n}\n:host([value-state=\"Information\"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]::after {\n\tborder-color: var(--_ui5_step_input_input_information_border_color_focused_after);\n}\n:host([value-state=\"Warning\"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]::after {\n\tborder-color: var(--_ui5_step_input_input_warning_border_color_focused_after);\n}\n:host([value-state=\"Success\"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]::after {\n\tborder-color: var(--_ui5_step_input_input_success_border_color_focused_after);\n}\n:host([value-state=\"Error\"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]::after {\n\tborder-color: var(--_ui5_step_input_input_error_border_color_focused_after);\n}\n/* Disable spin buttons in Chrome, Safari, Edge, Opera */\n:host .ui5-step-input-input::-webkit-outer-spin-button,\n:host .ui5-step-input-input::-webkit-inner-spin-button {\n\t-webkit-appearance: none;\n\tmargin: 0;\n}\n:host([disabled]) {\n\topacity: var(--_ui5_input_disabled_opacity);\n\tcursor: default;\n\tpointer-events: none;\n\tbackground: var(--sapField_ReadOnly_Background);\n\tborder-color: var(--sapField_ReadOnly_BorderColor);\n}\n:host([disabled]) .ui5-step-icon {\n\tbackground-color: var(--_ui5_step_input_disabled_button_background);\n}\n:host([disabled]) .ui5-step-icon [ui5-icon] {\n\tcolor: var(--sapField_ReadOnly_BorderColor);\n}\n"
  };
  var _default = styleData;
  _exports.default = _default;
});