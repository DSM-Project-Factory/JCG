module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks', '@emotion'],
  settings: { react: { version: 'detect' } },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
