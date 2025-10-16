# React + Vitest 測試指南

## 概述

Vitest 基於 Testing-Library 提供了測試、斷言等 API，jsdom 提供了模擬 DOM 環境的能力。

## 安裝依賴

```bash
# 安裝 Vitest
yarn add vitest -D

# 安裝測試所需的基礎庫
yarn add jsdom @testing-library/react -D
yarn add @testing-library/dom @testing-library/jest-dom -D

# 安裝模擬使用者操作的庫
yarn add @testing-library/user-event -D
```

## 配置步驟

### 1. 建立測試配置檔案

在 `src` 目錄下建立 `test/setup.ts`：

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom';
```

### 2. 配置 Vite

在 `vite.config.ts` 中添加測試配置：

```typescript
export default defineConfig({
  // ... 其他設定
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
```

### 3. 添加測試腳本

在 `package.json` 的 `scripts` 中新增：

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage"
  }
}
```

**說明：**
- `test` - 運行測試
- `test:ui` - 啟動圖形介面
- `test:coverage` - 生成測試覆蓋率報告

### 4. 配置型別定義

在 `vite-env.d.ts` 中添加：

```typescript
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />
/// <reference types="vitest" />

declare module '*.ts';
```

### 5. 建立測試工具函數

在 `utils` 目錄下建立 `test-utils.tsx`：

```typescript
/* eslint-disable react-refresh/only-export-components */

import { BrowserRouter } from 'react-router-dom';
import { queries, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import * as customQueries from './custom-queries';

const allQueries = {
  ...queries,
  ...customQueries,
};

/**
 * 自定義渲染函數
 * 可以在這裡包裝全域 Provider
 */
const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    queries: allQueries,
    ...options,
  });

/**
 * 帶 Router 的渲染函數
 * 用於測試需要路由的組件
 */
const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render, renderWithRouter };
```

## 測試範例

### 1. 頁面組件測試

```typescript
// index.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import Index from '../src/pages/index';
import { render, screen, userEvent } from '../src/utils/test-utils';

describe('Index Page', () => {
  it('should render the title', () => {
    render(<Index />);
    expect(screen.getByText('I am Index')).toBeInTheDocument();
  });

  it('should increment count on click', async () => {
    render(<Index />);
    await userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText('count is: 1')).toBeInTheDocument();
  });
});
```

### 2. 按鈕組件測試

```typescript
// button.test.tsx
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import KqButton from '../src/components/KqButton';
import { fireEvent, render } from '../src/utils/test-utils';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  it('should render the Button', () => {
    render(<KqButton />);
  });

  it('should handle click event', () => {
    // 模擬點擊函數
    const handleClick = vi.fn();
    
    // 渲染按鈕組件
    const { getByRole } = render(<KqButton onClick={handleClick} />);
    const button = getByRole('button');
    
    // 觸發點擊事件
    fireEvent.click(button);
    
    // 斷言：函數應該被調用
    expect(handleClick).toHaveBeenCalled();
  });

  it('should not trigger click when disabled', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(<KqButton onClick={handleClick} disabled />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    // 斷言：禁用時不應觸發點擊
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

### 3. Input 組件測試

```typescript
// DateInput.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import CDateInput from '../src/components/CDateInput';
import { queryByAttribute, render } from '../src/utils/test-utils';

describe('DateInput Component', () => {
  const getById = queryByAttribute.bind(null, 'id');
  const dateInputId = 'c-date-input';

  it('should render the DateInput', () => {
    render(<CDateInput />);
  });

  it('should be disabled when disabled prop is true', () => {
    const { container } = render(<CDateInput disabled />);
    const element = getById(container, dateInputId);
    
    expect(element).toHaveAttribute('disabled', '');
  });

  it('should format date correctly', () => {
    // 時間戳：2024/6/13 11:13
    const timestamp = 1718248414317;
    const { container } = render(
      <CDateInput format='MM/dd/yyyy' timestamp={timestamp} />
    );
    const element = getById(container, dateInputId);
    
    expect(element).toHaveValue('06/13/2024');
  });
});
```

### 4. Message 组件测试

```typescript
// message.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import renderMessage from '../src/utils/render-components/renderMessage';
import { fireEvent, render, screen } from '../src/utils/test-utils';

describe('Message Component', () => {
  it('should show the message when triggered', async () => {
    const { showMessage } = renderMessage();
    
    render(
      <button
        data-testid='show-message-button'
        onClick={() =>
          showMessage({
            type: 'info',
            content: 'this is some message',
          })
        }>
        Show message
      </button>
    );
    
    // 點擊按鈕
    const button = await screen.getByTestId('show-message-button');
    fireEvent.click(button);
    
    // 斷言：消息應該顯示
    const message = await screen.findByText('this is some message');
    expect(message).toBeInTheDocument();
  });
});
```

### 5. Hook 測試範例

```typescript
// confirmModal.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import renderConfirmModal from '../src/utils/render-components/renderConfirmModal';
import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '../src/utils/test-utils';

describe('Confirm Modal', () => {
  const { result } = renderHook(() => renderConfirmModal());
  const { confirmModal } = result.current;

  const renderShowModalButton = () => {
    return render(
      <button
        data-testid='show-confirm-modal-button'
        onClick={() =>
          confirmModal({
            content: 'this is some content',
            onConfirm: () => {},
          })
        }>
        Show Modal
      </button>
    );
  };

  const handleOpenModal = async () => {
    renderShowModalButton();
    const openButton = await screen.findByTestId('show-confirm-modal-button');
    fireEvent.click(openButton);
  };

  const handleRemoveModal = async () => {
    fireEvent.click(screen.getByTestId('c-cancel-button'));
    // 等待 modal 被移除才能繼續下一個測試
    await waitForElementToBeRemoved(screen.getByTestId('c-confirm-modal'));
  };

  it('should show the confirm modal', async () => {
    await handleOpenModal();

    const message = await screen.findByText('this is some content');
    expect(message).toBeInTheDocument();

    await handleRemoveModal();
  });

  it('should remove the modal when cancelled', async () => {
    await handleOpenModal();

    const message = await screen.findByText('this is some content');

    await waitFor(() => {
      const cancelButton = screen.getByTestId('c-cancel-button');
      expect(cancelButton).toBeVisible();
    });

    await handleRemoveModal();
    expect(message).not.toBeInTheDocument();
  });
});
```

## 常用 API

### 查詢方法

| 方法 | 說明 | 使用場景 |
|------|------|---------|
| `getByText` | 透過文本內容查找 | 查找顯示的文字 |
| `getByRole` | 透過角色查找 | 查找按鈕、輸入框等 |
| `getByTestId` | 透過 data-testid 查找 | 需要精確定位元素 |
| `findBy*` | 異步查詢（返回 Promise） | 等待元素出現 |
| `queryBy*` | 查詢（不拋出錯誤） | 檢查元素是否不存在 |

### 使用者操作

```typescript
import userEvent from '@testing-library/user-event';

// 點擊
await userEvent.click(button);

// 輸入
await userEvent.type(input, 'Hello World');

// 選擇
await userEvent.selectOptions(select, 'option1');
```

### 斷言

```typescript
// 元素存在
expect(element).toBeInTheDocument();

// 元素可見
expect(element).toBeVisible();

// 元素包含文字
expect(element).toHaveTextContent('Hello');

// 元素有屬性
expect(element).toHaveAttribute('disabled');

// 函數被調用
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith(arg1, arg2);
```

## 測試技巧

### 1. 異步測試

使用 `waitFor` 等待異步操作：

```typescript
await waitFor(() => {
  expect(screen.getByText('Loaded')).toBeInTheDocument();
});
```

### 2. 模擬函數

使用 `vi.fn()` 建立 mock 函數：

```typescript
const mockFn = vi.fn();
mockFn.mockReturnValue('mock value');
```

### 3. 清理測試

每個測試後自動清理：

```typescript
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});
```

## 參考資源

### 入門教學
- [入門：使用 Vitest 測試 React 組件](https://juejin.cn/post/7158824055926161422)
- [Day 15: React Testing Library - getBy** (一)](https://ithelp.ithome.com.tw/articles/10332094)
- [User Event - 模擬使用者操作](https://hackmd.io/@chuyin/H1DQ4OiHj)
- [React Input Testing Demo](https://stackblitz.com/edit/github-w9fjy7?file=vite.config.ts,src%2Ftest%2Fsetup.ts)
- [React Hook Testing Library](https://pjchender.dev/react/note-react-hook-testing-library/)

### 官方文件
- [Vitest 官方文件](https://cn.vitest.dev/guide/)
- [React Testing Library](https://testing-library.com/docs/)
- [React Testing Library 配置](https://testing-library.com/docs/react-testing-library/setup)

