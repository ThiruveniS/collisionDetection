let fixedRect,movingRect,o1,o2,o3,o4;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(450, 200, 50, 50);
  movingRect=createSprite(50,100,60,90);
  o1=createSprite(50,200,60,20);
  o2=createSprite(150,200,60,20);
  o3=createSprite(250,200,60,20);
  o4=createSprite(350,200,60,20);

  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;
}

function draw() {
  background(255,255,255); 
  //movingRect.x=World.mouseX
  //movingRect.y=World.mouseY
   
 /* if(istouching(movingRect,o3)){
    movingRect.shapeColor="red";
    o3.shapeColor="red";

  }
  else{
    movingRect.shapeColor="green";
    o3.shapeColor="grey";
   } */

    bounceOff(movingRect,fixedRect);

  

  drawSprites();
}

function istouching(mr,sr){

  if(mr.x-sr.x <mr.width/2+sr.width/2  
    && sr.x-mr.x< sr.width/2+mr.width/2  
    && mr.y-sr.y <mr.height/2+sr.height/2 
    && sr.y-mr.y<mr.height/2+sr.height/2)
  {

 return true;
  }
  
  
else {

  return false;
}
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}
