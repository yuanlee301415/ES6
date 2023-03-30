

(async function(){
    for(let i=0;i<5;i++){
        console.log('Task Id:',i);
        await sleep(i);
        console.log('Task 1');
        await sleep(i);
        console.log('Task 2');
        await sleep(i);
        console.log('Task 3');
        console.log('res:',await sleep(i));
    }
    console.log('Done');

})();

function sleep(s) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(new Date().toLocaleString());
        },500*s);
    });
}