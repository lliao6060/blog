<!--
 * @Author: lindy.liao@jingmi.com.tw 
 * @Date: 2025-10-15 15:45:44
 * @LastEditTime: 2025-10-15 16:09:17
 * @LastEditors: lindy.liao@jingmi.com.tw 
 * @Description: 檔案描述
 * @FilePath: /blog/docs/post/Others/tool.md
-->
# 工具包
##### tags: `常用工具` `常用網站`

### 常用網站(2025/8/4 update)
### 加快網頁載入速度 （SEO優化）
- [前端工程師都該懂的6個網頁載入加速技巧 (加速 30% 真實案例分享)](https://shubo.io/optimize-loading-speed/)
- [轉檔縮小網站中的照片或圖片](https://sharing-life-in-tw.blogspot.com/2019/08/Blogger-Serve-Images-in-Next-Gen-Formats.html)

### 測試用
- [測試用API(多種 google/youtube...) 要註冊](https://any-api.com/)
- [測試用API](https://jsonplaceholder.typicode.com/)
- [測試AJAX連線用/錯誤處理](https://httpbin.org/#/Status_codes/get_status__codes_)

### 套件查詢類

- [快速搜尋套件](https://cdnjs.com/)
- [瀏覽器相容性查詢](https://caniuse.com/)

### code相關

- [程式碼壓縮](http://minifycode.com/html-minifier/)
  > 建議要用前開立新檔案 避免覆蓋原程式碼
- [CSS瀏覽器相容性前綴補齊](https://autoprefixer.github.io/)
- [Animate.css](https://animate.style/)
- [javascript-to-json](https://www.convertsimple.com/convert-javascript-to-json/)
- [json-to-typescript](https://transform.tools/json-to-typescript)

### 產生器類
- [各種短文產生器](https://free.com.tw/lorem-ipsum-generator/)
    - [廢文產生器(英文版)](https://www.lipsum.com/)
    - [廢文產生器(中文版)](http://more.handlino.com/)
- [假圖產生器](https://dummyimage.com/)
- [陰影產生器](http://elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html)
- [path產生器(不常用)](https://bennettfeely.com/clippy/)
- [tooltip產生器](https://viashchuk.github.io/tooltip-generator/#)
- [漸層產生器](https://cssgradient.io/gradient-backgrounds/)
- [漸層背景產生器](https://coolbackgrounds.io/)
- [自動配色](https://happytools.vip/tools/color/palette-generator)
- [顏色選擇器](https://happytools.vip/tools/color/color-picker)

### 符號類

- [免費API圖下載](https://icons8.com/preloaders/en/filtered-search/all/all/)
- [免費PNG圖下載](https://www.flaticon.com/)
- [免費SVG圖](https://www.svgrepo.com/)
- [特殊符號網站](https://lovefree365.pixnet.net/blog/post/399059086-2017%E3%8A%95%E3%8A%99%E7%89%B9%E6%AE%8A%E7%AC%A6%E8%99%9F%E6%87%B6%E4%BA%BA%E5%8C%85%E3%80%81%E5%AE%8C%E6%95%B4%E7%AC%A6%E8%99%9F%E8%A1%A8%E2%86%92%E2%9C%BF%E2%9D%A4)
- [fontawesome](https://fontawesome.com/?utm_source=font_awesome_homepage&utm_medium=display&utm_campaign=fa5_released&utm_content=download_modal)


### 其他
- [線上快速壓縮圖檔](https://tinyjpg.com/)
- [Google Icon](https://material.io/resources/icons/?style=baseline) 
  > 前提要先載入
  > <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
- [Google 字型](https://fonts.google.com/)
- [線上畫px圖(附code)](http://elrumordelaluz.github.io/Pixelator/)
- [線上轉換html title圖片](http://faviconit.com/zh)
- [大陸人做的各種小工具類](https://www.code-nav.cn/recommend/)
- [快速產snippet](https://snippet-generator.app/)

### 一定要會
- [windows安裝git](https://ithelp.ithome.com.tw/articles/10205930)

### 麻糬做的編輯器
常用記得引入
```javascript=
<!-- reset.css -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css">

<!-- font-awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">

<!-- axios -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js" integrity="sha256-S1J4GVHHDMiirir9qsXWc8ZWw74PHHafpsHp5PXtjTs=" crossorigin="anonymous"></script>
```

- [maju pen 存擋要換成user](https://pen.maju-web.club/local)
```
share => https://pen.maju-web.club/share/id?use=vue3
```
- [maju book類似codesaxbox](https://www.maju-web.club/plus?cacheId=default)
```
- vue 要用(https://pen.maju-web.club/plus?cacheId=vue&template=vue)
- react (https://pen.maju-web.club/plus?cacheId=react&template=react)
- 引入檔案
	import { useModal } from 'src/useModal.jsx'
```