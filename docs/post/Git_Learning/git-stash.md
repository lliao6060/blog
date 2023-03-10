# Git stash流程
###### tags: `Git`

==**注意**== stash前記得要先下commit 不然會悲劇

這個為在merge request刪掉分支時的處理
1. git stash
2. git checkout master 
3. git pull origin master
4. git log
5. git checkout -b feature/新的分支名
6. git stash pop