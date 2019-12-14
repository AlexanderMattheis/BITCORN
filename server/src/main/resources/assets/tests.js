'use strict';

define("bitcorn/tests/lint/app.lint-test", [], function () {
  "use strict";
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
  QUnit.test('bitcorn/templates/components/files-lister.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/components/files-lister.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/components/listings/graphic-listing.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/components/listings/graphic-listing.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/components/listings/program-listing.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/components/listings/program-listing.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/components/settings-modal.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/components/settings-modal.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/contact.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/downloads.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/downloads.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/downloads/graphics.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/downloads/graphics.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/downloads/graphics/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/downloads/graphics/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/downloads/programs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/downloads/programs.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/downloads/programs/bioinformatics.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/downloads/programs/bioinformatics.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/downloads/programs/cross-dating.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/downloads/programs/cross-dating.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/downloads/programs/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/downloads/programs/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bitcorn/templates/downloads/programs/res.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/downloads/programs/res.hbs should pass TemplateLint.\n\n');
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
  QUnit.test('bitcorn/templates/tutorials.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bitcorn/templates/tutorials.hbs should pass TemplateLint.\n\n');
  });
});

define("bitcorn/tests/lint/tests.lint-test", [], function () {
  "use strict";
});

define("bitcorn/tests/test-helper", ["bitcorn/app", "bitcorn/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});

define('bitcorn/config/environment', [], function() {
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

require('bitcorn/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
