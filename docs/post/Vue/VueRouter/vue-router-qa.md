# VueRouter常見問題

###### tags: `vue` `vue-router`

## vue-router 低於4版本的坑
- #### `$router.push({})`相同路徑噴錯
![](https://i.imgur.com/G9trLXu.png)

  - [解決方法1(讓瀏覽器忽略錯誤)](https://stackoverflow.com/questions/62462276/how-to-solve-avoided-redundant-navigation-to-current-location-error-in-vue) : 在後面接.catch(()=>{}); 
  =>`this.$router.push("/admin").catch(()=>{});`
  - [解決方法2](https://blog.csdn.net/pshdhx/article/details/107497500) : 在router文件夾下的index.js中加入如下代碼
  ```javascript=
  
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    const originalPush = VueRouter.prototype.push
       VueRouter.prototype.push = function push(location) {
       return originalPush.call(this, location).catch(err => err)
    }
  ```