var ballx = 300;
var bally = 300;
var ballSize = 70;
var circlex = 100;
var circley = 200;
var circleSize = 100;
var score = 0;
var gameState = "Start";
let timer = 60;

function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(220);
  
  if(gameState == "Start"){
    starting();
  }
  
  if(gameState == "END"){
    gameOver();
  }
  
  if(gameState == "L1"){
    levelOne();
  }
  
   if(gameState == "L1"){
   text("Score:   " + score, width/2,30)
   push();
   textSize(18)
   text("Time:   " + timer,width/2,50)
   pop();
  
   if(frameCount % 80 == 0 && timer > 0){
      timer --;
    }
  
    if(timer === 0){
      gameState = "END"
    }
  }
}

function starting(){
  
  var shape;
  var shapeSize = 310;
  ellipse(width/2,height/2,shapeSize)
  
  push();
  textSize(50)
  textStyle(BOLD)
  fill(110)
  text("Circle Game", width/2,height/2)
  textSize(20)
  text ("Press P to Play", width/2,height/3)
  pop();
  
  if(keyCode === 80 || touches.length>0){
    gameState = "L1"
  }
 
}

function levelOne(){
  text("Level 1", width/2, height/1);
  var distBall;
  if (touches.length>0){
    distBall = dist(ballx,bally,touches[0].x,touches[0].y);
  }
  else {distBall = dist(ballx,bally,mouseX,mouseY);}
  
  if(distBall < ballSize){
    ballx=random(width);
    bally=random(height);
    score = score + 1;
  }
  if(score>=5){
    gameState = "END";
  }
  ellipse(ballx,bally,ballSize,ballSize);
  if (touches.length>0){
    line(ballx,bally,touches[0].x,touches[0].y);
  }
  else{line(ballx,bally,mouseX,mouseY);}
}//=======================level1 end

function gameOver(){  
  score = 0;
  background(166,49,49)
  text("GAME OVER",width/2,height/2);
  push();
  textSize(15)
  text("Press Space to Restart",width/2,330);
  pop();
  if(keyCode === 32){
    gameState = "L1";
  }
}

