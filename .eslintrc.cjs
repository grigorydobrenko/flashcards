module.exports = {
  extends: ["@it-incubator/eslint-config", "plugin:storybook/recommended"],
  rules: {
    'no-console': ['warn', {
      allow: ['warn', 'error']
    }],
    'max-len': ["error", { ignorePattern: 'd="([\\s\\S]*?)"', "code": 100 }]
  }
};