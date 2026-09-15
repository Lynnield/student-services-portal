export default [
  {
    ignores: ["node_modules/", "dist/"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        console: "readonly",
        exports: "readonly",
        require: "readonly",
        module: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
];
