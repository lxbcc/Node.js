const fs=require('fs');
      log=console.log;
var buf =fs.readFileSync('./nodejs-logo.bmp');
log('width:',buf.readInt32LE(0x12));
log('height:',buf.readInt32LE(0X16));
log('deepth:',buf.readInt32LE(0x1c));
