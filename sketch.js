var paper;
var bottom_rectangle, left_rectangle, right_rectangle;
var bottom_rectangle_body, left_rectangle_body, right_rectangle_body;
var ground;
var dustbin, dustbin_image;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    dustbin_image = loadImage("sprites/green_dustbin.png")
}

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

    paper = new Paper();

    bottom_rectangle = createSprite(636,603,144,14);
    bottom_rectangle.shapeColor = "white";
    bottom_rectangle.visible = false;

    left_rectangle = createSprite(566,519,6,182);
    left_rectangle.shapeColor = "white";
    left_rectangle.visible = false;

    right_rectangle = createSprite(704,519,6,182);
    right_rectangle.shapeColor = "white";
    right_rectangle.visible = false;

    bottom_rectangle_body = Bodies.rectangle(636,603,144,14,{isStatic : true});
    World.add(world,bottom_rectangle_body);

    left_rectangle_body = Bodies.rectangle(566,519,6,182,{isStatic : true});
    World.add(world,left_rectangle_body);

    right_rectangle_body = Bodies.rectangle(704,519,6,182,{isStatic : true});
    World.add(world,right_rectangle_body);

    //bottom_rectangle = new Rectangle(636,603,144,14);
	//left_rectangle = new Rectangle(562,519,6,182);
    //right_rectangle = new Rectangle(708,519,6,182);
   
    dustbin = createSprite(635,518,20,20);
    dustbin.addImage(dustbin_image);
    dustbin.scale = 0.55;

    ground = new Ground();
    
    Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  paper.display();

  //bottom_rectangle.display(); 
  //left_rectangle.display(); 
  //right_rectangle.display();

  ground.display();

  keyPressed();

  drawSprites();

}

function keyPressed(){
	force = Matter.Body.applyForce;
	if(keyDown("up")){
		force(paper.body,paper.body.position,{x:5,y:-10});
    }
}

