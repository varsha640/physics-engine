const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies                                                                                                                                                                                                                    


var universe,earth;
var human,ball;

function setup() { 
  createCanvas(400,400);
  universe = Engine.create(); // universe.world
  earth  = universe.world;

  var options = {
  isStatic : true
  }

 human = Bodies.rectangle(200,380,400,50,options);
 World.add(earth,human)

 
var options={
  restitution:0.5
}
ball= Bodies.circle(200,200,40,options)
World.add(earth,ball)
console.log(human.position.y)
}

function draw() {
  Engine.update(universe)
  background(0); 
  
  rectMode(CENTER)
  rect(human.position.x,human.position.y,400,50)
  
ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40)
  drawSprites();
}