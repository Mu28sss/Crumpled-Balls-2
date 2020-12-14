var engine,world
var paper,ground,box_bottom,box_left,box_right,bottom_img,block
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
bottom_img = loadImage("dustbingreen.png")
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,650,40,40);

	ground = new Ground(400,700)
	Engine.run(engine);

	box_left = new Block(530,500,20,200)
	box_right = new Block(765,500,20,350)
  
	box_bottom = createSprite(650,510,200,20)
	box_bottom.shapeColor = color(255,0,0)
	box_bottom.addImage(bottom_img)
	

}


function draw() {
  rectMode(CENTER);
  background("white");
  paper.display();
  ground.display();
  Keypressed();
  drawSprites();
 
}

function Keypressed()
{
	if (keyCode === UP_ARROW)
	{
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-10});		
	}
}