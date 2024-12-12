let xLeft = 160;
let xRight = 240;
let y = 180;

function setup() {
  // create a canvas
  createCanvas(400, 400);
}

//I wanted to generate the emoji that has the eye roll but the eyes follow your mouse

function draw() {
  background(220);

  stroke("gold"); //stroke color
  strokeWeight(8); //stroke weight
  fill("yellow"); //fill

  ellipse(200,200,250,250); //creating base face

//the mouth
  noFill();

  strokeWeight(10);
  stroke("brown");
  line(150,250,250,250);

  // Eye balls
  noStroke();
  fill(255);
  ellipse(160, 180, 60);
  ellipse(240, 180, 60);

  // Pupils
  fill(0);
  ellipse(xLeft, y, 25);
  ellipse(xRight, y, 25);

  y = map(mouseY, 0, height, 170, 190, true);
  xLeft = map(mouseX, 0, width, 150, 170, true);
  xRight = map(mouseX, 0, width, 230, 250, true);
 
}