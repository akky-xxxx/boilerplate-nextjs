module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next",
    "./configs/eslint/js",
    "./configs/eslint/next",
    "./configs/eslint/unicorn",
    "./configs/eslint/import",
    "./configs/eslint/ts",
    "prettier",
  ],
  ignorePatterns: ["**/lib/**/*"],
}
