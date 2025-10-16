# Vue-router4筆記

###### tags: `vue` `vue-router`

## vue-router 4
參考
 - [vue-router 4 你真的熟练吗？](https://blog.csdn.net/weixin_43880397/article/details/121201217?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164722987816780271949945%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=164722987816780271949945&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-121201217.es_vector_control_group&utm_term=vue-router4&spm=1018.2226.3001.4187) 
 - [Vue Router 4 的使用，一篇文章给你讲透彻](https://blog.csdn.net/lcl130/article/details/122800643?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_paycolumn_v3&utm_relevant_index=1)

> 以vue3 script setup為例

### 下載
```
 yarn add vue-router@4
```

### 創建router
:sparkles: 注意: 錯誤捕捉重新導向跟以前不同，且:bell:==一定要放在最後 不然會出事==:bell:
```javascript=
import { createRouter, createWebHistory } from "vue-router";
let router = createRouter({
    history: createWebHistory('/'), //原先的base合併了
    routes: [
      ．．．略
      {
        path: '/:catchAll(.*)',
        redirect: '/404',
      }
    ],
})
```

### 與composition組合
```javascript=
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter() //事件中獲取 router，進行路由跳轉等等。
const route = useRoute() //獲取路由後再進行動作，比如說監聽路由等等

const initPage = () => {
  router.push({
    name: 'Index'
  })
}

const showParams = () => {
  console.log(route.path)
}

watch(route, () => {
  showParams()
})
```

### 方便功能
- 過度動畫(效果自定義)
in app.vue
```html=
<router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
```

- 設定當前route頁面tab active :bell:==記得再去設定樣式==:bell:
```javascript=
let router = [
    ....略
    
  linkActiveClass: 'active-link'
]

export default router
```

- 設定每一頁的title
```javascript=
let router = [
    ....略
]

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

export default router
```

- 始終滾動到頂部

```javascript=
let router = [
    ....略
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      left: 0,
    }
  }
]

export default router
```


- 從父頁面跳轉至子頁面，父頁面隱藏
```javascript= 
routes: [
  {
    path: '',
    name: '',
    component: () => import(''),
    meta: {
      title: '',
      showParent: true,
    },
    children: [
      path: '',
      name: '',
      component: () => import(''),
      meta: {
        title: '',
        showParent: true,
      },        
    ]
  }
],
```
然後在要隱藏的頁面加上`v-show="$route.meta.showParent"`


