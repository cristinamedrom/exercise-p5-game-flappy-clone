class Suelo {
    constructor(x, y, sueloImg) {
        this.x = x;
        this.y = y;
        this.sueloImg = sueloImg;
    }

    draw() {
        image(this.sueloImg, this.x, this.y);
    }
}