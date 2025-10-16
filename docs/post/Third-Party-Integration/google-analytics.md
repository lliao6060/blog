# Google Analytics / Google 網站收錄

###### tags: `google`, `google ga`, `埋點`

## Google Analytics 設定流程

### 1. 建立 Google Analytics 帳戶
搜尋 Google Analytics 並建立帳戶

### 2. 安裝追蹤代碼
把 gtag 標記貼到 `<head>` 裡（也可以用套件）

### 3. 提交網站收錄
[前往 Google Search Console](https://blog.tinybot.tw/google-search-console/)

### 4. 提出要求收錄
在 Google Search Console 中提交你的網站進行收錄

## Google Analytics 在 Vue 中的使用

### 1. 安裝套件

使用 [vue-gtag-next](https://github.com/MatteoGabriele/vue-gtag) 套件

```bash
npm install vue-gtag-next
# 或
yarn add vue-gtag-next
```

### 2. 在 main.js 中配置

```javascript
import VueGtag from 'vue-gtag-next';

app.use(VueGtag, {
  property: {
    id: 'G-XXXXX', // 替換成你的 GA ID
  },
})
```

### 3. 在組件中使用事件追蹤

在你要綁定事件的地方：

```javascript
import { useGtag } from "vue-gtag-next";

const { event } = useGtag()

function clickEvent() {
  // ...事件處理
  event('yourEvent')
}
```

## 常用事件追蹤範例

### 追蹤按鈕點擊

```javascript
const { event } = useGtag()

function trackButtonClick() {
  event('button_click', {
    event_category: 'engagement',
    event_label: 'call_to_action',
    value: 1
  })
}
```

### 追蹤頁面瀏覽

```javascript
const { pageview } = useGtag()

// 在路由切換時追蹤
router.afterEach((to) => {
  pageview({
    page_title: to.meta.title,
    page_path: to.path,
    page_location: window.location.href
  })
})
```

### 追蹤表單提交

```javascript
function trackFormSubmit() {
  event('form_submit', {
    event_category: 'form',
    event_label: 'contact_form',
    value: 1
  })
}
```

## 注意事項

- GA ID 格式通常為 `G-XXXXXXXXXX`（GA4）或 `UA-XXXXXXXXX-X`（Universal Analytics）
- GA4 是新版本，建議使用 GA4
- 事件名稱建議使用小寫加底線（snake_case）
- 在開發環境可以關閉 GA 追蹤，避免污染數據

## 開發環境配置

```javascript
app.use(VueGtag, {
  property: {
    id: 'G-XXXXX',
  },
  enabled: process.env.NODE_ENV === 'production', // 只在生產環境啟用
})
```

## 參考資源

- [vue-gtag-next GitHub](https://github.com/MatteoGabriele/vue-gtag)
- [Google Analytics 官方文檔](https://developers.google.com/analytics)
- [Google Search Console 教學](https://blog.tinybot.tw/google-search-console/)

