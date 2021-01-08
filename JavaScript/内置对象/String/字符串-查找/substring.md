1. 功能： 查询起始坐标到结束坐标的字符串

2. 语法：`str.substring(startIndex，endIndex]`

- startIndex：查找的起始坐标
- endIndex：查找的终止坐标(不包含)

⚠ 注意：当 startIndex>endIndex 时候相当于反过来取之

3. 返回值： 返回截取的字符串

4. 用法：

```js
let str = 'hello'
str.substring(0, 2) //'he'
str.substring(2, 1) //'e'
```
