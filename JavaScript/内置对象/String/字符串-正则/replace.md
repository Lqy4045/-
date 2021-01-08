1. 功能：按照正则查询规则找到当前字符串并替换成目标字符串
2. 语法：`str.replace(regxp|subStr，newSubStr|function)`

- regxp|subStr：正则规则|想被替换的字符串
- newSubStr ｜ function：想替换成的字符串｜替换过程中的函数

3. 返回值：返回被替换好后的字符串
4. 用法：

```js
let str = 'hello word'
let regxp = /l/g
str.replace(regxp, 'a') //'heaao word
str.match('hello', 'nihao') //'nihao word'
```
