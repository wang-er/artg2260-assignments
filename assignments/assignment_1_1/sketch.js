/*
Programming Basics ARTG 2260
Erin Wang
Assignment 1.1
Landscape - Midnight Sheep

Note: Click to place stars
*/

function setup() {

	//just inserting random values for all these shapes and colors
	createCanvas(800, 550);
	background(20, 60, 126);
strokeWeight(0);

//hill
fill(47, 132, 95);
beginShape();
vertex(900, 500);
bezierVertex(770, 200, 400, 110, 30, 500);
endShape();

//hill
fill(58, 157, 113);
beginShape();
vertex(-100, 500);
bezierVertex(30, 150, 400, 350, 800, 500);
endShape();

//moon

fill(255,255,153);
ellipse(125, 125, 100, 100);

fill(20, 60, 126);
ellipse(148, 106, 60 ,60);

fill(200,200, 0, 20);
ellipse(125, 125, 120, 120);

fill(200,200, 0, 20);
ellipse(125, 125, 140, 140);

fill(200,200, 0, 20);
ellipse(125, 125, 160, 160);

fill(200,200, 0, 20);
ellipse(125, 125, 180, 180);

fill(200,200, 0, 20);
ellipse(125, 125, 200, 200);

//front grass
fill(75, 183, 120);
rect(0, 460, 800, 90);

 //flowers

 fill(153,255,153);
  ellipse(50, 513, 15, 15);

  fill(153,204,255);
  ellipse(220, 500, 15, 15);

  fill(255,102,102);
  ellipse(372, 530, 15, 15);

  fill(255,178,102);
  ellipse(518, 491, 15, 15);

  fill(204,153,255);
  ellipse(678, 525, 15, 15);


fill(255,255,153);
  ellipse(50, 513, 5, 5);

  fill(255,255,153);
  ellipse(220, 500, 5, 5);

  fill(255,255,153);
  ellipse(372, 530, 5, 5);

  fill(255,255,153);
  ellipse(518, 491, 5, 5);

  fill(255,255,153);
  ellipse(678, 525, 5, 5);



//gate
fill(129,96,70);
  //starting point for x coordinate
  //i = # of occurences
  x = -5;
  for(var i = 0; i < 21 ; i++) {
    rect(x, 390, 10, 70);
    rect(x, 410, 25, 10);
    rect(x-15, 410, 25, 10);
    //spacing 
    x += 40;
  }

  //sheep

  //head
  fill(30);
  //makes pivot point at 152, 449
  translate(166, 449); 
  rotate(-PI/3.0);
  ellipse(0, 0, 25, 40);

  //resets pivot to 0, 0 and rotation
  rotate(PI/3.0);
  translate(-166, -449);
  //feet
  fill(30);
  ellipse(100, 490, 10, 20);
  ellipse(132, 490, 10, 20);

  //body
  fill(255);
  ellipse(100, 440, 40, 40);
  ellipse(135, 440, 40, 40);
  ellipse(150, 470, 40, 40);
  ellipse(115, 470, 40, 40);
  ellipse(85, 470, 40, 40);


//head
  fill(30);
  //makes pivot point at 152, 449
  translate(607, 480); 
  rotate(PI/3.0);
  ellipse(0, 0, 25, 40);

  //resets pivot to 0, 0 and rotation
  rotate(-PI/3.0);
  translate(-607, -480);
  //feet
  fill(30);
  ellipse(640, 520, 10, 20);
  ellipse(672, 520, 10, 20);

  //body
  fill(255);
  ellipse(640, 470, 40, 40);
  ellipse(675, 470, 40, 40);
  ellipse(690, 500, 40, 40);
  ellipse(655, 500, 40, 40);
  ellipse(625, 500, 40, 40);
}

//stars, click to get stars!
function  mousePressed(){
	fill(255, 255, 200);
  star(mouseX, mouseY, 5, 10, 5); 
}


// credit to p5.js for coding this function
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}