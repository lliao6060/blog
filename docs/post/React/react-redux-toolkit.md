###### tags: `React`, `reduxjs/toolkit`

# reduxjs/toolkit基礎筆記
> 不用再分reducers、actions、actionType等檔案了

### 安裝
```
  "@reduxjs/toolkit": "^1.9.2",
  "@types/react-redux": "^7.1.25",
  "@types/redux": "^3.6.0",
  "react-redux": "^8.0.5",
  "redux": "^4.2.1",
```

### 設定store
```
└─src
    ├─store
    │  ├─store.ts
    │  └─cart.ts
    └─views
```

```javascript
// cart.ts
import api from '@/services';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from './store';

const initialState: CartState = {
  count: 0,
  currentProduct: {}
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state): void => {
      state.count += 1
    },
    updateCurrentProduct: (state, { payload }): void => {
      state.currentProduct = payload
    },
  },
})

// 導出外部需要用到的 actions ，使用起來較方便
export const {
  increment,
  fetchProduct,
} = cartSlice.actions // reducers 就是 actions 

// 異步 api 可以用 createAsyncThunk
// 範例
const delay = new Promise(resolve => setTimeout(resolve, 1500));

export const fetchProduct = createAsyncThunk('cart/fetchProduct', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI
  const { data: res } = await api.getCurrentProduct()
  dispatch(updateCurrentProduct(res.data))
  return res.data
});


export default cartSlice.reducer;

```

```javascript
// store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cart from './cart';

const rootReducer = combineReducers({
  cartSlice: cart
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
```

### 在組件(components/counter.tsx)引入
```javascript
import type { AppDispatch, AppState } from '@/store/store';
import { PropsWithChildren } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '@/store/cart';

interface CounterProps extends PropsWithChildren {
}

const Counter = ({...props}: CounterProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { count } = useSelector((state: AppState) => state.cartSlice)

  return (
    <>
      <div>
        <div onClick={() => dispatch(decrement())}> - </div>
        <div className='basis-1/3 h-full flex-center'>{count}</div>
        <div onClick={() => dispatch(increment())}> + </div>
      </div>
    </>
  )
}

export default Counter

```