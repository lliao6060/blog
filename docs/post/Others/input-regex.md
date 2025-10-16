# 控制input的正則表達式

###### tags: `input` `regex`

#### 參考
[javascript 控制input只允許輸入的各種指定內容](https://www.itread01.com/content/1547514908.html)

### 禁止特殊字元
```javascript
/^[\u4e00-\u9fa5_a-zA-Z0-9 ]+$/
```

### 只允許輸入數字
```javascript
<input 
  name="username" 
  type="text"
  onkeyup="value=this.value.replace(/\D+/g,'')"
/>
```

```javascript
<input 
  oninput="if(isNaN(value)) { value = null } if(value.indexOf('.')>0){value=value.slice(0,value.indexOf('.')+3)}"/>
```


### 只允許輸入輸入大小寫英文字母，數字和下劃線
```javascript
<input 
  name="username" 
  type="text"
  onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
/>
```
```javascript
<input 
  name="name" 
  type="text" 
  onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')"
/>
```

### 只允許輸入漢字
```javascript
<input 
  name="name" 
  type="text"
  onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')
/>
```

### 只允許輸入英文和數字
```javascript
<input 
  name="username" 
  type="text"
  onkeyup="this.value=this.value.replace(/[^\a-\z\A-\Z0-9]/g,'');"
/>
```

### 只允許輸入問問字幕，數字和=&%
```javascript
<input 
  name="username" 
  type="text"
  onkeyup="this.value=this.value.replace(/[^a-zA-Z0-9=&%]/g,'');"
/>
```

### 不能輸入特殊字元
```javascript
<input 
  name="name" 
  type="text" 
  onkeyup="value=value.replace(/[\W]/g,'') 
  onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" 
/>
```

### 只能輸入數字和小數點
```javascript
<input 
  name="username" 
  type="text"
  onkeyup="this.value=this.value.replace(/[^\0-9\.]/g,'');"
/>
```

### 只允許輸入英文
```javascript
<input 
  name="username" 
  type="text"
  onkeyup="this.value=this.value.replace(/[^a-zA-Z]/g,'');"
/>
```

### 只允許輸入英文，數字，中文
```javascript
<input 
  name="username" 
  type="text"
  onkeyup="this.value=this.value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'');"
/>
```

### 只允許輸入英文，數字，中文，小數點
```javascript
<input 
  name="username" 
  type="text"
  onkeyup="this.value=this.value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\.]/g,'');"
/>
```

### 只允許輸入英文，數字，中文，小數點，下劃線
```javascript
<input 
  name="username" 
  type="text"
  onkeyup="this.value=this.value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\._]/g,'');"
/>
```

### 只允許輸入英文，數字，中文，小數點，下劃線，空格
```javascript
<input 
  name="username" 
  type="text"
  onkeyup="this.value=this.value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\._ ]/g,'');"
/>
```