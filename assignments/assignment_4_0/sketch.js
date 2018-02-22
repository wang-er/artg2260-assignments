var bunnyLeft;
var bunnyRight;
var bunnyFront;
var bunnyBack;

var carrotimg;
var floorimg;
var tomatoimg;
var grassimg;

var bunnyEnd;

var font;


let spots = [];
let platforms = [];

let WIDTH = 500;
let HEIGHT = 500;

let platformSize = 60;

let movement = platformSize + platformSize/6;

let gameState = 0;
let score = 0;
let hiscore = 0;


var bunnyvar;
var carrotvar;
var spotvar;

function preload(){

bunnyLeft = loadImage("assets/bunnyLeft.png");
bunnyRight = loadImage("assets/bunnyRight.png");
bunnyFront = loadImage("assets/bunnyFront.png");
bunnyBack = loadImage("assets/bunnyBack.png");

carrotimg = loadImage("assets/carrot.png");
floorimg = loadImage("assets/floor.png");
tomatoimg = loadImage("assets/tomato.png");
grassimg = loadImage("assets/grass.png");

bunnyEnd = loadImage("assets/bunnyEnd.png");

font = loadFont('assets/Adelle_Reg.otf');

}






function setup(){
  framerate = 20;

createCanvas(WIDTH, HEIGHT);

var randomNumber = floor(random(0,3));
}

function draw(){
  if (gameState == 0){
    startScreen();
  } else if (gameState == 1){
    update();
  } else if (gameState == 2){
    gameOver();
  }
}

function startScreen(){
  background(grassimg);
  textFont(font);
  textSize(50);
  fill(255, 170, 0, 200);
  textAlign(CENTER);
  text("Carrot Collector", WIDTH/2, HEIGHT/4);


  fill(0, 100);
rect(0,185, WIDTH, 150);

  fill(255, 200, 0, 200);
  textSize(20);
  text("High Score: " + hiscore, WIDTH/2, HEIGHT/4 + 30);
  textAlign(LEFT);
  textSize(20);
  text("Instructions: You're a bunny", WIDTH/8, HEIGHT/2 - 20);
  image(bunnyFront, 4*WIDTH/6+5, HEIGHT/2 - 45, 40, 40);

  text("trying to collect carrots!", WIDTH/8, HEIGHT/2 + 20);
  image(carrotimg, 3*WIDTH/5+5, HEIGHT/2, 30, 30);

  text("Try to avoid the tomatoes, they hurt!", WIDTH/8, HEIGHT/2 + 60);
  image(tomatoimg, 4*WIDTH/5+15, HEIGHT/2 + 40, 30, 30);

  textAlign(CENTER);
  fill(255, 170, 0, 200);
  text("Use arrow keys to move around.", WIDTH/2, 3*HEIGHT/4);
  textSize(25);
  text("Press Space to Start!", WIDTH/2, 3*HEIGHT/4 + 30);







for (let i = 0; i < 9; i++) {
  let x = (platformSize + 10) * (i%3) + WIDTH/2 - WIDTH/5;
  if(i < 3) {
    let y = HEIGHT/2 - HEIGHT/5;
    platforms[i] = new platform(x, y, platformSize);
  }
      else if (6 <= i) {
    let y = HEIGHT/2 - HEIGHT/5 + (platformSize + 10);
    platforms[i] = new platform(x, y, platformSize);
  }
  else if (3 <= i < 6) {
    let y = HEIGHT/2 - HEIGHT/5 + (platformSize + 10) * 2;
    platforms[i] = new platform(x, y, platformSize);
  }

}

 spots = [];
  for (let i = 0; i < 3; i++){  // Make a for() loop to create the desired number of Spots
    // Add an index [i] to create multiple Spots
    spots[i] = new Spot(WIDTH, 
      0, 0.1 * i + 1, 0);
   }

    //set up a bunny! 
    bunnyvar = new Bunny(WIDTH/2, HEIGHT/2, bunnyFront);

    carrotvar = new Carrot(floor(random(0,3)) * movement +  WIDTH/2 - movement,
      floor(random(0,3)) * movement +  WIDTH/2 - movement);

    score = 0;

    // spotvar = new Spot(floor(random(0,3)) * movement +  WIDTH/2 - movement, 
    //   0, 1);


}

function update(){
  background(grassimg);
  noStroke();



//set up for background
for (let i = 0; i < platforms.length; i++){
  platforms[i].display();
}
  textFont(font);
  textSize(40);
  fill(255, 200, 0, 200);
  textAlign(CENTER);
  text("Score: " + score, WIDTH/2, 80); 
  textSize(20);
  text("High Score: " + hiscore, WIDTH/2, 110);



  bunnyvar.display();

  carrotvar.display();

  carrotvar.hit(bunnyvar);

      for (let i = 0; i < spots.length; i++){  // Make a for() loop to loop through each Spot 
    spots[i].move();            // Move each object
    spots[i].display();         // Display each object
    spots[i].check(bunnyvar);           // Check for mouse overlap
  }

if(spots.length < 3 + floor(score/10)) {
  spots.push(new Spot(WIDTH, 
      0, 0.1 * spots.length + 1, 0));
}


}

