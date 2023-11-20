/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript"
    ],
    parserOptions: {
        ecmaVersion: "latest"
    },
    rules: {
        "no-console": "off",
        "no-debugger": "off",
        "no-extra-semi": "off",
        "no-extra-boolean-cast": "off",

        indent: ["error", 4],
        "vue/html-indent": ["error", 4],

        curly: ["error", "multi"],
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "comma-dangle": ["error", "never"],

        "eol-last": ["error", "never"],
        "linebreak-style": ["error", "unix"],
        "brace-style": ["error", "allman", {allowSingleLine: true}],
        "vue/html-closing-bracket-newline": ["error", {singleline: "never", multiline: "never"}],

        "function-paren-newline": ["error", "never"],
        "keyword-spacing": ["error", {before: true, after: true}],
        "arrow-spacing": ["error", {before: false, after: true}],

        "object-curly-spacing": ["error", "never"],
        "space-before-function-paren": ["error", "never"]
    }
};