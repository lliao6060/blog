# 常用function 
###### tags: `utils`

### 沒有vue-router狀況下取得`網址query`
```javascript
  function getQuery(key, urlString) {
    var url = new URL(urlString || window.location.href);
    return url.searchParams.get(key);
  }
```

### api
  - jquery版本
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
- axios版本

  ```javascript
  import axios from 'axios';
  async function useApi(method, url, data, options) {
    const dataKey = method === 'get' ? 'params' : 'data';
    try {
      const res = await axios({
        method,
        url,
        [dataKey]: data,
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        withCredentials: true,
        // headers: {
        //   referer: 'http://localhost:8080'
        // }
      })
      return res;
    } catch (err) {
      if (options.error) {
        options.error(err);
      }
      // console.log(err)
    } finally {
      // ... 不論前面如何必定會執行這裏
    }
  }
  export default useApi
  ```


### 判斷裝置是否為手機
```javascript
  isMobile() {
    if (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }


export const mobileDevice = window.matchMedia("only screen and (max-width: 1024px)").matches;
```

### 鎖住body
```javascript
  fixTargetBody = (selectors, active) => { 
    const body = document.querySelector('body')
    const target = document.getElementById(selectors)
    if (active === 'open') {
      if (target) {
        target.style.display = 'block'
      }
      if(isMobile()) {
        body.style.position = 'fixed'
        body.style.overflow = 'hidden'
      } else {
        body.style.position = 'relative'
        body.style.overflow = 'hidden'
      }
    } else {
      body.style.position = 'relative'
      body.style.overflow = 'visible'
      if (target) {
        target.style.display = 'none'
      }
    }
  }

  // css
  //  &.fix-body {
  //    overflow: hidden;
  //  }
```

#### 判斷直向橫向鎖住body
```javascript
hengshuping = () => {
  const supportOrientation = (typeof window.orientation === 'number' &&
    typeof window.onorientationchange === 'object');

    const init = function () {
    let htmlNode = document.body.parentNode,
      orientation;
    const body = document.querySelector('body')
    let updateOrientation = function () {
      if (supportOrientation) {
        orientation = window.orientation;
        switch (orientation) {
          case 90:
          case -90:
            orientation = 'landscape';
            break;
          default:
            orientation = 'portrait';
            break;
        }
      } else {
        orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
      }
      htmlNode.setAttribute('class', orientation);
      if (orientation === 'landscape') {
        body.style.overflow = 'hidden'
      } else {
        body.style.overflow = 'visible'
      }
    };

    if (supportOrientation) {
      window.addEventListener('orientationchange', updateOrientation, false);
    } else {
      //监听resize事件
      window.addEventListener('resize', updateOrientation, false);
    }

    updateOrientation();
  };

  window.addEventListener('DOMContentLoaded', init, false);
}
```

### 其他
-  篩選變色
```javascript
  searchTexthightLight(val, search) {
    val = val + '';
    if (val.indexOf(search) !== -1 && search !== '') {
      return val.replace(search, 
      '<span style="color:#409EFF; font-weight: bold;">' + search + '</span>')
    } else {
      return val
    }
  },
```
- 限制字數
```javascript
  trucateText(value, length) {
    return value.length <= length ?
      value : value.substring(0, length) + "...";
  },
```
- 價格顯示
```javascript
  priceToNT(price) {
    if (price) {
      let toTwdPrice = price.toLocaleString(
        'zh-TW', {
          style: 'currency',
          currency: 'TWD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }
      );
      return toTwdPrice;
    }
  },
```

- 第一個英文字母大寫

```javascript
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  console.log(capitalizeFirstLetter('foo')); // Foo
```

- 取得隨機時間 / 隨機數值
```vue
<template>
  <div>
    <p>隨機時間 {{ new Date(+(new Date()) - Math.floor(Math.random()*10000000000)).toISOString().replace('T', ' ').slice(0,19) }}</p>
    <p>隨機數 {{ Math.floor( (Math.random() * 1000) + 1 ) }}</p>
  </div>
</template>
```

- 隱藏中間數值

```vue
<template>
  <div>
    {{ hideMidString(id) }}
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        id: Math.random().toString(36).substr(2)
      }
    },
    methods: {
      hideMidString(userId) {
        var str = String(userId)
        let prev = str.slice(0, 2);
        let next = str.slice(-2)
        str = prev + "****" + next;
        return str;
      },
    },
  };
</script>
```

### date相關
```javascript
  dateToISO(date) {
    const d = date;
    const ISOd = new Date(new Date(d).setDate(new Date(d).getDate())).toISOString().slice(0, 10);

    return ISOd;
  },
```

```javascript
  //算出星期幾
  writeDay(date_string) {
    let dateArray = date_string.split(
      "-"); //Need to convert to Array to get to work in all browsers. Example format: Year, month, day: 2013-06-18
    let d = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]); //Subtract 1 from the month because it is 0-11
    // let weekday = new Array(),
    let weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      n = weekday[d.getDay()];
    return n;
  },
```

