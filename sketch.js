var ball
var edges
function setup() {
  createCanvas(1000,2000);
  ball = createSprite(200,200,200,200);
  ball.velocityX = 10
  ball.velocityY = 10
  edges = createEdgeSprites();
}

function draw() 
{
  background(30);
  ball.bounceOff(edges);
drawSprites();
}




