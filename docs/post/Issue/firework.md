# 煙火動畫
###### tags: `情境問題`

#### 要求
1. 依照參考影片及圖片製作煙火動畫
2. [雪碧圖產生器](https://www.toptal.com/developers/css/sprite-generator/)
3. ![](../../assets/firework.png)

<Firework-Firework />

<br>
<br>
<br>
<br>
<br>

```vue
<template>
  <div class="firework"></div>
</template>

<script>
  export default {
    name: '',
    data() {},
  };
</script>

<style lang="scss">
  @keyframes sprite {
    0% {
      background-position: 0 0;
    }

    20% {
      background-position: 0 0;
      transform: translateY(-200px);
    }

    100% {
      background-position: 100% 0;
      transform: translateY(-200px);
    }
  }

  .firework {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 500px;
    height: 500px;
    background: url('../../assets/firework.png') top left / calc(28 * 100%) 100% no-repeat; //NOTE: X軸是總數 * 100%
    animation: sprite 2s steps(27) infinite; //NOTE: step是總數-1
  }
</style>
```

#### 小記
 其實什麼動畫都可以用這個做([感謝](https://johnnywang1994.github.io/book/))