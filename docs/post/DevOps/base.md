###### tags: `docker`

# docker筆記

### 基本指令
```javascript=
# 列出所有本機docker images
docker images

# 列出正在運行中的images
docker ps

# 查看所有 containers(包含已關閉)
docker ps -a

# 移除背景正在執行的container
docker rm CONTAINER

# 删除所有已停止的容器
docker container prune

# 删除所有未使用的镜像
docker image prune

# 删除所有未使用的资源
docker system prune

# 停止正在執行的
docker container ls 
docker rm -f <container-name>

# 刪掉指定images
docker rmi docker [image_id]

# --rm 當容器終止時會自動刪除，很方便
docker run --rm -it -p yourPort:dockerPort imageName

# build new image
docker build -t < [name]:[tag](不能大寫)> . <路徑>

```

### 創建image
1. 先創建`Dockerfile`
可以參考[vue官方提供的模板](https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html)

```dockerfile=
# 改成你的版本 記得搜尋slin版本(搜尋docker node)
# 選擇基礎鏡像（選取地基）
FROM node:lts-alpine

# 如果是prodction才需要這行 否則可刪掉
# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
# 確定工作目錄（選擇在哪個房間工作）
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
# 複製設定檔（把材料搬進來）
COPY package*.json ./

# 可以用npm install 或 yarn
# install project dependencies
# 安裝依賴（使用材料建造
RUN yarn

# copy project files and folders to the current working directory (i.e. 'app' folder)
# 複製所有原始碼（搬入剩餘材料）
COPY . .

# 如果是prodction才需要這行 否則可刪掉
# build app for production with minification
RUN npm run build

# 聲明端口（開個窗戶）
EXPOSE 8080

# 如果是prodction才需要這行 記得是陣列寫法
CMD [ "http-server", "dist" ]

# dev模式 記得你怎麼啟起來就要怎麽寫
# 啟動指令（房子怎麼用）
CMD [ "yarn", "dev" ] 
```
2. 輸入`docker build -t 專案名稱 不能大寫 路徑`
```javascript=
docker build -t my-project . 
```
    
### 啟起來
```javascript=
docker run -it -p yourPort:dockerPort imageName

範例：
docker run -it -p 8080:8080 amago-erp
```


### 參考
- [从安装到会用，更适合前端宝宝的Docker教程](https://juejin.cn/post/7455958928607477771)