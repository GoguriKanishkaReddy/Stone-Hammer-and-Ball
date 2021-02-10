const Engine = Matter.Engine
 const World =Matter.World 
 const Bodies = Matter.Bodies 
 var engine, world,ground,ball,hammer,stone;
  function setup() {
var canvas= createCanvas(400,400);
 engine = Engine.create();
 world=engine.world;
var ground_options={
isStatic:true
 }
  
ground = Bodies.rectangle(200,390,200,20,ground_options) 
World.add(world,ground);

var ball_options={
  restitution:1.0
}
ball = Bodies.circle(200,100,20,ball_options) 
World.add(world,ball);
console.log(ball);
  }

  var hammer_options={
    restitution:1.0
  }
  hammer = Bodies.rectangle(250,120,20,hammer_options) 
  World.add(world,hammer);
  console.log(hammer);
    

  

    var stone_options={
      restitution:1.0
    }
    stone = Bodies.rectangle(300,80,20,stone_options) 
    World.add(world,stone);
    console.log(stone);
      
    
    



 function draw() {
background(0); 
 Engine.update(engine);
 rectMode(CENTER) ;
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
rectMode(CENTER) ;
rect(hammer.position.x,hammer.position.y,40,20);
squareMode(CENTRE) ;
square(stone.position.x,stone.position.y,60,20);

}
