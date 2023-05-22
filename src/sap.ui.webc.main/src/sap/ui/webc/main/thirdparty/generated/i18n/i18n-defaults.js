sap.ui.define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SELECT_OPTIONS = _exports.SEGMENTEDBUTTON_ARIA_DESCRIPTION = _exports.SEGMENTEDBUTTON_ARIA_DESCRIBEDBY = _exports.SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION = _exports.RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON = _exports.RATING_INDICATOR_TOOLTIP_TEXT = _exports.RATING_INDICATOR_TEXT = _exports.RANGE_SLIDER_START_HANDLE_DESCRIPTION = _exports.RANGE_SLIDER_END_HANDLE_DESCRIPTION = _exports.RANGE_SLIDER_ARIA_DESCRIPTION = _exports.PANEL_ICON = _exports.MULTIINPUT_SHOW_MORE_TOKENS = _exports.MULTIINPUT_ROLEDESCRIPTION_TEXT = _exports.MULTICOMBOBOX_DIALOG_OK_BUTTON = _exports.MONTH_PICKER_DESCRIPTION = _exports.MESSAGE_STRIP_WARNING = _exports.MESSAGE_STRIP_SUCCESS = _exports.MESSAGE_STRIP_INFORMATION = _exports.MESSAGE_STRIP_ERROR = _exports.MESSAGE_STRIP_CLOSE_BUTTON = _exports.MESSAGE_STRIP_CLOSABLE = _exports.MENU_CLOSE_BUTTON_ARIA_LABEL = _exports.MENU_BACK_BUTTON_ARIA_LABEL = _exports.LOAD_MORE_TEXT = _exports.LIST_ITEM_SELECTED = _exports.LIST_ITEM_POSITION = _exports.LIST_ITEM_NOT_SELECTED = _exports.LIST_ITEM_GROUP_HEADER = _exports.LINK_SUBTLE = _exports.LINK_EMPHASIZED = _exports.LABEL_COLON = _exports.INPUT_SUGGESTIONS_TITLE = _exports.INPUT_SUGGESTIONS_ONE_HIT = _exports.INPUT_SUGGESTIONS_NO_HIT = _exports.INPUT_SUGGESTIONS_MORE_HITS = _exports.INPUT_SUGGESTIONS = _exports.GROUP_HEADER_TEXT = _exports.FILEUPLOAD_BROWSE = _exports.FILEUPLOADER_TITLE = _exports.DIALOG_HEADER_ARIA_ROLE_DESCRIPTION = _exports.DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE = _exports.DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE = _exports.DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE = _exports.DELETE = _exports.DAY_PICKER_WEEK_NUMBER_TEXT = _exports.DAY_PICKER_TODAY = _exports.DAY_PICKER_NON_WORKING_DAY = _exports.DATETIME_PICKER_TIME_BUTTON = _exports.DATETIME_PICKER_DATE_BUTTON = _exports.DATETIME_DESCRIPTION = _exports.DATERANGE_DESCRIPTION = _exports.DATEPICKER_OPEN_ICON_TITLE = _exports.DATEPICKER_DATE_DESCRIPTION = _exports.COLOR_PALETTE_MORE_COLORS_TEXT = _exports.COLOR_PALETTE_DIALOG_TITLE = _exports.COLOR_PALETTE_DIALOG_OK_BUTTON = _exports.COLOR_PALETTE_DIALOG_CANCEL_BUTTON = _exports.COLORPICKER_RED = _exports.COLORPICKER_HUE_SLIDER = _exports.COLORPICKER_HEX = _exports.COLORPICKER_GREEN = _exports.COLORPICKER_BLUE = _exports.COLORPICKER_ALPHA_SLIDER = _exports.COLORPICKER_ALPHA = _exports.COLORPALETTE_POPOVER_TITLE = _exports.COLORPALETTE_CONTAINER_LABEL = _exports.COLORPALETTE_COLOR_LABEL = _exports.CAROUSEL_PREVIOUS_ARROW_TEXT = _exports.CAROUSEL_OF_TEXT = _exports.CAROUSEL_NEXT_ARROW_TEXT = _exports.CAROUSEL_DOT_TEXT = _exports.CALENDAR_HEADER_PREVIOUS_BUTTON = _exports.CALENDAR_HEADER_NEXT_BUTTON = _exports.BUTTON_ARIA_TYPE_REJECT = _exports.BUTTON_ARIA_TYPE_EMPHASIZED = _exports.BUTTON_ARIA_TYPE_ACCEPT = _exports.BUSY_INDICATOR_TITLE = _exports.BREADCRUMB_ITEM_POS = _exports.BREADCRUMBS_OVERFLOW_ARIA_LABEL = _exports.BREADCRUMBS_CANCEL_BUTTON = _exports.BREADCRUMBS_ARIA_LABEL = _exports.BADGE_DESCRIPTION = _exports.AVATAR_TOOLTIP = _exports.AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL = _exports.AVATAR_GROUP_MOVE = _exports.AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL = _exports.AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL = _exports.AVATAR_GROUP_ARIA_LABEL_GROUP = _exports.ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER = _exports.ARIA_ROLEDESCRIPTION_CARD_HEADER = _exports.ARIA_ROLEDESCRIPTION_CARD = _exports.ARIA_LABEL_SELECT_ALL_CHECKBOX = _exports.ARIA_LABEL_ROW_SELECTION = _exports.ARIA_LABEL_LIST_SELECTABLE = _exports.ARIA_LABEL_LIST_MULTISELECTABLE = _exports.ARIA_LABEL_LIST_ITEM_RADIO_BUTTON = _exports.ARIA_LABEL_LIST_ITEM_CHECKBOX = _exports.ARIA_LABEL_LIST_DELETABLE = _exports.ARIA_LABEL_EMPTY_CELL = _exports.ARIA_LABEL_CARD_CONTENT = void 0;
  _exports.YEAR_PICKER_DESCRIPTION = _exports.VALUE_STATE_WARNING = _exports.VALUE_STATE_TYPE_WARNING = _exports.VALUE_STATE_TYPE_SUCCESS = _exports.VALUE_STATE_TYPE_INFORMATION = _exports.VALUE_STATE_TYPE_ERROR = _exports.VALUE_STATE_SUCCESS = _exports.VALUE_STATE_INFORMATION = _exports.VALUE_STATE_ERROR_ALREADY_SELECTED = _exports.VALUE_STATE_ERROR = _exports.TREE_ITEM_EXPAND_NODE = _exports.TREE_ITEM_COLLAPSE_NODE = _exports.TREE_ITEM_ARIA_LABEL = _exports.TOKEN_ARIA_DELETABLE = _exports.TOKENIZER_POPOVER_REMOVE = _exports.TOKENIZER_ARIA_LABEL = _exports.TOKENIZER_ARIA_CONTAIN_TOKEN = _exports.TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS = _exports.TOKENIZER_ARIA_CONTAIN_ONE_TOKEN = _exports.TIMEPICKER_SUBMIT_BUTTON = _exports.TIMEPICKER_SECONDS_LABEL = _exports.TIMEPICKER_MINUTES_LABEL = _exports.TIMEPICKER_INPUT_DESCRIPTION = _exports.TIMEPICKER_HOURS_LABEL = _exports.TIMEPICKER_CANCEL_BUTTON = _exports.TEXTAREA_CHARACTERS_LEFT = _exports.TEXTAREA_CHARACTERS_EXCEEDED = _exports.TAB_SPLIT_ROLE_DESCRIPTION = _exports.TAB_ARIA_DESIGN_POSITIVE = _exports.TAB_ARIA_DESIGN_NEUTRAL = _exports.TAB_ARIA_DESIGN_NEGATIVE = _exports.TAB_ARIA_DESIGN_CRITICAL = _exports.TABLE_ROW_POSITION = _exports.TABLE_HEADER_ROW_INFORMATION = _exports.TABLE_GROUP_ROW_ARIA_LABEL = _exports.TABCONTAINER_SUBTABS_DESCRIPTION = _exports.TABCONTAINER_PREVIOUS_ICON_ACC_NAME = _exports.TABCONTAINER_POPOVER_CANCEL_BUTTON = _exports.TABCONTAINER_OVERFLOW_MENU_TITLE = _exports.TABCONTAINER_NEXT_ICON_ACC_NAME = _exports.TABCONTAINER_END_OVERFLOW = _exports.STEPINPUT_INC_ICON_TITLE = _exports.STEPINPUT_DEC_ICON_TITLE = _exports.SPLIT_BUTTON_KEYBOARD_HINT = _exports.SPLIT_BUTTON_DESCRIPTION = _exports.SLIDER_ARIA_DESCRIPTION = _exports.SELECT_ROLE_DESCRIPTION = void 0;
  const ARIA_LABEL_CARD_CONTENT = {
    key: "ARIA_LABEL_CARD_CONTENT",
    defaultText: "Card Content"
  };
  _exports.ARIA_LABEL_CARD_CONTENT = ARIA_LABEL_CARD_CONTENT;
  const ARIA_ROLEDESCRIPTION_CARD = {
    key: "ARIA_ROLEDESCRIPTION_CARD",
    defaultText: "Card"
  };
  _exports.ARIA_ROLEDESCRIPTION_CARD = ARIA_ROLEDESCRIPTION_CARD;
  const ARIA_ROLEDESCRIPTION_CARD_HEADER = {
    key: "ARIA_ROLEDESCRIPTION_CARD_HEADER",
    defaultText: "Card Header"
  };
  _exports.ARIA_ROLEDESCRIPTION_CARD_HEADER = ARIA_ROLEDESCRIPTION_CARD_HEADER;
  const ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER = {
    key: "ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER",
    defaultText: "Interactive Card Header"
  };
  _exports.ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER = ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER;
  const AVATAR_TOOLTIP = {
    key: "AVATAR_TOOLTIP",
    defaultText: "Avatar"
  };
  _exports.AVATAR_TOOLTIP = AVATAR_TOOLTIP;
  const AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL = {
    key: "AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL",
    defaultText: "{0} displayed, {1} hidden."
  };
  _exports.AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL = AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL;
  const AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL = {
    key: "AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL",
    defaultText: "Activate for complete list."
  };
  _exports.AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL = AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL;
  const AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL = {
    key: "AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL",
    defaultText: "Individual avatars."
  };
  _exports.AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL = AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL;
  const AVATAR_GROUP_ARIA_LABEL_GROUP = {
    key: "AVATAR_GROUP_ARIA_LABEL_GROUP",
    defaultText: "Conjoined avatars."
  };
  _exports.AVATAR_GROUP_ARIA_LABEL_GROUP = AVATAR_GROUP_ARIA_LABEL_GROUP;
  const AVATAR_GROUP_MOVE = {
    key: "AVATAR_GROUP_MOVE",
    defaultText: "Press ARROW keys to move."
  };
  _exports.AVATAR_GROUP_MOVE = AVATAR_GROUP_MOVE;
  const BADGE_DESCRIPTION = {
    key: "BADGE_DESCRIPTION",
    defaultText: "Badge"
  };
  _exports.BADGE_DESCRIPTION = BADGE_DESCRIPTION;
  const BREADCRUMB_ITEM_POS = {
    key: "BREADCRUMB_ITEM_POS",
    defaultText: "{0} of {1}"
  };
  _exports.BREADCRUMB_ITEM_POS = BREADCRUMB_ITEM_POS;
  const BREADCRUMBS_ARIA_LABEL = {
    key: "BREADCRUMBS_ARIA_LABEL",
    defaultText: "Breadcrumb Trail"
  };
  _exports.BREADCRUMBS_ARIA_LABEL = BREADCRUMBS_ARIA_LABEL;
  const BREADCRUMBS_OVERFLOW_ARIA_LABEL = {
    key: "BREADCRUMBS_OVERFLOW_ARIA_LABEL",
    defaultText: "More"
  };
  _exports.BREADCRUMBS_OVERFLOW_ARIA_LABEL = BREADCRUMBS_OVERFLOW_ARIA_LABEL;
  const BREADCRUMBS_CANCEL_BUTTON = {
    key: "BREADCRUMBS_CANCEL_BUTTON",
    defaultText: "Cancel"
  };
  _exports.BREADCRUMBS_CANCEL_BUTTON = BREADCRUMBS_CANCEL_BUTTON;
  const BUSY_INDICATOR_TITLE = {
    key: "BUSY_INDICATOR_TITLE",
    defaultText: "Please wait"
  };
  _exports.BUSY_INDICATOR_TITLE = BUSY_INDICATOR_TITLE;
  const BUTTON_ARIA_TYPE_ACCEPT = {
    key: "BUTTON_ARIA_TYPE_ACCEPT",
    defaultText: "Positive Action"
  };
  _exports.BUTTON_ARIA_TYPE_ACCEPT = BUTTON_ARIA_TYPE_ACCEPT;
  const BUTTON_ARIA_TYPE_REJECT = {
    key: "BUTTON_ARIA_TYPE_REJECT",
    defaultText: "Negative Action"
  };
  _exports.BUTTON_ARIA_TYPE_REJECT = BUTTON_ARIA_TYPE_REJECT;
  const BUTTON_ARIA_TYPE_EMPHASIZED = {
    key: "BUTTON_ARIA_TYPE_EMPHASIZED",
    defaultText: "Emphasized"
  };
  _exports.BUTTON_ARIA_TYPE_EMPHASIZED = BUTTON_ARIA_TYPE_EMPHASIZED;
  const CAROUSEL_OF_TEXT = {
    key: "CAROUSEL_OF_TEXT",
    defaultText: "of"
  };
  _exports.CAROUSEL_OF_TEXT = CAROUSEL_OF_TEXT;
  const CAROUSEL_DOT_TEXT = {
    key: "CAROUSEL_DOT_TEXT",
    defaultText: "Item {0} of {1} displayed"
  };
  _exports.CAROUSEL_DOT_TEXT = CAROUSEL_DOT_TEXT;
  const CAROUSEL_PREVIOUS_ARROW_TEXT = {
    key: "CAROUSEL_PREVIOUS_ARROW_TEXT",
    defaultText: "Previous Page"
  };
  _exports.CAROUSEL_PREVIOUS_ARROW_TEXT = CAROUSEL_PREVIOUS_ARROW_TEXT;
  const CAROUSEL_NEXT_ARROW_TEXT = {
    key: "CAROUSEL_NEXT_ARROW_TEXT",
    defaultText: "Next Page"
  };
  _exports.CAROUSEL_NEXT_ARROW_TEXT = CAROUSEL_NEXT_ARROW_TEXT;
  const COLORPALETTE_CONTAINER_LABEL = {
    key: "COLORPALETTE_CONTAINER_LABEL",
    defaultText: "Color palette - Predefined colors"
  };
  _exports.COLORPALETTE_CONTAINER_LABEL = COLORPALETTE_CONTAINER_LABEL;
  const COLORPALETTE_POPOVER_TITLE = {
    key: "COLORPALETTE_POPOVER_TITLE",
    defaultText: "Color Palette"
  };
  _exports.COLORPALETTE_POPOVER_TITLE = COLORPALETTE_POPOVER_TITLE;
  const COLORPALETTE_COLOR_LABEL = {
    key: "COLORPALETTE_COLOR_LABEL",
    defaultText: "Color"
  };
  _exports.COLORPALETTE_COLOR_LABEL = COLORPALETTE_COLOR_LABEL;
  const COLOR_PALETTE_DIALOG_CANCEL_BUTTON = {
    key: "COLOR_PALETTE_DIALOG_CANCEL_BUTTON",
    defaultText: "Cancel"
  };
  _exports.COLOR_PALETTE_DIALOG_CANCEL_BUTTON = COLOR_PALETTE_DIALOG_CANCEL_BUTTON;
  const COLOR_PALETTE_DIALOG_OK_BUTTON = {
    key: "COLOR_PALETTE_DIALOG_OK_BUTTON",
    defaultText: "OK"
  };
  _exports.COLOR_PALETTE_DIALOG_OK_BUTTON = COLOR_PALETTE_DIALOG_OK_BUTTON;
  const COLOR_PALETTE_DIALOG_TITLE = {
    key: "COLOR_PALETTE_DIALOG_TITLE",
    defaultText: "Change Color"
  };
  _exports.COLOR_PALETTE_DIALOG_TITLE = COLOR_PALETTE_DIALOG_TITLE;
  const COLOR_PALETTE_MORE_COLORS_TEXT = {
    key: "COLOR_PALETTE_MORE_COLORS_TEXT",
    defaultText: "More Colors..."
  };
  _exports.COLOR_PALETTE_MORE_COLORS_TEXT = COLOR_PALETTE_MORE_COLORS_TEXT;
  const COLORPICKER_ALPHA_SLIDER = {
    key: "COLORPICKER_ALPHA_SLIDER",
    defaultText: "Alpha control"
  };
  _exports.COLORPICKER_ALPHA_SLIDER = COLORPICKER_ALPHA_SLIDER;
  const COLORPICKER_HUE_SLIDER = {
    key: "COLORPICKER_HUE_SLIDER",
    defaultText: "Hue control"
  };
  _exports.COLORPICKER_HUE_SLIDER = COLORPICKER_HUE_SLIDER;
  const COLORPICKER_HEX = {
    key: "COLORPICKER_HEX",
    defaultText: "Hexadecimal"
  };
  _exports.COLORPICKER_HEX = COLORPICKER_HEX;
  const COLORPICKER_RED = {
    key: "COLORPICKER_RED",
    defaultText: "Red"
  };
  _exports.COLORPICKER_RED = COLORPICKER_RED;
  const COLORPICKER_GREEN = {
    key: "COLORPICKER_GREEN",
    defaultText: "Green"
  };
  _exports.COLORPICKER_GREEN = COLORPICKER_GREEN;
  const COLORPICKER_BLUE = {
    key: "COLORPICKER_BLUE",
    defaultText: "Blue"
  };
  _exports.COLORPICKER_BLUE = COLORPICKER_BLUE;
  const COLORPICKER_ALPHA = {
    key: "COLORPICKER_ALPHA",
    defaultText: "Alpha"
  };
  _exports.COLORPICKER_ALPHA = COLORPICKER_ALPHA;
  const DATEPICKER_OPEN_ICON_TITLE = {
    key: "DATEPICKER_OPEN_ICON_TITLE",
    defaultText: "Open Picker"
  };
  _exports.DATEPICKER_OPEN_ICON_TITLE = DATEPICKER_OPEN_ICON_TITLE;
  const DATEPICKER_DATE_DESCRIPTION = {
    key: "DATEPICKER_DATE_DESCRIPTION",
    defaultText: "Date Input"
  };
  _exports.DATEPICKER_DATE_DESCRIPTION = DATEPICKER_DATE_DESCRIPTION;
  const DATETIME_DESCRIPTION = {
    key: "DATETIME_DESCRIPTION",
    defaultText: "Date Time Input"
  };
  _exports.DATETIME_DESCRIPTION = DATETIME_DESCRIPTION;
  const DATERANGE_DESCRIPTION = {
    key: "DATERANGE_DESCRIPTION",
    defaultText: "Date Range Input"
  };
  _exports.DATERANGE_DESCRIPTION = DATERANGE_DESCRIPTION;
  const DELETE = {
    key: "DELETE",
    defaultText: "Delete"
  };
  _exports.DELETE = DELETE;
  const FILEUPLOAD_BROWSE = {
    key: "FILEUPLOAD_BROWSE",
    defaultText: "Browse..."
  };
  _exports.FILEUPLOAD_BROWSE = FILEUPLOAD_BROWSE;
  const FILEUPLOADER_TITLE = {
    key: "FILEUPLOADER_TITLE",
    defaultText: "Upload File"
  };
  _exports.FILEUPLOADER_TITLE = FILEUPLOADER_TITLE;
  const GROUP_HEADER_TEXT = {
    key: "GROUP_HEADER_TEXT",
    defaultText: "Group Header"
  };
  _exports.GROUP_HEADER_TEXT = GROUP_HEADER_TEXT;
  const SELECT_ROLE_DESCRIPTION = {
    key: "SELECT_ROLE_DESCRIPTION",
    defaultText: "Listbox"
  };
  _exports.SELECT_ROLE_DESCRIPTION = SELECT_ROLE_DESCRIPTION;
  const SELECT_OPTIONS = {
    key: "SELECT_OPTIONS",
    defaultText: "Select Options"
  };
  _exports.SELECT_OPTIONS = SELECT_OPTIONS;
  const INPUT_SUGGESTIONS = {
    key: "INPUT_SUGGESTIONS",
    defaultText: "Suggestions available"
  };
  _exports.INPUT_SUGGESTIONS = INPUT_SUGGESTIONS;
  const INPUT_SUGGESTIONS_TITLE = {
    key: "INPUT_SUGGESTIONS_TITLE",
    defaultText: "Select"
  };
  _exports.INPUT_SUGGESTIONS_TITLE = INPUT_SUGGESTIONS_TITLE;
  const INPUT_SUGGESTIONS_ONE_HIT = {
    key: "INPUT_SUGGESTIONS_ONE_HIT",
    defaultText: "1 result available"
  };
  _exports.INPUT_SUGGESTIONS_ONE_HIT = INPUT_SUGGESTIONS_ONE_HIT;
  const INPUT_SUGGESTIONS_MORE_HITS = {
    key: "INPUT_SUGGESTIONS_MORE_HITS",
    defaultText: "{0} results are available"
  };
  _exports.INPUT_SUGGESTIONS_MORE_HITS = INPUT_SUGGESTIONS_MORE_HITS;
  const INPUT_SUGGESTIONS_NO_HIT = {
    key: "INPUT_SUGGESTIONS_NO_HIT",
    defaultText: "No results"
  };
  _exports.INPUT_SUGGESTIONS_NO_HIT = INPUT_SUGGESTIONS_NO_HIT;
  const LINK_SUBTLE = {
    key: "LINK_SUBTLE",
    defaultText: "Subtle"
  };
  _exports.LINK_SUBTLE = LINK_SUBTLE;
  const LINK_EMPHASIZED = {
    key: "LINK_EMPHASIZED",
    defaultText: "Emphasized"
  };
  _exports.LINK_EMPHASIZED = LINK_EMPHASIZED;
  const LIST_ITEM_POSITION = {
    key: "LIST_ITEM_POSITION",
    defaultText: "List item {0} of {1}"
  };
  _exports.LIST_ITEM_POSITION = LIST_ITEM_POSITION;
  const LIST_ITEM_SELECTED = {
    key: "LIST_ITEM_SELECTED",
    defaultText: "Selected"
  };
  _exports.LIST_ITEM_SELECTED = LIST_ITEM_SELECTED;
  const LIST_ITEM_NOT_SELECTED = {
    key: "LIST_ITEM_NOT_SELECTED",
    defaultText: "Not Selected"
  };
  _exports.LIST_ITEM_NOT_SELECTED = LIST_ITEM_NOT_SELECTED;
  const LIST_ITEM_GROUP_HEADER = {
    key: "LIST_ITEM_GROUP_HEADER",
    defaultText: "Group Header"
  };
  _exports.LIST_ITEM_GROUP_HEADER = LIST_ITEM_GROUP_HEADER;
  const ARIA_LABEL_LIST_ITEM_CHECKBOX = {
    key: "ARIA_LABEL_LIST_ITEM_CHECKBOX",
    defaultText: "Multiple Selection mode."
  };
  _exports.ARIA_LABEL_LIST_ITEM_CHECKBOX = ARIA_LABEL_LIST_ITEM_CHECKBOX;
  const ARIA_LABEL_LIST_ITEM_RADIO_BUTTON = {
    key: "ARIA_LABEL_LIST_ITEM_RADIO_BUTTON",
    defaultText: "Item Selection."
  };
  _exports.ARIA_LABEL_LIST_ITEM_RADIO_BUTTON = ARIA_LABEL_LIST_ITEM_RADIO_BUTTON;
  const ARIA_LABEL_LIST_SELECTABLE = {
    key: "ARIA_LABEL_LIST_SELECTABLE",
    defaultText: "Contains Selectable Items"
  };
  _exports.ARIA_LABEL_LIST_SELECTABLE = ARIA_LABEL_LIST_SELECTABLE;
  const ARIA_LABEL_LIST_MULTISELECTABLE = {
    key: "ARIA_LABEL_LIST_MULTISELECTABLE",
    defaultText: "Contains Multi-Selectable Items"
  };
  _exports.ARIA_LABEL_LIST_MULTISELECTABLE = ARIA_LABEL_LIST_MULTISELECTABLE;
  const ARIA_LABEL_LIST_DELETABLE = {
    key: "ARIA_LABEL_LIST_DELETABLE",
    defaultText: "Contains Deletable Items"
  };
  _exports.ARIA_LABEL_LIST_DELETABLE = ARIA_LABEL_LIST_DELETABLE;
  const MESSAGE_STRIP_CLOSE_BUTTON = {
    key: "MESSAGE_STRIP_CLOSE_BUTTON",
    defaultText: "Information Bar Close"
  };
  _exports.MESSAGE_STRIP_CLOSE_BUTTON = MESSAGE_STRIP_CLOSE_BUTTON;
  const MESSAGE_STRIP_CLOSABLE = {
    key: "MESSAGE_STRIP_CLOSABLE",
    defaultText: "Closable"
  };
  _exports.MESSAGE_STRIP_CLOSABLE = MESSAGE_STRIP_CLOSABLE;
  const MESSAGE_STRIP_ERROR = {
    key: "MESSAGE_STRIP_ERROR",
    defaultText: "Error Information Bar"
  };
  _exports.MESSAGE_STRIP_ERROR = MESSAGE_STRIP_ERROR;
  const MESSAGE_STRIP_WARNING = {
    key: "MESSAGE_STRIP_WARNING",
    defaultText: "Warning Information Bar"
  };
  _exports.MESSAGE_STRIP_WARNING = MESSAGE_STRIP_WARNING;
  const MESSAGE_STRIP_SUCCESS = {
    key: "MESSAGE_STRIP_SUCCESS",
    defaultText: "Success Information Bar"
  };
  _exports.MESSAGE_STRIP_SUCCESS = MESSAGE_STRIP_SUCCESS;
  const MESSAGE_STRIP_INFORMATION = {
    key: "MESSAGE_STRIP_INFORMATION",
    defaultText: "Information Bar"
  };
  _exports.MESSAGE_STRIP_INFORMATION = MESSAGE_STRIP_INFORMATION;
  const MULTICOMBOBOX_DIALOG_OK_BUTTON = {
    key: "MULTICOMBOBOX_DIALOG_OK_BUTTON",
    defaultText: "OK"
  };
  _exports.MULTICOMBOBOX_DIALOG_OK_BUTTON = MULTICOMBOBOX_DIALOG_OK_BUTTON;
  const VALUE_STATE_ERROR_ALREADY_SELECTED = {
    key: "VALUE_STATE_ERROR_ALREADY_SELECTED",
    defaultText: "This value is already selected."
  };
  _exports.VALUE_STATE_ERROR_ALREADY_SELECTED = VALUE_STATE_ERROR_ALREADY_SELECTED;
  const MULTIINPUT_ROLEDESCRIPTION_TEXT = {
    key: "MULTIINPUT_ROLEDESCRIPTION_TEXT",
    defaultText: "Multi Value Input"
  };
  _exports.MULTIINPUT_ROLEDESCRIPTION_TEXT = MULTIINPUT_ROLEDESCRIPTION_TEXT;
  const MULTIINPUT_SHOW_MORE_TOKENS = {
    key: "MULTIINPUT_SHOW_MORE_TOKENS",
    defaultText: "{0} More"
  };
  _exports.MULTIINPUT_SHOW_MORE_TOKENS = MULTIINPUT_SHOW_MORE_TOKENS;
  const PANEL_ICON = {
    key: "PANEL_ICON",
    defaultText: "Expand/Collapse"
  };
  _exports.PANEL_ICON = PANEL_ICON;
  const RANGE_SLIDER_ARIA_DESCRIPTION = {
    key: "RANGE_SLIDER_ARIA_DESCRIPTION",
    defaultText: "Range"
  };
  _exports.RANGE_SLIDER_ARIA_DESCRIPTION = RANGE_SLIDER_ARIA_DESCRIPTION;
  const RANGE_SLIDER_START_HANDLE_DESCRIPTION = {
    key: "RANGE_SLIDER_START_HANDLE_DESCRIPTION",
    defaultText: "Left handle"
  };
  _exports.RANGE_SLIDER_START_HANDLE_DESCRIPTION = RANGE_SLIDER_START_HANDLE_DESCRIPTION;
  const RANGE_SLIDER_END_HANDLE_DESCRIPTION = {
    key: "RANGE_SLIDER_END_HANDLE_DESCRIPTION",
    defaultText: "Right handle"
  };
  _exports.RANGE_SLIDER_END_HANDLE_DESCRIPTION = RANGE_SLIDER_END_HANDLE_DESCRIPTION;
  const RATING_INDICATOR_TOOLTIP_TEXT = {
    key: "RATING_INDICATOR_TOOLTIP_TEXT",
    defaultText: "Rating"
  };
  _exports.RATING_INDICATOR_TOOLTIP_TEXT = RATING_INDICATOR_TOOLTIP_TEXT;
  const RATING_INDICATOR_TEXT = {
    key: "RATING_INDICATOR_TEXT",
    defaultText: "Rating Indicator"
  };
  _exports.RATING_INDICATOR_TEXT = RATING_INDICATOR_TEXT;
  const RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON = {
    key: "RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON",
    defaultText: "Decline"
  };
  _exports.RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON = RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON;
  const SEGMENTEDBUTTON_ARIA_DESCRIPTION = {
    key: "SEGMENTEDBUTTON_ARIA_DESCRIPTION",
    defaultText: "Segmented button group"
  };
  _exports.SEGMENTEDBUTTON_ARIA_DESCRIPTION = SEGMENTEDBUTTON_ARIA_DESCRIPTION;
  const SEGMENTEDBUTTON_ARIA_DESCRIBEDBY = {
    key: "SEGMENTEDBUTTON_ARIA_DESCRIBEDBY",
    defaultText: "Press SPACE or ENTER to select an item"
  };
  _exports.SEGMENTEDBUTTON_ARIA_DESCRIBEDBY = SEGMENTEDBUTTON_ARIA_DESCRIBEDBY;
  const SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION = {
    key: "SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION",
    defaultText: "Segmented button"
  };
  _exports.SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION = SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION;
  const SLIDER_ARIA_DESCRIPTION = {
    key: "SLIDER_ARIA_DESCRIPTION",
    defaultText: "Slider handle"
  };
  _exports.SLIDER_ARIA_DESCRIPTION = SLIDER_ARIA_DESCRIPTION;
  const LOAD_MORE_TEXT = {
    key: "LOAD_MORE_TEXT",
    defaultText: "More"
  };
  _exports.LOAD_MORE_TEXT = LOAD_MORE_TEXT;
  const TABLE_HEADER_ROW_INFORMATION = {
    key: "TABLE_HEADER_ROW_INFORMATION",
    defaultText: "Header Row 1 of {0}"
  };
  _exports.TABLE_HEADER_ROW_INFORMATION = TABLE_HEADER_ROW_INFORMATION;
  const TABLE_ROW_POSITION = {
    key: "TABLE_ROW_POSITION",
    defaultText: "{0} of {1}"
  };
  _exports.TABLE_ROW_POSITION = TABLE_ROW_POSITION;
  const TABLE_GROUP_ROW_ARIA_LABEL = {
    key: "TABLE_GROUP_ROW_ARIA_LABEL",
    defaultText: "Group header row."
  };
  _exports.TABLE_GROUP_ROW_ARIA_LABEL = TABLE_GROUP_ROW_ARIA_LABEL;
  const ARIA_LABEL_ROW_SELECTION = {
    key: "ARIA_LABEL_ROW_SELECTION",
    defaultText: "Item selection"
  };
  _exports.ARIA_LABEL_ROW_SELECTION = ARIA_LABEL_ROW_SELECTION;
  const ARIA_LABEL_SELECT_ALL_CHECKBOX = {
    key: "ARIA_LABEL_SELECT_ALL_CHECKBOX",
    defaultText: "Select All Rows"
  };
  _exports.ARIA_LABEL_SELECT_ALL_CHECKBOX = ARIA_LABEL_SELECT_ALL_CHECKBOX;
  const ARIA_LABEL_EMPTY_CELL = {
    key: "ARIA_LABEL_EMPTY_CELL",
    defaultText: "Empty"
  };
  _exports.ARIA_LABEL_EMPTY_CELL = ARIA_LABEL_EMPTY_CELL;
  const TAB_ARIA_DESIGN_POSITIVE = {
    key: "TAB_ARIA_DESIGN_POSITIVE",
    defaultText: "Positive"
  };
  _exports.TAB_ARIA_DESIGN_POSITIVE = TAB_ARIA_DESIGN_POSITIVE;
  const TAB_ARIA_DESIGN_NEGATIVE = {
    key: "TAB_ARIA_DESIGN_NEGATIVE",
    defaultText: "Negative"
  };
  _exports.TAB_ARIA_DESIGN_NEGATIVE = TAB_ARIA_DESIGN_NEGATIVE;
  const TAB_ARIA_DESIGN_CRITICAL = {
    key: "TAB_ARIA_DESIGN_CRITICAL",
    defaultText: "Critical"
  };
  _exports.TAB_ARIA_DESIGN_CRITICAL = TAB_ARIA_DESIGN_CRITICAL;
  const TAB_ARIA_DESIGN_NEUTRAL = {
    key: "TAB_ARIA_DESIGN_NEUTRAL",
    defaultText: "Neutral"
  };
  _exports.TAB_ARIA_DESIGN_NEUTRAL = TAB_ARIA_DESIGN_NEUTRAL;
  const TAB_SPLIT_ROLE_DESCRIPTION = {
    key: "TAB_SPLIT_ROLE_DESCRIPTION",
    defaultText: "Tab with subitems"
  };
  _exports.TAB_SPLIT_ROLE_DESCRIPTION = TAB_SPLIT_ROLE_DESCRIPTION;
  const TABCONTAINER_NEXT_ICON_ACC_NAME = {
    key: "TABCONTAINER_NEXT_ICON_ACC_NAME",
    defaultText: "Next"
  };
  _exports.TABCONTAINER_NEXT_ICON_ACC_NAME = TABCONTAINER_NEXT_ICON_ACC_NAME;
  const TABCONTAINER_PREVIOUS_ICON_ACC_NAME = {
    key: "TABCONTAINER_PREVIOUS_ICON_ACC_NAME",
    defaultText: "Previous"
  };
  _exports.TABCONTAINER_PREVIOUS_ICON_ACC_NAME = TABCONTAINER_PREVIOUS_ICON_ACC_NAME;
  const TABCONTAINER_OVERFLOW_MENU_TITLE = {
    key: "TABCONTAINER_OVERFLOW_MENU_TITLE",
    defaultText: "Overflow Menu"
  };
  _exports.TABCONTAINER_OVERFLOW_MENU_TITLE = TABCONTAINER_OVERFLOW_MENU_TITLE;
  const TABCONTAINER_END_OVERFLOW = {
    key: "TABCONTAINER_END_OVERFLOW",
    defaultText: "More"
  };
  _exports.TABCONTAINER_END_OVERFLOW = TABCONTAINER_END_OVERFLOW;
  const TABCONTAINER_POPOVER_CANCEL_BUTTON = {
    key: "TABCONTAINER_POPOVER_CANCEL_BUTTON",
    defaultText: "Cancel"
  };
  _exports.TABCONTAINER_POPOVER_CANCEL_BUTTON = TABCONTAINER_POPOVER_CANCEL_BUTTON;
  const TABCONTAINER_SUBTABS_DESCRIPTION = {
    key: "TABCONTAINER_SUBTABS_DESCRIPTION",
    defaultText: "Press down arrow key to open subitems menu"
  };
  _exports.TABCONTAINER_SUBTABS_DESCRIPTION = TABCONTAINER_SUBTABS_DESCRIPTION;
  const TEXTAREA_CHARACTERS_LEFT = {
    key: "TEXTAREA_CHARACTERS_LEFT",
    defaultText: "{0} characters remaining"
  };
  _exports.TEXTAREA_CHARACTERS_LEFT = TEXTAREA_CHARACTERS_LEFT;
  const TEXTAREA_CHARACTERS_EXCEEDED = {
    key: "TEXTAREA_CHARACTERS_EXCEEDED",
    defaultText: "{0} characters over limit"
  };
  _exports.TEXTAREA_CHARACTERS_EXCEEDED = TEXTAREA_CHARACTERS_EXCEEDED;
  const TIMEPICKER_HOURS_LABEL = {
    key: "TIMEPICKER_HOURS_LABEL",
    defaultText: "Hours"
  };
  _exports.TIMEPICKER_HOURS_LABEL = TIMEPICKER_HOURS_LABEL;
  const TIMEPICKER_MINUTES_LABEL = {
    key: "TIMEPICKER_MINUTES_LABEL",
    defaultText: "Minutes"
  };
  _exports.TIMEPICKER_MINUTES_LABEL = TIMEPICKER_MINUTES_LABEL;
  const TIMEPICKER_SECONDS_LABEL = {
    key: "TIMEPICKER_SECONDS_LABEL",
    defaultText: "Seconds"
  };
  _exports.TIMEPICKER_SECONDS_LABEL = TIMEPICKER_SECONDS_LABEL;
  const TIMEPICKER_SUBMIT_BUTTON = {
    key: "TIMEPICKER_SUBMIT_BUTTON",
    defaultText: "OK"
  };
  _exports.TIMEPICKER_SUBMIT_BUTTON = TIMEPICKER_SUBMIT_BUTTON;
  const TIMEPICKER_CANCEL_BUTTON = {
    key: "TIMEPICKER_CANCEL_BUTTON",
    defaultText: "Cancel"
  };
  _exports.TIMEPICKER_CANCEL_BUTTON = TIMEPICKER_CANCEL_BUTTON;
  const TIMEPICKER_INPUT_DESCRIPTION = {
    key: "TIMEPICKER_INPUT_DESCRIPTION",
    defaultText: "Time Input"
  };
  _exports.TIMEPICKER_INPUT_DESCRIPTION = TIMEPICKER_INPUT_DESCRIPTION;
  const DATETIME_PICKER_DATE_BUTTON = {
    key: "DATETIME_PICKER_DATE_BUTTON",
    defaultText: "Date"
  };
  _exports.DATETIME_PICKER_DATE_BUTTON = DATETIME_PICKER_DATE_BUTTON;
  const DATETIME_PICKER_TIME_BUTTON = {
    key: "DATETIME_PICKER_TIME_BUTTON",
    defaultText: "Time"
  };
  _exports.DATETIME_PICKER_TIME_BUTTON = DATETIME_PICKER_TIME_BUTTON;
  const TOKEN_ARIA_DELETABLE = {
    key: "TOKEN_ARIA_DELETABLE",
    defaultText: "Deletable"
  };
  _exports.TOKEN_ARIA_DELETABLE = TOKEN_ARIA_DELETABLE;
  const TOKENIZER_ARIA_CONTAIN_TOKEN = {
    key: "TOKENIZER_ARIA_CONTAIN_TOKEN",
    defaultText: "No Tokens"
  };
  _exports.TOKENIZER_ARIA_CONTAIN_TOKEN = TOKENIZER_ARIA_CONTAIN_TOKEN;
  const TOKENIZER_ARIA_CONTAIN_ONE_TOKEN = {
    key: "TOKENIZER_ARIA_CONTAIN_ONE_TOKEN",
    defaultText: "Contains 1 token"
  };
  _exports.TOKENIZER_ARIA_CONTAIN_ONE_TOKEN = TOKENIZER_ARIA_CONTAIN_ONE_TOKEN;
  const TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS = {
    key: "TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS",
    defaultText: "Contains {0} tokens"
  };
  _exports.TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS = TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS;
  const TOKENIZER_ARIA_LABEL = {
    key: "TOKENIZER_ARIA_LABEL",
    defaultText: "Tokenizer"
  };
  _exports.TOKENIZER_ARIA_LABEL = TOKENIZER_ARIA_LABEL;
  const TOKENIZER_POPOVER_REMOVE = {
    key: "TOKENIZER_POPOVER_REMOVE",
    defaultText: "Remove"
  };
  _exports.TOKENIZER_POPOVER_REMOVE = TOKENIZER_POPOVER_REMOVE;
  const TREE_ITEM_ARIA_LABEL = {
    key: "TREE_ITEM_ARIA_LABEL",
    defaultText: "Tree Item"
  };
  _exports.TREE_ITEM_ARIA_LABEL = TREE_ITEM_ARIA_LABEL;
  const TREE_ITEM_EXPAND_NODE = {
    key: "TREE_ITEM_EXPAND_NODE",
    defaultText: "Expand Node"
  };
  _exports.TREE_ITEM_EXPAND_NODE = TREE_ITEM_EXPAND_NODE;
  const TREE_ITEM_COLLAPSE_NODE = {
    key: "TREE_ITEM_COLLAPSE_NODE",
    defaultText: "Collapse Node"
  };
  _exports.TREE_ITEM_COLLAPSE_NODE = TREE_ITEM_COLLAPSE_NODE;
  const VALUE_STATE_TYPE_ERROR = {
    key: "VALUE_STATE_TYPE_ERROR",
    defaultText: "Value State Error"
  };
  _exports.VALUE_STATE_TYPE_ERROR = VALUE_STATE_TYPE_ERROR;
  const VALUE_STATE_TYPE_WARNING = {
    key: "VALUE_STATE_TYPE_WARNING",
    defaultText: "Value State Warning"
  };
  _exports.VALUE_STATE_TYPE_WARNING = VALUE_STATE_TYPE_WARNING;
  const VALUE_STATE_TYPE_SUCCESS = {
    key: "VALUE_STATE_TYPE_SUCCESS",
    defaultText: "Value State Success"
  };
  _exports.VALUE_STATE_TYPE_SUCCESS = VALUE_STATE_TYPE_SUCCESS;
  const VALUE_STATE_TYPE_INFORMATION = {
    key: "VALUE_STATE_TYPE_INFORMATION",
    defaultText: "Value State Information"
  };
  _exports.VALUE_STATE_TYPE_INFORMATION = VALUE_STATE_TYPE_INFORMATION;
  const VALUE_STATE_ERROR = {
    key: "VALUE_STATE_ERROR",
    defaultText: "Invalid entry"
  };
  _exports.VALUE_STATE_ERROR = VALUE_STATE_ERROR;
  const VALUE_STATE_WARNING = {
    key: "VALUE_STATE_WARNING",
    defaultText: "Warning issued"
  };
  _exports.VALUE_STATE_WARNING = VALUE_STATE_WARNING;
  const VALUE_STATE_INFORMATION = {
    key: "VALUE_STATE_INFORMATION",
    defaultText: "Informative entry"
  };
  _exports.VALUE_STATE_INFORMATION = VALUE_STATE_INFORMATION;
  const VALUE_STATE_SUCCESS = {
    key: "VALUE_STATE_SUCCESS",
    defaultText: "Entry successfully validated"
  };
  _exports.VALUE_STATE_SUCCESS = VALUE_STATE_SUCCESS;
  const CALENDAR_HEADER_NEXT_BUTTON = {
    key: "CALENDAR_HEADER_NEXT_BUTTON",
    defaultText: "Next"
  };
  _exports.CALENDAR_HEADER_NEXT_BUTTON = CALENDAR_HEADER_NEXT_BUTTON;
  const CALENDAR_HEADER_PREVIOUS_BUTTON = {
    key: "CALENDAR_HEADER_PREVIOUS_BUTTON",
    defaultText: "Previous"
  };
  _exports.CALENDAR_HEADER_PREVIOUS_BUTTON = CALENDAR_HEADER_PREVIOUS_BUTTON;
  const DAY_PICKER_WEEK_NUMBER_TEXT = {
    key: "DAY_PICKER_WEEK_NUMBER_TEXT",
    defaultText: "Week number"
  };
  _exports.DAY_PICKER_WEEK_NUMBER_TEXT = DAY_PICKER_WEEK_NUMBER_TEXT;
  const DAY_PICKER_NON_WORKING_DAY = {
    key: "DAY_PICKER_NON_WORKING_DAY",
    defaultText: "Non-Working Day"
  };
  _exports.DAY_PICKER_NON_WORKING_DAY = DAY_PICKER_NON_WORKING_DAY;
  const DAY_PICKER_TODAY = {
    key: "DAY_PICKER_TODAY",
    defaultText: "Today"
  };
  _exports.DAY_PICKER_TODAY = DAY_PICKER_TODAY;
  const MONTH_PICKER_DESCRIPTION = {
    key: "MONTH_PICKER_DESCRIPTION",
    defaultText: "Month Picker"
  };
  _exports.MONTH_PICKER_DESCRIPTION = MONTH_PICKER_DESCRIPTION;
  const YEAR_PICKER_DESCRIPTION = {
    key: "YEAR_PICKER_DESCRIPTION",
    defaultText: "Year Picker"
  };
  _exports.YEAR_PICKER_DESCRIPTION = YEAR_PICKER_DESCRIPTION;
  const STEPINPUT_DEC_ICON_TITLE = {
    key: "STEPINPUT_DEC_ICON_TITLE",
    defaultText: "Decrease"
  };
  _exports.STEPINPUT_DEC_ICON_TITLE = STEPINPUT_DEC_ICON_TITLE;
  const STEPINPUT_INC_ICON_TITLE = {
    key: "STEPINPUT_INC_ICON_TITLE",
    defaultText: "Increase"
  };
  _exports.STEPINPUT_INC_ICON_TITLE = STEPINPUT_INC_ICON_TITLE;
  const SPLIT_BUTTON_DESCRIPTION = {
    key: "SPLIT_BUTTON_DESCRIPTION",
    defaultText: "Split Button"
  };
  _exports.SPLIT_BUTTON_DESCRIPTION = SPLIT_BUTTON_DESCRIPTION;
  const SPLIT_BUTTON_KEYBOARD_HINT = {
    key: "SPLIT_BUTTON_KEYBOARD_HINT",
    defaultText: "Press Space or Enter to trigger default action and Alt + Arrow Down or F4 to trigger arrow action"
  };
  _exports.SPLIT_BUTTON_KEYBOARD_HINT = SPLIT_BUTTON_KEYBOARD_HINT;
  const MENU_BACK_BUTTON_ARIA_LABEL = {
    key: "MENU_BACK_BUTTON_ARIA_LABEL",
    defaultText: "Back"
  };
  _exports.MENU_BACK_BUTTON_ARIA_LABEL = MENU_BACK_BUTTON_ARIA_LABEL;
  const MENU_CLOSE_BUTTON_ARIA_LABEL = {
    key: "MENU_CLOSE_BUTTON_ARIA_LABEL",
    defaultText: "Decline"
  };
  _exports.MENU_CLOSE_BUTTON_ARIA_LABEL = MENU_CLOSE_BUTTON_ARIA_LABEL;
  const DIALOG_HEADER_ARIA_ROLE_DESCRIPTION = {
    key: "DIALOG_HEADER_ARIA_ROLE_DESCRIPTION",
    defaultText: "Interactive Header"
  };
  _exports.DIALOG_HEADER_ARIA_ROLE_DESCRIPTION = DIALOG_HEADER_ARIA_ROLE_DESCRIPTION;
  const DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE = {
    key: "DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE",
    defaultText: "Use Shift+Arrow keys to resize"
  };
  _exports.DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE = DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE;
  const DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE = {
    key: "DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE",
    defaultText: "Use Arrow keys to move"
  };
  _exports.DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE = DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE;
  const DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE = {
    key: "DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE",
    defaultText: "Use Arrow keys to move, Shift+Arrow keys to resize"
  };
  _exports.DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE = DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE;
  const LABEL_COLON = {
    key: "LABEL_COLON",
    defaultText: ":"
  };
  _exports.LABEL_COLON = LABEL_COLON;
});