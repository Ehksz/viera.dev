module.exports = {
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/prop-types': 'off',
    'func-names': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-cycle': 'off',
  },
  plugins: ['react', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  extends: [
    'next',
    'turbo',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  overrides: [
    {
      // Adapt to your needs (e.g. some might want to only override "next.config.js")
      files: ['*.js'],
      // This is the default parser of ESLint
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  ],
};
