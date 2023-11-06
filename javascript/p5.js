let bird;
let fondo;
let sueloBase;
let tuberiaVerde;

function preload() {
  baseImg = loadImage('./imgs/redbird-midflap.png');
  flyImg = loadImage('./imgs/redbird-upflap.png');
  fondo = loadImage('./imgs/background-day.png');
  sueloImg = loadImage('./imgs/suelo.png');
  tuberiaImg = loadImage('./imgs/pipe-green.png');
  tuberiaImgSup = loadImage('./imgs/pipe-green-180.png');

}

function setup() {
  bird = new Player(127, 244, baseImg, flyImg, 5, 1);
  sueloGame = new Suelo(0, 400, sueloImg);
  tuberiaSuelo = new TuberiaInf(200, 350, tuberiaImg);
  /*tuberiaCielo = new TuberiaSup(200, 150, tuberiaImg Sup);*/
  createCanvas(288, 512);
  
  
}

function draw() {
  background(fondo);
  bird.update();
  bird.draw();
  tuberiaSuelo.draw();
  /*tuberiaCielo.draw();*/
  sueloGame.draw();


}

