# Vite 本地 HTTPS 開發環境設置

## 快速配置

在 `vite.config` 裡設定：

```js
server: {
  port: 443,
  host: true,
  allowedHosts: ['YOUR_TARGET_URL'],
  fs: {
    allow: ['..']
  },
  // proxy api setting
  proxy: {
    '/api': {
      target: 'YOUR_API_URL',
      changeOrigin: true,
      secure: true
    }
  }
}
```

這樣就可以完全模擬 target 網址，不會帶著後綴 8080 之類的 localhost

## Chrome 憑證問題處理

### 如果被 Chrome ban 的話可以嘗試
- ![image](https://hackmd.io/_uploads/ryu8C5nnle.png)
- 如果上面的不行 可以試試這個：Chrome 按右鍵->結束，關閉所有視窗

Terminal 輸入：
```bash
open -a "Google Chrome" --args --test-type --ignore-certificate-errors
```

### 大神建議參考
1. [Traefik Memo](https://johnnywang1994.github.io/book/articles/memo/traefik.html)
2. [在 Simulator 上開發測試](https://johnnywang1994.github.io/book/articles/memo/test-on-simulator.html)

## 架構概述

建立一個本地 HTTPS 開發環境，讓你能在本地使用 `https://mydomain.com` 進行開發和測試。

### 核心組件

#### 1. 本地 SSL 證書
- 生成 local certificate（自簽證書）
- 用於啟用本地 HTTPS 連線

#### 2. Docker + Traefik
- 使用 `docker-compose` 配置 Traefik 作為反向代理
- Traefik 搭配生成的 certificate 處理 HTTPS 請求

#### 3. Local DNS 設定
- 配置本地 DNS，將 `mydomain.com` 指向 `localhost`
- 讓瀏覽器訪問 `https://mydomain.com` 時解析到本地

#### 4. Vite 反向代理
- Vite 配置反向代理功能
- 將請求分發到：
  - 本地 HTTP 端口（開發中的服務）
  - 線上的 API domain（遠端 API）

### 工作流程

```
https://mydomain.com
        ↓
   Local DNS 解析
        ↓
  https://localhost
        ↓
     Traefik（處理 SSL）
        ↓
    Vite 反向代理
        ↓
   ┌─────────┴─────────┐
   ↓                   ↓
本地 HTTP port    線上 API domain
```

## 模擬器測試

### Mac 模擬器設置

Android 也行，iOS 很簡單，只要做一次，之後你本地的任何網頁，只要是透過 mkcert 產過 cert 並且有用他起 server，就都可以在模擬機裡用 HTTPS 訪問

1. 將生成的 local certificate 導入到 Mac 模擬器
2. 在模擬器中註冊該證書為受信任根證書
3. 模擬器與本地 Mac 共用同一個本地網域
4. 無需使用真實手機，直接在模擬器中測試 HTTPS 環境

### 優點

- ✅ 完整模擬生產環境的 HTTPS
- ✅ 支援跨域請求測試
- ✅ 可在模擬器中測試，無需真機
- ✅ 靈活路由請求到本地或遠端服務
- ✅ 開發體驗接近真實部署環境

## 手機測試 - 使用 Cloudflared

```bash
# 1. 安裝 cloudflared（Mac）
brew install cloudflare/cloudflare/cloudflared

# 2. 確認本地服務運行在 443 端口
lsof -i :443  # 檢查是否有服務在 443

# 3. 建立隧道
cloudflared tunnel --url https://localhost:443

# 4. 複製輸出的網址到手機測試
# INF |  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
# INF |  https://louisville-physician-societies-garbage.trycloudflare.com << 通常長類似這樣
```

## Vite 配置原理說明

### 配置分析

```javascript
server: {
  port: 443,                              // ① 使用標準 HTTPS 端口
  host: true,                             // ② 監聽所有網絡接口
  allowedHosts: ['YOUR_TARGET_URL'],      // ③ 允許的域名白名單
  fs: {
    allow: ['..']                         // ④ 文件系統訪問權限
  },
  proxy: {
    '/api': {
      target: 'YOUR_API_URL',             // ⑤ API 代理目標
      changeOrigin: true,                 // ⑥ 修改請求來源
      secure: true                        // ⑦ 驗證 SSL 證書
    }
  }
}
```

### 為什麼可以完全模擬目標網址

#### 1. 端口 443 = 標準 HTTPS 端口

```
❌ 傳統開發：https://mydomain.com:8080
✅ 此配置：  https://mydomain.com
```

**原理：**
- HTTPS 的標準端口是 **443**
- 瀏覽器訪問 HTTPS 網址時，默認使用 443 端口
- 設定 `port: 443` 後，網址不需要帶端口號
- 就像訪問 `https://google.com` 不需要寫成 `https://google.com:443`

#### 2. host: true 的作用

```javascript
host: true  // 等同於 host: '0.0.0.0'
```

**功能：**
- 讓 Vite 監聽所有網絡接口，不只是 localhost
- 允許通過自定義域名（如 mydomain.com）訪問
- 支持局域網內其他設備訪問

#### 3. allowedHosts 白名單機制

```javascript
allowedHosts: ['YOUR_TARGET_URL']
// 例如：['mydomain.com', 'app.mydomain.com']
```

**安全性：**
- 防止 DNS 重綁定攻擊（DNS Rebinding Attack）
- 只允許指定的域名訪問開發服務器
- 拒絕其他域名的請求

**搭配 Local DNS：**
```
/etc/hosts 或 DNS 配置：
127.0.0.1  mydomain.com
```

#### 4. proxy 反向代理

```javascript
proxy: {
  '/api': {
    target: 'YOUR_API_URL',
    changeOrigin: true,
    secure: true
  }
}
```

**請求流程：**

```
瀏覽器請求：https://mydomain.com/api/users
                    ↓
            Vite Dev Server (443)
                    ↓
            識別 /api 前綴
                    ↓
        代理到 YOUR_API_URL/api/users
```

**關鍵參數說明：**

| 參數 | 作用 |
|------|------|
| `changeOrigin: true` | 修改請求頭的 `Origin` 和 `Host`，讓目標服務器以為請求來自它自己 |
| `secure: true` | 驗證目標服務器的 SSL 證書（用於 HTTPS） |

## 完整工作原理

### 場景：訪問 `https://mydomain.com/api/data`

```
步驟 1：DNS 解析
https://mydomain.com
        ↓
Local DNS (hosts 文件)
        ↓
127.0.0.1 (localhost)

步驟 2：端口連接
瀏覽器默認使用 443 端口（HTTPS）
        ↓
連接到 localhost:443
        ↓
Vite Dev Server 正在監聽 443

步驟 3：域名驗證
請求頭：Host: mydomain.com
        ↓
檢查 allowedHosts 白名單
        ↓
✅ 允許通過

步驟 4：路由處理
URL: /api/data
        ↓
匹配到 proxy 規則 '/api'
        ↓
代理到 YOUR_API_URL/api/data
        ↓
返回數據給瀏覽器
```

## 與傳統開發的對比

### 傳統開發方式
```
訪問：http://localhost:8080
問題：
  ❌ 需要帶端口號
  ❌ 使用 localhost 而非真實域名
  ❌ HTTP 而非 HTTPS
  ❌ CORS 跨域問題
  ❌ Cookie 域名不匹配
```

### 此配置方式
```
訪問：https://mydomain.com
優勢：
  ✅ 不需要端口號（使用標準 443）
  ✅ 使用真實域名
  ✅ HTTPS 加密連接
  ✅ 通過反向代理解決 CORS
  ✅ Cookie 域名完全匹配生產環境
  ✅ 模擬器可共用配置
```

## 搭配 Traefik 的完整架構

```
https://mydomain.com
        ↓
   Local DNS 解析
        ↓
  127.0.0.1:443
        ↓
Traefik (處理 SSL 證書)
        ↓
  Vite Dev Server
        ↓
    內部路由
   ┌─────┴─────┐
   ↓           ↓
本地靜態資源   /api → 遠端 API
```

## 關鍵要點

1. **443 端口** = 不需要端口號後綴
2. **host: true** = 支持自定義域名訪問
3. **allowedHosts** = 安全白名單機制
4. **proxy** = 透明代理 API 請求
5. **changeOrigin** = 欺騙目標服務器以避免 CORS

這個配置讓本地開發環境**完全等同於生產環境**，包括域名、端口、協議都一致！

