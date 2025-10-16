# Gulp 筆記

> gulp 是 task runner 任務管理工具。
> 像是一個流水線，整個產品從無到有，都要受流水線的控制，在流水線上我們可以對產品進行管理

### 簡介
為了將工作流程自動化，也就是整合前端開發環境。
**藉由簡化工作量**，可讓開發者將重點放在功能的開發上。

#### 什麼時候需要用？
例如下列功能：

- 讓網頁自動重新整理
- 編譯 `SASS` 、程式碼檢測
- 壓縮 `CSS`, `JS`, 圖檔
- 自訂任務流程..



### 基本寫法
> 建議一個 function 只完成自己的任務內容，最後再導出任務
> 必須明確告知任務已經完成，好讓 Gulp 正常的處理流程

#### GULP 提供的 API
- `gulp.task(name, fn)` 定義一個任務名稱，接下來指定任務的工作內容
- `gulp.src(glob)` 檔案來源
- `gulp.dest(folder)` 處理後的檔案輸出位置
- `gulp.pipe` 串流來源檔案到另個外掛
- `gulp.watch` 監控任務，當檔案有更動時，便會執行相對應的任務
- `gulp.series()` 用於串行(**同步**)任務執行，可接受 `taskname` 或 `function` 作為任務執行參數。
- `gulp.parallel` 用於並行(**非同步**)任務執行，可接受 `taskname` 或 `function` 作為任務執行參數。

#### 常用插件
- [gulp-replace](https://www.cnblogs.com/jiaoshou/p/12184941.html) 字符串替換插件
- [gulp-util(gulp 4.0建議棄用)](https://www.npmjs.com/package/gulp-util)
```
gutil.log方法與console的差異是：
    1. gutil.log基於chalk的實例，也就是能在終端顯示顏色
    2. gutil.log支援傳入多個參數，列印結果會將多個參數用空格連接起來
    3. gutil.log會帶上時間戳

new gulpUtil.PluginError(pluginName, message[, options])
    - pluginName 指插件的模組名稱
    - message 可以是字串或現有錯誤。預設情況下，不會顯示堆疊。
      如果您認為堆疊對您的錯誤很重要，請將options.showStack設為true。
```

#### 範例
```javascript
const gulp = require('gulp');
const gulpReplace = require('gulp-replace');

gulp.task('replace-hash', cb => {
  gulp.src(['../dist/**/*.*'])
    .pipe(gulpReplace(/__static_hash__/g, 'custom-hash'))
    .pipe(gulp.dest('../dist/'))
  cb();
})
```

```javascript
const { series, parallel } = require('gulp');

// 給定一個任務
gulp.task('{task1}', (cb) => {
  // 任務內容
  cb();
});

// 多任務執行
gulp.serie('task1', 'task2')

// 組合使用(在package.json指定gulp '你的任務名稱')
gulp.task(
  'build',
  gulp.series('task1', 'task2')
);

```


### 參考
- [gulp 學習筆記](https://kim85326.github.io/2019/06/30/gulp-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98/)
- [Gulp 前端自動化 - 升級至 Gulp 4 完整說明](https://awdr74100.github.io/2020-01-28-gulp-upgradegulp/)
- [Gulp & Webpack 基本概念](https://hoyis-note.coderbridge.io/2021/08/12/Gulp-%E8%88%87-Webpack/)