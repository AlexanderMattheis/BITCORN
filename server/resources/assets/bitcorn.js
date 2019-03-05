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

;define("bitcorn/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
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

;define("bitcorn/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
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

;define("bitcorn/components/link-to-external", ["exports", "ember-engines/components/link-to-external-component"], function (_exports, _linkToExternalComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkToExternalComponent.default;
    }
  });
});

;define("bitcorn/components/settings-modal", ["exports", "@babel/runtime/helpers/esm/decorate", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/get", "@ember-decorators/object", "bitcorn/system/cookies", "bitcorn/system/defaults"], function (_exports, _decorate2, _getPrototypeOf2, _get2, _object, _cookies, _defaults) {
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
        key: "didInsertElement",
        value: function didInsertElement() {
          this.addSelectListener('#particles-select', this.setParticleType);
          this.addSelectListener('#music-select', this.setMusicType);
        }
      }, {
        kind: "method",
        key: "addSelectListener",
        value: function addSelectListener(id, listener) {
          const particlesSelector = document.querySelector(id);
          particlesSelector.addEventListener('change', listener);
        }
      }, {
        kind: "method",
        key: "setParticleType",
        value: function setParticleType(event) {
          const particleType = event.target.value;

          switch (particleType) {
            case 'snow':
              this.activateCookie(particleType);
              break;

            default:
              this.resetCookies(_defaults.default.Cookies.Particles);
          }
        }
      }, {
        kind: "method",
        key: "activateCookie",
        value: function activateCookie(particleType) {
          this.setCookie(particleType, true, _defaults.default.Cookies.NUM_DAYS_EXPIRING); // activate checkbox
        }
      }, {
        kind: "method",
        key: "resetCookies",
        value: function resetCookies(cookieType) {
          for (let key in cookieType) {
            this.setCookie(cookieType[key], undefined, 0);
          }
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
        key: "setMusicType",
        value: function setMusicType(event) {
          console.log(event.target.value);
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "changeSnowState",
        value: function changeSnowState() {
          // @ts-ignore
          this.set('isSnowing', !this.get('isSnowing')); // @ts-ignore

          if (this.get('isSnowing')) {
            this.setCookie(_defaults.default.Cookies.Particles.SNOW, true, _defaults.default.Cookies.NUM_DAYS_EXPIRING);
          } else {
            this.setCookie(_defaults.default.Cookies.Particles.SNOW, false, _defaults.default.Cookies.NUM_DAYS_EXPIRING);
          }
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "reset",
        value: function reset() {
          this.resetAllCookies();
        }
      }, {
        kind: "method",
        key: "resetAllCookies",
        value: function resetAllCookies() {}
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "reload",
        value: function reload() {
          // @ts-ignore
          this.get('deactivateSettings')();
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

;define("bitcorn/config/asset-manifest", ["exports", "require", "bitcorn/config/environment"], function (_exports, _require, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const modulePrefix = _environment.default.modulePrefix;
  const metaName = `${modulePrefix}/config/asset-manifest`;
  const nodeName = `${modulePrefix}/config/node-asset-manifest`;
  let config = {};

  try {
    // If we have a Node version of the asset manifest, use that for FastBoot and
    // similar environments.
    if (_require.default.has(nodeName)) {
      config = (0, _require.default)(nodeName).default; // eslint-disable-line
    } else {
      const rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
      config = JSON.parse(unescape(rawConfig));
    }
  } catch (err) {
    throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "' + metaName + '" is present. For non-browser environments, verify that you included the node-asset-manifest module.');
  }

  var _default = config;
  _exports.default = _default;
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
          this.set('settingsActive', true);
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "deactivateSettings",
        value: function deactivateSettings() {
          // @ts-ignore
          this.set('settingsActive', false);
        }
      }]
    };
  }, Ember.Controller); // DO NOT DELETE: this is how TypeScript knows how to look up your controllers.

  _exports.default = Application;
});

;define("bitcorn/controllers/contact", ["exports", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object", "bitcorn/system/defaults", "bitcorn/system/regex"], function (_exports, _decorate2, _object, _defaults, _regex) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let Contact = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    class Contact extends _EmberController {
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
        value: function submit() {
          const form = document.querySelector(".needs-validation");
          this.coverLegality("email-field", "d-block", 0);
          this.coverLegality("message-field", "d-block", 1); // test correctness

          const isLegalMail = this.isLegalMail(form, new RegExp(_regex.default.AllowedPattern.MAIL));
          const isLegalMessage = this.isLegalMessage(form, new RegExp(_regex.default.AllowedPattern.MESSAGE));
          this.uncoverLegality(isLegalMail, "email-field", "d-block", 0);
          this.uncoverLegality(isLegalMessage, "message-field", "d-block", 1);
        }
      }, {
        kind: "method",
        key: "coverLegality",
        value: function coverLegality(fieldId, messageClass, messageNumber) {
          const field = document.querySelector("#" + fieldId); // @ts-ignore

          field.classList.remove("is-invalid");
          const messages = document.querySelectorAll("." + messageClass); // ordered list!

          messages[messageNumber].style.setProperty("display", "none", "important");
        }
      }, {
        kind: "method",
        key: "isLegalMail",
        value: function isLegalMail(form, allowedMailPattern) {
          // @ts-ignore
          const mailField = form[0];
          mailField.classList.remove("is-invalid");
          const mail = mailField.value;
          return allowedMailPattern.test(mail) && mail.length >= _defaults.default.Lengths.MAIL_ADDRESS;
        }
      }, {
        kind: "method",
        key: "isLegalMessage",
        value: function isLegalMessage(form, allowedMessagePattern) {
          // @ts-ignore
          const messageField = form[1];
          messageField.classList.remove("is-invalid");
          const message = messageField.value;
          return allowedMessagePattern.test(message) && message.length >= _defaults.default.Lengths.MESSAGE;
        }
      }, {
        kind: "method",
        key: "uncoverLegality",
        value: function uncoverLegality(isLegal, fieldId, messageClass, messageNumber) {
          if (!isLegal) {
            const field = document.querySelector("#" + fieldId); // @ts-ignore

            field.classList.add("is-invalid");
            const messages = document.querySelectorAll("." + messageClass); // ordered list!

            messages[messageNumber].style.setProperty("display", "block", "important");
          }
        }
      }]
    };
  }, Ember.Controller); // DO NOT DELETE: this is how TypeScript knows how to look up your controllers.

  _exports.default = Contact;
});

