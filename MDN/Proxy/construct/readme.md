# handler.construct()
> handler.construct() 方法用于拦截 new 操作符。为了使 new 操作符在生成的 Proxy 对象上生效，用于初始化代理的目标对象自身必须具有 [[Construct]] 内部方法（即 new target 必须是有效的）。

## 语法
```js
proxy = new Proxy(target, {
    construct(target, argArray, newTarget) {
    }
})
```
## 参数
下面的参数将会传递给 construct 方法，this 绑定在 handler 上。
`target`
> 目标函数

`argArray`
> constructor 的参数列表

`newTarget`
> 最初被调用的构造函数

## 返回值
> construct 必须返回一个对象

## 拦截
该拦截器可以拦截以下操作：
* `new proxy()`
* `Reflect.construct()`