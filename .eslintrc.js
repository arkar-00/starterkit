module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:testing-library/react'],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      // You might add specific rules for test files here if needed,
      // for example, enabling Jest-specific rules.
      // plugins: ['jest'],
      // env: {
      //   jest: true,
      // },
    },
  ],
};