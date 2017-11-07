var img;

function preload(){
  img = loadImage("assets/colour3.jpg");
}

function setup(){
  createCanvas(600,400);
  img.loadPixels();
  //pixelDensity(1);
}

function draw(){
  image(img, 0 , 0, 100,200);
}
