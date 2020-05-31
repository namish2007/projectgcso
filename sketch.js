var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(800,400);
 car =  createSprite(400, 200, 50, 50);
 wall = createSprite(1500,200,60,height/2);
speed = random(55,90);
weight = random(400,1500);

}
function draw() {
  background(255,255,255);  
 car.velocityX =speed;
 if(wall.x-car.x < (car.width+wall.width)/2){
   deformation = speed*speed*weight*0.5/22509;
 if(deformation>180){
   car.ShapeColor(255,0,0);
 }
 if(deformation>100 && deformation<180){
   car.ShapeColor(230,230,0);

 }
 if(deformation<100){
   car.ShapeColor(0,255,0);
 }
  }
  drawSprites();
}