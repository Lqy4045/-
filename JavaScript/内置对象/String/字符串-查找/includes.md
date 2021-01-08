1. 功能： 判断一个字符串是否包含在另一个字符串中
2. 语法：`str.includes(targetStr,[formIndex])`

- targetStr：要查找的字符串
- formIndex: 查找的起始下标（可选）

3. 返回值： 如果包含返回 true 否则返回 false
4. 用法：

```js
let str = 'hello'
str.includes('l') //true
str.includes('l', 4) //false
```
