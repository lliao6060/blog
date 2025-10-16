# 手機虛擬鍵盤遮擋問題 - 2025 新解法
###### tags: `web`, `ios`, `android`, `virtual-keyboard`

## 快速結論

終於不用寫一堆 JS 計算高度了！現在有兩個更簡單的方法：

### 方案一：一行 HTML 搞定（最推薦）
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content">
```
完全不需要 JavaScript！

### 方案二：VirtualKeyboard API
```javascript
navigator.virtualKeyboard.overlaysContent = true;
```
```css
.footer {
  margin-bottom: env(keyboard-inset-height, 0px);
}
```

---

## 新方案詳解

### 方案一：`interactive-widget` Meta Tag

這個是 2022 年才加入的新屬性，專門用來控制虛擬鍵盤出現時 viewport 要怎麼調整。

#### 三種模式

| 模式 | Layout Viewport | Visual Viewport | 什麼時候用 |
|------|-----------------|-----------------|----------|
| `resizes-visual`（預設） | 不動 | 縮小 | 一般網頁 |
| `resizes-content` | 縮小 | 縮小 | 聊天室、表單 APP |
| `overlays-content` | 不動 | 不動 | 遊戲、canvas |

#### 看圖更清楚

```
resizes-visual（Chrome 預設）:
┌─────────────────┐
│   Header        │ ← 固定在原位
│   Content       │
│                 │ ← 可能被鍵盤擋住
├─────────────────┤
│  🎹 Keyboard    │
└─────────────────┘

resizes-content（推薦用這個）:
┌─────────────────┐
│   Header        │
│   Content       │ ← viewport 跟著縮小
│                 │   100svh 也會自動調整
├─────────────────┤
│  🎹 Keyboard    │
└─────────────────┘
```

#### 實際範例：聊天室

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content">
  <style>
    body {
      margin: 0;
      height: 100svh;  /* 搭配 svh 更完美 */
      display: flex;
      flex-direction: column;
    }
    
    header {
      flex-shrink: 0;
      padding: 1rem;
      background: #333;
      color: white;
    }
    
    .messages {
      flex: 1;          /* 自動填滿剩餘空間 */
      overflow-y: auto; /* 訊息可以滾動 */
      padding: 1rem;
    }
    
    footer {
      flex-shrink: 0;
      padding: 1rem;
    }
  </style>
</head>
<body>
  <header>Chat Room</header>
  <div class="messages">
    <!-- 很多訊息... -->
  </div>
  <footer>
    <input type="text" placeholder="輸入訊息...">
  </footer>
</body>
</html>
```

**重點：**
- 不用寫任何 JavaScript
- 鍵盤彈出時 `100svh` 會自動變小
- footer 永遠在畫面最下面，不會被鍵盤蓋住

#### 瀏覽器支援
- ✅ Chrome Android 108+（2022/10 開始）
- ✅ Firefox 132+（2024 開始）
- ❌ Safari / iOS Safari（還不支援）

---

### 方案二：VirtualKeyboard API

這個 API 讓你可以用 CSS 變數來取得鍵盤的高度，而不用自己算。

#### 基本用法

**Step 1: JavaScript 啟用 API**
```javascript
if ('virtualKeyboard' in navigator) {
  // 告訴瀏覽器：我要自己處理鍵盤
  navigator.virtualKeyboard.overlaysContent = true;
  
  // 可以監聽鍵盤變化（可選）
  navigator.virtualKeyboard.addEventListener('geometrychange', (event) => {
    const { height } = event.target.boundingRect;
    console.log('鍵盤高度:', height);
  });
}
```

**Step 2: CSS 用環境變數**
```css
/* 讓 footer 永遠在鍵盤上方 */
.footer {
  position: fixed;
  bottom: 0;
  margin-bottom: env(keyboard-inset-height, 0px);
}

/* 或是用 max() 確保最小間距 */
.button {
  bottom: max(2rem, 1rem + env(keyboard-inset-height, 0rem));
}
```

#### 6 個 CSS 環境變數

VirtualKeyboard API 提供了 6 個 CSS 變數：

