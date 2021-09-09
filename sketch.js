
var runner,path,path1,runner1,leftBoundary,rightBoundary,bomb,bomb1,coin,coin1,energyDrink,energyDrink1,power,power1;
function preload(){
  //pre-load images
   runner1=loadImage("Runner-1.png","Runner-2.png");
   path1=loadImage("path.png");
   bomb1=loadImage("bomb.png");
   coin1=loadImage("coin.png");
   power1=loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("running",path1);
  path.velocityY=4;
  path.scale=1.2;
  runner=createSprite(200,200,10,20);
  runner.addImage("running",runner1);
  leftBoundary=createSprite(2,398,20,100);
  leftBoundary.visible=false;
 rightBoundary=createSprite(398,2,20,100);
     
}

function draw() {
  background(0);
  if(path.y>400) {
    path.y=height/2;
  }
}
