module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'standard',
    'plugin:testcafe/recommended',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
  ],
  plugins: ['babel', 'svelte3'],
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    'no-console': ['warn'],
    'no-debugger': ['error'],
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 0 }],
      },
    },
  ],
}
