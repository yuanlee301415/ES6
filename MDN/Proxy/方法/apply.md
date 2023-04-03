# handler.apply()
> handler.apply() 方法用于拦截函数的调用。

## 语法
```js
proxy = new Proxy(target, {
    apply(target, thisArg, argArray) {
        
    }
})
```

## 参数
以下是传递给 apply 方法的参数，this 上下文绑定在 handler 对象上。

`target`
> 目标对象（函数）

`thisArg`
> 被调用时的上下文对象

`argArray`
> 被调用时的参数数组

## 拦截
该方法会拦截目标对象的以下操作：
* proxy()
* `Function.prototype.apply()`
* `Function.prototype.call()`
* `Reflect.apply()`