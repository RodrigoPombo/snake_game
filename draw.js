const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
//console.log(canvas)
const scale = 10;
const rows = canvas.height /scale;
const columns = canvas.height /scale;
var snake;
var circle;
var dif = 1;
var interval = 1000;

function setupdif()
{
        this.dif = this.dif + 1;
        //console.log("dif atual: " + this.dif);
}

var snake = new Snake();
var rand_point = new rand_point();
//var player = new Player();
function setup(){
    //this.dif = this.dif - 1;

    interval = window.setInterval(()=>{

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.snake.draw(this.dif);
        this.snake.update();
        this.rand_point.draw(); 

        if(((this.snake.x+30) >= this.rand_point.x_rand) && (this.snake.x <= this.rand_point.x_rand) && (((this.snake.y+30) >= this.rand_point.y_rand) && (this.snake.y) <= this.rand_point.y_rand))
        { 
            //console.log("!!cheguei aqui!!");
            this.rand_point.update_rand();
            snake.size = snake.size + 1;
            //this.rand_point.draw(snake.size);
            //console.log("tamanho da cobra: " + snake.size);
            setupdif();
        }

    //ctx.font = "30px Arial";
    //ctx.fillText("your score atual: " + player.score, 740, 50);
    //ctx.fillText("your dif atual: " + (50-dif), 740, 100);

    },90)
};

setup();

window.addEventListener("keydown",(evt) => {
const direction = evt.key.replace("Arrow","");
snake.changeDir(direction);
})

