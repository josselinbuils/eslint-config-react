module.exports = {
  extends: [
    '@josselinbuils/eslint-config-typescript',
    'airbnb/rules/react',
    'airbnb/rules/react-a11y',
    'airbnb/hooks',
    'prettier'
  ],
  plugins: ['jsx-a11y', 'react'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/sort-comp': 'off', // Does not manage arrow methods
  },
};
