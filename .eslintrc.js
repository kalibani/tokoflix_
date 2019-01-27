module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
      browser: true,
      node: true,
      jest: true
    },
    extends: 'airbnb',
    // add your custom rules here
    rules: {
      'max-depth': ['warn', {
        'max': 3
      }],
      'linebreak-style': 'off',
      'react/no-array-index-key': [ 'off' ],
      'max-len': [ 'off' ],
      "react/forbid-prop-types": [1, { "forbid": [ 'any'] }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      'react/no-danger': [ 'off' ],
      'import/extensions': ['error', 'always', {
         js: 'never'
      }],
      'jsx-a11y/label-has-for': [ 0, {
        'components': [ 'Label' ],
        'allowChildren': true
      }],
      'no-console': ['error',  { allow: ['warn'] }],
      'comma-dangle': ['error', 'never'],
      'no-unused-vars': ['error', {
        'args': 'none',
        'caughtErrors': 'all'
      }],
      'no-shadow': ['off', { allow: ['props'] }],
      'no-param-reassign': ['warn', { props: false }],
      'import/no-extraneous-dependencies': 0,
      'no-underscore-dangle': 'off',
      'no-nested-ternary': 'off',
      'radix': 'off',
      'func-names': 'off',
      'prefer-destructuring': 'off',
      'newline-per-chained-call': ['error', {
        'ignoreChainWithDepth': 6
      }],
      'no-plusplus': [2, {
        'allowForLoopAfterthoughts': true
      }],
      'no-underscore-dangle': ['error', { 
        'allow': ['_id'] 
      }]
    },
    globals: {},
    settings: {}
  }