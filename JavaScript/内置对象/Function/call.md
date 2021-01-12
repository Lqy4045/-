1. 功能：调用数组修改 this 指向
2. 语法：

- 参数 1：传入 this 的指向
- 参数 2：传入数据

3. 用法：

```js
function fn(a, b) {
  console.log(a, b)
}
fn.call('修改this指向', 2, 3)
//2,3
```