```css
env(keyboard-inset-top)      /* 鍵盤距離上方的距離 */
env(keyboard-inset-right)    /* 鍵盤距離右方的距離 */
env(keyboard-inset-bottom)   /* 鍵盤距離下方的距離 */
env(keyboard-inset-left)     /* 鍵盤距離左方的距離 */
env(keyboard-inset-width)    /* 鍵盤寬度 */
env(keyboard-inset-height)   /* 鍵盤高度（最常用） */
```

鍵盤沒出現時，所有值都是 `0px`。

#### Vue 完整範例

```vue
<template>
  <div class="chat-container">
    <header class="header">聊天室</header>
    
    <div ref="messageBoardRef" class="messages">
      <!-- 訊息內容 -->
    </div>
    
    <footer class="footer">
      <input type="text" placeholder="輸入訊息...">
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const messageBoardRef = ref(null);

const handleKeyboardChange = (event) => {
  const { height } = event.target.boundingRect;
  console.log('鍵盤高度:', height);
};

onMounted(() => {
  if ('virtualKeyboard' in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
    navigator.virtualKeyboard.addEventListener('geometrychange', handleKeyboardChange);
  }
});

onBeforeUnmount(() => {
  if ('virtualKeyboard' in navigator) {
    navigator.virtualKeyboard.removeEventListener('geometrychange', handleKeyboardChange);
  }
});
</script>

<style scoped>
.chat-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.messages {
  flex: 1;
  overflow-y: auto;
}

.footer {
  padding: 1rem;
  /* 關鍵：用 CSS 變數自動避開鍵盤 */
  margin-bottom: env(keyboard-inset-height, 0px);
}
</style>
```

#### 瀏覽器支援
- ✅ Chrome 94+
- ✅ Edge 94+
- ✅ Chrome Android 94+
- ✅ Samsung Internet 17+
- ❌ Safari（完全不支援）
- ❌ Firefox（完全不支援）
- ❌ iOS Safari（完全不支援）

**注意：** 目前只有 Chromium 系的瀏覽器支援。

---

## 跟舊方案比較

### 之前的做法（`visualViewport`）

需要寫一堆 JS 來計算：

```javascript
// 要算可滾動的高度
const calculateScrollableHeight = () => {
  const messageBoardWrapper = document.getElementById('message-board-wrapper');
  const footerHeight = document.getElementById('footer').offsetHeight;
  const scrollableHeight = messageBoardWrapper.clientHeight - footerHeight;
  scrollableHeightValue.value = scrollableHeight + 20;
};

// 還要處理 header 的 fixed
const calculateMobileHeightAndFixedHeader = async (event) => {
  const { height, offsetTop } = event.target;
  const header = document.getElementById('imHeader');
  
  if (offsetTop !== 1) {
    header.style.position = 'fixed';
    header.style.top = `${offsetTop}px`;
    // ... 一堆計算
  }
  scrollToBottom({ smooth: false });
};

// 要監聽事件
onMounted(() => {
  calculateScrollableHeight();
  window.addEventListener('resize', calculateScrollableHeight);
  
  if (checkIsIOS() || checkIsAndroid()) {
    window.visualViewport.addEventListener('resize', calculateMobileHeightAndFixedHeader);
  }
});

// 記得取消監聽
onBeforeUnmount(() => {
  // ...
});
```

然後 HTML 還要動態綁定高度：
```html
<div 
  :style="{
    height: scrollableHeightValue + 'px',
    maxHeight: scrollableHeightValue + 'px',
  }"
>
```

### 新方案：`interactive-widget`

只要一行：
```html
<meta name="viewport" content="interactive-widget=resizes-content">
```

然後用 Flexbox：
```css
body {
  height: 100svh;
  display: flex;
  flex-direction: column;
}

.messages {
  flex: 1;
  overflow-y: auto;
}
```

**不用寫任何 JavaScript！**

### 差異對比表

| 項目 | 舊方案 | 新方案一 | 新方案二 |
|------|--------|---------|---------|
| **JavaScript** | 50+ 行 | 0 行 | ~10 行 |
| **複雜度** | 很複雜 | 超簡單 | 簡單 |
| **手動計算高度** | 需要 | 不用 | 不用 |
| **監聽事件** | 需要 | 不用 | 可選 |
| **裝置檢測** | 需要 | 不用 | 不用 |
| **瀏覽器支援** | 全部 | Chrome/Firefox | Chrome 系 |

---

## 怎麼選擇？

