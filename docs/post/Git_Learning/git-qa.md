# Git常見問題

- Please move or remove them before you merge.
> Aborting
[解法](https://www.itread01.com/content/1549924748.html)   

```javascript
git clean  -d  -fx
```

- git pull遇到錯誤：error: Your local changes to the following files would be overwritten by merge:解決方法
[解法](https://www.itread01.com/content/1545046022.html)

```javascript
//方法1 如果你想保留剛才本地修改的程式碼，並把git伺服器上的程式碼pull到本地（本地剛才修改的程式碼將會被暫時封存起來)
git stash
git pull origin master
git stash pop

//如此一來，伺服器上的程式碼更新到了本地，而且你本地修改的程式碼也沒有被覆蓋，之後使用add，commit，push 命令即可更新原生代碼到伺服器了。
```

```javascript
//方法2 如果你想完全地覆蓋本地的程式碼，只保留伺服器端程式碼，則直接回退到上一個版本，再進行pull：
git reset --hard
git pull origin master
```

- 如何解决git pull之后报错：Please enter a commit to explain why this merge is necessary?(merge branch)
[解法](https://blog.csdn.net/Wbiokr/article/details/75270610)

```javascript
1. 按键盘字母 i 进入insert模式
2. 修改最上面那行黄色合并信息,可以不修改
3. 按键盘左上角"Esc"
4. 输入":wq",注意是冒号+wq,按回车键即可
```

- git pull遇到錯誤： Pull is not possible because you have unmerged files. Please, fix them up in the work tree, and then use 'git add/rm `<file>`' as appropriate to mark resolution, or use 'git commit -a'.
[解法](https://www.itread01.com/content/1545046022.html)

```javascript
//方法1 如果想保留本地的修改，使用下面的命令，將文件add，然後commit。
git add -u 
git commit -m "描述" 
git pull
```

```javascript
//方法2 想保留本地的修改，但是還不想新加一次commit，可以使用git stash命令。
git stash 
git pull 
git stash pop

//git stash 可用來暫存當前正在進行的工作， 比如想pull 最新代碼， 又不想加新commit， 或者另外一種情況，為了fix 一個緊急的bug,  先stash, 使返回到自己上一個commit, 改完bug之後再stash pop, 繼續原來的工作。
//這種方法是一種比較普遍的做法。
```


```javascript
//方法3 放棄本地的修改
git reset --hard FETCH_HEAD 
git pull

//FETCH_HEAD表示上一次成功git pull之後形成的commit點。
//注意：git merge會形成MERGE-HEAD(FETCH-HEAD)。
//git push會形成HEAD這樣的引用。HEAD代表本地最近成功push後形成的引用。
```