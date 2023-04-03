# Proxy() 构造器
> Proxy() 构造器用来创建 Proxy 对象。

# 语法
```js
const proxy = new Proxy(target, handler)
```
## 参数
`targer`
> 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。

`handler`
> 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。

# 描述
> 我们可以使用 Proxy() 构造器来创建一个新的 Proxy 对象。构造器接收两个主要参数：
* target 被代理的对象
* handler 被代理的对象上的自定义行为
> 一个空的 handler 参数将会创建一个与被代理对象行为几乎完全相同的代理对象。通过在 handler 对象上定义一组处理函数，你可以自定义被代理对象的一些特定行为。

# 处理函数
处理函数有时候也被成为“劫持”（traps），这是由于它们会对底层被代理对象的调用进行劫持。
* handler.apply() 函数调用劫持
* handler.construct() `new` 操作符劫持
* handler.defineProperty() `Object.defineProperty` 调用劫持
* handler.deleteProperty() `delete` 操作符劫持
* handler.get() 获取属性劫持
* handler.getOwnPropertyDescriptor() `Object.getOwnPropertyDescriptor` 调用劫持
* handler.getPrototypeOf() `Object.getPrototypeOf` 调用劫持
* handler.has() `in` 操作符劫持
* handler.isExtensible() `Object.isExtensible` 调用劫持
* handler.ownKeys() `Object.getOwnPropertyNames` 和 `Object.getOwnPropertySymbols` 调用劫持
* handler.preventExtensions() `Object.preventExtensions` 调用劫持
* handler.set() 读取属性劫持
* handler.setPropertyOf() `Object.setPropertyOf` 调用劫持
