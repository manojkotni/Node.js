var http = require('http');


 http.createServer((req, res)=>{
     res.write(req.url);
     res.end();
     console.log('server running..')
 }).listen(8080) 