
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var score = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20);  
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1
  
 
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
console.log(ground.x) 

obstacleGroup=createGroup();
bananaGroup=createGroup();
}


function draw() {
  createCanvas(600,400)
background("g");
  
monkey.collide(ground);
    
if(keyDown("space") && monkey.y>304){
monkey.velocityY=-14;   
}
  
  
  
monkey.velocityY=monkey.velocityY+0.4        
  
if(ground.x>0){
ground.x = ground.width /2;   
}
  
 
  
  if(obstacleGroup.isTouching(monkey)){
   
    monkey.velocityX=0;
    ground.velocityX=0;
    
    monkey.destroy();
    
   
    
    
    
    score=0;
    survivalTime=survivalTime*0;
    
    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
    
   
    
  }
  
 if(bananaGroup.isTouching(monkey)){
   score=score+1;
   bananaGroup.destroyEach();
      
 } 

 spawnBanana();  
 spawnObstacles();
  

 stroke("black");
 textSize(20);
 fill("black");
 text("score:"+score,500,50); 
  
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime=Math.ceil(frameCount/frameRate())
 text("Survival Time:"+survivalTime,100,50)
  
drawSprites();  
}

function spawnBanana(){
  
  if (frameCount % 80 === 0) {
 var banana = createSprite(600,120,40,10);
 banana.y = Math.round(random(120,200));
 banana.addImage(bananaImage);
 banana.scale = 0.1;
 banana.velocityX = -4;
 banana.lifetime = 200;

 bananaGroup.add(banana);

  
  
  }
}

function spawnObstacles(){
  
if (frameCount% 300=== 0){
  
  var obstacle = createSprite(600,325,20,20);
 obstacle.addImage(obstacleImage);
 obstacle.scale = 0.1;
 obstacle.velocityX = -4;
 obstacle.lifetime = 200;

 obstacleGroup.add(obstacle);
  
  
}  
  
  
  
  
}




