# 🎨 React 主題切換系統完整指南

基於 CSS Variables + Chakra UI + Tailwind CSS 的動態主題系統

---

## 📚 目錄

1. [系統架構](#系統架構)
2. [快速開始](#快速開始)
   - 1️⃣ 顏色配置
   - 2️⃣ 主題管理器
   - 3️⃣ React Hook
   - 4️⃣ 應用整合
3. [使用範例](#使用範例)
   - 🎯 實際專案範例（導航列、Hero、卡片、表單）
   - 🔘 切換按鈕
   - 🎨 Chakra UI 用法
   - 🎯 Tailwind CSS 用法（推薦）
   - 💻 原生 CSS 用法
   - 🔧 程式化使用
4. [常見問題](#常見問題)
   - 為什麼使用 CSS Variables？
   - 如何新增顏色？
   - 如何偵測系統主題？
   - 如何避免 SSR 閃爍？
   - 如何支援多種主題？
5. [完整顏色對照表](#-完整顏色對照表)
6. [完整檔案結構](#-完整檔案結構)
7. [三種使用方式對比](#-三種使用方式對比)
8. [最佳實踐](#-最佳實踐)
   - ✅ 推薦做法
   - ❌ 避免做法
   - 🎨 命名規範
   - 📏 層級建議
9. [總結](#-總結)
10. [參考資源](#-參考資源)

---

## 系統架構

```
┌─────────────────────────────────────────────────────┐
│                    使用者點擊切換                      │
└────────────────────┬────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────┐
│              ThemeManager (單例)                     │
│  • 管理當前主題狀態                                    │
│  • 通知所有監聽者                                      │
│  • 持久化到 localStorage                              │
└────────────────────┬────────────────────────────────┘
                     ↓
         ┌───────────┴───────────┐
         ↓                       ↓
┌─────────────────┐    ┌──────────────────┐
│  CSS Variables  │    │   Chakra UI      │
│  動態注入顏色值   │    │   ColorMode      │
└────────┬────────┘    └────────┬─────────┘
         ↓                       ↓
┌─────────────────────────────────────────┐
│         所有 UI 元件自動更新               │
└─────────────────────────────────────────┘
```

---

## 快速開始

### 1️⃣ 顏色配置 (`config/palette.ts`)

```typescript
// 定義 CSS 變數名稱
export const cssVars = {
  background: {
    primary: "--color-bg-primary",
    secondary: "--color-bg-secondary"
  },
  text: {
    primary: "--color-text-primary",
    secondary: "--color-text-secondary"
  },
  brand: {
    primary: "--color-brand-primary"
  }
}

// Dark 主題配置
export const darkThemeVars = {
  [cssVars.background.primary]: "#0C0C0C",
  [cssVars.background.secondary]: "#232323",
  [cssVars.text.primary]: "#FFFFFF",
  [cssVars.text.secondary]: "#D9D9D9",
  [cssVars.brand.primary]: "#E8AE0F"
}

// Light 主題配置
export const lightThemeVars = {
  [cssVars.background.primary]: "#FFFFFF",
  [cssVars.background.secondary]: "#F9FAFB",
  [cssVars.text.primary]: "#000000",
  [cssVars.text.secondary]: "#666666",
  [cssVars.brand.primary]: "#E8AE0F"
}

// 工具函數
export const cssVar = (variable: string) => `var(${variable})`
```

---

### 2️⃣ 主題管理器 (`utils/themeToggle.ts`)

```typescript
export type ThemeMode = "light" | "dark"

export class ThemeManager {
  private static instance: ThemeManager
  private currentTheme: ThemeMode = "dark"
  private listeners: Set<(theme: ThemeMode) => void> = new Set()

  static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager()
    }
    return ThemeManager.instance
  }

  private constructor() {
    // 從 localStorage 讀取
    const saved = localStorage.getItem("theme")
    this.currentTheme = saved === "light" ? "light" : "dark"
    this.applyTheme(this.currentTheme)
  }

  // 切換主題
  toggleTheme() {
    this.currentTheme = this.currentTheme === "dark" ? "light" : "dark"
    this.applyTheme(this.currentTheme)
    localStorage.setItem("theme", this.currentTheme)
    
    // 通知所有監聽者
    this.listeners.forEach(listener => listener(this.currentTheme))
  }

  // 應用主題
  private applyTheme(theme: ThemeMode) {
    // 1. 設定 data-theme 屬性
    document.documentElement.setAttribute("data-theme", theme)
    
    // 2. 設定 class（給 Tailwind 用）
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    
    // 3. 動態注入 CSS Variables
    import("../config/palette").then(({ darkThemeVars, lightThemeVars }) => {
      const vars = theme === "dark" ? darkThemeVars : lightThemeVars
      Object.entries(vars).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value)
      })
    })
  }

  // 監聽主題變化
  onThemeChange(listener: (theme: ThemeMode) => void): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  getTheme(): ThemeMode {
    return this.currentTheme
  }
}

export const getThemeManager = () => ThemeManager.getInstance()
```

---

### 3️⃣ React Hook (`hooks/useThemeSync.ts`)

```typescript
import { useColorMode } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getThemeManager, ThemeMode } from "../utils/themeToggle"

export const useThemeSync = () => {
  const { colorMode, setColorMode } = useColorMode()
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const themeManager = getThemeManager()

    // 初始化同步
    if (!isInitialized) {
      const currentTheme = themeManager.getTheme()
      if (colorMode !== currentTheme) {
        setColorMode(currentTheme)
      }
      setIsInitialized(true)
    }

    // 監聽 ThemeManager → 同步到 Chakra UI
    const unsubscribe = themeManager.onThemeChange((theme: ThemeMode) => {
      if (colorMode !== theme) {
        setColorMode(theme)
      }
    })

    return unsubscribe
  }, [colorMode, setColorMode, isInitialized])

  // 監聽 Chakra UI → 同步到 ThemeManager
  useEffect(() => {
    if (isInitialized) {
      const themeManager = getThemeManager()
      const currentTheme = themeManager.getTheme()
      
      if (colorMode !== currentTheme) {
        themeManager.setTheme(colorMode as ThemeMode)
      }
    }
  }, [colorMode, isInitialized])
}
```

---

### 4️⃣ 應用整合 (`App.tsx`)

```typescript
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { useThemeSync } from "./hooks/useThemeSync"

// Chakra 主題配置
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  },
  styles: {
    global: {
      body: {
        bg: "var(--color-bg-primary)",
        color: "var(--color-text-primary)",
        transition: "all 0.3s ease"
      }
    }
  }
})

// 主題同步包裝元件
function ThemeSyncWrapper({ children }) {
  useThemeSync()
  return <>{children}</>
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ThemeSyncWrapper>
        {/* 你的應用 */}
      </ThemeSyncWrapper>
    </ChakraProvider>
  )
}
```

---

## 使用範例

### 🎯 實際專案範例

```tsx
// 導航列
function Navbar() {
  return (
    <nav className="
      bg-bg-secondary          // 次要背景
      border-b                 // 底部邊框
      border-border-primary    // 邊框顏色
      sticky top-0             // 固定在頂部
      z-50                     // 層級
    ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-brand text-2xl font-bold">Logo</h1>
        
        <div className="flex gap-6">
          <a className="text-text-secondary hover:text-brand transition">首頁</a>
          <a className="text-text-secondary hover:text-brand transition">關於</a>
          <a className="text-text-secondary hover:text-brand transition">聯絡</a>
        </div>
        
        <button className="bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded">
          開始使用
        </button>
      </div>
    </nav>
  )
}

// Hero 區塊
function Hero() {
  return (
    <section className="bg-bg-primary py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-text-primary text-5xl font-bold mb-4">
          歡迎來到我們的平台
        </h1>
        <p className="text-text-secondary text-xl mb-8">
          打造更好的使用者體驗
        </p>
        <button className="
          bg-brand 
          hover:bg-brand-hover 
          text-white 
          px-8 py-3 
          rounded-full 
          text-lg
          transition-all
          hover:scale-105
        ">
          立即開始
        </button>
      </div>
    </section>
  )
}

// 卡片元件
function FeatureCard({ title, description, icon }) {
  return (
    <div className="
      bg-bg-secondary 
      border-2 
      border-border-primary 
      hover:border-border-brand
      rounded-xl 
      p-6
      transition-all
      hover:shadow-xl
      hover:scale-105
    ">
      <div className="text-brand text-4xl mb-4">{icon}</div>
      <h3 className="text-text-primary text-xl font-bold mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  )
}

// 表單
function ContactForm() {
  return (
    <form className="bg-bg-secondary p-8 rounded-lg border border-border-primary">
      <h2 className="text-text-primary text-2xl font-bold mb-6">聯絡我們</h2>
      
      <div className="mb-4">
        <label className="text-text-secondary block mb-2">姓名</label>
        <input 
          type="text"
          className="
            w-full 
            bg-bg-primary 
            text-text-primary
            border border-border-primary
            focus:border-brand
            rounded 
            px-4 py-2
            outline-none
            transition
          "
          placeholder="請輸入您的姓名"
        />
      </div>
      
      <div className="mb-4">
        <label className="text-text-secondary block mb-2">Email</label>
        <input 
          type="email"
          className="
            w-full 
            bg-bg-primary 
            text-text-primary
            border border-border-primary
            focus:border-brand
            rounded 
            px-4 py-2
            outline-none
            transition
          "
          placeholder="your@email.com"
        />
      </div>
      
      <button className="
        w-full
        bg-brand
        hover:bg-brand-hover
        text-white
        py-3
        rounded
        font-bold
        transition
      ">
        送出
      </button>
      
      {/* 狀態訊息 */}
      <p className="text-success mt-4">✓ 送出成功</p>
      <p className="text-error mt-4">✗ 送出失敗</p>
    </form>
  )
}
```

---

### 🔘 切換按鈕

```typescript
import { IconButton, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <IconButton
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      aria-label="切換主題"
    />
  )
}
```

---

### 🎨 在 Chakra UI 中使用

```typescript
import { Box, Text } from "@chakra-ui/react"
import { cssVar, cssVars } from "@/config/palette"

function MyCard() {
  return (
    <Box 
      bg={cssVar(cssVars.background.secondary)}
      borderColor={cssVar(cssVars.border.primary)}
      borderWidth="1px"
      p={4}
    >
      <Text color={cssVar(cssVars.text.primary)}>
        標題
      </Text>
      <Text color={cssVar(cssVars.text.secondary)}>
        次要內容
      </Text>
    </Box>
  )
}
```

---

### 🎯 在 Tailwind CSS 中使用

#### 方法 1：配置 Tailwind（推薦 ✨）

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // 品牌色
        'brand': 'var(--color-brand-primary)',
        'brand-primary': 'var(--color-brand-primary)',
        'brand-light': 'var(--color-brand-light)',
        'brand-hover': 'var(--color-brand-hover)',
        
        // 背景色
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        
        // 文字色
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-subtle': 'var(--color-text-subtle)',
        
        // 邊框色
        'border-primary': 'var(--color-border-primary)',
        'border-brand': 'var(--color-border-brand)',
        
        // 語義色
        'error': 'var(--color-semantic-error)',
        'success': 'var(--color-semantic-success)',
        'warning': 'var(--color-semantic-warning)',
        'info': 'var(--color-semantic-info)',
      }
    }
  }
}
```

```tsx
// ✅ 簡潔寫法（推薦）
function MyComponent() {
  return (
    <div className="bg-bg-primary text-text-primary border border-border-primary">
      <h1 className="text-brand hover:text-brand-hover">標題</h1>
      <p className="text-text-secondary">次要內容</p>
      
      {/* 按鈕 */}
      <button className="bg-brand hover:bg-brand-hover text-white">
        點擊
      </button>
      
      {/* 卡片 */}
      <div className="bg-bg-secondary border-border-brand">
        卡片內容
      </div>
      
      {/* 狀態色 */}
      <span className="text-error">錯誤訊息</span>
      <span className="text-success">成功訊息</span>
    </div>
  )
}
```

#### 方法 2：直接使用 CSS 變數

```tsx
// 適合一次性使用或特殊情況
function MyComponent() {
  return (
    <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <h1 className="text-[var(--color-brand-primary)]">標題</h1>
      <p className="text-[var(--color-text-secondary)]">內容</p>
    </div>
  )
}
```

#### 完整 Tailwind 配置範例

```javascript
// tailwind.config.js - 完整版
const { tailwindCssVarColors } = require('./src/config/palette')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // 使用 class 模式
  theme: {
    extend: {
      colors: {
        // 使用從 palette.ts 導出的配置
        ...tailwindCssVarColors,
        
        // 或手動配置
        brand: 'var(--color-brand-primary)',
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
      }
    }
  }
}
```

#### 🎨 Tailwind 常用 Class 速查表

| 使用場景 | Tailwind Class | 等同於 |
|---------|---------------|--------|
| 品牌色背景 | `bg-brand` | `background: var(--color-brand-primary)` |
| 品牌色文字 | `text-brand` | `color: var(--color-brand-primary)` |
| 品牌色邊框 | `border-brand` | `border-color: var(--color-brand-primary)` |
| 主背景 | `bg-bg-primary` | `background: var(--color-bg-primary)` |
| 次背景 | `bg-bg-secondary` | `background: var(--color-bg-secondary)` |
| 主文字 | `text-text-primary` | `color: var(--color-text-primary)` |
| 次文字 | `text-text-secondary` | `color: var(--color-text-secondary)` |
| 主邊框 | `border-border-primary` | `border-color: var(--color-border-primary)` |
| 錯誤 | `text-error` / `bg-error` | 紅色 |
| 成功 | `text-success` / `bg-success` | 綠色 |

```tsx
// 完整元件範例
function Card() {
  return (
    <div className="
      bg-bg-secondary           // 次要背景
      border-2                  // 邊框寬度
      border-border-brand       // 品牌邊框色
      rounded-lg                // 圓角
      p-6                       // 內距
      hover:shadow-lg           // 懸停陰影
      transition-all            // 過渡動畫
    ">
      <h2 className="text-brand text-2xl font-bold mb-4">
        標題
      </h2>
      <p className="text-text-secondary mb-4">
        描述內容
      </p>
      <button className="
        bg-brand                // 品牌背景
        hover:bg-brand-hover    // 懸停時的顏色
        text-white              // 白色文字
        px-6 py-2               // 內距
        rounded-full            // 圓角
        transition-colors       // 顏色過渡
      ">
        了解更多
      </button>
    </div>
  )
}
```

---

### 💻 在原生 CSS 中使用

```css
.my-component {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-primary);
}

.my-button {
  background: var(--color-brand-primary);
  color: white;
}

.my-button:hover {
  background: var(--color-brand-hover);
}
```

---

### 🔧 程式化使用

```typescript
import { getThemeManager } from "@/utils/themeToggle"

// 取得當前主題
const theme = getThemeManager().getTheme() // "light" | "dark"

// 切換主題
getThemeManager().toggleTheme()

// 設定特定主題
getThemeManager().setTheme("light")

// 監聽主題變化
const unsubscribe = getThemeManager().onThemeChange((theme) => {
  console.log("主題已切換為:", theme)
})

// 取消監聽
unsubscribe()
```

---

## 常見問題

### ❓ 為什麼使用 CSS Variables 而不是 Chakra UI 的 ColorMode？

**優點：**
- ✅ 效能更好（不需要重新渲染整個 React 樹）
- ✅ 支援所有框架（Chakra UI、Tailwind CSS、原生 CSS）
- ✅ 可以在 CSS 中直接使用
- ✅ 動畫和過渡效果更流暢

**缺點：**
- ❌ 需要手動管理變數
- ❌ 初始設定較複雜

---

### ❓ 如何新增顏色？

```typescript
// 1. 在 cssVars 中定義變數名稱
export const cssVars = {
  semantic: {
    warning: "--color-semantic-warning"  // 新增
  }
}

// 2. 在 darkThemeVars 中設定深色值
export const darkThemeVars = {
  [cssVars.semantic.warning]: "#F59E0B"
}

// 3. 在 lightThemeVars 中設定淺色值
export const lightThemeVars = {
  [cssVars.semantic.warning]: "#F59E0B"
}

// 4. 使用
<Text color={cssVar(cssVars.semantic.warning)}>警告</Text>
```

---

### ❓ 如何偵測系統主題？

```typescript
// 在 ThemeManager 的 init 方法中
private init() {
  const saved = localStorage.getItem("theme")
  
  if (!saved) {
    // 沒有儲存的主題，使用系統偏好
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    this.currentTheme = prefersDark ? "dark" : "light"
  } else {
    this.currentTheme = saved as ThemeMode
  }
  
  // 監聽系統主題變化
  window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        this.setTheme(e.matches ? "dark" : "light", false)
      }
    })
}
```

---

### ❓ 如何確保 SSR 不會閃爍？

```typescript
// 在 HTML head 中加入腳本（Next.js 為例）
<script dangerouslySetInnerHTML={{
  __html: `
    (function() {
      const theme = localStorage.getItem('theme') || 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.classList.add(theme);
    })();
  `
}} />
```

---

### ❓ 支援多種主題（不只黑白）？

```typescript
export type ThemeMode = "light" | "dark" | "blue" | "purple"

export const blueThemeVars = {
  [cssVars.background.primary]: "#001f3f",
  [cssVars.text.primary]: "#7FDBFF",
  // ...
}

export const purpleThemeVars = {
  [cssVars.background.primary]: "#2D1B69",
  [cssVars.text.primary]: "#E0B0FF",
  // ...
}

// 在 applyCSSVariables 中
private applyCSSVariables(theme: ThemeMode) {
  const themeMap = {
    dark: darkThemeVars,
    light: lightThemeVars,
    blue: blueThemeVars,
    purple: purpleThemeVars
  }
  
  const vars = themeMap[theme]
  Object.entries(vars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
  })
}
```

---

## 🎯 完整顏色對照表

| 使用場景 | Dark | Light | CSS Variable |
|---------|------|-------|--------------|
| 頁面背景 | `#0C0C0C` | `#FFFFFF` | `--color-bg-primary` |
| 卡片背景 | `#232323` | `#F9FAFB` | `--color-bg-secondary` |
| 主標題 | `#FFFFFF` | `#000000` | `--color-text-primary` |
| 次要文字 | `#D9D9D9` | `#666666` | `--color-text-secondary` |
| 品牌色 | `#E8AE0F` | `#E8AE0F` | `--color-brand-primary` |
| 邊框 | `#262626` | `#D1D5DB` | `--color-border-primary` |
| 錯誤 | `#ef4444` | `#ef4444` | `--color-semantic-error` |
| 成功 | `#10B981` | `#10B981` | `--color-semantic-success` |

