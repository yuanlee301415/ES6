# handler.get()
> handler.get() 方法用于拦截对象的读取属性操作

# 语法
```js
p = new Proxy(target, {
    get(target, property, receiver) {
        
    }
})
```

# 参数
以下是传递给 get 方法的参数，this 上下文绑定在handler 对象上。

`target`
> 目标对象

`property` 
> 被读取的属性名

`receiver`
> Proxy 或者继承 Proxy 的对象

# 返回值
> get() 方法可以返回任何值

# 拦截
* 访问属性
* 访问原型链上的属性
* `Reflect.get()`

# 约束
* 如果要访问的目标属性是不可写以及不可配置的，则返回的值必须与该目标属性的值相同。
* 如果要访问的目标属性没有配置访问方法，即 get 方法是 undefined 的，则返回值必须为 undefined。
