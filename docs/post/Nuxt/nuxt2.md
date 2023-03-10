# Nuxt2配置入門
###### tags: `Nuxt`, `Nuxt2`
> 這是從0開始自己搭建的基本配置詳解

### 重點
1. 可以透過安裝[@nuxtjs/composition-api](https://composition-api.nuxtjs.org/)來支援`vue3`的`setup`語法(`vue2`寫法也兼容)
    - 需要設置`meta`的建議寫`vue2`寫法或者`composition-api`寫法較好設置
    - 不需設置`meta`的組件建議直上`script setup`寫法 
3. 可以透過在`nuxt.config.js`裡設置`components: true`自動全局註冊組件不需另外引入(**在組件根目錄才行**)
```
components
 | Navbar.vue // 這可以被偵測到
 | navbar
   | MenuList.vue // 這就要自己引入
```
3. 可以透過安裝[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)來自動註冊`vue`、`pinia`等等的方法(`Nuxt3不需配置`)
```
yarn add unplugin-auto-import
```
```javascript
// in nuxt.config.js

// 自動導入
const autoImportOpts = {
  imports: [
    'vue',
    'vue-router',
    'pinia',
    {},
  ],
  dts: './auto-imports.d.ts',
}

export default {
  ...略
  buildModules: ['unplugin-auto-import/nuxt', autoImportOpts],
}
```
### 創建專案
```javascript
npx create-nuxt-app <project-name>
```

### 配置`sass`
1. `Sass` 支援
```javascript
npm install --save-dev sass sass-loader
```
2. 安裝[style-resource plugin](https://github.com/nuxt-community/style-resources-module)
```javascript
npm install --save-dev @nuxtjs/style-resources
```
3. `nuxt.config.js` 編輯
```javascript
export default {
  // ... 略過 ...

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/style-resources' // 主要是這個，要加入 style-resources
  ],
  /*
  ** 這邊是要自己手動新加入的位置
  ** 樣式資源位置
  */
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/scss/app.scss' //全局樣式
  ],
  // ... 略過 ...
}
```

這樣全局樣式都可以用了
```css
<style lang="scss" scoped>
  .test {
    color: red;
    @include flex;
  }
</style>
```

### [配置layout](https://nuxtjs.org/docs/directory-structure/layouts/)
跟`Nuxt3`相比，不需要`slot`也不須用`NuxtLayout`包起來，預設頁面會使用`default`，需要更改則需要透過`layout`去做指定
```html
// in layouts/default.vue
<template>
 <div class="default-layout">
   <Navbar />
   <main>
     <Nuxt />
   </main>
   <Footer />
 </div>
</template>
```

```javascript
// 指定layout
<script>
export default {
  layout: 'blog',
  // OR
  layout (context) {
    return 'blog'
  }
}
</script>
```

### [配置i18n](https://i18n.nuxtjs.org/setup)
```
yarn add @nuxtjs/i18n
```
```javascript
// in nuxt.config.js
import { i18nConfig } from './src/plugins/i18n';

modules: [
  ['@nuxtjs/i18n',i18nConfig]
],
plugins: [
  { src: '~/plugins/i18n.js' }
],
i18n: {
  strategy: 'prefix_except_default',
  defaultLocale: 'tw',
  locales: [
    {
      code: 'en',
      iso: 'en_US',
      file: 'en_US',
    },
    {
      code: 'tw',
      iso: 'zh_TW',
      file: 'zh-TW',
    },
  ],
},
```
```javascript
// in plugins/18n.js
import en from '../lang/en-US.js'
import tw from '../lang/zh-TW.js'

export const i18nConfig = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      flag: 'openmoji:flag-us-outlying-islands',
    },
    {
      code: 'tw',
      iso: 'zh-TW',
      name: '中文',
      flag: 'emojione-v1:flag-for-taiwan',
    }
  ],
  defaultLocale: 'tw',
  vueI18n: {
    fallbackLocale: 'tw',
    messages: { en, tw }
  }
}
```

#### 語言切換
> 這塊搞超久...其實很簡單只是一直死胡同Orz
- 迴圈直接用`$i18n.locales`跑即可
- 使用`switchLocalePath(locale.code)`做切換
```javascript
// LanguageChange.vue

<script>
export default {
  name: 'LanguageChange',
  data() {
    return {
      showLangMenu: false,
    };
  },
  methods: {
    toggleLangMenu(bool) {
      if(bool) {
        this.showLangMenu = bool
      }
      this.showLangMenu = !this.showLangMenu
    }
  },
}
</script>

<template>
  <div class="flex-center">
    <div
      class="
        lang-droupdown
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        cursor-pointer
      "
      @click="showLangMenu = !showLangMenu"
    >
      <iconify-icon
        icon="fa6-solid:language"
        class="text-white"
        style="font-size: 30px"
      />

      <div
        v-show="showLangMenu"
        class="lang-droupdown__menu w-4/5">
        <nuxt-link
          v-for="(locale, i) in $i18n.locales"
          :key="`${locale.code}-${i}`"
          class="
            flex
            justify-between
            py-2
            px-4
            cursor-pointer
          "
          :class="{
            'text-white bg-gray-600 dark:bg-sky-600':
            $i18n.locale === locale.code,
            'bg-gray-300 dark:bg-gray-600 hover:bg-gray-500 hover:text-white':
            $i18n.locale !== locale.code,
          }"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
          <span class="
            flex
            items-center
            justify-center
            text-sm
          "
          >
            <iconify-icon
              :icon="locale.flag"
              class="text-base"
            />
          </span>
      </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lang-droupdown {
  &__menu {
    position: absolute;
    width: 150px;
    top: 6vh;
    right: 12.5%;
  }
}
</style>


```


### [配置pinia](https://pinia.vuejs.org/ssr/nuxt.html#auto-imports)
```
yarn add pinia @pinia/nuxt@0.2.1 @nuxtjs/composition-api
```
```javascript
// in nuxt.config.js
buildModules: [
  // Nuxt 2 only:
  // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
  '@nuxtjs/composition-api/module',
  '@pinia/nuxt',
],
```

```javascript
<template>
  <div class="align-center">
    <h1 class="title text-2xl">{{ $t('home') }}</h1>
    <p>{{ appStore.test }}</p>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/app'
const appStore = useAppStore()
</script>
```

### 配置[tailwindcss](https://tailwindcss.nuxtjs.org/) & [color-mode](https://color-mode.nuxtjs.org/)
```
 yarn add @nuxtjs/color-mode @nuxtjs/tailwindcss
```
```javascript
// in nuxt.config.js
export default {
  mode: 'universal',
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ""
  },
}
```
```javascript
// in tailwind.config.js
module.exports = {
  darkMode: "class",
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"]
  }
};
```
```javascript
// in ThemeChange.vue
<script>
export default {
  name: 'ThemeChange',
  data() {
    return {
    };
  },
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
    }
  }
}
</script>

<template>
....
<button @click="toggle"></button>

</template>
```

### [配置axios](https://axios.nuxtjs.org/)
```
yarn add @nuxtjs/axios
```
```javascript
// in nuxt.config.js
 modules: [
  '@nuxtjs/axios',
 ],
 plugins: [
  '~/plugins/axios.js',
 ],
 axios: {
  proxy: true,
 },
 proxy: {
  '/api/': {
     target: 'http://127.0.0.1:3000/api', // 目標ip
     pathRewrite: {
     '^/api/': '/',
      changeOrigin: true
    }
   }
 },
```

#### 配置`plugins/axios.js`
```javascript
export default function({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      'Content-Type': 'application/json'
    },
    transformResponse: [
      function(data) {
        if (typeof data === 'string') { // api回傳會是字串，故要再轉一下
          data = JSON.parse(data);
        }
        return data;
      }
    ]
  });

  // Inject to context as $api
  inject('api', api);
}
```
#### 注意:
1. 如果是vue2寫法可以直接使用 `this.$api.$get` or `this.$api.$post`
2. vue3的`script setup`寫法如下
```javascript
<script setup>
import { getCurrentInstance } from '@nuxtjs/composition-api' // 如果有設定auto import則省略

const { proxy } = getCurrentInstance()
const getApi = async () => {
  const res = await proxy.$api.$get('https://jsonplaceholder.typicode.com/users');
  console.log(res)
}

onMounted(async () => {
  await getApi()
})

</script>
```

### [配置remockjs](https://www.npmjs.com/package/remockjs)
```
yarn add remockjs
```
#### 注意:
1. nodejs環境下不要引入`mockXHR`和`mockRequest`
2. `mockRequest`必須在`client side`呼叫，但是`Nuxt`會在`nodejs server side`跑，所以會噴這個錯
```
TypeError: request.upload.addEventListener is not a function
```
3. 直接用`mock(schema)`(產生假資料的函數)即可。
#### 配置`plugins/remock.js`
```javascript
// in plugins/remockjs
import { mock } from 'remockjs';

const timeout = 1500
const userList = mock({
  'list|10-15': [{
    'id|+1': 1,
    name: '@name("tw")',
    profession: '@word("tw", 3, 5)',
    email: '@email("gmail.com", 8, 12)',
    avatar: 'image("50x50", @color(), "#22222")'
  }]
});

export const mockUserList = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userList)
    }, timeout)
  })
}

```
```javascript
// in nuxt.config.js
 plugins: [
  { src: '~/plugins/remock.js', mode: 'client'},
 ],
```

### 有可能會遇到的錯誤
1. [遇到`Cannot find module 'caniuse-lite/data/features/css-unicode-bidi'`](https://stackoverflow.com/questions/65519568/cannot-find-module-caniuse-lite-dist-unpacker-agents-when-running-create-react)
  - 解法:
  ```javaScript
    npm i caniuse-lite@1.0.30001281
  ```
2. 遇到`遇到 Module build failed (from ./node_modules/sass-loader/dist/cjs.js)(版本過高)`
  - [解法](https://stackoverflow.com/questions/68728903/how-to-setup-sass-scss-sass-loader-in-nuxt)
  ```
  yarn add -D sass sass-loader@10.1.1
  ```
  ```javaScript
    // in nuxt.config.js
    export default {
      build: {
        loaders: {
          sass: {
            implementation: require('sass'),
          },
          scss: {
            implementation: require('sass'),
          },
        },
      }
    }
  ```

### Nuxt2 vs Nuxt3
1. 最大差別就是`Nuxt3`沒有下面這條了↓　（因為`vite`原生用瀏覽器的server功能）
![](https://i.imgur.com/WjCc2rb.png)
2. 整體速度快很多


### 參考文章
- [nuxt官網](https://nuxtjs.org/docs/get-started/installation)
- [pinia/nuxt](https://pinia.vuejs.org/ssr/nuxt.html#typescript)
- [nuxt/tailwind](https://tailwindcss.nuxtjs.org/examples/dark-mode/)
- [fayazara/nuxt-tailwind-darkmode 模板](https://github.com/fayazara/nuxt-tailwind-darkmode)
- [nuxt2/client-example Codesandbox](https://codesandbox.io/s/hk80sj?file=/pages/index.vue:275-288)
- [Vue3 使用 getCurrentInstance 在 production 環境中不能使用 ctx ?](https://penueling.com/%E7%B7%9A%E4%B8%8A%E5%AD%B8%E7%BF%92/vue3-%E4%BD%BF%E7%94%A8-getcurrentinstance-%E5%9C%A8-production-%E7%92%B0%E5%A2%83%E4%B8%AD%E4%B8%8D%E8%83%BD%E4%BD%BF%E7%94%A8-ctx/)

### 我自己配置的模板
- [Nuxt2-tailwindcss-template](https://github.com/lliao6060/Nuxt2-tailwindcss-template)