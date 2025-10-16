# Vue 自定義 Toast 和 Modal

## 概述

定義在 `utils.ts` 讓組件變成執行 function 即可使用，無需在模板中宣告。

使用 Vue 的 `h()` 和 `render()` 函數動態創建組件實例。

## Modal 組件

### 組件定義

```vue
<template>
  <div class="absolute top-[50px] bottom-0 left-0 right-0 bg-im-transition-bg z-im-top">
    <div class="flex flex-col gap-6 items-center text-white bg-im-body-bg w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-6 rounded-lg text-[13px]">
      <p class="text-sm">
        {{ title }}
      </p>
      <slot name="content">
        <span
          v-if="content"
          class="max-w-[90%] break-all"
        >{{ content }}</span>
      </slot>
      <slot name="footer">
        <div class="flex justify-between w-full gap-3">
          <im-button
            class="w-full"
            v-if="cancelText"
            :text="cancelText"
            :disabled="isPending"
            @click="cancel"
          />

          <im-button
            class="w-full text-im-active"
            v-if="confirmText"
            :text="confirmText"
            :disabled="isPending"
            @click="confirm"
          />
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

type Props = {
  cancelText?: string,
  confirmText?: string,
  title?: string,
  content?: string,
  modelValue?: boolean,
  isPending?: boolean,
}

withDefaults(defineProps<Props>(), {
  cancelText: '',
  confirmText: '',
  title: '',
  content: '',
  modelValue: false,
  isPending: false,
});

const emit = defineEmits(['confirm', 'cancel', 'update:modelValue']);

const confirm = () => {
  emit('confirm');
};

const cancel = () => {
  emit('cancel');
  emit('update:modelValue', false);
};

</script>
```

### Utils 定義

在 `utils.ts` 中定義：

```typescript
import { h, render } from 'vue';
import ImModal from '@/components/ImModal.vue';

export const Confirm = (props: {
  title?: string,
  content?: string,
  cancelText?: string,
  confirmText?: string,
  onCancel?: () => void,
  onConfirm?: () => void
}) => {
  // 最外層容器
  const parent = document.getElementById('im-window');
  if (!parent) return;
  
  // 防止重複創建
  if (document.getElementById('im-modal-container')) {
    return;
  }
  
  const container = document.createElement('div');
  container.id = 'im-modal-container';
  
  const vm = h(ImModal, {
    ...props,
    onCancel: () => {
      parent?.removeChild(container);
      props?.onCancel && props?.onCancel();
    },
    onConfirm: () => {
      props?.onConfirm && props?.onConfirm();
      parent?.removeChild(container);
    },
  });

  render(vm, container);
  parent.appendChild(container);
};
```

### 使用方式

```typescript
import { Confirm } from '@/utils'

Confirm({
  title: t('components_im_coversation_remove'),
  content: t('components_im_coversation_remove_content', { name }),
  cancelText: t('common_cancel'),
  confirmText: t('common_confirm'),
  onConfirm: async () => {
    // 執行確認後的動作
  },
});
```

## Toast 組件

### Utils 定義

```typescript
import { h, render } from 'vue';

export const showToast = (
  text: string, 
  errorMessage: boolean = false, 
  duration: number = 2
) => {
  // 最外層容器
  const imWindow: HTMLElement | null = document.querySelector('#im-window') as HTMLElement;
  
  if (imWindow) {
    const toastContainer = document.createElement('div');
    toastContainer.classList.add('toast-container');
    toastContainer.style.cssText = `
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
    `;
    imWindow.appendChild(toastContainer);

    const VNode = h(
      'div', // type
      { 
        class: `toast-item animate-fade-in-800 animate-fade-out-800 bg-black rounded-lg text-white py-2 px-4 ${errorMessage && '!text-im-danger-bg text-sm text-center'}`, 
        innerHTML: text 
      }, // props
    );
    
    render(VNode, toastContainer);

    setTimeout(() => {
      imWindow.removeChild(toastContainer);
    }, duration * 1000);
  }
};
```

### 使用方式

```typescript
import { showToast } from '@/utils'

// 成功訊息
showToast(t('components_im_submitInvitation'));

// 錯誤訊息（紅色）
showToast('錯誤訊息', true);

// 自定義顯示時間（秒）
showToast('3 秒後消失', false, 3);
```

## 核心概念

### 1. h() 函數
用於創建虛擬 DOM 節點（VNode）

```typescript
const vnode = h(Component, props, children);
```

### 2. render() 函數
將 VNode 渲染到實際 DOM 中

```typescript
render(vnode, container);
```

### 3. 動態組件掛載流程

```
創建容器元素
    ↓
使用 h() 創建 VNode
    ↓
使用 render() 渲染到容器
    ↓
將容器掛載到頁面
    ↓
執行完畢後移除容器
```

## 優點

1. **函數式調用**：不需要在模板中宣告組件
2. **靈活性高**：可以動態創建和銷毀
3. **獨立性**：不依賴父組件狀態
4. **代碼簡潔**：調用方式簡單直觀

## 注意事項

1. **容器元素**：需要確保頁面有對應的容器元素（如 `#im-window`）
2. **記憶體管理**：使用完畢要記得移除 DOM 節點
3. **重複創建**：需要檢查是否已存在，避免重複創建
4. **響應式**：動態創建的組件需要手動處理響應式邏輯

## 擴展應用

可以用相同方式創建其他類型的彈窗：

- Loading 載入動畫
- Alert 提示框
- Notification 通知
- Drawer 抽屜
- Dialog 對話框

## 相關 API

- [Vue h() 函數](https://vuejs.org/api/render-function.html#h)
- [Vue render() 函數](https://vuejs.org/api/render-function.html#render)

