export class GameController {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentPlayerTurn;
    this.opponentPlayer;
    this.gameOver = false;
    this.winner;
  }

  startGame() {
    this.currentPlayerTurn = this.playerOne;
    this.opponentPlayer = this.playerTwo;
    this.gameOver = false;
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

  _getRandomIntInclusive() {
    let min = Math.ceil(0);
    let max = Math.floor(9);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  handleCPUAttack() {
    while (true) {
      try {
        let x = this._getRandomIntInclusive();
        let y = this._getRandomIntInclusive();
        const result = this.playerOne.gameBoard.processAttack(x, y);
        if (result === "end") {
          this.gameOver = true;
          this.winner = this.playerTwo;
        }
        return result;
      } catch (error) {
        console.error(error, error.message);
        continue;
      }
    }
  }

  handlePlayerAttack(x, y) {
    try {
      const result = this.playerTwo.gameBoard.processAttack(x, y);
      if (result === "end") {
        this.gameOver = true;
        this.winner = this.playerOne;
      }
      return result;
    } catch (error) {
      console.error(error, error.message);
    }
  }

  getCurrentGameState() {
    let boardDataForlayer = this.playerOne.gameBoard.getBoardDataForPlayer();
    return {
      "Player Board": {
        hits: [...this.playerOne.gameBoard.hitCoordinates],
        misses: [...this.playerOne.gameBoard.missedCoordinates],
        ships: boardDataForlayer,
      },
      "CPU Board": {
        hits: [...this.playerTwo.gameBoard.hitCoordinates],
        misses: [...this.playerTwo.gameBoard.missedCoordinates],
        ships: this.playerTwo.gameBoard.shipsRemaining,
      },
      currentTurn: this.currentPlayerTurn.name,
      gameOver: this.gameOver,
      winner: this.winner,
    };
  }
}
