const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies;
var engine,world;
var snow=[]
function preload(){
  bgimg=loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bgimg); 
if(frameCount%5==0){
snow.push(new Snow(random(20,780),random(20,380)))
}
for(var i=0;i<snow.length;i++){
  snow[i].display();
}
  Engine.update(engine);
}
