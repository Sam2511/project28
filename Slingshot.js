class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA) {  //only if bodyA is not nul
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        //bird gets detached from the slingshot
        this.chain.bodyA  = null;
    
    }

    attach(body){
    this.chain.bodyA = body;    




    }












    
}