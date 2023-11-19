module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  env: {
    es2021: true,
    node: true,
  },
  rules: {
    'no-console': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
