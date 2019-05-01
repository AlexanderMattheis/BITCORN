module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: [
    'ember',
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "indent": "off"
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
