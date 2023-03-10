# 創建vue simple store
###### tags: `vue` `vue2` `vuex` `store`

> 如果專案較小不須用到`vuex`的話可以自行建立一個共通倉庫

1. 創建store資料夾, 裏頭分別放`index.js` 及 `created-store.js`

```javascript
// in created-store.js
function createStore(options) {
	return {
		install(Vue) {
			Vue.prototype.$store = new Vue(options);
		},
	};
}
  
  export default createStore;

```

```javascript
// in index.js
import createStore from './created-store';

const store = createStore({
data() {
		return {
			hideEvent: '',
		};
	},
})

export default store;

```

2. 在`main.js`引入

```javascript
import store from './store'
Vue.use(store);

```


3. 就可以在組件中使用拉:100::smile:
