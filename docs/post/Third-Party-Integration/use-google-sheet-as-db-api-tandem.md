# 把google sheet當小型資料庫使用之 串接資料篇
###### tags: `第三方串接`

## 申請一組憑證
1. 請參考[這篇](https://hackmd.io/@Yan06/HJpfmdgJj)先建立一個專案
2. 啟用google sheet api
![](https://i.imgur.com/UcmLNhr.png)
![](https://i.imgur.com/wKapdXb.png)
3. 新增憑證，切換到`鑰匙圖案`的憑證頁面點選『服務項目』
4. 沒特殊需求就一直按繼續，建立完成後會看到服務項目多了一個新項目，點他
![](https://i.imgur.com/qritG40.png)
![](https://i.imgur.com/3Xbg9OL.png)
![](https://i.imgur.com/WqyWXYE.png)
5. 新增金鑰，選擇JSON，它會自動幫你下載一包`金鑰JSON檔`

## 開啟Google Sheet權限
輸入你剛剛申請的帳戶地址
![](https://i.imgur.com/kDahGZa.png)

## 串起來
準備好`金鑰JSON檔`及以下資料後請參考[這個專案](https://github.com/lliao6060/vue-google-sheet-api-demo)
```javascript
VUE_APP_GOOGLE_SHEET_URL = '' //google sheet分享的網址
VUE_APP_GOOGLE_SHEET_ID = '' //google sheet網址上的ID
//請參考 https://docs.google.com/spreadsheets/d/SHEET_ID/edit#gid=0
VUE_APP_GOOGLE_WEB_APP_ID = '' //google sheet的apps script部屬後得到的id
```

## LIVE DEMO
[點我](https://vue2-google-sheet-api-demo.herokuapp.com/)


## 參考文章
- [【我可以你也可以的Node.js】第二三篇 - 蛤！原來串接 Google Sheet API 那麼簡單?](https://ithelp.ithome.com.tw/articles/10234325)
- [VueSheet](https://github.com/aminefreelancer/VueSheet)

## 同場加映
[把google sheet當小型資料庫使用](./use-google-sheet-as-db.md)