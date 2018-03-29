let osc;
//let on = false;

var button1;
var c;
var d;
var e;
var f;
var g;
var a;
var b;
var c2;
let buttons = [];
// let buttons = [c, d, e, f, g, a, b, c2];

function setup() {
  createCanvas(660, 300);
  background(200);
  // button = createButton("Play", 10, 10);
  // button.mousePressed(togglePlay);

  // osc = new p5.Oscillator();
  // osc.setType('sine');
  // osc.freq(440);
  // osc.amp(0);
  // osc.start();

c = new Button(261.63, '#9400D3');
d = new Button(293.66, '#4B0082');
e = new Button(329.63, '#0000FF');
f = new Button(349.23, '#00FF00');
g = new Button(392.00, '#FFFF00');
a = new Button(440.00, '#FF7F00');
b = new Button(493.88, '#FF0000');
c2 = new Button(523.25, '#9400D3');

buttons = [c, d, e, f, g, a, b, c2];



}

// function playNote(note) {
//   if (!playing) {
//     // ramp amplitude to 0.5 over 0.05 seconds
//     note.amp(0.5, 0.05);
//     playing = true;
//     button.html('Pause');
//   } else {
//     // ramp amplitude to 0 over 0.5 seconds
//     osc.amp(0, 0.5);
//     playing = false;
//     button.html('Play');
//   }
// }


function draw() {
  
  for(i = 0; i < buttons.length; i++) {
  buttons[i].display(i*80 + 20);
  }

}


// 


function mousePressed() {
  if(mouseX < 80 && mouseX > 20 && mouseY < 180 && mouseY > 120) {
buttons[0].clicked();
  }
    if(mouseX < 160 && mouseX > 100 && mouseY < 180 && mouseY > 120) {
buttons[1].clicked();
  }
    if(mouseX < 240 && mouseX > 180 && mouseY < 180 && mouseY > 120) {
buttons[2].clicked();
  }
    if(mouseX < 320 && mouseX > 260 && mouseY < 180 && mouseY > 120) {
buttons[3].clicked();
  }
    if(mouseX < 400 && mouseX > 340 && mouseY < 180 && mouseY > 120) {
buttons[4].clicked();
  }
    if(mouseX < 480 && mouseX > 420 && mouseY < 180 && mouseY > 120) {
buttons[5].clicked();
  }
    if(mouseX < 560 && mouseX > 500 && mouseY < 180 && mouseY > 120) {
buttons[6].clicked();
  }
    if(mouseX < 640 && mouseX > 580 && mouseY < 180 && mouseY > 120) {
buttons[7].clicked();
  }
}





class Button {

  constructor(noteFreq, color){
  this.noteFreq = noteFreq;
  this.note = new p5.Oscillator();
  this.on = false;
  this.color = color;
}


display(x){
  //rectMode(CENTER);
  if(!this.on) {
   fill('#d3d3d3');
    rect(x, 120, 60, 60);


  }
    else {
    fill(this.color);
    rect(x, 120, 60, 60);

    }
}




clicked(){
  this.note.setType('sine');
  this.note.freq(this.noteFreq);
  this.note.amp(0);
  this.note.start();
  if (!this.on) {
    // ramp amplitude to 0.5 over 0.05 seconds
    fill(50);
    this.note.amp(0.5, 0.05);
    this.on = true;
    //this.color = ;
  } else {
    // ramp amplitude to 0 over 0.5 seconds
    fill(25);
    this.note.amp(0, 0.5);
    //this.
    this.on = false;
    //this.color = '#d3d3d3';
  }
}

}


