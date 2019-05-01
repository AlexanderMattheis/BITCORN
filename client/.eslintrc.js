module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    project: "tsconfig.json",
  },
  plugins: [
    "ember",
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
    "plugin:ember/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  env: {
    browser: true
  },
  rules: {
    "indent": "off",  // to use typescript-eslint/indent
    "@typescript-eslint/indent": ["error", 2],
    "array-bracket-spacing": "error",
    "arrow-spacing": "error",
    "block-spacing": "error",
    "camelcase": "error",
    "comma-dangle": "error",  // no comma at the end of enumerations [1, 2, 3,] would be wrong
    "comma-spacing": "error",  // space after comma
    "computed-property-spacing": "error",
    "curly": "error",
    "dot-location": ["error", "property"],  // dots in next line together with property
    "dot-notation": "error",  // for associative arrays foo.bar instead foo["bar"] if possible
    "eol-last": "error",
    "eqeqeq": "error",
    "generator-star-spacing": "error",
    "keyword-spacing": "error",
    "lines-around-comment": "error",
    "max-classes-per-file": "error",
    "multiline-comment-style": "error",  // standardized multiline comments
    "new-cap": "error",  // after new-keyword the class has to start with a capital letter
    "no-trailing-spaces": "error",
    "no-useless-escape": "off",
    "no-whitespace-before-property": "error", // e.g. "foo.bar" and not "foo. bar"
    "object-curly-spacing": "error",  // no spacing within curly brackets
    "quotes": "error",  // to allow only double qoutes
    "rest-spread-spacing": "error",
    "semi-spacing": "error",  // spacing after semicolons
    "space-before-blocks": "error",
    "space-infix-ops": "error",  // e.g. "2 + 5" instead of "2+5"
    "space-in-parens": "error", // no space in parentheses e.g. "(2 + 5)" instead of "( 2 + 5 )"
    "spaced-comment": "error",
    "switch-colon-spacing": "error",  // spacing after switch-case colons
    "template-curly-spacing": "error",
    "yield-star-spacing": "error"
  },
  overrides: [
    // node files
    {
      files: [
        ".eslintrc.js",
        ".template-lintrc.js",
        "ember-cli-build.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "lib/*/index.js"
      ],
      parserOptions: {
        sourceType: "script",
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