### 情況一：只需要支援 Android
**用 `interactive-widget=resizes-content`**

最簡單，一行 HTML 解決：
```html
<meta name="viewport" content="interactive-widget=resizes-content">
```

### 情況二：需要更精細的控制
**用 VirtualKeyboard API**

可以拿到鍵盤確切的高度、監聽變化：
```javascript
navigator.virtualKeyboard.overlaysContent = true;
navigator.virtualKeyboard.addEventListener('geometrychange', ...);
```

### 情況三：需要支援 iOS
**還是得用 `visualViewport` 😢**

因為 Safari 兩個新方法都不支援，所以要這樣寫：

```javascript
onMounted(() => {
  // 優先用新 API
  if ('virtualKeyboard' in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
    navigator.virtualKeyboard.addEventListener('geometrychange', handleChange);
  } 
  // iOS 的 fallback
  else if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', calculateHeight);
  }
});
```

---

## 從舊方案遷移

如果想把現有的 `visualViewport` 方案改成新的，可以這樣做：

### Step 1: 加 Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content">
```

### Step 2: 改 CSS 用 Flexbox
```css
/* 之前：動態算高度 */
<div :style="{ height: scrollableHeightValue + 'px' }">

/* 現在：用 flex */
body {
  display: flex;
  flex-direction: column;
  height: 100svh;
}

.messages {
  flex: 1;
  overflow-y: auto;
}
```

### Step 3: 刪掉 JS（Android 用戶）
```javascript
// 這些都可以刪了
// ❌ calculateScrollableHeight()
// ❌ calculateMobileHeightAndFixedHeader()  
// ❌ window.addEventListener('resize', ...)
// ❌ visualViewport.addEventListener('resize', ...)
// ❌ scrollableHeightValue 變數
```

### Step 4: 保留 iOS 的邏輯（可選）
```javascript
onMounted(() => {
  // 只留 iOS 的 fallback
  if (checkIsIOS() && !('virtualKeyboard' in navigator)) {
    window.visualViewport?.addEventListener('resize', calculateHeight);
  }
});
```

---

## 小技巧

### 1. 搭配新的 Viewport 單位
```css
body {
  height: 100svh;  /* 鍵盤出現時會自動調整 */
}
```

### 2. 用 Grid 預留鍵盤空間
```css
body {
  display: grid;
  grid-template:
    "header" auto
    "content" 1fr
    "footer" auto
    "keyboard" env(keyboard-inset-height, 0px);  /* 鍵盤區域 */
}
```

### 3. 漸進式增強
先用新方法，不支援再 fallback：

```css
.footer {
  position: fixed;
  bottom: 0;
}

/* 支援 VirtualKeyboard API 時 */
@supports (margin-bottom: env(keyboard-inset-height)) {
  .footer {
    margin-bottom: env(keyboard-inset-height, 0px);
  }
}
```

---

## 測試清單

記得測試這些情況：
- ✅ Chrome Android（`interactive-widget`）
- ✅ Firefox Android（`interactive-widget`）
- ✅ iOS Safari（`visualViewport` fallback）
- ✅ 橫向 / 直向
- ✅ 鍵盤彈出 / 收起
- ✅ 外接鍵盤

---

## 總結

### 2025 年推薦做法：

1. **Android 為主的 APP**：
   ```html
   <meta name="viewport" content="interactive-widget=resizes-content">
   ```
   一行搞定，不用寫 JS！

2. **需要支援 iOS**：
   - 用 `interactive-widget` + `visualViewport` 雙軌制
   - Android 吃新方法，iOS 吃舊方法

3. **需要精細控制**：
   - 用 VirtualKeyboard API
   - 可以拿到鍵盤準確的位置和大小

從以前要寫 50+ 行 JS，到現在一行 HTML 或幾行 CSS 就搞定，這就是 Web 標準進步的地方 🎉

---

### 參考
- [VirtualKeyboard API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/VirtualKeyboard_API)
- [interactive-widget - HTMLHell](https://htmhell.dev/adventcalendar/2024/4/)
- [Chrome Viewport Resize Behavior](https://developer.chrome.com/blog/viewport-resize-behavior)
- [Can I Use: VirtualKeyboard API](https://caniuse.com/mdn-api_navigator_virtualkeyboard)