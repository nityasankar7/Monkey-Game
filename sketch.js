
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var PLAY=1;
var END=0
var gameState = PLAY;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey= createSprite(50,300,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
ground= createSprite(300,354,400,10);
ground.x=ground.width/2;
ground.velocityX = -8;
ground.scale=2;
  
 FoodGroup=new Group()
 obstacleGroup=new Group()
  
}


function draw() {
 background("white")
  if(gameState === PLAY){
   if (ground.x < 0){
      ground.x = ground.width/2;
    }  
   if (keyDown("space")&& monkey.y >= 250) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  stroke("black");
  Time= Math.ceil(World.frameCount/World.frameRate);
  food();
  obstacle1();  
   monkey.collide(ground);
  if(obstacleGroup.isTouching(monkey)){
  gameState = END;
      
  }
    }
  else if (gameState === END) {
  monkey.visible=false;
  ground.visible=false;
  obstacle.visible=false;
  fill("black");
  textSize(50);
  text("You Lost", 100, 200);
  } 
  

  textSize(20);
  text(" Survival Time:"+Time, 100, 50);
  
  drawSprites(); 
}
function food() {
 if (World.frameCount % 80 === 0){
  banana = createSprite(400,200);
  banana.addImage(bananaImage);
  banana.y=Math.round(random(150,230));
  banana.scale = 0.1;
  banana.velocityX = -8;
  banana.lifetime = 200;
  FoodGroup.add(banana);
 }
}
function obstacle1() {
if (World.frameCount % 300 === 0){
obstacle = createSprite(200, 330);
obstacle.addImage(obstaceImage);
obstacle.scale = 0.1;
obstacle.velocityX = -8;
obstacle.lifetime = 200;
obstacleGroup.add(obstacle);
 }
}






