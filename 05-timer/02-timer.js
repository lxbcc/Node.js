#!/usr/bin/node
console.log('hello word');
const log=console.log;

log('start...');

const timeID = setInterval(loop, 500);
timeID.unref();

function loop() {
    log('I will loop forever!');

}

setTimeout(() => {
    log('Game Over!');

}, 5000);
