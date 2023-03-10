# FB第三方串接
###### tags: `第三方串接`
1. 先到[Meta for Developers](https://developers.facebook.com/?no_redirect=1)創建專案
2. 設定`設定>有效的 OAuth 重新導向 URI` 及`快速入門 > 網站 > 網站網址`
3. 按照官網步驟加入api即可


```vue
<script setup name='FbLoginBtn'>

  function initFB() {
    if (!window.FB) {
      window.fbAsyncInit = function() {
        FB.init({
          appId: import.meta.env.VITE_APP_FB_ID, // 填入自己 app 的 id
          cookie: true,
          xfbml: true,
          version: "v4.0" // 目前版本
        });
      };

      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  }

  initFB()

  function FBLogin() {
    FB.getLoginStatus(function(res) {
      // 登入狀態 - 已登入
      if (res.status === "connected") {
        // 獲取用戶個人資料
        getProfile();
      } else {
        // 登入狀態 - 未登入
        // 用戶登入(確認授權)
        FB.login(function(res) {
            // 獲取用戶個人資料
            console.log('fb is login!')
            getProfile();
          },
          // 授權 - 個人資料&Email
          { scope: "public_profile,email" }
        );
      }
    });
  }

  function FBLogout() {
    // 檢查登入狀態
    FB.getLoginStatus(function(res) {
      // 檢查登入狀態
      if (res.status === "connected") {
        // 移除授權
        FB.api("/me/permissions", "DELETE", function(res) {
          // 用戶登出
          FB.logout();
          console.log('fb is logout!')
        });
      } else {
        // do something
      }
    });
  }

  function getProfile() {
    FB.api("/me?fields=name,id,email", function(res) {
      console.log(res)
      // do something
    });
  }

</script>

<template>
<div class="d-flex">
  <div
    @click="FBLogin"
    class="fb-login-btn rwd-sub-title mr-4"
  >
    <p>FB Log In</p>
  </div>

  <div
    @click="FBLogout"
    class="fb-login-btn rwd-sub-title"
  >
    <p>FB Log Out</p>
  </div>
</div>
</template>

<style lang='scss' scoped>
.fb-login-btn {
  width: 20%;
  padding: 15px 20px;
  background: #395a9b;
  color: $white;
  cursor: pointer;
  @include flex;
}
</style>
```

![](https://i.imgur.com/0Owe8qr.png)




### 參考文章
- [FB官方文檔 建立應用程式](https://developers.facebook.com/docs/development/create-an-app)
- [vue3 使用facebook login api](https://penueling.com/%E7%B7%9A%E4%B8%8A%E5%AD%B8%E7%BF%92/vue3-%E4%BD%BF%E7%94%A8-facebook-login-api/)
- [第三方登入 - Facebook JavaScript SDK + Vue.js](https://ithelp.ithome.com.tw/articles/10230023)

