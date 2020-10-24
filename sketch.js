var bananaGroup,bananaImage;
var player,player_running;
var obstacleImage;
var backImage,back;
var score;
var ground;
var score=0;

function preload(){
 backImage=loadImage("jungle.jpg"); 
  
player_running=
      loadAnimation("Monkey_01.png","Monkey_02.png",
     "Monkey_03.png","Monkey_04.png","Monkey_05.png",
    "Monkey_06.png","Monkey_07.png","Monkey_08.png",
    "Monkey_09.png","Monkey_10.png");  

bananaImage=loadImage("banana.png");
  
Obstacle=loadImage("stone.png");  
  
}

function setup() {
  createCanvas(400, 400);

  
 back = createSprite(0,0,400,400);
 back.addImage(backImage); 
 back.x=back.width/2; 
back.velocityX=-4;
  
  
 ground=createSprite(200,380,800,10);
 ground.visible=false;
 ground.VelocityX=-3; 
  
 player=createSprite(74,332,10,10); 
 player.addAnimation("running",player_running); 
 player.scale=0.1;
  
 bananaGroup=new Group();
 obstacleGroup =new Group();
  
}

function draw() {
  background(220);

  obstacles();
  food();
  
  if(back.x<100){
    back.x=back.width/2;
  }
  
  if(keyDown("space")){
    player.velocityY=-14;
  }
  
player.velocityY=player.velocityY+0.8;
  if (bananaGroup.isTouching(player)){
   score=score+2;
   bananaGroup.destroyEach();
  }

  switch(score){
    case 10: player.scale=0.12;
            break;     
    case 20: player.scale=0.14;  
          break;
    case 30: player.scale=0.16;
          break;
    case 40: player.scale=0.18;
          break;
    default:break;       
  }
  
  if (obstacleGroup.isTouching(player)){
    player.scale=0.2;
  }
  player.collide(ground);
  drawSprites();
  
  
  textSize(20);
  fill(255);
  text("Score:"+score,320,50);
}

function food(){
  if (frameCount % 80 === 0){
var banana=createSprite(400,random(120,200),10,10);
//banana.addImage("Banana");
banana.addImage(bananaImage);
banana.scale=0.1;

banana.velocityX=-4;
banana.lifetime=100;


bananaGroup.add(banana);
  }  
  
}

function obstacles(){
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -4;
    
    //obstacle.setAnimation("Stone");
    obstacle.addImage(Obstacle);  
    obstacle.scale = 0.2              ;
    obstacle.lifetime = 100;
    //add each obstacle to the group
    
    obstacleGroup.add(obstacle)
}
}