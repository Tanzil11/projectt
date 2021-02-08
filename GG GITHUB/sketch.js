var PLAY = 1;
var END = 0;
var gameState = 1;
var score;


var sword, swordImg, knifeSound;
var fruit1 , fruit2 ,fruit3 ,fruit4 , fruitGroup;
var f1Img , f2Img , f3Img , f4Img;
var monster, monsterImg , enemyGroup;
var gameOver, gameOverImg, gameOverSound;


function preload(){

  swordImg = loadImage("sword.png", sword);
  f1Img = loadImage("fruit1.png" , fruit1);
  f2Img = loadImage("fruit2.png" , fruit2);
  f3Img = loadImage("fruit3.png" , fruit3);
  f4Img = loadImage("fruit4.png" , fruit4);
  monsterImg = loadImage("alien1.png" , monster);
  gameOverImg = loadImage("gameover.png" ,gameOver);
  
  knifeSound = loadSound("knifeSwooshSound.mp3");
  
  gameOverSound = loadSound("gameover.mp3");
}

function setup(){
  createCanvas(600,450);
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImg);
  sword.scale = 0.7;
  
  score = 0;
  
  enemyGroup = new Group();
  fruitGroup = new Group();
}

function draw(){
  background("lightBlue");
  
  
  
  if(gameState === PLAY){
    
  sword.x = World.mouseX;
  sword.y = World.mouseY;
    
    if(sword.isTouching(fruitGroup)){
      
      fruitGroup.destroyEach();
      knifeSound.play();
      
      score = score + 2;
    }
      
  textSize(20);
  fill("blue");
  text("Score:"+score,50,50);

  }
  
  
    
    if(sword.isTouching(enemyGroup)){
      
      enemyGroup.destroyEach();
      fruitGroup.setVisibleEach = false;
      sword.addImage(gameOverImg);
      sword.x = 200;
      sword.y = 200;
      score = 0;
      gameOverSound.play();
      
    }
      
  
    
  
  
  fruits();
  Enemy();
  
  drawSprites();
}

function Enemy() {
  
  if(World.frameCount%200 === 0){
    monster = createSprite(400,200,20,20);
    monster.addAnimation("moving" , monsterImg);
    monster.y = Math.round(random(100,300));
    monster.velocityX = -(8+(score/10));
    monster.setLifetime = 50;
    
    enemyGroup.add(monster);
  } 
  
}

function fruits(){
  
  if(World.frameCount % 80 === 0){
    position = Math.round(random(1,2));
    fruit = createSprite(400,200,20,20);
    fruit.scale = 0.2;
    //fruit.debug = true;
    r=Math.round(random(1,4));
    if(r == 1){
      fruit.addImage(f1Img)
    } else if (r == 2){
      fruit.addImage(f2Img);
    } else if (r == 3){  
      fruit.addImage(f3Img);
    } else{  
      fruit.addImage(f4Img);
    }
    
    fruit.y = Math.round(random(50,400));
    
    fruit.velocityX = -7;
    fruit.setLifetime = 100;
    
    
    fruitGroup.add(fruit);
    
    if(position == 1)
{
fruit.x=400;
fruit.velocityX= - (7+(score/4));
}
else
{
if(position == 2){
fruit.x = 0;
fruit.velocityX= (7+(score/4));
}
}

    
    }
}
