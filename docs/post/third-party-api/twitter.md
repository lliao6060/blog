# Twitter內嵌網頁相關
###### tags: `第三方串接`

### 網頁內嵌
1. 先至[Twitter Publish](https://publish.twitter.com/#)將複製的網址貼上 ( Twitter Publish 是 Twitter 專門用於發布分享推文的工具 )。
2. 在`onBeforeMount新增`
```javascript=
onBeforeMount(() => {
  if ((window as any).twttr)
    (window as any).twttr.widgets.load()
})
```

#### 備註
如果不強制手動新增`wttr.widgets.load()`方法的話，會卡`CORS`，然後間接導致`twitter iframe`**有機率**顯示不出來，加了之後雖然也會噴`CORS`錯誤，但每次都顯示得出來了

噴錯參考圖片：

1. ![](https://i.imgur.com/jR95fts.png)

2. 加了`wttr.widgets.load()`方法後，就能成功每次都顯示了
![](https://i.imgur.com/sitYfg2.png)


### 強制刷新og圖片
- `og:image`無效要使用`twitter:image`，且不接受相對路徑需**在線上的網址(http://...)**
- 要強制刷新圖的話就在[twitter](https://twitter.com/?lang=zh-Hant)上輸入網址`http://yourdomin?1=1`

### 參考文章
- [twitter widget only working in the first loading , then fails](https://stackoverflow.com/questions/28525189/twitter-widget-only-working-in-the-first-loading-then-fails)
- [Twitter Widget Not Always Loading](https://stackoverflow.com/questions/36852946/twitter-widget-not-always-loading)
- [How do I render new Twitter widget dynamically?](https://stackoverflow.com/questions/14545653/how-do-i-render-new-twitter-widget-dynamically)
