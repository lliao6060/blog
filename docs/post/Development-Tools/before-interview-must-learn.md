# 面試前必會

###### tags: `Interview`

[vue面試題庫](https://github.com/febobo/web-interview)

## Lesson

### Javascript
- 什麼是JavaScript
    - JavaScript一種動態型別、弱型別、基於原型的客戶端指令碼語言，用來給HTML網頁增加動態功能
        - **動態**： 在++執行時確定資料型別++。**變數使用之前不需要型別宣告，通常變數的型別是被賦值的那個值的型別。**
        - **弱類**： **計算時可以不同型別之間對使用者透明地隱式轉換**，即使型別不正確，也能通過隱式轉換來得到正確的型別。(Ex: 數字 + 字串 = 字串)
        - **原型**： 新物件繼承物件（作為模版），將自身的屬性共享給新物件，模版物件稱為原型。這樣新物件例項化後不但可以享有自己建立時和執行時定義的屬性，而且可以享有原型物件的屬性。(類似於遺傳)
        (PS：新物件指函式，模版物件是例項物件(通過建構函式 new 出來的稱作例項物件)，例項物件是不能繼承原型的，函式才可以的。)


### var, let, const(m)

- **“var”**— 在ES6推出“let”宣告方法後，JavaScript最弱的變數宣告，
使用在**變數可能或不會被重新賦予值**，或者**宣告範圍在整個函式(function)或者區塊(block)中**
==(容易造成全域變數)==。
- **“let”**— 一般使用在變數(variable)可能會被重新指定值。
  - ex: 用在迴圈(for loop)中，一開始的變數宣告使用。
- **“ const ”**— 一般使用在識別值(identifier)不會被重新指定值。
  - ex: 宣告**恆定不做改變的變數** — `const vm = this`

### 原始型別、物件型別(s)
ps. 只要記得那些是原始型別就好了，因為剩下的就是物件型別。

原始型別
- Boolean 布林 (true , false)
- Null 空 (這是JavaScript 一直以來的 bug，但由於太長久而無法去修正此錯誤)
- Undefined 未定義
- Number 數值 (0, 1, 2, 3, …)
- String 字串 (“我是文字”)
- BigInt 整數數值(使用方式就是在數字後面加一個 n — ex: `147n`、`3n`)
     - BigInt 可以展現比 Number 更大範圍的數值，常使用在金融領域。
    它可以比 Number 更準確的表示數字，**※BigInt只能用整數**
- Symbol (於 ECMAScript 6 新定義) - 用來宣告**唯一值**，**※不支持"new Symbol()"**

物件型別
- new Boolean()
- new Number()
- new String()

### IIFE, commonjs, AMD(m)
- IIFE(立即執行函數)
    - 在IIFEs中所建立的變數，**都不會影響到Global Execution Context所建立的變數**，
        也就是說，**透過IIFEs**，它++避免了我們的變數間可能會互相干擾覆蓋的情況++。
        結論: **放在IIFEs裡面的變數，並不會影響到其他外層的變數，也不會被外層的變數影響到。**
        - ```javascript
            //第一種寫法
            let sayHello = function(name) {
              console.log('Hello' + name)
            }('Maju') -->執行函式

            //第二種寫法
            ( 
              //建立一個匿名函數
              function(name) {
                console.log('Hello' + name)
              }('Maju') -->執行函式
            );

            ```
        
        最後，因為我們的程式碼是以function開頭，一般來說這是function statement的寫法，
        可是**function statement++不能接匿名函式++**，所以我們要告訴它，
        我們這其實是一個function expression(運算式)而不是function statement(陳述式)。
        要達到這個目的的方式，++就是在函式的最外面，加上括號。++
    - 如果想要影響(改變)到全局變數的話
        - ```javascript
          //global
          var greeting = 'Hello'; (一定要用var才會是全局)

          //IIFEs
          (
              function (global,name) {
                let greeting = 'welcome';
                global.greeting = 'Hola'
                console.log( greeting + name)
              }(window,'Maju')
              // welcome Maju
          );

          console.log(greeting)  //Hola
            ```
- commonjs(實行代表 **Node.js**)
    - **它是一個同步 Loading (也就是 A Load 完才會 Load B) 的模組化規範**
        - require 是一個++全局方法++，用來**加載模塊**
        - exports 是一個++全局對象++，用來**導入模塊的屬性或方法**
        - module 是一個++全局對象++。涵蓋當前模塊的必要信息，有一個只讀的id屬性，有一個uri屬性，還有其它的一些命名規範，可以查看 CommonJS 規範的文檔。
    - **採取同步載入，也就是依順序載入套件**。
    - 可多次載入模組，++但只會執行第一次並暫存結果，之後載入則會直接拿取上次結果++，**想重新載入的話必須清除暫存**。
    ++在 Server 端的話因為所有套件都在同個資料夾裡就載入得快++。但**在瀏覽器上就不適用**，在瀏覽器的環境載入模組的速度不像是直接讀硬碟那麼快，而是會牽涉到網路的速度。
    - 這樣的限制，導致許多人對於 CommonJS 原生的同步式加載有意見，因而產生後面的AMD.js。
    
- AMD js 非同步(異步)模組化 (實行代表 **require.js**)
    ※因載入順序問題，++如果**不是必要**且**被依賴性重**的JS Library(例如JQuery)++，
    不要放在Head中，而是放在網頁的最底端載入

    - **AMD的英文全名是Asynchronous Module Definition，是Common JS所定義的一組優雅且簡單API，用於同步或非同步載入Javascript Module和它所依賴的其他Module。**
    - API格式 `define(id?, dependencies?, factory);`
        - id 代表Module的名稱
        - dependencies 代表Module所依賴的其他Module
        - factory 代表產生Module的工廠(Factory)或是它的實體(Object)
    - Module不但方便管理使用，**也可以達到[關注點分離(Seperation of Concerns)](https://dotblogs.com.tw/newmonkey48/2016/06/01/142652)**，讓你的網頁程式更好維護。
    > ※ "關注點分離（Separation of concerns，SOC）"的精神
        - Model 要肥
        - Controller 要輕
        - View 要夠笨

### [ES5, ES6(s)](https://www.itread01.com/content/1544344043.html)
>什麼是ECMAScript？
摘自百度百科：ECMAScript是一種由Ecma國際（前身為歐洲計算機制造商協會,英文名稱是European Computer Manufacturers Association）通過ECMA-262標準化的指令碼程式設計語言。下文中就以ES和JS來簡稱。簡單說，ES是JS的一種語言標準。ES正在不斷發展，目前我們接觸比較多的就是ES5和ES6（ES6也叫ES2015）了。
- ES5新特性
    - 嚴格模式 `"use strict";`
    - Object新增方法
        - `Object.create()`、`Object.getPrototypeOf()`、`Object.keys()`…等
    - Array新增方法
         - `Array.isArray()`、`filter()`、`indexOf()`、`map()`…等
    - String新增方法
        - `.trim()`
    - Date新增方法
        - `Date.now()`
    - JSON物件
        - `JSON.parse()`、`JSON.stringify()` 
- ES6新特性(ES6各個特性的支援情況比較細，可根據具體特性查詢caniuse)
    - [`${...}` 、字符串模板` `` `…等](https://pjchender.blogspot.com/2017/01/javascript-es6-template-literalstagged.html) 
    - 新增let const 
    - 解構賦值
    - 箭頭函式 `=>` ==※箭頭函式沒有 `this`==
        - ```javascript 
            let f = v => v;
            等同於
            let f = function(v) {
              return v;
            };
            ```
    - Promise
    - Class語法
        - 包括constructor，get，set等經典函式方法。 
    - Module語法：
        - 包括import，export等經典模組引入和匯出寫法。
        

### closure閉包(m)

### 函數三種定義方式(s)

### [call, apply, bind(h)](https://realdennis.medium.com/javascript-%E8%81%8A%E8%81%8Acall-apply-bind%E7%9A%84%E5%B7%AE%E7%95%B0%E8%88%87%E7%9B%B8%E4%BC%BC%E4%B9%8B%E8%99%95-2f82a4b4dd66)
>call, apply, bind 是函數物件中設定 this 關鍵字的內建方法。
>
>call、apply皆是回傳function執行結果
>bind方法回傳的是綁定 this 後的原函數
- call()
    - 任何一個function.call()的狀況下，我們可以把整個參數陣列( arguments )向右平移，而第零個參數則是告訴函數我們想使用的 this 。
        ex:
        - ```javascript
          fun.call(thisArg[, arg1[, arg2[, ...]]])
          
          也就是說整個函數除了第零個變數以外，其他跟原函數87%像，直接舉例如下。
            func( 1 , 2 , 3 ) vs func.call( null , 1 , 2 , 3 )
          ```
- apply()
    - 如果理解了上述用法，那麼apply()就只是一個shortcut(捷徑)
- bind()
    - 借用已建立的函式來創造新的函式，但將 this 綁到指定的物件上。
    - bind() 接受的第一位參數為指定的 this，其餘參數則依序傳給被綁定的函式，作為固定的參數，最後會回傳一個新的函式。 
        ex:
        - ```javascript
            var name = 'foo'
            function logName(){
              console.log(this.name)
            }
            var tmp = {
              name: 'bar'
            }
            var newFunction = logName.bind(tmp)
            logName() // foo
            newFunction() // bar
            ```

### Promise, callback(h)
- **Promise物件是非同步程式設計的一種解決方案**。
    Promise物件代表一個非同步操作，有三種狀態：
    **pending（進行中）**、 **fulfilled（已成功）** **和rejected（已失敗）**。 
    基本用法是，建立一個Promise例項：
     ```javascript 
     const promise = new Promise(function(resolve, reject) {
      // ... some code

      if (/* 非同步操作成功 */){
        resolve(value);
      } else {
        reject(error);
      }
    });
    ```
    - Promise例項生成以後，可以用then方法分別指定resolved狀態和rejected狀態的回撥函式
    ```javascript 
    promise.then(function(value) {
      // success
    }, function(error) {
      // failure
    });
    ```
- [callback function（回呼函式）：](https://medium.com/appxtech/%E4%BB%80%E9%BA%BC%E6%98%AFcallback%E5%87%BD%E5%BC%8F-callback-function-3a0a972d5f82)一個程式執行完再去執行另一個程式

### [物件導向](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/Object-oriented_JS)、[prototype(原型)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)(h)
- 優點
方便、屬性一致
- 缺點
繼承太多層導致佔用記憶體過大
容易屬性被覆蓋而發生未知問題
- 物件導向(英語：Object-oriented programming，縮寫：OOP)
    - 物件導向 - 簡稱 OO ，是一種程式設計方式，其他的程式設計方式分別有：結構式程式設計與函式程式設計。
    - [三大特性](https://medium.com/w-learning-note/%E4%BB%80%E9%BA%BC%E6%98%AF%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E4%B8%AD%E7%9A%84%E5%B0%81%E8%A3%9D-%E7%B9%BC%E6%89%BF%E5%92%8C%E5%A4%9A%E5%9E%8B%E7%89%B9%E6%80%A7-c15d4e8c567a) 
        - 封裝(Encapsulation) 
            - 隱藏某一方法的具體執行步驟，把過程和資料包起來，對資料的操作只能通過已定義的介面(Interface)，封裝的目的，是讓其他人可以使用物件，但不需要知道物件的內部邏輯。
        - [繼承(Inheritance)](https://medium.com/%E7%A8%8B%E5%BC%8F%E6%84%9B%E5%A5%BD%E8%80%85/%E4%BB%80%E9%BA%BC%E6%98%AFoo-%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E8%88%87%E7%B9%BC%E6%89%BF-6955239576af)
            - 讓一個類別(子類別subclass)繼承另一個類別(父類別superclass)的方法和屬性，透過繼承可以達到[DRY(Do not repeat yourself)](https://ithelp.ithome.com.tw/articles/10100309)的目的，也可以適當的切割類別，又不破壞原先基底類別設計。 
        - 多型(Polymorphism)
            - 不同型態的物件，定義相同的操作介面，由於被呼叫者 (Callee) 有著相同的介面，呼叫者並不用指定特別型別，只需針對介面進行操作。 
- 原型(prototype)
    - JavaScript中的所有物件，包含函數所有物件都有原型屬性，這個屬性會參考到另一個物件，我們稱為原型 proto（被參考的物件）。
    - 繼承：函數、陣列、一般物件，所有東西到最後會到原型物件( base object, Object{} )，原型物件也有著自己的原型，於是原型物件就這樣鏈結，直到撞見 null 為止：null 在定義裡沒有原型、也是原型鏈（prototype chain）的最後一個鏈結。

### SPA, SSR

### AJAX, JSONP

### hoisting

### event bubbling

### use strict


### Vue
- 組件是什麼?
組件就是把圖形、非圖形的各種邏輯均抽象為一個統一的概念（組件）來實現開發的模式，在Vue中每一個.vue文件都可以視為一個組件
- 組件的優勢
    - 降低整個系統的耦合度，**在保持接口不變的情況下，我們可以替換不同的組件快速完成需求**
    - **每個組件之間低耦合，職責單一**，所以邏輯會比分析整個系統要簡單
    - **提高可維護性**，由於每個組件的職責單一，並且組件在系統中是被復用的，所以對代碼進行優化可獲得系統的整體升級
- 如何優化首屏渲染優化時間?
常見的幾種SPA首屏優化方式
   - 減少入口文件體積(路由懒加载)
   - 靜態資源本地緩存(合理利用localStorage)
   - UI框架按需加载(只引入會用到的組件)
   - 组件重複打包(在webpack的config文件中，修改CommonsChunkPlugin的配置)
   - 圖片資源的壓縮
   - 開啟GZip壓縮
   - 使用SSR(SSR（Server side ），也就是服務端渲染，組件或頁面通過服務器生成html字符串，再發送到瀏覽器 建議使用: Nuxt.js)

- 給對象新增新屬性(原本沒有的屬性時) 為什麼畫面沒有刷新?
  Vue ==不允許在已經創建的實例上動態添加新的響應式屬性==，若想實現數據與view(畫面)同步更新可使用以下方法
    - Vue.set() (為對象添加少量的新屬性)
    - Object.assign() (需要為新對象添加大量的新屬性)
    - $forcecUpdated() (如果你實在不知道怎麼操作時，可使用進行強制刷新 (==不建議==))
    - 或使用ES6`...展開運算符` => {...originData, newDataKey: newData}


### CSS相關
偽元素
垂直置中的幾個方法與差異

