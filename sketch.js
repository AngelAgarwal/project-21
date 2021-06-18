var bullet, wall;

var speed, weight ;

var thickness;

function setup() {

  createCanvas(1600,400);
  
  speed = random(223,321);

  weight = random(30,52);

  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 5);

  wall =createSprite(1200, 200, thickness, height/2);

  bullet.velocityX = speed;

  bullet.shapeColor = "blue";

  wall.shapeColor = "white";

}

function draw() {

  background("black");  

    if(hasCollided(bullet,wall))
    {
     bullet.velocityX = 0;
      
      var demage=0.5 * weight *speed * speed/(thickness * thickness * thickness);
   
      if( demage>10){
      
       wall.shapeColor =color(255,0,0)
      
     } 
     
     if( demage<10){
     
      wall.shapeColor =color(0,255,0)
     
     }

    }

  

  

  
  drawSprites();

}

function hasCollided(lbullet,lwall){

  bulletRightEdge = lbullet.x + lbullet.width;

  wallLeftEdge=lwall.x;
  
  if(bulletRightEdge>=wallLeftEdge)
  
  {
  
    return true;
  
  }
  
  return false;


  }
