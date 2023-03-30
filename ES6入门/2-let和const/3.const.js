//const：声明一个只读的常量，一旦声明，就不能改变

const a=3;
//a=4 //Error

//const 声明常量时必须赋值
//const b;//Error

//const的作用域：和let一样，只在当前块级作用域内有效
{
    const c=3;
}
//console.log(c);//Error:ReferenceError: c is not defined

//const 声明一个复合类型的常量，只保证此常量的引用地址不变，并不保证此常量的数据不变
const obj={};
obj.name='const';
console.log(obj);//=>{ name: 'const' }
//obj={};//Error(地址发生改变)

//使用const 在全局使用域下声明的变量不再全局变量
const name='not';
console.log('this.a:',this.a);//=>undefined

