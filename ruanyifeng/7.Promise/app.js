const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    console.log(req.url);
    if('/'==req.url){
        res.writeHeader('content-type','text/json');
        fs.createReadStream('./1.ajax.html').pipe(res);
    }else if('/await'==req.url){
        res.end(new Date().toLocaleString());
    }else if('/data'){
        res.end(JSON.stringify({
            "code":200,
            "data":[
                {"id":1}
            ]
        }));
    }else{
        res.end('');
    }

});

server.listen(3000,()=>{
    console.log('Promise port 3000',new Date().toLocaleString());
});