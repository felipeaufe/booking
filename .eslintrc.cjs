module.exports = {
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "jest",
    "eslint-plugin-import-helpers",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "prettier/prettier": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          ["/^react/"],
          ["module", "/^@test-config/"],
          ["/^@elements/", "/^@components/", "/^@compositions/", "/^@pages/"],
          ["/^@config/", "/^@utils/"],
          ["/^@context/", "/^@hooks/", "/^@state/"],
          ["/^@api/", "/^@models/", "/^@errors/"],
          ["/^@src/"],
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "@typescript-eslint/no-var-requires": "off",
    "global-require": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
      },
    ],
    "react/require-default-props": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-duplicate-string": "off",
    "react/jsx-props-no-spreading": "off",
    "no-console": "off",
    "no-restricted-syntax": [
      "warn",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace)$/]",
        message: "Unexpected console statement",
      },
    ],
    "no-param-reassign": ["error", { props: false }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
  },
};
