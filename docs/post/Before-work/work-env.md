# 環境建立
###### tags: `上工前環境`

  1. 安裝IDE(編輯器) VS CODE
  2. 安裝GIT(windows需要)
  3. 設定IDE(擴充功能)
		- Chinese (Traditional) Language Pack for Visual Studio Code
		- Color Info 可以不用透過F12更改顏色
		- [HTML Boilerplate 可以設定你的html模板  一鍵產生](https://github.com/sidthesloth92/vsc_html5_boilerplate)
		- Auto Close Tag
		- Auto Rename Tag
		- change-case
		- Chinese (Traditional) Language Pack for Visual Studio Code
		- Color Info
		- colorize
		- Document This 滑鼠移上去即可看到註解
		- DotENV .env檔高亮
		- Edit csv excel檔查看
		- Error Lens 輸入錯誤語法及格式都會提示
		- ESLint
		- GitLens — Git supercharged 可以看到最後是誰commit
		- Headwind 它可以自动将你的 Tailwind CSS 类按照一定的顺序进行排序
		- Highlight Matching Tag 精準顯示你現在編輯哪一行
		- HTML CSS Support
		- htmltagwrap 可以多行選取外層加tag(Press Alt + W or Option + W for Mac.)
		- Import Cost 可以看到引入模組的大小
		- indent-rainbow indent會有顏色 方便看
		- JavaScript and TypeScript Nightly
		- Monokai Pro 好看的主題
		- open in browser
		- Path Intellisense 路徑自動補全
		- PostCSS Language Support
		- Power Mode
		- Prettier - Code formatter
		- Prettier ESLint
		- Screenify 截圖 (command shift + S (mac))
		- Svg Preview
		- Tailwind CSS IntelliSense
		- TODO Highlight
		- Todo Tree
		- Trailing Spaces 自動偵測多餘的空格
		- TSLint Vue
		- Vue - Official
		- vue3-temp
		- Markdown Preview Mermaid Support 可以預覽mermaid的結果
		- [koroFileHeader 生成文件頭部註釋和函數註釋(可選)](https://segmentfault.com/a/1190000014915900)

  4. 設定Chrome擴充功能
		- AdBlock 擋廣告
		- JSON Viewer 看api資料時比較清楚
		- line
		- google翻譯
		- wappalyzer(可以看到他人網站使用技術)
		- Responsive Viewer 一次查看各尺寸RWD
		- Image Downloader 一鍵下載目標網站的所有圖片(復刻網站很實用
		- Cross Domain

### chatGPT for free
- [chatgptdemo](https://chat.chatgptdemo.net/?__cf_chl_rt_tk=7qvT1UHWgLeArXq_rqZak1YCL8e16Ns4g0pd.ryZj6Q-1689822367-0-gaNycGzNCmU)


### 參考
- [麻糬做的vue3 modal](https://github.com/johnnywang1994/vue-next-modal/blob/master/src/Modal.vue)


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