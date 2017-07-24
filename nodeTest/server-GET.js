'use strict'
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

/*
var server = http.createServer(function(req,res){
    var file_name='./www'+req.url;
    console.log(req.url);
    fs.readFile(file_name,function(err,data){
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    });
});
server.listen(3000);*/



// var server = http.createServer(function(req,res){
//     var GET={};
//     if(req.url.indexOf('?')!=-1){
//         var arr = req.url.split('?');
//         var url=arr[0];
//         /*二、querysring
//         GET=querystring.parse(arr[1]);

//         /* 一、自己切http
//         var arr2=arr[1].split('&');
//         for(let i=0;i<arr2.length;i++){
//             var arr3=arr2[i].split('=');
//             GET[arr3[0]]=arr3[1];
//         }
//         */
//     }else{
//         var url = req.url;
//     }
    
//     console.log(url,GET);
//     res.write('aaa');
//     res.end();
// });
// server.listen(3000);


   /* 三、url */
var server = http.createServer(function(req,res){
    var obj=urlLib.parse(req.url,true);

    var url=obj.pathname;
    var GET=obj.query;
    console.log(url,GET);
    res.write('aaa');
    res.end();
});
server.listen(3000);