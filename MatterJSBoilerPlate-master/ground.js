class Ground{
    constructor(){
      var op ={
         isStatic:true
      }
      
      this.terra = Bodies.rectangle(400,50,400,10,op);
      World.add(world,this.terra);
    }
    earth(){
      rectMode(CENTER);
      fill("brown");
      rect(400,50,400,10);
    }
}
