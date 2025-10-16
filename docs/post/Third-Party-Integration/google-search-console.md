# Google Search Console 筆記

###### tags: `google`, `google search console`

> 為了讓 SPA 的其他分頁也可以被 Google 收錄的作法

## 設定步驟

### 1. 建立 sitemap.xml

在 `public` 資料夾裡新建 `sitemap.xml`

### 2. 貼上 Sitemap 內容

記得把 `<loc>` 標籤內的網址換成你的網址

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
      <loc>
          https://sslobster.com/
      </loc>
      <lastmod>
          2023-02-16T02:04:39.392Z
      </lastmod>
      <changefreq>
          daily
      </changefreq>
      <priority>
          1.0
      </priority>
  </url>
  <url>
      <loc>
          https://sslobster.com/order/
      </loc>
      <lastmod>
          2023-02-16T02:04:39.392Z
      </lastmod>
      <changefreq>
          daily
      </changefreq>
      <priority>
          1.0
      </priority>
  </url>
</urlset>
```

### 3. 提交到 Google Search Console

1. 前往 [Google Search Console](https://search.google.com/search-console)
2. 新建 Sitemap
3. 輸入你的 sitemap 網址（例如：`https://yourdomain.com/sitemap.xml`）
4. 刷新網頁即可

## Sitemap 標籤說明

| 標籤 | 說明 |
|------|------|
| `<loc>` | 頁面的完整 URL |
| `<lastmod>` | 頁面最後修改時間 |
| `<changefreq>` | 頁面更新頻率（always, hourly, daily, weekly, monthly, yearly, never） |
| `<priority>` | 頁面優先級（0.0 - 1.0，1.0 為最高） |

## 注意事項

- SPA（Single Page Application）需要特別設定 sitemap，否則 Google 只會收錄首頁
- 建議每次網站結構變更時都更新 sitemap
- `lastmod` 時間會影響 Google 爬蟲的抓取頻率
- `priority` 用來告訴搜尋引擎哪些頁面較重要

