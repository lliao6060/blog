# Vuex 入門
###### tags: `Yan`, `Vuejs`, `Vuex`, `Demo`

## State

狀態容器，類似 data 存放資料用

```javascript=
const store = new Vuex.Store({
  state: {
    config: {}
  }
})
```


## Getter

計算狀態，類似 computed

```javascript
const store = new Vuex.Store({
  state: {
    config: {
      username: 'Johnny',
      age: 3000
    },
    posts: [
      {
        type: 1,
        value: 10
      },
      {
        type: 1,
        value: 20
      },
      {
        type: 2,
        value: 30
      }
    ]
  },
  getters: {
    postType1(state) {
      return state.posts.filter(post => post.type === 1);
    },
    postType1Max(state, getters) {
      return Math.max(...getters.postType1.map(post => post.value));
    },
    info(state) {
      return state.config.username + ' ' + state.config.age;
    }
  }
})
```

## Mutation

單一行為方法，行為單純，用於直接修改 state 使用（給 action 調用，不直接由組件內調用）
**※必須同步執行**
```javascript
const store = new Vuex.Store({
  state: {
    config: {}
  },
  mutations: {
    updateConfig(state, newConfig) {
      state.config = newConfig;
    }
  },
})
```

## Action

複合行為方法，行為具備邏輯判斷，用於組件內調用，禁止直接在 action 中修改 state，透過組合調用 mutations來改變狀態
**※可以異步執行**

```javascript
const fakeConfig = {
  username: 'Johnny',
  age: 3000,
};

const store = new Vuex.Store({
  state: {
    config: {}
  },
  mutations: {
    updateConfig(state, newConfig) {
      state.config = newConfig;
    }
  },
  actions: {
    async getConfig(store) {
      // commit(mutation 名稱, 欲修改傳入的新資料);
      store.commit('updateConfig', fakeConfig);
    }
  },
})
```

## 組件調用

### 存取狀態

```html
<template>
  <div>
    存取state: {{ $store.state.config.username }}
    存取getters: {{ $store.getters.info }}
  </div>
</template>
```

```javascript
export default {
  created() {
    this.$store.dispatch('getConfig');
  },
};
```

## Fake Api

```javascript
const userData = {
  username: 'Johnny',
  age: 30,
};

const fakeApi = function(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
};

const useApi = async function(store, ms) {
  store.commit('updateAPILoading', true);
  await fakeApi(ms);
  store.commit('updateAPILoading', false);
};

const store = new Vuex.Store({
  state: {
    userData: {},
    APILoading: false,
  },
  mutations: {
    updateAPILoading(state, bool) {
      state.APILoading = bool;
    },
    updateUserData(state, newUserData) {
      state.userData = newUserData;
    },
  },
  actions: {
    async getUserData(store) {
      await useApi(store, 1000);
      store.commit('updateUserData', userData);
    },
  },
});

new Vue({
  el: '#app',
  store,
  created() {
    this.$store.dispatch('getUserData');
  },
})
```

### mapState / mapGetters
當一個組件需要獲取多種狀態時,可以使用,減少多餘的程式碼
```javascript
  computed: {

    // 本地 computed
    getTodoById() {
      return this.$store.getters.getTodoById(2);
    },

    // 使用展開運算符將 mapState 混合到外部物件中
    ...mapState([
      'count',
    ]),
    ...mapState({
      countAlias: 'count',
      countPlusLocalState(state) {
        return state.count + this.localCount;
      },
      countries: state => state.TSMarketData.countries, //用箭頭函數更簡潔
    }),

    // 使用展開運算符將 mapGetters 混合到外部物件中
    ...mapGetters([
      'doneTodos',
      'doneTodosCount',
    ]),
    ...mapGetters({
      doneTodosAlias: 'doneTodos',
    }),
  },
};
```

### modules
- 如果在`A modules`想獲取`root modules`的方法
    ```javascript
    dispatch('root modules方法', 參數, {root: true});
    ``` 
- 如果在`組件中`想獲取`A modules`的方法
    ```javascript
      ...mapActions('A modules', ['方法']),
      ...mapState('A modules', {
      categories: state => state.indexConfig.categories,
      hot_products: state => state.indexConfig.hot_products,
      products: state => state.indexConfig.products
    })
    ``` 
- 範本
```javascript

const state = () => ({
  useApi,
});

const mutations = {

};

const actions = {

};

const getters = {};

export default { 
  namespaced: true,
  state, 
  mutations, 
  actions, 
  getters 
}
```