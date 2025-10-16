###### tags: `React`

# react-redux基礎筆記
>最基本的用法

### 安裝
```
  "@types/react-redux": "^7.1.25",
  "@types/redux": "^3.6.0",
  "@types/redux-thunk": "^2.1.0",
  "react": "^18.2.0",
  "react-redux": "^8.0.5",
  "redux": "^4.2.1",
  "redux-thunk": "^2.4.2",
```

### 設定store
```
└─src
    ├─store
    │  ├─store.ts
    │  ├─action.ts
    │  ├─actionType.ts
    │  └─reducer.ts
    └─views
```

```javascript
// reducer.ts

const initialState = {
  count: 0,
  cartCount: 0,
  min: 0,
  max: 10,
  cartItems: []
};

const addReducer = (
  state = initialState,
  action: { type: string, payload?: any }
) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count >= state.max
          ? state.count
          : state.count + 1
      };
    case 'DECREASE':
      return {
        ...state,
        count: state.count <= state.min
          ? state.count
          : state.count - 1
      };
    // 有傳值的範例
    case 'ADD_TO_CART':
      const cartList = []
      cartList.push(action.payload)
      return {
        ...state,
        cartCount: state.cartCount += state.count,
        cartItems: [...cartList]
      };
    default:
      return state;
  }
}

export default addReducer;


```


```javascript
// store.ts

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer"

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
```

```javascript
// action.ts

import { INCREMENT, DECREASE } from "./actionType";
import { toast } from "react-toastify";

export const incrementAction = () => {
  return (dispatch: (arg0: { type: string }) => void) => {
    dispatch({
      type: INCREMENT
    });
    // toast.success('MY SUCCESS', {
    //   position: 'top-center',
    // });
  }
}

export const decreaseAction = () => {
  return (dispatch: (arg0: { type: string }) => void) => {
    dispatch({
      type: DECREASE
    });
    // toast.warn('DECREASE', {
    //   position: 'top-center',
    // });
  }
}

// 有傳值的範例
export const addToCart = (payload: Record<string, string | number>) => {
  return {
    type: ADD_TO_CART,
    payload
  }
}
```

```javascript
// actionType.ts

export const INCREMENT: string = 'INCREMENT';
export const DECREASE: string = 'DECREASE';

```

### 在入口(app.tsx)引入
```javascript
import { Provider } from 'react-redux';
import store from '@/store/store';

<Provider store={store}>
  <Page />
</Provider
```

### 在組件(components/counter.tsx)引入

#### 一般用法
```javascript
import { useSelector, useDispatch } from "react-redux";
const Counter = ({...props}) => {
  const count = useSelector((state: Record<string, number>) => state.value)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch({type: 'DECREASE'})}>add</button>
      <p>{count}</p>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>add</button>
    </>
  )
}

export default Counter
```

#### 搭配connent(有點類似vuex的`mapState`, `mapActions`)
> 可以更靈活的搭配一些`toast`或`alerts`組件使用
```javascript
import { PropsWithChildren } from 'react'
import { connect } from 'react-redux';
import { incrementAction, decreaseAction } from '@/store/cart/actions'

interface CounterProps extends PropsWithChildren {
  count: number
  incrementAction: () => void
  decreaseAction: () => void
}

const Counter = ({...props}: CounterProps) => {
  const { count, incrementAction, decreaseAction } = props
  return (
    <>
      <button onClick={decreaseAction}>add</button>
      <p>{count}</p>
      <button onClick={incrementAction}>add</button>
    </>
  )
}

const mapStateToProps = (state: Record<string, number>) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch: any) => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

```