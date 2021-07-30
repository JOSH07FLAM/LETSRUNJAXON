


function preload(){
  //pre-load images
  pathImage = loadImage ("path.png")
  boyImage = loadAnimation ("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite (200,200)
path.addImage (pathImage)
path.velocityY = -4
boy = createSprite (200,350)
boy.addAnimation ("running",boyImage)
boy.scale = 0.1
}     

function draw(){
  background(0);
boy.x=mouseX;


//code to reset the background
if (path.y < 0 ){
  path.y = height/2;
}
drawSprites ();
}
