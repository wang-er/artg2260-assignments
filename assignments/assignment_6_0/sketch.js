// // let img;
// // let spots = []; 

// // //function preload(){
// // //  img = loadImage('assets/planet.png');
// // //}

// // function setup(){
// //     createCanvas(600, 600);
// //     //imageMode(CENTER); // draws the image with the x, y parameters in the center
// //     for (let i = 0; i < 10; i++){
// //         let offset = i*20;
// //       //let scale = random(0.05, 0.1);
// //       //let spinRate = random(1, 2);
      
// //       let s = new Spot(offset, 0.01);
// //       spots.push(s);
// //     }
// // }

// // function draw(){
// //     background(255, 1);
// //     push();
// //   translate(width/2, height/2);     // move origin to center
// //     //image(img, 0, 0, width/5, height/5);  // render the "sun"
// //   for(s of spots){            // render each planet
// //     s.update();
// //     s.display();
// //   }
// //     pop();
  
// //     push();
// //   translate(width/2, height/2); 
// //     rotate(180);
// //   // move origin to center
// //     //image(img, 0, 0, width/5, height/5);  // render the "sun"
// //   for(s2 of spots){           // render each planet
// //     s2.update();
// //     s2.display();
// //   }
// //     pop();
  
// //       push();
// //   translate(width/2, height/2); 
// //     rotate(90);
// //   // move origin to center
// //     //image(img, 0, 0, width/5, height/5);  // render the "sun"
// //   for(s3 of spots){           // render each planet
// //     s3.update();
// //     s3.display();
// //   }
// //     pop();
  
// //       push();
// //   translate(width/2, height/2); 
// //     rotate(270);
// //   // move origin to center
// //     //image(img, 0, 0, width/5, height/5);  // render the "sun"
// //   for(s4 of spots){           // render each planet
// //     s4.update();
// //     s4.display();
// //   }
// //     pop();
// // }

// // class Spot{
// //   constructor(_offset, _rate){
// //         this.offset = _offset;
// //     //this.scale = _scale;
// //     this.rate = _rate;
// //     this.angle = 0;
// //   }

// //   update(){
// //     this.angle += this.rate;
// //   }

// //   display(){
// //       fill(0);
// //       rotate(this.angle); // create a rotation around the canvas center
// //       push();       // enter new drawing state
// //         translate(this.offset, 0);  // move the origin some distance to the right (+x)
// //         //scale(this.scale);          // scale the image around the new origin
// //         rotate(this.angle);     // rotate the image around the new origin
// //         ellipse(30, 40, 3, 3); // render the image
// //       pop();            // exit custom drawing state
// //   }
// // }

// // let grid;
// let planes = []; 

// let spot; 
// let spots = [];

// // function preload(){
// //   grid = loadImage('assets/grid.png');
// // }

// function setup(){
//     createCanvas(600, 600);
//     rectMode(RADIUS);
//     for (let i = 0; i < 5; i++){
//       let scale = random(0.5, 1);
//       let length = scale * 100
//       let spinRate = random(-0.05, 0.05);
//       let p = new Plane(random(width), random(100, 110)*i, length, scale, spinRate);
//       planes.push(p);
//     }


//       for (let i = 0; i < 0; i++){  // Make a for() loop to create the desired number of Spots
//     // Add an index [i] to create multiple Spots
//     spots[i] = new Spot(50, 50);
//    }
// }

// function draw(){
//   background(0);
//   for(p of planes){
//     p.update();
//     p.display();
//   }

//     for (let i = 0; i < spots.length; i++){
//     spots[i].display();
//     spots[i].move();
//     spots[i].checkEdges();
//     spots[i].collideBox();
//   }
// }

// class Plane{
//   constructor(_x, _y, _length, _scale, _rate){
//     this.x = _x;
//     this.y = _y;
//     this.length = _length;
//     this.scale = _scale;
//     this.rate = _rate;
//     this.angle = 0;
//   }

//   update(){
//     this.angle += this.rate;
//   }

//   display(){
//     push();
//     translate(this.x, this.y);
//     rotate(this.angle);
//     scale(this.scale);
//     rect(0, 0, this.length, this.length);
//     pop();
//   }
// }


// function mousePressed(){
//   spots.push(new Spot(mouseX, mouseY));
// }



// class Spot{
//   constructor(_x, _y){
//     this.x = _x;
//     this.y = _y;
//     this.xVel = random(-5, 5);
//     this.yVel = random(-5, 5);
//     this.yAcc = 0.9;
//     this.friction = 0.95;
//     this.diameter = 30;
//   }

//   display() {
//     ellipse(this.x, this.y, this.diameter, this.diameter);
//   }
  

//   move() {
//       this.yVel += this.yAcc;
//       this.x += this.xVel;                
//       this.y += this.yVel;
//   }

//   checkEdges() {
//     if (this.x+this.diameter/2 >= width || this.x-this.diameter/2 <= 0) {    
//       this.xVel*= -1;
//     }

//     if (this.y+this.diameter/2 >= height) {   
//       this.yVel *= -1;
//             this.y = height - this.diameter/2;
//             this.yAcc /= this.friction;
//     }

//     if (this.y-this.diameter/2 <= 0) {   
//       this.yVel *= -1;
//     }
//   }

//   collideBox() {
//   for (let i = 0; i < planes.length; i++) {

//     if(this.x+this.diameter/2 > planes[i].x - planes[i].length/2 
//       && this.x-this.diameter/2 < planes[i].x + planes[i].length/2) {
//        this.xVel*= -1;
//     }
//         if(this.y+this.diameter/2 > planes[i].y - planes[i].length/2 
//       && this.y-this.diameter/2 < planes[i].y + planes[i].length/2) {
//        this.yVel*= -1;
//     }

//   }
// }
// }

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