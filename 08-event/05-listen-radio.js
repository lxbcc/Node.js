const Radio=require('./03-radio');

const station ={
  frep:'106.7',
  name:'music radio'
};

var radio=new Radio(station);

radio.on('play',(station)=>{
  console.log('%s FM %s opened',station.name,station.frep);
});

radio.on('stop',(station=>{
  console.log('%s FM %s closed',station.name,station.frep);
}));
