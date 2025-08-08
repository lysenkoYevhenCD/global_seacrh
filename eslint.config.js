import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import eslintPluginImport from 'eslint-plugin-import'
import preferArrow from 'eslint-plugin-prefer-arrow'
import react from 'eslint-plugin-react'
import {globalIgnores} from 'eslint/config'
import {version} from 'react'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.es2024,
      },
    },
    plugins: {
      import: eslintPluginImport,
      'prefer-arrow': preferArrow,
      react,
    },
    settings: {
      react: {
        version,
      },
      'import/core-modules': ['react', 'react-dom'],
      'import/internal-regex': '^src/',
    },
    rules: {
      'no-console': ['error', {allow: ['error']}],
      '@typescript-eslint/no-unused-vars': 'error',
      'no-use-before-define': 'off',

      // constants / variables
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'off',
      'one-var': ['error', 'never'],

      // generic javascript
      curly: ['error', 'all'],
      eqeqeq: 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-useless-return': 'error',
      'no-useless-call': 'error',
      'no-useless-escape': 'error',
      'no-useless-computed-key': 'error',
      'no-else-return': 'error',
      'no-return-assign': 'error',
      'no-restricted-globals': 'error',
      'no-shadow': 'off', // must be turned off for ts enum not to conflict
      '@typescript-eslint/no-shadow': 'error',
      'no-param-reassign': 'error',
      'no-return-await': 'error',
      'dot-notation': 'error',
      'no-eq-null': 'error',

      // imports
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'sibling',
            'parent',
            'index',
          ],
          pathGroups: [
            {
              pattern: '@vc/**',
              group: 'index',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {order: 'asc', caseInsensitive: true},
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',

      // codestyle - strings
      'no-useless-concat': 'error',
      'prefer-template': 'error',

      // functions
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      'prefer-arrow-callback': ['error'],
      'func-style': ['error', 'expression', {allowArrowFunctions: true}],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      // casing
      camelcase: 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],

      'react/no-children-prop': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/destructuring-assignment': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-boolean-value': 'error',
      'react/jsx-no-useless-fragment': ['error', {allowExpressions: true}],
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  prettier,
])
