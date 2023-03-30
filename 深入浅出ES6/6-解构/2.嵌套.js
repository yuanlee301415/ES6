    var [a,[[b],c]]=[1,[[2],3]];
    console.log(a);
    console.log(b);
    console.log(c);


    var [a,[b,c]]=[1,[[2],3]];
    console.log(a);
    console.log(b);//[2]
    console.log(c);

   //被解构元素要包含解构表达式，否则报错，例如：[b]没有对应的解构表达式
    var [a,[[b],c]]=[1,[2,3]];
    console.log(a);
    console.log(b);
    console.log(c);
