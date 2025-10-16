# JavaScript 面試題

## 題目列表

### 1. 找出只出現一次的數字
i 為一組整數陣列 `[6, 4, 3, 2, 4, 1, 6, 3, 2]`，除了一個數字只出現一次之外，其他數字都會出現兩次，請寫一個函數，找出這個唯一的數字並返回

### 2. 加總多型別陣列中的整數
i 為一組多型別陣列包含（整數、字串、陣列），請加總陣列所有找到的整數並返回

### 3. 返回字串的副檔名
i 為字串，如果該字串有副檔名，則返回該字串的副檔名，沒有則返回 FALSE

### 4. 找出最長的字串
i 為一組字串陣列，請返回陣列中最長的字串

### 5. 計算重複字串總數
i 為一組字串陣列，請確認陣列中是否有重複的字串，並且返回所有重複字串的加總總數

### 6. 計算特定鍵值條件的次數
i 為一組多維多型別陣列，請從中找出鍵值為 staff，其值為 true，並加總符合條件的次數並回傳

## 解答

```javascript
// 1. 找出只出現一次的數字
function findUnique(arr) {
  const count = {};
  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  for (const num in count) {
    if (count[num] === 1) {
      return parseInt(num); // parseInt because keys are strings
    }
  }
  return null; // No unique number found
}

// 2. 加總多型別陣列中的所有整數
function sumIntegers(arr) {
  let sum = 0;
  for (const item of arr) {
    if (typeof item === 'number') {
      sum += item;
    } else if (Array.isArray(item)) {
      sum += sumIntegers(item); // Recursive call for nested arrays
    }
  }
  return sum;
}

// 3. 返回字串的副檔名或 FALSE
function getExtension(str) {
  const parts = str.split('.');
  if (parts.length > 1) {
    return parts[parts.length - 1];
  } else {
    return false;
  }
}

// 4. 返回字串陣列中最長的字串
function findLongestString(arr) {
  return arr.reduce((longest, str) => str.length > longest.length ? str : longest, "");
}

// 5. 返回重複字串的總數
function countDuplicateStrings(arr) {
  const count = {};
  let duplicateCount = 0;
  for (const str of arr) {
    count[str] = (count[str] || 0) + 1;
  }
  for (const str in count) {
    if (count[str] > 1) {
      duplicateCount += count[str];
    }
  }
  return duplicateCount;
}

// 6. 找出鍵值為 staff，值為 true 的次數
function countStaffTrue(arr) {
  let count = 0;
  for (const obj of arr) {
    if (obj && obj.staff === true) {
      count++;
    }
  }
  return count;
}
```

## 測試範例

```javascript
// 1. 找出唯一的數字
const arr1 = [6, 4, 3, 2, 4, 1, 6, 3, 2];
console.log("Unique number:", findUnique(arr1)); // Output: 1

// 2. 加總整數
const arr2 = [1, 'hello', [2, 3], 4, 'world', 5];
console.log("Sum of integers:", sumIntegers(arr2)); // Output: 15

// 3. 取得副檔名
const str1 = "myfile.txt";
const str2 = "anotherfile";
console.log("Extension:", getExtension(str1)); // Output: txt
console.log("Extension:", getExtension(str2)); // Output: false

// 4. 找出最長字串
const arr3 = ["apple", "banana", "orange", "apple", "grape", "banana"];
console.log("Longest string:", findLongestString(arr3)); // Output: banana

// 5. 計算重複字串數量
console.log("Duplicate string count:", countDuplicateStrings(arr3)); // Output: 4

// 6. 計算 staff: true 的次數
const arr4 = [{staff: true}, {name: "Alice"}, {staff: true}, {age: 30}, {staff: false}, {staff: true}];
console.log("Count of staff:true:", countStaffTrue(arr4)); // Output: 3
```

