module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: "eslint:recommended",
  plugins: ["import"],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  globals: {},
  rules: {},
};
