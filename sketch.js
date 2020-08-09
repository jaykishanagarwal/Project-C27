
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,roof1,roof2,roof3,roof4,roof5,roof6,roof7,roof8,roof9;
var bob, bob1, bob2, bob3, bob4, bob5, bob6, bob7, bob8, bob9;
var rope,rope1,rope2,rope3,rope4,rope5,rope6,rope7,rope8,rope9;

function preload()
{
	
}

function setup() {
	createCanvas(800, 1600);


	engine = Engine.create();
	world = engine.world;
	bob =new Bob(165,300,10);
	bob1 =new Bob(175,300,10);
	bob2 =new Bob(185,300,10);
	bob3 =new Bob(195,300,10);
	bob4 =new Bob(205,300,10);
	bob5 =new Bob(215,300,10);
	bob6 =new Bob(225,300,10);
	bob7 =new Bob(235,300,10);
	bob8 =new Bob(245,300,10);
	bob9 =new Bob(155,300,10);
	roof =new Roof(165,200,20,20);
	roof1 =new Roof(175,200,20,20);
	roof2 =new Roof(185,200,20,20);
	roof3 =new Roof(195,200,20,20);
	roof4 =new Roof(205,200,20,20);
	roof5 =new Roof(215,200,20,20);
	roof6 =new Roof(225,200,20,20);
	roof7 =new Roof(235,200,20,20);
	roof8 =new Roof(245,200,20,20);
	roof9 =new Roof(155,200,20,20);
	rope =new Rope(roof.body,bob.body);
	rope1 =new Rope(roof1.body,bob1.body);
	rope2 =new Rope(roof2.body,bob2.body);
	rope3 =new Rope(roof3.body,bob3.body);
	rope4 =new Rope(roof4.body,bob4.body);
	rope5 =new Rope(roof5.body,bob5.body);
	rope6 =new Rope(roof6.body,bob6.body);
	rope7 =new Rope(roof7.body,bob7.body);
	rope8 =new Rope(roof8.body,bob8.body);
	rope9 =new Rope(roof9.body,bob9.body);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0,255,0);
  strokeWeight(4);
  roof.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  roof6.display();
  roof7.display();
  roof8.display();
  roof9.display();
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  bob8.display();
  bob9.display();
  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  rope8.display();
  rope9.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
  
	  Matter.Body.applyForce(bob9.body,bob9.body.position,{x:150,y:-50});
	
	}
  }



