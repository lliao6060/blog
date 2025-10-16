# Vue 面試問答

###### tags: `面試`

## Vue3 做了什麼改變

### 1. 生命週期改變
把原先的 `created`、`beforeCreated` 直接變成 `setup` 寫法

### 2. 解決了 this 指向的問題
由於 `setup()` 的寫法取代了以前 `data`、`method` 等函數，而 `setup` 又在 `created` 之前執行

## Vue2 & Vue3 差異

### 1. 響應式實現方式
- **Vue2：** 以迴圈的方式，為每個 `data` 裡的屬性，透過 `Object.defineProperty()` 逐一加上 `get` 和 `set`，無法對物件或陣列做檢查，必須手動加 `vue.$set` 去通知 Vue 更新

- **Vue3：** 因為不用支援 IE，所以可以使用 ES6 語法 `Proxy` 和 `Reflect` 來處理響應式，解決了沒法偵測陣列和物件變動的問題

### 2. Data 寫法差異
- **Vue2：** 根元件的 `data` 是物件形式，`function` 寫法只有 root 實例可使用，**否則所有組件的狀態會變成同一個**

- **Vue3：** 子元件的 data 還是必須要用 function return

### 3. Template 根節點限制
- **Vue2：** 在 `component` 的第一層不能有一個以上的 `tag`，會噴錯

- **Vue3：** 支援 Fragment（多個根節點）

### 4. Mounted Root 功能
Vue3 多了一個 `mounted root` 功能，如果你沒有明確指定要誰繼承，就會噴一個 `warning`，除非你設定 `inheritAttrs` to `false`，就不會噴錯

### 5. Tree Shaking 支援
Vue3 支援 `tree shaking`，可以有效減少打包體積

### 6. TypeScript 支援
- **Vue2：** 因為 `this` 指向的問題比較難支援 TypeScript

- **Vue3：** 由於底層全用 TypeScript 寫成，能夠更完美的支援 TypeScript

### 7. v-for 與 v-if 優先級
- **Vue2：** `v-for` 的優先級比 `v-if` 高，因此若同時在一個元素上寫這兩個，會造成效能問題

- **Vue3：** `v-if` 的優先級較高

## 總結對比表

| 特性 | Vue2 | Vue3 |
|------|------|------|
| 響應式 | Object.defineProperty | Proxy & Reflect |
| 陣列/物件偵測 | 需手動 $set | 自動偵測 |
| 根節點 | 單一根節點 | 支援 Fragment |
| Tree Shaking | 不支援 | 支援 |
| TypeScript | 支援度較低 | 完整支援 |
| v-for vs v-if | v-for 優先 | v-if 優先 |
| 生命週期 | Options API | Composition API (setup) |

