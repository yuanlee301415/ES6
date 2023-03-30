//没有不定参数时，是一个空数组
function foo(a,b,...c){
    console.log('arg 1',a);
    console.log('arg 2',b);
    console.log('不定参数：',c);
}

foo('A','B');
foo('A','B','C','D');