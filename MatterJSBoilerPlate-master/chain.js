class rope{
    constructor(bodyA,bodyB,oA,oB){
      
      this.oA = oA;
      this.oB = oB;

      var option={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.oA,y:this.oB},
        lenght:50
    }
    this.chain = bind.create(option);
    World.add(world,this.chain);
  }
  dis(){
      var posA = this.chain.bodyA.position;
      var posB = this.chain.bodyB.position;
      var posx = posA.x + this.oA;
      var posy = posA.y + this.oB;

      line(posx,posy,posB.x,posB.y);
  }
}