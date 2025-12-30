module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: "eslint:recommended",
  plugins: ["import"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {},
};
