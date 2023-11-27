# ESLint & Prettier筆記
> 參考[快速搭建 Vite+vue3+TS+ESLint+Prettier+Husky+Commitlint 项目](https://juejin.cn/post/7265455444037533755)

### 安裝

- 注意： `simple-import-sort/imports`(for eslint) 跟 `@ianvs/prettier-plugin-sort-imports`(for prettier) 則一安裝
- 如果裝`simple-import-sort/imports`記得裝記得裝`eslint-plugin-import`

```js
npm init @eslint/config // eslint初始化

// eslint + Prettier
yarn add prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue -D

// Husky + lint-staged
yarn add husky lint-staged -D
npm pkg set scripts.prepare="husky install"
npm run prepare
npx husky add .husky/pre-commit "npm run lint"

// commitlint + commitizen + cz配置器
yarn add @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog commitlint-config-cz  cz-customizable -D
npx husky add .husky/commit-msg 'npx --no-install commitlint -e "$HUSKY_GIT_PARAMS"'
npx commitizen init cz-conventional-changelog --save-dev --save-exact

yarn add eslint-plugin-simple-import-sort@latest -d 
// prettier-plugin-sort-imports 可選
// yarn add --dev @ianvs/prettier-plugin-sort-imports

```

### 配置
- package.json
```json
scripts: {
    "commit": "git add . && git-cz",
    "prepare": "husky install",
    "lint-staged": "lint-staged",
    "lint": "./node_modules/.bin/eslint --ext .js,ts,.tsx,.vue ./src --fix",
    "lint-fix": "eslint --fix .",
    "prettier": "prettier --write ./src"
},
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable"
    }
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "lint-staged"
    }
  },
  "lint-staged": { // prettier在前面可以避免和eslint的衝突
    "*.{js,ts,vue,jsx,tsx}": [
      "yarn prettier",
      "yarn lint"
    ]
  },

```

- eslint
```js
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
  },
  /* 指定如何解析语法。*/
  parser: "vue-eslint-parser",
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // typescript-eslint推荐规则,
    "prettier",
  ],
  plugins: ["vue", "import", "simple-import-sort"],
  rules: {
    // 禁止使用 var
    "no-var": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-loss-of-precision": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-empty": "off",
    "no-useless-escape": "off",
    "no-undef": "off",
    "no-irregular-whitespace": "off",
    "no-fallthrough": "off",
    "no-prototype-builtins": "off",
    "no-self-assign": "off",
    "no-case-declarations": "off",
    "no-async-promise-executor": "off",
    "no-empty-pattern": "off",
    "no-unsafe-optional-chaining": "off",
    // 下面两个规则可以去 参照4 规则看详细介绍
    "vue/html-indent": [
      "error",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 10,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    "vue/block-order": [
      "error",
      {
        order: ["script[setup]", "script:not([setup])", "template", "style"],
      },
    ],
    "vue/multi-word-component-names": "off",
    "vue/require-explicit-emits": "off",
    "vue/no-dupe-keys": "off",
    "vue/require-default-prop": "off",
    "vue/return-in-computed-property": "off",
    "vue/no-reserved-component-names": "off",
    "vue/no-side-effects-in-computed-properties": "off",
    "vue/no-v-html": "off",
    "vue/require-prop-types": "off",
    "vue/no-unused-vars": "off",
    "vue/prop-name-casing": "off",
    "vue/v-on-event-hyphenation": "off",
    "vue/no-parsing-error": "off",
    "vue/valid-v-for": "off",
    "vue/require-v-for-key": "off",
    "vue/valid-v-slot": "off",
    "vue/no-unused-components": "off",
    "vue/no-mutating-props": "off",
    "vue/attribute-hyphenation": "off",
    "vue/no-template-shadow": "off",
    "vue/no-lone-template": "off",
    "vue/no-useless-template-attributes": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // vue放在首行
          ["^vue"],
          // 同级导入. 把同一个文件夹.放在最后
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // 以字母(或数字或下划线)或“@”后面跟着字母开头的东西,通常为nodeModules引入
          ["^@?\\w"],
          // 内部导入 "@/"
          ["^@(/.*|$)"],
          // 父级导入. 把 `..` 放在最后.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // 样式导入.
          ["^.+\\.?(css|less|scss)$"],
          // 带有副作用导入，比如import 'a.css'这种.
          ["^\\u0000"],
        ],
      },
    ],
    "simple-import-sort/exports": "error", // 导出
    "import/no-duplicates": "error", // 合并同一个导入。ide自动导入，会导致impoprt {a} from 'A'和impoprt {a1} from 'A'导入2次
    "import/first": "error", // 确保所有导入位于文件的顶部
    "import/newline-after-import": "error", // 确保在导入后有换行符
  },
};

```

- prettier
> 不要按照官網的例子把vue放在第一個, 會造成 【Uncaught ReferenceError: Cannot access ‘WEBPACK_DEFAULT_EXPORT’ before initialization】錯誤
```js
module.exports = {
  printWidth: 80, //单行长度
  tabWidth: 2, //缩进长度
  useTabs: false, //使用空格代替tab缩进
  semi: true, //句末使用分号
  // singleQuote: true, //使用单引号 跟eslint一起用時要隱藏
  quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
  jsxSingleQuote: true, // jsx中x使用单引号
  trailingComma: 'all', //多行时尽可能打印尾随逗号
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  jsxBracketSameLine: true, //多属性html标签的‘>’折行放置
  arrowParens: 'always', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  requirePragma: false, //无需顶部注释即可格式化
  insertPragma: false, //在已被preitter格式化的文件顶部加上标注
  proseWrap: 'preserve', //尊重輸入中的換行符
  htmlWhitespaceSensitivity: 'ignore', //对HTML全局空白不敏感
  vueIndentScriptAndStyle: false, //不对vue中的script及style标签缩进
  endOfLine: 'lf', //结束行形式
  embeddedLanguageFormatting: 'auto', //对引用代码进行格式化
    
  可選（沒有eslint好用）
  // Since prettier 3.0, manually specifying plugins is required
  // plugins: ['@ianvs/prettier-plugin-sort-imports'],
  // // This plugin's options
  // importOrder: [
  //   '^[./]',
  //   '',
  //   '^vue',
  //   '',
  //   '<BUILTIN_MODULES>', // Node.js built-in modules
  //   '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
  //   '',
  //   '^[.]', // relative imports,
  //   '',
  //   '^@/(.*)$',
  //   '',
  //   '^.(css|scss)$',
  // ],
  // importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  // importOrderTypeScriptVersion: '5.0.0',
};


```

- husky
```json
// in pre-commit file

#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# yarn lint-staged
if git diff --cached --quiet ; then
  echo "This is a pure amend"
else
  echo "This is a commit with changes"
  yarn lint-staged
fi
```

- .cz-config.js
```js
module.exports = {
  types: [
    { value: '✨ feat: ', name: '✨ feat: 新功能' },
    { value: '🐛 fix:', name: '🐛 fix: 修正bug' },
    { value: '📦️ build: ', name: '📦️ build: 打包' },
    { value: '⚡️ perf:', name: '⚡️ perf: 性能優化' },
    { value: '🎉 release:', name: '🎉 release: 發布正式版' },
    { value: '💄 style:', name: '💄 style: 程式碼的樣式美化' },
    { value: '♻️ refactor:', name: '♻️ refactor: 重構' },
    { value: '✏️ docs:', name: '✏️ docs: 文件變更' },
    { value: '✅ test:', name: '✅ test: 測試' },
    { value: '⏪️ revert:', name: '⏪️ revert: 回話退' },
    { value: '🚀 chore:', name: '🚀 chore: 建置/工程依賴/工具' },
    { value: '👷 ci:', name: '👷 ci: CI related changes' },
  ],
  messages: {
    type: '請選擇提交類型(必填)',
    customScope: '請輸入檔案修改範圍(可選)',
    subject: '請簡單描述提交(必填)',
    body: '請輸入詳細描述(可選)',
    breaking: '列出任何BREAKING CHANGES(可選)',
    footer: '請輸入要關閉的issue(可選)',
    confirmCommit: '確定提交此說明嗎？ ',
  },
  allowCustomScopes: true,
  // 跳過問題
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72,
}

```

- commitlint.config.js
```js
module.exports = {
  extends: ['cz'],
}
```

- .vscode/settings.json
```json
{
  "editor.formatOnSave": false,
  "[typescript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  // 儲存自動修正 ESLint
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
}
```

### 參考
- [快速搭建 Vite+vue3+TS+ESLint+Prettier+Husky+Commitlint 项目](https://juejin.cn/post/7265455444037533755)
- [ESlint与Prettier配置指南](https://juejin.cn/post/7050127881371910152)
- [How to order imports in a Vue file?](https://stackoverflow.com/questions/72187864/how-to-order-imports-in-a-vue-file)
- [prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports)
- [Uncaught ReferenceError: Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization](https://stackoverflow.com/questions/65038253/uncaught-referenceerror-cannot-access-webpack-default-export-before-initi)
- [prettier-plugin-sort-imports ignores import order](https://stackoverflow.com/questions/76127977/prettier-plugin-sort-imports-ignores-import-order)
- [使用eslint自动调整代码引入顺序(react版)](https://cloud.tencent.com/developer/article/2246755)