const Dog= require('./02-dog');

var taidi=new Dog('taidi',4);

var zangao =new Dog('zangao',9);

taidi.on('bark',onbar);
zangao.on('bark',onbar);

function onbar(){
  console.log('%s barked!energy:%s',this.getName(),this.getEnergy());
}
