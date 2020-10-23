class paper{
    constructor(x,y){

      var op={
        restitution:0.3,
        isStatic:true,
        friction:1,
        density:1.2
      }
      this.pap = Bodies.circle(x,y,80,op);
      
      World.add(world,this.pap);
    }
    display(){
        push();
        translate(this.pap.position.x,this.pap.position.y);
        ellipse(0,0,80);
        pop();
    }
}