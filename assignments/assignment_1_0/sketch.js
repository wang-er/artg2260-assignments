/*
Programming Basics ARTG 2260
Erin Wang
Assignment 1.0
Stick Figure - Magnificent Marco
*/


function setup() {

	//just inserting random values for all these shapes and colors
	createCanvas(600, 600);
	background(100, 0, 0);

fill(160,80,0);
rect(0, 450, 600, 300);

strokeWeight(0);
  beginShape();
  fill(255, 255, 0, 30);
vertex(150, 500);
vertex(450, 500);
vertex(410, 0);
vertex(210, 0);
endShape(CLOSE);

//bottom
fill(200,100,0);
ellipse(300, 500, 300, 30);




//background light
//wand
strokeWeight(5);
line(160,255, 177, 327);
stroke(255);
line(160,255, 166, 280);
//head
	stroke(0);
	strokeWeight(2);
	fill(255);
	ellipse(300, 175, 125, 125);
//body
		line(300, 240, 300, 400);

		//right arm
		line(300, 240, 350, 300);
		line(350, 300, 390, 230);

		//right hand
		bezier(390, 230, 424, 207, 391, 188, 390, 230);

		//left arm
		line(300, 240, 250, 300);
		line(250, 300, 190, 320);


		//left hand
		bezier(190, 320, 155, 323, 169, 349, 190, 320);



		//right leg
		line(300, 400, 350, 500);
		//left leg
		line(300, 400, 250, 500);


		//right foot
		bezier(380, 500, 380, 480, 350, 480, 350, 500);
		line(380, 500, 350, 500);

		//left foot
		bezier(220, 500, 220, 480, 250, 480, 250, 500);
		line(220, 500, 250, 500);



	//face
	//eyes
	fill(0);
	ellipse(260, 175, 5, 5);

	fill(0);
	ellipse(340, 175, 5, 5);
	//mouth
	noFill();
  bezier(275, 180, 275, 210, 325, 210, 325, 180);
  line(275, 180, 325, 180);

  //hat
  strokeWeight(5);
  line(334, 93, 208, 186);

 strokeWeight(3);
  beginShape();
  fill(0);
vertex(308, 114);
vertex(261, 24);
vertex(173, 85);
vertex(239, 163);
endShape(CLOSE);


  beginShape();
  fill(255, 0, 0);
vertex(308, 114);
vertex(300, 102);
vertex(230, 151);
vertex(239, 163);
endShape(CLOSE);


}

function  mousePressed(){
	strokeWeight(1);
  ellipse( mouseX, mouseY, 2, 2 );
  text( "x: " + mouseX + " y: " + mouseY, mouseX + 2, mouseY );
}