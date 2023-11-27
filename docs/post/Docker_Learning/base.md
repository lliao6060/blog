###### tags: `docker`

# docker筆記

### 基本指令
```javascript=
docker images 列出所有本機docker images

docker ps 列出正在運行中的images
// 查看所有 containers(包含已關閉)
docker ps -a

// 移除背景正在執行的container
docker rm CONTAINER

docker rmi docker id 刪掉指定images

// --rm 當容器終止時會自動刪除，很方便
docker run --rm -it -p yourPort:dockerPort imageName

docker build -t 專案名稱 不能大寫 路徑
```

### 創建image
1. 先創建`Dockerfile`
可以參考[vue官方提供的模板](https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html)
```dockerfile=
# 改成你的版本 記得搜尋slin版本(搜尋docker node)
FROM node:lts-alpine

# 如果是prodction才需要這行 否則可刪掉
# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# 可以用npm install 或 yarn
# install project dependencies
RUN yarn

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# 如果是prodction才需要這行 否則可刪掉
# build app for production with minification
RUN npm run build

EXPOSE 8080
# 如果是prodction才需要這行 記得是陣列寫法
CMD [ "http-server", "dist" ]

# dev模式 記得你怎麼啟起來就要怎麽寫
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