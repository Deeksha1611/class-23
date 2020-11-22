const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld, ground;
var box1,box2;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create(); //.world
  myworld = myengine.world;

  ground1=new GROUND(200,390,400,20);
  box1 = new BOX(200,300,50,50);
  box2 = new BOX(240,100,50,100);
  
}

function draw() {
  background("lightgreen"); 
  
  Engine.update(myengine);
  
  ground1.display();
  box1.display();
  box2.display();
  
}