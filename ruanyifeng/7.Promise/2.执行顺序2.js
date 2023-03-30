async function async1() {
    console.log("async1 start");//2
    await  async2();
    console.log("async1 end");//6
}
async  function async2() {
    console.log( 'async2');//3
}
console.log("script start");//1

setImmediate(()=>{
    console.log('setImmediate 1');
});

setTimeout(function () {
    console.log("settimeout");//8
},0);

async1();

process.nextTick(()=>{
    console.log('nextTick 1');//5.2
});

new Promise(function (resolve) {
    console.log("promise1");//4
    resolve();
}).then(function () {
    console.log("promise2");//7
});

console.log('script end');//5


/*
*
1. script start
2. async1 start
3. async2
4. promise1
5. script end
5.2 nextTick 1
6. async1 end
7. promise2
8. settimeout
9. setImmediate 1
*/