# 手機版常見問題處理 - 2025 更新
###### tags: `mobile`, `textarea`, `intersection-observer`, `touch-event`, `safari`

## 快速結論

大部分方法都沒變，只有**手機滾動誤觸**有更簡單的新解法：

```css
/* 從一堆 JS 監聽變成一行 CSS */
.element {
  touch-action: manipulation;
}
```

---

## textarea shift+enter 事件

當使用者在 textarea 輸入時，我們通常希望：
- **Enter**：送出訊息
- **Shift + Enter**：換行

### 基本處理方式

```javascript
const handleKeyDown = async (event: Event) => {
  if (event.key === 'Enter') {
    event.preventDefault();  // 阻止預設換行行為
    
    // Shift + Enter = 換行
    if (event.shiftKey) {
      newContent.value += '\n';
      return;
    }
    
    // 單獨 Enter = 送出
    if (newContent.value.length) {
      sendNewMessage();
      await scrollToBottomAndReadMessage();
    }
  }
};
```

### 顯示換行內容

印出的 html 記得加 `pre` 才會有空格和換行：

```html
<pre>{{ text }}</pre>
```

或是用 CSS（更靈活）：

```css
.text-content {
  white-space: pre-wrap;  /* 保留換行和空格，文字會自動換行 */
}
```

**推薦用 `pre-wrap`**，既保留格式又會自動換行，不會破版。

---

## IntersectionObserver 用法

IntersectionObserver 用來監聽元素是否進入可視區域，比用 `scroll` 事件效能好很多。

### 使用場景

做一個聊天室常見的功能：
1. 滾到頂部自動載入歷史訊息
2. 不在底部時顯示「回到底部」按鈕
3. 按鈕距離底部 40px 就觸發

### 完整實作

```javascript
const initGoBottomButton = () => {
  // 監聽底部：決定是否顯示「回到底部」按鈕
  const callbackBottom = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showBtn.value = false;
        scrollToBottomAndReadMessage();
      } else {
        showBtn.value = true;
      }
    });
  };
  
  // 監聽頂部：載入更多歷史訊息
  const callbackTop = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        getMoreHistoryMessages();
      }
    });
  };
  
  const bottom = document.getElementById('bottom') as HTMLElement;
  const target = document.getElementById('target') as HTMLElement;
  
  const observerBottom = new IntersectionObserver(callbackBottom, {
    root: messageBoardRef.value,
    rootMargin: '0px 0px 40px 0px',
    threshold: [0],
  });
  
  const observerTop = new IntersectionObserver(callbackTop, {
    root: messageBoardRef.value,
    rootMargin: '0px 0px 40px 0px',
    threshold: [0],
  });
  
  observerBottom.observe(bottom);
  observerTop.observe(target);
};
```

html 結構：
```html
<div>
  <header />
  <div id="target" />  <!-- 監聽這個來載入更多 -->
  <main>
    content.....
  </main>
  <div id="bottom" />  <!-- 監聽這個來判斷是否在底部 -->
  <footer />
</div>
```

### 參數說明

| 參數 | 說明 |
|------|------|
| `root` | 滾動容器（null = viewport） |
| `rootMargin` | 擴大/縮小判定範圍，`'0px 0px 40px 0px'` = 下方提前 40px |
| `threshold` | 可見度閾值，`[0]` = 只要一點點進入就觸發 |

### 記得清除

```javascript
onBeforeUnmount(() => {
  observerBottom.disconnect();
  observerTop.disconnect();
});
```

### 2025 新增：scrollMargin

如果有巢狀滾動容器可以用：

```javascript
const observer = new IntersectionObserver(callback, {
  root: rootContainer,
  rootMargin: '0px',
  scrollMargin: '20px',  // 針對內部滾動容器
  threshold: 0.01,
});
```

差異：
- `rootMargin`：調整 root 的判定範圍
- `scrollMargin`：調整巢狀滾動容器的判定範圍

大部分情況用不到。

---

## [safari 圖片長按保存沒效果](https://juejin.cn/post/6844904019689734151)

```css
img {
  -webkit-touch-callout: default;
}
```

一行搞定。

---

## 手機版觸控滾動很容易觸發點擊或長按

### 問題

在手機上滾動時很容易誤觸：
- 滾動訊息時不小心點到訊息
- 滾動時稍微停頓就觸發長按
- 拖曳元素時頁面跟著滾動

