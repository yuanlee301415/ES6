
function add(payload){
    let count=0;
    count+=payload;
    return count;
}

async function getPayload(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

(async ()=>{
    let ret=add(await getPayload()*10);
    console.log(ret);
})();