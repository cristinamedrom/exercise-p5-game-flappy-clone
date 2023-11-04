let bird;
let fondo;

function preload() {
  baseImg = loadImage('./imgs/redbird-midflap.png');
  flyImg = loadImage('./imgs/redbird-upflap.png');
  fondo = loadImage('./imgs/background-day.png');

}

function setup() {
  bird = new Player(127, 244, baseImg, flyImg, 1, 3);
  createCanvas(288, 512);
  
  
}

function draw() {
  background(fondo);
  bird.draw();
}