var http = require('http');


 http.createServer((req, res)=>{
     res.write('Hello World');
     res.end();
     console.log('server running..')
 }).listen(8080)