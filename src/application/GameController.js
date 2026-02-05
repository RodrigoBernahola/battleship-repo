import { Ship } from "../domain/Ship.js";
// import { Gameboard } from "../domain/Gameboard.js";
// import { Player } from "../domain/Player.js";

export class GameController {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentPlayerTurn;
    this.opponentPlayer;
    this.gameOver = false;
  }

  startGame() {
    this.currentPlayerTurn = this.playerOne;
    this.opponentPlayer = this.playerTwo;
    this.gameOver = false;
  }

  placeShip(player, ship, x, y, direction) {
    const result = player.gameBoard.placeShip(x, y, ship, direction);
    if (!result) {
      throw new Error("The given coordinates are not accesible");
    }

    return true;
  }

  switchTurns() {
    if (this.currentPlayerTurn === this.playerOne) {
      this.currentPlayerTurn = this.playerTwo;
      this.opponentPlayer = this.playerOne;
    } else {
      this.currentPlayerTurn = this.playerOne;
      this.opponentPlayer = this.playerTwo;
    }
  }

  handleAttack(x, y) {
    try {
      const result = this.opponentPlayer.gameBoard.processAttack(x, y);
      if (result) {
        this.gameOver = true;
      } else {
        this.switchTurns();
      }
    } catch (error) {
      console.error(error, error.message);
    }
  }
}
