# [ES6 相關用法](https://ithelp.ithome.com.tw/articles/10195991)
###### tags: `JavaScript` `ES6`

### 重點紀錄/語法的新特性


  - [解構附值](https://ithelp.ithome.com.tw/articles/10194743)
```javascript=
  // 陣列的解構賦值
    let [a, b] = [1, 2];
    // 物件的解構賦值
    const { attr1: x, attr2: y } = { attr1: 10, attr2: 20 }; //x = 10 y = 20
    // 物件的屬性也能解構賦值
    const { admin, user } = { admin: 'a', user: 'b' };
    // 字串的解構賦值
    let [x, y] = 'Hi';
    console.log(x, y); // 'H', 'i'


    // Set 資料結構
    let [x, y, z] = new Set([10, 20, 30]);
    console.log(x, y, z); // 10, 20, 30
```
  - [取值回圈 for...of](https://ithelp.ithome.com.tw/articles/10194800)
```javascript=
    let arr = ['a', 'b', 'c', 'd'];

    // for...in 取得 "鍵名/屬性名"
    for (let key in arr) {
        console.log(key); // '0' '1' '2' '3'
    }

    // for...of 取得 "鍵值/屬性值"
    for (let value of arr) {
        console.log(value); // 'a' 'b' 'c' 'd'
    }
    
    //可使用陣列的entries()方法來獲取[key, value]
    for (let [key, value] of arr.entries()) {
    console.log(key, value);
    }
    // 0, 'a'
    // 1, 'b'
    // 2, 'c'
    // 3, 'd'

    // 使用在字串上
    let string = 'Hello';

    for (let i of string) {
        console.log(i); // 'H' 'e' 'l' 'l' 'o'
    }
  ```
  - [模板字符串](https://ithelp.ithome.com.tw/articles/10195140)
  1.需使用反引號標識`‵ ‵`包起來表示
  2.可以嵌入變數或任何的表達式，需要使用`${ }`來嵌入
  3.注意: **換行與空白字元都會被保留**，可使用字串的`trim()`方法來消除
```javascript=
//可鑲入變數
let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

// 可以嵌入任何表達式，例如函數、加減運算
let today = new Date();
let text = `The time and date is ${today.toLocaleString()}`;
```
    
  - [擴充運算子 ...](https://ithelp.ithome.com.tw/articles/10195477)
      1.主要是展開單一個陣列 array，轉化為多個逗點隔開的獨立參數
      2.此運算子由 ==三個點...== 組成，後面 ==再加上你要轉換的陣列==
 ```javascript=
/*取代apply() 取得最大/最小數*/
let arr = [10,50,60,100,8000,999];
let max = Math.max(...arr); // 8000
let min = Math.min(...arr); // 10
console.log(max,min);

/*把陣列串一起*/
let arrr = [1,2,3,4];
let arr2 = ['a','b'];

let a2 = [...arrr,...arr2]
console.log(a2) //[1,2,3,4,'a','b']
```
    

  - [函數中的預設參數 & Rest 參數](https://ithelp.ithome.com.tw/articles/10195615)  (??不是很懂)
   *預設參數是為了代替傳統的方式，解決了需要判斷是否為undefined才能設置預設值的麻煩
  - [箭頭函數](https://ithelp.ithome.com.tw/articles/10195669) 
    - 參考
  1.[聊聊 JavaScript 中的 Date 对象](https://segmentfault.com/a/1190000006798626)
  2.[subStr(start,length) & subString(start,end)的差別](https://www.wibibi.com/info.php?tid=315 )
  ```javascript=
  let circleArea = r => r * r * 3.14;
console.log(circleArea(10)); //314

//無參數
let sayhi = () => 'hi!';
console.log(sayhi()); //'hi!'

//多個參數
let add = (a,b) => a + b;
console.log(add(10,50)); //60

//若返回值或參數有包含{}，像是物件內容，需要在外圍加上括號()
let obj = () => ({e: 1 , w: 4}); //{e:1,w:4}
let obj2 = ({x,y}) => x + y
console.log(obj2({x: 1, y :3})); //4

//若箭頭後面的程式區塊是陳述式或多條語句，需要加上大括號{}
let today = () => {
  let day = new Date();
  return day.toISOString().substr(0,10); 
}
console.log(today()) //2020-03-03

/* 
toISOString() 
= 轉換成符合ISO標準的時間格式(格式是 “YYYY-MM-DDTHH:mm:ss.sssZ)
subStr(start,length)
= 從開始取得最後的長度, 起始點可自己設, 如果沒填，會自動取至最後一個字
*/

//三元表達式綁定class範例
:class="recharge_item.costType === 0 ? 'add' : 'minus'"
  ```
  
 - [物件語法糖的擴展](https://ithelp.ithome.com.tw/articles/10195961)  (??不是很懂)

### 新的 API 語法

  - [物件轉php陣列格式 - Map物件](https://ithelp.ithome.com.tw/articles/10196113)


### 2022/新增
- [那些必會用到的ES6精粹(推薦)](https://blog.fundebug.com/2018/09/30/best-part-of-es6/)
