1. 功能：返回实例对象 Object 对构造函数的引用
2. 描述：所有对象都会从原型上继承一个`constructor`的属性。

```js
const arr = []
console.log(arr.constructor === Array) //true

const obj = {}
console.log(obj.constructor === Object) //true
```

3. 说明

可以用`constructor`来判断数据类型
判断数据类型还有`typeof`,`instanceof`,`constructor`,`Object.prototype.toString().call()`这四个方法
