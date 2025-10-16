# CSS3 - 新單位vw、vh、vmin、vmax使用詳解
###### tags: `css`
[原文網址](https://kknews.cc/code/n235k95.html)

### 一、基本說明 
#### 1. vw、vh、vmin、vmax 的含義
1. vw、vh、vmin、vmax 是一種視窗單位，也是相對單位。它相對的不是父節點或者頁面的根節點。而是由視窗（Viewport）大小來決定的，單位 1，代表類似於 1%。
  視窗(Viewport)是你的瀏覽器實際顯示內容的區域—，換句話說是你的不包括工具欄和按鈕的網頁瀏覽器。
2. 具體描述如下：
 - vw：視窗寬度的百分比（1vw 代表視窗的寬度為 1%）
 - vh：視窗高度的百分比
 - vmin：當前 vw 和 vh 中較小的一個值
 - vmax：當前 vw 和 vh 中較大的一個值

#### 2. vw、vh 與 % 百分比的區別
1. % 是相對於父元素的大小設定的比率，vw、vh 是視窗大小決定的。
2. vw、vh 優勢在於能夠直接獲取高度，而用 % 在沒有設置 body 高度的情況下，是無法正確獲得可視區域的高度的，所以這是挺不錯的優勢。

#### 3. vmin、vmax 用處
做移動頁面開發時，如果使用 vw、wh 設置字體大小（比如 5vw），在豎屏和橫屏狀態下顯示的字體大小是不一樣的。
由於 vmin 和 vmax 是當前較小的 vw 和 vh 和當前較大的 vw 和 vh。這裡就可以用到 vmin 和 vmax。使得文字大小在橫豎屏下保持一致。

#### 4. 瀏覽器兼容性
完美兼容各大瀏覽器及行動裝置(詳請見[原文]((https://kknews.cc/code/n235k95.html)))

- 範例一 
> 視窗（Viewport）單位除了可以用來設置元素的寬高尺寸，也可以在文本中使用。下面使用 vw 設置字體大小來實現響應式文字。

```vue
<template>
  <div>
    <div class="demo"> 
      <h1>寬度100％, 字體5％</h1> </div> 
      <div class="demo2"> <h2>寬度80％, 字體5％</h2> 
      </div> <div class="demo3"> 
      <h3>寬度50％, 高度50％, 字體1％</h3> 
    </div>
  </div>
</template>

<script>
export default {
  name: '',
};
</script>

<style lang="scss">
html, body, div, span, h1, h2, h3 { margin: 0; padding: 0; border: 0; } 
.demo { 
  width: 100vw;
  font-size: 5vw;
  margin: 0 auto; 
  background-color: #50688B; color: #FFF;
} 
.demo2 {
  width: 80vw;
  font-size: 5vw;
  margin: 0 auto; 
  background-color: #ff6a00; 
} 
.demo3 { 
  width: 50vw;
  height: 50vh;
  font-size: 1vw;
  margin: 0 auto; 
  background-color: #ff006e; 
  color: #FFF; 
}
</style>
```

- 範例二 實現完整覆蓋的遮罩層
> 有時為了突出彈出框，或者避免頁面元素被點擊。我們需要一個覆蓋整個可視區域的半透明遮罩，這個使用 vw、vh 就可以很輕易地實現。

```vue
<template>
  <div>
    <button onclick="document.getElementById('mask').style.display='inline'">點擊顯示遮罩</button> 
    <div id="mask" onclick="document.getElementById('mask').style.display='none'"/></div>
  </div>
</template>

<script>
export default {
  name: '',
};
</script>

<style lang="scss">
html, body, div, span, h1, h2, h3 { margin: 0; padding: 0; border: 0; } 
button { 
  width: 120px; 
  height: 30px; 
  color: #FFFFFF; 
  font-family: "微軟雅黑"; 
  font-size: 14px; 
  background: #28B995; 
} 
#mask { 
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #000000; 
  opacity: 0.5; display: none; 
}
</style>
```


- 範例三 實現居中顯示的彈出框
> 彈出框大小隨內容自適應 遮罩層使用 vw、vh 實現全屏覆蓋。彈出框添加到遮罩層中並居中。
  - 點擊彈出按鈕後，會顯示一個在整個屏幕上居中顯示的彈出框。
  - 彈出框的大小根據內容的大小自適應（logo 圖片），同時彈出框後面還有個覆蓋整個屏幕的半透明遮罩層。
  - 點擊關閉按鈕後，則隱藏彈出框。

```vue
<template>
  <div>
    <button @click="show = true">點擊顯示彈出框</button> 
    <div id="dialogContainer" class="dialog-container" v-show="show"> 
      <div class="dialog-box"> 
      <div class="dialog-title">居中彈出框</div> 
      <a @click="show = false" class="dialog-close">關閉</a> 
      <div class="dialog-body"> <img src="logo.png" class="demo-image" /> </div> </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss">
html, body, div, span, h1, h2, h3 { margin: 0; padding: 0; border: 0; } 
//重點代碼 
.dialog-container:after { 
  display: inline-block; 
  content: ''; 
  width: 0; 
  height: 100%; 
  vertical-align: middle; 
}//重點代碼 //重點代碼 
.dialog-box { 
  display: inline-block; 
  border: 1px solid #ccc; 
  text-align: left; 
  vertical-align: middle; 
  position: relative; 
}//重點代碼 
.dialog-title { 
  line-height: 28px; 
  padding-left: 5px; 
  padding-right: 5px; 
  border-bottom: 1px solid #ccc; 
  background-color: #eee; 
  font-size: 12px; 
  text-align: left;
} 
.dialog-close { 
  position: absolute; 
  top: 5px; 
  right: 5px; 
  font-size: 12px; 
} 
  .dialog-body { background-color: #fff; }
</style>
```