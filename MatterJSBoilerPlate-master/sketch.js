
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const bind = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  bob1 = new paper(240,350);
  bob2 = new paper(320,350);
  bob3 = new paper(400,350);
  bob4 = new paper(480,350);
  bob5 = new paper(560,350);

  roof = new Ground();

  string = new rope(roof.terra,bob1.pap,-160,0);
  string2 = new rope(roof.terra,bob2.pap,-80,0);
  string3 = new rope(roof.terra,bob3.pap,0,0);
  string4 = new rope(roof.terra,bob4.pap,80,0);
  string5 = new rope(roof.terra,bob5.pap,160,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string.dis();
  string2.dis();
  string3.dis();
  string4.dis();
  string5.dis();

  roof.earth();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
    Matter.Body.setStatic(bob1.pap,false);
    Matter.Body.applyForce(bob1.pap,bob1.pap.position,{x:-75,y:-45});
  }
  else{
    Matter.Body.setStatic(bob1.pap,true);
  }

}