```javascript
  //自動算出日期 如到職日至今 ex: xx年xx月xx日
  getTimeRemaining(endtime, format) {
    endtime = new Date(endtime);
    let today = new Date();
    if (endtime > today) {
      [endtime, today] = [today, endtime];
    }
    let [yy, mm, dd] = [endtime.getFullYear(), endtime.getMonth() + 1, endtime.getDate()];
    let t = Math.abs(Date.parse(endtime) - Date.parse(today));
    let s = Math.floor((t / 1000) % 60);
    let m = Math.floor((t / 1000 / 60) % 60);
    let h = Math.floor((t / (1000 * 60 * 60)) % 24);
    let drange = Math.floor((t / (1000 * 60 * 60 * 24)));
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let Y = year - yy;
    let M = month - mm;
    if (day < dd) {
      M -= 1;
    }
    if (month * 100 + day < mm * 100 + dd) {
      Y -= 1;
      M += 12;
    }
    let d = Math.floor((today.getTime() - new Date(yy + Y, mm + M - 1, dd).getTime()) / (1000 * 60 * 60 * 24));
    const patterns = {
      t,
      yyyy: Y,
      MM: M,
      dd: d,
      hh: h,
      mm: m,
      ss: s,
      D: drange
    };
    if (!format) return patterns;
    const rformat = new RegExp((function () {
      const re = [];
      for (let i in patterns) re.push(i);
      return '(' + re.join('|') + ')';
    })(), 'g');
    return format.replace(rformat, function replaceDate($0, flag) {
      return patterns[flag];
    });
  },
```

```javascript
  //剩餘天數計算
  leftDays(day) {
    let today = new Date();
    let endDate = new Date(day);
    day = new Date(day[1] + ',' + day[2] + ',' + day[0]) // 轉換為 DD/MM/YYYY 格式
    //  alert(endDate);
    //    alert(today.getTime());
    function diff(start, end) {
      return (end.getTime() - start.getTime()) / 1000;
    }
    //+1是因為天數從0開始算 要再+回來//
    if ((parseInt(diff(today, endDate) / 3600 / 24)) + 1 < 0) {
      return 0;
    } else {
      return (parseInt(diff(today, endDate) / 3600 / 24)) + 1;
    }
  },
```


```javascript
  AM_or_PM(time) {
    const thehours = new Date(time).getHours();
    const AM = '上午';
    const PM = '下午';
    let timeText = '';

    if (thehours >= 0 && thehours <= 11) {
      timeText = AM;

    } else if (thehours >= 12 && thehours < 24) {
      timeText = PM;
    }

    return timeText
  },
```

```javascript
  //取得當前時間or日期
  timeFormate(timeStamp) {
    let newdate = new Date(timeStamp);
    // let week = ['日', '一', '二', '三', '四', '五', '六'];

    let year = newdate.getFullYear();
    let month = newdate.getMonth() + 1 < 10 ? "0" + (newdate.getMonth() + 1) : newdate.getMonth() + 1;
    let date = newdate.getDate() < 10 ? "0" + newdate.getDate() : newdate.getDate();
    let hh = newdate.getHours() < 10 ? "0" + newdate.getHours() : newdate.getHours();
    let mm = newdate.getMinutes() < 10 ? "0" + newdate.getMinutes() : newdate.getMinutes();
    let ss = newdate.getSeconds() < 10 ? "0" + newdate.getSeconds() : newdate.getSeconds();
    // this.nowTime = hh+":"+mm + ":" + ss;
    // this.nowDay = year + "年" + month + "月" + date +"日";
    const nowDate = year + "年" + month + "月" + date + "日";
    const nowTime = hh + ":" + mm + ":" + ss;
    return {
      nowDate,
      nowTime
    }
  },
```

```javascript
  autoGreeting(userName) {
    const vm = this;
    const thehours = new Date().getHours();
    const morning = '早安';
    const afternoon = '午安';
    const evening = '晚上好';
    let greeting = vm.greeting;

    if (thehours >= 0 && thehours < 12) {
      greeting = morning;

    } else if (thehours >= 12 && thehours < 17) {
      greeting = afternoon;

    } else if (thehours >= 17 && thehours < 24) {
      greeting = evening;
    }

    return userName ? greeting + '  ' + userName + '!' : greeting;
  },
```

### 計時器

```javascript
  function setTimer() {
    let seconds = this.nextTime,
    //  let seconds = 5,
        myTimer = document.getElementById("timer"),
        countDown = setInterval(secondsInterval, 1000),
        pageReload = document.getElementById("pageReload"),
        refresh = `(${this.$t(`refresh`)})`;
    function secondsInterval() {
      "use strict";
      var minutes = Math.floor(seconds / 60),
      remSeconds = seconds % 60;
      
      if (remSeconds < 10) {
        remSeconds = "0" + remSeconds;
      }
      myTimer.innerHTML = minutes + ":" + remSeconds;
      pageReload.innerHTML = "";
      if (seconds > 0) {
          seconds = seconds - 1;
      } else {
        clearInterval(countDown);
        myTimer.innerHTML = "--:--";
        pageReload.innerHTML = refresh;
      } 
    }
  },
```

