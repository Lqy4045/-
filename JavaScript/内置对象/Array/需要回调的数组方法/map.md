1. 功能：遍历数组返回经过处理的数组
2. 语法：`str.map(callback)`

- `callback`：在数组每一项上执行的函数，接收 3 个参数：

* item：数组的每一项
* index：每一项的下标
* array：被遍历的数组

3. 用法：

```js
let arr = ['1', '2']
let newArr = arr.map((item, index, array) => {
  return item * item
})
//['1','4']
```
