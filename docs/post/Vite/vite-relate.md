# vite 配置
###### tags: `vite`
> Vite是取代webpack的極速構建工具
> 
參考
 - [Vite 使用教程,極快的構建工具,使用入門,](https://blog.csdn.net/qq_41636947/article/details/114992350?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164809324616782089338264%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=164809324616782089338264&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-114992350.142^v3^pc_search_result_cache,143^v4^control&utm_term=vite%E5%85%A5%E9%96%80&spm=1018.2226.3001.4187)
- [5个知识点，让 Vue3 开发更加丝滑](https://juejin.cn/post/7054317318343491615)

## 優點
- 由原生ESM驅動的非打包開發伺服器，類似於`webpack` + `webpack-dev-server`，但速度更快

### install
```
$ yarn create @vitejs/app your project name --template vue
$ cd your project name
$ yarn
$ yarn dev
```

### 常用配置
參考
 - [vitejs官方](https://vitejs.dev/config/)
 - [vite 配置打包之后去掉console 和 debugger](https://blog.csdn.net/yjl13598765406/article/details/122104648)
 - [vite踩坑记录](https://its401.com/article/m0_48497187/115611649)
```javascript=
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoComponents from 'unplugin-vue-components/vite'
import legacy from '@vitejs/plugin-legacy'
import viteImagemin from "vite-plugin-imagemin";
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'

const { resolve } = require('path')

function pathResolve(dir) {
  return resolve(__dirname, dir);
}

export default defineConfig(({
  mode,
  command
}) => ({
  base: loadEnv(mode, process.cwd()).VITE_PUBLIC,
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '@components': pathResolve('src/components'),
      '@images': pathResolve('src/assets/images'),
    },
  },
  //跨域設定
  server: {
    host: 'localhost',
    port: 3000,
    open: false,
    https: false,
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com', //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  build: {
    //構建後體積更小
    minify: "terser",
    //靜態資源導出路徑
    assetsDir: 'img/',
    // 確保外部化處理那些你不想打包進庫的依賴
    external: ['vue'],
    // 取消計算文件大小，加快打包速度
    reportCompressedSize: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      //依不同類型檔案拆分資料夾
      output: {
        //NOTE: 全散在外面
        // chunkFileNames: 'js/[name]-[hash].js',
        // entryFileNames: 'js/[name]-[hash].js',
        // assetFileNames: '[ext]/[name]-[hash].[ext]',

        //NOTE: 把js跟css包一起
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name.split(".");
          var extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/woff|woff2/.test(extType)) {
            extType = "css";
          }
          console.log(assetInfo.name)
          return `static/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        globals: {
          vue: 'Vue',
        },
        //依賴包過於龐大時進行拆分
        manualChunks(id) {
          if(id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      },
    },
  },
  //prod模式去除console
  terserOptions: {
    compress: {
      drop_console: command !== 'serve',
      drop_debugger: command !== 'serve'
    }
  },
  //全局都可以引用
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/styles/_mixin.scss";
        @import "@/assets/styles/_palette.scss";
      `
      }
    }
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: ["axios"]
  },
  plugins: [
    vue(),
    autoComponents({
      dirs: [
        'src/components',
        'src/layout'
      ],
      resolvers: [],
      dts: true
    }),
    //提供傳統瀏覽器兼容
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    //CI/CD自動部屬會噴錯 記得要拿掉
    viteImagemin(),
    //可以直接在script標籤上定義name
    VueSetupExtend(),
    AutoImport({
      // API 自动导入
      dts: 'src/auto-imports.d.ts',
      imports: ['vue'],
      // 解决eslint報錯問題
      eslintrc: {
        enabled: true
      }
    })
  ],
}))
```

```
in package.json

{
  "name": "vite-project",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^0.26.1",
    "pinia": "^2.0.11",
    "sass": "^1.44.0",
    "sass-loader": "8.0.2",
    "scss-reset": "^1.2.2",
    "vue": "^3.2.25",
    "vue-router": "^4.0.13"
  },
  "devDependencies": {
    "@chenfengyuan/vue-countdown": "2",
    "@vitejs/plugin-legacy": "^1.7.1",
    "@vitejs/plugin-vue": "^2.2.0",
    "maju-ui": "^1.0.7",
    "swiper": "^8.0.7",
    "unplugin-auto-import": "^0.7.1",
    "unplugin-vue-components": "^0.17.18",
    "vite": "^2.8.0",
    "vite-plugin-imagemin": "^0.6.1",
    "vite-plugin-vue-setup-extend": "^0.4.0",
    "vue3-lazyload": "^0.2.5-beta"
  }
}


```

### 常用功能
#### 圖片引入
```javascript=
// in utils.js
export const getImageUrl = (name) => {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}
```

#### 環境變數設置/拿取
1. 以`VITE_APP_(後面你自己取)` 命名
2. 使用`import.meta.env`拿取 