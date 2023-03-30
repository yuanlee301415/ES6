var [x,y=2]=[1];
console.log(x,y);//1 2

var [a=1]=[0];
console.log(a);//0

//使用===判断，如果值不全等于undefined，则默认值不会生效
var [x=1]=[undefined];
console.log(x)//1

var [x=1,y=2,z=3]=[,,];
console.log(x)//1
console.log(y)//2
console.log(z)//3

//默认值可以引用解构值的其它变量，但此变量必须已经声明
var [x=1,y=x,z=y]=[];
console.log(x,y,z);//1 1 1
//var [x=1,y=z,z=2]=[];//Error:z在引用之后才声明