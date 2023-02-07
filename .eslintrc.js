/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'jsx-a11y', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    //? Common
    'no-alert': 0,
    'no-shadow': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-unused-vars': 0,
    'no-extra-boolean-cast': 0,
    'no-return-assign': 2,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,

    'object-curly-spacing': [1, 'always'],
    'prefer-destructuring': [
      1,
      {
        object: true,
        array: false,
      },
    ],

    //? For react
    'react/jsx-key': 2,
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react/no-children-prop': 0,
    'react/self-closing-comp': 1,
    'react/jsx-boolean-value': 0,
    'react/no-array-index-key': 1,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,

    //? For a11y
    'jsx-a11y/alt-text': 1,
    'jsx-a11y/control-has-associated-label': 0,

    //? For react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    //? For import
    'import/no-duplicates': 2,
    'import/prefer-default-export': 0,
    'import/no-useless-path-segments': 2,
    'import/no-extraneous-dependencies': 0,

    // "import/order": [
    //   1,
    //   {
    //     "groups": [
    //       "external",
    //       "unknown",
    //       "internal",
    //       "builtin",
    //       "parent",
    //       "sibling",
    //       "index",
    //       "object",
    //       "type"
    //     ],
    //     "pathGroups": [
    //       {
    //         "pattern": "@/**",
    //         "group": "internal"
    //       },
    //     ]
    //   }
    // ]
  },

  //? For typescript
  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['./tsconfig.json'],
      },

      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          1,
          {
            vars: 'all',
            args: 'none',
          },
        ],
        //? Relate to "any" type
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',

        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
  ],
};
