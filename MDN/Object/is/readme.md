# Object.is()
> Object.is() 方法判断两个值是否为同一个值。

# 语法
```js
Object.is(value1, value2)
```
## 参数
`value1`
> 被比较的第一个值

`value2`
> 被比较的第二个值

## 返回值
> Boolean 值，表示两个值是否相等

# 描述
> Object.is() 方法判断两个值是否为同一个值，如果满足以下任意条件则两个值相等：
* 都是 undefined
* 都是 null
* 都是 true 或 false
* 都是相同字符串
* 都是同一个引用的对象
* 都是数字，且：
  * 都是 +0
  * 都是 -0
  * 都是 NaN
  * 都是同一个值，非零且都不是 NaN
  