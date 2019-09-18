#!/usr/bin/node
console.log('hello word');
const log=console.log;

const Write=require('stream').Writable;

function GreenStream(){
  Write.call(this);
}
GreenStream.prototype = Writable.prototype;

GreenStream.prototype._write = (chunk, encoding, callback) => {
    process.stdout.write('\033[1;32m' + chunk + '\033[1;37m');
      callback();
};

module.exports=GreenStream;
}
