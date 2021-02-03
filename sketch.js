
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Constraint = Matter.Constraint;

	var boy1;
	var stone1;
	var ground;
	var slingShot;
	var tree1;
	var mango1;
	var mango2;
	var mango3;
	var mango3;
	var mango4;
	var mango5;

	function preload()
	{

	boy1 = loadImage("Plucking+mangoes/boy.png");
	
	}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	stone1 = new stone(198,510,50);
	ground = new Ground(800,650,1600,50);
	slingShot = new Slingshot(stone1.body,{x:198 , y:510});
	tree1 = new tree(1000,400,500,500);
	mango1 = new mango(1000,300,50);
	mango2 = new mango(900,300,50);
	mango3 = new mango(1100,250,50);
	mango4 = new mango(950,360,50);
	mango5 = new mango(1200,300,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boy1,150,440,250,250);

  c(mango1,stone1);
  c(mango2,stone1);
  c(mango3,stone1);
  c(mango4,stone1);
  c(mango5,stone1);


  if(stone1.x - mango1.x < stone1.width/2 + mango1.width/2){
	Matter.Body.setStatic(mango1.body,false);
  }
	
  
  slingShot.display(); 	
  tree1.display();
  ground.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();


}

function keyPressed() {
	if (keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x:235,y:420});
		slingShot.attach(stone1.body);
	}

}

function mouseDragged(){

        Matter.Body.setPosition(stone1.body ,{x:mouseX ,y:mouseY});
}


function mouseReleased() {

    slingShot.fly();

}
function c(lmango,lstone){
	//mangoBodyPosition = lmango.Body.Position;
	//stone1BodyPosition = lstone.Body.Position;

	var distance = dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y);
	if(distance < lmango.radius + lstone.radius ){
		
		Matter.Body.setStatic(lmango.body,false);

	}

}





