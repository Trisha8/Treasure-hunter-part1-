var gameState = "PLAY";

var player;

var player, playerImg;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;

var box1, box2, box3, box4, box5, box6;
var form;
var c = [];
var bgmaze;

function preload(){
 bgmaze = loadImage("Maze.png");

}

function setup() {
  createCanvas(1200, 800);
  form = new Form();

player = createSprite(66,21, 20, 20);
player.shapeColor = "red";

}

function draw() {
  background(bgmaze);  
  fill('black');
  textSize(15);
  text(mouseX + " , " +mouseY, mouseX, mouseY)
//form.layout();
  
  
  
 // if(mousePressedOver)
  
  maze();
  Player();
  drawSprites();

}

function maze(){

  wall1 = createSprite(22, 149, 35, 290);
  wall2 = createSprite(103,279, 265,35);
  wall3 = createSprite(115,380,35,245);
  wall4 = createSprite(215,383,35,245);
  wall5 = createSprite(110,506, 245,35);
  wall6 = createSprite(186, 605, 35, 245);
  wall7 = createSprite(283, 735, 225, 35);
  wall8 = createSprite(379, 715, 30, 225);
  wall9 = createSprite(212, 14, 225, 30);
  wall10 = createSprite(178,108, 30, 225);
  wall11 = createSprite(315,99, 30, 225);
  wall12 = createSprite(338, 416, 260, 30);
  wall13 =createSprite(386,328,30, 225);
  wall14 = createSprite(295, 575, 30, 215);
  wall15 = createSprite(378, 563,225, 30);
  wall16 = createSprite(467, 586, 30, 225);
  wall17 = createSprite(541, 688,225, 30);
  wall18 = createSprite()
   c = [wall1,wall2,wall3,wall4];
}

function Player(){

if(keyWentDown("up")){
player.velocityY = -3;

}

if(keyWentDown("down")){
player.velocityY = 3;

}

if(keyWentUp("up")||keyWentUp("down")){
  player.velocityY = 0;
}

if(keyWentDown("left")){
  player.velocityX = -3;
  
  }
  
  if(keyWentDown("right")){
  player.velocityX = 3;
  
  }
  
  if(keyWentUp("left")||keyWentUp("right")){
    player.velocityX = 0;
  }

  for(var i=0;i<=3;i++){
    player.collide(c[i])
  }

}

