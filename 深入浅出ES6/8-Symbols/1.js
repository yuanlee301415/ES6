    //调用 Symbol()创建一个新的 symbol，它的值与其它任何值皆不相等。
    var s1=Symbol();
    var s2=Symbol();
    console.log('==:',s1==s2);

    //Symbol中的参数字符串，仅仅只是一个描述
    var mySybol=Symbol('This is my symbol(Just a description)');
    console.info('描述：');
    console.log(mySybol);//Symbol(This is my symbol(Just a description))
    console.log(mySybol.toString());//Symbol(This is my symbol(Just a description))


    var obj={},s=Symbol();
    obj[s]='symbol';
    console.log(obj);//=>Chrome中有Symbol属性，Nodejs6中没有实现，为空对象
