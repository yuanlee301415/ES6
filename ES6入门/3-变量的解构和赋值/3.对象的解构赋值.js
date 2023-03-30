var {name,age}={name:'Tom',age:20};
console.log(name,age);

var {name:n,age:a}={name:'Tom',age:20};
console.log(n,a);

//嵌套
//--p和w 是模式，不会被赋值
var obj = {
    p:[
        'hi',
        {w:'word'}
    ]
};
var {p:[x,{w:y}]}=obj;
console.log(x,y);//hi word

var obj={
    node:{
        start:{
            last:{
                line:1,
                column:2
            }
        }
    }
};

//--只有l和c是变量
var {node:{start:{last:{line:l,column:c}}}}=obj;
console.log(l,c);

//默认值
var {name='Tom',age=20}={};
console.log(name,age);//Tom 20


//解构赋值一个已经存在的变量时，会将{}当作块级作用域，从而报错
var x;
//{x}={x:'x'};//Error
({x}={x:'x'});
console.log(x);

//允许模式中不放置任何变量名，下面的表达式虽然没有意义，但是是合法的
var []=[];
var {}={};
