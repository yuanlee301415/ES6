# handler.defineProperty()
> handler.defineProperty() 用于拦截对象的 Object.defineProperty() 操作。

# 语法
```js
proxy = new Proxy(target, {
    defineProperty(target, property, descriptor) {
        
    }
})
```

# 参数
下列参数将会被传递给 defineProperty 方法。this 绑定在 handler 对象上

`target`
> 目标对象

`property`
> 待定义或修改的属性名

`descriptor`
> 待定义或修改的属性的描述符

# 返回值
> `Boolean` 值，表示该属性的操作是否成功

# 拦截
> 该方法会拦截目标对象的以下操作
* `Object.defineProperty()`
* `Reflect.defineProperty()`
* `proxy.property=value`
