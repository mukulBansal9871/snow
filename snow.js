class Snow{
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0.5,
            isStatic:false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r/2, options);
        this.image=loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

};