# handler.set()
> handler.set() 方法是设置属性值操作的捕获器。

# 语法
```js
proxy = new Proxy(target, {
    set(target, property, receiver) {
        
    }
})
```
## 参数
以下是传递给 set() 方法的参数。this 绑定在 handler 对象上。

`target`
> 目标对象

`property`
> 将被设置的属性名

`value`
> 新的属性值 

`receiver`
> 最初被调用的对象

## 返回值
> `Boolean` 值，表示属性是否设置成功

# 拦截
* 指定属性值：`proxy.prop = value` 和 `proxy[prop] = value`
* 指定继承者的属性值：`Object.create(proxy)[prop] = value`
* `Reflect.set()`