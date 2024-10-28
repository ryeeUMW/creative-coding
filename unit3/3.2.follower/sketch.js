function preload(){
  // load the image from a file
  img = loadImage('/Users/a2190/Documents/GitHub/creative-coding/unit3/3.2.follower/ratfollower.gif');
}

function setup() {
  createCanvas(800, 800);

let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0; 
let y = 0;
}

function draw() {
  background(220);

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

 image(img,xspeed - 10,yspeed - 10,10,10);}