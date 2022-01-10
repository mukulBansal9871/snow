var Engine = Matter.Engine
var World = Matter.World
var Events = Matter.Events
var Bodies = Matter.Bodies;
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