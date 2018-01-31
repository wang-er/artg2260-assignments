function setup() {

	createCanvas(800, 500);

	fill(255, 30, 10); 
	noStroke();


	for (var y = 10; y < 500; y += 70){
		for (var x = 10; x < 800; x += 50){
			fill(210, x, y); 
			triangle(x, y-20, x+25, y+50, x-25, y+50);
		}
	}

	for (var y = 30; y < 500; y += 70){
		for (var x = 35; x < 800; x += 50){
				fill(x, y, 100); 
			ellipse(x, y-20, 20, 20);
		}
	}
}

function draw(){
  	if (mouseIsPressed == true) {
    	rect(mouseX, mouseY, pmouseX, pmouseY); 
  	}	
}

function keyPressed() {
	if (key == 'b' || key == 'B') {
	  fill(0, 0, 255);
	} else if (key == 'c' || key == 'C'){
	  fill(0, 255, 255);
	} else if (key == 'm' || key == 'M'){
	  fill(255, 0, 255);
	} else if (key == 'w' || key == 'W'){
	  fill(0);
	}
}