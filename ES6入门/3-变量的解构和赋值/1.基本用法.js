//本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。

var [head,...tail]=[1,2,3,4,5];
console.log(head);//1
console.log(tail);//[2,3,4,5]

var [x,y,...z]=[1];
console.log(x);//1
console.log(y);//undefined
console.log(z);//[]

//不完全解构
var [x,y]=[1];
console.log(x);//1
console.log(y);//undefined

var [a,[b],c]=[1,[2,3],4];
console.log(a);//1
console.log(b);//2
console.log(c);//4

//如果值不具备Iterator接口，则报错
//var [a]='abc';
//var [a]=123;
//var [a]=false;
//var [a]=null;
//var [a]=undefind;
//var [a]={};

//Set也可以用于解构
var [x,y,z]=new Set(['a','b','c']);
console.log(x);//a
console.log(y);//b
console.log(z);//c

//事实上，只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。
function* numbers(){
    var n=0;
    while(true){
        yield n;
        n++;
    }
}
var [a,b,c,d,e,f]=numbers();
console.log(a,b,c,d,e,f);