'use strict';

define("bitcorn/tests/integration/components/settings-modal-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | settings-modal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "UO2DCNLN",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"settings-modal\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3mFlgLNX",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"settings-modal\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("bitcorn/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define("bitcorn/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('bitcorn/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/about.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/about/authors.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/about/authors.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/about/page.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/about/page.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'bitcorn/templates/application.hbs should pass TemplateLint.\n\nbitcorn/templates/application.hbs\n  46:55  error  Interaction added to non-interactive element  no-invalid-interactive\n');
  });
  QUnit.test('bitcorn/templates/components/settings-modal.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/components/settings-modal.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/contact.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/home.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/home.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/imprint.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/imprint.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/privacy.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/privacy.hbs should pass TemplateLint.\n\n');
  });
});
define("bitcorn/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("bitcorn/tests/test-helper", ["bitcorn/app", "bitcorn/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("bitcorn/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define('bitcorn/config/environment', [], function() {
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

require('bitcorn/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
