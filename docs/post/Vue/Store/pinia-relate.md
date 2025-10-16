# Pinia入門
###### tags: `pinia`

參考
 - [Pinia - Vuex 的後繼者]((https://johnnywang1994.github.io/book/articles/js/pinia-intro.html#install))
 - [Pinia 快速入門](https://blog.csdn.net/wx_15896014638/article/details/118931645?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164724218316780274111752%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=164724218316780274111752&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_click~default-1-118931645.article_score_rank&utm_term=Pinia&spm=1018.2226.3001.4187)
 - [還在用vuex嗎，pinia(菠蘿頭)才香](https://blog.csdn.net/weixin_42232622/article/details/122811173?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_antiscanv2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_antiscanv2&utm_relevant_index=2)
 - [拥抱pinia，快速上手，详解指南](https://juejin.cn/post/7063376847198748702)

## vuex4缺點
- 改變一個`state`的值，如果是更新需要定義`mutations`和`actions`，並且使用`dispatch`調用
- ==添加typescript需要自定義復雜的類型來支持ts==
- 想把state分成多個部分，就需要用到 module(定義module很麻煩)
- 從vue3開始。 `getters`的結果不會像計算屬性那樣緩存了
- 模塊間嚴重嵌套

## Pinia優點
- 完整的 `TypeScript` 支持；天生具備完美的類型推斷
- 支持兩種語法創建 Store：Options Api 和 Composition Api
- 可以構建多個store，打包管理會自動拆分
- **模塊化的設計**，便於拆分狀態，能很好支持代碼分割；
- 沒有嵌套的模塊，可以聲明多個Store，且仍然能夠在存儲空間之間進行交叉組合
- 沒有命名空間的模塊 `namespaced`模塊，或者說所有的store都是獨立的`module`
- 輕巧， 僅有 1 KB
- 支持Vue DevTools， SSR和Webpack 代碼拆分
- 無論是Vue2或是Vue3都可以使用，**且不一定要與 Composition API 一起使用**，API 的使用方式在兩者中也是保持一致的。

## Pinia vs. Vuex
- 移除 Mutations
- Typescript 不再需要多餘的 types 來包裝
- 不再需要引入各種 magic string，直接引入函數，享受自動補全帶來的快樂
- 不再需要動態註冊模組，預設都是動態註冊
- 拋棄 Nested Module(巢狀module)
- 無痛產store module

### install
```
yarn add pinia
```

### 創建store
in store/index.js
```javascript=
import { createPinia } from 'pinia';

// 創建 pinia
const pinia = createPinia();

export default pinia;
```

in main.js
```javascript=
import { createApp } from 'vue';
import App from './App.vue';
import pinia from './store';

const app = createApp(App);

// 綁定 pinia 到 app
app.use(pinia);

app.mount('#app');

//
```

### 創建module
引入 defineStore 方法，Options 與 Vuex 除了 mutations 以外基本相同，包含 state, getters, actions
```javascript=
import { defineStore } from 'pinia';

// 這邊 defineStore 會自動動態註冊模組，回傳值為 hook function
export const useDemoStore = defineStore('Main', {
  // 注意 state 是一個 function，推薦使用 arrow function
  // 可幫助 typescript 更好進行類型推斷
  state: () => {
    return {
      count: 100,
      quantity: 10
    };
  },

  getters: {
    countTotal: (state) => state.count * state.quantity
  },

  actions: {
    countChange: (val) => {
      console.log(val, 'action中的參數');
      this.count ++
      this.quantity ++
      //or
      // this.$patch({})
      // this.$patch(state => {})
    }
  },
})
```

### 在組件中使用
```javascript=
//app.vue
  import { useDemoStore } from '@/store/main.js'
  import { storeToRefs, mapState } from 'pinia'
  import { computed } from 'vue';
  
  const demoStore = useDemoStore()
  const { countChange } = demoStore
  //可以這樣拿(解構)
  // const { count, quantity, countTotal } = storeToRefs(demoStore)


  //也可以像是vuex一樣的拿法
  computed(() => {
    return {
      ...mapState(useDemoStore, ['count', 'quantity', 'countTotal']),
    }
  })

  //修改state中的數據
  const demoStoreChange = () => {
    demoStore.$patch(state => {
      state.count++
      state.quantity++
    })

    //邏輯較多時 可以寫在actions裡 直接調用
    // countChange()
  }
  
  //in html記得要用demoStore去拿裡面的東西
  <p>count: {{ demoStore.count }}</p>
  <p>quantity: {{ demoStore.quantity }}</p>
  <p>count total: {{ demoStore.countTotal }}</p>
```
