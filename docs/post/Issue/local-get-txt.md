# 取得本地.txt檔方法 
###### tags: `情境問題`

#### 要求
1. 最新消息麻煩提供簡易維護的方式，例如把一張標題圖、一個TXT檔、一個內文圖片放在同一個資料夾內，再統一放到news的資料夾裡，就可以新增一則消息，下面只是範例
![](https://i.imgur.com/FZu2XcQ.png)
2. 需要搭配`i18n`


#### 問題概要
- 當時環境為純html環境, 無法取得本地檔案, 因此需要先裝`webpack`的`serve`取得固定網址
- 需要將參數帶到網址上去獲取api, 因此需要使用下方function
```javascript
  function getQuery(key, urlString) {
    var url = new URL(urlString || window.location.href);
    return url.searchParams.get(key);
  }
```
並使用封裝好的api去拉
```javascript
  function api(method, url, data) {
    return new Promise((resolve) => {
      $.ajax({
        method,
        url,
        data,
        success(res) {
          resolve(res);
        },
      })
    });
  }
```

#### 實作
1. 先創立一個`news`資料夾, 裡面再新增**各個語言的news資料夾**, 且資料夾內再個別新增`index.html`及`index.js`及
`news_open.txt`備用, 作為新聞要展示哪些的依據, 記得要為json格式
2. 再依照需求創建裝新聞的資料夾, 因為要用`網址query`去拉api, 故取名為`news-20210602`, 
 範例如下：

```javascript
//news資料夾結構
－ news
｜ ｜—— cn-news
｜ ｜—— en-news
｜ ｜—— tw-news
｜   ｜—— news-20210602
｜     ｜—— content.txt
｜     ｜—— title.txt
｜     ｜—— main.png
｜   ｜—— index.html
｜   ｜—— index.js
｜   ｜—— news_open.txt
```

```json
//news_open.txt
["20210603", "20210602"]
```

3. 在展示頁(首頁)的`index.js`裡拉取`news`

```javascript
//methods
    async getTxt(id) {
      const lang = this.lang;
      const title = await api('get', `/news/${lang}-news/news-${id}/title.txt`);
      const content = await api('get', `/news/${lang}-news/news-${id}/content.txt`);
      this.newsList.push({
        id,
        title,
        content
      });
    },
    async getNewsList() {
      const lang = this.lang;
      const res = await api('get', `/news/${lang}-news/news_open.txt`);
      const newsIdList = JSON.parse(res);

      for (let i = 0; i < newsIdList.length; i++) {
        await this.getTxt(newsIdList[i]);
      }
    },

//created
  this.getNewsList();
```

4. 在展示頁(首頁)的`index.html`裡

```html
<div class="news_container container">
  <ul class="each-news-box">
    <li v-for="news in newsList.slice(0, 4)">
      <a :href="`/news/${lang}-news?news_id=${news.id}`">
        <div class="each-news-box__sapce-box">
          <div class="each-news-box__img-box">
            <img 
              :src="`./news/${lang}-news/news-${news.id}/main.png`" 
              alt="news-img" 
              onerror="this.style.display='none'" 
            />
          </div>
          <div class="each-news-box__content-box">
            <date>{{ news.id }}</date>
            <p
              v-if="news.content.length > 7"
              v-html="news.content" 
              class="ellipsis multi line-3"
            ></p>
            <p v-else>{{ news.title }}</p>
          </div>
        </div>
      </a>
    </li>
  </ul>
</div>
```

5. 在新聞頁js裡(範例為tw-news)

```javascript
  methods: {
    async getNewsTitle(id) {
      const res = await api('get', `/news/tw-news/news-${id}/title.txt`);
      this.newsTitle = res;
    },
    async getNewsContent(id) {
      const res = await api('get', `/news/tw-news/news-${id}/content.txt`);
      this.newsContent = res;
    },
    loadToHome() {
      alert(this.$t('ALERT__PAGE_RELOAD_TO_HOME'));
      location.href = '/index.html';
    },
  },
  created() {
    this.newsId = getQuery('news_id');
  },
  mounted() {
    this.getNewsTitle(this.newsId);
    this.getNewsContent(this.newsId);
  },
```

6.在新聞頁html裡

```html
<div class="all-news container">
  <div class="all-news__wrapper">
    <div class="each-news-box">
      <div>
        <header>
          <h3>{{ newsTitle }}</h3>
          <date>{{ newsId }}</date>
        </header>
        <main>
          <section class="each-news-content">
            <p v-html="newsContent"></p>
          </section>
          <section class="each-news-img">
            <img 
              :src="`/news/tw-news/news-${newsId}/news.jpg`" 
              alt="news-img" 
              onerror="$(this).parent().remove()" 
            />
          </section>
        </main>
      </div>
    </div>
  </div>
</div>
```

就大功告成拉！！