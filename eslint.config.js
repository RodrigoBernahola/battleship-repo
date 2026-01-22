import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import jestPlugin from "eslint-plugin-jest";

export default [
  js.configs.recommended,
  prettierConfig,

  {
    ignores: ["dist/**", "node_modules/**", "*.min.js"],
  },

  // Configuración general para archivos JavaScript
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        process: "readonly",
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-debugger": "warn",
      "space-before-function-paren": "off",
      "space-before-blocks": "off",
    },
  },

  // Configuración específica para archivos de test
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...jestPlugin.environments.globals.globals,
      },
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
    },
  },
];