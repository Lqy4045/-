1. 功能： 从后面查找当前字符串是否存在目标字符串中
2. 语法：`str.lastIndexOf(targetStr,[formIndex])`

- targetStr：要判断的目标字符串
- formIndex：判断的结束位置

3. 返回值： 如果查找到的字符串则返回当前字符串的下标，否则返回-1

4. 用法：

```js
let str = 'hello'
str.lastIndexOf('l') //3
str.indexOf('l', 2) //2
str.indexOf('l', 5) //-1
```
