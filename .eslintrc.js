module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true,
    "cypress/globals": true
  },
  "extends": [ 
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest", "cypress", "react-hooks"
  ],
  "rules": {
    "indent": [
      "error",
      2  
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "no-console": 0,
    "react/prop-types": 0
  }
}
