var bunnyimg;
var carrotimg;


let spots = [];
let platforms = [];

let WIDTH = 500;
let HEIGHT = 500;

let platformSize = 60;

let movement = platformSize + platformSize/6;

let gameState = 0;
let score = 0;


var bunnyvar;
var carrotvar;
var spotvar;
function setup(){
  framerate = 20;

createCanvas(WIDTH, HEIGHT);

var randomNumber = floor(random(0,3));

//use later
bunnyimg = loadImage("images/bunny.png");
carrotimg = loadImage("images/carrot.png");

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
  background(255);
  text("Click to Begin", 10, 30);


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
      0, 0.5 * i + 1);
   }

    //set up a bunny! 
    bunnyvar = new Bunny(WIDTH/2, HEIGHT/2, "meep");

    carrotvar = new Carrot(floor(random(0,3)) * movement +  WIDTH/2 - movement,
      floor(random(0,3)) * movement +  WIDTH/2 - movement);

    score = 0;

    spotvar = new Spot(floor(random(0,3)) * movement +  WIDTH/2 - movement, 
      0, 1);


}

function update(){
  noStroke();
  background(200, 200, 255);


//set up for background
for (let i = 0; i < platforms.length; i++){
  platforms[i].display();
}
  text("Playing", 10, 30);
  text("Score: " + score, 10, 90); 



  bunnyvar.display();

  carrotvar.display();

  carrotvar.hit(bunnyvar);

      for (let i = 0; i < spots.length; i++){  // Make a for() loop to loop through each Spot 
    spots[i].move(0);            // Move each object
    spots[i].display();         // Display each object
    spots[i].check(bunnyvar);           // Check for mouse overlap
  }


 // spotvar.display();
  //spotvar.move(0);
  //spotvar.check(bunnyvar);
}

function gameOver(){
  background(255);
  text("Game Over", 10, 30);
  text("Score: " + score, 10, 90);
}

function mouseClicked(){
 if (gameState == 0){ //start to playing
   gameState = 1;
 } else if (gameState == 2){ //game over to restart to start again
   gameState = 0;
 }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
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
  constructor(_x, _y, _speed) {
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
  }


  move(direction) {
    if(direction === 0) {
      this.x += this.speed;
      if (this.x > (WIDTH)){
        this.place()
    }
  }  else if(direction === 1) {
      this.x -= this.speed;
      if (this.x < 0) {
        this.place()
      }
    } else if(direction === 2) {
      this.y += this.speed;
      if (this.y > (HEIGHT)) {
        this.place()
      }
    }else if(direction === 3) {
      this.y -= this.speed;
      if (this.y < 0) {
        this.place()
    }
  }
}






  place() { 
    if(floor(0,4) === 0) {
      new Spot(
        this.x = 0,
        this.y = (floor(random(0,3)) * (platformSize + 10) +  HEIGHT/2  - movement),
        this.speed);
    } else if(floor(0,4) === 1) {
      new Spot(
        this.x = WIDTH,
        this.y = (floor(random(0,3)) * (platformSize + 10) +  HEIGHT/2  - movement),
        this.speed);
    } else if(floor(0,4) === 2) {
      new Spot(
        this.x = (floor(random(0,3)) * (platformSize + 10) +  WIDTH/2  - movement),
        this.y = 0,
        this.speed);
    } else if(floor(0,4) === 3) {
      new Spot(
        this.x = (floor(random(0,3)) * (platformSize + 10) +  WIDTH/2  - movement),
        this.y = HEIGHT,
        this.speed);
    }
  }


  display() {
    fill(255, 0 ,0);
     ellipse(this.x, this.y, 25, 25);
  }

  check(Bunny) {
    if (abs(this.x - Bunny.x) < 5
      && abs(this.y  - Bunny.y) < 5){
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
    fill(25);
    rect(this.x, this.y, this.length, this.length);
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
    }
    else if(direction === RIGHT_ARROW && this.x < WIDTH/2 + WIDTH/8) {
      this.x = this.x + movement;
    }
    else if(direction === UP_ARROW && this.y > WIDTH/2 - WIDTH/8) {
      this.y = this.y - movement;
    }
    else if(direction ===DOWN_ARROW && this.y < WIDTH/2 + WIDTH/8) {
      this.y = this.y + movement;
    }
  }

  display() {
    fill(255, 200, 100);
    ellipse(this.x, this.y, 30, 30);
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
    fill(255, 255, 100);
    ellipse(this.x, this.y, 20, 20);
  }

}