### 以前的做法（JS 監聽）

[touchmove event 文檔](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchend_event)

```javascript
onMounted(() => {
  document.addEventListener('touchmove', () => {
    imChatroomStore.updateMobileTouchMove(true);
  });
  document.addEventListener('touchend', () => {
    setTimeout(() => {
      imChatroomStore.updateMobileTouchMove(false);
    }, 500);
  }); 
})

onBeforeUnmount(() => {
  document.removeEventListener('touchmove', () => {
    imChatroomStore.updateMobileTouchMove(false);
  });
  document.removeEventListener('touchend', () => {
    imChatroomStore.updateMobileTouchMove(false);
  });
})

// 在你要用的地方
if (isMobileTouchMove.value) return;
```

缺點：要管理狀態、監聽事件、設延遲時間，很麻煩。

### 現在推薦（CSS 搞定）

用 `touch-action` 超簡單：

```css
/* 禁止雙擊縮放（最常用） */
.element {
  touch-action: manipulation;
}

/* 禁止所有觸控手勢 */
.draggable {
  touch-action: none;
}

/* 只允許滾動 */
.scroll-area {
  touch-action: pan-y;  /* 垂直 */
  touch-action: pan-x;  /* 水平 */
  touch-action: pan-x pan-y;  /* 雙向 */
}
```

#### 常用值

| 值 | 說明 | 用在哪 |
|---|------|--------|
| `manipulation` | 禁止雙擊縮放 | **聊天訊息、按鈕（推薦）** |
| `none` | 禁止所有手勢 | 拖曳元素、畫布 |
| `pan-y` | 只允許垂直滾動 | 垂直列表 |
| `pan-x pan-y` | 允許滾動但禁止縮放 | 滾動容器 |

#### 實際範例：聊天室

```vue
<template>
  <div class="message-list">
    <div 
      v-for="msg in messages" 
      class="message"
      @click="handleClick"
    >
      {{ msg.content }}
    </div>
  </div>
</template>

<style scoped>
.message-list {
  touch-action: pan-y;  /* 允許滾動 */
  overflow-y: auto;
}

.message {
  touch-action: manipulation;  /* 禁止雙擊縮放 */
}
</style>
```

#### 實際範例：拖曳

```vue
<template>
  <div 
    class="draggable"
    @touchstart="handleDrag"
  >
    拖曳我
  </div>
</template>

<style scoped>
.draggable {
  touch-action: none;  /* 完全禁止瀏覽器處理 */
}
</style>
```

### 瀏覽器支援

| 瀏覽器 | 支援 |
|--------|-----|
| Chrome / Firefox | ✅ 完整 |
| Safari / iOS | ⚠️ 部分（有 bug） |

Safari 的問題：
- `touch-action: none` 有時不生效
- 子元素有 `overflow-x: hidden` 會失效

### 保險做法（混合）

```vue
<script setup>
const isScrolling = ref(false);

onMounted(() => {
  // Safari fallback
  if (!CSS.supports('touch-action', 'manipulation')) {
    document.addEventListener('touchmove', () => {
      isScrolling.value = true;
    });
    document.addEventListener('touchend', () => {
      setTimeout(() => isScrolling.value = false, 300);
    });
  }
});

const handleClick = () => {
  if (isScrolling.value) return;
  // 處理點擊...
};
</script>

<style scoped>
.element {
  touch-action: manipulation;
}
</style>
```

### 對比

| 方案 | 程式碼 | 效能 | 維護 |
|------|-------|------|------|
| JS 監聽 | 30+ 行 | 普通 | 複雜 |
| CSS | 1 行 | 好 | 簡單 |

---

## 總結

| 功能 | 2025 建議 | 變化 |
|------|----------|------|
| textarea 換行 | 原方法 | ❌ 沒變 |
| IntersectionObserver | 原方法 | ✅ 小更新 |
| Safari 圖片 | 原方法 | ❌ 沒變 |
| 滾動誤觸 | `touch-action` | ✅ **改用 CSS** |

只有滾動誤觸值得換新方法，從 30+ 行 JS 變成 1 行 CSS 🎉

---

### 參考
- [IntersectionObserver - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [touch-action - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action)
- [touchmove event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchend_event)