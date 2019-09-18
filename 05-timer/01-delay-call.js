#!/usr/bin/node
console.log('hello word');
const log=console.log;
function Bomb() {
    this.message = 'Bomb';

}

Bomb.prototype.explode = function() {
    log(this.message);

};

var bomb = new Bomb();

var timeID = setTimeout(bomb.explode.bind(bomb), 2000);

clearTimeout(timeID);
