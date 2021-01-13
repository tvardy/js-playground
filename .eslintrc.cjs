module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: ['standard', 'plugin:react/recommended'],
  plugins: ['babel'],
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    'no-console': ['warn'],
    'no-debugger': ['error']
  }
}
