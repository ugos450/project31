const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var umbrella
function preload(){
  man_img=loadImage("man.jpg")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  umbrella = new Umbrella(900,300);
  
}
function draw() {
  background(56,44,44); 
 
  umbrella.display();
  strokeWeight(2);
  stroke(15);
  imageMode(CENTER)
  image(man_img ,umbrella.position.x,umbrella.position.y,100,100);

  
}
