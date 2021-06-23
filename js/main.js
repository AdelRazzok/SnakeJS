const MAIN_COLOR = '#7E825D';
const BOARD_BACKGROUND = '#FFFFFF';
const BOARD_BORDER = '#000000';
const SNAKE_COLOR = '#91AB1B';
const SNAKE_BORDER = '#667813';

// Récupération du boutton Jouer
const playBtn = document.getElementById('playBtn');

// Récupération du Canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

var tail = [];

class Snake {
    constructor() {
        this.posX = 10;
        this.posY = 10;
        this.dx = 10;
        this.dy = 0;
        this.width = 10;
        this.height = 10;
        this.size = 5;
    }

    draw() {
        ctx.fillStyle = SNAKE_COLOR;
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
        ctx.fillStyle = SNAKE_BORDER;
        ctx.strokeRect(this.posX, this.posY, this.width, this.height);
    }

    move() {
        // Nettoyage du terrain de jeu
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Déplacement du serpent
        this.posX += this.dx;
        this.posY += this.dy;

        this.draw();

        tail.push({x: snake.posX, y: snake.posY});
        while (tail.length > snake.size) {
            tail.shift();
        }

        for (let i=0; i < tail.length; i++) {
            ctx.fillStyle = SNAKE_COLOR;
            ctx.fillRect(tail[i].x, tail[i].y, snake.width, snake.height);
            ctx.fillStyle = SNAKE_BORDER;
            ctx.strokeRect(tail[i].x, tail[i].y, snake.width, snake.height);
        }
    }

    changeDirection(event) {
        if (event.code == 'ArrowRight' && this.dx != -10) {
            this.dx = 10;
            this.dy = 0;
        }
        if (event.code == 'ArrowDown' && this.dy != -10) {
            this.dx = 0;
            this.dy = 10;
        }
        if (event.code == 'ArrowLeft' && this.dx != 10) {
            this.dx = -10;
            this.dy = 0;
        }
        if (event.code == 'ArrowUp' && this.dy != 10) {
            this.dx = 0;
            this.dy = -10;
        }
        if (event.code == 'Space') {
            this.dx = 0;
            this.dy = 0;
        }
    }
}

const snake = new Snake();

playBtn.addEventListener('click', () => {
    setInterval(() => {
        snake.move();
    }, 200);
});

window.addEventListener('keydown', function(event){
    snake.changeDirection(event);
})