;define("bitcorn/downloads/tests/addon.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | addon');
  QUnit.test('addon/engine.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/engine.js should pass ESLint\n\n');
  });
  QUnit.test('addon/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('addon/routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes.js should pass ESLint\n\n');
  });
});

;define("bitcorn/downloads/tests/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('addon/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/graphics.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/graphics.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/graphics/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/graphics/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/programs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/programs.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/programs/bioinformatics.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/programs/bioinformatics.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/programs/cross-dating.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/programs/cross-dating.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/programs/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/programs/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/programs/res.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/programs/res.hbs should pass TemplateLint.\n\n');
  });
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

;define("bitcorn/initializers/engines", ["exports", "ember-engines/initializers/engines"], function (_exports, _engines) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _engines.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _engines.initialize;
    }
  });
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

;define("bitcorn/initializers/settings-cookies", ["exports", "bitcorn/system/cookies", "bitcorn/system/defaults"], function (_exports, _cookies, _defaults) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    _cookies.default.isSnowing = getCookieValue(_defaults.default.Cookies.Particles.SNOW);
  }

  function getCookieValue(name) {
    name = name + "=";
    const cookieParams = document.cookie.split(';');

    for (let i = 0; i < cookieParams.length; i++) {
      const param = cookieParams[i];

      if (param.indexOf(name) === 0) {
        return JSON.parse(param.substring(name.length, param.length));
      }
    } // @ts-ignore


    return undefined;
  }

  var _default = {
    before: 'snow-starter',
    initialize
  };
  _exports.default = _default;
});

