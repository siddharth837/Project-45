var backgroundImage;
var gameState="PLAY";

function preload(){
backgroundImage=loadImage("Img/BG.png");
snowmanAnimation=loadAnimation("Img/snowman-0.png","Img/snowman-1.png","Img/snowman-2.png","Img/snowman-3.png",
"Img/snowman-4.png","Img/snowman-5.png","Img/snowman-6.png","Img/snowman-7.png","Img/snowman-8.png",
"Img/snowman-9.png","Img/snowman-10.png","Img/snowman-11.png");
ground1Img=loadImage("Img/1.png");
obstacle1Image=loadImage("Img/Crate.png");
obstacle2Image=loadImage("Img/Stone.png");
obstacle3Image=loadImage("Img/Tree_1.png");
obstacle4Image=loadImage("Img/Tree_2.png");
gameOverImage=loadImage("Img/gameOver.png");
restartImage=loadImage("Img/restart.png");
}
function setup(){
createCanvas(950,850);
Background=createSprite(0,400,950,850);
Background.addImage(backgroundImage);

snowman=createSprite(200,740,30,30);
snowman.shapeColor="white";
snowman.scale=0.5;
snowman.addAnimation("moving",snowmanAnimation);

ground=createSprite(475,840,1000,100);
ground.shapeColor="brown";

ground2=createSprite(475,780,1000,20);
ground2.shapeColor="green";

ground3=createSprite(475,765,1000,10);
ground3.shapeColor="white";

gameOver=createSprite(450,450,50,50);
gameOver.addImage(gameOverImage);

restart=createSprite(450,600,50,50);
restart.addImage(restartImage);

spawnGround1Group=new Group();
stoneBoxGroup=new Group();
stoneBox2Group=new Group();
stoneBox3Group=new Group();
}
function draw(){
  background("red");
  if(Background.x<0){
    Background.x=Background.width/2;
  }
  if(gameState==="PLAY"){
    gameOver.visible=false;
    restart.visible=false;

  snowman.velocityY=snowman.velocityY+0.8;
  Background.velocityX=-5;
  snowman.collide(ground);
  
  if(keyDown("space")){
    snowman.velocityY=-10;
  }
 /* if(snowman.isTouching(spawnGround1Group)){
    spawnGround1Group.collide(snowman);
  }*/
  //spawnGround1();

  if(snowman.isTouching(stoneBoxGroup)|| snowman.isTouching(stoneBox2Group)||
   snowman.isTouching(stoneBox3Group)){
     gameState="END";
     gameOver.visible=true;
     restart.visible=true;
    
   }
  stoneBox();
  stoneBox2();
  stoneBox3();
}

if(gameState==="END"){
  snowman.visible=false;
  Background.velocityX=0;
  text("GAMEOVER " ,500,500);
  stoneBoxGroup.destroyEach();
  stoneBox3Group.destroyEach();
  stoneBox2Group.destroyEach();
  if(mousePressedOver(restart)){
    reset();
    
  }

}
  
  drawSprites();
  fill("black");
  text(mouseX,"+",mouseY,mouseX,mouseY);
}

function reset(){
  snowman.visible=true;
  gameState="PLAY";
}
function spawnGround1(){
  if(frameCount%60===0){
   var ground1=createSprite(500,10,30,30);
   ground1.y=random(80,800);
   ground1.velocityX=-4;
   ground1.scale=0.8;
   ground1.addImage(ground1Img);
   ground1.debug=true;
   spawnGround1Group.add(ground1);
  }
}

function stoneBox(){

  if(frameCount%120===0){
    obstacle=createSprite(800,740,30,30);
    obstacle.shapeColor="red";
    obstacle.velocityX=-5;
    obstacle.scale=0.8; 

    r=Math.round(random(1,2));
    if(r==1){
      obstacle.addImage(obstacle1Image);
    }
    if(r==2){
      obstacle.addImage(obstacle2Image);
    }
    stoneBoxGroup.add(obstacle);
  }
}

function stoneBox2(){

  if(frameCount%160===0){
    obstacle=createSprite(800,740,30,30);
    obstacle.shapeColor="red";
    obstacle.velocityX=-5;
    obstacle.scale=0.8; 

    r=Math.round(random(1,2));
    if(r==1){
      obstacle.addImage(obstacle1Image);
    }
    if(r==2){
      obstacle.addImage(obstacle2Image);
    }
    stoneBox2Group.add(obstacle);
  }
}

function stoneBox3(){

  if(frameCount%190===0){
    obstacle=createSprite(800,740,30,30);
    obstacle.shapeColor="red";
    obstacle.velocityX=-5;
    obstacle.scale=0.8; 
    
    r=Math.round(random(1,2));
    if(r==1){
      obstacle.addImage(obstacle1Image);
    }
    if(r==2){
      obstacle.addImage(obstacle2Image);
    }
    stoneBox3Group.add(obstacle);
  }
}