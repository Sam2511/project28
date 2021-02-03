class tree {
    constructor(x,y) {
    var options = {isStatic: true};
    this.body = Bodies.rectangle(x,y,1,1,options);
    this.width = 500;
    this.height = 500;
    World.add(world, this.body);
    this.image = loadImage("Plucking+mangoes/tree.png")
    }
    display(){
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);




    }




    }