;define("bitcorn/initializers/snow-starter", ["exports", "bitcorn/system/cookies", "bitcorn/view/effects/snow"], function (_exports, _cookies, _snow) {
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
    after: 'settings-cookies',
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

;define("bitcorn/instance-initializers/load-asset-manifest", ["exports", "bitcorn/config/asset-manifest"], function (_exports, _assetManifest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  /**
   * Initializes the AssetLoader service with a generated asset-manifest.
   */
  function initialize(instance) {
    const service = instance.lookup('service:asset-loader');
    service.pushManifest(_assetManifest.default);
  }

  var _default = {
    name: 'load-asset-manifest',
    initialize
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
    this.route('home');
    this.mount('downloads');
    this.mount('tutorials');
    this.route('about', function () {
      this.route('authors');
      this.route('page');
    });
    this.route('contact');
    this.route('imprint');
    this.route('privacy');
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

;define("bitcorn/services/asset-loader", ["exports", "ember-asset-loader/services/asset-loader"], function (_exports, _assetLoader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _assetLoader.default;
    }
  });
});

;define("bitcorn/system/colors", ["exports"], function (_exports) {
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

;define("bitcorn/system/cookies", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Cookies {}

  _exports.default = Cookies;
  Cookies.isSnowing = void 0;
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
      MAIL_ADDRESS: 10,
      MESSAGE: 15
    }
  };
  _exports.default = _default;
});

;define("bitcorn/system/messages", ["exports"], function (_exports) {
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

;define("bitcorn/system/regex", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    AllowedPattern: {
      MAIL: "^([A-Za-z0-9]+(\.|\-|\_)?[A-Za-z0-9]+)+@[A-Za-z]+\.[A-Za-z]{2}$",
      MESSAGE: "^[A-Za-zÀ-ÖØ-öø-ÿ\.\:\,\;\?\!\(\)\ \'\"\r\n]+$"
    }
  };
  _exports.default = _default;
});

;define("bitcorn/system/types", [], function () {
  "use strict";
});

;define("bitcorn/templates/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "t1fi8S+F",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
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
    "id": "jot0MTck",
    "block": "{\"symbols\":[\"navbar\",\"nav\",\"dd\",\"menu\",\"dd\",\"dd\",\"menu\"],\"statements\":[[7,\"div\"],[11,\"class\",\"background\"],[11,\"id\",\"top\"],[9],[0,\"\\n\"],[4,\"bs-navbar\",null,null,{\"statements\":[[0,\"    \"],[7,\"a\"],[11,\"href\",\"/\"],[11,\"class\",\"navbar-brand\"],[9],[7,\"div\"],[11,\"class\",\"logo\"],[9],[10],[10],[0,\"\\n\\n    \"],[1,[22,1,[\"toggle\"]],false],[0,\" \"],[0,\"\\n\"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,1,[\"content\"]],\"expected `navbar.content` to be a contextual component but found a string. Did you mean `(component navbar.content)`? ('bitcorn/templates/application.hbs' @ L6:C7) \"],null]],null,{\"statements\":[[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,1,[\"nav\"]],\"expected `navbar.nav` to be a contextual component but found a string. Did you mean `(component navbar.nav)`? ('bitcorn/templates/application.hbs' @ L7:C9) \"],null]],[[\"id\",\"class\"],[\"headbar\",\"ml-auto\"]],{\"statements\":[[0,\"        \"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('bitcorn/templates/application.hbs' @ L9:C11) \"],null]],[[\"class\"],[\"button\"]],{\"statements\":[[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,2,[\"link-to\"]],\"expected `nav.link-to` to be a contextual component but found a string. Did you mean `(component nav.link-to)`? ('bitcorn/templates/application.hbs' @ L9:C39) \"],null],\"home\"],null,{\"statements\":[[0,\"Home\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"bs-dropdown\",null,[[\"class\"],[\"dropdown\"]],{\"statements\":[[0,\"          \"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,6,[\"button\"]],\"expected `dd.button` to be a contextual component but found a string. Did you mean `(component dd.button)`? ('bitcorn/templates/application.hbs' @ L13:C13) \"],null]],[[\"class\"],[\"menu-button\"]],{\"statements\":[[0,\"Downloads\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,6,[\"menu\"]],\"expected `dd.menu` to be a contextual component but found a string. Did you mean `(component dd.menu)`? ('bitcorn/templates/application.hbs' @ L15:C13) \"],null]],[[\"class\"],[\"menu\"]],{\"statements\":[[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,7,[\"item\"]],\"expected `menu.item` to be a contextual component but found a string. Did you mean `(component menu.item)`? ('bitcorn/templates/application.hbs' @ L16:C15) \"],null]],null,{\"statements\":[[0,\"              \"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,7,[\"link-to\"]],\"expected `menu.link-to` to be a contextual component but found a string. Did you mean `(component menu.link-to)`? ('bitcorn/templates/application.hbs' @ L17:C17) \"],null],\"downloads.graphics\"],[[\"class\"],[\"download-link\"]],{\"statements\":[[0,\"Graphics\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,7,[\"item\"]],\"expected `menu.item` to be a contextual component but found a string. Did you mean `(component menu.item)`? ('bitcorn/templates/application.hbs' @ L20:C15) \"],null]],null,{\"statements\":[[0,\"              \"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,7,[\"link-to\"]],\"expected `menu.link-to` to be a contextual component but found a string. Did you mean `(component menu.link-to)`? ('bitcorn/templates/application.hbs' @ L21:C17) \"],null],\"downloads.programs\"],[[\"class\"],[\"download-link\"]],{\"statements\":[[0,\"Programs\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[7]},null]],\"parameters\":[6]},null],[0,\"\\n\"],[4,\"bs-dropdown\",null,[[\"class\"],[\"dropdown\"]],{\"statements\":[[0,\"          \"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,5,[\"button\"]],\"expected `dd.button` to be a contextual component but found a string. Did you mean `(component dd.button)`? ('bitcorn/templates/application.hbs' @ L28:C13) \"],null]],[[\"class\"],[\"menu-button\"]],{\"statements\":[[0,\"Tutorials\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"\\n\"],[4,\"bs-dropdown\",null,[[\"class\"],[\"dropdown\"]],{\"statements\":[[0,\"          \"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,3,[\"button\"]],\"expected `dd.button` to be a contextual component but found a string. Did you mean `(component dd.button)`? ('bitcorn/templates/application.hbs' @ L33:C13) \"],null]],[[\"class\"],[\"menu-button\"]],{\"statements\":[[0,\"About\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,3,[\"menu\"]],\"expected `dd.menu` to be a contextual component but found a string. Did you mean `(component dd.menu)`? ('bitcorn/templates/application.hbs' @ L35:C13) \"],null]],[[\"class\"],[\"menu\"]],{\"statements\":[[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,4,[\"item\"]],\"expected `menu.item` to be a contextual component but found a string. Did you mean `(component menu.item)`? ('bitcorn/templates/application.hbs' @ L36:C15) \"],null]],null,{\"statements\":[[0,\"              \"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,4,[\"link-to\"]],\"expected `menu.link-to` to be a contextual component but found a string. Did you mean `(component menu.link-to)`? ('bitcorn/templates/application.hbs' @ L37:C17) \"],null],\"about.authors\"],[[\"class\"],[\"about-link\"]],{\"statements\":[[0,\"Authors\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,4,[\"item\"]],\"expected `menu.item` to be a contextual component but found a string. Did you mean `(component menu.item)`? ('bitcorn/templates/application.hbs' @ L40:C15) \"],null]],null,{\"statements\":[[0,\"              \"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,4,[\"link-to\"]],\"expected `menu.link-to` to be a contextual component but found a string. Did you mean `(component menu.link-to)`? ('bitcorn/templates/application.hbs' @ L41:C17) \"],null],\"about.page\"],[[\"class\"],[\"about-link\"]],{\"statements\":[[0,\"Page\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[4]},null]],\"parameters\":[3]},null],[0,\"\\n        \"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('bitcorn/templates/application.hbs' @ L46:C11) \"],null]],null,{\"statements\":[[7,\"div\"],[11,\"class\",\"menu-button outsider\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"activateSettings\"],null]],[9],[7,\"span\"],[11,\"class\",\"fas fa-cog\"],[9],[10],[10]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\n  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"footer\"],[9],[0,\"\\n  \"],[7,\"span\"],[11,\"id\",\"liabilities\"],[9],[0,\"\\n    \"],[4,\"link-to\",[\"contact\"],[[\"class\"],[\"contact\"]],{\"statements\":[[0,\"Contact\"]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"link-to\",[\"imprint\"],[[\"class\"],[\"imprint\"]],{\"statements\":[[0,\"Imprint\"]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"link-to\",[\"privacy\"],[[\"class\"],[\"privacy\"]],{\"statements\":[[0,\"Privacy\"]],\"parameters\":[]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"span\"],[11,\"id\",\"author\"],[9],[0,\"\\n    Copyright © 2019 Alexander Mattheis\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"settingsActive\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"settings-modal\",null,[[\"deactivateSettings\"],[[27,\"action\",[[22,0,[]],\"deactivateSettings\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
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

;define("bitcorn/templates/components/settings-modal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "igrtK/lI",
    "block": "{\"symbols\":[\"modal\"],\"statements\":[[4,\"bs-modal\",null,[[\"size\",\"onHidden\"],[\"lg\",[23,[\"deactivateSettings\"]]]],{\"statements\":[[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,1,[\"header\"]],\"expected `modal.header` to be a contextual component but found a string. Did you mean `(component modal.header)`? ('bitcorn/templates/components/settings-modal.hbs' @ L2:C5) \"],null]],null,{\"statements\":[[0,\"    \"],[7,\"h3\"],[9],[7,\"span\"],[11,\"class\",\"fas fa-cog\"],[9],[10],[0,\" Settings\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,1,[\"body\"]],\"expected `modal.body` to be a contextual component but found a string. Did you mean `(component modal.body)`? ('bitcorn/templates/components/settings-modal.hbs' @ L6:C5) \"],null]],null,{\"statements\":[[0,\"    \"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n      Here you can change the page settings. Therefore, cookies are used.\\n      By changing an option \"],[7,\"b\"],[9],[0,\"you agree with the usage of cookies\"],[10],[0,\" on this page.\\n      You can change your opinion at any time by clicking on the Reset-button below.\\n      By doing so, all set cookies from this page are deleted.\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"label\"],[11,\"class\",\"settings-input\"],[11,\"for\",\"music\"],[9],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Music\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"select\"],[11,\"id\",\"music-select\"],[11,\"class\",\"settings-select\"],[9],[0,\"\\n      \"],[7,\"option\"],[11,\"value\",\"none\"],[9],[0,\"None\"],[10],[0,\"\\n      \"],[7,\"option\"],[11,\"value\",\"a-new-beginning\"],[9],[0,\"A New Beginning\"],[10],[0,\"\\n      \"],[7,\"option\"],[11,\"value\",\"dreams\"],[9],[0,\"Dreams\"],[10],[0,\"\\n      \"],[7,\"option\"],[11,\"value\",\"endless-motion\"],[9],[0,\"Endless Motion\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n\\n    \"],[7,\"label\"],[11,\"class\",\"settings-input\"],[11,\"for\",\"particles\"],[9],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Particles\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"select\"],[11,\"id\",\"particles-select\"],[11,\"class\",\"settings-select\"],[9],[0,\"\\n      \"],[7,\"option\"],[11,\"value\",\"none\"],[9],[0,\"None\"],[10],[0,\"\\n      \"],[7,\"option\"],[11,\"value\",\"snow\"],[9],[0,\"Snow\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[1,[27,\"input\",null,[[\"class\",\"type\",\"id\",\"checked\",\"change\",\"tabindex\"],[\"input-text\",\"checkbox\",\"particles\",[23,[\"isSnowing\"]],[27,\"action\",[[22,0,[]],\"changeSnowState\"],null],-1]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,1,[\"footer\"]],\"expected `modal.footer` to be a contextual component but found a string. Did you mean `(component modal.footer)`? ('bitcorn/templates/components/settings-modal.hbs' @ L40:C5) \"],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"bs-button\",null,[[\"id\",\"class\",\"defaultText\",\"type\",\"buttonType\",\"onClick\"],[\"reset\",\"darker\",\"Reset\",\"secondary\",\"button\",[27,\"action\",[[22,0,[]],\"reset\"],null]]]],false],[0,\"\\n    \"],[1,[27,\"bs-button\",null,[[\"id\",\"defaultText\",\"type\",\"buttonType\",\"onClick\"],[\"apply\",\"Apply\",\"primary\",\"button\",[27,\"action\",[[22,0,[]],\"reload\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}",
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
    "id": "CjsfNGKn",
    "block": "{\"symbols\":[\"form\"],\"statements\":[[7,\"div\"],[11,\"class\",\"col-12 col-xl-6 mr-auto ml-auto mt-5\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[7,\"span\"],[11,\"class\",\"far fa-envelope\"],[9],[10],[0,\" Contact\"],[10],[0,\"\\n  \"],[7,\"hr\"],[11,\"class\",\"underline\"],[9],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"content\"],[9],[0,\"\\n    Have you some feedback or you found a bug, mistake, whatever on my page and you want to report this?\\n    Then write me please a short message using the contact form below. No matter what, write me.\\n    I'll answer you soon and say \\\"Thank you!\\\" to you.\\n  \"],[10],[0,\"\\n\\n\"],[4,\"bs-form\",null,[[\"class\",\"model\",\"formLayout\",\"onSubmit\"],[\"needs-validation\",[23,[\"model\"]],\"horizontal\",[27,\"action\",[[22,0,[]],\"submit\"],null]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,1,[\"element\"]],\"expected `form.element` to be a contextual component but found a string. Did you mean `(component form.element)`? ('bitcorn/templates/contact.hbs' @ L11:C6) \"],null]],[[\"id\",\"controlType\",\"label\",\"placeholder\",\"property\",\"customError\"],[\"email\",\"email\",\"E-Mail\",\"Your e-mail address\",\"email\",\"Each mail should consist at least out of ten symbols!\"]]],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,1,[\"element\"]],\"expected `form.element` to be a contextual component but found a string. Did you mean `(component form.element)`? ('bitcorn/templates/contact.hbs' @ L14:C6) \"],null]],[[\"id\",\"class\",\"controlType\",\"label\",\"property\",\"customError\"],[\"message\",\"message\",\"textarea\",\"Message\",\"message\",\"Each message should be at least 15 characters long,\\r\\n                   not containing any special symbols like '+', '*', '$', .. !\"]]],false],[0,\"\\n\\n    \"],[1,[27,\"bs-button\",null,[[\"defaultText\",\"type\",\"buttonType\"],[\"Submit\",\"primary\",\"submit\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bitcorn/templates/contact.hbs"
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
    "id": "YPpuHkCO",
    "block": "{\"symbols\":[\"car\"],\"statements\":[[4,\"bs-carousel\",null,null,{\"statements\":[[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,1,[\"slide\"]],\"expected `car.slide` to be a contextual component but found a string. Did you mean `(component car.slide)`? ('bitcorn/templates/home.hbs' @ L2:C5) \"],null]],null,{\"statements\":[[0,\"    \"],[7,\"img\"],[11,\"src\",\"assets/images/preview/popcorn.jpg\"],[11,\"alt\",\"Bitcorn start-screen.\"],[9],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"carousel-caption\"],[9],[0,\"\\n      \"],[7,\"h1\"],[11,\"class\",\"display-2\"],[9],[0,\"Bitcorn\"],[10],[0,\"\\n      \"],[7,\"h3\"],[9],[0,\"Interactive, Free Learning Platform\"],[10],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn btn-outline-light btn-lg\"],[11,\"type\",\"button\"],[9],[0,\"\\n        VIEW DEMO\\n      \"],[10],[0,\"\\n\"],[4,\"link-to\",[\"tutorials\"],null,{\"statements\":[[0,\"        \"],[7,\"button\"],[11,\"class\",\"btn btn-primary btn-lg\"],[11,\"type\",\"button\"],[9],[0,\"\\n          Get Started\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,1,[\"slide\"]],\"expected `car.slide` to be a contextual component but found a string. Did you mean `(component car.slide)`? ('bitcorn/templates/home.hbs' @ L19:C5) \"],null]],null,{\"statements\":[[0,\"    \"],[7,\"img\"],[11,\"src\",\"assets/images/preview/bananas.jpg\"],[11,\"alt\",\"Preview 2\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,1,[\"slide\"]],\"expected `car.slide` to be a contextual component but found a string. Did you mean `(component car.slide)`? ('bitcorn/templates/home.hbs' @ L23:C5) \"],null]],null,{\"statements\":[[0,\"    \"],[7,\"img\"],[11,\"src\",\"assets/images/preview/barley_field.jpg\"],[11,\"alt\",\"Preview 3\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container-fluid\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row jumbotron\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-9 col-lg-9 col-xl-10\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"lead\"],[9],[0,\"\\n        Bitcorn is a modern learning platform\\n        whose development started between October and November 2018.\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-3 col-lg-3 col-xl-2\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"about.page\"],null,{\"statements\":[[0,\"        \"],[7,\"button\"],[11,\"class\",\"btn btn-outline-secondary btn-lg\"],[11,\"type\",\"button\"],[9],[0,\"\\n          More About\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"latest\"],[11,\"class\",\"container-fluid row text-center\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col-12\"],[9],[0,\"\\n    \"],[7,\"h1\"],[11,\"class\",\"display-4\"],[9],[0,\"Latest Creations\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col-xl-6 ml-auto mr-auto\"],[9],[0,\"\\n    \"],[7,\"hr\"],[11,\"class\",\"overline\"],[9],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"lead\"],[9],[0,\"\\n      Thank you for visiting Bitcorn, the right place\\n      for developers! Have fun playing around with my\\n      latest creations you find below.\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"container-fluid row justify-content-center \"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"card col-6 col-md-3\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"class\",\"card-img-top\"],[11,\"src\",\"assets/images/preview/cards/bioinformatics_algorithms_logo.png\"],[11,\"alt\",\"Newest 1\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n      \"],[7,\"h4\"],[11,\"class\",\"card-title\"],[9],[0,\"Bioinformatics Algorithms\"],[10],[0,\"\\n\\n      \"],[7,\"p\"],[11,\"class\",\"card-text\"],[9],[0,\"\\n        Visually more elaborate versions of algorithms known from Bioinformatics.\\n      \"],[10],[0,\"\\n\\n\"],[4,\"link-to\",[\"downloads.programs.bioinformatics\"],null,{\"statements\":[[0,\"        \"],[7,\"btn\"],[11,\"class\",\"btn btn-outline-secondary\"],[9],[0,\"More About\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"card col-6 col-md-3\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"class\",\"card-img-top\"],[11,\"src\",\"assets/images/preview/cards/cross_dating_logo.png\"],[11,\"alt\",\"Newest 2\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n      \"],[7,\"h4\"],[11,\"class\",\"card-title\"],[9],[0,\"Cross-Dating\"],[10],[0,\"\\n\\n      \"],[7,\"p\"],[11,\"class\",\"card-text\"],[9],[0,\"\\n        Newly developed cross-dating algorithm for density series from wood samples.\\n      \"],[10],[0,\"\\n\\n\"],[4,\"link-to\",[\"downloads.programs.cross-dating\"],null,{\"statements\":[[0,\"        \"],[7,\"btn\"],[11,\"class\",\"btn btn-outline-secondary\"],[9],[0,\"More About\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"card col-6 col-md-3\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"class\",\"card-img-top\"],[11,\"src\",\"assets/images/preview/cards/res_logo.png\"],[11,\"alt\",\"Newest 3\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n      \"],[7,\"h4\"],[11,\"class\",\"card-title\"],[9],[0,\"RES\"],[10],[0,\"\\n\\n      \"],[7,\"p\"],[11,\"class\",\"card-text\"],[9],[0,\"\\n        Scripts for a better cooperation between humans and machines.\\n      \"],[10],[0,\"\\n\\n\"],[4,\"link-to\",[\"downloads.programs.res\"],null,{\"statements\":[[0,\"        \"],[7,\"btn\"],[11,\"class\",\"btn btn-outline-secondary\"],[9],[0,\"More About\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"container-fluid padding\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row text-center padding\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-12\"],[9],[0,\"\\n      \"],[7,\"h2\"],[9],[0,\"Connect\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col-12 connections padding\"],[9],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"https://github.com/AlexanderMattheis\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[7,\"span\"],[11,\"class\",\"fab fa-github\"],[9],[10],[10],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"https://www.youtube.com/channel/UCsLtdlbI3Qyrjo9By0BWsZA\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[9],[7,\"span\"],[11,\"class\",\"fab fa-youtube\"],[9],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
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

;define("bitcorn/tutorials/tests/addon.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | addon');
  QUnit.test('addon/engine.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/engine.js should pass ESLint\n\n');
  });
  QUnit.test('addon/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('addon/routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes.js should pass ESLint\n\n');
  });
});

;define("bitcorn/tutorials/tests/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('addon/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/application.hbs should pass TemplateLint.\n\n');
  });
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
      const effectsCanvas = document.querySelector('#effects');
      effectsCanvas.width = window.innerWidth;
      effectsCanvas.height = window.innerHeight;
      const canvasContext = effectsCanvas.getContext('2d');
      const canvasData = {
        context: canvasContext,
        width: effectsCanvas.width,
        height: effectsCanvas.height
      };
      this.init(canvasData);
      this.animate(canvasData);
      addEventListener('resize', () => {
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

;define("bitcorn/view/effects/particle/snowflake", ["exports", "bitcorn/system/colors"], function (_exports, _colors) {
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
  var config = JSON.parse(unescape(rawConfig));

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
            require("bitcorn/app")["default"].create({"name":"bitcorn","version":"3.1.0+843565a4"});
          }
        
//# sourceMappingURL=bitcorn.map
