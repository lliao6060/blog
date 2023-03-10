# Vite vs webpack
###### tags: `vite`, `webpack`
- `webpack` 會`先打包`，然後啟動開發伺服器，請求伺服器時直接給予打包結果。
- 而 `Vite` 是`直接啟動`開發伺服器，請求哪個模組再對該模組進行`實時編譯`。
- 在 HMR（熱更新）方面，`Vite`當改動了一個模組後，**僅需讓瀏覽器重新請求該模組即可**，不像`webpack`那樣需要把該模組的相關依賴模組全部編譯一次，**效率更高**。

## [webpack](https://webpack.js.org/concepts/)
![](https://i.imgur.com/NTXJZ3i.png)

- 優點
    - 生態龐大，遇到問題90% 網路上都有辦法解決。
- 缺點
    - 構建耗時、**專案越大編譯速度越慢**。
    - 做出來的網站[google網站評分較低](https://pagespeed.web.dev/)  
## [Vite](https://cn.vitejs.dev/)
![](https://i.imgur.com/q5ZSdLt.png)

- 優點
    - 啟動快，做出來的網站[google網站評分較高](https://pagespeed.web.dev/)
    - 按需動態編譯的方式，極大的縮減了編譯時間，**專案越複雜、模組越多，`Vite` 的優勢越明顯**。
    - 內置支持 TypeScript / less/sass/stylus/postcss（需要單獨安裝所對應的編譯器） 
- 缺點
    - 沒有`webpack`成熟，無法做到太細部的調整。
    - 生態沒有`webpack`龐大，遇到問題90%需要自己解決。


## webpack vs rollup
#### [rollup](https://rollupjs.org/guide/en/)
> 官方解析：Rollup 是一個 JavaScript 模塊打包器，可以將小塊代碼編譯成大塊複雜的代碼，例如 library 或應用程序。

#### [webpack](https://webpack.js.org/concepts/)
> 官方解析：webpack 是一個現代 JavaScript 應用程序的靜態模塊打包器(module bundler)。當 webpack 處理應用程序時，它會遞歸地構建一個依賴關係圖(dependency graph)，其中包含應用程序需要的每個模塊，然後將所有這些模塊打包成一個或多個 bundle。

### 結論
**`rollup`偏向應用於js庫，`webpack`偏向應用於前端工程，UI庫**；
如果你的應用場景中只是js代碼，希望做ES轉換，模塊解析，可以使用`Rollup`。
如果你的場景中涉及到`css`、`html`，涉及到復雜的代碼拆分合併，建議使用`webpack`。

### 總體來說
 **`Vite`在一些細部調整上（像是 [打包時指定資料夾不要加hash](../Issue/vue-cli-images-output.md)）還是無法完全取代`webpack`**，生態還不夠完整。
 根據[Vite 实践：Vue 旧项目迁移](https://juejin.cn/post/7038883564422692901)內文敘述，`chunkFileNames`，`assetFileNames` 拿不到具體路徑，目前沒有解決方法。
 官網類可以直上`Vite`(如果不須太細部的調整)。
 後台建議保留`webpack` dev & build 的能力， **`Vite` 僅作為開發的輔助**，等相關工具再完善一些， 再考慮完全遷移過來。
 
### 參考文章
- [[專案實戰] Webpack to Vite， 為開發提速！](https://www.gushiciku.cn/pl/gHc5/zh-tw)
- [Vite当前可用于生产吗，对比webpack有什么不足吗?](https://www.zhihu.com/question/447025978)
- [rollup和webpack使用场景分析](https://baolei.blog.csdn.net/article/details/99841458?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-99841458-blog-109353622.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-99841458-blog-109353622.pc_relevant_paycolumn_v3&utm_relevant_index=2)
- [前端新工具：Vite](https://w3ctim.com/post/77cd4175.html#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B)
- [2021年了，vite能投入生产了吗？vite.config.js配置踩坑](https://juejin.cn/post/6989475484551610381)
- [Vite 实践：Vue 旧项目迁移](https://juejin.cn/post/7038883564422692901)
- [Rollup 使用教程](https://github.com/JohnApache/rollup-usage-doc)
- [Vite - change ouput directory of assets](https://stackoverflow.com/questions/71180561/vite-change-ouput-directory-of-assets)