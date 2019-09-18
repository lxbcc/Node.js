function circle(radius){
  function area(){
    return Math.PI*radius*radius;
  }
  function circum(){
    return 2*Math.PI*radius;
  }
  return {
    area:area,
    circum:circum
  }

}
console.dir(module);
