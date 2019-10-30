export default class Snake {
  constructor(gameWidth, gameHeight, position) {
    this.width = 20;
    this.height = 20;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.speed = 20;
    this.position = position;
    this.state = "DOWN"; //['UP', 'DOWN', 'LEFT', 'RIGHT'];
    this.mode = "THROUGH";
  }
  moveDown() {
    this.state = "DOWN";
  }
  moveUp() {
    this.state = "UP";
  }
  moveLeft() {
    this.state = "LEFT";
  }
  moveRight() {
    this.state = "RIGHT";
  }
  update(interval) {
    switch (this.state) {
      case "DOWN":
        this.position.y += this.height;
        break;
      case "UP":
        this.position.y -= this.speed;
        break;
      case "LEFT":
        this.position.x -= this.speed;
        break;
      case "RIGHT":
        this.position.x += this.speed;
        break;
      default:
        break;
    }
    //collision detection

    if (this.mode === "THROUGH") {
      if (this.position.x < 0) {
        this.position.x = this.gameWidth - this.width;
      }
      if (this.position.x + this.width > this.gameWidth) {
        this.position.x = 0;
      }
      if (this.position.y < 0) {
        this.position.y = this.gameHeight;
      }
      if (this.position.y > this.gameHeight) {
        this.position.y = 0;
      }
    } else if (this.mode === "BREAK") {
      if (
        this.position.x < 0 ||
        this.position.x + this.width > this.gameWidth ||
        this.position.y < 0 ||
        this.position.y > this.gameHeight
      ) {
        alert("GAME OVER!!!");
        clearInterval(interval);
        document.location.reload();
      }
    }
  }
  draw(ctx) {
    ctx.fillStyle = "#6065ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fill();
  }
}
