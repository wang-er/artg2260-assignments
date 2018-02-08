var n = 10; //10 circles per round
var saturation = 0 //have the saturation start at 0
var raty = 100 //trying out different frame rates

function setup() {
  var cnv = createCanvas(600, 600);
  background(230);
  noStroke();
  frameRate(30);
  //want to only manipulate saturation, so convert to HSB
  colorMode(HSB, 255, 255, 255, 1);
}

function draw() {
saturation = map(mouseX, 0, width, 0, height);


for (i = 0; i < n; i++) {
    if (frameCount%raty > 0){
    fill(random(0,255), saturation , random(100, 255));
    ellipse(random(0, width), random(0, height), frameCount%raty, frameCount%raty);
  } 
}
}
