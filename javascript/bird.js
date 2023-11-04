class Player {
    constructor(x, y, baseImg, flyImg, vel, grav) {
        this.x = x;
        this.y = y;
        this.baseImg = baseImg;
        this.flyImg = flyImg;
        this.vel = vel;
        this.grav = grav;
    }

    draw() {
        image(this.baseImg, this.x, this.y);
      }
}
