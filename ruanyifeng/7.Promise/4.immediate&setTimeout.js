setImmediate(()=>{
   console.log('immediate 1');
});

setTimeout(()=>{
    console.log('timeout 1');
});

process.nextTick(()=>{
   console.log('nextTick 1');
});