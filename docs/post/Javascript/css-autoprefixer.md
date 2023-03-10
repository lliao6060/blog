# Css瀏覽器自動補足兼容
###### tags: `css` `autoprefixer`

1. 下載[autoprefixer](https://www.npmjs.com/package/autoprefixer)

```
npm i -D postcss postcss-cli
```
2. 修改package.json, [▻ 什麼是browerslist](https://ithelp.ithome.com.tw/articles/10192300)

```json
 "scripts": {
    "prefix": "postcss ./public/css --no-map --use autoprefixer -d ./public/css",
    "dev": "serve public"
  },
  "browserslist": [
    "> 1%",
    "last 4 versions",
    "not ie <= 10"
  ]
```

3. 推code之前下指令就ＯＫ了！

```
  npm run prefix
```