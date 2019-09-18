#!/usr/bin/node

const http=require('http'),
      fs=require('fs');

http.createServer((req,res)=>{
  if(rea.url==='/favicon.ico')return;
  var fileName=__dirname+req.url;
  console.log(fileName);
  fs.createReadStream(fileName).
  res.end(fs.readFileSync(fileName).toString('utf-8'));
}).listen(8080);

