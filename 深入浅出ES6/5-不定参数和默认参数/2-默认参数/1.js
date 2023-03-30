//使用undefined跳过部分默认值
function f(name,sex='male',age=20){
    console.log(name,sex,age);
}
f('Tom');
f('Tom',undefined,30);


//使用表达式使用默认值
function f2(name,sex='male',age=sex=='male'?20:sex=='famale'?'18':100){
    console.log(name,sex,age);
}
f2('Tom');
f2('Tom',undefined,30);
f2('Lili','famale');
f2('ABC','X');