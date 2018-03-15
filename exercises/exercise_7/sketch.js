/*
Exercise 4.0: Teleporting Box
Create a sketch that consists of a setup() and draw() function and a Box class. 
The Box class should contain fields for color and y positions. 
It should contain a move() method that raises the box one pixel per frame. 
It should contain a teleport() function that checks for if the box has reached the top of the canvas,
 and if so, change its color randomly and teleport it back to the bottom of the canvas. 

 Submit this as Exercise 4.0 on your weekly page.*/

let box; 

function setup() {
  createCanvas(600, 600);
  box = new Box();
}

function draw() {
  background(0);
  box.display();
  box.move();
  box.teleport();

}

class Box{
  constructor(){
    this.x = width/2;
    this.y = height;
    this.color = fill(200, 100, 100);
  }

    display() {
    this.color;
    rect(this.x, this.y, 100, 100); 
  }

  move(){
    this.y -= 1;
  }
  teleport(){
    if(this.y <= 0) {
      this.color = fill(random(0, 255), random(0, 255), random(0, 255));
      this.y = height;

    }
  }

}
