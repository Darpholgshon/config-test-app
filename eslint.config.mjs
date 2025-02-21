import parser from "@typescript-eslint/parser";

import eslintPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import sortPlugin from "eslint-plugin-import";

import prettierPluginRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    ignores: ["coverage/", "dist/", "node_modules/", "schema/", "scripts/", "eslint.config.mjs"],
  },
  {
    files: ["app.ts", "lib/**/*.ts", "test/**/*.ts"],
    languageOptions: {
      parser,
      ecmaVersion: 2018,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": eslintPlugin,
      prettier: prettierPlugin,
      import: sortPlugin,
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "prettier/prettier": [
        "error",
        {
          arrowParens: "always",
          endOfLine: "lf",
          printWidth: 120,
          singleQuote: true,
          trailingComma: "all",
          useTabs: false,
        },
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
          },
          "newlines-between": "always",
        },
      ],
      "sort-imports": [
        "error",
        {
          allowSeparatedGroups: true,
          ignoreDeclarationSort: true,
        },
      ],
    },
  },
  prettierPluginRecommended,
];
