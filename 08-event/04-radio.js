const EventEmiter=require('events').EventEmiter;
      util       =require('util');

 function Radio(station){
   
   var self=this;

   for(var m in EventEmiter.prototype){
     this[m]=EventEmiter.prototype[m];
   }
   setTimeout(()=>{
     self.emit('play',station);
   },0);

   setTimeout(()=>{
     that.emit('stop',station);
   },5000);
 }

module.exports=Radio;

