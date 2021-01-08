1. 功能：按照正则查询规则找到当前字符串所在下标相当于 indexOf
2. 语法：`str.search(regxp|subStr))`

- regxp|subStr：正则规则|查找的字符串

3. 返回值：返回查找的字符串的下标，找不到返回-1
4. 用法：

```js
let str = 'hello word'
let regxp = /l/g
str.search(regxp) //2
str.search('l') //2
str.search('a') //-1
```
