# 常見問題
###### tags: `css`,`javascript`,`常見問題`

### javascript
- [JavaScript取出”陣列-物件“重複/不重複值的方法](https://guahsu.io/2018/04/JavaScript-Duplicates-Array-Object/)

### 圖片錯誤處理
- 當圖片不存在時換另張圖
```html
<img 
    src="invalid_link"      
    onerror="this.onerror=null;this.src='https://placeimg.com/200/300/animals';"
/>
```

#### 使用vue的自定義指令(v-directive)
- [當backgroundImg onerror時](https://www.twblogs.net/a/5cf23d42bd9eee692bd08b7a)
```html
<div id="app"></div>
<template id="tpl">
  <div class="image" v-img="{
    src: 'success.jpg',
    error: 'error.jpg',
    loading: 'loading.gif',
  }"></div>
</template>
```

  ```javascript
<script>
  function imgHandler($el, binding) {
    const opts = binding.value;
    const $img = document.createElement('img');
    $el.style.backgroundImage = `url('${opts.loading}')`;
    $img.onload = () => {
      $el.style.backgroundImage = `url('${opts.src}')`;
    };
    $img.onerror = () => {
      $el.style.backgroundImage = `url('${opts.error}')`;
    };
    $img.src = opts.src;
  }

  Vue.directive('img', {
    inserted: imgHandler,
    update: imgHandler,
  });

  new Vue({
    el: '#app',
    template: '#tpl',
  });
</script>

  ```