class mango {
    constructor(x, y, r){

        var options = {isStatic: true, restitution: 0.3, friction: 0.5, density: 1}
        this.body = Matter.Bodies.circle(x, y, r/2 ,options); 
        this.radius = r;
        

        World.add(world, this.body);
        this.image = loadImage("Plucking+mangoes/mango.png");
        }
        display(){
            imageMode(CENTER);
            image(this.image,this.body.position.x, this.body.position.y, this.radius, this.radius);
        }


}