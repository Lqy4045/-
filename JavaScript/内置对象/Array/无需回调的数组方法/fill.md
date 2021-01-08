1. 功能：用指定的字符串替换当前数组里面的项

2. 语法：`arr.fill(value,startIndex,endIndex]`

- value：要替换的数组项的值
- startIndex：起始下标
- endIndex：结束下标（不包含）

3. 返回值：替换完的数组

4. 用法：

```js
let arr = ['1', '2', '3']
arr.fill('a', 0, 1) //['a','2','3']
```