---

## 📦 完整檔案結構

```
src/
├── config/
│   ├── palette.ts          # 顏色配置
│   └── theme.ts            # Chakra UI 主題
├── hooks/
│   └── useThemeSync.ts     # 主題同步 Hook
├── utils/
│   └── themeToggle.ts      # 主題管理器
└── App.tsx                 # 應用入口
```

---

## 🔄 三種使用方式對比

| 方式 | 範例 | 優點 | 缺點 | 推薦度 |
|-----|------|-----|------|--------|
| **Tailwind 簡寫** | `bg-brand` | 簡潔、開發快速、IDE 支援好 | 需要配置 | ⭐⭐⭐⭐⭐ |
| **Tailwind CSS Var** | `bg-[var(--color-brand)]` | 不需配置、靈活 | 冗長、沒有 autocomplete | ⭐⭐⭐ |
| **Chakra UI** | `bg={cssVar(cssVars.brand.primary)}` | 型別安全、適合複雜邏輯 | 較冗長 | ⭐⭐⭐⭐ |

### 實際使用建議

```tsx
// ✅ 推薦：簡單 UI 用 Tailwind 簡寫
function SimpleButton() {
  return (
    <button className="bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded">
      按鈕
    </button>
  )
}

// ✅ 推薦：複雜元件用 Chakra UI
function ComplexModal() {
  return (
    <Modal>
      <ModalContent bg={cssVar(cssVars.background.secondary)}>
        <ModalHeader color={cssVar(cssVars.text.primary)}>標題</ModalHeader>
        {/* 有型別檢查和 props 邏輯的場景 */}
      </ModalContent>
    </Modal>
  )
}

// ⚠️ 臨時使用：一次性特殊情況
function SpecialCase() {
  return (
    <div className="bg-[var(--color-bg-primary)]">
      {/* 只在這裡用一次的顏色 */}
    </div>
  )
}
```

