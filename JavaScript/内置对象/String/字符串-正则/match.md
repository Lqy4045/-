1. 功能：按照正则查询规则找到当前字符串的详细内容
2. 语法：`str.match(regxp)`

- regxp：正则规则

3. 返回值：返回当前查找到的数据详细信息
4. 用法：

```js
let str = 'hello'
let regxp = /l/
let regxp1 = /l/g
str.match(regxp) //[ 'l', index: 2, input: 'hello word', groups: undefined ]
str.match(regxp1) //['l','l']
```
