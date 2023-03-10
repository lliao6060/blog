# Git入門
###### tags: `Git`
版本控制軟體 為了版本控制及團隊合作便利 提高開發效率與安全性。
###### [其他功能參考](https://kknews.cc/code/eb4kqoq.html)
[git 遇到Everything up-to-date](http://cbsfly.github.io/git/git-date)

#### 創建git到遠端
- vsCode連接遠端倉庫
  …or create a new repository on the command line
  echo "# ecommerce" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/lliao6060/ecommerce.git
  git push -u origin main
  …or push an existing repository from the command line
  git remote add origin https://github.com/lliao6060/ecommerce.git
  git branch -M main
  git push -u origin main

==**常用功能(2020-09-22更新)**==
- 設定遠端倉庫 git remote set-url origin `git倉庫網址`
- git退版 git reset --hard `git log前面uuid`
- git push -f =>強制覆蓋線上紀錄（自己用比較好）
- git pull --force origin master:master =>強拉

**組合技**
- ![](https://i.imgur.com/VgdAtWA.png)
**[git特殊指令參考](http://dreamerslab.com/blog/tw/npm-basic-commands/)**
#### 配置帳號
```
git config --global user.name *** 
git config --global user.email ***@***.*** 
git config --list# 查看配置的信息 
git help config# 獲取幫助信息
```

#### 初始化
`git init` - 在當前資料夾創建git倉庫
要給git版本管理的話要在該資料夾輸入git init(VS code會變成綠色)

#### git status 查看檔案狀態
   - `-s` 簡化輸出 
   - M = 已編輯 
   - ?? = 未追蹤
   - A = 已暫存（預存）

#### clone專案
`git clone + '倉庫網址'` - 下載github專案 到當前資料夾

#### 流程
- 開發完存檔
1. `git add .` [檔案名稱] 將修改的檔案加入暫存區(包括新增或刪除檔案)，
   把當前資料夾下所有已修改資料夾或檔案加入暫存
   ==**記得add完若還有修改要再add一次(前提是同個檔案)**==
2. `git commit` [檔案名稱] -m ‘[提交敘述]’ 把暫存區加入資料庫(提交)
3. `git log` 查看已提交紀錄 按Q跳出
4. `git push origin master` 上傳到遠端倉庫origin = 倉庫名字 master = 主要分支

- 隔天繼續開發
`git pull origin master` 拉取遠端資料更新本地端
若產生衝突，解決後需再完成一次新的提交紀錄(merge)
==先拉後推原則== **pull > push** ++每天都把專案pull 確保專案為最新狀態++
#### **重要**
    - 創在本地的資料庫++要先設定位置再push++ 否則系統會顯示找不到origin
    - 方法: git remote add origin `github倉庫網址` 後再push一次就會成功
    - clone不用 


#### [npm相關指令](http://dreamerslab.com/blog/tw/npm-basic-commands/)

==**終端機指令（vsCode）**==
1. cd + 路徑(資料夾位置) 
    - 上一頁 = `cd ..`
    - `cd test/css`

2. ctrl + L 清空終端機內容
3. ls -al 查看當前資料夾所有檔案
4. rm -rf `資料夾名稱` 刪除資料夾 **==注意==** 
    要很確定再刪 他不會出現在垃圾桶裡面（盡量少用）
:100: :satisfied: :smile:  :heart:  :fish: 