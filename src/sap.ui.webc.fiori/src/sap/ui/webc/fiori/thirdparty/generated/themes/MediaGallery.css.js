sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Themes', 'sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css', './sap_fiori_3/parameters-bundle.css'], function (Themes, defaultThemeBase, parametersBundle_css) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var defaultThemeBase__default = /*#__PURE__*/_interopDefaultLegacy(defaultThemeBase);

	Themes.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase__default);
	Themes.registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_fiori_3", () => parametersBundle_css);
	var MediaGalleryCss = {packageName:"@ui5/webcomponents-fiori",fileName:"themes/MediaGallery.css",content:":host{height:100%}.ui5-media-gallery-display,.ui5-media-gallery-display-wrapper,:host{width:100%}.ui5-media-gallery-root{width:inherit;height:inherit;background:var(--sapBaseColor);display:flex;flex-direction:column;position:relative}:host([menu-vertical-align=Top]) .ui5-media-gallery-root{flex-direction:column-reverse}:host([effective-layout=Horizontal]) .ui5-media-gallery-root,:host([effective-layout=Horizontal][menu-horizontal-align=Right]) .ui5-media-gallery-root[dir=rtl]{flex-direction:row-reverse}:host([effective-layout=Horizontal]) .ui5-media-gallery-root[dir=rtl],:host([effective-layout=Horizontal][menu-horizontal-align=Right]) .ui5-media-gallery-root{flex-direction:row}.ui5-media-gallery-display-wrapper{display:flex;justify-content:center;position:relative}:host([effective-layout=Horizontal][show-all-thumbnails]) .ui5-media-gallery-display-wrapper{flex-grow:3;flex-basis:0}.ui5-media-gallery-display{position:relative;margin:1rem;display:flex;justify-content:center}.ui5-media-gallery-display [ui5-media-gallery-item]{z-index:1}[ui5-carousel]{width:calc(100% - 2rem)}[ui5-carousel]::part(item){padding:0;overflow:hidden}.ui5-media-gallery-thumbnails-wrapper{margin:1rem 0 0 0}:host([menu-vertical-align=Top]) .ui5-media-gallery-thumbnails-wrapper{margin:0 0 1rem 0}:host([effective-layout=Horizontal]) .ui5-media-gallery-thumbnails-wrapper{margin:0 1rem 0 0}:host([effective-layout=Horizontal][menu-horizontal-align=Right]) .ui5-media-gallery-thumbnails-wrapper{margin:0 0 0 1rem}:host(:not([effective-layout=Horizontal])) [dir=rtl] .ui5-media-gallery-thumbnails-wrapper{margin-right:1rem}:host([show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper{overflow-x:auto;overflow-y:hidden}:host([effective-layout=Horizontal][show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper{overflow-y:auto;overflow-x:hidden;flex-grow:1;flex-basis:0}.ui5-media-gallery-thumbnails-wrapper ul{height:5rem;display:flex;flex-wrap:nowrap;padding-left:0;margin-top:0;margin-bottom:0;list-style-type:none;padding-inline-start:0}:host([effective-layout=Horizontal]) ul{width:5rem;flex-wrap:wrap}:host([effective-layout=Horizontal][show-all-thumbnails][media-range=M]) ul{width:10rem}:host([effective-layout=Horizontal][show-all-thumbnails][media-range=L]) ul{width:15rem}:host([effective-layout=Horizontal][show-all-thumbnails][media-range=XL]) ul{width:20rem}.ui5-media-gallery-overflow [ui5-button],.ui5-media-gallery-thumbnail{width:4rem;height:4rem;flex-shrink:0}.ui5-media-gallery-overflow [ui5-button]{background:var(--_ui5_media_gallery_overflow_btn_background);color:var(--_ui5_media_gallery_overflow_btn_color);border:var(--_ui5_media_gallery_overflow_btn_border)}.ui5-media-gallery-overflow,.ui5-media-gallery-thumbnail{margin:0 0 0 1rem}:host([menu-vertical-align=Top]) .ui5-media-gallery-overflow,:host([menu-vertical-align=Top]) .ui5-media-gallery-thumbnail{margin:1rem 0 0 1rem}:host([effective-layout=Horizontal]) .ui5-media-gallery-overflow,:host([effective-layout=Horizontal]) .ui5-media-gallery-thumbnail{margin:1rem 0 0 1rem}:host([effective-layout=Horizontal][menu-horizontal-align=Right]) .ui5-media-gallery-overflow,:host([effective-layout=Horizontal][menu-horizontal-align=Right]) .ui5-media-gallery-thumbnail{margin:1rem 1rem 0 0}"};

	return MediaGalleryCss;

});
