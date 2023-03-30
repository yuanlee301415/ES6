//let
function f1(){
    let n=5;
    if(true){
        let n=10;
    }
    console.log(n);//=>5
}
f1();

//块级作用域（替代IIFE）
function mockData(){
    var data={
        time:Date.now()
    };
    {//代替IIFE
        let list=[];
        for(let i=0;i<10;i++){
            list.push(i);
        }
        data.list=list;
    }
    return data;
}
console.log(mockData());

//块级作用域嵌套
{{{{{{let n=20}}}}}}
{{{{
    let n=1;
    {{{
        let n=2;
    }}}
    console.log(n);//=>1
}}}}