function gameOver(){
  background(grassimg);
  textFont(font);
  textSize(50);
  fill(255, 200, 0, 200);
  textAlign(CENTER);
  text("Game Over!", WIDTH/2, HEIGHT/4);
  textSize(20);
  text("Final Score: " + score, WIDTH/2, HEIGHT/4 + 30);
      textSize(25);
    text("Press Space to Continue", WIDTH/2, 3*HEIGHT/4);
imageMode(CENTER);
  image(bunnyEnd, WIDTH/2, HEIGHT/2, 150, 150);


 if(score > hiscore) {
  //   textSize(15);
  //   text("New High Score!", WIDTH/2, HEIGHT/2 + 55);
hiscore = score;
 }

}

// function mouseClicked(){
//  if (gameState == 0){ //start to playing
//    gameState = 1;
//  } else if (gameState == 2){ //game over to restart to start again
//    gameState = 0;
//  }
// }

function keyPressed() {
   if (gameState == 0 && key == ' '){ //start to playing
   gameState = 1;
 } else if (gameState == 2 && key == ' '){ //game over to restart to start again
   gameState = 0;
 } else if (keyCode === LEFT_ARROW) {
    bunnyvar.moveTo(LEFT_ARROW);
  } else if (keyCode === RIGHT_ARROW) {
    bunnyvar.moveTo(RIGHT_ARROW);
  }
  else if (keyCode === UP_ARROW) {
    bunnyvar.moveTo(UP_ARROW);
  }
  else if (keyCode === DOWN_ARROW) {
    bunnyvar.moveTo(DOWN_ARROW);
  }
}

class Spot {
  constructor(_x, _y, _speed, _direction) {
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
    this.direction = _direction;

  }


  move() {
    console.log(this.direction);
    if(this.direction === 0) {
      this.x += this.speed;
      if (this.x > (WIDTH)){
        this.place()
    }
  }  else if(this.direction === 1) {
      this.x -= this.speed;
      if (this.x < 0) {
        this.place()
      }
    } else if(this.direction === 2) {
      this.y += this.speed;
      if (this.y > (HEIGHT)) {
        this.place()
      }
    }else if(this.direction === 3) {
      this.y -= this.speed;
      if (this.y < 0) {
        this.place()
    }
  }
}





  place() { 
    var randomDirection = floor(random(0,4));
    console.log(randomDirection);
    if(randomDirection === 0) {
        this.x = 0;
        this.y = (floor(random(0,3)) * (platformSize + 10) +  HEIGHT/2  - movement);
        //this.speed,
        this.direction = 0;
    } else if(randomDirection === 1) {
        this.x = WIDTH;
        this.y = (floor(random(0,3)) * (platformSize + 10) +  HEIGHT/2  - movement);
        //this.speed,
        this.direction = 1;
    } else if(randomDirection === 2) {
        this.x = (floor(random(0,3)) * (platformSize + 10) +  WIDTH/2  - movement);
        this.y = 0;
        //this.speed,
        this.direction = 2;
    } else if(randomDirection === 3) {
        this.x = (floor(random(0,3)) * (platformSize + 10) +  WIDTH/2  - movement);
        this.y = HEIGHT;
        //this.speed,
        this.direction = 3;
    }
  }


  display() {
    // fill(255, 0 ,0);
    //  ellipse(this.x, this.y, 25, 25);
    imageMode(CENTER);
    image(tomatoimg, this.x, this.y, 30, 30);
  }

  check(Bunny) {
    if (abs(this.x - Bunny.x) < 20
      && abs(this.y  - Bunny.y) < 20){
      gameState = 2;
    }
  }
}

class platform {
  constructor(_x, _y, _length) {
    this.x = _x;
    this.y = _y;
    this.length = _length;
  }

  display() {
    // fill(25);
    // rect(this.x, this.y, this.length, this.length);
    image(floorimg, this.x, this.y, this.length, this.length);
  }
}

 class Bunny {
  constructor(_x, _y, _img) {
    this.x = _x;
    this.y = _y;
    this.img = _img;
  }

  moveTo(direction) {
    if(direction === LEFT_ARROW && this.x > WIDTH/2 - WIDTH/8) {
      this.x = this.x - movement;
      this.img = bunnyLeft;

    }
    else if(direction === RIGHT_ARROW && this.x < WIDTH/2 + WIDTH/8) {
      this.x = this.x + movement;
      this.img = bunnyRight;

    }
    else if(direction === UP_ARROW && this.y > WIDTH/2 - WIDTH/8) {
      this.y = this.y - movement;
      this.img = bunnyBack;
    }
    else if(direction ===DOWN_ARROW && this.y < WIDTH/2 + WIDTH/8) {
      this.y = this.y + movement;
      this.img = bunnyFront;
    }
  }

  display() {
    // fill(255, 200, 100);
    // ellipse(this.x, this.y, 30, 30);
    imageMode(CENTER);
    image(this.img, this.x, this.y, 40, 40);
  }
}


class Carrot {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }

  place() { 
    new Carrot(
      this.x = floor(random(0,3)) * (platformSize + 10) +  WIDTH/2  - movement,
      this.y = floor(random(0,3)) * (platformSize + 10) +  WIDTH/2  - movement);
  }

  hit(Bunny) {
    if(this.x === Bunny.x && this.y === Bunny.y){
      score++
      this.place();
    }
  }

  display() {
    imageMode(CENTER);
    // fill(255, 255, 100);
    // ellipse(this.x, this.y, 20, 20);
    image(carrotimg, this.x, this.y, 30, 30);
  }

}


