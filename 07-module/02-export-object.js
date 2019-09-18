var circle={
  'area':function(radius){
    return Math.PI*radius*radius; 
  },
  'circum':function(radius){
    return Math.PI*2*radius;
  },
  'diamate':function(radius){
    return 2*radius;
  }
};
console.dir(module);
module.exports=circle;
