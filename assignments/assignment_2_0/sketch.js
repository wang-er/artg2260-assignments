/*
Programming Basics ARTG 2260
Erin Wang
Assignment 2.0
Cubes
*/

function setup() {

  noStroke();
  createCanvas(800, 600);
  background(103);
    //polygon(200, 200, 50, 6); 

fill(255, 0 , 0);
    beginShape();
vertex(0, 0);
vertex(-50, 0); 
vertex(-25, -43); 
vertex(25, -43); 
endShape(CLOSE);


fill(0, 255 , 0);
    beginShape();
vertex(0, 0);
vertex(25, -43);
vertex(50, 0); 
vertex(25, 43); 
endShape(CLOSE);


fill(0, 0 , 255);
    beginShape();
vertex(0, 0);
vertex(25, 43); 
vertex(-25, 43); 
vertex(-50, 0); 
endShape(CLOSE);



  for (var y = 0; y <= 700; y += 86){
    for (var x = 0; x <= 900; x += 75){
      fill(100, 200, 100);
      if((x % 150) == 0){
    beginShape();
vertex(x, y);
vertex(x + 25, y - 43);
vertex(x + 50, y); 
vertex(x+ 25, y + 43); 
endShape(CLOSE);;
    }
    else{
beginShape();
vertex(x, y + 43);
vertex(x + 25, y - 43 + 43);
vertex(x + 50, y + 43); 
vertex(x+ 25, y + 43 + 43); 
endShape(CLOSE);;
    }



    }
  }

    for (var y = 0; y <= 700; y += 86){
    for (var x = 0; x <= 900; x += 75){
      fill(200-x, 200-x/3 , 255 - x/5);
      if((x % 150) == 0){
    beginShape();
vertex(x, y);
vertex(x + 25, y + 43); 
vertex(x - 25, y + 43); 
vertex(x - 50, y); 
endShape(CLOSE);
    }
    else{
      beginShape();
vertex(x, y + 43);
vertex(x + 25, y + 43 + 43); 
vertex(x - 25, y + 43 + 43); 
vertex(x - 50, y + 43); 
endShape(CLOSE);




    }
  }
}

    for (var y = 0; y <= 700; y += 86){
    for (var x = 0; x <= 900; x += 75){
    fill(80+ x, 40 + x/3 , 40 + x/10);
    if((x % 150) == 0){
    beginShape();
vertex(x, y);
vertex(x - 50, y); 
vertex(x -25, y - 43); 
vertex(x + 25, y -43); 
endShape(CLOSE);
    }
    else{
      beginShape();
vertex(x, y + 43);
vertex(x - 50, y + 43); 
vertex(x -25, y - 43 + 43); 
vertex(x + 25, y -43 + 43); 
endShape(CLOSE);

    }
  }
}
}

