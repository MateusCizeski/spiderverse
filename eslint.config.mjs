import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginImport from "eslint-plugin-import";
import pluginUnusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(["next/core-web-vitals", "prettier"], "next/typescript"),
  {
    plugins: {
      import: pluginImport,
      unusedImports: pluginUnusedImports,
    },
    rules: {
      "import/no-unresolved": "error",
      "import/order": ["warn", { groups: ["builtin", "external", "internal"] }],

      "unused-imports/no-unused-imports": "error",
      "import/order": ["error", { "newlines-between": "always" }],
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];