---

## 💡 最佳實踐

### ✅ 推薦做法

```tsx
// 1. 使用 Tailwind 簡寫（最常用）
<button className="bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded">
  按鈕
</button>

// 2. 顏色語義化命名
<div className="text-text-primary">主要文字</div>
<div className="text-text-secondary">次要文字</div>
<div className="text-error">錯誤訊息</div>

// 3. 使用過渡動畫
<button className="bg-brand hover:bg-brand-hover transition-colors">
  有動畫的按鈕
</button>

// 4. 組合使用
<div className="
  bg-bg-secondary 
  border border-border-primary 
  hover:border-brand
  transition-all
">
  卡片
</div>
```

### ❌ 避免做法

```tsx
// ❌ 不要寫死顏色（無法跟隨主題切換）
<div className="bg-gray-900 text-white">
  這在淺色模式下會很奇怪
</div>

// ❌ 不要用 dark: 修飾符（已經用 CSS Variables 處理）
<div className="bg-white dark:bg-black">
  不需要這樣，用 bg-bg-primary 就好
</div>

// ❌ 不要混用不同系統
<div 
  className="bg-brand"  {/* Tailwind */}
  style={{ color: 'var(--color-text-primary)' }}  {/* inline style */}
>
  統一用 Tailwind 或統一用 inline style
</div>

// ❌ 不要在 Chakra UI 用錯函數
<Box bg={cssVarValue(cssVars.background.primary)}>  {/* 錯誤 */}
  應該用 cssVar()
</Box>
```

