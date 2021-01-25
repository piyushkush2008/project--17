
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0;
var survivalTime=0;
var ground;

function preload(){ 
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(600,500);
 
ground=createSprite(0,505,600,14)  
ground.scale=2; 
  
monkey=createSprite(80,462,20,20)
monkey.addAnimation("running",monkey_running)
monkey.scale=0.1;
  
foodGroup=new Group();
obstacleGroup=new Group();
}


function draw() {
background("green")
// display score on the screen 
fill("white")
textSize(25) 
text("score:"+score,500,50)  
  
// display Survival Time on the screen
stroke("black");
textSize(25);
fill("white")
survivalTime=survivalTime+Math.round(getFrameRate()/60)
text("Survival Time:"+survivalTime,100,50)

//make the monkey jump when space is clicked
if(keyDown("space")&& monkey.x>=80){
monkey.velocityY=-8; 
          }
  
//giving gravity to the monkey
monkey.velocityY=monkey.velocityY+0.2; 

//male the monkey collide with groud
monkey.collide(ground)

//giving velocity to the ground
ground.velocityX=-3;
 
//making the ground infinite
if(ground.x<0){
ground.x=ground.width/2;
        }

// giving score to the player
if(monkey.isTouching(foodGroup)){
foodGroup.destroyEach();
score=score+1;
}
  

 
//this is call of a function 
drawSprites();
//this is call of a function 
spawnBanana();
//this is call of a function 
spawnObstacles();
}

//this is known as defination of a function
function spawnBanana(){
if(frameCount%150===0){
banana=createSprite(500,Math.round(random(100,250))) 
banana.addImage(bananaImage)
banana.velocityX=-5;
banana.scale=0.1
banana.lifetime=300;
foodGroup.add(banana);
}
}

//this is known as defination of a function
function spawnObstacles(){
if(frameCount%300===0){
obstacle=createSprite(500,462,10,10);
obstacle.velocityX=-3;
obstacle.addImage(obstaceImage);
obstacle.scale=0.2;
obstacle.lifetime=200;
obstacleGroup.add(obstacle)
} 
}