
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudsGroup,cloudimage;
var obstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var score=0



function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloudimage=loadImage("cloud.png")
  
  obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
   obstacle3=loadImage("obstacle3.png")
   obstacle4=loadImage("obstacle4.png")
   obstacle5=loadImage("obstacle5.png")
   obstacle6=loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup=new Group()
  obstaclesGroup=new Group()
}

function draw() {
  background(160);
  score=score+Math.round(getFrameRate()/60)
  text("Score : " +score,450,50)
  
  spawnclouds();
  spawnobstacles();
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  drawSprites();
}

function spawnclouds(){
  if(frameCount%80===0){
    var cloud = createSprite(600,random(80,120),20,20)
    cloud.velocityX=-4;
    cloud.addAnimation("cloud",cloudimage);
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1
    cloud.lifetime=150;
    cloudsGroup.add(cloud);
  }
}

function spawnobstacles(){
  if(frameCount%90===0){
    var obstacles=createSprite(600,165,20,20);
    obstacles.velocityX=-4;
    var ran=Math.round(random(1,6));
    switch(ran){
        case 1:obstacles.addImage("o",obstacle1)
        break;
        case 2:obstacles.addImage(obstacle2)
        break;
        case 3:obstacles.addImage(obstacle3)
        break;
        case 4:obstacles.addImage(obstacle4)
        break;
        case 5:obstacles.addImage(obstacle5)
        break;
        case 6:obstacles.addImage(obstacle6)
        break;
        default:break
    }
        obstacles.lifetime=150;
        obstacles.scale=0.5;
        obstaclesGroup.add(obstacles);
  }
}








