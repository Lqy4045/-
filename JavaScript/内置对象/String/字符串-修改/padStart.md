1. 功能：根据特定的长度和特定的字符串在前面来补全字符串

2. 语法：`str.padStart(targetLength,padStr)`

- targetLength：想要补充的字符串长度
- padStr：使用该字符串补全

3. 返回值：补全后的字符串
4. 用法：

```js
let str = 'hello'

str.padStart(10, 'a') //'aaaaahello'
```
