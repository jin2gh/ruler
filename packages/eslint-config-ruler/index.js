module.exports = {
  extends: [
    './rules/base/best-practices',
    './rules/base/es6',
    './rules/base/imports',
    './rules/base/possible-errors',
    './rules/base/strict',
    './rules/base/style',
    './rules/base/variables',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },
  root: true,
}