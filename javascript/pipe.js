class Suelo {
    constructor(x, y, sueloImg) {
        this.x = x;
        this.y = y;
        this.sueloImg = sueloImg;
    }

    movSuelo(sueloGame) {

    }

    draw() {
        image(this.sueloImg, this.x, this.y);
    }
}

class TuberiaInf {
    constructor(x, y, tuberiaImg,) {
        this.x = x;
        this.y = y;
        this.tuberiaImg = tuberiaImg;
        this.velX = random(2, 4);
    }

    move() {
        this.x += this.velX;
    }

    draw() {
        image(this.tuberiaImg, this.x, this.y,)
    }
}

class TuberiaSup {
    constructor(x, y, tuberiaImgSup,) {
        this.x = x;
        this.y = y;
        this.tuberiaImg = tuberiaImgSup;
    }

    draw() {
        image(this.tuberiaImgSup, this.x, this.y,)
    }
}