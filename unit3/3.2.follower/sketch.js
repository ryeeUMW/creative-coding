// function preload(){
//   // load the image from a file
//   img = createImage('/Users/a2190/Documents/GitHub/creative-coding/unit3/3.2.follower/ratfollower.gif');
// }

let debug = false;
let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x=0; 
let y=0;
let d=0;

function setup() {
  createCanvas(800, 800);

x = random(width);
y = random(height);
}

function draw() {
  background(220);

d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

x += xspeed;
y += yspeed;

circle(x,y,50);

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

if (d < 25){
   fill(random(10,250),random(10,250),random(10,250),255);
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

 // image(img,xspeed,yspeed,10,10);}