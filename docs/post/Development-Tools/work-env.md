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

5. [建立ssh key](https://sinyilin.github.io/git/20191024/1014042378/)
6. [安裝nvm](https://www.casper.tw/development/2022/01/10/install-nvm/)
7. 安裝`oh-my-zsh` 指令大全[參考](https://kapeli.com/cheat_sheets/Oh-My-Zsh_Git.docset/Contents/Resources/Documents/index)
8. 安裝 [Docker](https://www.docker.com/)


### 方便打開編輯器
[在 MAC Finder 使用 VSCode 開啟檔案夾
](https://medium.com/@javaok1987/open-with-vscode-5be5e3ab4ac2)

### 模擬慢網速工具
[調整模擬器網速的 Network Link Conditioner](https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E5%95%8F%E9%A1%8C%E8%A7%A3%E7%AD%94%E9%9B%86/%E8%AA%BF%E6%95%B4%E6%A8%A1%E6%93%AC%E5%99%A8%E7%B6%B2%E9%80%9F%E7%9A%84-network-link-conditioner-e249e2875be6)

### chatGPT for free
- [chatgptdemo](https://chat.chatgptdemo.net/?__cf_chl_rt_tk=7qvT1UHWgLeArXq_rqZak1YCL8e16Ns4g0pd.ryZj6Q-1689822367-0-gaNycGzNCmU)

### cursor 相關
- [提示詞參考](https://www.explainthis.io/zh-hant/ai/cursor-guide/2-1-prompt-basics)
- cursor 目前提示詞
```json
Always respond in Chinese-traditional.
`DO NOT GIVE ME HIGH LEVEL SHIT, IF I ASK FOR FIX OR EXPLANATION, I WANT ACTUAL CODE OR EXPLANATION!!! I DON'T WANT "Here's how you can blablabla"

- Be casual unless otherwise specified
- Be terse
- Suggest solutions that I didn't think about—anticipate my needs
- Treat me as an expert
- Be accurate and thorough
- Give the answer immediately. Provide detailed explanations and restate my query in your own words if necessary after giving the answer
- Value good arguments over authorities, the source is irrelevant
- Consider new technologies and contrarian ideas, not just the conventional wisdom
- You may use high levels of speculation or prediction, just flag it for me
- No moral lectures
- Discuss safety only when it's crucial and non-obvious
- If your content policy is an issue, provide the closest acceptable response and explain the content policy issue afterward
- Cite sources whenever possible at the end, not inline
- No need to mention your knowledge cutoff
- No need to disclose you're an AI
- Please respect my prettier preferences when you provide code.
- Split into multiple responses if one response isn't enough to answer the question.

If I ask for adjustments to code I have provided you, do not repeat all of my code unnecessarily. Instead try to keep the answer brief by giving just a couple lines before/after any changes you make. Multiple code blocks are ok.`

元件皆使用 **函數式寫法**，並附 **JSDoc + 簡明中文** 註釋

如果我要求進行 code review (其他人的 commit)
也可以使用 git 指令比對目前的 branch 和 dev branch，不要直接修改，列出修改建議和錯誤的地方就好

如果我要求 review  我的改動或者我要求幫我寫 commit，除了查看我完整的檔案以外要使用 git diff 來查看修改的內容
如果我沒有指定檔案可以使用 git status 找到我改動的檔案，並 review 全部改動，不要直接修改，列出修改建議和錯誤的地方就好
```


### 參考
- [麻糬部落格](https://johnnywang1994.github.io/book/articles/git/rebase.html#%E5%9F%BA%E7%A4%8E%E6%8C%87%E4%BB%A4)
- [麻糬做的vue3 modal](https://github.com/johnnywang1994/vue-next-modal/blob/master/src/Modal.vue)
- [git commit 規範](https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html)
- [git指令](https://juejin.cn/post/7403244457262891020)
- [vitest測試](https://juejin.cn/post/7323264134220529700?searchId=20250702083153981EB6A5AD143E9F4558)
- [時程評估](https://juejin.cn/post/7472573150003167243)
- [20個 TypeScript 技巧](https://juejin.cn/post/7433410016746848297)


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