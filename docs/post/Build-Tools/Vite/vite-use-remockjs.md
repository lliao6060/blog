# Vite with remockjs 實用範例
###### tags: `Vite`

### 先下載`remock.js`
```javascript
npm i remockjs
或
yarn add remockjs
```

### 創建remockjs檔案
- 創建`api/remock/remock.js`、`api/remock/dev.ts`、`api/remock/index.js`

```javascript
//in api/remock/remock.is
import { mockXHR, mockRequest } from 'remockjs';

mockXHR({
  timeout: 1500,
});

```

```javascript
//in api/remock/dev.ts
import axios from 'axios'
import type { Response } from '@/common/types'

function api(url: string, method: string, data: any) {
  const keyName = method === 'get' ? 'params' : 'data';
  return (axios as any)[method](url, {
    [keyName]: data,
  }).then((res: any) => res.data);
}

export default {
  //test
  async getTestData(data?: any[]): Promise<Response & any> {
    return api('/api/test-data', 'get', data);
  },
}
```

```javascript
//in api/remock/index.ts
import dev from './dev';
import mock from './remock';

if (import.meta.env.DEV) {
  mock();
}

export default dev;
```

--------------

### 假資料產生&導入處理

- 創建一隻`mock/test.js`測試能否正常使用mock api

```javascript
//in test.js
export default {
  testData: {
    'data|3-5': [
      {
        id: '',
        userId: '@natural(10000, 19999)',
        beginDate: '@date("yyyy-MM-dd HH:mm:ss")',
        endDate: '@date("yyyy-MM-dd HH:mm:ss")',
        status: '@natural(0, 1)',
      }
    ]
  }
}
```

- 資料沒問題後，再創建一隻`mock/mockApi.js`做資料自動導入處理

```javascript
//in mockApi.js
const mockDataFiles = import.meta.globEager('../mock/*.js', '!**/mokApi.js')

let mockDataFilesList = {}
let fileName = []

//取得所有資料檔案
for (const key in mockDataFiles) {
  mockDataFilesList[key.replace(/(\.\/mock\/|\.js)/g, '').slice(1)] = mockDataFiles[key]
  const keyName = key.substr(key.lastIndexOf('/') + 1).replace(".js","")
  keyName !== 'mockApi' ? fileName.push(keyName) : ''
}

let mockDataArray = []

Object.entries(mockDataFilesList).forEach(([key, value]) => {
  let returnResult = {}
  if(key === 'mockApi') return
  returnResult = mockDataFilesList[key].default
  mockDataArray.push(returnResult)
})


//合併資料
const mockDatas = mockDataArray.reduce(function(target, key, index) {
  target[index] = key;
  return {...target, ...target[index]}
}, {})


//物件去重
Object.keys(mockDatas).forEach(function (key) {
  if(!isNaN(Number(key))) {
    delete mockDatas[key];
  }
});

export default {
  mockDatas,
}

```

### 之後就可以直接使用
```javascript
//in api/remock/remock.is
import { mockXHR, mockRequest } from 'remockjs';
import api from '@/mock/mockApi';

mockXHR({
  timeout: 1500,
});

export default function mockClient() {
  //test
  mockRequest('get', '/api/test-data', api.mockDatas['testData']);
}

```
### 參考
- [Vite 3.0 正式发布，下一代前端构建工具！](https://juejin.cn/post/7120820138907009060)
- [remockjs](https://www.npmjs.com/package/remockjs)