# 前端面試問題大全

###### tags: `面試`

## Introduction

主要是開發各式遊戲內瀏覽器的活動頁面，跟遊戲相關周邊網站頁面等等。

團隊目前使用的技術是 Vue.js、SCSS 跟偶爾 Nuxt.js

## Part 1: HTML, CSS, SCSS

### Basic

#### HTML
1. HTML 中，`meta viewport` 是做什麼用的？為何需要設定？
2. 什麼是回流和重繪？
3. iframe 有哪些優缺點？
4. script 標籤中 defer 和 async 的區別？HTML 的加載

#### CSS
1. 簡單描述 CSS box model 的層次關係，由內向外分別是什麼？
2. display: inline, block, inline-block 的差異？
3. 如何定義一個 CSS 動畫，會用到什麼 at method？
4. 如何定義在不同尺寸下套用不同 CSS 設定來完成 RWD 需求，會用到什麼 at method？
5. position: static, relative, absolute, fixed 差異？
6. vw, vh, vmin, vmax 是什麼？

#### SCSS
1. 什麼是 SCSS，為何需要用？簡單說一下優點

### Advanced

#### CSS
1. px, em, rem 差異？
2. @media 除了 max-width, min-width 以外，舉一個其他可以使用的屬性

#### SCSS
1. SCSS 中的 @extend, @include, @import 分別是什麼？
2. @mixin, %placeholder 的差異

### Master

#### CSS
1. 哪些方法能保持一個區塊維持固定的比例大小且自適應？
2. BEM 是什麼？
3. 如何用 CSS 限制元素滾動到底部後的行為？

#### SCSS
1. 什麼是 SCSS `@function`，可以做什麼？
2. SCSS `@for`, `@each` 的差異
3. 如何在 SCSS 中進行打印除錯？（提示：會用到什麼方法？）
4. & 在 SCSS 中代表什麼意思？

## Part 2: JavaScript

### Basic
1. var, let, const 的差異
2. 有哪些方法可以取得浮點數中整數位數字？
3. 解釋同步跟非同步的差異？（用過哪些函數是同步，哪些是非同步？）
4. 什麼是 AJAX？
5. 如何用 JS 產生隨機整數介於 1-10 之間？
6. 定義函數的有幾種方式？
7. call、apply、bind 的差別？
8. async/await 和 Promise 的關係
9. GET 和 POST 的區別
10. JS 的數據類型有哪些？
11. 對於 this 的理解？

### Advanced
1. 物件中的 getter, setter 是什麼？
2. NaN, null 分別是什麼資料類型？
3. 什麼是 setTimeout, setInterval？
4. 什麼是 Promise？在創建 Promise 時，請問內部的動作會立即執行嗎？
5. 合併陣列的幾種方式？
6. 合併物件的幾種方式？
7. event target, currentTarget？
8. 防抖（Debounce）和節流（Throttle）是什麼？

### Master
1. for...of, for...in, forEach 的 loop 效能差異排序
2. Promise.all 是什麼？Promise.race 是什麼？
3. JS 中該怎麼產生物件和原型鏈
4. JS 物件中的 constructor 是什麼？
5. JS 物件中的 proto 是什麼？那 func.prototype 又是什麼？
6. 何謂 recursive 遞迴？考 padStart 的實作
7. 檢查屬性是否存在物件中有幾種方法，差別為何？
8. 什麼是 requestAnimationFrame？跟 setInterval 差在哪？
9. 宏任務和微任務？

### MMMaster
1. TypeScript 中的 interface 是做什麼用的？可以定義函數嗎？
2. TypeScript 中定義數組類型的方式有哪些？
3. TypeScript 泛型？
4. Web Worker 是什麼？Service Worker 是什麼？

## Part 3: Environment

### Basic
1. 前端有哪些模組類型？
2. 什麼是前端自動化構建？
3. 使用過哪些前端編譯構建工具？

### Advanced
1. webpack entry 只能設定一個嗎？
2. webpack loader？有哪些常見的 webpack loader？
3. webpack plugin？有哪些常見的 webpack plugin？

### Master
1. webpack 構建流程簡單說明？
2. 甚麼是 ModuleFederation？
3. 甚麼是 TreeShaking？

## Part 4: Framework (Vue.js based)

### Basic
1. v-show, v-if 分別用途與差異
2. watch, computed 分別用途與差異
3. v-for 的 "key" 用途？
4. emit, props 是什麼？
5. Vue2 中為何需要 vue.$set？
6. v-model 實際做了哪些事？
7. 為何 Vue 組件內 data 須以 function 形式存在？目的？
8. 什麼是 Vuex？

### Advanced
1. 如何自定義 Vue 指令？
2. 什麼是 MVVM？跟 MVC 主要差在哪？
3. 什麼是 Virtual Dom？
4. 什麼是 Nuxt.js？

### Master
1. Vue, React 的異同
2. template, jsx, render function 優缺點
3. Vue2, Vue3 的差異
4. Vue3 狀態更新流程

## Part 5: Framework (React)

### Advanced
1. React 無狀態組件更新流程
2. [useEffect vs useLayoutEffect 差別](https://ithelp.ithome.com.tw/articles/10252118)

### Master
1. [React 事件機制](https://segmentfault.com/a/1190000039108951)
2. [React hooks 透過甚麼手段證明唯一性（執行順序）](https://juejin.cn/post/6944863057000529933)
3. React 如何確保 hook 在組件中執行而不是外部環境
4. React hook 初始化流程
5. React hook 更新流程

## Part 6: Git

### Basic
1. 什麼是版本控制？
2. Git 用過嗎？簡單解釋一下

### Master
1. Git 中檔案的狀態有主要哪三種？
2. 這三種狀態之間的流程關係為？

## Part 7: Website
1. HTTP/HTTPS？
2. CORS？之前怎麼處理的？
3. WebSocket 是什麼？
4. OSI 模型
5. localStorage, sessionStorage、cookie 的差別
6. XSS 攻擊是什麼？
7. 在網址輸入 URL 後發生了什麼？

## Part 8: 加分題
1. Nginx
2. Docker

## 參考資料

- [2023前端面试系列-- Vue 篇](https://juejin.cn/post/7191325434486161467)
- [2023前端面试系列--HTML & CSS 篇](https://juejin.cn/post/7175048315111735352)
- [做了一份前端面试复习计划，保熟～（裡面還有 React 的題目）](https://juejin.cn/post/7061588533214969892#heading-39)
- [玩过 MOBA 游戏，就能理解「防抖、节流」](https://juejin.cn/post/7070506876646981646)
- [[Day8]-新手的Web系列XSS 0x1](https://ithelp.ithome.com.tw/articles/10242816)
- [http與https的差別 - 高雄大學圖書館](https://lic.nuk.edu.tw/p/406-1012-1333,r21.php?Lang=zh-tw)
- [DAY04 - API串接常見問題 - CORS - 概念篇 (1)](https://ithelp.ithome.com.tw/articles/10267360)

## 刷題資源

- [leetcode 分类专题刷刷刷](https://github.com/vortesnail/leetcode)

