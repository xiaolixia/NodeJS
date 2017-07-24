'use strict'
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

var server = http.createServer(function(req,res){
    
    var str='';
    var i=0;
    
    req.on('data',function(data){
        str+=data;
        console.log(`第${i++}次收到数据`);
    });
    req.on('end',function(){
        var POST=querystring.parse(str);
        console.log(POST);
        res.write('aaa');
        res.end();
    });
});
server.listen(3000);