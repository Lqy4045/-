1. 功能：判断当前对象自身属性中是否具有指定属性
2. 语法：obj.hasOwnProperty(prop)

- prop：要检测的属性的 `String` 字符串形式的名称，或者 `Symbol`

3. 返回值：用来判断某对象是否具有指定的属性布尔值 `Boolean`
4. 说明：
   所有继承了`Object`的对象都会继承到`hasOwnProperty`的方法。
   这个方法可以用来检测一个对象是否具有特定的自身的属性
