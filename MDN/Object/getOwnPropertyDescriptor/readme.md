# Object.getOwnPropertyDescriptor()
> Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）

# 语法
```js
Object.getOwnPropertyDescriptor(target, propName)
```
## 参数
`target`
> 目标对象

`propName`
> 目标对象的属性名或 `Symbol`

## 返回值
> 如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回 undefined。
> 