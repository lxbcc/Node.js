#!/usr/bin/node
console.log('hello word');
const log=console.log;

const read=require('stream').Readable;

var r=new Read();

r.push('hello\n');
r.push('world!');
r.push(null);

r.pipe(process.stdout);
