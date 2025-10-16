# Google Tag Manager 筆記

###### tags: `google`, `google ga`, `埋點`

## Google Tag Manager 設定流程

### 1. 安裝套件

使用 [vue-gtm](https://github.com/gtm-support/vue-gtm) 套件

```bash
npm install @gtm-support/vue-gtm
# 或
yarn add @gtm-support/vue-gtm
```

### 2. 在 main.js 中配置

```javascript
import { createGtm } from '@gtm-support/vue-gtm';

app.use(
  createGtm({
    id: 'GTM-xxxxx', // 替換成你的 GTM ID
  }),
);
```

### 3. 在組件中使用事件追蹤

在你要綁定事件的地方：

```javascript
import {
  GtmSupport,
  useGtm,
  type DataLayerObject
} from '@gtm-support/vue-gtm';

const gtm = useGtm();

function clickEvent() {
  // ...事件處理
  if ((gtm as GtmSupport).enabled()) {
    ((gtm as GtmSupport).dataLayer() as DataLayerObject[]).push({
      event: 'purchase_suc',
    })
  }
}
```

## GA vs GTM

### Google Analytics (GA)
專門用來**蒐集訪客數據**的工具，並且提供相應的報表。

### Google Tag Manager (GTM)
讓我們能**方便管理追蹤碼**，並且進行資料轉運。

### 關係說明
- GTM 是容器，用來管理各種追蹤碼（包括 GA）
- GA 是實際收集和分析數據的工具
- 使用 GTM 可以不用修改程式碼就能新增或修改追蹤碼
- GTM 可以同時管理 GA、Facebook Pixel、其他第三方追蹤碼等

## 常用事件追蹤範例

### 基本事件推送

```javascript
const gtm = useGtm();

function trackEvent(eventName: string, eventData?: object) {
  if ((gtm as GtmSupport).enabled()) {
    ((gtm as GtmSupport).dataLayer() as DataLayerObject[]).push({
      event: eventName,
      ...eventData
    })
  }
}
```

### 電子商務事件 - 商品點擊

```javascript
function trackProductClick(product: any) {
  if ((gtm as GtmSupport).enabled()) {
    ((gtm as GtmSupport).dataLayer() as DataLayerObject[]).push({
      event: 'product_click',
      ecommerce: {
        items: [{
          item_id: product.id,
          item_name: product.name,
          price: product.price,
        }]
      }
    })
  }
}
```

### 電子商務事件 - 購買完成

```javascript
function trackPurchase(orderData: any) {
  if ((gtm as GtmSupport).enabled()) {
    ((gtm as GtmSupport).dataLayer() as DataLayerObject[]).push({
      event: 'purchase',
      ecommerce: {
        transaction_id: orderData.orderId,
        value: orderData.total,
        currency: 'TWD',
        items: orderData.items
      }
    })
  }
}
```

### 加入購物車

```javascript
function trackAddToCart(product: any, quantity: number) {
  if ((gtm as GtmSupport).enabled()) {
    ((gtm as GtmSupport).dataLayer() as DataLayerObject[]).push({
      event: 'add_to_cart',
      ecommerce: {
        items: [{
          item_id: product.id,
          item_name: product.name,
          price: product.price,
          quantity: quantity
        }]
      }
    })
  }
}
```

## 進階配置

### 啟用除錯模式

```javascript
app.use(
  createGtm({
    id: 'GTM-xxxxx',
    debug: process.env.NODE_ENV !== 'production', // 開發環境啟用除錯
    loadScript: true,
    vueRouter: router, // 自動追蹤頁面瀏覽
  }),
);
```

### 條件載入

```javascript
app.use(
  createGtm({
    id: 'GTM-xxxxx',
    enabled: process.env.NODE_ENV === 'production', // 只在生產環境啟用
  }),
);
```

## 注意事項

- GTM ID 格式為 `GTM-XXXXXXX`
- 在開發環境建議啟用 debug 模式，方便查看事件
- dataLayer 推送的資料結構要與 GTM 後台設定一致
- 電子商務事件需遵循 GA4 的事件格式

## 基礎參考資料

- [[Vue] 跟著 Vue 闖蕩前端世界 - 19 透過 GTM 對網站進行 GA 追蹤 | 搞搞就懂 - 點部落](https://dotblogs.com.tw/wasichris/2018/09/28/012643)
- [GTM是什麼？入門必看的Google Tag Manager 代碼管理工具設定教學！](https://doordata.tw/blog/gtm-tutorial-for-beginner)
- [GTM是什麼?與GA差異?Google Tag Manager代碼管理工具設定與教學](https://doordata.tw/blog/gtm-tutorial-for-beginner)

## 進階設定參考

- [【實作教學】新版 GA4 電子商務事件，新舊差異與 Purchase 轉換！](https://www.turingdigital.com.tw/blog/ga4-ecommerce-guide)
- [電子商務 (GA4) 開發人員指南](https://developers.google.com/analytics/devguides/migration/ecommerce/ecommerce-gtag?hl=zh-tw)
- [代碼管理工具的加強型電子商務](https://developers.google.com/analytics/devguides/collection/ua/gtm/enhanced-ecommerce?hl=zh-tw#purchases)
- [利用GTM設定Google Analytics Ecommerce 追蹤碼](https://medium.com/@leahblog/%E5%88%A9%E7%94%A8gtm%E8%A8%AD%E5%AE%9Agoogle-analytics-ecommerce-%E8%BF%BD%E8%B9%A4%E7%A2%BC-990bf38ea2d2)

