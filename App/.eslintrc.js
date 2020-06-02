module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
      'jest': true,
      "browser": true,
      "es6": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      "no-underscore-dangle": 1,
      "arrow-body-style": 1,
      "no-shadow": 1,
      "consistent-return": 1,
      "no-nested-ternary": 1,
      "no-console": 1,
      "no-case-declarations": 1,
      "import/prefer-default-expoprt": 0,
      "indent": ["error", 2],
    },
    'globals': {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    }
  }