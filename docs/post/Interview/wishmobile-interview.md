# 威許移動 WishMobile 面試題

###### tags: `面試題目`

**職位：** Front-End Developer 筆試題目  
**日期：** 2023/06/07

## 一、前端觀念（90 分）

請每一題都要寫，盡可能詳述，作答內容越詳細越能幫助我們理解您的程式觀念。主要是希望能夠從您的作答中了解您過去實作的經驗。

### 1. Vue2 與 Vue3 從各個方面來看有什麼差異？

1. Vue2 是以遞迴方式透過 `Object.defineProperty()` 去對每個 data 增加 set 跟 get 屬性，無法偵測到陣列及物件的更新，必須手動使用 `$set` 去通知 Vue 更新。Vue3 因為不支援 IE，因此可以用 ES6 的 Proxy 語法來處理響應式
2. Vue2 的根元件 data 是物件形式，function 寫法只有 root 實例可以使用，否則所有組件狀態會變成同一個。Vue3 預設就是 function 寫法
3. Vue2 無法寫多個節點，Vue3 有支援 Fragment 寫法
4. Vue3 支援 Tree Shaking
5. Vue2 中 `v-for` 的優先級比 `v-if` 高，Vue3 則是相反

### 2. Vue 做了哪些事情來提高程式執行的效率呢？

1. 幫你實作了雙向綁定，比如說 `v-model`，就不需要自己綁定 `oninput` 跟 `value`
2. `computed` 功能幫你減輕開發負擔，因為它會自動去追蹤依賴不需要像 React 那樣手動提供依賴

### 3. 如何在 Vue SFC 模式下，進行 window 事件的偵聽呢？請以 resize 事件為例，撰寫一份簡單的程式碼。

```javascript
const w = ref(0)
const h = ref(0)

const resizeHandler = (e) => {
  w.value = window.innerWidth
  h.value = window.innerHeight
}

onMounted(() => {
  window.addEventListener('resize', resizeHandler)
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
})
```

### 4. 請以 Vue SFC 來說明實作時，如何遵循 S.O.L.I.D. 原則。

1. **單一職責原則（Single Responsibility）：** 一個組件只專注做一件事（一個 feature）
2. **開放封閉原則（Open-Closed）：** 要修改組件時應該透過 props 傳導並易於擴充，而不應該直接修改組件
3. **里氏替換原則（Liskov Substitution）：** 子組件必須遵從父組件的行為去做設計
4. **介面隔離原則（Interface Segregation）：** 應該只暴露會用到的方法及狀態，而不是全部
5. **依賴反轉原則（Dependency Inversion）：** 依賴應該由外部傳遞而不是內部初始化

### 5. 如果有一個陣列的異步函式，需要"接續"同步被執行，你會如何實作？請寫一段程式碼

```javascript
const promiseFun = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok')
    }, 1500)
  })
}

const getApi = async () => {
  const res = await promiseFun()
  if (res) {
    // ...do something
  }
}
```

### 6. 在宣告變數時，可使用 var、let 和 const，通常你都如何使用這些方式來宣告變數？

基本上 `var` 沒在用，能用 `const` 的就盡量用 `const`，`let` 主要用來寫在 function 中暫存的可能會改變的值的宣告

### 7. 請說明 Document Object Model 對開發人員來說，最重要的意義是什麼？

能夠讓物件彼此繼承或是共享一些方法，減少記憶體浪費的開發模式

### 8. 請舉出一個網站，並說明你認為這個網站有甚麼好與壞的地方？

**網站：** https://moba.garena.tw/

**優點：**
- 設計很美，配色也不錯

**缺點與改進建議：**
1. 沒有 RWD
2. 首屏大圖可以 preload 加快載入
3. 畫面載入時的佈局偏移可以再優化

### 9. 針對下列的程式碼執行結果，請說出你的看法

```javascript
var a = '123'
var b = { a }

a = '456'

console.log('a:', a)
console.log('b:', b)

// output: 
// a: 456
// b: { a: '123' }
```

**解答：**

`a` 在被塞進 `b` 時是原始型別，值是複製當下狀態，後續即使 `a` 被修改成其他內容，`b` 裡面的值也不會因此變動

## 二、Git（20 分）

請寫出以下情境的 Git 指令：  
Git Repository URL: https://github.com/user/demo.git

### 1. 如何從 git repo 將程式碼下載到本地端：

```bash
git clone https://github.com/user/demo.git
```

### 2. 從本地端將程式推送到 Git Repository：

```bash
git add .
git commit -m 'some commit'
git push origin [repo main branch]
```

### 3. 請問合併程式時，若發生衝突，應該如何解決？（此題不用指令作答，請用文字敘述）

先查看兩個衝突的版本決定要用哪一份，再慢慢把有衝突的檔案依序比較修改後存檔，並且 rebase 解決衝突

### 4. 如何取消本次不要的 commit

```bash
git revert [commit id]
```

