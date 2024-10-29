
let sprite;
let debug = false;//when assigned true I can test that mouseX and mouseY work
let speedfactor = 3; //the speed of the sprite
let xspeed = speedfactor;
let yspeed = speedfactor;
let x=0; //sprite spawn
let y=0;
let d=0;

function preload() {
   sprite = loadImage('https://ryeeumw.github.io/creative-coding/unit3/3.2.follower/ratfollower.gif');
}

function setup() {
  createCanvas(800, 800);

x = random(width); //spawning the sprite in a random point on the canvas
y = random(height);
}

//draw canvas
function draw() {
  background(10);

//distance formula
d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

x += xspeed;
y += yspeed;

//drawing an image to follow the mouse
image(sprite,x,y,50,50);
// circle(x,y,50);

//having the sprtie follow the mouse
if (mouseX > x){
   xspeed = speedfactor;
}
else{
   xspeed = -speedfactor;
}

if (mouseY > y){
   yspeed = speedfactor;
}

else{
   yspeed = -speedfactor;
}

//respawning sprite when it hits the mouse
if (d < 25){
   x = random(width);
   y = random(height);
  }

if (debug){
   textSize(30);
   text("mouseX:" + mouseX, 50,50);
   text("mouseY:" + mouseY, 50,80);
   text("x: " + x, 50,120);
   text("y: " + y, 50,150);
   text("d: " + d, 50,180);
   }
}