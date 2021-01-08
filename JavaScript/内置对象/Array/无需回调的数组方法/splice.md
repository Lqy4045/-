1. 功能：插入数组，改变原来的数组

2. 语法：`arr.splice(startIndex，delCount，item1，item2...itemN)`

- startIndex：要删除的起始坐标
- delCount：要删除的个数
- item...：用来替换的项

3. 返回值：删除的数组

4. 用法：

```js
let arr = ['1', '2', '3']
arr.splice(0, 1, 'a') //['1']
arr //['a','2','3']
```
