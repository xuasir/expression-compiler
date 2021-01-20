module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: '2019',
    sourceType: 'module'
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['import'],
  rules: {
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0
  },
  overrides: [
    {
      files: ['**/__test__/**'],
      rules: {
        'no-restricted-syntax': 0
      }
    }
  ]
}
