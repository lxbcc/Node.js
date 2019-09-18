/*const p=require('./02-export-var');
console.dir(module);
console.log(p);*/


/*const circle=require('./02-export-function');
console.log('r=10,circle area:%d',circle(10).area());
console.log('r=10,circum:%d',circle(10).circum());*/


const circle =require('./02-export-object');
console.log('diamate:',circle.diamate(10));
console.log('circum',circle.circum(10));
console.log('area',circle.area(10));