### 🎨 命名規範

```typescript
// ✅ 語義化命名
bg-brand          // 品牌色
text-primary      // 主要文字
border-brand      // 品牌邊框
text-error        // 錯誤狀態
bg-secondary      // 次要背景

// ❌ 避免色彩名稱
bg-gold           // 不要用色彩名
text-blue         // 應該用語義
border-yellow     // 語義更好理解
```

### 📏 層級建議

```tsx
// 背景層級
bg-bg-primary      // 最底層（頁面背景）
bg-bg-secondary    // 中間層（卡片、側邊欄）
bg-bg-tertiary     // 最上層（特殊區塊）

// 文字層級
text-text-primary    // 最重要（標題）
text-text-secondary  // 次要（導航、描述）
text-text-subtle     // 輔助（時間戳、餘額）

// 邊框層級
border-border-primary  // 一般邊框
border-brand           // 強調邊框（選中、聚焦）
```

---

## 🚀 總結

這套主題系統的核心優勢：

1. **單一真相來源** - ThemeManager 統一管理
2. **自動同步** - CSS Variables + Chakra UI + Tailwind CSS 三者同步
3. **效能優異** - 只修改 CSS 變數，無需重新渲染
4. **易於擴充** - 新增顏色只需三步驟
5. **持久化** - 使用 localStorage 保存使用者偏好
6. **跨框架** - 可用於任何 CSS/JS 框架
7. **開發體驗佳** - Tailwind 簡寫 + IDE 自動完成

---

## 📚 參考資源

- [Chakra UI ColorMode](https://chakra-ui.com/docs/components/concepts/color-mode)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)

