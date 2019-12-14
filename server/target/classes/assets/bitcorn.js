'use strict';



;define("bitcorn/app", ["exports", "bitcorn/resolver", "ember-load-initializers", "bitcorn/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});

;define("bitcorn/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});

;define("bitcorn/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});

;define("bitcorn/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});

;define("bitcorn/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});

;define("bitcorn/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});

;define("bitcorn/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});

;define("bitcorn/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});

;define("bitcorn/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});

;define("bitcorn/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});

;define("bitcorn/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});

;define("bitcorn/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});

;define("bitcorn/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});

;define("bitcorn/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});

;define("bitcorn/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});

;define("bitcorn/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});

;define("bitcorn/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});

;define("bitcorn/components/bs-dropdown/menu/link-to", ["exports", "ember-bootstrap/components/bs-dropdown/menu/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});

;define("bitcorn/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});

;define("bitcorn/components/bs-form", ["exports", "ember-bootstrap-changeset-validations/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});

;define("bitcorn/components/bs-form/element", ["exports", "ember-bootstrap-changeset-validations/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});

;define("bitcorn/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});

;define("bitcorn/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});

;define("bitcorn/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});

;define("bitcorn/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});

;define("bitcorn/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});

;define("bitcorn/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});

;define("bitcorn/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});

;define("bitcorn/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});

;define("bitcorn/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});

;define("bitcorn/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});

;define("bitcorn/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});

;define("bitcorn/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});

;define("bitcorn/components/bs-nav/link-to", ["exports", "ember-bootstrap/components/bs-nav/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});

;define("bitcorn/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // @ts-ignore
  class BsNavbar extends _bsNavbar.default {
    didInsertElement() {
      const itemsContainer = document.getElementById("headbar");
      const menuItems = itemsContainer.getElementsByClassName("menu-button");

      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function () {
          for (let j = 0; j < menuItems.length; j++) {
            menuItems[j].className = menuItems[j].className.replace(" dark-font", "");
          } // @ts-ignore


          this.className += " dark-font";
        });
      }
    }

  }

  _exports.default = BsNavbar;
});

;define("bitcorn/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});

;define("bitcorn/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});

;define("bitcorn/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});

;define("bitcorn/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});

;define("bitcorn/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});

;define("bitcorn/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});

;define("bitcorn/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});

;define("bitcorn/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});

;define("bitcorn/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});

;define("bitcorn/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});

;define("bitcorn/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});

;define("bitcorn/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});

;define("bitcorn/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});

;define("bitcorn/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});

;define("bitcorn/components/files-lister", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class FilesLister extends Ember.Component {}

  _exports.default = FilesLister;
});

;define("bitcorn/components/listings/graphic-listing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ListingsGraphicListing extends Ember.Component {}

  _exports.default = ListingsGraphicListing;
});

;define("bitcorn/components/listings/program-listing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ListingsProgramListing extends Ember.Component {}

  _exports.default = ListingsProgramListing;
});

;define("bitcorn/components/settings-modal", ["exports", "@babel/runtime/helpers/esm/decorate", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/get", "@ember-decorators/object", "bitcorn/system/settings/cookies", "bitcorn/system/defaults"], function (_exports, _decorate2, _getPrototypeOf2, _get2, _object, _cookies, _defaults) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let SettingsModal = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    class SettingsModal extends _EmberComponent {
      constructor(...args) {
        super(...args);

        _initialize(this);
      }

    }

    return {
      F: SettingsModal,
      d: [{
        kind: "field",
        key: "isSnowing",
        value: void 0
      }, {
        kind: "method",
        key: "init",
        value: // @ts-ignore
        function init() {
          (0, _get2.default)((0, _getPrototypeOf2.default)(SettingsModal.prototype), "init", this).call(this);
          this.isSnowing = _cookies.default.isSnowing;
        }
      }, {
        kind: "method",
        key: "setCookie",
        value: function setCookie(name, value, numDaysExpiring) {
          const date = new Date();
          date.setTime(date.getTime() + numDaysExpiring * 24 * 60 * 60 * 1000);
          const expires = "expires=" + date.toUTCString();
          document.cookie = name + "=" + value + ";" + expires;
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "changeSnowState",
        value: function changeSnowState() {
          // @ts-ignore
          this.set("isSnowing", !this.get("isSnowing")); // @ts-ignore

          if (this.get("isSnowing")) {
            this.setCookie(_defaults.default.Cookies.Particles.SNOW, true, _defaults.default.Cookies.NUM_DAYS_EXPIRING);
          } else {
            this.setCookie(_defaults.default.Cookies.Particles.SNOW, false, _defaults.default.Cookies.NUM_DAYS_EXPIRING);
          }
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "reset",
        value: function reset() {// nop
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "reload",
        value: function reload() {
          // @ts-ignore
          this.get("deactivateSettings")();
          location.reload();
        }
      }]
    };
  }, Ember.Component);
  _exports.default = SettingsModal;
});

;define("bitcorn/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});

;define("bitcorn/config/environment.d", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = config;
  /**
   * Type declarations for
   *    import config from './config/environment'
   *
   * For now these need to be managed by the developer
   * since different ember addons can materialize new entries.
   */

  _exports.default = _default;
});

;define("bitcorn/controllers/application", ["exports", "@babel/runtime/helpers/esm/decorate", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/get", "@ember-decorators/object"], function (_exports, _decorate2, _getPrototypeOf2, _get2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let Application = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    class Application extends _EmberController {
      constructor(...args) {
        super(...args);

        _initialize(this);
      }

    }

    return {
      F: Application,
      d: [{
        kind: "field",
        key: "settingsActive",
        value: void 0
      }, {
        kind: "method",
        key: "init",
        value: // @ts-ignore
        function init() {
          (0, _get2.default)((0, _getPrototypeOf2.default)(Application.prototype), "init", this).call(this);
          this.settingsActive = false;
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "activateSettings",
        value: function activateSettings() {
          // @ts-ignore
          this.set("settingsActive", true);
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "deactivateSettings",
        value: function deactivateSettings() {
          // @ts-ignore
          this.set("settingsActive", false);
        }
      }]
    };
  }, Ember.Controller); // DO NOT DELETE: this is how TypeScript knows how to look up your controllers.

  _exports.default = Application;
});

;define("bitcorn/controllers/contact", ["exports", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object", "bitcorn/system/exceptions/status-codes", "bitcorn/system/communication/content-types", "bitcorn/system/communication/socket", "bitcorn/validations/contact"], function (_exports, _decorate2, _object, _statusCodes, _contentTypes, _socket, _contact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let Contact = (0, _decorate2.default)(null, function (_initialize, _EmberController$ext) {
    class Contact extends _EmberController$ext {
      constructor(...args) {
        super(...args);

        _initialize(this);
      }

    }

    return {
      F: Contact,
      d: [{
        kind: "method",
        decorators: [_object.action],
        key: "submit",
        value: function submit(changeset) {
          if (changeset.isInvalid || changeset.isPristine) {
            return;
          }

          this.post(changeset);
        }
      }, {
        kind: "method",
        key: "post",
        value: function post(changeset) {
          _socket.default.post(_contentTypes.default.TEXT_PLAIN, {
            email: changeset.get("email"),
            message: changeset.get("message")
          }, "api/contact", this.statusHandler, [changeset]);
        }
      }, {
        kind: "method",
        key: "statusHandler",
        value: function statusHandler() {
          let params = this;
          let statusCode = params[0];
          let changesetData = params[1];

          if (statusCode === _statusCodes.StatusCodes.CREATED) {
            changesetData.rollback();
          } else {// TODO: show error message
          }
        }
      }]
    };
  }, Ember.Controller.extend({
    Validation: _contact.default
  })); // DO NOT DELETE: this is how TypeScript knows how to look up your controllers.

  _exports.default = Contact;
});

;define("bitcorn/controllers/downloads/graphics/index", ["exports", "bitcorn/system/exceptions/status-codes", "bitcorn/system/communication/socket"], function (_exports, _statusCodes, _socket) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class DownloadsGraphicsIndex extends Ember.Controller {
    init() {
      super.init();
      this.setModel();
    }

    setModel() {
      _socket.default.get("../api/graphics/vector-graphics", this.statusHandler, [this]);
    }

    statusHandler() {
      let params = this;
      let statusCode = params[0];
      let response = params[1];
      let self = params[2];

      if (statusCode === _statusCodes.StatusCodes.OK) {
        self.set("model", JSON.parse(response));
      } else {// TODO: show error message
      }
    }

  } // DO NOT DELETE: this is how TypeScript knows how to look up your controllers.


  _exports.default = DownloadsGraphicsIndex;
});

;define("bitcorn/helpers/app-version", ["exports", "bitcorn/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});

;define("bitcorn/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});

;define("bitcorn/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(_exports, "eq", {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});

;define("bitcorn/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});

;define("bitcorn/helpers/changeset-set", ["exports", "ember-changeset/helpers/changeset-set"], function (_exports, _changesetSet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _changesetSet.default;
    }
  });
  Object.defineProperty(_exports, "changesetSet", {
    enumerable: true,
    get: function () {
      return _changesetSet.changesetSet;
    }
  });
});

;define("bitcorn/helpers/changeset", ["exports", "ember-changeset-validations/helpers/changeset"], function (_exports, _changeset) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _changeset.default;
    }
  });
  Object.defineProperty(_exports, "changeset", {
    enumerable: true,
    get: function () {
      return _changeset.changeset;
    }
  });
});

;define("bitcorn/helpers/format-date", ["exports", "bitcorn/system/defaults/symbols"], function (_exports, _symbols) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.formatDate = formatDate;
  _exports.default = void 0;

  function formatDate([milliseconds]) {
    const date = new Date(milliseconds);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // '+1' is correct

    const day = date.getDate();
    return year + _symbols.default.DATE_SEPARATOR + month + _symbols.default.DATE_SEPARATOR + day;
  }

  var _default = Ember.Helper.helper(formatDate);

  _exports.default = _default;
});

;define("bitcorn/helpers/format-tags", ["exports", "bitcorn/system/defaults/symbols"], function (_exports, _symbols) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.formatTags = formatTags;
  _exports.default = void 0;

  function formatTags([values]) {
    return values.split(_symbols.default.SEPARATOR).join(_symbols.default.TAGS_SEPARATOR);
  }

  var _default = Ember.Helper.helper(formatTags);

  _exports.default = _default;
});

;define("bitcorn/helpers/html-safe", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.htmlSafe = htmlSafe;
  _exports.default = void 0;

  function htmlSafe([text]) {
    return Ember.String.htmlSafe(text);
  }

  var _default = Ember.Helper.helper(htmlSafe);

  _exports.default = _default;
});

;define("bitcorn/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});

;define("bitcorn/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});

;define("bitcorn/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});

;define("bitcorn/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});

;define("bitcorn/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "bitcorn/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});

;define("bitcorn/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});

;define("bitcorn/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});

;define("bitcorn/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});

;define("bitcorn/initializers/export-application-global", ["exports", "bitcorn/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});

;define("bitcorn/initializers/load-bootstrap-config", ["exports", "bitcorn/config/environment", "ember-bootstrap/config"], function (_exports, _environment, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* container, application */
  {
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});

;define("bitcorn/initializers/settings-cookies", ["exports", "bitcorn/system/settings/cookies", "bitcorn/system/defaults"], function (_exports, _cookies, _defaults) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function getCookieValue(name) {
    name = name + "=";
    const cookieParams = document.cookie.split(";");

    for (let i = 0; i < cookieParams.length; i++) {
      const param = cookieParams[i];

      if (param.indexOf(name) === 0) {
        return JSON.parse(param.substring(name.length, param.length));
      }
    } // @ts-ignore


    return undefined;
  }

  function initialize() {
    _cookies.default.isSnowing = getCookieValue(_defaults.default.Cookies.Particles.SNOW);
  }

  var _default = {
    before: "snow-starter",
    initialize
  };
  _exports.default = _default;
});

;define("bitcorn/initializers/snow-starter", ["exports", "bitcorn/system/settings/cookies", "bitcorn/view/effects/snow"], function (_exports, _cookies, _snow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    if (!Ember.testing && _cookies.default.isSnowing) {
      const effect = new _snow.default();
      effect.start();
    }
  }

  var _default = {
    after: "settings-cookies",
    initialize
  };
  _exports.default = _default;
});

;define("bitcorn/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});

;define("bitcorn/logic/math/randomizer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Randomizer {
    static getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min); // since using pixels, only integers
    }

  }

  _exports.default = Randomizer;
});

;define("bitcorn/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});

;define("bitcorn/router", ["exports", "bitcorn/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route("home");
    this.route("downloads", function () {
      this.route("graphics", function () {});
      this.route('programs', function () {
        this.route('bioinformatics');
        this.route('cross-dating');
        this.route('res');
      });
    });
    this.route("tutorials");
    this.route("about", function () {
      this.route("authors");
      this.route("page");
    });
    this.route("contact");
    this.route("imprint");
    this.route("privacy");
    this.route('downloads');
    this.route('tutorials');
  });
  var _default = Router;
  _exports.default = _default;
});

;define("bitcorn/routes/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class About extends Ember.Route {// anything which *must* be merged to prototype here
  }

  _exports.default = About;
});

;define("bitcorn/routes/about/authors", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class AboutAuthors extends Ember.Route {// anything which *must* be merged to prototype here
  }

  _exports.default = AboutAuthors;
});

;define("bitcorn/routes/about/page", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class AboutPage extends Ember.Route {// anything which *must* be merged to prototype here
  }

  _exports.default = AboutPage;
});

;define("bitcorn/routes/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Contact extends Ember.Route {
    model() {
      return {
        email: "",
        message: ""
      };
    }

  }

  _exports.default = Contact;
});

;define("bitcorn/routes/downloads", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Downloads extends Ember.Route.extend({// anything which *must* be merged to prototype here
  }) {// normal class body definition here
  }

  _exports.default = Downloads;
});

;define("bitcorn/routes/downloads/graphics", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CreationsGraphics extends Ember.Route {}

  _exports.default = CreationsGraphics;
});

;define("bitcorn/routes/downloads/graphics/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Index extends Ember.Route {}

  _exports.default = Index;
});

;define("bitcorn/routes/downloads/programs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CreationsPrograms extends Ember.Route {}

  _exports.default = CreationsPrograms;
});

;define("bitcorn/routes/downloads/programs/bioinformatics", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CreationsProgramsBioinformatics extends Ember.Route {}

  _exports.default = CreationsProgramsBioinformatics;
});

;define("bitcorn/routes/downloads/programs/cross-dating", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CreationsProgramsCrossDating extends Ember.Route {}

  _exports.default = CreationsProgramsCrossDating;
});

;define("bitcorn/routes/downloads/programs/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Index extends Ember.Route {}

  _exports.default = Index;
});

;define("bitcorn/routes/downloads/programs/res", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CreationsProgramsRes extends Ember.Route {}

  _exports.default = CreationsProgramsRes;
});

;define("bitcorn/routes/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Home extends Ember.Route {}

  _exports.default = Home;
});

;define("bitcorn/routes/imprint", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Imprint extends Ember.Route {// anything which *must* be merged to prototype here
  }

  _exports.default = Imprint;
});

;define("bitcorn/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Index extends Ember.Route {
    beforeModel() {
      this.transitionTo("home");
    }

  }

  _exports.default = Index;
});

;define("bitcorn/routes/privacy", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Privacy extends Ember.Route {// anything which *must* be merged to prototype here
  }

  _exports.default = Privacy;
});

;define("bitcorn/routes/tutorials", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Tutorials extends Ember.Route.extend({// anything which *must* be merged to prototype here
  }) {// normal class body definition here
  }

  _exports.default = Tutorials;
});

;define("bitcorn/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});

;define("bitcorn/system/communication/content-types", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    TEXT_PLAIN: "text/plain; charset=UTF-8"
  };
  _exports.default = _default;
});

;define("bitcorn/system/communication/socket", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Socket {
    static post(contentType, data, url, handler, params) {
      let request = new XMLHttpRequest();
      request.open("POST", url);
      request.setRequestHeader("Content-Type", contentType);

      request.onload = () => {
        handler.call([request.status, ...params]);
      };

      request.send(JSON.stringify(data));
    }

    static get(url, handler, params) {
      let request = new XMLHttpRequest();
      request.open("GET", url);

      request.onreadystatechange = () => {
        handler.call([request.status, request.responseText, ...params]);
      };

      request.send();
    }

  }

  _exports.default = Socket;
});

;define("bitcorn/system/defaults", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    Cookies: {
      Particles: {
        SNOW: "snow"
      },
      NUM_DAYS_EXPIRING: 30
    },
    Effects: {
      PERCENT_SNOWFLAKES: 1 / 14440,
      SNOW_SPEED: 1
    },
    Lengths: {
      Minimum: {
        MAIL: 10,
        MESSAGE: 15
      }
    }
  };
  _exports.default = _default;
});

;define("bitcorn/system/defaults/colors", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    Particle: {
      SNOWFLAKE: "#ffffff"
    }
  };
  _exports.default = _default;
});

;define("bitcorn/system/defaults/messages", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    COOKIES_EXPIRED: "<strong>Successfully Deleted</strong> Cookies have been expired. Reload the page!"
  };
  _exports.default = _default;
});

;define("bitcorn/system/defaults/regex", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    AllowedPattern: {
      MESSAGE: "^[0-9A-Za-zÀ-ÖØ-öø-ÿ\-\.\:\,\;\?\!\(\)\ \'\"\r\n]+$"
    }
  };
  _exports.default = _default;
});

;define("bitcorn/system/defaults/symbols", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    DATE_SEPARATOR: "-",
    EMPTY: "",
    SEPARATOR: ",",
    SPACE: " ",
    TAGS_SEPARATOR: ", "
  };
  _exports.default = _default;
});

;define("bitcorn/system/exceptions/status-codes", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.StatusCodes = void 0;
  let StatusCodes;
  _exports.StatusCodes = StatusCodes;

  (function (StatusCodes) {
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    StatusCodes[StatusCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
  })(StatusCodes || (_exports.StatusCodes = StatusCodes = {}));
});

;define("bitcorn/system/exceptions/status-messenger", ["exports", "bitcorn/system/exceptions/status-codes", "bitcorn/system/exceptions/status-registration"], function (_exports, _statusCodes, _statusRegistration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.StatusMessenger = void 0;

  class StatusMessenger {
    static createMessage(statusCode, className) {
      // 2xx Success
      if (statusCode === _statusCodes.StatusCodes.CREATED) {
        switch (className) {
          case _statusRegistration.StatusRegistration.CONTACT:
            StatusMessenger.showMessage("", "");
            break;

          default:
            break;
        }
      }
    } // @ts-ignore


    static showMessage(message, type) {}

  }

  _exports.StatusMessenger = StatusMessenger;
});

;define("bitcorn/system/exceptions/status-registration", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.StatusRegistration = void 0;
  let StatusRegistration;
  _exports.StatusRegistration = StatusRegistration;

  (function (StatusRegistration) {
    StatusRegistration["CONTACT"] = "Contact";
  })(StatusRegistration || (_exports.StatusRegistration = StatusRegistration = {}));
});

;define("bitcorn/system/settings/cookies", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Cookies {}

  _exports.default = Cookies;
  Cookies.isSnowing = void 0;
});

;define("bitcorn/templates/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "nx7mpOxI",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/about.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/about/authors", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "JBVxPR+8",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"col-12 col-xl-6 mr-auto ml-auto mt-5\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[7,\"span\"],[11,\"class\",\"fas fa-users\"],[9],[10],[0,\" About Authors\"],[10],[0,\"\\n  \"],[7,\"hr\"],[11,\"class\",\"underline\"],[9],[10],[0,\"\\n  \"],[7,\"h3\"],[9],[0,\"Alex Mattheis\"],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n    I was born in the early 90s and interested in robots since 1996/1997.\\n    The reason therefore was presumably among others,\\n    \"],[7,\"a\"],[11,\"href\",\"https://www.youtube.com/watch?v=TYerSLXmjQU\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Robocop\"],[10],[0,\", a classic\\n    \"],[7,\"a\"],[11,\"href\",\"https://en.wikipedia.org/wiki/Nintendo_Entertainment_System\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"NES\"],[10],[0,\" game\\n    character. In the year 2000, my family got our first computer and since then I wanted become a programmer\\n    to create my own games. Around 2008, we also got an internet connection. In this time, I started with computer\\n    languages, HTML, and CSS, but also, I got interested in creative photo- and video-editing software\\n    I've found in the internet e.g.\\n  \"],[10],[0,\"\\n  \"],[7,\"ul\"],[9],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"https://en.wikipedia.org/wiki/Adobe_After_Effects\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Adobe After Effects\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"li\"],[9],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"https://en.wikipedia.org/wiki/Photoshop\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Adobe Photoshop\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"li\"],[9],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"https://en.wikipedia.org/wiki/Adobe_Premiere_Pro\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Adobe Premiere\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"li\"],[9],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"https://en.wikipedia.org/wiki/Vegas_Pro\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Sony Vegas\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"li\"],[9],[0,\"...\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n    Sadly, the stuff was not for free, only 30 days trial versions. And so, I started learning\\n    free open source programs like\\n  \"],[10],[0,\"\\n  \"],[7,\"ul\"],[9],[0,\"\\n    \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://www.blender.org/\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Blender 2.49\"],[10],[10],[0,\"\\n    \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://www.gimp.org/\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Gimp 2.6\"],[10],[10],[0,\"\\n    \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://inkscape.org/\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Incscape 0.47\"],[10],[10],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"...\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n    by the help of YouTube tutorials (e.g.\\n    \"],[7,\"a\"],[11,\"href\",\"https://www.youtube.com/channel/UC4HBuWzyB-J04WmTh3xQwHw\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"jxTutorials\"],[10],[0,\")\\n    and sites like \"],[7,\"a\"],[11,\"href\",\"http://blenderhilfe.de\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"BlenderHilfe\"],[10],[0,\",\\n    \"],[7,\"a\"],[11,\"href\",\"https://www.blenderguru.com/\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Blender Guru\"],[10],[0,\"\\n    or Screencasters Heathenx. Apart from that, I'm today a studied programmer with interest in\\n    visualization of algorithms, graphics, and computer languages. I know lots of programming languages\\n    and I own a master's degree in computer science.\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/about/authors.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/about/page", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "CSN7hsn9",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"col-12 col-lg-6 mr-auto ml-auto mt-5\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[7,\"span\"],[11,\"class\",\"far fa-newspaper\"],[9],[10],[0,\" About Page\"],[10],[0,\"\\n  \"],[7,\"hr\"],[11,\"class\",\"underline\"],[9],[10],[0,\"\\n  \"],[7,\"img\"],[11,\"class\",\"embedded-logo img-fluid\"],[11,\"src\",\"../assets/images/logo.png\"],[11,\"alt\",\"Bitcorn Logo\"],[9],[10],[0,\"\\n\\n  \"],[7,\"p\"],[9],[0,\"\\n    Bitcorn is an interactive learning platform whose development\\n    started between October and November 2018. The idea for the name and the\\n    content of that website, I get while taking a walk at midday in the beginning of November 2018.\\n    Before, I just played around and created a website without a real idea in my head.\\n    Now, it is a webpage designed mainly for computer algorithms, but also maths and other stuff.\\n    Interactive means in the case of Bitcorn, that you watch a video or presentation\\n    and can play afterwards with the presented algorithm on the website.\\n    But additionally, you can also download free\\n    \"],[7,\"a\"],[11,\"href\",\"https://creativecommons.org/publicdomain/zero/1.0/deed.de\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"CC0-licence\"],[10],[0,\"\\n    graphics, models, and fonts or get creative programming ideas in the downloads section.\\n    So, with Bitcorn you get full support for your programming career. Is this not cool?\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/about/page.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "nrLDfqhW",
    "block": "{\"symbols\":[\"navbar\",\"nav\",\"dropdown\",\"menu\",\"dropdown\",\"dropdown\",\"menu\"],\"statements\":[[7,\"div\"],[11,\"class\",\"background\"],[11,\"id\",\"top\"],[9],[0,\"\\n  \"],[5,\"bs-navbar\",[],[[],[]],{\"statements\":[[0,\"\\n    \"],[7,\"a\"],[11,\"href\",\"/\"],[11,\"class\",\"navbar-brand\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"logo\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[6,[24,1,[\"toggle\"]],[],[[],[]]],[0,\" \"],[0,\"\\n    \"],[6,[24,1,[\"content\"]],[],[[],[]],{\"statements\":[[0,\"\\n      \"],[6,[24,1,[\"nav\"]],[[13,\"id\",\"headbar\"],[13,\"class\",\"ml-auto\"]],[[],[]],{\"statements\":[[0,\"\\n\"],[0,\"        \"],[6,[24,2,[\"item\"]],[[13,\"class\",\"button\"]],[[],[]],{\"statements\":[[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"link-to\"]],\"expected `nav.link-to` to be a contextual component but found a string. Did you mean `(component nav.link-to)`? ('bitcorn/templates/application.hbs' @ L11:C36) \"],null],\"home\"],null,{\"statements\":[[0,\"Home\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n\\n\"],[0,\"        \"],[5,\"bs-dropdown\",[[13,\"class\",\"dropdown\"]],[[],[]],{\"statements\":[[0,\"\\n          \"],[6,[24,6,[\"button\"]],[[13,\"class\",\"menu-button\"]],[[],[]],{\"statements\":[[0,\"Downloads\"]],\"parameters\":[]}],[0,\"\\n\\n          \"],[6,[24,6,[\"menu\"]],[],[[\"@class\"],[\"menu\"]],{\"statements\":[[0,\"\\n            \"],[6,[24,7,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n              \"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,7,[\"link-to\"]],\"expected `menu.link-to` to be a contextual component but found a string. Did you mean `(component menu.link-to)`? ('bitcorn/templates/application.hbs' @ L19:C17) \"],null],\"downloads.graphics\"],[[\"class\"],[\"download-link\"]],{\"statements\":[[0,\"Graphics\"]],\"parameters\":[]},null],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n\\n            \"],[6,[24,7,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n              \"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,7,[\"link-to\"]],\"expected `menu.link-to` to be a contextual component but found a string. Did you mean `(component menu.link-to)`? ('bitcorn/templates/application.hbs' @ L23:C17) \"],null],\"downloads.programs\"],[[\"class\"],[\"download-link\"]],{\"statements\":[[0,\"Programs\"]],\"parameters\":[]},null],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n          \"]],\"parameters\":[7]}],[0,\"\\n        \"]],\"parameters\":[6]}],[0,\"\\n\\n\"],[0,\"        \"],[5,\"bs-dropdown\",[[13,\"class\",\"dropdown\"]],[[],[]],{\"statements\":[[0,\"\\n          \"],[6,[24,5,[\"button\"]],[[13,\"class\",\"menu-button\"]],[[],[]],{\"statements\":[[0,\"Tutorials\"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[5]}],[0,\"\\n\\n\"],[0,\"        \"],[5,\"bs-dropdown\",[[13,\"class\",\"dropdown\"]],[[],[]],{\"statements\":[[0,\"\\n          \"],[6,[24,3,[\"button\"]],[[13,\"class\",\"menu-button\"]],[[],[]],{\"statements\":[[0,\"About\"]],\"parameters\":[]}],[0,\"\\n\\n          \"],[6,[24,3,[\"menu\"]],[],[[\"@class\"],[\"menu\"]],{\"statements\":[[0,\"\\n            \"],[6,[24,4,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n              \"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,4,[\"link-to\"]],\"expected `menu.link-to` to be a contextual component but found a string. Did you mean `(component menu.link-to)`? ('bitcorn/templates/application.hbs' @ L39:C17) \"],null],\"about.authors\"],[[\"class\"],[\"about-link\"]],{\"statements\":[[0,\"Authors\"]],\"parameters\":[]},null],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n\\n            \"],[6,[24,4,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n              \"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,4,[\"link-to\"]],\"expected `menu.link-to` to be a contextual component but found a string. Did you mean `(component menu.link-to)`? ('bitcorn/templates/application.hbs' @ L43:C17) \"],null],\"about.page\"],[[\"class\"],[\"about-link\"]],{\"statements\":[[0,\"Page\"]],\"parameters\":[]},null],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n          \"]],\"parameters\":[4]}],[0,\"\\n        \"]],\"parameters\":[3]}],[0,\"\\n\\n\"],[0,\"        \"],[6,[24,2,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"menu-button outsider\"],[12,\"onclick\",[29,\"action\",[[24,0,[]],\"activateSettings\"],null]],[9],[7,\"span\"],[11,\"class\",\"fas fa-cog\"],[9],[10],[10],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"]],\"parameters\":[2]}],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n  \"]],\"parameters\":[1]}],[0,\"\\n\\n  \"],[1,[23,\"outlet\"],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"footer\"],[9],[0,\"\\n  \"],[7,\"span\"],[11,\"id\",\"liabilities\"],[9],[0,\"\\n    \"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"contact\",\"contact\"]],{\"statements\":[[0,\"Contact\"]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"imprint\",\"imprint\"]],{\"statements\":[[0,\"Imprint\"]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"privacy\",\"privacy\"]],{\"statements\":[[0,\"Privacy\"]],\"parameters\":[]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"span\"],[11,\"id\",\"author\"],[9],[0,\"\\n    Copyright © 2019 Alexander Mattheis\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[25,[\"settingsActive\"]]],null,{\"statements\":[[0,\"  \"],[5,\"settings-modal\",[],[[\"@deactivateSettings\"],[[29,\"action\",[[24,0,[]],\"deactivateSettings\"],null]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/application.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});

;define("bitcorn/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});

;define("bitcorn/templates/components/files-lister", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RCRTwidY",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"p\"],[9],[0,\"\\n  \"],[1,[29,\"input\",null,[[\"class\",\"placeholder\"],[\"search\",\"Type in a tags..\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[15,1,[[25,[\"results\"]]]],[0,\"\\n\\n\"],[7,\"br\"],[9],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/components/files-lister.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/components/listings/graphic-listing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hX2fiao+",
    "block": "{\"symbols\":[\"@image\",\"@title\",\"@author\",\"@description\",\"@tags\",\"@licence\",\"@path\",\"@date\"],\"statements\":[[7,\"div\"],[11,\"class\",\"card col-10 col-sm-7 col-md-12 ml-auto mr-auto\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-4 p-2 pl-3\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"class\",\"w-75\"],[11,\"alt\",\"Image\"],[12,\"src\",[24,1,[]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-8 p-1\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"card-block\"],[9],[0,\"\\n        \"],[7,\"h4\"],[11,\"class\",\"card-title\"],[9],[0,\"\\n          \"],[1,[24,2,[]],false],[0,\"\\n          \"],[7,\"small\"],[9],[0,\"by \"],[1,[24,3,[]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"listing-left-column\"],[9],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"card-text small\"],[9],[0,\"\\n            \"],[7,\"b\"],[9],[0,\"Description\"],[10],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n            \"],[1,[24,4,[]],false],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"p\"],[11,\"class\",\"card-text small\"],[9],[0,\"\\n            \"],[7,\"b\"],[9],[0,\"Tags\"],[10],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n            \"],[1,[24,5,[]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"listing-right-column\"],[9],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"card-text small\"],[9],[0,\"\\n            \"],[7,\"b\"],[9],[0,\"Licence\"],[10],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n            \"],[1,[29,\"html-safe\",[[24,6,[]]],null],false],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"p\"],[11,\"class\",\"card-text small\"],[9],[0,\"\\n            \"],[7,\"b\"],[9],[0,\"Download\"],[10],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n            \"],[7,\"a\"],[11,\"class\",\"listing-anchor\"],[11,\"download\",\"\"],[12,\"href\",[24,7,[]]],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"fas fa-download\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"listing-date\"],[9],[0,\"(\"],[1,[24,8,[]],false],[0,\")\"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/components/listings/graphic-listing.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/components/listings/program-listing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "x4i1G0+K",
    "block": "{\"symbols\":[\"@imageName\",\"@imagePath\",\"@title\",\"@description\",\"@link\"],\"statements\":[[7,\"div\"],[11,\"class\",\"card col-10 col-sm-7 col-md-12 ml-auto mr-auto\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-4\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"class\",\"w-100\"],[12,\"alt\",[24,1,[]]],[12,\"src\",[24,2,[]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-8\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"card-block\"],[9],[0,\"\\n        \"],[7,\"h4\"],[11,\"class\",\"card-title\"],[9],[1,[24,3,[]],false],[10],[0,\"\\n\\n        \"],[7,\"p\"],[11,\"class\",\"card-text\"],[9],[0,\"\\n          \"],[1,[29,\"html-safe\",[[24,4,[]]],null],false],[0,\"\\n        \"],[10],[0,\"\\n\\n\"],[4,\"link-to\",null,[[\"route\"],[[24,5,[]]]],{\"statements\":[[0,\"          \"],[7,\"btn\"],[11,\"class\",\"btn btn-primary\"],[9],[0,\"Read More\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/components/listings/program-listing.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/components/settings-modal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Td6AOeR5",
    "block": "{\"symbols\":[\"modal\"],\"statements\":[[4,\"bs-modal\",null,[[\"size\",\"onHidden\"],[\"lg\",[25,[\"deactivateSettings\"]]]],{\"statements\":[[0,\"  \"],[6,[24,1,[\"header\"]],[],[[],[]],{\"statements\":[[0,\"\\n    \"],[7,\"h3\"],[9],[7,\"span\"],[11,\"class\",\"fas fa-cog\"],[9],[10],[0,\" Settings\"],[10],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\\n  \"],[6,[24,1,[\"body\"]],[],[[],[]],{\"statements\":[[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n      Here you can change the page settings. Therefore, cookies are used.\\n      By changing an option \"],[7,\"b\"],[9],[0,\"you agree with the usage of cookies\"],[10],[0,\" on this page.\\n      You can change your opinion at any time by clicking on the Reset-button below.\\n      By doing so, all set cookies from this page are deleted.\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"label\"],[11,\"class\",\"settings-input\"],[11,\"for\",\"particles\"],[9],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Particles\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[1,[29,\"input\",null,[[\"class\",\"type\",\"id\",\"checked\",\"change\",\"tabindex\"],[\"input-text\",\"checkbox\",\"particles\",[25,[\"isSnowing\"]],[29,\"action\",[[24,0,[]],\"changeSnowState\"],null],-1]]],false],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\\n  \"],[6,[24,1,[\"footer\"]],[],[[],[]],{\"statements\":[[0,\"\\n    \"],[5,\"bs-button\",[[13,\"id\",\"reset\"],[13,\"class\",\"darker\"],[13,\"onClick\",[29,\"action\",[[24,0,[]],\"reset\"],null]]],[[\"@defaultText\",\"@type\",\"@buttonType\"],[\"Reset\",\"secondary\",\"button\"]]],[0,\"\\n    \"],[5,\"bs-button\",[[13,\"id\",\"apply\"],[13,\"onClick\",[29,\"action\",[[24,0,[]],\"reload\"],null]]],[[\"@defaultText\",\"@type\",\"@buttonType\"],[\"Apply\",\"primary\",\"button\"]]],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/components/settings-modal.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Skp3hwES",
    "block": "{\"symbols\":[\"deepCopy\",\"form\"],\"statements\":[[7,\"div\"],[11,\"class\",\"col-12 col-xl-6 mr-auto ml-auto mt-5\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[7,\"span\"],[11,\"class\",\"far fa-envelope\"],[9],[10],[0,\" Contact\"],[10],[0,\"\\n  \"],[7,\"hr\"],[11,\"class\",\"underline\"],[9],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n    Have you some feedback or you found a bug, mistake, whatever on my page and you want to report this?\\n    Then write me please a short message using the contact form below. No matter what, write me.\\n    I'll answer you soon and say \\\"Thank you!\\\" to you.\\n  \"],[10],[0,\"\\n\\n\"],[4,\"let\",[[29,\"changeset\",[[25,[\"model\"]],[25,[\"Validation\"]]],null]],null,{\"statements\":[[0,\"    \"],[5,\"bs-form\",[[13,\"onSubmit\",[29,\"action\",[[24,0,[]],\"submit\",[24,1,[]]],null]]],[[\"@model\",\"@formLayout\"],[[24,1,[]],\"horizontal\"]],{\"statements\":[[0,\"\\n      \"],[6,[24,2,[\"element\"]],[],[[\"@label\",\"@controlType\",\"@maxlength\",\"@placeholder\",\"@property\"],[\"Email\",\"text\",\"254\",\"Your e-mail address\",\"email\"]]],[0,\"\\n      \"],[6,[24,2,[\"element\"]],[[13,\"class\",\"message\"]],[[\"@label\",\"@maxlength\",\"@controlType\",\"@property\"],[\"Message\",\"1000\",\"textarea\",\"message\"]]],[0,\"\\n      \"],[5,\"bs-button\",[],[[\"@defaultText\",\"@type\",\"@buttonType\"],[\"Submit\",\"primary\",\"submit\"]]],[0,\"\\n    \"]],\"parameters\":[2]}],[0,\"\\n\"]],\"parameters\":[1]},null],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/contact.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/downloads", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tzPzxjjW",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/downloads.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/downloads/graphics", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/fPB2s+Y",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"col-12 col-xl-6 mr-auto ml-auto mt-5\"],[9],[0,\"\\n  \"],[1,[23,\"outlet\"],false],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/downloads/graphics.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/downloads/graphics/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "2bGuKOjU",
    "block": "{\"symbols\":[\"entry\"],\"statements\":[[7,\"h2\"],[9],[7,\"span\"],[11,\"class\",\"fas fa-paint-brush\"],[9],[10],[0,\" Graphics\"],[10],[0,\"\\n\"],[7,\"hr\"],[11,\"class\",\"underline\"],[9],[10],[0,\"\\n\\n\"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n  The following graphics are royality free. Therefore they have been released\\n  under the \"],[7,\"a\"],[11,\"href\",\"https://creativecommons.org/publicdomain/zero/1.0\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"CC0-licence\"],[10],[0,\"\\n  such that you can use them even for commercial purposes without considering any conditions.\\n  So, have fun using my graphics for free!\\n\"],[10],[0,\"\\n\\n\"],[5,\"files-lister\",[],[[],[]],{\"statements\":[[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n\"],[4,\"each\",[[25,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[5,\"listings/graphic-listing\",[],[[\"@author\",\"@date\",\"@description\",\"@image\",\"@licence\",\"@path\",\"@tags\",\"@title\"],[[24,1,[\"author\"]],[29,\"format-date\",[[24,1,[\"date\"]]],null],[24,1,[\"description\"]],[29,\"concat\",[[24,1,[\"imagePath\"]],[24,1,[\"imageName\"]]],null],[30,[\"<a href='\",[24,1,[\"licenceLink\"]],\"' target='_blank' rel='noopener'>\",[24,1,[\"licenceName\"]],\"</a>\"]],[29,\"concat\",[[24,1,[\"path\"]],[24,1,[\"elementName\"]]],null],[29,\"format-tags\",[[24,1,[\"tags\"]]],null],[24,1,[\"title\"]]]]],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/downloads/graphics/index.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/downloads/programs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "SsLIn9qo",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"col-12 col-xl-6 mr-auto ml-auto mt-5\"],[9],[0,\"\\n  \"],[1,[23,\"outlet\"],false],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/downloads/programs.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/downloads/programs/bioinformatics", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0oWmjQgn",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[9],[0,\"Bioinformatics Algorithms\"],[10],[0,\"\\n\"],[7,\"hr\"],[11,\"class\",\"underline\"],[9],[10],[0,\"\\n\"],[7,\"h4\"],[9],[0,\"2018-11-17 - Alexander Mattheis\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n  I have implemented with JavaScript and\\n  the \"],[7,\"a\"],[11,\"href\",\"https://knockoutjs.com/\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Knockout\"],[10],[0,\" framework\\n  visually more elaborate versions of algorithms known in Bioinformatics, when I studied computer science.\\n  The resulting project has been integrated in the RNA-Playground of\\n  \"],[7,\"a\"],[11,\"href\",\"http://rna.informatik.uni-freiburg.de/Teaching/\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"this\"],[10],[0,\" website.\\n\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n  The project is also available on GitHub,\\n  such that if you like you can play around, download and extend it like you want.\\n  In the video below, you will find all information you need, so details about the implementation\\n  and a live-presentation of the project.\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"embed-responsive embed-responsive-16by9\"],[9],[0,\"\\n  \"],[7,\"iframe\"],[11,\"class\",\"embed-responsive-item\"],[11,\"src\",\"https://www.youtube-nocookie.com/embed/mRXmV0J1nAA\"],[11,\"allow\",\"autoplay; encrypted-media\"],[11,\"allowfullscreen\",\"\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n  The software was written with the help of JavaScript, HTML5 and CSS3.\\n\"],[10],[0,\"\\n\\n\"],[7,\"b\"],[9],[0,\"Did you get interested?\"],[10],[0,\"\\n\"],[7,\"a\"],[11,\"href\",\"https://github.com/BackofenLab/RNA-Playground\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"RNA-Playground\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/downloads/programs/bioinformatics.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/downloads/programs/cross-dating", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "dvw61RjF",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[9],[0,\"Cross-Dating\"],[10],[0,\"\\n\"],[7,\"hr\"],[11,\"class\",\"underline\"],[9],[10],[0,\"\\n\"],[7,\"h4\"],[9],[0,\"2018-11-17 - Alexander Mattheis\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n  The correct dates of wood pieces can be determined by annual rings.\\n  Therefore, one can just measure the widths or maximum densities of individual rings\\n  and then shift them in a chronology with known dates to determine the exact calendar year.\\n  But such established approaches do not work well with short pieces,\\n  i.e. with wood pieces containing only a few annual rings.\\n  My new approach which I have developed in cooperation with Dr. Martin Raden\\n  and PD Dr. Hans-Peter Kahle, however, is different.\\n  It has been shown that it can accurately determine the date for even shorter wood pieces correctly.\\n  Therefore, it uses series of densities within a ring.\\n  By this it becomes one of the most accurate, existing approaches in dendrochronology, today!\\n\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n  Information about how this grandiose approach works,\\n  you see below in the presentation which I held on the fifth of September 2018.\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"embed-responsive embed-responsive-16by9\"],[9],[0,\"\\n  \"],[7,\"iframe\"],[11,\"class\",\"embed-responsive-item\"],[11,\"src\",\"https://www.youtube-nocookie.com/embed/p4GZlmuU7d8\"],[11,\"allow\",\"autoplay; encrypted-media\"],[11,\"allowfullscreen\",\"\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n  The software was written with the help of the statistical programming language\\n  \"],[7,\"a\"],[11,\"href\",\"https://www.r-project.org/\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"R\"],[10],[0,\" and has been released\\n  under the \"],[7,\"a\"],[11,\"href\",\"https://opensource.org/licenses/MIT\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"MIT licence\"],[10],[0,\",\\n  such that even a commercial use is still possible.\\n\"],[10],[0,\"\\n\\n\"],[7,\"b\"],[9],[0,\"Did you get interested?\"],[10],[0,\" \"],[7,\"a\"],[11,\"href\",\"https://github.com/AlexanderMattheis/Cross-Dating\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Cross-Dating\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/downloads/programs/cross-dating.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/downloads/programs/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "jekeHu3I",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[9],[7,\"span\"],[11,\"class\",\"fas fa-laptop-code\"],[9],[10],[0,\" Programs\"],[10],[0,\"\\n\"],[7,\"hr\"],[11,\"class\",\"underline\"],[9],[10],[0,\"\\n\\n\"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n  The following programs are open source, the code has been therefore released inter alia\\n  under the \"],[7,\"a\"],[11,\"href\",\"http://unlicense.org/\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Unlicense-licence\"],[10],[0,\" such\\n  that you can use and adapt the programs even for commercial purposes without considering any conditions.\\n  Many programs can be executed under Linux, Mac, as well as Windows.\\n  So, please give them a try on your favourite operating system!\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[5,\"listings/program-listing\",[],[[\"@description\",\"@imageName\",\"@imagePath\",\"@link\",\"@title\"],[\"Visually more elaborate versions of algorithms known from Bioinformatics\\n                  implemented with JavaScript and the\\n                  <a href='https://knockoutjs.com/' target='_blank' rel='noopener'>Knockout</a> framework.\\n                  The resulting project has been integrated in the RNA-Playground of\\n                  <a href='http://rna.informatik.uni-freiburg.de/Teaching/' target='_blank' rel='noopener'>this</a> website.\",\"Bioinformatics Algorithms Logo\",\"../assets/images/preview/cards/bioinformatics_algorithms_logo.png\",\"downloads.programs.bioinformatics\",\"Bioinformatics Algorithms\"]]],[0,\"\\n\\n  \"],[5,\"listings/program-listing\",[],[[\"@description\",\"@imageName\",\"@imagePath\",\"@link\",\"@title\"],[\"Newly developed cross-dating algorithm for density series from wood samples.\\n                  This approach determines the date for even shorter wood pieces correctly than with given methods before\\n                  in dendrochronology before.\",\"Cross-Dating Logo\",\"../assets/images/preview/cards/cross_dating_logo.png\",\"downloads.programs.cross-dating\",\"Cross-Dating\"]]],[0,\"\\n\\n  \"],[5,\"listings/program-listing\",[],[[\"@description\",\"@imageName\",\"@imagePath\",\"@link\",\"@title\"],[\"Are you constantly stressed by your operating system? You are constantly in dispute?\\n                  Then I have something for you,\\n                  <a href='https://github.com/AlexanderMattheis/Relationship-Enhancement-Scripts' target='_blank' rel='noopener'>RES</a>\\n                  for a better, trustworthy cooperation between humans and machines.\",\"RES Logo\",\"../assets/images/preview/cards/res_logo.png\",\"downloads.programs.res\",\"Relationship-Enhancement-Scripts\"]]],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/downloads/programs/index.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/downloads/programs/res", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "s2w70HRv",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[9],[0,\"Relationship-Enhancement-Scripts\"],[10],[0,\"\\n\"],[7,\"hr\"],[11,\"class\",\"underline\"],[9],[10],[0,\"\\n\"],[7,\"h4\"],[9],[0,\"2018-11-17 - Alexander Mattheis\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n  Are you constantly stressed by your operating system? You are constantly in dispute?\\n  Then I have something for you, the\\n  \"],[7,\"a\"],[11,\"href\",\"https://github.com/AlexanderMattheis/Relationship-Enhancement-Scripts\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"\\n    Relationship-Enhancement-Scripts\\n  \"],[10],[0,\"\\n  for a better, trustworthy cooperation between humans and machines.\\n  That scripts should simplify your life and give you more control over your operating system.\\n  All scripts can be directly executed under Windows 10 Version 1703 without any installation of further software.\\n\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n  \"],[7,\"b\"],[9],[0,\"Hint:\"],[10],[0,\" You can install \"],[7,\"a\"],[11,\"href\",\"https://github.com/PowerShell/PowerShell\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"Powershell\"],[10],[0,\"\\n  on your Mac and Linux system, too. But the scripts were written with Powershell 5.1+\\n  and designed for Windows 10 Version 1703 up to 1803. So, I cannot guarantee that they will work\\n  on other systems than Windows 10 Version 1703 up to 1803.\\n\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n  You find all scripts on my GitHub-repository. But a few are also described below:\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h3\"],[9],[0,\"Dated Folder Creator\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"\\n  Creates a number of folders with the current date and a count with padding\\n  e.g. \"],[7,\"em\"],[9],[0,\"2018-10-14-01, 2018-10-14-02, ..., 2018-10-14-12\"],[10],[0,\".\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h3\"],[9],[0,\"Files Lister\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"\\n  Lists all files from current directory with different settings.\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h3\"],[9],[0,\"Processes Lister\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"\\n  Lists the names from active processes.\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h3\"],[9],[0,\"Services Lister\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"\\n  Lists the names from services.\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h3\"],[9],[0,\"Windows 10 Configurator\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"\\n  Configures Windows 10 Version 1703 up to 1803 after a reinstallation:\\n  \"],[7,\"ul\"],[11,\"class\",\"small-text\"],[9],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"activates the classic photo viewer\"],[10],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"activates name extensions\"],[10],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"activates thin taskbar with small taskbar icons\"],[10],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"removes shortcut name extensions e.g. \\\"- Shortcut\\\"\"],[10],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"sets the taskbar glom-level i.e. taskbar buttons only combined if necessary\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"b\"],[9],[0,\"Did you get interested?\"],[10],[0,\"\\n\"],[7,\"a\"],[11,\"href\",\"https://github.com/AlexanderMattheis/Relationship-Enhancement-Scripts\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"\\n  Relationship-Enhancement-Scripts\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/downloads/programs/res.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "jw0ZTHSD",
    "block": "{\"symbols\":[\"car\"],\"statements\":[[5,\"bs-carousel\",[],[[],[]],{\"statements\":[[0,\"\\n  \"],[6,[24,1,[\"slide\"]],[],[[],[]],{\"statements\":[[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"assets/images/preview/popcorn.jpg\"],[11,\"alt\",\"Bitcorn start-screen.\"],[9],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"carousel-caption\"],[9],[0,\"\\n      \"],[7,\"h1\"],[11,\"class\",\"display-2\"],[9],[0,\"Bitcorn\"],[10],[0,\"\\n      \"],[7,\"h3\"],[9],[0,\"Interactive, Free Learning Platform\"],[10],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn btn-outline-light btn-lg\"],[11,\"type\",\"button\"],[9],[0,\"\\n        VIEW DEMO\\n      \"],[10],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\"],[\"tutorials\"]],{\"statements\":[[0,\"        \"],[7,\"button\"],[11,\"class\",\"btn btn-primary btn-lg\"],[11,\"type\",\"button\"],[9],[0,\"\\n          Get Started\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\\n  \"],[6,[24,1,[\"slide\"]],[],[[],[]],{\"statements\":[[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"assets/images/preview/bananas.jpg\"],[11,\"alt\",\"Preview 2\"],[9],[10],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\\n  \"],[6,[24,1,[\"slide\"]],[],[[],[]],{\"statements\":[[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"assets/images/preview/barley_field.jpg\"],[11,\"alt\",\"Preview 3\"],[9],[10],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[1]}],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"container-fluid\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row jumbotron\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-9 col-lg-9 col-xl-10\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"lead\"],[9],[0,\"\\n        Bitcorn is a modern learning platform\\n        whose development started between October and November 2018.\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-3 col-lg-3 col-xl-2\"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\"],[\"about.page\"]],{\"statements\":[[0,\"        \"],[7,\"button\"],[11,\"class\",\"btn btn-outline-secondary btn-lg\"],[11,\"type\",\"button\"],[9],[0,\"\\n          More About\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"latest\"],[11,\"class\",\"container-fluid row text-center\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col-12\"],[9],[0,\"\\n    \"],[7,\"h1\"],[11,\"class\",\"display-4\"],[9],[0,\"Latest Creations\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col-xl-6 ml-auto mr-auto\"],[9],[0,\"\\n    \"],[7,\"hr\"],[11,\"class\",\"overline\"],[9],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"lead\"],[9],[0,\"\\n      Thank you for visiting Bitcorn, the right place\\n      for developers! Have fun playing around with my\\n      latest creations you find below.\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"container-fluid row justify-content-center \"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"card col-6 col-md-3\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"class\",\"card-img-top\"],[11,\"src\",\"assets/images/preview/cards/bioinformatics_algorithms_logo.png\"],[11,\"alt\",\"Newest 1\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n      \"],[7,\"h4\"],[11,\"class\",\"card-title\"],[9],[0,\"Bioinformatics Algorithms\"],[10],[0,\"\\n\\n      \"],[7,\"p\"],[11,\"class\",\"card-text\"],[9],[0,\"\\n        Visually more elaborate versions of algorithms known from Bioinformatics.\\n      \"],[10],[0,\"\\n\\n\"],[4,\"link-to\",null,[[\"route\"],[\"downloads.programs.bioinformatics\"]],{\"statements\":[[0,\"        \"],[7,\"btn\"],[11,\"class\",\"btn btn-outline-secondary\"],[9],[0,\"More About\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"card col-6 col-md-3\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"class\",\"card-img-top\"],[11,\"src\",\"assets/images/preview/cards/cross_dating_logo.png\"],[11,\"alt\",\"Newest 2\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n      \"],[7,\"h4\"],[11,\"class\",\"card-title\"],[9],[0,\"Cross-Dating\"],[10],[0,\"\\n\\n      \"],[7,\"p\"],[11,\"class\",\"card-text\"],[9],[0,\"\\n        Newly developed cross-dating algorithm for density series from wood samples.\\n      \"],[10],[0,\"\\n\\n\"],[4,\"link-to\",null,[[\"route\"],[\"downloads.programs.cross-dating\"]],{\"statements\":[[0,\"        \"],[7,\"btn\"],[11,\"class\",\"btn btn-outline-secondary\"],[9],[0,\"More About\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"card col-6 col-md-3\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"class\",\"card-img-top\"],[11,\"src\",\"assets/images/preview/cards/res_logo.png\"],[11,\"alt\",\"Newest 3\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n      \"],[7,\"h4\"],[11,\"class\",\"card-title\"],[9],[0,\"RES\"],[10],[0,\"\\n\\n      \"],[7,\"p\"],[11,\"class\",\"card-text\"],[9],[0,\"\\n        Scripts for a better cooperation between humans and machines.\\n      \"],[10],[0,\"\\n\\n\"],[4,\"link-to\",null,[[\"route\"],[\"downloads.programs.res\"]],{\"statements\":[[0,\"        \"],[7,\"btn\"],[11,\"class\",\"btn btn-outline-secondary\"],[9],[0,\"More About\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"container-fluid padding\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row text-center padding\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-12\"],[9],[0,\"\\n      \"],[7,\"h2\"],[9],[0,\"Connect\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col-12 connections padding\"],[9],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"https://github.com/AlexanderMattheis\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[7,\"span\"],[11,\"class\",\"fab fa-github\"],[9],[10],[10],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"https://www.youtube.com/channel/UCsLtdlbI3Qyrjo9By0BWsZA\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[7,\"span\"],[11,\"class\",\"fab fa-youtube\"],[9],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/home.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/imprint", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "G0sapxOY",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"col-12 col-xl-6 mr-auto ml-auto mt-5\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[7,\"span\"],[11,\"class\",\"far fa-address-card\"],[9],[10],[0,\" Imprint\"],[10],[0,\"\\n  \"],[7,\"hr\"],[11,\"class\",\"underline\"],[9],[10],[0,\"\\n  Information according to § 5 TMG\\n  and responsible for the content according to § 55 par. 2 RStV is\\n\\n  \"],[7,\"p\"],[9],[0,\"\\n    [firstname] [surname]\"],[7,\"br\"],[9],[10],[0,\"\\n    [street] [number]\"],[7,\"br\"],[9],[10],[0,\"\\n    [zip code] [location]\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"p\"],[9],[0,\"\\n    Telephone: [telepone number]\"],[7,\"br\"],[9],[10],[0,\"\\n    E-Mail: \"],[7,\"a\"],[11,\"href\",\"mailto:\"],[9],[0,\"[E-Mail]\"],[10],[7,\"br\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"h3\"],[9],[0,\"Copyright\"],[10],[0,\"\\n  \"],[7,\"h4\"],[9],[0,\"Used fonts\"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    In addition to system fonts the following fonts are used on this website:\\n  \"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"Font:\"],[10],[0,\" Nova Mono\"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"Designer:\"],[10],[0,\" Wojciech Kalinowski\"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"Licence:\"],[10],[0,\" SIL Open Font License (\"],[7,\"a\"],[11,\"href\",\"https://opensource.org/licenses/OFL-1.1\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"https://opensource.org/licenses/OFL-1.1\"],[10],[0,\") \"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"Source:\"],[10],[0,\" \"],[7,\"a\"],[11,\"href\",\"https://fonts.google.com/\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"https://fonts.google.com/\"],[10],[0,\"  \"],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"Font:\"],[10],[0,\" Open Sans\"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"Designer:\"],[10],[0,\" Steve Matteson\"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"Licence:\"],[10],[0,\" Apache Licence Version 2.0 (\"],[7,\"a\"],[11,\"href\",\"http://www.apache.org/licenses/LICENSE-2.0\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"http://www.apache.org/licenses/LICENSE-2.0\"],[10],[0,\") \"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"Source:\"],[10],[0,\" \"],[7,\"a\"],[11,\"href\",\"https://fonts.google.com/\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[0,\"https://fonts.google.com/\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"h3\"],[9],[0,\"Disclaimer\"],[10],[0,\"\\n  \"],[7,\"h4\"],[9],[0,\"§ 1 Warning about content\"],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n    The author of this website does not guarantee the correctness, recentness and completeness\\n    of the provided information. When there is no gross negligence or intent,\\n    the author is not liable for possible damages, which arise due to the use of the offered information.\\n\\n    The right to change, extend or remove parts of the whole website\\n    without prior notice is explicitly reserved by the author. Thus, this website\\n    can also be removed again from the Internet at any time.\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"h4\"],[9],[0,\"§ 2 External Links\"],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n    This website also contains links to other websites (so-called External Links).\\n    The author of this website has checked the third-party websites\\n    for possible violations of the law when he has created the External Links.\\n    At that time, no violations of the law were evident for the author.\\n    But the author has no influence on the current\\n    and future contents of the External Links.\\n    That is the reason why the author hereby expressly dissociates himself\\n    from the contents of all External Links.\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/imprint.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/privacy", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NBn6QKmk",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"col-12 col-xl-6 mr-auto ml-auto mt-5\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[7,\"span\"],[11,\"class\",\"fas fa-user-secret\"],[9],[10],[0,\" Privacy\"],[10],[0,\"\\n  \"],[7,\"hr\"],[11,\"class\",\"underline\"],[9],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/privacy.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/templates/tutorials", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Rt42Ywaz",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/tutorials.hbs"
    }
  });

  _exports.default = _default;
});

;define("bitcorn/validations/contact", ["exports", "ember-changeset-validations/validators/index", "bitcorn/system/defaults", "bitcorn/system/defaults/regex"], function (_exports, _index, _defaults, _regex) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // @ts-ignore
  var _default = {
    email: [(0, _index.validatePresence)(true), (0, _index.validateLength)({
      min: _defaults.default.Lengths.Minimum.MAIL
    }), (0, _index.validateFormat)({
      type: "email"
    })],
    message: [(0, _index.validatePresence)(true), (0, _index.validateLength)({
      min: _defaults.default.Lengths.Minimum.MESSAGE
    }), (0, _index.validateFormat)({
      regex: _regex.default.AllowedPattern.MESSAGE
    })]
  };
  _exports.default = _default;
});

;define("bitcorn/validations/messages", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    invalid: "{description} has wrong format"
  };
  _exports.default = _default;
});

;define("bitcorn/view/effects/effect", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Effect {
    constructor() {
      this._callbackRequestID = void 0;
      // do not change the request id, it is defined as non-zero value
      this._callbackRequestID = 0; // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    }

    get callbackRequestID() {
      return this._callbackRequestID;
    }

    set callbackRequestID(value) {
      this._callbackRequestID = value;
    }

    start() {
      const effectsCanvas = document.querySelector("#effects");
      effectsCanvas.width = window.innerWidth;
      effectsCanvas.height = window.innerHeight;
      const canvasContext = effectsCanvas.getContext("2d");
      const canvasData = {
        context: canvasContext,
        width: effectsCanvas.width,
        height: effectsCanvas.height
      };
      this.init(canvasData);
      this.animate(canvasData);
      addEventListener("resize", () => {
        // resize canvas
        effectsCanvas.width = window.innerWidth;
        effectsCanvas.height = window.innerHeight; // stop last animation

        if (this.callbackRequestID !== 0) {
          window.cancelAnimationFrame(this.callbackRequestID);
        } // update
        // @ts-ignore


        canvasData.width = innerWidth; // @ts-ignore

        canvasData.height = innerHeight;
        this.init(canvasData);
        this.animate(canvasData);
      });
    }

  }

  _exports.default = Effect;
});

;define("bitcorn/view/effects/particle/snowflake", ["exports", "bitcorn/system/defaults/colors"], function (_exports, _colors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Snowflake {
    constructor(x, y, dy, radius) {
      this._x = void 0;
      this._y = void 0;
      this._dy = void 0;
      this._radius = void 0;
      this._x = x;
      this._y = y;
      this._dy = dy;
      this._radius = radius;
    }

    update(canvasData) {
      if (this._y + this._radius + this._dy > canvasData.height) {
        // reset snowflake
        this._y = 0;
      }

      this._y += this._dy;
    }

    draw(canvasData) {
      canvasData.context.beginPath();
      canvasData.context.arc(this._x, this._y, this._radius, 0, Math.PI * 2, false);
      canvasData.context.fillStyle = _colors.default.Particle.SNOWFLAKE;
      canvasData.context.fill();
      canvasData.context.closePath();
    }

  }

  _exports.default = Snowflake;
});

;define("bitcorn/view/effects/snow", ["exports", "bitcorn/system/defaults", "bitcorn/view/effects/effect", "bitcorn/logic/math/randomizer", "bitcorn/view/effects/particle/snowflake"], function (_exports, _defaults, _effect, _randomizer, _snowflake) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Snow extends _effect.default {
    constructor() {
      super();
      this._snowflakes = void 0;
      this._snowflakes = [];
    }

    get snowflakes() {
      return this._snowflakes;
    }

    set snowflakes(value) {
      this._snowflakes = value;
    }
    /**
     * @override
     */


    init(canvasData) {
      this.snowflakes = [];
      const numSnowFlakes = Math.floor(canvasData.width * canvasData.height * _defaults.default.Effects.PERCENT_SNOWFLAKES);

      for (let i = 0; i < numSnowFlakes; i++) {
        const radius = _randomizer.default.getRandomNumber(4, 8);

        const x = _randomizer.default.getRandomNumber(radius, canvasData.width - radius);

        const y = _randomizer.default.getRandomNumber(radius, canvasData.height - radius);

        const dy = _randomizer.default.getRandomNumber(1, 2);

        this.snowflakes.push(new _snowflake.default(x, y, dy, radius));
      }
    }
    /**
     * @override
     */


    animate(canvasData) {
      this.callbackRequestID = window.requestAnimationFrame(() => {
        this.animate(canvasData);
      });
      canvasData.context.clearRect(0, 0, canvasData.width, canvasData.height);

      for (let i = 0; i < this.snowflakes.length; i++) {
        this.snowflakes[i].update(canvasData);
        this.snowflakes[i].draw(canvasData);
      }
    }

  }

  _exports.default = Snow;
});

;

;define('bitcorn/config/environment', [], function() {
  var prefix = 'bitcorn';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("bitcorn/app")["default"].create({"name":"bitcorn","version":"3.1.0+d28c99fd"});
          }
        
//# sourceMappingURL=bitcorn.map
