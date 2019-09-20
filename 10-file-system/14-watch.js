

const fs  = require('fs'),
      dst = process.argv[2];
fs.watch(dst,function(evt,file){
  console.log("%s happen with file:%s",evt,file);
});
