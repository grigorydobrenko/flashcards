module.exports = {
  extends: ["@it-incubator/eslint-config", "plugin:storybook/recommended"],
  plugins: [
    "react-hooks"
  ],
  rules: {
    'no-console': ['warn', {
      allow: ['warn', 'error']
    }],
    'max-len': ["error", { ignorePattern: 'd="([\\s\\S]*?)"', "code": 100 }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  }
};