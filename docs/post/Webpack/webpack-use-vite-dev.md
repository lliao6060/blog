# Webpack5 接入vite開發
現有專案更改 /
webpack5 接入vite開發 打包用webpack

### 參考
 - [vue2 webpack5转vite爬坑](https://juejin.cn/post/7051841849333563428)
- [[專案實戰] Webpack to Vite， 為開發提速！](https://www.gushiciku.cn/pl/gHc5/zh-tw)
- [【Vite】使用报错集锦](https://blog.csdn.net/xx344879362/article/details/114118724?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-114118724-blog-121902607.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-114118724-blog-121902607.pc_relevant_default&utm_relevant_index=2)
- [Vuejs 3 webpack : Problem with vue-template-compiler](https://stackoverflow.com/questions/64868632/vuejs-3-webpack-problem-with-vue-template-compiler)

### 安裝
```
 yarn add 
 vite 
 vite-plugin-imagemin 
 vite-plugin-vue-setup-extend -D

 @originjs/vite-plugin-commonjs
 @vitejs/plugin-vue
 vue-loader
 vue-template-compiler
```

### 更改`package.json`
```
  "scripts": {
    "dev": "vite",
    ...
  },
```

### 根目錄新增`vite.config.js` 和 `index.html`
```js
// in vite.config.js

import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { viteCommonjs } from "@originjs/vite-plugin-commonjs"

function pathResolve(dir) {
  return resolve(__dirname, dir);
}

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/common.scss";`
      }
    }
  },
  plugins: [
    vue(),
    viteCommonjs({
      //   exclude: ["lodash"], //lodash不需要进行转换
    }),
  ],
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': resolve('src'),
      '~@': resolve('src'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3001,
    // open: '/', //自動打開
    proxy: {
      '/api': {
        target: 'http://192.168.1.107:50201', //接口地址
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '/api'
        // }
      },
    }
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})

```

```html
// in index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- meta start -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="icon" href="/favicon.ico" />
    <title>Vite Vue3 Template</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

### 最後
```
  yarn dev => vite開發
  yarn build => webpack打包
```