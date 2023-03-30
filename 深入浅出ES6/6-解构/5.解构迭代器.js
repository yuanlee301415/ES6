

    function* one(){
        return 1;
    }
    console.info('one:');
    var [first,second,third,fourth,fifth,sixth]=one();
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);
    console.log(fifth);
    console.log(sixth);

    function* to(){
        var a= 0;
        while(true){
            yield a;
            a++;
        }
    }
    console.info('to:');
    var [first,second,third,fourth,fifth,sixth]=to();
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);
    console.log(fifth);
    console.log(sixth);

    console.info('fibs:');
    function* fibs(){
        var a=0,b=1;
        while(true){
            yield a;
            [a,b]=[b,a+b];
        }

    }

    var [first,second,third,fourth,fifth,sixth]=fibs();
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);
    console.log(fifth);
    console.log(sixth);
