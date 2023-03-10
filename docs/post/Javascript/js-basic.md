# JavaScript入門
###### tags: `JavaScript`

1. 用`<script></script`>包住的程式碼可以插在head或body裡面，
**插在`<body>`元素的底部可以提高顯示速度。**
2. 也可使用外部連結引入(==推薦==)，外部引入優點：
   - 將`HTML`& `JavsScript`程式碼分開，容易閱讀且維護。
   - 能夠加快頁面存取速度。
3. 數據顯示方式
   - 更改`HTML`： `(事件).document.getElementById(變數ID) = '更改內容'`
   若是**行內更改**，簡寫為`this.innerHTML = '更改內容'`  
   
  範例：
   
```javascript=
   <button onclick =
   "this.innerHTML = new Date().toLocaleString()">
   the time is ?
   </button> //顯示2020/1/2 下午6:30:56
```
- 僅測試用：
  - 加載完HTML文檔後使用`document.write()` 
   **==注意!!==** **使用這個會把所有現有HTML都取代掉**。
   - 使用`window.alert()` 會顯示彈窗
   - 使用`console.log()` 會在下方console顯示
   
4. JavaScript代碼塊(封裝)
  可以把多個程式碼集合成一個`function`並**將參數抽象化**方便之後呼叫用。
  
  範例：
```javascript=
//呼叫
changeContent('demo','helloMoju',15)
changeContent('moji','wowowow',30)

//封裝
function changeContent(targetId,content,fontSize){
  document.getElementById(targetId).innerHTML = content;
  document.getElementById(targetId).style.fontSize =
  fontSize + 'px';
}
```
5. 變數名 可以任意命名，但要遵循以下規則：
   - 變數必須使用字母、下劃線`_`或者美元符`$`開始。
   - 然後可以使用任意多個英文字母、數字、下劃線`_`或者美元符`$`組成。
   - 不能使用JavaScript關鍵詞與JavaScript保留字。
能使用JavaScript關鍵詞與JavaScript保留字。

6. 三元表達式: (條件? 表達式1:表達式2)
```javascript=
let n = 15;
var msg = '數字' + n + '是' + (n % 2 === 1 ? '奇數':'偶數')
console.log(msg) //數字15是奇數
```

7. 立即執行函數IIFE:

    通使用立即執行函數目的有兩個：
    - 不必为函数命名，避免了污染全局變量；
    - IIFE 内部形成了一个單獨的作用域，可以封裝一些外部無法讀取的私有變量。

```javascript
語法:
(function(){}());
(function(){ code }());

let i = (function(){ return 10 }())
console.log(i) //10
```