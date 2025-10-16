# Zustand 基礎使用

### set方法
```jsx=
  setThemeConfig: (config) => {
    set((): LMThemeConfig => {
      return {
        config: config,
      };
    });
  },
  // setThemeConfig: (config) => set((): LMThemeConfig => ({ config })),
```


### 在一般`.tsx`檔案調用方法
```jsx=
import { AppState, useAppStore } from '@/store/app';

const { isLoading, count, increase, resetCount } = useAppStore<AppState>(
(state: AppState) => state,
);

```


### 在store調用其他store的方法

```js=
import { useAppStore } from './app';

import { create } from 'zustand';

export const useUserStore = create<UserState>()((set) => ({
  getPermissions: async () => {
    // 純狀態改變 => useAppStore.setState({ isLoading: true })
    useAppStore.getState().setLoading(true)
    setTimeout(async () => {
      const res = await testApi.testReq();
      set({ permissions: await res });
      useAppStore.getState().setLoading(false)
    }, 1000);
  },
}));
```


### 參考
- [zustand](https://github.com/pmndrs/zustand#readingwriting-state-and-reacting-to-changes-outside-of-components)
- [How to call Zustand / React hook outside of React component?](https://stackoverflow.com/questions/75530833/how-to-call-zustand-react-hook-outside-of-react-component)
- [Zustand 筆記](https://hackmd.io/@ani168/BJdsf4cpc)