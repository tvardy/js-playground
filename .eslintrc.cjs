module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['standard'],
  plugins: ['babel', 'svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    'no-console': ['warn'],
    'no-debugger': ['error'],
  },
}
