export default class HandleInput {
  constructor(snake) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          snake.moveLeft();
          break;
        case 39:
          snake.moveRight();
          break;
        case 38:
          snake.moveUp();
          break;
        case 40:
          snake.moveDown();
          break;
        case 49:
          snake.mode = "THROUGH";
          break;
        case 50:
          snake.mode = "BREAK";
          snake.udpate();
          break;
        default:
          break;
      }
    });
  }
}
