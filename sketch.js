const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var b1,b2;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  

  //creating the class 
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 

  // creating the properties for the ball
  var options={
    restitution : 0.75
  
  }
  // creating the ball and adding it to the World

  ball = Bodies.circle(200,200,25,options)
  World.add(world,ball)
//creatin the button1
  b1 = createImg('right.png')
  b1.position(200,30)
  b1.size(50,50)
  b1.mouseClicked(h_force)
//creating the button2
  b2 = createImg('up.png')
  b2.position(100,30)
  b2.size(50,50)
  b2.mouseClicked(v_force)


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  //displaying the different objects
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,25)
  Engine.update(engine);
}
// creating the horizontal force
function h_force(){

  Matter.Body.applyForce(ball,{x:0 , y:0},{x:0.1,y:0})

}
//creating the vertical force
function v_force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1})
}

