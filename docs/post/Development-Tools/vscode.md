# vsCode設定
###### tags: `vsCode` `vsCode setting`

[主題配置](https://dev.to/gheorghitahurmuz/comment/150j3)

記得下載`power mode`
```json
{
  // 可選
  "powermode.enabled": true,
  "powermode.enableExplosions": true,
  "powermode.maxExplosions": 1,
  "powermode.shake.enabled": false,
  "powermode.explosions.size": 30,
  "powermode.explosions.frequency": 20,
  "powermode.explosions.offset": 0.3,
  "powermode.explosions.customExplosions": [
    "https://raw.githubusercontent.com/jwlearn1994/image-uploader/main/others/power-mode/maju-rolling.gif"
  ],
  "powermode.explosions.backgroundMode": "image",
  "powermode.explosions.gifMode": "restart",
  "powermode.explosions.explosionOrder": "random",
  "powermode.explosions.duration": 3500,
  // 其他
  "files.autoSave": "afterDelay",
  "editor.fontSize": 16,
  "editor.fontVariations": false,
  "debug.console.fontSize": 16,
  "markdown.preview.fontSize": 16,
  "terminal.integrated.fontSize": 16,
  "workbench.colorTheme": "Monokai Pro (Filter Spectrum)",
  "workbench.iconTheme": "Monokai Pro (Filter Spectrum) Icons",
  "editor.tabSize": 2,
  "cSpell.userWords": [
    "addqualitylevel",
    "axios",
    "bobateach",
    "Booleanish",
    "cenc",
    "commitlint",
    "controlslist",
    "Dont",
    "Drms",
    "fairplay",
    "fontface",
    "ianvs",
    "intlify",
    "jingmi",
    "Mmssms",
    "mpegurl",
    "nodownload",
    "perpage",
    "playready",
    "playsinline",
    "readyforpreroll",
    "Sourse",
    "unplugin",
    "videojs",
    "VITE",
    "Vorbis",
    "vuedraggable",
    "vuepic",
    "vuetify",
    "webfontloader",
    "Widevine"
  ],
  // See: https://muki.tw/vscode-extensions-better-comments-todo-tree/
  // See: https://muki.tw/vscode-extensions-better-comments-todo-tree/
  "todo-tree.general.tags": ["-", "!", "?", ">", "TODO", "FIXME", "NOTE", "BUG"],
  "todo-tree.highlights.customHighlight": {
    "-": {
      "background": "#222",
      "foreground": "#6D8CB4",
      "iconColour": "#6D8CB4",
      "icon": "check",
      "type": "text-and-comment",
      "hideFromTree": true
    },
    "!": {
      "background": "#222",
      "foreground": "#d9444a",
      "iconColour": "#d9444a",
      "icon": "check",
      "type": "text-and-comment",
      "hideFromTree": true
    },
    "?": {
      "background": "#222",
      "foreground": "#f5c018",
      "iconColour": "#f5c018",
      "icon": "check",
      "type": "text-and-comment",
      "hideFromTree": true
    },
    ">": {
      "background": "#222",
      "foreground": "#fff",
      "iconColour": "#fff",
      "icon": "check",
      "type": "text-and-comment",
      "hideFromTree": true
    },
    "TODO": {
      "background": "#f3eb16",
      "foreground": "#000",
      "iconColour": "#f5c018",
      "icon": "check",
      "type": "text-and-comment"
    },
    "FIXME": {
      "background": "#d9444a",
      "foreground": "#000",
      "iconColour": "#d9444a",
      "type": "text-and-comment"
    },
    "NOTE": {
      "background": "#ea83d9",
      "foreground": "#000",
      "iconColour": "#ff6af5",
      "type": "text-and-comment"
    }
  },
  // See: https://marketplace.visualstudio.com/items?itemName=OBKoro1.korofileheader
  "fileheader.customMade": {
    "Author": "lindy.liao@jingmi.com.tw ",
    "Date": "Do not edit",
    "LastEditTime": "Do not edit",
    "LastEditors": "lindy.liao@jingmi.com.tw ",
    "Description": "檔案描述",
    "FilePath": "Do not edit"
  },
  "fileheader.cursorMode": {
    "description": "函式描述",
    "param": "參數",
    "return": "返回值"
  },
  "fileheader.configObj": {
    "autoAdd": true,
    "language": {
      // 支持繁體中文註釋
      "language": "zh-tw",
      // 自定義語言
      "custom": {
        "zh-tw": {
          "head": "文件頭部註釋",
          "beforeAnnotation": "函式註釋前",
          "afterAnnotation": "函式註釋後",
          "funOver": "函式結尾",
          "functionParamsAnnotation": "參數註釋",
          "author": "作者",
          "lastEditors": "最後編輯者",
          "createTime": "創建時間",
          "lastEditTime": "最後編輯時間",
          "description": "檔案描述",
          "filePath": "檔案路徑",
          "param": "參數",
          "return": "返回值"
        }
      }
    }
  },
  // See: https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally
  "i18n-ally.displayLanguage": "zh-TW",
  "i18n-ally.localesPaths": [
    "src/locales"
  ],
  "editor.quickSuggestions": {
    "strings": true
  },
  "gitlens.views.branches.branches.layout": "list",
  "gitlens.views.branches.files.layout": "list"
}
```

### google擴充(麻糬做的)
- [chrome-extension-utils](https://github.com/johnnywang1994/chrome-extension-utils)
    - 先在本地把專案下載下來
    - 去[google擴充](chrome://extensions/)載入未封裝項目