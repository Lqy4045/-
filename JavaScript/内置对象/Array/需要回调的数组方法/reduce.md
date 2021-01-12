1. 功能：累计处理数组每一项
2. 语法：`str.reduce((prev,next)=>{return prev + next})`

- `callback`：在数组每一项上执行的函数，接收 2 个参数：

* prev：数组的每一项
* index：数组后一项
* return：return 返回来的值会当成下一次循环的 prev

3. 用法：

```js
let arr = [1, 2, 3]
let newArr = arr.reduce((prev, next) => {
  return prev + next
})
//6
```
