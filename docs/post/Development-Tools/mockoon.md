# Mockoon Mock API 工具

> Mockoon 是一款具有 UI 隨裝即用的 Mock API 工具。本身就包含了 Proxy 及 Mock 的功能，在做前端測試時是很方便的工具。

## 下載安裝

[Mockoon 官方下載](https://mockoon.com/download/)

## Helpers 使用範例

使用 [helpers](https://mockoon.com/docs/latest/templating/mockoon-request-helpers/) 可以根據請求參數返回不同的數據：

```js
{{#switch (queryParam 'pageSize')}}
  {{#case '10'}}
    {{data 'list-size-10'}}
  {{/case}}
  {{#case '30'}}
    {{data 'list-size-30'}}
  {{/case}}
  {{#default}}[]{{/default}}
{{/switch}}
```

### 說明
```js
- `queryParam 'pageSize'` - 獲取 URL 查詢參數
- `{{#switch}}` - 條件判斷
- `{{data 'list-name'}}` - 引用預定義的資料集
- `{{#default}}` - 預設值
```

## Demo 時注意事項

### 1. 啟動 Server

記得啟動 `server` 時要加 `--host`，然後用內網分享

### 2. 設定 API Base URL

`api baseUrl` 要改成**內網 IP** + **API Port**

例如：
```
http://10.1.6.27:6688
```

### 3. Mockoon API URL 設定

在 Mockoon 中設定 API URL 格式：

```
內網 IP : Port / prefix
```

例如：
```
10.1.6.33 : 6688 / prefix
```

## 常用功能

### 根據查詢參數返回不同內容

```text
{{#if (queryParam 'type' '==', 'success')}}
  {
    "status": "success",
    "message": "操作成功"
  }
{{else}}
  {
    "status": "error",
    "message": "操作失敗"
  }
{{/if}}
```

### 動態生成數據

```text
{
  "id": "{{faker 'datatype.uuid'}}",
  "name": "{{faker 'name.findName'}}",
  "email": "{{faker 'internet.email'}}",
  "timestamp": "{{now 'yyyy-MM-dd HH:mm:ss'}}"
}
```

### 延遲響應（模擬慢速網路）

在 Mockoon UI 中設定：
- Response > Latency：設定延遲時間（毫秒）

### CORS 設定

Headers 中添加：
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

## 優點

1. ✅ **無需編寫代碼**：直接透過 UI 操作
2. ✅ **快速部署**：下載即可使用
3. ✅ **支援多種模板語法**：Handlebars、Faker.js
4. ✅ **支援 Proxy**：可以代理真實 API
5. ✅ **團隊協作**：可以匯出配置分享
6. ✅ **跨平台**：支援 Windows、macOS、Linux

## 使用場景

- **前端獨立開發**：後端 API 尚未完成時
- **測試不同情境**：成功、失敗、各種邊界情況
- **模擬慢速網路**：測試 Loading 狀態
- **離線開發**：不依賴網路環境
- **Demo 展示**：不需要真實後端環境

## 參考資源

- [Mockoon 官網](https://mockoon.com/docs/latest/response-configuration/response-body/)
- [前端開發者不能不會的 Mock API 技巧，就用 Mockoon 來達成吧！](https://israynotarray.com/other/20230307/1852899605/)
- [【Mockoon 工具箱】根據查詢參數回應不同的內容 (Query Params)](https://www.potatomedia.co/post/f8817263-f2e5-4df9-8935-8585e386e60d)
- [Mockoon Templating Helpers](https://mockoon.com/docs/latest/templating/mockoon-request-helpers/)

