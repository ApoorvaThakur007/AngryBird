const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg
var score = 0
var engine, world;
var box1, pig1;
var gameState = "onSling";

function preload(){
  getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
    ground = new Ground(600,height,1200,20)
    platform = new Ground(100,400,400,300)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,20,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,20,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,20,150, PI/7);
    log5 = new Log(870,120,20,150, -PI/7);
    
    //log10 = new Log(100,100,20,150,PI);
    bird = new Bird(200,100);
    rope1 =new SlingShot(bird.body,{x:200,y:100});
  
}

function draw(){
  if(backgroundImg){
    background(backgroundImg);
    text("SCORE: " + score,width-300,50)
  }
    
    Engine.update(engine);
    //console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
  //  log10.display();
    bird.display();
    rope1.display();
    pig1.score()
    pig3.score()
}

function mouseDragged(){
  if(gameState !== "launched"){
   Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})  
  }
}

function mouseReleased(){
  rope1.fly()
  gameState = "launched"
}

function keyPressed(){
  if (keyCode === 32){
  rope1.attach(bird.body)
  bird.trajectory = []
  Matter.Body.setPosition(bird.body,{x :200,y:100})
  gameState = "onSling"
}
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}