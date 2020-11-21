var fixedRect,movingRect;
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 300, 20, 60);
  fixedRect.shapeColor = "yellow";
  //fixedRect.velocityX = -5

  movingRect = createSprite(100,200,90,30);
  movingRect.shapeColor = "yellow";
  //movingRect.velocityX = 3

  rect1 =createSprite(200,200,50,50);
  rect1.shapeColor = "yellow";

  rect2 = createSprite(300,200,50,50);
  rect2.shapeColor = "yellow";

  rect3 = createSprite(400, 200, 50, 50)
  rect3.shapeColor = "yellow"
  rect3.velocityX = 5

  rect4 = createSprite(500, 200, 50, 50)
  rect4.shapeColor = "yellow"
  rect4.velocityX = -5
}

function draw() {
  background("skyblue");  

  /*rect3.x = mouseX;
  rect3.y = mouseY;

 if(isTouching(rect3,fixedRect)){
   rect3.shapeColor = "pink";
   fixedRect.shapeColor = "pink"
 }
 else{
  rect3.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow"
 }*/
  
bounceOff(rect3, rect4);
  
  console.log(movingRect.x - fixedRect.x)

  drawSprites();
}

