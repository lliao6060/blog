# LINE LIFF第三方串接
###### tags: `第三方串接`
1. 到[Line Developer API](https://developers.line.biz/zh-hant/)登入建立應用程式
2. 選擇Create a LINE Login channel
3. 填入Channel name和Channel Description，有提醒你哪些欄位不能為空
4. 設定`LINE LOGIN`的`Callback URL` 以及`LIFF`的`Endpoint URL`(注意網址一定要是`https`)
![](https://i.imgur.com/stxthMW.png)
![](https://i.imgur.com/A760vsC.png)
5. 複製`LIFF ID`
6. 開始做

```vue
<script setup name='LineLiffLoginBtn'>
import liff from "@line/liff"

const LIFF_ID = import.meta.env.VITE_APP_LIFF_ID

onMounted(async () => {
  try {
    await liff.init({
      liffId: LIFF_ID,
    })
    if (!liff.isLoggedIn()) {
      console.log('LINE: user is not login !')
    }
  } catch (err) {
    console.log(`liff.state init error ${err}`);
  }
});

async function login() {
  if (!liff.isLoggedIn()) {
    liff.login({
      redirectUri: `${window.location.href}`,
    })
  }
}

async function logout() {
  if (liff.isLoggedIn()) {
    liff.logout()
    window.location.reload()
  }
}
</script>

<template>
  <div @click="login">LINE LOGIN</div>
</template>
```

### 成功串接回應
成功串接就會導到LINE燈入頁，成功登入後再導向回來，並回傳你要求的那些資料
![](https://i.imgur.com/Uhu2sir.png)
![](https://i.imgur.com/43kyenE.png)

## 備註
如果把LINE登入按鈕包在彈窗裡記得父層**要再init line liff一次**，否則頁面重新導向回來後**會拿不到狀態**。


### 參考文章
- [LINE 官方文檔](https://developers.line.biz/en/docs/line-login/integrate-line-login/)
- [LINE LIFF官方文檔](https://developers.line.biz/en/reference/liff/)

### 示範按鈕(純靜態)
<LineLogin-LineLogin />