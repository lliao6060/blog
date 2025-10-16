# JavaScript物件 & 方法
###### tags: `JavaScript`

1.資料類型分為兩種
- 基本型別：字串、數字、布林
```javascript=
//基本型別會創建新的資料 copy data
var x = '123';
var y = x;
y = '456'; 
cosole.log(x)  // x = 123
x === y // false
```
- 物件型別：對象、陣列、函數
```javascript=
//物件型別會複製參考而不是資料本身 copy reference
var x = ['123'];
var y = x;
y[0] = 'hello';
console.log(x) // x = hello
x === y // true
```

- 比較兩個JavaScript物件(對象)時，即使內容相同但始終為不同物件。
```javascript=
const x = ['hello maju'];
const y = ['hello maju'];
console.log(x == y) //false
console.log(x === y) //false
```
-  當使用`===(嚴格比較)`運算符時，兩者字串相同但卻不相等，
因為`===`運算符必須為 ==**資料類型和值皆相等**== 的資料。
```javascript=
const x = 'maju'; // string
const y = new String('maju'); //obj
//不要將字串創建為物件(對象)，會降低執行速度。

console.log(x == y)  //true 因為值相同
console.log(x === y) //false 因為資料類型不同(字串/物件)
```

2.原生方法
- 字串方法
```javascript=
// length 字串長度
'123'.length;

//indexOf() 字串順序
alert('123'.indexOf('2')) //1

/* replace() 更改部分字串
**注意**：原資料不會被修改，必須手動再給值 */
let str = 'Hello World!';
str = str.replace('World','Maju') //'Hello Maju!'

//trim() 去除空白
const x = '     hello';
const y = x.trim(); //'hello'
```
- 數字方法
```javascript=
//isNaN() 檢驗變數是否為數字(is not a number)
alert(isNaN(123));
alert(isNaN('123')); //false
alert(isNaN('apple')) //true

// toString() 數字轉成字串，前面非變數的數字要用 () 包起來
const x = 100;
const y = 50;
const w = x + y.toString();
console.log(w) //10050

//Number() 字串轉數字
const x = '100';
const y = '50';
const w = Number(x) + Number(y)
console.log(w) //150

//toFixed 四捨五入到指定小數位(剛好5直接捨去)
const num = 3.14516;
console.log(num.toFixed(2)) //3.15


//轉換為台幣
function toTWD(num){
let toTwd = num.toLocaleString(
'zh-TW',
{
  style: 'currency',
  currency: 'TWD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}
);
return toTwd + '元';
};
//zh-CN => NT$1,200元
console.log(toTWD(1200))

//將字串轉為國字
function toTWNum(num){
return num.toLocaleString('zh-Hans-CN-u-nu-hanidec').replace(',','')
}

console.log(toTWNum(80)) //"八〇"
```
- 陣列方法
**參考** [JS數組方法](https://wangdoc.com/javascript/types/array.html)
(裡面也有講到將類數組Array.like轉為陣列的方法)
- [slice](https://stackoverflow.com/questions/43046332/how-to-remove-an-item-from-an-array-in-vue-js)
```javascript=
//length - 1 取得陣列最後一個位置的元素
const arr = ['cherry','apple','banana','orange']
arr[arr.length - 1]; //orange

//filter() 過濾陣列裡的東西
const arrr = [1,3,5,7,0,9]
const filted = arrr.filter(function(item){
return item > 4
});

console.log(filted) //[5, 7, 9]

//push() 從後面塞
const arrr = [1,3,5,7,0,9]
arrr.push('maju')
console.log(arrr) //[1, 3, 5, 7, 0, 9, "maju"]

//pop() 從後打

//Array.isArray() 判斷是否為陣列
const a = '123';
const b = [1,2,3,4,5];
const c = 234;
const d = {
id: 123, 
name: 'maju'
}

console.log(Array.isArray(a)) //false

//forEach()
/*
傳給 forEach 的函數會在陣列中的每一個項目中執行一次，
並把陣列的項目傳給函數作為參數。
*/

let arr = [0,2,6,5,8,7,89,5,456]
arr.forEach(function(arr) {
console.log(arr) //會把每個元素印一次
})

//map()
/*
資料校正處理,會回傳一個新的陣列而不會修改原資料內容，
不管內容為true或false皆會回傳結果
*/
var people = [
{
name: 'Casper',
like: '鍋燒意麵',
age: 18
},
{
name: 'Wang',
like: '炒麵',
age: 24
},
{
name: 'Bobo',
like: '蘿蔔泥',
age: 1
},
{
name: '滷蛋',
like: '蘿蔔泥',
age: 3
}
];
const x = people.map(function(item){
return item.age > 10
})

console.log(x) //回傳[true, true, false, false]

const peoplemap = people.map(function(item){
if(item.like != '炒麵') {
return `${item.like}好吃`;
}else {
return `${item.like}不好吃`;
}
})

console.log(peoplemap) //["鍋燒意麵好吃", "炒麵不好吃", ...] 

-2020-11-18- 重組數組

想要的資料格式
{ "value": "xxx(在輸入建議看到的值，必需)", "address": "看自身情况" },

原數組
this.modelInfos=
[
  { "modelId": "1", "modelName": "a1"，type:"c" },
  { "modelId": "2", "modelName": "a2"，type:"c" },
  { "modelId": "3", "modelName": "a3"，type:"c" },
  { "modelId": "4", "modelName": "a4"，type:"c" },
]

用map改變
this.allInfos= this.modelInfos.map((terminal) => {
    return {
      value: modelName,
      name: modelId,
    };
  });

//join(deliminator = ",") 把所有的陣列元素合併成字串。
let arr = [0,2,6,5,8,7,89,5,456]
console.log(arr.join(' - ')); //"0 - 2 - 6 - 5 - 8 - 7 - 89 - 5 - 456"



//將字串轉為陣列方法
//(舊)
let maju = 'QQ麻糬'
var arr = Array.prototype.slice.call(maju);
arr.forEach(function (e) {
console.log(e);
console.log(arr); //["Q", "Q", "麻", "糬"]
}); 

//(ES6新增)
let arr = Array.from('juejin'); 
console.log(arr); //["j", "u", "e", "j", "i", "n"]

//slice (start_index, upto_index) 返回陣列的片段，不改變原字串。
deleteEvent: function(index) {
  this.events.splice(this.events.indexOf(index), 1);
}

//sort 在適當的位置排序陣列的元素。
//reverse 反轉陣列元素的順序至適當的位置。
//reduce() 資料加總
//shift 移除並返回陣列的第一個元素。
//unshift 在陣列的開頭處加入一個以上的元素，並返回新的陣列長度。


//指定巢狀陣列展開的深度。預設為1
flat()

```

- 物件方法
[實例對象與new命令](https://wangdoc.com/javascript/oop/new.html)
```javascript=

//物件取key & value值
var obj = {
name: 'maju',
age: 10
};

console.log(Object.keys(obj)); 把要轉換的對象丟入
//得到["name", "age"]
console.log(Object.values(obj)); 
//得到["maju", 10]

要調用時要再拿東西接 => const objKeys = Object.keys(obj);


//構造函數

/*
1.構造函數就是函數，只是有自己的屬性和方法
2.為了與普通函數區別，構造函數第一個字通常為大寫
* 構造函數特點 *
-函數內部使用'this',代表所要生成的對象實例
-生成對象的時候, 必須使用'new'命令

*/

let Maju = function(){
this.size = 'big';
}

let Q = new Maju();
console.log(Q.size) //'big'
```