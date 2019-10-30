import Snake from "./snake";
export default class Mouse {
  constructor(gameWidth, gameHeight) {
    this.width = 20;
    this.height = 20;
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.position = {
      x: 40,
      y: 40
    };
    // this.dead = false;
  }
  update(snakes) {
    //mouse
    const snake = snakes[0];
    let topOfMouse = this.position.y;
    let bottomOfMouse = this.position.y + this.height;
    let leftOfMouse = this.position.x;
    let rightOfMouse = this.position.x + this.width;
    //snake
    let topOfSnake = snake.position.y;
    let bottomOfSnake = snake.position.y + snake.height;
    let leftOfSnake = snake.position.x;
    let rightOfSnake = snake.position.x + snake.width;
    if (
      topOfSnake <= bottomOfMouse &&
      leftOfSnake <= rightOfMouse &&
      rightOfSnake >= leftOfMouse &&
      bottomOfSnake >= topOfMouse
    ) {
      snakes.push(
        new Snake(this.gameWidth, this.gameHeight, {
          x: snake.position.x,
          y: snake.position.y
        })
      );
      this.position.x = Math.random() * (this.gameWidth - this.width);
      this.position.y = Math.random() * (this.gameHeight - this.height);
    }
  }
  draw(ctx) {
    ctx.fillStyle = "#000";
    ctx.padding = ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    ctx.fill();
  }
}
