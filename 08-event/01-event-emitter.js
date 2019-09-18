const EventEmiter=require('events').EventEmiter;

var e=new EventEmiter();

setInterval(function(){
  e.emit("hello");
},1000);

setInterval(function(){
  e.emit('bye');
},5000);

e.on('hello',function(){
  console.log("hello");
})
e.on('bye',function(){
  console.log('goodbye');
  
})
