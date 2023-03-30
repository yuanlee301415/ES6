//1.交换变量的值
var a=1,b=2;
[a,b]=[b,a];
console.log(a,b);

//2.从函数返回中返回多个值
function f(){
    return [1,2,3];
}
var [a,b,c]=f();
console.log(a,b,c);//1 2 3

var d=f();
console.log(d);//[1,2,3]


//3.函数参数的定义
//解构赋值可以方便地将一组参数与变量名对应起来
function f2([id,name,age]){
    console.log(id,name,age);
}
f2(['ID2200','Tom',20]);

//4.提取JSON数据
var {name,age}={
    name:'Tom',
    age:20
};
console.log(name,age);


//5.函数参数的默认值
function f3(url,{
    type='GET',
    cache=true,
    success=function(){
        console.log('de succ');
    }
}){

   console.log(url,type,cache);
    success();
}
f3('test.com',{
    type:'POST',
    cache:false,
    success: function () {
        console.log('succ');
    }
});

//6.遍历Map结构
var map=new Map();
map.set('a','A');
map.set('b','B');
map.set('c','c');
//获取键值
for(var [k,v] of map){
    console.log(k,v);
}

//获取键
for(var [k] of map){
    console.log(k);
}

//获取值
for(var [,v] of map){
    console.log(v);
}


//7.输入模块的指定方法
//const { SourceMapConsumer, SourceNode } = require("source-map");