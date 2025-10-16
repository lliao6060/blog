# google sheet app script筆記(一個專案多個tab)
###### tags: `第三方串接`
> 一個專案內有多個表單要打多個tab的萬用方法
## 重點
1. 先創建一個`google sheet`
2. 在工具列點選`擴充功能`後點選`app script`
3. 部屬完成後的網址就是在專案中送出表單要post的api，會變動的只有中間的`部署作業 ID`
![](https://i.imgur.com/v1sCtmS.png)

4. 建議可將`部屬作業ID`存成環境變數後續較方便使用
```
https://script.google.com/macros/s/${部署作業 ID}/exec
```

## 檔案分類
![](https://i.imgur.com/4smEc9y.png)

## 共用變數
```javascript
const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
const order = '官網' // google sheet tab的名稱
```

## 共用函數
```javascript
// Allows scripts to store simple data in key-value pairs scoped to one script, one user of a script, or one document in which an add-on is used.
const scriptProp = PropertiesService.getScriptProperties()

function initialSetup () {
  // 允許存入資料到對應的spreadsheet,   getId()會獲得spreadsheet的id,而此id就是url中最長的唯一字串值
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}


function getSheet(sheetName) {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)
    // getRange(範圍)  (1, 1, 1, sheet.getLastColumn()) 等於從第一列第一欄開始，取一列與到最後一欄的範圍  (x,y, x + 列數, y + 欄數)
    // getValues會獲得選取範圍值得二維陣列[[範圍的第一列...], [第二列...], [第三列...]]
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] // [date, email, name, password]
    const nextRow = sheet.getLastRow() + 1

    return {
      sheet,
      headers,
      nextRow,
    }
}

function addDataToSheet(e, sheet, sheetHeaders, sheetNextRow) {
  // 透過doPost的eventObject獲得表單提除時對應欄位key值的value
  if(sheetHeaders) {
    const newRow = sheetHeaders.map(function(header) {
      return e?.parameter[header]
    })

    sheet.getRange(sheetNextRow, 1, 1, newRow.length).setValues([newRow])
  }
}

function sendEmail(){
  MailApp.sendEmail({
    to: "xxxx@gmail.com",
    subject: "spreadsheet updated",
    htmlBody: "有新的資料填入spreadsheet! <br>" +
              "請立刻前往查看",
  });
}


```

## 工作表
```javascript
// https://developers.google.com/apps-script/guides/web?hl=en
// 要讓script能響應post request，function名必須是doPost
// Simple Triggers: doPost(e), runs when a program sends an HTTP POST request to a web app.
function doPost (e) {
  //LockService: This service allows scripts to prevent concurrent access to sections of code. This can be useful when you have multiple users or processes modifying a shared resource and want to prevent collisions.
  // 防止多個user同時執行相同程式碼引發衝突
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)
  const data = e?.parameter;

  try {
    // 有幾個分頁要打就寫幾個 或是可以封裝成方法
    if(data.method === 'order') {
      const { sheet, headers, nextRow } = getSheet(order)
      addDataToSheet(e, sheet, headers, nextRow)
      return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
        .setMimeType(ContentService.MimeType.JSON)
    }
  }

  catch (e) {
    console.log(e)
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    // Releases the lock, allowing other processes waiting on the lock to continue.
    lock.releaseLock()
  }
}
```

## 在html中送出表單打api範例
```javascript
const formData = new FormData();
formData.append("日期", new Date().toLocaleString());
formData.append("method", 'yourTabName'); 
// 工作表分業的名稱(自訂義) 只是用來分辨是要打哪張sheet tab
// 記得`app script`裡的method要跟你定義的一致

await axios.post(`https://script.google.com/macros/s/${部署作業 ID}/exec`, formData);
```

### 參考文章
- [Google Sheets API，在 Google Apps Script 上的好用部份](https://www.letswrite.tw/google-sheets-api/#%e6%96%b0%e5%a2%9e%e5%b7%a5%e4%bd%9c%e8%a1%a8)