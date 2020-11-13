 var movingRect, fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(500, 200, 80, 30);
  fixedRect = createSprite(400,200,50,70);

  movingRect.debug= true;
  fixedRect.debug= true;

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green"
}

function draw() {
  background(180);  

  movingRect.x= mouseX;
  movingRect.y= mouseY;
   
  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2);

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red"
  }  else {
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green"
  }


  drawSprites();
}