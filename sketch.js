// Making the variables for everything.
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score, ground;
var survivalTime = 0;


function preload(){
  // Loading the images and animations;
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  // Making the ground.
  ground = createSprite(200,280,450,10);

  // Making the monkey and adding animation to it.
  monkey = createSprite(60,250);
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  // Giving the background a colour.
  background("white");
  
  // Giving the ground a velocity.
  ground.velocityX = -2
  
  //console.log(ground.x);
  
  // Making the ground infinite.
   if (ground.x < 175){
      ground.x = ground.width/2;
    }
  
  // Making the monkey jump when space is pressed.
  if (keyDown("space") && monkey.y >= 200) {
      monkey.velocityY = -12;
      }
  
  // Making a gravity for the monkey.
  monkey.velocityY = monkey.velocityY + 1;
  
  // Making the monkey stay on the ground.
  monkey.collide(ground);
  
  food();
  rock();
  
  text ("Survival time: " + survivalTime, 170, 30)
  
  survivalTime = Math.ceil(frameCount/frameRate())
  
  // Drawing all the sprites.
  drawSprites();
  
}

function food() {
  
  // Making the banana.....
  if (frameCount% 100 === 0) {
      banana = createSprite(400, 200)
      banana.addImage(bananaImage);
      banana.scale = 0.09;
      banana.velocityX = -5;
      banana.y = Math.round(random(240, 150));
      banana.lifetime = 100;  
    
      foodGroup.add(banana);
    
      }  
}

function rock() {
  
  // Making the rock......
  if (frameCount% 200 === 0) {
  obstacle = createSprite(400, 260)
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.09;
  obstacle.velocityX = -5;
  obstacle.lifetime = 300;
  
  obstacleGroup.add(obstacle);
    
  
  }
  
}


