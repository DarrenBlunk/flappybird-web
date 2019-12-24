class Pipe{
    constructor(enabled){
        this.x = width;
        this.w = 28;
        this.speed = 1;
        this.space = 130;
        this.top = random(this.space*1.5, height-(this.space * 1.5));
        this.bottom = height - (this.top +(this.space/2));
        this.highlight = false;
    }
    
    show(){
        fill(255);
        if(this.highlight){
            fill(255,0,0);
        }
        rect(this.x,0,this.w,this.top);
        rect(this.x,this.top+this.space,this.w,this.bottom);
    }

    update(){
        this.x -= this.speed;
    }

    offScreen(){
        return this.x < -this.w;
    }

    hits(bird){
        this.highlight = false;
       if((bird.y < this.top || bird.y > this.top+this.space) && (bird.x+16 > this.x  && bird.x-16 < this.x + this.w))  {
           this.highlight = true;
           return true;
        }
    }
}