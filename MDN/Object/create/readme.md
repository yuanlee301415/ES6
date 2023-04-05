# Object.create()
> Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）。

# 语法
```js
newObj = Object.create(proto, propertiesObject)
```
## 参数
`proto`
> 新创建对象的原型对象

`propertiesObject` (可选)
> 如果该参数被指定且不为 undefined，则该传入对象的自有可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）将为新创建的对象添加指定的属性值和对应的属性描述符。这些属性对应于 Object.defineProperties() 的第二个参数。

# 返回值
> 一个新对象，带着指定的原型对象及其属性。
