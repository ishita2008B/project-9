var sprite;
function setup() {
  createCanvas(400,400);

  sprite =  createSprite(200,200,20,20);
  sprite.shapeColor = " red";
}

function draw() 
{
  if (keyIsDown(DOWN_ARROW))
  {
  background("yellow");  
  }
  if (keyIsDown(UP_ARROW)){
    background("green");
  }
 if (keyIsDown(LEFT_ARROW)){
   background("blue")
 }
 if (keyIsDown(RIGHT_ARROW)) {
   background("pink");
   
 }
 drawSprites();
}




