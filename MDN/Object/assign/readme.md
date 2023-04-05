# Object.assign()
> Object.assign() 方法将所有可枚举（Object.propertyIsEnumerable() 返回 true）的自有（Object.hasOwnProperty() 返回 true）属性从一个或多个源对象复制到目标对象，返回修改后的对象。

# 语法
```js
Object.assign(target, ...sources)
```
## 参数
`target`
> 目标对象，接收源对象属性的对象，也是修改后的返回值。
`sources`
> 源对象，包含将被合并的属性。

# 返回值
> 源对象，包含将被合并的属性。