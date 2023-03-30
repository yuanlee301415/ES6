//Array.from()
//基本用法：
console.log(Array.from({
    0:0,
    1:1,
    2:2,
    length:3
}));

//没有length属性，返回空数组
console.log(Array.from({
    0:0,
    1:1,
    2:2
}));

console.log(Array.from({
    0:0,
    1:1,
    2:2,
    length:5
}));

console.log(Array.from({
    0:0,
    1:1,
    2:2,
    length:1
}));

console.log(Array.from({
    length:5
}));


console.log(Array.from({
    a:'A',
    b:'B',
    c:'C',
    length:3
}));


//只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组
console.log(Array.from('abc'));

console.log(Array.from(
    new Set(['a','b','c'])
));
