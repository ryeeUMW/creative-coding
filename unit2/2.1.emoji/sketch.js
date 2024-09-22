function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background(220);

  stroke("gold"); //stroke color
  strokeWeight(8); //stroke weight
  fill("yellow"); //fill

  ellipse(200,200,250,250); //creating base face


  stroke("brown");//stroke color
  strokeWeight(4); //stroke weight
  fill("brown"); //fill

  ellipse(150,250,30,60); //left eye

  stroke("brown");//stroke color
  strokeWeight(4); //stroke weight
  fill("brown"); //fill

  ellipse(250,250,30,60); //right eye

//drawing the mouth

  noFill();

  arc(200, 210, 160,160,radians(210),radians(330));
  stroke("brown");


  rectMode(CENTER);
 
}