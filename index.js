const http = require('http');
// const service = require ('./service');
// const sum = require('./controller/sum.js')       //./folder namen/file nam


const port =3000;            //he process for outside world to use we need port port learn

// const server = http.createServer((req, res))b=> {                       //(function call )
// }}
// const server = http.createServer(function(req, res))b=> {
// }}    //(same as above)

const server = http.createServer((req, res)=> { 
    
    if(req.url == '/'){
          res.write('Server responded');
          res.end();
    }
    
}).listen(port);