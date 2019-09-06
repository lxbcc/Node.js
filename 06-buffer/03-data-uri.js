#!/usr/bin/node
const fs=require('fs'),
      log=console.log;

var data=fs.readFileSync('./qr-code.jpg').toString('base64');
log(data);
