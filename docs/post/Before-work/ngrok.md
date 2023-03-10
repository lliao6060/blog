# ngrok設定
###### tags: `ngrok`
> ngrok是個好東西，方便讓你把做好的網站demo給人家看

### 基本安裝
1. [安裝ngrok](https://blog.alantsai.net/posts/2018/04/devtooltips-5-ngrok-allow-public-to-access-localhost-website-and-sql-server)
2. 在ngrok終端機中設定token
```javascript
 ngrok authtoken `your token`
```
3. 在ngrok終端機中開啟你的port
```javascript
ngrok http --region ap --host-header=rewrite `your port`
```

### 壞掉的話
1. 用[Chocolatey](https://ithelp.ithome.com.tw/articles/10242201)安裝：choco install ngrok
2. 打開`powershell`以`系統管理員身分執行`並輸入
```javascript
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
就可以開始用了!!

### 使用方法
1. 從[package商店](https://community.chocolatey.org/packages)搜尋你要的套件然後複製到`powershell`
2. 一直按確定然後按Y，然後以前ngㄟok怎麼用就繼續怎麼用

### 參考文章
[用指令安裝程式--Chocolatey](https://ithelp.ithome.com.tw/articles/10242201)