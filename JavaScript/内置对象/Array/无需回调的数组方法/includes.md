1. 功能：查找该属性是否在数组中存在

2. 语法：`arr.includes(targetStr,[formIndex])`

- targetStr： 查找项
- formIndex：查找起始下标

3. 返回值：找到返回 true 没找到返回 false

4. 用法：

```js
let arr = ['1', '2', '3']
arr.includes('a') //false
arr.includes('1') //true
arr.includes('1', 2) //false
```
