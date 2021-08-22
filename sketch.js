var garden,rabbit;
var gardenImg,rabbitImg;
var orangeLeaf;
var appleImg;
var apple;
var leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeaf = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);

  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);
spawnApples();
spawnLeaves();
  drawSprites();
}


function spawnApples(){
  //made apples appear after 80 frames using an if statement
  if(frameCount%80===0){
   apple = createSprite(random(1,400),random(1,150),40,40);
   apple.addImage("apple",appleImg);
   apple.scale = 0.1;
   apple.velocityY = 2.5;
   rabbit.depth = apple.depth
  rabbit.depth = rabbit.depth+1
  }
}

if(leaf.y = 400){
  leaf.destroy();
}
if(apple.y = 400){
  leaf.destroy();
}

function spawnLeaves(){
  //made apples appear after 80 frames using an if statement
  if(frameCount%80===0){
   leaf = createSprite(random(1,400),random(1,150),40,40);
   leaf.addImage("leaf",orangeLeaf);
   leaf.scale = 0.1;
   leaf.velocityY = 2.5;
   rabbit.depth = leaf.depth
  rabbit.depth = rabbit.depth+1
  }
}