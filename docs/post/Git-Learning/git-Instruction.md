# Git常用指令
###### tags: `Git`


#### 常用指令
- git clone 指定分支
```javascript
git clone <遠端專案URL> -b <分支名稱>
```
- git 創建分支
```javascript
git checkout  -b <new branch name>
```

- git 撤銷commit
```javascript
git reset HEAD^ --hard
```

- git 修改上次的 commit

```javascript
git add <filename>
git commit --amend -m "my new commit message"
```

- git rebase master
要先切到本地master pull更新
再切回分支rebase回master 這樣就接回去可以推了

- git查看分支樹
gloga