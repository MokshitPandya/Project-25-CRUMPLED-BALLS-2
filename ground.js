class Ground {
    constructor(){
    
    var options = {
    isStatic : true
    }

    this.x = 400;
    this.y = 622;
    this.width = 1053;
    this.height = 236;
    this.image = loadImage("sprites/ground.png");
    this.body = Bodies.rectangle(400,727,1053,236,options)
    World.add(world,this.body)
    
    }
    display(){
    imageMode(CENTER);
    fill ("grey")
    image(this.image,400, 622, 1053, 236);
    
    }
    
    }