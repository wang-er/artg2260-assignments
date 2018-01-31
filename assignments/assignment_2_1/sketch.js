/*
Programming Basics ARTG 2260
Erin Wang
Assignment 2.1
Rip MS Paint
*/

var weight = 1;

function setup() {
  createCanvas(1000, 700);


  strokeWeight(1);
//buttons

//clear
fill(255, 102, 102);
rect(0, 0, 200, 50);

fill(255);
textSize(32);
text('Clear', 60, 35);

//color current
fill(255);
rect(210, 0, 50, 50);
    fill(0);
   rect(215, 5, 40, 40);

//color select
rect(270, 0, 230, 50);

//red
fill(255,0,0);
rect(270, 0, 57, 25);
//orange
fill(255,100,0);
rect(327, 0, 57, 25);
//yellow
fill(255,255,0);
rect(384, 0, 57, 25);
//green
fill(0,200,0);
rect(270, 25, 57, 25);
//blue
fill(0,100,255);
rect(327, 25, 57, 25);
//purple
fill(100,0,255);
rect(384, 25, 57, 25);
//black
fill(0);
rect(441, 0, 59, 25);  //59
//white
fill(255);
rect(441, 25, 59, 25);//59

//brush curreent
fill(255);
rect(510, 0, 80, 50);
      fill(0);
textSize(32);
text(weight.toString(), 540, 35);


//brush change
/*fill(255);
rect(600, 0, 190, 50); */

//button up
fill(200);
rect(600, 0, 57, 25);
fill(0);
textSize(32);
text('+', 620, 22);

//button down
fill(50);
rect(600, 25, 57, 25);

fill(255);
textSize(32);
text('-', 624, 48);


//savd
fill(102, 255, 102);
rect(799, 0, 200, 50);

fill(255);
textSize(32);
text('Save', 859, 35);

//current canvas
fill(255);
rect(0, 60, 999, 639);
  stroke(0); // we moved the default stroke color to setup()
    strokeWeight(weight);
}

function draw(){
    if (mouseIsPressed == true && mouseY > 60) {
      line(mouseX, mouseY, pmouseX, pmouseY); 
    } 
}


function mouseClicked() {
  //clear button
   if(mouseX < 200 && mouseX > 0 && mouseY < 50) {

    //clear canvas
    fill(255);
    strokeWeight(1);
    stroke(1);
    rect(0, 60, 999, 639);

    //restart the color picker
    strokeWeight(1);
    stroke(1);
    fill(0);
   rect(215, 5, 40, 40);

   //makes sure the size doesn't get changed when clearing
      strokeWeight(weight);
  }



  //colors

  //R
  else if(mouseX < 327 && mouseX > 270 && mouseY < 25) {
    strokeWeight(1);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    rect(215, 5, 40, 40);

    stroke(255, 0, 0);
    strokeWeight(weight);
  }

  //O

  else if(mouseX < 384 && mouseX > 327 && mouseY < 25) {
    strokeWeight(1);
    stroke(255, 100, 0);
    fill(255, 100, 0);
    rect(215, 5, 40, 40);

    stroke(255, 100, 0);
    strokeWeight(weight);
  }

  //Y

   else if(mouseX < 441 && mouseX > 384 && mouseY < 25) {
    strokeWeight(1);
    stroke(255, 255, 0);
    fill(255, 255, 0);
    rect(215, 5, 40, 40);

    stroke(255, 255, 0);
    strokeWeight(weight);
  }

  //G
    if(mouseX < 327 && mouseX > 270 && mouseY > 25 && mouseY < 50) {
      strokeWeight(1);
    stroke(0, 200, 0);
    fill(0, 200 ,0);
    rect(215, 5, 40, 40);

    stroke(0, 200, 0);
    strokeWeight(weight);
  }

  //B
    else if(mouseX < 384 && mouseX > 327 && mouseY > 25 && mouseY < 50) {
      strokeWeight(1);
    stroke(0, 100, 255);
    fill(0, 100 ,255);
    rect(215, 5, 40, 40);

    stroke(0, 100, 255);
    strokeWeight(weight);
  }

  //P
   else if(mouseX < 441 && mouseX > 384 && mouseY > 25 && mouseY < 50) {
    strokeWeight(1);
    stroke(100, 0, 255);
    fill(100, 0 ,255);
    rect(215, 5, 40, 40);

    stroke(100, 0, 255)
    strokeWeight(weight);
  }

  //Bl
     else if(mouseX < 499 && mouseX > 441 && mouseY < 25) {
      strokeWeight(1);
    stroke(0);
    fill(0);
   rect(215, 5, 40, 40);

   stroke(0);
   strokeWeight(weight);
  }

  //W
       else if(mouseX < 499 && mouseX > 441 && mouseY > 25 && mouseY < 50) {
        strokeWeight(1);
    stroke(255);
    fill(255);
   rect(215, 5, 40, 40);

   stroke(255);
   strokeWeight(weight);
  }


  //brush size changer
  else if (mouseX > 600 && mouseX < 657 && mouseY < 25){
      weight++;
      strokeWeight(0);
fill(255);
rect(511, 1, 79, 49);
      fill(0);
textSize(32);
text(weight.toString(), 540, 35);

      strokeWeight(weight);



    } else if (mouseX > 600 && mouseX < 657 && mouseY > 25 && mouseY < 50 && weight > 1){
      weight--;
      strokeWeight(0);
fill(255);
rect(511, 1, 79, 49);
      fill(0);
textSize(32);
text(weight.toString(), 540, 35);

      strokeWeight(weight);



    
    

  //select brush


  //save button

     } else if (mouseX > 800 && mouseX < 1000 && mouseY > 0 && mouseY < 50){

      saveCanvas('myCanvas', 'png');

}

}




