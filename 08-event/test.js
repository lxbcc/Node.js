function A(){
  this.a1=10;
  this.a2=20;

  this.a3=function(){
    console.log('a1=%d,a2=%d',this.a1,this.a2);
  }
}
