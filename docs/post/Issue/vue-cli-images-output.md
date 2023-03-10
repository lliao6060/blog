# vue-cli build時圖片打包問題
###### tags: `情境問題`

### 參考
- [Webpack file-loader, how to use outputPath function](https://stackoverflow.com/questions/58950718/webpack-file-loader-how-to-use-outputpath-function)
- [webpack config](https://v4.webpack.js.org/loaders/file-loader/#name)

#### 要求
1. src/assets/images/modal的檔案, 直接copy 到 dist/img/modal/, modal 的打包保留資料夾, 檔名使用原檔名, 不要hash


```javascript
// in vue.config.js
  //設置img 打包
  chainWebpack: config => {
    config
      .module
      .rule("images")
      .test(/\.(jpe?g|png|gif)$/i)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 10000,
        //設置build完modal裡的圖不加hash
        name(resourcePath, resourceQuery) {
          if (/modal/.test(resourcePath)) {
            return '[name].[ext]';
          }

          return '[name][hash:8].[ext]';
        },
        //設置build完img裡面保留modal資料夾
        outputPath: (url, resourcePath) => {
          if (/modal/.test(resourcePath)) {
            return `img/modal/${url}`;
          }
          return `img/${url}`;
        }
      })
      .end()
  },
```

