function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  v = createSprite(200,300,50,50)
  v.shapeColor = "green"
  a.shapeColor = "blue"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  rectMode (CENTER)
  v.x = mouseX
  v.y = mouseY
  line (a.x,a.y,v.x, v.y)
  if(v.x-a.x < a.width/2+v.width/2 && a.x-v.x < a.width/2+v.width/2 && v.y-a.y < a.height/2+v.height/2 && a.y-v.y < a.height/2+v.height/2){
   v.shapeColor = "red"
   a.shapeColor = "red"
  }
  else{

    a.shapeColor = "blue"
    v.shapeColor = "green"
  }
   
}