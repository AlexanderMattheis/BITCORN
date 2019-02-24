'use strict';

define("bitcorn/tests/integration/components/bs-navbar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | bs-navbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "eSyNx50A",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"bs-navbar\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WIQA37iL",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"bs-navbar\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
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
    assert.ok(true, 'bitcorn/templates/application.hbs should pass TemplateLint.\n\n');
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
  QUnit.test('bitcorn/templates/settings.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/settings.hbs should pass TemplateLint.\n\n');
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
define("bitcorn/tests/unit/initializers/settings-cookies-test", ["bitcorn/initializers/settings-cookies", "qunit", "ember-qunit", "bitcorn/tests/helpers/destroy-app"], function (_settingsCookies, _qunit, _emberQunit, _destroyApp) {
  "use strict";

  (0, _qunit.module)('Unit | Initializer | settings-cookies', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      this.TestApplication = Ember.Application.extend();
      this.TestApplication.initializer({
        name: 'initializer under test',
        initialize: _settingsCookies.initialize
      });
      this.application = this.TestApplication.create({
        autoboot: false
      });
    });
    hooks.afterEach(function () {
      (0, _destroyApp.default)(this.application);
    }); // Replace this with your real tests.

    (0, _qunit.test)('it works', async function (assert) {
      await this.application.boot();
      assert.ok(true);
    });
  });
});
define("bitcorn/tests/unit/initializers/snow-starter-test", ["bitcorn/initializers/snow-starter", "qunit", "ember-qunit", "bitcorn/tests/helpers/destroy-app"], function (_snowStarter, _qunit, _emberQunit, _destroyApp) {
  "use strict";

  (0, _qunit.module)('Unit | Initializer | snow-starter', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      this.TestApplication = Ember.Application.extend();
      this.TestApplication.initializer({
        name: 'initializer under test',
        initialize: _snowStarter.initialize
      });
      this.application = this.TestApplication.create({
        autoboot: false
      });
    });
    hooks.afterEach(function () {
      (0, _destroyApp.default)(this.application);
    }); // Replace this with your real tests.

    (0, _qunit.test)('it works', async function (assert) {
      await this.application.boot();
      assert.ok(true);
    });
  });
});
define("bitcorn/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("bitcorn/tests/unit/routes/about/authors-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about/authors', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about/authors');
      assert.ok(route);
    });
  });
});
define("bitcorn/tests/unit/routes/about/page-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about/page', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about/page');
      assert.ok(route);
    });
  });
});
define("bitcorn/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("bitcorn/tests/unit/routes/home-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define("bitcorn/tests/unit/routes/imprint-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | imprint', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:imprint');
      assert.ok(route);
    });
  });
});
define("bitcorn/tests/unit/routes/privacy-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | privacy', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:privacy');
      assert.ok(route);
    });
  });
});
define("bitcorn/tests/unit/routes/settings-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | settings', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:settings');
      assert.ok(route);
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
