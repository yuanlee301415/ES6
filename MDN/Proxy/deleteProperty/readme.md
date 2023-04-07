# handler.deleteProperty()
> handler.deleteProperty() 方法用于拦截对对象属性的 delete 操作。

# 语法
```js
var p = new Proxy(target, {
  deleteProperty: function(target, property) {
  }
});
```

## 参数
> deleteProperty 方法将会接受以下参数。this 被绑定在 handler 上。

`target`
> 目标对象。

`property`
> 待删除的属性名。

## 返回值
> deleteProperty 必须返回一个 Boolean 类型的值，表示了该属性是否被成功删除。

## 拦截
该方法会拦截以下操作：
* 删除属性：delete proxy[foo] 和 delete proxy.foo
* Reflect.deleteProperty() 