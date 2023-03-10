# Webpack 入門

## npm init -y
建立 package.json

## npm i --save-dev webpack
安裝 webpack 套件

## 建立 webpack config(不常這樣寫)
要給出入口，出口 path 需要絕對路徑，需要用 nodejs 原生 path 模組的 join 組合 __dirname 到指定資料夾。

- __dirname: 是 nodejs 的環境變數，可以取得當前檔案的資料夾路徑

```js
// 引入 webpack
const webpack = require('webpack');
// 引入原生模組
const path = require('path');

// 設定 webpack config
const config = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
};

// 使用 config 建立 webpack 的 compiler
const compiler = webpack(config);

// 執行 compiler 編譯
compiler.run();
```

並透過 nodejs 執行

```json
{
  "scripts": {
    "dev": "node webpack.js"
  },
  "devDependencies": {
    "webpack": "^5.39.1",
  },
}
```


## webpack-cli
webpack 的指令集套件，可以把上述設定簡化如下：

```js
const path = require('path');

const config = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
};

// 輸出 config 給 webpack-cli 讀取
module.exports = config;
```

並調整 package.json scripts:

```json
{
  "scripts": {
    "dev": "webpack --watch --config webpack.js" 
    //--後接指令,後接要讀的檔案
    //watch same to css watch
  },
  "devDependencies": {
    "webpack": "^5.39.1",
    "webpack-cli": "^4.7.2",
  },
}
```


## webpack-dev-server
webpack 開發伺服器套件，可使用許多像是熱處理等功能

```js
const path = require('path');

const config = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // devServer 是專門設定 webpack-dev-server 的地方
  devServer: {
    contentBase: './dist', // serve 的 static 資料夾
    hot: true, // 熱處理
  },
};

module.exports = config;
```

修改 package.json

```json
{
  "scripts": {
    "dev": "webpack serve --config webpack.js" //要啟用加serve就行
  },
  "devDependencies": {
    "webpack": "^5.39.1",
    "webpack-cli": "^4.7.2",
    "webpack-dev-server": "^3.11.2"
  },
}
```