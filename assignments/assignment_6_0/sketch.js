let spot; 
let spots = [];
let boxes = [];


function setup() {
  colorMode(HSB);
  createCanvas(600, 600);
  for (let i = 0; i < 20; i++) {
    boxes[i] = new Box(random(width - 40), random(height - 40), 40, 40, 200);
  }

     for (let i = 0; i < 0; i++){  // Make a for() loop to create the desired number of Spots
    // Add an index [i] to create multiple Spots
    spots[i] = new Spot(50, 50);
   }
}

function draw() {
  background(40);
  for (b of boxes){
    b.display();
    b.move();
    b.bounce();
  b.collide();

  }

       for (let i = 0; i < spots.length; i++){
    spots[i].display();
    spots[i].move();
    spots[i].checkEdges();
    spots[i].collideBox();
  }
}

function mousePressed(){
  spots.push(new Spot(mouseX, mouseY));
}


class Box {

  constructor(_x, _y, _w, _h, _color){
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.accX = random(0.2, 0.5);
    this.accY = random(0.2, 0.5);
    this.color = _color;
    this.angle = 0;
  }
  
  display() {
    push();
    fill(this.color, 255, 255);
    noStroke();
    rect(this.x, this.y, this.w, this.h);

    fill(abs(255 - this.color), 255, 255);
    rect(this.x + this.w/4, this.y + this.h/4, this.w/2, this.h/2);
    pop();
  }


  move(){
    this.x += this.accX;
    this.y += this.accY;
  }

  bounce(){
    if (this.x > width - this.w || this.x < 0) {
      this.accX *= -1;
      if (this.x > width / 2) {
        this.x = width - this.w;
      } else {
        this.x = 0;
      }
    }
    if (this.y > height - this.h || this.y < 0) {
      this.accY *= -1;
      if (this.y > height / 2) {
        this.y = height - this.h;
      } else {
        this.y = 0;
      }
    }
  }
  
  collide(){
    for (let j = 0; j < boxes.length; j++) {
      if (this.x + this.w + this.accX >= boxes[j].x 
        && this.y + this.h >= boxes[j].y 
        && this.y <= boxes[j].y + boxes[j].h 
        && this.x + this.accX <= boxes[j].x + boxes[j].w) {
          this.accX *= -1;
          boxes[j].accX *= -1;
          //tried to fix collision
          this.x += this.accX;
      }
      if (this.y + this.h + this.accY >= boxes[j].y 
        && this.x + this.w >= boxes[j].x 
        && this.x <= boxes[j].x + boxes[j].h 
        && this.y + this.accY <= boxes[j].y + boxes[j].h) {
        this.accY *= -1;
        boxes[j].accY *= -1;

        //tried to fix collision
        this.y += this.accY;
      }
    }
  }
}


class Spot{
  constructor(_x, _y, _color){
    this.x = _x;
    this.y = _y;
    this.xVel = random(-0.5, 0.5);
    this.yVel = random(-0.5, 0.5);
    this.yAcc = 0.09;
    this.friction = 0.95;
    this.diameter = 30;
    this.color = random(255);
  }

  display() {
    fill(this.color, 255, 255);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  

  move() {
      this.yVel += this.yAcc;
      this.x += this.xVel;                
      this.y += this.yVel;
  }

  checkEdges() {
    // if (this.x+this.diameter/2 >= width || this.x-this.diameter/2 <= 0) {    
    //   this.xVel*= -1;
    // }

    if (this.y+this.diameter/2 >= height) {   
      this.yVel *= -1;
            this.y = height - this.diameter/2;
            this.yAcc /= this.friction;
    }

    if (this.y-this.diameter/2 <= 0) {   
      this.yVel *= -1;
    }
  }

  
  collideBox(){
    for (let j = 0; j < boxes.length; j++) {
      if (this.x - this.diameter/2 >= boxes[j].x 
        && this.y - this.diameter/2 >= boxes[j].y 
        && this.y + this.diameter/2 <= boxes[j].y + boxes[j].h 
        && this.x + this.diameter/2 <= boxes[j].x + boxes[j].w) {
          this.xVel *= -1;

          boxes[j].color = this.color;
      }
      if (this.y + this.diameter/2 >= boxes[j].y 
        && this.x + this.diameter/2 >= boxes[j].x 
        && this.x - this.diameter/2 <= boxes[j].x + boxes[j].h 
        && this.y - this.diameter/2 <= boxes[j].y + boxes[j].h) {
        this.yVel *= -1;
        boxes[j].color = this.color;
        this.y += this.yAcc;
      }
    }
  }

  }