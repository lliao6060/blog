# js監聽dom樣式變化
###### tags: `情境問題`

#### 要求
 指定dom display為`block`時, 做事

```javascript
    //寫在mounted裡或弄成方法都行
    //偵測display是否呼叫api
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutationRecord) {
        const targetDisplay = document.getElementById('mobile-reward-center').style.display
        if(targetDisplay === 'block') {
          //api
          getAwardApi() 
        }
      });    
    });
    
    var target = document.getElementById('mobile-reward-center');
    observer.observe(target, { attributes : true, attributeFilter : ['style'] });
```