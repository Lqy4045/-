1. 功能：寻找首次满足条件的数组的项的下标
2. 语法：`str.findIndex(callback)`

- `callback`：在数组每一项上执行的函数，接收 3 个参数：

* item：数组的每一项
* index：每一项的下标
* array：被遍历的数组

3. 用法：

```js
let arr = ['1', '2']
let newArr = arr.findIndex((item, index, array) => {
  return item == '1'
})
//0
```
