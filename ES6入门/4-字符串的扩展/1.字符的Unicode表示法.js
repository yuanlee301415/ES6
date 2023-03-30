//1.字符的Unicode表示法
console.log('\z' === 'z');  // true
console.log('\172' === 'z'); // true
console.log('\x7A' === 'z'); // true
console.log('\u007A' === 'z'); // true
console.log('\u{7A}' === 'z'); // true

//2.codePointAt()

//7.includes(),startsWith(),endsWith()
console.info('----7.includes(),startsWith(),endsWith():');
var s='Hello world!'
console.log(s.includes(' w'));
console.log(s.startsWith('H'));
console.log(s.startsWith('e',1));
console.log(s.endsWith('!'));//true
console.log(s.endsWith('e',2));//true

//8.repeat(n):重复字符n次
console.info('-----8.repeat(n):重复字符n次:');
console.log('x'.repeat(3));//xxx
console.log('x'.repeat(0));//''
console.log('x'.repeat());//''
console.log('x'.repeat(2.9));//'xx'

//--如果参数是负数或Infinity，报错
//console.log('x'.repeat(-2));//Error
//console.log('x'.repeat(2/0));//Error

//--NaN视为0
console.log('x'.repeat(NaN));//''

//--如果参数为字符串，则会转换为数字
console.log('x'.repeat('3'));//xxx
console.log('x'.repeat('a'));//''

//9.padStart(),padEnd():ES7字符串补全方法

//10.模板字符串
//--多行
console.log(`1
    2
3
`);
//--嵌入变量
var user={
    name:'Tom',
    age:20
}
console.log(`I am ${user.name},I am ${user.age} years old.`);

//--大括号内可以放入任意JS表达式
var m=10,n=20;
console.log(`Sum:${m+n}`);

var fn= function () {
    return 'I am a function.'
};
console.log(`foo ${fn()}`);

//--如果大括号内不是字符串，将默认调用toString()方法
console.log(`${{name:'Tom'}}`);

//--字符串原样输出
console.log(`${'hello'}`);

//--嵌套
var tmpl=function(users){
    return `
    <table>
    ${users.map(function(user){
        return `
        <tr>
            <td>${user.first}</td>
            <td>${user.last}</td>
        </tr>
        `
    }).join('')}
    </table>
    `
};
console.log(tmpl([
    {first:'F1',last:'L1'},
    {first:'F2',last:'L2'},
    {first:'F3',last:'L3'}
]));



//12.模板标签
console.log`Hello xx`;//['Hello']

var a=10,b=20;
tag`sum:${a+b},chen:${a*b},Over.${'string'}`;
//--第一个参数为：没有变量替换的字符串，第二个及以后的为变量替换后的值
function tag(strArray,...values){
    console.log(strArray,values);//[ 'sum:', ',chen:', ',Over.', '' ] [ 30, 200, 'string' ]
}



