class Bird {
    constructor(){
        this.x = 64;
        this.y = height/2;
        this.gravity = .4;
        this.velocity = 0;
        this.lift = 6;
    }

     show() {
        fill(255);
        ellipse(this.x, this.y, 32, 32)    
    }

    update(){

        this.velocity += this.gravity;
        this.y += this.velocity;

        if(this.y > height - 18){
            this.y = height - 18;
            this.velocity = 0;
        }
    }

    up(){
        this.velocity = -this.lift;
    }
}