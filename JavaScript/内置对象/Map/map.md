1. 功能：new Map() 构建一个键值对的集合，为 Map 对象
2. 方法：

- new Map()：新建一个 Map 对象
- Map.prototype.has(key)：返回布尔值。表示 Map 实例是否包含键对应的值
- Map.prototype.set(key,value)：返回该 Map 对象。设置 Map 对象中的键值对
- Map.prototype.get(key)：获取 Map 对象中键对应的值
- Map.prototype.delete(key)：删除 Map 对象中对应的 key，移除 true，没有移除 false

3. 代码

```js
let map = new Map({ name: 'zs', age: 12 })
map.get(name) //'zs'
map.set(sex, 'man') //{name=>'zs',age=>12,sex=>'man'}
map.has(name) //true
map.delete(name) //{age=>12,sex=>'man'}
```
