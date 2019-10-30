import Snake from "./snake";
import HandleInput from "./input";
import Mouse from "./mouse";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 400;
const GAME_HEIGHT = 400;
let tails = [];

let snake = new Snake(GAME_WIDTH, GAME_HEIGHT, {
  x: GAME_WIDTH / 2,
  y: GAME_HEIGHT / 2
});
let mouse = new Mouse(GAME_WIDTH, GAME_HEIGHT);
tails.unshift(snake);
new HandleInput(snake);
function gameLoop(interval) {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ctx.beginPath();
  ctx.closePath();
  // snake.draw(ctx);

  //detect snake kill itself
  for (let i = 1; i < tails.length; i++) {
    if (
      tails[0].position.x === tails[i].position.x &&
      tails[0].position.y === tails[i].position.y
    ) {
      if (snake.mode === "BREAK") {
        alert("GAME OVER!!");
        clearInterval(interval);
        document.location.reload();
      }
    }
  }

  mouse.update(tails);

  mouse.draw(ctx);

  for (let i = tails.length - 1; i > 0; i--) {
    tails[i].position.x = tails[i - 1].position.x;
    tails[i].position.y = tails[i - 1].position.y;
    tails[i - 1].position.x = snake.position.x;
    tails[i - 1].position.y = snake.position.y;
  }
  snake.update(interval);
  tails.forEach(tail => tail.draw(ctx));
}

const interval = setInterval(() => gameLoop(interval), 100);
