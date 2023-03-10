# google第三方串接
###### tags: `第三方串接`
1. 先到[Cloud Console](https://console.developers.google.com/)創建專案
2. 設定重新導向url(設定完要等3-5分鐘左右, 舊版的要連localhost一起輸新版不用)
![](https://i.imgur.com/nXivlpF.png)
3. 取得用戶端ID![](https://i.imgur.com/ZrfQ8xm.png)
4. 依照google新版文檔步驟即可完成串接

```vue
<script setup name='GoogleLoginBtn'>

const userIdToken = ref('')

function handleCredentialResponse(response) {
  userIdToken.value = response.credential
  console.log("Encoded JWT ID token: " + response.credential);
}

function handleLogout() {
  google.accounts.id.disableAutoSelect();
  userIdToken.value = ''
  console.log('登出成功')
}

onMounted(() => {
  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    {
      theme: "outline",
      size: "large",
    }  // customization attributes
  );
  // google.accounts.id.prompt(); // also display the One Tap dialog
})

</script>

<template>
  <div>
    <div id="buttonDiv">登入</div>
    <!-- <div @click="handleLogout">登出</div> -->
  </div>
</template>

<style lang='scss' scoped>
</style>
```



### 參考文章
- [串接 Google OAuth 2.0 實現第三方登入](https://growingdna.com/google-oauth-2-0-for-3rd-party-login/)
- [google oneTab文檔](https://developers.google.com/identity/gsi/web/reference/js-reference)
- [google建立自定義的Google登錄按鈕文檔](https://developers.google.com/identity/sign-in/web/build-button)

