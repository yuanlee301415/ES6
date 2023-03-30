//基本用法
var fns=[];
for(let i=0;i<10;i++){
    fns[i]= function () {
        console.log(i);
    }
}
fns[4]();

//不存在变量提升
/*
* console.log(x);//Error
* let x;
* */

//暂时性死区（temporal dead zone，简称TDZ）
/*
* if(true){
*   //TDZ开始
*   tmp='abc';//Error
*   console.log(tmp)//Error
*
*   let tmp;
*   //TDZ结束
 *
 *   console.log(tmp);//undefined
 *
 *   tmp=123;
 *   console.log(tmp);123
 *
* }
* */

//只在当前块作用域不有效
{
    let x=3;
}
//console.log(x);//Error:ReferenceError: x is not defined


//使用let 在全局使用域下声明的变量不再全局变量
let name='not';
console.log('this.a:',this.a);//=>undefined
//typeof
/*
* typeof x;//Error
* let x;
* */


//不能重复声明
/*
* let a;
* var a;//Error
* */

/*
* let b;
* let b;//Error
* */

/*
* function f(arg){
*   let arg;//Error
* }
* */