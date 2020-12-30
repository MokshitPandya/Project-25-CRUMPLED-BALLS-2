class Paper {
    
constructor(){
var options = {
    isStatic : false,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
}

this.x = 100;
this.y = 500;
this.radius = 50;
this.image = loadImage("sprites/crumpled_paper.png");
this.body = Bodies.circle(100,500,16.9,options);
World.add(world,this.body);

}

display(){
var pos = this.body.position;
var angle = this.body.angle;
push();

translate (pos.x,pos.y);
rotate (angle);
imageMode(CENTER);
fill("purple");
image(this.image,0,0,50,50);

pop ();

}

}