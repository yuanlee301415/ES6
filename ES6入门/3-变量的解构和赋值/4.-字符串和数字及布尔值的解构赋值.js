//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象
var [a,b,c]='abc';
console.log(a,b,c);

//解构赋值字符串的length属性
var {length:L}='abc';
console.log(L);

//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象
var {toString:s}=123;
console.log(s===Number.prototype.toString);//true

//布尔
var {toString:s}=true;
console.log(s===Boolean.prototype.toString);

//解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
