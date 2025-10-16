# ESLint & Prettier 設定

2025 vite eslint設定

```js
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      'import': importPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    // global rules
    rules: {
      quotes: ['error', 'single'],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React imports
            ['^react'],
            // Relative imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Node modules imports
            ['^@?\\w'],
            // Internal imports
            ['^@(/.*|$)'],
            // Parent imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Style imports
            ['^.+\\.?(css|less|scss)$'],
            // Side effect imports
            ['^\\u0000'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/no-duplicates': 'error', // 合并同一个导入。ide自动导入，会导致impoprt {a} from 'A'和impoprt {a1} from 'A'导入2次
      'import/first': 'error', // 确保所有导入位于文件的顶部
      'import/newline-after-import': 'error', // 确保在导入后有换行符
      'react/display-name': 'off'
    },
  },
)
```