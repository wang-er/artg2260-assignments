
// declare variables xPos and yPos
var xPos;
var yPos;
// declare a var called xSpeed;
var xSpeed;
// declare a var called ySpeed
var ySpeed;
// declare a variable called img 
var img;

// declare a var for image width, assign 40 
var imgWidth = 40;
// declare a var for image height, assign 30
var imgHeight = 30;
// use the preload()function to load an image,
function preload() {
  img = loadImage('assets/woman.png');
}
// format: img = loadImage('assets/imageName.png');
// you'll need to create a folder called assets, and include the png there

function setup() {
  // create a canvas at least 400 x 400
  createCanvas(400, 400);
  // set xPos to be half of the width 
  var xPos = width / 2;
  // set yPos to be half of the height
  var xPos = height / 2;
  // assign xSpeed and ySpeed 
  // with random values between 1 and 10
  var xSpeed = random(1, 10);
  var ySpeed = random(1, 10);
}

function draw(){
  background(0);                 // set the background to black

  // draw the image at the (xPos, yPos) coordinate,
  // using the template image(img, xPos, yPos, width, height)

  image(img, xPos, yPos, width, height);

  // add the xSpeed to xPos
  xPos += xSpeed;
  // add the ySpeed to yPos
  yPos += ySpeed;
  // if we reach the edge of the canvas
  // turn around (toggle xSpeed negative to positive)
  if (xPos >= width || xPos <= 0){   
    xSpeed = -1;
  }

  // same as above, toggle ySpeed if we hit the top or bottom
  
    if (yPos >= height || yPos <= 0){   
    ySpeed = -1;
}
}
























