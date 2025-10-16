# Docker Shell 腳本範例

變數根據公司設定
```shell=
###
 # @Author: lindy.liao@jingmi.com.tw 
 # @Date: 2025-06-18 09:01:24
 # @LastEditTime: 2025-06-19 14:28:54
 # @LastEditors: lindy.liao@jingmi.com.tw 
 # @Description: 運行本地docker腳本
 # @FilePath: /cms-frontend/run-local.sh
###

# 要先執行 chmod +x run-local.sh 才能執行 ./run-local.sh 

#!/bin/bash

# 設定映像名稱
export IMAGE_NAME='test-cms-frontend-build'

# 設定必要的環境變數

# 需要手動設定，因為這是本地開發環境的 API URL，即使成功啟動 server 也沒辦法取得 API 資料
export VITE_CMS_API_BASE_URL="https://cms-api.dev.bobateach.net"
# 需手動設定，沒設定就會噴 nginx 錯誤
export CACHE_CONTROL="max-age=86400"

# 顯示環境變數
echo "=== 環境變數設定 ==="
echo "IMAGE_NAME: $IMAGE_NAME"
echo "VITE_CMS_API_BASE_URL: $VITE_CMS_API_BASE_URL"
echo "CACHE_CONTROL: $CACHE_CONTROL"
echo "==================="

# 建置 Docker 映像
echo "開始建置 Docker 映像..."
docker build \
  --progress=plain \
  --build-arg VITE_CMS_API_BASE_URL="$VITE_CMS_API_BASE_URL" \
  --build-arg CACHE_CONTROL="$CACHE_CONTROL" \
  -t $IMAGE_NAME .

# 檢查建置是否成功
if [ $? -eq 0 ]; then
    echo "Docker 映像建置成功！"
    
    # 停止並移除舊的容器（如果存在）
    docker stop $(docker ps -q -f ancestor=$IMAGE_NAME) 2>/dev/null
    docker rm $(docker ps -a -q -f ancestor=$IMAGE_NAME) 2>/dev/null
    
    # 運行新的容器
    echo "啟動容器..."
    docker run --rm -it \
        -p 5173:80 \
        $IMAGE_NAME

    # 檢查容器日誌
    echo "容器日誌："
    docker logs $(docker ps -q -f ancestor=$IMAGE_NAME)
else
    echo "Docker 映像建置失敗！"
    exit 1
fi 
```