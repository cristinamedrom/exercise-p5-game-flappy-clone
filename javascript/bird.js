let spacePressed = false;
const SPACE = 32;

class Player {
    constructor(x, y, baseImg, flyImg, vel, grav) {
        this.x = x;
        this.y = y;
        this.baseImg = baseImg;
        this.flyImg = flyImg;
        this.vel = vel;
        this.grav = grav;
    }

    jump() {
        this.y -= 20;
    }

    update() {
        if (keyIsDown(SPACE) && !spacePressed) {
            this.jump();
            spacePressed = true;
        } else if (!keyIsDown(SPACE)) {
            spacePressed = false;
        }

        this.y += this.grav;
        this.y = constrain(this.y, 0, height);
    }  

    draw() {
        image(spacePressed ? this.flyImg : this.baseImg, this.x, this.y);
    }
}
