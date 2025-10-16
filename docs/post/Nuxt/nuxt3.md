# Nuxt3配置入門
###### tags: `Nuxt`

### SPA(Single Page Application)跟SSR(Server Side Rendering)的差別
- SPA應用：也就是單頁應用(切換頁面其實就是切換元件，始終都是在`index.html`檔案裏)，這些多是在客戶端的應用，**不能進行SEO優化（搜索引擎優化）。**
  - ![](https://i.imgur.com/dl0fVkL.png)
- SSR應用：在服務端進行渲染，渲染完成後返回給客戶端，**每個頁面有獨立的URL，**對SEO友好。**(因為搜尋引擎能直接爬到在 HTML 上的內容)
  - ![](https://i.imgur.com/Otix5of.png)
- SPA+SSR應用：在服務端進行渲染，**會回傳兩種檔案，一是完整的 HTML 檔案，二是跑 SPA 模式時會用到的檔案**，渲染完成後返回給客戶端後就會跑 SPA 模式。
  - ![](https://i.imgur.com/KklNP9i.png)


### Nuxt3新特性
- 更輕量：以現代瀏覽器為基礎的情況下，**服務器部署和客戶端產物最多減小75倍。**
- 更快：用動態服務端代碼來優化冷啟動。
- Hybird：增量動態生成和其他高級模式現在都成為可能。
- Suspense: 在導航觸發的前後，皆可以在任何元件中取得數據資料。
- Composition API : 使用 Composition API 和 Nuxt 3 的 Composables 實現真正的程式碼可重用性。
- Nuxt CLI：全新的零依賴體驗，幫助你輕鬆建立專案與模組整合。
- Nuxt Devtools ：專屬開發除錯工具，提供更多的資訊與快速修復，讓工作更高效。
- Nuxt Kit ：具備基於 TypeScript 和跨版本兼容性的全新模組開發。
- Webpack5 ： 更快的構建速度和更小的構建包，並且零配置。
- Vite：**使用 Vite 作為打包工具**，體驗閃電般快速的 HMR。
- Vue3 ： **完全支持Vue3語法**
- TypeScript：由原生TypeScript和ESM構成，沒有額外配置步驟。

### 創建專案
```javascript=
npx nuxi init `project name`
```

### 默認目錄結構
```
- .nuxt               // 自動生成的目錄，用於展示結果
- node_modules        // 項目依賴包存放目錄
- .gitignore          // Git的配置目錄，比如一些文件不用Git管理就可以在這個文件中配置
- app.vue             // 項目入口文件，你可以在這里配置路由的出口
- nuxt.config.ts      // nuxt項目的配置文件
- package-lock.json   // 鎖定安裝時包的版本，以保證其他人在 npm install時和你保持一致
- package.json        // 包的配置文件和項目的啟動調式命令配置
- README.md           // 項目的說明文件
- tsconfig.json       // TypeScript的配置文件
```

### 需要自己新增的目錄
```
-------------常用
- pages               // 開發的頁面目錄
- components          // 組件目錄
- assets              // 靜態資源目錄
- layouts             // 項目布局目錄
--------------

-------------其他
- composables         // nuxt會自動導入vue中的組合式API
- layouts             // nuxt提供了一種可定制的布局框架
- middleware          // nuxt提供了一種可定制的路由中間件框架，可定制路由策略
- plugins             // 插件目錄，nuxt將自動注冊插件
- public              // 網站根目錄
- server              // 服務端路由
- env                 // 全局環境變數
-------------
```

### [引入自訂義CSS](https://stackoverflow.com/questions/69953025/nuxt-3-resolver-resolvemodule-is-not-a-function)
> 只能全局引入一隻功能類型的(ex mixin or palette)scss檔案，但你可以把多個import在一隻檔案裡再一併引入
```javascript
// in nuxt.config.ts
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 全局提供 variables裡包含了mixin、palette
          additionalData: '@import "~/assets/scss/_variables.scss";',
        },
      },
    },
  },
  // 全局css
  css: [
    "~/assets/scss/app.scss",
  ],
})
```

### [定義head](https://v3.nuxtjs.org/api/composables/use-head)
>Nuxt最重要也最方便的點就是可以依照不同頁面定義不同的meta或title、description

你可以每頁定義不同的meta、引入不同的字體或不同的套件等等...
```javascript
const title = ref<string | any>('Index Page')
const description = ref<string>('Index Page Description')
useHead({
  title,
  meta: [{
    name: 'description',
    content: description,
  }],
})
```

### [路由<pages 目錄>](https://v3.nuxtjs.org/guide/directory-structure/pages)
- 基礎路由
    1. 在`pages`裡新增檔案就可以直接利用`NuxtLink`做跳轉
    ```javascript
     <NuxtLink to="/">Index Page</NuxtLink>
    ```
    2. 在pages裡**創建跟父層檔案名一樣的資料夾**就可以做鑲套路由，超方便
    ```html
    // in nested.vue
    <template>
      <div>
        <h1>Nested Page</h1>
        <NuxtChild></NuxtChild>
        <NuxtLink to="/nested/child">/nested/child</NuxtLink>
        <NuxtLink to="/nested/child2">/nested/child2</NuxtLink>
      </div>
    </template>

    ```

    ```html
    //in nested/child.vue
    <template>
      <div>
        <h1 >Child Page</h1>
        <NuxtLink to="/nested">to Nested Page</NuxtLink>
      </div>
    </template>
    ```
2. [動態路由 適合用來做**重複性相當高**的頁面](https://v3.nuxtjs.org/guide/directory-structure/pages#dynamic-routes)
> 動態路由規則為 ~/pages/[[slug]]/index.vue or ~/pages/[[slug]].vue
```
-| pages/
---| index.vue
---| users-[group]/
-----| [id].vue
```

- 基本用法
適合場景: 一頁有很多不同子頁，**標題跟內容都是根據api回傳**
1. 建立`user.vue`
2. 建立父層資料夾把上面的`users-[group]/[id].vue`包起來，變成`user/users-[group]/[id].vue`
3. user.vue頁如下：
```javascript
// in user.vue
const route = useRoute()
const description = ref<string>('User敘述...')
useHead({
  title: `${route.meta.title}`,
  meta: [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'og:title',
      content: `App Name - ${route.meta.title}`,
    },
  ],
})

definePageMeta({
  title: 'User',
})

<template>
  <div>
    <h1 class="text-xl">
      User Page(Dynamic params page)
    </h1>
    <NuxtPage :custom-props="..."/>
    <div class="flex space-x-2">
      <NuxtLink to="/user/users-admins/123" class="py-2 px-3 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-cyan-500/50 focus:outline-none">
        Go /users-admins/123
      </NuxtLink>
      <NuxtLink to="/user/users-permission/123" class="py-2 px-3 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 focus:outline-none">
        Go /users-permission/123
      </NuxtLink>
      <NuxtLink to="/user/users-settings/123" class="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500/50 focus:outline-none">
        Go /users-settings/123
      </NuxtLink>
    </div>
  </div>
</template>
```

4. 子頁面透過`props`來刷新meta並透過`params`拿取資料
```javascript
// user/users-[group]/[id].vue
const props = defineProps(['customProps'])

const { currentNews } = toRefs(props)
const description = ref<string>(props.customProps.description)

useHead({
  title: `${props.customProps.title}`,
  meta: [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'og:title',
      content: `${props.customProps.title}`,
    },
  ],
})

<template>
  <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
</template>
```
### [中間層 <middleware 目錄> ** 重要 **](https://v3.nuxtjs.org/guide/directory-structure/middleware)
> middleware翻譯為中介層，介於server端跟client，因此**可以在畫面渲染完前是先拿到server端的資料**，有點類似於`vue-router`的路由守衛，**但他能夠做更多事**

1. 你可以用它來檢查權限，重定向，發api請求...都沒人攔你了
2. 命名規範如`components`為 kebab-case，例: someMiddleware => some-middleware）
```
-| middleware/
---| someMiddleware.ts
```
```javascript
// 範例 檢查params
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
  return navigateTo('/')
})

// in page
<script setup>
definePageMeta({
  middleware: ["some-middleware"]
  // or middleware: 'some-middleware'
})
</script>
```
3. 全局路由中間件，位於 middleware/ 目錄（後綴為 .global），每次路由更改都會自動運行。
4. 參考官網[範例](https://v3.nuxtjs.org/examples/routing/middleware/)

### [自訂義layout <layouts 目錄>](https://v3.nuxtjs.org/guide/directory-structure/layouts#enabling-the-default-layout)
> 注意：佈局名稱被規範為 kebab-case，例如: someLayout => some-layout。
- 可以定義多個layout，並在`middleware`裡動態切換每一頁的layout，參考[setPageLayout ](https://v3.nuxtjs.org/api/composables/set-layout)
```
-| layouts/
---| default.vue
---| custom.vue
....etc
```

- 基本用法
```html
// in layout/default.vue
<template>
  <div id="default-layout" class="layout select-none">
    <Navbar />
    <main class="w-4/5">
      <slot />
    </main>
    <footer class="bg-sky-300 flex-center">
      footer
    </footer>
  </div>
</template>
```

```html
// in app.vue
<NuxtLayout>
  <NuxtPage />
</NuxtLayout>
```

### [自訂義Hook <composables 目錄>](https://v3.nuxtjs.org/guide/directory-structure/components)
> Nuxt 會自動載入這個目錄中的任何元件。
1. Nuxt 3 會自動掃描 `.js`, `.ts` 與 `.vue` 副檔名的檔案，但只有**最上層的檔案，才會自動的被載入為組合式函數**
    - ex: ./composables/useCounter.js
    - ex: ./composables/time/index.js
3. 建議在建立組合式函數可以**使用 use 作為開頭來加以識別。**

### [自訂義組件 <components 目錄>](https://v3.nuxtjs.org/guide/directory-structure/components)
> Nuxt 會自動載入這個目錄中的任何元件
 - 基礎組件
    1. **名稱會以資料夾結構命名**，如下的話就會是`BaseFooButton`
    ```
    | components/
    --| base/
    ----| foo/
    ------| Button.vue
    ```

    2. 若是像這樣就會是`Icon`
    ```
    | components/
    --| icon/
    ----| index.vue
    ```
- [只在客戶端渲染的組件(ClientOnly Component)](https://v3.nuxtjs.org/guide/directory-structure/components#clientonly-component)
1. 基本用法
```html
<template>
  <div>
    <Sidebar />
    <!-- This renders the "span" element on the server side -->
    <ClientOnly fallbackTag="span">
      <!-- this component will only be rendered on client side -->
      <Comments />
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
    </ClientOnly>
  </div>
</template>
```
2. 如果組件僅在客戶端呈現，則可以將 `.client` 後綴添加到組件中。(**註: 此功能++僅適用於 Nuxt 自動導入的組件++。手動導入的組件不會被轉換為僅限客戶端的組件。**)
```
| components/
--| Comments.client.vue
```
3. 只在serve端渲染的組件跟客戶端組件類似，將後綴改成`.server`即可
4. 交叉使用
```
| components/
--| Comments.client.vue
--| Comments.server.vue
```
```html
<template>
  <div>
    會依照環境自動顯示不同的組件
    <Comments />
  </div>
</template>
```

### [自訂義插件 <plugins目錄>](https://v3.nuxtjs.org/guide/directory-structure/plugins/)
> Nuxt 會自動載入這個目錄檔案，作為插件使用，在檔案名稱可以使用後綴 .server 或 .client，例如， plugin.server.ts 或 plugin.client.ts 來決定只讓伺服器端或客戶端載入這個插件。
```javascript
// in plugins/my-plugins.ts

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`
    }
  }
})
```


```javascript
// in other page
  const { $hello } = useNuxtApp()

  console.log($hello('name')) //Hello name
```

### [自訂義api <server目錄>](https://v3.nuxtjs.org/guide/directory-structure/server)
> Nuxt會自動掃描~/server/api, ~/server/routes, and ~/server/middleware這幾個資料夾內的檔案並自動引入
- 注意: **為了能完美支援client端及server端**，`Nuxt3`不支持`Axios`，只可以使用`$fetch API`或者使用`Nuxt3`提供的原生api方法
    - 在`Nuxt2`使用`Axios`時有些小狀況: 例如：在server端會拿到字串（json格式），部屬會噴錯，只好手動判斷如果是`server`端就先轉成物件
- `Nuxt3`使用了[ohmyfetch](https://github.com/unjs/ohmyfetch)作為預設(用起來跟`Axios`差不多)
    )
- 可以定義api後直接本地訪問`api/yourAPIName`
- 詳細可參考[此篇](https://ithelp.ithome.com.tw/articles/10301197)
#### 先使用`ohmyfetch`create一個apiFetch
```javascript
// in server/api/index.ts
import { $fetch } from 'ohmyfetch' // 記得要先下載`ohmyfetch`，不然會拿不到$featch

const apiFetch = $fetch.create({
  baseURL: '/api',
  headers: {
    'Accept': 'application/json',
    'Cache-Control': 'no-cache',
  },
})

export { apiFetch }

```
#### [定義一個api](https://v3.nuxtjs.org/guide/directory-structure/server/)
```javascript
// in server/api/greeting.ts
const data = (name: unknown) => {
  return {
    code: 200,
    data: `Hello ${name}`,
  }
}

export default defineEventHandler(async (event) => {
  const { name } = getQuery(event) // 解析查詢參數
  return new Promise((resolve, reject?: unknown) => {
    setTimeout(() => {
      resolve(data(name))
    }, 1000)
  })
})

```

- 備註: **這種用法比較適合一頁需要打數隻API的情形**，一頁只要一支的話推薦用`Nuxt3`原生提供的`useFeatch`方法，畢竟`pending`, `error`, `refresh`都幫你封裝好了
```javascript
// in pages/index.vue
import { apiFetch } from '~/server/api'

const getNameAndGreeting = async () => {
  const res = await apiFetch('greeting', {
    params: { name: 'Name' },
  })

  console.log(res) // Hello Name
}

onMounted(async () => {
  await getNameAndGreeting()
})

```
### [Nuxt提供的原生Hook](https://v3.nuxtjs.org/api/composables/use-state/)
> 詳解也可參考這篇[[Day 15] Nuxt 3 資料獲取 (Data Fetching)](https://ithelp.ithome.com.tw/articles/10301876)
1. Nuxt3中提供的數據獲取函數有以下四個：
    - useFetch
        - useFetch是對useAsyncData包裝，自動生成key同時推斷響應類型，用起來更簡單。
    - useLazyFetch (不會阻擋路由)
    - useAsyncData
        - 異步資料獲取
    - useLazyAsyncData (不會阻擋路由)
    > 注意：它們都必須在setup或生命週期鉤子中使用，回傳值如下
    - `data`: 傳入異步函數的回傳結果。
    - `pending`: 以 `true` 或 `false` 表示是否正在獲取資料。
    - `refresh / execute`: 一個函數，可以用來重新執行 `handler` 函數，回傳新的資料，類似重新整理、重打一次 API 的概念。預設情況下 `refresh()` 執行完並回傳後才能再次執行。
    `error`: 資料獲取失敗時回傳的物件。
2. 獲取/存取狀態有以下兩種
    - [useState](https://ithelp.ithome.com.tw/articles/10302323)
        - 類似pinia
    - [useCookie](https://ithelp.ithome.com.tw/articles/10304667)
        - 方便讀寫cookie

### [環境變數 <env 目錄>](https://cn.vitejs.dev/guide/env-and-mode.html#env-files)
- client端環境變數
    由於`Nuxt3`是基於`vite`製作的，拿法基本上一樣
    1. 創建`env`資料夾，裡面新增`.env.development`及`.env.production`
    2. 在`env`資料夾裡創建`env.d.ts`
    3. 在`nuxt.config.js`裡的`vite`新增`envDir: 你的env資料夾位置`
    4. **注意**: 在`webpack`或`vite`定義環境變數的時候字串要加引號，`Nuxt`不用，只要在`env.d.ts`裡面定義好就好了，**否則會拿不到**
    5. 範例
    ```javascript
    // in .env.development
    VITE_PROJECT_ENV = 'deve'

    VITE_APP_TITLE = MY NUXT3 PROJECT
    VITE_API_URL = /api
    VITE_SOME_KEY = 123
    ```
    ```javascript
    // in env.d.ts
    interface ImportMetaEnv {
      readonly VITE_APP_TITLE: string
      VITE_API_URL: string
      VITE_SOME_KEY: number
      // more env variables...
    }
    ```
    ```javascript
    // in nuxt.config.ts
    import { resolve } from 'path'

    function pathResolve(dir: string) {
      return resolve(__dirname, dir)
    }
    export default defineNuxtConfig({
      ...略
      vite: {
        envDir: pathResolve('./src/env'),
      },
    })
    ```
    ```javascript
    // in index.vue
    console.log(import.meta.env) // 結果如下圖
    ```
    ![](https://i.imgur.com/3GPbEQ6.png)
- [server端環境變數請參考這篇](https://ithelp.ithome.com.tw/articles/10303583)
> 只需記得，不能公開的金鑰或敏感訊息，會放置在`runtimeConfig`中的在app屬性內

### [其他重要檔案](https://ithelp.ithome.com.tw/articles/10295432)
- .nuxtignore
> 可以設置讓 Nuxt 編譯建構時，一些不需要或忽略檔案。
- app.config.ts
> 提供服務運行時暴露給客戶端使用的設定，因此，**請不要在 app.config.ts 檔案中添加任何機密資訊。**

### 參考文章
- [A starter example with Nuxt3 + Windi CSS + Iconify + Element-plus + Pinia + Docker](https://bestofvue.com/repo/xbmlz-nuxt-starter)
- [nuxt3配置多环境变量](https://yezipi.net/article/detail/10097)
- [nuxt3 Element-plus 自动导入](https://juejin.cn/post/7108916330153115655)
- [【Nuxt3从入门到实战】巧用Nuxt插件机制，扩展强化Nuxt的利器！](https://www.51cto.com/article/693625.html)
- [不只懂 Vue 語法：以 Vue 和 Nuxt 為例，說明 SPA 和 SSR 的概念？](https://github.com/xiaoluoboding/nuxt3-starter)
- [19. Nuxt Middleware，請求與回應間的中盤商](https://ithelp.ithome.com.tw/articles/10207822)
- [dotenvはもう古い！最新Nuxtの環境変数管理方法](https://zenn.dev/tai_hatake/articles/c0d754bb7ae230)
- [历时两个月！Nuxt3从入门到实战！你值得收藏！](https://juejin.cn/post/7037336504418435103)
- [Ryan (ryanchien8125) Nuxt 3 學習筆記 系列全篇(推薦閱讀，很詳細)](https://ithelp.ithome.com.tw/users/20152617/ironman/5934)
- [Day03 - 深入淺出 CSR、SSR 與 SSG](https://ithelp.ithome.com.tw/articles/10266781)
- [Nuxt 3 特色功能（二）网页头部](https://juejin.cn/post/7103696957327015943)
    
### 網上大神的開源模板
- [oku-nuxt3-template 使用tailwindcss](https://github.com/productdevbook/oku-nuxt3-template)
- [nuxt3-starter](https://ithelp.ithome.com.tw/articles/10262891)