var mario, marioImg;
var backgroundImg, bg;
var gameoverImg;
var obstacle1, obstacle2;
var restartImg;
var invisibleGround, invisibleGroundImg;

function preload(){

  marioImg = loadAnimation ("mario00.png","mario01.png");
  backgroundImg = loadImage ("bg.png");
  obstacle1 = loadImage ("obstacle1.png");
  obstacle2 = loadImage ("obstacle2.png");
  gameoverImg = loadImage ("gameover.png");
  restartImg = loadImage ("restart.png");
  invisibleGroundImg = loadImage("ground2.png")


}






function setup() {
  createCanvas(650,450);

 bg = createSprite(300,218,10,10);
 bg.addImage(backgroundImg);
 bg.scale = 1.2;


 mario = createSprite(250,353,10,10);
 mario.addAnimation("mario",marioImg);
 mario.velocityX = 2;
 

 invisibleGround = createSprite(50,410,2900,10);
 //invisibleGround.visible = true
 invisibleGround.addImage(invisibleGroundImg);

 

}

function draw() {
  background("black");
  invisibleGround.velocityX = -5

  
  if(keyDown("SPACE")&& mario.y >= 150){
    mario.velocityY = -10
  }
  mario.velocityY = mario.velocityY + 1

  if(invisibleGround.x <0){
   invisibleGround.x = invisibleGround.width/2
  }
  
  mario.collide(invisibleGround);

 // bg.velocityX = 3 
 
  drawSprites();
}