# Vue CSS鎖橫屏
###### tags: `鎖橫屏`, `css fix landscape`
> 以vue3版本為主

### in utils.js
```javascript=
export const checkIsMobile = () => {
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

export const hengshuping = () => {
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

### 創建src/mixin/fix-landscape.js
```javascript=
import { checkIsMobile, hengshuping } from '@/utils'

export default {
  data () {
    return {
      
    }
  },
  mounted () {
    // console.log('from mixin mounted')
    //ios 10之後禁止縮放
    document.addEventListener('gesturestart', function (e) {
      e.preventDefault()
    })

    const mobile = checkIsMobile()
    if (mobile) {
      hengshuping()
    }
  },
  computed: {
    showFixWindow() {
      return checkIsMobile() ? true : false
    },
  },
  methods: {

  }
}
```

### in main.js
```javascript=
import fixLandscape from './mixin/fix-landscape.js'
const app = createApp(App);
app.mixin(fixLandscape)
```

### in html & css
- html
    ```html=
      <div 
        id="fix-landscape-window" 
        class="fullcover"
        v-if="showFixWindow"
      >
        <div class="fix-landscape-content-wrapper align-center">
          <p class="fix-landscape-content align-center fix-landscape-title">
            為維持最佳體驗<br>
            請將您的畫面轉為直向
          </p>
        </div>
      </div>
    ```

- css [mixin請參考](./mixin.md)
    ```css=
    #fix-landscape-window {
      position: fixed;
      background: #1b264ce8;
      z-index: 999;
      @include flex;

      .fix-landscape-content-wrapper {
        width: 100%;
        color: $white;

        .fix-landscape-content {
          width: 100%;
          line-height: 1.5;
          text-align: center;
          font-weight: bold;

          @include landscape-RWD(1366) {
            font-size: 3.8vmin;
          }

          @include landscape-RWD(736) {
            font-size: 4.8vmin;
          }
        }
      }

      @media screen and (orientation: portrait) {
        display: none;
      }

      @media screen and (orientation: landscape) {
        display: block;
      }
    }
    ```
