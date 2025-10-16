# 把google sheet當小型資料庫使用
###### tags: `第三方串接`

## 實作步驟
1. 先到[Google Sheets](https://docs.google.com/spreadsheets/u/0/)創建一個新的表
2. 創建head 像這樣
![](https://i.imgur.com/d3L2KNz.png)
3. 點擊`擴充功能`→`Apps Script`，幫你的APP隨意取個名
4. 把`function myFunction`整段取代成
![](https://i.imgur.com/OsHE9Kp.png)
> 注意`sheetName`**一定要跟你的工作表同名，不然會拿不到資料!!**
```javascript
// Original code from https://github.com/jamiewilson/form-to-google-sheets
// Updated for 2021 and ES6 standards

const sheetName = '工作表1' //your sheet name
const scriptProp = PropertiesService.getScriptProperties()

function initialSetup () {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    const nextRow = sheet.getLastRow() + 1

    const newRow = headers.map(function(header) {
      return header === 'Date' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```
5. 點選`執行`，會先看到你沒有權限的警告彈窗，點擊`進階`同意權限之後再執行就會看到這個結果
![](https://i.imgur.com/Oi2Mtl3.png)
6. 成功執行後，就可以點一個鬧鐘圖案的`觸發條件`去設定
![](https://i.imgur.com/2yMF0AD.png)
![](https://i.imgur.com/kbKK1hx.png)
7. 設定完成後點選`部屬按鈕`，選擇`網頁應用程式`後再點選`部屬`，記得把你的`WEBAPP URL`記起來，等等會用到
8. 現在你可以創一個簡單的form像這樣
```html
<form
  method="POST"
  action="YOUR_WEBAPP_URL"
>
  <input name="Email" type="email" placeholder="Email" required>
  <input name="Name" type="text" placeholder="Name" required>
  <button type="submit">Send</button>
</form>
```
9. 輸入完成按`send`後會看到成功畫面，然後你的`google sheet`上現在可以看到結果了！
![](https://i.imgur.com/Nfdzn7j.png)
![](https://i.imgur.com/lr85tG4.png)
![](https://i.imgur.com/tcv5PVP.png)


## 參考文章
- [html-form-to-google-sheet](https://github.com/levinunnink/html-form-to-google-sheet)
- [Vue 前端語法讀取 Google Sheets 試算表作為小型資料庫](https://weijutu.github.io/2019/03/06/vuejs/vuejs-googlesheets-api/)
- [Save Web/HTML Form Data to Google Sheets](https://lovespreadsheets.medium.com/save-web-html-form-data-to-google-sheets-47e48f7517e6)
- [google-spreadsheet npm](https://www.npmjs.com/package/google-spreadsheet)