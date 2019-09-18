#!/usr/binde
const Readable = require('stream').Readable;

var MyReadable = function() {
    Readable.call(this);

};

MyReadable.prototype = Readable.prototype;
var c='a'.charCodeAt(0);


MyReadable.prototype._read = function() {
    this.push(String.fromCharCode(c++));
      if(c>'z'.charCodeAt(0)) this.push(null);
};
module.exports=MyReadable;


