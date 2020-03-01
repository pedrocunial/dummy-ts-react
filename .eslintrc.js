module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
  ],
  rules: {
    'max-len': [{ code: 100, tabWidth: 2 }],
  },
};
