const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var holder,axe,ground;
var stand1;
var axe;
var z1,z2,z3,z4,z5;
var z6,z7,z8,z9,z10;
var z11,z12;
var bg;

var slingShot;
var polygon_img;
function preload(){
  polygon_img = loadImage("e-thor.png");
  bg = loadImage("e-scary.jpg")

}
function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //ground = new Ground();
  stand1 = new Ground(390,350,800,10);
  //stand2 = new Ground(700,200,200,10);
 

  z1 = new Block(300,275,100,100);
  z2 = new Block(330,275,100,100);
  z3 = new Block(360,275,100,100);
  z4 = new Block(390,275,100,100);
  z5 = new Block(420,275,100,100);
  z6 = new Block(450,275,100,100);
  z7 = new Block(480,275,100,100);
  //level two
  z8 = new Block(330,235,100,100);
  z9 = new Block(360,235,100,100);
  z10 = new Block(390,235,100,100);
  
 

  axe = new Thor(50,200,100,100) 
  //World.add(world,axe);
  slingShot = new SlingShot(axe.body, {x:100, y: 200})

}
function draw() {
  background(bg); 
  Engine.update(engine);
                                           

  

  //ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  //fill("skyblue");
  z1.display();
  z2.display();
  z3.display();
  z4.display();
  z5.display();
  //z6.display();
  //z7.display();
  //fill("pink");
  z8.display();
  z9.display();
  z10.display();
  
  slingShot.display();
  axe.display();

  strokeWeight(2);
  stroke(15);
  fill("lightyellow");
  textSize(20);
  text("Drag the axe and Release it, to launch it towards the zombie", 100,30)
 
  //imageMode(CENTER) 
  //image(polygon_img ,axe.position.x,axe.position.y,40,40);
}

function mouseDragged(){ 
  Matter.Body.setPosition(axe.body,{x:mouseX,y:mouseY}); 
} 
function mouseReleased(){ 
  slingShot.fly(); 
}

function keyPressed()
{
  if(keyCode===32)
  {
    //Matter.Body.setPosition(this.body,{x:100,y:200});
     slingShot.attacher(axe.body)
  }
}