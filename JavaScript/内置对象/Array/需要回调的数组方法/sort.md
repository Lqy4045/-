1. 功能：将数组排序
2. 语法：`str.sort(function)`

- `function`：在数组每一项上执行的函数，接收 2 个参数：

* a：自定义参数
* b：自定义参数

3. 用法：

```js
let arr = [4, 2, 1, 3]
let newArr = arr.sort((a, b) => {
  return a - b
})
//[1,2,3,4]
let newArr = arr.sort((a, b) => {
  return b - a
})
//[4,3,2,1]
```
