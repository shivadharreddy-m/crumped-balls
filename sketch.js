var wallsprite,wall2,wall3;
var packageBody,ground;
var paperclass1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wallsprite=createSprite(420,650,200,20);
	wall2=createSprite(520,610,20,100);
	wall3=createSprite(320,610,20,100);
	wallsprite.shapeColor="red";
	wall2.shapeColor="green";
	wall3.shapeColor="green";

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.08, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 60,{isStatic:true} );
 	World.add(world, ground);

	 var ground_options={
		isStatic: true
	}
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

paperclass1 =new paperclass(700,320,70,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  background(0);
paperclass1.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x:85,y:85});
	}
}









/*packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)




	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 60,{isStatic:true} );
 	World.add(world, ground);

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}*/

