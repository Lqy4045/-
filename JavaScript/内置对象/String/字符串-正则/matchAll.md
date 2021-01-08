1. 功能：按照正则查询规则找到当前字符串的详细内容
2. 语法：`str.matchAll(regxp)`

- regxp：正则规则

3. 返回值：返回当前查找到的数据详细信息的迭代器
4. 用法：

```js
let str = 'hello'
let regxp = /l/g
let iterators = str.match(regxp)
for (iterator of iterators) {
  console.log(iterator)
  /*
   *[ 'l', index: 2, input: 'hello word', groups: *undefined ]
   *[ 'l', index: 3, input: 'hello word', groups: *undefined ]
   */
}
```
