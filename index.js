module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "script"
  },
  "env": {
    "browser": true,
    "jquery": true
  },

  "extends": "eslint:recommended",

  "plugins": [
    "j5bot"
  ],

  "rules": {

    // custom rules
    "j5bot/vars-on-top-early-return": [2, { "allowEarlyReturn": true }],
    "j5bot/no-useless-call-allow-null": [2, { "allowNull": true }],
    
    // Possible Errors
    "no-cond-assign": 1,
    "no-console": 1,
    "no-debugger": 1,
    "no-extra-boolean-cast": 1,
    "no-extra-parens": 0,
    "no-inner-declarations": [ 1, "both" ],

    // Best Practices
    "array-callback-return": 1,
    "consistent-return": 2,
    "curly": 2,
    "dot-location": [2, "property"],
    "eqeqeq": [2, "smart"],
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 1,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": 1,
    "no-implicit-globals": 1,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-lone-blocks": 1,
    "no-loop-func": 1,
    "no-multi-spaces": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-proto": 2,
    "no-redeclare": 1,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 1,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 1,
    "no-unused-expressions": [2, {
      "allowShortCircuit": true,
      "allowTernary": true
    }],
    "no-useless-call": 0, // replaced by custom rule
    "no-useless-concat": 2,
    "no-useless-escape": 1,
    "no-with": 2,
    "radix": 2,
    "vars-on-top": 0, // replaced by custom rule
    "wrap-iife": 2,
    "yoda": [2, "never", {
      "exceptRange": true
    }],

    // Strict
    "strict": [2,"function"],

    // Variables
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow-restricted-names": 1,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-unused-vars": [1, {
      "args": "none"
    }],

    // Stylistic
    "array-bracket-spacing": [2, "always", {
      "singleValue": false,
      "objectsInArrays": false,
      "arraysInArrays": true
    }],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", {
      "allowSingleLine": true
    }],
    "camelcase": 2,
    "comma-spacing": 2,
    "comma-style": [2, "last"],
    "eol-last": 2,
    "func-names": 2,
    "func-style": [2, "declaration", {
      "allowArrowFunctions": true
    }],
    "id-length": [1, {
      "min": 3,
      "max": 80,
      "exceptions": ["$","i","l"]
    }],
    "indent": [2, 2, {
      "SwitchCase": 0,
      "VariableDeclarator": 2
    }],
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true,
      "mode": "minimum",
      "align": "value"
    }],
    "keyword-spacing": 2,
    "lines-around-comment": [2, {
      "beforeBlockComment": true,
      "beforeLineComment": false,
      "allowBlockStart": true
    }],
    "max-len": [2, {
      "code": 100,
      "comments": 80,
      "tabWidth": 4,
      "ignoreTrailingComments": true,
      "ignoreUrls": true
    }],
    "max-nested-callbacks": [2, 5],
    "max-params": [2, 5],
    "new-cap": 1,
    "new-parens": 2,
    "newline-after-var": 2,
    "newline-before-return": 0,
    "newline-per-chained-call": 2,
    "no-array-constructor": 2,
    "no-lonely-if": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-whitespace-before-property": 2,
    "object-curly-spacing": [2, "always"],
    "one-var-declaration-per-line": [2, "always"],
    "padded-blocks": [1, "always"],
    "quote-props": [2, "consistent-as-needed"],
    "quotes": [2, "single", "avoid-escape"],
    "semi": [2, "always"],
    "semi-spacing": 2,
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "always"],
    "space-in-parens": [2, "always"],
    "space-infix-ops": [2, { "int32Hint": true }],
    "space-unary-ops": 2,
    "spaced-comment": [2, "always", {
        "line": {
            "markers": ["/"],
            "exceptions": ["-", "+", "\\", "/"]
        },
        "block": {
            "markers": ["!"],
            "exceptions": ["*","/","\\"]
        }
    }],
    "wrap-regex": 2
  }
};