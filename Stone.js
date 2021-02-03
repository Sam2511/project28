    class stone {
    constructor(x,y,r){
    
        var options = {isStatic: false, restitution: 0.3, friction: 0.5, density: 1}
        this.body = Matter.Bodies.circle(x, y, r/3 ,options); 
        this.radius = r;
        

        World.add(world, this.body);
        this.image = loadImage("Plucking+mangoes/stone.png");
        }
        display(){
            imageMode(CENTER);
            image(this.image,this.body.position.x, this.body.position.y, this.radius, this.radius);
        }


}