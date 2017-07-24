'use strict'
var http = require('http');
var s=http.createServer(function(req,res){
    console.log(req);
    switch(req.url){
        case '/1.html':
            res.write("111");
            break;
        case '/2.html':
            res.write("222");
            break;
        default:
            res.write("404");
            break;
    }
    res.end();
});
s.listen(3000);