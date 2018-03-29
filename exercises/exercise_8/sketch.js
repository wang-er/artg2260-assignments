let myDiv;
function setup() {
  background(200);
  myDiv = createDiv('A question of scale');
  myDiv.position(20, 20);
}

function draw() {
  myDiv.style('font-size', mouseX + 'px');
}