    function more(){
        return [1,2];
    }

    var [a,b]=more();
    console.log(a,b);

    function m2(){
        return {
            name:'Tom',
            age:20
        }
    }
    var {name:userName,age:userAge}=m2();
    console.log(userName,userAge);

    var {name,age}=m2();
    console.log(name,age);