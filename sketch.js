
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj,groundObj1
var leftSide;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20);
	groundObj1= new Ground(width/2 - 20,600,20,120);
	leftSide = new Ground(600,600,20,120);

	//Create the Bodies Here.
	var ball_options={
		restitution: 0.5,
		friction: 0,
	}

	ball = Bodies.circle(200,50,20,ball_options);
	World.add(world,ball);
	
	
	
	ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  leftSide.show();
  groundObj.show();
  groundObj1.show();
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0.03});
	}
}



