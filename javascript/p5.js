let bird;

function preload() {
  baseImg = loadImage('./imgs/redbird-midflap.png');
  flyImg = loadImage('./imgs/redbird-upflap.png')
}

function setup() {
  bird = new Player(200, 325, baseImg, flyImg, 1, 3);
  createCanvas(400, 650);
  
  
}

function draw() {
  background('#66bdc6');
  bird.draw();
}