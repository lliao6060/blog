# vite 配置
###### tags: `Vite`
> Vite是取代webpack的極速構建工具
>
參考
 - [Vite 使用教程,極快的構建工具,使用入門,](https://blog.csdn.net/qq_41636947/article/details/114992350?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164809324616782089338264%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=164809324616782089338264&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-114992350.142^v3^pc_search_result_cache,143^v4^control&utm_term=vite%E5%85%A5%E9%96%80&spm=1018.2226.3001.4187)

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
```javascript
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';
import { defineConfig, loadEnv } from 'vite';
import viteImagemin from "vite-plugin-imagemin";
import ViteRestart from 'vite-plugin-restart'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import legacyPlugin from '@vitejs/plugin-legacy'
import ViteImages from 'vite-plugin-vue-images'

function pathResolve(dir) {
  return fileURLToPath(new URL(`./${dir}`, import.meta.url))
}

export default defineConfig(({ mode, command }) => ({
  base: loadEnv(mode, process.cwd()).VITE_PUBLIC,
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '@components': pathResolve('src/components'),
      '@views': pathResolve('src/views'),
      '@images': pathResolve('src/assets/images'),
    },
  },
  //跨域設定
  server: {
    host: 'localhost',
    port: 9999,
    open: false,
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
    minify: 'terser',
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
      //依不同類型檔案拆分資料夾
        assetFileNames(assetsInfo) {
          //  css样式文件
          if (assetsInfo.name?.endsWith(".css")) {
            return "css/[name]-[hash].css";
          }
          //  字体文件
          const fontExts = [".ttf", ".otf", ".woff", ".woff2", ".eot"];
          if (fontExts.some((ext) => assetsInfo.name?.endsWith(ext))) {
            return "font/[name]-[hash].[ext]";
          }

          //  图片文件
          const imgExts = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".icon"];
          if (imgExts.some((ext) => assetsInfo.name?.endsWith(ext))) {
            return "img/[name]-[hash].[ext]";
          }

          //  SVG类型的图片文件
          const imgSvg = [".svg",];
          if (imgSvg.some((ext) => assetsInfo.name?.endsWith(ext))) {  
            return "assest/icons/[name].[ext]";
          }

          //  视频文件
          const videoExts = [".mp4", ".avi", ".wmv", ".ram", ".mpg", "mpeg"];
          if (videoExts.some((ext) => assetsInfo.name?.endsWith(ext))) {
            return "video/[name]-[hash].[ext]";
          }
          //  其它文件: 保存在 assets/图片名-哈希值.扩展名  
          return "assets/[name]-[hash].[ext]";
        },
        // 打包的文件进行拆包处理/静态资源分拆打包
        manualChunks:(id)=>{
          // 这个ID，就是所有文件的绝对路径
          if(id.includes("node_modules")){
            // 因为 node_modules 中的依赖通常是不会改变的
            // 所以直接单独打包出去
            // 这个return 的值就是打包的名称
            return "vendor";
          }
       },
      },
    },
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
    // vue 可以使用 jsx/tsx 语法
    vueJsx(),
    // name 可以写在 script 标签上
    vueSetupExtend({}),
    //  https://github.com/antfu/unplugin-vue-components
    // 组件自动按需导入
    Components({
      deep: true,
      dirs: ['src/components'], // 目标文件夹
      extensions: ['vue'], // 文件类型
      resolvers: [AntDesignVueResolver()],
    }),
    // https://github.com/antfu/unplugin-auto-import
    // vue3等插件 hooks 自动引入
    AutoImport({
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
      ],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
    }),
    // https://www.npmjs.com/package/vite-plugin-imagemin
    viteImagemin() //這個要注意在CI/CD自動部屬時會噴錯 建議在本地壓縮完圖後再部屬 
    // https://www.npmjs.com/package/vite-plugin-restart
    // 通过监听文件修改，自动重启 vite 服务, 最常用的场景就是监听 vite.config.js 和 .env.development 文件
    ViteRestart({
      restart: [
        'my.config.[jt]s',
      ]
    }),
    // https://github.com/vbenjs/vite-plugin-svg-icons
    // 用于生成 svg 雪碧图，方便在项目中使用 .svg 文件
    createSvgIconsPlugin({
      iconDirs: [
        pathResolve('src/assets/img/icon'),
      ],
    }),
   // https://www.npmjs.com/package/@vitejs/plugin-legacy
   // IE和旧版chrome兼容
   legacyPlugin({
     targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
     additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
   }),
   // https://www.npmjs.com/package/vite-plugin-vue-images
   // 自动导入图像，同级目录的文件名不能重复！
    ViteImages({
      dirs: ['src/assets'], // 图像目录的相对路径
      extensions: ['jpg', 'jpeg', 'png', 'svg', 'webp'], // 有效的图像扩展
      customResolvers:[], // 覆盖名称->图像路径解析的默认行为
      customSearchRegex: '([a-zA-Z0-9]+)', // 重写搜索要替换的变量的Regex。
    }),
  ],
  envDir: pathResolve('src/env'),
}))
```

### 常用功能
#### 圖片引入
```javascript
// in utils.js
export const getImageUrl = (name) => {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}
```

#### 環境變數設置/拿取
1. 以`VITE_APP_(後面你自己取)` 命名
2. 使用`import.meta.env`拿取


#### 參考
 - [vitejs官方](https://vitejs.dev/config/)
 - [vite 配置打包之后去掉console 和 debugger](https://blog.csdn.net/yjl13598765406/article/details/122104648)
 - [vite踩坑记录](https://its401.com/article/m0_48497187/115611649)
 - [vite插件使用教程 vite-plugin-papes、vite-plugin-vue-layouts、unplugin-vue-components（vit](https://juejin.cn/post/7341533476674797579)
 - [【vite配置】vue3+vite项目vite.config.ts的配置详解（学习笔记）](https://juejin.cn/post/7320169904342515764)
 - [vite的插件推荐+vite环境基础配置+vite打包项目的常用优化](https://juejin.cn/post/7256723839941476412?searchId=20240530102018CD6C9AE28ED76EDDE937)
 - [[Vite 进阶] 配置环境变量（包含多工程、多环境配置）](https://juejin.cn/post/7330143281526292534?searchId=20240530102018CD6C9AE28ED76EDDE937)