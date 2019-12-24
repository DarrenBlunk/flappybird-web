let bird;
let pipes = [];
function setup() {
    createCanvas(400, 700);
    bird = new Bird();
    pipes.push(new Pipe());
}

setInterval(()=>{
    pipes.push(new Pipe());
},3000);

function draw() {
    background(0);
  

    for(let i=pipes.length-1;i>0;i--){
        pipes[i].update();
        pipes[i].show();


        if(pipes[i].hits(bird)){
           // console.log('HIT!');
        }

        if(pipes[i].offScreen()){
            pipes.splice(i,1);
        }
    }


    bird.update();
    bird.show();

    
}

function keyPressed() {
    if(key == ' '){
        bird.up();
    }
}

function touchStarted(event) {
    console.log(event);
    
    bird.up();
}

