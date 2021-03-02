
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(700,600)
   score=0
  
   ground=createSprite(350,550,700,10)
   invisibleground=createSprite(350,560,700,10)
   
  
    pmonkey=createSprite(100,500);
   pmonkey.addAnimation("running",monkey_running)
   pmonkey.scale=0.15
  
   tap=createSprite(350,350,700,600)
   tap.visible=false;
}


function draw() {
 background("white")
   
  textSize(31);
  text("Survival Time:"+score,250,100)
    score = score + Math.round(getFrameRate()/60);
  
  pmonkey.velocityY=pmonkey.velocityY+1
  pmonkey.collide(invisibleground)
  if(keyDown("space")&& pmonkey.isTouching(ground)) 
  {
      pmonkey.velocityY=-20;
  }
  
  if(mousePressedOver(tap) && pmonkey.isTouching(ground))
    {
       pmonkey.velocityY=-20;
    }
  
   spawnstone();
  spawnfruit();
  drawSprites();
}


function spawnstone()
{
  if(frameCount%100===0)
    {
      stone=createSprite(750,515)
      stone.addAnimation("obstacle",obstacleImage)
      stone.velocityX=-(6+score/30)
      stone.lifetime=200
      stone.scale=0.2
    }
}


function spawnfruit()
{
  if(frameCount%50===0)
    {
      banana=createSprite(750,515)
      banana.addAnimation("bananaImage",bananaImage)
      banana.velocityX=-(6+score/30)
      banana.lifetime=200
      banana.scale=0.1
      banana.y=Math.round(random(250,350))
    }
}
