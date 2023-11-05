let bird;
let fondo;
let sueloBase;

function preload() {
  baseImg = loadImage('./imgs/redbird-midflap.png');
  flyImg = loadImage('./imgs/redbird-upflap.png');
  fondo = loadImage('./imgs/background-day.png');
  sueloImg = loadImage('./imgs/suelo.png')

}

function setup() {
  bird = new Player(127, 244, baseImg, flyImg, 5, 1);
  sueloGame = new Suelo(0, 400, sueloImg);
  createCanvas(288, 512);
  
  
}

function draw() {
  background(fondo);
  bird.update();
  bird.draw();
  sueloGame.draw();
}

