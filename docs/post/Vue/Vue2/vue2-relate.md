# Vue2相關用法大全
###### tags: `vue` `vue.js` `vue2` `vue-router`

### watch
- [watch監聽器詳解](https://medium.com/unalai/%E8%AA%8D%E8%AD%98-vue-js-watch-%E7%9B%A3%E8%81%BD%E5%99%A8-ffee991368be)
![](https://i.imgur.com/gA4ZJFK.png)


==重點==
#### handler
- 放入我們需要處理的程序。

#### deep
- 當欲觀察值的特性為 call by reference，
例如 ++Object 時，需將 deep 值設定為 true++，
**告知 watch 需要深度觀察**。++否則會因為特性關係，無法觸發監聽器。++

#### immediate
- **監聽器預設為++當值有所變化時才會觸發++。**
如果我們希望在初始化完成後，就先觸發，執行 handler，
就可以將 immediate 值設為 true。

### 組件重新渲染
- 方法1：只需為組件設置一個**key**, 需要重新選染時更新key即可。
```javascript=
<template>
    <component-to-re-render :key="componentKey" />
</template>

export default {
  data() {
    return {
      componentKey: 0
    }
  },
  methods: {
    forceRerender() {
      this.componentKey += 1
    }
  },
  updated() {
    // check update
    console.log('view updated')
  }
}
```
- 方法2 組建上設置一個v-if 強制刷新即可。

### Vue-cli
- 想設置環境變數時
> 先創建一個`.env`
```javascript=
VUE_APP_API = `yourApiBaseUrl`
VUE_APP_CDN = assets/
```
調用方
調用方法：
```javascript=
  baseUrl: process.env.BASE_URL,
  cdn: process.env.VUE_APP_CDN,
```

- 想使用全局mixin時
> 先創建一個`vue.config.js`
```javascript=
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/styles/_mixin.scss";
        `
      }
    }
  }
}
```

### 動態麵包削導航
[動態麵包削導航](https://www.codenong.com/cs106985487/)

### [使用 `set` 新增實體中的屬性](https://ithelp.ithome.com.tw/articles/10206422)
> 針對對原本不存在的`$set`，新增多屬性用`Object.assign`＊

### 常用圖片component配製方法
- cdnImg
```javascript=
 <img :src="baseUrl + cdn + src" />
```

- backgroundImg
```javascript=
 <div 
  class="background-img" 
  :style="{ backgroundImage: 'url(' + baseUrl + cdn + src + ')' }"
></div>
```

### 錯誤全局捕捉(放在main.js)
- vue error catch
```javascript=
Vue.config.productionTip = false;
Vue.config.errorHandler = function(err, vm) {
  const { dispatch } = vm.$store;
  dispatch('updateErrMsgModal',true);
  // vuex中定義的錯誤捕捉彈窗開啟方法
  dispatch('updateErrMsg',err);
  // vuex中定義的更新錯誤捕捉彈窗內容方法
}

```

- global error catch
```javascript=
window.addEventListener('error', function(e) {
  const { dispatch } = app.$store;
  dispatch('updateErrMsgModal',true);
  dispatch('updateErrMsg',e.error); 
  return false;
});
```

- promise error carch
```javascript=
window.addEventListener('unhandledrejection', function(e) {
  const { dispatch } = app.$store;
  dispatch('updateErrMsgModal',true);
  dispatch('updateErrMsg', e.reason);
  return false;
});

// throw Error('Error in pure js');
```

### 路由配置
- 最上方記得加
```javascript=
const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
```
- 基本歷史模式
```javascript=
const router = new VueRouter({
  mode: 'history',
  routes
})
```

- 如果要做登錄驗證
> 可參考
> - [用 vue-route 的 beforeEach 实现导航守卫](https://www.jianshu.com/p/4c8358f73e03)
>- [Vue项目中实现用户登录及token验证(配合vuex)](https://blog.csdn.net/latency_cheng/article/details/78580161)
  - 在`login.vue`的`methods`裡
  ```javascript=
  login() {
    const vm = this;
    const account = vm.loginFrom.account;
    const password = vm.loginFrom.password;
    if( account == 'abcd' && password == '1234' ){
      vm.$message.success('會員登入成功!');
      localStorage.setItem('token', 'ImLogin');
      vm.$router.push('/');
    } else {
      vm.$message.error('帳號或密碼輸入錯誤'); //el-ui
    }
  },
  ```
  - 在`main.js`裡
  ```javascript=
  const token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  ```
  - 在`router.js`裡export router前加 
  ```javascript=
  router.beforeEach((to, from, next) => {
    const isLogin = localStorage.getItem('token') == 'ImLogin';
    if (to.meta.title) {
      document.title = to.meta.title
    }
    if (to.name !== 'Login' && !isLogin) {
      next({
        name: 'Login'
      })
    } else {
      next();
    }
  })
  ```



- 獲取當前路由(在app.vue)
```javascript=
watch: {
  $route(nV) {
  //使用vuex 方法改變存放變數
    this.updateNowRoute(nV.name);
    // console.log(this.$store.state.nowRoute);
  }
},
```