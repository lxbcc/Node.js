#!/usr/bin/node
console.log('hello word');
const log=console.log;

const user={
  name:'罗晓勃',
  age:41,
  qq:'1667899744'
};

log('name:%s',user.name);
log('age: %d', user.age);
log('JSON: %j', user);


log('qq:%s',user.qq);
log('qq:',user.qq);
log('qq:'+user.qq);
log(`qq:${user.qq}`);

console.log('Error!something wrong');

