module.exports = {
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: '2019',
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'import'
  ],
  rules: {
    'no-underscore-dangle': 0
  },
};
