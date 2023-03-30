
    var o1={
        name:'A'
    };
    var o2={
        age:20
    }

    var {name:userName}=o1;
    var {age:userAge}=o2;
    console.log(userName);
    console.log(userAge);

    //变量与属性名相同，可以省略属性名
    var {name,age}={name:'Tom',age:30};
    console.log(name,age);

    //嵌套
    var {arrayProp:[first,{name}]}={
        arrayProp:[
            'First',
            {name:'Tom'}
        ]
    }
    console.log(first);
    console.log(name);

    var {safe}={safe:'SAFE 1'};
    console.log(safe);

    //如果省略关键字会报错
    ({safe2}={safe2:'SAFE 2'});
    console.log(safe2);

