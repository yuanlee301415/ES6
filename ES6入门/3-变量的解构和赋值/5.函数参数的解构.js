function f1([a,b,c]){
    return a+b+c;
}

console.log(f1([1,2,3]));

//默认值
function f2([a=10,b=20,c=30]){
    return a+b+c;
}
console.log(f2([]));

//参数为一个对象，为【对象的属性】设置默认值
function f3({x=10,y=20}){
    return x+y;
}
console.log('f3:',f3({}));
console.log('f3:',f3({x:1}));
console.log('f3:',f3({y:2}));

//参数为一个对象，为【整个参数对象】设置默认值
function f4({x='a',y='b'}={x:10,y:20}){
    return x+y;
}
console.log('f4:',f4());//没有参数对象，使用设置的默认值参数对象
console.log('f4:',f4({}));//有参数对象，但是没有任何值，解构赋值默认参数的各个值
console.log('f4:',f4({x:1}));//传入参数对象的部分参数对象的部分值，没传入的使用默认值
console.log('f4:',f4({y:2}));//传入参数对象的部分参数对象的部分值，没传入的使用默认值

function f5(options={time:10}){
    console.log('f5>options:',options);
}
f5();
f5({});
f5({time:2000});