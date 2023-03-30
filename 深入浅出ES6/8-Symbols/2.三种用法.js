    //方法1：
    //调用Symbol:每次都会返回一个新的唯一的symbol(即使描述的一样，返回值也不一样)
    var s1=Symbol('mySymbol');
    console.log(s1);

    var s2=Symbol('mySymbol');
    console.log(s2);

    var s3=Symbol('mySymbol');
    console.log(s3);
    console.log(s1==s2);//=>false

    //方法：
    // Symbol.for(描述)：返回已经注册的同一个symbol
    console.warn('for');
    var cat=Symbol('Cat');
    console.log(cat);
    var cat1=Symbol.for('Cat');
    var cat2=Symbol.for('Cat');
    console.log(cat1);
    console.log(cat == cat1);//定义返回值与通过 for 获取的值不相同
    console.log(cat1 == cat2);

    //方法3：
    //使用标准定义的 symbol
    var s3=Symbol.iterator;
    console.log(s3);
