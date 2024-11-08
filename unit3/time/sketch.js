function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(10);
  clock();
}

function clock() {
  let Hour = hour(); //initalization of the hour, minute, and second functions
  let Min = minute();
  let Sec = second();
  let noon = Hour >= 12? " PM":" AM"
  let y = map(Hour+Min+Sec,400,0,0, height); //maping time to the canvas height

//this first cricle is to be a bit bigger than the actual sun to give the illusion of the sun glowing but it still moves like the second circle
  fill(60,60,0,255);
  noStroke();
  circle(200, y, 120); //setting the x coordinate to be at the center of the canvas, the y coordinate is mapped to move aat the current time

  fill(60,60,0,255);
  stroke('yellow');
  strokeWeight(4);
  circle(200, y, 100); //setting the x coordinate to be at the center of the canvas, the y coordinate is mapped to move aat the current time

  if (noon = true);{ //if the sun hits noon at the center of the canvas the background should change a yellow for a second
    background(60,60,0,255);
  }
  else();{ //then goes back to the black for the rest of the times.
    background (10);
  }
}