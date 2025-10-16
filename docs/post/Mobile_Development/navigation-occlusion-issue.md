# menu bar 滿版時 navigation 遮擋問題 - 2025 新解法
###### tags: `web`, `ios`, `android`, `safari`, `chrome`, `viewport`

## 快速結論

以前要用 JS 監聽 resize 很麻煩，現在有新的 CSS viewport 單位可以直接用！

```css
.menu-container {
  @media (max-width: 1279px) {
    height: 100svh;  /* 就這樣，不用 JS！ */
  }
}
```

---

## 新的 Viewport 單位（2022 年推出）

有三個新單位可以用：

| 單位 | 說明 | 什麼時候用 |
|------|------|----------|
| **`svh`** | 最小可視高度（導航欄都顯示時） | ✅ **推薦，最穩定** |
| `lvh` | 最大可視高度（導航欄隱藏時） | 想要沉浸式體驗 |
| `dvh` | 動態調整（跟著導航欄變化） | ⚠️ 會跳來跳去 |

---

## 實際範例

### 推薦用法：svh

```css
.menu-container {
  @media (max-width: 1279px) {
    height: 100svh;
  }
}
```

**好處：**
- 不用寫 JavaScript
- iOS 和 Android 都支援
- 不會被導航欄擋住
- 滾動時不會有白底
- 效能好

### 如果需要動態調整：dvh

```css
.menu-container {
  @media (max-width: 1279px) {
    height: 100dvh;  /* 會隨著導航欄顯示/隱藏調整 */
  }
}
```

但這個會跳來跳去，通常不推薦。

### 保險起見加 fallback

```css
.menu-container {
  @media (max-width: 1279px) {
    height: 100vh;      /* 舊瀏覽器 */
    height: 100svh;     /* 新瀏覽器 */
  }
}
```

---

## 看圖比較

### 以前用 100vh 的問題
```
┌─────────────────┐
│   網址列         │
├─────────────────┤
│                 │
│   內容區         │
│   100vh         │
│                 │ ← 這裡被擋住了！
└─────────────────┘
│  底部導航欄       │ ← 蓋在上面
└─────────────────┘
```

### 現在用 100svh
```
┌─────────────────┐
│   網址列         │
├─────────────────┤
│                 │
│   內容區         │
│   100svh        │
├─────────────────┤
│  底部導航欄       │ ← 完美避開
└─────────────────┘
```

---

## 瀏覽器支援度

基本上 2025 年所有主流瀏覽器都支援了：

| 瀏覽器 | 支援版本 |
|--------|---------|
| Chrome | 108+ |
| Safari | 15.4+ |
| Firefox | 101+ |
| iOS Safari | 15.4+ |
| Chrome Android | 108+ |

**涵蓋超過 90% 的用戶**，可以放心用。

---

## 跟舊方案比較

### 以前的做法（很麻煩）

```javascript
// 要監聽 resize
onMounted(() => {
  if (process.client) {
    const updateViewportHeight = () => {
      document.documentElement.style.setProperty(
        '--viewport-height', 
        `${window.innerHeight}px`
      )
    }
    window.addEventListener('resize', updateViewportHeight)
    updateViewportHeight()
  }
})
```

```css
.menu-container {
  @media (max-width: 1279px) {
    min-height: -webkit-fill-available;
    @supports (height: var(--)) {
      height: var(--viewport-height);
    }
  }
}
```

問題一堆：
- 要寫 JS
- 要監聽事件
- SSR 還要特殊處理
- 程式碼複雜

### 現在的做法（超簡單）

```css
.menu-container {
  @media (max-width: 1279px) {
    height: 100svh;
  }
}
```

一行 CSS 搞定！

---

## 實際應用

### 1. 滿版選單

```css
.fullscreen-menu {
  height: 100svh;
  overflow-y: auto;
}
```

### 2. Hero Section

```css
.hero-section {
  min-height: 100dvh;  /* 這裡用 dvh 也可以 */
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 3. 配合 iOS 安全區域

```css
.menu-container {
  height: 100svh;
  padding-bottom: env(safe-area-inset-bottom);  /* iOS 瀏海 */
}
```

---

## Vue / Nuxt 範例

### 舊寫法（不推薦了）

```vue
<script setup>
onMounted(() => {
  if (process.client) {
    const updateViewportHeight = () => {
      document.documentElement.style.setProperty(
        '--viewport-height', 
        `${window.innerHeight}px`
      )
    }
    window.addEventListener('resize', updateViewportHeight)
    updateViewportHeight()
  }
})
</script>

<style lang="scss" scoped>
.menu-container {
  @media (max-width: 1279px) {
    height: var(--viewport-height);
  }
}
</style>
```

### 新寫法（推薦）

```vue
<script setup>
// 不用寫 JS！
</script>

<style lang="scss" scoped>
.menu-container {
  @media (max-width: 1279px) {
    height: 100svh;
  }
}
</style>
```

### 完整的選單範例

```vue
<template>
  <div class="menu-container">
    <header class="menu-header">Logo</header>
    <nav class="menu-content">
      <!-- 選單內容 -->
    </nav>
    <footer class="menu-footer">Footer</footer>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  @media (max-width: 1279px) {
    height: 100svh;
    display: flex;
    flex-direction: column;
    padding-bottom: env(safe-area-inset-bottom);
    
    .menu-content {
      flex: 1;
      overflow-y: auto;
    }
  }
}
</style>
```

---

## 怎麼選單位？

| 情況 | 用哪個 | 為什麼 |
|------|--------|--------|
| 滿版選單 | `svh` | 最穩，不會被擋 |
| Hero Section | `dvh` | 動態調整比較漂亮 |
| Modal / Dialog | `svh` | 確保看得到 |
| Sticky Footer | `svh` | 不會被底部導航擋住 |

**大部分情況用 `svh` 就對了。**

---

## 注意事項

1. **記得加 fallback**
   ```css
   height: 100vh;    /* 舊瀏覽器 */
   height: 100svh;   /* 新瀏覽器 */
   ```

2. **`dvh` 會跳動**  
   如果元素高度很重要，別用 `dvh`，會一直變來變去

3. **iOS 瀏海要處理**  
   記得加 `env(safe-area-inset-bottom)`

4. **實機測試**  
   模擬器有時候行為不一樣，要用真機測

---

## 總結

### 2025 年就這樣寫：

```css
.menu-container {
  height: 100vh;    /* fallback */
  height: 100svh;   /* 主要用這個 */
}
```

從以前要寫一堆 JS + CSS 變數，現在一行 CSS 就好。  
這就是標準進步的地方 🎉

**可以把 `resize` 監聽的 JS 都刪掉了！**

---

### 參考
- [MDN: Viewport Units](https://developer.mozilla.org/en-US/docs/Web/CSS/length#viewport-percentage_lengths)
- [Can I Use: Viewport Unit Variants](https://caniuse.com/viewport-unit-variants)